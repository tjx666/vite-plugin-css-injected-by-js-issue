import { multiple } from "./multiple.mjs";
function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result = multiple(result, a);
  }
  return result;
}
export {
  pow as default
};
