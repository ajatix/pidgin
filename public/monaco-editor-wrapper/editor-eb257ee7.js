import { ln as mn, o as P, w as Ct, bc as fn, L as U, t as st, V as bn, a0 as Le, a2 as De, H as et, $ as ne, G as Oi, b6 as Vt, c4 as go, x as tt, lK as po, lL as En, au as It, lM as vn, B as i, _ as A, a as h, ae as ee, aM as fi, aL as D, ad as bi, ab as mo, bW as Ei, e as Mt, aP as Ve, E as Re, ki as Bt, b3 as Ut, a5 as Sn, ba as yn, lN as wn, aR as Gi, du as Cn, bi as f, c3 as y, aj as k, lO as Ee, ak as w, aG as s, ac as x, ai as r, aK as Ue, bM as c, aE as g, aB as fo, n as vi, lP as dt, lQ as In, lF as bo, lR as Te, af as Mn, fV as An, lS as Eo, bx as Si, ag as yi, lT as Ht, fK as vo, bN as kn, bf as Ln, bP as Dn, lU as Tn, lV as xn, dP as Pn, c_ as Rn, e3 as Fi, lW as _n, eb as Bn, lX as On, lY as Gn, s as Fn, m as Q, aI as He, aa as We, j8 as Ce, lZ as Nn, l_ as Vn, bC as Un, eV as Ot, eX as Ni, eW as Wt, eU as Hn, g as wi, bF as Wn, l$ as zn, iE as qn, gu as So, m0 as zt, m1 as Kn, d8 as yo, cP as de, dy as wo, aH as jn, D as le, m2 as $n, m3 as q, bB as At, bE as Co, f as Ci, jl as Ii, m4 as Jn, m5 as Qn, jr as Yn, bU as Xn, je as Z, dq as lt, dr as ut, z as ae, S as ht, m6 as Vi, fb as Ui, cK as Hi, dQ as Zn, m7 as ea, U as ta, m8 as Wi, m9 as ia, jt as ze, dS as Mi, bz as Io, ma as oa, mb as na, mc as aa, md as ra, me as sa, mf as ca, mg as da, mh as Mo, hr as ge, mi as qt, mj as Kt, mk as la, kW as it, hk as Ai, ml as ua, at as _e, mm as ha, mn as zi, hF as oe, hj as ga, dx as pa, mo as j, mp as ma, fg as fa, cS as ba, bv as Ea, jz as va, aX as Sa, d as ya, j4 as wa, an as Ao, eC as Ca, jA as Ia, lw as Ma, jB as Aa, mq as ka, k4 as Gt, N as H, h$ as La, mr as ot, gs as Da, av as Ta, dD as xa, ah as Pa, a9 as Ra, bV as _a, jx as Ba, ms as qe, hy as Oa, mt as Ga, mu as Fa, eT as kt, mv as qi, k as Be, mw as Na, mx as Ki, gx as ko, hP as Ke, hx as Va, my as ji, mz as Ua, bw as Ha, mA as $i, mB as Lo, mC as Ji, mD as Do, mE as Qi, mF as To, mG as Wa, mH as za, mI as qa, mJ as Ka, mK as ja, mL as $a, mM as Ja, mN as Qa, mO as Ya, mP as Xa, mQ as Za, mR as er, mS as xo, mT as Po, mU as tr, mV as ir, mW as or, mX as nr, mY as ar, mZ as rr, m_ as ki, m$ as sr, n0 as cr, n1 as dr, n2 as lr, n3 as ur, n4 as hr, n5 as gr, n6 as pr, n7 as mr, n8 as fr, n9 as br, na as Er, nb as vr, nc as Sr, nd as yr, ne as wr, nf as Cr, ng as Ir, nh as Mr, ni as Ar, nj as kr, nk as Lr, nl as Dr, nm as Tr, nn as xr, no as Pr, np as Rr, nq as _r, nr as Br, ns as Or, nt as Gr, nu as Fr, nv as Nr, nw as Vr, nx as Ur, ny as Hr, nz as Wr, nA as zr, nB as qr, nC as Kr, nD as jr, nE as $r, nF as Jr, nG as Qr, nH as Yr, nI as Xr, nJ as Zr, nK as es, nL as ts, nM as is, nN as os, nO as ns, nP as as, nQ as rs, nR as ss, nS as cs, nT as ds, nU as ls, nV as us, nW as hs, nX as gs, nY as Ro, nZ as _o, n_ as Bo, n$ as Oo, o0 as Go, o1 as Fo, o2 as No, o3 as Vo, o4 as ps, o5 as ms, o6 as fs, o7 as bs, o8 as Es, o9 as vs, oa as Ss, by as Uo, ob as ys, ex as Ho, dO as Lt, oc as Wo, od as Dt, oe as je, of as Tt, og as $e, oh as zo, oi as R, eZ as Ie, gY as qo, f7 as ws, oj as Ko, dJ as jo, ok as Je, gZ as Li, g_ as Qe, gR as $o, dL as Jo, ol as Qo, dH as Cs, om as Yo, dK as Me, on as xt, oo as Xo, dM as Zo, op as en, dN as Ye, oq as Is, or as Ms, os as As, ot as ks, f6 as Pt, ou as Ls, ov as Ds, ow as Ae, ox as tn, oy as Ts, oz as xs, oA as Ps, oB as Rs, oC as _s, hT as nt, hU as Yi, jU as Xi, jF as on, dj as nn, dv as Bs, fw as Zi, jV as Os, gw as Gs, lm as Fs, gl as Ns, oD as Vs, lJ as ue, eQ as eo, eR as to } from "./index-4c11c534.js";
import { S as Us } from "./simpleIconLabel-74e021f5.js";
class Di extends Ve {
  constructor(e) {
    var t;
    super(e.id, e.name, (t = e.classNames) == null ? void 0 : t.join(" "), !0), this._activity = e, this._onDidChangeActivity = this._register(new Re()), this.onDidChangeActivity = this._onDidChangeActivity.event, this._onDidChangeBadge = this._register(new Re()), this.onDidChangeBadge = this._onDidChangeBadge.event;
  }
  get activity() {
    return this._activity;
  }
  set activity(e) {
    this._label = e.name, this._activity = e, this._onDidChangeActivity.fire(this);
  }
  activate() {
    this.checked || this._setChecked(!0);
  }
  deactivate() {
    this.checked && this._setChecked(!1);
  }
  getBadge() {
    return this.badge;
  }
  getClass() {
    return this.clazz;
  }
  setBadge(e, t) {
    this.badge = e, this.clazz = t, this._onDidChangeBadge.fire(this);
  }
  dispose() {
    this._onDidChangeActivity.dispose(), this._onDidChangeBadge.dispose(), super.dispose();
  }
}
var ce;
let gt = (ce = class extends mn {
  constructor(e, t, o, n, a, d, u) {
    super(null, e, t), this.badgesEnabled = o, this.themeService = n, this.hoverService = a, this.configurationService = d, this.keybindingService = u, this.badgeDisposable = this._register(new P()), this.hoverDisposables = this._register(new Ct()), this.showHoverScheduler = new fn(() => this.showHover(), 0), this.options = t, this._register(this.themeService.onDidColorThemeChange(this.onThemeChange, this)), this._register(e.onDidChangeActivity(this.updateActivity, this)), this._register(U.filter(u.onDidUpdateKeybindings, () => this.keybindingLabel !== this.computeKeybindingLabel())(() => this.updateTitle())), this._register(e.onDidChangeBadge(this.updateBadge, this)), this._register(st(() => this.showHoverScheduler.cancel()));
  }
  get activity() {
    return this._action.activity;
  }
  updateStyles() {
    const e = this.themeService.getColorTheme(), t = this.options.colors(e);
    if (this.label) {
      if (this.options.icon) {
        const o = this._action.checked ? t.activeForegroundColor : t.inactiveForegroundColor;
        this.activity.iconUrl ? (this.label.style.backgroundColor = o ? o.toString() : "", this.label.style.color = "") : (this.label.style.color = o ? o.toString() : "", this.label.style.backgroundColor = "");
      } else {
        const o = this._action.checked ? t.activeForegroundColor : t.inactiveForegroundColor, n = this._action.checked ? t.activeBorderBottomColor : null;
        this.label.style.color = o ? o.toString() : "", this.label.style.borderBottomColor = n ? n.toString() : "";
      }
      this.container.style.setProperty("--insert-border-color", t.dragAndDropBorder ? t.dragAndDropBorder.toString() : "");
    }
    if (this.badgeContent) {
      const o = t.badgeForeground, n = t.badgeBackground, a = e.getColor(bn);
      this.badgeContent.style.color = o ? o.toString() : "", this.badgeContent.style.backgroundColor = n ? n.toString() : "", this.badgeContent.style.borderStyle = a ? "solid" : "", this.badgeContent.style.borderWidth = a ? "1px" : "", this.badgeContent.style.borderColor = a ? a.toString() : "";
    }
  }
  render(e) {
    super.render(e), this.container = e, this.options.icon && this.container.classList.add("icon"), this.options.hasPopup ? (this.container.setAttribute("role", "button"), this.container.setAttribute("aria-haspopup", "true")) : this.container.setAttribute("role", "tab"), this._register(Le(this.container, De.MOUSE_DOWN, () => {
      this.container.classList.add("clicked");
    })), this._register(Le(this.container, De.MOUSE_UP, () => {
      this.mouseUpTimeout && clearTimeout(this.mouseUpTimeout), this.mouseUpTimeout = setTimeout(() => {
        this.container.classList.remove("clicked");
      }, 800);
    })), this.label = et(e, ne("a")), this.badge = et(e, ne(".badge")), this.badgeContent = et(this.badge, ne(".badge-content")), et(e, ne(".active-item-indicator")), Oi(this.badge), this.updateActivity(), this.updateStyles(), this.updateHover();
  }
  onThemeChange(e) {
    this.updateStyles();
  }
  updateActivity() {
    this.updateLabel(), this.updateTitle(), this.updateBadge(), this.updateStyles();
  }
  updateBadge() {
    const e = this.action;
    if (!this.badge || !this.badgeContent || !(e instanceof Di))
      return;
    const t = e.getBadge(), o = e.getClass();
    this.badgeDisposable.clear(), Vt(this.badgeContent), Oi(this.badge);
    const n = this.badgesEnabled(this.activity.id);
    if (t && n) {
      if (t instanceof go) {
        if (t.number) {
          let a = t.number.toString();
          if (t.number > 999) {
            const d = t.number / 1e3, u = Math.floor(d);
            d > u ? a = `${u}K+` : a = `${d}K`;
          }
          this.badgeContent.textContent = a, tt(this.badge);
        }
      } else if (t instanceof po)
        this.badgeContent.textContent = t.text, tt(this.badge);
      else if (t instanceof En) {
        const a = It.asClassNameArray(t.icon);
        this.badgeContent.classList.add(...a), tt(this.badge);
      } else
        t instanceof vn && tt(this.badge);
      if (o) {
        const a = o.split(" ");
        this.badge.classList.add(...a), this.badgeDisposable.value = st(() => this.badge.classList.remove(...a));
      }
    }
    this.updateTitle();
  }
  updateLabel() {
    this.label.className = "action-label", this.activity.classNames && this.label.classList.add(...this.activity.classNames), this.options.icon || (this.label.textContent = this.action.label);
  }
  updateTitle() {
    const e = this.computeTitle();
    [this.label, this.badge, this.container].forEach((t) => {
      t && (t.setAttribute("aria-label", e), t.setAttribute("title", ""), t.removeAttribute("title"));
    });
  }
  computeTitle() {
    this.keybindingLabel = this.computeKeybindingLabel();
    let e = this.keybindingLabel ? i("titleKeybinding", "{0} ({1})", this.activity.name, this.keybindingLabel) : this.activity.name;
    const t = this.action.getBadge();
    return t != null && t.getDescription() && (e = i("badgeTitle", "{0} - {1}", e, t.getDescription())), e;
  }
  computeKeybindingLabel() {
    const e = this.activity.keybindingId ? this.keybindingService.lookupKeybinding(this.activity.keybindingId) : null;
    return e == null ? void 0 : e.getLabel();
  }
  updateHover() {
    this.hoverDisposables.clear(), this.updateTitle(), this.hoverDisposables.add(Le(this.container, De.MOUSE_OVER, () => {
      this.showHoverScheduler.isScheduled() || (Date.now() - ce.hoverLeaveTime < 200 ? this.showHover(!0) : this.showHoverScheduler.schedule(this.configurationService.getValue("workbench.hover.delay")));
    }, !0)), this.hoverDisposables.add(Le(this.container, De.MOUSE_LEAVE, (e) => {
      e.target === this.container && (ce.hoverLeaveTime = Date.now(), this.hoverService.hideHover(), this.showHoverScheduler.cancel());
    }, !0)), this.hoverDisposables.add(st(() => {
      this.hoverService.hideHover(), this.showHoverScheduler.cancel();
    }));
  }
  showHover(e = !1) {
    if (this.lastHover && !this.lastHover.isDisposed)
      return;
    const t = this.options.hoverOptions.position();
    this.lastHover = this.hoverService.showHover({
      target: this.container,
      hoverPosition: t,
      content: this.computeTitle(),
      showPointer: !0,
      compact: !0,
      hideOnKeyDown: !0,
      skipFadeInAnimation: e
    });
  }
  dispose() {
    super.dispose(), this.mouseUpTimeout && clearTimeout(this.mouseUpTimeout), this.badge.remove();
  }
}, ce.hoverLeaveTime = 0, ce);
gt = A([
  h(3, ee),
  h(4, fi),
  h(5, D),
  h(6, bi)
], gt);
class Fc extends Di {
  constructor(e) {
    super({
      id: "additionalComposites.action",
      name: i("additionalViews", "Additional Views"),
      classNames: It.asClassNameArray(f.more)
    }), this.showMenu = e;
  }
  async run() {
    this.showMenu();
  }
}
let io = class extends gt {
  constructor(e, t, o, n, a, d, u, p, m, E, b, S) {
    super(e, { icon: !0, colors: d, hasPopup: !0, hoverOptions: u }, () => !0, m, E, b, S), this.getOverflowingComposites = t, this.getActiveCompositeId = o, this.getBadge = n, this.getCompositeOpenAction = a, this.contextMenuService = p, this.actions = [];
  }
  showMenu() {
    this.actions && Bt(this.actions), this.actions = this.getActions(), this.contextMenuService.showContextMenu({
      getAnchor: () => this.container,
      getActions: () => this.actions,
      getCheckedActionsRepresentation: () => "radio",
      onHide: () => Bt(this.actions)
    });
  }
  getActions() {
    return this.getOverflowingComposites().map((e) => {
      const t = this.getCompositeOpenAction(e.id);
      t.checked = this.getActiveCompositeId() === t.id;
      const o = this.getBadge(e.id);
      let n;
      return o instanceof go ? n = o.number : o instanceof po && (n = o.text), n ? t.label = i("numberBadge", "{0} ({1})", e.name, n) : t.label = e.name || "", t;
    });
  }
  dispose() {
    super.dispose(), this.actions && (this.actions = Bt(this.actions));
  }
};
io = A([
  h(7, mo),
  h(8, ee),
  h(9, fi),
  h(10, D),
  h(11, bi)
], io);
let jt = class extends Ve {
  constructor(e) {
    super("activitybar.manage.extension", i("manageExtension", "Manage Extension")), this.commandService = e;
  }
  run(e) {
    return this.commandService.executeCommand("_extensions.manage", e);
  }
};
jt = A([
  h(0, Ei)
], jt);
let oo = class ct extends gt {
  constructor(e, t, o, n, a, d, u, p, m, E, b, S, v, I) {
    super(t, e, p.areBadgesEnabled.bind(p), S, v, I, E), this.compositeActivityAction = t, this.toggleCompositePinnedAction = o, this.toggleCompositeBadgeAction = n, this.compositeContextMenuActionsProvider = a, this.contextMenuActionsProvider = d, this.dndHandler = u, this.compositeBar = p, this.contextMenuService = m, ct.manageExtensionAction || (ct.manageExtensionAction = b.createInstance(jt));
  }
  render(e) {
    super.render(e), this.updateChecked(), this.updateEnabled(), this._register(Le(this.container, De.CONTEXT_MENU, (o) => {
      Ut.stop(o, !0), this.showContextMenu(e);
    }));
    let t;
    this._register(Sn.INSTANCE.registerDraggable(this.container, () => ({ type: "composite", id: this.activity.id }), {
      onDragOver: (o) => {
        const n = o.dragAndDropData.getData().id !== this.activity.id && this.dndHandler.onDragOver(o.dragAndDropData, this.activity.id, o.eventData);
        yn(o.eventData.dataTransfer, "move", n), t = this.updateFromDragging(e, n, o.eventData);
      },
      onDragLeave: (o) => {
        t = this.updateFromDragging(e, !1, o.eventData);
      },
      onDragEnd: (o) => {
        t = this.updateFromDragging(e, !1, o.eventData);
      },
      onDrop: (o) => {
        Ut.stop(o.eventData, !0), this.dndHandler.drop(o.dragAndDropData, this.activity.id, o.eventData, t), t = this.updateFromDragging(e, !1, o.eventData);
      },
      onDragStart: (o) => {
        o.dragAndDropData.getData().id === this.activity.id && (o.eventData.dataTransfer && (o.eventData.dataTransfer.effectAllowed = "move"), this.blur());
      }
    })), [this.badge, this.label].forEach((o) => this._register(new wn(o, () => {
      this.action.checked || this.action.run();
    }))), this.updateStyles();
  }
  updateFromDragging(e, t, o) {
    const n = e.getBoundingClientRect(), a = o.clientX, d = o.clientY, u = n.bottom - n.top, p = n.right - n.left, m = d <= n.top + u * 0.4, E = d > n.bottom - u * 0.4, b = d <= n.top + u * 0.5, S = a <= n.left + p * 0.4, v = a > n.right - p * 0.4, I = a <= n.left + p * 0.5, L = e.classList, M = {
      vertical: L.contains("top") ? "top" : L.contains("bottom") ? "bottom" : void 0,
      horizontal: L.contains("left") ? "left" : L.contains("right") ? "right" : void 0
    }, W = m || b && !M.vertical || !E && M.vertical === "top", T = E || !b && !M.vertical || !m && M.vertical === "bottom", G = S || I && !M.horizontal || !v && M.horizontal === "left", te = v || !I && !M.horizontal || !S && M.horizontal === "right";
    if (e.classList.toggle("top", t && W), e.classList.toggle("bottom", t && T), e.classList.toggle("left", t && G), e.classList.toggle("right", t && te), !!t)
      return { verticallyBefore: W, horizontallyBefore: G };
  }
  showContextMenu(e) {
    const t = [this.toggleCompositePinnedAction, this.toggleCompositeBadgeAction], o = this.compositeContextMenuActionsProvider(this.activity.id);
    o.length && t.push(...o), this.compositeActivityAction.activity.extensionId && (t.push(new Gi()), t.push(ct.manageExtensionAction)), this.compositeBar.isPinned(this.activity.id) ? (this.toggleCompositePinnedAction.label = i("hide", "Hide '{0}'", this.activity.name), this.toggleCompositePinnedAction.checked = !1) : this.toggleCompositePinnedAction.label = i("keep", "Keep '{0}'", this.activity.name), this.compositeBar.areBadgesEnabled(this.activity.id) ? this.toggleCompositeBadgeAction.label = i("hideBadge", "Hide Badge") : this.toggleCompositeBadgeAction.label = i("showBadge", "Show Badge");
    const d = this.contextMenuActionsProvider();
    d.length && (t.push(new Gi()), t.push(...d));
    const u = Cn(e), p = {
      x: Math.floor(u.left + u.width / 2),
      y: u.top + u.height
    };
    this.contextMenuService.showContextMenu({
      getAnchor: () => p,
      getActions: () => t,
      getActionsContext: () => this.activity.id
    });
  }
  updateChecked() {
    this.action.checked ? (this.container.classList.add("checked"), this.container.setAttribute("aria-label", this.container.title), this.container.setAttribute("aria-expanded", "true"), this.container.setAttribute("aria-selected", "true")) : (this.container.classList.remove("checked"), this.container.setAttribute("aria-label", this.container.title), this.container.setAttribute("aria-expanded", "false"), this.container.setAttribute("aria-selected", "false")), this.updateStyles();
  }
  updateEnabled() {
    this.element && (this.action.enabled ? this.element.classList.remove("disabled") : this.element.classList.add("disabled"));
  }
  dispose() {
    super.dispose(), this.label.remove();
  }
};
oo = A([
  h(8, mo),
  h(9, bi),
  h(10, Mt),
  h(11, ee),
  h(12, fi),
  h(13, D)
], oo);
class Hs extends Ve {
  constructor(e, t) {
    super("show.toggleCompositePinned", e ? e.name : i("toggle", "Toggle View Pinned")), this.activity = e, this.compositeBar = t, this.checked = !!this.activity && this.compositeBar.isPinned(this.activity.id);
  }
  async run(e) {
    const t = this.activity ? this.activity.id : e;
    this.compositeBar.isPinned(t) ? this.compositeBar.unpin(t) : this.compositeBar.pin(t);
  }
}
class Uc extends Ve {
  constructor(e, t) {
    super("show.toggleCompositeBadge", e ? e.name : i("toggleBadge", "Toggle View Badge")), this.activity = e, this.compositeBar = t, this.checked = !1;
  }
  async run(e) {
    const t = this.activity ? this.activity.id : e;
    this.compositeBar.toggleBadgeEnablement(t);
  }
}
const Ws = y("auxiliarybar-right-layout-icon", f.layoutSidebarRight, i(
  "toggleAuxiliaryIconRight",
  "Icon to toggle the auxiliary bar off in its right position."
)), zs = y("auxiliarybar-right-off-layout-icon", f.layoutSidebarRightOff, i(
  "toggleAuxiliaryIconRightOn",
  "Icon to toggle the auxiliary bar on in its right position."
)), qs = y("auxiliarybar-left-layout-icon", f.layoutSidebarLeft, i(
  "toggleAuxiliaryIconLeft",
  "Icon to toggle the auxiliary bar in its left position."
)), Ks = y("auxiliarybar-left-off-layout-icon", f.layoutSidebarLeftOff, i(
  "toggleAuxiliaryIconLeftOn",
  "Icon to toggle the auxiliary bar on in its left position."
)), pe = class pe extends k {
  constructor() {
    super({
      id: pe.ID,
      title: { value: pe.LABEL, original: "Toggle Secondary Side Bar Visibility" },
      toggled: {
        condition: Ee,
        title: i("secondary sidebar", "Secondary Side Bar"),
        mnemonicTitle: i(
          { key: "secondary sidebar mnemonic", comment: ["&& denotes a mnemonic"] },
          "Secondary Si&&de Bar"
        )
      },
      category: w.View,
      f1: !0,
      keybinding: {
        weight: 200,
        primary: 2592
      },
      menu: [
        {
          id: s.LayoutControlMenuSubmenu,
          group: "0_workbench_layout",
          order: 1
        },
        {
          id: s.MenubarAppearanceMenu,
          group: "2_workbench_layout",
          order: 2
        }
      ]
    });
  }
  async run(e) {
    const t = e.get(x);
    t.setPartHidden(t.isVisible("workbench.parts.auxiliarybar"), "workbench.parts.auxiliarybar");
  }
};
pe.ID = "workbench.action.toggleAuxiliaryBar", pe.LABEL = i("toggleAuxiliaryBar", "Toggle Secondary Side Bar Visibility");
let re = pe;
r(re);
var X;
r((X = class extends k {
  constructor() {
    super({
      id: X.ID,
      title: { value: X.LABEL, original: "Focus into Secondary Side Bar" },
      category: w.View,
      f1: !0
    });
  }
  async run(e) {
    const t = e.get(Ue), o = e.get(x);
    o.isVisible("workbench.parts.auxiliarybar") || o.setPartHidden(!1, "workbench.parts.auxiliarybar");
    const n = t.getActivePaneComposite(2);
    n == null || n.focus();
  }
}, X.ID = "workbench.action.focusAuxiliaryBar", X.LABEL = i("focusAuxiliaryBar", "Focus into Secondary Side Bar"), X));
c.appendMenuItems([
  {
    id: s.LayoutControlMenu,
    item: {
      group: "0_workbench_toggles",
      command: {
        id: re.ID,
        title: i("toggleSecondarySideBar", "Toggle Secondary Side Bar"),
        toggled: { condition: Ee, icon: qs },
        icon: Ks
      },
      when: g.and(g.or(g.equals("config.workbench.layoutControl.type", "toggles"), g.equals("config.workbench.layoutControl.type", "both")), g.equals("config.workbench.sideBar.location", "right")),
      order: 0
    }
  },
  {
    id: s.LayoutControlMenu,
    item: {
      group: "0_workbench_toggles",
      command: {
        id: re.ID,
        title: i("toggleSecondarySideBar", "Toggle Secondary Side Bar"),
        toggled: { condition: Ee, icon: Ws },
        icon: zs
      },
      when: g.and(g.or(g.equals("config.workbench.layoutControl.type", "toggles"), g.equals("config.workbench.layoutControl.type", "both")), g.equals("config.workbench.sideBar.location", "left")),
      order: 2
    }
  },
  {
    id: s.ViewTitleContext,
    item: {
      group: "3_workbench_layout_move",
      command: {
        id: re.ID,
        title: { value: i("hideAuxiliaryBar", "Hide Secondary Side Bar"), original: "Hide Secondary Side Bar" }
      },
      when: g.and(Ee, g.equals(
        "viewLocation",
        fo(2)
      )),
      order: 2
    }
  }
]);
var js = ".monaco-workbench.nopanel .part.panel{display:none!important;visibility:hidden!important}.monaco-workbench .part.panel.bottom .composite.title{border-top-style:solid;border-top-width:1px}.monaco-workbench.noeditorarea .part.panel.bottom .composite.title{border-top-width:0}.monaco-workbench .part.panel.right{border-left-style:solid;border-left-width:1px}.monaco-workbench.noeditorarea .part.panel.right{border-left-width:0}.monaco-workbench .part.panel.left{border-right-style:solid;border-right-width:1px}.monaco-workbench.noeditorarea .part.panel.left{border-right-width:0}.monaco-workbench .part.panel>.content .monaco-editor,.monaco-workbench .part.panel>.content .monaco-editor .margin,.monaco-workbench .part.panel>.content .monaco-editor .monaco-editor-background{background-color:var(--vscode-panel-background)}.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus .action-label,.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:hover .action-label{color:var(--vscode-panelTitle-activeForeground)!important}.monaco-workbench .part.panel .monaco-inputbox{border-color:var(--vscode-panelInput-border,transparent)!important}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus .active-item-indicator:before{border-top-color:var(--vscode-focusBorder)!important}.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus{outline:none}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked.clicked:focus .active-item-indicator:before,.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked:not(:focus) .active-item-indicator:before{border-top-color:var(--vscode-panelTitle-activeBorder)!important}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked .action-label,.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:hover .action-label{outline:var(--vscode-contrastActiveBorder,unset) solid 1px!important}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:not(.checked):hover .action-label{outline:var(--vscode-contrastActiveBorder,unset) dashed 1px!important}";
vi(js, {});
y("panel-maximize", f.chevronUp, i("maximizeIcon", "Icon to maximize a panel."));
y("panel-restore", f.chevronDown, i("restoreIcon", "Icon to restore a panel."));
const $s = y("panel-close", f.close, i("closeIcon", "Icon to close a panel.")), Js = y("panel-layout-icon", f.layoutPanel, i("togglePanelOffIcon", "Icon to toggle the panel off when it is on.")), Qs = y("panel-layout-icon-off", f.layoutPanelOff, i("togglePanelOnIcon", "Icon to toggle the panel on when it is off.")), me = class me extends k {
  constructor() {
    super({
      id: me.ID,
      title: { value: me.LABEL, original: "Toggle Panel Visibility" },
      toggled: {
        condition: dt,
        title: i("toggle panel", "Panel"),
        mnemonicTitle: i(
          { key: "toggle panel mnemonic", comment: ["&& denotes a mnemonic"] },
          "&&Panel"
        )
      },
      f1: !0,
      category: w.View,
      keybinding: { primary: 2088, weight: 200 },
      menu: [
        {
          id: s.MenubarAppearanceMenu,
          group: "2_workbench_layout",
          order: 5
        },
        {
          id: s.LayoutControlMenuSubmenu,
          group: "0_workbench_layout",
          order: 4
        }
      ]
    });
  }
  async run(e) {
    const t = e.get(x);
    t.setPartHidden(t.isVisible("workbench.parts.panel"), "workbench.parts.panel");
  }
};
me.ID = "workbench.action.togglePanel", me.LABEL = i("togglePanelVisibility", "Toggle Panel Visibility");
let ve = me;
r(ve);
var Se;
r((Se = class extends k {
  constructor() {
    super({
      id: "workbench.action.focusPanel",
      title: { value: i("focusPanel", "Focus into Panel"), original: "Focus into Panel" },
      category: w.View,
      f1: !0
    });
  }
  async run(e) {
    const t = e.get(x), o = e.get(Ue);
    t.isVisible("workbench.parts.panel") || t.setPartHidden(!1, "workbench.parts.panel");
    const n = o.getActivePaneComposite(1);
    n == null || n.focus();
  }
}, Se.ID = "workbench.action.focusPanel", Se.LABEL = i("focusPanel", "Focus into Panel"), Se));
const Ft = {
  LEFT: "workbench.action.positionPanelLeft",
  RIGHT: "workbench.action.positionPanelRight",
  BOTTOM: "workbench.action.positionPanelBottom"
}, at = {
  LEFT: "workbench.action.alignPanelLeft",
  RIGHT: "workbench.action.alignPanelRight",
  CENTER: "workbench.action.alignPanelCenter",
  JUSTIFY: "workbench.action.alignPanelJustify"
};
function an(l, e, t, o, n) {
  return {
    id: l,
    title: e,
    shortLabel: t,
    value: o,
    when: n
  };
}
function Nt(l, e, t, o) {
  return an(l, e, t, o, In.notEqualsTo(bo(o)));
}
function rt(l, e, t, o) {
  return an(l, e, t, o, Te.notEqualsTo(o));
}
const Ys = [
  Nt(Ft.LEFT, { value: i("positionPanelLeft", "Move Panel Left"), original: "Move Panel Left" }, i("positionPanelLeftShort", "Left"), 0),
  Nt(Ft.RIGHT, { value: i("positionPanelRight", "Move Panel Right"), original: "Move Panel Right" }, i("positionPanelRightShort", "Right"), 1),
  Nt(Ft.BOTTOM, { value: i("positionPanelBottom", "Move Panel To Bottom"), original: "Move Panel To Bottom" }, i("positionPanelBottomShort", "Bottom"), 2)
], Xs = [
  rt(at.LEFT, { value: i("alignPanelLeft", "Set Panel Alignment to Left"), original: "Set Panel Alignment to Left" }, i("alignPanelLeftShort", "Left"), "left"),
  rt(at.RIGHT, { value: i("alignPanelRight", "Set Panel Alignment to Right"), original: "Set Panel Alignment to Right" }, i("alignPanelRightShort", "Right"), "right"),
  rt(at.CENTER, { value: i("alignPanelCenter", "Set Panel Alignment to Center"), original: "Set Panel Alignment to Center" }, i("alignPanelCenterShort", "Center"), "center"),
  rt(at.JUSTIFY, { value: i("alignPanelJustify", "Set Panel Alignment to Justify"), original: "Set Panel Alignment to Justify" }, i("alignPanelJustifyShort", "Justify"), "justify")
];
c.appendMenuItem(s.MenubarAppearanceMenu, {
  submenu: s.PanelPositionMenu,
  title: i("positionPanel", "Panel Position"),
  group: "3_workbench_layout_move",
  order: 4
});
Ys.forEach((l) => {
  const { id: e, title: t, shortLabel: o, value: n, when: a } = l;
  r(class extends k {
    constructor() {
      super({
        id: e,
        title: t,
        category: w.View,
        f1: !0
      });
    }
    run(d) {
      d.get(x).setPanelPosition(n === void 0 ? 2 : n);
    }
  }), c.appendMenuItem(s.PanelPositionMenu, {
    command: {
      id: e,
      title: o,
      toggled: a.negate()
    },
    order: 5
  });
});
c.appendMenuItem(s.MenubarAppearanceMenu, {
  submenu: s.PanelAlignmentMenu,
  title: i("alignPanel", "Align Panel"),
  group: "3_workbench_layout_move",
  order: 5
});
Xs.forEach((l) => {
  const { id: e, title: t, shortLabel: o, value: n, when: a } = l;
  r(class extends k {
    constructor() {
      super({
        id: e,
        title: t,
        category: w.View,
        toggled: a.negate(),
        f1: !0
      });
    }
    run(d) {
      d.get(x).setPanelAlignment(n === void 0 ? "center" : n);
    }
  }), c.appendMenuItem(s.PanelAlignmentMenu, {
    command: {
      id: e,
      title: o,
      toggled: a.negate()
    },
    order: 5
  });
});
let $t = class extends Di {
  constructor(e, t, o) {
    super(e), this.viewContainerLocation = t, this.paneCompositeService = o;
  }
  async run() {
    await this.paneCompositeService.openPaneComposite(this.activity.id, this.viewContainerLocation, !0), this.activate();
  }
  setActivity(e) {
    this.activity = e;
  }
};
$t = A([
  h(2, Ue)
], $t);
let no = class extends $t {
  constructor(e, t, o) {
    super({ id: e, name: e }, t, o);
  }
};
no = A([
  h(2, Ue)
], no);
class zc extends Hs {
  constructor(e, t) {
    super({ id: e, name: e, classNames: void 0 }, t);
  }
  setActivity(e) {
    this.label = e.name;
  }
}
class rn extends k {
  constructor(e, t) {
    super({
      id: e,
      title: t,
      category: w.View,
      f1: !0
    });
  }
  async run(e, t) {
    const o = e.get(Ue), n = o.getPinnedPaneCompositeIds(1), a = o.getActivePaneComposite(1);
    if (!a)
      return;
    let d;
    for (let u = 0; u < n.length; u++)
      if (n[u] === a.getId()) {
        d = n[(u + n.length + t) % n.length];
        break;
      }
    typeof d == "string" && await o.openPaneComposite(d, 1, !0);
  }
}
r(class extends rn {
  constructor() {
    super("workbench.action.previousPanelView", {
      value: i("previousPanelView", "Previous Panel View"),
      original: "Previous Panel View"
    });
  }
  run(l) {
    return super.run(l, -1);
  }
});
r(class extends rn {
  constructor() {
    super("workbench.action.nextPanelView", {
      value: i("nextPanelView", "Next Panel View"),
      original: "Next Panel View"
    });
  }
  run(l) {
    return super.run(l, 1);
  }
});
r(class extends k {
  constructor() {
    super({
      id: "workbench.action.closeAuxiliaryBar",
      title: { value: i("closeSecondarySideBar", "Close Secondary Side Bar"), original: "Close Secondary Side Bar" },
      category: w.View,
      icon: $s,
      menu: [{
        id: s.CommandPalette,
        when: Ee
      }, {
        id: s.AuxiliaryBarTitle,
        group: "navigation",
        order: 2
      }]
    });
  }
  run(l) {
    l.get(x).setPartHidden(!0, "workbench.parts.auxiliarybar");
  }
});
c.appendMenuItems([
  {
    id: s.LayoutControlMenu,
    item: {
      group: "0_workbench_toggles",
      command: {
        id: ve.ID,
        title: i("togglePanel", "Toggle Panel"),
        icon: Qs,
        toggled: { condition: dt, icon: Js }
      },
      when: g.or(g.equals("config.workbench.layoutControl.type", "toggles"), g.equals("config.workbench.layoutControl.type", "both")),
      order: 1
    }
  },
  {
    id: s.ViewTitleContext,
    item: {
      group: "3_workbench_layout_move",
      command: {
        id: ve.ID,
        title: { value: i("hidePanel", "Hide Panel"), original: "Hide Panel" }
      },
      when: g.and(dt, g.equals(
        "viewLocation",
        fo(1)
      )),
      order: 2
    }
  }
]);
class Rt extends k {
  constructor(e, t, o) {
    super(o), this.source = e, this.destination = t;
  }
  run(e, ...t) {
    const o = e.get(Mn), n = e.get(x), a = e.get(An), d = o.getViewContainersByLocation(this.source), u = o.getViewContainersByLocation(this.destination);
    if (d.length) {
      const p = a.getVisibleViewContainer(this.source);
      d.forEach((m) => o.moveViewContainerToLocation(m, this.destination)), n.setPartHidden(!1, this.destination === 1 ? "workbench.parts.panel" : "workbench.parts.auxiliarybar"), p && u.length === 0 && a.openViewContainer(p.id, !0);
    }
  }
}
const mt = class mt extends Rt {
  constructor() {
    super(1, 2, {
      id: mt.ID,
      title: {
        value: i("movePanelToSecondarySideBar", "Move Panel Views To Secondary Side Bar"),
        original: "Move Panel Views To Secondary Side Bar"
      },
      category: w.View,
      f1: !1
    });
  }
};
mt.ID = "workbench.action.movePanelToSidePanel";
let Jt = mt;
const ft = class ft extends Rt {
  constructor() {
    super(1, 2, {
      id: ft.ID,
      title: {
        value: i("movePanelToSecondarySideBar", "Move Panel Views To Secondary Side Bar"),
        original: "Move Panel Views To Secondary Side Bar"
      },
      category: w.View,
      f1: !0
    });
  }
};
ft.ID = "workbench.action.movePanelToSecondarySideBar";
let Qt = ft;
r(Jt);
r(Qt);
const bt = class bt extends Rt {
  constructor() {
    super(2, 1, {
      id: bt.ID,
      title: {
        value: i("moveSidePanelToPanel", "Move Secondary Side Bar Views To Panel"),
        original: "Move Secondary Side Bar Views To Panel"
      },
      category: w.View,
      f1: !1
    });
  }
};
bt.ID = "workbench.action.moveSidePanelToPanel";
let Yt = bt;
const Et = class Et extends Rt {
  constructor() {
    super(2, 1, {
      id: Et.ID,
      title: {
        value: i("moveSidePanelToPanel", "Move Secondary Side Bar Views To Panel"),
        original: "Move Secondary Side Bar Views To Panel"
      },
      category: w.View,
      f1: !0
    });
  }
};
Et.ID = "workbench.action.moveSecondarySideBarToPanel";
let Xt = Et;
r(Yt);
r(Xt);
const Zs = y("menuBar", f.layoutMenubar, i("menuBarIcon", "Represents the menu bar")), ec = y("activity-bar-left", f.layoutActivitybarLeft, i("activityBarLeft", "Represents the activity bar in the left position")), tc = y("activity-bar-right", f.layoutActivitybarRight, i("activityBarRight", "Represents the activity bar in the right position")), Zt = y("panel-left", f.layoutSidebarLeft, i("panelLeft", "Represents a side bar in the left position"));
y("panel-left-off", f.layoutSidebarLeftOff, i("panelLeftOff", "Represents a side bar in the left position toggled off"));
const ei = y("panel-right", f.layoutSidebarRight, i("panelRight", "Represents side bar in the right position"));
y("panel-right-off", f.layoutSidebarRightOff, i("panelRightOff", "Represents side bar in the right position toggled off"));
const ic = y("panel-bottom", f.layoutPanel, i("panelBottom", "Represents the bottom panel")), oc = y("statusBar", f.layoutStatusbar, i("statusBarIcon", "Represents the status bar")), nc = y("panel-align-left", f.layoutPanelLeft, i("panelBottomLeft", "Represents the bottom panel alignment set to the left")), ac = y("panel-align-right", f.layoutPanelRight, i(
  "panelBottomRight",
  "Represents the bottom panel alignment set to the right"
)), rc = y("panel-align-center", f.layoutPanelCenter, i(
  "panelBottomCenter",
  "Represents the bottom panel alignment set to the center"
)), sc = y("panel-align-justify", f.layoutPanelJustify, i(
  "panelBottomJustify",
  "Represents the bottom panel alignment set to justified"
)), cc = y("fullscreen", f.screenFull, i("fullScreenIcon", "Represents full screen")), dc = y("centerLayoutIcon", f.layoutCentered, i("centerLayoutIcon", "Represents centered layout mode")), lc = y("zenMode", f.target, i("zenModeIcon", "Represents zen mode")), fe = class fe extends k {
  constructor() {
    super({
      id: fe.ID,
      title: {
        value: i("toggleActivityBar", "Toggle Activity Bar Visibility"),
        mnemonicTitle: i(
          { key: "miActivityBar", comment: ["&& denotes a mnemonic"] },
          "&&Activity Bar"
        ),
        original: "Toggle Activity Bar Visibility"
      },
      category: w.View,
      f1: !0,
      toggled: g.equals("config.workbench.activityBar.visible", !0),
      menu: [{
        id: s.MenubarAppearanceMenu,
        group: "2_workbench_layout",
        order: 4
      }]
    });
  }
  run(e) {
    const t = e.get(x), o = e.get(D), a = !t.isVisible("workbench.parts.activitybar");
    o.updateValue(fe.activityBarVisibleKey, a);
  }
};
fe.ID = "workbench.action.toggleActivityBarVisibility", fe.activityBarVisibleKey = "workbench.activityBar.visible";
let ti = fe;
const sn = "workbench.sideBar.location";
class cn extends k {
  constructor(e, t, o) {
    super({
      id: e,
      title: t,
      f1: !1
    }), this.position = o;
  }
  async run(e) {
    const t = e.get(x), o = e.get(D);
    if (t.getSideBarPosition() !== this.position)
      return o.updateValue(sn, bo(this.position));
  }
}
const vt = class vt extends cn {
  constructor() {
    super(vt.ID, {
      value: i("moveSidebarRight", "Move Primary Side Bar Right"),
      original: "Move Primary Side Bar Right"
    }, 1);
  }
};
vt.ID = "workbench.action.moveSideBarRight";
let ii = vt;
const St = class St extends cn {
  constructor() {
    super(St.ID, {
      value: i("moveSidebarLeft", "Move Primary Side Bar Left"),
      original: "Move Primary Side Bar Left"
    }, 0);
  }
};
St.ID = "workbench.action.moveSideBarLeft";
let oi = St;
const xe = class xe extends k {
  static getLabel(e) {
    return e.getSideBarPosition() === 0 ? i("moveSidebarRight", "Move Primary Side Bar Right") : i("moveSidebarLeft", "Move Primary Side Bar Left");
  }
  constructor() {
    super({
      id: xe.ID,
      title: { value: i("toggleSidebarPosition", "Toggle Primary Side Bar Position"), original: "Toggle Primary Side Bar Position" },
      category: w.View,
      f1: !0
    });
  }
  run(e) {
    const t = e.get(x), o = e.get(D), a = t.getSideBarPosition() === 0 ? "right" : "left";
    return o.updateValue(sn, a);
  }
};
xe.ID = "workbench.action.toggleSidebarPosition", xe.LABEL = i("toggleSidebarPosition", "Toggle Primary Side Bar Position");
let ao = xe;
y("configure-layout-icon", f.layout, i("cofigureLayoutIcon", "Icon represents workbench layout configuration."));
const yt = class yt extends k {
  constructor() {
    super({
      id: yt.ID,
      title: { value: i("toggleSidebar", "Toggle Primary Side Bar Visibility"), original: "Toggle Primary Side Bar Visibility" },
      toggled: {
        condition: Eo,
        title: i("primary sidebar", "Primary Side Bar"),
        mnemonicTitle: i(
          { key: "primary sidebar mnemonic", comment: ["&& denotes a mnemonic"] },
          "&&Primary Side Bar"
        )
      },
      category: w.View,
      f1: !0,
      keybinding: {
        weight: 200,
        primary: 2080
      },
      menu: [
        {
          id: s.LayoutControlMenuSubmenu,
          group: "0_workbench_layout",
          order: 0
        },
        {
          id: s.MenubarAppearanceMenu,
          group: "2_workbench_layout",
          order: 1
        }
      ]
    });
  }
  run(e) {
    const t = e.get(x);
    t.setPartHidden(t.isVisible("workbench.parts.sidebar"), "workbench.parts.sidebar");
  }
};
yt.ID = "workbench.action.toggleSidebarVisibility";
let ni = yt;
const be = class be extends k {
  constructor() {
    super({
      id: be.ID,
      title: {
        value: i("toggleStatusbar", "Toggle Status Bar Visibility"),
        mnemonicTitle: i({ key: "miStatusbar", comment: ["&& denotes a mnemonic"] }, "S&&tatus Bar"),
        original: "Toggle Status Bar Visibility"
      },
      category: w.View,
      f1: !0,
      toggled: g.equals("config.workbench.statusBar.visible", !0),
      menu: [{
        id: s.MenubarAppearanceMenu,
        group: "2_workbench_layout",
        order: 3
      }]
    });
  }
  run(e) {
    const t = e.get(x), o = e.get(D), a = !t.isVisible("workbench.parts.statusbar");
    return o.updateValue(be.statusbarVisibleKey, a);
  }
};
be.ID = "workbench.action.toggleStatusbarVisibility", be.statusbarVisibleKey = "workbench.statusBar.visible";
let ai = be;
const wt = class wt extends k {
  constructor() {
    super({
      id: wt.ID,
      title: {
        value: i("toggleTabs", "Toggle Tab Visibility"),
        original: "Toggle Tab Visibility"
      },
      category: w.View,
      f1: !0
    });
  }
  run(e) {
    const t = e.get(D), n = !t.getValue("workbench.editor.showTabs");
    return t.updateValue("workbench.editor.showTabs", n);
  }
};
wt.ID = "workbench.action.toggleTabsVisibility";
let Oe = wt;
r(Oe);
Si.registerCommandAndKeybindingRule({
  id: "workbench.action.exitZenMode",
  weight: 100 - 1e3,
  handler(l) {
    const e = l.get(x), t = l.get(yi);
    Ht.getValue(t) && e.toggleZenMode();
  },
  when: Ht,
  primary: vo(9, 9)
});
const _i = class _i extends k {
  resizePart(e, t, o, n) {
    let a;
    if (n === void 0) {
      const d = o.hasFocus("workbench.parts.editor"), u = o.hasFocus("workbench.parts.sidebar"), p = o.hasFocus("workbench.parts.panel"), m = o.hasFocus("workbench.parts.auxiliarybar");
      u ? a = "workbench.parts.sidebar" : p ? a = "workbench.parts.panel" : d ? a = "workbench.parts.editor" : m && (a = "workbench.parts.auxiliarybar");
    } else
      a = n;
    a && o.resizePart(a, e, t);
  }
};
_i.RESIZE_INCREMENT = 60;
let ro = _i;
const he = (l, e, t, o) => ({
  id: l,
  active: e,
  label: t,
  visualIcon: o,
  activeIcon: f.eye,
  inactiveIcon: f.eyeClosed,
  activeAriaLabel: i("selectToHide", "Select to Hide"),
  inactiveAriaLabel: i("selectToShow", "Select to Show"),
  useButtons: !0
}), $ = (l, e, t, o) => ({
  id: l,
  active: e,
  label: t,
  visualIcon: o,
  activeIcon: f.check,
  activeAriaLabel: i("active", "Active"),
  useButtons: !1
}), uc = g.and(kn.toNegated(), g.notEquals("config.window.menuBarVisibility", "hidden"), g.notEquals("config.window.menuBarVisibility", "toggle"), g.notEquals("config.window.menuBarVisibility", "compact")), Ti = [];
(!Ln || !Dn) && Ti.push(he("workbench.action.toggleMenuBar", uc, i("menuBar", "Menu Bar"), Zs));
Ti.push(he(ti.ID, g.equals("config.workbench.activityBar.visible", !0), i("activityBar", "Activity Bar"), { whenA: g.equals("config.workbench.sideBar.location", "left"), iconA: ec, iconB: tc }), he(ni.ID, Eo, i("sideBar", "Primary Side Bar"), { whenA: g.equals("config.workbench.sideBar.location", "left"), iconA: Zt, iconB: ei }), he(re.ID, Ee, i("secondarySideBar", "Secondary Side Bar"), { whenA: g.equals("config.workbench.sideBar.location", "left"), iconA: ei, iconB: Zt }), he(ve.ID, dt, i("panel", "Panel"), ic), he(ai.ID, g.equals("config.workbench.statusBar.visible", !0), i("statusBar", "Status Bar"), oc));
const hc = [
  $(oi.ID, g.equals("config.workbench.sideBar.location", "left"), i("leftSideBar", "Left"), Zt),
  $(ii.ID, g.equals("config.workbench.sideBar.location", "right"), i("rightSideBar", "Right"), ei)
], gc = [
  $("workbench.action.alignPanelLeft", Te.isEqualTo("left"), i("leftPanel", "Left"), nc),
  $("workbench.action.alignPanelRight", Te.isEqualTo("right"), i("rightPanel", "Right"), ac),
  $("workbench.action.alignPanelCenter", Te.isEqualTo("center"), i("centerPanel", "Center"), rc),
  $("workbench.action.alignPanelJustify", Te.isEqualTo("justify"), i("justifyPanel", "Justify"), sc)
], pc = [
  $("workbench.action.toggleFullScreen", Tn, i("fullscreen", "Full Screen"), cc),
  $("workbench.action.toggleZenMode", Ht, i("zenMode", "Zen Mode"), lc),
  $("workbench.action.toggleCenteredLayout", xn, i("centeredLayout", "Centered Layout"), dc)
], mc = /* @__PURE__ */ new Set();
for (const { active: l } of [...Ti, ...hc, ...gc, ...pc])
  for (const e of l.keys())
    mc.add(e);
