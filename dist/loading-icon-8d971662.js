"use strict";
const loadingIcon_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main = {
  props: {
    svgClass: {
      type: String,
      default: ""
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("svg", { staticClass: "du-loading-icon", attrs: { "xmlns": "http://www.w3.org/2000/svg", "width": "1em", "height": "1em", "fill": "#fff", "viewBox": "0 0 14.95 14.82" } }, [_c("path", { staticClass: "du-loading-icon__0", attrs: { "d": "M7.48 0a.74.74 0 0 1 .73.74v2.94a.74.74 0 0 1-.73.74.74.74 0 0 1-.74-.74V.74A.74.74 0 0 1 7.48 0z" } }), _c("path", { staticClass: "du-loading-icon__1", attrs: { "d": "M11.56 1.2a.74.74 0 0 1 .22 1l-1.6 2.47a.74.74 0 0 1-1 .22.74.74 0 0 1-.22-1l1.61-2.47a.73.73 0 0 1 .99-.22z" } }), _c("path", { staticClass: "du-loading-icon__2", attrs: { "d": "M14.33 4.39a.74.74 0 0 1-.35 1l-2.67 1.23a.74.74 0 0 1-1-.36.74.74 0 0 1 .35-1L13.35 4a.74.74 0 0 1 .98.39z" } }), _c("path", { staticClass: "du-loading-icon__3", attrs: { "d": "M14.94 8.61a.74.74 0 0 1-.83.63l-2.91-.41a.74.74 0 0 1-.63-.83.73.73 0 0 1 .83-.63l2.92.41a.73.73 0 0 1 .62.83z" } }), _c("path", { staticClass: "du-loading-icon__4", attrs: { "d": "M13.18 12.49a.74.74 0 0 1-1 .07l-2.27-1.93a.75.75 0 0 1-.07-1 .73.73 0 0 1 1-.07l2.22 1.93a.74.74 0 0 1 .12 1z" } }), _c("path", { staticClass: "du-loading-icon__5", attrs: { "d": "M9.59 14.79a.74.74 0 0 1-.91-.51l-.81-2.83a.73.73 0 0 1 .5-.91.74.74 0 0 1 .91.51l.81 2.83a.74.74 0 0 1-.5.91z" } }), _c("path", { staticClass: "du-loading-icon__6", attrs: { "d": "M5.36 14.79a.74.74 0 0 1-.5-.91l.81-2.83a.74.74 0 0 1 .91-.51.74.74 0 0 1 .51.91l-.82 2.83a.74.74 0 0 1-.91.51z" } }), _c("path", { staticClass: "du-loading-icon__7", attrs: { "d": "M1.78 12.49a.73.73 0 0 1 .07-1l2.22-1.97a.73.73 0 0 1 1 .07.74.74 0 0 1-.07 1l-2.19 1.97a.73.73 0 0 1-1.03-.07z" } }), _c("path", { staticClass: "du-loading-icon__8", attrs: { "d": "M0 8.61a.73.73 0 0 1 .62-.83l2.92-.41a.73.73 0 0 1 .84.63.73.73 0 0 1-.63.83l-2.91.41A.74.74 0 0 1 0 8.61z" } }), _c("path", { staticClass: "du-loading-icon__9", attrs: { "d": "M.62 4.39A.74.74 0 0 1 1.6 4l2.67 1.28a.73.73 0 0 1 .35 1 .74.74 0 0 1-1 .36L1 5.37a.74.74 0 0 1-.38-.98z" } }), _c("path", { staticClass: "du-loading-icon__10", attrs: { "d": "M3.39 1.2a.74.74 0 0 1 1 .22L6 3.89a.74.74 0 0 1-.22 1 .73.73 0 0 1-1-.22L3.17 2.22a.74.74 0 0 1 .22-1.02z" } })]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const LoadingIcon = __component__.exports;
exports.LoadingIcon = LoadingIcon;
exports.normalizeComponent = normalizeComponent;
