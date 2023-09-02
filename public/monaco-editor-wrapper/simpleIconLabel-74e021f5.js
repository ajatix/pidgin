import { wi as e, jg as s } from "./index-4c11c534.js";
class n {
  constructor(t) {
    this._container = t;
  }
  set text(t) {
    e(this._container, ...s(t ?? ""));
  }
  set title(t) {
    this._container.title = t;
  }
}
export {
  n as S
};
