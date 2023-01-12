var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import Vue from "vue";
import Loading from "./loading.mjs";
import "../loading-icon-52ac252a.mjs";
class LoadingService {
  constructor() {
    __publicField(this, "$loading");
    __publicField(this, "propsData", {
      visible: false,
      lock: false,
      content: "加载中...",
      cancelText: ""
    });
    __publicField(this, "hooks", {
      cancel() {
      }
    });
    this._create();
  }
  _create() {
    const el = document.createElement("div");
    document.body.appendChild(el);
    const _Loading = Vue.extend(Loading);
    const loading2 = new _Loading({
      el,
      propsData: this.propsData
    });
    loading2.$on("update:visible", (v) => {
      this.propsData.visible = v;
      this.$loading.visible = v;
    });
    loading2.$on("cancel", () => {
      this.hooks.cancel();
    });
    this.$loading = loading2;
  }
  show(propsData, hooks) {
    this.propsData = Object.assign(this.propsData, propsData);
    this.hooks = Object.assign(this.hooks, hooks);
    Object.assign(this.$loading, this.propsData, { visible: true });
  }
  hide() {
    this.$loading.visible = false;
  }
  destroy() {
    var _a, _b;
    if (this.$loading) {
      (_b = (_a = this.$loading.$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(this.$loading.$el);
      this.$loading.$destroy();
    }
  }
}
const loading = new LoadingService();
export {
  LoadingService,
  loading
};
