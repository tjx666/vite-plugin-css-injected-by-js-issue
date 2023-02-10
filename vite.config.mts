import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import vitePluginVue3 from '@vitejs/plugin-vue';
import vitePluginVue2 from '@vitejs/plugin-vue2';
import vitePluginVue2Jsx from '@vitejs/plugin-vue2-jsx';
import vitePluginImp from '@yutengjing/vite-plugin-imp';
import _glob from 'glob';
import { mergeConfig, defineConfig } from 'vite';
import vitePluginCssInjectedByJs from 'vite-plugin-css-injected-by-js';
import vitePluginVueTypeImports from 'vite-plugin-vue-type-imports';

// import dts from 'vite-plugin-dts';

const glob = promisify(_glob);

/**
 * @typedef {import('vite').UserConfigExport} UserConfigExport
 * @typedef {import('vite').UserConfig} UserConfig
 */

async function getExternal() {
    const packagePath = path.resolve(process.cwd(), 'package.json');
    const pkg = JSON.parse(await fs.readFile(packagePath, { encoding: 'utf8' }));
    return []
        .concat(Object.keys(pkg.dependencies || []), Object.keys(pkg.peerDependencies || []))
        .map((dependency) => new RegExp(`^${dependency}`));
}

function getCommonPlugins(options) {
    return [
        rollupPluginNodeResolve({
            extensions: ['.js', '.ts', '.mjs', '.tsx', '.json', '.vue'],
        }),
        options.vueVersion === '3' ? vitePluginVue3() : [vitePluginVue2(), vitePluginVue2Jsx()],
        vitePluginImp({
            libList: [
                {
                    libName: 'lodash',
                    libDirectory: '',
                    camel2DashComponentName: false,
                },
                {
                    libName: '@gaoding/gd-antd',
                    libDirectory: 'es',
                    style: (name) => `@gaoding/gd-antd/es/${name}/style/css.js`,
                },
                {
                    libName: '@gaoding/gdui',
                    libDirectory: 'lib',
                },
                {
                    libName: '@gaoding/gd-materials',
                    libDirectory: 'lib',
                },
                {
                    libName: '@gaoding/gd-components',
                    libDirectory: 'lib',
                    camel2DashComponentName: false,
                },
            ],
        }),
        vitePluginVueTypeImports(),
        vitePluginCssInjectedByJs({}),
    ];
}

/**
 * @param { UserConfigExport } customConfig
 */
function parseCustomConfig(configEnv, customConfig) {
    if (typeof customConfig === 'function') {
        const configFn = customConfig;
        return configFn(configEnv);
    }
    return customConfig;
}

/**
 * 构建单文件 lib
 * @param { UserConfigExport } customConfig
 */
export function getSplitConfig(customConfig, options = {}) {
    return defineConfig(async (configEnv) => {
        customConfig = await parseCustomConfig(configEnv, customConfig);

        const cwd = process.cwd();
        const files = await glob(path.join(cwd, 'src/**/!(*.d).{ts,vue,js}'));
        const entries = {};
        files.forEach((file) => {
            entries[file] = file;
        });

        /** @type {UserConfig} */
        const defaultConfig = {
            build: {
                cssTarget: 'chrome61',
                target: 'es2015',
                minify: false,
                sourcemap: false,
                cssCodeSplit: false,
                lib: {
                    entry: entries,
                    formats: ['es', 'cjs'],
                    fileName: (format, entryName) => {
                        const filename = path.basename(entryName).split('.').at(0);
                        const dirPath = path.dirname(entryName);
                        const destPath = path.relative('src', dirPath);
                        return path.join(destPath, `${filename}.${format === 'es' ? 'mjs' : 'js'}`);
                    },
                },
                rollupOptions: {
                    // make sure to externalize deps that shouldn't be bundled
                    // into your library
                    external: await getExternal(),
                },
            },
            plugins: [
                ...getCommonPlugins(options),
                // dts({
                //     entryRoot: './src',
                // }),
            ],
        };

        return mergeConfig(defaultConfig, customConfig);
    });
}

const config = getSplitConfig({});
export default config;