var fc = ".monaco-editor-pane-placeholder{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:0 16px}.monaco-editor-pane-placeholder:focus{outline:none!important}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon{font-size:48px}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-error{color:var(--vscode-editorError-foreground)}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-warning{color:var(--vscode-editorWarning-foreground)}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-info,.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-workspace-untrusted{color:var(--vscode-editorInfo-foreground)}.monaco-editor-pane-placeholder.max-height-200px .editor-placeholder-icon-container{display:none}.monaco-editor-pane-placeholder .editor-placeholder-label-container{font-size:14px;max-width:450px;text-align:center;word-break:break-word}.monaco-editor-pane-placeholder .editor-placeholder-buttons-container{display:flex}.monaco-editor-pane-placeholder .editor-placeholder-buttons-container>.monaco-button{font-size:14px;margin:4px 5px;outline-offset:2px!important;padding:6px 11px;width:fit-content}";
vi(fc, {});
var ye;
let Ge = (ye = class extends Pn {
  constructor(e, t, o, n) {
    super(e, t, o, n), this.inputDisposable = this._register(new P());
  }
  createEditor(e) {
    this.container = document.createElement("div"), this.container.className = "monaco-editor-pane-placeholder", this.container.style.outline = "none", this.container.tabIndex = 0, this.scrollbar = this._register(new Rn(
      this.container,
      { horizontal: 1, vertical: 1 }
    )), e.appendChild(this.scrollbar.getDomNode());
  }
  async setInput(e, t, o, n) {
    await super.setInput(e, t, o, n), !n.isCancellationRequested && (this.inputDisposable.value = await this.renderInput(e, t));
  }
  async renderInput(e, t) {
    const [o, n] = Fi(this.container, this.scrollbar);
    Vt(o);
    const a = new Ct(), { icon: d, label: u, actions: p } = await this.getContents(e, t, a), m = _n(u, ye.PLACEHOLDER_LABEL_MAX_LENGTH), E = o.appendChild(ne(".editor-placeholder-icon-container")), b = new Us(E);
    b.text = d;
    const S = o.appendChild(ne(".editor-placeholder-label-container")), v = document.createElement("span");
    if (v.textContent = m, S.appendChild(v), o.setAttribute("aria-label", `${Bn(e, void 0, this.group, void 0)}, ${m}`), p.length) {
      const I = o.appendChild(ne(".editor-placeholder-buttons-container")), L = a.add(new On(I));
      for (let M = 0; M < p.length; M++) {
        const W = a.add(L.addButton({
          ...Gn,
          secondary: M !== 0
        }));
        W.label = p[M].label, a.add(W.onDidClick((T) => {
          T && Ut.stop(T, !0), p[M].run();
        }));
      }
    }
    return n.scanDomNode(), a;
  }
  clearInput() {
    this.container && Vt(this.container), this.inputDisposable.clear(), super.clearInput();
  }
  layout(e) {
    const [t, o] = Fi(this.container, this.scrollbar);
    Fn(t, e.width, e.height), o.scanDomNode(), t.classList.toggle("max-height-200px", e.height <= 200);
  }
  focus() {
    Q(this.container).focus();
  }
  dispose() {
    var e;
    (e = this.container) == null || e.remove(), super.dispose();
  }
}, ye.PLACEHOLDER_LABEL_MAX_LENGTH = 1024, ye);
Ge = A([
  h(1, He),
  h(2, ee),
  h(3, We)
], Ge);
var B;
let so = (B = class extends Ge {
  constructor(e, t, o, n, a) {
    super(B.ID, e, t, a), this.commandService = o, this.workspaceService = n;
  }
  getTitle() {
    return B.LABEL;
  }
  async getContents() {
    return {
      icon: "$(workspace-untrusted)",
      label: Nn(Vn(this.workspaceService.getWorkspace())) ? i(
        "requiresFolderTrustText",
        "The file is not displayed in the editor because trust has not been granted to the folder."
      ) : i(
        "requiresWorkspaceTrustText",
        "The file is not displayed in the editor because trust has not been granted to the workspace."
      ),
      actions: [
        {
          label: i("manageTrust", "Manage Workspace Trust"),
          run: () => this.commandService.executeCommand("workbench.trust.manage")
        }
      ]
    };
  }
}, B.ID = "workbench.editors.workspaceTrustRequiredEditor", B.LABEL = i("trustRequiredEditor", "Workspace Trust Required"), B.DESCRIPTOR = Ce.create(B, B.ID, B.LABEL), B);
so = A([
  h(0, He),
  h(1, ee),
  h(2, Ei),
  h(3, Un),
  h(4, We)
], so);
var N;
let co = (N = class extends Ge {
  constructor(e, t, o, n, a) {
    super(N.ID, e, t, o), this.fileService = n, this.dialogService = a;
  }
  async getContents(e, t, o) {
    const n = e.resource, a = this.group, d = t.error, u = (d == null ? void 0 : d.fileOperationResult) === 1;
    let p;
    u ? p = i(
      "unavailableResourceErrorEditorText",
      "The editor could not be opened because the file was not found."
    ) : Ot(d) && d.forceMessage ? p = d.message : d ? p = i(
      "unknownErrorEditorTextWithError",
      "The editor could not be opened due to an unexpected error: {0}",
      Ni(d)
    ) : p = i(
      "unknownErrorEditorTextWithoutError",
      "The editor could not be opened due to an unexpected error."
    );
    let m = "$(error)";
    Ot(d) && (d.forceSeverity === Wt.Info ? m = "$(info)" : d.forceSeverity === Wt.Warning && (m = "$(warning)"));
    let E;
    return Ot(d) && d.actions.length > 0 ? E = d.actions.map((b) => ({
      label: b.label,
      run: () => {
        const S = b.run();
        S instanceof Promise && S.catch((v) => this.dialogService.error(Ni(v)));
      }
    })) : a && (E = [
      {
        label: i("retry", "Try Again"),
        run: () => a.openEditor(e, { ...t, source: Hn.USER })
      }
    ]), a && u && n && this.fileService.hasProvider(n) && o.add(this.fileService.onDidFilesChange((b) => {
      b.contains(n, 1, 0) && a.openEditor(e, t);
    })), { icon: m, label: p, actions: E ?? [] };
  }
}, N.ID = "workbench.editors.errorEditor", N.LABEL = i("errorEditor", "Error Editor"), N.DESCRIPTOR = Ce.create(N, N.ID, N.LABEL), N);
co = A([
  h(0, He),
  h(1, ee),
  h(2, We),
  h(3, wi),
  h(4, Wn)
], co);
let ri = class extends zn {
  constructor(e, t, o) {
    super(), this.resource = e, this.name = t, this.fileService = o, this.mime = qn.binary;
  }
  getName() {
    return this.name;
  }
  getSize() {
    return this.size;
  }
  getMime() {
    return this.mime;
  }
  getETag() {
    return this.etag;
  }
  async resolve() {
    if (this.fileService.hasProvider(this.resource)) {
      const e = await this.fileService.stat(this.resource);
      this.etag = e.etag, typeof e.size == "number" && (this.size = e.size);
    }
    return super.resolve();
  }
};
ri = A([
  h(2, wi)
], ri);
let Y = class extends Ge {
  constructor(e, t, o, n, a) {
    super(e, o, n, a), this.callbacks = t, this._onDidChangeMetadata = this._register(new Re()), this.onDidChangeMetadata = this._onDidChangeMetadata.event, this._onDidOpenInPlace = this._register(new Re()), this.onDidOpenInPlace = this._onDidOpenInPlace.event;
  }
  getTitle() {
    return this.input ? this.input.getName() : i("binaryEditor", "Binary Viewer");
  }
  async getContents(e, t) {
    const o = await e.resolve(t);
    if (!(o instanceof ri))
      throw new Error("Unable to open file as binary");
    const n = o.getSize();
    return this.handleMetadataChanged(typeof n == "number" ? So.formatSize(n) : ""), {
      icon: "$(warning)",
      label: i(
        "binaryError",
        "The file is not displayed in the text editor because it is either binary or uses an unsupported text encoding."
      ),
      actions: [
        {
          label: i("openAnyway", "Open Anyway"),
          run: async () => {
            await this.callbacks.openInternal(e, t), this._onDidOpenInPlace.fire();
          }
        }
      ]
    };
  }
  handleMetadataChanged(e) {
    this.metadata = e, this._onDidChangeMetadata.fire();
  }
  getMetadata() {
    return this.metadata;
  }
};
Y = A([
  h(4, We)
], Y);
var Ne;
let se = (Ne = class extends zt {
  constructor(e, t, o, n, a, d, u, p) {
    super(e, t, o, n, a, d, u, p);
  }
  getMetadata() {
    const e = this.getPrimaryEditorPane(), t = this.getSecondaryEditorPane();
    if (e instanceof Y && t instanceof Y)
      return i(
        "metadataDiff",
        "{0} ↔ {1}",
        t.getMetadata(),
        e.getMetadata()
      );
  }
}, Ne.ID = Kn, Ne);
se = A([
  h(0, He),
  h(1, Mt),
  h(2, ee),
  h(3, We),
  h(4, D),
  h(5, yo),
  h(6, de),
  h(7, wo)
], se);
var bc = ".monaco-workbench .screen-reader-detected-explanation{cursor:default;padding:1em;right:6px;top:30px;width:420px}.monaco-workbench .screen-reader-detected-explanation .cancel{border:none;cursor:pointer;height:22px;padding:.5em;position:absolute;right:0;top:0;width:22px}.monaco-workbench .screen-reader-detected-explanation h2{font-size:1.8em;font-weight:400;margin:0;padding:0}.monaco-workbench .screen-reader-detected-explanation p{font-size:1.2em}.monaco-workbench .screen-reader-detected-explanation hr{border:0;height:2px}.monaco-workbench .screen-reader-detected-explanation .buttons{display:flex}.monaco-workbench .screen-reader-detected-explanation .buttons a{font-size:13px;margin-right:5px;max-width:fit-content;padding-left:12px;padding-right:12px}";
vi(bc, {});
const Ec = new jn("editorTabFocusMode", !1, !0);
let si = class extends le {
  constructor(e, t) {
    super(), this._onDidChange = this._register(new Re()), this.onDidChange = this._onDidChange.event, this._editorContext = Ec.bindTo(e), this._terminalContext = $n.bindTo(e);
    const o = t.getValue("editor.tabFocusMode"), n = t.getValue("terminal.integrated.tabFocusMode") ?? o;
    this._editorContext.set(o), this._terminalContext.set(n), q.setTabFocusMode(o, "editorFocus"), q.setTabFocusMode(n, "terminalFocus");
    const a = /* @__PURE__ */ new Set();
    a.add("focusedView"), this._register(e.onDidChangeContext((d) => {
      if (d.affectsSome(a)) {
        const u = e.getContextKeyValue("focusedView") === "terminal", p = u ? "terminalFocus" : "editorFocus";
        if (this._previousViewContext === p)
          return;
        u ? this._editorContext.reset() : this._terminalContext.reset(), this._previousViewContext = p, this._onDidChange.fire();
      }
    })), this._register(t.onDidChangeConfiguration((d) => {
      if (d.affectsConfiguration("editor.tabFocusMode")) {
        const u = t.getValue("editor.tabFocusMode");
        q.setTabFocusMode(u, "editorFocus"), this._editorContext.set(u), t.getValue("terminal.integrated.tabFocusMode") === null && (t.updateValue("terminal.integrated.tabFocusMode", u), q.setTabFocusMode(u, "terminalFocus"), this._terminalContext.set(u)), this._onDidChange.fire();
      } else if (d.affectsConfiguration("terminal.integrated.tabFocusMode")) {
        const u = t.getValue("terminal.integrated.tabFocusMode") ?? t.getValue("editor.tabFocusMode");
        t.updateValue("terminal.integrated.tabFocusMode", u), q.setTabFocusMode(u, "terminalFocus"), this._terminalContext.set(u), this._onDidChange.fire();
      }
    })), q.onDidChangeTabFocus(() => {
      const d = e.getContextKeyValue("focusedView") === "terminal" ? "terminalFocus" : "editorFocus";
      d === "terminalFocus" ? this._terminalContext.set(q.getTabFocusMode(d)) : this._editorContext.set(q.getTabFocusMode(d));
    });
  }
};
si = A([
  h(0, yi),
  h(1, D)
], si);
class vc {
  constructor(e, t) {
    this.primary = e, this.secondary = t;
  }
  getEncoding() {
    return this.primary.getEncoding();
  }
  async setEncoding(e, t) {
    await fa.settled([this.primary, this.secondary].map((o) => o.setEncoding(e, t)));
  }
}
class Sc {
  constructor(e, t) {
    this.primary = e, this.secondary = t;
  }
  setLanguageId(e, t) {
    [this.primary, this.secondary].forEach((o) => o.setLanguageId(e, t));
  }
}
function Fe(l) {
  if (l instanceof ze)
    return l;
  if (l instanceof Mi) {
    const t = Fe(l.primary), o = Fe(l.secondary);
    return t && o ? new vc(t, o) : t;
  }
  const e = l;
  return ma(e.setEncoding, e.getEncoding) ? e : null;
}
function pt(l) {
  if (l instanceof ze)
    return l;
  if (l instanceof Mi) {
    const t = pt(l.primary), o = pt(l.secondary);
    return t && o ? new Sc(t, o) : t;
  }
  const e = l;
  return typeof e.setLanguageId == "function" ? e : null;
}
class yc {
  constructor() {
    this.indentation = !1, this.selectionStatus = !1, this.languageId = !1, this.languageStatus = !1, this.encoding = !1, this.EOL = !1, this.tabFocusMode = !1, this.columnSelectionMode = !1, this.metadata = !1;
  }
  combine(e) {
    this.indentation = this.indentation || e.indentation, this.selectionStatus = this.selectionStatus || e.selectionStatus, this.languageId = this.languageId || e.languageId, this.languageStatus = this.languageStatus || e.languageStatus, this.encoding = this.encoding || e.encoding, this.EOL = this.EOL || e.EOL, this.tabFocusMode = this.tabFocusMode || e.tabFocusMode, this.columnSelectionMode = this.columnSelectionMode || e.columnSelectionMode, this.metadata = this.metadata || e.metadata;
  }
  hasChanges() {
    return this.indentation || this.selectionStatus || this.languageId || this.languageStatus || this.encoding || this.EOL || this.tabFocusMode || this.columnSelectionMode || this.metadata;
  }
}
class wc {
  get selectionStatus() {
    return this._selectionStatus;
  }
  get languageId() {
    return this._languageId;
  }
  get encoding() {
    return this._encoding;
  }
  get EOL() {
    return this._EOL;
  }
  get indentation() {
    return this._indentation;
  }
  get tabFocusMode() {
    return this._tabFocusMode;
  }
  get columnSelectionMode() {
    return this._columnSelectionMode;
  }
  get metadata() {
    return this._metadata;
  }
  update(e) {
    const t = new yc();
    switch (e.type) {
      case "selectionStatus":
        this._selectionStatus !== e.selectionStatus && (this._selectionStatus = e.selectionStatus, t.selectionStatus = !0);
        break;
      case "indentation":
        this._indentation !== e.indentation && (this._indentation = e.indentation, t.indentation = !0);
        break;
      case "languageId":
        this._languageId !== e.languageId && (this._languageId = e.languageId, t.languageId = !0);
        break;
      case "encoding":
        this._encoding !== e.encoding && (this._encoding = e.encoding, t.encoding = !0);
        break;
      case "EOL":
        this._EOL !== e.EOL && (this._EOL = e.EOL, t.EOL = !0);
        break;
      case "tabFocusMode":
        this._tabFocusMode !== e.tabFocusMode && (this._tabFocusMode = e.tabFocusMode, t.tabFocusMode = !0);
        break;
      case "columnSelectionMode":
        this._columnSelectionMode !== e.columnSelectionMode && (this._columnSelectionMode = e.columnSelectionMode, t.columnSelectionMode = !0);
        break;
      case "metadata":
        this._metadata !== e.metadata && (this._metadata = e.metadata, t.metadata = !0);
        break;
    }
    return t;
  }
}
const Cc = i("singleSelectionRange", "Ln {0}, Col {1} ({2} selected)"), Ic = i("singleSelection", "Ln {0}, Col {1}"), Mc = i("multiSelectionRange", "{0} selections ({1} characters selected)"), Ac = i("multiSelection", "{0} selections"), dn = i("endOfLineLineFeed", "LF"), ln = i("endOfLineCarriageReturnLineFeed", "CRLF");
let ci = class extends le {
  constructor(e, t, o, n, a, d, u) {
    super(), this.editorService = e, this.quickInputService = t, this.languageService = o, this.textFileService = n, this.statusbarService = a, this.instantiationService = d, this.contextKeyService = u, this.tabFocusModeElement = this._register(new P()), this.columnSelectionModeElement = this._register(new P()), this.indentationElement = this._register(new P()), this.selectionElement = this._register(new P()), this.encodingElement = this._register(new P()), this.eolElement = this._register(new P()), this.languageElement = this._register(new P()), this.metadataElement = this._register(new P()), this.currentProblemStatus = this._register(this.instantiationService.createInstance(di)), this.state = new wc(), this.activeEditorListeners = this._register(new Ct()), this.delayedRender = this._register(new P()), this.toRender = null, this.tabFocusMode = d.createInstance(si), this.registerCommands(), this.registerListeners();
  }
  registerListeners() {
    this._register(this.editorService.onDidActiveEditorChange(() => this.updateStatusBar())), this._register(this.textFileService.untitled.onDidChangeEncoding((e) => this.onResourceEncodingChange(e.resource))), this._register(this.textFileService.files.onDidChangeEncoding((e) => this.onResourceEncodingChange(e.resource))), this._register(U.runAndSubscribe(q.onDidChangeTabFocus, () => this.onTabFocusModeChange())), this._register(this.tabFocusMode.onDidChange(() => this.onTabFocusModeChange()));
  }
  registerCommands() {
    Io.registerCommand({ id: "changeEditorIndentation", handler: () => this.showIndentationPicker() });
  }
  async showIndentationPicker() {
    var n;
    const e = Z(this.editorService.activeTextEditorControl);
    if (!e)
      return this.quickInputService.pick([{ label: i("noEditor", "No text editor active at this time") }]);
    if ((n = this.editorService.activeEditor) != null && n.isReadonly())
      return this.quickInputService.pick([{ label: i("noWritableCodeEditor", "The active code editor is read-only.") }]);
    const t = [
      Q(e.getAction(oa.ID)),
      Q(e.getAction(na.ID)),
      Q(e.getAction(aa.ID)),
      Q(e.getAction(ra.ID)),
      Q(e.getAction(sa.ID)),
      Q(e.getAction(ca.ID)),
      Q(e.getAction(da.ID))
    ].map((a) => ({
      id: a.id,
      label: a.label,
      detail: Mo.isDefaultVariant() || a.label === a.alias ? void 0 : a.alias,
      run: () => {
        e.focus(), a.run();
      }
    }));
    t.splice(3, 0, { type: "separator", label: i("indentConvert", "convert file") }), t.unshift({ type: "separator", label: i("indentView", "change view") });
    const o = await this.quickInputService.pick(t, { placeHolder: i("pickAction", "Select Action"), matchOnDetail: !0 });
    return o == null ? void 0 : o.run();
  }
  updateTabFocusModeElement(e) {
    if (e) {
      if (!this.tabFocusModeElement.value) {
        const t = i("tabFocusModeEnabled", "Tab Moves Focus");
        this.tabFocusModeElement.value = this.statusbarService.addEntry({
          name: i("status.editor.tabFocusMode", "Accessibility Mode"),
          text: t,
          ariaLabel: t,
          tooltip: i("disableTabMode", "Disable Accessibility Mode"),
          command: "editor.action.toggleTabFocusMode",
          backgroundColor: ge(qt),
          color: ge(Kt)
        }, "status.editor.tabFocusMode", 1, 100.7);
      }
    } else
      this.tabFocusModeElement.clear();
  }
  updateColumnSelectionModeElement(e) {
    if (e) {
      if (!this.columnSelectionModeElement.value) {
        const t = i("columnSelectionModeEnabled", "Column Selection");
        this.columnSelectionModeElement.value = this.statusbarService.addEntry({
          name: i("status.editor.columnSelectionMode", "Column Selection Mode"),
          text: t,
          ariaLabel: t,
          tooltip: i("disableColumnSelectionMode", "Disable Column Selection Mode"),
          command: "editor.action.toggleColumnSelection",
          backgroundColor: ge(qt),
          color: ge(Kt)
        }, "status.editor.columnSelectionMode", 1, 100.8);
      }
    } else
      this.columnSelectionModeElement.clear();
  }
  updateSelectionElement(e) {
    if (!e) {
      this.selectionElement.clear();
      return;
    }
    const t = {
      name: i("status.editor.selection", "Editor Selection"),
      text: e,
      ariaLabel: e,
      tooltip: i("gotoLine", "Go to Line/Column"),
      command: "workbench.action.gotoLine"
    };
    this.updateElement(this.selectionElement, t, "status.editor.selection", 1, 100.5);
  }
  updateIndentationElement(e) {
    if (!e) {
      this.indentationElement.clear();
      return;
    }
    const t = {
      name: i("status.editor.indentation", "Editor Indentation"),
      text: e,
      ariaLabel: e,
      tooltip: i("selectIndentation", "Select Indentation"),
      command: "changeEditorIndentation"
    };
    this.updateElement(this.indentationElement, t, "status.editor.indentation", 1, 100.4);
  }
  updateEncodingElement(e) {
    if (!e) {
      this.encodingElement.clear();
      return;
    }
    const t = {
      name: i("status.editor.encoding", "Editor Encoding"),
      text: e,
      ariaLabel: e,
      tooltip: i("selectEncoding", "Select Encoding"),
      command: "workbench.action.editor.changeEncoding"
    };
    this.updateElement(this.encodingElement, t, "status.editor.encoding", 1, 100.3);
  }
  updateEOLElement(e) {
    if (!e) {
      this.eolElement.clear();
      return;
    }
    const t = {
      name: i("status.editor.eol", "Editor End of Line"),
      text: e,
      ariaLabel: e,
      tooltip: i("selectEOL", "Select End of Line Sequence"),
      command: "workbench.action.editor.changeEOL"
    };
    this.updateElement(this.eolElement, t, "status.editor.eol", 1, 100.2);
  }
  updateLanguageIdElement(e) {
    if (!e) {
      this.languageElement.clear();
      return;
    }
    const t = {
      name: i("status.editor.mode", "Editor Language"),
      text: e,
      ariaLabel: e,
      tooltip: i("selectLanguageMode", "Select Language Mode"),
      command: "workbench.action.editor.changeLanguageMode"
    };
    this.updateElement(this.languageElement, t, "status.editor.mode", 1, 100.1);
  }
  updateMetadataElement(e) {
    if (!e) {
      this.metadataElement.clear();
      return;
    }
    const t = {
      name: i("status.editor.info", "File Information"),
      text: e,
      ariaLabel: e,
      tooltip: i("fileInfo", "File Information")
    };
    this.updateElement(this.metadataElement, t, "status.editor.info", 1, 100);
  }
  updateElement(e, t, o, n, a) {
    e.value ? e.value.update(t) : e.value = this.statusbarService.addEntry(t, o, n, a);
  }
  updateState(e) {
    const t = this.state.update(e);
    t.hasChanges() && (this.toRender ? this.toRender.combine(t) : (this.toRender = t, this.delayedRender.value = la(() => {
      this.delayedRender.clear();
      const o = this.toRender;
      this.toRender = null, o && this.doRenderNow(o);
    })));
  }
  doRenderNow(e) {
    this.updateTabFocusModeElement(!!this.state.tabFocusMode), this.updateColumnSelectionModeElement(!!this.state.columnSelectionMode), this.updateIndentationElement(this.state.indentation), this.updateSelectionElement(this.state.selectionStatus), this.updateEncodingElement(this.state.encoding), this.updateEOLElement(this.state.EOL ? this.state.EOL === `\r
` ? ln : dn : void 0), this.updateLanguageIdElement(this.state.languageId), this.updateMetadataElement(this.state.metadata);
  }
  getSelectionLabel(e) {
    if (!(!e || !e.selections)) {
      if (e.selections.length === 1)
        return e.charactersSelected ? it(Cc, e.selections[0].positionLineNumber, e.selections[0].positionColumn, e.charactersSelected) : it(Ic, e.selections[0].positionLineNumber, e.selections[0].positionColumn);
      if (e.charactersSelected)
        return it(Mc, e.selections.length, e.charactersSelected);
      if (e.selections.length > 0)
        return it(Ac, e.selections.length);
    }
  }
  updateStatusBar() {
    const e = this.editorService.activeEditor, t = this.editorService.activeEditorPane, o = t ? ae(Z(t.getControl())) : void 0;
    if (this.onColumnSelectionModeChange(o), this.onSelectionChange(o), this.onLanguageChange(o, e), this.onEOLChange(o), this.onEncodingChange(t, o), this.onIndentationChange(o), this.onMetadataChange(t), this.currentProblemStatus.update(o), this.activeEditorListeners.clear(), t && this.activeEditorListeners.add(t.onDidChangeControl(() => {
      this.updateStatusBar();
    })), o)
      this.activeEditorListeners.add(o.onDidChangeConfiguration((n) => {
        n.hasChanged(21) && this.onColumnSelectionModeChange(o);
      })), this.activeEditorListeners.add(U.defer(o.onDidChangeCursorPosition)(() => {
        this.onSelectionChange(o), this.currentProblemStatus.update(o);
      })), this.activeEditorListeners.add(o.onDidChangeModelLanguage(() => {
        this.onLanguageChange(o, e);
      })), this.activeEditorListeners.add(U.accumulate(o.onDidChangeModelContent)((n) => {
        this.onEOLChange(o), this.currentProblemStatus.update(o);
        const a = o.getSelections();
        if (a) {
          for (const d of n)
            for (const u of d.changes)
              if (a.some((p) => Ai.areIntersecting(p, u.range))) {
                this.onSelectionChange(o);
                break;
              }
        }
      })), this.activeEditorListeners.add(o.onDidChangeModelOptions(() => {
        this.onIndentationChange(o);
      }));
    else if (t instanceof Y || t instanceof se) {
      const n = [];
      if (t instanceof se) {
        const a = t.getPrimaryEditorPane();
        a instanceof Y && n.push(a);
        const d = t.getSecondaryEditorPane();
        d instanceof Y && n.push(d);
      } else
        n.push(t);
      for (const a of n)
        this.activeEditorListeners.add(a.onDidChangeMetadata(() => {
          this.onMetadataChange(t);
        })), this.activeEditorListeners.add(a.onDidOpenInPlace(() => {
          this.updateStatusBar();
        }));
    }
  }
  onLanguageChange(e, t) {
    const o = { type: "languageId", languageId: void 0 };
    if (e && t && pt(t)) {
      const n = e.getModel();
      if (n) {
        const a = n.getLanguageId();
        o.languageId = ae(this.languageService.getLanguageName(a));
      }
    }
    this.updateState(o);
  }
  onIndentationChange(e) {
    const t = { type: "indentation", indentation: void 0 };
    if (e) {
      const o = e.getModel();
      if (o) {
        const n = o.getOptions();
        t.indentation = n.insertSpaces ? n.tabSize === n.indentSize ? i("spacesSize", "Spaces: {0}", n.indentSize) : i(
          "spacesAndTabsSize",
          "Spaces: {0} (Tab Size: {1})",
          n.indentSize,
          n.tabSize
        ) : i(
          { key: "tabSize", comment: ["Tab corresponds to the tab key"] },
          "Tab Size: {0}",
          n.tabSize
        );
      }
    }
    this.updateState(t);
  }
  onMetadataChange(e) {
    const t = { type: "metadata", metadata: void 0 };
    (e instanceof Y || e instanceof se) && (t.metadata = e.getMetadata()), this.updateState(t);
  }
  onColumnSelectionModeChange(e) {
    const t = { type: "columnSelectionMode", columnSelectionMode: !1 };
    e != null && e.getOption(21) && (t.columnSelectionMode = !0), this.updateState(t);
  }
  onSelectionChange(e) {
    const t = /* @__PURE__ */ Object.create(null);
    if (e) {
      t.selections = e.getSelections() || [], t.charactersSelected = 0;
      const o = e.getModel();
      if (o)
        for (const n of t.selections)
          typeof t.charactersSelected != "number" && (t.charactersSelected = 0), t.charactersSelected += o.getCharacterCountInRange(n);
      if (t.selections.length === 1) {
        const n = e.getPosition(), a = new ua(
          t.selections[0].selectionStartLineNumber,
          t.selections[0].selectionStartColumn,
          t.selections[0].positionLineNumber,
          n ? e.getStatusbarColumn(n) : t.selections[0].positionColumn
        );
        t.selections[0] = a;
      }
    }
    this.updateState({ type: "selectionStatus", selectionStatus: this.getSelectionLabel(t) });
  }
  onEOLChange(e) {
    const t = { type: "EOL", EOL: void 0 };
    if (e && !e.getOption(89)) {
      const o = e.getModel();
      o && (t.EOL = o.getEOL());
    }
    this.updateState(t);
  }
  onEncodingChange(e, t) {
    if (e && !this.isActiveEditor(e))
      return;
    const o = { type: "encoding", encoding: void 0 };
    if (e && (t != null && t.hasModel())) {
      const n = e.input ? Fe(e.input) : null;
      if (n) {
        const a = n.getEncoding(), d = typeof a == "string" ? j[a] : void 0;
        d ? o.encoding = d.labelShort : o.encoding = a;
      }
    }
    this.updateState(o);
  }
  onResourceEncodingChange(e) {
    const t = this.editorService.activeEditorPane;
    if (t) {
      const o = lt.getCanonicalUri(t.input, { supportSideBySide: ut.PRIMARY });
      if (o && _e(o, e)) {
        const n = ae(Z(t.getControl()));
        return this.onEncodingChange(t, n);
      }
    }
  }
  onTabFocusModeChange() {
    const e = { type: "tabFocusMode", tabFocusMode: q.getTabFocusMode(this.contextKeyService.getContextKeyValue("focusedView") === "terminal" ? "terminalFocus" : "editorFocus") };
    this.updateState(e);
  }
  isActiveEditor(e) {
    const t = this.editorService.activeEditorPane;
    return !!t && t === e;
  }
};
ci = A([
  h(0, de),
  h(1, At),
  h(2, Co),
  h(3, Ci),
  h(4, Ii),
  h(5, Mt),
  h(6, yi)
], ci);
let di = class extends le {
  constructor(e, t, o) {
    super(), this.statusbarService = e, this.markerService = t, this.configurationService = o, this.editor = void 0, this.markers = [], this.currentMarker = null, this.statusBarEntryAccessor = this._register(new P()), this._register(t.onMarkerChanged((n) => this.onMarkerChanged(n))), this._register(U.filter(o.onDidChangeConfiguration, (n) => n.affectsConfiguration("problems.showCurrentInStatus"))(() => this.updateStatus()));
  }
  update(e) {
    this.editor = e, this.updateMarkers(), this.updateStatus();
  }
  updateStatus() {
    const e = this.currentMarker;
    if (this.currentMarker = this.getMarker(), this.hasToUpdateStatus(e, this.currentMarker))
      if (this.currentMarker) {
        const t = ha(this.currentMarker.message)[0], o = `${this.getType(this.currentMarker)} ${t}`;
        this.statusBarEntryAccessor.value || (this.statusBarEntryAccessor.value = this.statusbarService.addEntry({ name: i("currentProblem", "Current Problem"), text: "", ariaLabel: "" }, "statusbar.currentProblem", 0)), this.statusBarEntryAccessor.value.update({ name: i("currentProblem", "Current Problem"), text: o, ariaLabel: o });
      } else
        this.statusBarEntryAccessor.clear();
  }
  hasToUpdateStatus(e, t) {
    return !t || !e ? !0 : zi.makeKey(e) !== zi.makeKey(t);
  }
  getType(e) {
    switch (e.severity) {
      case oe.Error:
        return "$(error)";
      case oe.Warning:
        return "$(warning)";
      case oe.Info:
        return "$(info)";
    }
    return "";
  }
  getMarker() {
    if (!this.configurationService.getValue("problems.showCurrentInStatus") || !this.editor || !this.editor.getModel())
      return null;
    const t = this.editor.getPosition();
    return t && this.markers.find((o) => Ai.containsPosition(o, t)) || null;
  }
  onMarkerChanged(e) {
    if (!this.editor)
      return;
    const t = this.editor.getModel();
    t && (t && !e.some((o) => _e(t.uri, o)) || this.updateMarkers());
  }
  updateMarkers() {
    if (!this.editor)
      return;
    const e = this.editor.getModel();
    e && (e ? (this.markers = this.markerService.read({
      resource: e.uri,
      severities: oe.Error | oe.Warning | oe.Info
    }), this.markers.sort(kc)) : this.markers = [], this.updateStatus());
  }
};
di = A([
  h(0, Ii),
  h(1, Jn),
  h(2, D)
], di);
function kc(l, e) {
  let t = ga(l.resource.toString(), e.resource.toString());
  return t === 0 && (t = oe.compare(l.severity, e.severity)), t === 0 && (t = Ai.compareRangesUsingStarts(l, e)), t;
}
var we;
let li = (we = class extends Ve {
  constructor(e, t, o) {
    super(we.ID, i(
      "showLanguageExtensions",
      "Search Marketplace Extensions for '{0}'...",
      e
    )), this.fileExtension = e, this.commandService = t, this.enabled = o.isEnabled();
  }
  async run() {
    await this.commandService.executeCommand("workbench.extensions.action.showExtensionsForLanguage", this.fileExtension);
  }
}, we.ID = "workbench.action.showLanguageExtensions", we);
li = A([
  h(1, Ei),
  h(2, Qn)
], li);
const Pe = class Pe extends k {
  constructor() {
    super({
      id: Pe.ID,
      title: { value: i("changeMode", "Change Language Mode"), original: "Change Language Mode" },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: vo(2089, 43)
      },
      precondition: g.not("notebookEditorFocused")
    });
  }
  async run(e) {
    var Bi;
    const t = e.get(At), o = e.get(de), n = e.get(Co), a = e.get(Yn), d = e.get(Ci), u = e.get(Xn), p = e.get(Mt), m = e.get(D), E = e.get(He), b = Z(o.activeTextEditorControl);
    if (!b) {
      await t.pick([{ label: i("noEditor", "No text editor active at this time") }]);
      return;
    }
    const S = b.getModel(), v = lt.getOriginalUri(o.activeEditor, { supportSideBySide: ut.PRIMARY });
    let I, L;
    S && (L = S.getLanguageId(), I = ae(n.getLanguageName(L)));
    let M = !!v;
    (v == null ? void 0 : v.scheme) === ht.untitled && !((Bi = d.untitled.get(v)) != null && Bi.hasAssociatedFilePath) && (M = !1);
    const T = n.getSortedRegisteredLanguageNames().map(({ languageName: J, languageId: z }) => {
      const Ze = n.getExtensions(z).join(" ");
      let F;
      return I === J ? F = i("languageDescription", "({0}) - Configured Language", z) : F = i("languageDescriptionConfigured", "({0})", z), {
        label: J,
        meta: Ze,
        iconClasses: Vi(z),
        description: F
      };
    });
    T.unshift({ type: "separator", label: i("languagesPicks", "languages (identifier)") });
    let G, te, K;
    if (M && v) {
      const J = Ui(v) || Hi(v);
      K = p.createInstance(li, J), K.enabled && T.unshift(K), te = { label: i(
        "configureModeSettings",
        "Configure '{0}' language based settings...",
        I
      ) }, T.unshift(te), G = { label: i("configureAssociationsExt", "Configure File Association for '{0}'...", J) }, T.unshift(G);
    }
    const ke = {
      label: i("autoDetect", "Auto Detect")
    };
    T.unshift(ke);
    const C = await t.pick(T, { placeHolder: i("pickLanguage", "Select Language Mode"), matchOnDescription: !0 });
    if (!C)
      return;
    if (C === K) {
      K.run();
      return;
    }
    if (C === G) {
      v && this.configureFileAssociation(v, n, t, m);
      return;
    }
    if (C === te) {
      u.openUserSettings({ jsonEditor: !0, revealSetting: { key: `[${Zn(L)}]`, edit: !0 } });
      return;
    }
    const _ = o.activeEditor;
    if (_) {
      const J = pt(_);
      if (J) {
        let z, Ze;
        if (C === ke) {
          if (S) {
            const F = lt.getOriginalUri(_, { supportSideBySide: ut.PRIMARY });
            if (F) {
              let ie = ae(n.guessLanguageIdByFilepathOrFirstLine(F, S.getLineContent(1)));
              (!ie || ie === "unknown") && (Ze = await a.detectLanguage(F), ie = Ze), ie && (z = n.createById(ie));
            }
          }
        } else {
          const F = n.getLanguageIdByLanguageName(C.label);
          z = n.createById(F), v && a.detectLanguage(v).then((ie) => {
            const gn = n.getLanguageIdByLanguageName(C.label) || "unknown";
            if (ie === L && L !== gn) {
              const pn = m.getValue("workbench.editor.preferHistoryBasedLanguageDetection") ? "history" : "classic";
              E.publicLog2(ea, {
                currentLanguageId: I ?? "unknown",
                nextLanguageId: C.label,
                lineCount: (S == null ? void 0 : S.getLineCount()) ?? -1,
                modelPreference: pn
              });
            }
          });
        }
        if (typeof z < "u" && (J.setLanguageId(z.languageId, Pe.ID), (v == null ? void 0 : v.scheme) === ht.untitled)) {
          const F = m.getValue("workbench.editor.preferHistoryBasedLanguageDetection") ? "history" : "classic";
          E.publicLog2("setUntitledDocumentLanguage", {
            to: z.languageId,
            from: L ?? "none",
            modelPreference: F
          });
        }
      }
      b.focus();
    }
  }
  configureFileAssociation(e, t, o, n) {
    const a = Ui(e), d = Hi(e), u = t.guessLanguageIdByFilepathOrFirstLine(ta.file(d)), m = t.getSortedRegisteredLanguageNames().map(({ languageName: E, languageId: b }) => ({
      id: b,
      label: E,
      iconClasses: Vi(b),
      description: b === u ? i("currentAssociation", "Current Association") : void 0
    }));
    setTimeout(async () => {
      const E = await o.pick(m, { placeHolder: i(
        "pickLanguageToConfigure",
        "Select Language Mode to Associate with '{0}'",
        a || d
      ) });
      if (E) {
        const b = n.inspect(Wi);
        let S;
        a && d[0] !== "." ? S = `*${a}` : S = d;
        let v = 2;
        b.workspaceValue && b.workspaceValue[S] && (v = 5);
        const I = ia(v === 5 ? b.workspaceValue : b.userValue) || /* @__PURE__ */ Object.create(null);
        I[S] = E.id, n.updateValue(Wi, I, v);
      }
    }, 50);
  }
};
Pe.ID = "workbench.action.editor.changeLanguageMode";
let ui = Pe;
class Lc extends k {
  constructor() {
    super({
      id: "workbench.action.editor.changeEOL",
      title: { value: i("changeEndOfLine", "Change End of Line Sequence"), original: "Change End of Line Sequence" },
      f1: !0
    });
  }
  async run(e) {
    var m, E;
    const t = e.get(de), o = e.get(At), n = Z(t.activeTextEditorControl);
    if (!n) {
      await o.pick([{ label: i("noEditor", "No text editor active at this time") }]);
      return;
    }
    if ((m = t.activeEditor) != null && m.isReadonly()) {
      await o.pick([{ label: i("noWritableCodeEditor", "The active code editor is read-only.") }]);
      return;
    }
    let a = n.getModel();
    const d = [
      { label: dn, eol: 0 },
      { label: ln, eol: 1 }
    ], u = (a == null ? void 0 : a.getEOL()) === `
` ? 0 : 1, p = await o.pick(d, { placeHolder: i("pickEndOfLine", "Select End of Line Sequence"), activeItem: d[u] });
    if (p) {
      const b = Z(t.activeTextEditorControl);
      b != null && b.hasModel() && !((E = t.activeEditor) != null && E.isReadonly()) && (a = b.getModel(), a.pushStackElement(), a.pushEOL(p.eol), a.pushStackElement());
    }
    n.focus();
  }
}
class Dc extends k {
  constructor() {
    super({
      id: "workbench.action.editor.changeEncoding",
      title: { value: i("changeEncoding", "Change File Encoding"), original: "Change File Encoding" },
      f1: !0
    });
  }
  async run(e) {
    const t = e.get(de), o = e.get(At), n = e.get(wi), a = e.get(Ci), d = e.get(yo), u = Z(t.activeTextEditorControl);
    if (!u) {
      await o.pick([{ label: i("noEditor", "No text editor active at this time") }]);
      return;
    }
    const p = t.activeEditorPane;
    if (!p) {
      await o.pick([{ label: i("noEditor", "No text editor active at this time") }]);
      return;
    }
    const m = Fe(p.input);
    if (!m) {
      await o.pick([{ label: i("noFileEditor", "No file active at this time") }]);
      return;
    }
    const E = { label: i("saveWithEncoding", "Save with Encoding") }, b = { label: i("reopenWithEncoding", "Reopen with Encoding") };
    if (!Mo.isDefaultVariant()) {
      const C = "Save with Encoding";
      C !== E.label && (E.detail = C);
      const _ = "Reopen with Encoding";
      _ !== b.label && (b.detail = _);
    }
    let S;
    if (m instanceof ze ? S = E : p.input.isReadonly() ? S = b : S = await o.pick([b, E], { placeHolder: i("pickAction", "Select Action"), matchOnDetail: !0 }), !S)
      return;
    await pa(50);
    const v = lt.getOriginalUri(p.input, { supportSideBySide: ut.PRIMARY });
    if (!v || !n.hasProvider(v) && v.scheme !== ht.untitled)
      return;
    let I;
    n.hasProvider(v) && (I = (await a.readStream(v, { autoGuessEncoding: !0 })).encoding);
    const L = S === b, M = d.getValue(ae(v), "files.encoding");
    let W, T;
    const G = Object.keys(j).sort((C, _) => C === M ? -1 : _ === M ? 1 : j[C].order - j[_].order).filter((C) => C === I && I !== M ? !1 : !L || !j[C].encodeOnly).map((C, _) => (C === m.getEncoding() ? W = _ : j[C].alias === m.getEncoding() && (T = _), { id: C, label: j[C].labelLong, description: C })), te = G.slice();
    I && M !== I && j[I] && (G.unshift({ type: "separator" }), G.unshift({ id: I, label: j[I].labelLong, description: i("guessedEncoding", "Guessed from content") }));
    const K = await o.pick(G, {
      placeHolder: L ? i("pickEncodingForReopen", "Select File Encoding to Reopen File") : i("pickEncodingForSave", "Select File Encoding to Save with"),
      activeItem: te[typeof W == "number" ? W : typeof T == "number" ? T : -1]
    });
    if (!K || !t.activeEditorPane)
      return;
    const ke = Fe(t.activeEditorPane.input);
    typeof K.id < "u" && ke && await ke.setEncoding(K.id, L ? 1 : 0), u.focus();
  }
}
let hi = class extends le {
  constructor(e, t, o, n, a, d) {
    super(), this.filesConfigurationService = e, this.hostService = t, this.editorService = o, this.editorGroupService = n, this.workingCopyService = a, this.logService = d, this.pendingAutoSavesAfterDelay = /* @__PURE__ */ new Map(), this.lastActiveEditor = void 0, this.lastActiveGroupId = void 0, this.lastActiveEditorControlDisposable = this._register(new Ct()), this.onAutoSaveConfigurationChange(e.getAutoSaveConfiguration(), !1);
    for (const u of this.workingCopyService.dirtyWorkingCopies)
      this.onDidRegister(u);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.hostService.onDidChangeFocus((e) => this.onWindowFocusChange(e))), this._register(this.editorService.onDidActiveEditorChange(() => this.onDidActiveEditorChange())), this._register(this.filesConfigurationService.onAutoSaveConfigurationChange((e) => this.onAutoSaveConfigurationChange(e, !0))), this._register(this.workingCopyService.onDidRegister((e) => this.onDidRegister(e))), this._register(this.workingCopyService.onDidUnregister((e) => this.onDidUnregister(e))), this._register(this.workingCopyService.onDidChangeDirty((e) => this.onDidChangeDirty(e))), this._register(this.workingCopyService.onDidChangeContent((e) => this.onDidChangeContent(e)));
  }
  onWindowFocusChange(e) {
    e || this.maybeTriggerAutoSave(4);
  }
  onDidActiveEditorChange() {
    this.lastActiveEditor && typeof this.lastActiveGroupId == "number" && this.maybeTriggerAutoSave(3, { groupId: this.lastActiveGroupId, editor: this.lastActiveEditor });
    const e = this.editorGroupService.activeGroup, t = this.lastActiveEditor = ae(e.activeEditor);
    this.lastActiveGroupId = e.id, this.lastActiveEditorControlDisposable.clear();
    const o = this.editorService.activeEditorPane;
    t && o && this.lastActiveEditorControlDisposable.add(o.onDidBlur(() => {
      this.maybeTriggerAutoSave(3, { groupId: e.id, editor: t });
    }));
  }
  maybeTriggerAutoSave(e, t) {
    if (t != null && t.editor.isReadonly() || t != null && t.editor.hasCapability(4))
      return;
    const o = this.filesConfigurationService.getAutoSaveMode();
    (e === 4 && (o === 3 || o === 4) || e === 3 && o === 3) && (this.logService.trace(`[editor auto save] triggering auto save with reason ${e}`), t ? this.editorService.save(t, { reason: e }) : this.saveAllDirty({ reason: e }));
  }
  onAutoSaveConfigurationChange(e, t) {
    if (this.autoSaveAfterDelay = typeof e.autoSaveDelay == "number" && e.autoSaveDelay >= 0 ? e.autoSaveDelay : void 0, t) {
      let o;
      switch (this.filesConfigurationService.getAutoSaveMode()) {
        case 3:
          o = 3;
          break;
        case 4:
          o = 4;
          break;
        case 1:
        case 2:
          o = 2;
          break;
      }
      o && this.saveAllDirty({ reason: o });
    }
  }
  saveAllDirty(e) {
    for (const t of this.workingCopyService.dirtyWorkingCopies)
      t.capabilities & 2 || t.save(e);
  }
  onDidRegister(e) {
    e.isDirty() && this.scheduleAutoSave(e);
  }
  onDidUnregister(e) {
    this.discardAutoSave(e);
  }
  onDidChangeDirty(e) {
    e.isDirty() ? this.scheduleAutoSave(e) : this.discardAutoSave(e);
  }
  onDidChangeContent(e) {
    e.isDirty() && this.scheduleAutoSave(e);
  }
  scheduleAutoSave(e) {
    if (typeof this.autoSaveAfterDelay != "number" || e.capabilities & 2)
      return;
    this.discardAutoSave(e), this.logService.trace(`[editor auto save] scheduling auto save after ${this.autoSaveAfterDelay}ms`, e.resource.toString(), e.typeId);
    const t = setTimeout(() => {
      this.pendingAutoSavesAfterDelay.delete(e), e.isDirty() && (this.logService.trace("[editor auto save] running auto save", e.resource.toString(), e.typeId), e.save({ reason: 2 }));
    }, this.autoSaveAfterDelay);
    this.pendingAutoSavesAfterDelay.set(e, st(() => {
      this.logService.trace("[editor auto save] clearing pending auto save", e.resource.toString(), e.typeId), clearTimeout(t);
    }));
  }
  discardAutoSave(e) {
    ya(this.pendingAutoSavesAfterDelay.get(e)), this.pendingAutoSavesAfterDelay.delete(e);
  }
};
hi = A([
  h(0, ba),
  h(1, Ea),
  h(2, de),
  h(3, wo),
  h(4, va),
  h(5, Sa)
], hi);
let gi = class extends le {
  constructor(e, t, o, n, a) {
    super(), this.environmentService = t, this.pathService = o, this.textEditorService = n, this.untitledTextEditorService = a, this._register(e.registerHandler(this));
  }
  handles(e) {
    return e.resource.scheme === ht.untitled && e.typeId === Aa;
  }
  isOpen(e, t) {
    return this.handles(e) ? t instanceof ze && _e(e.resource, t.resource) : !1;
  }
  createEditor(e) {
    let t;
    return this.untitledTextEditorService.isUntitledWithAssociatedResource(e.resource) ? t = ka(e.resource, this.environmentService.remoteAuthority, this.pathService.defaultUriScheme) : t = e.resource, this.textEditorService.createTextEditor({ resource: t, forceUntitled: !0 });
  }
};
gi = A([
  h(0, wa),
  h(1, Ao),
  h(2, Ca),
  h(3, Ia),
  h(4, Ma)
], gi);
var V;
let pi = (V = class extends le {
  constructor(e, t, o) {
    super(), this.editorResolverService = e, this.environmentService = o, this.configurationRegistry = H.as(La.Configuration), (async () => (await t.whenInstalledExtensionsRegistered(), this.updateDynamicEditorConfigurations(), this.registerListeners()))();
  }
  registerListeners() {
    U.debounce(this.editorResolverService.onDidChangeEditorRegistrations, (e, t) => t)(() => this.updateDynamicEditorConfigurations());
  }
  updateDynamicEditorConfigurations() {
    const e = [...this.editorResolverService.getEditors(), ...V.AUTO_LOCK_EXTRA_EDITORS].filter((m) => !V.AUTO_LOCK_REMOVE_EDITORS.has(m.id)), t = this.editorResolverService.getEditors().filter((m) => m.priority !== Gt.exclusive).map((m) => m.id), o = /* @__PURE__ */ Object.create(null);
    for (const m of e)
      o[m.id] = {
        type: "boolean",
        default: V.AUTO_LOCK_DEFAULT_ENABLED.has(m.id),
        description: m.label
      };
    const n = /* @__PURE__ */ Object.create(null);
    for (const m of e)
      n[m.id] = V.AUTO_LOCK_DEFAULT_ENABLED.has(m.id);
    const a = this.autoLockConfigurationNode;
    this.autoLockConfigurationNode = {
      ...ot,
      properties: {
        "workbench.editor.autoLockGroups": {
          type: "object",
          description: i(
            "workbench.editor.autoLockGroups",
            "If an editor matching one of the listed types is opened as the first in an editor group and more than one group is open, the group is automatically locked. Locked groups will only be used for opening editors when explicitly chosen by a user gesture (for example drag and drop), but not by default. Consequently, the active editor in a locked group is less likely to be replaced accidentally with a different editor."
          ),
          properties: o,
          default: n,
          additionalProperties: !1
        }
      }
    };
    const d = this.defaultBinaryEditorConfigurationNode;
    this.defaultBinaryEditorConfigurationNode = {
      ...ot,
      properties: {
        "workbench.editor.defaultBinaryEditor": {
          type: "string",
          default: "",
          enum: [...t, ""],
          description: i(
            "workbench.editor.defaultBinaryEditor",
            "The default editor for files detected as binary. If undefined, the user will be presented with a picker."
          )
        }
      }
    };
    const u = this.editorAssociationsConfigurationNode;
    this.editorAssociationsConfigurationNode = {
      ...ot,
      properties: {
        "workbench.editorAssociations": {
          type: "object",
          markdownDescription: i(
            "editor.editorAssociations",
            'Configure [glob patterns](https://aka.ms/vscode-glob-patterns) to editors (for example `"*.hex": "hexEditor.hexedit"`). These have precedence over the default behavior.'
          ),
          patternProperties: {
            ".*": {
              type: "string",
              enum: t
            }
          }
        }
      }
    };
    const p = this.editorLargeFileConfirmationConfigurationNode;
    this.editorLargeFileConfirmationConfigurationNode = {
      ...ot,
      properties: {
        "workbench.editorLargeFileConfirmation": {
          type: "number",
          default: Da(this.environmentService.remoteAuthority) / So.MB,
          minimum: 1,
          scope: 4,
          markdownDescription: i(
            "editorLargeFileSizeConfirmation",
            "Controls the minimum size of a file in MB before asking for confirmation when opening in the editor. Note that this setting may not apply to all editor types and environments."
          )
        }
      }
    }, this.configurationRegistry.updateConfigurations({
      add: [
        this.autoLockConfigurationNode,
        this.defaultBinaryEditorConfigurationNode,
        this.editorAssociationsConfigurationNode,
        this.editorLargeFileConfirmationConfigurationNode
      ],
      remove: Ta([
        a,
        d,
        u,
        p
      ])
    });
  }
}, V.AUTO_LOCK_DEFAULT_ENABLED = /* @__PURE__ */ new Set(["terminalEditor"]), V.AUTO_LOCK_EXTRA_EDITORS = [
  {
    id: "workbench.input.interactive",
    label: i("interactiveWindow", "Interactive Window"),
    priority: Gt.builtin
  },
  {
    id: "mainThreadWebview-markdown.preview",
    label: i("markdownPreview", "Markdown Preview"),
    priority: Gt.builtin
  }
], V.AUTO_LOCK_REMOVE_EDITORS = /* @__PURE__ */ new Set([
  "vscode-interactive-input",
  "interactive",
  "vscode.markdown.preview.editor"
]), V);
pi = A([
  h(0, xa),
  h(1, Pa),
  h(2, Ao)
], pi);
let mi = class extends le {
  constructor(e, t, o, n) {
    super(), this.configurationService = e, this.notificationService = t, this._accessibilityService = o, this.statusbarService = n, this.screenReaderNotification = null, this.promptedScreenReader = !1, this.screenReaderModeElement = this._register(new P()), this._register(this._accessibilityService.onDidChangeScreenReaderOptimized(() => this.onScreenReaderModeChange())), this._register(e.onDidChangeConfiguration((a) => {
      a.affectsConfiguration("editor.accessibilitySupport") && this.onScreenReaderModeChange();
    })), Io.registerCommand({ id: "showEditorScreenReaderNotification", handler: () => this.showScreenReaderNotification() }), this.updateScreenReaderModeElement(this._accessibilityService.isScreenReaderOptimized());
  }
  showScreenReaderNotification() {
    this.screenReaderNotification || (this.screenReaderNotification = this.notificationService.prompt(Wt.Info, i(
      "screenReaderDetectedExplanation.question",
      "Are you using a screen reader to operate VS Code?"
    ), [{
      label: i("screenReaderDetectedExplanation.answerYes", "Yes"),
      run: () => {
        this.configurationService.updateValue("editor.accessibilitySupport", "on", 2);
      }
    }, {
      label: i("screenReaderDetectedExplanation.answerNo", "No"),
      run: () => {
        this.configurationService.updateValue("editor.accessibilitySupport", "off", 2);
      }
    }], {
      sticky: !0,
      priority: Ba.URGENT
    }), U.once(this.screenReaderNotification.onDidClose)(() => this.screenReaderNotification = null));
  }
  updateScreenReaderModeElement(e) {
    if (e) {
      if (!this.screenReaderModeElement.value) {
        const t = i("screenReaderDetected", "Screen Reader Optimized");
        this.screenReaderModeElement.value = this.statusbarService.addEntry({
          name: i("status.editor.screenReaderMode", "Screen Reader Mode"),
          text: t,
          ariaLabel: t,
          command: "showEditorScreenReaderNotification",
          backgroundColor: ge(qt),
          color: ge(Kt)
        }, "status.editor.screenReaderMode", 1, 100.6);
      }
    } else
      this.screenReaderModeElement.clear();
  }
  onScreenReaderModeChange() {
    this._accessibilityService.isScreenReaderOptimized() && this.configurationService.getValue("editor.accessibilitySupport") === "auto" && (this.promptedScreenReader || (this.promptedScreenReader = !0, setTimeout(() => this.showScreenReaderNotification(), 100))), this.screenReaderNotification && this.screenReaderNotification.close(), this.updateScreenReaderModeElement(this._accessibilityService.isScreenReaderOptimized());
  }
};
mi = A([
  h(0, D),
  h(1, Ra),
  h(2, _a),
  h(3, Ii)
], mi);
class xi extends k {
  constructor() {
    super({
      id: "diffEditor.toggleCollapseUnchangedRegions",
      title: { value: i("toggleCollapseUnchangedRegions", "Toggle Collapse Unchanged Regions"), original: "Toggle Collapse Unchanged Regions" },
      icon: f.map,
      precondition: qe.create("diffEditorVersion", 2)
    });
  }
  run(e, ...t) {
    const o = e.get(D), n = !o.getValue("diffEditor.experimental.collapseUnchangedRegions");
    o.updateValue("diffEditor.experimental.collapseUnchangedRegions", n);
  }
}
r(xi);
c.appendMenuItem(s.EditorTitle, {
  command: {
    id: new xi().desc.id,
    title: i("collapseUnchangedRegions", "Show Unchanged Regions"),
    icon: f.map
  },
  order: 22,
  group: "navigation",
  when: g.and(g.has("config.diffEditor.experimental.collapseUnchangedRegions"), qe.create("diffEditorVersion", 2))
});
c.appendMenuItem(s.EditorTitle, {
  command: {
    id: new xi().desc.id,
    title: i("showUnchangedRegions", "Collapse Unchanged Regions"),
    icon: It.modify(f.map, "disabled")
  },
  order: 22,
  group: "navigation",
  when: g.and(g.has("config.diffEditor.experimental.collapseUnchangedRegions").negate(), qe.create("diffEditorVersion", 2))
});
class Tc extends k {
  constructor() {
    super({
      id: "diffEditor.toggleShowMovedCodeBlocks",
      title: { value: i("toggleShowMovedCodeBlocks", "Toggle Show Moved Code Blocks"), original: "Toggle Show Moved Code Blocks" },
      precondition: qe.create("diffEditorVersion", 2)
    });
  }
  run(e, ...t) {
    const o = e.get(D), n = !o.getValue("diffEditor.experimental.showMoves");
    o.updateValue("diffEditor.experimental.showMoves", n);
  }
}
r(Tc);
const xc = {
  value: i("diffEditor", "Diff Editor"),
  original: "Diff Editor"
};
class Pc extends Oa {
  constructor() {
    super({
      id: "diffEditor.switchSide",
      title: { value: i("switchSide", "Switch Side"), original: "Switch Side" },
      icon: f.arrowSwap,
      precondition: g.and(qe.create("diffEditorVersion", 2), g.has("isInDiffEditor")),
      f1: !0,
      category: xc
    });
  }
  runEditorCommand(e, t, ...o) {
    const n = Ga(e);
    n instanceof Fa && n.switchSide();
  }
}
r(Pc);
H.as(kt.EditorPane).registerEditorPane(Ce.create(qi, qi.ID, i("textEditor", "Text Editor")), [
  new Be(ze),
  new Be(Na)
]);
H.as(kt.EditorPane).registerEditorPane(Ce.create(Ki, Ki.ID, i("textDiffEditor", "Text Diff Editor")), [
  new Be(ko)
]);
H.as(kt.EditorPane).registerEditorPane(Ce.create(se, se.ID, i("binaryDiffEditor", "Binary Diff Editor")), [
  new Be(ko)
]);
H.as(kt.EditorPane).registerEditorPane(Ce.create(zt, zt.ID, i("sideBySideEditor", "Side by Side Editor")), [
  new Be(Mi)
]);
H.as(Ke.Workbench).registerWorkbenchContribution(hi, 2);
H.as(Ke.Workbench).registerWorkbenchContribution(ci, 2);
H.as(Ke.Workbench).registerWorkbenchContribution(mi, 2);
H.as(Ke.Workbench).registerWorkbenchContribution(gi, 2);
H.as(Ke.Workbench).registerWorkbenchContribution(pi, 2);
Va(ji.ID, ji, 1);
const Pi = H.as(Ua.Quickaccess), _t = "inEditorsPicker", un = g.and(Ha, g.has(_t));
Pi.registerQuickAccessProvider({
  ctor: $i,
  prefix: $i.PREFIX,
  contextKey: _t,
  placeholder: i("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: i(
    "activeGroupEditorsByMostRecentlyUsedQuickAccess",
    "Show Editors in Active Group by Most Recently Used"
  ), commandId: Lo.ID }]
});
Pi.registerQuickAccessProvider({
  ctor: Ji,
  prefix: Ji.PREFIX,
  contextKey: _t,
  placeholder: i("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: i(
    "allEditorsByAppearanceQuickAccess",
    "Show All Opened Editors By Appearance"
  ), commandId: Do.ID }]
});
Pi.registerQuickAccessProvider({
  ctor: Qi,
  prefix: Qi.PREFIX,
  contextKey: _t,
  placeholder: i("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: i(
    "allEditorsByMostRecentlyUsedQuickAccess",
    "Show All Opened Editors By Most Recently Used"
  ), commandId: To.ID }]
});
r(ui);
r(Lc);
r(Dc);
r(Wa);
r(za);
r(qa);
r(Ka);
r(ja);
r($a);
r(Ja);
r(Qa);
r(Ya);
r(Xa);
r(Za);
r(er);
r(xo);
r(Po);
r(Do);
r(To);
r(Lo);
r(tr);
r(ir);
r(or);
r(nr);
r(ar);
r(rr);
r(ki);
r(sr);
r(cr);
r(dr);
r(lr);
r(ur);
r(hr);
r(gr);
r(pr);
r(mr);
r(fr);
r(br);
r(Er);
r(vr);
r(Sr);
r(yr);
r(wr);
r(Cr);
r(Ir);
r(Mr);
r(Ar);
r(kr);
r(Lr);
r(Dr);
r(Tr);
r(xr);
r(Pr);
r(Rr);
r(_r);
r(Br);
r(Or);
r(Gr);
r(Fr);
r(Nr);
r(Vr);
r(Ur);
r(Hr);
r(Wr);
r(zr);
r(qr);
r(Kr);
r(jr);
r($r);
r(Jr);
r(Qr);
r(Yr);
r(Xr);
r(Zr);
r(es);
r(ts);
r(is);
r(os);
r(ns);
r(as);
r(rs);
r(ss);
r(cs);
r(ds);
r(ls);
r(us);
r(hs);
r(gs);
r(Ro);
r(_o);
r(Bo);
r(Oo);
r(Go);
r(Fo);
r(No);
r(Vo);
r(ps);
r(ms);
r(fs);
r(bs);
r(Es);
r(vs);
r(Ss);
const lo = "workbench.action.quickOpenNavigateNextInEditorPicker";
Si.registerCommandAndKeybindingRule({
  id: lo,
  weight: 200 + 50,
  handler: Uo(lo, !0),
  when: un,
  primary: 2050,
  mac: { primary: 258 }
});
const uo = "workbench.action.quickOpenNavigatePreviousInEditorPicker";
Si.registerCommandAndKeybindingRule({
  id: uo,
  weight: 200 + 50,
  handler: Uo(uo, !1),
  when: un,
  primary: 3074,
  mac: { primary: 1282 }
});
ys();
c.appendMenuItem(s.EmptyEditorGroup, { command: { id: Ho, title: i("unlockGroupAction", "Unlock Group"), icon: f.lock }, group: "navigation", order: 10, when: Lt });
c.appendMenuItem(s.EmptyEditorGroup, { command: { id: Wo, title: i("closeGroupAction", "Close Group"), icon: f.close }, group: "navigation", order: 20 });
c.appendMenuItem(s.EmptyEditorGroupContext, { command: { id: Dt, title: i("splitUp", "Split Up") }, group: "2_split", order: 10 });
c.appendMenuItem(s.EmptyEditorGroupContext, { command: { id: je, title: i("splitDown", "Split Down") }, group: "2_split", order: 20 });
c.appendMenuItem(s.EmptyEditorGroupContext, { command: { id: Tt, title: i("splitLeft", "Split Left") }, group: "2_split", order: 30 });
c.appendMenuItem(s.EmptyEditorGroupContext, { command: { id: $e, title: i("splitRight", "Split Right") }, group: "2_split", order: 40 });
c.appendMenuItem(s.EmptyEditorGroupContext, { command: { id: zo, title: i("toggleLockGroup", "Lock Group"), toggled: Lt }, group: "3_lock", order: 10, when: R });
c.appendMenuItem(s.EmptyEditorGroupContext, { command: { id: Wo, title: i("close", "Close") }, group: "4_close", order: 10, when: R });
c.appendMenuItem(s.EditorTabsBarContext, { command: { id: Dt, title: i("splitUp", "Split Up") }, group: "2_split", order: 10 });
c.appendMenuItem(s.EditorTabsBarContext, { command: { id: je, title: i("splitDown", "Split Down") }, group: "2_split", order: 20 });
c.appendMenuItem(s.EditorTabsBarContext, { command: { id: Tt, title: i("splitLeft", "Split Left") }, group: "2_split", order: 30 });
c.appendMenuItem(s.EditorTabsBarContext, { command: { id: $e, title: i("splitRight", "Split Right") }, group: "2_split", order: 40 });
c.appendMenuItem(s.EditorTabsBarContext, { command: { id: Oe.ID, title: i("toggleTabs", "Enable Tabs"), toggled: g.has("config.workbench.editor.showTabs") }, group: "3_config", order: 10 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Ie, title: i("close", "Close") }, group: "1_close", order: 10 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: qo, title: i("closeOthers", "Close Others"), precondition: ws.notEqualsTo("1") }, group: "1_close", order: 20 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Ko, title: i("closeRight", "Close to the Right"), precondition: jo.toNegated() }, group: "1_close", order: 30, when: Je });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Li, title: i("closeAllSaved", "Close Saved") }, group: "1_close", order: 40 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Qe, title: i("closeAll", "Close All") }, group: "1_close", order: 50 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: $o, title: i("reopenWith", "Reopen Editor With...") }, group: "1_open", order: 10, when: Jo });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Qo, title: i("keepOpen", "Keep Open"), precondition: Cs.toNegated() }, group: "3_preview", order: 10, when: g.has("config.workbench.editor.enablePreview") });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Yo, title: i("pin", "Pin") }, group: "3_preview", order: 20, when: Me.toNegated() });
c.appendMenuItem(s.EditorTitleContext, { command: { id: xt, title: i("unpin", "Unpin") }, group: "3_preview", order: 20, when: Me });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Dt, title: i("splitUp", "Split Up") }, group: "5_split", order: 10 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: je, title: i("splitDown", "Split Down") }, group: "5_split", order: 20 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Tt, title: i("splitLeft", "Split Left") }, group: "5_split", order: 30 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: $e, title: i("splitRight", "Split Right") }, group: "5_split", order: 40 });
c.appendMenuItem(s.EditorTitleContext, { command: { id: Xo, title: i("splitInGroup", "Split in Group") }, group: "6_split_in_group", order: 10, when: Zo });
c.appendMenuItem(s.EditorTitleContext, { command: { id: en, title: i("joinInGroup", "Join in Group") }, group: "6_split_in_group", order: 10, when: Ye });
c.appendMenuItem(s.EditorTitle, { command: { id: Is, title: i("inlineView", "Inline View"), toggled: g.equals("config.diffEditor.renderSideBySide", !1) }, group: "1_diff", order: 10, when: g.has("isInDiffEditor") });
c.appendMenuItem(s.EditorTitle, { command: { id: Ms, title: i("showOpenedEditors", "Show Opened Editors") }, group: "3_open", order: 10 });
c.appendMenuItem(s.EditorTitle, { command: { id: Qe, title: i("closeAll", "Close All") }, group: "5_close", order: 10 });
c.appendMenuItem(s.EditorTitle, { command: { id: Li, title: i("closeAllSaved", "Close Saved") }, group: "5_close", order: 20 });
c.appendMenuItem(s.EditorTitle, { command: { id: Oe.ID, title: i("toggleTabs", "Enable Tabs"), toggled: g.has("config.workbench.editor.showTabs") }, group: "7_settings", order: 5, when: g.has("config.workbench.editor.showTabs").negate() });
c.appendMenuItem(s.EditorTitle, { command: { id: As, title: i("togglePreviewMode", "Enable Preview Editors"), toggled: g.has("config.workbench.editor.enablePreview") }, group: "7_settings", order: 10 });
c.appendMenuItem(s.EditorTitle, { command: { id: zo, title: i("lockGroup", "Lock Group"), toggled: Lt }, group: "8_lock", order: 10, when: R });
function O(l, e, t, o, n) {
  const a = {
    command: {
      id: l.id,
      title: l.title,
      icon: l.icon,
      precondition: n
    },
    group: "navigation",
    when: e,
    order: t
  };
  o && (a.alt = {
    id: o.id,
    title: o.title,
    icon: o.icon
  }), c.appendMenuItem(s.EditorTitle, a);
}
const Ri = 1e5, Xe = 1e6;
O({
  id: ki.ID,
  title: i("splitEditorRight", "Split Editor Right"),
  icon: f.splitHorizontal
}, g.not("splitEditorsVertically"), Ri, {
  id: je,
  title: i("splitEditorDown", "Split Editor Down"),
  icon: f.splitVertical
});
O({
  id: ki.ID,
  title: i("splitEditorDown", "Split Editor Down"),
  icon: f.splitVertical
}, g.has("splitEditorsVertically"), Ri, {
  id: $e,
  title: i("splitEditorRight", "Split Editor Right"),
  icon: f.splitHorizontal
});
O({
  id: ks,
  title: i("toggleSplitEditorInGroupLayout", "Toggle Layout"),
  icon: f.editorLayout
}, Ye, Ri - 1);
O({
  id: Ie,
  title: i("close", "Close"),
  icon: f.close
}, g.and(Je.toNegated(), Pt.toNegated(), Me.toNegated()), Xe, {
  id: Qe,
  title: i("closeAll", "Close All"),
  icon: f.closeAll
});
O({
  id: Ie,
  title: i("close", "Close"),
  icon: f.closeDirty
}, g.and(Je.toNegated(), Pt, Me.toNegated()), Xe, {
  id: Qe,
  title: i("closeAll", "Close All"),
  icon: f.closeAll
});
O({
  id: xt,
  title: i("unpin", "Unpin"),
  icon: f.pinned
}, g.and(Je.toNegated(), Pt.toNegated(), Me), Xe, {
  id: Ie,
  title: i("close", "Close"),
  icon: f.close
});
O({
  id: xt,
  title: i("unpin", "Unpin"),
  icon: f.pinnedDirty
}, g.and(Je.toNegated(), Pt, Me), Xe, {
  id: Ie,
  title: i("close", "Close"),
  icon: f.close
});
O({
  id: Ho,
  title: i("unlockEditorGroup", "Unlock Group"),
  icon: f.lock
}, Lt, Xe - 1);
const Rc = y("diff-editor-previous-change", f.arrowUp, i(
  "previousChangeIcon",
  "Icon for the previous change action in the diff editor."
)), _c = y("diff-editor-next-change", f.arrowDown, i("nextChangeIcon", "Icon for the next change action in the diff editor.")), hn = y("diff-editor-toggle-whitespace", f.whitespace, i(
  "toggleWhitespace",
  "Icon for the toggle whitespace action in the diff editor."
));
O({
  id: Ls,
  title: i("navigate.prev.label", "Previous Change"),
  icon: Rc
}, Ae, 10);
O({
  id: Ds,
  title: i("navigate.next.label", "Next Change"),
  icon: _c
}, Ae, 11);
O({
  id: tn,
  title: i(
    "ignoreTrimWhitespace.label",
    "Ignore Leading/Trailing Whitespace Differences"
  ),
  icon: hn
}, g.and(Ae, g.notEquals("config.diffEditor.ignoreTrimWhitespace", !0)), 20);
O({
  id: tn,
  title: i("showTrimWhitespace.label", "Show Leading/Trailing Whitespace Differences"),
  icon: It.modify(hn, "disabled")
}, g.and(Ae, g.notEquals("config.diffEditor.ignoreTrimWhitespace", !1)), 20);
c.appendMenuItem(s.CommandPalette, { command: { id: Qo, title: { value: i("keepEditor", "Keep Editor"), original: "Keep Editor" }, category: w.View }, when: g.has("config.workbench.editor.enablePreview") });
c.appendMenuItem(s.CommandPalette, { command: { id: Yo, title: { value: i("pinEditor", "Pin Editor"), original: "Pin Editor" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: xt, title: { value: i("unpinEditor", "Unpin Editor"), original: "Unpin Editor" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: Ie, title: { value: i("closeEditor", "Close Editor"), original: "Close Editor" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: Ts, title: { value: i("closePinnedEditor", "Close Pinned Editor"), original: "Close Pinned Editor" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: Qe, title: { value: i("closeEditorsInGroup", "Close All Editors in Group"), original: "Close All Editors in Group" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: Li, title: { value: i("closeSavedEditors", "Close Saved Editors in Group"), original: "Close Saved Editors in Group" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: qo, title: { value: i("closeOtherEditors", "Close Other Editors in Group"), original: "Close Other Editors in Group" }, category: w.View } });
c.appendMenuItem(s.CommandPalette, { command: { id: Ko, title: { value: i("closeRightEditors", "Close Editors to the Right in Group"), original: "Close Editors to the Right in Group" }, category: w.View }, when: jo.toNegated() });
c.appendMenuItem(s.CommandPalette, { command: { id: xs, title: { value: i("closeEditorGroup", "Close Editor Group"), original: "Close Editor Group" }, category: w.View }, when: R });
c.appendMenuItem(s.CommandPalette, { command: { id: $o, title: { value: i("reopenWith", "Reopen Editor With..."), original: "Reopen Editor With..." }, category: w.View }, when: Jo });
c.appendMenuItem(s.MenubarRecentMenu, {
  group: "1_editor",
  command: {
    id: xo.ID,
    title: i(
      { key: "miReopenClosedEditor", comment: ["&& denotes a mnemonic"] },
      "&&Reopen Closed Editor"
    ),
    precondition: g.has("canReopenClosedEditor")
  },
  order: 1
});
c.appendMenuItem(s.MenubarRecentMenu, {
  group: "z_clear",
  command: {
    id: Po.ID,
    title: i(
      { key: "miClearRecentOpen", comment: ["&& denotes a mnemonic"] },
      "&&Clear Recently Opened"
    )
  },
  order: 1
});
c.appendMenuItem(s.MenubarViewMenu, {
  group: "2_appearance",
  title: i(
    { key: "miEditorLayout", comment: ["&& denotes a mnemonic"] },
    "Editor &&Layout"
  ),
  submenu: s.MenubarLayoutMenu,
  order: 2
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: Dt,
    title: {
      original: "Split Up",
      value: i("miSplitEditorUpWithoutMnemonic", "Split Up"),
      mnemonicTitle: i(
        { key: "miSplitEditorUp", comment: ["&& denotes a mnemonic"] },
        "Split &&Up"
      )
    }
  },
  order: 1
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: je,
    title: {
      original: "Split Down",
      value: i("miSplitEditorDownWithoutMnemonic", "Split Down"),
      mnemonicTitle: i(
        { key: "miSplitEditorDown", comment: ["&& denotes a mnemonic"] },
        "Split &&Down"
      )
    }
  },
  order: 2
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: Tt,
    title: {
      original: "Split Left",
      value: i("miSplitEditorLeftWithoutMnemonic", "Split Left"),
      mnemonicTitle: i(
        { key: "miSplitEditorLeft", comment: ["&& denotes a mnemonic"] },
        "Split &&Left"
      )
    }
  },
  order: 3
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: $e,
    title: {
      original: "Split Right",
      value: i("miSplitEditorRightWithoutMnemonic", "Split Right"),
      mnemonicTitle: i(
        { key: "miSplitEditorRight", comment: ["&& denotes a mnemonic"] },
        "Split &&Right"
      )
    }
  },
  order: 4
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "2_split_in_group",
  command: {
    id: Xo,
    title: {
      original: "Split in Group",
      value: i("miSplitEditorInGroupWithoutMnemonic", "Split in Group"),
      mnemonicTitle: i(
        { key: "miSplitEditorInGroup", comment: ["&& denotes a mnemonic"] },
        "Split in &&Group"
      )
    }
  },
  when: Zo,
  order: 1
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "2_split_in_group",
  command: {
    id: en,
    title: {
      original: "Join in Group",
      value: i("miJoinEditorInGroupWithoutMnemonic", "Join in Group"),
      mnemonicTitle: i(
        { key: "miJoinEditorInGroup", comment: ["&& denotes a mnemonic"] },
        "Join in &&Group"
      )
    }
  },
  when: Ye,
  order: 1
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: Ro.ID,
    title: {
      original: "Single",
      value: i("miSingleColumnEditorLayoutWithoutMnemonic", "Single"),
      mnemonicTitle: i(
        { key: "miSingleColumnEditorLayout", comment: ["&& denotes a mnemonic"] },
        "&&Single"
      )
    }
  },
  order: 1
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: _o.ID,
    title: {
      original: "Two Columns",
      value: i("miTwoColumnsEditorLayoutWithoutMnemonic", "Two Columns"),
      mnemonicTitle: i(
        { key: "miTwoColumnsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "&&Two Columns"
      )
    }
  },
  order: 3
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: Bo.ID,
    title: {
      original: "Three Columns",
      value: i("miThreeColumnsEditorLayoutWithoutMnemonic", "Three Columns"),
      mnemonicTitle: i(
        { key: "miThreeColumnsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "T&&hree Columns"
      )
    }
  },
  order: 4
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: Oo.ID,
    title: {
      original: "Two Rows",
      value: i("miTwoRowsEditorLayoutWithoutMnemonic", "Two Rows"),
      mnemonicTitle: i(
        { key: "miTwoRowsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "T&&wo Rows"
      )
    }
  },
  order: 5
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: Go.ID,
    title: {
      original: "Three Rows",
      value: i("miThreeRowsEditorLayoutWithoutMnemonic", "Three Rows"),
      mnemonicTitle: i(
        { key: "miThreeRowsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "Three &&Rows"
      )
    }
  },
  order: 6
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: Fo.ID,
    title: {
      original: "Grid (2x2)",
      value: i("miTwoByTwoGridEditorLayoutWithoutMnemonic", "Grid (2x2)"),
      mnemonicTitle: i(
        { key: "miTwoByTwoGridEditorLayout", comment: ["&& denotes a mnemonic"] },
        "&&Grid (2x2)"
      )
    }
  },
  order: 7
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: No.ID,
    title: {
      original: "Two Rows Right",
      value: i("miTwoRowsRightEditorLayoutWithoutMnemonic", "Two Rows Right"),
      mnemonicTitle: i(
        { key: "miTwoRowsRightEditorLayout", comment: ["&& denotes a mnemonic"] },
        "Two R&&ows Right"
      )
    }
  },
  order: 8
});
c.appendMenuItem(s.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: Vo.ID,
    title: {
      original: "Two Columns Bottom",
      value: i("miTwoColumnsBottomEditorLayoutWithoutMnemonic", "Two Columns Bottom"),
      mnemonicTitle: i(
        { key: "miTwoColumnsBottomEditorLayout", comment: ["&& denotes a mnemonic"] },
        "Two &&Columns Bottom"
      )
    }
  },
  order: 9
});
c.appendMenuItem(s.MenubarGoMenu, {
  group: "1_history_nav",
  command: {
    id: "workbench.action.navigateToLastEditLocation",
    title: i(
      { key: "miLastEditLocation", comment: ["&& denotes a mnemonic"] },
      "&&Last Edit Location"
    ),
    precondition: g.has("canNavigateToLastEditLocation")
  },
  order: 3
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "1_sideBySide",
  command: {
    id: Ps,
    title: i(
      { key: "miFirstSideEditor", comment: ["&& denotes a mnemonic"] },
      "&&First Side in Editor"
    )
  },
  when: g.or(Ye, Ae),
  order: 1
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "1_sideBySide",
  command: {
    id: Rs,
    title: i(
      { key: "miSecondSideEditor", comment: ["&& denotes a mnemonic"] },
      "&&Second Side in Editor"
    )
  },
  when: g.or(Ye, Ae),
  order: 2
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "2_any",
  command: {
    id: "workbench.action.nextEditor",
    title: i(
      { key: "miNextEditor", comment: ["&& denotes a mnemonic"] },
      "&&Next Editor"
    )
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "2_any",
  command: {
    id: "workbench.action.previousEditor",
    title: i(
      { key: "miPreviousEditor", comment: ["&& denotes a mnemonic"] },
      "&&Previous Editor"
    )
  },
  order: 2
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "3_any_used",
  command: {
    id: "workbench.action.openNextRecentlyUsedEditor",
    title: i(
      { key: "miNextRecentlyUsedEditor", comment: ["&& denotes a mnemonic"] },
      "&&Next Used Editor"
    )
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "3_any_used",
  command: {
    id: "workbench.action.openPreviousRecentlyUsedEditor",
    title: i(
      { key: "miPreviousRecentlyUsedEditor", comment: ["&& denotes a mnemonic"] },
      "&&Previous Used Editor"
    )
  },
  order: 2
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "4_group",
  command: {
    id: "workbench.action.nextEditorInGroup",
    title: i(
      { key: "miNextEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Next Editor in Group"
    )
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "4_group",
  command: {
    id: "workbench.action.previousEditorInGroup",
    title: i(
      { key: "miPreviousEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Previous Editor in Group"
    )
  },
  order: 2
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "5_group_used",
  command: {
    id: "workbench.action.openNextRecentlyUsedEditorInGroup",
    title: i(
      { key: "miNextUsedEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Next Used Editor in Group"
    )
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchEditorMenu, {
  group: "5_group_used",
  command: {
    id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
    title: i(
      { key: "miPreviousUsedEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Previous Used Editor in Group"
    )
  },
  order: 2
});
c.appendMenuItem(s.MenubarGoMenu, {
  group: "2_editor_nav",
  title: i(
    { key: "miSwitchEditor", comment: ["&& denotes a mnemonic"] },
    "Switch &&Editor"
  ),
  submenu: s.MenubarSwitchEditorMenu,
  order: 1
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusFirstEditorGroup",
    title: i(
      { key: "miFocusFirstGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&1"
    )
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusSecondEditorGroup",
    title: i(
      { key: "miFocusSecondGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&2"
    )
  },
  order: 2
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusThirdEditorGroup",
    title: i(
      { key: "miFocusThirdGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&3"
    ),
    precondition: R
  },
  order: 3
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusFourthEditorGroup",
    title: i(
      { key: "miFocusFourthGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&4"
    ),
    precondition: R
  },
  order: 4
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusFifthEditorGroup",
    title: i(
      { key: "miFocusFifthGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&5"
    ),
    precondition: R
  },
  order: 5
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "2_next_prev",
  command: {
    id: "workbench.action.focusNextGroup",
    title: i({ key: "miNextGroup", comment: ["&& denotes a mnemonic"] }, "&&Next Group"),
    precondition: R
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "2_next_prev",
  command: {
    id: "workbench.action.focusPreviousGroup",
    title: i(
      { key: "miPreviousGroup", comment: ["&& denotes a mnemonic"] },
      "&&Previous Group"
    ),
    precondition: R
  },
  order: 2
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusLeftGroup",
    title: i(
      { key: "miFocusLeftGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Left"
    ),
    precondition: R
  },
  order: 1
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusRightGroup",
    title: i(
      { key: "miFocusRightGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Right"
    ),
    precondition: R
  },
  order: 2
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusAboveGroup",
    title: i(
      { key: "miFocusAboveGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Above"
    ),
    precondition: R
  },
  order: 3
});
c.appendMenuItem(s.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusBelowGroup",
    title: i(
      { key: "miFocusBelowGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Below"
    ),
    precondition: R
  },
  order: 4
});
c.appendMenuItem(s.MenubarGoMenu, {
  group: "2_editor_nav",
  title: i(
    { key: "miSwitchGroup", comment: ["&& denotes a mnemonic"] },
    "Switch &&Group"
  ),
  submenu: s.MenubarSwitchGroupMenu,
  order: 2
});
let ho = class extends _s {
  constructor(e, t, o) {
    super(t), this.editorService = e, this.configurationService = o, this.registerCodeEditorOpenHandler(this.doOpenCodeEditor.bind(this)), this.registerCodeEditorOpenHandler(this.doOpenCodeEditorFromDiff.bind(this));
  }
  getActiveCodeEditor() {
    var o;
    const e = this.editorService.activeTextEditorControl;
    if (nt(e))
      return e;
    if (Yi(e))
      return e.getModifiedEditor();
    const t = (o = this.editorService.activeEditorPane) == null ? void 0 : o.getControl();
    return Xi(t) && nt(t.activeCodeEditor) ? t.activeCodeEditor : null;
  }
  async doOpenCodeEditorFromDiff(e, t, o) {
    var a;
    const n = this.editorService.activeTextEditorControl;
    if (!o && Yi(n) && e.options && e.resource && t === n.getModifiedEditor() && n.getModel() && _e(e.resource, (a = n.getModel()) == null ? void 0 : a.modified.uri)) {
      const d = n.getModifiedEditor();
      return on(e.options, d, 0), d;
    }
    return null;
  }
  async doOpenCodeEditor(e, t, o) {
    var d, u, p, m;
    if (!((u = (d = this.configurationService.getValue().workbench) == null ? void 0 : d.editor) == null ? void 0 : u.enablePreviewFromCodeNavigation) && t && !((p = e.options) != null && p.pinned) && !o && !_e((m = t.getModel()) == null ? void 0 : m.uri, e.resource)) {
      for (const E of this.editorService.visibleEditorPanes)
        if (Z(E.getControl()) === t) {
          E.group.pinEditor();
          break;
        }
    }
    const a = await this.editorService.openEditor(e, o ? nn : Bs);
    if (a) {
      const E = a.getControl();
      if (nt(E))
        return E;
      if (Xi(E) && nt(E.activeCodeEditor))
        return E.activeCodeEditor;
    }
    return null;
  }
};
ho = A([
  h(0, de),
  h(1, ee),
  h(2, D)
], ho);
class Bc {
  constructor(e) {
    this.editor = e, this.onDidChangeControl = U.None, this.onDidChangeSizeConstraints = U.None, this.onDidFocus = U.None, this.onDidBlur = U.None, this.input = void 0, this.options = void 0, this.group = void 0, this.scopedContextKeyService = void 0, this.getViewState = ue, this.isVisible = ue, this.hasFocus = ue, this.getId = ue, this.getTitle = ue, this.focus = ue;
  }
  get minimumWidth() {
    return eo.width;
  }
  get maximumWidth() {
    return to.width;
  }
  get minimumHeight() {
    return eo.height;
  }
  get maximumHeight() {
    return to.height;
  }
  getControl() {
    return this.editor;
  }
}
function ed(l, e, t) {
  async function o(n, a, d) {
    const u = Zi(n) ? a : n.options;
    Os(a) && (d = a);
    const p = Gs(n) || Zi(n) ? n.resource : void 0;
    if (p == null || !l.canHandleResource(p))
      return e(n, a, d);
    let m;
    if (m = Fs.get(Ns).listCodeEditors().find((b) => b instanceof Vs && b.getModel() != null && b.getModel().uri.toString() === p.toString()), m == null) {
      const b = await e(n, a, d);
      if (b != null)
        return b;
      const S = await l.createModelReference(p);
      if (m = await (t == null ? void 0 : t(S, u, d === nn)), m == null) {
        S.dispose();
        return;
      }
    }
    return u != null && on(u, m, 1), ((u == null ? void 0 : u.preserveFocus) ?? !1) || (m.focus(), m.getContainerDomNode().scrollIntoView()), new Bc(m);
  }
  return o;
}
export {
  Di as A,
  ri as B,
  Fc as C,
  co as E,
  $t as P,
  Hs as T,
  so as W,
  gt as a,
  Uc as b,
  oo as c,
  io as d,
  ao as e,
  ti as f,
  zc as g,
  no as h,
  ve as i,
  re as j,
  Y as k,
  ai as l,
  ho as m,
  ed as w
};
