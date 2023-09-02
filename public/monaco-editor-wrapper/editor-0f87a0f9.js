import { D as u, E as v, L as o, lJ as e, lm as p, gl as l, _ as g, a as f, b as C, N as S, eT as _, go as D, k as s, cP as m, jA as F, ls as T } from "./index-4c11c534.js";
import { w as x, m as b } from "./editor-eb257ee7.js";
import "./simpleIconLabel-74e021f5.js";
let r = class extends u {
  constructor(d, n) {
    super(), this._onDidActiveEditorChange = this._register(new v()), this.onDidActiveEditorChange = this._onDidActiveEditorChange.event, this.onDidVisibleEditorsChange = o.None, this.onDidEditorsChange = o.None, this.onDidCloseEditor = o.None, this.visibleEditorPanes = [], this.visibleEditors = [], this.visibleTextEditorControls = [], this.editors = [], this.count = 0, this.getEditors = () => [], this.openEditors = e, this.replaceEditors = e, this.isOpened = () => !1, this.isVisible = () => !1, this.save = async () => ({ success: !0, editors: [] }), this.saveAll = async () => ({ success: !0, editors: [] }), this.revert = e, this.revertAll = e, this.closeEditor = e, this.closeEditors = e, setTimeout(() => {
      const t = p.get(l);
      this.activeTextEditorControl = t.getFocusedCodeEditor() ?? void 0;
      const a = (c) => {
        const E = () => {
          const h = t.getFocusedCodeEditor();
          h !== this.activeTextEditorControl && (this.activeTextEditorControl = h ?? void 0, this._onDidActiveEditorChange.fire());
        };
        c.onDidFocusEditorText(E), c.onDidFocusEditorWidget(E);
      };
      this._register(t.onCodeEditorAdd(a)), t.listCodeEditors().forEach(a);
    }), this.openEditor = x(n, this.openEditor.bind(this), d);
  }
  async openEditor(d, n, t) {
  }
  findEditors() {
    return [];
  }
};
r = g([
  f(1, C)
], r);
S.as(_.EditorFactory).registerFileEditorFactory({
  typeId: D,
  createFileEditor: e,
  isFileEditor: (i) => !1
});
function N(i) {
  return {
    [l.toString()]: new s(b, void 0, !0),
    [m.toString()]: new s(r, [i], !0),
    [F.toString()]: new s(T, [], !1)
  };
}
export {
  r as SimpleEditorService,
  N as default
};
