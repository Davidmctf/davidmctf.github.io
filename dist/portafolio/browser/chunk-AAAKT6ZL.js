import {
  $ as v,
  $a as Wt,
  A as Ie,
  Aa as ht,
  Ab as Sn,
  B as _s,
  Ba as mt,
  C as Ge,
  Ca as jt,
  D as L,
  Da as D,
  E as W,
  Ea as fs,
  F as Ni,
  Fa as y,
  G as j,
  Ga as u,
  H as ie,
  Ha as Me,
  Ia as ge,
  J as f,
  Ja as kt,
  K as g,
  Ka as St,
  Kb as hi,
  L as Bi,
  La as xt,
  M as dt,
  Ma as Nt,
  Mb as mi,
  N as Wi,
  Na as Tt,
  Nb as Et,
  O as Dt,
  Oa as M,
  Ob as _i,
  P as Kr,
  Pa as Qe,
  Pb as xn,
  Q as P,
  Qa as c,
  Qb as co,
  R as li,
  Ra as A,
  S as Qr,
  Sa as re,
  Ta as io,
  Tb as gs,
  U as Xr,
  Ua as ee,
  Ub as st,
  V as $i,
  Va as Pe,
  Vb as uo,
  W as h,
  Wa as Ki,
  Wb as Te,
  X as Mn,
  Xa as Bt,
  Xb as Tn,
  Y as Zr,
  Ya as no,
  Yb as en,
  Z as di,
  Za as N,
  _ as J,
  _a as B,
  a as Ae,
  aa as qe,
  b as ai,
  bb as _t,
  ca as x,
  cb as so,
  d as se,
  da as $,
  db as Xe,
  e as xe,
  ea as he,
  eb as Fe,
  f as pe,
  fa as Ui,
  fb as ke,
  g as Fi,
  ga as C,
  gb as me,
  h as hs,
  ha as zi,
  hb as Qi,
  i as ue,
  ia as k,
  ib as Xi,
  j as lt,
  ja as Mt,
  jb as ro,
  k as Rr,
  ka as Gi,
  kb as oo,
  l as jr,
  la as ps,
  lb as Zi,
  m as Nr,
  ma as qi,
  mb as ao,
  n as Br,
  na as Ji,
  nb as te,
  o as Wr,
  oa as H,
  p as $r,
  pa as ct,
  pb as ui,
  q as Ur,
  qa as ut,
  r as Hi,
  ra as eo,
  s as zr,
  sa as to,
  t as ms,
  ta as _,
  u as Gr,
  ua as l,
  v as qr,
  va as d,
  w as fe,
  wa as w,
  x as Ri,
  xa as Je,
  y as ji,
  ya as Ke,
  yb as lo,
  z as Jr,
  za as ci,
  zb as kn,
} from "./chunk-EMCNKSJW.js";
var ql = () => ["/profile"],
  Jl = () => ["fas", "file-pdf"],
  Kl = () => ["fas", "file-code"];
function Ql(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 5)(1, "a", 6),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.onScroll.emit("aboutme"));
      }),
      c(2, " About me "),
      d()(),
      l(3, "li", 5)(4, "a", 6),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.onScroll.emit("experience"));
      }),
      c(5, " Experience "),
      d()());
  }
}
var _o = (() => {
  var t, n, i, s;
  let r = class r {
    constructor() {
      xe(this, t);
      xe(this, n);
      xe(this, i);
      xe(this, s);
      ((this.onScroll = new k()),
        pe(this, t, new ue()),
        pe(this, n, ""),
        pe(this, i, ie(_i)),
        pe(this, s, ie(kn)),
        (this.isHome = !0),
        se(this, i)
          .currentRoute$.pipe(Ie(se(this, t)))
          .subscribe((a) => {
            (pe(this, n, a),
              (this.isHome = a.indexOf("home") !== -1 || a === "/"));
          }));
    }
    ngOnInit() {}
    ngOnDestroy() {
      (se(this, t).next(), se(this, t).complete());
    }
    actionPage(a) {
      this.isHome && se(this, n).indexOf(a) !== -1
        ? this.onScroll.emit(a)
        : se(this, s).navigate([`/${a}`]);
    }
    downloadCV(a) {
      if (typeof window < "u") {
        let m = document.createElement("a");
        ((m.href =
          a === "pdf"
            ? "assets/cv_resume/david_cv.pdf"
            : "assets/cv_resume/david_cv.html"),
          (m.download = `David_Munoz_Cruz_CV.${a}`),
          m.setAttribute("download", `David_Munoz_Cruz_CV.${a}`),
          document.body.appendChild(m),
          m.click(),
          document.body.removeChild(m));
      }
    }
  };
  ((t = new WeakMap()),
    (n = new WeakMap()),
    (i = new WeakMap()),
    (s = new WeakMap()),
    (r.ɵfac = function (m) {
      return new (m || r)();
    }),
    (r.ɵcmp = x({
      type: r,
      selectors: [["app-footer"]],
      outputs: { onScroll: "onScroll" },
      decls: 32,
      vars: 7,
      consts: [
        [1, "container"],
        [1, "row"],
        [1, "col-md-4"],
        [1, "title"],
        [1, "nav"],
        [1, "nav-item"],
        ["href", "javascript:void(0)", 1, "nav-link", 3, "click"],
        [
          "placement",
          "bottom",
          "tooltip",
          "Profile",
          1,
          "nav-link",
          3,
          "routerLink",
        ],
        [1, "btn-wrapper", "profile"],
        [
          "href",
          "https://linkedin.com/in/davidmct",
          "target",
          "_blank",
          1,
          "btn",
          "btn-icon",
          "btn-neutral",
          "btn-round",
          "btn-simple",
          "m-2",
        ],
        [1, "fab", "fa-linkedin"],
        [
          "href",
          "https://github.com/Davidmctf",
          "target",
          "_blank",
          1,
          "btn",
          "btn-icon",
          "btn-neutral",
          "btn-round",
          "btn-simple",
          "m-2",
        ],
        [1, "fab", "fa-github"],
        [1, "cv-download-section", "mt-3"],
        [1, "btn-wrapper"],
        [1, "btn", "btn-success", "btn-round", "btn-sm", "m-1", 3, "click"],
        [1, "mr-1", 3, "icon"],
        [1, "btn", "btn-info", "btn-round", "btn-sm", "m-1", 3, "click"],
      ],
      template: function (m, p) {
        (m & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
          c(4, "DVZ\u2022"),
          d()(),
          l(5, "div", 2)(6, "ul", 4)(7, "li", 5)(8, "a", 6),
          y("click", function () {
            return p.actionPage("home");
          }),
          c(9, " Home "),
          d()(),
          ct(10, Ql, 6, 0),
          l(11, "li", 5)(12, "a", 7),
          c(13, " Example Request "),
          d()()()(),
          l(14, "div", 2)(15, "h3", 3),
          c(16, "Follow us:"),
          d(),
          l(17, "div", 8)(18, "a", 9),
          w(19, "i", 10),
          d(),
          l(20, "a", 11),
          w(21, "i", 12),
          d()(),
          l(22, "div", 13)(23, "h4", 3),
          c(24, "Download CV:"),
          d(),
          l(25, "div", 14)(26, "button", 15),
          y("click", function () {
            return p.downloadCV("pdf");
          }),
          w(27, "fa-icon", 16),
          c(28, " PDF "),
          d(),
          l(29, "button", 17),
          y("click", function () {
            return p.downloadCV("html");
          }),
          w(30, "fa-icon", 16),
          c(31, " HTML "),
          d()()()()()()),
          m & 2 &&
            (h(10),
            ut(p.isHome ? 10 : -1),
            h(2),
            _("routerLink", Pe(4, ql)),
            h(15),
            _("icon", Pe(5, Jl)),
            h(3),
            _("icon", Pe(6, Kl))));
      },
      dependencies: [te, hi, Sn, Et, mi],
      encapsulation: 2,
    })));
  let e = r;
  return e;
})();
var Cs = (() => {
    class e {
      static ɵfac = function (i) {
        return new (i || e)();
      };
      static ɵprov = L({ token: e, factory: () => ie(Xl), providedIn: "root" });
    }
    return e;
  })(),
  vs = class {},
  Xl = (() => {
    class e extends Cs {
      animationModuleType = ie(Qr, { optional: !0 });
      _nextAnimationId = 0;
      _renderer;
      constructor(n, i) {
        super();
        let s = {
          id: "0",
          encapsulation: Xr.None,
          styles: [],
          data: { animation: [] },
        };
        if (
          ((this._renderer = n.createRenderer(i.body, s)),
          this.animationModuleType === null && !ed(this._renderer))
        )
          throw new _s(3600, !1);
      }
      build(n) {
        let i = this._nextAnimationId;
        this._nextAnimationId++;
        let s = Array.isArray(n) ? uo(n) : n;
        return (
          po(this._renderer, null, i, "register", [s]),
          new ys(i, this._renderer)
        );
      }
      static ɵfac = function (i) {
        return new (i || e)(j(di), j(dt));
      };
      static ɵprov = L({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  ys = class extends vs {
    _id;
    _renderer;
    constructor(t, n) {
      (super(), (this._id = t), (this._renderer = n));
    }
    create(t, n) {
      return new bs(this._id, t, n || {}, this._renderer);
    }
  },
  bs = class {
    id;
    element;
    _renderer;
    parentPlayer = null;
    _started = !1;
    constructor(t, n, i, s) {
      ((this.id = t),
        (this.element = n),
        (this._renderer = s),
        this._command("create", i));
    }
    _listen(t, n) {
      return this._renderer.listen(this.element, `@@${this.id}:${t}`, n);
    }
    _command(t, ...n) {
      po(this._renderer, this.element, this.id, t, n);
    }
    onDone(t) {
      this._listen("done", t);
    }
    onStart(t) {
      this._listen("start", t);
    }
    onDestroy(t) {
      this._listen("destroy", t);
    }
    init() {
      this._command("init");
    }
    hasStarted() {
      return this._started;
    }
    play() {
      (this._command("play"), (this._started = !0));
    }
    pause() {
      this._command("pause");
    }
    restart() {
      this._command("restart");
    }
    finish() {
      this._command("finish");
    }
    destroy() {
      this._command("destroy");
    }
    reset() {
      (this._command("reset"), (this._started = !1));
    }
    setPosition(t) {
      this._command("setPosition", t);
    }
    getPosition() {
      return Zl(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
    }
    totalTime = 0;
  };
function po(e, t, n, i, s) {
  e.setProperty(t, `@@${n}:${i}`, s);
}
function Zl(e) {
  let t = e.ɵtype;
  return t === 0 ? e : t === 1 ? e.animationRenderer : null;
}
function ed(e) {
  let t = e.ɵtype;
  return t === 0 || t === 1;
}
var fo = "400ms cubic-bezier(0.4,0.0,0.2,1)",
  id = [
    Te({ height: 0, visibility: "hidden" }),
    st(fo, Te({ height: "*", visibility: "visible" })),
  ],
  nd = [
    Te({ height: "*", visibility: "visible" }),
    st(fo, Te({ height: 0, visibility: "hidden" })),
  ],
  go = (() => {
    let t = class t {
      set display(i) {
        if (((this._display = i), i === "none")) {
          this.hide();
          return;
        }
        this.isAnimated ? this.toggle() : this.show();
      }
      set collapse(i) {
        ((this.collapseNewValue = i),
          (!this._player || this._isAnimationDone) &&
            ((this.isExpanded = i), this.toggle()));
      }
      get collapse() {
        return this.isExpanded;
      }
      constructor(i, s, r) {
        ((this._el = i),
          (this._renderer = s),
          (this.collapsed = new k()),
          (this.collapses = new k()),
          (this.expanded = new k()),
          (this.expands = new k()),
          (this.isExpanded = !0),
          (this.collapseNewValue = !0),
          (this.isCollapsed = !1),
          (this.isCollapse = !0),
          (this.isCollapsing = !1),
          (this.isAnimated = !1),
          (this._display = "block"),
          (this._stylesLoaded = !1),
          (this._COLLAPSE_ACTION_NAME = "collapse"),
          (this._EXPAND_ACTION_NAME = "expand"),
          (this._factoryCollapseAnimation = r.build(nd)),
          (this._factoryExpandAnimation = r.build(id)));
      }
      ngAfterViewChecked() {
        ((this._stylesLoaded = !0),
          !(!this._player || !this._isAnimationDone) &&
            (this._player.reset(),
            this._renderer.setStyle(this._el.nativeElement, "height", "*")));
      }
      toggle() {
        this.isExpanded ? this.hide() : this.show();
      }
      hide() {
        ((this.isCollapsing = !0),
          (this.isExpanded = !1),
          (this.isCollapsed = !0),
          (this.isCollapsing = !1),
          this.collapses.emit(this),
          (this._isAnimationDone = !1),
          this.animationRun(
            this.isAnimated,
            this._COLLAPSE_ACTION_NAME,
          )(() => {
            if (
              ((this._isAnimationDone = !0),
              this.collapseNewValue !== this.isCollapsed && this.isAnimated)
            ) {
              this.show();
              return;
            }
            (this.collapsed.emit(this),
              this._renderer.setStyle(
                this._el.nativeElement,
                "display",
                "none",
              ));
          }));
      }
      show() {
        (this._renderer.setStyle(
          this._el.nativeElement,
          "display",
          this._display,
        ),
          (this.isCollapsing = !0),
          (this.isExpanded = !0),
          (this.isCollapsed = !1),
          (this.isCollapsing = !1),
          this.expands.emit(this),
          (this._isAnimationDone = !1),
          this.animationRun(
            this.isAnimated,
            this._EXPAND_ACTION_NAME,
          )(() => {
            if (
              ((this._isAnimationDone = !0),
              this.collapseNewValue !== this.isCollapsed && this.isAnimated)
            ) {
              this.hide();
              return;
            }
            (this.expanded.emit(this),
              this._renderer.removeStyle(this._el.nativeElement, "overflow"));
          }));
      }
      animationRun(i, s) {
        if (!i || !this._stylesLoaded) return (o) => o();
        (this._renderer.setStyle(this._el.nativeElement, "overflow", "hidden"),
          this._renderer.addClass(this._el.nativeElement, "collapse"));
        let r =
          s === this._EXPAND_ACTION_NAME
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        return (
          this._player && this._player.reset(),
          (this._player = r.create(this._el.nativeElement)),
          this._player.play(),
          (o) => this._player?.onDone(o)
        );
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(P), v(J), v(Cs));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["", "collapse", ""]],
        hostVars: 9,
        hostBindings: function (s, r) {
          s & 2 &&
            (H("aria-hidden", r.isCollapsed),
            M("collapse", r.isCollapse)("in", r.isExpanded)(
              "show",
              r.isExpanded,
            )("collapsing", r.isCollapsing));
        },
        inputs: {
          display: "display",
          isAnimated: "isAnimated",
          collapse: "collapse",
        },
        outputs: {
          collapsed: "collapsed",
          collapses: "collapses",
          expanded: "expanded",
          expands: "expands",
        },
        exportAs: ["bs-collapse"],
      })));
    let e = t;
    return e;
  })(),
  En = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({})));
    let e = t;
    return e;
  })();
var ws = class {
    constructor(t, n) {
      ((this.open = t), (this.close = n || t));
    }
    isManual() {
      return this.open === "manual" || this.close === "manual";
    }
  },
  rd = { hover: ["mouseover", "mouseout"], focus: ["focusin", "focusout"] };
function Ds(e, t = rd) {
  let n = (e || "").trim();
  if (n.length === 0) return [];
  let i = n
      .split(/\s+/)
      .map((r) => r.split(":"))
      .map((r) => {
        let o = t[r[0]] || r;
        return new ws(o[0], o[1]);
      }),
    s = i.filter((r) => r.isManual());
  if (s.length > 1)
    throw new Error("Triggers parse error: only one manual trigger is allowed");
  if (s.length === 1 && i.length > 1)
    throw new Error(
      "Triggers parse error: manual trigger can't be mixed with other triggers",
    );
  return i;
}
function yo(e, t) {
  let n = Ds(t.triggers),
    i = t.target;
  if (n.length === 1 && n[0].isManual()) return Function.prototype;
  let s = [],
    r = [],
    o = () => {
      (r.forEach((a) => s.push(a())), (r.length = 0));
    };
  return (
    n.forEach((a) => {
      let m = a.open === a.close,
        p = m ? t.toggle : t.show;
      if (!m && a.close && t.hide) {
        let b = a.close,
          E = t.hide,
          R = () => e.listen(i, b, E);
        r.push(R);
      }
      p && s.push(e.listen(i, a.open, () => p(o)));
    }),
    () => {
      s.forEach((a) => a());
    }
  );
}
function bo(e, t) {
  return t.outsideClick
    ? e.listen("document", "click", (n) => {
        (t.target && t.target.contains(n.target)) ||
          (t.targets && t.targets.some((i) => i.contains(n.target))) ||
          (t.hide && t.hide());
      })
    : Function.prototype;
}
function Co(e, t) {
  return t.outsideEsc
    ? e.listen("document", "keyup.esc", (n) => {
        (t.target && t.target.contains(n.target)) ||
          (t.targets && t.targets.some((i) => i.contains(n.target))) ||
          (t.hide && t.hide());
      })
    : Function.prototype;
}
var U = (typeof window < "u" && window) || {},
  I = U.document,
  qf = U.location,
  Jf = U.gc ? () => U.gc() : () => null,
  Kf = U.performance ? U.performance : null,
  Qf = U.Event,
  Xf = U.MouseEvent,
  Zf = U.KeyboardEvent,
  eg = U.EventTarget,
  tg = U.History,
  ig = U.Location,
  ng = U.EventListener,
  wo = (function (e) {
    return ((e.isBs4 = "bs4"), (e.isBs5 = "bs5"), e);
  })(wo || {}),
  Lt;
function Do() {
  let e = U.document.createElement("span");
  ((e.innerText = "testing bs version"),
    e.classList.add("d-none"),
    e.classList.add("pl-1"),
    U.document.head.appendChild(e));
  let t = U.getComputedStyle(e).paddingLeft;
  return t && parseFloat(t)
    ? (U.document.head.removeChild(e), "bs4")
    : (U.document.head.removeChild(e), "bs5");
}
function od() {
  return (Lt || (Lt = Do()), Lt === "bs4");
}
function ad() {
  return (Lt || (Lt = Do()), Lt === "bs5");
}
function rt() {
  return { isBs4: od(), isBs5: ad() };
}
function ld() {
  let e = rt(),
    t = Object.keys(e).find((n) => e[n]);
  return wo[t];
}
var Ln = class {
  constructor() {
    ((this.length = 0), (this.asArray = []));
  }
  get(t) {
    if (this.length === 0 || t < 0 || t >= this.length) return;
    let n = this.head;
    for (let i = 0; i < t; i++) n = n?.next;
    return n?.value;
  }
  add(t, n = this.length) {
    if (n < 0 || n > this.length)
      throw new Error("Position is out of the list");
    let i = { value: t, next: void 0, previous: void 0 };
    if (this.length === 0)
      ((this.head = i), (this.tail = i), (this.current = i));
    else if (n === 0 && this.head)
      ((i.next = this.head), (this.head.previous = i), (this.head = i));
    else if (n === this.length && this.tail)
      ((this.tail.next = i), (i.previous = this.tail), (this.tail = i));
    else {
      let s = this.getNode(n - 1),
        r = s?.next;
      s &&
        r &&
        ((s.next = i), (r.previous = i), (i.previous = s), (i.next = r));
    }
    (this.length++, this.createInternalArrayRepresentation());
  }
  remove(t = 0) {
    if (this.length === 0 || t < 0 || t >= this.length)
      throw new Error("Position is out of the list");
    if (t === 0 && this.head)
      ((this.head = this.head.next),
        this.head ? (this.head.previous = void 0) : (this.tail = void 0));
    else if (t === this.length - 1 && this.tail?.previous)
      ((this.tail = this.tail.previous), (this.tail.next = void 0));
    else {
      let n = this.getNode(t);
      n?.next &&
        n.previous &&
        ((n.next.previous = n.previous), (n.previous.next = n.next));
    }
    (this.length--, this.createInternalArrayRepresentation());
  }
  set(t, n) {
    if (this.length === 0 || t < 0 || t >= this.length)
      throw new Error("Position is out of the list");
    let i = this.getNode(t);
    i && ((i.value = n), this.createInternalArrayRepresentation());
  }
  toArray() {
    return this.asArray;
  }
  findAll(t) {
    let n = this.head,
      i = [];
    if (!n) return i;
    for (let s = 0; s < this.length; s++) {
      if (!n) return i;
      (t(n.value, s) && i.push({ index: s, value: n.value }), (n = n.next));
    }
    return i;
  }
  push(...t) {
    return (
      t.forEach((n) => {
        this.add(n);
      }),
      this.length
    );
  }
  pop() {
    if (this.length === 0) return;
    let t = this.tail;
    return (this.remove(this.length - 1), t?.value);
  }
  unshift(...t) {
    return (
      t.reverse(),
      t.forEach((n) => {
        this.add(n, 0);
      }),
      this.length
    );
  }
  shift() {
    if (this.length === 0) return;
    let t = this.head?.value;
    return (this.remove(), t);
  }
  forEach(t) {
    let n = this.head;
    for (let i = 0; i < this.length; i++) {
      if (!n) return;
      (t(n.value, i), (n = n.next));
    }
  }
  indexOf(t) {
    let n = this.head,
      i = -1;
    for (let s = 0; s < this.length; s++) {
      if (!n) return i;
      if (n.value === t) {
        i = s;
        break;
      }
      n = n.next;
    }
    return i;
  }
  some(t) {
    let n = this.head,
      i = !1;
    for (; n && !i; ) {
      if (t(n.value)) {
        i = !0;
        break;
      }
      n = n.next;
    }
    return i;
  }
  every(t) {
    let n = this.head,
      i = !0;
    for (; n && i; ) (t(n.value) || (i = !1), (n = n.next));
    return i;
  }
  toString() {
    return "[Linked List]";
  }
  find(t) {
    let n = this.head;
    for (let i = 0; i < this.length; i++) {
      if (!n) return;
      if (t(n.value, i)) return n.value;
      n = n.next;
    }
  }
  findIndex(t) {
    let n = this.head;
    for (let i = 0; i < this.length; i++) {
      if (!n) return -1;
      if (t(n.value, i)) return i;
      n = n.next;
    }
    return -1;
  }
  getNode(t) {
    if (this.length === 0 || t < 0 || t >= this.length)
      throw new Error("Position is out of the list");
    let n = this.head;
    for (let i = 0; i < t; i++) n = n?.next;
    return n;
  }
  createInternalArrayRepresentation() {
    let t = [],
      n = this.head;
    for (; n; ) (t.push(n.value), (n = n.next));
    this.asArray = t;
  }
};
function Mo() {
  let e = "Change";
  return function (n, i) {
    let s = ` __${i}Value`;
    Object.defineProperty(n, i, {
      get() {
        return this[s];
      },
      set(r) {
        let o = this[s];
        ((this[s] = r), o !== r && this[i + e] && this[i + e].emit(r));
      },
    });
  };
}
var tn = class {
    static reflow(t) {
      t.offsetHeight;
    }
    static getStyles(t) {
      let n = t.ownerDocument.defaultView;
      return ((!n || !n.opener) && (n = U), n.getComputedStyle(t));
    }
    static stackOverflowConfig() {
      let t = ld();
      return {
        crossorigin: "anonymous",
        integrity:
          t === "bs5"
            ? "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            : "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2",
        cdnLink:
          t === "bs5"
            ? "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            : "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
      };
    }
  },
  vo = {},
  dd = typeof console > "u" || !("warn" in console);
function Ee(e) {
  !so() || dd || e in vo || ((vo[e] = !0), console.warn(e));
}
var Lo = (function (e) {
    return (
      (e.top = "top"),
      (e.bottom = "bottom"),
      (e.left = "left"),
      (e.right = "right"),
      (e.auto = "auto"),
      (e.end = "right"),
      (e.start = "left"),
      (e["top left"] = "top left"),
      (e["top right"] = "top right"),
      (e["right top"] = "right top"),
      (e["right bottom"] = "right bottom"),
      (e["bottom right"] = "bottom right"),
      (e["bottom left"] = "bottom left"),
      (e["left bottom"] = "left bottom"),
      (e["left top"] = "left top"),
      (e["top start"] = "top left"),
      (e["top end"] = "top right"),
      (e["end top"] = "right top"),
      (e["end bottom"] = "right bottom"),
      (e["bottom end"] = "bottom right"),
      (e["bottom start"] = "bottom left"),
      (e["start bottom"] = "start bottom"),
      (e["start top"] = "left top"),
      e
    );
  })(Lo || {}),
  nn = (function (e) {
    return (
      (e.top = "top"),
      (e.bottom = "bottom"),
      (e.left = "start"),
      (e.right = "end"),
      (e.auto = "auto"),
      (e.end = "end"),
      (e.start = "start"),
      (e["top left"] = "top start"),
      (e["top right"] = "top end"),
      (e["right top"] = "end top"),
      (e["right bottom"] = "end bottom"),
      (e["bottom right"] = "bottom end"),
      (e["bottom left"] = "bottom start"),
      (e["left bottom"] = "start bottom"),
      (e["left top"] = "start top"),
      (e["top start"] = "top start"),
      (e["top end"] = "top end"),
      (e["end top"] = "end top"),
      (e["end bottom"] = "end bottom"),
      (e["bottom end"] = "bottom end"),
      (e["bottom start"] = "bottom start"),
      (e["start bottom"] = "start bottom"),
      (e["start top"] = "start top"),
      e
    );
  })(nn || {});
function $t(e, t) {
  if (e.nodeType !== 1) return [];
  let i = e.ownerDocument.defaultView?.getComputedStyle(e, null);
  return t ? i && i[t] : i;
}
function xs(e) {
  if (!e) return document.documentElement;
  let t = null,
    n = e?.offsetParent,
    i;
  for (; n === t && e.nextElementSibling && i !== e.nextElementSibling; )
    ((i = e.nextElementSibling), (n = i.offsetParent));
  let s = n && n.nodeName;
  return !s || s === "BODY" || s === "HTML"
    ? i
      ? i.ownerDocument.documentElement
      : document.documentElement
    : n &&
        ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
        $t(n, "position") === "static"
      ? xs(n)
      : n;
}
function cd(e) {
  let { nodeName: t } = e;
  return t === "BODY" ? !1 : t === "HTML" || xs(e.firstElementChild) === e;
}
function Ms(e) {
  return e.parentNode !== null ? Ms(e.parentNode) : e;
}
function Yn(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
  let n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
    i = n ? e : t,
    s = n ? t : e,
    r = document.createRange();
  (r.setStart(i, 0), r.setEnd(s, 0));
  let o = r.commonAncestorContainer;
  if ((e !== o && t !== o) || i.contains(s)) return cd(o) ? o : xs(o);
  let a = Ms(e);
  return a.host ? Yn(a.host, t) : Yn(e, Ms(t).host);
}
function Io(e) {
  if (!e || !e.parentElement) return document.documentElement;
  let t = e.parentElement;
  for (; t?.parentElement && $t(t, "transform") === "none"; )
    t = t.parentElement;
  return t || document.documentElement;
}
function ko(e, t) {
  let n = t === "x" ? "Left" : "Top",
    i = n === "Left" ? "Right" : "Bottom";
  return parseFloat(e[`border${n}Width`]) + parseFloat(e[`border${i}Width`]);
}
function So(e, t, n) {
  let i = t,
    s = n;
  return Math.max(
    i[`offset${e}`],
    i[`scroll${e}`],
    s[`client${e}`],
    s[`offset${e}`],
    s[`scroll${e}`],
    0,
  );
}
function Vo(e) {
  let t = e.body,
    n = e.documentElement;
  return { height: So("Height", t, n), width: So("Width", t, n) };
}
function sn(e) {
  return ai(Ae({}, e), {
    right: (e.left || 0) + e.width,
    bottom: (e.top || 0) + e.height,
  });
}
function ud(e) {
  return e !== "" && !isNaN(parseFloat(e)) && isFinite(Number(e));
}
function Q(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function xo(e) {
  let t = e.getBoundingClientRect();
  if (!(t && Q(t.top) && Q(t.left) && Q(t.bottom) && Q(t.right))) return t;
  let n = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top,
    },
    i = e.nodeName === "HTML" ? Vo(e.ownerDocument) : void 0,
    s =
      i?.width ||
      e.clientWidth ||
      (Q(t.right) && Q(n.left) && t.right - n.left) ||
      0,
    r =
      i?.height ||
      e.clientHeight ||
      (Q(t.bottom) && Q(n.top) && t.bottom - n.top) ||
      0,
    o = e.offsetWidth - s,
    a = e.offsetHeight - r;
  if (o || a) {
    let m = $t(e);
    ((o -= ko(m, "x")), (a -= ko(m, "y")), (n.width -= o), (n.height -= a));
  }
  return sn(n);
}
function Ts(e, t, n = !1) {
  let i = t.nodeName === "HTML",
    s = xo(e),
    r = xo(t),
    o = $t(t),
    a = parseFloat(o.borderTopWidth),
    m = parseFloat(o.borderLeftWidth);
  n &&
    i &&
    ((r.top = Math.max(r.top ?? 0, 0)), (r.left = Math.max(r.left ?? 0, 0)));
  let p = sn({
    top: (s.top ?? 0) - (r.top ?? 0) - a,
    left: (s.left ?? 0) - (r.left ?? 0) - m,
    width: s.width,
    height: s.height,
  });
  if (((p.marginTop = 0), (p.marginLeft = 0), i)) {
    let b = parseFloat(o.marginTop),
      E = parseFloat(o.marginLeft);
    (Q(p.top) && (p.top -= a - b),
      Q(p.bottom) && (p.bottom -= a - b),
      Q(p.left) && (p.left -= m - E),
      Q(p.right) && (p.right -= m - E),
      (p.marginTop = b),
      (p.marginLeft = E));
  }
  return p;
}
function Es(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function Oo(e) {
  if (!e) return document.body;
  switch (e.nodeName) {
    case "HTML":
    case "BODY":
      return e.ownerDocument.body;
    case "#document":
      return e.body;
    default:
  }
  let { overflow: t, overflowX: n, overflowY: i } = $t(e);
  return /(auto|scroll|overlay)/.test(String(t) + String(i) + String(n))
    ? e
    : Oo(Es(e));
}
function To(e, t = "top") {
  let n = t === "top" ? "scrollTop" : "scrollLeft",
    i = e.nodeName;
  if (i === "BODY" || i === "HTML") {
    let s = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || s)[n];
  }
  return e[n];
}
function hd(e, t = !1) {
  let n = e.ownerDocument.documentElement,
    i = Ts(e, n),
    s = Math.max(n.clientWidth, window.innerWidth || 0),
    r = Math.max(n.clientHeight, window.innerHeight || 0),
    o = t ? 0 : To(n),
    a = t ? 0 : To(n, "left"),
    m = {
      top: o - Number(i?.top) + Number(i?.marginTop),
      left: a - Number(i?.left) + Number(i?.marginLeft),
      width: s,
      height: r,
    };
  return sn(m);
}
function Yo(e) {
  let t = e.nodeName;
  return t === "BODY" || t === "HTML"
    ? !1
    : $t(e, "position") === "fixed"
      ? !0
      : Yo(Es(e));
}
function Ls(e, t, n = 0, i, s = !1) {
  let r = { top: 0, left: 0 },
    o = s ? Io(e) : Yn(e, t);
  if (i === "viewport") r = hd(o, s);
  else {
    let a;
    i === "scrollParent"
      ? ((a = Oo(Es(t))),
        a.nodeName === "BODY" && (a = e.ownerDocument.documentElement))
      : i === "window"
        ? (a = e.ownerDocument.documentElement)
        : (a = i);
    let m = Ts(a, o, s);
    if (m && a.nodeName === "HTML" && !Yo(o)) {
      let { height: p, width: b } = Vo(e.ownerDocument);
      (Q(r.top) && Q(m.top) && Q(m.marginTop) && (r.top += m.top - m.marginTop),
        Q(r.top) && (r.bottom = Number(p) + Number(m.top)),
        Q(r.left) &&
          Q(m.left) &&
          Q(m.marginLeft) &&
          (r.left += m.left - m.marginLeft),
        Q(r.top) && (r.right = Number(b) + Number(m.left)));
    } else m && (r = m);
  }
  return (
    Q(r.left) && (r.left += n),
    Q(r.top) && (r.top += n),
    Q(r.right) && (r.right -= n),
    Q(r.bottom) && (r.bottom -= n),
    r
  );
}
function md({ width: e, height: t }) {
  return e * t;
}
function Ao(
  e,
  t,
  n,
  i,
  s = ["top", "bottom", "right", "left"],
  r = "viewport",
  o = 0,
) {
  if (e.indexOf("auto") === -1) return e;
  let a = Ls(n, i, o, r),
    m = {
      top: { width: a?.width ?? 0, height: (t?.top ?? 0) - (a?.top ?? 0) },
      right: {
        width: (a?.right ?? 0) - (t?.right ?? 0),
        height: a?.height ?? 0,
      },
      bottom: {
        width: a?.width ?? 0,
        height: (a?.bottom ?? 0) - (t?.bottom ?? 0),
      },
      left: { width: (t.left ?? 0) - (a?.left ?? 0), height: a?.height ?? 0 },
    },
    p = Object.keys(m)
      .map((Z) => ai(Ae({ position: Z }, m[Z]), { area: md(m[Z]) }))
      .sort((Z, Se) => Se.area - Z.area),
    b = p.filter(
      ({ width: Z, height: Se }) => Z >= n.clientWidth && Se >= n.clientHeight,
    );
  b = b.filter(({ position: Z }) => s.some((Se) => Se === Z));
  let E = b.length > 0 ? b[0].position : p[0].position,
    R = e.split(" ")[1];
  return (
    (n.className = n.className.replace(
      /bs-tooltip-auto/g,
      `bs-tooltip-${rt().isBs5 ? nn[E] : E}`,
    )),
    E + (R ? `-${R}` : "")
  );
}
function _d(e) {
  return {
    width: e.offsets.target.width,
    height: e.offsets.target.height,
    left: Math.floor(e.offsets.target.left ?? 0),
    top: Math.round(e.offsets.target.top ?? 0),
    bottom: Math.round(e.offsets.target.bottom ?? 0),
    right: Math.floor(e.offsets.target.right ?? 0),
  };
}
function pd(e) {
  let t = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return e.replace(/left|right|bottom|top/g, (n) => t[n]);
}
function fd(e) {
  return e === "right" ? "left" : e === "left" ? "right" : e;
}
var In = (e, t = 0) => (e ? parseFloat(e) : t);
function Po(e) {
  let n = e.ownerDocument.defaultView?.getComputedStyle(e),
    i = In(n?.marginTop) + In(n?.marginBottom),
    s = In(n?.marginLeft) + In(n?.marginRight);
  return {
    width: Number(e.offsetWidth) + s,
    height: Number(e.offsetHeight) + i,
  };
}
function Fo(e, t, n) {
  let i = n ? Io(e) : Yn(e, t);
  return Ts(t, i, n);
}
function ks(e, t, n) {
  let i = n.split(" ")[0],
    s = Po(e),
    r = { width: s.width, height: s.height },
    o = ["right", "left"].indexOf(i) !== -1,
    a = o ? "top" : "left",
    m = o ? "left" : "top",
    p = o ? "height" : "width",
    b = o ? "width" : "height";
  return (
    (r[a] = (t[a] ?? 0) + t[p] / 2 - s[p] / 2),
    (r[m] = i === m ? (t[m] ?? 0) - s[b] : (t[pd(m)] ?? 0)),
    r
  );
}
function Ho(e, t) {
  return !!e.modifiers[t]?.enabled;
}
var gd = {
  top: ["top", "top start", "top end"],
  bottom: ["bottom", "bottom start", "bottom end"],
  start: ["start", "start top", "start bottom"],
  end: ["end", "end top", "end bottom"],
};
function Vn(e, t) {
  return rt().isBs5 ? gd[t].includes(e) : !1;
}
function vd(e) {
  return rt().isBs5
    ? Vn(e, "end")
      ? "ms-2"
      : Vn(e, "start")
        ? "me-2"
        : Vn(e, "top")
          ? "mb-2"
          : Vn(e, "bottom")
            ? "mt-2"
            : ""
    : "";
}
function yd(e, t) {
  let n = e.instance.target,
    i = n.className,
    s = rt().isBs5 ? nn[e.placement] : e.placement;
  if (
    (e.placementAuto &&
      ((i = i.replace(/bs-popover-auto/g, `bs-popover-${s}`)),
      (i = i.replace(/ms-2|me-2|mb-2|mt-2/g, "")),
      (i = i.replace(/bs-tooltip-auto/g, `bs-tooltip-${s}`)),
      (i = i.replace(/\sauto/g, ` ${s}`)),
      i.indexOf("popover") !== -1 && (i = i + " " + vd(s)),
      i.indexOf("popover") !== -1 &&
        i.indexOf("popover-auto") === -1 &&
        (i += " popover-auto"),
      i.indexOf("tooltip") !== -1 &&
        i.indexOf("tooltip-auto") === -1 &&
        (i += " tooltip-auto")),
    (i = i.replace(/left|right|top|bottom|end|start/g, `${s.split(" ")[0]}`)),
    t)
  ) {
    t.setAttribute(n, "class", i);
    return;
  }
  n.className = i;
}
function Eo(e, t, n) {
  !e ||
    !t ||
    Object.keys(t).forEach((i) => {
      let s = "";
      if (
        (["width", "height", "top", "right", "bottom", "left"].indexOf(i) !==
          -1 &&
          ud(t[i]) &&
          (s = "px"),
        n)
      ) {
        n.setStyle(e, i, `${String(t[i])}${s}`);
        return;
      }
      e.style[i] = String(t[i]) + s;
    });
}
function bd(e) {
  let t = e.offsets.target,
    n = e.instance.target.querySelector(".arrow");
  if (!n) return e;
  let i = ["left", "right"].indexOf(e.placement.split(" ")[0]) !== -1,
    s = i ? "height" : "width",
    r = i ? "Top" : "Left",
    o = r.toLowerCase(),
    a = i ? "left" : "top",
    m = i ? "bottom" : "right",
    p = Po(n)[s],
    b = e.placement.split(" ")[1];
  ((e.offsets.host[m] ?? 0) - p < (t[o] ?? 0) &&
    (t[o] -= (t[o] ?? 0) - ((e.offsets.host[m] ?? 0) - p)),
    Number(e.offsets.host[o]) + Number(p) > (t[m] ?? 0) &&
      (t[o] += Number(e.offsets.host[o]) + Number(p) - Number(t[m])),
    (t = sn(t)));
  let E = $t(e.instance.target),
    R = parseFloat(E[`margin${r}`]) || 0,
    Z = parseFloat(E[`border${r}Width`]) || 0,
    Se;
  if (!b)
    Se = Number(e.offsets.host[o]) + Number(e.offsets.host[s] / 2 - p / 2);
  else {
    let De = parseFloat(E.borderRadius) || 0,
      ce = Number(R + Z + De);
    Se =
      o === b
        ? Number(e.offsets.host[o]) + ce
        : Number(e.offsets.host[o]) + Number(e.offsets.host[s] - ce);
  }
  let wt = Se - (t[o] ?? 0) - R - Z;
  return (
    (wt = Math.max(Math.min(t[s] - (p + 5), wt), 0)),
    (e.offsets.arrow = { [o]: Math.round(wt), [a]: "" }),
    (e.instance.arrow = n),
    e
  );
}
function Cd(e) {
  if (((e.offsets.target = sn(e.offsets.target)), !Ho(e.options, "flip")))
    return (
      (e.offsets.target = Ae(
        Ae({}, e.offsets.target),
        ks(e.instance.target, e.offsets.host, e.placement),
      )),
      e
    );
  let t = Ls(e.instance.target, e.instance.host, 0, "viewport", !1),
    n = e.placement.split(" ")[0],
    i = e.placement.split(" ")[1] || "",
    s = e.offsets.host,
    r = e.instance.target,
    o = e.instance.host,
    a = Ao("auto", s, r, o, e.options.allowedPositions),
    m = [n, a];
  return (
    m.forEach((p, b) => {
      if (n !== p || m.length === b + 1) return;
      n = e.placement.split(" ")[0];
      let E =
          (n === "left" &&
            Math.floor(e.offsets.target.right ?? 0) >
              Math.floor(e.offsets.host.left ?? 0)) ||
          (n === "right" &&
            Math.floor(e.offsets.target.left ?? 0) <
              Math.floor(e.offsets.host.right ?? 0)) ||
          (n === "top" &&
            Math.floor(e.offsets.target.bottom ?? 0) >
              Math.floor(e.offsets.host.top ?? 0)) ||
          (n === "bottom" &&
            Math.floor(e.offsets.target.top ?? 0) <
              Math.floor(e.offsets.host.bottom ?? 0)),
        R = Math.floor(e.offsets.target.left ?? 0) < Math.floor(t.left ?? 0),
        Z = Math.floor(e.offsets.target.right ?? 0) > Math.floor(t.right ?? 0),
        Se = Math.floor(e.offsets.target.top ?? 0) < Math.floor(t.top ?? 0),
        wt =
          Math.floor(e.offsets.target.bottom ?? 0) > Math.floor(t.bottom ?? 0),
        De =
          (n === "left" && R) ||
          (n === "right" && Z) ||
          (n === "top" && Se) ||
          (n === "bottom" && wt),
        ce = ["top", "bottom"].indexOf(n) !== -1,
        oi =
          (ce && i === "left" && R) ||
          (ce && i === "right" && Z) ||
          (!ce && i === "left" && Se) ||
          (!ce && i === "right" && wt);
      (E || De || oi) &&
        ((E || De) && (n = m[b + 1]),
        oi && (i = fd(i)),
        (e.placement = n + (i ? ` ${i}` : "")),
        (e.offsets.target = Ae(
          Ae({}, e.offsets.target),
          ks(e.instance.target, e.offsets.host, e.placement),
        )));
    }),
    e
  );
}
function wd(e, t, n, i) {
  if (!e || !t) return;
  let s = Fo(e, t);
  !n.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/) &&
    !n.match(
      /^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/,
    ) &&
    (n = "auto");
  let r = !!n.match(/auto/g),
    o = n.match(/auto\s(left|right|top|bottom|start|end)/)
      ? n.split(" ")[1] || "auto"
      : n,
    a = o.match(
      /^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/,
    );
  (a && (o = a[1] + (a[2] ? ` ${a[2]}` : "")),
    ["left right", "right left", "top bottom", "bottom top"].indexOf(o) !==
      -1 && (o = "auto"),
    (o = Ao(o, s, e, t, i ? i.allowedPositions : void 0)));
  let m = ks(e, s, o);
  return {
    options: i || { modifiers: {} },
    instance: { target: e, host: t, arrow: void 0 },
    offsets: { target: m, host: s, arrow: void 0 },
    positionFixed: !1,
    placement: o,
    placementAuto: r,
  };
}
function Dd(e) {
  if (!Ho(e.options, "preventOverflow")) return e;
  let t = "transform",
    n = e.instance.target.style,
    { top: i, left: s, [t]: r } = n;
  ((n.top = ""), (n.left = ""), (n[t] = ""));
  let o = Ls(
    e.instance.target,
    e.instance.host,
    0,
    e.options.modifiers.preventOverflow?.boundariesElement || "scrollParent",
    !1,
  );
  ((n.top = i), (n.left = s), (n[t] = r));
  let a = ["left", "right", "top", "bottom"],
    m = {
      primary(p) {
        let b = e.offsets.target[p];
        return (
          (e.offsets.target[p] ?? 0) < (o[p] ?? 0) &&
            (b = Math.max(e.offsets.target[p] ?? 0, o[p] ?? 0)),
          { [p]: b }
        );
      },
      secondary(p) {
        let b = p === "right",
          E = b ? "left" : "top",
          R = b ? "width" : "height",
          Z = e.offsets.target[E];
        return (
          (e.offsets.target[p] ?? 0) > (o[p] ?? 0) &&
            (Z = Math.min(
              e.offsets.target[E] ?? 0,
              (o[p] ?? 0) - e.offsets.target[R],
            )),
          { [E]: Z }
        );
      },
    };
  return (
    a.forEach((p) => {
      let b =
        ["left", "top", "start"].indexOf(p) !== -1 ? m.primary : m.secondary;
      e.offsets.target = Ae(Ae({}, e.offsets.target), b(p));
    }),
    e
  );
}
function Md(e) {
  let t = e.placement,
    n = t.split(" ")[0],
    i = t.split(" ")[1];
  if (i) {
    let { host: s, target: r } = e.offsets,
      o = ["bottom", "top"].indexOf(n) !== -1,
      a = o ? "left" : "top",
      m = o ? "width" : "height",
      p = { start: { [a]: s[a] }, end: { [a]: (s[a] ?? 0) + s[m] - r[m] } };
    e.offsets.target = ai(Ae({}, r), { [a]: a === i ? p.start[a] : p.end[a] });
  }
  return e;
}
var Ss = class {
    position(t, n) {
      return this.offset(t, n);
    }
    offset(t, n) {
      return Fo(n, t);
    }
    positionElements(t, n, i, s, r) {
      let o = [Cd, Md, Dd, bd],
        a = Lo[i],
        m = wd(n, t, a, r);
      if (m) return o.reduce((p, b) => b(p), m);
    }
  },
  kd = new Ss();
function Sd(e, t, n, i, s, r) {
  let o = kd.positionElements(e, t, n, i, s);
  if (!o) return;
  let a = _d(o);
  (Eo(
    t,
    {
      "will-change": "transform",
      top: "0px",
      left: "0px",
      transform: `translate3d(${a.left}px, ${a.top}px, 0px)`,
    },
    r,
  ),
    o.instance.arrow && Eo(o.instance.arrow, o.offsets.arrow, r),
    yd(o, r));
}
var oe = (() => {
  let t = class t {
    constructor(i, s, r) {
      ((this.update$$ = new ue()),
        (this.positionElements = new Map()),
        (this.isDisabled = !1),
        ui(r) &&
          i.runOutsideAngular(() => {
            ((this.triggerEvent$ = qr(
              ms(window, "scroll", { passive: !0 }),
              ms(window, "resize", { passive: !0 }),
              $r(0, jr),
              this.update$$,
            )),
              this.triggerEvent$.subscribe(() => {
                this.isDisabled ||
                  this.positionElements.forEach((o) => {
                    Sd(
                      On(o.target),
                      On(o.element),
                      o.attachment,
                      o.appendToBody,
                      this.options,
                      s.createRenderer(null, null),
                    );
                  });
              }));
          }));
    }
    position(i) {
      this.addPositionElement(i);
    }
    get event$() {
      return this.triggerEvent$;
    }
    disable() {
      this.isDisabled = !0;
    }
    enable() {
      this.isDisabled = !1;
    }
    addPositionElement(i) {
      this.positionElements.set(On(i.element), i);
    }
    calcPosition() {
      this.update$$.next(null);
    }
    deletePositionElement(i) {
      this.positionElements.delete(On(i));
    }
    setOptions(i) {
      this.options = i;
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)(j(Mt), j(di), j(li));
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
function On(e) {
  return typeof e == "string"
    ? document.querySelector(e)
    : e instanceof P
      ? e.nativeElement
      : (e ?? null);
}
var Ut = class {
    constructor(t, n, i) {
      ((this.nodes = t), (this.viewRef = n), (this.componentRef = i));
    }
  },
  Vs = class {
    constructor(t, n, i, s, r, o, a, m, p) {
      ((this._viewContainerRef = t),
        (this._renderer = n),
        (this._elementRef = i),
        (this._injector = s),
        (this._componentFactoryResolver = r),
        (this._ngZone = o),
        (this._applicationRef = a),
        (this._posService = m),
        (this._document = p),
        (this.onBeforeShow = new k()),
        (this.onShown = new k()),
        (this.onBeforeHide = new k()),
        (this.onHidden = new k()),
        (this._providers = []),
        (this._isHiding = !1),
        (this.containerDefaultSelector = "body"),
        (this._listenOpts = {}),
        (this._globalListener = Function.prototype));
    }
    get isShown() {
      return this._isHiding ? !1 : !!this._componentRef;
    }
    attach(t) {
      return (
        (this._componentFactory =
          this._componentFactoryResolver.resolveComponentFactory(t)),
        this
      );
    }
    to(t) {
      return ((this.container = t || this.container), this);
    }
    position(t) {
      return t
        ? ((this.attachment = t.attachment || this.attachment),
          (this._elementRef = t.target || this._elementRef),
          this)
        : this;
    }
    provide(t) {
      return (this._providers.push(t), this);
    }
    show(t = {}) {
      if (
        (this._subscribePositioning(),
        (this._innerComponent = void 0),
        !this._componentRef)
      ) {
        (this.onBeforeShow.emit(),
          (this._contentRef = this._getContentRef(
            t.content,
            t.context,
            t.initialState,
          )));
        let n = Bi.create({
          providers: this._providers,
          parent: this._injector,
        });
        if (!this._componentFactory) return;
        if (
          ((this._componentRef = this._componentFactory.create(
            n,
            this._contentRef.nodes,
          )),
          this._applicationRef.attachView(this._componentRef.hostView),
          (this.instance = this._componentRef.instance),
          Object.assign(this._componentRef.instance, t),
          this.container instanceof P &&
            this.container.nativeElement.appendChild(
              this._componentRef.location.nativeElement,
            ),
          typeof this.container == "string" && typeof this._document < "u")
        ) {
          let i =
            this._document.querySelector(this.container) ||
            this._document.querySelector(this.containerDefaultSelector);
          if (!i) return;
          i.appendChild(this._componentRef.location.nativeElement);
        }
        (!this.container &&
          this._elementRef &&
          this._elementRef.nativeElement.parentElement &&
          this._elementRef.nativeElement.parentElement.appendChild(
            this._componentRef.location.nativeElement,
          ),
          this._contentRef.componentRef &&
            ((this._innerComponent = this._contentRef.componentRef.instance),
            this._contentRef.componentRef.changeDetectorRef.markForCheck(),
            this._contentRef.componentRef.changeDetectorRef.detectChanges()),
          this._componentRef.changeDetectorRef.markForCheck(),
          this._componentRef.changeDetectorRef.detectChanges(),
          this.onShown.emit(t.id ? { id: t.id } : this._componentRef.instance));
      }
      return (this._registerOutsideClick(), this._componentRef);
    }
    hide(t) {
      if (!this._componentRef) return this;
      (this._posService.deletePositionElement(this._componentRef.location),
        this.onBeforeHide.emit(this._componentRef.instance));
      let n = this._componentRef.location.nativeElement;
      return (
        n.parentNode?.removeChild(n),
        this._contentRef?.componentRef?.destroy(),
        this._viewContainerRef &&
          this._contentRef?.viewRef &&
          this._viewContainerRef.remove(
            this._viewContainerRef.indexOf(this._contentRef.viewRef),
          ),
        this._contentRef?.viewRef?.destroy(),
        this._componentRef?.destroy(),
        (this._contentRef = void 0),
        (this._componentRef = void 0),
        this._removeGlobalListener(),
        this.onHidden.emit(t ? { id: t } : null),
        this
      );
    }
    toggle() {
      if (this.isShown) {
        this.hide();
        return;
      }
      this.show();
    }
    dispose() {
      (this.isShown && this.hide(),
        this._unsubscribePositioning(),
        this._unregisterListenersFn && this._unregisterListenersFn());
    }
    listen(t) {
      ((this.triggers = t.triggers || this.triggers),
        (this._listenOpts.outsideClick = t.outsideClick),
        (this._listenOpts.outsideEsc = t.outsideEsc),
        (t.target = t.target || this._elementRef?.nativeElement));
      let n = (this._listenOpts.hide = () =>
          t.hide ? t.hide() : void this.hide()),
        i = (this._listenOpts.show = (r) => {
          (t.show ? t.show(r) : this.show(r), r());
        }),
        s = (r) => {
          this.isShown ? n() : i(r);
        };
      return (
        this._renderer &&
          (this._unregisterListenersFn = yo(this._renderer, {
            target: t.target,
            triggers: t.triggers,
            show: i,
            hide: n,
            toggle: s,
          })),
        this
      );
    }
    _removeGlobalListener() {
      this._globalListener &&
        (this._globalListener(), (this._globalListener = Function.prototype));
    }
    attachInline(t, n) {
      return (t && n && (this._inlineViewRef = t.createEmbeddedView(n)), this);
    }
    _registerOutsideClick() {
      if (!this._componentRef || !this._componentRef.location) return;
      let t = Function.prototype,
        n = Function.prototype;
      if (this._listenOpts.outsideClick) {
        let i = this._componentRef.location.nativeElement;
        setTimeout(() => {
          this._renderer &&
            this._elementRef &&
            (t = bo(this._renderer, {
              targets: [i, this._elementRef.nativeElement],
              outsideClick: this._listenOpts.outsideClick,
              hide: () => this._listenOpts.hide && this._listenOpts.hide(),
            }));
        });
      }
      if (this._listenOpts.outsideEsc && this._renderer && this._elementRef) {
        let i = this._componentRef.location.nativeElement;
        n = Co(this._renderer, {
          targets: [i, this._elementRef.nativeElement],
          outsideEsc: this._listenOpts.outsideEsc,
          hide: () => this._listenOpts.hide && this._listenOpts.hide(),
        });
      }
      this._globalListener = () => {
        (t(), n());
      };
    }
    getInnerComponent() {
      return this._innerComponent;
    }
    _subscribePositioning() {
      this._zoneSubscription ||
        !this.attachment ||
        (this.onShown.subscribe(() => {
          this._posService.position({
            element: this._componentRef?.location,
            target: this._elementRef,
            attachment: this.attachment,
            appendToBody: this.container === "body",
          });
        }),
        (this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
          this._componentRef && this._posService.calcPosition();
        })));
    }
    _unsubscribePositioning() {
      this._zoneSubscription &&
        (this._zoneSubscription.unsubscribe(),
        (this._zoneSubscription = void 0));
    }
    _getContentRef(t, n, i) {
      if (!t) return new Ut([]);
      if (t instanceof Mn) {
        if (this._viewContainerRef) {
          let o = this._viewContainerRef.createEmbeddedView(t, n);
          return (o.markForCheck(), new Ut([o.rootNodes], o));
        }
        let r = t.createEmbeddedView({});
        return (this._applicationRef.attachView(r), new Ut([r.rootNodes], r));
      }
      if (typeof t == "function") {
        let r = this._componentFactoryResolver.resolveComponentFactory(t),
          o = Bi.create({ providers: this._providers, parent: this._injector }),
          a = r.create(o);
        return (
          Object.assign(a.instance, i),
          this._applicationRef.attachView(a.hostView),
          new Ut([[a.location.nativeElement]], a.hostView, a)
        );
      }
      let s = this._renderer ? [this._renderer.createText(`${t}`)] : [];
      return new Ut([s]);
    }
  },
  ve = (() => {
    let t = class t {
      constructor(i, s, r, o, a, m) {
        ((this._componentFactoryResolver = i),
          (this._ngZone = s),
          (this._injector = r),
          (this._posService = o),
          (this._applicationRef = a),
          (this._document = m));
      }
      createLoader(i, s, r) {
        return new Vs(
          s,
          r,
          i,
          this._injector,
          this._componentFactoryResolver,
          this._ngZone,
          this._applicationRef,
          this._posService,
          this._document,
        );
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(j(Zr), j(Mt), j(Bi), j(oe), j(ps), j(dt));
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })();
var xd = "220ms cubic-bezier(0, 0, 0.2, 1)",
  vg = [
    Te({ height: 0, overflow: "hidden" }),
    st(xd, Te({ height: "*", overflow: "hidden" })),
  ];
var An = (() => {
  let t = class t {
    static forRoot() {
      return { ngModule: t, providers: [] };
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵmod = $({ type: t })),
    (t.ɵinj = W({})));
  let e = t;
  return e;
})();
var Td = ["*"],
  Ys = (() => {
    let t = class t {
      constructor() {
        ((this.adaptivePosition = !0),
          (this.placement = "top"),
          (this.triggers = "hover focus"),
          (this.delay = 0));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  Ed = (() => {
    let t = class t {
      get _bsVersions() {
        return rt();
      }
      constructor(i) {
        Object.assign(this, i);
      }
      ngAfterViewInit() {
        ((this.classMap = { in: !1, fade: !1 }),
          this.placement &&
            (this._bsVersions.isBs5 && (this.placement = nn[this.placement]),
            (this.classMap[this.placement] = !0)),
          (this.classMap[`tooltip-${this.placement}`] = !0),
          (this.classMap.in = !0),
          this.animation && (this.classMap.fade = !0),
          this.containerClass && (this.classMap[this.containerClass] = !0));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(Ys));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-tooltip-container"]],
        hostAttrs: ["role", "tooltip"],
        hostVars: 3,
        hostBindings: function (s, r) {
          s & 2 &&
            (H("id", r.id),
            Qe(
              "show tooltip in tooltip-" +
                r.placement +
                " bs-tooltip-" +
                r.placement +
                " " +
                r.placement +
                " " +
                r.containerClass,
            ));
        },
        ngContentSelectors: Td,
        decls: 3,
        vars: 0,
        consts: [
          [1, "tooltip-arrow", "arrow"],
          [1, "tooltip-inner"],
        ],
        template: function (s, r) {
          s & 1 && (Me(), ci(0, "div", 0), Je(1, "div", 1), ge(2), Ke());
        },
        styles: [
          ".tooltip[_nghost-%COMP%]{display:block;pointer-events:none;position:absolute}.tooltip[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{position:absolute}",
        ],
        changeDetection: 0,
      })));
    let e = t;
    return e;
  })(),
  Ld = 0,
  Pn = (() => {
    let t = class t {
      get isOpen() {
        return this._tooltip.isShown;
      }
      set isOpen(i) {
        i ? this.show() : this.hide();
      }
      set htmlContent(i) {
        (Ee("tooltipHtml was deprecated, please use `tooltip` instead"),
          (this.tooltip = i));
      }
      set _placement(i) {
        (Ee("tooltipPlacement was deprecated, please use `placement` instead"),
          (this.placement = i));
      }
      set _isOpen(i) {
        (Ee("tooltipIsOpen was deprecated, please use `isOpen` instead"),
          (this.isOpen = i));
      }
      get _isOpen() {
        return (
          Ee("tooltipIsOpen was deprecated, please use `isOpen` instead"),
          this.isOpen
        );
      }
      set _enable(i) {
        (Ee("tooltipEnable was deprecated, please use `isDisabled` instead"),
          (this.isDisabled = !i));
      }
      get _enable() {
        return (
          Ee("tooltipEnable was deprecated, please use `isDisabled` instead"),
          this.isDisabled
        );
      }
      set _appendToBody(i) {
        (Ee(
          'tooltipAppendToBody was deprecated, please use `container="body"` instead',
        ),
          (this.container = i ? "body" : this.container));
      }
      get _appendToBody() {
        return (
          Ee(
            'tooltipAppendToBody was deprecated, please use `container="body"` instead',
          ),
          this.container === "body"
        );
      }
      set _popupClass(i) {
        Ee("tooltipClass deprecated");
      }
      set _tooltipContext(i) {
        Ee("tooltipContext deprecated");
      }
      set _tooltipPopupDelay(i) {
        (Ee("tooltipPopupDelay is deprecated, use `delay` instead"),
          (this.delay = i));
      }
      get _tooltipTrigger() {
        return (
          Ee("tooltipTrigger was deprecated, please use `triggers` instead"),
          this.triggers
        );
      }
      set _tooltipTrigger(i) {
        (Ee("tooltipTrigger was deprecated, please use `triggers` instead"),
          (this.triggers = (i || "").toString()));
      }
      constructor(i, s, r, o, a, m) {
        ((this._elementRef = o),
          (this._renderer = a),
          (this._positionService = m),
          (this.tooltipId = Ld++),
          (this.adaptivePosition = !0),
          (this.tooltipChange = new k()),
          (this.placement = "top"),
          (this.triggers = "hover focus"),
          (this.containerClass = ""),
          (this.isDisabled = !1),
          (this.delay = 0),
          (this.tooltipAnimation = !0),
          (this.tooltipFadeDuration = 150),
          (this.tooltipStateChanged = new k()),
          (this._tooltip = s
            .createLoader(this._elementRef, i, this._renderer)
            .provide({ provide: Ys, useValue: r })),
          Object.assign(this, r),
          (this.onShown = this._tooltip.onShown),
          (this.onHidden = this._tooltip.onHidden));
      }
      ngOnInit() {
        (this._tooltip.listen({
          triggers: this.triggers,
          show: () => this.show(),
        }),
          this.tooltipChange.subscribe((i) => {
            i || this._tooltip.hide();
          }),
          this.onShown.subscribe(() => {
            this.setAriaDescribedBy();
          }),
          this.onHidden.subscribe(() => {
            this.setAriaDescribedBy();
          }));
      }
      setAriaDescribedBy() {
        ((this._ariaDescribedby = this.isOpen
          ? `tooltip-${this.tooltipId}`
          : void 0),
          this._ariaDescribedby
            ? this._renderer.setAttribute(
                this._elementRef.nativeElement,
                "aria-describedby",
                this._ariaDescribedby,
              )
            : this._renderer.removeAttribute(
                this._elementRef.nativeElement,
                "aria-describedby",
              ));
      }
      toggle() {
        if (this.isOpen) return this.hide();
        this.show();
      }
      show() {
        if (
          (this._positionService.setOptions({
            modifiers: {
              flip: { enabled: this.adaptivePosition },
              preventOverflow: {
                enabled: this.adaptivePosition,
                boundariesElement: this.boundariesElement || "scrollParent",
              },
            },
          }),
          this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip)
        )
          return;
        let i = () => {
            (this._delayTimeoutId && (this._delayTimeoutId = void 0),
              this._tooltip
                .attach(Ed)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                  content: this.tooltip,
                  placement: this.placement,
                  containerClass: this.containerClass,
                  id: `tooltip-${this.tooltipId}`,
                }));
          },
          s = () => {
            this._tooltipCancelShowFn && this._tooltipCancelShowFn();
          };
        this.delay
          ? (this._delaySubscription && this._delaySubscription.unsubscribe(),
            (this._delaySubscription = Gr(this.delay).subscribe(() => {
              (i(), s());
            })),
            this.triggers &&
              Ds(this.triggers).forEach((r) => {
                r.close &&
                  (this._tooltipCancelShowFn = this._renderer.listen(
                    this._elementRef.nativeElement,
                    r.close,
                    () => {
                      (this._delaySubscription?.unsubscribe(), s());
                    },
                  ));
              }))
          : i();
      }
      hide() {
        (this._delayTimeoutId &&
          (clearTimeout(this._delayTimeoutId), (this._delayTimeoutId = void 0)),
          this._tooltip.isShown &&
            (this._tooltip.instance?.classMap &&
              (this._tooltip.instance.classMap.in = !1),
            setTimeout(() => {
              this._tooltip.hide();
            }, this.tooltipFadeDuration)));
      }
      ngOnDestroy() {
        (this._tooltip.dispose(),
          this.tooltipChange.unsubscribe(),
          this._delaySubscription && this._delaySubscription.unsubscribe(),
          this.onShown.unsubscribe(),
          this.onHidden.unsubscribe());
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(qe), v(ve), v(Ys), v(P), v(J), v(oe));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [
          ["", "tooltip", ""],
          ["", "tooltipHtml", ""],
        ],
        inputs: {
          adaptivePosition: "adaptivePosition",
          tooltip: "tooltip",
          placement: "placement",
          triggers: "triggers",
          container: "container",
          containerClass: "containerClass",
          boundariesElement: "boundariesElement",
          isOpen: "isOpen",
          isDisabled: "isDisabled",
          delay: "delay",
          htmlContent: [0, "tooltipHtml", "htmlContent"],
          _placement: [0, "tooltipPlacement", "_placement"],
          _isOpen: [0, "tooltipIsOpen", "_isOpen"],
          _enable: [0, "tooltipEnable", "_enable"],
          _appendToBody: [0, "tooltipAppendToBody", "_appendToBody"],
          tooltipAnimation: "tooltipAnimation",
          _popupClass: [0, "tooltipClass", "_popupClass"],
          _tooltipContext: [0, "tooltipContext", "_tooltipContext"],
          _tooltipPopupDelay: [0, "tooltipPopupDelay", "_tooltipPopupDelay"],
          tooltipFadeDuration: "tooltipFadeDuration",
          _tooltipTrigger: [0, "tooltipTrigger", "_tooltipTrigger"],
        },
        outputs: {
          tooltipChange: "tooltipChange",
          onShown: "onShown",
          onHidden: "onHidden",
          tooltipStateChanged: "tooltipStateChanged",
        },
        exportAs: ["bs-tooltip"],
        features: [ee([ve, oe])],
      })));
    let e = t;
    return (
      Nr([Mo(), Br("design:type", Object)], e.prototype, "tooltip", void 0),
      e
    );
  })(),
  zt = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({ imports: [te] })));
    let e = t;
    return e;
  })();
var As = (() => {
  let t = class t {
    constructor() {
      ((this.LANGUAGE_KEY = "portfolio-language"),
        (this._currentLanguage = Wi(this.getInitialLanguage())),
        (this.currentLanguage = this._currentLanguage.asReadonly()),
        (this.isSpanish = _t(() => this._currentLanguage() === "es-MX")),
        (this.isEnglish = _t(() => this._currentLanguage() === "en")),
        (this.availableLanguages = [
          {
            code: "es-MX",
            name: "Spanish (Mexico)",
            nativeName: "Espa\xF1ol (M\xE9xico)",
            flag: "\u{1F1F2}\u{1F1FD}",
          },
          {
            code: "en",
            name: "English",
            nativeName: "English",
            flag: "\u{1F1FA}\u{1F1F8}",
          },
        ]),
        (this.currentLanguageOption = _t(
          () =>
            this.availableLanguages.find(
              (i) => i.code === this._currentLanguage(),
            ) || this.availableLanguages[0],
        )));
    }
    getInitialLanguage() {
      if (typeof localStorage < "u") {
        let i = localStorage.getItem(this.LANGUAGE_KEY);
        if (i && this.availableLanguages.some((s) => s.code === i)) return i;
      }
      if (typeof navigator < "u") {
        let i = navigator.language;
        if (i.startsWith("es")) return "es-MX";
        if (i.startsWith("en")) return "en";
      }
      return "es-MX";
    }
    setLanguage(i) {
      (this._currentLanguage.set(i),
        typeof localStorage < "u" &&
          localStorage.setItem(this.LANGUAGE_KEY, i));
    }
    toggleLanguage() {
      let i = this._currentLanguage() === "es-MX" ? "en" : "es-MX";
      this.setLanguage(i);
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
var Fn = (() => {
  let t = class t {
    constructor(i) {
      ((this.languageService = i),
        (this.translations = {
          "es-MX": {
            "nav.home": "Home",
            "nav.aboutme": "About me",
            "nav.experience": "Experience",
            "nav.example": "Example Request",
            "nav.cv": "CV",
            "nav.pdf": "PDF Format",
            "nav.html": "HTML Format",
            "home.greeting": "Hola!",
            "home.intro":
              "Mi nombre es David Mu\xF1oz Cruz. Soy desarrollador Full stack",
            "home.aboutme.title": "About me",
            "home.aboutme.content": `Inici\xE9 mi carrera en 2021 como desarrollador freelance, aplicando mis conocimientos en proyectos peque\xF1os y explorando tecnolog\xEDas como
                        Angular, Laravel y Node.js. Con el tiempo, fui especializ\xE1ndome en desarrollo full stack y la administraci\xF3n de infraestructuras en Docker y servidores Linux.
                        
                        Actualmente, formo parte de The Rocket Code como Full Stack Developer, donde me especializo en el desarrollo de aplicaciones web modernas, 
                        integraciones de herramientas de IA (Claude AI, Gemini, LangGraph) y soluciones de e-commerce escalables. Trabajo en proyectos que requieren arquitecturas complejas con 
                        NestJS, NextJS, React, Angular v18/v19 y especializaci\xF3n en Shopify para el sector asegurador y fintech.
                        
                        Anteriormente, trabaj\xE9 en BLIFE como Backend Developer, donde desarroll\xE9 microservicios en 
                        NestJS con NATS y GraphQL, implement\xE9 soluciones de firma digital con Flask y Python, y gestion\xE9 CI/CD con GitHub Actions y AWS.
                        
                        Tambi\xE9n trabaj\xE9 en MIDOCONLINE, donde lider\xE9 la refactorizaci\xF3n completa del backend, migr\xE1ndolo de Laravel 8 a Laravel 11, 
                        optimizando su arquitectura y mejorando significativamente el rendimiento.
                        
                        En SKYTEX M\xC9XICO, desarroll\xE9 soluciones empresariales como SkyFood, Skynet 2.0 y SkyInvoiceHub en
                        Angular, y SkySecurityApp y SkyInspect en Laravel y Node.js, adem\xE1s de liderar la
                        dockerizaci\xF3n del backend y la gesti\xF3n de servidores Ubuntu.
                        
                        Mi enfoque actual est\xE1 en arquitecturas de microservicios, integraci\xF3n de IA y DevOps, mientras sigo perfeccionando mis habilidades en
                        tecnolog\xEDas emergentes. En mi tiempo libre, me mantengo al d\xEDa con las \xFAltimas tendencias tecnol\xF3gicas y disfruto de mis pasatiempos, como jugar videojuegos y salir a pasear.`,
            "home.skills.title": "Habilidades",
            "home.studies.title": "Estudios",
            "home.experience.title": "Experience",
          },
          en: {
            "nav.home": "Home",
            "nav.aboutme": "About me",
            "nav.experience": "Experience",
            "nav.example": "Example Request",
            "nav.cv": "CV",
            "nav.pdf": "PDF Format",
            "nav.html": "HTML Format",
            "home.greeting": "Hello!",
            "home.intro":
              "My name is David Mu\xF1oz Cruz. I am a Full stack developer",
            "home.aboutme.title": "About me",
            "home.aboutme.content": `I started my career in 2021 as a freelance developer, applying my knowledge to small projects and exploring technologies such as
                        Angular, Laravel and Node.js. Over time, I specialized in full stack development and infrastructure administration in Docker and Linux servers.
                        
                        Currently, I am part of The Rocket Code as a Full Stack Developer, where I specialize in developing modern web applications, 
                        AI tool integrations (Claude AI, Gemini, LangGraph) and scalable e-commerce solutions. I work on projects that require complex architectures with 
                        NestJS, NextJS, React, Angular v18/v19 and specialization in Shopify for the insurance and fintech sector.
                        
                        Previously, I worked at BLIFE as a Backend Developer, where I developed microservices in 
                        NestJS with NATS and GraphQL, implemented digital signature solutions with Flask and Python, and managed CI/CD with GitHub Actions and AWS.
                        
                        I also worked at MIDOCONLINE, where I led the complete backend refactoring, migrating it from Laravel 8 to Laravel 11, 
                        optimizing its architecture and significantly improving performance.
                        
                        At SKYTEX M\xC9XICO, I developed business solutions such as SkyFood, Skynet 2.0 and SkyInvoiceHub in
                        Angular, and SkySecurityApp and SkyInspect in Laravel and Node.js, in addition to leading the
                        backend dockerization and Ubuntu server management.
                        
                        My current focus is on microservice architectures, AI integration and DevOps, while I continue to hone my skills in
                        emerging technologies. In my free time, I keep up with the latest technology trends and enjoy my hobbies, such as playing video games and going for walks.`,
            "home.skills.title": "Skills",
            "home.studies.title": "Studies",
            "home.experience.title": "Experience",
          },
        }),
        (this.currentLanguage = this.languageService.currentLanguage),
        (this.t = _t(() => (s) => this.translate(s))));
    }
    translate(i) {
      let s = this.currentLanguage();
      return this.translations[s]?.[i] || this.translations["es-MX"][i] || i;
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)(j(As));
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
var Od = () => ["fas", "home"],
  Yd = () => ["/profile"],
  Ad = () => ["fas", "arrow-down-up-across-line"],
  Pd = () => ["fas", "user"],
  Fd = () => ["fas", "business-time"];
function Hd(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 16)(1, "a", 21),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.onScroll.emit("aboutme"));
      }),
      l(2, "p", 18),
      w(3, "fa-icon", 19),
      c(4),
      d()()(),
      l(5, "li", 16)(6, "a", 22),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.onScroll.emit("experience"));
      }),
      l(7, "p", 18),
      w(8, "fa-icon", 19),
      c(9),
      d()()());
  }
  if (e & 2) {
    let n = u();
    (h(3),
      _("icon", Pe(4, Pd)),
      h(),
      re(" ", n.t("nav.aboutme"), " "),
      h(4),
      _("icon", Pe(5, Fd)),
      h(),
      re(" ", n.t("nav.experience"), " "));
  }
}
var Ps = (() => {
  var t, n, i, s, r;
  let o = class o {
    constructor() {
      xe(this, t);
      xe(this, n);
      xe(this, i);
      xe(this, s);
      xe(this, r);
      ((this.onScroll = new k()),
        pe(this, t, new ue()),
        pe(this, n, ""),
        pe(this, i, ie(_i)),
        pe(this, s, ie(kn)),
        pe(this, r, ie(Fn)),
        (this.isCollapsed = !0),
        (this.isHome = !0),
        (this.navbarClasses = {
          navbar: !0,
          "navbar-expand-lg": !0,
          "fixed-top": !0,
          "navbar-transparent": !0,
          "bg-success": !1,
        }),
        se(this, i)
          .currentRoute$.pipe(Ie(se(this, t)))
          .subscribe((m) => {
            (pe(this, n, m),
              (this.isHome = m.indexOf("home") !== -1 || m === "/"));
          }));
    }
    get t() {
      return se(this, r).t();
    }
    ngOnInit() {}
    ngOnDestroy() {
      (se(this, t).next(), se(this, t).complete());
    }
    actionPage(m) {
      this.isHome && (se(this, n).indexOf(m) !== -1 || se(this, n) === "/")
        ? this.onScroll.emit(m)
        : se(this, s).navigate([`/${m}`]);
    }
    downloadCV(m) {
      if (typeof window < "u") {
        let p = document.createElement("a");
        ((p.href =
          m === "pdf"
            ? "assets/cv_resume/david_cv.pdf"
            : "assets/cv_resume/david_cv.html"),
          (p.download = `David_Munoz_Cruz_CV.${m}`),
          p.setAttribute("download", `David_Munoz_Cruz_CV.${m}`),
          document.body.appendChild(p),
          p.click(),
          document.body.removeChild(p));
      }
    }
  };
  ((t = new WeakMap()),
    (n = new WeakMap()),
    (i = new WeakMap()),
    (s = new WeakMap()),
    (r = new WeakMap()),
    (o.ɵfac = function (p) {
      return new (p || o)();
    }),
    (o.ɵcmp = x({
      type: o,
      selectors: [["app-navbar"]],
      outputs: { onScroll: "onScroll" },
      decls: 32,
      vars: 13,
      consts: [
        ["color-on-scroll", "100", 3, "ngClass"],
        [1, "container"],
        [1, "navbar-translate"],
        [
          "placement",
          "bottom",
          "tooltip",
          "Develop description",
          "href",
          "javascript:void(0)",
          1,
          "navbar-brand",
          3,
          "click",
        ],
        [
          "aria-controls",
          "navigation-index",
          "aria-label",
          "Toggle navigation",
          "id",
          "navigation",
          "type",
          "button",
          1,
          "navbar-toggler",
          "navbar-toggler",
          3,
          "click",
        ],
        [1, "navbar-toggler-bar", "bar1"],
        [1, "navbar-toggler-bar", "bar2"],
        [1, "navbar-toggler-bar", "bar3"],
        [
          "id",
          "navigation",
          1,
          "navbar-collapse",
          "justify-content-end",
          3,
          "collapse",
        ],
        [1, "navbar-collapse-header"],
        [1, "row"],
        [1, "col-6", "collapse-brand"],
        [1, "col-6", "collapse-close", "text-right"],
        [
          "aria-controls",
          "navigation-index",
          "aria-label",
          "Toggle navigation",
          "id",
          "navigation",
          "type",
          "button",
          1,
          "navbar-toggler",
          3,
          "click",
        ],
        [1, "tim-icons", "icon-simple-remove"],
        [1, "navbar-nav"],
        [1, "nav-item", "p-0"],
        [
          "placement",
          "bottom",
          "tooltip",
          "Home",
          "href",
          "javascript:void(0)",
          1,
          "nav-link",
          3,
          "click",
        ],
        [1, "d-lg", "d-xl"],
        [1, "layout-menuitem-icon", 3, "icon"],
        [
          "placement",
          "bottom",
          "tooltip",
          "Profile",
          1,
          "nav-link",
          3,
          "routerLink",
        ],
        [
          "href",
          "javascript:void(0)",
          "placement",
          "bottom",
          "tooltip",
          "About me",
          1,
          "nav-link",
          3,
          "click",
        ],
        [
          "href",
          "javascript:void(0)",
          "placement",
          "bottom",
          "tooltip",
          "Experience",
          1,
          "nav-link",
          3,
          "click",
        ],
      ],
      template: function (p, b) {
        (p & 1 &&
          (l(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3),
          y("click", function () {
            return b.actionPage("home");
          }),
          l(4, "span"),
          c(5, " DVZ\u2022 "),
          d(),
          c(6, " Developer description "),
          d(),
          l(7, "button", 4),
          y("click", function () {
            return (b.isCollapsed = !b.isCollapsed);
          }),
          w(8, "span", 5)(9, "span", 6)(10, "span", 7),
          d()(),
          l(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "a"),
          c(16, " DVZ\u2022 "),
          d()(),
          l(17, "div", 12)(18, "button", 13),
          y("click", function () {
            return (b.isCollapsed = !b.isCollapsed);
          }),
          w(19, "i", 14),
          d()()()(),
          l(20, "ul", 15)(21, "li", 16)(22, "a", 17),
          y("click", function () {
            return b.actionPage("home");
          }),
          l(23, "p", 18),
          w(24, "fa-icon", 19),
          c(25),
          d()()(),
          ct(26, Hd, 10, 6),
          l(27, "li", 16)(28, "a", 20)(29, "p", 18),
          w(30, "fa-icon", 19),
          c(31),
          d()()()()()()()),
          p & 2 &&
            (_("ngClass", b.navbarClasses),
            h(7),
            H("aria-expanded", !b.isCollapsed),
            h(4),
            _("collapse", b.isCollapsed),
            h(7),
            H("aria-expanded", !b.isCollapsed),
            h(6),
            _("icon", Pe(10, Od)),
            h(),
            re(" ", b.t("nav.home"), " "),
            h(),
            ut(b.isHome ? 26 : -1),
            h(2),
            _("routerLink", Pe(11, Yd)),
            h(2),
            _("icon", Pe(12, Ad)),
            h(),
            re(" ", b.t("nav.example"), " ")));
      },
      dependencies: [te, Fe, hi, Sn, An, En, go, Et, mi, zt, Pn],
      encapsulation: 2,
    })));
  let e = o;
  return e;
})();
function Rd(e, t) {
  e & 1 && w(0, "div", 7);
}
function jd(e, t) {
  if ((e & 1 && (l(0, "div", 6), ct(1, Rd, 1, 0, "div", 7), d()), e & 2)) {
    let n = u();
    (Tt("left", n.coordenadasCursor.x, "px")(
      "top",
      n.coordenadasCursor.y,
      "px",
    ),
      h(),
      ut(n.mostrarSombraCursor ? 1 : -1));
  }
}
var M0 = (() => {
  var t, n;
  let i = class i {
    constructor(r) {
      xe(this, t);
      xe(this, n);
      ((this.document = r),
        (this.onDestroy$ = new ue()),
        pe(this, t, ie(co)),
        pe(this, n, ie(_i)),
        (this.mostrarSombraCursor = !1),
        (this.coordenadasCursor = { x: 0, y: 0 }),
        se(this, n).setCurrentRoute().pipe(Ie(this.onDestroy$)).subscribe());
    }
    get IsMobile() {
      return se(this, t).isMobile();
    }
    onWindowScroll() {
      typeof window < "u" && this.onSetColorNavBar();
    }
    onMouseMove(r) {
      ((this.coordenadasCursor = { x: r.clientX, y: r.clientY }),
        (this.mostrarSombraCursor = !0));
    }
    onMouseLeave() {
      this.mostrarSombraCursor = !1;
    }
    ngOnInit() {
      this.document.body.classList.add("index-page");
    }
    ngAfterViewInit() {}
    ngOnDestroy() {
      (this.document.body.classList.remove("index-page"),
        this.onDestroy$.next(),
        this.onDestroy$.complete());
    }
    onSetColorNavBar() {
      if (
        typeof window < "u" &&
        this.navbarTopElement &&
        this.navbarTopElement.navbarClasses
      ) {
        let r = window.scrollY > 50;
        ((this.navbarTopElement.navbarClasses["navbar-transparent"] = !r),
          (this.navbarTopElement.navbarClasses["bg-success"] = r));
      }
    }
    onScrollById(r) {
      this.document
        .getElementById(r)
        .scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    }
  };
  ((t = new WeakMap()),
    (n = new WeakMap()),
    (i.ɵfac = function (o) {
      return new (o || i)(v(dt));
    }),
    (i.ɵcmp = x({
      type: i,
      selectors: [["app-layout"]],
      viewQuery: function (o, a) {
        if ((o & 1 && kt(Ps, 5), o & 2)) {
          let m;
          St((m = xt())) && (a.navbarTopElement = m.first);
        }
      },
      hostBindings: function (o, a) {
        o & 1 &&
          y(
            "scroll",
            function (p) {
              return a.onWindowScroll(p);
            },
            $i,
          )("mousemove", function (p) {
            return a.onMouseMove(p);
          })("mouseleave", function () {
            return a.onMouseLeave();
          });
      },
      decls: 7,
      vars: 1,
      consts: [
        ["navbarTopElement", ""],
        [3, "onScroll"],
        [1, "wrapper", 2, "max-width", "100%"],
        [1, "w-100", 2, "max-width", "100%"],
        [1, "footer", "w-100"],
        [1, "shadow-cursor-container", 3, "left", "top"],
        [1, "shadow-cursor-container"],
        [1, "shadow-cursor"],
      ],
      template: function (o, a) {
        if (o & 1) {
          let m = D();
          (l(0, "app-navbar", 1, 0),
            y("onScroll", function (b) {
              return (f(m), g(a.onScrollById(b)));
            }),
            d(),
            l(2, "div", 2),
            w(3, "router-outlet", 3),
            l(4, "footer", 4)(5, "app-footer", 1),
            y("onScroll", function (b) {
              return (f(m), g(a.onScrollById(b)));
            }),
            d()()(),
            ct(6, jd, 2, 5, "div", 5));
        }
        o & 2 && (h(6), ut(a.IsMobile ? -1 : 6));
      },
      dependencies: [hi, lo, _o, Ps],
      encapsulation: 2,
      changeDetection: 0,
    })));
  let e = i;
  return e;
})();
var jo = (() => {
  let t = class t {
    static forRoot() {
      return { ngModule: t, providers: [] };
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵmod = $({ type: t })),
    (t.ɵinj = W({})));
  let e = t;
  return e;
})();
var Nd = ["*"],
  Bd = (e) => ["nav-item", e];
function Wd(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "span", 7),
      y("click", function (s) {
        f(n);
        let r = u().$implicit,
          o = u();
        return (s.preventDefault(), g(o.removeTab(r)));
      }),
      c(1, " \u274C"),
      d());
  }
}
function $d(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 3),
      y("keydown", function (s) {
        let r = f(n).index,
          o = u();
        return g(o.keyNavActions(s, r));
      }),
      l(1, "a", 4),
      y("click", function () {
        let s = f(n).$implicit;
        return g((s.active = !0));
      }),
      l(2, "span", 5),
      c(3),
      d(),
      C(4, Wd, 2, 0, "span", 6),
      d()());
  }
  if (e & 2) {
    let n = t.$implicit;
    (M("active", n.active)("disabled", n.disabled),
      _("ngClass", Ki(15, Bd, n.customClass || "")),
      h(),
      M("active", n.active)("disabled", n.disabled),
      H("aria-controls", n.id ? n.id : "")("aria-selected", !!n.active)(
        "id",
        n.id ? n.id + "-link" : "",
      ),
      h(),
      _("ngTransclude", n.headingRef),
      h(),
      A(n.heading),
      h(),
      _("ngIf", n.removable));
  }
}
var Ud = (() => {
    let t = class t {
      set ngTransclude(i) {
        ((this._ngTransclude = i), i && this.viewRef.createEmbeddedView(i));
      }
      get ngTransclude() {
        return this._ngTransclude;
      }
      constructor(i) {
        this.viewRef = i;
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(qe));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["", "ngTransclude", ""]],
        inputs: { ngTransclude: "ngTransclude" },
      })));
    let e = t;
    return e;
  })(),
  zd = (() => {
    let t = class t {
      constructor() {
        ((this.type = "tabs"),
          (this.isKeysAllowed = !0),
          (this.ariaLabel = "Tabs"));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  Fs = (() => {
    let t = class t {
      get vertical() {
        return this._vertical;
      }
      set vertical(i) {
        ((this._vertical = i), this.setClassMap());
      }
      get justified() {
        return this._justified;
      }
      set justified(i) {
        ((this._justified = i), this.setClassMap());
      }
      get type() {
        return this._type;
      }
      set type(i) {
        ((this._type = i), this.setClassMap());
      }
      get isKeysAllowed() {
        return this._isKeysAllowed;
      }
      set isKeysAllowed(i) {
        this._isKeysAllowed = i;
      }
      constructor(i, s, r) {
        ((this.renderer = s),
          (this.elementRef = r),
          (this.clazz = !0),
          (this.tabs = []),
          (this.classMap = {}),
          (this.ariaLabel = "Tabs"),
          (this.isDestroyed = !1),
          (this._vertical = !1),
          (this._justified = !1),
          (this._type = "tabs"),
          (this._isKeysAllowed = !0),
          Object.assign(this, i));
      }
      ngOnDestroy() {
        this.isDestroyed = !0;
      }
      addTab(i) {
        (this.tabs.push(i), (i.active = this.tabs.length === 1 && !i.active));
      }
      removeTab(i, s = { reselect: !0, emit: !0 }) {
        let r = this.tabs.indexOf(i);
        if (!(r === -1 || this.isDestroyed)) {
          if (s.reselect && i.active && this.hasAvailableTabs(r)) {
            let o = this.getClosestTabIndex(r);
            this.tabs[o].active = !0;
          }
          (s.emit && i.removed.emit(i),
            this.tabs.splice(r, 1),
            i.elementRef.nativeElement.parentNode &&
              this.renderer.removeChild(
                i.elementRef.nativeElement.parentNode,
                i.elementRef.nativeElement,
              ));
        }
      }
      keyNavActions(i, s) {
        if (!this.isKeysAllowed) return;
        let r = Array.from(
          this.elementRef.nativeElement.querySelectorAll(".nav-link"),
        );
        if (
          i.keyCode === 13 ||
          i.key === "Enter" ||
          i.keyCode === 32 ||
          i.key === "Space"
        ) {
          (i.preventDefault(), r[s % r.length].click());
          return;
        }
        if (i.keyCode === 39 || i.key === "RightArrow") {
          let o,
            a = 1;
          do ((o = r[(s + a) % r.length]), a++);
          while (o.classList.contains("disabled"));
          o.focus();
          return;
        }
        if (i.keyCode === 37 || i.key === "LeftArrow") {
          let o,
            a = 1,
            m = s;
          do
            (m - a < 0
              ? ((m = r.length - 1), (o = r[m]), (a = 0))
              : (o = r[m - a]),
              a++);
          while (o.classList.contains("disabled"));
          o.focus();
          return;
        }
        if (i.keyCode === 36 || i.key === "Home") {
          i.preventDefault();
          let o,
            a = 0;
          do ((o = r[a % r.length]), a++);
          while (o.classList.contains("disabled"));
          o.focus();
          return;
        }
        if (i.keyCode === 35 || i.key === "End") {
          i.preventDefault();
          let o,
            a = 1,
            m = s;
          do
            (m - a < 0
              ? ((m = r.length - 1), (o = r[m]), (a = 0))
              : (o = r[m - a]),
              a++);
          while (o.classList.contains("disabled"));
          o.focus();
          return;
        }
        if (
          (i.keyCode === 46 || i.key === "Delete") &&
          this.tabs[s].removable
        ) {
          if ((this.removeTab(this.tabs[s]), r[s + 1])) {
            r[(s + 1) % r.length].focus();
            return;
          }
          r[r.length - 1] && r[0].focus();
        }
      }
      getClosestTabIndex(i) {
        let s = this.tabs.length;
        if (!s) return -1;
        for (let r = 1; r <= s; r += 1) {
          let o = i - r,
            a = i + r;
          if (this.tabs[o] && !this.tabs[o].disabled) return o;
          if (this.tabs[a] && !this.tabs[a].disabled) return a;
        }
        return -1;
      }
      hasAvailableTabs(i) {
        let s = this.tabs.length;
        if (!s) return !1;
        for (let r = 0; r < s; r += 1)
          if (!this.tabs[r].disabled && r !== i) return !0;
        return !1;
      }
      setClassMap() {
        this.classMap = {
          "nav-stacked": this.vertical,
          "flex-column": this.vertical,
          "nav-justified": this.justified,
          [`nav-${this.type}`]: !0,
        };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(zd), v(J), v(P));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["tabset"]],
        hostVars: 2,
        hostBindings: function (s, r) {
          s & 2 && M("tab-container", r.clazz);
        },
        inputs: { vertical: "vertical", justified: "justified", type: "type" },
        ngContentSelectors: Nd,
        decls: 4,
        vars: 3,
        consts: [
          ["role", "tablist", 1, "nav", 3, "click", "ngClass"],
          [
            3,
            "ngClass",
            "active",
            "disabled",
            "keydown",
            4,
            "ngFor",
            "ngForOf",
          ],
          [1, "tab-content"],
          [3, "keydown", "ngClass"],
          [
            "href",
            "javascript:void(0);",
            "role",
            "tab",
            1,
            "nav-link",
            3,
            "click",
          ],
          [3, "ngTransclude"],
          ["class", "bs-remove-tab", 3, "click", 4, "ngIf"],
          [1, "bs-remove-tab", 3, "click"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (Me(),
            l(0, "ul", 0),
            y("click", function (a) {
              return a.preventDefault();
            }),
            C(1, $d, 5, 17, "li", 1),
            d(),
            l(2, "div", 2),
            ge(3),
            d()),
            s & 2 &&
              (_("ngClass", r.classMap),
              H("aria-label", r.ariaLabel),
              h(),
              _("ngForOf", r.tabs)));
        },
        dependencies: [Fe, ke, Ud, me],
        styles: [
          "[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}",
        ],
      })));
    let e = t;
    return e;
  })(),
  No = (() => {
    let t = class t {
      get customClass() {
        return this._customClass;
      }
      set customClass(i) {
        (this.customClass &&
          this.customClass.split(" ").forEach((s) => {
            this.renderer.removeClass(this.elementRef.nativeElement, s);
          }),
          (this._customClass = i ? i.trim() : ""),
          this.customClass &&
            this.customClass.split(" ").forEach((s) => {
              this.renderer.addClass(this.elementRef.nativeElement, s);
            }));
      }
      get active() {
        return this._active;
      }
      set active(i) {
        if (this._active !== i) {
          if ((this.disabled && i) || !i) {
            this._active &&
              !i &&
              (this.deselect.emit(this), (this._active = i));
            return;
          }
          ((this._active = i),
            this.selectTab.emit(this),
            this.tabset.tabs.forEach((s) => {
              s !== this && (s.active = !1);
            }));
        }
      }
      get ariaLabelledby() {
        return this.id ? `${this.id}-link` : "";
      }
      constructor(i, s, r) {
        ((this.elementRef = s),
          (this.renderer = r),
          (this.disabled = !1),
          (this.removable = !1),
          (this.selectTab = new k()),
          (this.deselect = new k()),
          (this.removed = new k()),
          (this.addClass = !0),
          (this.role = "tabpanel"),
          (this._active = !1),
          (this._customClass = ""),
          (this.tabset = i),
          this.tabset.addTab(this));
      }
      ngOnInit() {
        this.removable = !!this.removable;
      }
      ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: !1, emit: !1 });
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(Fs), v(P), v(J));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["tab"], ["", "tab", ""]],
        hostVars: 7,
        hostBindings: function (s, r) {
          s & 2 &&
            (H("id", r.id)("role", r.role)("aria-labelledby", r.ariaLabelledby),
            M("active", r.active)("tab-pane", r.addClass));
        },
        inputs: {
          heading: "heading",
          id: "id",
          disabled: "disabled",
          removable: "removable",
          customClass: "customClass",
          active: "active",
        },
        outputs: {
          selectTab: "selectTab",
          deselect: "deselect",
          removed: "removed",
        },
        exportAs: ["tab"],
      })));
    let e = t;
    return e;
  })();
var Hn = (() => {
  let t = class t {
    static forRoot() {
      return { ngModule: t, providers: [] };
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵmod = $({ type: t })),
    (t.ɵinj = W({ imports: [te] })));
  let e = t;
  return e;
})();
var It = new Ni("");
var Hs = new Ni("");
var qd = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  lv = ai(Ae({}, qd), { "[class.ng-submitted]": "isSubmitted" });
var Jd = (e, t) => ({ "pull-left": e, "float-left": t }),
  Kd = (e, t) => ({ "pull-right": e, "float-right": t }),
  Rn = (e, t) => ({ disabled: e, currentPage: t }),
  Qd = (e, t, n) => ({ disabled: e, $implicit: t, currentPage: n });
function Xd(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 11)(1, "a", 12),
      y("click", function (s) {
        f(n);
        let r = u();
        return g(r.selectPage(1, s));
      }),
      jt(2, 13),
      d()());
  }
  if (e & 2) {
    let n = u(),
      i = Nt(13);
    (M("disabled", n.noPrevious() || n.disabled),
      h(2),
      _("ngTemplateOutlet", n.customFirstTemplate || i)(
        "ngTemplateOutletContext",
        Bt(4, Rn, n.noPrevious() || n.disabled, n.page),
      ));
  }
}
function Zd(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 14)(1, "a", 12),
      y("click", function (s) {
        f(n);
        let r = u();
        return g(r.selectPage(r.page - 1, s));
      }),
      jt(2, 13),
      d()());
  }
  if (e & 2) {
    let n = u(),
      i = Nt(11);
    (M("disabled", n.noPrevious() || n.disabled),
      h(2),
      _("ngTemplateOutlet", n.customPreviousTemplate || i)(
        "ngTemplateOutletContext",
        Bt(4, Rn, n.noPrevious() || n.disabled, n.page),
      ));
  }
}
function ec(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 15)(1, "a", 12),
      y("click", function (s) {
        let r = f(n).$implicit,
          o = u();
        return g(o.selectPage(r.number, s));
      }),
      jt(2, 13),
      d()());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(),
      s = Nt(7);
    (M("active", n.active)("disabled", i.disabled && !n.active),
      h(2),
      _("ngTemplateOutlet", i.customPageTemplate || s)(
        "ngTemplateOutletContext",
        no(6, Qd, i.disabled, n, i.page),
      ));
  }
}
function tc(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 16)(1, "a", 12),
      y("click", function (s) {
        f(n);
        let r = u();
        return g(r.selectPage(r.page + 1, s));
      }),
      jt(2, 13),
      d()());
  }
  if (e & 2) {
    let n = u(),
      i = Nt(9);
    (M("disabled", n.noNext() || n.disabled),
      h(2),
      _("ngTemplateOutlet", n.customNextTemplate || i)(
        "ngTemplateOutletContext",
        Bt(4, Rn, n.noNext() || n.disabled, n.page),
      ));
  }
}
function ic(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 17)(1, "a", 12),
      y("click", function (s) {
        f(n);
        let r = u();
        return g(r.selectPage(r.totalPages, s));
      }),
      jt(2, 13),
      d()());
  }
  if (e & 2) {
    let n = u(),
      i = Nt(15);
    (M("disabled", n.noNext() || n.disabled),
      h(2),
      _("ngTemplateOutlet", n.customLastTemplate || i)(
        "ngTemplateOutletContext",
        Bt(4, Rn, n.noNext() || n.disabled, n.page),
      ));
  }
}
function nc(e, t) {
  if ((e & 1 && c(0), e & 2)) {
    let n = t.$implicit;
    A(n.text);
  }
}
function sc(e, t) {
  if ((e & 1 && c(0), e & 2)) {
    let n = u();
    A(n.getText("next"));
  }
}
function rc(e, t) {
  if ((e & 1 && c(0), e & 2)) {
    let n = u();
    A(n.getText("previous"));
  }
}
function oc(e, t) {
  if ((e & 1 && c(0), e & 2)) {
    let n = u();
    A(n.getText("first"));
  }
}
function ac(e, t) {
  if ((e & 1 && c(0), e & 2)) {
    let n = u();
    A(n.getText("last"));
  }
}
var Bo = (() => {
    let t = class t {
      constructor() {
        ((this.main = {
          itemsPerPage: 10,
          boundaryLinks: !1,
          directionLinks: !0,
          firstText: "First",
          previousText: "Previous",
          nextText: "Next",
          lastText: "Last",
          pageBtnClass: "",
          rotate: !0,
        }),
          (this.pager = {
            itemsPerPage: 15,
            previousText: "\xAB Previous",
            nextText: "Next \xBB",
            pageBtnClass: "",
            align: !0,
          }));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  lc = { provide: It, useExisting: Ge(() => dc), multi: !0 },
  dc = (() => {
    let t = class t {
      constructor(i, s, r) {
        ((this.elementRef = i),
          (this.changeDetection = r),
          (this.align = !1),
          (this.boundaryLinks = !1),
          (this.directionLinks = !0),
          (this.firstText = "First"),
          (this.previousText = "\xAB Previous"),
          (this.nextText = "Next \xBB"),
          (this.lastText = "Last"),
          (this.rotate = !0),
          (this.pageBtnClass = ""),
          (this.disabled = !1),
          (this.numPages = new k()),
          (this.pageChanged = new k()),
          (this.onChange = Function.prototype),
          (this.onTouched = Function.prototype),
          (this.classMap = ""),
          (this.inited = !1),
          (this._itemsPerPage = 15),
          (this._totalItems = 0),
          (this._totalPages = 0),
          (this._page = 1),
          (this.elementRef = i),
          this.config ||
            this.configureOptions(Object.assign({}, s.main, s.pager)));
      }
      get itemsPerPage() {
        return this._itemsPerPage;
      }
      set itemsPerPage(i) {
        ((this._itemsPerPage = i),
          (this.totalPages = this.calculateTotalPages()));
      }
      get totalItems() {
        return this._totalItems;
      }
      set totalItems(i) {
        ((this._totalItems = i),
          (this.totalPages = this.calculateTotalPages()));
      }
      get totalPages() {
        return this._totalPages;
      }
      set totalPages(i) {
        ((this._totalPages = i),
          this.numPages.emit(i),
          this.inited && this.selectPage(this.page));
      }
      get page() {
        return this._page;
      }
      set page(i) {
        let s = this._page;
        ((this._page = i > this.totalPages ? this.totalPages : i || 1),
          this.changeDetection.markForCheck(),
          !(s === this._page || typeof s > "u") &&
            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage,
            }));
      }
      configureOptions(i) {
        this.config = Object.assign({}, i);
      }
      ngOnInit() {
        (typeof window < "u" &&
          (this.classMap =
            this.elementRef.nativeElement.getAttribute("class") || ""),
          typeof this.maxSize > "u" &&
            (this.maxSize = this.config?.maxSize || 0),
          typeof this.rotate > "u" && (this.rotate = !!this.config?.rotate),
          typeof this.boundaryLinks > "u" &&
            (this.boundaryLinks = !!this.config?.boundaryLinks),
          typeof this.directionLinks > "u" &&
            (this.directionLinks = !!this.config?.directionLinks),
          typeof this.pageBtnClass > "u" &&
            (this.pageBtnClass = this.config?.pageBtnClass || ""),
          typeof this.itemsPerPage > "u" &&
            (this.itemsPerPage = this.config?.itemsPerPage || 0),
          (this.totalPages = this.calculateTotalPages()),
          (this.pages = this.getPages(this.page, this.totalPages)),
          (this.inited = !0));
      }
      writeValue(i) {
        ((this.page = i),
          (this.pages = this.getPages(this.page, this.totalPages)));
      }
      getText(i) {
        return this[`${i}Text`] || this.config[`${i}Text`];
      }
      noPrevious() {
        return this.page === 1;
      }
      noNext() {
        return this.page === this.totalPages;
      }
      registerOnChange(i) {
        this.onChange = i;
      }
      registerOnTouched(i) {
        this.onTouched = i;
      }
      selectPage(i, s) {
        (s && s.preventDefault(),
          this.disabled ||
            (s && s.target && s.target.blur(),
            this.writeValue(i),
            this.onChange(this.page)));
      }
      makePage(i, s, r) {
        return { text: s, number: i, active: r };
      }
      getPages(i, s) {
        let r = [],
          o = 1,
          a = s,
          m = typeof this.maxSize < "u" && this.maxSize < s;
        m &&
          this.maxSize &&
          (this.rotate
            ? ((o = Math.max(i - Math.floor(this.maxSize / 2), 1)),
              (a = o + this.maxSize - 1),
              a > s && ((a = s), (o = a - this.maxSize + 1)))
            : ((o = (Math.ceil(i / this.maxSize) - 1) * this.maxSize + 1),
              (a = Math.min(o + this.maxSize - 1, s))));
        for (let p = o; p <= a; p++) {
          let b = this.makePage(p, p.toString(), p === i);
          r.push(b);
        }
        if (m && !this.rotate) {
          if (o > 1) {
            let p = this.makePage(o - 1, "...", !1);
            r.unshift(p);
          }
          if (a < s) {
            let p = this.makePage(a + 1, "...", !1);
            r.push(p);
          }
        }
        return r;
      }
      calculateTotalPages() {
        let i =
          this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(i || 0, 1);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(P), v(Bo), v(Xe));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["pager"]],
        inputs: {
          align: "align",
          maxSize: "maxSize",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          rotate: "rotate",
          pageBtnClass: "pageBtnClass",
          disabled: "disabled",
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
        },
        outputs: { numPages: "numPages", pageChanged: "pageChanged" },
        features: [ee([lc])],
        decls: 7,
        vars: 22,
        consts: [
          [1, "pager"],
          [3, "ngClass"],
          ["href", "", 3, "click"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "ul", 0)(1, "li", 1)(2, "a", 2),
            y("click", function (a) {
              return r.selectPage(r.page - 1, a);
            }),
            c(3),
            d()(),
            l(4, "li", 1)(5, "a", 2),
            y("click", function (a) {
              return r.selectPage(r.page + 1, a);
            }),
            c(6),
            d()()()),
            s & 2 &&
              (h(),
              Qe(r.pageBtnClass),
              M("disabled", r.noPrevious())("previous", r.align),
              _("ngClass", Bt(16, Jd, r.align, r.align)),
              h(2),
              A(r.getText("previous")),
              h(),
              Qe(r.pageBtnClass),
              M("disabled", r.noNext())("next", r.align),
              _("ngClass", Bt(19, Kd, r.align, r.align)),
              h(2),
              A(r.getText("next"))));
        },
        dependencies: [Fe],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  cc = { provide: It, useExisting: Ge(() => uc), multi: !0 },
  uc = (() => {
    let t = class t {
      constructor(i, s, r) {
        ((this.elementRef = i),
          (this.changeDetection = r),
          (this.align = !0),
          (this.boundaryLinks = !1),
          (this.directionLinks = !0),
          (this.rotate = !0),
          (this.pageBtnClass = ""),
          (this.disabled = !1),
          (this.numPages = new k()),
          (this.pageChanged = new k()),
          (this.onChange = Function.prototype),
          (this.onTouched = Function.prototype),
          (this.classMap = ""),
          (this.inited = !1),
          (this._itemsPerPage = 10),
          (this._totalItems = 0),
          (this._totalPages = 0),
          (this._page = 1),
          (this.elementRef = i),
          this.config || this.configureOptions(s.main));
      }
      get itemsPerPage() {
        return this._itemsPerPage;
      }
      set itemsPerPage(i) {
        ((this._itemsPerPage = i),
          (this.totalPages = this.calculateTotalPages()));
      }
      get totalItems() {
        return this._totalItems;
      }
      set totalItems(i) {
        ((this._totalItems = i),
          (this.totalPages = this.calculateTotalPages()));
      }
      get totalPages() {
        return this._totalPages;
      }
      set totalPages(i) {
        ((this._totalPages = i),
          this.numPages.emit(i),
          this.inited && this.selectPage(this.page));
      }
      get page() {
        return this._page;
      }
      set page(i) {
        let s = this._page;
        ((this._page = i > this.totalPages ? this.totalPages : i || 1),
          this.changeDetection.markForCheck(),
          !(s === this._page || typeof s > "u") &&
            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage,
            }));
      }
      configureOptions(i) {
        this.config = Object.assign({}, i);
      }
      ngOnInit() {
        (typeof window < "u" &&
          (this.classMap =
            this.elementRef.nativeElement.getAttribute("class") || ""),
          typeof this.maxSize > "u" &&
            (this.maxSize = this.config?.maxSize || 0),
          typeof this.rotate > "u" && (this.rotate = !!this.config?.rotate),
          typeof this.boundaryLinks > "u" &&
            (this.boundaryLinks = !!this.config?.boundaryLinks),
          typeof this.directionLinks > "u" &&
            (this.directionLinks = !!this.config?.directionLinks),
          typeof this.pageBtnClass > "u" &&
            (this.pageBtnClass = this.config?.pageBtnClass || ""),
          typeof this.itemsPerPage > "u" &&
            (this.itemsPerPage = this.config?.itemsPerPage || 0),
          (this.totalPages = this.calculateTotalPages()),
          (this.pages = this.getPages(this.page, this.totalPages)),
          (this.inited = !0));
      }
      writeValue(i) {
        ((this.page = i),
          (this.pages = this.getPages(this.page, this.totalPages)));
      }
      getText(i) {
        return this[`${i}Text`] || this.config[`${i}Text`];
      }
      noPrevious() {
        return this.page === 1;
      }
      noNext() {
        return this.page === this.totalPages;
      }
      registerOnChange(i) {
        this.onChange = i;
      }
      registerOnTouched(i) {
        this.onTouched = i;
      }
      selectPage(i, s) {
        (s && s.preventDefault(),
          this.disabled ||
            (s && s.target && s.target.blur(),
            this.writeValue(i),
            this.onChange(this.page)));
      }
      makePage(i, s, r) {
        return { text: s, number: i, active: r };
      }
      getPages(i, s) {
        let r = [],
          o = 1,
          a = s,
          m = typeof this.maxSize < "u" && this.maxSize < s;
        m &&
          this.maxSize &&
          (this.rotate
            ? ((o = Math.max(i - Math.floor(this.maxSize / 2), 1)),
              (a = o + this.maxSize - 1),
              a > s && ((a = s), (o = a - this.maxSize + 1)))
            : ((o = (Math.ceil(i / this.maxSize) - 1) * this.maxSize + 1),
              (a = Math.min(o + this.maxSize - 1, s))));
        for (let p = o; p <= a; p++) {
          let b = this.makePage(p, p.toString(), p === i);
          r.push(b);
        }
        if (m && !this.rotate) {
          if (o > 1) {
            let p = this.makePage(o - 1, "...", !1);
            r.unshift(p);
          }
          if (a < s) {
            let p = this.makePage(a + 1, "...", !1);
            r.push(p);
          }
        }
        return r;
      }
      calculateTotalPages() {
        let i =
          this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(i || 0, 1);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(P), v(Bo), v(Xe));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["pagination"]],
        inputs: {
          align: "align",
          maxSize: "maxSize",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          rotate: "rotate",
          pageBtnClass: "pageBtnClass",
          disabled: "disabled",
          customPageTemplate: "customPageTemplate",
          customNextTemplate: "customNextTemplate",
          customPreviousTemplate: "customPreviousTemplate",
          customFirstTemplate: "customFirstTemplate",
          customLastTemplate: "customLastTemplate",
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
        },
        outputs: { numPages: "numPages", pageChanged: "pageChanged" },
        features: [ee([cc])],
        decls: 16,
        vars: 6,
        consts: [
          ["defaultPageTemplate", ""],
          ["defaultNextTemplate", ""],
          ["defaultPreviousTemplate", ""],
          ["defaultFirstTemplate", ""],
          ["defaultLastTemplate", ""],
          [1, "pagination", 3, "ngClass"],
          ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"],
          ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"],
          [
            "class",
            "pagination-page page-item",
            3,
            "active",
            "disabled",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"],
          ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"],
          [1, "pagination-first", "page-item"],
          ["href", "", 1, "page-link", 3, "click"],
          [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
          [1, "pagination-prev", "page-item"],
          [1, "pagination-page", "page-item"],
          [1, "pagination-next", "page-item"],
          [1, "pagination-last", "page-item"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "ul", 5),
            C(1, Xd, 3, 7, "li", 6)(2, Zd, 3, 7, "li", 7)(
              3,
              ec,
              3,
              10,
              "li",
              8,
            )(4, tc, 3, 7, "li", 9)(5, ic, 3, 7, "li", 10),
            d(),
            C(6, nc, 1, 1, "ng-template", null, 0, Wt)(
              8,
              sc,
              1,
              1,
              "ng-template",
              null,
              1,
              Wt,
            )(10, rc, 1, 1, "ng-template", null, 2, Wt)(
              12,
              oc,
              1,
              1,
              "ng-template",
              null,
              3,
              Wt,
            )(14, ac, 1, 1, "ng-template", null, 4, Wt)),
            s & 2 &&
              (_("ngClass", r.classMap),
              h(),
              _("ngIf", r.boundaryLinks),
              h(),
              _("ngIf", r.directionLinks),
              h(),
              _("ngForOf", r.pages),
              h(),
              _("ngIf", r.directionLinks),
              h(),
              _("ngIf", r.boundaryLinks)));
        },
        dependencies: [Fe, me, oo, ke],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  Wo = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({ imports: [te] })));
    let e = t;
    return e;
  })();
var $o = (() => {
  let t = class t {
    static forRoot() {
      return { ngModule: t, providers: [] };
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵmod = $({ type: t })),
    (t.ɵinj = W({})));
  let e = t;
  return e;
})();
function hc(e, t) {
  return ((e % t) + t) % t;
}
function Xt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Oe(e) {
  return typeof e == "string";
}
function fn(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function yt(e) {
  return e && e.getTime && !isNaN(e.getTime());
}
function ei(e) {
  return (
    e instanceof Function ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function Ei(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function z(e) {
  return (
    e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
  );
}
function ye(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ii(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function mc(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  let t;
  for (t in e) if (e.hasOwnProperty(t)) return !1;
  return !0;
}
function Da(e) {
  return e === void 0;
}
function V(e) {
  let t = +e,
    n = 0;
  return (t !== 0 && isFinite(t) && (n = Xt(t)), n);
}
var dn = {},
  Uo = {
    date: "day",
    hour: "hours",
    minute: "minutes",
    second: "seconds",
    millisecond: "milliseconds",
  };
function be(e, t) {
  let n = e.toLowerCase(),
    i = e;
  (n in Uo && (i = Uo[n]), (dn[n] = dn[`${n}s`] = dn[t] = i));
}
function Ma(e) {
  return Oe(e) ? dn[e] || dn[e.toLowerCase()] : void 0;
}
function _c(e) {
  let t = {},
    n,
    i;
  for (i in e) ye(e, i) && ((n = Ma(i)), n && (t[n] = e[i]));
  return t;
}
var et = 0,
  gt = 1,
  ot = 2,
  ae = 3,
  tt = 4,
  vt = 5,
  ti = 6,
  pc = 7,
  fc = 8;
function ft(e, t, n) {
  let i = `${Math.abs(e)}`,
    s = t - i.length,
    o = e >= 0 ? (n ? "+" : "") : "-",
    a = Math.pow(10, Math.max(0, s)).toString().substr(1);
  return o + a + i;
}
var Rs = {},
  Si = {},
  ka =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
function T(e, t, n, i) {
  (e && (Si[e] = i),
    t &&
      (Si[t[0]] = function () {
        return ft(i.apply(null, arguments), t[1], t[2]);
      }),
    n &&
      (Si[n] = function (s, r) {
        return r.locale.ordinal(i.apply(null, arguments), e);
      }));
}
function gc(e) {
  let t = e.match(ka),
    n = t.length,
    i = new Array(n);
  for (let s = 0; s < n; s++) i[s] = Si[t[s]] ? Si[t[s]] : vc(t[s]);
  return function (s, r, o, a = 0) {
    let m = "";
    for (let p = 0; p < n; p++)
      m += ei(i[p])
        ? i[p].call(null, s, { format: e, locale: r, isUTC: o, offset: a })
        : i[p];
    return m;
  };
}
function vc(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function cr(e, t, n) {
  let i = new Date(Date.UTC.apply(null, arguments));
  return (
    e < 100 && e >= 0 && isFinite(i.getUTCFullYear()) && i.setUTCFullYear(e),
    i
  );
}
function Xn(e, t = 0, n = 1, i = 0, s = 0, r = 0, o = 0) {
  let a = new Date(e, t, n, i, s, r, o);
  return (
    e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e),
    a
  );
}
function O(e, t = !1) {
  return t ? e.getUTCHours() : e.getHours();
}
function Di(e, t = !1) {
  return t ? e.getUTCMinutes() : e.getMinutes();
}
function tr(e, t = !1) {
  return t ? e.getUTCSeconds() : e.getSeconds();
}
function pt(e, t = !1) {
  return t ? e.getUTCMilliseconds() : e.getMilliseconds();
}
function yc(e) {
  return e.getTime();
}
function it(e, t = !1) {
  return t ? e.getUTCDay() : e.getDay();
}
function mn(e, t = !1) {
  return t ? e.getUTCDate() : e.getDate();
}
function Y(e, t = !1) {
  return t ? e.getUTCMonth() : e.getMonth();
}
function ne(e, t = !1) {
  return t ? e.getUTCFullYear() : e.getFullYear();
}
function bc(e) {
  return Math.floor(e.valueOf() / 1e3);
}
function Sa(e) {
  return Xn(
    e.getFullYear(),
    e.getMonth(),
    1,
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
  );
}
function xa(e, t) {
  return e.getDay() === Number(t);
}
function si(e, t) {
  return !e || !t ? !1 : ri(e, t) && Y(e) === Y(t);
}
function ri(e, t) {
  return !e || !t ? !1 : ne(e) === ne(t);
}
function bt(e, t) {
  return !e || !t ? !1 : ri(e, t) && si(e, t) && mn(e) === mn(t);
}
var Ta = /\d/,
  Ve = /\d\d/,
  Ea = /\d{3}/,
  ir = /\d{4}/,
  zn = /[+-]?\d{6}/,
  q = /\d\d?/,
  zo = /\d\d\d\d?/,
  Go = /\d\d\d\d\d\d?/,
  Bn = /\d{1,3}/,
  nr = /\d{1,4}/,
  Gn = /[+-]?\d{1,6}/,
  Cc = /\d+/,
  qn = /[+-]?\d+/;
var js = /Z|[+-]\d\d(?::?\d\d)?/gi,
  wc = /[+-]?\d+(\.\d{1,3})?/,
  cn =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  Jn = {};
function S(e, t, n) {
  if (ei(t)) {
    Jn[e] = t;
    return;
  }
  Jn[e] = function (i, s) {
    return i && n ? n : t;
  };
}
function Dc(e, t) {
  return ye(Jn, e) ? Jn[e](!1, t) : new RegExp(Mc(e));
}
function Mc(e) {
  return Zt(
    e
      .replace("\\", "")
      .replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        (t, n, i, s, r) => n || i || s || r,
      ),
  );
}
function Zt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var sr = {};
function G(e, t) {
  let n = Oe(e) ? [e] : e,
    i = t;
  if (
    (Ei(t) &&
      (i = function (s, r, o) {
        return ((r[t] = V(s)), o);
      }),
    z(n) && ei(i))
  ) {
    let s;
    for (s = 0; s < n.length; s++) sr[n[s]] = i;
  }
}
function _n(e, t) {
  G(e, function (n, i, s, r) {
    return ((s._w = s._w || {}), t(n, s._w, s, r));
  });
}
function kc(e, t, n) {
  return (t != null && ye(sr, e) && sr[e](t, n._a, n, e), n);
}
var Sc = {};
function Ce(e, t) {
  Sc[e] = t;
}
function xc() {
  (T("D", ["DD", 2, !1], "Do", function (e, t) {
    return mn(e, t.isUTC).toString(10);
  }),
    be("date", "D"),
    Ce("date", 9),
    S("D", q),
    S("DD", q, Ve),
    S("Do", function (e, t) {
      return t._dayOfMonthOrdinalParse || t._ordinalParse;
    }),
    G(["D", "DD"], ot),
    G("Do", function (e, t, n) {
      return ((t[ot] = V(e.match(q)[0])), n);
    }));
}
function Tc() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1,
  };
}
function F(e) {
  return (e._pf == null && (e._pf = Tc()), e._pf);
}
function Ns(e, t) {
  return t.locale.getFullYear
    ? t.locale.getFullYear(e, t.isUTC).toString()
    : ne(e, t.isUTC).toString();
}
function Ec() {
  (T("Y", null, null, function (e, t) {
    let n = ne(e, t.isUTC);
    return n <= 9999 ? n.toString(10) : `+${n}`;
  }),
    T(null, ["YY", 2, !1], null, function (e, t) {
      return (ne(e, t.isUTC) % 100).toString(10);
    }),
    T(null, ["YYYY", 4, !1], null, Ns),
    T(null, ["YYYYY", 5, !1], null, Ns),
    T(null, ["YYYYYY", 6, !0], null, Ns),
    be("year", "y"),
    Ce("year", 1),
    S("Y", qn),
    S("YY", q, Ve),
    S("YYYY", nr, ir),
    S("YYYYY", Gn, zn),
    S("YYYYYY", Gn, zn),
    G(["YYYYY", "YYYYYY"], et),
    G("YYYY", function (e, t, n) {
      return ((t[et] = e.length === 2 ? rr(e) : V(e)), n);
    }),
    G("YY", function (e, t, n) {
      return ((t[et] = rr(e)), n);
    }),
    G("Y", function (e, t, n) {
      return ((t[et] = parseInt(e, 10)), n);
    }));
}
function rr(e) {
  return V(e) + (V(e) > 68 ? 1900 : 2e3);
}
function un(e) {
  return La(e) ? 366 : 365;
}
function La(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
function ur(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  let n = hc(t, 12),
    i = e + (t - n) / 12;
  return n === 1 ? (La(i) ? 29 : 28) : 31 - ((n % 7) % 2);
}
function Lc() {
  (T("M", ["MM", 2, !1], "Mo", function (e, t) {
    return (Y(e, t.isUTC) + 1).toString(10);
  }),
    T("MMM", null, null, function (e, t) {
      return t.locale.monthsShort(e, t.format, t.isUTC);
    }),
    T("MMMM", null, null, function (e, t) {
      return t.locale.months(e, t.format, t.isUTC);
    }),
    be("month", "M"),
    Ce("month", 8),
    S("M", q),
    S("MM", q, Ve),
    S("MMM", function (e, t) {
      return t.monthsShortRegex(e);
    }),
    S("MMMM", function (e, t) {
      return t.monthsRegex(e);
    }),
    G(["M", "MM"], function (e, t, n) {
      return ((t[gt] = V(e) - 1), n);
    }),
    G(["MMM", "MMMM"], function (e, t, n, i) {
      let s = n._locale.monthsParse(e, i, n._strict);
      return (s != null ? (t[gt] = s) : (F(n).invalidMonth = !!e), n);
    }));
}
var Ic = { year: 0, month: 0, day: 0, hour: 0, minute: 0, seconds: 0 };
function de(e, t) {
  let n = Object.assign({}, Ic, t),
    i = e.getFullYear() + (n.year || 0),
    s = e.getMonth() + (n.month || 0),
    r = e.getDate() + (n.day || 0);
  return (
    n.month && !n.day && (r = Math.min(r, ur(i, s))),
    Xn(
      i,
      s,
      r,
      e.getHours() + (n.hour || 0),
      e.getMinutes() + (n.minute || 0),
      e.getSeconds() + (n.seconds || 0),
    )
  );
}
function Ia(e, t) {
  return Xn(
    pi(e.getFullYear(), t.year),
    pi(e.getMonth(), t.month),
    1,
    pi(e.getHours(), t.hour),
    pi(e.getMinutes(), t.minute),
    pi(e.getSeconds(), t.seconds),
    pi(e.getMilliseconds(), t.milliseconds),
  );
}
function pi(e, t) {
  return Ei(t) ? t : e;
}
function or(e, t, n) {
  let i = Math.min(mn(e), ur(ne(e), t));
  return (n ? e.setUTCMonth(t, i) : e.setMonth(t, i), e);
}
function Vc(e, t, n) {
  return (n ? e.setUTCHours(t) : e.setHours(t), e);
}
function Oc(e, t, n) {
  return (n ? e.setUTCMinutes(t) : e.setMinutes(t), e);
}
function Yc(e, t, n) {
  return (n ? e.setUTCSeconds(t) : e.setSeconds(t), e);
}
function Ac(e, t, n) {
  return (n ? e.setUTCMilliseconds(t) : e.setMilliseconds(t), e);
}
function Va(e, t, n) {
  return (n ? e.setUTCDate(t) : e.setDate(t), e);
}
function Pc(e, t) {
  return (e.setTime(t), e);
}
function ni(e) {
  return new Date(e.getTime());
}
function at(e, t, n) {
  let i = ni(e);
  switch (t) {
    case "year":
      or(i, 0, n);
    case "quarter":
    case "month":
      Va(i, 1, n);
    case "week":
    case "isoWeek":
    case "day":
    case "date":
      Vc(i, 0, n);
    case "hours":
      Oc(i, 0, n);
    case "minutes":
      Yc(i, 0, n);
    case "seconds":
      Ac(i, 0, n);
  }
  return (
    t === "week" && rh(i, 0, { isUTC: n }),
    t === "isoWeek" && ah(i, 1),
    t === "quarter" && or(i, Math.floor(Y(i, n) / 3) * 3, n),
    i
  );
}
function gn(e, t, n) {
  let i = t;
  i === "date" && (i = "day");
  let s = at(e, i, n),
    r = pn(s, 1, i === "isoWeek" ? "week" : i, n);
  return th(r, 1, "milliseconds", n);
}
function Fc() {
  (T("DDD", ["DDDD", 3, !1], "DDDo", function (e) {
    return Oa(e).toString(10);
  }),
    be("dayOfYear", "DDD"),
    Ce("dayOfYear", 4),
    S("DDD", Bn),
    S("DDDD", Ea),
    G(["DDD", "DDDD"], function (e, t, n) {
      return ((n._dayOfYear = V(e)), n);
    }));
}
function Oa(e, t) {
  let n = +at(e, "day", t),
    i = +at(e, "year", t),
    s = n - i,
    r = 1e3 * 60 * 60 * 24;
  return Math.round(s / r) + 1;
}
function Kn(e, t, n) {
  let i = t - n + 7;
  return -((cr(e, 0, i).getUTCDay() - t + 7) % 7) + i - 1;
}
function Hc(e, t, n, i, s) {
  let r = (7 + n - i) % 7,
    o = Kn(e, i, s),
    a = 1 + 7 * (t - 1) + r + o,
    m,
    p;
  return (
    a <= 0
      ? ((m = e - 1), (p = un(m) + a))
      : a > un(e)
        ? ((m = e + 1), (p = a - un(e)))
        : ((m = e), (p = a)),
    { year: m, dayOfYear: p }
  );
}
function xi(e, t, n, i) {
  let s = Kn(ne(e, i), t, n),
    r = Math.floor((Oa(e, i) - s - 1) / 7) + 1,
    o,
    a;
  return (
    r < 1
      ? ((a = ne(e, i) - 1), (o = r + Wn(a, t, n)))
      : r > Wn(ne(e, i), t, n)
        ? ((o = r - Wn(ne(e, i), t, n)), (a = ne(e, i) + 1))
        : ((a = ne(e, i)), (o = r)),
    { week: o, year: a }
  );
}
function Wn(e, t, n) {
  let i = Kn(e, t, n),
    s = Kn(e + 1, t, n);
  return (un(e) - i + s) / 7;
}
var qo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  Rc =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_",
    ),
  Ya = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  jc = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  Aa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  Nc = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  Pa = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  },
  Bc = "%d",
  Wc = /\d{1,2}/,
  $c = cn,
  Uc = cn,
  ar = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t) {
      let n;
      for (n in t) {
        if (!t.hasOwnProperty(n)) continue;
        let i = t[n],
          s = ei(i) ? n : `_${n}`;
        this[s] = i;
      }
      this._config = t;
    }
    calendar(t, n, i) {
      let s = this._calendar[t] || this._calendar.sameElse;
      return ei(s) ? s.call(null, n, i) : s;
    }
    longDateFormat(t) {
      let n = this._longDateFormat[t],
        i = this._longDateFormat[t.toUpperCase()];
      return n || !i
        ? n
        : ((this._longDateFormat[t] = i.replace(
            /MMMM|MM|DD|dddd/g,
            function (s) {
              return s.slice(1);
            },
          )),
          this._longDateFormat[t]);
    }
    get invalidDate() {
      return this._invalidDate;
    }
    set invalidDate(t) {
      this._invalidDate = t;
    }
    ordinal(t, n) {
      return this._ordinal.replace("%d", t.toString(10));
    }
    preparse(t, n) {
      return t;
    }
    getFullYear(t, n = !1) {
      return ne(t, n);
    }
    postformat(t) {
      return t;
    }
    relativeTime(t, n, i, s) {
      let r = this._relativeTime[i];
      return ei(r) ? r(t, n, i, s) : r.replace(/%d/i, t.toString(10));
    }
    pastFuture(t, n) {
      let i = this._relativeTime[t > 0 ? "future" : "past"];
      return ei(i) ? i(n) : i.replace(/%s/i, n);
    }
    months(t, n, i = !1) {
      if (!t) return z(this._months) ? this._months : this._months.standalone;
      if (z(this._months)) return this._months[Y(t, i)];
      let s = (this._months.isFormat || qo).test(n) ? "format" : "standalone";
      return this._months[s][Y(t, i)];
    }
    monthsShort(t, n, i = !1) {
      if (!t)
        return z(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      if (z(this._monthsShort)) return this._monthsShort[Y(t, i)];
      let s = qo.test(n) ? "format" : "standalone";
      return this._monthsShort[s][Y(t, i)];
    }
    monthsParse(t, n, i) {
      let s, r;
      if (this._monthsParseExact) return this.handleMonthStrictParse(t, n, i);
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = []));
      let o;
      for (o = 0; o < 12; o++) {
        if (
          ((s = new Date(Date.UTC(2e3, o))), i && !this._longMonthsParse[o])
        ) {
          let a = this.months(s, "", !0).replace(".", ""),
            m = this.monthsShort(s, "", !0).replace(".", "");
          ((this._longMonthsParse[o] = new RegExp(`^${a}$`, "i")),
            (this._shortMonthsParse[o] = new RegExp(`^${m}$`, "i")));
        }
        if (
          (!i &&
            !this._monthsParse[o] &&
            ((r = `^${this.months(s, "", !0)}|^${this.monthsShort(s, "", !0)}`),
            (this._monthsParse[o] = new RegExp(r.replace(".", ""), "i"))),
          (i && n === "MMMM" && this._longMonthsParse[o].test(t)) ||
            (i && n === "MMM" && this._shortMonthsParse[o].test(t)) ||
            (!i && this._monthsParse[o].test(t)))
        )
          return o;
      }
    }
    monthsRegex(t) {
      return this._monthsParseExact
        ? (ye(this, "_monthsRegex") || this.computeMonthsParse(),
          t ? this._monthsStrictRegex : this._monthsRegex)
        : (ye(this, "_monthsRegex") || (this._monthsRegex = Uc),
          this._monthsStrictRegex && t
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }
    monthsShortRegex(t) {
      return this._monthsParseExact
        ? (ye(this, "_monthsRegex") || this.computeMonthsParse(),
          t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (ye(this, "_monthsShortRegex") || (this._monthsShortRegex = $c),
          this._monthsShortStrictRegex && t
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }
    week(t, n) {
      return xi(t, this._week.dow, this._week.doy, n).week;
    }
    firstDayOfWeek() {
      return this._week.dow;
    }
    firstDayOfYear() {
      return this._week.doy;
    }
    weekdays(t, n, i) {
      if (!t)
        return z(this._weekdays) ? this._weekdays : this._weekdays.standalone;
      if (z(this._weekdays)) return this._weekdays[it(t, i)];
      let s = this._weekdays.isFormat.test(n) ? "format" : "standalone";
      return this._weekdays[s][it(t, i)];
    }
    weekdaysMin(t, n, i) {
      return t ? this._weekdaysMin[it(t, i)] : this._weekdaysMin;
    }
    weekdaysShort(t, n, i) {
      return t ? this._weekdaysShort[it(t, i)] : this._weekdaysShort;
    }
    weekdaysParse(t, n, i) {
      let s, r;
      if (this._weekdaysParseExact) return this.handleWeekStrictParse(t, n, i);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        let o = $n(new Date(Date.UTC(2e3, 1)), s, null, !0);
        if (
          (i &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              `^${this.weekdays(o, "", !0).replace(".", ".?")}$`,
              "i",
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              `^${this.weekdaysShort(o, "", !0).replace(".", ".?")}$`,
              "i",
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              `^${this.weekdaysMin(o, "", !0).replace(".", ".?")}$`,
              "i",
            ))),
          this._weekdaysParse[s] ||
            ((r = `^${this.weekdays(o, "", !0)}|^${this.weekdaysShort(o, "", !0)}|^${this.weekdaysMin(o, "", !0)}`),
            (this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i"))),
          !z(this._fullWeekdaysParse) ||
            !z(this._shortWeekdaysParse) ||
            !z(this._minWeekdaysParse) ||
            !z(this._weekdaysParse))
        )
          return;
        if (i && n === "dddd" && this._fullWeekdaysParse[s].test(t)) return s;
        if (i && n === "ddd" && this._shortWeekdaysParse[s].test(t)) return s;
        if (i && n === "dd" && this._minWeekdaysParse[s].test(t)) return s;
        if (!i && this._weekdaysParse[s].test(t)) return s;
      }
    }
    weekdaysRegex(t) {
      return this._weekdaysParseExact
        ? (ye(this, "_weekdaysRegex") || this.computeWeekdaysParse(),
          t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (ye(this, "_weekdaysRegex") || (this._weekdaysRegex = cn),
          this._weekdaysStrictRegex && t
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }
    weekdaysShortRegex(t) {
      return this._weekdaysParseExact
        ? (ye(this, "_weekdaysRegex") || this.computeWeekdaysParse(),
          t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (ye(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = cn),
          this._weekdaysShortStrictRegex && t
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }
    weekdaysMinRegex(t) {
      return this._weekdaysParseExact
        ? (ye(this, "_weekdaysRegex") || this.computeWeekdaysParse(),
          t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (ye(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = cn),
          this._weekdaysMinStrictRegex && t
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }
    isPM(t) {
      return t.toLowerCase().charAt(0) === "p";
    }
    meridiem(t, n, i) {
      return t > 11 ? (i ? "pm" : "PM") : i ? "am" : "AM";
    }
    formatLongDate(t) {
      this._longDateFormat = this._longDateFormat ? this._longDateFormat : Pa;
      let n = this._longDateFormat[t],
        i = this._longDateFormat[t.toUpperCase()];
      return n || !i
        ? n
        : ((this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, (s) =>
            s.slice(1),
          )),
          this._longDateFormat[t]);
    }
    handleMonthStrictParse(t, n, i) {
      let s = t.toLocaleLowerCase(),
        r,
        o,
        a;
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            r = 0;
          r < 12;
          ++r
        )
          ((a = new Date(2e3, r)),
            (this._shortMonthsParse[r] = this.monthsShort(
              a,
              "",
            ).toLocaleLowerCase()),
            (this._longMonthsParse[r] = this.months(
              a,
              "",
            ).toLocaleLowerCase()));
      return i
        ? n === "MMM"
          ? ((o = this._shortMonthsParse.indexOf(s)), o !== -1 ? o : null)
          : ((o = this._longMonthsParse.indexOf(s)), o !== -1 ? o : null)
        : n === "MMM"
          ? ((o = this._shortMonthsParse.indexOf(s)),
            o !== -1
              ? o
              : ((o = this._longMonthsParse.indexOf(s)), o !== -1 ? o : null))
          : ((o = this._longMonthsParse.indexOf(s)),
            o !== -1
              ? o
              : ((o = this._shortMonthsParse.indexOf(s)), o !== -1 ? o : null));
    }
    handleWeekStrictParse(t, n, i) {
      let s,
        r = t.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        ((this._weekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._minWeekdaysParse = []));
        let o;
        for (o = 0; o < 7; ++o) {
          let a = $n(new Date(Date.UTC(2e3, 1)), o, null, !0);
          ((this._minWeekdaysParse[o] =
            this.weekdaysMin(a).toLocaleLowerCase()),
            (this._shortWeekdaysParse[o] =
              this.weekdaysShort(a).toLocaleLowerCase()),
            (this._weekdaysParse[o] = this.weekdays(
              a,
              "",
            ).toLocaleLowerCase()));
        }
      }
      if (
        !(
          !z(this._weekdaysParse) ||
          !z(this._shortWeekdaysParse) ||
          !z(this._minWeekdaysParse)
        )
      )
        return i
          ? n === "dddd"
            ? ((s = this._weekdaysParse.indexOf(r)), s !== -1 ? s : null)
            : n === "ddd"
              ? ((s = this._shortWeekdaysParse.indexOf(r)), s !== -1 ? s : null)
              : ((s = this._minWeekdaysParse.indexOf(r)), s !== -1 ? s : null)
          : n === "dddd"
            ? ((s = this._weekdaysParse.indexOf(r)),
              s !== -1 || ((s = this._shortWeekdaysParse.indexOf(r)), s !== -1)
                ? s
                : ((s = this._minWeekdaysParse.indexOf(r)),
                  s !== -1 ? s : null))
            : n === "ddd"
              ? ((s = this._shortWeekdaysParse.indexOf(r)),
                s !== -1 || ((s = this._weekdaysParse.indexOf(r)), s !== -1)
                  ? s
                  : ((s = this._minWeekdaysParse.indexOf(r)),
                    s !== -1 ? s : null))
              : ((s = this._minWeekdaysParse.indexOf(r)),
                s !== -1 || ((s = this._weekdaysParse.indexOf(r)), s !== -1)
                  ? s
                  : ((s = this._shortWeekdaysParse.indexOf(r)),
                    s !== -1 ? s : null));
    }
    computeMonthsParse() {
      let t = [],
        n = [],
        i = [],
        s,
        r;
      for (r = 0; r < 12; r++)
        ((s = new Date(2e3, r)),
          t.push(this.monthsShort(s, "")),
          n.push(this.months(s, "")),
          i.push(this.months(s, "")),
          i.push(this.monthsShort(s, "")));
      for (t.sort(Gt), n.sort(Gt), i.sort(Gt), r = 0; r < 12; r++)
        ((t[r] = Zt(t[r])), (n[r] = Zt(n[r])));
      for (r = 0; r < 24; r++) i[r] = Zt(i[r]);
      ((this._monthsRegex = new RegExp(`^(${i.join("|")})`, "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp(`^(${n.join("|")})`, "i")),
        (this._monthsShortStrictRegex = new RegExp(`^(${t.join("|")})`, "i")));
    }
    computeWeekdaysParse() {
      let t = [],
        n = [],
        i = [],
        s = [],
        r;
      for (r = 0; r < 7; r++) {
        let o = $n(new Date(Date.UTC(2e3, 1)), r, null, !0),
          a = this.weekdaysMin(o),
          m = this.weekdaysShort(o),
          p = this.weekdays(o);
        (t.push(a), n.push(m), i.push(p), s.push(a), s.push(m), s.push(p));
      }
      for (t.sort(Gt), n.sort(Gt), i.sort(Gt), s.sort(Gt), r = 0; r < 7; r++)
        ((n[r] = Zt(n[r])), (i[r] = Zt(i[r])), (s[r] = Zt(s[r])));
      ((this._weekdaysRegex = new RegExp(`^(${s.join("|")})`, "i")),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = new RegExp(`^(${i.join("|")})`, "i")),
        (this._weekdaysShortStrictRegex = new RegExp(`^(${n.join("|")})`, "i")),
        (this._weekdaysMinStrictRegex = new RegExp(`^(${t.join("|")})`, "i")));
    }
  };
function Gt(e, t) {
  return t.length - e.length;
}
var zc = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  },
  Gc = "Invalid date",
  qc = { dow: 0, doy: 6 },
  Jc = /[ap]\.?m?\.?/i,
  Kc = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
  Qc = {
    calendar: zc,
    longDateFormat: Pa,
    invalidDate: Gc,
    ordinal: Bc,
    dayOfMonthOrdinalParse: Wc,
    relativeTime: Kc,
    months: Rc,
    monthsShort: Ya,
    week: qc,
    weekdays: jc,
    weekdaysMin: Nc,
    weekdaysShort: Aa,
    meridiemParse: Jc,
  };
function Xc(e, t, n) {
  let i = Math.min(e.length, t.length),
    s = Math.abs(e.length - t.length),
    r = 0,
    o;
  for (o = 0; o < i; o++)
    ((n && e[o] !== t[o]) || (!n && V(e[o]) !== V(t[o]))) && r++;
  return r + s;
}
function Zc() {
  (T("w", ["ww", 2, !1], "wo", function (e, t) {
    return an(e, t.locale).toString(10);
  }),
    T("W", ["WW", 2, !1], "Wo", function (e) {
      return eu(e).toString(10);
    }),
    be("week", "w"),
    be("isoWeek", "W"),
    Ce("week", 5),
    Ce("isoWeek", 5),
    S("w", q),
    S("ww", q, Ve),
    S("W", q),
    S("WW", q, Ve),
    _n(["w", "ww", "W", "WW"], function (e, t, n, i) {
      return ((t[i.substr(0, 1)] = V(e)), n);
    }));
}
function an(e, t = _e(), n) {
  return t.week(e, n);
}
function eu(e, t) {
  return xi(e, 1, 4, t).week;
}
function tu() {
  (T(null, ["gg", 2, !1], null, function (e, t) {
    return (Fa(e, t.locale) % 100).toString();
  }),
    T(null, ["GG", 2, !1], null, function (e) {
      return (Ha(e) % 100).toString();
    }),
    jn("gggg", Jo),
    jn("ggggg", Jo),
    jn("GGGG", Ko),
    jn("GGGGG", Ko),
    be("weekYear", "gg"),
    be("isoWeekYear", "GG"),
    Ce("weekYear", 1),
    Ce("isoWeekYear", 1),
    S("G", qn),
    S("g", qn),
    S("GG", q, Ve),
    S("gg", q, Ve),
    S("GGGG", nr, ir),
    S("gggg", nr, ir),
    S("GGGGG", Gn, zn),
    S("ggggg", Gn, zn),
    _n(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
      return ((t[i.substr(0, 2)] = V(e)), n);
    }),
    _n(["gg", "GG"], function (e, t, n, i) {
      return ((t[i] = rr(e)), n);
    }));
}
function jn(e, t) {
  T(null, [e, e.length, !1], null, t);
}
function Jo(e, t) {
  return Fa(e, t.locale).toString();
}
function Ko(e) {
  return Ha(e).toString();
}
function Fa(e, t = _e(), n) {
  return xi(e, t.firstDayOfWeek(), t.firstDayOfYear(), n).year;
}
function Ha(e, t) {
  return xi(e, 1, 4, t).year;
}
function iu() {
  (T("z", null, null, function (e, t) {
    return t.isUTC ? "UTC" : "";
  }),
    T("zz", null, null, function (e, t) {
      return t.isUTC ? "Coordinated Universal Time" : "";
    }));
}
function nu() {
  (T("X", null, null, function (e) {
    return bc(e).toString(10);
  }),
    T("x", null, null, function (e) {
      return e.valueOf().toString(10);
    }),
    S("x", qn),
    S("X", wc),
    G("X", function (e, t, n) {
      return ((n._d = new Date(parseFloat(e) * 1e3)), n);
    }),
    G("x", function (e, t, n) {
      return ((n._d = new Date(V(e))), n);
    }));
}
function su() {
  (T("s", ["ss", 2, !1], null, function (e, t) {
    return tr(e, t.isUTC).toString(10);
  }),
    be("second", "s"),
    Ce("second", 15),
    S("s", q),
    S("ss", q, Ve),
    G(["s", "ss"], vt));
}
function ru() {
  (T("Q", null, "Qo", function (e, t) {
    return ou(e, t.isUTC).toString(10);
  }),
    be("quarter", "Q"),
    Ce("quarter", 7),
    S("Q", Ta),
    G("Q", function (e, t, n) {
      return ((t[gt] = (V(e) - 1) * 3), n);
    }));
}
function ou(e, t = !1) {
  return Math.ceil((Y(e, t) + 1) / 3);
}
function Qo(e, t) {
  T(e, null, null, function (n, i) {
    let s = hu(n, { _isUTC: i.isUTC, _offset: i.offset }),
      r = "+";
    return (
      s < 0 && ((s = -s), (r = "-")),
      r + ft(~~(s / 60), 2) + t + ft(~~s % 60, 2)
    );
  });
}
function au() {
  (Qo("Z", ":"),
    Qo("ZZ", ""),
    S("Z", js),
    S("ZZ", js),
    G(["Z", "ZZ"], function (e, t, n) {
      return ((n._useUTC = !0), (n._tzm = du(js, e)), n);
    }));
}
var lu = /([\+\-]|\d\d)/gi;
function du(e, t) {
  let n = (t || "").match(e);
  if (n === null) return null;
  let s = n[n.length - 1].match(lu) || ["-", "0", "0"],
    r = parseInt(s[1], 10) * 60 + V(s[2]),
    o = s[0] === "+" ? r : -r;
  return r === 0 ? 0 : o;
}
function cu(e, t, n = {}) {
  if (!n._isUTC) return e;
  let i = ni(t),
    s = (n._offset || 0) * 6e4,
    r = e.valueOf() - i.valueOf() + s;
  return (i.setTime(i.valueOf() + r), i);
}
function uu(e) {
  return -Math.round(e.getTimezoneOffset() / 15) * 15;
}
function hu(e, t = {}) {
  let n = t._offset || 0;
  return t._isUTC ? n : uu(e);
}
function mu() {
  (T("m", ["mm", 2, !1], null, function (e, t) {
    return Di(e, t.isUTC).toString(10);
  }),
    be("minute", "m"),
    Ce("minute", 14),
    S("m", q),
    S("mm", q, Ve),
    G(["m", "mm"], tt));
}
function _u() {
  (T("S", null, null, function (n, i) {
    return (~~(pt(n, i.isUTC) / 100)).toString(10);
  }),
    T(null, ["SS", 2, !1], null, function (n, i) {
      return (~~(pt(n, i.isUTC) / 10)).toString(10);
    }),
    T(null, ["SSS", 3, !1], null, function (n, i) {
      return pt(n, i.isUTC).toString(10);
    }),
    T(null, ["SSSS", 4, !1], null, function (n, i) {
      return (pt(n, i.isUTC) * 10).toString(10);
    }),
    T(null, ["SSSSS", 5, !1], null, function (n, i) {
      return (pt(n, i.isUTC) * 100).toString(10);
    }),
    T(null, ["SSSSSS", 6, !1], null, function (n, i) {
      return (pt(n, i.isUTC) * 1e3).toString(10);
    }),
    T(null, ["SSSSSSS", 7, !1], null, function (n, i) {
      return (pt(n, i.isUTC) * 1e4).toString(10);
    }),
    T(null, ["SSSSSSSS", 8, !1], null, function (n, i) {
      return (pt(n, i.isUTC) * 1e5).toString(10);
    }),
    T(null, ["SSSSSSSSS", 9, !1], null, function (n, i) {
      return (pt(n, i.isUTC) * 1e6).toString(10);
    }),
    be("millisecond", "ms"),
    Ce("millisecond", 16),
    S("S", Bn, Ta),
    S("SS", Bn, Ve),
    S("SSS", Bn, Ea));
  let e;
  for (e = "SSSS"; e.length <= 9; e += "S") S(e, Cc);
  function t(n, i, s) {
    return ((i[ti] = V(parseFloat(`0.${n}`) * 1e3)), s);
  }
  for (e = "S"; e.length <= 9; e += "S") G(e, t);
}
function pu() {
  function e(s, r) {
    return O(s, r) % 12 || 12;
  }
  function t(s, r) {
    return O(s, r) || 24;
  }
  (T("H", ["HH", 2, !1], null, function (s, r) {
    return O(s, r.isUTC).toString(10);
  }),
    T("h", ["hh", 2, !1], null, function (s, r) {
      return e(s, r.isUTC).toString(10);
    }),
    T("k", ["kk", 2, !1], null, function (s, r) {
      return t(s, r.isUTC).toString(10);
    }),
    T("hmm", null, null, function (s, r) {
      let o = e(s, r.isUTC),
        a = ft(Di(s, r.isUTC), 2);
      return `${o}${a}`;
    }),
    T("hmmss", null, null, function (s, r) {
      let o = e(s, r.isUTC),
        a = ft(Di(s, r.isUTC), 2),
        m = ft(tr(s, r.isUTC), 2);
      return `${o}${a}${m}`;
    }),
    T("Hmm", null, null, function (s, r) {
      let o = O(s, r.isUTC),
        a = ft(Di(s, r.isUTC), 2);
      return `${o}${a}`;
    }),
    T("Hmmss", null, null, function (s, r) {
      let o = O(s, r.isUTC),
        a = ft(Di(s, r.isUTC), 2),
        m = ft(tr(s, r.isUTC), 2);
      return `${o}${a}${m}`;
    }));
  function n(s, r) {
    T(s, null, null, function (o, a) {
      return a.locale.meridiem(O(o, a.isUTC), Di(o, a.isUTC), r);
    });
  }
  (n("a", !0), n("A", !1), be("hour", "h"), Ce("hour", 13));
  function i(s, r) {
    return r._meridiemParse;
  }
  (S("a", i),
    S("A", i),
    S("H", q),
    S("h", q),
    S("k", q),
    S("HH", q, Ve),
    S("hh", q, Ve),
    S("kk", q, Ve),
    S("hmm", zo),
    S("hmmss", Go),
    S("Hmm", zo),
    S("Hmmss", Go),
    G(["H", "HH"], ae),
    G(["k", "kk"], function (s, r, o) {
      let a = V(s);
      return ((r[ae] = a === 24 ? 0 : a), o);
    }),
    G(["a", "A"], function (s, r, o) {
      return ((o._isPm = o._locale.isPM(s)), (o._meridiem = s), o);
    }),
    G(["h", "hh"], function (s, r, o) {
      return ((r[ae] = V(s)), (F(o).bigHour = !0), o);
    }),
    G("hmm", function (s, r, o) {
      let a = s.length - 2;
      return (
        (r[ae] = V(s.substr(0, a))),
        (r[tt] = V(s.substr(a))),
        (F(o).bigHour = !0),
        o
      );
    }),
    G("hmmss", function (s, r, o) {
      let a = s.length - 4,
        m = s.length - 2;
      return (
        (r[ae] = V(s.substr(0, a))),
        (r[tt] = V(s.substr(a, 2))),
        (r[vt] = V(s.substr(m))),
        (F(o).bigHour = !0),
        o
      );
    }),
    G("Hmm", function (s, r, o) {
      let a = s.length - 2;
      return ((r[ae] = V(s.substr(0, a))), (r[tt] = V(s.substr(a))), o);
    }),
    G("Hmmss", function (s, r, o) {
      let a = s.length - 4,
        m = s.length - 2;
      return (
        (r[ae] = V(s.substr(0, a))),
        (r[tt] = V(s.substr(a, 2))),
        (r[vt] = V(s.substr(m))),
        o
      );
    }));
}
var Ot = {},
  rn = {},
  hn;
function Xo(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function fu(e) {
  let t,
    n,
    i = 0;
  for (; i < e.length; ) {
    let s = Xo(e[i]).split("-"),
      r = s.length;
    for (t = Xo(e[i + 1]), t = t ? t.split("-") : null; r > 0; ) {
      if (((n = vu(s.slice(0, r).join("-"))), n)) return n;
      if (t && t.length >= r && Xc(s, t, !0) >= r - 1) break;
      r--;
    }
    i++;
  }
  return null;
}
function gu(e, t) {
  let n = Object.assign({}, e);
  for (let i in t)
    ye(t, i) &&
      (ii(e[i]) && ii(t[i])
        ? ((n[i] = {}), Object.assign(n[i], e[i]), Object.assign(n[i], t[i]))
        : t[i] != null
          ? (n[i] = t[i])
          : delete n[i]);
  for (let i in e)
    ye(e, i) && !ye(t, i) && ii(e[i]) && (n[i] = Object.assign({}, n[i]));
  return n;
}
function vu(e) {
  return (
    Ot[e] ||
      console.error(
        `Khronos locale error: please load locale "${e}" before using it`,
      ),
    Ot[e]
  );
}
function Ra(e, t) {
  let n;
  return (
    e && (Da(t) ? (n = _e(e)) : Oe(e) && (n = ja(e, t)), n && (hn = n)),
    hn && hn._abbr
  );
}
function ja(e, t) {
  if (t === null) return (delete Ot[e], (hn = _e("en")), null);
  if (!t) return;
  let n = Qc;
  if (((t.abbr = e), t.parentLocale != null))
    if (Ot[t.parentLocale] != null) n = Ot[t.parentLocale]._config;
    else
      return (
        rn[t.parentLocale] || (rn[t.parentLocale] = []),
        rn[t.parentLocale].push({ name: e, config: t }),
        null
      );
  return (
    (Ot[e] = new ar(gu(n, t))),
    rn[e] &&
      rn[e].forEach(function (i) {
        ja(i.name, i.config);
      }),
    Ra(e),
    Ot[e]
  );
}
function _e(e) {
  if ((yu(), !e)) return hn;
  let t = z(e) ? e : [e];
  return fu(t);
}
function yu() {
  Ot.en ||
    (Ra("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal(e) {
        let t = e % 10,
          n =
            V((e % 100) / 10) === 1
              ? "th"
              : t === 1
                ? "st"
                : t === 2
                  ? "nd"
                  : t === 3
                    ? "rd"
                    : "th";
        return e + n;
      },
    }),
    Zc(),
    tu(),
    Ec(),
    iu(),
    nu(),
    su(),
    ru(),
    au(),
    Lc(),
    mu(),
    _u(),
    pu(),
    Fc(),
    ih(),
    xc());
}
var ln = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ],
  bu = ln.reduce((e, t) => ((e[t] = !0), e), {});
function Cu(e) {
  if (Object.keys(e).some((i) => (i in bu && e[i] === null) || isNaN(e[i])))
    return !1;
  let n = !1;
  for (let i = 0; i < ln.length; ++i)
    if (e[ln[i]]) {
      if (n) return !1;
      e[ln[i]] !== V(e[ln[i]]) && (n = !0);
    }
  return !0;
}
function Zo(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function wu(e) {
  let t = e._milliseconds,
    n = e._days,
    i = e._months,
    s = e._data;
  ((t >= 0 && n >= 0 && i >= 0) ||
    (t <= 0 && n <= 0 && i <= 0) ||
    ((t += Zo(lr(i) + n) * 864e5), (n = 0), (i = 0)),
    (s.milliseconds = t % 1e3));
  let r = Xt(t / 1e3);
  s.seconds = r % 60;
  let o = Xt(r / 60);
  s.minutes = o % 60;
  let a = Xt(o / 60);
  ((s.hours = a % 24), (n += Xt(a / 24)));
  let m = Xt(Na(n));
  ((i += m), (n -= Zo(lr(m))));
  let p = Xt(i / 12);
  return ((i %= 12), (s.day = n), (s.month = i), (s.year = p), e);
}
function Na(e) {
  return (e * 4800) / 146097;
}
function lr(e) {
  return (e * 146097) / 4800;
}
var fi = Math.round,
  gi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
function Du(e, t, n, i, s) {
  return s.relativeTime(t || 1, !!n, e, i);
}
function Mu(e, t, n) {
  let i = fr(e).abs(),
    s = fi(i.as("s")),
    r = fi(i.as("m")),
    o = fi(i.as("h")),
    a = fi(i.as("d")),
    m = fi(i.as("M")),
    p = fi(i.as("y")),
    b = (s <= gi.ss && ["s", s]) ||
      (s < gi.s && ["ss", s]) ||
      (r <= 1 && ["m"]) ||
      (r < gi.m && ["mm", r]) ||
      (o <= 1 && ["h"]) ||
      (o < gi.h && ["hh", o]) ||
      (a <= 1 && ["d"]) ||
      (a < gi.d && ["dd", a]) ||
      (m <= 1 && ["M"]) ||
      (m < gi.M && ["MM", m]) ||
      (p <= 1 && ["y"]) || ["yy", p],
    E = [b[0], b[1], t, +e > 0, n];
  return Du.apply(null, E);
}
var Qn = class {
  constructor(t, n = {}) {
    ((this._data = {}),
      (this._locale = _e()),
      (this._locale = (n && n._locale) || _e()));
    let i = t,
      s = i.year || 0,
      r = i.quarter || 0,
      o = i.month || 0,
      a = i.week || 0,
      m = i.day || 0,
      p = i.hours || 0,
      b = i.minutes || 0,
      E = i.seconds || 0,
      R = i.milliseconds || 0;
    return (
      (this._isValid = Cu(i)),
      (this._milliseconds = +R + E * 1e3 + b * 60 * 1e3 + p * 1e3 * 60 * 60),
      (this._days = +m + a * 7),
      (this._months = +o + r * 3 + s * 12),
      wu(this)
    );
  }
  isValid() {
    return this._isValid;
  }
  humanize(t) {
    if (!this.isValid()) return this.localeData().invalidDate;
    let n = this.localeData(),
      i = Mu(this, !t, n);
    return (t && (i = n.pastFuture(+this, i)), n.postformat(i));
  }
  localeData() {
    return this._locale;
  }
  locale(t) {
    return t
      ? ((this._locale = _e(t) || this._locale), this)
      : this._locale._abbr;
  }
  abs() {
    let t = Math.abs,
      n = this._data;
    return (
      (this._milliseconds = t(this._milliseconds)),
      (this._days = t(this._days)),
      (this._months = t(this._months)),
      (n.milliseconds = t(n.milliseconds)),
      (n.seconds = t(n.seconds)),
      (n.minutes = t(n.minutes)),
      (n.hours = t(n.hours)),
      (n.month = t(n.month)),
      (n.year = t(n.year)),
      this
    );
  }
  as(t) {
    if (!this.isValid()) return NaN;
    let n,
      i,
      s = this._milliseconds,
      r = Ma(t);
    if (r === "month" || r === "year")
      return (
        (n = this._days + s / 864e5),
        (i = this._months + Na(n)),
        r === "month" ? i : i / 12
      );
    switch (((n = this._days + Math.round(lr(this._months))), r)) {
      case "week":
        return n / 7 + s / 6048e5;
      case "day":
        return n + s / 864e5;
      case "hours":
        return n * 24 + s / 36e5;
      case "minutes":
        return n * 1440 + s / 6e4;
      case "seconds":
        return n * 86400 + s / 1e3;
      case "milliseconds":
        return Math.floor(n * 864e5) + s;
      default:
        throw new Error(`Unknown unit ${r}`);
    }
  }
  valueOf() {
    return this.isValid()
      ? this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          V(this._months / 12) * 31536e6
      : NaN;
  }
};
function ku(e) {
  return e instanceof Qn;
}
function hr(e) {
  if (e._isValid == null) {
    let t = F(e),
      n = Array.prototype.some.call(t.parsedDateParts, function (s) {
        return s != null;
      }),
      i =
        !isNaN(e._d && e._d.getTime()) &&
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && n));
    if (
      (e._strict &&
        (i =
          i &&
          t.charsLeftOver === 0 &&
          t.unusedTokens.length === 0 &&
          t.bigHour === void 0),
      Object.isFrozen == null || !Object.isFrozen(e))
    )
      e._isValid = i;
    else return i;
  }
  return e._isValid;
}
function Zn(e, t) {
  return (
    (e._d = new Date(NaN)),
    Object.assign(F(e), t || { userInvalidated: !0 }),
    e
  );
}
function Su(e) {
  return ((e._isValid = !1), e);
}
var xu =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Tu =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Eu = /Z|[+-]\d\d(?::?\d\d)?/,
  Nn = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/, !0],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/, !0],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/, !0],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/, !0],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/, !0],
    ["YYYYMMDD", /\d{8}/, !0],
    ["GGGG[W]WWE", /\d{4}W\d{3}/, !0],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/, !0],
  ],
  Bs = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/],
  ],
  Lu = /^\/?Date\((\-?\d+)/i,
  Iu = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
  },
  Vu =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function Ba(e) {
  if (!Oe(e._i)) return e;
  let t = e._i,
    n = xu.exec(t) || Tu.exec(t),
    i,
    s,
    r,
    o;
  if (!n) return ((e._isValid = !1), e);
  let a, m;
  for (a = 0, m = Nn.length; a < m; a++)
    if (Nn[a][1].exec(n[1])) {
      ((s = Nn[a][0]), (i = Nn[a][2] !== !1));
      break;
    }
  if (s == null) return ((e._isValid = !1), e);
  if (n[3]) {
    for (a = 0, m = Bs.length; a < m; a++)
      if (Bs[a][1].exec(n[3])) {
        r = (n[2] || " ") + Bs[a][0];
        break;
      }
    if (r == null) return ((e._isValid = !1), e);
  }
  if (!i && r != null) return ((e._isValid = !1), e);
  if (n[4])
    if (Eu.exec(n[4])) o = "Z";
    else return ((e._isValid = !1), e);
  return ((e._f = s + (r || "") + (o || "")), _r(e));
}
function Ou(e, t, n, i, s, r) {
  let o = [
    Yu(e),
    Ya.indexOf(t),
    parseInt(n, 10),
    parseInt(i, 10),
    parseInt(s, 10),
  ];
  return (r && o.push(parseInt(r, 10)), o);
}
function Yu(e) {
  let t = parseInt(e, 10);
  return t <= 49 ? t + 2e3 : t;
}
function Au(e) {
  return e
    .replace(/\([^)]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}
function Pu(e, t, n) {
  if (e) {
    let i = Aa.indexOf(e),
      s = new Date(t[0], t[1], t[2]).getDay();
    if (i !== s) return ((F(n).weekdayMismatch = !0), (n._isValid = !1), !1);
  }
  return !0;
}
function Fu(e, t, n) {
  if (e) return Iu[e];
  if (t) return 0;
  {
    let i = parseInt(n, 10),
      s = i % 100;
    return ((i - s) / 100) * 60 + s;
  }
}
function Wa(e) {
  if (!Oe(e._i)) return e;
  let t = Vu.exec(Au(e._i));
  if (!t) return Su(e);
  let n = Ou(t[4], t[3], t[2], t[5], t[6], t[7]);
  return (
    Pu(t[1], n, e) &&
      ((e._a = n),
      (e._tzm = Fu(t[8], t[9], t[10])),
      (e._d = cr.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (F(e).rfc2822 = !0)),
    e
  );
}
function Hu(e) {
  if (!Oe(e._i)) return e;
  let t = Lu.exec(e._i);
  if (t !== null) return ((e._d = new Date(+t[1])), e);
  if ((Ba(e), e._isValid === !1)) delete e._isValid;
  else return e;
  if ((Wa(e), e._isValid === !1)) delete e._isValid;
  else return e;
  return Zn(e);
}
function Ye(e, t, n, i, s = 0) {
  let r = _e(n || "en");
  if (!r)
    throw new Error(
      `Locale "${n}" is not defined, please add it with "defineLocale(...)"`,
    );
  let a = Ru(
    e,
    t || (i ? "YYYY-MM-DDTHH:mm:ss[Z]" : "YYYY-MM-DDTHH:mm:ssZ"),
    r,
    i,
    s,
  );
  return a && r.postformat(a);
}
function Ru(e, t, n, i, s = 0) {
  if (!yt(e)) return n.invalidDate;
  let r = $a(t, n);
  return ((Rs[r] = Rs[r] || gc(r)), Rs[r](e, n, i, s));
}
function $a(e, t) {
  let n = e,
    i = 5,
    s = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    r = (o) => t.formatLongDate(o) || o;
  for (s.lastIndex = 0; i >= 0 && s.test(n); )
    ((n = n.replace(s, r)), (s.lastIndex = 0), (i -= 1));
  return n;
}
function Mi(e, t, n) {
  return e ?? t ?? n;
}
function ju(e) {
  let t = new Date();
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function mr(e) {
  let t = [],
    n,
    i,
    s;
  if (e._d) return e;
  let r = ju(e);
  for (
    e._w && e._a[ot] == null && e._a[gt] == null && Nu(e),
      e._dayOfYear != null &&
        ((s = Mi(e._a[et], r[et])),
        (e._dayOfYear > un(s) || e._dayOfYear === 0) &&
          (F(e)._overflowDayOfYear = !0),
        (i = new Date(Date.UTC(s, 0, e._dayOfYear))),
        (e._a[gt] = i.getUTCMonth()),
        (e._a[ot] = i.getUTCDate())),
      n = 0;
    n < 3 && e._a[n] == null;
    ++n
  )
    e._a[n] = t[n] = r[n];
  for (; n < 7; n++)
    e._a[n] = t[n] = e._a[n] == null ? (n === 2 ? 1 : 0) : e._a[n];
  (e._a[ae] === 24 &&
    e._a[tt] === 0 &&
    e._a[vt] === 0 &&
    e._a[ti] === 0 &&
    ((e._nextDay = !0), (e._a[ae] = 0)),
    (e._d = (e._useUTC ? cr : Xn).apply(null, t)));
  let o = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
  return (
    e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
    e._nextDay && (e._a[ae] = 24),
    e._w && typeof e._w.d < "u" && e._w.d !== o && (F(e).weekdayMismatch = !0),
    e
  );
}
function Nu(e) {
  let t,
    n,
    i,
    s,
    r,
    o,
    a,
    m = e._w;
  if (m.GG != null || m.W != null || m.E != null)
    ((s = 1),
      (r = 4),
      (t = Mi(m.GG, e._a[et], xi(new Date(), 1, 4).year)),
      (n = Mi(m.W, 1)),
      (i = Mi(m.E, 1)),
      (i < 1 || i > 7) && (a = !0));
  else {
    ((s = e._locale._week.dow), (r = e._locale._week.doy));
    let p = xi(new Date(), s, r);
    ((t = Mi(m.gg, e._a[et], p.year)),
      (n = Mi(m.w, p.week)),
      m.d != null
        ? ((i = m.d), (i < 0 || i > 6) && (a = !0))
        : m.e != null
          ? ((i = m.e + s), (m.e < 0 || m.e > 6) && (a = !0))
          : (i = s));
  }
  return (
    n < 1 || n > Wn(t, s, r)
      ? (F(e)._overflowWeeks = !0)
      : a != null
        ? (F(e)._overflowWeekday = !0)
        : ((o = Hc(t, n, i, s, r)),
          (e._a[et] = o.year),
          (e._dayOfYear = o.dayOfYear)),
    e
  );
}
function Ua(e) {
  let t,
    n = e._a;
  return (
    n &&
      F(e).overflow === -2 &&
      ((t =
        n[gt] < 0 || n[gt] > 11
          ? gt
          : n[ot] < 1 || n[ot] > ur(n[et], n[gt])
            ? ot
            : n[ae] < 0 ||
                n[ae] > 24 ||
                (n[ae] === 24 && (n[tt] !== 0 || n[vt] !== 0 || n[ti] !== 0))
              ? ae
              : n[tt] < 0 || n[tt] > 59
                ? tt
                : n[vt] < 0 || n[vt] > 59
                  ? vt
                  : n[ti] < 0 || n[ti] > 999
                    ? ti
                    : -1),
      F(e)._overflowDayOfYear && (t < et || t > ot) && (t = ot),
      F(e)._overflowWeeks && t === -1 && (t = pc),
      F(e)._overflowWeekday && t === -1 && (t = fc),
      (F(e).overflow = t)),
    e
  );
}
var Bu = "ISO_8601",
  Wu = "RFC_2822";
function _r(e) {
  if (e._f === Bu) return Ba(e);
  if (e._f === Wu) return Wa(e);
  if (((e._a = []), (F(e).empty = !0), z(e._f) || (!e._i && e._i !== 0)))
    return e;
  let t = e._i.toString(),
    n = 0,
    i = t.length,
    s = $a(e._f, e._locale).match(ka) || [],
    r,
    o,
    a,
    m;
  for (r = 0; r < s.length; r++)
    ((o = s[r]),
      (a = (t.match(Dc(o, e._locale)) || [])[0]),
      a &&
        ((m = t.substr(0, t.indexOf(a))),
        m.length > 0 && F(e).unusedInput.push(m),
        (t = t.slice(t.indexOf(a) + a.length)),
        (n += a.length)),
      Si[o]
        ? (a ? (F(e).empty = !1) : F(e).unusedTokens.push(o), kc(o, a, e))
        : e._strict && !a && F(e).unusedTokens.push(o));
  return (
    (F(e).charsLeftOver = i - n),
    t.length > 0 && F(e).unusedInput.push(t),
    e._a[ae] <= 12 &&
      F(e).bigHour === !0 &&
      e._a[ae] > 0 &&
      (F(e).bigHour = void 0),
    (F(e).parsedDateParts = e._a.slice(0)),
    (F(e).meridiem = e._meridiem),
    (e._a[ae] = $u(e._locale, e._a[ae], e._meridiem)),
    mr(e),
    Ua(e)
  );
}
function $u(e, t, n) {
  let i = t;
  if (n == null) return i;
  if (e.meridiemHour != null) return e.meridiemHour(i, n);
  if (e.isPM == null) return i;
  let s = e.isPM(n);
  return (s && i < 12 && (i += 12), !s && i === 12 && (i = 0), i);
}
function Uu(e) {
  let t, n, i, s;
  if (!e._f || e._f.length === 0) return ((F(e).invalidFormat = !0), Zn(e));
  let r;
  for (r = 0; r < e._f.length; r++)
    ((s = 0),
      (t = Object.assign({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[r]),
      _r(t),
      hr(t) &&
        ((s += F(t).charsLeftOver),
        (s += F(t).unusedTokens.length * 10),
        (F(t).score = s),
        (i == null || s < i) && ((i = s), (n = t))));
  return Object.assign(e, n || t);
}
function zu(e) {
  if (e._d) return e;
  let t = e._i;
  if (ii(t)) {
    let n = _c(t);
    e._a = [
      n.year,
      n.month,
      n.day,
      n.hours,
      n.minutes,
      n.seconds,
      n.milliseconds,
    ].map((i) => (Oe(i) ? parseInt(i, 10) : i));
  }
  return mr(e);
}
function Gu(e) {
  let t = Ua(qu(e));
  return (
    (t._d = new Date(t._d != null ? t._d.getTime() : NaN)),
    hr(Object.assign({}, t, { _isValid: null })) || (t._d = new Date(NaN)),
    t
  );
}
function qu(e) {
  let t = e._i,
    n = e._f;
  return (
    (e._locale = e._locale || _e(e._l)),
    t === null || (n === void 0 && t === "")
      ? Zn(e, { nullInput: !0 })
      : (Oe(t) && (e._i = t = e._locale.preparse(t, n)),
        fn(t)
          ? ((e._d = ni(t)), e)
          : (z(n) ? Uu(e) : n ? _r(e) : Ju(e), hr(e) || (e._d = null), e))
  );
}
function Ju(e) {
  let t = e._i;
  if (Da(t)) e._d = new Date();
  else if (fn(t)) e._d = ni(t);
  else if (Oe(t)) Hu(e);
  else if (z(t) && t.length) {
    let n = t.slice(0);
    ((e._a = n.map((i) => (Oe(i) ? parseInt(i, 10) : i))), mr(e));
  } else if (ii(t)) zu(e);
  else if (Ei(t)) e._d = new Date(t);
  else return Zn(e);
  return e;
}
function Ku(e, t, n, i, s) {
  let r = {},
    o = e;
  return (
    ((ii(o) && mc(o)) || (z(o) && o.length === 0)) && (o = void 0),
    (r._useUTC = r._isUTC = s),
    (r._l = n),
    (r._i = o),
    (r._f = t),
    (r._strict = i),
    Gu(r)
  );
}
function Ti(e, t, n, i, s) {
  return fn(e) ? e : Ku(e, t, n, i, s)._d;
}
function pr(e) {
  return e instanceof Date
    ? new Date(
        e.getUTCFullYear(),
        e.getUTCMonth(),
        e.getUTCDate(),
        e.getUTCHours(),
        e.getUTCMinutes(),
        e.getUTCSeconds(),
        e.getUTCMilliseconds(),
      )
    : null;
}
function dr(e) {
  return e < 0 ? Math.round(e * -1) * -1 : Math.round(e);
}
function Ct(e, t, n = "milliseconds") {
  return !e || !t
    ? !1
    : n === "milliseconds"
      ? e.valueOf() > t.valueOf()
      : t.valueOf() < at(e, n).valueOf();
}
function At(e, t, n = "milliseconds") {
  return !e || !t
    ? !1
    : n === "milliseconds"
      ? e.valueOf() < t.valueOf()
      : gn(e, n).valueOf() < t.valueOf();
}
function za(e, t) {
  return typeof t > "u" || !t || !t.length
    ? !1
    : t.some((n) => n === e.getDay());
}
function vn(e, t, n = "milliseconds") {
  if (!e || !t) return !1;
  if (n === "milliseconds") return e.valueOf() === t.valueOf();
  let i = t.valueOf();
  return at(e, n).valueOf() <= i && i <= gn(e, n).valueOf();
}
var Qu = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
  Xu =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function fr(e, t, n = {}) {
  let i = Zu(e, t);
  return new Qn(i, n);
}
function Zu(e, t) {
  if (e == null) return {};
  if (ku(e))
    return { milliseconds: e._milliseconds, day: e._days, month: e._months };
  if (Ei(e)) return t ? { [t]: e } : { milliseconds: e };
  if (Oe(e)) {
    let n = Qu.exec(e);
    if (n) {
      let i = n[1] === "-" ? -1 : 1;
      return {
        year: 0,
        day: V(n[ot]) * i,
        hours: V(n[ae]) * i,
        minutes: V(n[tt]) * i,
        seconds: V(n[vt]) * i,
        milliseconds: V(dr(V(n[ti]) * 1e3)) * i,
      };
    }
    if (((n = Xu.exec(e)), n)) {
      let i = n[1] === "-" ? -1 : (n[1] === "+", 1);
      return {
        year: qt(n[2], i),
        month: qt(n[3], i),
        week: qt(n[4], i),
        day: qt(n[5], i),
        hours: qt(n[6], i),
        minutes: qt(n[7], i),
        seconds: qt(n[8], i),
      };
    }
  }
  if (ii(e) && ("from" in e || "to" in e)) {
    let n = eh(Ti(e.from), Ti(e.to));
    return { milliseconds: n.milliseconds, month: n.months };
  }
  return e;
}
function qt(e, t) {
  let n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function ea(e, t) {
  let n = { milliseconds: 0, months: 0 };
  n.months = Y(t) - Y(e) + (ne(t) - ne(e)) * 12;
  let i = pn(ni(e), n.months, "month");
  return (
    Ct(i, t) && --n.months,
    (n.milliseconds = +t - +pn(ni(e), n.months, "month")),
    n
  );
}
function eh(e, t) {
  if (!(yt(e) && yt(t))) return { milliseconds: 0, months: 0 };
  let n,
    i = cu(t, e, { _offset: e.getTimezoneOffset() });
  return (
    At(e, i)
      ? (n = ea(e, i))
      : ((n = ea(i, e)),
        (n.milliseconds = -n.milliseconds),
        (n.months = -n.months)),
    n
  );
}
function pn(e, t, n, i) {
  let s = fr(t, n);
  return Ga(e, s, 1, i);
}
function th(e, t, n, i) {
  let s = fr(t, n);
  return Ga(e, s, -1, i);
}
function Ga(e, t, n, i) {
  let s = t._milliseconds,
    r = dr(t._days),
    o = dr(t._months);
  return (
    o && or(e, Y(e, i) + o * n, i),
    r && Va(e, mn(e, i) + r * n, i),
    s && Pc(e, yc(e) + s * n),
    ni(e)
  );
}
function ih() {
  (T("d", null, "do", function (e, t) {
    return it(e, t.isUTC).toString(10);
  }),
    T("dd", null, null, function (e, t) {
      return t.locale.weekdaysMin(e, t.format, t.isUTC);
    }),
    T("ddd", null, null, function (e, t) {
      return t.locale.weekdaysShort(e, t.format, t.isUTC);
    }),
    T("dddd", null, null, function (e, t) {
      return t.locale.weekdays(e, t.format, t.isUTC);
    }),
    T("e", null, null, function (e, t) {
      return qa(e, t.locale, t.isUTC).toString(10);
    }),
    T("E", null, null, function (e, t) {
      return oh(e, t.isUTC).toString(10);
    }),
    be("day", "d"),
    be("weekday", "e"),
    be("isoWeekday", "E"),
    Ce("day", 11),
    Ce("weekday", 11),
    Ce("isoWeekday", 11),
    S("d", q),
    S("e", q),
    S("E", q),
    S("dd", function (e, t) {
      return t.weekdaysMinRegex(e);
    }),
    S("ddd", function (e, t) {
      return t.weekdaysShortRegex(e);
    }),
    S("dddd", function (e, t) {
      return t.weekdaysRegex(e);
    }),
    _n(["dd", "ddd", "dddd"], function (e, t, n, i) {
      let s = n._locale.weekdaysParse(e, i, n._strict);
      return (s != null ? (t.d = s) : (F(n).invalidWeekday = !!e), n);
    }),
    _n(["d", "e", "E"], function (e, t, n, i) {
      return ((t[i] = V(e)), n);
    }));
}
function nh(e, t) {
  if (!Oe(e)) return e;
  let n = parseInt(e, 10);
  if (!isNaN(n)) return n;
  let i = t.weekdaysParse(e);
  return Ei(i) ? i : null;
}
function sh(e, t = _e()) {
  return Oe(e) ? t.weekdaysParse(e) % 7 || 7 : Ei(e) && isNaN(e) ? null : e;
}
function $n(e, t, n = _e(), i) {
  let s = it(e, i),
    r = nh(t, n);
  return pn(e, r - s, "day");
}
function le(e, t) {
  return it(e, t);
}
function qa(e, t = _e(), n) {
  return (it(e, n) + 7 - t.firstDayOfWeek()) % 7;
}
function rh(e, t, n = {}) {
  let i = qa(e, n.locale, n.isUTC);
  return pn(e, t - i, "day");
}
function oh(e, t) {
  return it(e, t) || 7;
}
function ah(e, t, n = {}) {
  let i = sh(t, n.locale);
  return $n(e, le(e) % 7 ? i : i - 7);
}
var lh = {
    1: "\u0661",
    2: "\u0662",
    3: "\u0663",
    4: "\u0664",
    5: "\u0665",
    6: "\u0666",
    7: "\u0667",
    8: "\u0668",
    9: "\u0669",
    0: "\u0660",
  },
  dh = {
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u0660": "0",
  },
  ta = function (e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : e === 2
          ? 2
          : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
              ? 4
              : 5;
  },
  ch = {
    s: [
      "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629",
      "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",
      [
        "\u062B\u0627\u0646\u064A\u062A\u0627\u0646",
        "\u062B\u0627\u0646\u064A\u062A\u064A\u0646",
      ],
      "%d \u062B\u0648\u0627\u0646",
      "%d \u062B\u0627\u0646\u064A\u0629",
      "%d \u062B\u0627\u0646\u064A\u0629",
    ],
    m: [
      "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629",
      "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",
      [
        "\u062F\u0642\u064A\u0642\u062A\u0627\u0646",
        "\u062F\u0642\u064A\u0642\u062A\u064A\u0646",
      ],
      "%d \u062F\u0642\u0627\u0626\u0642",
      "%d \u062F\u0642\u064A\u0642\u0629",
      "%d \u062F\u0642\u064A\u0642\u0629",
    ],
    h: [
      "\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629",
      "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",
      [
        "\u0633\u0627\u0639\u062A\u0627\u0646",
        "\u0633\u0627\u0639\u062A\u064A\u0646",
      ],
      "%d \u0633\u0627\u0639\u0627\u062A",
      "%d \u0633\u0627\u0639\u0629",
      "%d \u0633\u0627\u0639\u0629",
    ],
    d: [
      "\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645",
      "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F",
      ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"],
      "%d \u0623\u064A\u0627\u0645",
      "%d \u064A\u0648\u0645\u064B\u0627",
      "%d \u064A\u0648\u0645",
    ],
    M: [
      "\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631",
      "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F",
      ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"],
      "%d \u0623\u0634\u0647\u0631",
      "%d \u0634\u0647\u0631\u0627",
      "%d \u0634\u0647\u0631",
    ],
    y: [
      "\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645",
      "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F",
      ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"],
      "%d \u0623\u0639\u0648\u0627\u0645",
      "%d \u0639\u0627\u0645\u064B\u0627",
      "%d \u0639\u0627\u0645",
    ],
  },
  He = function (e) {
    return function (t, n) {
      let i = ta(t),
        s = ch[e][ta(t)];
      return (i === 2 && (s = s[n ? 0 : 1]), s.replace(/%d/i, t.toString()));
    };
  },
  ia = [
    "\u064A\u0646\u0627\u064A\u0631",
    "\u0641\u0628\u0631\u0627\u064A\u0631",
    "\u0645\u0627\u0631\u0633",
    "\u0623\u0628\u0631\u064A\u0644",
    "\u0645\u0627\u064A\u0648",
    "\u064A\u0648\u0646\u064A\u0648",
    "\u064A\u0648\u0644\u064A\u0648",
    "\u0623\u063A\u0633\u0637\u0633",
    "\u0633\u0628\u062A\u0645\u0628\u0631",
    "\u0623\u0643\u062A\u0648\u0628\u0631",
    "\u0646\u0648\u0641\u0645\u0628\u0631",
    "\u062F\u064A\u0633\u0645\u0628\u0631",
  ],
  Cv = {
    abbr: "ar",
    months: ia,
    monthsShort: ia,
    weekdays:
      "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split(
        "_",
      ),
    weekdaysShort:
      "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split(
        "_",
      ),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/\u200FM/\u200FYYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    meridiemParse: /ص|م/,
    isPM(e) {
      return e === "\u0645";
    },
    meridiem(e, t, n) {
      return e < 12 ? "\u0635" : "\u0645";
    },
    calendar: {
      sameDay:
        "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay:
        "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek:
        "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay:
        "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek:
        "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "\u0628\u0639\u062F %s",
      past: "\u0645\u0646\u0630 %s",
      s: He("s"),
      ss: He("s"),
      m: He("m"),
      mm: He("m"),
      h: He("h"),
      hh: He("h"),
      d: He("d"),
      dd: He("d"),
      M: He("M"),
      MM: He("M"),
      y: He("y"),
      yy: He("y"),
    },
    preparse(e) {
      return e
        .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (t) {
          return dh[t];
        })
        .replace(/،/g, ",");
    },
    postformat(e) {
      return e
        .replace(/\d/g, function (t) {
          return lh[t];
        })
        .replace(/,/g, "\u060C");
    },
    week: { dow: 6, doy: 12 },
  };
var wv = {
  abbr: "bg",
  months:
    "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split(
      "_",
    ),
  monthsShort:
    "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split(
      "_",
    ),
  weekdays:
    "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split(
      "_",
    ),
  weekdaysShort:
    "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split(
      "_",
    ),
  weekdaysMin:
    "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
      "_",
    ),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "D.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm",
  },
  calendar: {
    sameDay: "[\u0414\u043D\u0435\u0441 \u0432] LT",
    nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
    nextWeek: "dddd [\u0432] LT",
    lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
    lastWeek: function (e) {
      switch (e) {
        case 0:
        case 3:
        case 6:
          return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "\u0441\u043B\u0435\u0434 %s",
    past: "\u043F\u0440\u0435\u0434\u0438 %s",
    s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    m: "\u043C\u0438\u043D\u0443\u0442\u0430",
    mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438",
    h: "\u0447\u0430\u0441",
    hh: "%d \u0447\u0430\u0441\u0430",
    d: "\u0434\u0435\u043D",
    dd: "%d \u0434\u043D\u0438",
    M: "\u043C\u0435\u0441\u0435\u0446",
    MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430",
    y: "\u0433\u043E\u0434\u0438\u043D\u0430",
    yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438",
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
  ordinal: function (e) {
    let t = Number(e),
      n = t % 10,
      i = t % 100;
    return t === 0
      ? t + "-\u0435\u0432"
      : i === 0
        ? t + "-\u0435\u043D"
        : i > 10 && i < 20
          ? t + "-\u0442\u0438"
          : n === 1
            ? t + "-\u0432\u0438"
            : n === 2
              ? t + "-\u0440\u0438"
              : n === 7 || n === 8
                ? t + "-\u043C\u0438"
                : t + "-\u0442\u0438";
  },
  week: { dow: 1, doy: 7 },
};
var na = "gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.".split(
    "_",
  ),
  uh = "ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des".split("_"),
  Ws = [
    /^gen/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^set/i,
    /^oct/i,
    /^nov/i,
    /^des/i,
  ],
  sa =
    /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
  Dv = {
    abbr: "ca",
    months:
      "gener_febrer_mar\xE7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? uh[Y(e, n)] : na[Y(e, n)]) : na;
    },
    monthsRegex: sa,
    monthsShortRegex: sa,
    monthsStrictRegex:
      /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex:
      /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse: Ws,
    longMonthsParse: Ws,
    shortMonthsParse: Ws,
    weekdays:
      "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
    weekdaysShort: "diu._dil._dim._dix._dij._div._dis.".split("_"),
    weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
    },
    calendar: {
      sameDay(e) {
        return "[avui a " + ("la" + (O(e) !== 1) ? "les" : "") + "] LT";
      },
      nextDay(e) {
        return "[dema a " + ("la" + (O(e) !== 1) ? "les" : "") + "] LT";
      },
      nextWeek(e) {
        return "dddd [a " + ("la" + (O(e) !== 1) ? "les" : "") + "] LT";
      },
      lastDay(e) {
        return "[ahir a " + ("la" + (O(e) !== 1) ? "les" : "") + "] LT";
      },
      lastWeek(e) {
        return (
          "[el] dddd [" +
          ("passada la " + (O(e) !== 1) ? "passades les" : "") +
          "] LT"
        );
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "fa %s",
      s: "uns segons",
      ss: "%d segons",
      m: "un minut",
      mm: "%d minuts",
      h: "una hora",
      hh: "%d hores",
      d: "un dia",
      dd: "%d dies",
      M: "un mes",
      MM: "%d mesos",
      y: "un any",
      yy: "%d anys",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    ordinal(e) {
      let t = Number(e),
        n =
          t > 4
            ? "\xE9"
            : t === 1 || t === 3
              ? "r"
              : t === 2
                ? "n"
                : t === 4
                  ? "t"
                  : "\xE9";
      return t + n;
    },
    week: { dow: 1, doy: 4 },
  };
var $s =
    "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split(
      "_",
    ),
  Us =
    "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split(
      "_",
    );
function vi(e) {
  return e > 1 && e < 5 && ~~(e / 10) !== 1;
}
function Re(e, t, n, i) {
  let s = e + " ";
  switch (n) {
    case "s":
      return t || i ? "p\xE1r sekund" : "p\xE1r sekundami";
    case "ss":
      return t || i ? s + (vi(e) ? "sekundy" : "sekund") : s + "sekundami";
    case "m":
      return t ? "minuta" : i ? "minutu" : "minutou";
    case "mm":
      return t || i ? s + (vi(e) ? "minuty" : "minut") : s + "minutami";
    case "h":
      return t ? "hodina" : i ? "hodinu" : "hodinou";
    case "hh":
      return t || i ? s + (vi(e) ? "hodiny" : "hodin") : s + "hodinami";
    case "d":
      return t || i ? "den" : "dnem";
    case "dd":
      return t || i ? s + (vi(e) ? "dny" : "dn\xED") : s + "dny";
    case "M":
      return t || i ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";
    case "MM":
      return t || i
        ? s + (vi(e) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F")
        : s + "m\u011Bs\xEDci";
    case "y":
      return t || i ? "rok" : "rokem";
    case "yy":
      return t || i ? s + (vi(e) ? "roky" : "let") : s + "lety";
  }
}
var Mv = {
  abbr: "cs",
  months: $s,
  monthsShort: Us,
  monthsParse: (function (e, t) {
    let n,
      i = [];
    for (n = 0; n < 12; n++)
      i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
    return i;
  })($s, Us),
  shortMonthsParse: (function (e) {
    let t,
      n = [];
    for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
    return n;
  })(Us),
  longMonthsParse: (function (e) {
    let t,
      n = [];
    for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
    return n;
  })($s),
  weekdays:
    "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split(
      "_",
    ),
  weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
  weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY",
  },
  calendar: {
    sameDay: "[dnes v] LT",
    nextDay: "[z\xEDtra v] LT",
    nextWeek(e) {
      switch (le(e)) {
        case 0:
          return "[v ned\u011Bli v] LT";
        case 1:
        case 2:
          return "[v] dddd [v] LT";
        case 3:
          return "[ve st\u0159edu v] LT";
        case 4:
          return "[ve \u010Dtvrtek v] LT";
        case 5:
          return "[v p\xE1tek v] LT";
        case 6:
          return "[v sobotu v] LT";
      }
    },
    lastDay: "[v\u010Dera v] LT",
    lastWeek(e) {
      switch (le(e)) {
        case 0:
          return "[minulou ned\u011Bli v] LT";
        case 1:
        case 2:
          return "[minul\xE9] dddd [v] LT";
        case 3:
          return "[minulou st\u0159edu v] LT";
        case 4:
        case 5:
          return "[minul\xFD] dddd [v] LT";
        case 6:
          return "[minulou sobotu v] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "za %s",
    past: "p\u0159ed %s",
    s: Re,
    ss: Re,
    m: Re,
    mm: Re,
    h: Re,
    hh: Re,
    d: Re,
    dd: Re,
    M: Re,
    MM: Re,
    y: Re,
    yy: Re,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var kv = {
  abbr: "da",
  months:
    "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split(
      "_",
    ),
  monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
  weekdays: "S\xF8ndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_L\xF8rdag".split(
    "_",
  ),
  weekdaysShort: "S\xF8n_Man_Tir_Ons_Tor_Fre_L\xF8r".split("_"),
  weekdaysMin: "S\xF8_Ma_Ti_On_To_Fr_L\xF8".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "p\xE5 dddd [kl.] LT",
    lastDay: "[i g\xE5r kl.] LT",
    lastWeek: "[i] dddd[s kl.] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "f\xE5 sekunder",
    m: "et minut",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dage",
    M: "en m\xE5ned",
    MM: "%d m\xE5neder",
    y: "et \xE5r",
    yy: "%d \xE5r",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
function Vt(e, t, n, i) {
  let s = {
    m: ["eine Minute", "einer Minute"],
    h: ["eine Stunde", "einer Stunde"],
    d: ["ein Tag", "einem Tag"],
    dd: [e + " Tage", e + " Tagen"],
    M: ["ein Monat", "einem Monat"],
    MM: [e + " Monate", e + " Monaten"],
    y: ["ein Jahr", "einem Jahr"],
    yy: [e + " Jahre", e + " Jahren"],
  };
  return t ? s[n][0] : s[n][1];
}
var Sv = {
  abbr: "de",
  months:
    "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
      "_",
    ),
  monthsShort:
    "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
  monthsParseExact: !0,
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
    "_",
  ),
  weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd, D. MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[heute um] LT [Uhr]",
    sameElse: "L",
    nextDay: "[morgen um] LT [Uhr]",
    nextWeek: "dddd [um] LT [Uhr]",
    lastDay: "[gestern um] LT [Uhr]",
    lastWeek: "[letzten] dddd [um] LT [Uhr]",
  },
  relativeTime: {
    future: "in %s",
    past: "vor %s",
    s: "ein paar Sekunden",
    ss: "%d Sekunden",
    m: Vt,
    mm: "%d Minuten",
    h: Vt,
    hh: "%d Stunden",
    d: Vt,
    dd: Vt,
    M: Vt,
    MM: Vt,
    y: Vt,
    yy: Vt,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var xv = {
  abbr: "en-gb",
  months:
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_",
    ),
  monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
    "_",
  ),
  weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(e) {
    let t = Number(e),
      n = t % 10,
      i =
        ~~((t % 100) / 10) === 1
          ? "th"
          : n === 1
            ? "st"
            : n === 2
              ? "nd"
              : n === 3
                ? "rd"
                : "th";
    return t + i;
  },
  week: { dow: 1, doy: 4 },
};
var ra = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
    "_",
  ),
  hh = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
  zs = [
    /^ene/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i,
  ],
  oa =
    /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  Tv = {
    abbr: "es-do",
    months:
      "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? hh[Y(e, n)] : ra[Y(e, n)]) : ra;
    },
    monthsRegex: oa,
    monthsShortRegex: oa,
    monthsStrictRegex:
      /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex:
      /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: zs,
    longMonthsParse: zs,
    shortMonthsParse: zs,
    weekdays:
      "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY h:mm A",
      LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
    },
    calendar: {
      sameDay(e) {
        return "[hoy a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextDay(e) {
        return "[ma\xF1ana a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextWeek(e) {
        return "dddd [a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastDay(e) {
        return "[ayer a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastWeek(e) {
        return "[el] dddd [pasado a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xEDa",
      dd: "%d d\xEDas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xF1o",
      yy: "%d a\xF1os",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xBA",
    week: { dow: 1, doy: 4 },
  };
var aa = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
    "_",
  ),
  mh = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
  Gs = [
    /^ene/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i,
  ],
  la =
    /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  Ev = {
    abbr: "es",
    months:
      "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? mh[Y(e, n)] : aa[Y(e, n)]) : aa;
    },
    monthsRegex: la,
    monthsShortRegex: la,
    monthsStrictRegex:
      /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex:
      /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: Gs,
    longMonthsParse: Gs,
    shortMonthsParse: Gs,
    weekdays:
      "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
    },
    calendar: {
      sameDay(e) {
        return "[hoy a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextDay(e) {
        return "[ma\xF1ana a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextWeek(e) {
        return "dddd [a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastDay(e) {
        return "[ayer a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastWeek(e) {
        return "[el] dddd [pasado a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xEDa",
      dd: "%d d\xEDas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xF1o",
      yy: "%d a\xF1os",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xBA",
    week: { dow: 1, doy: 4 },
  };
var da = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
    "_",
  ),
  _h = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
  Lv = {
    abbr: "es-pr",
    months:
      "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? _h[Y(e, n)] : da[Y(e, n)]) : da;
    },
    monthsParseExact: !0,
    weekdays:
      "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "MM/DD/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY h:mm A",
      LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
    },
    calendar: {
      sameDay(e) {
        return "[hoy a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextDay(e) {
        return "[ma\xF1ana a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextWeek(e) {
        return "dddd [a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastDay(e) {
        return "[ayer a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastWeek(e) {
        return "[el] dddd [pasado a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xEDa",
      dd: "%d d\xEDas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xF1o",
      yy: "%d a\xF1os",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xBA",
    week: { dow: 0, doy: 6 },
  };
var ca = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
    "_",
  ),
  ph = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
  Iv = {
    abbr: "es-us",
    months:
      "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? ph[Y(e, n)] : ca[Y(e, n)]) : ca;
    },
    monthsParseExact: !0,
    weekdays:
      "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "MM/DD/YYYY",
      LL: "MMMM [de] D [de] YYYY",
      LLL: "MMMM [de] D [de] YYYY h:mm A",
      LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A",
    },
    calendar: {
      sameDay(e) {
        return "[hoy a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextDay(e) {
        return "[ma\xF1ana a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextWeek(e) {
        return "dddd [a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastDay(e) {
        return "[ayer a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastWeek(e) {
        return "[el] dddd [pasado a la" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xEDa",
      dd: "%d d\xEDas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xF1o",
      yy: "%d a\xF1os",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xBA",
    week: { dow: 0, doy: 6 },
  };
var Ze = function (e, t, n, i) {
    let s = {
      s: ["m\xF5ne sekundi", "m\xF5ni sekund", "paar sekundit"],
      ss: [e + "sekundi", e + "sekundit"],
      m: ["\xFChe minuti", "\xFCks minut"],
      mm: [e + " minuti", e + " minutit"],
      h: ["\xFChe tunni", "tund aega", "\xFCks tund"],
      hh: [e + " tunni", e + " tundi"],
      d: ["\xFChe p\xE4eva", "\xFCks p\xE4ev"],
      M: ["kuu aja", "kuu aega", "\xFCks kuu"],
      MM: [e + " kuu", e + " kuud"],
      y: ["\xFChe aasta", "aasta", "\xFCks aasta"],
      yy: [e + " aasta", e + " aastat"],
    };
    return t ? (s[n][2] ? s[n][2] : s[n][1]) : i ? s[n][0] : s[n][1];
  },
  Vv = {
    abbr: "et",
    months:
      "jaanuar_veebruar_m\xE4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
        "_",
      ),
    monthsShort:
      "jaan_veebr_m\xE4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
        "_",
      ),
    weekdays:
      "p\xFChap\xE4ev_esmasp\xE4ev_teisip\xE4ev_kolmap\xE4ev_neljap\xE4ev_reede_laup\xE4ev".split(
        "_",
      ),
    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm",
    },
    calendar: {
      sameDay: "[T\xE4na,] LT",
      nextDay: "[Homme,] LT",
      nextWeek: "[J\xE4rgmine] dddd LT",
      lastDay: "[Eile,] LT",
      lastWeek: "[Eelmine] dddd LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "%s p\xE4rast",
      past: "%s tagasi",
      s: Ze,
      ss: Ze,
      m: Ze,
      mm: Ze,
      h: Ze,
      hh: Ze,
      d: Ze,
      dd: "%d p\xE4eva",
      M: Ze,
      MM: Ze,
      y: Ze,
      yy: Ze,
    },
    dayOfMonthOrdinalParse: /\d{1,2}./,
    ordinal: "%d.",
    week: { dow: 1, doy: 4 },
  };
var Un =
    "nolla yksi kaksi kolme nelj\xE4 viisi kuusi seitsem\xE4n kahdeksan yhdeks\xE4n".split(
      " ",
    ),
  fh = [
    "nolla",
    "yhden",
    "kahden",
    "kolmen",
    "nelj\xE4n",
    "viiden",
    "kuuden",
    Un[7],
    Un[8],
    Un[9],
  ];
function je(e, t, n, i) {
  var s = "";
  switch (n) {
    case "s":
      return i ? "muutaman sekunnin" : "muutama sekunti";
    case "ss":
      return i ? "sekunnin" : "sekuntia";
    case "m":
      return i ? "minuutin" : "minuutti";
    case "mm":
      s = i ? "minuutin" : "minuuttia";
      break;
    case "h":
      return i ? "tunnin" : "tunti";
    case "hh":
      s = i ? "tunnin" : "tuntia";
      break;
    case "d":
      return i ? "p\xE4iv\xE4n" : "p\xE4iv\xE4";
    case "dd":
      s = i ? "p\xE4iv\xE4n" : "p\xE4iv\xE4\xE4";
      break;
    case "M":
      return i ? "kuukauden" : "kuukausi";
    case "MM":
      s = i ? "kuukauden" : "kuukautta";
      break;
    case "y":
      return i ? "vuoden" : "vuosi";
    case "yy":
      s = i ? "vuoden" : "vuotta";
      break;
  }
  return ((s = gh(e, i) + " " + s), s);
}
function gh(e, t) {
  return e < 10 ? (t ? fh[e] : Un[e]) : e;
}
var Ov = {
  abbr: "fi",
  months:
    "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xE4kuu_hein\xE4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
      "_",
    ),
  monthsShort:
    "tammi_helmi_maalis_huhti_touko_kes\xE4_hein\xE4_elo_syys_loka_marras_joulu".split(
      "_",
    ),
  weekdays:
    "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
      "_",
    ),
  weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
  weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
  longDateFormat: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD.MM.YYYY",
    LL: "Do MMMM[ta] YYYY",
    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
    l: "D.M.YYYY",
    ll: "Do MMM YYYY",
    lll: "Do MMM YYYY, [klo] HH.mm",
    llll: "ddd, Do MMM YYYY, [klo] HH.mm",
  },
  calendar: {
    sameDay: "[t\xE4n\xE4\xE4n] [klo] LT",
    nextDay: "[huomenna] [klo] LT",
    nextWeek: "dddd [klo] LT",
    lastDay: "[eilen] [klo] LT",
    lastWeek: "[viime] dddd[na] [klo] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "%s p\xE4\xE4st\xE4",
    past: "%s sitten",
    s: je,
    ss: je,
    m: je,
    mm: je,
    h: je,
    hh: je,
    d: je,
    dd: je,
    M: je,
    MM: je,
    y: je,
    yy: je,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var Yv = {
  abbr: "fr",
  months:
    "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split(
      "_",
    ),
  monthsShort:
    "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split(
      "_",
    ),
  monthsParseExact: !0,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Aujourd\u2019hui \xE0] LT",
    nextDay: "[Demain \xE0] LT",
    nextWeek: "dddd [\xE0] LT",
    lastDay: "[Hier \xE0] LT",
    lastWeek: "dddd [dernier \xE0] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    ss: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
  ordinal(e, t) {
    let n = Number(e);
    switch (t) {
      case "D":
        return n + (n === 1 ? "er" : "");
      default:
      case "M":
      case "Q":
      case "DDD":
      case "d":
        return n + (n === 1 ? "er" : "e");
      case "w":
      case "W":
        return n + (n === 1 ? "re" : "e");
    }
  },
  week: { dow: 1, doy: 4 },
};
var Av = {
  abbr: "fr-ca",
  months:
    "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split(
      "_",
    ),
  monthsShort:
    "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split(
      "_",
    ),
  monthsParseExact: !0,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Aujourd\u2019hui \xE0] LT",
    nextDay: "[Demain \xE0] LT",
    nextWeek: "dddd [\xE0] LT",
    lastDay: "[Hier \xE0] LT",
    lastWeek: "dddd [dernier \xE0] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    ss: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e|)/,
  ordinal(e, t) {
    let n = Number(e);
    switch (t) {
      case "D":
        return n + (n === 1 ? "er" : "");
      default:
      case "M":
      case "Q":
      case "DDD":
      case "d":
        return n + (n === 1 ? "er" : "e");
      case "w":
      case "W":
        return n + (n === 1 ? "re" : "e");
    }
  },
  week: { dow: 1, doy: 4 },
};
var ua = "xan._feb._mar._abr._mai._xu\xF1._xul._ago._set._out._nov._dec.".split(
    "_",
  ),
  vh = "xan_feb_mar_abr_mai_xu\xF1_xul_ago_set_out_nov_dec".split("_"),
  qs = [
    /^xan/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^mai/i,
    /^xuñ/i,
    /^xul/i,
    /^ago/i,
    /^set/i,
    /^out/i,
    /^nov/i,
    /^dec/i,
  ],
  ha =
    /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
  Pv = {
    abbr: "gl",
    months:
      "xaneiro_febreiro_marzo_abril_maio_xu\xF1o_xullo_agosto_setembro_outubro_novembro_decembro".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? vh[Y(e, n)] : ua[Y(e, n)]) : ua;
    },
    monthsRegex: ha,
    monthsShortRegex: ha,
    monthsStrictRegex:
      /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex:
      /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse: qs,
    longMonthsParse: qs,
    shortMonthsParse: qs,
    weekdays: "domingo_luns_martes_m\xE9rcores_xoves_venres_s\xE1bado".split(
      "_",
    ),
    weekdaysShort: "dom._lun._mar._m\xE9r._xov._ven._s\xE1b.".split("_"),
    weekdaysMin: "do_lu_ma_m\xE9_xo_ve_s\xE1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
    },
    calendar: {
      sameDay(e) {
        return "[hoxe \xE1" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextDay(e) {
        return "[ma\xF1an \xE1" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      nextWeek(e) {
        return "dddd [\xE1" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastDay(e) {
        return "[onte \xE1" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      lastWeek(e) {
        return "[o] dddd [pasado \xE1" + (O(e) !== 1 ? "s" : "") + "] LT";
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "fai %s",
      s: "uns segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "unha hora",
      hh: "%d horas",
      d: "un d\xEDa",
      dd: "%d d\xEDas",
      M: "un mes",
      MM: "%d meses",
      y: "un ano",
      yy: "%d anos",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xBA",
    week: { dow: 1, doy: 4 },
  };
var Fv = {
  abbr: "he",
  months:
    "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split(
      "_",
    ),
  monthsShort:
    "\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split(
      "_",
    ),
  weekdays:
    "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split(
      "_",
    ),
  weekdaysShort:
    "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split(
      "_",
    ),
  weekdaysMin: "\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [\u05D1]MMMM YYYY",
    LLL: "D [\u05D1]MMMM YYYY HH:mm",
    LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
    l: "D/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT",
    nextDay: "[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT",
    nextWeek: "dddd [\u05D1\u05E9\u05E2\u05D4] LT",
    lastDay: "[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT",
    lastWeek:
      "[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "\u05D1\u05E2\u05D5\u05D3 %s",
    past: "\u05DC\u05E4\u05E0\u05D9 %s",
    s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",
    ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA",
    m: "\u05D3\u05E7\u05D4",
    mm: "%d \u05D3\u05E7\u05D5\u05EA",
    h: "\u05E9\u05E2\u05D4",
    hh(e) {
      return e === 2
        ? "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD"
        : e + " \u05E9\u05E2\u05D5\u05EA";
    },
    d: "\u05D9\u05D5\u05DD",
    dd(e) {
      return e === 2
        ? "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD"
        : e + " \u05D9\u05DE\u05D9\u05DD";
    },
    M: "\u05D7\u05D5\u05D3\u05E9",
    MM(e) {
      return e === 2
        ? "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD"
        : e + " \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD";
    },
    y: "\u05E9\u05E0\u05D4",
    yy(e) {
      return e === 2
        ? "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"
        : e % 10 === 0 && e !== 10
          ? e + " \u05E9\u05E0\u05D4"
          : e + " \u05E9\u05E0\u05D9\u05DD";
    },
  },
  meridiemParse:
    /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
  isPM(e) {
    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
  },
  meridiem(e, t, n) {
    return e < 5
      ? "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"
      : e < 10
        ? "\u05D1\u05D1\u05D5\u05E7\u05E8"
        : e < 12
          ? n
            ? '\u05DC\u05E4\u05E0\u05D4"\u05E6'
            : "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD"
          : e < 18
            ? n
              ? '\u05D0\u05D7\u05D4"\u05E6'
              : "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD"
            : "\u05D1\u05E2\u05E8\u05D1";
  },
};
var yh = {
    1: "\u0967",
    2: "\u0968",
    3: "\u0969",
    4: "\u096A",
    5: "\u096B",
    6: "\u096C",
    7: "\u096D",
    8: "\u096E",
    9: "\u096F",
    0: "\u0966",
  },
  bh = {
    "\u0967": "1",
    "\u0968": "2",
    "\u0969": "3",
    "\u096A": "4",
    "\u096B": "5",
    "\u096C": "6",
    "\u096D": "7",
    "\u096E": "8",
    "\u096F": "9",
    "\u0966": "0",
  },
  Hv = {
    abbr: "hi",
    months:
      "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split(
        "_",
      ),
    monthsShort:
      "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split(
        "_",
      ),
    monthsParseExact: !0,
    weekdays:
      "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split(
        "_",
      ),
    weekdaysShort:
      "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split(
        "_",
      ),
    weekdaysMin:
      "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split(
        "_",
      ),
    longDateFormat: {
      LT: "A h:mm \u092C\u091C\u0947",
      LTS: "A h:mm:ss \u092C\u091C\u0947",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947",
      LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947",
    },
    calendar: {
      sameDay: "[\u0906\u091C] LT",
      nextDay: "[\u0915\u0932] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0915\u0932] LT",
      lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "%s \u092E\u0947\u0902",
      past: "%s \u092A\u0939\u0932\u0947",
      s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923",
      ss: "%d \u0938\u0947\u0915\u0902\u0921",
      m: "\u090F\u0915 \u092E\u093F\u0928\u091F",
      mm: "%d \u092E\u093F\u0928\u091F",
      h: "\u090F\u0915 \u0918\u0902\u091F\u093E",
      hh: "%d \u0918\u0902\u091F\u0947",
      d: "\u090F\u0915 \u0926\u093F\u0928",
      dd: "%d \u0926\u093F\u0928",
      M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947",
      MM: "%d \u092E\u0939\u0940\u0928\u0947",
      y: "\u090F\u0915 \u0935\u0930\u094D\u0937",
      yy: "%d \u0935\u0930\u094D\u0937",
    },
    preparse(e) {
      return e.replace(/[१२३४५६७८९०]/g, function (t) {
        return bh[t];
      });
    },
    postformat(e) {
      return e.replace(/\d/g, function (t) {
        return yh[t];
      });
    },
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour(e, t) {
      if ((e === 12 && (e = 0), t === "\u0930\u093E\u0924"))
        return e < 4 ? e : e + 12;
      if (t === "\u0938\u0941\u092C\u0939") return e;
      if (t === "\u0926\u094B\u092A\u0939\u0930") return e >= 10 ? e : e + 12;
      if (t === "\u0936\u093E\u092E") return e + 12;
    },
    meridiem(e, t, n) {
      return e < 4
        ? "\u0930\u093E\u0924"
        : e < 10
          ? "\u0938\u0941\u092C\u0939"
          : e < 17
            ? "\u0926\u094B\u092A\u0939\u0930"
            : e < 20
              ? "\u0936\u093E\u092E"
              : "\u0930\u093E\u0924";
    },
    week: { dow: 0, doy: 6 },
  };
var Ch =
  "vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(
    " ",
  );
function Ne(e, t, n, i) {
  switch (n) {
    case "s":
      return i || t
        ? "n\xE9h\xE1ny m\xE1sodperc"
        : "n\xE9h\xE1ny m\xE1sodperce";
    case "ss":
      return e + (i || t ? " m\xE1sodperc" : " m\xE1sodperce");
    case "m":
      return "egy" + (i || t ? " perc" : " perce");
    case "mm":
      return e + (i || t ? " perc" : " perce");
    case "h":
      return "egy" + (i || t ? " \xF3ra" : " \xF3r\xE1ja");
    case "hh":
      return e + (i || t ? " \xF3ra" : " \xF3r\xE1ja");
    case "d":
      return "egy" + (i || t ? " nap" : " napja");
    case "dd":
      return e + (i || t ? " nap" : " napja");
    case "M":
      return "egy" + (i || t ? " h\xF3nap" : " h\xF3napja");
    case "MM":
      return e + (i || t ? " h\xF3nap" : " h\xF3napja");
    case "y":
      return "egy" + (i || t ? " \xE9v" : " \xE9ve");
    case "yy":
      return e + (i || t ? " \xE9v" : " \xE9ve");
  }
  return "";
}
function ma(e, t) {
  return (t ? "" : "[m\xFAlt] ") + "[" + Ch[le(e)] + "] LT[-kor]";
}
var Rv = {
  abbr: "hu",
  months:
    "janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split(
      "_",
    ),
  monthsShort:
    "jan_feb_m\xE1rc_\xE1pr_m\xE1j_j\xFAn_j\xFAl_aug_szept_okt_nov_dec".split(
      "_",
    ),
  weekdays:
    "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split(
      "_",
    ),
  weekdaysShort: "vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"),
  weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "YYYY.MM.DD.",
    LL: "YYYY. MMMM D.",
    LLL: "YYYY. MMMM D. H:mm",
    LLLL: "YYYY. MMMM D., dddd H:mm",
  },
  meridiemParse: /de|du/i,
  isPM(e) {
    return e.charAt(1).toLowerCase() === "u";
  },
  meridiem(e, t, n) {
    return e < 12 ? (n === !0 ? "de" : "DE") : n === !0 ? "du" : "DU";
  },
  calendar: {
    sameDay: "[ma] LT[-kor]",
    nextDay: "[holnap] LT[-kor]",
    nextWeek(e) {
      return ma(e, !0);
    },
    lastDay: "[tegnap] LT[-kor]",
    lastWeek(e) {
      return ma(e, !1);
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "%s m\xFAlva",
    past: "%s",
    s: Ne,
    ss: Ne,
    m: Ne,
    mm: Ne,
    h: Ne,
    hh: Ne,
    d: Ne,
    dd: Ne,
    M: Ne,
    MM: Ne,
    y: Ne,
    yy: Ne,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var jv = {
  abbr: "hr",
  months:
    "Sije\u010Danj_Velja\u010Da_O\u017Eujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac".split(
      "_",
    ),
  monthsShort: "Sij_Velj_O\u017Eu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro".split(
    "_",
  ),
  weekdays:
    "Nedjelja_Ponedjeljak_Utorak_Srijeda_\u010Cetvrtak_Petak_Subota".split("_"),
  weekdaysShort: "Ned_Pon_Uto_Sri_\u010Cet_Pet_Sub".split("_"),
  weekdaysMin: "Ne_Po_Ut_Sr_\u010Ce_Pe_Su".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY.",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Danas u] LT",
    nextDay: "[Sutra u] LT",
    nextWeek: "dddd [u] LT",
    lastDay: "[Ju\u010Der u] LT",
    lastWeek: "[Zadnji] dddd [u] LT",
    sameElse: "L",
  },
  invalidDate: "Neispravan datum",
  relativeTime: {
    future: "za %s",
    past: "%s prije",
    s: "nekoliko sekundi",
    ss: "%d sekundi",
    m: "minuta",
    mm: "%d minuta",
    h: "sat",
    hh: "%d sati",
    d: "dan",
    dd: "%d dana",
    M: "mjesec",
    MM: "%d mjeseci",
    y: "godina",
    yy: "%d godina",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(e) {
    let t = Number(e),
      n = t % 10,
      i = (~~((t % 100) / 10) === 1, ".");
    return t + i;
  },
  week: { dow: 1, doy: 4 },
};
var Nv = {
  abbr: "id",
  months:
    "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
      "_",
    ),
  monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
  weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
  weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
  weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
  longDateFormat: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [pukul] HH.mm",
    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
  },
  meridiemParse: /pagi|siang|sore|malam/,
  meridiemHour(e, t) {
    if ((e === 12 && (e = 0), t === "pagi")) return e;
    if (t === "siang") return e >= 11 ? e : e + 12;
    if (t === "sore" || t === "malam") return e + 12;
  },
  meridiem(e, t, n) {
    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
  },
  calendar: {
    sameDay: "[Hari ini pukul] LT",
    nextDay: "[Besok pukul] LT",
    nextWeek: "dddd [pukul] LT",
    lastDay: "[Kemarin pukul] LT",
    lastWeek: "dddd [lalu pukul] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "dalam %s",
    past: "%s yang lalu",
    s: "beberapa detik",
    ss: "%d detik",
    m: "semenit",
    mm: "%d menit",
    h: "sejam",
    hh: "%d jam",
    d: "sehari",
    dd: "%d hari",
    M: "sebulan",
    MM: "%d bulan",
    y: "setahun",
    yy: "%d tahun",
  },
  week: { dow: 1, doy: 7 },
};
var Bv = {
  abbr: "it",
  months:
    "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
      "_",
    ),
  monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
  weekdays:
    "domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato".split(
      "_",
    ),
  weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
  weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Oggi alle] LT",
    nextDay: "[Domani alle] LT",
    nextWeek: "dddd [alle] LT",
    lastDay: "[Ieri alle] LT",
    lastWeek(e) {
      switch (le(e)) {
        case 0:
          return "[la scorsa] dddd [alle] LT";
        default:
          return "[lo scorso] dddd [alle] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future(e) {
      return (/^[0-9].+$/.test(e.toString(10)) ? "tra" : "in") + " " + e;
    },
    past: "%s fa",
    s: "alcuni secondi",
    ss: "%d secondi",
    m: "un minuto",
    mm: "%d minuti",
    h: "un'ora",
    hh: "%d ore",
    d: "un giorno",
    dd: "%d giorni",
    M: "un mese",
    MM: "%d mesi",
    y: "un anno",
    yy: "%d anni",
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: { dow: 1, doy: 4 },
};
var Wv = {
  abbr: "ja",
  months:
    "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
      "_",
    ),
  monthsShort:
    "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
      "_",
    ),
  weekdays:
    "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split(
      "_",
    ),
  weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY\u5E74M\u6708D\u65E5",
    LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    LLLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm dddd",
    l: "YYYY/MM/DD",
    ll: "YYYY\u5E74M\u6708D\u65E5",
    lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    llll: "YYYY\u5E74M\u6708D\u65E5 HH:mm dddd",
  },
  meridiemParse: /午前|午後/i,
  isPM(e) {
    return e === "\u5348\u5F8C";
  },
  meridiem(e, t, n) {
    return e < 12 ? "\u5348\u524D" : "\u5348\u5F8C";
  },
  calendar: {
    sameDay: "[\u4ECA\u65E5] LT",
    nextDay: "[\u660E\u65E5] LT",
    nextWeek: "[\u6765\u9031]dddd LT",
    lastDay: "[\u6628\u65E5] LT",
    lastWeek: "[\u524D\u9031]dddd LT",
    sameElse: "L",
  },
  dayOfMonthOrdinalParse: /\d{1,2}日/,
  ordinal(e, t) {
    switch (t) {
      case "d":
      case "D":
      case "DDD":
        return e + "\u65E5";
      default:
        return e.toString(10);
    }
  },
  relativeTime: {
    future: "%s\u5F8C",
    past: "%s\u524D",
    s: "\u6570\u79D2",
    ss: "%d\u79D2",
    m: "1\u5206",
    mm: "%d\u5206",
    h: "1\u6642\u9593",
    hh: "%d\u6642\u9593",
    d: "1\u65E5",
    dd: "%d\u65E5",
    M: "1\u30F6\u6708",
    MM: "%d\u30F6\u6708",
    y: "1\u5E74",
    yy: "%d\u5E74",
  },
};
var $v = {
    abbr: "ka",
    months: {
      format:
        "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10E1_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10E1_\u10DB\u10D0\u10E0\u10E2\u10E1_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8\u10E1_\u10DB\u10D0\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DC\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DA\u10D8\u10E1\u10E1_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10E1_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1".split(
          "_",
        ),
      standalone:
        "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8_\u10DB\u10D0\u10E0\u10E2\u10D8_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8_\u10DB\u10D0\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8".split(
          "_",
        ),
    },
    monthsShort:
      "\u10D8\u10D0\u10DC_\u10D7\u10D4\u10D1_\u10DB\u10D0\u10E0_\u10D0\u10DE\u10E0_\u10DB\u10D0\u10D8_\u10D8\u10D5\u10DC_\u10D8\u10D5\u10DA_\u10D0\u10D2\u10D5_\u10E1\u10D4\u10E5_\u10DD\u10E5\u10E2_\u10DC\u10DD\u10D4_\u10D3\u10D4\u10D9".split(
        "_",
      ),
    weekdays: {
      standalone:
        "\u10D9\u10D5\u10D8\u10E0\u10D0_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8_\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8".split(
          "_",
        ),
      format:
        "\u10D9\u10D5\u10D8\u10E0\u10D0\u10E1_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10E1_\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1".split(
          "_",
        ),
      isFormat: /(წინა|შემდეგ)/,
    },
    weekdaysShort:
      "\u10D9\u10D5\u10D8_\u10DD\u10E0\u10E8_\u10E1\u10D0\u10DB_\u10DD\u10D7\u10EE_\u10EE\u10E3\u10D7_\u10DE\u10D0\u10E0_\u10E8\u10D0\u10D1".split(
        "_",
      ),
    weekdaysMin:
      "\u10D9\u10D5_\u10DD\u10E0_\u10E1\u10D0_\u10DD\u10D7_\u10EE\u10E3_\u10DE\u10D0_\u10E8\u10D0".split(
        "_",
      ),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A",
    },
    calendar: {
      sameDay: "[\u10D3\u10E6\u10D4\u10E1] LT[-\u10D6\u10D4]",
      nextDay: "[\u10EE\u10D5\u10D0\u10DA] LT[-\u10D6\u10D4]",
      lastDay: "[\u10D2\u10E3\u10E8\u10D8\u10DC] LT[-\u10D6\u10D4]",
      nextWeek: "[\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2] dddd LT[-\u10D6\u10D4]",
      lastWeek: "[\u10EC\u10D8\u10DC\u10D0] dddd LT-\u10D6\u10D4",
      sameElse: "L",
    },
    relativeTime: {
      future(e) {
        var t = e.toString();
        return /(წამი|წუთი|საათი|წელი)/.test(t)
          ? t.replace(/ი$/, "\u10E8\u10D8")
          : t + "\u10E8\u10D8";
      },
      past(e) {
        var t = e.toString();
        if (/(წამი|წუთი|საათი|დღე|თვე)/.test(t))
          return t.replace(/(ი|ე)$/, "\u10D8\u10E1 \u10EC\u10D8\u10DC");
        if (/წელი/.test(t))
          return t.replace(
            /წელი$/,
            "\u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC",
          );
      },
      s: "\u10E0\u10D0\u10DB\u10D3\u10D4\u10DC\u10D8\u10DB\u10D4 \u10EC\u10D0\u10DB\u10D8",
      ss: "%d \u10EC\u10D0\u10DB\u10D8",
      m: "\u10EC\u10E3\u10D7\u10D8",
      mm: "%d \u10EC\u10E3\u10D7\u10D8",
      h: "\u10E1\u10D0\u10D0\u10D7\u10D8",
      hh: "%d \u10E1\u10D0\u10D0\u10D7\u10D8",
      d: "\u10D3\u10E6\u10D4",
      dd: "%d \u10D3\u10E6\u10D4",
      M: "\u10D7\u10D5\u10D4",
      MM: "%d \u10D7\u10D5\u10D4",
      y: "\u10EC\u10D4\u10DA\u10D8",
      yy: "%d \u10EC\u10D4\u10DA\u10D8",
    },
    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal(e, t) {
      let n = Number(e);
      return n === 0
        ? n.toString()
        : n === 1
          ? n + "-\u10DA\u10D8"
          : n < 20 || (n <= 100 && n % 20 === 0) || n % 100 === 0
            ? "\u10DB\u10D4-" + n
            : n + "-\u10D4";
    },
    week: { dow: 1, doy: 4 },
  },
  Js = {
    0: "-\u0448\u0456",
    1: "-\u0448\u0456",
    2: "-\u0448\u0456",
    3: "-\u0448\u0456",
    4: "-\u0448\u0456",
    5: "-\u0448\u0456",
    6: "-\u0448\u044B",
    7: "-\u0448\u0456",
    8: "-\u0448\u0456",
    9: "-\u0448\u044B",
    10: "-\u0448\u044B",
    20: "-\u0448\u044B",
    30: "-\u0448\u044B",
    40: "-\u0448\u044B",
    50: "-\u0448\u0456",
    60: "-\u0448\u044B",
    70: "-\u0448\u0456",
    80: "-\u0448\u0456",
    90: "-\u0448\u044B",
    100: "-\u0448\u0456",
  },
  Uv = {
    abbr: "kk",
    months:
      "\u049B\u0430\u04A3\u0442\u0430\u0440_\u0430\u049B\u043F\u0430\u043D_\u043D\u0430\u0443\u0440\u044B\u0437_\u0441\u04D9\u0443\u0456\u0440_\u043C\u0430\u043C\u044B\u0440_\u043C\u0430\u0443\u0441\u044B\u043C_\u0448\u0456\u043B\u0434\u0435_\u0442\u0430\u043C\u044B\u0437_\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A_\u049B\u0430\u0437\u0430\u043D_\u049B\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D".split(
        "_",
      ),
    monthsShort:
      "\u049B\u0430\u04A3_\u0430\u049B\u043F_\u043D\u0430\u0443_\u0441\u04D9\u0443_\u043C\u0430\u043C_\u043C\u0430\u0443_\u0448\u0456\u043B_\u0442\u0430\u043C_\u049B\u044B\u0440_\u049B\u0430\u0437_\u049B\u0430\u0440_\u0436\u0435\u043B".split(
        "_",
      ),
    weekdays:
      "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456_\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0436\u04B1\u043C\u0430_\u0441\u0435\u043D\u0431\u0456".split(
        "_",
      ),
    weekdaysShort:
      "\u0436\u0435\u043A_\u0434\u04AF\u0439_\u0441\u0435\u0439_\u0441\u04D9\u0440_\u0431\u0435\u0439_\u0436\u04B1\u043C_\u0441\u0435\u043D".split(
        "_",
      ),
    weekdaysMin:
      "\u0436\u043A_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043C_\u0441\u043D".split(
        "_",
      ),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay:
        "[\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442] LT",
      nextDay:
        "[\u0415\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442] LT",
      nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
      lastDay: "[\u041A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
      lastWeek:
        "[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "%s \u0456\u0448\u0456\u043D\u0434\u0435",
      past: "%s \u0431\u04B1\u0440\u044B\u043D",
      s: "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434",
      ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434",
      m: "\u0431\u0456\u0440 \u043C\u0438\u043D\u0443\u0442",
      mm: "%d \u043C\u0438\u043D\u0443\u0442",
      h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
      hh: "%d \u0441\u0430\u0493\u0430\u0442",
      d: "\u0431\u0456\u0440 \u043A\u04AF\u043D",
      dd: "%d \u043A\u04AF\u043D",
      M: "\u0431\u0456\u0440 \u0430\u0439",
      MM: "%d \u0430\u0439",
      y: "\u0431\u0456\u0440 \u0436\u044B\u043B",
      yy: "%d \u0436\u044B\u043B",
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal(e) {
      let t = e % 10,
        n = e >= 100 ? 100 : null;
      return e + (Js[e] || Js[t] || Js[n]);
    },
    week: { dow: 1, doy: 7 },
  };
var zv = {
  abbr: "ko",
  months:
    "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split(
      "_",
    ),
  monthsShort:
    "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split(
      "_",
    ),
  weekdays:
    "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split(
      "_",
    ),
  weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
  weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
  longDateFormat: {
    LT: "A h:mm",
    LTS: "A h:mm:ss",
    L: "YYYY.MM.DD",
    LL: "YYYY\uB144 MMMM D\uC77C",
    LLL: "YYYY\uB144 MMMM D\uC77C A h:mm",
    LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm",
    l: "YYYY.MM.DD",
    ll: "YYYY\uB144 MMMM D\uC77C",
    lll: "YYYY\uB144 MMMM D\uC77C A h:mm",
    llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm",
  },
  calendar: {
    sameDay: "\uC624\uB298 LT",
    nextDay: "\uB0B4\uC77C LT",
    nextWeek: "dddd LT",
    lastDay: "\uC5B4\uC81C LT",
    lastWeek: "\uC9C0\uB09C\uC8FC dddd LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "%s \uD6C4",
    past: "%s \uC804",
    s: "\uBA87 \uCD08",
    ss: "%d\uCD08",
    m: "1\uBD84",
    mm: "%d\uBD84",
    h: "\uD55C \uC2DC\uAC04",
    hh: "%d\uC2DC\uAC04",
    d: "\uD558\uB8E8",
    dd: "%d\uC77C",
    M: "\uD55C \uB2EC",
    MM: "%d\uB2EC",
    y: "\uC77C \uB144",
    yy: "%d\uB144",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
  ordinal: function (e, t) {
    switch (t) {
      case "d":
      case "D":
      case "DDD":
        return e + "\uC77C";
      case "M":
        return e + "\uC6D4";
      case "w":
      case "W":
        return e + "\uC8FC";
      default:
        return e.toString(10);
    }
  },
  meridiemParse: /오전|오후/,
  isPM: function (e) {
    return e === "\uC624\uD6C4";
  },
  meridiem: function (e, t, n) {
    return e < 12 ? "\uC624\uC804" : "\uC624\uD6C4";
  },
};
var wh = {
  ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
  m: "minut\u0117_minut\u0117s_minut\u0119",
  mm: "minut\u0117s_minu\u010Di\u0173_minutes",
  h: "valanda_valandos_valand\u0105",
  hh: "valandos_valand\u0173_valandas",
  d: "diena_dienos_dien\u0105",
  dd: "dienos_dien\u0173_dienas",
  M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
  MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
  y: "metai_met\u0173_metus",
  yy: "metai_met\u0173_metus",
};
function Dh(e, t, n, i) {
  return t
    ? "kelios sekund\u0117s"
    : i
      ? "keli\u0173 sekund\u017Ei\u0173"
      : "kelias sekundes";
}
function ki(e, t, n, i) {
  return t ? Yt(n)[0] : i ? Yt(n)[1] : Yt(n)[2];
}
function _a(e) {
  return e % 10 === 0 || (e > 10 && e < 20);
}
function Yt(e) {
  return wh[e].split("_");
}
function yi(e, t, n, i) {
  let s = e + " ";
  return e === 1
    ? s + ki(e, t, n[0], i)
    : t
      ? s + (_a(e) ? Yt(n)[1] : Yt(n)[0])
      : i
        ? s + Yt(n)[1]
        : s + (_a(e) ? Yt(n)[1] : Yt(n)[2]);
}
var Gv = {
  abbr: "lt",
  months: {
    format:
      "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split(
        "_",
      ),
    standalone:
      "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split(
        "_",
      ),
    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
  },
  monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
  weekdays: {
    format:
      "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split(
        "_",
      ),
    standalone:
      "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split(
        "_",
      ),
    isFormat: /dddd HH:mm/,
  },
  weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
  weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY [m.] MMMM D [d.]",
    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
    l: "YYYY-MM-DD",
    ll: "YYYY [m.] MMMM D [d.]",
    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
  },
  calendar: {
    sameDay: "[\u0160iandien] LT",
    nextDay: "[Rytoj] LT",
    nextWeek: "dddd LT",
    lastDay: "[Vakar] LT",
    lastWeek: "[Pra\u0117jus\u012F] dddd LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "po %s",
    past: "prie\u0161 %s",
    s: Dh,
    ss: yi,
    m: ki,
    mm: yi,
    h: ki,
    hh: yi,
    d: ki,
    dd: yi,
    M: ki,
    MM: yi,
    y: ki,
    yy: yi,
  },
  dayOfMonthOrdinalParse: /\d{1,2}-oji/,
  ordinal(e) {
    return e + "-oji";
  },
  week: { dow: 1, doy: 4 },
};
var qv = {
  abbr: "lv",
  months:
    "Janv\u0101ris_Febru\u0101ris_Marts_Apr\u012Blis_Maijs_J\u016Bnijs_J\u016Blijs_Augusts_Septembris_Oktobris_Novembris_Decembris".split(
      "_",
    ),
  monthsShort:
    "Jan_Feb_Mar_Apr_Mai_J\u016Bn_J\u016Bl_Aug_Sep_Okt_Nov_Dec".split("_"),
  weekdays:
    "Sv\u0113tdiena_Pirmdiena_Otrdiena_Tre\u0161diena_Ceturtdiena_Piektdiena_Sestdiena".split(
      "_",
    ),
  weekdaysShort: "Sv\u0113td_Pirmd_Otrd_Tre\u0161d_Ceturtd_Piektd_Sestd".split(
    "_",
  ),
  weekdaysMin: "Sv_Pi_Ot_Tr_Ce_Pk_Se".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "p\u0113c %s",
    past: "pirms %s",
    s: "da\u017E\u0101m sekund\u0113m",
    ss: "%d sekund\u0113m",
    m: "min\u016Btes",
    mm: "%d min\u016Bt\u0113m",
    h: "stundas",
    hh: "%d stund\u0101m",
    d: "dienas",
    dd: "%d dien\u0101m",
    M: "m\u0113ne\u0161a",
    MM: "%d m\u0113ne\u0161iem",
    y: "gada",
    yy: "%d gadiem",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal(e) {
    return e + ".";
  },
  week: { dow: 1, doy: 4 },
};
function Be(e, t, n, i) {
  switch (n) {
    case "s":
      return t
        ? "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434"
        : "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D";
    case "ss":
      return (
        e +
        (t
          ? " \u0441\u0435\u043A\u0443\u043D\u0434"
          : " \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D")
      );
    case "m":
    case "mm":
      return (
        e +
        (t
          ? " \u043C\u0438\u043D\u0443\u0442"
          : " \u043C\u0438\u043D\u0443\u0442\u044B\u043D")
      );
    case "h":
    case "hh":
      return (
        e +
        (t ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043D")
      );
    case "d":
    case "dd":
      return (
        e +
        (t
          ? " \u04E9\u0434\u04E9\u0440"
          : " \u04E9\u0434\u0440\u0438\u0439\u043D")
      );
    case "M":
    case "MM":
      return (
        e + (t ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044B\u043D")
      );
    case "y":
    case "yy":
      return (
        e +
        (t ? " \u0436\u0438\u043B" : " \u0436\u0438\u043B\u0438\u0439\u043D")
      );
    default:
      return e.toString(10);
  }
}
var Jv = {
  abbr: "mn",
  months:
    "\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(
      "_",
    ),
  monthsShort:
    "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split(
      "_",
    ),
  monthsParseExact: !0,
  weekdays:
    "\u041D\u044F\u043C_\u0414\u0430\u0432\u0430\u0430_\u041C\u044F\u0433\u043C\u0430\u0440_\u041B\u0445\u0430\u0433\u0432\u0430_\u041F\u04AF\u0440\u044D\u0432_\u0411\u0430\u0430\u0441\u0430\u043D_\u0411\u044F\u043C\u0431\u0430".split(
      "_",
    ),
  weekdaysShort:
    "\u041D\u044F\u043C_\u0414\u0430\u0432_\u041C\u044F\u0433_\u041B\u0445\u0430_\u041F\u04AF\u0440_\u0411\u0430\u0430_\u0411\u044F\u043C".split(
      "_",
    ),
  weekdaysMin:
    "\u041D\u044F_\u0414\u0430_\u041C\u044F_\u041B\u0445_\u041F\u04AF_\u0411\u0430_\u0411\u044F".split(
      "_",
    ),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D",
    LLL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm",
    LLLL: "dddd, YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm",
  },
  meridiemParse: /ҮӨ|ҮХ/i,
  isPM: function (e) {
    return e === "\u04AE\u0425";
  },
  meridiem: function (e, t, n) {
    return e < 12 ? "\u04AE\u04E8" : "\u04AE\u0425";
  },
  calendar: {
    sameDay: "[\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440] LT",
    nextDay: "[\u041C\u0430\u0440\u0433\u0430\u0430\u0448] LT",
    nextWeek: "[\u0418\u0440\u044D\u0445] dddd LT",
    lastDay: "[\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440] LT",
    lastWeek: "[\u04E8\u043D\u0433\u04E9\u0440\u0441\u04E9\u043D] dddd LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "%s \u0434\u0430\u0440\u0430\u0430",
    past: "%s \u04E9\u043C\u043D\u04E9",
    s: Be,
    ss: Be,
    m: Be,
    mm: Be,
    h: Be,
    hh: Be,
    d: Be,
    dd: Be,
    M: Be,
    MM: Be,
    y: Be,
    yy: Be,
  },
  dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
  ordinal: function (e, t) {
    switch (t) {
      case "d":
      case "D":
      case "DDD":
        return e + " \u04E9\u0434\u04E9\u0440";
      default:
        return e.toString(10);
    }
  },
};
var Kv = {
  abbr: "nb",
  months:
    "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
      "_",
    ),
  monthsShort:
    "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
  monthsParseExact: !0,
  weekdays: "s\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag".split(
    "_",
  ),
  weekdaysShort: "s\xF8._ma._ti._on._to._fr._l\xF8.".split("_"),
  weekdaysMin: "s\xF8_ma_ti_on_to_fr_l\xF8".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "dddd [kl.] LT",
    lastDay: "[i g\xE5r kl.] LT",
    lastWeek: "[forrige] dddd [kl.] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "noen sekunder",
    ss: "%d sekunder",
    m: "ett minutt",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dager",
    M: "en m\xE5ned",
    MM: "%d m\xE5neder",
    y: "ett \xE5r",
    yy: "%d \xE5r",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var pa = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
    "_",
  ),
  Mh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
  Ks = [
    /^jan/i,
    /^feb/i,
    /^maart|mrt.?$/i,
    /^apr/i,
    /^mei$/i,
    /^jun[i.]?$/i,
    /^jul[i.]?$/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i,
  ],
  fa =
    /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
  Qv = {
    abbr: "nl-be",
    months:
      "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? Mh[Y(e, n)] : pa[Y(e, n)]) : pa;
    },
    monthsRegex: fa,
    monthsShortRegex: fa,
    monthsStrictRegex:
      /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex:
      /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: Ks,
    longMonthsParse: Ks,
    shortMonthsParse: Ks,
    weekdays:
      "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "\xE9\xE9n minuut",
      mm: "%d minuten",
      h: "\xE9\xE9n uur",
      hh: "%d uur",
      d: "\xE9\xE9n dag",
      dd: "%d dagen",
      M: "\xE9\xE9n maand",
      MM: "%d maanden",
      y: "\xE9\xE9n jaar",
      yy: "%d jaar",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal(e) {
      let t = Number(e);
      return t + (t === 1 || t === 8 || t >= 20 ? "ste" : "de");
    },
    week: { dow: 1, doy: 4 },
  };
var ga = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
    "_",
  ),
  kh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
  Qs = [
    /^jan/i,
    /^feb/i,
    /^maart|mrt.?$/i,
    /^apr/i,
    /^mei$/i,
    /^jun[i.]?$/i,
    /^jul[i.]?$/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i,
  ],
  va =
    /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
  Xv = {
    abbr: "nl",
    months:
      "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
        "_",
      ),
    monthsShort(e, t, n) {
      return e ? (/-MMM-/.test(t) ? kh[Y(e, n)] : ga[Y(e, n)]) : ga;
    },
    monthsRegex: va,
    monthsShortRegex: va,
    monthsStrictRegex:
      /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex:
      /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: Qs,
    longMonthsParse: Qs,
    shortMonthsParse: Qs,
    weekdays:
      "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "\xE9\xE9n minuut",
      mm: "%d minuten",
      h: "\xE9\xE9n uur",
      hh: "%d uur",
      d: "\xE9\xE9n dag",
      dd: "%d dagen",
      M: "\xE9\xE9n maand",
      MM: "%d maanden",
      y: "\xE9\xE9n jaar",
      yy: "%d jaar",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal(e) {
      let t = Number(e);
      return t + (t === 1 || t === 8 || t >= 20 ? "ste" : "de");
    },
    week: { dow: 1, doy: 4 },
  };
var Xs =
    "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split(
      "_",
    ),
  ya =
    "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split(
      "_",
    );
function on(e) {
  return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1;
}
function Jt(e, t, n) {
  let i = e + " ";
  switch (n) {
    case "ss":
      return i + (on(e) ? "sekundy" : "sekund");
    case "m":
      return t ? "minuta" : "minut\u0119";
    case "mm":
      return i + (on(e) ? "minuty" : "minut");
    case "h":
      return t ? "godzina" : "godzin\u0119";
    case "hh":
      return i + (on(e) ? "godziny" : "godzin");
    case "MM":
      return i + (on(e) ? "miesi\u0105ce" : "miesi\u0119cy");
    case "yy":
      return i + (on(e) ? "lata" : "lat");
  }
}
var Zv = {
  abbr: "pl",
  months(e, t, n) {
    return e
      ? t === ""
        ? "(" + ya[Y(e, n)] + "|" + Xs[Y(e, n)] + ")"
        : /D MMMM/.test(t)
          ? ya[Y(e, n)]
          : Xs[Y(e, n)]
      : Xs;
  },
  monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split(
    "_",
  ),
  weekdays:
    "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split(
      "_",
    ),
  weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
  weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Dzi\u015B o] LT",
    nextDay: "[Jutro o] LT",
    nextWeek(e) {
      switch (le(e)) {
        case 0:
          return "[W niedziel\u0119 o] LT";
        case 2:
          return "[We wtorek o] LT";
        case 3:
          return "[W \u015Brod\u0119 o] LT";
        case 5:
          return "[W pi\u0105tek o] LT";
        case 6:
          return "[W sobot\u0119 o] LT";
        default:
          return "[W] dddd [o] LT";
      }
    },
    lastDay: "[Wczoraj o] LT",
    lastWeek(e) {
      switch (le(e)) {
        case 0:
          return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
        case 3:
          return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
        case 4:
          return "[W zesz\u0142\u0105 czwartek o] LT";
        case 5:
          return "[W zesz\u0142\u0105 pi\u0105tek o] LT";
        case 6:
          return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
        default:
          return "[W zesz\u0142y] dddd [o] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "za %s",
    past: "%s temu",
    s: "kilka sekund",
    ss: Jt,
    m: Jt,
    mm: Jt,
    h: Jt,
    hh: Jt,
    d: "1 dzie\u0144",
    dd: "%d dni",
    M: "miesi\u0105c",
    MM: Jt,
    y: "rok",
    yy: Jt,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var ey = {
  abbr: "pt-br",
  months:
    "Janeiro_Fevereiro_Mar\xE7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
      "_",
    ),
  monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
  weekdays:
    "Domingo_Segunda-feira_Ter\xE7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xE1bado".split(
      "_",
    ),
  weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),
  weekdaysMin: "Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [\xE0s] HH:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY [\xE0s] HH:mm",
  },
  calendar: {
    sameDay: "[Hoje \xE0s] LT",
    nextDay: "[Amanh\xE3 \xE0s] LT",
    nextWeek: "dddd [\xE0s] LT",
    lastDay: "[Ontem \xE0s] LT",
    lastWeek(e) {
      return le(e) === 0 || le(e) === 6
        ? "[\xDAltimo] dddd [\xE0s] LT"
        : "[\xDAltima] dddd [\xE0s] LT";
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "em %s",
    past: "%s atr\xE1s",
    s: "poucos segundos",
    ss: "%d segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um m\xEAs",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos",
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
};
function bi(e, t, n) {
  let i = {
      ss: "secunde",
      mm: "minute",
      hh: "ore",
      dd: "zile",
      MM: "luni",
      yy: "ani",
    },
    s = " ";
  return (
    (e % 100 >= 20 || (e >= 100 && e % 100 === 0)) && (s = " de "),
    e + s + i[n]
  );
}
var ty = {
  abbr: "ro",
  months:
    "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
      "_",
    ),
  monthsShort:
    "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
  monthsParseExact: !0,
  weekdays:
    "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\xE2mb\u0103t\u0103".split(
      "_",
    ),
  weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xE2m".split("_"),
  weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xE2".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm",
  },
  calendar: {
    sameDay: "[azi la] LT",
    nextDay: "[m\xE2ine la] LT",
    nextWeek: "dddd [la] LT",
    lastDay: "[ieri la] LT",
    lastWeek: "[fosta] dddd [la] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "peste %s",
    past: "%s \xEEn urm\u0103",
    s: "c\xE2teva secunde",
    ss: bi,
    m: "un minut",
    mm: bi,
    h: "o or\u0103",
    hh: bi,
    d: "o zi",
    dd: bi,
    M: "o lun\u0103",
    MM: bi,
    y: "un an",
    yy: bi,
  },
  week: { dow: 1, doy: 7 },
};
function Sh(e, t) {
  let n = e.split("_");
  return t % 10 === 1 && t % 100 !== 11
    ? n[0]
    : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
      ? n[1]
      : n[2];
}
function Kt(e, t, n) {
  let i = {
    ss: t
      ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434"
      : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
    mm: t
      ? "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442"
      : "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442",
    hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432",
    dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439",
    MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432",
    yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442",
  };
  return n === "m"
    ? t
      ? "\u043C\u0438\u043D\u0443\u0442\u0430"
      : "\u043C\u0438\u043D\u0443\u0442\u0443"
    : e + " " + Sh(i[n], +e);
}
var Zs = [
    /^янв/i,
    /^фев/i,
    /^мар/i,
    /^апр/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^авг/i,
    /^сен/i,
    /^окт/i,
    /^ноя/i,
    /^дек/i,
  ],
  iy = {
    abbr: "ru",
    months: {
      format:
        "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split(
          "_",
        ),
      standalone:
        "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split(
          "_",
        ),
    },
    monthsShort: {
      format:
        "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split(
          "_",
        ),
      standalone:
        "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split(
          "_",
        ),
    },
    weekdays: {
      standalone:
        "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split(
          "_",
        ),
      format:
        "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split(
          "_",
        ),
      isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
    },
    weekdaysShort:
      "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
        "_",
      ),
    weekdaysMin:
      "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
        "_",
      ),
    monthsParse: Zs,
    longMonthsParse: Zs,
    shortMonthsParse: Zs,
    monthsRegex:
      /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsShortRegex:
      /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsStrictRegex:
      /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    monthsShortStrictRegex:
      /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY \u0433.",
      LLL: "D MMMM YYYY \u0433., H:mm",
      LLLL: "dddd, D MMMM YYYY \u0433., H:mm",
    },
    calendar: {
      sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432] LT",
      nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",
      lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
      nextWeek(e, t) {
        if (an(t) !== an(e))
          switch (le(e)) {
            case 0:
              return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd [\u0432] LT";
            case 1:
            case 2:
            case 4:
              return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd [\u0432] LT";
            case 3:
            case 5:
            case 6:
              return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd [\u0432] LT";
          }
        else
          return le(e) === 2
            ? "[\u0412\u043E] dddd [\u0432] LT"
            : "[\u0412] dddd [\u0432] LT";
      },
      lastWeek(e, t) {
        if (an(t) !== an(e))
          switch (le(e)) {
            case 0:
              return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd [\u0432] LT";
            case 1:
            case 2:
            case 4:
              return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd [\u0432] LT";
            case 3:
            case 5:
            case 6:
              return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd [\u0432] LT";
          }
        else
          return le(e) === 2
            ? "[\u0412\u043E] dddd [\u0432] LT"
            : "[\u0412] dddd [\u0432] LT";
      },
      sameElse: "L",
    },
    relativeTime: {
      future: "\u0447\u0435\u0440\u0435\u0437 %s",
      past: "%s \u043D\u0430\u0437\u0430\u0434",
      s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434",
      ss: Kt,
      m: Kt,
      mm: Kt,
      h: "\u0447\u0430\u0441",
      hh: Kt,
      d: "\u0434\u0435\u043D\u044C",
      dd: Kt,
      M: "\u043C\u0435\u0441\u044F\u0446",
      MM: Kt,
      y: "\u0433\u043E\u0434",
      yy: Kt,
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM(e) {
      return /^(дня|вечера)$/.test(e);
    },
    meridiem(e, t, n) {
      return e < 4
        ? "\u043D\u043E\u0447\u0438"
        : e < 12
          ? "\u0443\u0442\u0440\u0430"
          : e < 17
            ? "\u0434\u043D\u044F"
            : "\u0432\u0435\u0447\u0435\u0440\u0430";
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal(e, t) {
      let n = Number(e);
      switch (t) {
        case "M":
        case "d":
        case "DDD":
          return n + "-\u0439";
        case "D":
          return n + "-\u0433\u043E";
        case "w":
        case "W":
          return n + "-\u044F";
        default:
          return n.toString(10);
      }
    },
    week: { dow: 1, doy: 4 },
  };
var xh =
    "janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split(
      "_",
    ),
  Th = "jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_");
function Ci(e) {
  return e > 1 && e < 5 && ~~(e / 10) !== 1;
}
function We(e, t, n, i) {
  let s = e + " ";
  switch (n) {
    case "s":
      return t || i ? "p\xE1r sek\xFAnd" : "p\xE1r sekundami";
    case "ss":
      return t || i ? s + (Ci(e) ? "sekundy" : "sek\xFAnd") : s + "sekundami";
    case "m":
      return t ? "min\xFAta" : i ? "min\xFAtu" : "min\xFAtou";
    case "mm":
      return t || i
        ? s + (Ci(e) ? "min\xFAty" : "min\xFAt")
        : s + "min\xFAtami";
    case "h":
      return t ? "hodina" : i ? "hodinu" : "hodinou";
    case "hh":
      return t || i ? s + (Ci(e) ? "hodiny" : "hod\xEDn") : s + "hodinami";
    case "d":
      return t || i ? "de\u0148" : "d\u0148om";
    case "dd":
      return t || i ? s + (Ci(e) ? "dni" : "dn\xED") : s + "d\u0148ami";
    case "M":
      return t || i ? "mesiac" : "mesiacom";
    case "MM":
      return t || i ? s + (Ci(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
    case "y":
      return t || i ? "rok" : "rokom";
    case "yy":
      return t || i ? s + (Ci(e) ? "roky" : "rokov") : s + "rokmi";
  }
}
var ny = {
  abbr: "sk",
  months: xh,
  monthsShort: Th,
  weekdays:
    "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
  weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
  weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY",
  },
  calendar: {
    sameDay: "[dnes o] LT",
    nextDay: "[zajtra o] LT",
    nextWeek(e) {
      switch (le(e)) {
        case 0:
          return "[v nede\u013Eu o] LT";
        case 1:
        case 2:
          return "[v] dddd [o] LT";
        case 3:
          return "[v stredu o] LT";
        case 4:
          return "[vo \u0161tvrtok o] LT";
        case 5:
          return "[v piatok o] LT";
        case 6:
          return "[v sobotu o] LT";
      }
    },
    lastDay: "[v\u010Dera o] LT",
    lastWeek(e) {
      switch (le(e)) {
        case 0:
          return "[minul\xFA nede\u013Eu o] LT";
        case 1:
        case 2:
          return "[minul\xFD] dddd [o] LT";
        case 3:
          return "[minul\xFA stredu o] LT";
        case 4:
        case 5:
          return "[minul\xFD] dddd [o] LT";
        case 6:
          return "[minul\xFA sobotu o] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "o %s",
    past: "pred %s",
    s: We,
    ss: We,
    m: We,
    mm: We,
    h: We,
    hh: We,
    d: We,
    dd: We,
    M: We,
    MM: We,
    y: We,
    yy: We,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
function $e(e, t, n, i) {
  var s = e + " ";
  switch (n) {
    case "s":
      return t || i ? "nekaj sekund" : "nekaj sekundami";
    case "ss":
      return (
        e === 1
          ? (s += t ? "sekundo" : "sekundi")
          : e === 2
            ? (s += t || i ? "sekundi" : "sekundah")
            : e < 5
              ? (s += t || i ? "sekunde" : "sekundah")
              : (s += "sekund"),
        s
      );
    case "m":
      return t ? "ena minuta" : "eno minuto";
    case "mm":
      return (
        e === 1
          ? (s += t ? "minuta" : "minuto")
          : e === 2
            ? (s += t || i ? "minuti" : "minutama")
            : e < 5
              ? (s += t || i ? "minute" : "minutami")
              : (s += t || i ? "minut" : "minutami"),
        s
      );
    case "h":
      return t ? "ena ura" : "eno uro";
    case "hh":
      return (
        e === 1
          ? (s += t ? "ura" : "uro")
          : e === 2
            ? (s += t || i ? "uri" : "urama")
            : e < 5
              ? (s += t || i ? "ure" : "urami")
              : (s += t || i ? "ur" : "urami"),
        s
      );
    case "d":
      return t || i ? "en dan" : "enim dnem";
    case "dd":
      return (
        e === 1
          ? (s += t || i ? "dan" : "dnem")
          : e === 2
            ? (s += t || i ? "dni" : "dnevoma")
            : (s += t || i ? "dni" : "dnevi"),
        s
      );
    case "M":
      return t || i ? "en mesec" : "enim mesecem";
    case "MM":
      return (
        e === 1
          ? (s += t || i ? "mesec" : "mesecem")
          : e === 2
            ? (s += t || i ? "meseca" : "mesecema")
            : e < 5
              ? (s += t || i ? "mesece" : "meseci")
              : (s += t || i ? "mesecev" : "meseci"),
        s
      );
    case "y":
      return t || i ? "eno leto" : "enim letom";
    case "yy":
      return (
        e === 1
          ? (s += t || i ? "leto" : "letom")
          : e === 2
            ? (s += t || i ? "leti" : "letoma")
            : e < 5
              ? (s += t || i ? "leta" : "leti")
              : (s += t || i ? "let" : "leti"),
        s
      );
  }
}
var sy = {
  abbr: "sl",
  months:
    "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
      "_",
    ),
  monthsShort:
    "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
  monthsParseExact: !0,
  weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split(
    "_",
  ),
  weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
  weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm",
  },
  calendar: {
    sameDay: "[danes ob] LT",
    nextDay: "[jutri ob] LT",
    nextWeek(e) {
      switch (le(e)) {
        case 0:
          return "[v] [nedeljo] [ob] LT";
        case 3:
          return "[v] [sredo] [ob] LT";
        case 6:
          return "[v] [soboto] [ob] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[v] dddd [ob] LT";
      }
    },
    lastDay: "[v\u010Deraj ob] LT",
    lastWeek(e) {
      switch (le(e)) {
        case 0:
          return "[prej\u0161njo] [nedeljo] [ob] LT";
        case 3:
          return "[prej\u0161njo] [sredo] [ob] LT";
        case 6:
          return "[prej\u0161njo] [soboto] [ob] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[prej\u0161nji] dddd [ob] LT";
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "\u010Dez %s",
    past: "pred %s",
    s: $e,
    ss: $e,
    m: $e,
    mm: $e,
    h: $e,
    hh: $e,
    d: $e,
    dd: $e,
    M: $e,
    MM: $e,
    y: $e,
    yy: $e,
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 7 },
};
var ry = {
  abbr: "sq",
  months:
    "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xEBntor_Dhjetor".split(
      "_",
    ),
  monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xEBn_Dhj".split("_"),
  weekdays:
    "E Diel\xEB_E H\xEBn\xEB_E Mart\xEB_E M\xEBrkur\xEB_E Enjte_E Premte_E Shtun\xEB".split(
      "_",
    ),
  weekdaysShort: "Die_H\xEBn_Mar_M\xEBr_Enj_Pre_Sht".split("_"),
  weekdaysMin: "Di_He_Ma_Me_En_Pr_Sh".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Sot n\xEB] LT",
    nextDay: "[Nes\xEBr n\xEB] LT",
    nextWeek: "dddd [n\xEB] LT",
    lastDay: "[Dje n\xEB] LT",
    lastWeek: "dddd [e kaluar n\xEB] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "n\xEB %s",
    past: "para %sve",
    s: "disa sekonda",
    ss: "%d sekonda",
    m: "nj\xEB minut",
    mm: "%d minuta",
    h: "nj\xEB or\xEB",
    hh: "%d or\xEB",
    d: "nj\xEB dit\xEB",
    dd: "%d dit\xEB",
    M: "nj\xEB muaj",
    MM: "%d muaj",
    y: "nj\xEB vit",
    yy: "%d vite",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: { dow: 1, doy: 4 },
};
var oy = {
    abbr: "sv",
    months:
      "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
        "_",
      ),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays:
      "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"),
    weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"),
    weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [kl.] HH:mm",
      LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd D MMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[Idag] LT",
      nextDay: "[Imorgon] LT",
      lastDay: "[Ig\xE5r] LT",
      nextWeek: "[P\xE5] dddd LT",
      lastWeek: "[I] dddd[s] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "om %s",
      past: "f\xF6r %s sedan",
      s: "n\xE5gra sekunder",
      ss: "%d sekunder",
      m: "en minut",
      mm: "%d minuter",
      h: "en timme",
      hh: "%d timmar",
      d: "en dag",
      dd: "%d dagar",
      M: "en m\xE5nad",
      MM: "%d m\xE5nader",
      y: "ett \xE5r",
      yy: "%d \xE5r",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal(e) {
      let t = Number(e),
        n = t % 10,
        i = ~~((t % 100) / 10) === 1 ? "e" : n === 1 || n === 2 ? "a" : "e";
      return t + i;
    },
    week: { dow: 1, doy: 4 },
  },
  ay = {
    abbr: "th",
    months:
      "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split(
        "_",
      ),
    monthsShort:
      "\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split(
        "_",
      ),
    monthsParseExact: !0,
    weekdays:
      "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split(
        "_",
      ),
    weekdaysShort:
      "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split(
        "_",
      ),
    weekdaysMin:
      "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split(
        "_",
      ),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
      LLLL: "\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM(e) {
      return (
        e === "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"
      );
    },
    meridiem(e, t, n) {
      return e < 12
        ? "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"
        : "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    },
    calendar: {
      sameDay:
        "[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      nextDay:
        "[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      nextWeek: "dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",
      lastDay:
        "[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      lastWeek:
        "[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "\u0E2D\u0E35\u0E01 %s",
      past: "%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
      s: "\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      ss: "%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      m: "1 \u0E19\u0E32\u0E17\u0E35",
      mm: "%d \u0E19\u0E32\u0E17\u0E35",
      h: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
      hh: "%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
      d: "1 \u0E27\u0E31\u0E19",
      dd: "%d \u0E27\u0E31\u0E19",
      M: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
      MM: "%d \u0E40\u0E14\u0E37\u0E2D\u0E19",
      y: "1 \u0E1B\u0E35",
      yy: "%d \u0E1B\u0E35",
    },
  },
  ba = {
    abbr: "th-be",
    months:
      "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split(
        "_",
      ),
    monthsShort:
      "\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split(
        "_",
      ),
    monthsParseExact: !0,
    weekdays:
      "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split(
        "_",
      ),
    weekdaysShort:
      "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split(
        "_",
      ),
    weekdaysMin:
      "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split(
        "_",
      ),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
      LLLL: "\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM(e) {
      return (
        e === "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"
      );
    },
    meridiem(e, t, n) {
      return e < 12
        ? "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"
        : "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    },
    calendar: {
      sameDay:
        "[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      nextDay:
        "[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      nextWeek: "dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",
      lastDay:
        "[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      lastWeek:
        "[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "\u0E2D\u0E35\u0E01 %s",
      past: "%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
      s: "\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      ss: "%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      m: "1 \u0E19\u0E32\u0E17\u0E35",
      mm: "%d \u0E19\u0E32\u0E17\u0E35",
      h: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
      hh: "%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
      d: "1 \u0E27\u0E31\u0E19",
      dd: "%d \u0E27\u0E31\u0E19",
      M: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
      MM: "%d \u0E40\u0E14\u0E37\u0E2D\u0E19",
      y: "1 \u0E1B\u0E35",
      yy: "%d \u0E1B\u0E35",
    },
    preparse(e, t) {
      let n = ba.longDateFormat[t] ? ba.longDateFormat[t] : t;
      if (n.indexOf("YYYY", n.length - 4) !== -1) {
        let i = e.substr(0, e.length - 4),
          s = parseInt(e.substr(e.length - 4), 10) - 543;
        return i + s;
      }
      return e;
    },
    getFullYear(e, t = !1) {
      return 543 + (t ? e.getUTCFullYear() : e.getFullYear());
    },
  };
var er = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'\xFCnc\xFC",
    4: "'\xFCnc\xFC",
    100: "'\xFCnc\xFC",
    6: "'nc\u0131",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'\u0131nc\u0131",
    90: "'\u0131nc\u0131",
  },
  ly = {
    abbr: "tr",
    months:
      "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split(
        "_",
      ),
    monthsShort:
      "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays:
      "Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split(
        "_",
      ),
    weekdaysShort: "Paz_Pts_Sal_\xC7ar_Per_Cum_Cts".split("_"),
    weekdaysMin: "Pz_Pt_Sa_\xC7a_Pe_Cu_Ct".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[bug\xFCn saat] LT",
      nextDay: "[yar\u0131n saat] LT",
      nextWeek: "[gelecek] dddd [saat] LT",
      lastDay: "[d\xFCn] LT",
      lastWeek: "[ge\xE7en] dddd [saat] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "%s sonra",
      past: "%s \xF6nce",
      s: "birka\xE7 saniye",
      ss: "%d saniye",
      m: "bir dakika",
      mm: "%d dakika",
      h: "bir saat",
      hh: "%d saat",
      d: "bir g\xFCn",
      dd: "%d g\xFCn",
      M: "bir ay",
      MM: "%d ay",
      y: "bir y\u0131l",
      yy: "%d y\u0131l",
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal(e) {
      let t = Number(e);
      if (t === 0) return t + "'\u0131nc\u0131";
      let n = t % 10,
        i = (t % 100) - n,
        s = t >= 100 ? 100 : null;
      return t + (er[n] || er[i] || er[s]);
    },
    week: { dow: 1, doy: 7 },
  };
function Eh(e, t) {
  let n = e.split("_");
  return t % 10 === 1 && t % 100 !== 11
    ? n[0]
    : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
      ? n[1]
      : n[2];
}
function Qt(e, t, n) {
  let i = {
    ss: t
      ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434"
      : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",
    mm: t
      ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D"
      : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",
    hh: t
      ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D"
      : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",
    dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",
    MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",
    yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432",
  };
  return n === "m"
    ? t
      ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430"
      : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443"
    : n === "h"
      ? t
        ? "\u0433\u043E\u0434\u0438\u043D\u0430"
        : "\u0433\u043E\u0434\u0438\u043D\u0443"
      : e + " " + Eh(i[n], +e);
}
function Lh(e, t, n) {
  let i = {
    nominative:
      "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split(
        "_",
      ),
    accusative:
      "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split(
        "_",
      ),
    genitive:
      "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split(
        "_",
      ),
  };
  if (!e) return i.nominative;
  let s = /(\[[ВвУу]\]) ?dddd/.test(t)
    ? "accusative"
    : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
      ? "genitive"
      : "nominative";
  return i[s][le(e, n)];
}
function wi(e) {
  return function (t) {
    return e + "\u043E" + (O(t) === 11 ? "\u0431" : "") + "] LT";
  };
}
var dy = {
  abbr: "uk",
  months: {
    format:
      "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split(
        "_",
      ),
    standalone:
      "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split(
        "_",
      ),
  },
  monthsShort:
    "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split(
      "_",
    ),
  weekdays: Lh,
  weekdaysShort:
    "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
      "_",
    ),
  weekdaysMin:
    "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
      "_",
    ),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY \u0440.",
    LLL: "D MMMM YYYY \u0440., HH:mm",
    LLLL: "dddd, D MMMM YYYY \u0440., HH:mm",
  },
  calendar: {
    sameDay: wi("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),
    nextDay: wi("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
    lastDay: wi("[\u0412\u0447\u043E\u0440\u0430 "),
    nextWeek: wi("[\u0423] dddd ["),
    lastWeek(e) {
      switch (le(e)) {
        case 0:
        case 3:
        case 5:
        case 6:
          return wi("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [")(e);
        case 1:
        case 2:
        case 4:
          return wi(
            "[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [",
          )(e);
      }
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "\u0437\u0430 %s",
    past: "%s \u0442\u043E\u043C\u0443",
    s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",
    ss: Qt,
    m: Qt,
    mm: Qt,
    h: "\u0433\u043E\u0434\u0438\u043D\u0443",
    hh: Qt,
    d: "\u0434\u0435\u043D\u044C",
    dd: Qt,
    M: "\u043C\u0456\u0441\u044F\u0446\u044C",
    MM: Qt,
    y: "\u0440\u0456\u043A",
    yy: Qt,
  },
  meridiemParse: /ночі|ранку|дня|вечора/,
  isPM(e) {
    return /^(дня|вечора)$/.test(e);
  },
  meridiem(e, t, n) {
    return e < 4
      ? "\u043D\u043E\u0447\u0456"
      : e < 12
        ? "\u0440\u0430\u043D\u043A\u0443"
        : e < 17
          ? "\u0434\u043D\u044F"
          : "\u0432\u0435\u0447\u043E\u0440\u0430";
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
  ordinal(e, t) {
    let n = Number(e);
    switch (t) {
      case "M":
      case "d":
      case "DDD":
      case "w":
      case "W":
        return n + "-\u0439";
      case "D":
        return n + "-\u0433\u043E";
      default:
        return n.toString();
    }
  },
  week: { dow: 1, doy: 7 },
};
var cy = {
  abbr: "vi",
  months:
    "th\xE1ng 1_th\xE1ng 2_th\xE1ng 3_th\xE1ng 4_th\xE1ng 5_th\xE1ng 6_th\xE1ng 7_th\xE1ng 8_th\xE1ng 9_th\xE1ng 10_th\xE1ng 11_th\xE1ng 12".split(
      "_",
    ),
  monthsShort:
    "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
  monthsParseExact: !0,
  weekdays:
    "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split(
      "_",
    ),
  weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysParseExact: !0,
  meridiemParse: /sa|ch/i,
  isPM(e) {
    return /^ch$/i.test(e);
  },
  meridiem(e, t, n) {
    return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
  },
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM [n\u0103m] YYYY",
    LLL: "D MMMM [n\u0103m] YYYY HH:mm",
    LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
    l: "DD/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[H\xF4m nay l\xFAc] LT",
    nextDay: "[Ng\xE0y mai l\xFAc] LT",
    nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\xFAc] LT",
    lastDay: "[H\xF4m qua l\xFAc] LT",
    lastWeek: "dddd [tu\u1EA7n tr\u01B0\u1EDBc l\xFAc] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "%s t\u1EDBi",
    past: "%s tr\u01B0\u1EDBc",
    s: "v\xE0i gi\xE2y",
    ss: "%d gi\xE2y",
    m: "m\u1ED9t ph\xFAt",
    mm: "%d ph\xFAt",
    h: "m\u1ED9t gi\u1EDD",
    hh: "%d gi\u1EDD",
    d: "m\u1ED9t ng\xE0y",
    dd: "%d ng\xE0y",
    M: "m\u1ED9t th\xE1ng",
    MM: "%d th\xE1ng",
    y: "m\u1ED9t n\u0103m",
    yy: "%d n\u0103m",
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal(e) {
    return "" + e;
  },
  week: { dow: 1, doy: 4 },
};
var uy = {
  abbr: "zh-cn",
  months:
    "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split(
      "_",
    ),
  monthsShort:
    "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
      "_",
    ),
  weekdays:
    "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split(
      "_",
    ),
  weekdaysShort:
    "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split(
      "_",
    ),
  weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY\u5E74M\u6708D\u65E5",
    LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
    LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
    l: "YYYY/M/D",
    ll: "YYYY\u5E74M\u6708D\u65E5",
    lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour(e, t) {
    return (
      e === 12 && (e = 0),
      t === "\u51CC\u6668" || t === "\u65E9\u4E0A" || t === "\u4E0A\u5348"
        ? e
        : t === "\u4E0B\u5348" || t === "\u665A\u4E0A"
          ? e + 12
          : e >= 11
            ? e
            : e + 12
    );
  },
  meridiem(e, t, n) {
    let i = e * 100 + t;
    return i < 600
      ? "\u51CC\u6668"
      : i < 900
        ? "\u65E9\u4E0A"
        : i < 1130
          ? "\u4E0A\u5348"
          : i < 1230
            ? "\u4E2D\u5348"
            : i < 1800
              ? "\u4E0B\u5348"
              : "\u665A\u4E0A";
  },
  calendar: {
    sameDay: "[\u4ECA\u5929]LT",
    nextDay: "[\u660E\u5929]LT",
    nextWeek: "[\u4E0B]ddddLT",
    lastDay: "[\u6628\u5929]LT",
    lastWeek: "[\u4E0A]ddddLT",
    sameElse: "L",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal(e, t) {
    let n = Number(e);
    switch (t) {
      case "d":
      case "D":
      case "DDD":
        return n + "\u65E5";
      case "M":
        return n + "\u6708";
      case "w":
      case "W":
        return n + "\u5468";
      default:
        return n.toString();
    }
  },
  relativeTime: {
    future: "%s\u5185",
    past: "%s\u524D",
    s: "\u51E0\u79D2",
    ss: "%d \u79D2",
    m: "1 \u5206\u949F",
    mm: "%d \u5206\u949F",
    h: "1 \u5C0F\u65F6",
    hh: "%d \u5C0F\u65F6",
    d: "1 \u5929",
    dd: "%d \u5929",
    M: "1 \u4E2A\u6708",
    MM: "%d \u4E2A\u6708",
    y: "1 \u5E74",
    yy: "%d \u5E74",
  },
  week: { dow: 1, doy: 4 },
};
var Ih = {
    1: "\u0661",
    2: "\u0662",
    3: "\u0663",
    4: "\u0664",
    5: "\u0665",
    6: "\u0666",
    7: "\u0667",
    8: "\u0668",
    9: "\u0669",
    0: "\u0660",
  },
  Vh = {
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u0660": "0",
  },
  Ca = function (e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : e === 2
          ? 2
          : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
              ? 4
              : 5;
  },
  Oh = {
    s: [
      "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647",
      "\u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647",
      [
        "\u062F\u0648 \u062B\u0627\u0646\u06CC\u0647",
        "\u062F\u0648 \u062B\u0627\u0646\u06CC\u0647",
      ],
      "%d \u062B\u0627\u0646\u06CC\u0647",
      "%d \u062B\u0627\u0646\u06CC\u0647",
      "%d \u062B\u0627\u0646\u06CC\u0647",
    ],
    m: [
      "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647",
      "\u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647",
      [
        "\u062F\u0648 \u062F\u0642\u06CC\u0642\u0647",
        "\u062F\u0648 \u062F\u0642\u06CC\u0642\u0647",
      ],
      "%d \u062F\u0642\u06CC\u0642\u0647",
      "%d \u062F\u0642\u06CC\u0642\u0647",
      "%d \u062F\u0642\u06CC\u0642\u0647",
    ],
    h: [
      "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0633\u0627\u0639\u062A",
      "\u06CC\u06A9 \u0633\u0627\u0639\u062A",
      [
        "\u062F\u0648 \u0633\u0627\u0639\u062A",
        "\u062F\u0648 \u0633\u0627\u0639\u062A",
      ],
      "%d \u0633\u0627\u0639\u062A",
      "%d \u0633\u0627\u0639\u062A",
      "%d \u0633\u0627\u0639\u062A",
    ],
    d: [
      "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0631\u0648\u0632",
      "\u06CC\u06A9 \u0631\u0648\u0632",
      ["\u062F\u0648 \u0631\u0648\u0632", "\u062F\u0648 \u0631\u0648\u0632"],
      "%d \u0631\u0648\u0632",
      "%d \u0631\u0648\u0632",
      "%d \u0631\u0648\u0632",
    ],
    M: [
      "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0645\u0627\u0647",
      "\u06CC\u06A9 \u0645\u0627\u0647",
      ["\u062F\u0648 \u0645\u0627\u0647", "\u062F\u0648 \u0645\u0627\u0647"],
      "%d \u0645\u0627\u0647",
      "%d \u0645\u0627\u0647",
      "%d \u0645\u0627\u0647",
    ],
    y: [
      "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0633\u0627\u0644",
      "\u06CC\u06A9 \u0633\u0627\u0644",
      ["\u062F\u0648 \u0633\u0627\u0644", "\u062F\u0648 \u0633\u0627\u0644"],
      "%d \u0633\u0627\u0644",
      "%d \u0633\u0627\u0644",
      "%d \u0633\u0627\u0644",
    ],
  },
  Ue = function (e) {
    return function (t, n) {
      let i = Ca(t),
        s = Oh[e][Ca(t)];
      return (i === 2 && (s = s[n ? 0 : 1]), s.replace(/%d/i, t.toString()));
    };
  },
  wa = [
    "\u0698\u0627\u0646\u0648\u06CC\u0647",
    "\u0641\u0648\u0631\u06CC\u0647",
    "\u0645\u0627\u0631\u0633",
    "\u0622\u0648\u0631\u06CC\u0644",
    "\u0645\u06CC",
    "\u0698\u0648\u0626\u0646",
    "\u062C\u0648\u0644\u0627\u06CC",
    "\u0622\u06AF\u0648\u0633\u062A",
    "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
    "\u0627\u06A9\u062A\u0628\u0631",
    "\u0646\u0648\u0627\u0645\u0628\u0631",
    "\u062F\u0633\u0627\u0645\u0628\u0631",
  ],
  hy = {
    abbr: "fa",
    months: wa,
    monthsShort: wa,
    weekdays:
      "\u06CC\u06A9\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647 \u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C \u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split(
        "_",
      ),
    weekdaysShort:
      "\u06CC\u06A9\u0634\u0646\u0628\u0647_\u062F\u0648\u200C\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u200C\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split(
        "_",
      ),
    weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/\u200FM/\u200FYYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    meridiemParse: /ص|م/,
    isPM(e) {
      return e === "\u0645";
    },
    meridiem(e, t, n) {
      return e < 12 ? "\u0635" : "\u0645";
    },
    calendar: {
      sameDay:
        "[\u0627\u0645\u0631\u0648\u0632 \u062F\u0631 \u0633\u0627\u0639\u062A] LT",
      nextDay:
        "[\u0641\u0631\u062F\u0627 \u062F\u0631 \u0633\u0627\u0639\u062A] LT",
      nextWeek: "dddd [\u062F\u0631 \u0633\u0627\u0639\u062A] LT",
      lastDay:
        "[\u062F\u06CC\u0631\u0648\u0632 \u062F\u0631 \u0633\u0627\u0639\u062A] LT",
      lastWeek: "dddd [\u062F\u0631 \u0633\u0627\u0639\u062A] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "\u0628\u0639\u062F %s",
      past: "\u067E\u06CC\u0634 %s",
      s: Ue("s"),
      ss: Ue("s"),
      m: Ue("m"),
      mm: Ue("m"),
      h: Ue("h"),
      hh: Ue("h"),
      d: Ue("d"),
      dd: Ue("d"),
      M: Ue("M"),
      MM: Ue("M"),
      y: Ue("y"),
      yy: Ue("y"),
    },
    preparse(e) {
      return e
        .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (t) {
          return Vh[t];
        })
        .replace(/،/g, ",");
    },
    postformat(e) {
      return e
        .replace(/\d/g, function (t) {
          return Ih[t];
        })
        .replace(/,/g, "\u060C");
    },
    week: { dow: 6, doy: 80 },
  };
var Li = class extends lt {
    constructor(t, n, i) {
      (super(t),
        n
          .pipe(Wr(Rr))
          .pipe(Jr((o, a) => (a ? i(o, a) : o), t))
          .subscribe((o) => this.next(o)));
    }
  },
  Ii = class e extends hs {
    constructor(t, n, i) {
      (super(), (this._dispatcher = t), (this._reducer = n), (this.source = i));
    }
    select(t) {
      return (this.source?.pipe(Hi(t)) || new hs().pipe(Hi(t))).pipe(ji());
    }
    lift(t) {
      let n = new e(this._dispatcher, this._reducer, this);
      return ((n.operator = t), n);
    }
    dispatch(t) {
      this._dispatcher.next(t);
    }
    next(t) {
      this._dispatcher.next(t);
    }
    error(t) {
      this._dispatcher.error(t);
    }
    complete() {}
  };
function Yh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0\xA0\xA0"), d());
}
function Ah(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td")(1, "a", 1),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.changeMinutes(s.minuteStep));
      }),
      w(2, "span", 2),
      d()());
  }
  if (e & 2) {
    let n = u();
    (h(), M("disabled", !n.canIncrementMinutes || !n.isEditable));
  }
}
function Ph(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0"), d());
}
function Fh(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td")(1, "a", 1),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.changeSeconds(s.secondsStep));
      }),
      w(2, "span", 2),
      d()());
  }
  if (e & 2) {
    let n = u();
    (h(), M("disabled", !n.canIncrementSeconds || !n.isEditable));
  }
}
function Hh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0\xA0\xA0"), d());
}
function Rh(e, t) {
  e & 1 && w(0, "td");
}
function jh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0:\xA0"), d());
}
function Nh(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td", 4)(1, "input", 5),
      y("wheel", function (s) {
        f(n);
        let r = u();
        return (
          r.prevDef(s),
          g(r.changeMinutes(r.minuteStep * r.wheelSign(s), "wheel"))
        );
      })("keydown.ArrowUp", function () {
        f(n);
        let s = u();
        return g(s.changeMinutes(s.minuteStep, "key"));
      })("keydown.ArrowDown", function () {
        f(n);
        let s = u();
        return g(s.changeMinutes(-s.minuteStep, "key"));
      })("change", function (s) {
        f(n);
        let r = u();
        return g(r.updateMinutes(s.target));
      }),
      d()());
  }
  if (e & 2) {
    let n = u();
    (M("has-error", n.invalidMinutes),
      h(),
      M("is-invalid", n.invalidMinutes),
      _("placeholder", n.minutesPlaceholder)("readonly", n.readonlyInput)(
        "disabled",
        n.disabled,
      )("value", n.minutes),
      H("aria-label", n.labelMinutes));
  }
}
function Bh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0:\xA0"), d());
}
function Wh(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td", 4)(1, "input", 5),
      y("wheel", function (s) {
        f(n);
        let r = u();
        return (
          r.prevDef(s),
          g(r.changeSeconds(r.secondsStep * r.wheelSign(s), "wheel"))
        );
      })("keydown.ArrowUp", function () {
        f(n);
        let s = u();
        return g(s.changeSeconds(s.secondsStep, "key"));
      })("keydown.ArrowDown", function () {
        f(n);
        let s = u();
        return g(s.changeSeconds(-s.secondsStep, "key"));
      })("change", function (s) {
        f(n);
        let r = u();
        return g(r.updateSeconds(s.target));
      }),
      d()());
  }
  if (e & 2) {
    let n = u();
    (M("has-error", n.invalidSeconds),
      h(),
      M("is-invalid", n.invalidSeconds),
      _("placeholder", n.secondsPlaceholder)("readonly", n.readonlyInput)(
        "disabled",
        n.disabled,
      )("value", n.seconds),
      H("aria-label", n.labelSeconds));
  }
}
function $h(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0\xA0\xA0"), d());
}
function Uh(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td")(1, "button", 8),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.toggleMeridian());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u();
    (h(),
      M("disabled", !n.isEditable || !n.canToggleMeridian),
      _("disabled", !n.isEditable || !n.canToggleMeridian),
      h(),
      re("", n.meridian, " "));
  }
}
function zh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0\xA0\xA0"), d());
}
function Gh(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td")(1, "a", 1),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.changeMinutes(-s.minuteStep));
      }),
      w(2, "span", 7),
      d()());
  }
  if (e & 2) {
    let n = u();
    (h(), M("disabled", !n.canDecrementMinutes || !n.isEditable));
  }
}
function qh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0"), d());
}
function Jh(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td")(1, "a", 1),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.changeSeconds(-s.secondsStep));
      }),
      w(2, "span", 7),
      d()());
  }
  if (e & 2) {
    let n = u();
    (h(), M("disabled", !n.canDecrementSeconds || !n.isEditable));
  }
}
function Kh(e, t) {
  e & 1 && (l(0, "td"), c(1, "\xA0\xA0\xA0"), d());
}
function Qh(e, t) {
  e & 1 && w(0, "td");
}
var Pt = (() => {
    let t = class t {
      writeValue(i) {
        return { type: t.WRITE_VALUE, payload: i };
      }
      changeHours(i) {
        return { type: t.CHANGE_HOURS, payload: i };
      }
      changeMinutes(i) {
        return { type: t.CHANGE_MINUTES, payload: i };
      }
      changeSeconds(i) {
        return { type: t.CHANGE_SECONDS, payload: i };
      }
      setTime(i) {
        return { type: t.SET_TIME_UNIT, payload: i };
      }
      updateControls(i) {
        return { type: t.UPDATE_CONTROLS, payload: i };
      }
    };
    ((t.WRITE_VALUE = "[timepicker] write value from ng model"),
      (t.CHANGE_HOURS = "[timepicker] change hours"),
      (t.CHANGE_MINUTES = "[timepicker] change minutes"),
      (t.CHANGE_SECONDS = "[timepicker] change seconds"),
      (t.SET_TIME_UNIT = "[timepicker] set time unit"),
      (t.UPDATE_CONTROLS = "[timepicker] update controls"),
      (t.ɵfac = function (s) {
        return new (s || t)();
      }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  Xh = 10,
  Zh = 24,
  el = 12,
  em = 60,
  tm = 60;
function yr(e) {
  return !e || (e instanceof Date && isNaN(e.getHours()))
    ? !1
    : typeof e == "string"
      ? yr(new Date(e))
      : !0;
}
function gr(e, t) {
  return !((e.min && t < e.min) || (e.max && t > e.max));
}
function Vi(e) {
  return typeof e > "u" ? NaN : typeof e == "number" ? e : parseInt(e, Xh);
}
function tl(e, t = !1) {
  let n = Vi(e);
  return isNaN(n) || n < 0 || n > (t ? el : Zh) ? NaN : n;
}
function il(e) {
  let t = Vi(e);
  return isNaN(t) || t < 0 || t > em ? NaN : t;
}
function nl(e) {
  let t = Vi(e);
  return isNaN(t) || t < 0 || t > tm ? NaN : t;
}
function Ja(e) {
  return typeof e == "string" ? new Date(e) : e;
}
function ze(e, t) {
  if (!e) return ze(ts(new Date(), 0, 0, 0), t);
  if (!t) return e;
  let n = e.getHours(),
    i = e.getMinutes(),
    s = e.getSeconds();
  return (
    t.hour && (n = n + Vi(t.hour)),
    t.minute && (i = i + Vi(t.minute)),
    t.seconds && (s = s + Vi(t.seconds)),
    ts(e, n, i, s)
  );
}
function sl(e, t) {
  let n = tl(t.hour),
    i = il(t.minute),
    s = nl(t.seconds) || 0;
  return (
    t.isPM && n !== 12 && (n += el),
    e
      ? isNaN(n) || isNaN(i)
        ? e
        : ts(e, n, i, s)
      : !isNaN(n) && !isNaN(i)
        ? ts(new Date(), n, i, s)
        : e
  );
}
function ts(e, t, n, i) {
  let s = new Date(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    t,
    n,
    i,
    e.getMilliseconds(),
  );
  return (
    s.setFullYear(e.getFullYear()),
    s.setMonth(e.getMonth()),
    s.setDate(e.getDate()),
    s
  );
}
function vr(e) {
  let t = e.toString();
  return t.length > 1 ? t : `0${t}`;
}
function rl(e, t) {
  return !isNaN(tl(e, t));
}
function ol(e) {
  return !isNaN(il(e));
}
function al(e) {
  return !isNaN(nl(e));
}
function im(e, t, n) {
  let i = sl(new Date(), e);
  return !(!i || (t && i > t) || (n && i < n));
}
function nm(e, t, n) {
  return e.length === 0 || t.length === 0 || n.length === 0;
}
function Ka(e, t = "0", n = "0", i) {
  return rl(e, i) && ol(t) && al(n);
}
function es(e, t) {
  return !(
    e.readonlyInput ||
    e.disabled ||
    (t &&
      ((t.source === "wheel" && !e.mousewheel) ||
        (t.source === "key" && !e.arrowkeys)))
  );
}
function sm(e, t) {
  return !(
    !e.step ||
    (e.step > 0 && !t.canIncrementHours) ||
    (e.step < 0 && !t.canDecrementHours)
  );
}
function rm(e, t) {
  return !(
    !e.step ||
    (e.step > 0 && !t.canIncrementMinutes) ||
    (e.step < 0 && !t.canDecrementMinutes)
  );
}
function om(e, t) {
  return !(
    !e.step ||
    (e.step > 0 && !t.canIncrementSeconds) ||
    (e.step < 0 && !t.canDecrementSeconds)
  );
}
function Qa(e) {
  let {
    hourStep: t,
    minuteStep: n,
    secondsStep: i,
    readonlyInput: s,
    disabled: r,
    mousewheel: o,
    arrowkeys: a,
    showSpinners: m,
    showMeridian: p,
    showSeconds: b,
    meridians: E,
    min: R,
    max: Z,
  } = e;
  return {
    hourStep: t,
    minuteStep: n,
    secondsStep: i,
    readonlyInput: s,
    disabled: r,
    mousewheel: o,
    arrowkeys: a,
    showSpinners: m,
    showMeridian: p,
    showSeconds: b,
    meridians: E,
    min: R,
    max: Z,
  };
}
function am(e, t) {
  let {
      min: s,
      max: r,
      hourStep: o,
      minuteStep: a,
      secondsStep: m,
      showSeconds: p,
    } = t,
    b = {
      canIncrementHours: !0,
      canIncrementMinutes: !0,
      canIncrementSeconds: !0,
      canDecrementHours: !0,
      canDecrementMinutes: !0,
      canDecrementSeconds: !0,
      canToggleMeridian: !0,
    };
  if (!e) return b;
  if (r) {
    let E = ze(e, { hour: o });
    if (
      ((b.canIncrementHours = r > E && e.getHours() + o < 24),
      !b.canIncrementHours)
    ) {
      let R = ze(e, { minute: a });
      b.canIncrementMinutes = p ? r > R : r >= R;
    }
    if (!b.canIncrementMinutes) {
      let R = ze(e, { seconds: m });
      b.canIncrementSeconds = r >= R;
    }
    e.getHours() < 12 && (b.canToggleMeridian = ze(e, { hour: 12 }) < r);
  }
  if (s) {
    let E = ze(e, { hour: -o });
    if (((b.canDecrementHours = s < E), !b.canDecrementHours)) {
      let R = ze(e, { minute: -a });
      b.canDecrementMinutes = p ? s < R : s <= R;
    }
    if (!b.canDecrementMinutes) {
      let R = ze(e, { seconds: -m });
      b.canDecrementSeconds = s <= R;
    }
    e.getHours() >= 12 && (b.canToggleMeridian = ze(e, { hour: -12 }) > s);
  }
  return b;
}
var ll = (() => {
    let t = class t {
      constructor() {
        ((this.hourStep = 1),
          (this.minuteStep = 5),
          (this.secondsStep = 10),
          (this.showMeridian = !0),
          (this.meridians = ["AM", "PM"]),
          (this.readonlyInput = !1),
          (this.disabled = !1),
          (this.allowEmptyTime = !1),
          (this.mousewheel = !0),
          (this.arrowkeys = !0),
          (this.showSpinners = !0),
          (this.showSeconds = !1),
          (this.showMinutes = !0),
          (this.hoursPlaceholder = "HH"),
          (this.minutesPlaceholder = "MM"),
          (this.secondsPlaceholder = "SS"),
          (this.ariaLabelHours = "hours"),
          (this.ariaLabelMinutes = "minutes"),
          (this.ariaLabelSeconds = "seconds"));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  dl = {
    value: void 0,
    config: new ll(),
    controls: {
      canIncrementHours: !0,
      canIncrementMinutes: !0,
      canIncrementSeconds: !0,
      canDecrementHours: !0,
      canDecrementMinutes: !0,
      canDecrementSeconds: !0,
      canToggleMeridian: !0,
    },
  };
function Xa(e = dl, t) {
  switch (t.type) {
    case Pt.WRITE_VALUE:
      return Object.assign({}, e, { value: t.payload });
    case Pt.CHANGE_HOURS: {
      if (!es(e.config, t.payload) || !sm(t.payload, e.controls)) return e;
      let n = ze(e.value, { hour: t.payload.step });
      return (e.config.max || e.config.min) && !gr(e.config, n)
        ? e
        : Object.assign({}, e, { value: n });
    }
    case Pt.CHANGE_MINUTES: {
      if (!es(e.config, t.payload) || !rm(t.payload, e.controls)) return e;
      let n = ze(e.value, { minute: t.payload.step });
      return (e.config.max || e.config.min) && !gr(e.config, n)
        ? e
        : Object.assign({}, e, { value: n });
    }
    case Pt.CHANGE_SECONDS: {
      if (!es(e.config, t.payload) || !om(t.payload, e.controls)) return e;
      let n = ze(e.value, { seconds: t.payload.step });
      return (e.config.max || e.config.min) && !gr(e.config, n)
        ? e
        : Object.assign({}, e, { value: n });
    }
    case Pt.SET_TIME_UNIT: {
      if (!es(e.config)) return e;
      let n = sl(e.value, t.payload);
      return Object.assign({}, e, { value: n });
    }
    case Pt.UPDATE_CONTROLS: {
      let n = am(e.value, t.payload),
        i = { value: e.value, config: t.payload, controls: n };
      return (
        e.config.showMeridian !== i.config.showMeridian &&
          e.value &&
          (i.value = new Date(e.value)),
        Object.assign({}, e, i)
      );
    }
    default:
      return e;
  }
}
var Za = (() => {
    let t = class t extends Ii {
      constructor() {
        let i = new lt({ type: "[mini-ngrx] dispatcher init" }),
          s = new Li(dl, i, Xa);
        super(i, Xa, s);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  lm = { provide: It, useExisting: Ge(() => Oi), multi: !0 },
  Oi = (() => {
    let t = class t {
      constructor(i, s, r, o) {
        ((this._cd = s),
          (this._store = r),
          (this._timepickerActions = o),
          (this.hourStep = 1),
          (this.minuteStep = 5),
          (this.secondsStep = 10),
          (this.readonlyInput = !1),
          (this.disabled = !1),
          (this.mousewheel = !0),
          (this.arrowkeys = !0),
          (this.showSpinners = !0),
          (this.showMeridian = !0),
          (this.showMinutes = !0),
          (this.showSeconds = !1),
          (this.meridians = ["AM", "PM"]),
          (this.hoursPlaceholder = "HH"),
          (this.minutesPlaceholder = "MM"),
          (this.secondsPlaceholder = "SS"),
          (this.isValid = new k()),
          (this.meridianChange = new k()),
          (this.hours = ""),
          (this.minutes = ""),
          (this.seconds = ""),
          (this.meridian = ""),
          (this.invalidHours = !1),
          (this.invalidMinutes = !1),
          (this.invalidSeconds = !1),
          (this.labelHours = "hours"),
          (this.labelMinutes = "minutes"),
          (this.labelSeconds = "seconds"),
          (this.canIncrementHours = !0),
          (this.canIncrementMinutes = !0),
          (this.canIncrementSeconds = !0),
          (this.canDecrementHours = !0),
          (this.canDecrementMinutes = !0),
          (this.canDecrementSeconds = !0),
          (this.canToggleMeridian = !0),
          (this.onChange = Function.prototype),
          (this.onTouched = Function.prototype),
          (this.config = i),
          Object.assign(this, this.config),
          (this.timepickerSub = r
            .select((a) => a.value)
            .subscribe((a) => {
              (this._renderTime(a),
                this.onChange(a),
                this._store.dispatch(
                  this._timepickerActions.updateControls(Qa(this)),
                ));
            })),
          r
            .select((a) => a.controls)
            .subscribe((a) => {
              let m = Ka(this.hours, this.minutes, this.seconds, this.isPM()),
                p =
                  (this.config.allowEmptyTime && this.isOneOfDatesIsEmpty()) ||
                  m;
              (this.isValid.emit(p), Object.assign(this, a), s.markForCheck());
            }));
      }
      get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
      }
      get isEditable() {
        return !(this.readonlyInput || this.disabled);
      }
      resetValidation() {
        ((this.invalidHours = !1),
          (this.invalidMinutes = !1),
          (this.invalidSeconds = !1));
      }
      isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
      }
      prevDef(i) {
        i.preventDefault();
      }
      wheelSign(i) {
        return Math.sign(i.deltaY || 0) * -1;
      }
      ngOnChanges() {
        this._store.dispatch(this._timepickerActions.updateControls(Qa(this)));
      }
      changeHours(i, s = "") {
        (this.resetValidation(),
          this._store.dispatch(
            this._timepickerActions.changeHours({ step: i, source: s }),
          ));
      }
      changeMinutes(i, s = "") {
        (this.resetValidation(),
          this._store.dispatch(
            this._timepickerActions.changeMinutes({ step: i, source: s }),
          ));
      }
      changeSeconds(i, s = "") {
        (this.resetValidation(),
          this._store.dispatch(
            this._timepickerActions.changeSeconds({ step: i, source: s }),
          ));
      }
      updateHours(i) {
        (this.resetValidation(), (this.hours = i.value));
        let s = rl(this.hours, this.isPM()) && this.isValidLimit();
        if (
          !((this.config.allowEmptyTime && this.isOneOfDatesIsEmpty()) || s)
        ) {
          ((this.invalidHours = !0),
            this.isValid.emit(!1),
            this.onChange(null));
          return;
        }
        this._updateTime();
      }
      updateMinutes(i) {
        (this.resetValidation(), (this.minutes = i.value));
        let s = ol(this.minutes) && this.isValidLimit();
        if (
          !((this.config.allowEmptyTime && this.isOneOfDatesIsEmpty()) || s)
        ) {
          ((this.invalidMinutes = !0),
            this.isValid.emit(!1),
            this.onChange(null));
          return;
        }
        this._updateTime();
      }
      updateSeconds(i) {
        (this.resetValidation(), (this.seconds = i.value));
        let s = al(this.seconds) && this.isValidLimit();
        if (
          !((this.config.allowEmptyTime && this.isOneOfDatesIsEmpty()) || s)
        ) {
          ((this.invalidSeconds = !0),
            this.isValid.emit(!1),
            this.onChange(null));
          return;
        }
        this._updateTime();
      }
      isValidLimit() {
        return im(
          {
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM(),
          },
          this.max,
          this.min,
        );
      }
      isOneOfDatesIsEmpty() {
        return nm(this.hours, this.minutes, this.seconds);
      }
      _updateTime() {
        let i = this.showSeconds ? this.seconds : void 0,
          s = this.showMinutes ? this.minutes : void 0,
          r = Ka(this.hours, s, i, this.isPM());
        if (
          !((this.config.allowEmptyTime && this.isOneOfDatesIsEmpty()) || r)
        ) {
          (this.isValid.emit(!1), this.onChange(null));
          return;
        }
        this._store.dispatch(
          this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM(),
          }),
        );
      }
      toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) return;
        this._store.dispatch(
          this._timepickerActions.changeHours({ step: 12, source: "" }),
        );
      }
      writeValue(i) {
        yr(i)
          ? (this.resetValidation(),
            this._store.dispatch(this._timepickerActions.writeValue(Ja(i))))
          : i == null &&
            this._store.dispatch(this._timepickerActions.writeValue());
      }
      registerOnChange(i) {
        this.onChange = i;
      }
      registerOnTouched(i) {
        this.onTouched = i;
      }
      setDisabledState(i) {
        ((this.disabled = i), this._cd.markForCheck());
      }
      ngOnDestroy() {
        this.timepickerSub?.unsubscribe();
      }
      _renderTime(i) {
        if (!i || !yr(i)) {
          ((this.hours = ""),
            (this.minutes = ""),
            (this.seconds = ""),
            (this.meridian = this.meridians[0]),
            this.meridianChange.emit(this.meridian));
          return;
        }
        let s = Ja(i);
        if (!s) return;
        let r = 12,
          o = s.getHours();
        (this.showMeridian &&
          ((this.meridian = this.meridians[o >= r ? 1 : 0]),
          this.meridianChange.emit(this.meridian),
          (o = o % r),
          o === 0 && (o = r)),
          (this.hours = vr(o)),
          (this.minutes = vr(s.getMinutes())),
          (this.seconds = vr(s.getUTCSeconds())));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(ll), v(Xe), v(Za), v(Pt));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["timepicker"]],
        inputs: {
          hourStep: "hourStep",
          minuteStep: "minuteStep",
          secondsStep: "secondsStep",
          readonlyInput: "readonlyInput",
          disabled: "disabled",
          mousewheel: "mousewheel",
          arrowkeys: "arrowkeys",
          showSpinners: "showSpinners",
          showMeridian: "showMeridian",
          showMinutes: "showMinutes",
          showSeconds: "showSeconds",
          meridians: "meridians",
          min: "min",
          max: "max",
          hoursPlaceholder: "hoursPlaceholder",
          minutesPlaceholder: "minutesPlaceholder",
          secondsPlaceholder: "secondsPlaceholder",
        },
        outputs: { isValid: "isValid", meridianChange: "meridianChange" },
        features: [ee([lm, Za, Pt]), Dt],
        decls: 31,
        vars: 33,
        consts: [
          [1, "text-center", 3, "hidden"],
          ["href", "javascript:void(0);", 1, "btn", "btn-link", 3, "click"],
          [1, "bs-chevron", "bs-chevron-up"],
          [4, "ngIf"],
          [1, "form-group", "mb-3"],
          [
            "type",
            "text",
            "maxlength",
            "2",
            1,
            "form-control",
            "text-center",
            "bs-timepicker-field",
            3,
            "wheel",
            "keydown.ArrowUp",
            "keydown.ArrowDown",
            "change",
            "placeholder",
            "readonly",
            "disabled",
            "value",
          ],
          ["class", "form-group mb-3", 3, "has-error", 4, "ngIf"],
          [1, "bs-chevron", "bs-chevron-down"],
          [
            "type",
            "button",
            1,
            "btn",
            "btn-default",
            "text-center",
            3,
            "click",
            "disabled",
          ],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1),
            y("click", function () {
              return r.changeHours(r.hourStep);
            }),
            w(5, "span", 2),
            d()(),
            C(6, Yh, 2, 0, "td", 3)(7, Ah, 3, 2, "td", 3)(8, Ph, 2, 0, "td", 3)(
              9,
              Fh,
              3,
              2,
              "td",
              3,
            )(10, Hh, 2, 0, "td", 3)(11, Rh, 1, 0, "td", 3),
            d(),
            l(12, "tr")(13, "td", 4)(14, "input", 5),
            y("wheel", function (a) {
              return (
                r.prevDef(a),
                r.changeHours(r.hourStep * r.wheelSign(a), "wheel")
              );
            })("keydown.ArrowUp", function () {
              return r.changeHours(r.hourStep, "key");
            })("keydown.ArrowDown", function () {
              return r.changeHours(-r.hourStep, "key");
            })("change", function (a) {
              return r.updateHours(a.target);
            }),
            d()(),
            C(15, jh, 2, 0, "td", 3)(16, Nh, 2, 9, "td", 6)(
              17,
              Bh,
              2,
              0,
              "td",
              3,
            )(18, Wh, 2, 9, "td", 6)(19, $h, 2, 0, "td", 3)(
              20,
              Uh,
              3,
              4,
              "td",
              3,
            ),
            d(),
            l(21, "tr", 0)(22, "td")(23, "a", 1),
            y("click", function () {
              return r.changeHours(-r.hourStep);
            }),
            w(24, "span", 7),
            d()(),
            C(25, zh, 2, 0, "td", 3)(26, Gh, 3, 2, "td", 3)(
              27,
              qh,
              2,
              0,
              "td",
              3,
            )(28, Jh, 3, 2, "td", 3)(29, Kh, 2, 0, "td", 3)(
              30,
              Qh,
              1,
              0,
              "td",
              3,
            ),
            d()()()),
            s & 2 &&
              (h(2),
              _("hidden", !r.showSpinners),
              h(2),
              M("disabled", !r.canIncrementHours || !r.isEditable),
              h(2),
              _("ngIf", r.showMinutes),
              h(),
              _("ngIf", r.showMinutes),
              h(),
              _("ngIf", r.showSeconds),
              h(),
              _("ngIf", r.showSeconds),
              h(),
              _("ngIf", r.showMeridian),
              h(),
              _("ngIf", r.showMeridian),
              h(2),
              M("has-error", r.invalidHours),
              h(),
              M("is-invalid", r.invalidHours),
              _("placeholder", r.hoursPlaceholder)("readonly", r.readonlyInput)(
                "disabled",
                r.disabled,
              )("value", r.hours),
              H("aria-label", r.labelHours),
              h(),
              _("ngIf", r.showMinutes),
              h(),
              _("ngIf", r.showMinutes),
              h(),
              _("ngIf", r.showSeconds),
              h(),
              _("ngIf", r.showSeconds),
              h(),
              _("ngIf", r.showMeridian),
              h(),
              _("ngIf", r.showMeridian),
              h(),
              _("hidden", !r.showSpinners),
              h(2),
              M("disabled", !r.canDecrementHours || !r.isEditable),
              h(2),
              _("ngIf", r.showMinutes),
              h(),
              _("ngIf", r.showMinutes),
              h(),
              _("ngIf", r.showSeconds),
              h(),
              _("ngIf", r.showSeconds),
              h(),
              _("ngIf", r.showMeridian),
              h(),
              _("ngIf", r.showMeridian)));
        },
        dependencies: [me],
        styles: [
          `.bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2px}.bs-chevron-down{-webkit-transform:rotate(-135deg);transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}
`,
        ],
        encapsulation: 2,
        changeDetection: 0,
      })));
    let e = t;
    return e;
  })(),
  Yi = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({})));
    let e = t;
    return e;
  })();
function cm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "button", 2),
      y("click", function () {
        let s = f(n).$implicit,
          r = u();
        return g(r.selectFromRanges(s));
      }),
      c(1),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u();
    (M("selected", i.compareRanges(n)), h(), re(" ", n.label, " "));
  }
}
function um(e, t) {
  if (e & 1) {
    let n = D();
    (ht(0),
      c(1, " \u200B "),
      l(2, "button", 2),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.view("month"));
      }),
      l(3, "span"),
      c(4),
      d()(),
      mt());
  }
  if (e & 2) {
    let n = u();
    (h(2), _("disabled", n.isDisabled), h(2), A(n.calendar.monthTitle));
  }
}
var hm = [[["bs-datepicker-navigation-view"]], "*"],
  mm = ["bs-datepicker-navigation-view", "*"];
function _m(e, t) {
  e & 1 && w(0, "bs-current-date", 4);
}
function pm(e, t) {
  e & 1 && w(0, "bs-timepicker");
}
function fm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td", 4),
      y("click", function () {
        let s = f(n).$implicit,
          r = u(2);
        return g(r.viewYear(s));
      })("mouseenter", function () {
        let s = f(n).$implicit,
          r = u(2);
        return g(r.hoverYear(s, !0));
      })("mouseleave", function () {
        let s = f(n).$implicit,
          r = u(2);
        return g(r.hoverYear(s, !1));
      }),
      l(1, "span"),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = t.$implicit;
    (M("disabled", n.isDisabled)("is-highlighted", n.isHovered),
      h(),
      M("selected", n.isSelected),
      h(),
      A(n.label));
  }
}
function gm(e, t) {
  if ((e & 1 && (l(0, "tr"), C(1, fm, 3, 7, "td", 3), d()), e & 2)) {
    let n = t.$implicit;
    (h(), _("ngForOf", n));
  }
}
function vm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "td", 4),
      y("click", function () {
        let s = f(n).$implicit,
          r = u(2);
        return g(r.viewMonth(s));
      })("mouseenter", function () {
        let s = f(n).$implicit,
          r = u(2);
        return g(r.hoverMonth(s, !0));
      })("mouseleave", function () {
        let s = f(n).$implicit,
          r = u(2);
        return g(r.hoverMonth(s, !1));
      }),
      l(1, "span"),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = t.$implicit;
    (M("disabled", n.isDisabled)("is-highlighted", n.isHovered),
      h(),
      M("selected", n.isSelected),
      h(),
      A(n.label));
  }
}
function ym(e, t) {
  if ((e & 1 && (l(0, "tr"), C(1, vm, 3, 7, "td", 3), d()), e & 2)) {
    let n = t.$implicit;
    (h(), _("ngForOf", n));
  }
}
var bm = ["bsDatepickerDayDecorator", ""];
function Cm(e, t) {
  e & 1 && w(0, "th");
}
function wm(e, t) {
  if ((e & 1 && (l(0, "th", 5), c(1), d()), e & 2)) {
    let n = t.index,
      i = u();
    (h(), re("", i.calendar.weekdays[n], " "));
  }
}
function Dm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "span", 11),
      y("click", function () {
        f(n);
        let s = u(2).$implicit,
          r = u();
        return g(r.selectWeek(s));
      }),
      c(1),
      d());
  }
  if (e & 2) {
    let n = u(2).index,
      i = u();
    (h(), A(i.calendar.weekNumbers[n]));
  }
}
function Mm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "span", 12),
      y("click", function () {
        f(n);
        let s = u(2).$implicit,
          r = u();
        return g(r.selectWeek(s));
      })("mouseenter", function () {
        f(n);
        let s = u(2).$implicit,
          r = u();
        return g(r.weekHoverHandler(s, !0));
      })("mouseleave", function () {
        f(n);
        let s = u(2).$implicit,
          r = u();
        return g(r.weekHoverHandler(s, !1));
      }),
      c(1),
      d());
  }
  if (e & 2) {
    let n = u(2).index,
      i = u();
    (h(), A(i.calendar.weekNumbers[n]));
  }
}
function km(e, t) {
  if (
    (e & 1 &&
      (l(0, "td", 8), C(1, Dm, 2, 1, "span", 9)(2, Mm, 2, 1, "span", 10), d()),
    e & 2)
  ) {
    let n = u(2);
    (M("active-week", n.isWeekHovered),
      h(),
      _("ngIf", n.isiOS),
      h(),
      _("ngIf", !n.isiOS));
  }
}
function Sm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "span", 17),
      y("click", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.selectDay(s));
      })("mouseenter", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.hoverDay(s, !0));
      })("mouseleave", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.hoverDay(s, !1));
      }),
      c(1),
      d());
  }
  if (e & 2) {
    let n = u().$implicit;
    (_("tooltip", io(n.tooltipText))("day", n), h(), re("", n.label, " 3"));
  }
}
function xm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "span", 18),
      y("click", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.selectDay(s));
      })("mouseenter", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.hoverDay(s, !0));
      })("mouseleave", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.hoverDay(s, !1));
      }),
      c(1),
      d());
  }
  if (e & 2) {
    let n = u().$implicit;
    (_("day", n), h(), re("", n.label, " 2"));
  }
}
function Tm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "span", 19),
      y("click", function () {
        f(n);
        let s = u().$implicit,
          r = u(2);
        return g(r.selectDay(s));
      }),
      c(1),
      d());
  }
  if (e & 2) {
    let n = u().$implicit;
    (_("day", n), h(), re("", n.label, " 1"));
  }
}
function Em(e, t) {
  if (
    (e & 1 &&
      (l(0, "td", 13),
      C(1, Sm, 2, 4, "span", 14)(2, xm, 2, 2, "span", 15)(
        3,
        Tm,
        2,
        2,
        "span",
        16,
      ),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(),
      _("ngIf", !n.isiOS && n.isShowTooltip),
      h(),
      _("ngIf", !n.isiOS && !n.isShowTooltip),
      h(),
      _("ngIf", n.isiOS));
  }
}
function Lm(e, t) {
  if (
    (e & 1 && (l(0, "tr"), C(1, km, 3, 4, "td", 6)(2, Em, 4, 3, "td", 7), d()),
    e & 2)
  ) {
    let n = t.$implicit,
      i = u();
    (h(),
      _("ngIf", i.options && i.options.showWeekNumbers),
      h(),
      _("ngForOf", n.days));
  }
}
var pl = ["startTP"];
function Im(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-days-calendar-view", 13),
      N(1, "async"),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.dayHoverHandler(s));
      })("onHoverWeek", function (s) {
        f(n);
        let r = u(3);
        return g(r.weekHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.daySelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars),
      _("calendar", n)("isDisabled", i.isDatePickerDisabled)(
        "options",
        B(1, 5, i.options$),
      ));
  }
}
function Vm(e, t) {
  if ((e & 1 && w(0, "timepicker", 15, 1), e & 2)) {
    let n = u(4);
    _("disabled", n.isDatePickerDisabled);
  }
}
function Om(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 14),
      w(1, "timepicker", 15, 0),
      C(3, Vm, 2, 1, "timepicker", 16),
      d()),
    e & 2)
  ) {
    let n = u(3);
    (h(),
      _("disabled", n.isDatePickerDisabled),
      h(2),
      _("ngIf", n.isRangePicker));
  }
}
function Ym(e, t) {
  if (
    (e & 1 &&
      (ht(0),
      l(1, "div", 10),
      C(2, Im, 2, 7, "bs-days-calendar-view", 11),
      N(3, "async"),
      d(),
      C(4, Om, 4, 2, "div", 12),
      mt()),
    e & 2)
  ) {
    let n = u(2);
    (h(2),
      _("ngForOf", B(3, 2, n.daysCalendar$)),
      h(2),
      _("ngIf", n.withTimepicker));
  }
}
function Am(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-month-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function Pm(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, Am, 1, 3, "bs-month-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.monthsCalendar)));
  }
}
function Fm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-years-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function Hm(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, Fm, 1, 3, "bs-years-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.yearsCalendar)));
  }
}
function Rm(e, t) {
  e & 1 &&
    (l(0, "div", 19)(1, "button", 20),
    c(2, "Apply"),
    d(),
    l(3, "button", 21),
    c(4, "Cancel"),
    d()());
}
function jm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 24)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.setToday());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("today-left", n.todayPos === "left")(
      "today-right",
      n.todayPos === "right",
    )("today-center", n.todayPos === "center"),
      h(2),
      A(n.todayBtnLbl));
  }
}
function Nm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 26)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.clearDate());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("clear-left", n.clearPos === "left")(
      "clear-right",
      n.clearPos === "right",
    )("clear-center", n.clearPos === "center"),
      h(2),
      A(n.clearBtnLbl));
  }
}
function Bm(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 19), C(1, jm, 3, 7, "div", 22)(2, Nm, 3, 7, "div", 23), d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngIf", n.showTodayBtn), h(), _("ngIf", n.showClearBtn));
  }
}
function Wm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 27)(1, "bs-custom-date-view", 28),
      y("onSelect", function (s) {
        f(n);
        let r = u(2);
        return g(r.setRangeOnCalendar(s));
      }),
      d()());
  }
  if (e & 2) {
    let n = u(2);
    (h(),
      _("selectedRange", n.chosenRange)("ranges", n.customRanges)(
        "customRangeLabel",
        n.customRangeBtnLbl,
      ));
  }
}
function $m(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 3)(1, "div", 4),
      y("@datepickerAnimation.done", function () {
        f(n);
        let s = u();
        return g(s.positionServiceEnable());
      }),
      l(2, "div", 5),
      N(3, "async"),
      C(4, Ym, 5, 4, "ng-container", 6)(5, Pm, 3, 3, "div", 7)(
        6,
        Hm,
        3,
        3,
        "div",
        7,
      ),
      d(),
      C(7, Rm, 5, 0, "div", 8)(8, Bm, 3, 2, "div", 8),
      d(),
      C(9, Wm, 2, 3, "div", 9),
      d());
  }
  if (e & 2) {
    let n = u();
    (_("ngClass", n.containerClass),
      h(),
      _("@datepickerAnimation", n.animationState),
      h(),
      _("ngSwitch", B(3, 9, n.viewMode)),
      h(2),
      _("ngSwitchCase", "day"),
      h(),
      _("ngSwitchCase", "month"),
      h(),
      _("ngSwitchCase", "year"),
      h(),
      _("ngIf", !1),
      h(),
      _("ngIf", n.showTodayBtn || n.showClearBtn),
      h(),
      _("ngIf", n.customRanges && n.customRanges.length > 0));
  }
}
function Um(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-days-calendar-view", 13),
      N(1, "async"),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.dayHoverHandler(s));
      })("onHoverWeek", function (s) {
        f(n);
        let r = u(3);
        return g(r.weekHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.daySelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars),
      _("calendar", n)("isDisabled", i.isDatePickerDisabled)(
        "options",
        B(1, 5, i.options$),
      ));
  }
}
function zm(e, t) {
  if ((e & 1 && w(0, "timepicker", 15, 1), e & 2)) {
    let n = u(4);
    _("disabled", n.isDatePickerDisabled);
  }
}
function Gm(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 14),
      w(1, "timepicker", 15, 0),
      C(3, zm, 2, 1, "timepicker", 16),
      d()),
    e & 2)
  ) {
    let n = u(3);
    (h(),
      _("disabled", n.isDatePickerDisabled),
      h(2),
      _("ngIf", n.isRangePicker));
  }
}
function qm(e, t) {
  if (
    (e & 1 &&
      (ht(0),
      l(1, "div", 10),
      C(2, Um, 2, 7, "bs-days-calendar-view", 11),
      N(3, "async"),
      d(),
      C(4, Gm, 4, 2, "div", 12),
      mt()),
    e & 2)
  ) {
    let n = u(2);
    (h(2),
      _("ngForOf", B(3, 2, n.daysCalendar$)),
      h(2),
      _("ngIf", n.withTimepicker));
  }
}
function Jm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-month-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function Km(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, Jm, 1, 3, "bs-month-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.monthsCalendar)));
  }
}
function Qm(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-years-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function Xm(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, Qm, 1, 3, "bs-years-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.yearsCalendar)));
  }
}
function Zm(e, t) {
  e & 1 &&
    (l(0, "div", 19)(1, "button", 20),
    c(2, "Apply"),
    d(),
    l(3, "button", 21),
    c(4, "Cancel"),
    d()());
}
function e_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 24)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.setToday());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("today-left", n.todayPos === "left")(
      "today-right",
      n.todayPos === "right",
    )("today-center", n.todayPos === "center"),
      h(2),
      A(n.todayBtnLbl));
  }
}
function t_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 26)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.clearDate());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("clear-left", n.clearPos === "left")(
      "clear-right",
      n.clearPos === "right",
    )("clear-center", n.clearPos === "center"),
      h(2),
      A(n.clearBtnLbl));
  }
}
function i_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 19), C(1, e_, 3, 7, "div", 22)(2, t_, 3, 7, "div", 23), d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngIf", n.showTodayBtn), h(), _("ngIf", n.showClearBtn));
  }
}
function n_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 27)(1, "bs-custom-date-view", 28),
      y("onSelect", function (s) {
        f(n);
        let r = u(2);
        return g(r.setRangeOnCalendar(s));
      }),
      d()());
  }
  if (e & 2) {
    let n = u(2);
    (h(),
      _("selectedRange", n.chosenRange)("ranges", n.customRanges)(
        "customRangeLabel",
        n.customRangeBtnLbl,
      ));
  }
}
function s_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 3)(1, "div", 4),
      y("@datepickerAnimation.done", function () {
        f(n);
        let s = u();
        return g(s.positionServiceEnable());
      }),
      l(2, "div", 5),
      N(3, "async"),
      C(4, qm, 5, 4, "ng-container", 6)(5, Km, 3, 3, "div", 7)(
        6,
        Xm,
        3,
        3,
        "div",
        7,
      ),
      d(),
      C(7, Zm, 5, 0, "div", 8)(8, i_, 3, 2, "div", 8),
      d(),
      C(9, n_, 2, 3, "div", 9),
      d());
  }
  if (e & 2) {
    let n = u();
    (_("ngClass", n.containerClass),
      h(),
      _("@datepickerAnimation", n.animationState),
      h(),
      _("ngSwitch", B(3, 9, n.viewMode)),
      h(2),
      _("ngSwitchCase", "day"),
      h(),
      _("ngSwitchCase", "month"),
      h(),
      _("ngSwitchCase", "year"),
      h(),
      _("ngIf", !1),
      h(),
      _("ngIf", n.showTodayBtn || n.showClearBtn),
      h(),
      _("ngIf", n.customRanges && n.customRanges.length > 0));
  }
}
var r_ = ["endTP"];
function o_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-days-calendar-view", 13),
      N(1, "async"),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.dayHoverHandler(s));
      })("onHoverWeek", function (s) {
        f(n);
        let r = u(3);
        return g(r.weekHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.daySelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars),
      _("calendar", n)("isDisabled", i.isDatePickerDisabled)(
        "options",
        B(1, 5, i.options$),
      ));
  }
}
function a_(e, t) {
  if ((e & 1 && w(0, "timepicker", 15, 1), e & 2)) {
    let n = u(4);
    _("disabled", n.isDatePickerDisabled);
  }
}
function l_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 14),
      w(1, "timepicker", 15, 0),
      C(3, a_, 2, 1, "timepicker", 16),
      d()),
    e & 2)
  ) {
    let n = u(3);
    (h(),
      _("disabled", n.isDatePickerDisabled),
      h(2),
      _("ngIf", n.isRangePicker));
  }
}
function d_(e, t) {
  if (
    (e & 1 &&
      (ht(0),
      l(1, "div", 10),
      C(2, o_, 2, 7, "bs-days-calendar-view", 11),
      N(3, "async"),
      d(),
      C(4, l_, 4, 2, "div", 12),
      mt()),
    e & 2)
  ) {
    let n = u(2);
    (h(2),
      _("ngForOf", B(3, 2, n.daysCalendar$)),
      h(2),
      _("ngIf", n.withTimepicker));
  }
}
function c_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-month-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function u_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, c_, 1, 3, "bs-month-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.monthsCalendar)));
  }
}
function h_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-years-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function m_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, h_, 1, 3, "bs-years-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.yearsCalendar)));
  }
}
function __(e, t) {
  e & 1 &&
    (l(0, "div", 19)(1, "button", 20),
    c(2, "Apply"),
    d(),
    l(3, "button", 21),
    c(4, "Cancel"),
    d()());
}
function p_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 24)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.setToday());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("today-left", n.todayPos === "left")(
      "today-right",
      n.todayPos === "right",
    )("today-center", n.todayPos === "center"),
      h(2),
      A(n.todayBtnLbl));
  }
}
function f_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 26)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.clearDate());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("clear-left", n.clearPos === "left")(
      "clear-right",
      n.clearPos === "right",
    )("clear-center", n.clearPos === "center"),
      h(2),
      A(n.clearBtnLbl));
  }
}
function g_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 19), C(1, p_, 3, 7, "div", 22)(2, f_, 3, 7, "div", 23), d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngIf", n.showTodayBtn), h(), _("ngIf", n.showClearBtn));
  }
}
function v_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 27)(1, "bs-custom-date-view", 28),
      y("onSelect", function (s) {
        f(n);
        let r = u(2);
        return g(r.setRangeOnCalendar(s));
      }),
      d()());
  }
  if (e & 2) {
    let n = u(2);
    (h(),
      _("selectedRange", n.chosenRange)("ranges", n.customRanges)(
        "customRangeLabel",
        n.customRangeBtnLbl,
      ));
  }
}
function y_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 3)(1, "div", 4),
      y("@datepickerAnimation.done", function () {
        f(n);
        let s = u();
        return g(s.positionServiceEnable());
      }),
      l(2, "div", 5),
      N(3, "async"),
      C(4, d_, 5, 4, "ng-container", 6)(5, u_, 3, 3, "div", 7)(
        6,
        m_,
        3,
        3,
        "div",
        7,
      ),
      d(),
      C(7, __, 5, 0, "div", 8)(8, g_, 3, 2, "div", 8),
      d(),
      C(9, v_, 2, 3, "div", 9),
      d());
  }
  if (e & 2) {
    let n = u();
    (_("ngClass", n.containerClass),
      h(),
      _("@datepickerAnimation", n.animationState),
      h(),
      _("ngSwitch", B(3, 9, n.viewMode)),
      h(2),
      _("ngSwitchCase", "day"),
      h(),
      _("ngSwitchCase", "month"),
      h(),
      _("ngSwitchCase", "year"),
      h(),
      _("ngIf", !1),
      h(),
      _("ngIf", n.showTodayBtn || n.showClearBtn),
      h(),
      _("ngIf", n.customRanges && n.customRanges.length > 0));
  }
}
function b_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-days-calendar-view", 13),
      N(1, "async"),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.dayHoverHandler(s));
      })("onHoverWeek", function (s) {
        f(n);
        let r = u(3);
        return g(r.weekHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.daySelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars),
      _("calendar", n)("isDisabled", i.isDatePickerDisabled)(
        "options",
        B(1, 5, i.options$),
      ));
  }
}
function C_(e, t) {
  if ((e & 1 && w(0, "timepicker", 15, 1), e & 2)) {
    let n = u(4);
    _("disabled", n.isDatePickerDisabled);
  }
}
function w_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 14),
      w(1, "timepicker", 15, 0),
      C(3, C_, 2, 1, "timepicker", 16),
      d()),
    e & 2)
  ) {
    let n = u(3);
    (h(),
      _("disabled", n.isDatePickerDisabled),
      h(2),
      _("ngIf", n.isRangePicker));
  }
}
function D_(e, t) {
  if (
    (e & 1 &&
      (ht(0),
      l(1, "div", 10),
      C(2, b_, 2, 7, "bs-days-calendar-view", 11),
      N(3, "async"),
      d(),
      C(4, w_, 4, 2, "div", 12),
      mt()),
    e & 2)
  ) {
    let n = u(2);
    (h(2),
      _("ngForOf", B(3, 2, n.daysCalendar$)),
      h(2),
      _("ngIf", n.withTimepicker));
  }
}
function M_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-month-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.monthSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function k_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, M_, 1, 3, "bs-month-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.monthsCalendar)));
  }
}
function S_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "bs-years-calendar-view", 18),
      y("onNavigate", function (s) {
        f(n);
        let r = u(3);
        return g(r.navigateTo(s));
      })("onViewMode", function (s) {
        f(n);
        let r = u(3);
        return g(r.setViewMode(s));
      })("onHover", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearHoverHandler(s));
      })("onSelect", function (s) {
        f(n);
        let r = u(3);
        return g(r.yearSelectHandler(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = u(3);
    (M("bs-datepicker-multiple", i.multipleCalendars), _("calendar", n));
  }
}
function x_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 10),
      C(1, S_, 1, 3, "bs-years-calendar-view", 17),
      N(2, "async"),
      d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngForOf", B(2, 1, n.yearsCalendar)));
  }
}
function T_(e, t) {
  e & 1 &&
    (l(0, "div", 19)(1, "button", 20),
    c(2, "Apply"),
    d(),
    l(3, "button", 21),
    c(4, "Cancel"),
    d()());
}
function E_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 24)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.setToday());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("today-left", n.todayPos === "left")(
      "today-right",
      n.todayPos === "right",
    )("today-center", n.todayPos === "center"),
      h(2),
      A(n.todayBtnLbl));
  }
}
function L_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 26)(1, "button", 25),
      y("click", function () {
        f(n);
        let s = u(3);
        return g(s.clearDate());
      }),
      c(2),
      d()());
  }
  if (e & 2) {
    let n = u(3);
    (M("clear-left", n.clearPos === "left")(
      "clear-right",
      n.clearPos === "right",
    )("clear-center", n.clearPos === "center"),
      h(2),
      A(n.clearBtnLbl));
  }
}
function I_(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 19), C(1, E_, 3, 7, "div", 22)(2, L_, 3, 7, "div", 23), d()),
    e & 2)
  ) {
    let n = u(2);
    (h(), _("ngIf", n.showTodayBtn), h(), _("ngIf", n.showClearBtn));
  }
}
function V_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 27)(1, "bs-custom-date-view", 28),
      y("onSelect", function (s) {
        f(n);
        let r = u(2);
        return g(r.setRangeOnCalendar(s));
      }),
      d()());
  }
  if (e & 2) {
    let n = u(2);
    (h(),
      _("selectedRange", n.chosenRange)("ranges", n.customRanges)(
        "customRangeLabel",
        n.customRangeBtnLbl,
      ));
  }
}
function O_(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "div", 3)(1, "div", 4),
      y("@datepickerAnimation.done", function () {
        f(n);
        let s = u();
        return g(s.positionServiceEnable());
      }),
      l(2, "div", 5),
      N(3, "async"),
      C(4, D_, 5, 4, "ng-container", 6)(5, k_, 3, 3, "div", 7)(
        6,
        x_,
        3,
        3,
        "div",
        7,
      ),
      d(),
      C(7, T_, 5, 0, "div", 8)(8, I_, 3, 2, "div", 8),
      d(),
      C(9, V_, 2, 3, "div", 9),
      d());
  }
  if (e & 2) {
    let n = u();
    (_("ngClass", n.containerClass),
      h(),
      _("@datepickerAnimation", n.animationState),
      h(),
      _("ngSwitch", B(3, 9, n.viewMode)),
      h(2),
      _("ngSwitchCase", "day"),
      h(),
      _("ngSwitchCase", "month"),
      h(),
      _("ngSwitchCase", "year"),
      h(),
      _("ngIf", !1),
      h(),
      _("ngIf", n.showTodayBtn || n.showClearBtn),
      h(),
      _("ngIf", n.customRanges && n.customRanges.length > 0));
  }
}
var nt = (() => {
    let t = class t {
      constructor() {
        ((this.adaptivePosition = !1),
          (this.useUtc = !1),
          (this.isAnimated = !1),
          (this.startView = "day"),
          (this.returnFocusToInput = !1),
          (this.containerClass = "theme-green"),
          (this.displayMonths = 1),
          (this.showWeekNumbers = !0),
          (this.dateInputFormat = "L"),
          (this.rangeSeparator = " - "),
          (this.rangeInputFormat = "L"),
          (this.monthTitle = "MMMM"),
          (this.yearTitle = "YYYY"),
          (this.dayLabel = "D"),
          (this.monthLabel = "MMMM"),
          (this.yearLabel = "YYYY"),
          (this.weekNumbers = "w"),
          (this.showTodayButton = !1),
          (this.showClearButton = !1),
          (this.todayPosition = "center"),
          (this.clearPosition = "right"),
          (this.todayButtonLabel = "Today"),
          (this.clearButtonLabel = "Clear"),
          (this.customRangeButtonLabel = "Custom Range"),
          (this.withTimepicker = !1),
          (this.allowedPositions = ["top", "bottom"]),
          (this.keepDatepickerOpened = !1),
          (this.keepDatesOutOfRules = !1));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  cl = "220ms cubic-bezier(0, 0, 0.2, 1)",
  ns = gs("datepickerAnimation", [
    Tn("animated-down", Te({ height: "*", overflow: "hidden" })),
    en("* => animated-down", [Te({ height: 0, overflow: "hidden" }), st(cl)]),
    Tn("animated-up", Te({ height: "*", overflow: "hidden" })),
    en("* => animated-up", [Te({ height: "*", overflow: "hidden" }), st(cl)]),
    en("* => unanimated", st("0s")),
  ]),
  is = class {
    constructor() {
      ((this.containerClass = ""),
        (this.customRanges = []),
        (this.chosenRange = []),
        (this._daysCalendarSub = new Fi()),
        (this.selectedTimeSub = new Fi()));
    }
    set minDate(t) {
      this._effects?.setMinDate(t);
    }
    set maxDate(t) {
      this._effects?.setMaxDate(t);
    }
    set daysDisabled(t) {
      this._effects?.setDaysDisabled(t);
    }
    set datesDisabled(t) {
      this._effects?.setDatesDisabled(t);
    }
    set datesEnabled(t) {
      this._effects?.setDatesEnabled(t);
    }
    set isDisabled(t) {
      this._effects?.setDisabled(t);
    }
    set dateCustomClasses(t) {
      this._effects?.setDateCustomClasses(t);
    }
    set dateTooltipTexts(t) {
      this._effects?.setDateTooltipTexts(t);
    }
    set daysCalendar$(t) {
      ((this._daysCalendar$ = t),
        this._daysCalendarSub.unsubscribe(),
        this._daysCalendarSub.add(
          this._daysCalendar$.subscribe((n) => {
            this.multipleCalendars = !!n && n.length > 1;
          }),
        ));
    }
    get daysCalendar$() {
      return this._daysCalendar$;
    }
    setViewMode(t) {}
    navigateTo(t) {}
    dayHoverHandler(t) {}
    weekHoverHandler(t) {}
    monthHoverHandler(t) {}
    yearHoverHandler(t) {}
    timeSelectHandler(t, n) {}
    daySelectHandler(t) {}
    monthSelectHandler(t) {}
    yearSelectHandler(t) {}
    setRangeOnCalendar(t) {}
    setToday() {}
    clearDate() {}
    _stopPropagation(t) {
      t.stopPropagation();
    }
  },
  X = (() => {
    let t = class t {
      calculate() {
        return { type: t.CALCULATE };
      }
      format() {
        return { type: t.FORMAT };
      }
      flag() {
        return { type: t.FLAG };
      }
      select(i) {
        return { type: t.SELECT, payload: i };
      }
      selectTime(i, s) {
        return { type: t.SELECT_TIME, payload: { date: i, index: s } };
      }
      changeViewMode(i) {
        return { type: t.CHANGE_VIEWMODE, payload: i };
      }
      navigateTo(i) {
        return { type: t.NAVIGATE_TO, payload: i };
      }
      navigateStep(i) {
        return { type: t.NAVIGATE_OFFSET, payload: i };
      }
      setOptions(i) {
        return { type: t.SET_OPTIONS, payload: i };
      }
      selectRange(i) {
        return { type: t.SELECT_RANGE, payload: i };
      }
      hoverDay(i) {
        return { type: t.HOVER, payload: i.isHovered ? i.cell.date : null };
      }
      minDate(i) {
        return { type: t.SET_MIN_DATE, payload: i };
      }
      maxDate(i) {
        return { type: t.SET_MAX_DATE, payload: i };
      }
      daysDisabled(i) {
        return { type: t.SET_DAYSDISABLED, payload: i };
      }
      datesDisabled(i) {
        return { type: t.SET_DATESDISABLED, payload: i };
      }
      datesEnabled(i) {
        return { type: t.SET_DATESENABLED, payload: i };
      }
      isDisabled(i) {
        return { type: t.SET_IS_DISABLED, payload: i };
      }
      setDateCustomClasses(i) {
        return { type: t.SET_DATE_CUSTOM_CLASSES, payload: i };
      }
      setDateTooltipTexts(i) {
        return { type: t.SET_DATE_TOOLTIP_TEXTS, payload: i };
      }
      setLocale(i) {
        return { type: t.SET_LOCALE, payload: i };
      }
    };
    ((t.CALCULATE = "[datepicker] calculate dates matrix"),
      (t.FORMAT = "[datepicker] format datepicker values"),
      (t.FLAG = "[datepicker] set flags"),
      (t.SELECT = "[datepicker] select date"),
      (t.NAVIGATE_OFFSET = "[datepicker] shift view date"),
      (t.NAVIGATE_TO = "[datepicker] change view date"),
      (t.SET_OPTIONS = "[datepicker] update render options"),
      (t.HOVER = "[datepicker] hover date"),
      (t.CHANGE_VIEWMODE = "[datepicker] switch view mode"),
      (t.SET_MIN_DATE = "[datepicker] set min date"),
      (t.SET_MAX_DATE = "[datepicker] set max date"),
      (t.SET_DAYSDISABLED = "[datepicker] set days disabled"),
      (t.SET_DATESDISABLED = "[datepicker] set dates disabled"),
      (t.SET_DATESENABLED = "[datepicker] set dates enabled"),
      (t.SET_IS_DISABLED = "[datepicker] set is disabled"),
      (t.SET_DATE_CUSTOM_CLASSES = "[datepicker] set date custom classes"),
      (t.SET_DATE_TOOLTIP_TEXTS = "[datepicker] set date tooltip texts"),
      (t.SET_LOCALE = "[datepicker] set datepicker locale"),
      (t.SELECT_TIME = "[datepicker] select time"),
      (t.SELECT_RANGE = "[daterangepicker] select dates range"),
      (t.ɵfac = function (s) {
        return new (s || t)();
      }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  Mr = (() => {
    let t = class t {
      constructor() {
        ((this._defaultLocale = "en"),
          (this._locale = new lt(this._defaultLocale)),
          (this._localeChange = this._locale.asObservable()));
      }
      get locale() {
        return this._locale;
      }
      get localeChange() {
        return this._localeChange;
      }
      get currentLocale() {
        return this._locale.getValue();
      }
      use(i) {
        i !== this.currentLocale && this._locale.next(i);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  Ht = (() => {
    let t = class t {
      constructor(i, s) {
        ((this._actions = i), (this._localeService = s), (this._subs = []));
      }
      init(i) {
        return ((this._store = i), this);
      }
      setValue(i) {
        this._store?.dispatch(this._actions.select(i));
      }
      setRangeValue(i) {
        this._store?.dispatch(this._actions.selectRange(i));
      }
      setMinDate(i) {
        return (this._store?.dispatch(this._actions.minDate(i)), this);
      }
      setMaxDate(i) {
        return (this._store?.dispatch(this._actions.maxDate(i)), this);
      }
      setDaysDisabled(i) {
        return (this._store?.dispatch(this._actions.daysDisabled(i)), this);
      }
      setDatesDisabled(i) {
        return (this._store?.dispatch(this._actions.datesDisabled(i)), this);
      }
      setDatesEnabled(i) {
        return (this._store?.dispatch(this._actions.datesEnabled(i)), this);
      }
      setDisabled(i) {
        return (this._store?.dispatch(this._actions.isDisabled(i)), this);
      }
      setDateCustomClasses(i) {
        return (
          this._store?.dispatch(this._actions.setDateCustomClasses(i)),
          this
        );
      }
      setDateTooltipTexts(i) {
        return (
          this._store?.dispatch(this._actions.setDateTooltipTexts(i)),
          this
        );
      }
      setOptions(i) {
        let s = Object.assign({ locale: this._localeService.currentLocale }, i);
        return (this._store?.dispatch(this._actions.setOptions(s)), this);
      }
      setBindings(i) {
        return this._store
          ? ((i.selectedTime = this._store
              .select((s) => s.selectedTime)
              .pipe(fe((s) => !!s))),
            (i.daysCalendar$ = this._store
              .select((s) => s.flaggedMonths)
              .pipe(fe((s) => !!s))),
            (i.monthsCalendar = this._store
              .select((s) => s.flaggedMonthsCalendar)
              .pipe(fe((s) => !!s))),
            (i.yearsCalendar = this._store
              .select((s) => s.yearsCalendarFlagged)
              .pipe(fe((s) => !!s))),
            (i.viewMode = this._store.select((s) => s.view?.mode)),
            (i.options$ = zr([
              this._store.select((s) => s.showWeekNumbers),
              this._store.select((s) => s.displayMonths),
            ]).pipe(
              Hi((s) => ({ showWeekNumbers: s[0], displayMonths: s[1] })),
            )),
            this)
          : this;
      }
      setEventHandlers(i) {
        return (
          (i.setViewMode = (s) => {
            this._store?.dispatch(this._actions.changeViewMode(s));
          }),
          (i.navigateTo = (s) => {
            this._store?.dispatch(this._actions.navigateStep(s.step));
          }),
          (i.dayHoverHandler = (s) => {
            let r = s.cell;
            r.isOtherMonth ||
              r.isDisabled ||
              (this._store?.dispatch(this._actions.hoverDay(s)),
              (r.isHovered = s.isHovered));
          }),
          (i.monthHoverHandler = (s) => {
            s.cell.isHovered = s.isHovered;
          }),
          (i.yearHoverHandler = (s) => {
            s.cell.isHovered = s.isHovered;
          }),
          this
        );
      }
      registerDatepickerSideEffects() {
        return this._store
          ? (this._subs.push(
              this._store
                .select((i) => i.view)
                .subscribe(() => {
                  this._store?.dispatch(this._actions.calculate());
                }),
            ),
            this._subs.push(
              this._store
                .select((i) => i.monthsModel)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.format())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.formattedMonths)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.selectedDate)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.selectedRange)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.monthsCalendar)
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.yearsCalendarModel)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.hoveredDate)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.dateCustomClasses)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._store
                .select((i) => i.dateTooltipTexts)
                .pipe(fe((i) => !!i))
                .subscribe(() => this._store?.dispatch(this._actions.flag())),
            ),
            this._subs.push(
              this._localeService.localeChange.subscribe((i) =>
                this._store?.dispatch(this._actions.setLocale(i)),
              ),
            ),
            this)
          : this;
      }
      destroy() {
        for (let i of this._subs) i.unsubscribe();
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(j(X), j(Mr));
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  Y_ = { width: 7, height: 6 },
  A_ = 24 * 60 * 60 * 1e3;
var P_ = { date: new Date(), mode: "day" },
  fl = Object.assign(new nt(), {
    locale: "en",
    view: P_,
    selectedRange: [],
    selectedTime: [],
    monthViewOptions: Y_,
  });
function F_(e, t) {
  if (xa(e, t.firstDayOfWeek)) return e;
  let n = it(e),
    i = H_(n, t.firstDayOfWeek);
  return de(e, { day: -i });
}
function H_(e, t) {
  let n = Number(t);
  if (isNaN(n)) return 0;
  if (n === 0) return e;
  let i = e - (n % 7);
  return i < 0 ? i + 7 : i;
}
function wr(e, t, n) {
  let i = t && At(gn(e, "month"), t, "day"),
    s = n && Ct(at(e, "month"), n, "day");
  return i || s || !1;
}
function yn(e, t, n) {
  let i = t && At(gn(e, "year"), t, "day"),
    s = n && Ct(at(e, "year"), n, "day");
  return i || s || !1;
}
function kr(e, t, n) {
  return !t || !z(t) || !t.length
    ? !1
    : n && n === "year" && !t[0].getDate()
      ? t.some((i) => vn(e, i, "year"))
      : t.some((i) => vn(e, i, "date"));
}
function Sr(e, t, n) {
  return !t || !z(t) || !t.length ? !1 : !t.some((i) => vn(e, i, n || "date"));
}
function gl(e, t = 0) {
  let n = e && e.yearsCalendarModel && e.yearsCalendarModel[t];
  return n?.years[0] && n.years[0][0] && n.years[0][0].date;
}
function R_(e, t) {
  return (
    !e ||
      !t ||
      (!e.length && !e[0].value) ||
      e.forEach(
        (n) => (
          !n ||
            !n.value ||
            n.value instanceof Date ||
            !(n.value instanceof Array && n.value.length) ||
            (n.value = yl(n.value, t)),
          e
        ),
      ),
    e
  );
}
function vl(e, t) {
  return !e || !t || (e instanceof Array && !e.length) || e instanceof Date
    ? e
    : yl(e, t);
}
function yl(e, t) {
  return e instanceof Array
    ? e.map((i) => i && (Ct(i, t, "date") && (i = t), i))
    : e;
}
function ul(e) {
  return e && bl(e);
}
function hl(e) {
  return (e?.length && e.map((t) => t && bl(t)), e);
}
function bl(e) {
  let t = new Date();
  return (
    e.setMilliseconds(t.getMilliseconds()),
    e.setSeconds(t.getSeconds()),
    e.setMinutes(t.getMinutes()),
    e.setHours(t.getHours()),
    e
  );
}
function xr(e, t) {
  let n = e.initialDate,
    i = new Array(e.height);
  for (let s = 0; s < e.height; s++) {
    i[s] = new Array(e.width);
    for (let r = 0; r < e.width; r++) ((i[s][r] = t(n)), (n = de(n, e.shift)));
  }
  return i;
}
function br(e, t) {
  let n = Sa(e),
    i = F_(n, t),
    s = {
      width: t.width || 0,
      height: t.height || 0,
      initialDate: i,
      shift: { day: 1 },
    };
  return { daysMatrix: xr(s, (o) => o), month: n };
}
function j_(e, t, n) {
  return {
    month: e.month,
    monthTitle: Ye(e.month, t.monthTitle, t.locale),
    yearTitle: Ye(e.month, t.yearTitle, t.locale),
    weekNumbers: N_(e.daysMatrix, t.weekNumbers, t.locale),
    weekdays: B_(t.locale),
    weeks: e.daysMatrix.map((i, s) => ({
      days: i.map((r, o) => ({
        date: r,
        label: Ye(r, t.dayLabel, t.locale),
        monthIndex: n,
        weekIndex: s,
        dayIndex: o,
      })),
    })),
    hideLeftArrow: !1,
    hideRightArrow: !1,
    disableLeftArrow: !1,
    disableRightArrow: !1,
  };
}
function N_(e, t, n) {
  return e.map((i) => (i[0] ? Ye(i[0], t, n) : ""));
}
function B_(e) {
  let t = _e(e),
    n = t.weekdaysShort(),
    i = t.firstDayOfWeek();
  return [...n.slice(i), ...n.slice(0, i)];
}
function W_(e, t) {
  return (
    e.weeks.forEach((n) => {
      n.days.forEach((i, s) => {
        let r = !si(i.date, e.month),
          o = !r && bt(i.date, t.hoveredDate),
          a = !r && t.selectedRange && bt(i.date, t.selectedRange[0]),
          m = !r && t.selectedRange && bt(i.date, t.selectedRange[1]),
          p = (!r && bt(i.date, t.selectedDate)) || a || m,
          b =
            !r && t.selectedRange && $_(i.date, t.selectedRange, t.hoveredDate),
          E =
            t.isDisabled ||
            At(i.date, t.minDate, "day") ||
            Ct(i.date, t.maxDate, "day") ||
            za(i.date, t.daysDisabled) ||
            kr(i.date, t.datesDisabled) ||
            Sr(i.date, t.datesEnabled),
          R = new Date(),
          Z = !r && bt(i.date, R),
          Se =
            (t.dateCustomClasses &&
              t.dateCustomClasses
                .map((ce) => (bt(i.date, ce.date) ? ce.classes : []))
                .reduce((ce, oi) => ce.concat(oi), [])
                .join(" ")) ||
            "",
          wt =
            (t.dateTooltipTexts &&
              t.dateTooltipTexts
                .map((ce) => (bt(i.date, ce.date) ? ce.tooltipText : ""))
                .reduce((ce, oi) => (ce.push(oi), ce), [])
                .join(" ")) ||
            "",
          De = Object.assign({}, i, {
            isOtherMonth: r,
            isHovered: o,
            isSelected: p,
            isSelectionStart: a,
            isSelectionEnd: m,
            isInRange: b,
            isDisabled: E,
            isToday: Z,
            customClasses: Se,
            tooltipText: wt,
          });
        (i.isOtherMonth !== De.isOtherMonth ||
          i.isHovered !== De.isHovered ||
          i.isSelected !== De.isSelected ||
          i.isSelectionStart !== De.isSelectionStart ||
          i.isSelectionEnd !== De.isSelectionEnd ||
          i.isDisabled !== De.isDisabled ||
          i.isInRange !== De.isInRange ||
          i.customClasses !== De.customClasses ||
          i.tooltipText !== De.tooltipText) &&
          (n.days[s] = De);
      });
    }),
    (e.hideLeftArrow =
      t.isDisabled ||
      (!!t.monthIndex && t.monthIndex > 0 && t.monthIndex !== t.displayMonths)),
    (e.hideRightArrow =
      t.isDisabled ||
      ((!!t.monthIndex || t.monthIndex === 0) &&
        !!t.displayMonths &&
        t.monthIndex < t.displayMonths &&
        t.monthIndex + 1 !== t.displayMonths)),
    (e.disableLeftArrow = wr(de(e.month, { month: -1 }), t.minDate, t.maxDate)),
    (e.disableRightArrow = wr(de(e.month, { month: 1 }), t.minDate, t.maxDate)),
    e
  );
}
function $_(e, t, n) {
  return !e || !t || !t[0]
    ? !1
    : t[1]
      ? e > t[0] && e <= t[1]
      : n
        ? e > t[0] && e <= n
        : !1;
}
function ml(e, t) {
  return t ? e >= t : !0;
}
var U_ = 4,
  z_ = 3,
  G_ = { month: 1 };
function Cl(e, t) {
  let n = at(e, "year");
  return {
    months: xr({ width: z_, height: U_, initialDate: n, shift: G_ }, (r) => ({
      date: r,
      label: Ye(r, t.monthLabel, t.locale),
    })),
    monthTitle: "",
    yearTitle: Ye(e, t.yearTitle, t.locale),
    hideRightArrow: !1,
    hideLeftArrow: !1,
    disableRightArrow: !1,
    disableLeftArrow: !1,
  };
}
function q_(e, t) {
  return (
    e.months.forEach((n, i) => {
      n.forEach((s, r) => {
        let o,
          a = si(s.date, t.hoveredMonth),
          m =
            t.isDisabled ||
            kr(s.date, t.datesDisabled) ||
            Sr(s.date, t.datesEnabled, "month") ||
            wr(s.date, t.minDate, t.maxDate);
        !t.selectedDate && t.selectedRange
          ? ((o = si(s.date, t.selectedRange[0])),
            o || (o = si(s.date, t.selectedRange[1])))
          : (o = si(s.date, t.selectedDate));
        let p = Object.assign(s, {
          isHovered: a,
          isDisabled: m,
          isSelected: o,
        });
        (s.isHovered !== p.isHovered ||
          s.isDisabled !== p.isDisabled ||
          s.isSelected !== p.isSelected) &&
          (e.months[i][r] = p);
      });
    }),
    (e.hideLeftArrow =
      !!t.monthIndex && t.monthIndex > 0 && t.monthIndex !== t.displayMonths),
    (e.hideRightArrow =
      (!!t.monthIndex || t.monthIndex === 0) &&
      (!!t.displayMonths || t.displayMonths === 0) &&
      t.monthIndex < t.displayMonths &&
      t.monthIndex + 1 !== t.displayMonths),
    (e.disableLeftArrow = yn(
      de(e.months[0][0].date, { year: -1 }),
      t.minDate,
      t.maxDate,
    )),
    (e.disableRightArrow = yn(
      de(e.months[0][0].date, { year: 1 }),
      t.minDate,
      t.maxDate,
    )),
    e
  );
}
var Tr = 4,
  Er = 4,
  ss = Tr * Er,
  wl = (Math.floor(ss / 2) - 1) * -1,
  J_ = { year: 1 };
function Dl(e, t, n) {
  let i = K_(e, n),
    r = xr({ width: Er, height: Tr, initialDate: i, shift: J_ }, (a) => ({
      date: a,
      label: Ye(a, t.yearLabel, t.locale),
    })),
    o = Q_(r, t);
  return {
    years: r,
    monthTitle: "",
    yearTitle: o,
    hideLeftArrow: !1,
    hideRightArrow: !1,
    disableLeftArrow: !1,
    disableRightArrow: !1,
  };
}
function K_(e, t) {
  return t &&
    e.getFullYear() >= t.getFullYear() &&
    e.getFullYear() < t.getFullYear() + ss
    ? t
    : de(e, { year: wl });
}
function Q_(e, t) {
  let n = Ye(e[0][0].date, t.yearTitle, t.locale),
    i = Ye(e[Tr - 1][Er - 1].date, t.yearTitle, t.locale);
  return `${n} - ${i}`;
}
function X_(e, t) {
  (e.years.forEach((s, r) => {
    s.forEach((o, a) => {
      let m,
        p = ri(o.date, t.hoveredYear),
        b =
          t.isDisabled ||
          kr(o.date, t.datesDisabled, "year") ||
          Sr(o.date, t.datesEnabled, "year") ||
          yn(o.date, t.minDate, t.maxDate);
      !t.selectedDate && t.selectedRange
        ? ((m = ri(o.date, t.selectedRange[0])),
          m || (m = ri(o.date, t.selectedRange[1])))
        : (m = ri(o.date, t.selectedDate));
      let E = Object.assign(o, { isHovered: p, isDisabled: b, isSelected: m });
      (o.isHovered !== E.isHovered ||
        o.isDisabled !== E.isDisabled ||
        o.isSelected !== E.isSelected) &&
        (e.years[r][a] = E);
    });
  }),
    (e.hideLeftArrow =
      !!t.yearIndex && t.yearIndex > 0 && t.yearIndex !== t.displayMonths),
    (e.hideRightArrow =
      !!t.yearIndex &&
      !!t.displayMonths &&
      t.yearIndex < t.displayMonths &&
      t.yearIndex + 1 !== t.displayMonths),
    (e.disableLeftArrow = yn(
      de(e.years[0][0].date, { year: -1 }),
      t.minDate,
      t.maxDate,
    )));
  let n = e.years.length - 1,
    i = e.years[n].length - 1;
  return (
    (e.disableRightArrow = yn(
      de(e.years[n][i].date, { year: 1 }),
      t.minDate,
      t.maxDate,
    )),
    e
  );
}
function Dr(e, t) {
  !e ||
    !isNaN(e.getTime()) ||
    (e.setHours(t.getHours()),
    e.setMinutes(t.getMinutes()),
    e.setSeconds(t.getSeconds()),
    e.setMilliseconds(t.getMilliseconds()));
}
function _l(e = fl, t) {
  switch (t.type) {
    case X.CALCULATE:
      return Z_(e);
    case X.FORMAT:
      return ep(e);
    case X.FLAG:
      return tp(e);
    case X.NAVIGATE_OFFSET:
      return ip(e, t);
    case X.NAVIGATE_TO: {
      let n = t.payload;
      if (!e.view || !n.unit) return e;
      let i = Ia(e.view.date, n.unit),
        s,
        r;
      return (
        ml(n.viewMode, e.minMode)
          ? ((r = n.viewMode), (s = { view: { date: i, mode: r } }))
          : ((r = e.view.mode),
            (s = { selectedDate: i, view: { date: i, mode: r } })),
        Object.assign({}, e, s)
      );
    }
    case X.CHANGE_VIEWMODE: {
      if (!ml(t.payload, e.minMode) || !e.view) return e;
      let n = e.view.date,
        i = t.payload;
      return Object.assign({}, e, { view: { date: n, mode: i } });
    }
    case X.HOVER:
      return Object.assign({}, e, { hoveredDate: t.payload });
    case X.SELECT: {
      if (!e.view) return e;
      let n = { selectedDate: t.payload, view: e.view };
      if (Array.isArray(e.selectedTime)) {
        let o = e.selectedTime[0];
        n.selectedDate && o && Dr(n.selectedDate, o);
      }
      let i = e.view.mode,
        s = t.payload || e.view.date,
        r = Cr(s, e.minDate, e.maxDate);
      return ((n.view = { mode: i, date: r }), Object.assign({}, e, n));
    }
    case X.SELECT_TIME: {
      let { date: n, index: i } = t.payload,
        s = e.selectedTime ? [...e.selectedTime] : [];
      return ((s[i] = n), Object.assign({}, e, { selectedTime: s }));
    }
    case X.SET_OPTIONS: {
      if (!e.view) return e;
      let n = t.payload,
        i = n.minMode ? n.minMode : e.view.mode,
        s =
          (yt(n.value) && n.value) ||
          (z(n.value) && yt(n.value[0]) && n.value[0]) ||
          e.view.date,
        r = Cr(s, n.minDate, n.maxDate);
      return (
        (n.view = { mode: i, date: r }),
        n.value &&
          (z(n.value) &&
            ((n.selectedRange = n.value),
            (n.selectedTime = n.value.map((o) => o))),
          n.value instanceof Date &&
            ((n.selectedDate = n.value), (n.selectedTime = [n.value]))),
        Object.assign({}, e, n)
      );
    }
    case X.SELECT_RANGE: {
      if (!e.view) return e;
      let n = { selectedRange: t.payload, view: e.view };
      n.selectedRange?.forEach((o, a) => {
        if (Array.isArray(e.selectedTime)) {
          let m = e.selectedTime[a];
          m && Dr(o, m);
        }
      });
      let i = e.view.mode,
        s = (t.payload && t.payload[0]) || e.view.date,
        r = Cr(s, e.minDate, e.maxDate);
      return ((n.view = { mode: i, date: r }), Object.assign({}, e, n));
    }
    case X.SET_MIN_DATE:
      return Object.assign({}, e, { minDate: t.payload });
    case X.SET_MAX_DATE:
      return Object.assign({}, e, { maxDate: t.payload });
    case X.SET_IS_DISABLED:
      return Object.assign({}, e, { isDisabled: t.payload });
    case X.SET_DATE_CUSTOM_CLASSES:
      return Object.assign({}, e, { dateCustomClasses: t.payload });
    case X.SET_DATE_TOOLTIP_TEXTS:
      return Object.assign({}, e, { dateTooltipTexts: t.payload });
    default:
      return e;
  }
}
function Z_(e) {
  if (!e.view) return e;
  let t;
  e.displayOneMonthRange && Ml(e.view.date, e.minDate, e.maxDate)
    ? (t = 1)
    : (t = e.displayMonths || 1);
  let n = e.view.date;
  if (e.view.mode === "day" && e.monthViewOptions) {
    (e.showPreviousMonth &&
      e.selectedRange &&
      e.selectedRange.length === 0 &&
      (n = de(n, { month: -1 })),
      (e.monthViewOptions.firstDayOfWeek = _e(e.locale).firstDayOfWeek()));
    let i = new Array(t);
    for (let s = 0; s < t; s++)
      ((i[s] = br(n, e.monthViewOptions)), (n = de(n, { month: 1 })));
    if (e.preventChangeToNextMonth && e.flaggedMonths && e.hoveredDate) {
      let s = br(e.view.date, e.monthViewOptions);
      e.flaggedMonths.length &&
        e.flaggedMonths[1].month.getMonth() === s.month.getMonth() &&
        (i = e.flaggedMonths
          .map((r) =>
            e.monthViewOptions ? br(r.month, e.monthViewOptions) : null,
          )
          .filter((r) => r !== null));
    }
    return Object.assign({}, e, { monthsModel: i });
  }
  if (e.view.mode === "month") {
    let i = new Array(t);
    for (let s = 0; s < t; s++)
      ((i[s] = Cl(n, bn(e))), (n = de(n, { year: 1 })));
    return Object.assign({}, e, { monthsCalendar: i });
  }
  if (e.view.mode === "year") {
    let i = new Array(t);
    for (let s = 0; s < t; s++)
      ((i[s] = Dl(n, bn(e), e.minMode === "year" ? gl(e, s) : void 0)),
        (n = de(n, { year: ss })));
    return Object.assign({}, e, { yearsCalendarModel: i });
  }
  return e;
}
function ep(e) {
  if (!e.view) return e;
  if (e.view.mode === "day" && e.monthsModel) {
    let i = e.monthsModel.map((s, r) => j_(s, bn(e), r));
    return Object.assign({}, e, { formattedMonths: i });
  }
  let t = e.displayMonths || 1,
    n = e.view.date;
  if (e.view.mode === "month") {
    let i = new Array(t);
    for (let s = 0; s < t; s++)
      ((i[s] = Cl(n, bn(e))), (n = de(n, { year: 1 })));
    return Object.assign({}, e, { monthsCalendar: i });
  }
  if (e.view.mode === "year") {
    let i = new Array(t);
    for (let s = 0; s < t; s++)
      ((i[s] = Dl(n, bn(e))), (n = de(n, { year: 16 })));
    return Object.assign({}, e, { yearsCalendarModel: i });
  }
  return e;
}
function tp(e) {
  if (!e.view) return e;
  let t = Ml(e.view.date, e.minDate, e.maxDate) ? 1 : e.displayMonths;
  if (e.formattedMonths && e.view.mode === "day") {
    let n = e.formattedMonths.map((i, s) =>
      W_(i, {
        isDisabled: e.isDisabled,
        minDate: e.minDate,
        maxDate: e.maxDate,
        daysDisabled: e.daysDisabled,
        datesDisabled: e.datesDisabled,
        datesEnabled: e.datesEnabled,
        hoveredDate: e.hoveredDate,
        selectedDate: e.selectedDate,
        selectedRange: e.selectedRange,
        displayMonths: t,
        dateCustomClasses: e.dateCustomClasses,
        dateTooltipTexts: e.dateTooltipTexts,
        monthIndex: s,
      }),
    );
    return Object.assign({}, e, { flaggedMonths: n });
  }
  if (e.view.mode === "month" && e.monthsCalendar) {
    let n = e.monthsCalendar.map((i, s) =>
      q_(i, {
        isDisabled: e.isDisabled,
        minDate: e.minDate,
        maxDate: e.maxDate,
        hoveredMonth: e.hoveredMonth,
        selectedDate: e.selectedDate,
        datesDisabled: e.datesDisabled,
        datesEnabled: e.datesEnabled,
        selectedRange: e.selectedRange,
        displayMonths: t,
        monthIndex: s,
      }),
    );
    return Object.assign({}, e, { flaggedMonthsCalendar: n });
  }
  if (e.view.mode === "year" && e.yearsCalendarModel) {
    let n = e.yearsCalendarModel.map((i, s) =>
      X_(i, {
        isDisabled: e.isDisabled,
        minDate: e.minDate,
        maxDate: e.maxDate,
        hoveredYear: e.hoveredYear,
        selectedDate: e.selectedDate,
        datesDisabled: e.datesDisabled,
        datesEnabled: e.datesEnabled,
        selectedRange: e.selectedRange,
        displayMonths: t,
        yearIndex: s,
      }),
    );
    return Object.assign({}, e, { yearsCalendarFlagged: n });
  }
  return e;
}
function ip(e, t) {
  if (!e.view) return e;
  let n = np(e, t);
  if (!n) return e;
  let i = { view: { mode: e.view.mode, date: n } };
  return Object.assign({}, e, i);
}
function np(e, t) {
  if (e.view) {
    if (e.view.mode === "year" && e.minMode === "year") {
      let n = gl(e, 0);
      if (n) {
        let i = de(n, { year: -wl });
        return de(i, t.payload);
      }
    }
    return de(at(e.view.date, "month"), t.payload);
  }
}
function bn(e) {
  return {
    locale: e.locale,
    monthTitle: e.monthTitle,
    yearTitle: e.yearTitle,
    dayLabel: e.dayLabel,
    monthLabel: e.monthLabel,
    yearLabel: e.yearLabel,
    weekNumbers: e.weekNumbers,
  };
}
function Cr(e, t, n) {
  let i = Array.isArray(e) ? e[0] : e;
  return t && Ct(t, i, "day") ? t : n && At(n, i, "day") ? n : i;
}
function Ml(e, t, n) {
  return n && vn(n, e, "day") ? !0 : t && n && t.getMonth() === n.getMonth();
}
var Rt = (() => {
    let t = class t extends Ii {
      constructor() {
        let i = new lt({ type: "[datepicker] dispatcher init" }),
          s = new Li(fl, i, _l);
        super(i, _l, s);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  rs = (() => {
    let t = class t {
      constructor() {
        this.onSelect = new k();
      }
      selectFromRanges(i) {
        this.onSelect.emit(i);
      }
      compareRanges(i) {
        return JSON.stringify(i?.value) === JSON.stringify(this.selectedRange);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-custom-date-view"]],
        inputs: {
          ranges: "ranges",
          selectedRange: "selectedRange",
          customRangeLabel: "customRangeLabel",
        },
        outputs: { onSelect: "onSelect" },
        decls: 2,
        vars: 1,
        consts: [
          [1, "bs-datepicker-predefined-btns"],
          [
            "type",
            "button",
            "class",
            "btn",
            3,
            "selected",
            "click",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["type", "button", 1, "btn", 3, "click"],
        ],
        template: function (s, r) {
          (s & 1 && (l(0, "div", 0), C(1, cm, 2, 3, "button", 1), d()),
            s & 2 && (h(), _("ngForOf", r.ranges)));
        },
        dependencies: [ke],
        encapsulation: 2,
        changeDetection: 0,
      })));
    let e = t;
    return e;
  })(),
  Pi = (function (e) {
    return ((e[(e.UP = 0)] = "UP"), (e[(e.DOWN = 1)] = "DOWN"), e);
  })(Pi || {}),
  Lr = (() => {
    let t = class t {
      constructor() {
        ((this.isDisabled = !1),
          (this.onNavigate = new k()),
          (this.onViewMode = new k()));
      }
      navTo(i) {
        this.onNavigate.emit(i ? Pi.DOWN : Pi.UP);
      }
      view(i) {
        this.isDisabled || this.onViewMode.emit(i);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-datepicker-navigation-view"]],
        inputs: { calendar: "calendar", isDisabled: "isDisabled" },
        outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode" },
        decls: 12,
        vars: 9,
        consts: [
          ["type", "button", 1, "previous", 3, "click", "disabled"],
          [4, "ngIf"],
          ["type", "button", 1, "current", 3, "click", "disabled"],
          ["type", "button", 1, "next", 3, "click", "disabled"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "button", 0),
            y("click", function () {
              return r.navTo(!0);
            }),
            l(1, "span"),
            c(2, "\u2039"),
            d()(),
            C(3, um, 5, 2, "ng-container", 1),
            c(4, " \u200B "),
            l(5, "button", 2),
            y("click", function () {
              return r.view("year");
            }),
            l(6, "span"),
            c(7),
            d()(),
            c(8, " \u200B "),
            l(9, "button", 3),
            y("click", function () {
              return r.navTo(!1);
            }),
            l(10, "span"),
            c(11, "\u203A"),
            d()()),
            s & 2 &&
              (Tt(
                "visibility",
                r.calendar.hideLeftArrow ? "hidden" : "visible",
              ),
              _("disabled", r.calendar.disableLeftArrow),
              h(3),
              _("ngIf", r.calendar && r.calendar.monthTitle),
              h(2),
              _("disabled", r.isDisabled),
              h(2),
              A(r.calendar.yearTitle),
              h(2),
              Tt(
                "visibility",
                r.calendar.hideRightArrow ? "hidden" : "visible",
              ),
              _("disabled", r.calendar.disableRightArrow)));
        },
        dependencies: [me],
        encapsulation: 2,
        changeDetection: 0,
      })));
    let e = t;
    return e;
  })(),
  sp = (() => {
    let t = class t {
      constructor() {
        ((this.ampm = "ok"), (this.hours = 0), (this.minutes = 0));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-timepicker"]],
        decls: 16,
        vars: 3,
        consts: [
          [1, "bs-timepicker-container"],
          [1, "bs-timepicker-controls"],
          ["type", "button", 1, "bs-decrease"],
          ["type", "text", "placeholder", "00", 3, "value"],
          ["type", "button", 1, "bs-increase"],
          ["type", "button", 1, "switch-time-format"],
          [
            "src",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==",
            "alt",
            "",
          ],
        ],
        template: function (s, r) {
          (s & 1 &&
            (Je(0, "div", 0)(1, "div", 1)(2, "button", 2),
            c(3, "-"),
            Ke(),
            ci(4, "input", 3),
            Je(5, "button", 4),
            c(6, "+"),
            Ke()(),
            Je(7, "div", 1)(8, "button", 2),
            c(9, "-"),
            Ke(),
            ci(10, "input", 3),
            Je(11, "button", 4),
            c(12, "+"),
            Ke()(),
            Je(13, "button", 5),
            c(14),
            ci(15, "img", 6),
            Ke()()),
            s & 2 &&
              (h(4),
              fs("value", r.hours),
              h(6),
              fs("value", r.minutes),
              h(4),
              re("", r.ampm, " ")));
        },
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  rp = (() => {
    let t = class t {};
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-current-date"]],
        inputs: { title: "title" },
        decls: 3,
        vars: 1,
        consts: [[1, "current-timedate"]],
        template: function (s, r) {
          (s & 1 && (Je(0, "div", 0)(1, "span"), c(2), Ke()()),
            s & 2 && (h(2), A(r.title)));
        },
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  Ir = (() => {
    let t = class t {};
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-calendar-layout"]],
        ngContentSelectors: mm,
        decls: 6,
        vars: 2,
        consts: [
          ["title", "hey there", 4, "ngIf"],
          [1, "bs-datepicker-head"],
          [1, "bs-datepicker-body"],
          [4, "ngIf"],
          ["title", "hey there"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (Me(hm),
            C(0, _m, 1, 0, "bs-current-date", 0),
            l(1, "div", 1),
            ge(2),
            d(),
            l(3, "div", 2),
            ge(4, 1),
            d(),
            C(5, pm, 1, 0, "bs-timepicker", 3)),
            s & 2 && (_("ngIf", !1), h(5), _("ngIf", !1)));
        },
        dependencies: [me, rp, sp],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  os = (() => {
    let t = class t {
      constructor() {
        ((this.onNavigate = new k()),
          (this.onViewMode = new k()),
          (this.onSelect = new k()),
          (this.onHover = new k()));
      }
      navigateTo(i) {
        let s = Pi.DOWN === i ? -1 : 1;
        this.onNavigate.emit({ step: { year: s * ss } });
      }
      viewYear(i) {
        this.onSelect.emit(i);
      }
      hoverYear(i, s) {
        this.onHover.emit({ cell: i, isHovered: s });
      }
      changeViewMode(i) {
        this.onViewMode.emit(i);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-years-calendar-view"]],
        inputs: { calendar: "calendar" },
        outputs: {
          onNavigate: "onNavigate",
          onViewMode: "onViewMode",
          onSelect: "onSelect",
          onHover: "onHover",
        },
        decls: 5,
        vars: 2,
        consts: [
          [3, "onNavigate", "onViewMode", "calendar"],
          ["role", "grid", 1, "years"],
          [4, "ngFor", "ngForOf"],
          [
            "role",
            "gridcell",
            3,
            "disabled",
            "is-highlighted",
            "click",
            "mouseenter",
            "mouseleave",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0),
            y("onNavigate", function (a) {
              return r.navigateTo(a);
            })("onViewMode", function (a) {
              return r.changeViewMode(a);
            }),
            d(),
            l(2, "table", 1)(3, "tbody"),
            C(4, gm, 2, 1, "tr", 2),
            d()()()),
            s & 2 &&
              (h(),
              _("calendar", r.calendar),
              h(3),
              _("ngForOf", r.calendar == null ? null : r.calendar.years)));
        },
        dependencies: [Ir, Lr, ke],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  as = (() => {
    let t = class t {
      constructor() {
        ((this.onNavigate = new k()),
          (this.onViewMode = new k()),
          (this.onSelect = new k()),
          (this.onHover = new k()));
      }
      navigateTo(i) {
        let s = Pi.DOWN === i ? -1 : 1;
        this.onNavigate.emit({ step: { year: s } });
      }
      viewMonth(i) {
        this.onSelect.emit(i);
      }
      hoverMonth(i, s) {
        this.onHover.emit({ cell: i, isHovered: s });
      }
      changeViewMode(i) {
        this.onViewMode.emit(i);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-month-calendar-view"]],
        inputs: { calendar: "calendar" },
        outputs: {
          onNavigate: "onNavigate",
          onViewMode: "onViewMode",
          onSelect: "onSelect",
          onHover: "onHover",
        },
        decls: 5,
        vars: 2,
        consts: [
          [3, "onNavigate", "onViewMode", "calendar"],
          ["role", "grid", 1, "months"],
          [4, "ngFor", "ngForOf"],
          [
            "role",
            "gridcell",
            3,
            "disabled",
            "is-highlighted",
            "click",
            "mouseenter",
            "mouseleave",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0),
            y("onNavigate", function (a) {
              return r.navigateTo(a);
            })("onViewMode", function (a) {
              return r.changeViewMode(a);
            }),
            d(),
            l(2, "table", 1)(3, "tbody"),
            C(4, ym, 2, 1, "tr", 2),
            d()()()),
            s & 2 &&
              (h(),
              _("calendar", r.calendar),
              h(3),
              _("ngForOf", r.calendar == null ? null : r.calendar.months)));
        },
        dependencies: [Ir, Lr, ke],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  op = (() => {
    let t = class t {
      constructor(i, s, r) {
        ((this._config = i),
          (this._elRef = s),
          (this._renderer = r),
          (this.day = { date: new Date(), label: "" }));
      }
      ngOnInit() {
        (this.day?.isToday &&
          this._config &&
          this._config.customTodayClass &&
          this._renderer.addClass(
            this._elRef.nativeElement,
            this._config.customTodayClass,
          ),
          typeof this.day?.customClasses == "string" &&
            this.day?.customClasses
              .split(" ")
              .filter((i) => i)
              .forEach((i) => {
                this._renderer.addClass(this._elRef.nativeElement, i);
              }));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(nt), v(P), v(J));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["", "bsDatepickerDayDecorator", ""]],
        hostVars: 16,
        hostBindings: function (s, r) {
          s & 2 &&
            M("disabled", r.day.isDisabled)("is-highlighted", r.day.isHovered)(
              "is-other-month",
              r.day.isOtherMonth,
            )("is-active-other-month", r.day.isOtherMonthHovered)(
              "in-range",
              r.day.isInRange,
            )("select-start", r.day.isSelectionStart)(
              "select-end",
              r.day.isSelectionEnd,
            )("selected", r.day.isSelected);
        },
        inputs: { day: "day" },
        attrs: bm,
        decls: 1,
        vars: 1,
        template: function (s, r) {
          (s & 1 && c(0), s & 2 && A((r.day && r.day.label) || ""));
        },
        encapsulation: 2,
        changeDetection: 0,
      })));
    let e = t;
    return e;
  })(),
  Cn = (() => {
    let t = class t {
      constructor(i) {
        ((this._config = i),
          (this.onNavigate = new k()),
          (this.onViewMode = new k()),
          (this.onSelect = new k()),
          (this.onHover = new k()),
          (this.onHoverWeek = new k()),
          (this.isiOS =
            /iPad|iPhone|iPod/.test(navigator.platform) ||
            (navigator.platform === "MacIntel" &&
              navigator.maxTouchPoints > 1)),
          this._config.dateTooltipTexts &&
            this._config.dateTooltipTexts.length > 0 &&
            (this.isShowTooltip = !0));
      }
      navigateTo(i) {
        let s = Pi.DOWN === i ? -1 : 1;
        this.onNavigate.emit({ step: { month: s } });
      }
      changeViewMode(i) {
        this.onViewMode.emit(i);
      }
      selectDay(i) {
        this.onSelect.emit(i);
      }
      selectWeek(i) {
        if (
          (!this._config.selectWeek && !this._config.selectWeekDateRange) ||
          i.days.length === 0
        )
          return;
        if (
          this._config.selectWeek &&
          i.days[0] &&
          !i.days[0].isDisabled &&
          this._config.selectFromOtherMonth
        ) {
          this.onSelect.emit(i.days[0]);
          return;
        }
        let s = i.days.find(
          (r) =>
            (this._config.selectFromOtherMonth || !r.isOtherMonth) &&
            !r.isDisabled,
        );
        if ((this.onSelect.emit(s), this._config.selectWeekDateRange)) {
          let o = i.days
            .slice(0)
            .reverse()
            .find(
              (a) =>
                (this._config.selectFromOtherMonth || !a.isOtherMonth) &&
                !a.isDisabled,
            );
          this.onSelect.emit(o);
        }
      }
      weekHoverHandler(i, s) {
        if (!this._config.selectWeek && !this._config.selectWeekDateRange)
          return;
        i.days.find(
          (o) =>
            (this._config.selectFromOtherMonth || !o.isOtherMonth) &&
            !o.isDisabled,
        ) &&
          ((i.isHovered = s),
          (this.isWeekHovered = s),
          this.onHoverWeek.emit(i));
      }
      hoverDay(i, s) {
        (this._config.selectFromOtherMonth &&
          i.isOtherMonth &&
          (i.isOtherMonthHovered = s),
          this._config.dateTooltipTexts &&
            ((i.tooltipText = ""),
            this._config.dateTooltipTexts.forEach((r) => {
              if (bt(r.date, i.date)) {
                i.tooltipText = r.tooltipText;
                return;
              }
            })),
          this.onHover.emit({ cell: i, isHovered: s }));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(nt));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-days-calendar-view"]],
        inputs: {
          calendar: "calendar",
          options: "options",
          isDisabled: "isDisabled",
        },
        outputs: {
          onNavigate: "onNavigate",
          onViewMode: "onViewMode",
          onSelect: "onSelect",
          onHover: "onHover",
          onHoverWeek: "onHoverWeek",
        },
        decls: 9,
        vars: 5,
        consts: [
          [3, "onNavigate", "onViewMode", "calendar", "isDisabled"],
          ["role", "grid", 1, "days", "weeks"],
          [4, "ngIf"],
          ["aria-label", "weekday", 4, "ngFor", "ngForOf"],
          [4, "ngFor", "ngForOf"],
          ["aria-label", "weekday"],
          ["class", "week", 3, "active-week", 4, "ngIf"],
          ["role", "gridcell", 4, "ngFor", "ngForOf"],
          [1, "week"],
          [3, "click", 4, "ngIf"],
          [3, "click", "mouseenter", "mouseleave", 4, "ngIf"],
          [3, "click"],
          [3, "click", "mouseenter", "mouseleave"],
          ["role", "gridcell"],
          [
            "bsDatepickerDayDecorator",
            "",
            3,
            "day",
            "tooltip",
            "click",
            "mouseenter",
            "mouseleave",
            4,
            "ngIf",
          ],
          [
            "bsDatepickerDayDecorator",
            "",
            3,
            "day",
            "click",
            "mouseenter",
            "mouseleave",
            4,
            "ngIf",
          ],
          ["bsDatepickerDayDecorator", "", 3, "day", "click", 4, "ngIf"],
          [
            "bsDatepickerDayDecorator",
            "",
            3,
            "click",
            "mouseenter",
            "mouseleave",
            "day",
            "tooltip",
          ],
          [
            "bsDatepickerDayDecorator",
            "",
            3,
            "click",
            "mouseenter",
            "mouseleave",
            "day",
          ],
          ["bsDatepickerDayDecorator", "", 3, "click", "day"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (l(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0),
            y("onNavigate", function (a) {
              return r.navigateTo(a);
            })("onViewMode", function (a) {
              return r.changeViewMode(a);
            }),
            d(),
            l(2, "table", 1)(3, "thead")(4, "tr"),
            C(5, Cm, 1, 0, "th", 2)(6, wm, 2, 1, "th", 3),
            d()(),
            l(7, "tbody"),
            C(8, Lm, 3, 2, "tr", 4),
            d()()()),
            s & 2 &&
              (h(),
              _("calendar", r.calendar)("isDisabled", !!r.isDisabled),
              h(4),
              _("ngIf", r.options && r.options.showWeekNumbers),
              h(),
              _("ngForOf", r.calendar.weekdays),
              h(2),
              _("ngForOf", r.calendar.weeks)));
        },
        dependencies: [Ir, Lr, me, ke, op, zt, Pn],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  Vr = (() => {
    let t = class t extends is {
      set value(i) {
        this._effects?.setValue(i);
      }
      get isDatePickerDisabled() {
        return !!this._config.isDisabled;
      }
      get isDatepickerDisabled() {
        return this.isDatePickerDisabled ? "" : null;
      }
      get isDatepickerReadonly() {
        return this.isDatePickerDisabled ? "" : null;
      }
      constructor(i, s, r, o, a, m, p) {
        (super(),
          (this._config = s),
          (this._store = r),
          (this._element = o),
          (this._actions = a),
          (this._positionService = p),
          (this.valueChange = new k()),
          (this.animationState = "void"),
          (this.isRangePicker = !1),
          (this._subs = []),
          (this._effects = m),
          i.setStyle(o.nativeElement, "display", "block"),
          i.setStyle(o.nativeElement, "position", "absolute"));
      }
      ngOnInit() {
        (this._positionService.setOptions({
          modifiers: {
            flip: { enabled: this._config.adaptivePosition },
            preventOverflow: { enabled: this._config.adaptivePosition },
          },
          allowedPositions: this._config.allowedPositions,
        }),
          this._positionService.event$?.pipe(Ri(1)).subscribe(() => {
            if ((this._positionService.disable(), this._config.isAnimated)) {
              this.animationState = this.isTopPosition
                ? "animated-up"
                : "animated-down";
              return;
            }
            this.animationState = "unanimated";
          }),
          (this.isOtherMonthsActive = this._config.selectFromOtherMonth),
          (this.containerClass = this._config.containerClass),
          (this.showTodayBtn = this._config.showTodayButton),
          (this.todayBtnLbl = this._config.todayButtonLabel),
          (this.todayPos = this._config.todayPosition),
          (this.showClearBtn = this._config.showClearButton),
          (this.clearBtnLbl = this._config.clearButtonLabel),
          (this.clearPos = this._config.clearPosition),
          (this.customRangeBtnLbl = this._config.customRangeButtonLabel),
          (this.withTimepicker = this._config.withTimepicker),
          this._effects
            ?.init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects());
        let i;
        (this._subs.push(
          this._store
            .select((s) => s.selectedDate)
            .subscribe((s) => {
              ((i = s), this.valueChange.emit(s));
            }),
        ),
          this._subs.push(
            this._store
              .select((s) => s.selectedTime)
              .subscribe((s) => {
                !s ||
                  !s[0] ||
                  !(s[0] instanceof Date) ||
                  s[0] === i ||
                  this.valueChange.emit(s[0]);
              }),
          ),
          this._store.dispatch(
            this._actions.changeViewMode(this._config.startView),
          ));
      }
      ngAfterViewInit() {
        (this.selectedTimeSub.add(
          this.selectedTime?.subscribe((i) => {
            Array.isArray(i) &&
              i.length >= 1 &&
              this.startTimepicker?.writeValue(i[0]);
          }),
        ),
          this.startTimepicker?.registerOnChange((i) => {
            this.timeSelectHandler(i, 0);
          }));
      }
      get isTopPosition() {
        return this._element.nativeElement.classList.contains("top");
      }
      positionServiceEnable() {
        this._positionService.enable();
      }
      timeSelectHandler(i, s) {
        this._store.dispatch(this._actions.selectTime(i, s));
      }
      daySelectHandler(i) {
        !i ||
          (this.isOtherMonthsActive
            ? i.isDisabled
            : i.isOtherMonth || i.isDisabled) ||
          this._store.dispatch(this._actions.select(i.date));
      }
      monthSelectHandler(i) {
        !i ||
          i.isDisabled ||
          this._store.dispatch(
            this._actions.navigateTo({
              unit: { month: Y(i.date), year: ne(i.date) },
              viewMode: "day",
            }),
          );
      }
      yearSelectHandler(i) {
        !i ||
          i.isDisabled ||
          this._store.dispatch(
            this._actions.navigateTo({
              unit: { year: ne(i.date) },
              viewMode: "month",
            }),
          );
      }
      setToday() {
        this._store.dispatch(this._actions.select(new Date()));
      }
      clearDate() {
        this._store.dispatch(this._actions.select(void 0));
      }
      ngOnDestroy() {
        for (let i of this._subs) i.unsubscribe();
        (this.selectedTimeSub.unsubscribe(), this._effects?.destroy());
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(J), v(nt), v(Rt), v(P), v(X), v(Ht), v(oe));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-datepicker-container"]],
        viewQuery: function (s, r) {
          if ((s & 1 && kt(pl, 5), s & 2)) {
            let o;
            St((o = xt())) && (r.startTimepicker = o.first);
          }
        },
        hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
        hostVars: 2,
        hostBindings: function (s, r) {
          (s & 1 &&
            y("click", function (a) {
              return r._stopPropagation(a);
            }),
            s & 2 &&
              H("disabled", r.isDatepickerDisabled)(
                "readonly",
                r.isDatepickerReadonly,
              ));
        },
        features: [ee([Rt, Ht, X, oe]), Ui],
        decls: 2,
        vars: 3,
        consts: [
          ["startTP", ""],
          ["endTP", ""],
          ["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"],
          [1, "bs-datepicker", 3, "ngClass"],
          [1, "bs-datepicker-container"],
          ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"],
          [4, "ngSwitchCase"],
          ["class", "bs-media-container", 4, "ngSwitchCase"],
          ["class", "bs-datepicker-buttons", 4, "ngIf"],
          ["class", "bs-datepicker-custom-range", 4, "ngIf"],
          [1, "bs-media-container"],
          [
            3,
            "bs-datepicker-multiple",
            "calendar",
            "isDisabled",
            "options",
            "onNavigate",
            "onViewMode",
            "onHover",
            "onHoverWeek",
            "onSelect",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"],
          [
            3,
            "onNavigate",
            "onViewMode",
            "onHover",
            "onHoverWeek",
            "onSelect",
            "calendar",
            "isDisabled",
            "options",
          ],
          [1, "bs-timepicker-in-datepicker-container"],
          [3, "disabled"],
          [3, "disabled", 4, "ngIf"],
          [
            3,
            "bs-datepicker-multiple",
            "calendar",
            "onNavigate",
            "onViewMode",
            "onHover",
            "onSelect",
            4,
            "ngFor",
            "ngForOf",
          ],
          [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"],
          [1, "bs-datepicker-buttons"],
          ["type", "button", 1, "btn", "btn-success"],
          ["type", "button", 1, "btn", "btn-default"],
          [
            "class",
            "btn-today-wrapper",
            3,
            "today-left",
            "today-right",
            "today-center",
            4,
            "ngIf",
          ],
          [
            "class",
            "btn-clear-wrapper",
            3,
            "clear-left",
            "clear-right",
            "clear-center",
            4,
            "ngIf",
          ],
          [1, "btn-today-wrapper"],
          [1, "btn", "btn-success", 3, "click"],
          [1, "btn-clear-wrapper"],
          [1, "bs-datepicker-custom-range"],
          [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"],
        ],
        template: function (s, r) {
          (s & 1 && (C(0, $m, 10, 11, "div", 2), N(1, "async")),
            s & 2 && _("ngIf", B(1, 1, r.viewMode)));
        },
        dependencies: [me, Fe, Qi, Xi, ke, Cn, Yi, Oi, as, os, rs, Zi],
        encapsulation: 2,
        data: { animation: [ns] },
      })));
    let e = t;
    return e;
  })(),
  Ai,
  ap = (() => {
    let t = class t {
      get readonlyValue() {
        return this.isDisabled ? "" : null;
      }
      constructor(i, s, r, o, a) {
        ((this._config = i),
          (this._elementRef = s),
          (this._renderer = r),
          (this.placement = "bottom"),
          (this.triggers = "click"),
          (this.outsideClick = !0),
          (this.container = "body"),
          (this.outsideEsc = !0),
          (this.isDestroy$ = new ue()),
          (this.isDisabled = !1),
          (this.bsValueChange = new k()),
          (this._subs = []),
          (this._dateInputFormat$ = new ue()),
          Object.assign(this, this._config),
          (this._datepicker = a.createLoader(s, o, r)),
          (this.onShown = this._datepicker.onShown),
          (this.onHidden = this._datepicker.onHidden),
          (this.isOpen$ = new lt(this.isOpen)));
      }
      get isOpen() {
        return this._datepicker.isShown;
      }
      set isOpen(i) {
        this.isOpen$.next(i);
      }
      set bsValue(i) {
        (this._bsValue && i && this._bsValue.getTime() === i.getTime()) ||
          (!this._bsValue &&
            i &&
            !this._config.withTimepicker &&
            Dr(i, new Date()),
          i && this.bsConfig?.initCurrentTime && (i = ul(i)),
          this.initPreviousValue(),
          (this._bsValue = i),
          this.bsValueChange.emit(i));
      }
      get dateInputFormat$() {
        return this._dateInputFormat$;
      }
      ngOnInit() {
        (this._datepicker.listen({
          outsideClick: this.outsideClick,
          outsideEsc: this.outsideEsc,
          triggers: this.triggers,
          show: () => this.show(),
        }),
          this.setConfig(),
          this.initPreviousValue());
      }
      initPreviousValue() {
        Ai = this._bsValue;
      }
      ngOnChanges(i) {
        (i.bsConfig &&
          (i.bsConfig.currentValue?.initCurrentTime &&
            i.bsConfig.currentValue?.initCurrentTime !==
              i.bsConfig.previousValue?.initCurrentTime &&
            this._bsValue &&
            (this.initPreviousValue(),
            (this._bsValue = ul(this._bsValue)),
            this.bsValueChange.emit(this._bsValue)),
          this.setConfig(),
          this._dateInputFormat$.next(
            this.bsConfig && this.bsConfig.dateInputFormat,
          )),
          !(!this._datepickerRef || !this._datepickerRef.instance) &&
            (i.minDate && (this._datepickerRef.instance.minDate = this.minDate),
            i.maxDate && (this._datepickerRef.instance.maxDate = this.maxDate),
            i.daysDisabled &&
              (this._datepickerRef.instance.daysDisabled = this.daysDisabled),
            i.datesDisabled &&
              (this._datepickerRef.instance.datesDisabled = this.datesDisabled),
            i.datesEnabled &&
              (this._datepickerRef.instance.datesEnabled = this.datesEnabled),
            i.isDisabled &&
              (this._datepickerRef.instance.isDisabled = this.isDisabled),
            i.dateCustomClasses &&
              (this._datepickerRef.instance.dateCustomClasses =
                this.dateCustomClasses),
            i.dateTooltipTexts &&
              (this._datepickerRef.instance.dateTooltipTexts =
                this.dateTooltipTexts)));
      }
      initSubscribes() {
        (this._subs.push(
          this.bsValueChange.subscribe((i) => {
            this._datepickerRef && (this._datepickerRef.instance.value = i);
          }),
        ),
          this._datepickerRef &&
            this._subs.push(
              this._datepickerRef.instance.valueChange.subscribe((i) => {
                (this.initPreviousValue(),
                  (this.bsValue = i),
                  !this.keepDatepickerModalOpened() && this.hide());
              }),
            ));
      }
      keepDatepickerModalOpened() {
        return !Ai ||
          !this.bsConfig?.keepDatepickerOpened ||
          !this._config.withTimepicker
          ? !1
          : this.isDateSame();
      }
      isDateSame() {
        return (
          Ai instanceof Date &&
          this._bsValue?.getDate() === Ai?.getDate() &&
          this._bsValue?.getMonth() === Ai?.getMonth() &&
          this._bsValue?.getFullYear() === Ai?.getFullYear()
        );
      }
      ngAfterViewInit() {
        this.isOpen$
          .pipe(
            fe((i) => i !== this.isOpen),
            Ie(this.isDestroy$),
          )
          .subscribe(() => this.toggle());
      }
      show() {
        this._datepicker.isShown ||
          (this.setConfig(),
          (this._datepickerRef = this._datepicker
            .provide({ provide: nt, useValue: this._config })
            .attach(Vr)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement })),
          this.initSubscribes());
      }
      hide() {
        this.isOpen && this._datepicker.hide();
        for (let i of this._subs) i.unsubscribe();
        this._config.returnFocusToInput &&
          this._renderer
            .selectRootElement(this._elementRef.nativeElement)
            .focus();
      }
      toggle() {
        if (this.isOpen) return this.hide();
        this.show();
      }
      setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
          value: this._config.keepDatesOutOfRules
            ? this._bsValue
            : vl(
                this._bsValue,
                this.maxDate || (this.bsConfig && this.bsConfig.maxDate),
              ),
          isDisabled: this.isDisabled,
          minDate: this.minDate || (this.bsConfig && this.bsConfig.minDate),
          maxDate: this.maxDate || (this.bsConfig && this.bsConfig.maxDate),
          daysDisabled:
            this.daysDisabled || (this.bsConfig && this.bsConfig.daysDisabled),
          dateCustomClasses:
            this.dateCustomClasses ||
            (this.bsConfig && this.bsConfig.dateCustomClasses),
          dateTooltipTexts:
            this.dateTooltipTexts ||
            (this.bsConfig && this.bsConfig.dateTooltipTexts),
          datesDisabled:
            this.datesDisabled ||
            (this.bsConfig && this.bsConfig.datesDisabled),
          datesEnabled:
            this.datesEnabled || (this.bsConfig && this.bsConfig.datesEnabled),
          minMode: this.minMode || (this.bsConfig && this.bsConfig.minMode),
          initCurrentTime: this.bsConfig?.initCurrentTime,
          keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
          keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules,
        });
      }
      unsubscribeSubscriptions() {
        this._subs?.length &&
          (this._subs.map((i) => i.unsubscribe()), (this._subs.length = 0));
      }
      ngOnDestroy() {
        (this._datepicker.dispose(),
          this.isOpen$.next(!1),
          this.isDestroy$ &&
            (this.isDestroy$.next(null), this.isDestroy$.complete()),
          this.unsubscribeSubscriptions());
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(nt), v(P), v(J), v(qe), v(ve));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["", "bsDatepicker", ""]],
        hostVars: 1,
        hostBindings: function (s, r) {
          s & 2 && H("readonly", r.readonlyValue);
        },
        inputs: {
          placement: "placement",
          triggers: "triggers",
          outsideClick: "outsideClick",
          container: "container",
          outsideEsc: "outsideEsc",
          isDisabled: "isDisabled",
          minDate: "minDate",
          maxDate: "maxDate",
          ignoreMinMaxErrors: "ignoreMinMaxErrors",
          minMode: "minMode",
          daysDisabled: "daysDisabled",
          datesDisabled: "datesDisabled",
          datesEnabled: "datesEnabled",
          dateCustomClasses: "dateCustomClasses",
          dateTooltipTexts: "dateTooltipTexts",
          isOpen: "isOpen",
          bsValue: "bsValue",
          bsConfig: "bsConfig",
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden",
          bsValueChange: "bsValueChange",
        },
        exportAs: ["bsDatepicker"],
        features: [ee([ve]), Dt],
      })));
    let e = t;
    return e;
  })();
var lp = (() => {
  let t = class t extends Vr {
    get disabledValue() {
      return this.isDatePickerDisabled ? "" : null;
    }
    get readonlyValue() {
      return this.isDatePickerDisabled ? "" : null;
    }
    constructor(i, s, r, o, a, m, p) {
      (super(i, s, r, o, a, m, p),
        i.setStyle(o.nativeElement, "display", "inline-block"),
        i.setStyle(o.nativeElement, "position", "static"));
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)(v(J), v(nt), v(Rt), v(P), v(X), v(Ht), v(oe));
  }),
    (t.ɵcmp = x({
      type: t,
      selectors: [["bs-datepicker-inline-container"]],
      hostVars: 2,
      hostBindings: function (s, r) {
        (s & 1 &&
          y("click", function (a) {
            return r._stopPropagation(a);
          }),
          s & 2 && H("disabled", r.disabledValue)("readonly", r.readonlyValue));
      },
      features: [ee([Rt, Ht, oe]), Ui],
      decls: 2,
      vars: 3,
      consts: [
        ["startTP", ""],
        ["endTP", ""],
        ["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"],
        [1, "bs-datepicker", 3, "ngClass"],
        [1, "bs-datepicker-container"],
        ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"],
        [4, "ngSwitchCase"],
        ["class", "bs-media-container", 4, "ngSwitchCase"],
        ["class", "bs-datepicker-buttons", 4, "ngIf"],
        ["class", "bs-datepicker-custom-range", 4, "ngIf"],
        [1, "bs-media-container"],
        [
          3,
          "bs-datepicker-multiple",
          "calendar",
          "isDisabled",
          "options",
          "onNavigate",
          "onViewMode",
          "onHover",
          "onHoverWeek",
          "onSelect",
          4,
          "ngFor",
          "ngForOf",
        ],
        ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"],
        [
          3,
          "onNavigate",
          "onViewMode",
          "onHover",
          "onHoverWeek",
          "onSelect",
          "calendar",
          "isDisabled",
          "options",
        ],
        [1, "bs-timepicker-in-datepicker-container"],
        [3, "disabled"],
        [3, "disabled", 4, "ngIf"],
        [
          3,
          "bs-datepicker-multiple",
          "calendar",
          "onNavigate",
          "onViewMode",
          "onHover",
          "onSelect",
          4,
          "ngFor",
          "ngForOf",
        ],
        [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"],
        [1, "bs-datepicker-buttons"],
        ["type", "button", 1, "btn", "btn-success"],
        ["type", "button", 1, "btn", "btn-default"],
        [
          "class",
          "btn-today-wrapper",
          3,
          "today-left",
          "today-right",
          "today-center",
          4,
          "ngIf",
        ],
        [
          "class",
          "btn-clear-wrapper",
          3,
          "clear-left",
          "clear-right",
          "clear-center",
          4,
          "ngIf",
        ],
        [1, "btn-today-wrapper"],
        [1, "btn", "btn-success", 3, "click"],
        [1, "btn-clear-wrapper"],
        [1, "bs-datepicker-custom-range"],
        [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"],
      ],
      template: function (s, r) {
        (s & 1 && (C(0, s_, 10, 11, "div", 2), N(1, "async")),
          s & 2 && _("ngIf", B(1, 1, r.viewMode)));
      },
      dependencies: [me, Fe, Qi, Xi, ke, Cn, Yi, Oi, as, os, rs, Zi],
      encapsulation: 2,
      data: { animation: [ns] },
    })));
  let e = t;
  return e;
})();
var Or = (() => {
    let t = class t extends is {
      set value(i) {
        this._effects?.setRangeValue(i);
      }
      get isDatePickerDisabled() {
        return !!this._config.isDisabled;
      }
      get isDatepickerDisabled() {
        return this.isDatePickerDisabled ? "" : null;
      }
      get isDatepickerReadonly() {
        return this.isDatePickerDisabled ? "" : null;
      }
      constructor(i, s, r, o, a, m, p) {
        (super(),
          (this._config = s),
          (this._store = r),
          (this._element = o),
          (this._actions = a),
          (this._positionService = p),
          (this.valueChange = new k()),
          (this.animationState = "void"),
          (this._rangeStack = []),
          (this.chosenRange = []),
          (this._subs = []),
          (this.isRangePicker = !0),
          (this._effects = m),
          (this.customRanges = this._config.ranges || []),
          (this.customRangeBtnLbl = this._config.customRangeButtonLabel),
          i.setStyle(o.nativeElement, "display", "block"),
          i.setStyle(o.nativeElement, "position", "absolute"));
      }
      ngOnInit() {
        (this._positionService.setOptions({
          modifiers: {
            flip: { enabled: this._config.adaptivePosition },
            preventOverflow: { enabled: this._config.adaptivePosition },
          },
          allowedPositions: this._config.allowedPositions,
        }),
          this._positionService.event$?.pipe(Ri(1)).subscribe(() => {
            if ((this._positionService.disable(), this._config.isAnimated)) {
              this.animationState = this.isTopPosition
                ? "animated-up"
                : "animated-down";
              return;
            }
            this.animationState = "unanimated";
          }),
          (this.containerClass = this._config.containerClass),
          (this.isOtherMonthsActive = this._config.selectFromOtherMonth),
          (this.withTimepicker = this._config.withTimepicker),
          this._effects
            ?.init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects());
        let i;
        (this._subs.push(
          this._store
            .select((s) => s.selectedRange)
            .subscribe((s) => {
              ((i = s), this.valueChange.emit(s), (this.chosenRange = s || []));
            }),
        ),
          this._subs.push(
            this._store
              .select((s) => s.selectedTime)
              .subscribe((s) => {
                !s ||
                  !s[0] ||
                  !s[1] ||
                  !(s[0] instanceof Date) ||
                  !(s[1] instanceof Date) ||
                  (i && s[0] === i[0] && s[1] === i[1]) ||
                  (this.valueChange.emit(s), (this.chosenRange = s || []));
              }),
          ));
      }
      ngAfterViewInit() {
        (this.selectedTimeSub.add(
          this.selectedTime?.subscribe((i) => {
            Array.isArray(i) &&
              i.length >= 2 &&
              (this.startTimepicker?.writeValue(i[0]),
              this.endTimepicker?.writeValue(i[1]));
          }),
        ),
          this.startTimepicker?.registerOnChange((i) => {
            this.timeSelectHandler(i, 0);
          }),
          this.endTimepicker?.registerOnChange((i) => {
            this.timeSelectHandler(i, 1);
          }));
      }
      get isTopPosition() {
        return this._element.nativeElement.classList.contains("top");
      }
      positionServiceEnable() {
        this._positionService.enable();
      }
      timeSelectHandler(i, s) {
        this._store.dispatch(this._actions.selectTime(i, s));
      }
      daySelectHandler(i) {
        !i ||
          (this.isOtherMonthsActive
            ? i.isDisabled
            : i.isOtherMonth || i.isDisabled) ||
          this.rangesProcessing(i);
      }
      monthSelectHandler(i) {
        if (!(!i || i.isDisabled)) {
          if (((i.isSelected = !0), this._config.minMode !== "month")) {
            if (i.isDisabled) return;
            this._store.dispatch(
              this._actions.navigateTo({
                unit: { month: Y(i.date), year: ne(i.date) },
                viewMode: "day",
              }),
            );
            return;
          }
          this.rangesProcessing(i);
        }
      }
      yearSelectHandler(i) {
        if (!(!i || i.isDisabled)) {
          if (((i.isSelected = !0), this._config.minMode !== "year")) {
            if (i.isDisabled) return;
            this._store.dispatch(
              this._actions.navigateTo({
                unit: { year: ne(i.date) },
                viewMode: "month",
              }),
            );
            return;
          }
          this.rangesProcessing(i);
        }
      }
      rangesProcessing(i) {
        (this._rangeStack.length === 1 &&
          (this._rangeStack =
            i.date >= this._rangeStack[0]
              ? [this._rangeStack[0], i.date]
              : [i.date]),
          this._config.maxDateRange && this.setMaxDateRangeOnCalendar(i.date),
          this._rangeStack.length === 0 &&
            ((this._rangeStack = [i.date]),
            this._config.maxDateRange &&
              this.setMaxDateRangeOnCalendar(i.date)),
          this._store.dispatch(this._actions.selectRange(this._rangeStack)),
          this._rangeStack.length === 2 && (this._rangeStack = []));
      }
      ngOnDestroy() {
        for (let i of this._subs) i.unsubscribe();
        (this.selectedTimeSub.unsubscribe(), this._effects?.destroy());
      }
      setRangeOnCalendar(i) {
        (i &&
          (this._rangeStack = i.value instanceof Date ? [i.value] : i.value),
          this._store.dispatch(this._actions.selectRange(this._rangeStack)));
      }
      setMaxDateRangeOnCalendar(i) {
        let s = new Date(i);
        if (this._config.maxDate) {
          let r = this._config.maxDate.getTime(),
            o = i.getTime() + (this._config.maxDateRange || 0) * A_;
          s = o > r ? new Date(this._config.maxDate) : new Date(o);
        } else s.setDate(i.getDate() + (this._config.maxDateRange || 0));
        this._effects?.setMaxDate(s);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(J), v(nt), v(Rt), v(P), v(X), v(Ht), v(oe));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-daterangepicker-container"]],
        viewQuery: function (s, r) {
          if ((s & 1 && (kt(pl, 5), kt(r_, 5)), s & 2)) {
            let o;
            (St((o = xt())) && (r.startTimepicker = o.first),
              St((o = xt())) && (r.endTimepicker = o.first));
          }
        },
        hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
        hostVars: 2,
        hostBindings: function (s, r) {
          (s & 1 &&
            y("click", function (a) {
              return r._stopPropagation(a);
            }),
            s & 2 &&
              H("disabled", r.isDatepickerDisabled)(
                "readonly",
                r.isDatepickerReadonly,
              ));
        },
        features: [ee([Rt, Ht, X, oe]), Ui],
        decls: 2,
        vars: 3,
        consts: [
          ["startTP", ""],
          ["endTP", ""],
          ["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"],
          [1, "bs-datepicker", 3, "ngClass"],
          [1, "bs-datepicker-container"],
          ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"],
          [4, "ngSwitchCase"],
          ["class", "bs-media-container", 4, "ngSwitchCase"],
          ["class", "bs-datepicker-buttons", 4, "ngIf"],
          ["class", "bs-datepicker-custom-range", 4, "ngIf"],
          [1, "bs-media-container"],
          [
            3,
            "bs-datepicker-multiple",
            "calendar",
            "isDisabled",
            "options",
            "onNavigate",
            "onViewMode",
            "onHover",
            "onHoverWeek",
            "onSelect",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"],
          [
            3,
            "onNavigate",
            "onViewMode",
            "onHover",
            "onHoverWeek",
            "onSelect",
            "calendar",
            "isDisabled",
            "options",
          ],
          [1, "bs-timepicker-in-datepicker-container"],
          [3, "disabled"],
          [3, "disabled", 4, "ngIf"],
          [
            3,
            "bs-datepicker-multiple",
            "calendar",
            "onNavigate",
            "onViewMode",
            "onHover",
            "onSelect",
            4,
            "ngFor",
            "ngForOf",
          ],
          [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"],
          [1, "bs-datepicker-buttons"],
          ["type", "button", 1, "btn", "btn-success"],
          ["type", "button", 1, "btn", "btn-default"],
          [
            "class",
            "btn-today-wrapper",
            3,
            "today-left",
            "today-right",
            "today-center",
            4,
            "ngIf",
          ],
          [
            "class",
            "btn-clear-wrapper",
            3,
            "clear-left",
            "clear-right",
            "clear-center",
            4,
            "ngIf",
          ],
          [1, "btn-today-wrapper"],
          [1, "btn", "btn-success", 3, "click"],
          [1, "btn-clear-wrapper"],
          [1, "bs-datepicker-custom-range"],
          [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"],
        ],
        template: function (s, r) {
          (s & 1 && (C(0, y_, 10, 11, "div", 2), N(1, "async")),
            s & 2 && _("ngIf", B(1, 1, r.viewMode)));
        },
        dependencies: [me, Fe, Qi, Xi, ke, Cn, Yi, Oi, as, os, rs, Zi],
        encapsulation: 2,
        data: { animation: [ns] },
      })));
    let e = t;
    return e;
  })(),
  dp = (() => {
    let t = class t extends Or {
      get disabledValue() {
        return this.isDatePickerDisabled ? "" : null;
      }
      get readonlyValue() {
        return this.isDatePickerDisabled ? "" : null;
      }
      constructor(i, s, r, o, a, m, p) {
        (super(i, s, r, o, a, m, p),
          i.setStyle(o.nativeElement, "display", "inline-block"),
          i.setStyle(o.nativeElement, "position", "static"));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(J), v(nt), v(Rt), v(P), v(X), v(Ht), v(oe));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-daterangepicker-inline-container"]],
        hostVars: 2,
        hostBindings: function (s, r) {
          (s & 1 &&
            y("click", function (a) {
              return r._stopPropagation(a);
            }),
            s & 2 &&
              H("disabled", r.disabledValue)("readonly", r.readonlyValue));
        },
        features: [ee([Rt, Ht, X, oe]), Ui],
        decls: 2,
        vars: 3,
        consts: [
          ["startTP", ""],
          ["endTP", ""],
          ["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"],
          [1, "bs-datepicker", 3, "ngClass"],
          [1, "bs-datepicker-container"],
          ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"],
          [4, "ngSwitchCase"],
          ["class", "bs-media-container", 4, "ngSwitchCase"],
          ["class", "bs-datepicker-buttons", 4, "ngIf"],
          ["class", "bs-datepicker-custom-range", 4, "ngIf"],
          [1, "bs-media-container"],
          [
            3,
            "bs-datepicker-multiple",
            "calendar",
            "isDisabled",
            "options",
            "onNavigate",
            "onViewMode",
            "onHover",
            "onHoverWeek",
            "onSelect",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"],
          [
            3,
            "onNavigate",
            "onViewMode",
            "onHover",
            "onHoverWeek",
            "onSelect",
            "calendar",
            "isDisabled",
            "options",
          ],
          [1, "bs-timepicker-in-datepicker-container"],
          [3, "disabled"],
          [3, "disabled", 4, "ngIf"],
          [
            3,
            "bs-datepicker-multiple",
            "calendar",
            "onNavigate",
            "onViewMode",
            "onHover",
            "onSelect",
            4,
            "ngFor",
            "ngForOf",
          ],
          [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"],
          [1, "bs-datepicker-buttons"],
          ["type", "button", 1, "btn", "btn-success"],
          ["type", "button", 1, "btn", "btn-default"],
          [
            "class",
            "btn-today-wrapper",
            3,
            "today-left",
            "today-right",
            "today-center",
            4,
            "ngIf",
          ],
          [
            "class",
            "btn-clear-wrapper",
            3,
            "clear-left",
            "clear-right",
            "clear-center",
            4,
            "ngIf",
          ],
          [1, "btn-today-wrapper"],
          [1, "btn", "btn-success", 3, "click"],
          [1, "btn-clear-wrapper"],
          [1, "bs-datepicker-custom-range"],
          [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"],
        ],
        template: function (s, r) {
          (s & 1 && (C(0, O_, 10, 11, "div", 2), N(1, "async")),
            s & 2 && _("ngIf", B(1, 1, r.viewMode)));
        },
        dependencies: [me, Fe, Qi, Xi, ke, Cn, Yi, Oi, as, os, rs, Zi],
        encapsulation: 2,
        data: { animation: [ns] },
      })));
    let e = t;
    return e;
  })();
var cp = { provide: It, useExisting: Ge(() => kl), multi: !0 },
  up = { provide: Hs, useExisting: Ge(() => kl), multi: !0 },
  kl = (() => {
    let t = class t {
      constructor(i, s, r, o, a) {
        ((this._picker = i),
          (this._localeService = s),
          (this._renderer = r),
          (this._elRef = o),
          (this.changeDetection = a),
          (this._onChange = Function.prototype),
          (this._onTouched = Function.prototype),
          (this._validatorChange = Function.prototype),
          (this._subs = new Fi()));
      }
      onChange(i) {
        (this.writeValue(i.target.value),
          this._onChange(this._value),
          this._picker._config.returnFocusToInput &&
            this._renderer.selectRootElement(this._elRef.nativeElement).focus(),
          this._onTouched());
      }
      onBlur() {
        this._onTouched();
      }
      hide() {
        (this._picker.hide(),
          this._renderer.selectRootElement(this._elRef.nativeElement).blur(),
          this._picker._config.returnFocusToInput &&
            this._renderer
              .selectRootElement(this._elRef.nativeElement)
              .focus());
      }
      ngOnInit() {
        let i = (s) => {
          (this._setInputValue(s),
            this._value !== s &&
              ((this._value = s), this._onChange(s), this._onTouched()),
            this.changeDetection.markForCheck());
        };
        (this._picker._bsValue && i(this._picker._bsValue),
          this._subs.add(this._picker.bsValueChange.subscribe(i)),
          this._subs.add(
            this._localeService.localeChange.subscribe(() => {
              this._setInputValue(this._value);
            }),
          ),
          this._subs.add(
            this._picker.dateInputFormat$.pipe(ji()).subscribe(() => {
              this._setInputValue(this._value);
            }),
          ));
      }
      ngOnDestroy() {
        this._subs.unsubscribe();
      }
      _setInputValue(i) {
        let s = i
          ? Ye(
              i,
              this._picker._config.dateInputFormat,
              this._localeService.currentLocale,
            )
          : "";
        this._renderer.setProperty(this._elRef.nativeElement, "value", s);
      }
      validate(i) {
        let s = i.value;
        if (s == null || s === "") return null;
        if (fn(s)) {
          if (!yt(s)) return { bsDate: { invalid: s } };
          if (
            this._picker &&
            this._picker.minDate &&
            At(s, this._picker.minDate, "date")
          )
            return (
              this.writeValue(this._picker.minDate),
              this._picker.ignoreMinMaxErrors
                ? null
                : { bsDate: { minDate: this._picker.minDate } }
            );
          if (
            this._picker &&
            this._picker.maxDate &&
            Ct(s, this._picker.maxDate, "date")
          )
            return (
              this.writeValue(this._picker.maxDate),
              this._picker.ignoreMinMaxErrors
                ? null
                : { bsDate: { maxDate: this._picker.maxDate } }
            );
        }
        return null;
      }
      registerOnValidatorChange(i) {
        this._validatorChange = i;
      }
      writeValue(i) {
        if (!i) this._value = void 0;
        else {
          let s = this._localeService.currentLocale;
          if (!_e(s))
            throw new Error(
              `Locale "${s}" is not defined, please add it with "defineLocale(...)"`,
            );
          if (
            ((this._value = Ti(
              i,
              this._picker._config.dateInputFormat,
              this._localeService.currentLocale,
            )),
            this._picker._config.useUtc)
          ) {
            let o = pr(this._value);
            this._value = o === null ? void 0 : o;
          }
        }
        this._picker.bsValue = this._value;
      }
      setDisabledState(i) {
        if (((this._picker.isDisabled = i), i)) {
          this._renderer.setAttribute(
            this._elRef.nativeElement,
            "disabled",
            "disabled",
          );
          return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
      }
      registerOnChange(i) {
        this._onChange = i;
      }
      registerOnTouched(i) {
        this._onTouched = i;
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(ap, 1), v(Mr), v(J), v(P), v(Xe));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["input", "bsDatepicker", ""]],
        hostBindings: function (s, r) {
          s & 1 &&
            y("change", function (a) {
              return r.onChange(a);
            })("blur", function () {
              return r.onBlur();
            })("keyup.esc", function () {
              return r.hide();
            })("keydown.enter", function () {
              return r.hide();
            });
        },
        features: [ee([cp, up])],
      })));
    let e = t;
    return e;
  })(),
  hp = (() => {
    let t = class t extends nt {
      constructor() {
        (super(...arguments), (this.displayMonths = 2));
      }
    };
    ((t.ɵfac = (() => {
      let i;
      return function (r) {
        return (i || (i = Kr(t)))(r || t);
      };
    })()),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  Ft,
  mp = (() => {
    let t = class t {
      get isOpen() {
        return this._datepicker.isShown;
      }
      set isOpen(i) {
        this.isOpen$.next(i);
      }
      set bsValue(i) {
        this._bsValue !== i &&
          (i && this.bsConfig?.initCurrentTime && (i = hl(i)),
          this.initPreviousValue(),
          (this._bsValue = i),
          this.bsValueChange.emit(i));
      }
      get isDatepickerReadonly() {
        return this.isDisabled ? "" : null;
      }
      get rangeInputFormat$() {
        return this._rangeInputFormat$;
      }
      constructor(i, s, r, o, a) {
        ((this._config = i),
          (this._elementRef = s),
          (this._renderer = r),
          (this.placement = "bottom"),
          (this.triggers = "click"),
          (this.outsideClick = !0),
          (this.container = "body"),
          (this.outsideEsc = !0),
          (this.isDestroy$ = new ue()),
          (this.isDisabled = !1),
          (this.bsValueChange = new k()),
          (this._subs = []),
          (this._rangeInputFormat$ = new ue()),
          (this._datepicker = a.createLoader(s, o, r)),
          Object.assign(this, i),
          (this.onShown = this._datepicker.onShown),
          (this.onHidden = this._datepicker.onHidden),
          (this.isOpen$ = new lt(this.isOpen)));
      }
      ngOnInit() {
        ((this.isDestroy$ = new ue()),
          this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show(),
          }),
          this.initPreviousValue(),
          this.setConfig());
      }
      ngOnChanges(i) {
        (i.bsConfig &&
          (i.bsConfig.currentValue?.initCurrentTime &&
            i.bsConfig.currentValue?.initCurrentTime !==
              i.bsConfig.previousValue?.initCurrentTime &&
            this._bsValue &&
            (this.initPreviousValue(),
            (this._bsValue = hl(this._bsValue)),
            this.bsValueChange.emit(this._bsValue)),
          this.setConfig(),
          this._rangeInputFormat$.next(
            i.bsConfig.currentValue && i.bsConfig.currentValue.rangeInputFormat,
          )),
          !(!this._datepickerRef || !this._datepickerRef.instance) &&
            (i.minDate && (this._datepickerRef.instance.minDate = this.minDate),
            i.maxDate && (this._datepickerRef.instance.maxDate = this.maxDate),
            i.datesDisabled &&
              (this._datepickerRef.instance.datesDisabled = this.datesDisabled),
            i.datesEnabled &&
              (this._datepickerRef.instance.datesEnabled = this.datesEnabled),
            i.daysDisabled &&
              (this._datepickerRef.instance.daysDisabled = this.daysDisabled),
            i.isDisabled &&
              (this._datepickerRef.instance.isDisabled = this.isDisabled),
            i.dateCustomClasses &&
              (this._datepickerRef.instance.dateCustomClasses =
                this.dateCustomClasses)));
      }
      ngAfterViewInit() {
        this.isOpen$
          .pipe(
            fe((i) => i !== this.isOpen),
            Ie(this.isDestroy$),
          )
          .subscribe(() => this.toggle());
      }
      show() {
        this._datepicker.isShown ||
          (this.setConfig(),
          (this._datepickerRef = this._datepicker
            .provide({ provide: nt, useValue: this._config })
            .attach(Or)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement })),
          this.initSubscribes());
      }
      initSubscribes() {
        (this._subs.push(
          this.bsValueChange.subscribe((i) => {
            this._datepickerRef && (this._datepickerRef.instance.value = i);
          }),
        ),
          this._datepickerRef &&
            this._subs.push(
              this._datepickerRef.instance.valueChange
                .pipe(fe((i) => i && i[0] && !!i[1]))
                .subscribe((i) => {
                  (this.initPreviousValue(),
                    (this.bsValue = i),
                    !this.keepDatepickerModalOpened() && this.hide());
                }),
            ));
      }
      initPreviousValue() {
        Ft = this._bsValue;
      }
      keepDatepickerModalOpened() {
        return !Ft ||
          !this.bsConfig?.keepDatepickerOpened ||
          !this._config.withTimepicker
          ? !1
          : this.isDateSame();
      }
      isDateSame() {
        return (
          this._bsValue?.[0]?.getDate() === Ft?.[0]?.getDate() &&
          this._bsValue?.[0]?.getMonth() === Ft?.[0]?.getMonth() &&
          this._bsValue?.[0]?.getFullYear() === Ft?.[0]?.getFullYear() &&
          this._bsValue?.[1]?.getDate() === Ft?.[1]?.getDate() &&
          this._bsValue?.[1]?.getMonth() === Ft?.[1]?.getMonth() &&
          this._bsValue?.[1]?.getFullYear() === Ft?.[1]?.getFullYear()
        );
      }
      setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
          value: this.bsConfig?.keepDatesOutOfRules
            ? this._bsValue
            : vl(
                this._bsValue,
                this.maxDate || (this.bsConfig && this.bsConfig.maxDate),
              ),
          isDisabled: this.isDisabled,
          minDate: this.minDate || (this.bsConfig && this.bsConfig.minDate),
          maxDate: this.maxDate || (this.bsConfig && this.bsConfig.maxDate),
          daysDisabled:
            this.daysDisabled || (this.bsConfig && this.bsConfig.daysDisabled),
          dateCustomClasses:
            this.dateCustomClasses ||
            (this.bsConfig && this.bsConfig.dateCustomClasses),
          datesDisabled:
            this.datesDisabled ||
            (this.bsConfig && this.bsConfig.datesDisabled),
          datesEnabled:
            this.datesEnabled || (this.bsConfig && this.bsConfig.datesEnabled),
          ranges: R_(
            this.bsConfig && this.bsConfig.ranges,
            this.maxDate || (this.bsConfig && this.bsConfig.maxDate),
          ),
          maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
          initCurrentTime: this.bsConfig?.initCurrentTime,
          keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
          keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules,
        });
      }
      hide() {
        this.isOpen && this._datepicker.hide();
        for (let i of this._subs) i.unsubscribe();
        this._config.returnFocusToInput &&
          this._renderer
            .selectRootElement(this._elementRef.nativeElement)
            .focus();
      }
      toggle() {
        if (this.isOpen) return this.hide();
        this.show();
      }
      unsubscribeSubscriptions() {
        this._subs?.length &&
          (this._subs.map((i) => i.unsubscribe()), (this._subs.length = 0));
      }
      ngOnDestroy() {
        (this._datepicker.dispose(),
          this.isOpen$.next(!1),
          this.isDestroy$ &&
            (this.isDestroy$.next(null), this.isDestroy$.complete()),
          this.unsubscribeSubscriptions());
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(hp), v(P), v(J), v(qe), v(ve));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["", "bsDaterangepicker", ""]],
        hostVars: 1,
        hostBindings: function (s, r) {
          s & 2 && H("readonly", r.isDatepickerReadonly);
        },
        inputs: {
          placement: "placement",
          triggers: "triggers",
          outsideClick: "outsideClick",
          container: "container",
          outsideEsc: "outsideEsc",
          isOpen: "isOpen",
          bsValue: "bsValue",
          bsConfig: "bsConfig",
          isDisabled: "isDisabled",
          minDate: "minDate",
          maxDate: "maxDate",
          dateCustomClasses: "dateCustomClasses",
          daysDisabled: "daysDisabled",
          datesDisabled: "datesDisabled",
          datesEnabled: "datesEnabled",
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden",
          bsValueChange: "bsValueChange",
        },
        exportAs: ["bsDaterangepicker"],
        features: [ee([ve]), Dt],
      })));
    let e = t;
    return e;
  })(),
  _p = { provide: It, useExisting: Ge(() => Sl), multi: !0 },
  pp = { provide: Hs, useExisting: Ge(() => Sl), multi: !0 },
  Sl = (() => {
    let t = class t {
      constructor(i, s, r, o, a) {
        ((this._picker = i),
          (this._localeService = s),
          (this._renderer = r),
          (this._elRef = o),
          (this.changeDetection = a),
          (this._onChange = Function.prototype),
          (this._onTouched = Function.prototype),
          (this._validatorChange = Function.prototype),
          (this._subs = new Fi()));
      }
      ngOnInit() {
        let i = (s) => {
          (this._setInputValue(s),
            this._value !== s &&
              ((this._value = s), this._onChange(s), this._onTouched()),
            this.changeDetection.markForCheck());
        };
        (this._picker._bsValue && i(this._picker._bsValue),
          this._subs.add(
            this._picker.bsValueChange.subscribe((s) => {
              (this._setInputValue(s),
                this._value !== s &&
                  ((this._value = s), this._onChange(s), this._onTouched()),
                this.changeDetection.markForCheck());
            }),
          ),
          this._subs.add(
            this._localeService.localeChange.subscribe(() => {
              this._setInputValue(this._value);
            }),
          ),
          this._subs.add(
            this._picker.rangeInputFormat$.pipe(ji()).subscribe(() => {
              this._setInputValue(this._value);
            }),
          ));
      }
      ngOnDestroy() {
        this._subs.unsubscribe();
      }
      onKeydownEvent(i) {
        (i.keyCode === 13 || i.code === "Enter") && this.hide();
      }
      _setInputValue(i) {
        let s = "";
        if (i) {
          let r = i[0]
              ? Ye(
                  i[0],
                  this._picker._config.rangeInputFormat,
                  this._localeService.currentLocale,
                )
              : "",
            o = i[1]
              ? Ye(
                  i[1],
                  this._picker._config.rangeInputFormat,
                  this._localeService.currentLocale,
                )
              : "";
          s = r && o ? r + this._picker._config.rangeSeparator + o : "";
        }
        this._renderer.setProperty(this._elRef.nativeElement, "value", s);
      }
      onChange(i) {
        (this.writeValue(i.target.value),
          this._onChange(this._value),
          this._picker._config.returnFocusToInput &&
            this._renderer.selectRootElement(this._elRef.nativeElement).focus(),
          this._onTouched());
      }
      validate(i) {
        let s = i.value,
          r = [];
        if (s == null || !z(s)) return null;
        s = s.slice().sort((m, p) => m.getTime() - p.getTime());
        let o = yt(s[0]),
          a = yt(s[1]);
        return o
          ? a
            ? (this._picker &&
                this._picker.minDate &&
                At(s[0], this._picker.minDate, "date") &&
                ((s[0] = this._picker.minDate),
                r.push({ bsDate: { minDate: this._picker.minDate } })),
              this._picker &&
                this._picker.maxDate &&
                Ct(s[1], this._picker.maxDate, "date") &&
                ((s[1] = this._picker.maxDate),
                r.push({ bsDate: { maxDate: this._picker.maxDate } })),
              r.length > 0 ? (this.writeValue(s), r) : null)
            : { bsDate: { invalid: s[1] } }
          : { bsDate: { invalid: s[0] } };
      }
      registerOnValidatorChange(i) {
        this._validatorChange = i;
      }
      writeValue(i) {
        if (!i) this._value = void 0;
        else {
          let s = this._localeService.currentLocale;
          if (!_e(s))
            throw new Error(
              `Locale "${s}" is not defined, please add it with "defineLocale(...)"`,
            );
          let o = [];
          if (typeof i == "string") {
            let a = this._picker._config.rangeSeparator.trim();
            i.replace(/[^-]/g, "").length > 1
              ? (o = i.split(this._picker._config.rangeSeparator))
              : (o = i
                  .split(a.length > 0 ? a : this._picker._config.rangeSeparator)
                  .map((m) => m.trim()));
          }
          (Array.isArray(i) && (o = i),
            (this._value = o
              .map((a) =>
                this._picker._config.useUtc
                  ? pr(
                      Ti(
                        a,
                        this._picker._config.rangeInputFormat,
                        this._localeService.currentLocale,
                      ),
                    )
                  : Ti(
                      a,
                      this._picker._config.rangeInputFormat,
                      this._localeService.currentLocale,
                    ),
              )
              .map((a) => (isNaN(a.valueOf()) ? void 0 : a))));
        }
        this._picker.bsValue = this._value;
      }
      setDisabledState(i) {
        if (((this._picker.isDisabled = i), i)) {
          this._renderer.setAttribute(
            this._elRef.nativeElement,
            "disabled",
            "disabled",
          );
          return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
      }
      registerOnChange(i) {
        this._onChange = i;
      }
      registerOnTouched(i) {
        this._onTouched = i;
      }
      onBlur() {
        this._onTouched();
      }
      hide() {
        (this._picker.hide(),
          this._renderer.selectRootElement(this._elRef.nativeElement).blur(),
          this._picker._config.returnFocusToInput &&
            this._renderer
              .selectRootElement(this._elRef.nativeElement)
              .focus());
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(mp, 1), v(Mr), v(J), v(P), v(Xe));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["input", "bsDaterangepicker", ""]],
        hostBindings: function (s, r) {
          s & 1 &&
            y("change", function (a) {
              return r.onChange(a);
            })("keyup.esc", function () {
              return r.hide();
            })("keydown", function (a) {
              return r.onKeydownEvent(a);
            })("blur", function () {
              return r.onBlur();
            });
        },
        features: [ee([_p, pp])],
      })));
    let e = t;
    return e;
  })(),
  xl = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({ imports: [te, zt, Yi, Cn, Vr, lp, Or, dp] })));
    let e = t;
    return e;
  })();
var Tl = ["*"],
  fp = (e) => ({ display: e });
function gp(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "li", 7),
      y("click", function () {
        let s = f(n).index,
          r = u(2);
        return g(r.selectSlide(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit;
    M("active", n.active === !0);
  }
}
function vp(e, t) {
  if (
    (e & 1 && (ht(0), l(1, "ol", 5), C(2, gp, 1, 2, "li", 6), d(), mt()), e & 2)
  ) {
    let n = u();
    (h(2), _("ngForOf", n.indicatorsSlides()));
  }
}
function yp(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "button", 9),
      y("click", function () {
        let s = f(n).index,
          r = u(2);
        return g(r.selectSlide(s));
      }),
      d());
  }
  if (e & 2) {
    let n = t.$implicit,
      i = t.index,
      s = u(2);
    (M("active", n.active === !0),
      H("data-bs-target", "#carousel" + s.currentId)("data-bs-slide-to", i));
  }
}
function bp(e, t) {
  if (
    (e & 1 && (ht(0), l(1, "div", 5), C(2, yp, 1, 4, "button", 8), d(), mt()),
    e & 2)
  ) {
    let n = u();
    (h(2), _("ngForOf", n.indicatorsSlides()));
  }
}
function Cp(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "a", 10),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.previousSlide());
      }),
      w(1, "span", 11),
      l(2, "span", 12),
      c(3, "Previous"),
      d()());
  }
  if (e & 2) {
    let n = u();
    (M("disabled", n.checkDisabledClass("prev")),
      H("data-bs-target", "#carousel" + n.currentId));
  }
}
function wp(e, t) {
  if (e & 1) {
    let n = D();
    (l(0, "a", 13),
      y("click", function () {
        f(n);
        let s = u();
        return g(s.nextSlide());
      }),
      w(1, "span", 14),
      l(2, "span", 12),
      c(3, "Next"),
      d()());
  }
  if (e & 2) {
    let n = u();
    (M("disabled", n.checkDisabledClass("next")),
      H("data-bs-target", "#carousel" + n.currentId));
  }
}
var Dp = (() => {
  let t = class t {
    constructor() {
      ((this.interval = 5e3),
        (this.noPause = !1),
        (this.noWrap = !1),
        (this.showIndicators = !0),
        (this.pauseOnFocus = !1),
        (this.indicatorsByChunk = !1),
        (this.itemsPerSlide = 1),
        (this.singleSlideOffset = !1));
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
function Mp(e, t) {
  let n = e.length;
  for (; n--; ) if (t(e[n], n, e)) return n;
  return -1;
}
function kp(e, t) {
  let n = [],
    i = Math.ceil(e.length / t),
    s = 0;
  for (; s < i; ) {
    let r = e.splice(0, s === i - 1 && t < e.length ? e.length : t);
    (n.push(r), s++);
  }
  return n;
}
function Sp(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
var Le = (function (e) {
    return (
      (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.NEXT = 1)] = "NEXT"),
      (e[(e.PREV = 2)] = "PREV"),
      e
    );
  })(Le || {}),
  xp = 1,
  Yr = (() => {
    let t = class t {
      set activeSlide(i) {
        this.multilist ||
          (Sp(i) && (this.customActiveSlide = i),
          this._slides.length &&
            i !== this._currentActiveSlide &&
            this._select(i));
      }
      get activeSlide() {
        return this._currentActiveSlide || 0;
      }
      get interval() {
        return this._interval;
      }
      set interval(i) {
        ((this._interval = i), this.restartTimer());
      }
      get slides() {
        return this._slides.toArray();
      }
      get isFirstSlideVisible() {
        let i = this.getVisibleIndexes();
        return !i || (i instanceof Array && !i.length) ? !1 : i.includes(0);
      }
      get isLastSlideVisible() {
        let i = this.getVisibleIndexes();
        return !i || (i instanceof Array && !i.length)
          ? !1
          : i.includes(this._slides.length - 1);
      }
      get _bsVer() {
        return rt();
      }
      constructor(i, s, r) {
        ((this.ngZone = s),
          (this.platformId = r),
          (this.noWrap = !1),
          (this.noPause = !1),
          (this.showIndicators = !0),
          (this.pauseOnFocus = !1),
          (this.indicatorsByChunk = !1),
          (this.itemsPerSlide = 1),
          (this.singleSlideOffset = !1),
          (this.isAnimated = !1),
          (this.activeSlideChange = new k(!1)),
          (this.slideRangeChange = new k()),
          (this.startFromIndex = 0),
          (this._interval = 5e3),
          (this._slides = new Ln()),
          (this._currentVisibleSlidesIndex = 0),
          (this.isPlaying = !1),
          (this.destroyed = !1),
          (this.currentId = 0),
          (this.getActive = (o) => o.active),
          (this.makeSlidesConsistent = (o) => {
            o.forEach((a, m) => (a.item.order = m));
          }),
          Object.assign(this, i),
          (this.currentId = xp++));
      }
      ngAfterViewInit() {
        setTimeout(() => {
          (this.singleSlideOffset && (this.indicatorsByChunk = !1),
            this.multilist &&
              ((this._chunkedSlides = kp(
                this.mapSlidesAndIndexes(),
                this.itemsPerSlide,
              )),
              this.selectInitialSlides()),
            this.customActiveSlide &&
              !this.multilist &&
              this._select(this.customActiveSlide));
        }, 0);
      }
      ngOnDestroy() {
        this.destroyed = !0;
      }
      addSlide(i) {
        (this._slides.add(i),
          this.multilist &&
            this._slides.length <= this.itemsPerSlide &&
            (i.active = !0),
          !this.multilist && this.isAnimated && (i.isAnimated = !0),
          !this.multilist &&
            this._slides.length === 1 &&
            ((this._currentActiveSlide = void 0),
            this.customActiveSlide || (this.activeSlide = 0),
            this.play()),
          this.multilist &&
            this._slides.length > this.itemsPerSlide &&
            this.play());
      }
      removeSlide(i) {
        let s = this._slides.indexOf(i);
        if (this._currentActiveSlide === s) {
          let r;
          (this._slides.length > 1 &&
            (r = this.isLast(s) ? (this.noWrap ? s - 1 : 0) : s),
            this._slides.remove(s),
            setTimeout(() => {
              this._select(r);
            }, 0));
        } else {
          this._slides.remove(s);
          let r = this.getCurrentSlideIndex();
          setTimeout(() => {
            ((this._currentActiveSlide = r),
              this.activeSlideChange.emit(this._currentActiveSlide));
          }, 0);
        }
      }
      nextSlideFromInterval(i = !1) {
        this.move(Le.NEXT, i);
      }
      nextSlide(i = !1) {
        (this.isPlaying && this.restartTimer(), this.move(Le.NEXT, i));
      }
      previousSlide(i = !1) {
        (this.isPlaying && this.restartTimer(), this.move(Le.PREV, i));
      }
      getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
      }
      getLastVisibleIndex() {
        return Mp(this.slides, this.getActive);
      }
      move(i, s = !1) {
        let r = this.getFirstVisibleIndex(),
          o = this.getLastVisibleIndex();
        (this.noWrap &&
          ((i === Le.NEXT && this.isLast(o)) || (i === Le.PREV && r === 0))) ||
          (this.multilist
            ? this.moveMultilist(i)
            : (this.activeSlide = this.findNextSlideIndex(i, s) || 0));
      }
      keydownPress(i) {
        if (
          i.keyCode === 13 ||
          i.key === "Enter" ||
          i.keyCode === 32 ||
          i.key === "Space"
        ) {
          (this.nextSlide(), i.preventDefault());
          return;
        }
        if (i.keyCode === 37 || i.key === "LeftArrow") {
          this.previousSlide();
          return;
        }
        if (i.keyCode === 39 || i.key === "RightArrow") {
          this.nextSlide();
          return;
        }
      }
      onMouseLeave() {
        this.pauseOnFocus || this.play();
      }
      onMouseUp() {
        this.pauseOnFocus || this.play();
      }
      pauseFocusIn() {
        this.pauseOnFocus && ((this.isPlaying = !1), this.resetTimer());
      }
      pauseFocusOut() {
        this.play();
      }
      selectSlide(i) {
        (this.isPlaying && this.restartTimer(),
          this.multilist
            ? this.selectSlideRange(
                this.indicatorsByChunk ? i * this.itemsPerSlide : i,
              )
            : (this.activeSlide = this.indicatorsByChunk
                ? i * this.itemsPerSlide
                : i));
      }
      play() {
        this.isPlaying || ((this.isPlaying = !0), this.restartTimer());
      }
      pause() {
        this.noPause || ((this.isPlaying = !1), this.resetTimer());
      }
      getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
      }
      isLast(i) {
        return i + 1 >= this._slides.length;
      }
      isFirst(i) {
        return i === 0;
      }
      indicatorsSlides() {
        return this.slides.filter(
          (i, s) => !this.indicatorsByChunk || s % this.itemsPerSlide === 0,
        );
      }
      selectInitialSlides() {
        let i =
          this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
        if ((this.hideSlides(), this.singleSlideOffset)) {
          if (
            ((this._slidesWithIndexes = this.mapSlidesAndIndexes()),
            this._slides.length - i < this.itemsPerSlide)
          ) {
            let s = this._slidesWithIndexes.slice(0, i);
            this._slidesWithIndexes = [...this._slidesWithIndexes, ...s]
              .slice(s.length)
              .slice(0, this.itemsPerSlide);
          } else
            this._slidesWithIndexes = this._slidesWithIndexes.slice(
              i,
              i + this.itemsPerSlide,
            );
          (this._slidesWithIndexes.forEach((s) => (s.item.active = !0)),
            this.makeSlidesConsistent(this._slidesWithIndexes));
        } else this.selectRangeByNestedIndex(i);
        this.slideRangeChange.emit(this.getVisibleIndexes());
      }
      findNextSlideIndex(i, s) {
        let r = 0;
        if (
          !(!s && this.isLast(this.activeSlide) && i !== Le.PREV && this.noWrap)
        ) {
          switch (i) {
            case Le.NEXT:
              if (typeof this._currentActiveSlide > "u") {
                r = 0;
                break;
              }
              if (!this.isLast(this._currentActiveSlide)) {
                r = this._currentActiveSlide + 1;
                break;
              }
              r = !s && this.noWrap ? this._currentActiveSlide : 0;
              break;
            case Le.PREV:
              if (typeof this._currentActiveSlide > "u") {
                r = 0;
                break;
              }
              if (this._currentActiveSlide > 0) {
                r = this._currentActiveSlide - 1;
                break;
              }
              if (!s && this.noWrap) {
                r = this._currentActiveSlide;
                break;
              }
              r = this._slides.length - 1;
              break;
            default:
              throw new Error("Unknown direction");
          }
          return r;
        }
      }
      mapSlidesAndIndexes() {
        return this.slides.slice().map((i, s) => ({ index: s, item: i }));
      }
      selectSlideRange(i) {
        if (!this.isIndexInRange(i)) {
          if ((this.hideSlides(), !this.singleSlideOffset))
            this.selectRangeByNestedIndex(i);
          else {
            let s = this.isIndexOnTheEdges(i) ? i : i - this.itemsPerSlide + 1,
              r = this.isIndexOnTheEdges(i) ? i + this.itemsPerSlide : i + 1;
            ((this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(s, r)),
              this.makeSlidesConsistent(this._slidesWithIndexes),
              this._slidesWithIndexes.forEach((o) => (o.item.active = !0)));
          }
          this.slideRangeChange.emit(this.getVisibleIndexes());
        }
      }
      selectRangeByNestedIndex(i) {
        if (!this._chunkedSlides) return;
        let s = this._chunkedSlides
          .map((r, o) => ({ index: o, list: r }))
          .find((r) => r.list.find((o) => o.index === i) !== void 0);
        s &&
          ((this._currentVisibleSlidesIndex = s.index),
          this._chunkedSlides[s.index].forEach((r) => {
            r.item.active = !0;
          }));
      }
      isIndexOnTheEdges(i) {
        return (
          i + 1 - this.itemsPerSlide <= 0 ||
          i + this.itemsPerSlide <= this._slides.length
        );
      }
      isIndexInRange(i) {
        return this.singleSlideOffset && this._slidesWithIndexes
          ? this._slidesWithIndexes.map((r) => r.index).indexOf(i) >= 0
          : i <= this.getLastVisibleIndex() && i >= this.getFirstVisibleIndex();
      }
      hideSlides() {
        this.slides.forEach((i) => (i.active = !1));
      }
      isVisibleSlideListLast() {
        return this._chunkedSlides
          ? this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1
          : !1;
      }
      isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
      }
      moveSliderByOneItem(i) {
        let s, r, o, a;
        if (this.noWrap) {
          ((s = this.getFirstVisibleIndex()),
            (r = this.getLastVisibleIndex()),
            (o = i === Le.NEXT ? s : r),
            (a = i !== Le.NEXT ? s - 1 : this.isLast(r) ? 0 : r + 1));
          let p = this._slides.get(o);
          p && (p.active = !1);
          let b = this._slides.get(a);
          b && (b.active = !0);
          let E = this.mapSlidesAndIndexes().filter((R) => R.item.active);
          (this.makeSlidesConsistent(E),
            this.singleSlideOffset && (this._slidesWithIndexes = E),
            this.slideRangeChange.emit(this.getVisibleIndexes()));
          return;
        }
        if (!this._slidesWithIndexes || !this._slidesWithIndexes[0]) return;
        let m;
        if (
          ((s = this._slidesWithIndexes[0].index),
          (r =
            this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index),
          i === Le.NEXT)
        ) {
          (this._slidesWithIndexes.shift(), (m = this.isLast(r) ? 0 : r + 1));
          let p = this._slides.get(m);
          p && this._slidesWithIndexes.push({ index: m, item: p });
        } else {
          (this._slidesWithIndexes.pop(),
            (m = this.isFirst(s) ? this._slides.length - 1 : s - 1));
          let p = this._slides.get(m);
          p &&
            (this._slidesWithIndexes = [
              { index: m, item: p },
              ...this._slidesWithIndexes,
            ]);
        }
        (this.hideSlides(),
          this._slidesWithIndexes.forEach((p) => (p.item.active = !0)),
          this.makeSlidesConsistent(this._slidesWithIndexes),
          this.slideRangeChange.emit(
            this._slidesWithIndexes.map((p) => p.index),
          ));
      }
      moveMultilist(i) {
        this.singleSlideOffset
          ? this.moveSliderByOneItem(i)
          : (this.hideSlides(),
            this.noWrap
              ? (this._currentVisibleSlidesIndex =
                  i === Le.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1)
              : i === Le.NEXT
                ? (this._currentVisibleSlidesIndex =
                    this.isVisibleSlideListLast()
                      ? 0
                      : this._currentVisibleSlidesIndex + 1)
                : this.isVisibleSlideListFirst()
                  ? (this._currentVisibleSlidesIndex = this._chunkedSlides
                      ? this._chunkedSlides.length - 1
                      : 0)
                  : (this._currentVisibleSlidesIndex =
                      this._currentVisibleSlidesIndex - 1),
            this._chunkedSlides &&
              this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(
                (s) => (s.item.active = !0),
              ),
            this.slideRangeChange.emit(this.getVisibleIndexes()));
      }
      getVisibleIndexes() {
        if (!this.singleSlideOffset && this._chunkedSlides)
          return this._chunkedSlides[this._currentVisibleSlidesIndex].map(
            (i) => i.index,
          );
        if (this._slidesWithIndexes)
          return this._slidesWithIndexes.map((i) => i.index);
      }
      _select(i) {
        if (isNaN(i)) {
          this.pause();
          return;
        }
        if (!this.multilist && typeof this._currentActiveSlide < "u") {
          let r = this._slides.get(this._currentActiveSlide);
          typeof r < "u" && (r.active = !1);
        }
        let s = this._slides.get(i);
        typeof s < "u" &&
          ((this._currentActiveSlide = i),
          (s.active = !0),
          (this.activeSlide = i),
          this.activeSlideChange.emit(i));
      }
      restartTimer() {
        this.resetTimer();
        let i = +this.interval;
        !isNaN(i) &&
          i > 0 &&
          ui(this.platformId) &&
          (this.currentInterval = this.ngZone.runOutsideAngular(() =>
            window.setInterval(() => {
              let s = +this.interval;
              this.ngZone.run(() => {
                this.isPlaying &&
                !isNaN(this.interval) &&
                s > 0 &&
                this.slides.length
                  ? this.nextSlideFromInterval()
                  : this.pause();
              });
            }, i),
          ));
      }
      get multilist() {
        return this.itemsPerSlide > 1;
      }
      resetTimer() {
        this.currentInterval &&
          (clearInterval(this.currentInterval),
          (this.currentInterval = void 0));
      }
      checkDisabledClass(i) {
        return i === "prev"
          ? (this.activeSlide === 0 && this.noWrap && !this.multilist) ||
              (this.isFirstSlideVisible && this.noWrap && this.multilist)
          : (this.isLast(this.activeSlide) && this.noWrap && !this.multilist) ||
              (this.isLastSlideVisible && this.noWrap && this.multilist);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(Dp), v(Mt), v(li));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["carousel"]],
        inputs: {
          noWrap: "noWrap",
          noPause: "noPause",
          showIndicators: "showIndicators",
          pauseOnFocus: "pauseOnFocus",
          indicatorsByChunk: "indicatorsByChunk",
          itemsPerSlide: "itemsPerSlide",
          singleSlideOffset: "singleSlideOffset",
          isAnimated: "isAnimated",
          activeSlide: "activeSlide",
          startFromIndex: "startFromIndex",
          interval: "interval",
        },
        outputs: {
          activeSlideChange: "activeSlideChange",
          slideRangeChange: "slideRangeChange",
        },
        ngContentSelectors: Tl,
        decls: 7,
        vars: 8,
        consts: [
          [
            "tabindex",
            "0",
            1,
            "carousel",
            "slide",
            3,
            "mouseenter",
            "mouseleave",
            "mouseup",
            "keydown",
            "focusin",
            "focusout",
            "id",
          ],
          [4, "ngIf"],
          [1, "carousel-inner", 3, "ngStyle"],
          [
            "class",
            "left carousel-control carousel-control-prev",
            "href",
            "javascript:void(0);",
            "tabindex",
            "0",
            "role",
            "button",
            3,
            "disabled",
            "click",
            4,
            "ngIf",
          ],
          [
            "class",
            "right carousel-control carousel-control-next",
            "href",
            "javascript:void(0);",
            "tabindex",
            "0",
            "role",
            "button",
            3,
            "disabled",
            "click",
            4,
            "ngIf",
          ],
          [1, "carousel-indicators"],
          [3, "active", "click", 4, "ngFor", "ngForOf"],
          [3, "click"],
          [
            "type",
            "button",
            "aria-current",
            "true",
            3,
            "active",
            "click",
            4,
            "ngFor",
            "ngForOf",
          ],
          ["type", "button", "aria-current", "true", 3, "click"],
          [
            "href",
            "javascript:void(0);",
            "tabindex",
            "0",
            "role",
            "button",
            1,
            "left",
            "carousel-control",
            "carousel-control-prev",
            3,
            "click",
          ],
          ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"],
          [1, "sr-only", "visually-hidden"],
          [
            "href",
            "javascript:void(0);",
            "tabindex",
            "0",
            "role",
            "button",
            1,
            "right",
            "carousel-control",
            "carousel-control-next",
            3,
            "click",
          ],
          ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"],
        ],
        template: function (s, r) {
          (s & 1 &&
            (Me(),
            l(0, "div", 0),
            y("mouseenter", function () {
              return r.pause();
            })("mouseleave", function () {
              return r.onMouseLeave();
            })("mouseup", function () {
              return r.onMouseUp();
            })("keydown", function (a) {
              return r.keydownPress(a);
            })("focusin", function () {
              return r.pauseFocusIn();
            })("focusout", function () {
              return r.pauseFocusOut();
            }),
            C(1, vp, 3, 1, "ng-container", 1)(2, bp, 3, 1, "ng-container", 1),
            l(3, "div", 2),
            ge(4),
            d(),
            C(5, Cp, 4, 3, "a", 3)(6, wp, 4, 3, "a", 4),
            d()),
            s & 2 &&
              (_("id", "carousel" + r.currentId),
              h(),
              _(
                "ngIf",
                !r._bsVer.isBs5 && r.showIndicators && r.slides.length > 1,
              ),
              h(),
              _(
                "ngIf",
                r._bsVer.isBs5 && r.showIndicators && r.slides.length > 1,
              ),
              h(),
              _("ngStyle", Ki(6, fp, r.multilist ? "flex" : "block")),
              h(2),
              _("ngIf", r.slides.length > 1),
              h(),
              _("ngIf", r.slides.length > 1)));
        },
        dependencies: [me, ke, ro],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  El = (() => {
    let t = class t {
      constructor(i) {
        ((this.active = !1),
          (this.itemWidth = "100%"),
          (this.order = 0),
          (this.isAnimated = !1),
          (this.addClass = !0),
          (this.multilist = !1),
          (this.carousel = i));
      }
      ngOnInit() {
        (this.carousel.addSlide(this),
          (this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`),
          (this.multilist = this.carousel?.itemsPerSlide > 1));
      }
      ngOnDestroy() {
        this.carousel.removeSlide(this);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(Yr));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["slide"]],
        hostVars: 15,
        hostBindings: function (s, r) {
          s & 2 &&
            (H("aria-hidden", !r.active),
            Tt("width", r.itemWidth)("order", r.order),
            M("multilist-margin", r.multilist)("active", r.active)(
              "carousel-animation",
              r.isAnimated,
            )("item", r.addClass)("carousel-item", r.addClass));
        },
        inputs: { active: "active" },
        ngContentSelectors: Tl,
        decls: 2,
        vars: 2,
        consts: [[1, "item"]],
        template: function (s, r) {
          (s & 1 && (Me(), Je(0, "div", 0), ge(1), Ke()),
            s & 2 && M("active", r.active));
        },
        styles: [
          ".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}",
        ],
      })));
    let e = t;
    return e;
  })(),
  ls = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({})));
    let e = t;
    return e;
  })();
function Ll(e) {
  return e != null && `${e}` != "false";
}
var Ar;
try {
  Ar = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Ar = !1;
}
var Vl = (() => {
  let t = class t {
    constructor(i) {
      ((this._platformId = i),
        (this.isBrowser = this._platformId
          ? ui(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Ar) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser &&
          /safari/i.test(navigator.userAgent) &&
          this.WEBKIT));
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)(j(li));
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
var Ol = (() => {
  let t = class t {
    constructor(i) {
      this._platform = i;
    }
    isDisabled(i) {
      return i.hasAttribute("disabled");
    }
    isVisible(i) {
      return Lp(i) && getComputedStyle(i).visibility === "visible";
    }
    isTabbable(i) {
      if (!this._platform.isBrowser) return !1;
      let s = Ep(Hp(i));
      if (s && (Il(s) === -1 || !this.isVisible(s))) return !1;
      let r = i.nodeName.toLowerCase(),
        o = Il(i);
      return i.hasAttribute("contenteditable")
        ? o !== -1
        : r === "iframe" ||
            r === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !Pp(i))
          ? !1
          : r === "audio"
            ? i.hasAttribute("controls")
              ? o !== -1
              : !1
            : r === "video"
              ? o === -1
                ? !1
                : o !== null
                  ? !0
                  : this._platform.FIREFOX || i.hasAttribute("controls")
              : i.tabIndex >= 0;
    }
    isFocusable(i, s) {
      return (
        Fp(i) &&
        !this.isDisabled(i) &&
        (s?.ignoreVisibility || this.isVisible(i))
      );
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)(j(Vl));
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
function Ep(e) {
  try {
    return e.frameElement;
  } catch {
    return null;
  }
}
function Lp(e) {
  return !!(
    e.offsetWidth ||
    e.offsetHeight ||
    (typeof e.getClientRects == "function" && e.getClientRects().length)
  );
}
function Ip(e) {
  let t = e.nodeName.toLowerCase();
  return t === "input" || t === "select" || t === "button" || t === "textarea";
}
function Vp(e) {
  return Yp(e) && e.type == "hidden";
}
function Op(e) {
  return Ap(e) && e.hasAttribute("href");
}
function Yp(e) {
  return e.nodeName.toLowerCase() == "input";
}
function Ap(e) {
  return e.nodeName.toLowerCase() == "a";
}
function Yl(e) {
  if (!e.hasAttribute("tabindex") || e.tabIndex === void 0) return !1;
  let t = e.getAttribute("tabindex");
  return t == "-32768" ? !1 : !!(t && !isNaN(parseInt(t, 10)));
}
function Il(e) {
  if (!Yl(e)) return null;
  let t = parseInt(e.getAttribute("tabindex") || "", 10);
  return isNaN(t) ? -1 : t;
}
function Pp(e) {
  let t = e.nodeName.toLowerCase(),
    n = t === "input" && e.type;
  return n === "text" || n === "password" || t === "select" || t === "textarea";
}
function Fp(e) {
  return Vp(e)
    ? !1
    : Ip(e) || Op(e) || e.hasAttribute("contenteditable") || Yl(e);
}
function Hp(e) {
  return (e.ownerDocument && e.ownerDocument.defaultView) || window;
}
var Rp = (() => {
  let t = class t {
    constructor() {
      this._focusTrapStack = [];
    }
    register(i) {
      this._focusTrapStack = this._focusTrapStack.filter((r) => r !== i);
      let s = this._focusTrapStack;
      (s.length && s[s.length - 1]._disable(), s.push(i), i._enable());
    }
    deregister(i) {
      i._disable();
      let s = this._focusTrapStack,
        r = s.indexOf(i);
      r !== -1 && (s.splice(r, 1), s.length && s[s.length - 1]._enable());
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
var Pr = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(t) {
      ((this._enabled = t),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(t, this._startAnchor),
          this._toggleAnchorTabIndex(t, this._endAnchor)));
    }
    constructor(t, n, i, s, r = !1) {
      ((this._element = t),
        (this._checker = n),
        (this._ngZone = i),
        (this._document = s),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        r || this.attachAnchors());
    }
    destroy() {
      let t = this._startAnchor,
        n = this._endAnchor;
      (t &&
        (t.removeEventListener("focus", this.startAnchorListener),
        t.parentNode && t.parentNode.removeChild(t)),
        n &&
          (n.removeEventListener("focus", this.endAnchorListener),
          n.parentNode && n.parentNode.removeChild(n)),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1));
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            (this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener,
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener,
                )));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element,
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling,
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady() {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusInitialElement()));
      });
    }
    focusFirstTabbableElementWhenReady() {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusFirstTabbableElement()));
      });
    }
    focusLastTabbableElementWhenReady() {
      return new Promise((t) => {
        this._executeOnStable(() => t(this.focusLastTabbableElement()));
      });
    }
    _getRegionBoundary(t) {
      let n = this._element.querySelectorAll(
        `[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`,
      );
      for (let i = 0; i < n.length; i++)
        n[i].hasAttribute(`cdk-focus-${t}`)
          ? console.warn(
              `Found use of deprecated attribute 'cdk-focus-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`,
              n[i],
            )
          : n[i].hasAttribute(`cdk-focus-region-${t}`) &&
            console.warn(
              `Found use of deprecated attribute 'cdk-focus-region-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`,
              n[i],
            );
      return t == "start"
        ? n.length
          ? n[0]
          : this._getFirstTabbableElement(this._element)
        : n.length
          ? n[n.length - 1]
          : this._getLastTabbableElement(this._element);
    }
    focusInitialElement() {
      let t = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]",
      );
      if (t) {
        if (
          (t.hasAttribute("cdk-focus-initial") &&
            console.warn(
              "Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",
              t,
            ),
          !this._checker.isFocusable(t))
        ) {
          let n = this._getFirstTabbableElement(t);
          return (n?.focus(), !!n);
        }
        return (t.focus(), !0);
      }
      return this.focusFirstTabbableElement();
    }
    focusFirstTabbableElement() {
      let t = this._getRegionBoundary("start");
      return (t && t.focus(), !!t);
    }
    focusLastTabbableElement() {
      let t = this._getRegionBoundary("end");
      return (t && t.focus(), !!t);
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let n = t.children || t.childNodes;
      for (let i = 0; i < n.length; i++) {
        let s =
          n[i].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(n[i])
            : null;
        if (s) return s;
      }
      return null;
    }
    _getLastTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let n = t.children || t.childNodes;
      for (let i = n.length - 1; i >= 0; i--) {
        let s =
          n[i].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(n[i])
            : null;
        if (s) return s;
      }
      return null;
    }
    _createAnchor() {
      let t = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, t),
        t.classList.add("cdk-visually-hidden"),
        t.classList.add("cdk-focus-trap-anchor"),
        t.setAttribute("aria-hidden", "true"),
        t
      );
    }
    _toggleAnchorTabIndex(t, n) {
      t ? n.setAttribute("tabindex", "0") : n.removeAttribute("tabindex");
    }
    toggleAnchors(t) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(t, this._startAnchor),
        this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    _executeOnStable(t) {
      this._ngZone.isStable
        ? t()
        : this._ngZone.onStable.pipe(Ri(1)).subscribe(t);
    }
  },
  jp = (() => {
    let t = class t {
      constructor(i, s, r) {
        ((this._checker = i), (this._ngZone = s), (this._document = r));
      }
      create(i, s = !1) {
        return new Pr(i, this._checker, this._ngZone, this._document, s);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(j(Ol), j(Mt), j(dt));
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  Al = (() => {
    let t = class t {
      get enabled() {
        return this.focusTrap.enabled;
      }
      set enabled(i) {
        this.focusTrap.enabled = Ll(i);
      }
      get autoCapture() {
        return this._autoCapture;
      }
      set autoCapture(i) {
        this._autoCapture = Ll(i);
      }
      constructor(i, s, r) {
        ((this._elementRef = i),
          (this._focusTrapFactory = s),
          (this._previouslyFocusedElement = null),
          (this._autoCapture = !1),
          (this._document = r),
          (this.focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement,
            !0,
          )));
      }
      ngOnDestroy() {
        (this.focusTrap.destroy(),
          this._previouslyFocusedElement &&
            (this._previouslyFocusedElement.focus(),
            (this._previouslyFocusedElement = null)));
      }
      ngAfterContentInit() {
        (this.focusTrap.attachAnchors(),
          this.autoCapture && this._captureFocus());
      }
      ngDoCheck() {
        this.focusTrap.hasAttached() || this.focusTrap.attachAnchors();
      }
      ngOnChanges(i) {
        let s = i.autoCapture;
        s &&
          !s.firstChange &&
          this.autoCapture &&
          this.focusTrap.hasAttached() &&
          this._captureFocus();
      }
      _captureFocus() {
        ((this._previouslyFocusedElement = this._document.activeElement),
          this.focusTrap.focusInitialElementWhenReady());
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(P), v(jp), v(dt));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["", "focusTrap", ""]],
        inputs: {
          enabled: [0, "cdkTrapFocus", "enabled"],
          autoCapture: [0, "cdkTrapFocusAutoCapture", "autoCapture"],
        },
        exportAs: ["focusTrap"],
        features: [ee([Rp, Vl, Ol]), Dt],
      })));
    let e = t;
    return e;
  })(),
  Pl = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({ imports: [te] })));
    let e = t;
    return e;
  })();
var Np = ["*"],
  Fl = (() => {
    let t = class t {
      constructor() {
        ((this.hide = () => {}), (this.setClass = () => {}));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })();
var jl = (() => {
    let t = class t {};
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  wn = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !1,
    ignoreBackdropClick: !1,
    class: "",
    animated: !0,
    initialState: {},
    closeInterceptor: void 0,
  },
  Nl = new Ni("override-default-config"),
  we = {
    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
    BACKDROP: "modal-backdrop",
    OPEN: "modal-open",
    FADE: "fade",
    IN: "in",
    SHOW: "show",
  };
var ds = { MODAL: 300, BACKDROP: 150 },
  Dn = {
    BACKRDOP: "backdrop-click",
    ESC: "esc",
    BACK: "browser-back-navigation-clicked",
  },
  Bl = (() => {
    let t = class t {
      get isAnimated() {
        return this._isAnimated;
      }
      set isAnimated(i) {
        this._isAnimated = i;
      }
      get isShown() {
        return this._isShown;
      }
      set isShown(i) {
        ((this._isShown = i),
          i
            ? this.renderer.addClass(this.element.nativeElement, `${we.SHOW}`)
            : this.renderer.removeClass(
                this.element.nativeElement,
                `${we.SHOW}`,
              ));
      }
      constructor(i, s) {
        ((this._isAnimated = !1),
          (this._isShown = !1),
          (this.element = i),
          (this.renderer = s));
      }
      ngOnInit() {
        (this.isAnimated &&
          (this.renderer.addClass(this.element.nativeElement, `${we.FADE}`),
          tn.reflow(this.element.nativeElement)),
          (this.isShown = !0));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(P), v(J));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["bs-modal-backdrop"]],
        hostAttrs: [1, "modal-backdrop"],
        decls: 0,
        vars: 0,
        template: function (s, r) {},
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  Bp = 1,
  Fr = (() => {
    let t = class t {
      constructor(i, s, r) {
        ((this.clf = s),
          (this.modalDefaultOption = r),
          (this.onShow = new k()),
          (this.onShown = new k()),
          (this.onHide = new k()),
          (this.onHidden = new k()),
          (this.isBodyOverflowing = !1),
          (this.originalBodyPadding = 0),
          (this.scrollbarWidth = 0),
          (this.modalsCount = 0),
          (this.lastHiddenId = null),
          (this.loaders = []),
          (this._focusEl = null),
          (this._backdropLoader = this.clf.createLoader()),
          (this._renderer = i.createRenderer(null, null)),
          (this.config = r ? Object.assign({}, wn, r) : wn));
      }
      show(i, s) {
        ((this._focusEl = I.activeElement),
          this.modalsCount++,
          (this.lastHiddenId = null),
          this._createLoaders());
        let r = s?.id || Bp++;
        return (
          (this.config = this.modalDefaultOption
            ? Object.assign({}, wn, this.modalDefaultOption, s)
            : Object.assign({}, wn, s)),
          (this.config.id = r),
          this._showBackdrop(),
          (this.lastDismissReason = void 0),
          this._showModal(i)
        );
      }
      hide(i) {
        this.lastHiddenId !== i &&
          ((this.lastHiddenId = i),
          (this.modalsCount === 1 || i == null) &&
            (this._hideBackdrop(), this.resetScrollbar()),
          (this.modalsCount =
            this.modalsCount >= 1 && i != null ? this.modalsCount - 1 : 0),
          setTimeout(
            () => {
              (this._hideModal(i), this.removeLoaders(i));
            },
            this.config.animated ? ds.BACKDROP : 0,
          ),
          this._focusEl && this._focusEl.focus());
      }
      _showBackdrop() {
        let i =
            this.config.backdrop === !0 || this.config.backdrop === "static",
          s = !this.backdropRef || !this.backdropRef.instance.isShown;
        this.modalsCount === 1 &&
          (this.removeBackdrop(),
          i &&
            s &&
            (this._backdropLoader
              .attach(Bl)
              .to("body")
              .show({ isAnimated: this.config.animated }),
            (this.backdropRef = this._backdropLoader._componentRef)));
      }
      _hideBackdrop() {
        if (!this.backdropRef) return;
        this.backdropRef.instance.isShown = !1;
        let i = this.config.animated ? ds.BACKDROP : 0;
        setTimeout(() => this.removeBackdrop(), i);
      }
      _showModal(i) {
        let s = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers)
          for (let a of this.config.providers) s.provide(a);
        let r = new Fl(),
          o = s
            .provide({ provide: jl, useValue: this.config })
            .provide({ provide: Fl, useValue: r })
            .attach(Wp)
            .to("body");
        return (
          (r.hide = () => o.instance?.hide()),
          (r.setClass = (a) => {
            o.instance && (o.instance.config.class = a);
          }),
          (r.onHidden = new k()),
          (r.onHide = new k()),
          this.copyEvent(s.onBeforeHide, r.onHide),
          this.copyEvent(s.onHidden, r.onHidden),
          o.show({
            content: i,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this,
            id: this.config.id,
          }),
          o.instance &&
            ((o.instance.level = this.getModalsCount()),
            (r.content = s.getInnerComponent()),
            (r.id = o.instance.config?.id)),
          r
        );
      }
      _hideModal(i) {
        if (i != null) {
          let s = this.loaders.findIndex((o) => o.instance?.config.id === i),
            r = this.loaders[s];
          r && r.hide(i);
        } else
          this.loaders.forEach((s) => {
            s.instance && s.hide(s.instance.config.id);
          });
      }
      getModalsCount() {
        return this.modalsCount;
      }
      setDismissReason(i) {
        this.lastDismissReason = i;
      }
      removeBackdrop() {
        (this._renderer.removeClass(I.body, we.OPEN),
          this._renderer.setStyle(I.body, "overflow-y", ""),
          this._backdropLoader.hide(),
          (this.backdropRef = void 0));
      }
      checkScrollbar() {
        ((this.isBodyOverflowing = I.body.clientWidth < window.innerWidth),
          (this.scrollbarWidth = this.getScrollbarWidth()));
      }
      setScrollbar() {
        I &&
          ((this.originalBodyPadding = parseInt(
            window.getComputedStyle(I.body).getPropertyValue("padding-right") ||
              "0",
            10,
          )),
          this.isBodyOverflowing &&
            (I.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`));
      }
      resetScrollbar() {
        I.body.style.paddingRight = `${this.originalBodyPadding}px`;
      }
      getScrollbarWidth() {
        let i = this._renderer.createElement("div");
        (this._renderer.addClass(i, we.SCROLLBAR_MEASURER),
          this._renderer.appendChild(I.body, i));
        let s = i.offsetWidth - i.clientWidth;
        return (this._renderer.removeChild(I.body, i), s);
      }
      _createLoaders() {
        let i = this.clf.createLoader();
        (this.copyEvent(i.onBeforeShow, this.onShow),
          this.copyEvent(i.onShown, this.onShown),
          this.copyEvent(i.onBeforeHide, this.onHide),
          this.copyEvent(i.onHidden, this.onHidden),
          this.loaders.push(i));
      }
      removeLoaders(i) {
        if (i != null) {
          let s = this.loaders.findIndex((r) => r.instance?.config.id === i);
          s >= 0 &&
            (this.loaders.splice(s, 1),
            this.loaders.forEach((r, o) => {
              r.instance && (r.instance.level = o + 1);
            }));
        } else this.loaders.splice(0, this.loaders.length);
      }
      copyEvent(i, s) {
        i.subscribe((r) => {
          s.emit(this.lastDismissReason || r);
        });
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(j(di), j(ve), j(Nl, 8));
    }),
      (t.ɵprov = L({ token: t, factory: t.ɵfac, providedIn: "platform" })));
    let e = t;
    return e;
  })(),
  Wp = (() => {
    let t = class t {
      constructor(i, s, r) {
        ((this._element = s),
          (this._renderer = r),
          (this.isShown = !1),
          (this.isAnimated = !1),
          (this._focusEl = null),
          (this.isModalHiding = !1),
          (this.clickStartedInContent = !1),
          (this.config = Object.assign({}, i)));
      }
      ngOnInit() {
        ((this._focusEl = I.activeElement),
          this.isAnimated &&
            this._renderer.addClass(this._element.nativeElement, we.FADE),
          this._renderer.setStyle(
            this._element.nativeElement,
            "display",
            "block",
          ),
          setTimeout(
            () => {
              ((this.isShown = !0),
                this._renderer.addClass(this._element.nativeElement, we.SHOW));
            },
            this.isAnimated ? ds.BACKDROP : 0,
          ),
          I &&
            I.body &&
            (this.bsModalService &&
              this.bsModalService.getModalsCount() === 1 &&
              (this.bsModalService.checkScrollbar(),
              this.bsModalService.setScrollbar()),
            this._renderer.addClass(I.body, we.OPEN),
            this._renderer.setStyle(I.body, "overflow-y", "hidden")),
          this._element.nativeElement && this._element.nativeElement.focus());
      }
      onClickStarted(i) {
        this.clickStartedInContent = i.target !== this._element.nativeElement;
      }
      onClickStop(i) {
        let s =
          i.target === this._element.nativeElement &&
          !this.clickStartedInContent;
        if (
          this.config.ignoreBackdropClick ||
          this.config.backdrop === "static" ||
          !s
        ) {
          this.clickStartedInContent = !1;
          return;
        }
        (this.bsModalService?.setDismissReason(Dn.BACKRDOP), this.hide());
      }
      onPopState() {
        (this.bsModalService?.setDismissReason(Dn.BACK), this.hide());
      }
      onEsc(i) {
        this.isShown &&
          ((i.keyCode === 27 || i.key === "Escape") && i.preventDefault(),
          this.config.keyboard &&
            this.level === this.bsModalService?.getModalsCount() &&
            (this.bsModalService?.setDismissReason(Dn.ESC), this.hide()));
      }
      ngOnDestroy() {
        this.isShown && this._hide();
      }
      hide() {
        if (!this.isModalHiding) {
          if (this.config.closeInterceptor) {
            this.config.closeInterceptor().then(
              () => this._hide(),
              () => {},
            );
            return;
          }
          this._hide();
        }
      }
      _hide() {
        ((this.isModalHiding = !0),
          this._renderer.removeClass(this._element.nativeElement, we.SHOW),
          setTimeout(
            () => {
              ((this.isShown = !1),
                this.bsModalService?.hide(this.config.id),
                I &&
                  I.body &&
                  this.bsModalService?.getModalsCount() === 0 &&
                  (this._renderer.removeClass(I.body, we.OPEN),
                  this._renderer.setStyle(I.body, "overflow-y", "")),
                this.bsModalService?.hide(this.config.id),
                (this.isModalHiding = !1),
                this._focusEl && this._focusEl.focus());
            },
            this.isAnimated ? ds.MODAL : 0,
          ));
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(jl), v(P), v(J));
    }),
      (t.ɵcmp = x({
        type: t,
        selectors: [["modal-container"]],
        hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
        hostVars: 3,
        hostBindings: function (s, r) {
          (s & 1 &&
            y("mousedown", function (a) {
              return r.onClickStarted(a);
            })("click", function (a) {
              return r.onClickStop(a);
            })(
              "popstate",
              function () {
                return r.onPopState();
              },
              $i,
            )(
              "keydown.esc",
              function (a) {
                return r.onEsc(a);
              },
              $i,
            ),
            s & 2 &&
              H("aria-modal", !0)("aria-labelledby", r.config.ariaLabelledBy)(
                "aria-describedby",
                r.config.ariaDescribedby,
              ));
        },
        features: [ee([Fr])],
        ngContentSelectors: Np,
        decls: 3,
        vars: 2,
        consts: [
          ["role", "document", "focusTrap", ""],
          [1, "modal-content"],
        ],
        template: function (s, r) {
          (s & 1 && (Me(), l(0, "div", 0)(1, "div", 1), ge(2), d()()),
            s & 2 &&
              Qe(
                "modal-dialog" + (r.config.class ? " " + r.config.class : ""),
              ));
        },
        dependencies: [Al],
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  Hl = 300,
  Rl = 150,
  Wl = (() => {
    let t = class t {
      set config(i) {
        this._config = this.getConfig(i);
      }
      get config() {
        return this._config;
      }
      get isShown() {
        return this._isShown;
      }
      constructor(i, s, r, o, a) {
        ((this._element = i),
          (this._renderer = r),
          (this.onShow = new k()),
          (this.onShown = new k()),
          (this.onHide = new k()),
          (this.onHidden = new k()),
          (this._isShown = !1),
          (this.isBodyOverflowing = !1),
          (this.originalBodyPadding = 0),
          (this.scrollbarWidth = 0),
          (this.timerHideModal = 0),
          (this.timerRmBackDrop = 0),
          (this.isNested = !1),
          (this.clickStartedInContent = !1),
          (this._focusEl = null),
          (this._backdrop = o.createLoader(i, s, r)),
          (this._config = a || wn));
      }
      onClickStarted(i) {
        this.clickStartedInContent = i.target !== this._element.nativeElement;
      }
      onClickStop(i) {
        let s =
          i.target === this._element.nativeElement &&
          !this.clickStartedInContent;
        if (
          this.config.ignoreBackdropClick ||
          this.config.backdrop === "static" ||
          !s
        ) {
          this.clickStartedInContent = !1;
          return;
        }
        ((this.dismissReason = Dn.BACKRDOP), this.hide(i));
      }
      onEsc(i) {
        this._isShown &&
          ((i.keyCode === 27 || i.key === "Escape") && i.preventDefault(),
          this.config.keyboard && ((this.dismissReason = Dn.ESC), this.hide()));
      }
      ngOnDestroy() {
        this._isShown &&
          ((this._isShown = !1), this.hideModal(), this._backdrop.dispose());
      }
      ngOnInit() {
        ((this._config = this._config || this.getConfig()),
          setTimeout(() => {
            this._config.show && this.show();
          }, 0));
      }
      toggle() {
        return this._isShown ? this.hide() : this.show();
      }
      show() {
        ((this.dismissReason = void 0),
          this.onShow.emit(this),
          !this._isShown &&
            (clearTimeout(this.timerHideModal),
            clearTimeout(this.timerRmBackDrop),
            (this._isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            I &&
              I.body &&
              (I.body.classList.contains(we.OPEN)
                ? (this.isNested = !0)
                : (this._renderer.addClass(I.body, we.OPEN),
                  this._renderer.setStyle(I.body, "overflow-y", "hidden"))),
            this.showBackdrop(() => {
              this.showElement();
            })));
      }
      hide(i) {
        if (this._isShown) {
          if ((i && i.preventDefault(), this.config.closeInterceptor)) {
            this.config.closeInterceptor().then(
              () => this._hide(),
              () => {},
            );
            return;
          }
          this._hide();
        }
      }
      _hide() {
        (this.onHide.emit(this),
          U.clearTimeout(this.timerHideModal),
          U.clearTimeout(this.timerRmBackDrop),
          (this._isShown = !1),
          this._renderer.removeClass(this._element.nativeElement, we.SHOW),
          this._config.animated
            ? (this.timerHideModal = U.setTimeout(() => this.hideModal(), Hl))
            : this.hideModal(),
          this._focusEl && this._focusEl.focus());
      }
      getConfig(i) {
        return Object.assign({}, this._config, i);
      }
      showElement() {
        ((!this._element.nativeElement.parentNode ||
          this._element.nativeElement.parentNode.nodeType !==
            Node.ELEMENT_NODE) &&
          I &&
          I.body &&
          I.body.appendChild(this._element.nativeElement),
          this._renderer.setAttribute(
            this._element.nativeElement,
            "aria-hidden",
            "false",
          ),
          this._renderer.setAttribute(
            this._element.nativeElement,
            "aria-modal",
            "true",
          ),
          this._renderer.setStyle(
            this._element.nativeElement,
            "display",
            "block",
          ),
          this._renderer.setProperty(
            this._element.nativeElement,
            "scrollTop",
            0,
          ),
          this._config.animated && tn.reflow(this._element.nativeElement),
          this._renderer.addClass(this._element.nativeElement, we.SHOW));
        let i = () => {
          (this._config.focus && this._element.nativeElement.focus(),
            this.onShown.emit(this));
        };
        this._config.animated ? setTimeout(i, Hl) : i();
      }
      hideModal() {
        (this._renderer.setAttribute(
          this._element.nativeElement,
          "aria-hidden",
          "true",
        ),
          this._renderer.setStyle(
            this._element.nativeElement,
            "display",
            "none",
          ),
          this.showBackdrop(() => {
            (this.isNested ||
              (I &&
                I.body &&
                (this._renderer.removeClass(I.body, we.OPEN),
                this._renderer.setStyle(I.body, "overflow-y", "")),
              this.resetScrollbar()),
              this.resetAdjustments(),
              this.focusOtherModal(),
              this.onHidden.emit(this));
          }));
      }
      showBackdrop(i) {
        if (
          this._isShown &&
          this.config.backdrop &&
          (!this.backdrop || !this.backdrop.instance.isShown)
        ) {
          if (
            (this.removeBackdrop(),
            this._backdrop
              .attach(Bl)
              .to("body")
              .show({ isAnimated: this._config.animated }),
            (this.backdrop = this._backdrop._componentRef),
            !i)
          )
            return;
          if (!this._config.animated) {
            i();
            return;
          }
          setTimeout(i, Rl);
        } else if (!this._isShown && this.backdrop) {
          this.backdrop.instance.isShown = !1;
          let s = () => {
            (this.removeBackdrop(), i && i());
          };
          this.backdrop.instance.isAnimated
            ? (this.timerRmBackDrop = U.setTimeout(s, Rl))
            : s();
        } else i && i();
      }
      removeBackdrop() {
        this._backdrop.hide();
      }
      focusOtherModal() {
        if (this._element.nativeElement.parentElement == null) return;
        let i =
          this._element.nativeElement.parentElement.querySelectorAll(
            ".in[bsModal]",
          );
        i.length && i[i.length - 1].focus();
      }
      resetAdjustments() {
        (this._renderer.setStyle(
          this._element.nativeElement,
          "paddingLeft",
          "",
        ),
          this._renderer.setStyle(
            this._element.nativeElement,
            "paddingRight",
            "",
          ));
      }
      checkScrollbar() {
        ((this.isBodyOverflowing = I.body.clientWidth < U.innerWidth),
          (this.scrollbarWidth = this.getScrollbarWidth()));
      }
      setScrollbar() {
        I &&
          ((this.originalBodyPadding = parseInt(
            U.getComputedStyle(I.body).getPropertyValue("padding-right") || 0,
            10,
          )),
          this.isBodyOverflowing &&
            (I.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`));
      }
      resetScrollbar() {
        I.body.style.paddingRight = `${this.originalBodyPadding}px`;
      }
      getScrollbarWidth() {
        let i = this._renderer.createElement("div");
        (this._renderer.addClass(i, we.SCROLLBAR_MEASURER),
          this._renderer.appendChild(I.body, i));
        let s = i.offsetWidth - i.clientWidth;
        return (this._renderer.removeChild(I.body, i), s);
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)(v(P), v(qe), v(J), v(ve), v(Nl, 8));
    }),
      (t.ɵdir = he({
        type: t,
        selectors: [["", "bsModal", ""]],
        hostBindings: function (s, r) {
          s & 1 &&
            y("mousedown", function (a) {
              return r.onClickStarted(a);
            })("mouseup", function (a) {
              return r.onClickStop(a);
            })("keydown.esc", function (a) {
              return r.onEsc(a);
            });
        },
        inputs: { config: "config", closeInterceptor: "closeInterceptor" },
        outputs: {
          onShow: "onShow",
          onShown: "onShown",
          onHide: "onHide",
          onHidden: "onHidden",
        },
        exportAs: ["bs-modal"],
      })));
    let e = t;
    return e;
  })(),
  cs = (() => {
    let t = class t {
      static forRoot() {
        return { ngModule: t, providers: [Fr, ve, oe] };
      }
      static forChild() {
        return { ngModule: t, providers: [Fr, ve, oe] };
      }
    };
    ((t.ɵfac = function (s) {
      return new (s || t)();
    }),
      (t.ɵmod = $({ type: t })),
      (t.ɵinj = W({ imports: [Pl] })));
    let e = t;
    return e;
  })();
var $l = (() => {
  let t = class t {
    static forRoot() {
      return { ngModule: t, providers: [] };
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵmod = $({ type: t })),
    (t.ɵinj = W({ imports: [te] })));
  let e = t;
  return e;
})();
var us = () => [El, Yr];
function Up(e, t) {
  (e & 1 &&
    (l(0, "carousel", 21)(1, "slide"),
    w(2, "img", 22),
    d(),
    l(3, "slide"),
    w(4, "img", 23),
    d()()),
    e & 2 && _("showIndicators", !0));
}
function zp(e, t) {}
function Gp(e, t) {
  (e & 1 && (l(0, "carousel", 21)(1, "slide"), w(2, "img", 24), d()()),
    e & 2 && _("showIndicators", !0));
}
function qp(e, t) {}
function Jp(e, t) {
  (e & 1 &&
    (l(0, "carousel", 21)(1, "slide"),
    w(2, "img", 25),
    d(),
    l(3, "slide"),
    w(4, "img", 26),
    d(),
    l(5, "slide"),
    w(6, "img", 27),
    d()()),
    e & 2 && _("showIndicators", !0));
}
function Kp(e, t) {}
function Qp(e, t) {
  (e & 1 && (l(0, "carousel", 21)(1, "slide"), w(2, "img", 28), d()()),
    e & 2 && _("showIndicators", !0));
}
function Xp(e, t) {}
var Ul = (() => {
  let t = class t {};
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵcmp = x({
      type: t,
      selectors: [["app-timeline"]],
      decls: 126,
      vars: 0,
      consts: [
        [500],
        [1, "cd-timeline", "cd-container"],
        [1, "cd-timeline-block"],
        [1, "cd-timeline-point"],
        [1, "cd-timeline-content", "card"],
        [1, "card-header"],
        [1, "card-title"],
        [1, "card-body", "text-white"],
        [1, "cd-date"],
        [1, "card"],
        [1, "row", "justify-content-between", "align-items-center"],
        [1, "col-12"],
        [1, "company-info", "text-center"],
        [1, "company-logo", "mb-2"],
        [1, "logo-placeholder", "rocket-code-logo"],
        [1, "text-muted"],
        [1, "col-md-6"],
        [1, "logo-placeholder", "blife-logo"],
        [1, "logo-placeholder", "midoc-logo"],
        [1, "logo-placeholder", "skytex-logo"],
        [1, "logo-placeholder", "veterinaria-logo"],
        [3, "showIndicators"],
        ["alt", "BLIFE App", "src", "assets/img/myblife.png", 1, "d-block"],
        ["alt", "BLIFE ERP", "src", "assets/img/erpblife.png", 1, "d-block"],
        [
          "alt",
          "MIDOCONLINE Home",
          "src",
          "assets/img/homemidoc.png",
          1,
          "d-block",
        ],
        [
          "alt",
          "Skynet Angular",
          "src",
          "assets/img/skynetapp.png",
          1,
          "d-block",
        ],
        [
          "alt",
          "SkynetInvoiceHub",
          "src",
          "assets/img/skyinvoice.png",
          1,
          "d-block",
        ],
        ["alt", "Login", "src", "assets/img/skylogin.png", 1, "d-block"],
        ["alt", "Veterinaria", "src", "assets/img/vet.png", 1, "d-block"],
      ],
      template: function (s, r) {
        s & 1 &&
          (l(0, "section", 1)(1, "div", 2),
          w(2, "div", 3),
          l(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2"),
          c(7, "Full Stack Developer - The Rocket Code"),
          d()()(),
          l(8, "div", 7)(9, "p"),
          c(
            10,
            " En The Rocket Code, me especializo en el desarrollo de aplicaciones web modernas, integraciones de herramientas de IA y soluciones de e-commerce escalables. Trabajo en proyectos que requieren arquitecturas complejas y integraci\xF3n de m\xFAltiples servicios, implementando herramientas con Claude AI, Gemini y LangGraph, desarrollando APIs con NestJS y creando interfaces con NextJS, React y Angular v18/v19. Tambi\xE9n me especializo en desarrollo y administraci\xF3n de Shopify para aplicaciones del sector asegurador y fintech. ",
          ),
          d(),
          l(11, "span", 8),
          c(12, " Marzo 2025 - Actualidad "),
          l(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(
            17,
            "div",
            13,
          )(18, "div", 14),
          c(19, " \u{1F680} THE ROCKET CODE "),
          d()(),
          l(20, "small", 15),
          c(21, "AI Software Development \u2022 Miami, USA"),
          d()()()()()()()()(),
          l(22, "div", 2),
          w(23, "div", 3),
          l(24, "div", 4)(25, "div", 5)(26, "div", 6)(27, "h2"),
          c(28, "Backend Developer - BLIFE"),
          d()()(),
          l(29, "div", 7)(30, "p"),
          c(
            31,
            " En BLIFE, fui Backend Developer especializado en el desarrollo de microservicios utilizando NestJS, GraphQL, y NATS para arquitectura distribuida. Desarroll\xE9 Blife-e-Signature con Flask y Python, implement\xE9 CI/CD con GitHub Actions y gestion\xE9 despliegues en AWS. Apliqu\xE9 principios de Clean Code, SOLID y Clean Architecture para mantener aplicaciones escalables y eficientes. ",
          ),
          d(),
          l(32, "span", 8),
          c(33, " Septiembre 2024 - Marzo 2025 "),
          l(34, "div", 9)(35, "div", 10)(36, "div", 16)(37, "div", 12)(
            38,
            "div",
            13,
          )(39, "div", 17),
          c(40, "\u{1F4CA} BLIFE"),
          d()(),
          l(41, "small", 15),
          c(42, "Backend Development \u2022 Microservices"),
          d()()(),
          l(43, "div", 16),
          zi(44, Up, 5, 1)(45, zp, 0, 0),
          qi(46, 44, us, null, 45, null, null, 0, Gi),
          Ji(),
          d()()()()()()(),
          l(48, "div", 2),
          w(49, "div", 3),
          l(50, "div", 4)(51, "div", 5)(52, "div", 6)(53, "h2"),
          c(54, "Full Stack Developer - MIDOCONLINE"),
          d()()(),
          l(55, "div", 7)(56, "p"),
          c(
            57,
            " En MIDOCONLINE, lider\xE9 la refactorizaci\xF3n completa del backend, migr\xE1ndolo de Laravel 8 a Laravel 11, optimizando su arquitectura y mejorando significativamente el rendimiento. Trabaj\xE9 con MySQL y PostgreSQL, desarroll\xE9 ERPs internos con Angular y interfaces p\xFAblicas con React, utilizando Laravel Blade y gestionando la infraestructura con Docker en AWS. ",
          ),
          d(),
          l(58, "span", 8),
          c(59, " Abril 2024 - Septiembre 2024 "),
          l(60, "div", 9)(61, "div", 10)(62, "div", 16)(63, "div", 12)(
            64,
            "div",
            13,
          )(65, "div", 18),
          c(66, " \u{1F3E5} MIDOCONLINE "),
          d()(),
          l(67, "small", 15),
          c(68, "Telemedicine Platform \u2022 Laravel Migration"),
          d()()(),
          l(69, "div", 16),
          zi(70, Gp, 3, 1)(71, qp, 0, 0),
          qi(72, 70, us, null, 71, null, null, 0, Gi),
          Ji(),
          d()()()()()()(),
          l(74, "div", 2),
          w(75, "div", 3),
          l(76, "div", 4)(77, "div", 5)(78, "div", 6)(79, "h2"),
          c(80, "Full Stack Developer - Skytex M\xE9xico"),
          d()()(),
          l(81, "div", 7)(82, "p"),
          c(
            83,
            " En SKYTEX, desarroll\xE9 aplicaciones web y m\xF3viles para optimizaci\xF3n de procesos de producci\xF3n textil, liderando proyectos de digitalizaci\xF3n industrial. Desarroll\xE9 ERP interno (Skynet 2.0) y portal de facturaci\xF3n (SkyInvoiceHub), migr\xE9 app de log\xEDstica a Kotlin con Jetpack Compose y MVVM, e implement\xE9 control de accesos con WebSockets. Tambi\xE9n lider\xE9 la dockerizaci\xF3n del backend y gesti\xF3n de servidores Ubuntu con Apache y NGINX. ",
          ),
          d(),
          l(84, "span", 8),
          c(85, " Enero 2022 - Abril 2024 "),
          l(86, "div", 9)(87, "div", 10)(88, "div", 16)(89, "div", 12)(
            90,
            "div",
            13,
          )(91, "div", 19),
          c(92, " \u{1F3ED} SKYTEX M\xC9XICO "),
          d()(),
          l(93, "small", 15),
          c(94, "Textile Industry \u2022 Digital Transformation"),
          d()()(),
          l(95, "div", 16),
          zi(96, Jp, 7, 1)(97, Kp, 0, 0),
          qi(98, 96, us, null, 97, null, null, 0, Gi),
          Ji(),
          d()()()()()()(),
          l(100, "div", 2),
          w(101, "div", 3),
          l(102, "div", 4)(103, "div", 5)(104, "div", 6)(105, "h2"),
          c(106, "Full Stack Developer - Veterinaria Contla"),
          d()()(),
          l(107, "div", 7)(108, "p"),
          c(
            109,
            " Experiencia como freelance en el desarrollo de un sistema integral de punto de venta e inventario, utilizando Laravel como framework principal y aprovechando servicios en la nube para garantizar la escalabilidad y disponibilidad del producto. Encargado de dise\xF1ar, desarrollar y desplegar soluciones personalizadas, adaptadas a las necesidades espec\xEDficas del cliente, demostrando habilidades de trabajo aut\xF3nomo, gesti\xF3n de proyectos y cumplimiento de objetivos. ",
          ),
          d(),
          l(110, "span", 8),
          c(111, " Enero 2021 - Enero 2022 "),
          l(112, "div", 9)(113, "div", 10)(114, "div", 16)(115, "div", 12)(
            116,
            "div",
            13,
          )(117, "div", 20),
          c(118, " \u{1F43E} VETERINARIA CONTLA "),
          d()(),
          l(119, "small", 15),
          c(120, "Freelance \u2022 POS System Development"),
          d()()(),
          l(121, "div", 16),
          zi(122, Qp, 3, 1)(123, Xp, 0, 0),
          qi(124, 122, us, null, 123, null, null, 0, Gi),
          Ji(),
          d()()()()()()()());
      },
      dependencies: [ls],
      styles: [
        ".company-info[_ngcontent-%COMP%]{padding:1rem}.logo-placeholder[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;font-size:.9rem;letter-spacing:.5px;transition:all .3s ease}.rocket-code-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#050e2a,#1a1a2e);color:#a6f674;border:2px solid #a6f674}.dark-theme[_ngcontent-%COMP%]   .rocket-code-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0a1647,#2a2a50);color:#c8ff8a;border:2px solid #c8ff8a}.blife-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2d2d2d,#4a4a4a);color:#00cbf0;border:2px solid #00cbf0}.dark-theme[_ngcontent-%COMP%]   .blife-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1a1a1a,#363636);color:#20e8ff;border:2px solid #20e8ff}.midoc-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0d8ef2,#34e8e3);color:#fff;border:2px solid #799ef9}.dark-theme[_ngcontent-%COMP%]   .midoc-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1f5fff,#45f8f3);color:#1a1a1a;border:2px solid #89aeff}.skytex-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#017937,#047835);color:#fff;border:2px solid #2dce89}.dark-theme[_ngcontent-%COMP%]   .skytex-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#148f47,#158845);color:#fff;border:2px solid #4dde99}.veterinaria-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#5e72e4,#8965e0);color:#fff;border:2px solid #f3a4b5}.dark-theme[_ngcontent-%COMP%]   .veterinaria-logo[_ngcontent-%COMP%]{background:linear-gradient(135deg,#7e92ff,#a985ff);color:#fff;border:2px solid #ffb4c5}.logo-placeholder[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #0003}",
      ],
    })));
  let e = t;
  return e;
})();
var Hr = (() => {
  let t = class t {
    constructor() {
      ((this.translationService = ie(Fn)),
        (this.t = this.translationService.t));
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵcmp = x({
      type: t,
      selectors: [["app-home"]],
      decls: 244,
      vars: 0,
      consts: [
        ["id", "home", 1, "page-header", "header-filter"],
        [1, "squares", "square1"],
        [1, "squares", "square2"],
        [1, "squares", "square3"],
        [1, "squares", "square4"],
        [1, "squares", "square5"],
        [1, "squares", "square6"],
        [1, "container"],
        [1, "content-center", "brand"],
        [1, "h1-seo", "font-weight-bold"],
        [1, "font-weight-normal", "w-100", "text-base", "md:text-2xl"],
        [1, "main"],
        ["id", "aboutme", 1, "section"],
        [1, "squares", "square7"],
        [1, "squares", "square8"],
        [1, "row", "justify-content-between", "align-items-center"],
        [1, "col-lg-6", "col-md-6"],
        [1, "profile-title", "text-left"],
        [1, "profile-description", "text-left", "text-white"],
        [
          1,
          "col-lg-4",
          "col-md-6",
          "ml-auto",
          "mr-auto",
          2,
          "margin-top",
          "2rem",
        ],
        [1, "card", "card-coin"],
        [1, "card-header"],
        [
          "src",
          "assets/img/iam2.jpg",
          1,
          "img-center",
          "img-fluid",
          "rounded-circle",
          "img-shadow-success",
          2,
          "width",
          "6rem",
          "max-height",
          "80%",
        ],
        [1, "card-body"],
        [1, "nav-tabs-danger", "justify-content-center", "tab-subcategories"],
        ["heading", "Habilidades"],
        [1, "table-responsive"],
        [
          "id",
          "plain-table",
          1,
          "table",
          "tablesorter",
          2,
          "width",
          "100%",
          "min-width",
          "fit-content",
        ],
        [1, "text-danger"],
        [1, "header"],
        [1, "text-white"],
        ["heading", "Estudios"],
        ["colspan", "2", 1, "text-center"],
        ["id", "experience", 1, "section"],
        [1, "squares", "square9"],
        [1, "row", "justify-content-between"],
        [1, "col-md-12"],
      ],
      template: function (s, r) {
        s & 1 &&
          (l(0, "div", 0),
          w(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(
            6,
            "div",
            6,
          ),
          l(7, "div", 7)(8, "div", 8)(9, "h1", 9),
          c(10, "Hola!"),
          d(),
          l(11, "h4", 10),
          c(
            12,
            " Mi nombre es David Mu\xF1oz Cruz. Soy desarrollador Full stack ",
          ),
          d()()()(),
          l(13, "div", 11)(14, "div", 12),
          w(15, "div", 5)(16, "div", 13)(17, "div", 14),
          l(18, "div", 7)(19, "div", 15)(20, "div", 16)(21, "h1", 17),
          c(22, "About me"),
          d(),
          l(23, "p", 18),
          c(
            24,
            " Inici\xE9 mi carrera en 2021 como desarrollador freelance, aplicando mis conocimientos en proyectos peque\xF1os y explorando tecnolog\xEDas como ",
          ),
          l(25, "strong"),
          c(26, "Angular, Laravel y Node.js"),
          d(),
          c(27, ". Con el tiempo, fui especializ\xE1ndome en "),
          l(28, "strong"),
          c(29, "desarrollo full stack"),
          d(),
          c(30, " y la administraci\xF3n de infraestructuras en "),
          l(31, "strong"),
          c(32, "Docker"),
          d(),
          c(33, " y servidores "),
          l(34, "strong"),
          c(35, "Linux"),
          d(),
          c(36, ". "),
          w(37, "br")(38, "br"),
          c(39, " Actualmente, formo parte de "),
          l(40, "strong"),
          c(41, "The Rocket Code"),
          d(),
          c(42, " como "),
          l(43, "strong"),
          c(44, "Full Stack Developer"),
          d(),
          c(
            45,
            ", donde me especializo en el desarrollo de aplicaciones web modernas, integraciones de herramientas de ",
          ),
          l(46, "strong"),
          c(47, "IA (Claude AI, Gemini, LangGraph)"),
          d(),
          c(48, " y soluciones de "),
          l(49, "strong"),
          c(50, "e-commerce escalables"),
          d(),
          c(
            51,
            ". Trabajo en proyectos que requieren arquitecturas complejas con ",
          ),
          l(52, "strong"),
          c(53, "NestJS, NextJS, React, Angular v18/v19"),
          d(),
          c(54, " y especializaci\xF3n en "),
          l(55, "strong"),
          c(56, "Shopify"),
          d(),
          c(57, " para el sector asegurador y fintech. "),
          w(58, "br")(59, "br"),
          c(60, " Anteriormente, trabaj\xE9 en "),
          l(61, "strong"),
          c(62, "BLIFE"),
          d(),
          c(63, " como "),
          l(64, "strong"),
          c(65, "Backend Developer"),
          d(),
          c(66, ", donde desarroll\xE9 microservicios en "),
          l(67, "strong"),
          c(68, "NestJS con NATS y GraphQL"),
          d(),
          c(69, ", implement\xE9 soluciones de firma digital con "),
          l(70, "strong"),
          c(71, "Flask y Python"),
          d(),
          c(72, ", y gestion\xE9 CI/CD con "),
          l(73, "strong"),
          c(74, "GitHub Actions y AWS"),
          d(),
          c(75, ". "),
          w(76, "br")(77, "br"),
          c(78, " Tambi\xE9n trabaj\xE9 en "),
          l(79, "strong"),
          c(80, "MIDOCONLINE"),
          d(),
          c(81, ", donde lider\xE9 la "),
          l(82, "strong"),
          c(83, "refactorizaci\xF3n completa del backend"),
          d(),
          c(84, ", migr\xE1ndolo de Laravel 8 a "),
          l(85, "strong"),
          c(86, "Laravel 11"),
          d(),
          c(
            87,
            ", optimizando su arquitectura y mejorando significativamente el rendimiento. ",
          ),
          w(88, "br")(89, "br"),
          c(90, " En "),
          l(91, "strong"),
          c(92, "SKYTEX M\xC9XICO"),
          d(),
          c(93, ", desarroll\xE9 soluciones empresariales como "),
          l(94, "strong"),
          c(95, "SkyFood, Skynet 2.0 y SkyInvoiceHub"),
          d(),
          c(96, " en "),
          l(97, "strong"),
          c(98, "Angular"),
          d(),
          c(99, ", y "),
          l(100, "strong"),
          c(101, "SkySecurityApp y SkyInspect"),
          d(),
          c(102, " en "),
          l(103, "strong"),
          c(104, "Laravel y Node.js"),
          d(),
          c(105, ", adem\xE1s de liderar la "),
          l(106, "strong"),
          c(107, "dockerizaci\xF3n del backend"),
          d(),
          c(108, " y la "),
          l(109, "strong"),
          c(110, "gesti\xF3n de servidores Ubuntu"),
          d(),
          c(111, ". "),
          w(112, "br")(113, "br"),
          c(114, " Mi enfoque actual est\xE1 en arquitecturas de "),
          l(115, "strong"),
          c(116, "microservicios, integraci\xF3n de IA y DevOps"),
          d(),
          c(117, ", mientras sigo perfeccionando mis habilidades en "),
          l(118, "strong"),
          c(119, "tecnolog\xEDas emergentes"),
          d(),
          c(
            120,
            ". En mi tiempo libre, me mantengo al d\xEDa con las \xFAltimas tendencias tecnol\xF3gicas y disfruto de mis pasatiempos, como jugar videojuegos y salir a pasear. ",
          ),
          d()(),
          l(121, "div", 19)(122, "div", 20)(123, "div", 21),
          w(124, "img", 22),
          d(),
          l(125, "div", 23)(126, "tabset", 24)(127, "tab", 25)(128, "div", 26)(
            129,
            "table",
            27,
          )(
            130,
            "thead",
            28,
          )(131, "tr")(132, "th", 29),
          c(133, "Tecnolog\xEDa"),
          d(),
          l(134, "th", 29),
          c(135, "Tiempo"),
          d()()(),
          l(136, "tbody", 30)(137, "tr")(138, "td"),
          c(139, "Angular"),
          d(),
          l(140, "td"),
          c(141, "4 a\xF1os"),
          d()(),
          l(142, "tr")(143, "td"),
          c(144, "NestJS"),
          d(),
          l(145, "td"),
          c(146, "2 a\xF1os"),
          d()(),
          l(147, "tr")(148, "td"),
          c(149, "NextJS - React"),
          d(),
          l(150, "td"),
          c(151, "2 a\xF1os"),
          d()(),
          l(152, "tr")(153, "td"),
          c(154, "TypeScript"),
          d(),
          l(155, "td"),
          c(156, "4 a\xF1os"),
          d()(),
          l(157, "tr")(158, "td"),
          c(159, "Laravel - PHP"),
          d(),
          l(160, "td"),
          c(161, "4 a\xF1os"),
          d()(),
          l(162, "tr")(163, "td"),
          c(164, "PostgreSQL"),
          d(),
          l(165, "td"),
          c(166, "4 a\xF1os"),
          d()(),
          l(167, "tr")(168, "td"),
          c(169, "MongoDB Atlas"),
          d(),
          l(170, "td"),
          c(171, "4 a\xF1os"),
          d()(),
          l(172, "tr")(173, "td"),
          c(174, "Claude AI & LangGraph"),
          d(),
          l(175, "td"),
          c(176, "1 a\xF1o"),
          d()(),
          l(177, "tr")(178, "td"),
          c(179, "Shopify Development"),
          d(),
          l(180, "td"),
          c(181, "1 a\xF1o"),
          d()(),
          l(182, "tr")(183, "td"),
          c(184, "Docker & AWS"),
          d(),
          l(185, "td"),
          c(186, "3 a\xF1os"),
          d()(),
          l(187, "tr")(188, "td"),
          c(189, "Node.js"),
          d(),
          l(190, "td"),
          c(191, "4 a\xF1os"),
          d()(),
          l(192, "tr")(193, "td"),
          c(194, "Flask - Python"),
          d(),
          l(195, "td"),
          c(196, "1 a\xF1o"),
          d()(),
          l(197, "tr")(198, "td"),
          c(199, "MySQL"),
          d(),
          l(200, "td"),
          c(201, "4 a\xF1os"),
          d()(),
          l(202, "tr")(203, "td"),
          c(204, "Kotlin & Jetpack Compose"),
          d(),
          l(205, "td"),
          c(206, "1 a\xF1o"),
          d()(),
          l(207, "tr")(208, "td"),
          c(209, "Rust"),
          d(),
          l(210, "td"),
          c(211, "1 a\xF1o"),
          d()()()()()(),
          l(212, "tab", 31)(213, "div", 26)(214, "table", 27)(215, "tbody", 30)(
            216,
            "tr",
          )(217, "td"),
          c(
            218,
            " Ingenier\xEDa en TI - Universidad Polit\xE9cnica de Tlaxcala ",
          ),
          d(),
          l(219, "td"),
          c(220, "2018 - 2022"),
          d()(),
          l(221, "tr")(222, "td", 32),
          c(223, "Idiomas"),
          d()(),
          l(224, "tr")(225, "td"),
          c(226, "Espa\xF1ol"),
          d(),
          l(227, "td"),
          c(228, "Nativo"),
          d()(),
          l(229, "tr")(230, "td"),
          c(231, "Ingl\xE9s"),
          d(),
          l(232, "td"),
          c(233, "Intermedio"),
          d()()()()()()()()()()()()(),
          l(234, "div", 33),
          w(235, "div", 3)(236, "div", 6)(237, "div", 34),
          l(238, "div", 7)(239, "div", 35)(240, "div", 36)(241, "h1", 17),
          c(242, "Experience"),
          d(),
          w(243, "app-timeline"),
          d()()()()());
      },
      dependencies: [
        te,
        An,
        jo,
        zt,
        En,
        Hn,
        No,
        Fs,
        Wo,
        $o,
        xl,
        ls,
        cs,
        $l,
        Et,
        Ul,
      ],
      encapsulation: 2,
      changeDetection: 0,
    })));
  let e = t;
  return e;
})();
var Zp = ["myModal"],
  ef = () => ["far", "circle-xmark"];
function tf(e, t) {
  if (
    (e & 1 &&
      (l(0, "section"),
      w(1, "img", 12),
      l(2, "div")(3, "p"),
      c(4),
      d(),
      l(5, "p"),
      c(6),
      d(),
      l(7, "p"),
      c(8),
      d()()()),
    e & 2)
  ) {
    let n = u();
    (h(),
      _("alt", n.user().name),
      h(3),
      re("ID : ", n.user().id),
      h(2),
      re("FULL NAME : ", n.user().name),
      h(2),
      re("EMAIL : ", n.user().email));
  }
}
function nf(e, t) {
  e & 1 && (l(0, "p"), c(1, "Cargando informaci\xF3n..."), d());
}
var zl = (() => {
  let t = class t {
    constructor() {
      ((this.buttonlabel = ""),
        (this.buttonclass = ""),
        (this.onDestroy$ = new ue()),
        (this.usersService = ie(xn)),
        (this.user = Wi(void 0)),
        (this.titleModal = _t(
          () =>
            "Informaci\xF3n del usuario" +
            (this.user() ? ` ${this.user().name}` : ""),
        )));
    }
    ngOnInit() {}
    ngOnDestroy() {
      (this.onDestroy$.next(), this.onDestroy$.complete());
    }
    toggleModal(i) {
      switch (i) {
        case "show":
          (this.myModal.show(),
            this.usersService
              .getUserById(this.userid)
              .pipe(Ie(this.onDestroy$))
              .subscribe({
                next: (s) => this.user.set(s),
                error: (s) => Ur(() => s),
                complete: () => {},
              }));
          break;
        case "hide":
          this.myModal.hide();
          break;
      }
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵcmp = x({
      type: t,
      selectors: [["app-user-dialog"]],
      viewQuery: function (s, r) {
        if ((s & 1 && kt(Zp, 5), s & 2)) {
          let o;
          St((o = xt())) && (r.myModal = o.first);
        }
      },
      inputs: {
        userid: "userid",
        buttonlabel: "buttonlabel",
        buttonclass: "buttonclass",
      },
      decls: 16,
      vars: 7,
      consts: [
        ["myModal", "bs-modal"],
        ["data-target", "#myModal", 3, "click"],
        [
          "aria-hidden",
          "true",
          "aria-labelledby",
          "myModalLabel",
          "bsModal",
          "",
          "id",
          "myModal",
          "role",
          "dialog",
          "tabindex",
          "-1",
          1,
          "modal",
          "fade",
          "modal-black",
        ],
        [1, "modal-backdrop"],
        [1, "modal-dialog"],
        [1, "modal-content"],
        [1, "modal-header", "justify-content-center"],
        [
          "aria-hidden",
          "true",
          "data-dismiss",
          "modal",
          "type",
          "button",
          1,
          "close",
          3,
          "click",
        ],
        [3, "icon"],
        [1, "title", "title-up"],
        [1, "modal-body"],
        [1, "modal-footer"],
        ["src", "https://via.placeholder.com/150", 3, "alt"],
      ],
      template: function (s, r) {
        if (s & 1) {
          let o = D();
          (l(0, "button", 1),
            y("click", function () {
              return (f(o), g(r.toggleModal("show")));
            }),
            c(1),
            d(),
            l(2, "div", 2, 0)(4, "div", 3)(5, "div", 4)(6, "div", 5)(
              7,
              "div",
              6,
            )(8, "button", 7),
            y("click", function () {
              return (f(o), g(r.toggleModal("hide")));
            }),
            w(9, "fa-icon", 8),
            d(),
            l(10, "h5", 9),
            c(11),
            d()(),
            l(12, "div", 10),
            ct(13, tf, 9, 4, "section")(14, nf, 2, 0, "p"),
            d(),
            w(15, "div", 11),
            d()()()());
        }
        s & 2 &&
          (Qe(r.buttonclass),
          h(),
          re(
            " ",
            r.buttonlabel,
            `
`,
          ),
          h(8),
          _("icon", Pe(6, ef)),
          h(2),
          A(r.titleModal()),
          h(2),
          ut(r.user() ? 13 : 14));
      },
      dependencies: [te, cs, Wl, Et, mi],
      encapsulation: 2,
      changeDetection: 0,
    })));
  let e = t;
  return e;
})();
var sf = (e, t) => t.id;
function rf(e, t) {
  if (
    (e & 1 &&
      (l(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6),
      w(4, "img", 7),
      l(5, "h5", 8)(6, "strong"),
      c(7),
      d()()()(),
      l(8, "div", 9)(9, "strong"),
      c(10, "Information: "),
      d(),
      l(11, "pre", 10)(12, "code"),
      c(13),
      N(14, "json"),
      d()(),
      w(15, "app-user-dialog", 11),
      d()()()),
    e & 2)
  ) {
    let n = t.$implicit;
    (h(4),
      _("alt", n.name),
      h(3),
      A(n.name),
      h(6),
      A(B(14, 4, n)),
      h(2),
      _("userid", n.id));
  }
}
function of(e, t) {
  e & 1 && (l(0, "h1"), c(1, "Sin Informaci\xF3n"), d());
}
var Gl = (() => {
  let t = class t {
    constructor() {
      ((this.onDestroy$ = new ue()), (this.userService = ie(xn)));
    }
    ngOnInit() {
      this.userService.getUsers().pipe(Ie(this.onDestroy$)).subscribe();
    }
    ngOnDestroy() {
      (this.onDestroy$.next(), this.onDestroy$.complete());
    }
  };
  ((t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵcmp = x({
      type: t,
      selectors: [["app-profile"]],
      decls: 8,
      vars: 1,
      consts: [
        [1, "container", 2, "padding-top", "5rem"],
        [1, "container"],
        [1, "row", "row-grid", "justify-content-between"],
        [1, "col-md-4"],
        [1, "card"],
        [1, "card-header"],
        [1, "card-title", "d-flex", "w-100", "justify-content-between"],
        [
          "src",
          "https://via.placeholder.com/150",
          1,
          "img-fluid",
          "img-7xl",
          "md:img-8xl",
          "rounded-circle",
          "shadow",
          3,
          "alt",
        ],
        [1, "mb-1"],
        [1, "card-body", "text-white"],
        [1, "card-text"],
        [
          "buttonlabel",
          "More info...",
          "buttonclass",
          "btn btn-warning btn-simple",
          3,
          "userid",
        ],
      ],
      template: function (s, r) {
        (s & 1 &&
          (l(0, "div", 0)(1, "h1"),
          c(2, "PROFILES"),
          d()(),
          l(3, "div", 1)(4, "div", 2),
          eo(5, rf, 16, 6, "div", 3, sf, !1, of, 2, 0, "h1"),
          d()()),
          s & 2 && (h(5), to(r.userService.users())));
      },
      dependencies: [te, zl, Hn, ao],
      encapsulation: 2,
      changeDetection: 0,
    })));
  let e = t;
  return e;
})();
var O1 = [
  { path: "", component: Hr },
  { path: "home", component: Hr, title: "Home" },
  { path: "profile", component: Gl, title: "Perfil" },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
export { M0 as a, O1 as b };
