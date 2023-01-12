"use strict";
const _Users_yutengjing_code_vitePluginCssInjectedByJsIssue_src_multiple_js = require("./multiple.js");
function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result = _Users_yutengjing_code_vitePluginCssInjectedByJsIssue_src_multiple_js.multiple(result, a);
  }
  return result;
}
module.exports = pow;
