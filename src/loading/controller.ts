import Vue from 'vue';

import Loading from './loading.vue';

interface Props {
    visible: boolean;
    lock: boolean;
    content: string;
    cancelText: string;
}

interface Hooks {
    cancel: () => void;
}

export class LoadingService {
    $loading: any;
    propsData: Props = {
        visible: false,
        lock: false,
        content: '加载中...',
        cancelText: '',
    };

    hooks: Hooks = {
        cancel() {},
    };

    constructor() {
        this._create();
    }

    _create() {
        const el = document.createElement('div');
        document.body.appendChild(el);

        // @ts-ignore
        const _Loading = Vue.extend(Loading);
        const loading = new _Loading({
            el,
            propsData: this.propsData,
        });

        loading.$on('update:visible', (v: boolean) => {
            this.propsData.visible = v;
            this.$loading.visible = v;
        });
        loading.$on('cancel', () => {
            this.hooks.cancel();
        });

        this.$loading = loading;
    }

    show(propsData: Partial<Props> | null, hooks?: Hooks) {
        this.propsData = Object.assign(this.propsData, propsData);
        this.hooks = Object.assign(this.hooks, hooks);
        Object.assign(this.$loading, this.propsData, { visible: true });
    }

    hide() {
        this.$loading.visible = false;
    }

    destroy() {
        if (this.$loading) {
            this.$loading.$el?.parentNode?.removeChild(this.$loading.$el);
            this.$loading.$destroy();
        }
    }
}

export const loading = new LoadingService();
