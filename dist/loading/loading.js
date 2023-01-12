"use strict";
const Vue = require("vue");
const _Users_yutengjing_code_vitePluginCssInjectedByJsIssue_src_loading_loadingIcon_vue = require("../loading-icon-8d971662.js");
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "loading",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    lock: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: "加载中"
    },
    cancelText: {
      type: String,
      default: ""
    }
  },
  emits: ["update:visible", "cancel"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const innerVisible = Vue.computed({
      get() {
        return props.visible;
      },
      set(v) {
        emits("update:visible", v);
      }
    });
    function cancel() {
      emits("cancel");
      innerVisible.value = false;
    }
    return { __sfc: true, props, emits, innerVisible, cancel, LoadingIcon: _Users_yutengjing_code_vitePluginCssInjectedByJsIssue_src_loading_loadingIcon_vue.LoadingIcon };
  }
});
const loading_vue_vue_type_style_index_0_lang = "";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _setup.innerVisible ? _c("div", [_vm.lock ? _c("div", { staticClass: "du-loading-lock" }) : _vm._e(), _c("div", { ref: "loading", staticClass: "du-loading" }, [_c("div", { staticClass: "du-loading-loader" }, [_c(_setup.LoadingIcon)], 1), _vm.content ? _c("div", { staticClass: "du-loading-content" }, [_c("span", [_vm._v(_vm._s(_vm.content))]), _vm.cancelText ? _c("div", [_c("button", { staticClass: "du-loading-button", on: { "click": _setup.cancel } }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e()]) : _vm._e()])]) : _vm._e();
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ _Users_yutengjing_code_vitePluginCssInjectedByJsIssue_src_loading_loadingIcon_vue.normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Loading = __component__.exports;
module.exports = Loading;