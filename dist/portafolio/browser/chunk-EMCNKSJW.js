var lb = Object.defineProperty,
  db = Object.defineProperties;
var fb = Object.getOwnPropertyDescriptors;
var Is = Object.getOwnPropertySymbols;
var Ug = Object.prototype.hasOwnProperty,
  Hg = Object.prototype.propertyIsEnumerable;
var $g = (e) => {
  throw TypeError(e);
};
var Vg = (e, t, n) =>
    t in e
      ? lb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  w = (e, t) => {
    for (var n in (t ||= {})) Ug.call(t, n) && Vg(e, n, t[n]);
    if (Is) for (var n of Is(t)) Hg.call(t, n) && Vg(e, n, t[n]);
    return e;
  },
  W = (e, t) => db(e, fb(t));
var zg = (e, t) => {
  var n = {};
  for (var r in e) Ug.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Is)
    for (var r of Is(e)) t.indexOf(r) < 0 && Hg.call(e, r) && (n[r] = e[r]);
  return n;
};
var Gg = (e, t, n) => t.has(e) || $g("Cannot " + n);
var ye = (e, t, n) => (
    Gg(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  Et = (e, t, n) =>
    t.has(e)
      ? $g("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  Wt = (e, t, n, r) => (
    Gg(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  );
var yn = (e, t, n) =>
  new Promise((r, o) => {
    var i = (c) => {
        try {
          a(n.next(c));
        } catch (u) {
          o(u);
        }
      },
      s = (c) => {
        try {
          a(n.throw(c));
        } catch (u) {
          o(u);
        }
      },
      a = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(i, s));
    a((n = n.apply(e, t)).next());
  });
var Wu;
function ws() {
  return Wu;
}
function It(e) {
  let t = Wu;
  return ((Wu = e), t);
}
var Wg = Symbol("NotFound");
function kr(e) {
  return e === Wg || e?.name === "\u0275NotFound";
}
function _s(e, t) {
  return Object.is(e, t);
}
var ve = null,
  Cs = !1,
  qu = 1,
  hb = null,
  Ie = Symbol("SIGNAL");
function R(e) {
  let t = ve;
  return ((ve = e), t);
}
function Ms() {
  return ve;
}
var Gn = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producers: void 0,
  producersTail: void 0,
  consumers: void 0,
  consumersTail: void 0,
  recomputing: !1,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  kind: "unknown",
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Pr(e) {
  if (Cs) throw new Error("");
  if (ve === null) return;
  ve.consumerOnSignalRead(e);
  let t = ve.producersTail;
  if (t !== void 0 && t.producer === e) return;
  let n,
    r = ve.recomputing;
  if (
    r &&
    ((n = t !== void 0 ? t.nextProducer : ve.producers),
    n !== void 0 && n.producer === e)
  ) {
    ((ve.producersTail = n), (n.lastReadVersion = e.version));
    return;
  }
  let o = e.consumersTail;
  if (o !== void 0 && o.consumer === ve && (!r || gb(o, ve))) return;
  let i = Lr(ve),
    s = {
      producer: e,
      consumer: ve,
      nextProducer: n,
      prevConsumer: o,
      lastReadVersion: e.version,
      nextConsumer: void 0,
    };
  ((ve.producersTail = s),
    t !== void 0 ? (t.nextProducer = s) : (ve.producers = s),
    i && Yg(e, s));
}
function qg() {
  qu++;
}
function Ns(e) {
  if (!(Lr(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === qu)) {
    if (!e.producerMustRecompute(e) && !Zo(e)) {
      Ss(e);
      return;
    }
    (e.producerRecomputeValue(e), Ss(e));
  }
}
function Yu(e) {
  if (e.consumers === void 0) return;
  let t = Cs;
  Cs = !0;
  try {
    for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
      let r = n.consumer;
      r.dirty || pb(r);
    }
  } finally {
    Cs = t;
  }
}
function Zu() {
  return ve?.consumerAllowSignalWrites !== !1;
}
function pb(e) {
  ((e.dirty = !0), Yu(e), e.consumerMarkedDirty?.(e));
}
function Ss(e) {
  ((e.dirty = !1), (e.lastCleanEpoch = qu));
}
function Wn(e) {
  return (e && ((e.producersTail = void 0), (e.recomputing = !0)), R(e));
}
function Fr(e, t) {
  if ((R(t), !e)) return;
  e.recomputing = !1;
  let n = e.producersTail,
    r = n !== void 0 ? n.nextProducer : e.producers;
  if (r !== void 0) {
    if (Lr(e))
      do r = Qu(r);
      while (r !== void 0);
    n !== void 0 ? (n.nextProducer = void 0) : (e.producers = void 0);
  }
}
function Zo(e) {
  for (let t = e.producers; t !== void 0; t = t.nextProducer) {
    let n = t.producer,
      r = t.lastReadVersion;
    if (r !== n.version || (Ns(n), r !== n.version)) return !0;
  }
  return !1;
}
function Rs(e) {
  if (Lr(e)) {
    let t = e.producers;
    for (; t !== void 0; ) t = Qu(t);
  }
  ((e.producers = void 0),
    (e.producersTail = void 0),
    (e.consumers = void 0),
    (e.consumersTail = void 0));
}
function Yg(e, t) {
  let n = e.consumersTail,
    r = Lr(e);
  if (
    (n !== void 0
      ? ((t.nextConsumer = n.nextConsumer), (n.nextConsumer = t))
      : ((t.nextConsumer = void 0), (e.consumers = t)),
    (t.prevConsumer = n),
    (e.consumersTail = t),
    !r)
  )
    for (let o = e.producers; o !== void 0; o = o.nextProducer)
      Yg(o.producer, o);
}
function Qu(e) {
  let t = e.producer,
    n = e.nextProducer,
    r = e.nextConsumer,
    o = e.prevConsumer;
  if (
    ((e.nextConsumer = void 0),
    (e.prevConsumer = void 0),
    r !== void 0 ? (r.prevConsumer = o) : (t.consumersTail = o),
    o !== void 0)
  )
    o.nextConsumer = r;
  else if (((t.consumers = r), !Lr(t))) {
    let i = t.producers;
    for (; i !== void 0; ) i = Qu(i);
  }
  return n;
}
function Lr(e) {
  return e.consumerIsAlwaysLive || e.consumers !== void 0;
}
function As(e) {
  hb?.(e);
}
function gb(e, t) {
  let n = t.producersTail;
  if (n !== void 0) {
    let r = t.producers;
    do {
      if (r === e) return !0;
      if (r === n) break;
      r = r.nextProducer;
    } while (r !== void 0);
  }
  return !1;
}
function xs(e, t) {
  let n = Object.create(mb);
  ((n.computation = e), t !== void 0 && (n.equal = t));
  let r = () => {
    if ((Ns(n), Pr(n), n.value === Yo)) throw n.error;
    return n.value;
  };
  return ((r[Ie] = n), As(n), r);
}
var bs = Symbol("UNSET"),
  Ts = Symbol("COMPUTING"),
  Yo = Symbol("ERRORED"),
  mb = W(w({}, Gn), {
    value: bs,
    dirty: !0,
    error: null,
    equal: _s,
    kind: "computed",
    producerMustRecompute(e) {
      return e.value === bs || e.value === Ts;
    },
    producerRecomputeValue(e) {
      if (e.value === Ts) throw new Error("");
      let t = e.value;
      e.value = Ts;
      let n = Wn(e),
        r,
        o = !1;
      try {
        ((r = e.computation()),
          R(null),
          (o = t !== bs && t !== Yo && r !== Yo && e.equal(t, r)));
      } catch (i) {
        ((r = Yo), (e.error = i));
      } finally {
        Fr(e, n);
      }
      if (o) {
        e.value = t;
        return;
      }
      ((e.value = r), e.version++);
    },
  });
function yb() {
  throw new Error();
}
var Zg = yb;
function Qg(e) {
  Zg(e);
}
function Ku(e) {
  Zg = e;
}
var vb = null;
function Xu(e, t) {
  let n = Object.create(Os);
  ((n.value = e), t !== void 0 && (n.equal = t));
  let r = () => Kg(n);
  return ((r[Ie] = n), As(n), [r, (s) => jr(n, s), (s) => Ju(n, s)]);
}
function Kg(e) {
  return (Pr(e), e.value);
}
function jr(e, t) {
  (Zu() || Qg(e), e.equal(e.value, t) || ((e.value = t), Db(e)));
}
function Ju(e, t) {
  (Zu() || Qg(e), jr(e, t(e.value)));
}
var Os = W(w({}, Gn), { equal: _s, value: void 0, kind: "signal" });
function Db(e) {
  (e.version++, qg(), Yu(e), vb?.(e));
}
function M(e) {
  return typeof e == "function";
}
function Br(e) {
  let n = e((r) => {
    (Error.call(r), (r.stack = new Error().stack));
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var ks = Br(
  (e) =>
    function (n) {
      (e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n));
    },
);
function qn(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var X = class e {
  constructor(t) {
    ((this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null));
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (M(r))
        try {
          r();
        } catch (i) {
          t = i instanceof ks ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            Xg(i);
          } catch (s) {
            ((t = t ?? []),
              s instanceof ks ? (t = [...t, ...s.errors]) : t.push(s));
          }
      }
      if (t) throw new ks(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) Xg(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && qn(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    (n && qn(n, t), t instanceof e && t._removeParent(this));
  }
};
X.EMPTY = (() => {
  let e = new X();
  return ((e.closed = !0), e);
})();
var el = X.EMPTY;
function Ps(e) {
  return (
    e instanceof X ||
    (e && "closed" in e && M(e.remove) && M(e.add) && M(e.unsubscribe))
  );
}
function Xg(e) {
  M(e) ? e() : e.unsubscribe();
}
var at = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var Vr = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = Vr;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = Vr;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Fs(e) {
  Vr.setTimeout(() => {
    let { onUnhandledError: t } = at;
    if (t) t(e);
    else throw e;
  });
}
function Yn() {}
var Jg = tl("C", void 0, void 0);
function em(e) {
  return tl("E", void 0, e);
}
function tm(e) {
  return tl("N", e, void 0);
}
function tl(e, t, n) {
  return { kind: e, value: t, error: n };
}
var Zn = null;
function Ur(e) {
  if (at.useDeprecatedSynchronousErrorHandling) {
    let t = !Zn;
    if ((t && (Zn = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = Zn;
      if (((Zn = null), n)) throw r;
    }
  } else e();
}
function nm(e) {
  at.useDeprecatedSynchronousErrorHandling &&
    Zn &&
    ((Zn.errorThrown = !0), (Zn.error = e));
}
var Qn = class extends X {
    constructor(t) {
      (super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), Ps(t) && t.add(this))
          : (this.destination = wb));
    }
    static create(t, n, r) {
      return new Hr(t, n, r);
    }
    next(t) {
      this.isStopped ? rl(tm(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? rl(em(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? rl(Jg, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  Eb = Function.prototype.bind;
function nl(e, t) {
  return Eb.call(e, t);
}
var ol = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Ls(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Ls(r);
        }
      else Ls(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Ls(n);
        }
    }
  },
  Hr = class extends Qn {
    constructor(t, n, r) {
      super();
      let o;
      if (M(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && at.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && nl(t.next, i),
              error: t.error && nl(t.error, i),
              complete: t.complete && nl(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new ol(o);
    }
  };
function Ls(e) {
  at.useDeprecatedSynchronousErrorHandling ? nm(e) : Fs(e);
}
function Ib(e) {
  throw e;
}
function rl(e, t) {
  let { onStoppedNotification: n } = at;
  n && Vr.setTimeout(() => n(e, t));
}
var wb = { closed: !0, next: Yn, error: Ib, complete: Yn };
var $r = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function we(e) {
  return e;
}
function il(...e) {
  return sl(e);
}
function sl(e) {
  return e.length === 0
    ? we
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var P = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return ((r.source = this), (r.operator = n), r);
    }
    subscribe(n, r, o) {
      let i = bb(n) ? n : new Hr(n, r, o);
      return (
        Ur(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = rm(r)),
        new r((o, i) => {
          let s = new Hr({
            next: (a) => {
              try {
                n(a);
              } catch (c) {
                (i(c), s.unsubscribe());
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [$r]() {
      return this;
    }
    pipe(...n) {
      return sl(n)(this);
    }
    toPromise(n) {
      return (
        (n = rm(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return ((e.create = (t) => new e(t)), e);
})();
function rm(e) {
  var t;
  return (t = e ?? at.Promise) !== null && t !== void 0 ? t : Promise;
}
function Cb(e) {
  return e && M(e.next) && M(e.error) && M(e.complete);
}
function bb(e) {
  return (e && e instanceof Qn) || (Cb(e) && Ps(e));
}
function al(e) {
  return M(e?.lift);
}
function L(e) {
  return (t) => {
    if (al(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function j(e, t, n, r, o) {
  return new cl(e, t, n, r, o);
}
var cl = class extends Qn {
  constructor(t, n, r, o, i, s) {
    (super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (c) {
              t.error(c);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (c) {
              t.error(c);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete));
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      (super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this)));
    }
  }
};
function zr() {
  return L((e, t) => {
    let n = null;
    e._refCount++;
    let r = j(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      ((n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe());
    });
    (e.subscribe(r), r.closed || (n = e.connect()));
  });
}
var Gr = class extends P {
  constructor(t, n) {
    (super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      al(t) && (this.lift = t.lift));
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    ((this._subject = this._connection = null), t?.unsubscribe());
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new X();
      let n = this.getSubject();
      (t.add(
        this.source.subscribe(
          j(
            n,
            void 0,
            () => {
              (this._teardown(), n.complete());
            },
            (r) => {
              (this._teardown(), n.error(r));
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = X.EMPTY)));
    }
    return t;
  }
  refCount() {
    return zr()(this);
  }
};
var Wr = {
  schedule(e) {
    let t = requestAnimationFrame,
      n = cancelAnimationFrame,
      { delegate: r } = Wr;
    r && ((t = r.requestAnimationFrame), (n = r.cancelAnimationFrame));
    let o = t((i) => {
      ((n = void 0), e(i));
    });
    return new X(() => n?.(o));
  },
  requestAnimationFrame(...e) {
    let { delegate: t } = Wr;
    return (t?.requestAnimationFrame || requestAnimationFrame)(...e);
  },
  cancelAnimationFrame(...e) {
    let { delegate: t } = Wr;
    return (t?.cancelAnimationFrame || cancelAnimationFrame)(...e);
  },
  delegate: void 0,
};
var om = Br(
  (e) =>
    function () {
      (e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed"));
    },
);
var ie = (() => {
    class e extends P {
      constructor() {
        (super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null));
      }
      lift(n) {
        let r = new js(this, this);
        return ((r.operator = n), r);
      }
      _throwIfClosed() {
        if (this.closed) throw new om();
      }
      next(n) {
        Ur(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        Ur(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            ((this.hasError = this.isStopped = !0), (this.thrownError = n));
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        Ur(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        ((this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null));
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return (this._throwIfClosed(), super._trySubscribe(n));
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? el
          : ((this.currentObservers = null),
            i.push(n),
            new X(() => {
              ((this.currentObservers = null), qn(i, n));
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new P();
        return ((n.source = this), n);
      }
    }
    return ((e.create = (t, n) => new js(t, n)), e);
  })(),
  js = class extends ie {
    constructor(t, n) {
      (super(), (this.destination = t), (this.source = n));
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : el;
    }
  };
var pe = class extends ie {
  constructor(t) {
    (super(), (this._value = t));
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return (!n.closed && t.next(this._value), n);
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return (this._throwIfClosed(), r);
  }
  next(t) {
    super.next((this._value = t));
  }
};
var ul = {
  now() {
    return (ul.delegate || Date).now();
  },
  delegate: void 0,
};
var Bs = class extends X {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var Qo = {
  setInterval(e, t, ...n) {
    let { delegate: r } = Qo;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = Qo;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var vn = class extends Bs {
  constructor(t, n) {
    (super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1));
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return Qo.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && Qo.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      ((r = !0), (o = i || new Error("Scheduled action threw falsy error")));
    }
    if (r) return (this.unsubscribe(), o);
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      ((this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        qn(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe());
    }
  }
};
var qr = class e {
  constructor(t, n = e.now) {
    ((this.schedulerActionCtor = t), (this.now = n));
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
qr.now = ul.now;
var Dn = class extends qr {
  constructor(t, n = qr.now) {
    (super(t, n), (this.actions = []), (this._active = !1));
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var ll = new Dn(vn),
  im = ll;
var Vs = class extends vn {
  constructor(t, n) {
    (super(t, n), (this.scheduler = t), (this.work = n));
  }
  schedule(t, n = 0) {
    return n > 0
      ? super.schedule(t, n)
      : ((this.delay = n), (this.state = t), this.scheduler.flush(this), this);
  }
  execute(t, n) {
    return n > 0 || this.closed ? super.execute(t, n) : this._execute(t, n);
  }
  requestAsyncId(t, n, r = 0) {
    return (r != null && r > 0) || (r == null && this.delay > 0)
      ? super.requestAsyncId(t, n, r)
      : (t.flush(this), 0);
  }
};
var Us = class extends Dn {};
var Tb = new Us(Vs);
var Hs = class extends vn {
  constructor(t, n) {
    (super(t, n), (this.scheduler = t), (this.work = n));
  }
  requestAsyncId(t, n, r = 0) {
    return r !== null && r > 0
      ? super.requestAsyncId(t, n, r)
      : (t.actions.push(this),
        t._scheduled ||
          (t._scheduled = Wr.requestAnimationFrame(() => t.flush(void 0))));
  }
  recycleAsyncId(t, n, r = 0) {
    var o;
    if (r != null ? r > 0 : this.delay > 0)
      return super.recycleAsyncId(t, n, r);
    let { actions: i } = t;
    n != null &&
      n === t._scheduled &&
      ((o = i[i.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n &&
      (Wr.cancelAnimationFrame(n), (t._scheduled = void 0));
  }
};
var $s = class extends Dn {
  flush(t) {
    this._active = !0;
    let n;
    t ? (n = t.id) : ((n = this._scheduled), (this._scheduled = void 0));
    let { actions: r } = this,
      o;
    t = t || r.shift();
    do if ((o = t.execute(t.state, t.delay))) break;
    while ((t = r[0]) && t.id === n && r.shift());
    if (((this._active = !1), o)) {
      for (; (t = r[0]) && t.id === n && r.shift(); ) t.unsubscribe();
      throw o;
    }
  }
};
var Sb = new $s(Hs);
var De = new P((e) => e.complete());
function zs(e) {
  return e && M(e.schedule);
}
function dl(e) {
  return e[e.length - 1];
}
function sm(e) {
  return M(dl(e)) ? e.pop() : void 0;
}
function wt(e) {
  return zs(dl(e)) ? e.pop() : void 0;
}
function am(e, t) {
  return typeof dl(e) == "number" ? e.pop() : t;
}
function UF(e, t, n, r) {
  var o = arguments.length,
    i =
      o < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(t, n, i) : s(t, n)) || i);
  return (o > 3 && i && Object.defineProperty(t, n, i), i);
}
function HF(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function um(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function cm(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0),
          { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Kn(e) {
  return this instanceof Kn ? ((this.v = e), this) : new Kn(e);
}
function lm(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (g) {
      return Promise.resolve(g).then(f, d);
    };
  }
  function a(f, g) {
    r[f] &&
      ((o[f] = function (E) {
        return new Promise(function (y, v) {
          i.push([f, E, y, v]) > 1 || c(f, E);
        });
      }),
      g && (o[f] = g(o[f])));
  }
  function c(f, g) {
    try {
      u(r[f](g));
    } catch (E) {
      h(i[0][3], E);
    }
  }
  function u(f) {
    f.value instanceof Kn
      ? Promise.resolve(f.value.v).then(l, d)
      : h(i[0][2], f);
  }
  function l(f) {
    c("next", f);
  }
  function d(f) {
    c("throw", f);
  }
  function h(f, g) {
    (f(g), i.shift(), i.length && c(i[0][0], i[0][1]));
  }
}
function dm(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof cm == "function" ? cm(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, c) {
          ((s = e[i](s)), o(a, c, s.done, s.value));
        });
      };
  }
  function o(i, s, a, c) {
    Promise.resolve(c).then(function (u) {
      i({ value: u, done: a });
    }, s);
  }
}
var Yr = (e) => e && typeof e.length == "number" && typeof e != "function";
function Gs(e) {
  return M(e?.then);
}
function Ws(e) {
  return M(e[$r]);
}
function qs(e) {
  return Symbol.asyncIterator && M(e?.[Symbol.asyncIterator]);
}
function Ys(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function _b() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Zs = _b();
function Qs(e) {
  return M(e?.[Zs]);
}
function Ks(e) {
  return lm(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Kn(n.read());
        if (o) return yield Kn(void 0);
        yield yield Kn(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function Xs(e) {
  return M(e?.getReader);
}
function J(e) {
  if (e instanceof P) return e;
  if (e != null) {
    if (Ws(e)) return Mb(e);
    if (Yr(e)) return Nb(e);
    if (Gs(e)) return Rb(e);
    if (qs(e)) return fm(e);
    if (Qs(e)) return Ab(e);
    if (Xs(e)) return xb(e);
  }
  throw Ys(e);
}
function Mb(e) {
  return new P((t) => {
    let n = e[$r]();
    if (M(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Nb(e) {
  return new P((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Rb(e) {
  return new P((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, Fs);
  });
}
function Ab(e) {
  return new P((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function fm(e) {
  return new P((t) => {
    Ob(e, t).catch((n) => t.error(n));
  });
}
function xb(e) {
  return fm(Ks(e));
}
function Ob(e, t) {
  var n, r, o, i;
  return um(this, void 0, void 0, function* () {
    try {
      for (n = dm(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function Pe(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    (n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe());
  }, r);
  if ((e.add(i), !o)) return i;
}
function Ko(e, t = 0) {
  return L((n, r) => {
    n.subscribe(
      j(
        r,
        (o) => Pe(r, e, () => r.next(o), t),
        () => Pe(r, e, () => r.complete(), t),
        (o) => Pe(r, e, () => r.error(o), t),
      ),
    );
  });
}
function Js(e, t = 0) {
  return L((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function hm(e, t) {
  return J(e).pipe(Js(t), Ko(t));
}
function pm(e, t) {
  return J(e).pipe(Js(t), Ko(t));
}
function gm(e, t) {
  return new P((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function mm(e, t) {
  return new P((n) => {
    let r;
    return (
      Pe(n, t, () => {
        ((r = e[Zs]()),
          Pe(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          ));
      }),
      () => M(r?.return) && r.return()
    );
  });
}
function ea(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new P((n) => {
    Pe(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      Pe(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function ym(e, t) {
  return ea(Ks(e), t);
}
function vm(e, t) {
  if (e != null) {
    if (Ws(e)) return hm(e, t);
    if (Yr(e)) return gm(e, t);
    if (Gs(e)) return pm(e, t);
    if (qs(e)) return ea(e, t);
    if (Qs(e)) return mm(e, t);
    if (Xs(e)) return ym(e, t);
  }
  throw Ys(e);
}
function ee(e, t) {
  return t ? vm(e, t) : J(e);
}
function _(...e) {
  let t = wt(e);
  return ee(e, t);
}
function qt(e, t) {
  let n = M(e) ? e : () => e,
    r = (o) => o.error(n());
  return new P(t ? (o) => t.schedule(r, 0, o) : r);
}
function fl(e) {
  return !!e && (e instanceof P || (M(e.lift) && M(e.subscribe)));
}
var Yt = Br(
  (e) =>
    function () {
      (e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence"));
    },
);
function Dm(e) {
  return e instanceof Date && !isNaN(e);
}
function k(e, t) {
  return L((n, r) => {
    let o = 0;
    n.subscribe(
      j(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: kb } = Array;
function Pb(e, t) {
  return kb(t) ? e(...t) : e(t);
}
function ta(e) {
  return k((t) => Pb(e, t));
}
var { isArray: Fb } = Array,
  { getPrototypeOf: Lb, prototype: jb, keys: Bb } = Object;
function Em(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Fb(t)) return { args: t, keys: null };
    if (Vb(t)) {
      let n = Bb(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Vb(e) {
  return e && typeof e == "object" && Lb(e) === jb;
}
function Im(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Xo(...e) {
  let t = wt(e),
    n = sm(e),
    { args: r, keys: o } = Em(e);
  if (r.length === 0) return ee([], t);
  let i = new P(Ub(r, t, o ? (s) => Im(o, s) : we));
  return n ? i.pipe(ta(n)) : i;
}
function Ub(e, t, n = we) {
  return (r) => {
    wm(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let c = 0; c < o; c++)
          wm(
            t,
            () => {
              let u = ee(e[c], t),
                l = !1;
              u.subscribe(
                j(
                  r,
                  (d) => {
                    ((i[c] = d),
                      l || ((l = !0), a--),
                      a || r.next(n(i.slice())));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function wm(e, t, n) {
  e ? Pe(n, e, t) : t();
}
function Cm(e, t, n, r, o, i, s, a) {
  let c = [],
    u = 0,
    l = 0,
    d = !1,
    h = () => {
      d && !c.length && !u && t.complete();
    },
    f = (E) => (u < r ? g(E) : c.push(E)),
    g = (E) => {
      (i && t.next(E), u++);
      let y = !1;
      J(n(E, l++)).subscribe(
        j(
          t,
          (v) => {
            (o?.(v), i ? f(v) : t.next(v));
          },
          () => {
            y = !0;
          },
          void 0,
          () => {
            if (y)
              try {
                for (u--; c.length && u < r; ) {
                  let v = c.shift();
                  s ? Pe(t, s, () => g(v)) : g(v);
                }
                h();
              } catch (v) {
                t.error(v);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      j(t, f, () => {
        ((d = !0), h());
      }),
    ),
    () => {
      a?.();
    }
  );
}
function Z(e, t, n = 1 / 0) {
  return M(t)
    ? Z((r, o) => k((i, s) => t(r, i, o, s))(J(e(r, o))), n)
    : (typeof t == "number" && (n = t), L((r, o) => Cm(r, o, e, n)));
}
function En(e = 1 / 0) {
  return Z(we, e);
}
function bm() {
  return En(1);
}
function In(...e) {
  return bm()(ee(e, wt(e)));
}
function Jo(e) {
  return new P((t) => {
    J(e()).subscribe(t);
  });
}
var Hb = ["addListener", "removeListener"],
  $b = ["addEventListener", "removeEventListener"],
  zb = ["on", "off"];
function hl(e, t, n, r) {
  if ((M(n) && ((r = n), (n = void 0)), r)) return hl(e, t, n).pipe(ta(r));
  let [o, i] = qb(e)
    ? $b.map((s) => (a) => e[s](t, a, n))
    : Gb(e)
      ? Hb.map(Tm(e, t))
      : Wb(e)
        ? zb.map(Tm(e, t))
        : [];
  if (!o && Yr(e)) return Z((s) => hl(s, t, n))(J(e));
  if (!o) throw new TypeError("Invalid event target");
  return new P((s) => {
    let a = (...c) => s.next(1 < c.length ? c : c[0]);
    return (o(a), () => i(a));
  });
}
function Tm(e, t) {
  return (n) => (r) => e[n](t, r);
}
function Gb(e) {
  return M(e.addListener) && M(e.removeListener);
}
function Wb(e) {
  return M(e.on) && M(e.off);
}
function qb(e) {
  return M(e.addEventListener) && M(e.removeEventListener);
}
function pl(e = 0, t, n = im) {
  let r = -1;
  return (
    t != null && (zs(t) ? (n = t) : (r = t)),
    new P((o) => {
      let i = Dm(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function Yb(...e) {
  let t = wt(e),
    n = am(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? J(r[0]) : En(n)(ee(r, t))) : De;
}
function ce(e, t) {
  return L((n, r) => {
    let o = 0;
    n.subscribe(j(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Ve(e) {
  return L((t, n) => {
    let r = null,
      o = !1,
      i;
    ((r = t.subscribe(
      j(n, void 0, void 0, (s) => {
        ((i = J(e(s, Ve(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0));
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n)));
  });
}
function Sm(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      c = t,
      u = 0;
    i.subscribe(
      j(
        s,
        (l) => {
          let d = u++;
          ((c = a ? e(c, l, d) : ((a = !0), l)), r && s.next(c));
        },
        o &&
          (() => {
            (a && s.next(c), s.complete());
          }),
      ),
    );
  };
}
function Ct(e, t) {
  return M(t) ? Z(e, t, 1) : Z(e, 1);
}
function wn(e) {
  return L((t, n) => {
    let r = !1;
    t.subscribe(
      j(
        n,
        (o) => {
          ((r = !0), n.next(o));
        },
        () => {
          (r || n.next(e), n.complete());
        },
      ),
    );
  });
}
function Xe(e) {
  return e <= 0
    ? () => De
    : L((t, n) => {
        let r = 0;
        t.subscribe(
          j(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function _m() {
  return L((e, t) => {
    e.subscribe(j(t, Yn));
  });
}
function Mm(e) {
  return k(() => e);
}
function gl(e, t) {
  return t
    ? (n) => In(t.pipe(Xe(1), _m()), n.pipe(gl(e)))
    : Z((n, r) => J(e(n, r)).pipe(Xe(1), Mm(n)));
}
function na(e, t = ll) {
  let n = pl(e, t);
  return gl(() => n);
}
function Zb(e, t = we) {
  return (
    (e = e ?? Qb),
    L((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        j(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function Qb(e, t) {
  return e === t;
}
function ra(e = Kb) {
  return L((t, n) => {
    let r = !1;
    t.subscribe(
      j(
        n,
        (o) => {
          ((r = !0), n.next(o));
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function Kb() {
  return new Yt();
}
function Cn(e) {
  return L((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Zt(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ce((o, i) => e(o, i, r)) : we,
      Xe(1),
      n ? wn(t) : ra(() => new Yt()),
    );
}
function Zr(e) {
  return e <= 0
    ? () => De
    : L((t, n) => {
        let r = [];
        t.subscribe(
          j(
            n,
            (o) => {
              (r.push(o), e < r.length && r.shift());
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function ml(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ce((o, i) => e(o, i, r)) : we,
      Zr(1),
      n ? wn(t) : ra(() => new Yt()),
    );
}
function yl(e, t) {
  return L(Sm(e, t, arguments.length >= 2, !0));
}
function vl(...e) {
  let t = wt(e);
  return L((n, r) => {
    (t ? In(e, n, t) : In(e, n)).subscribe(r);
  });
}
function Ce(e, t) {
  return L((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      j(
        r,
        (c) => {
          o?.unsubscribe();
          let u = 0,
            l = i++;
          J(e(c, l)).subscribe(
            (o = j(
              r,
              (d) => r.next(t ? t(c, d, l, u++) : d),
              () => {
                ((o = null), a());
              },
            )),
          );
        },
        () => {
          ((s = !0), a());
        },
      ),
    );
  });
}
function ei(e) {
  return L((t, n) => {
    (J(e).subscribe(j(n, () => n.complete(), Yn)), !n.closed && t.subscribe(n));
  });
}
function te(e, t, n) {
  let r = M(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? L((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          j(
            i,
            (c) => {
              var u;
              ((u = r.next) === null || u === void 0 || u.call(r, c),
                i.next(c));
            },
            () => {
              var c;
              ((a = !1),
                (c = r.complete) === null || c === void 0 || c.call(r),
                i.complete());
            },
            (c) => {
              var u;
              ((a = !1),
                (u = r.error) === null || u === void 0 || u.call(r, c),
                i.error(c));
            },
            () => {
              var c, u;
              (a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)),
                (u = r.finalize) === null || u === void 0 || u.call(r));
            },
          ),
        );
      })
    : we;
}
function Nm(e) {
  let t = R(null);
  try {
    return e();
  } finally {
    R(t);
  }
}
var ca =
    "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",
  I = class extends Error {
    code;
    constructor(t, n) {
      (super(bt(t, n)), (this.code = t));
    }
  };
function Xb(e) {
  return `NG0${Math.abs(e)}`;
}
function bt(e, t) {
  return `${Xb(e)}${t ? ": " + t : ""}`;
}
var Sn = globalThis;
function G(e) {
  for (let t in e) if (e[t] === G) return t;
  throw Error("");
}
function xm(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function Kt(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return `[${e.map(Kt).join(", ")}]`;
  if (e == null) return "" + e;
  let t = e.overriddenName || e.name;
  if (t) return `${t}`;
  let n = e.toString();
  if (n == null) return "" + n;
  let r = n.indexOf(`
`);
  return r >= 0 ? n.slice(0, r) : n;
}
function ua(e, t) {
  return e ? (t ? `${e} ${t}` : e) : t || "";
}
var Jb = G({ __forward_ref__: G });
function la(e) {
  return (
    (e.__forward_ref__ = la),
    (e.toString = function () {
      return Kt(this());
    }),
    e
  );
}
function ge(e) {
  return Al(e) ? e() : e;
}
function Al(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(Jb) && e.__forward_ref__ === la
  );
}
function Om(e, t) {
  e == null && xl(t, e, null, "!=");
}
function xl(e, t, n, r) {
  throw new Error(
    `ASSERTION ERROR: ${e}` +
      (r == null ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`),
  );
}
function D(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function ut(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function ii(e) {
  return eT(e, da);
}
function Ol(e) {
  return ii(e) !== null;
}
function eT(e, t) {
  return (e.hasOwnProperty(t) && e[t]) || null;
}
function tT(e) {
  let t = e?.[da] ?? null;
  return t || null;
}
function El(e) {
  return e && e.hasOwnProperty(ia) ? e[ia] : null;
}
var da = G({ ɵprov: G }),
  ia = G({ ɵinj: G }),
  C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    ɵprov;
    constructor(t, n) {
      ((this._desc = t),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = D({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            })));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function kl(e) {
  return e && !!e.ɵproviders;
}
var Pl = G({ ɵcmp: G }),
  Fl = G({ ɵdir: G }),
  Ll = G({ ɵpipe: G }),
  jl = G({ ɵmod: G }),
  ri = G({ ɵfac: G }),
  nr = G({ __NG_ELEMENT_ID__: G }),
  Rm = G({ __NG_ENV_ID__: G });
function rr(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function sa(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : rr(e);
}
var Bl = G({ ngErrorCode: G }),
  km = G({ ngErrorMessage: G }),
  ni = G({ ngTokenPath: G });
function Vl(e, t) {
  return Pm("", -200, t);
}
function fa(e, t) {
  throw new I(-201, !1);
}
function nT(e, t) {
  e[ni] ??= [];
  let n = e[ni],
    r;
  (typeof t == "object" && "multi" in t && t?.multi === !0
    ? (Om(t.provide, "Token with multi: true should have a provide property"),
      (r = sa(t.provide)))
    : (r = sa(t)),
    n[0] !== r && e[ni].unshift(r));
}
function rT(e, t) {
  let n = e[ni],
    r = e[Bl],
    o = e[km] || e.message;
  return ((e.message = iT(o, r, n, t)), e);
}
function Pm(e, t, n) {
  let r = new I(t, e);
  return ((r[Bl] = t), (r[km] = e), n && (r[ni] = n), r);
}
function oT(e) {
  return e[Bl];
}
function iT(e, t, n = [], r = null) {
  let o = "";
  n && n.length > 1 && (o = ` Path: ${n.join(" -> ")}.`);
  let i = r ? ` Source: ${r}.` : "";
  return bt(t, `${e}${i}${o}`);
}
var Il;
function Fm() {
  return Il;
}
function be(e) {
  let t = Il;
  return ((Il = e), t);
}
function Ul(e, t, n) {
  let r = ii(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & 8) return null;
  if (t !== void 0) return t;
  fa(e, "Injector");
}
var sT = {},
  Xn = sT,
  wl = "__NG_DI_FLAG__",
  Cl = class {
    injector;
    constructor(t) {
      this.injector = t;
    }
    retrieve(t, n) {
      let r = Jn(n) || 0;
      try {
        return this.injector.get(t, r & 8 ? null : Xn, r);
      } catch (o) {
        if (kr(o)) return o;
        throw o;
      }
    }
  };
function aT(e, t = 0) {
  let n = ws();
  if (n === void 0) throw new I(-203, !1);
  if (n === null) return Ul(e, void 0, t);
  {
    let r = cT(t),
      o = n.retrieve(e, r);
    if (kr(o)) {
      if (r.optional) return null;
      throw o;
    }
    return o;
  }
}
function S(e, t = 0) {
  return (Fm() || aT)(ge(e), t);
}
function p(e, t) {
  return S(e, Jn(t));
}
function Jn(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function cT(e) {
  return {
    optional: !!(e & 8),
    host: !!(e & 1),
    self: !!(e & 2),
    skipSelf: !!(e & 4),
  };
}
function bl(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = ge(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new I(900, !1);
      let o,
        i = 0;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          c = uT(a);
        typeof c == "number" ? (c === -1 ? (o = a.token) : (i |= c)) : (o = a);
      }
      t.push(S(o, i));
    } else t.push(S(r));
  }
  return t;
}
function Hl(e, t) {
  return ((e[wl] = t), (e.prototype[wl] = t), e);
}
function uT(e) {
  return e[wl];
}
function bn(e, t) {
  let n = e.hasOwnProperty(ri);
  return n ? e[ri] : null;
}
function Lm(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function jm(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function ha(e, t) {
  e.forEach((n) => (Array.isArray(n) ? ha(n, t) : t(n)));
}
function $l(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function si(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Bm(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function zl(e, t, n) {
  let r = e.length - n;
  for (; t < r; ) ((e[t] = e[t + n]), t++);
  for (; n--; ) e.pop();
}
function Gl(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) (e.push(r, e[0]), (e[0] = n));
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      ((e[o] = e[i]), o--);
    }
    ((e[t] = n), (e[t + 1] = r));
  }
}
function pa(e, t, n) {
  let r = Kr(e, t);
  return (r >= 0 ? (e[r | 1] = n) : ((r = ~r), Gl(e, r, t, n)), r);
}
function ga(e, t) {
  let n = Kr(e, t);
  if (n >= 0) return e[n | 1];
}
function Kr(e, t) {
  return lT(e, t, 1);
}
function lT(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var _n = {},
  Te = [],
  Tt = new C(""),
  Wl = new C("", -1),
  ql = new C(""),
  oi = class {
    get(t, n = Xn) {
      if (n === Xn) {
        let o = Pm("", -201);
        throw ((o.name = "\u0275NotFound"), o);
      }
      return n;
    }
  };
function Yl(e) {
  return e[jl] || null;
}
function St(e) {
  return e[Pl] || null;
}
function ma(e) {
  return e[Fl] || null;
}
function Zl(e) {
  return e[Ll] || null;
}
function _t(e) {
  return { ɵproviders: e };
}
function Vm(...e) {
  return { ɵproviders: ya(!0, e), ɵfromNgModule: !0 };
}
function ya(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    ha(t, (s) => {
      let a = s;
      aa(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Um(o, i),
    n
  );
}
function Um(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Ql(o, (i) => {
      t(i, r);
    });
  }
}
function aa(e, t, n, r) {
  if (((e = ge(e)), !e)) return !1;
  let o = null,
    i = El(e),
    s = !i && St(e);
  if (!i && !s) {
    let c = e.ngModule;
    if (((i = El(c)), i)) o = c;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let c =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let u of c) aa(u, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let u;
      try {
        ha(i.imports, (l) => {
          aa(l, t, n, r) && ((u ||= []), u.push(l));
        });
      } finally {
      }
      u !== void 0 && Um(u, t);
    }
    if (!a) {
      let u = bn(o) || (() => new o());
      (t({ provide: o, useFactory: u, deps: Te }, o),
        t({ provide: ql, useValue: o, multi: !0 }, o),
        t({ provide: Tt, useValue: () => S(o), multi: !0 }, o));
    }
    let c = i.providers;
    if (c != null && !a) {
      let u = e;
      Ql(c, (l) => {
        t(l, u);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Ql(e, t) {
  for (let n of e)
    (kl(n) && (n = n.ɵproviders), Array.isArray(n) ? Ql(n, t) : t(n));
}
var dT = G({ provide: String, useValue: G });
function Hm(e) {
  return e !== null && typeof e == "object" && dT in e;
}
function fT(e) {
  return !!(e && e.useExisting);
}
function hT(e) {
  return !!(e && e.useFactory);
}
function er(e) {
  return typeof e == "function";
}
function $m(e) {
  return !!e.useClass;
}
var ai = new C(""),
  oa = {},
  Am = {},
  Dl;
function ci() {
  return (Dl === void 0 && (Dl = new oi()), Dl);
}
var re = class {},
  tr = class extends re {
    parent;
    source;
    scopes;
    records = new Map();
    _ngOnDestroyHooks = new Set();
    _onDestroyHooks = [];
    get destroyed() {
      return this._destroyed;
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) {
      (super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        Sl(t, (s) => this.processProvider(s)),
        this.records.set(Wl, Qr(void 0, this)),
        o.has("environment") && this.records.set(re, Qr(void 0, this)));
      let i = this.records.get(ai);
      (i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(ql, Te, { self: !0 }))));
    }
    retrieve(t, n) {
      let r = Jn(n) || 0;
      try {
        return this.get(t, Xn, r);
      } catch (o) {
        if (kr(o)) return o;
        throw o;
      }
    }
    destroy() {
      (ti(this), (this._destroyed = !0));
      let t = R(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        (this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          R(t));
      }
    }
    onDestroy(t) {
      return (
        ti(this),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      ti(this);
      let n = It(this),
        r = be(void 0),
        o;
      try {
        return t();
      } finally {
        (It(n), be(r));
      }
    }
    get(t, n = Xn, r) {
      if ((ti(this), t.hasOwnProperty(Rm))) return t[Rm](this);
      let o = Jn(r),
        i,
        s = It(this),
        a = be(void 0);
      try {
        if (!(o & 4)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let l = vT(t) && ii(t);
            (l && this.injectableDefInScope(l)
              ? (u = Qr(Tl(t), oa))
              : (u = null),
              this.records.set(t, u));
          }
          if (u != null) return this.hydrate(t, u, o);
        }
        let c = o & 2 ? ci() : this.parent;
        return ((n = o & 8 && n === Xn ? null : n), c.get(t, n));
      } catch (c) {
        let u = oT(c);
        throw u === -200 || u === -201 ? new I(u, null) : c;
      } finally {
        (be(a), It(s));
      }
    }
    resolveInjectorInitializers() {
      let t = R(null),
        n = It(this),
        r = be(void 0),
        o;
      try {
        let i = this.get(Tt, Te, { self: !0 });
        for (let s of i) s();
      } finally {
        (It(n), be(r), R(t));
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(Kt(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    processProvider(t) {
      t = ge(t);
      let n = er(t) ? t : ge(t && t.provide),
        r = gT(t);
      if (!er(t) && t.multi === !0) {
        let o = this.records.get(n);
        (o ||
          ((o = Qr(void 0, oa, !0)),
          (o.factory = () => bl(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t));
      }
      this.records.set(n, r);
    }
    hydrate(t, n, r) {
      let o = R(null);
      try {
        if (n.value === Am) throw Vl(Kt(t));
        return (
          n.value === oa && ((n.value = Am), (n.value = n.factory(void 0, r))),
          typeof n.value == "object" &&
            n.value &&
            yT(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        R(o);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = ge(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Tl(e) {
  let t = ii(e),
    n = t !== null ? t.factory : bn(e);
  if (n !== null) return n;
  if (e instanceof C) throw new I(204, !1);
  if (e instanceof Function) return pT(e);
  throw new I(204, !1);
}
function pT(e) {
  if (e.length > 0) throw new I(204, !1);
  let n = tT(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function gT(e) {
  if (Hm(e)) return Qr(void 0, e.useValue);
  {
    let t = Kl(e);
    return Qr(t, oa);
  }
}
function Kl(e, t, n) {
  let r;
  if (er(e)) {
    let o = ge(e);
    return bn(o) || Tl(o);
  } else if (Hm(e)) r = () => ge(e.useValue);
  else if (hT(e)) r = () => e.useFactory(...bl(e.deps || []));
  else if (fT(e))
    r = (o, i) => S(ge(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
  else {
    let o = ge(e && (e.useClass || e.provide));
    if (mT(e)) r = () => new o(...bl(e.deps));
    else return bn(o) || Tl(o);
  }
  return r;
}
function ti(e) {
  if (e.destroyed) throw new I(205, !1);
}
function Qr(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function mT(e) {
  return !!e.deps;
}
function yT(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function vT(e) {
  return (
    typeof e == "function" ||
    (typeof e == "object" && e.ngMetadataName === "InjectionToken")
  );
}
function Sl(e, t) {
  for (let n of e)
    Array.isArray(n) ? Sl(n, t) : n && kl(n) ? Sl(n.ɵproviders, t) : t(n);
}
function he(e, t) {
  let n;
  e instanceof tr ? (ti(e), (n = e)) : (n = new Cl(e));
  let r,
    o = It(n),
    i = be(void 0);
  try {
    return t();
  } finally {
    (It(o), be(i));
  }
}
function zm() {
  return Fm() !== void 0 || ws() != null;
}
var _e = 0,
  b = 1,
  A = 2,
  ue = 3,
  Je = 4,
  Me = 5,
  Ne = 6,
  Xr = 7,
  se = 8,
  Fe = 9,
  Mt = 10,
  q = 11,
  Jr = 12,
  Xl = 13,
  or = 14,
  me = 15,
  Mn = 16,
  ir = 17,
  Nt = 18,
  ui = 19,
  Jl = 20,
  Qt = 21,
  va = 22,
  li = 23,
  Ue = 24,
  sr = 25,
  U = 26,
  Gm = 1,
  et = 6,
  Rt = 7,
  di = 8,
  ar = 9,
  le = 10;
function He(e) {
  return Array.isArray(e) && typeof e[Gm] == "object";
}
function $e(e) {
  return Array.isArray(e) && e[Gm] === !0;
}
function ed(e) {
  return (e.flags & 4) !== 0;
}
function Jt(e) {
  return e.componentOffset > -1;
}
function eo(e) {
  return (e.flags & 1) === 1;
}
function At(e) {
  return !!e.template;
}
function cr(e) {
  return (e[A] & 512) !== 0;
}
function Nn(e) {
  return (e[A] & 256) === 256;
}
var Wm = "svg",
  qm = "math";
function ze(e) {
  for (; Array.isArray(e); ) e = e[_e];
  return e;
}
function td(e, t) {
  return ze(t[e]);
}
function tt(e, t) {
  return ze(t[e.index]);
}
function ur(e, t) {
  return e.data[t];
}
function nd(e, t) {
  return e[t];
}
function rd(e, t, n, r) {
  (n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r));
}
function nt(e, t) {
  let n = t[e];
  return He(n) ? n : n[_e];
}
function Ym(e) {
  return (e[A] & 4) === 4;
}
function Da(e) {
  return (e[A] & 128) === 128;
}
function Zm(e) {
  return $e(e[ue]);
}
function Re(e, t) {
  return t == null ? null : e[t];
}
function od(e) {
  e[ir] = 0;
}
function id(e) {
  e[A] & 1024 || ((e[A] |= 1024), Da(e) && to(e));
}
function Qm(e, t) {
  for (; e > 0; ) ((t = t[or]), e--);
  return t;
}
function fi(e) {
  return !!(e[A] & 9216 || e[Ue]?.dirty);
}
function Ea(e) {
  (e[Mt].changeDetectionScheduler?.notify(8),
    e[A] & 64 && (e[A] |= 1024),
    fi(e) && to(e));
}
function to(e) {
  e[Mt].changeDetectionScheduler?.notify(0);
  let t = Tn(e);
  for (; t !== null && !(t[A] & 8192 || ((t[A] |= 8192), !Da(t))); ) t = Tn(t);
}
function Ia(e, t) {
  if (Nn(e)) throw new I(911, !1);
  (e[Qt] === null && (e[Qt] = []), e[Qt].push(t));
}
function sd(e, t) {
  if (e[Qt] === null) return;
  let n = e[Qt].indexOf(t);
  n !== -1 && e[Qt].splice(n, 1);
}
function Tn(e) {
  let t = e[ue];
  return $e(t) ? t[ue] : t;
}
function ad(e) {
  return (e[Xr] ??= []);
}
function cd(e) {
  return (e.cleanup ??= []);
}
function Km(e, t, n, r) {
  let o = ad(t);
  (o.push(n), e.firstCreatePass && cd(e).push(r, o.length - 1));
}
var F = { lFrame: dy(null), bindingsEnabled: !0, skipHydrationRootTNode: null },
  hi = (function (e) {
    return (
      (e[(e.Off = 0)] = "Off"),
      (e[(e.Exhaustive = 1)] = "Exhaustive"),
      (e[(e.OnlyDirtyViews = 2)] = "OnlyDirtyViews"),
      e
    );
  })(hi || {}),
  DT = 0,
  _l = !1;
function Xm() {
  return F.lFrame.elementDepthCount;
}
function Jm() {
  F.lFrame.elementDepthCount++;
}
function ud() {
  F.lFrame.elementDepthCount--;
}
function wa() {
  return F.bindingsEnabled;
}
function Ca() {
  return F.skipHydrationRootTNode !== null;
}
function ld(e) {
  return F.skipHydrationRootTNode === e;
}
function ey(e) {
  F.skipHydrationRootTNode = e;
}
function dd() {
  F.skipHydrationRootTNode = null;
}
function N() {
  return F.lFrame.lView;
}
function ne() {
  return F.lFrame.tView;
}
function ty(e) {
  return ((F.lFrame.contextLView = e), e[se]);
}
function ny(e) {
  return ((F.lFrame.contextLView = null), e);
}
function de() {
  let e = fd();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function fd() {
  return F.lFrame.currentTNode;
}
function ry() {
  let e = F.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function no(e, t) {
  let n = F.lFrame;
  ((n.currentTNode = e), (n.isParent = t));
}
function hd() {
  return F.lFrame.isParent;
}
function pd() {
  F.lFrame.isParent = !1;
}
function oy() {
  return F.lFrame.contextLView;
}
function gd(e) {
  (xl("Must never be called in production mode"), (DT = e));
}
function md() {
  return _l;
}
function yd(e) {
  let t = _l;
  return ((_l = e), t);
}
function ro() {
  let e = F.lFrame,
    t = e.bindingRootIndex;
  return (t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t);
}
function iy(e) {
  return (F.lFrame.bindingIndex = e);
}
function Rn() {
  return F.lFrame.bindingIndex++;
}
function vd(e) {
  let t = F.lFrame,
    n = t.bindingIndex;
  return ((t.bindingIndex = t.bindingIndex + e), n);
}
function sy() {
  return F.lFrame.inI18n;
}
function ay(e, t) {
  let n = F.lFrame;
  ((n.bindingIndex = n.bindingRootIndex = e), ba(t));
}
function cy() {
  return F.lFrame.currentDirectiveIndex;
}
function ba(e) {
  F.lFrame.currentDirectiveIndex = e;
}
function uy(e) {
  let t = F.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Dd() {
  return F.lFrame.currentQueryIndex;
}
function Ta(e) {
  F.lFrame.currentQueryIndex = e;
}
function ET(e) {
  let t = e[b];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[Me] : null;
}
function Ed(e, t, n) {
  if (n & 4) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & 1); )
      if (((o = ET(i)), o === null || ((i = i[or]), o.type & 10))) break;
    if (o === null) return !1;
    ((t = o), (e = i));
  }
  let r = (F.lFrame = ly());
  return ((r.currentTNode = t), (r.lView = e), !0);
}
function Sa(e) {
  let t = ly(),
    n = e[b];
  ((F.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1));
}
function ly() {
  let e = F.lFrame,
    t = e === null ? null : e.child;
  return t === null ? dy(e) : t;
}
function dy(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return (e !== null && (e.child = t), t);
}
function fy() {
  let e = F.lFrame;
  return ((F.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e);
}
var Id = fy;
function _a() {
  let e = fy();
  ((e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0));
}
function hy(e) {
  return (F.lFrame.contextLView = Qm(e, F.lFrame.contextLView))[se];
}
function en() {
  return F.lFrame.selectedIndex;
}
function An(e) {
  F.lFrame.selectedIndex = e;
}
function Ma() {
  let e = F.lFrame;
  return ur(e.tView, e.selectedIndex);
}
function wd() {
  return F.lFrame.currentNamespace;
}
var py = !0;
function Na() {
  return py;
}
function tn(e) {
  py = e;
}
function Ml(e, t = null, n = null, r) {
  let o = Cd(e, t, n, r);
  return (o.resolveInjectorInitializers(), o);
}
function Cd(e, t = null, n = null, r, o = new Set()) {
  let i = [n || Te, Vm(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : Kt(e))),
    new tr(i, t || ci(), r || null, o)
  );
}
var Se = class e {
    static THROW_IF_NOT_FOUND = Xn;
    static NULL = new oi();
    static create(t, n) {
      if (Array.isArray(t)) return Ml({ name: "" }, n, t, "");
      {
        let r = t.name ?? "";
        return Ml({ name: r }, t.parent, t.providers, r);
      }
    }
    static ɵprov = D({ token: e, providedIn: "any", factory: () => S(Wl) });
    static __NG_ELEMENT_ID__ = -1;
  },
  Q = new C(""),
  nn = (() => {
    class e {
      static __NG_ELEMENT_ID__ = IT;
      static __NG_ENV_ID__ = (n) => n;
    }
    return e;
  })(),
  Nl = class extends nn {
    _lView;
    constructor(t) {
      (super(), (this._lView = t));
    }
    get destroyed() {
      return Nn(this._lView);
    }
    onDestroy(t) {
      let n = this._lView;
      return (Ia(n, t), () => sd(n, t));
    }
  };
function IT() {
  return new Nl(N());
}
var ct = class {
    _console = console;
    handleError(t) {
      this._console.error("ERROR", t);
    }
  },
  Ae = new C("", {
    providedIn: "root",
    factory: () => {
      let e = p(re),
        t;
      return (n) => {
        e.destroyed && !t
          ? setTimeout(() => {
              throw n;
            })
          : ((t ??= e.get(ct)), t.handleError(n));
      };
    },
  }),
  gy = { provide: Tt, useValue: () => void p(ct), multi: !0 };
function lr(e, t) {
  let [n, r, o] = Xu(e, t?.equal),
    i = n,
    s = i[Ie];
  return ((i.set = r), (i.update = o), (i.asReadonly = my.bind(i)), i);
}
function my() {
  let e = this[Ie];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    ((t[Ie] = e), (e.readonlyFn = t));
  }
  return e.readonlyFn;
}
var Xt = class {},
  pi = new C("", { providedIn: "root", factory: () => !1 });
var bd = new C(""),
  Td = new C("");
var Ra = (() => {
  class e {
    view;
    node;
    constructor(n, r) {
      ((this.view = n), (this.node = r));
    }
    static __NG_ELEMENT_ID__ = wT;
  }
  return e;
})();
function wT() {
  return new Ra(N(), de());
}
var xt = (() => {
    class e {
      taskId = 0;
      pendingTasks = new Set();
      destroyed = !1;
      pendingTask = new pe(!1);
      get hasPendingTasks() {
        return this.destroyed ? !1 : this.pendingTask.value;
      }
      get hasPendingTasksObservable() {
        return this.destroyed
          ? new P((n) => {
              (n.next(!1), n.complete());
            })
          : this.pendingTask;
      }
      add() {
        !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0);
        let n = this.taskId++;
        return (this.pendingTasks.add(n), n);
      }
      has(n) {
        return this.pendingTasks.has(n);
      }
      remove(n) {
        (this.pendingTasks.delete(n),
          this.pendingTasks.size === 0 &&
            this.hasPendingTasks &&
            this.pendingTask.next(!1));
      }
      ngOnDestroy() {
        (this.pendingTasks.clear(),
          this.hasPendingTasks && this.pendingTask.next(!1),
          (this.destroyed = !0),
          this.pendingTask.unsubscribe());
      }
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  oo = (() => {
    class e {
      internalPendingTasks = p(xt);
      scheduler = p(Xt);
      errorHandler = p(Ae);
      add() {
        let n = this.internalPendingTasks.add();
        return () => {
          this.internalPendingTasks.has(n) &&
            (this.scheduler.notify(11), this.internalPendingTasks.remove(n));
        };
      }
      run(n) {
        let r = this.add();
        n().catch(this.errorHandler).finally(r);
      }
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })();
function gi(...e) {}
var Sd = (() => {
    class e {
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new Rl(),
      });
    }
    return e;
  })(),
  Rl = class {
    dirtyEffectCount = 0;
    queues = new Map();
    add(t) {
      (this.enqueue(t), this.schedule(t));
    }
    schedule(t) {
      t.dirty && this.dirtyEffectCount++;
    }
    remove(t) {
      let n = t.zone,
        r = this.queues.get(n);
      r.has(t) && (r.delete(t), t.dirty && this.dirtyEffectCount--);
    }
    enqueue(t) {
      let n = t.zone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || r.add(t);
    }
    flush() {
      for (; this.dirtyEffectCount > 0; ) {
        let t = !1;
        for (let [n, r] of this.queues)
          n === null
            ? (t ||= this.flushQueue(r))
            : (t ||= n.run(() => this.flushQueue(r)));
        t || (this.dirtyEffectCount = 0);
      }
    }
    flushQueue(t) {
      let n = !1;
      for (let r of t) r.dirty && (this.dirtyEffectCount--, (n = !0), r.run());
      return n;
    }
  };
function ho(e) {
  return { toString: e }.toString();
}
var Aa = "__parameters__";
function AT(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function iv(e, t, n) {
  return ho(() => {
    let r = AT(t);
    function o(...i) {
      if (this instanceof o) return (r.apply(this, i), this);
      let s = new o(...i);
      return ((a.annotation = s), a);
      function a(c, u, l) {
        let d = c.hasOwnProperty(Aa)
          ? c[Aa]
          : Object.defineProperty(c, Aa, { value: [] })[Aa];
        for (; d.length <= l; ) d.push(null);
        return ((d[l] = d[l] || []).push(s), c);
      }
    }
    return ((o.prototype.ngMetadataName = e), (o.annotationCls = o), o);
  });
}
var lc = Hl(iv("Optional"), 8);
var Rf = Hl(iv("SkipSelf"), 4);
function xT(e) {
  return typeof e == "function";
}
var $a = class {
  previousValue;
  currentValue;
  firstChange;
  constructor(t, n, r) {
    ((this.previousValue = t), (this.currentValue = n), (this.firstChange = r));
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function sv(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
var ht = (() => {
  let e = () => av;
  return ((e.ngInherit = !0), e);
})();
function av(e) {
  return (e.type.prototype.ngOnChanges && (e.setInput = kT), OT);
}
function OT() {
  let e = uv(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === _n) e.previous = t;
    else for (let r in t) n[r] = t[r];
    ((e.current = null), this.ngOnChanges(t));
  }
}
function kT(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = uv(e) || PT(e, { previous: _n, current: null }),
    a = s.current || (s.current = {}),
    c = s.previous,
    u = c[i];
  ((a[i] = new $a(u && u.currentValue, n, c === _n)), sv(e, t, o, n));
}
var cv = "__ngSimpleChanges__";
function uv(e) {
  return e[cv] || null;
}
function PT(e, t) {
  return (e[cv] = t);
}
var yy = [];
var $ = function (e, t = null, n) {
  for (let r = 0; r < yy.length; r++) {
    let o = yy[r];
    o(e, t, n);
  }
};
function FT(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = av(t);
    ((n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s));
  }
  (o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i)));
}
function lv(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: c,
        ngAfterViewChecked: u,
        ngOnDestroy: l,
      } = i;
    (s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      c && (e.viewHooks ??= []).push(-n, c),
      u &&
        ((e.viewHooks ??= []).push(n, u), (e.viewCheckHooks ??= []).push(n, u)),
      l != null && (e.destroyHooks ??= []).push(n, l));
  }
}
function La(e, t, n) {
  dv(e, t, 3, n);
}
function ja(e, t, n, r) {
  (e[A] & 3) === n && dv(e, t, n, r);
}
function _d(e, t) {
  let n = e[A];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[A] = n));
}
function dv(e, t, n, r) {
  let o = r !== void 0 ? e[ir] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let c = o; c < s; c++)
    if (typeof t[c + 1] == "number") {
      if (((a = t[c]), r != null && a >= r)) break;
    } else
      (t[c] < 0 && (e[ir] += 65536),
        (a < i || i == -1) &&
          (LT(e, n, t, c), (e[ir] = (e[ir] & 4294901760) + c + 2)),
        c++);
}
function vy(e, t) {
  $(4, e, t);
  let n = R(null);
  try {
    t.call(e);
  } finally {
    (R(n), $(5, e, t));
  }
}
function LT(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[A] >> 14 < e[ir] >> 16 &&
      (e[A] & 3) === t &&
      ((e[A] += 16384), vy(a, i))
    : vy(a, i);
}
var so = -1,
  fr = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r, o) {
      ((this.factory = t),
        (this.name = o),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r));
    }
  };
function jT(e) {
  return (e.flags & 8) !== 0;
}
function BT(e) {
  return (e.flags & 16) !== 0;
}
function VT(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      (UT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++);
    }
  }
  return r;
}
function fv(e) {
  return e === 3 || e === 4 || e === 6;
}
function UT(e) {
  return e.charCodeAt(0) === 64;
}
function uo(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? Dy(e, n, o, null, t[++r])
              : Dy(e, n, o, null, null));
      }
    }
  return e;
}
function Dy(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      o !== null && (e[i + 1] = o);
      return;
    }
    (i++, o !== null && i++);
  }
  (s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    o !== null && e.splice(i++, 0, o));
}
function hv(e) {
  return e !== so;
}
function za(e) {
  return e & 32767;
}
function HT(e) {
  return e >> 16;
}
function Ga(e, t) {
  let n = HT(e),
    r = t;
  for (; n > 0; ) ((r = r[or]), n--);
  return r;
}
var Hd = !0;
function Wa(e) {
  let t = Hd;
  return ((Hd = e), t);
}
var $T = 256,
  pv = $T - 1,
  gv = 5,
  zT = 0,
  Ot = {};
function GT(e, t, n) {
  let r;
  (typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(nr) && (r = n[nr]),
    r == null && (r = n[nr] = zT++));
  let o = r & pv,
    i = 1 << o;
  t.data[e + (o >> gv)] |= i;
}
function qa(e, t) {
  let n = mv(e, t);
  if (n !== -1) return n;
  let r = t[b];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Md(r.data, e),
    Md(t, null),
    Md(r.blueprint, null));
  let o = Af(e, t),
    i = e.injectorIndex;
  if (hv(o)) {
    let s = za(o),
      a = Ga(o, t),
      c = a[b].data;
    for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
  }
  return ((t[i + 8] = o), i);
}
function Md(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function mv(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Af(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = Iv(o)), r === null)) return so;
    if ((n++, (o = o[or]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return so;
}
function $d(e, t, n) {
  GT(e, t, n);
}
function WT(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (fv(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < r && typeof n[o] == "string"; ) o++;
      else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function yv(e, t, n) {
  if (n & 8 || e !== void 0) return e;
  fa(t, "NodeInjector");
}
function vv(e, t, n, r) {
  if ((n & 8 && r === void 0 && (r = null), (n & 3) === 0)) {
    let o = e[Fe],
      i = be(void 0);
    try {
      return o ? o.get(t, r, n & 8) : Ul(t, r, n & 8);
    } finally {
      be(i);
    }
  }
  return yv(r, t, n);
}
function Dv(e, t, n, r = 0, o) {
  if (e !== null) {
    if (t[A] & 2048 && !(r & 2)) {
      let s = QT(e, t, n, r, Ot);
      if (s !== Ot) return s;
    }
    let i = Ev(e, t, n, r, Ot);
    if (i !== Ot) return i;
  }
  return vv(t, n, r, o);
}
function Ev(e, t, n, r, o) {
  let i = YT(n);
  if (typeof i == "function") {
    if (!Ed(t, e, r)) return r & 1 ? yv(o, n, r) : vv(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & 8))) fa(n);
      else return s;
    } finally {
      Id();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = mv(e, t),
      c = so,
      u = r & 1 ? t[me][Me] : null;
    for (
      (a === -1 || r & 4) &&
      ((c = a === -1 ? Af(e, t) : t[a + 8]),
      c === so || !Iy(r, !1)
        ? (a = -1)
        : ((s = t[b]), (a = za(c)), (t = Ga(c, t))));
      a !== -1;

    ) {
      let l = t[b];
      if (Ey(i, a, l.data)) {
        let d = qT(a, t, n, s, r, u);
        if (d !== Ot) return d;
      }
      ((c = t[a + 8]),
        c !== so && Iy(r, t[b].data[a + 8] === u) && Ey(i, a, t)
          ? ((s = l), (a = za(c)), (t = Ga(c, t)))
          : (a = -1));
    }
  }
  return o;
}
function qT(e, t, n, r, o, i) {
  let s = t[b],
    a = s.data[e + 8],
    c = r == null ? Jt(a) && Hd : r != s && (a.type & 3) !== 0,
    u = o & 1 && i === a,
    l = Ba(a, s, n, c, u);
  return l !== null ? Di(t, s, l, a, o) : Ot;
}
function Ba(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    c = e.directiveStart,
    u = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    h = o ? a + l : u;
  for (let f = d; f < h; f++) {
    let g = s[f];
    if ((f < c && n === g) || (f >= c && g.type === n)) return f;
  }
  if (o) {
    let f = s[c];
    if (f && At(f) && f.type === n) return c;
  }
  return null;
}
function Di(e, t, n, r, o) {
  let i = e[n],
    s = t.data;
  if (i instanceof fr) {
    let a = i;
    if (a.resolving) {
      let f = sa(s[n]);
      throw Vl(f);
    }
    let c = Wa(a.canSeeViewProviders);
    a.resolving = !0;
    let u = s[n].type || s[n],
      l,
      d = a.injectImpl ? be(a.injectImpl) : null,
      h = Ed(e, r, 0);
    try {
      ((i = e[n] = a.factory(void 0, o, s, e, r)),
        t.firstCreatePass && n >= r.directiveStart && FT(n, s[n], t));
    } finally {
      (d !== null && be(d), Wa(c), (a.resolving = !1), Id());
    }
  }
  return i;
}
function YT(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(nr) ? e[nr] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & pv : ZT) : t;
}
function Ey(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> gv)] & r);
}
function Iy(e, t) {
  return !(e & 2) && !(e & 1 && t);
}
var dr = class {
  _tNode;
  _lView;
  constructor(t, n) {
    ((this._tNode = t), (this._lView = n));
  }
  get(t, n, r) {
    return Dv(this._tNode, this._lView, t, Jn(r), n);
  }
};
function ZT() {
  return new dr(de(), N());
}
function _i(e) {
  return ho(() => {
    let t = e.prototype.constructor,
      n = t[ri] || zd(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[ri] || zd(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function zd(e) {
  return Al(e)
    ? () => {
        let t = zd(ge(e));
        return t && t();
      }
    : bn(e);
}
function QT(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[A] & 2048 && !cr(s); ) {
    let a = Ev(i, s, n, r | 2, Ot);
    if (a !== Ot) return a;
    let c = i.parent;
    if (!c) {
      let u = s[Jl];
      if (u) {
        let l = u.get(n, Ot, r);
        if (l !== Ot) return l;
      }
      ((c = Iv(s)), (s = s[or]));
    }
    i = c;
  }
  return o;
}
function Iv(e) {
  let t = e[b],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[Me] : null;
}
function Mi(e) {
  return WT(de(), e);
}
function KT() {
  return po(de(), N());
}
function po(e, t) {
  return new We(tt(e, t));
}
var We = (() => {
  class e {
    nativeElement;
    constructor(n) {
      this.nativeElement = n;
    }
    static __NG_ELEMENT_ID__ = KT;
  }
  return e;
})();
function XT(e) {
  return e instanceof We ? e.nativeElement : e;
}
function JT() {
  return this._results[Symbol.iterator]();
}
var Ya = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() {
      return (this._changes ??= new ie());
    }
    constructor(t = !1) {
      this._emitDistinctChangesOnly = t;
    }
    get(t) {
      return this._results[t];
    }
    map(t) {
      return this._results.map(t);
    }
    filter(t) {
      return this._results.filter(t);
    }
    find(t) {
      return this._results.find(t);
    }
    reduce(t, n) {
      return this._results.reduce(t, n);
    }
    forEach(t) {
      this._results.forEach(t);
    }
    some(t) {
      return this._results.some(t);
    }
    toArray() {
      return this._results.slice();
    }
    toString() {
      return this._results.toString();
    }
    reset(t, n) {
      this.dirty = !1;
      let r = jm(t);
      (this._changesDetected = !Lm(this._results, r, n)) &&
        ((this._results = r),
        (this.length = r.length),
        (this.last = r[this.length - 1]),
        (this.first = r[0]));
    }
    notifyOnChanges() {
      this._changes !== void 0 &&
        (this._changesDetected || !this._emitDistinctChangesOnly) &&
        this._changes.next(this);
    }
    onDirty(t) {
      this._onDirty = t;
    }
    setDirty() {
      ((this.dirty = !0), this._onDirty?.());
    }
    destroy() {
      this._changes !== void 0 &&
        (this._changes.complete(), this._changes.unsubscribe());
    }
    [Symbol.iterator] = JT;
  },
  wv = "ngSkipHydration",
  eS = "ngskiphydration";
function Cv(e) {
  let t = e.mergedAttrs;
  if (t === null) return !1;
  for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == "number") return !1;
    if (typeof r == "string" && r.toLowerCase() === eS) return !0;
  }
  return !1;
}
function bv(e) {
  return e.hasAttribute(wv);
}
function Za(e) {
  return (e.flags & 128) === 128;
}
function Tv(e) {
  if (Za(e)) return !0;
  let t = e.parent;
  for (; t; ) {
    if (Za(e) || Cv(t)) return !0;
    t = t.parent;
  }
  return !1;
}
var xf = (function (e) {
    return (
      (e[(e.OnPush = 0)] = "OnPush"),
      (e[(e.Default = 1)] = "Default"),
      e
    );
  })(xf || {}),
  Sv = new Map(),
  tS = 0;
function nS() {
  return tS++;
}
function rS(e) {
  Sv.set(e[ui], e);
}
function Gd(e) {
  Sv.delete(e[ui]);
}
var wy = "__ngContext__";
function lo(e, t) {
  He(t) ? ((e[wy] = t[ui]), rS(t)) : (e[wy] = t);
}
function _v(e) {
  return Nv(e[Jr]);
}
function Mv(e) {
  return Nv(e[Je]);
}
function Nv(e) {
  for (; e !== null && !$e(e); ) e = e[Je];
  return e;
}
var Wd;
function Of(e) {
  Wd = e;
}
function go() {
  if (Wd !== void 0) return Wd;
  if (typeof document < "u") return document;
  throw new I(210, !1);
}
var Ni = new C("", { providedIn: "root", factory: () => oS }),
  oS = "ng",
  dc = new C(""),
  mo = new C("", { providedIn: "platform", factory: () => "unknown" });
var iS = new C(""),
  fc = new C("", {
    providedIn: "root",
    factory: () =>
      go().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  }),
  kf = {
    breakpoints: [
      16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
      3840,
    ],
    placeholderResolution: 30,
    disableImageSizeWarning: !1,
    disableImageLazyLoadWarning: !1,
  },
  Pf = new C("", { providedIn: "root", factory: () => kf });
function sS() {
  let e = new yo();
  return ((e.store = Rv(go(), p(Ni))), e);
}
var yo = (() => {
  class e {
    static ɵprov = D({ token: e, providedIn: "root", factory: sS });
    store = {};
    onSerializeCallbacks = {};
    get(n, r) {
      return this.store[n] !== void 0 ? this.store[n] : r;
    }
    set(n, r) {
      this.store[n] = r;
    }
    remove(n) {
      delete this.store[n];
    }
    hasKey(n) {
      return this.store.hasOwnProperty(n);
    }
    get isEmpty() {
      return Object.keys(this.store).length === 0;
    }
    onSerialize(n, r) {
      this.onSerializeCallbacks[n] = r;
    }
    toJson() {
      for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
          try {
            this.store[n] = this.onSerializeCallbacks[n]();
          } catch (r) {
            console.warn("Exception in onSerialize callback: ", r);
          }
      return JSON.stringify(this.store).replace(/</g, "\\u003C");
    }
  }
  return e;
})();
function Rv(e, t) {
  let n = e.getElementById(t + "-state");
  if (n?.textContent)
    try {
      return JSON.parse(n.textContent);
    } catch (r) {
      console.warn("Exception while restoring TransferState for app " + t, r);
    }
  return {};
}
var Av = "h",
  xv = "b",
  aS = "f",
  cS = "n",
  Ov = "e",
  kv = "t",
  hc = "c",
  Ff = "x",
  Ei = "r",
  Pv = "i",
  Fv = "n",
  Lf = "d";
var jf = "di",
  Bf = "s";
var Ri = new C(""),
  Lv = !1,
  Vf = new C("", { providedIn: "root", factory: () => Lv });
var jv = new C("");
var uS = (e, t, n, r) => {};
function lS(e, t, n, r) {
  uS(e, t, n, r);
}
var Bv = new C("");
function Ai(e) {
  return (e.flags & 32) === 32;
}
var dS = "__nghData__",
  Uf = dS;
var Va = "ngh",
  Vv = "nghm",
  Uv = () => null;
function fS(e, t, n = !1) {
  let r = e.getAttribute(Va);
  if (r == null) return null;
  let [o, i] = r.split("|");
  if (((r = n ? i : o), !r)) return null;
  let s = i ? `|${i}` : "",
    a = n ? o : s,
    c = {};
  if (r !== "") {
    let l = t.get(yo, null, { optional: !0 });
    l !== null && (c = l.get(Uf, [])[Number(r)]);
  }
  let u = { data: c, firstChild: e.firstChild ?? null };
  return (
    n && ((u.firstChild = e), pc(u, 0, e.nextSibling)),
    a ? e.setAttribute(Va, a) : e.removeAttribute(Va),
    u
  );
}
function Hv() {
  Uv = fS;
}
function $v(e, t, n = !1) {
  return Uv(e, t, n);
}
function zv(e) {
  let t = e._lView;
  return t[b].type === 2 ? null : (cr(t) && (t = t[U]), t);
}
function hS(e) {
  return e.textContent?.replace(/\s/gm, "");
}
function pS(e) {
  let t = go(),
    n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
      acceptNode(i) {
        let s = hS(i);
        return s === "ngetn" || s === "ngtns"
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    }),
    r,
    o = [];
  for (; (r = n.nextNode()); ) o.push(r);
  for (let i of o)
    i.textContent === "ngetn"
      ? i.replaceWith(t.createTextNode(""))
      : i.remove();
}
function pc(e, t, n) {
  ((e.segmentHeads ??= {}), (e.segmentHeads[t] = n));
}
function qd(e, t) {
  return e.segmentHeads?.[t] ?? null;
}
function Gv(e) {
  return e.get(jv, !1, { optional: !0 });
}
function gS(e, t) {
  let n = e.data,
    r = n[Ov]?.[t] ?? null;
  return (r === null && n[hc]?.[t] && (r = Hf(e, t)), r);
}
function Wv(e, t) {
  return e.data[hc]?.[t] ?? null;
}
function Hf(e, t) {
  let n = Wv(e, t) ?? [],
    r = 0;
  for (let o of n) r += o[Ei] * (o[Ff] ?? 1);
  return r;
}
function mS(e) {
  if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Lf];
    e.disconnectedNodes = t ? new Set(t) : null;
  }
  return e.disconnectedNodes;
}
function qv(e, t) {
  if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Lf];
    e.disconnectedNodes = n ? new Set(n) : null;
  }
  return !!mS(e)?.has(t);
}
function gc(e, t) {
  let n = e[Ne];
  return n !== null && !Ca() && !Ai(t) && !qv(n, t.index - U);
}
function Nd(e) {
  return (
    !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Vv
  );
}
function Cy(e) {
  for (; e && e.nodeType === Node.TEXT_NODE; ) e = e.previousSibling;
  return e;
}
function Yv(e) {
  for (let r of e.body.childNodes) if (Nd(r)) return;
  let t = Cy(e.body.previousSibling);
  if (Nd(t)) return;
  let n = Cy(e.head.lastChild);
  if (!Nd(n)) throw new I(-507, !1);
}
function Zv(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = R(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          (Ta(i), a.contentQueries(2, t[s], s));
        }
      }
    } finally {
      R(r);
    }
  }
}
function Yd(e, t, n) {
  Ta(0);
  let r = R(null);
  try {
    t(e, n);
  } finally {
    R(r);
  }
}
function $f(e, t, n) {
  if (ed(t)) {
    let r = R(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let c = n[s];
          a.contentQueries(1, c, s);
        }
      }
    } finally {
      R(r);
    }
  }
}
var on = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(on || {}),
  xa;
function yS() {
  if (xa === void 0 && ((xa = null), Sn.trustedTypes))
    try {
      xa = Sn.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return xa;
}
function mc(e) {
  return yS()?.createHTML(e) || e;
}
var Oa;
function Qv() {
  if (Oa === void 0 && ((Oa = null), Sn.trustedTypes))
    try {
      Oa = Sn.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Oa;
}
function by(e) {
  return Qv()?.createHTML(e) || e;
}
function Ty(e) {
  return Qv()?.createScriptURL(e) || e;
}
var sn = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ca})`;
    }
  },
  Zd = class extends sn {
    getTypeName() {
      return "HTML";
    }
  },
  Qd = class extends sn {
    getTypeName() {
      return "Style";
    }
  },
  Kd = class extends sn {
    getTypeName() {
      return "Script";
    }
  },
  Xd = class extends sn {
    getTypeName() {
      return "URL";
    }
  },
  Jd = class extends sn {
    getTypeName() {
      return "ResourceURL";
    }
  };
function qe(e) {
  return e instanceof sn ? e.changingThisBreaksApplicationSecurity : e;
}
function kt(e, t) {
  let n = Kv(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${ca})`);
  }
  return n === t;
}
function Kv(e) {
  return (e instanceof sn && e.getTypeName()) || null;
}
function zf(e) {
  return new Zd(e);
}
function Gf(e) {
  return new Qd(e);
}
function Wf(e) {
  return new Kd(e);
}
function qf(e) {
  return new Xd(e);
}
function Yf(e) {
  return new Jd(e);
}
function vS(e) {
  let t = new tf(e);
  return DS() ? new ef(t) : t;
}
var ef = class {
    inertDocumentHelper;
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(mc(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  tf = class {
    defaultDoc;
    inertDocument;
    constructor(t) {
      ((this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert",
          )));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return ((n.innerHTML = mc(t)), n);
    }
  };
function DS() {
  try {
    return !!new window.DOMParser().parseFromString(mc(""), "text/html");
  } catch {
    return !1;
  }
}
var ES = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function xi(e) {
  return ((e = String(e)), e.match(ES) ? e : "unsafe:" + e);
}
function cn(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function Oi(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Xv = cn("area,br,col,hr,img,wbr"),
  Jv = cn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  eD = cn("rp,rt"),
  IS = Oi(eD, Jv),
  wS = Oi(
    Jv,
    cn(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  CS = Oi(
    eD,
    cn(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  Sy = Oi(Xv, wS, CS, IS),
  tD = cn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  bS = cn(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  TS = cn(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  SS = Oi(tD, bS, TS),
  _S = cn("script,style,template"),
  nf = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) {
      let n = t.firstChild,
        r = !0,
        o = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (r = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
              ? this.chars(n.nodeValue)
              : (this.sanitizedSomething = !0),
          r && n.firstChild)
        ) {
          (o.push(n), (n = RS(n)));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = NS(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = _y(t).toLowerCase();
      if (!Sy.hasOwnProperty(n))
        return ((this.sanitizedSomething = !0), !_S.hasOwnProperty(n));
      (this.buf.push("<"), this.buf.push(n));
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!SS.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let c = i.value;
        (tD[a] && (c = xi(c)), this.buf.push(" ", s, '="', My(c), '"'));
      }
      return (this.buf.push(">"), !0);
    }
    endElement(t) {
      let n = _y(t).toLowerCase();
      Sy.hasOwnProperty(n) &&
        !Xv.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(My(t));
    }
  };
function MS(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function NS(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw nD(t);
  return t;
}
function RS(e) {
  let t = e.firstChild;
  if (t && MS(e, t)) throw nD(t);
  return t;
}
function _y(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function nD(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var AS = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  xS = /([^\#-~ |!])/g;
function My(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(AS, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(xS, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var ka;
function yc(e, t) {
  let n = null;
  try {
    ka = ka || vS(e);
    let r = t ? String(t) : "";
    n = ka.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      (o--, (r = i), (i = n.innerHTML), (n = ka.getInertBodyElement(r)));
    } while (r !== i);
    let a = new nf().sanitizeChildren(Ny(n) || n);
    return mc(a);
  } finally {
    if (n) {
      let r = Ny(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function Ny(e) {
  return "content" in e && OS(e) ? e.content : null;
}
function OS(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var rt = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(rt || {});
function Zf(e) {
  let t = Kf();
  return t
    ? by(t.sanitize(rt.HTML, e) || "")
    : kt(e, "HTML")
      ? by(qe(e))
      : yc(go(), rr(e));
}
function rD(e) {
  let t = Kf();
  return t ? t.sanitize(rt.URL, e) || "" : kt(e, "URL") ? qe(e) : xi(rr(e));
}
function oD(e) {
  let t = Kf();
  if (t) return Ty(t.sanitize(rt.RESOURCE_URL, e) || "");
  if (kt(e, "ResourceURL")) return Ty(qe(e));
  throw new I(904, !1);
}
function kS(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? oD
    : rD;
}
function Qf(e, t, n) {
  return kS(t, n)(e);
}
function Kf() {
  let e = N();
  return e && e[Mt].sanitizer;
}
var PS = /^>|^->|<!--|-->|--!>|<!-$/g,
  FS = /(<|>)/g,
  LS = "\u200B$1\u200B";
function jS(e) {
  return e.replace(PS, (t) => t.replace(FS, LS));
}
function BS(e) {
  return e.ownerDocument.defaultView;
}
function iD(e) {
  return e.ownerDocument.body;
}
function sD(e) {
  return e instanceof Function ? e() : e;
}
function VS(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
var aD = "ng-template";
function US(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && VS(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Xf(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Xf(e) {
  return e.type === 4 && e.value !== aD;
}
function HS(e, t, n) {
  let r = e.type === 4 && !n ? aD : e.value;
  return t === r;
}
function $S(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? WS(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
      if (!s && !lt(r) && !lt(c)) return !1;
      if (s && lt(c)) continue;
      ((s = !1), (r = c | (r & 1)));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (c !== "" && !HS(e, c, n)) || (c === "" && t.length === 1))
        ) {
          if (lt(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !US(e, o, c, n)) {
          if (lt(r)) return !1;
          s = !0;
        }
      } else {
        let u = t[++a],
          l = zS(c, o, Xf(e), n);
        if (l === -1) {
          if (lt(r)) return !1;
          s = !0;
          continue;
        }
        if (u !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && u !== d)
          ) {
            if (lt(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return lt(r) || s;
}
function lt(e) {
  return (e & 1) === 0;
}
function zS(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return qS(t, e);
}
function cD(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if ($S(e, t[r], n)) return !0;
  return !1;
}
function GS(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0) return t[n + 1];
  }
  return null;
}
function WS(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (fv(n)) return t;
  }
  return e.length;
}
function qS(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function YS(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Ry(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function ZS(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      (o !== "" && !lt(s) && ((t += Ry(i, o)), (o = "")),
        (r = s),
        (i = i || !lt(r)));
    n++;
  }
  return (o !== "" && (t += Ry(i, o)), t);
}
function QS(e) {
  return e.map(ZS).join(",");
}
function KS(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!lt(o)) break;
      o = i;
    }
    r++;
  }
  return (n.length && t.push(1, ...n), t);
}
var je = {};
function uD(e, t) {
  return e.createText(t);
}
function XS(e, t, n) {
  e.setValue(t, n);
}
function lD(e, t) {
  return e.createComment(jS(t));
}
function Jf(e, t, n) {
  return e.createElement(t, n);
}
function Qa(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function dD(e, t, n) {
  e.appendChild(t, n);
}
function Ay(e, t, n, r, o) {
  r !== null ? Qa(e, t, n, r, o) : dD(e, t, n);
}
function eh(e, t, n) {
  e.removeChild(null, t, n);
}
function fD(e) {
  e.textContent = "";
}
function JS(e, t, n) {
  e.setAttribute(t, "style", n);
}
function e_(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function hD(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  (r !== null && VT(e, t, r),
    o !== null && e_(e, t, o),
    i !== null && JS(e, t, i));
}
function th(e, t, n, r, o, i, s, a, c, u, l) {
  let d = U + r,
    h = d + o,
    f = t_(d, h),
    g = typeof u == "function" ? u() : u;
  return (f[b] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: h,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: c,
    consts: g,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function t_(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : je);
  return n;
}
function n_(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = th(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function nh(e, t, n, r, o, i, s, a, c, u, l) {
  let d = t.blueprint.slice();
  return (
    (d[_e] = o),
    (d[A] = r | 4 | 128 | 8 | 64 | 1024),
    (u !== null || (e && e[A] & 2048)) && (d[A] |= 2048),
    od(d),
    (d[ue] = d[or] = e),
    (d[se] = n),
    (d[Mt] = s || (e && e[Mt])),
    (d[q] = a || (e && e[q])),
    (d[Fe] = c || (e && e[Fe]) || null),
    (d[Me] = i),
    (d[ui] = nS()),
    (d[Ne] = l),
    (d[Jl] = u),
    (d[me] = t.type == 2 ? e[me] : d),
    d
  );
}
function r_(e, t, n) {
  let r = tt(t, e),
    o = n_(n),
    i = e[Mt].rendererFactory,
    s = rh(
      e,
      nh(
        e,
        o,
        null,
        pD(n),
        r,
        t,
        null,
        i.createRenderer(r, n),
        null,
        null,
        null,
      ),
    );
  return (e[t.index] = s);
}
function pD(e) {
  let t = 16;
  return (e.signals ? (t = 4096) : e.onPush && (t = 64), t);
}
function gD(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++)
    (t.push(r), e.blueprint.push(r), e.data.push(null));
  return o;
}
function rh(e, t) {
  return (e[Jr] ? (e[Xl][Je] = t) : (e[Jr] = t), (e[Xl] = t), t);
}
function o_(e = 1) {
  mD(ne(), N(), en() + e, !1);
}
function mD(e, t, n, r) {
  if (!r)
    if ((t[A] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && La(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && ja(t, i, 0, n);
    }
  An(n);
}
var vc = (function (e) {
  return (
    (e[(e.None = 0)] = "None"),
    (e[(e.SignalBased = 1)] = "SignalBased"),
    (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
    e
  );
})(vc || {});
function rf(e, t, n, r) {
  let o = R(null);
  try {
    let [i, s, a] = e.inputs[n],
      c = null;
    ((s & vc.SignalBased) !== 0 && (c = t[i][Ie]),
      c !== null && c.transformFn !== void 0
        ? (r = c.transformFn(r))
        : a !== null && (r = a.call(t, r)),
      e.setInput !== null ? e.setInput(t, c, r, n, i) : sv(t, c, i, r));
  } finally {
    R(o);
  }
}
var ft = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(ft || {}),
  i_;
function oh(e, t) {
  return i_(e, t);
}
function io(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    $e(r) ? (i = r) : He(r) && ((s = !0), (r = r[_e]));
    let a = ze(r);
    (e === 0 && n !== null
      ? o == null
        ? dD(t, n, a)
        : Qa(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? Qa(t, n, a, o || null, !0)
        : e === 2
          ? eh(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && g_(t, e, i, n, o));
  }
}
function s_(e, t) {
  (yD(e, t), (t[_e] = null), (t[Me] = null));
}
function a_(e, t, n, r, o, i) {
  ((r[_e] = o), (r[Me] = t), Ec(e, r, n, 1, o, i));
}
function yD(e, t) {
  (t[Mt].changeDetectionScheduler?.notify(9), Ec(e, t, t[q], 2, null, null));
}
function c_(e) {
  let t = e[Jr];
  if (!t) return Rd(e[b], e);
  for (; t; ) {
    let n = null;
    if (He(t)) n = t[Jr];
    else {
      let r = t[le];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[Je] && t !== e; ) (He(t) && Rd(t[b], t), (t = t[ue]));
      (t === null && (t = e), He(t) && Rd(t[b], t), (n = t && t[Je]));
    }
    t = n;
  }
}
function ih(e, t) {
  let n = e[ar],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Dc(e, t) {
  if (Nn(t)) return;
  let n = t[q];
  (n.destroyNode && Ec(e, t, n, 3, null, null), c_(t));
}
function Rd(e, t) {
  if (Nn(t)) return;
  let n = R(null);
  try {
    ((t[A] &= -129),
      (t[A] |= 256),
      t[Ue] && Rs(t[Ue]),
      l_(e, t),
      u_(e, t),
      t[b].type === 1 && t[q].destroy());
    let r = t[Mn];
    if (r !== null && $e(t[ue])) {
      r !== t[ue] && ih(r, t);
      let o = t[Nt];
      o !== null && o.detachView(e);
    }
    Gd(t);
  } finally {
    R(n);
  }
}
function u_(e, t) {
  let n = e.cleanup,
    r = t[Xr];
  if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
      if (typeof n[s] == "string") {
        let a = n[s + 3];
        (a >= 0 ? r[a]() : r[-a].unsubscribe(), (s += 2));
      } else {
        let a = r[n[s + 1]];
        n[s].call(a);
      }
  r !== null && (t[Xr] = null);
  let o = t[Qt];
  if (o !== null) {
    t[Qt] = null;
    for (let s = 0; s < o.length; s++) {
      let a = o[s];
      a();
    }
  }
  let i = t[li];
  if (i !== null) {
    t[li] = null;
    for (let s of i) s.destroy();
  }
}
function l_(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof fr)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              c = i[s + 1];
            $(4, a, c);
            try {
              c.call(a);
            } finally {
              $(5, a, c);
            }
          }
        else {
          $(4, o, i);
          try {
            i.call(o);
          } finally {
            $(5, o, i);
          }
        }
      }
    }
}
function vD(e, t, n) {
  return d_(e, t.parent, n);
}
function d_(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) ((t = r), (r = t.parent));
  if (r === null) return n[_e];
  if (Jt(r)) {
    let { encapsulation: o } = e.data[r.directiveStart + r.componentOffset];
    if (o === on.None || o === on.Emulated) return null;
  }
  return tt(r, n);
}
function DD(e, t, n) {
  return h_(e, t, n);
}
function f_(e, t, n) {
  return e.type & 40 ? tt(e, n) : null;
}
var h_ = f_,
  xy;
function sh(e, t, n, r) {
  let o = vD(e, r, t),
    i = t[q],
    s = r.parent || t[Me],
    a = DD(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let c = 0; c < n.length; c++) Ay(i, o, n[c], a, !1);
    else Ay(i, o, n, a, !1);
  xy !== void 0 && xy(i, r, t, n, o);
}
function mi(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return tt(t, e);
    if (n & 4) return of(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return mi(e, r);
      {
        let o = e[t.index];
        return $e(o) ? of(-1, o) : ze(o);
      }
    } else {
      if (n & 128) return mi(e, t.next);
      if (n & 32) return oh(t, e)() || ze(e[t.index]);
      {
        let r = ED(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = Tn(e[me]);
          return mi(o, r);
        } else return mi(e, t.next);
      }
    }
  }
  return null;
}
function ED(e, t) {
  if (t !== null) {
    let r = e[me][Me],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function of(e, t) {
  let n = le + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[b].firstChild;
    if (o !== null) return mi(r, o);
  }
  return t[Rt];
}
function ah(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      c = n.type;
    if ((s && t === 0 && (a && lo(ze(a), r), (n.flags |= 2)), !Ai(n)))
      if (c & 8) (ah(e, t, n.child, r, o, i, !1), io(t, e, o, a, i));
      else if (c & 32) {
        let u = oh(n, r),
          l;
        for (; (l = u()); ) io(t, e, o, l, i);
        io(t, e, o, a, i);
      } else c & 16 ? ID(e, t, r, n, o, i) : io(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function Ec(e, t, n, r, o, i) {
  ah(n, r, e.firstChild, t, o, i, !1);
}
function p_(e, t, n) {
  let r = t[q],
    o = vD(e, n, t),
    i = n.parent || t[Me],
    s = DD(i, n, t);
  ID(r, 0, t, n, o, s);
}
function ID(e, t, n, r, o, i) {
  let s = n[me],
    c = s[Me].projection[r.projection];
  if (Array.isArray(c))
    for (let u = 0; u < c.length; u++) {
      let l = c[u];
      io(t, e, o, l, i);
    }
  else {
    let u = c,
      l = s[ue];
    (Za(r) && (u.flags |= 128), ah(e, t, u, l, o, i, !0));
  }
}
function g_(e, t, n, r, o) {
  let i = n[Rt],
    s = ze(n);
  i !== s && io(t, e, r, i, o);
  for (let a = le; a < n.length; a++) {
    let c = n[a];
    Ec(c[b], c, e, t, r, i);
  }
}
function m_(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : ft.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= ft.Important)),
        e.setStyle(n, r, o, i));
  }
}
function wD(e, t, n, r, o) {
  let i = en(),
    s = r & 2;
  try {
    (An(-1), s && t.length > U && mD(e, t, U, !1), $(s ? 2 : 0, o, n), n(r, o));
  } finally {
    (An(i), $(s ? 3 : 1, o, n));
  }
}
function Ic(e, t, n) {
  (C_(e, t, n), (n.flags & 64) === 64 && b_(e, t, n));
}
function ki(e, t, n = tt) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function y_(e, t, n, r) {
  let i = r.get(Vf, Lv) || n === on.ShadowDom,
    s = e.selectRootElement(t, i);
  return (v_(s), s);
}
function v_(e) {
  CD(e);
}
var CD = () => null;
function D_(e) {
  bv(e) ? fD(e) : pS(e);
}
function bD() {
  CD = D_;
}
function E_(e) {
  return e === "class"
    ? "className"
    : e === "for"
      ? "htmlFor"
      : e === "formaction"
        ? "formAction"
        : e === "innerHtml"
          ? "innerHTML"
          : e === "readonly"
            ? "readOnly"
            : e === "tabindex"
              ? "tabIndex"
              : e;
}
function I_(e, t, n, r, o, i) {
  let s = t[b];
  if (fh(e, s, t, n, r)) {
    Jt(e) && w_(t, e.index);
    return;
  }
  (e.type & 3 && (n = E_(n)), TD(e, t, n, r, o, i));
}
function TD(e, t, n, r, o, i) {
  if (e.type & 3) {
    let s = tt(e, t);
    ((r = i != null ? i(r, e.value || "", n) : r), o.setProperty(s, n, r));
  } else e.type & 12;
}
function w_(e, t) {
  let n = nt(t, e);
  n[A] & 16 || (n[A] |= 64);
}
function C_(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd;
  (Jt(n) && r_(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || qa(n, t));
  let i = n.initialInputs;
  for (let s = r; s < o; s++) {
    let a = e.data[s],
      c = Di(t, e, s, n);
    if ((lo(c, t), i !== null && M_(t, s - r, c, a, n, i), At(a))) {
      let u = nt(n.index, t);
      u[se] = Di(t, e, s, n);
    }
  }
}
function b_(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = cy();
  try {
    An(i);
    for (let a = r; a < o; a++) {
      let c = e.data[a],
        u = t[a];
      (ba(a),
        (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) &&
          T_(c, u));
    }
  } finally {
    (An(-1), ba(s));
  }
}
function T_(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function ch(e, t) {
  let n = e.directiveRegistry,
    r = null;
  if (n)
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      cD(t, i.selectors, !1) && ((r ??= []), At(i) ? r.unshift(i) : r.push(i));
    }
  return r;
}
function S_(e, t, n, r, o, i) {
  let s = tt(e, t);
  __(t[q], s, i, e.value, n, r, o);
}
function __(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? rr(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function M_(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
      let c = s[a],
        u = s[a + 1];
      rf(r, n, c, u);
    }
}
function uh(e, t, n, r, o) {
  let i = U + n,
    s = t[b],
    a = o(s, t, e, r, n);
  ((t[i] = a), no(e, !0));
  let c = e.type === 2;
  return (
    c ? (hD(t[q], a, e), (Xm() === 0 || eo(e)) && lo(a, t), Jm()) : lo(a, t),
    Na() && (!c || !Ai(e)) && sh(s, t, a, e),
    e
  );
}
function lh(e) {
  let t = e;
  return (hd() ? pd() : ((t = t.parent), no(t, !1)), t);
}
function dh(e, t) {
  let n = e[Fe];
  if (!n) return;
  n.get(Ae, null)?.(t);
}
function fh(e, t, n, r, o) {
  let i = e.inputs?.[r],
    s = e.hostDirectiveInputs?.[r],
    a = !1;
  if (s)
    for (let c = 0; c < s.length; c += 2) {
      let u = s[c],
        l = s[c + 1],
        d = t.data[u];
      (rf(d, n[u], l, o), (a = !0));
    }
  if (i)
    for (let c of i) {
      let u = n[c],
        l = t.data[c];
      (rf(l, u, r, o), (a = !0));
    }
  return a;
}
function N_(e, t) {
  let n = nt(t, e),
    r = n[b];
  R_(r, n);
  let o = n[_e];
  (o !== null && n[Ne] === null && (n[Ne] = $v(o, n[Fe])),
    $(18),
    hh(r, n, n[se]),
    $(19, n[se]));
}
function R_(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function hh(e, t, n) {
  Sa(t);
  try {
    let r = e.viewQuery;
    r !== null && Yd(1, r, n);
    let o = e.template;
    (o !== null && wD(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[Nt]?.finishViewCreation(e),
      e.staticContentQueries && Zv(e, t),
      e.staticViewQueries && Yd(2, e.viewQuery, n));
    let i = e.components;
    i !== null && A_(t, i);
  } catch (r) {
    throw (
      e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r
    );
  } finally {
    ((t[A] &= -5), _a());
  }
}
function A_(e, t) {
  for (let n = 0; n < t.length; n++) N_(e, t[n]);
}
function vo(e, t, n, r) {
  let o = R(null);
  try {
    let i = t.tView,
      a = e[A] & 4096 ? 4096 : 16,
      c = nh(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      u = e[t.index];
    c[Mn] = u;
    let l = e[Nt];
    return (l !== null && (c[Nt] = l.createEmbeddedView(i)), hh(i, c, n), c);
  } finally {
    R(o);
  }
}
function hr(e, t) {
  return !t || t.firstChild === null || Za(e);
}
var Oy = !1,
  x_ = new C("");
function Ii(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    (i !== null && r.push(ze(i)), $e(i) && SD(i, r));
    let s = n.type;
    if (s & 8) Ii(e, t, n.child, r);
    else if (s & 32) {
      let a = oh(n, t),
        c;
      for (; (c = a()); ) r.push(c);
    } else if (s & 16) {
      let a = ED(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let c = Tn(t[me]);
        Ii(c[b], c, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function SD(e, t) {
  for (let n = le; n < e.length; n++) {
    let r = e[n],
      o = r[b].firstChild;
    o !== null && Ii(r[b], r, o, t);
  }
  e[Rt] !== e[_e] && t.push(e[Rt]);
}
function _D(e) {
  if (e[sr] !== null) {
    for (let t of e[sr]) t.impl.addSequence(t);
    e[sr].length = 0;
  }
}
var MD = [];
function O_(e) {
  return e[Ue] ?? k_(e);
}
function k_(e) {
  let t = MD.pop() ?? Object.create(F_);
  return ((t.lView = e), t);
}
function P_(e) {
  e.lView[Ue] !== e && ((e.lView = null), MD.push(e));
}
var F_ = W(w({}, Gn), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    to(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[Ue] = this;
  },
});
function L_(e) {
  let t = e[Ue] ?? Object.create(j_);
  return ((t.lView = e), t);
}
var j_ = W(w({}, Gn), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    let t = Tn(e.lView);
    for (; t && !ND(t[b]); ) t = Tn(t);
    t && id(t);
  },
  consumerOnSignalRead() {
    this.lView[Ue] = this;
  },
});
function ND(e) {
  return e.type !== 2;
}
function RD(e) {
  if (e[li] === null) return;
  let t = !0;
  for (; t; ) {
    let n = !1;
    for (let r of e[li])
      r.dirty &&
        ((n = !0),
        r.zone === null || Zone.current === r.zone
          ? r.run()
          : r.zone.run(() => r.run()));
    t = n && !!(e[A] & 8192);
  }
}
var B_ = 100;
function ph(e, t = 0) {
  let r = e[Mt].rendererFactory,
    o = !1;
  o || r.begin?.();
  try {
    V_(e, t);
  } finally {
    o || r.end?.();
  }
}
function V_(e, t) {
  let n = md();
  try {
    (yd(!0), sf(e, t));
    let r = 0;
    for (; fi(e); ) {
      if (r === B_) throw new I(103, !1);
      (r++, sf(e, 1));
    }
  } finally {
    yd(n);
  }
}
function AD(e, t) {
  gd(t ? hi.Exhaustive : hi.OnlyDirtyViews);
  try {
    ph(e);
  } finally {
    gd(hi.Off);
  }
}
function U_(e, t, n, r) {
  if (Nn(t)) return;
  let o = t[A],
    i = !1,
    s = !1;
  Sa(t);
  let a = !0,
    c = null,
    u = null;
  i ||
    (ND(e)
      ? ((u = O_(t)), (c = Wn(u)))
      : Ms() === null
        ? ((a = !1), (u = L_(t)), (c = Wn(u)))
        : t[Ue] && (Rs(t[Ue]), (t[Ue] = null)));
  try {
    (od(t), iy(e.bindingStartIndex), n !== null && wD(e, t, n, 2, r));
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && La(t, f, null);
      } else {
        let f = e.preOrderHooks;
        (f !== null && ja(t, f, 0, null), _d(t, 0));
      }
    if (
      (s || H_(t), RD(t), xD(t, 0), e.contentQueries !== null && Zv(e, t), !i)
    )
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && La(t, f);
      } else {
        let f = e.contentHooks;
        (f !== null && ja(t, f, 1), _d(t, 1));
      }
    z_(e, t);
    let d = e.components;
    d !== null && kD(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && Yd(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && La(t, f);
      } else {
        let f = e.viewHooks;
        (f !== null && ja(t, f, 2), _d(t, 2));
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[va])) {
      for (let f of t[va]) f();
      t[va] = null;
    }
    i || (_D(t), (t[A] &= -73));
  } catch (l) {
    throw (i || to(t), l);
  } finally {
    (u !== null && (Fr(u, c), a && P_(u)), _a());
  }
}
function xD(e, t) {
  for (let n = _v(e); n !== null; n = Mv(n))
    for (let r = le; r < n.length; r++) {
      let o = n[r];
      OD(o, t);
    }
}
function H_(e) {
  for (let t = _v(e); t !== null; t = Mv(t)) {
    if (!(t[A] & 2)) continue;
    let n = t[ar];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      id(o);
    }
  }
}
function $_(e, t, n) {
  $(18);
  let r = nt(t, e);
  (OD(r, n), $(19, r[se]));
}
function OD(e, t) {
  Da(e) && sf(e, t);
}
function sf(e, t) {
  let r = e[b],
    o = e[A],
    i = e[Ue],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Zo(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[A] &= -9217),
    s)
  )
    U_(r, e, r.template, e[se]);
  else if (o & 8192) {
    let a = R(null);
    try {
      (RD(e), xD(e, 1));
      let c = r.components;
      (c !== null && kD(e, c, 1), _D(e));
    } finally {
      R(a);
    }
  }
}
function kD(e, t, n) {
  for (let r = 0; r < t.length; r++) $_(e, t[r], n);
}
function z_(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) An(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          ay(s, i);
          let c = t[i];
          ($(24, c), a(2, c), $(25, c));
        }
      }
    } finally {
      An(-1);
    }
}
function wc(e, t) {
  let n = md() ? 64 : 1088;
  for (e[Mt].changeDetectionScheduler?.notify(t); e; ) {
    e[A] |= n;
    let r = Tn(e);
    if (cr(e) && !r) return e;
    e = r;
  }
  return null;
}
function PD(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function FD(e, t) {
  let n = le + t;
  if (n < e.length) return e[n];
}
function Do(e, t, n, r = !0) {
  let o = t[b];
  if ((G_(o, t, e, n), r)) {
    let s = of(n, e),
      a = t[q],
      c = a.parentNode(e[Rt]);
    c !== null && a_(o, e[Me], a, t, c, s);
  }
  let i = t[Ne];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function gh(e, t) {
  let n = wi(e, t);
  return (n !== void 0 && Dc(n[b], n), n);
}
function wi(e, t) {
  if (e.length <= le) return;
  let n = le + t,
    r = e[n];
  if (r) {
    let o = r[Mn];
    (o !== null && o !== e && ih(o, r), t > 0 && (e[n - 1][Je] = r[Je]));
    let i = si(e, le + t);
    s_(r[b], r);
    let s = i[Nt];
    (s !== null && s.detachView(i[b]),
      (r[ue] = null),
      (r[Je] = null),
      (r[A] &= -129));
  }
  return r;
}
function G_(e, t, n, r) {
  let o = le + r,
    i = n.length;
  (r > 0 && (n[o - 1][Je] = t),
    r < i - le
      ? ((t[Je] = n[o]), $l(n, le + r, t))
      : (n.push(t), (t[Je] = null)),
    (t[ue] = n));
  let s = t[Mn];
  s !== null && n !== s && LD(s, t);
  let a = t[Nt];
  (a !== null && a.insertView(e), Ea(t), (t[A] |= 128));
}
function LD(e, t) {
  let n = e[ar],
    r = t[ue];
  if (He(r)) e[A] |= 2;
  else {
    let o = r[ue][me];
    t[me] !== o && (e[A] |= 2);
  }
  n === null ? (e[ar] = [t]) : n.push(t);
}
var xn = class {
  _lView;
  _cdRefInjectingView;
  _appRef = null;
  _attachedToViewContainer = !1;
  exhaustive;
  get rootNodes() {
    let t = this._lView,
      n = t[b];
    return Ii(n, t, n.firstChild, []);
  }
  constructor(t, n) {
    ((this._lView = t), (this._cdRefInjectingView = n));
  }
  get context() {
    return this._lView[se];
  }
  set context(t) {
    this._lView[se] = t;
  }
  get destroyed() {
    return Nn(this._lView);
  }
  destroy() {
    if (this._appRef) this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
      let t = this._lView[ue];
      if ($e(t)) {
        let n = t[di],
          r = n ? n.indexOf(this) : -1;
        r > -1 && (wi(t, r), si(n, r));
      }
      this._attachedToViewContainer = !1;
    }
    Dc(this._lView[b], this._lView);
  }
  onDestroy(t) {
    Ia(this._lView, t);
  }
  markForCheck() {
    wc(this._cdRefInjectingView || this._lView, 4);
  }
  detach() {
    this._lView[A] &= -129;
  }
  reattach() {
    (Ea(this._lView), (this._lView[A] |= 128));
  }
  detectChanges() {
    ((this._lView[A] |= 1024), ph(this._lView));
  }
  checkNoChanges() {
    return;
    try {
      this.exhaustive ??= this._lView[Fe].get(x_, Oy);
    } catch {
      this.exhaustive = Oy;
    }
  }
  attachToViewContainerRef() {
    if (this._appRef) throw new I(902, !1);
    this._attachedToViewContainer = !0;
  }
  detachFromAppRef() {
    this._appRef = null;
    let t = cr(this._lView),
      n = this._lView[Mn];
    (n !== null && !t && ih(n, this._lView), yD(this._lView[b], this._lView));
  }
  attachToAppRef(t) {
    if (this._attachedToViewContainer) throw new I(902, !1);
    this._appRef = t;
    let n = cr(this._lView),
      r = this._lView[Mn];
    (r !== null && !n && LD(r, this._lView), Ea(this._lView));
  }
};
var an = (() => {
  class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = W_;
    constructor(n, r, o) {
      ((this._declarationLView = n),
        (this._declarationTContainer = r),
        (this.elementRef = o));
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(n, r) {
      return this.createEmbeddedViewImpl(n, r);
    }
    createEmbeddedViewImpl(n, r, o) {
      let i = vo(this._declarationLView, this._declarationTContainer, n, {
        embeddedViewInjector: r,
        dehydratedView: o,
      });
      return new xn(i);
    }
  }
  return e;
})();
function W_() {
  return Cc(de(), N());
}
function Cc(e, t) {
  return e.type & 4 ? new an(t, e, po(e, t)) : null;
}
function Eo(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) ((i = q_(e, t, n, r, o)), sy() && (i.flags |= 32));
  else if (i.type & 64) {
    ((i.type = n), (i.value = r), (i.attrs = o));
    let s = ry();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return (no(i, !0), i);
}
function q_(e, t, n, r, o) {
  let i = fd(),
    s = hd(),
    a = s ? i : i && i.parent,
    c = (e.data[t] = Z_(e, a, n, t, r, o));
  return (Y_(e, c, i, s), c);
}
function Y_(e, t, n, r) {
  (e.firstChild === null && (e.firstChild = t),
    n !== null &&
      (r
        ? n.child == null && t.parent !== null && (n.child = t)
        : n.next === null && ((n.next = t), (t.prev = n))));
}
function Z_(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Ca() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: null,
      inputs: null,
      hostDirectiveInputs: null,
      outputs: null,
      hostDirectiveOutputs: null,
      directiveToIndex: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
var Q_ = new RegExp(`^(\\d+)*(${xv}|${Av})*(.*)`);
function K_(e) {
  let t = e.match(Q_),
    [n, r, o, i] = t,
    s = r ? parseInt(r, 10) : o,
    a = [];
  for (let [c, u, l] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(l, 10) || 1;
    a.push(u, d);
  }
  return [s, ...a];
}
function X_(e) {
  return !e.prev && e.parent?.type === 8;
}
function Ad(e) {
  return e.index - U;
}
function J_(e, t) {
  let n = e.i18nNodes;
  if (n) return n.get(t);
}
function bc(e, t, n, r) {
  let o = Ad(r),
    i = J_(e, o);
  if (i === void 0) {
    let s = e.data[Fv];
    if (s?.[o]) i = t0(s[o], n);
    else if (t.firstChild === r) i = e.firstChild;
    else {
      let a = r.prev === null,
        c = r.prev ?? r.parent;
      if (X_(r)) {
        let u = Ad(r.parent);
        i = qd(e, u);
      } else {
        let u = tt(c, n);
        if (a) i = u.firstChild;
        else {
          let l = Ad(c),
            d = qd(e, l);
          if (c.type === 2 && d) {
            let f = Hf(e, l) + 1;
            i = Tc(f, d);
          } else i = u.nextSibling;
        }
      }
    }
  }
  return i;
}
function Tc(e, t) {
  let n = t;
  for (let r = 0; r < e; r++) n = n.nextSibling;
  return n;
}
function e0(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 2) {
    let o = t[r],
      i = t[r + 1];
    for (let s = 0; s < i; s++)
      switch (o) {
        case aS:
          n = n.firstChild;
          break;
        case cS:
          n = n.nextSibling;
          break;
      }
  }
  return n;
}
function t0(e, t) {
  let [n, ...r] = K_(e),
    o;
  if (n === Av) o = t[me][_e];
  else if (n === xv) o = iD(t[me][_e]);
  else {
    let i = Number(n);
    o = ze(t[i + U]);
  }
  return e0(o, r);
}
var n0 = !1;
function jD(e) {
  n0 = e;
}
function r0(e) {
  let t = e[Ne];
  if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
      let o = e[q];
      for (let i of r.values()) o0(o, n, i);
    }
    ((t.i18nNodes = void 0), (t.dehydratedIcuData = void 0));
  }
}
function o0(e, t, n) {
  for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - U);
    o && eh(e, o, !1);
  }
}
function Sc(e) {
  let t = e[et] ?? [],
    r = e[ue][q],
    o = [];
  for (let i of t) i.data[jf] !== void 0 ? o.push(i) : i0(i, r);
  e[et] = o;
}
function i0(e, t) {
  let n = 0,
    r = e.firstChild;
  if (r) {
    let o = e.data[Ei];
    for (; n < o; ) {
      let i = r.nextSibling;
      (eh(t, r, !1), (r = i), n++);
    }
  }
}
function BD(e) {
  Sc(e);
  let t = e[_e];
  He(t) && Ka(t);
  for (let n = le; n < e.length; n++) Ka(e[n]);
}
function Ka(e) {
  r0(e);
  let t = e[b];
  for (let n = U; n < t.bindingStartIndex; n++)
    if ($e(e[n])) {
      let r = e[n];
      BD(r);
    } else He(e[n]) && Ka(e[n]);
}
function VD(e) {
  let t = e._views;
  for (let n of t) {
    let r = zv(n);
    r !== null && r[_e] !== null && (He(r) ? Ka(r) : BD(r));
  }
}
function s0(e, t) {
  let n = [];
  for (let r of t)
    for (let o = 0; o < (r[Ff] ?? 1); o++) {
      let i = { data: r, firstChild: null };
      (r[Ei] > 0 && ((i.firstChild = e), (e = Tc(r[Ei], e))), n.push(i));
    }
  return [e, n];
}
var UD = () => null,
  HD = () => null;
function $D() {
  ((UD = a0), (HD = c0));
}
function a0(e, t) {
  return GD(e, t) ? e[et].shift() : (Sc(e), null);
}
function Ci(e, t) {
  return UD(e, t);
}
function c0(e, t, n) {
  if (t.tView.ssrId === null) return null;
  let r = Ci(e, t.tView.ssrId);
  return (n[b].firstUpdatePass && r === null && u0(n, t), r);
}
function zD(e, t, n) {
  return HD(e, t, n);
}
function u0(e, t) {
  let n = t;
  for (; n; ) {
    if (ky(e, n)) return;
    if ((n.flags & 256) === 256) break;
    n = n.prev;
  }
  for (n = t.next; n && (n.flags & 512) === 512; ) {
    if (ky(e, n)) return;
    n = n.next;
  }
}
function GD(e, t) {
  let n = e[et];
  return !t || n === null || n.length === 0 ? !1 : n[0].data[Pv] === t;
}
function ky(e, t) {
  let n = t.tView?.ssrId;
  if (n == null) return !1;
  let r = e[t.index];
  return $e(r) && GD(r, n) ? (Sc(r), !0) : !1;
}
var WD = class {},
  _c = class {},
  af = class {
    resolveComponentFactory(t) {
      throw new I(917, !1);
    }
  },
  Pi = class {
    static NULL = new af();
  },
  pr = class {},
  un = (() => {
    class e {
      destroyNode = null;
      static __NG_ELEMENT_ID__ = () => l0();
    }
    return e;
  })();
function l0() {
  let e = N(),
    t = de(),
    n = nt(t.index, e);
  return (He(n) ? n : e)[q];
}
var qD = (() => {
  class e {
    static ɵprov = D({ token: e, providedIn: "root", factory: () => null });
  }
  return e;
})();
var Ua = {},
  ao = class {
    injector;
    parentInjector;
    constructor(t, n) {
      ((this.injector = t), (this.parentInjector = n));
    }
    get(t, n, r) {
      let o = this.injector.get(t, Ua, r);
      return o !== Ua || n === Ua ? o : this.parentInjector.get(t, n, r);
    }
  };
function Xa(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = ua(o, a);
      else if (i == 2) {
        let c = a,
          u = t[++s];
        r = ua(r, c + ": " + u + ";");
      }
    }
  (n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o));
}
function V(e, t = 0) {
  let n = N();
  if (n === null) return S(e, t);
  let r = de();
  return Dv(r, n, ge(e), t);
}
function mh() {
  let e = "invalid";
  throw new Error(e);
}
function YD(e, t, n, r, o) {
  let i = r === null ? null : { "": -1 },
    s = o(e, n);
  if (s !== null) {
    let a = s,
      c = null,
      u = null;
    for (let l of s)
      if (l.resolveHostDirectives !== null) {
        [a, c, u] = l.resolveHostDirectives(s);
        break;
      }
    h0(e, t, n, a, i, c, u);
  }
  i !== null && r !== null && d0(n, r, i);
}
function d0(e, t, n) {
  let r = (e.localNames = []);
  for (let o = 0; o < t.length; o += 2) {
    let i = n[t[o + 1]];
    if (i == null) throw new I(-301, !1);
    r.push(t[o], i);
  }
}
function f0(e, t, n) {
  ((t.componentOffset = n), (e.components ??= []).push(t.index));
}
function h0(e, t, n, r, o, i, s) {
  let a = r.length,
    c = !1;
  for (let h = 0; h < a; h++) {
    let f = r[h];
    (!c && At(f) && ((c = !0), f0(e, n, h)), $d(qa(n, t), e, f.type));
  }
  D0(n, e.data.length, a);
  for (let h = 0; h < a; h++) {
    let f = r[h];
    f.providersResolver && f.providersResolver(f);
  }
  let u = !1,
    l = !1,
    d = gD(e, t, a, null);
  a > 0 && (n.directiveToIndex = new Map());
  for (let h = 0; h < a; h++) {
    let f = r[h];
    if (
      ((n.mergedAttrs = uo(n.mergedAttrs, f.hostAttrs)),
      g0(e, n, t, d, f),
      v0(d, f, o),
      s !== null && s.has(f))
    ) {
      let [E, y] = s.get(f);
      n.directiveToIndex.set(f.type, [
        d,
        E + n.directiveStart,
        y + n.directiveStart,
      ]);
    } else (i === null || !i.has(f)) && n.directiveToIndex.set(f.type, d);
    (f.contentQueries !== null && (n.flags |= 4),
      (f.hostBindings !== null || f.hostAttrs !== null || f.hostVars !== 0) &&
        (n.flags |= 64));
    let g = f.type.prototype;
    (!u &&
      (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (u = !0)),
      !l &&
        (g.ngOnChanges || g.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (l = !0)),
      d++);
  }
  p0(e, n, i);
}
function p0(e, t, n) {
  for (let r = t.directiveStart; r < t.directiveEnd; r++) {
    let o = e.data[r];
    if (n === null || !n.has(o)) (Py(0, t, o, r), Py(1, t, o, r), Ly(t, r, !1));
    else {
      let i = n.get(o);
      (Fy(0, t, i, r), Fy(1, t, i, r), Ly(t, r, !0));
    }
  }
}
function Py(e, t, n, r) {
  let o = e === 0 ? n.inputs : n.outputs;
  for (let i in o)
    if (o.hasOwnProperty(i)) {
      let s;
      (e === 0 ? (s = t.inputs ??= {}) : (s = t.outputs ??= {}),
        (s[i] ??= []),
        s[i].push(r),
        ZD(t, i));
    }
}
function Fy(e, t, n, r) {
  let o = e === 0 ? n.inputs : n.outputs;
  for (let i in o)
    if (o.hasOwnProperty(i)) {
      let s = o[i],
        a;
      (e === 0
        ? (a = t.hostDirectiveInputs ??= {})
        : (a = t.hostDirectiveOutputs ??= {}),
        (a[s] ??= []),
        a[s].push(r, i),
        ZD(t, s));
    }
}
function ZD(e, t) {
  t === "class" ? (e.flags |= 8) : t === "style" && (e.flags |= 16);
}
function Ly(e, t, n) {
  let { attrs: r, inputs: o, hostDirectiveInputs: i } = e;
  if (r === null || (!n && o === null) || (n && i === null) || Xf(e)) {
    ((e.initialInputs ??= []), e.initialInputs.push(null));
    return;
  }
  let s = null,
    a = 0;
  for (; a < r.length; ) {
    let c = r[a];
    if (c === 0) {
      a += 4;
      continue;
    } else if (c === 5) {
      a += 2;
      continue;
    } else if (typeof c == "number") break;
    if (!n && o.hasOwnProperty(c)) {
      let u = o[c];
      for (let l of u)
        if (l === t) {
          ((s ??= []), s.push(c, r[a + 1]));
          break;
        }
    } else if (n && i.hasOwnProperty(c)) {
      let u = i[c];
      for (let l = 0; l < u.length; l += 2)
        if (u[l] === t) {
          ((s ??= []), s.push(u[l + 1], r[a + 1]));
          break;
        }
    }
    a += 2;
  }
  ((e.initialInputs ??= []), e.initialInputs.push(s));
}
function g0(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = bn(o.type, !0)),
    s = new fr(i, At(o), V, null);
  ((e.blueprint[r] = s), (n[r] = s), m0(e, t, r, gD(e, n, o.hostVars, je), o));
}
function m0(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    (y0(s) != a && s.push(a), s.push(n, r, i));
  }
}
function y0(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function v0(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    At(t) && (n[""] = e);
  }
}
function D0(e, t, n) {
  ((e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t));
}
function yh(e, t, n, r, o, i, s, a) {
  let c = t[b],
    u = c.consts,
    l = Re(u, s),
    d = Eo(c, e, n, r, l);
  return (
    i && YD(c, t, d, Re(u, a), o),
    (d.mergedAttrs = uo(d.mergedAttrs, d.attrs)),
    d.attrs !== null && Xa(d, d.attrs, !1),
    d.mergedAttrs !== null && Xa(d, d.mergedAttrs, !0),
    c.queries !== null && c.queries.elementStart(c, d),
    d
  );
}
function vh(e, t) {
  (lv(e, t), ed(t) && e.queries.elementEnd(t));
}
function E0(e, t, n, r, o, i) {
  let s = t.consts,
    a = Re(s, o),
    c = Eo(t, e, n, r, a);
  if (((c.mergedAttrs = uo(c.mergedAttrs, c.attrs)), i != null)) {
    let u = Re(s, i);
    c.localNames = [];
    for (let l = 0; l < u.length; l += 2) c.localNames.push(u[l], -1);
  }
  return (
    c.attrs !== null && Xa(c, c.attrs, !1),
    c.mergedAttrs !== null && Xa(c, c.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, c),
    c
  );
}
function Dh(e) {
  return Mc(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function QD(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function Mc(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function Nc(e, t, n) {
  return (e[t] = n);
}
function I0(e, t) {
  return e[t];
}
function Ge(e, t, n) {
  if (n === je) return !1;
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function KD(e, t, n, r) {
  let o = Ge(e, t, n);
  return Ge(e, t + 1, r) || o;
}
function w0(e, t, n, r, o) {
  let i = KD(e, t, n, r);
  return Ge(e, t + 2, o) || i;
}
function xd(e, t, n) {
  return function r(o) {
    let i = Jt(e) ? nt(e.index, t) : t;
    wc(i, 5);
    let s = t[se],
      a = jy(t, s, n, o),
      c = r.__ngNextListenerFn__;
    for (; c; ) ((a = jy(t, s, c, o) && a), (c = c.__ngNextListenerFn__));
    return a;
  };
}
function jy(e, t, n, r) {
  let o = R(null);
  try {
    return ($(6, t, n), n(r) !== !1);
  } catch (i) {
    return (dh(e, i), !1);
  } finally {
    ($(7, t, n), R(o));
  }
}
function C0(e, t, n, r, o, i, s, a) {
  let c = eo(e),
    u = !1,
    l = null;
  if ((!r && c && (l = b0(t, n, i, e.index)), l !== null)) {
    let d = l.__ngLastListenerFn__ || l;
    ((d.__ngNextListenerFn__ = s), (l.__ngLastListenerFn__ = s), (u = !0));
  } else {
    let d = tt(e, n),
      h = r ? r(d) : d;
    lS(n, h, i, a);
    let f = o.listen(h, i, a),
      g = r ? (E) => r(ze(E[e.index])) : e.index;
    XD(g, t, n, i, a, f, !1);
  }
  return u;
}
function b0(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Xr],
          c = o[i + 2];
        return a && a.length > c ? a[c] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function XD(e, t, n, r, o, i, s) {
  let a = t.firstCreatePass ? cd(t) : null,
    c = ad(n),
    u = c.length;
  (c.push(o, i), a && a.push(r, e, u, (u + 1) * (s ? -1 : 1)));
}
function By(e, t, n, r, o, i) {
  let s = t[n],
    a = t[b],
    u = a.data[n].outputs[r],
    d = s[u].subscribe(i);
  XD(e.index, a, t, o, i, d, !0);
}
var cf = Symbol("BINDING");
var Ja = class extends Pi {
  ngModule;
  constructor(t) {
    (super(), (this.ngModule = t));
  }
  resolveComponentFactory(t) {
    let n = St(t);
    return new gr(n, this.ngModule);
  }
};
function T0(e) {
  return Object.keys(e).map((t) => {
    let [n, r, o] = e[t],
      i = {
        propName: n,
        templateName: t,
        isSignal: (r & vc.SignalBased) !== 0,
      };
    return (o && (i.transform = o), i);
  });
}
function S0(e) {
  return Object.keys(e).map((t) => ({ propName: e[t], templateName: t }));
}
function _0(e, t, n) {
  let r = t instanceof re ? t : t?.injector;
  return (
    r &&
      e.getStandaloneInjector !== null &&
      (r = e.getStandaloneInjector(r) || r),
    r ? new ao(n, r) : n
  );
}
function M0(e) {
  let t = e.get(pr, null);
  if (t === null) throw new I(407, !1);
  let n = e.get(qD, null),
    r = e.get(Xt, null);
  return {
    rendererFactory: t,
    sanitizer: n,
    changeDetectionScheduler: r,
    ngReflect: !1,
  };
}
function N0(e, t) {
  let n = (e.selectors[0][0] || "div").toLowerCase();
  return Jf(t, n, n === "svg" ? Wm : n === "math" ? qm : null);
}
var gr = class extends _c {
  componentDef;
  ngModule;
  selector;
  componentType;
  ngContentSelectors;
  isBoundToModule;
  cachedInputs = null;
  cachedOutputs = null;
  get inputs() {
    return (
      (this.cachedInputs ??= T0(this.componentDef.inputs)),
      this.cachedInputs
    );
  }
  get outputs() {
    return (
      (this.cachedOutputs ??= S0(this.componentDef.outputs)),
      this.cachedOutputs
    );
  }
  constructor(t, n) {
    (super(),
      (this.componentDef = t),
      (this.ngModule = n),
      (this.componentType = t.type),
      (this.selector = QS(t.selectors)),
      (this.ngContentSelectors = t.ngContentSelectors ?? []),
      (this.isBoundToModule = !!n));
  }
  create(t, n, r, o, i, s) {
    $(22);
    let a = R(null);
    try {
      let c = this.componentDef,
        u = R0(r, c, s, i),
        l = _0(c, o || this.ngModule, t),
        d = M0(l),
        h = d.rendererFactory.createRenderer(null, c),
        f = r ? y_(h, r, c.encapsulation, l) : N0(c, h),
        g =
          s?.some(Vy) ||
          i?.some((v) => typeof v != "function" && v.bindings.some(Vy)),
        E = nh(
          null,
          u,
          null,
          512 | pD(c),
          null,
          null,
          d,
          h,
          l,
          null,
          $v(f, l, !0),
        );
      ((E[U] = f), Sa(E));
      let y = null;
      try {
        let v = yh(U, E, 2, "#host", () => u.directiveRegistry, !0, 0);
        (f && (hD(h, f, v), lo(f, E)),
          Ic(u, E, v),
          $f(u, v, E),
          vh(u, v),
          n !== void 0 && x0(v, this.ngContentSelectors, n),
          (y = nt(v.index, E)),
          (E[se] = y[se]),
          hh(u, E, null));
      } catch (v) {
        throw (y !== null && Gd(y), Gd(E), v);
      } finally {
        ($(23), _a());
      }
      return new ec(this.componentType, E, !!g);
    } finally {
      R(a);
    }
  }
};
function R0(e, t, n, r) {
  let o = e ? ["ng-version", "20.1.6"] : KS(t.selectors[0]),
    i = null,
    s = null,
    a = 0;
  if (n)
    for (let l of n)
      ((a += l[cf].requiredVars),
        l.create && ((l.targetIdx = 0), (i ??= []).push(l)),
        l.update && ((l.targetIdx = 0), (s ??= []).push(l)));
  if (r)
    for (let l = 0; l < r.length; l++) {
      let d = r[l];
      if (typeof d != "function")
        for (let h of d.bindings) {
          a += h[cf].requiredVars;
          let f = l + 1;
          (h.create && ((h.targetIdx = f), (i ??= []).push(h)),
            h.update && ((h.targetIdx = f), (s ??= []).push(h)));
        }
    }
  let c = [t];
  if (r)
    for (let l of r) {
      let d = typeof l == "function" ? l : l.type,
        h = ma(d);
      c.push(h);
    }
  return th(0, null, A0(i, s), 1, a, c, null, null, null, [o], null);
}
function A0(e, t) {
  return !e && !t
    ? null
    : (n) => {
        if (n & 1 && e) for (let r of e) r.create();
        if (n & 2 && t) for (let r of t) r.update();
      };
}
function Vy(e) {
  let t = e[cf].kind;
  return t === "input" || t === "twoWay";
}
var ec = class extends WD {
  _rootLView;
  _hasInputBindings;
  instance;
  hostView;
  changeDetectorRef;
  componentType;
  location;
  previousInputValues = null;
  _tNode;
  constructor(t, n, r) {
    (super(),
      (this._rootLView = n),
      (this._hasInputBindings = r),
      (this._tNode = ur(n[b], U)),
      (this.location = po(this._tNode, n)),
      (this.instance = nt(this._tNode.index, n)[se]),
      (this.hostView = this.changeDetectorRef = new xn(n, void 0)),
      (this.componentType = t));
  }
  setInput(t, n) {
    this._hasInputBindings;
    let r = this._tNode;
    if (
      ((this.previousInputValues ??= new Map()),
      this.previousInputValues.has(t) &&
        Object.is(this.previousInputValues.get(t), n))
    )
      return;
    let o = this._rootLView,
      i = fh(r, o[b], o, t, n);
    this.previousInputValues.set(t, n);
    let s = nt(r.index, o);
    wc(s, 1);
  }
  get injector() {
    return new dr(this._tNode, this._rootLView);
  }
  destroy() {
    this.hostView.destroy();
  }
  onDestroy(t) {
    this.hostView.onDestroy(t);
  }
};
function x0(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null && i.length ? Array.from(i) : null);
  }
}
var pt = (() => {
  class e {
    static __NG_ELEMENT_ID__ = O0;
  }
  return e;
})();
function O0() {
  let e = de();
  return eE(e, N());
}
var k0 = pt,
  JD = class extends k0 {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
      (super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r));
    }
    get element() {
      return po(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new dr(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Af(this._hostTNode, this._hostLView);
      if (hv(t)) {
        let n = Ga(t, this._hostLView),
          r = za(t),
          o = n[b].data[r + 8];
        return new dr(o, n);
      } else return new dr(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Uy(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - le;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = Ci(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return (this.insertImpl(a, o, hr(this._hostTNode, s)), a);
    }
    createComponent(t, n, r, o, i, s, a) {
      let c = t && !xT(t),
        u;
      if (c) u = n;
      else {
        let y = n || {};
        ((u = y.index),
          (r = y.injector),
          (o = y.projectableNodes),
          (i = y.environmentInjector || y.ngModuleRef),
          (s = y.directives),
          (a = y.bindings));
      }
      let l = c ? t : new gr(St(t)),
        d = r || this.parentInjector;
      if (!i && l.ngModule == null) {
        let v = (c ? d : this.parentInjector).get(re, null);
        v && (i = v);
      }
      let h = St(l.componentType ?? {}),
        f = Ci(this._lContainer, h?.id ?? null),
        g = f?.firstChild ?? null,
        E = l.create(d, o, g, i, s, a);
      return (this.insertImpl(E.hostView, u, hr(this._hostTNode, f)), E);
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (Zm(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let c = o[ue],
            u = new JD(c, c[Me], c[ue]);
          u.detach(u.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return (Do(s, o, i, r), t.attachToViewContainerRef(), $l(Od(s), i, t), t);
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Uy(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = wi(this._lContainer, n);
      r && (si(Od(this._lContainer), n), Dc(r[b], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = wi(this._lContainer, n);
      return r && si(Od(this._lContainer), n) != null ? new xn(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Uy(e) {
  return e[di];
}
function Od(e) {
  return e[di] || (e[di] = []);
}
function eE(e, t) {
  let n,
    r = t[e.index];
  return (
    $e(r) ? (n = r) : ((n = PD(r, t, null, e)), (t[e.index] = n), rh(t, n)),
    tE(n, t, e, r),
    new JD(n, e, t)
  );
}
function P0(e, t) {
  let n = e[q],
    r = n.createComment(""),
    o = tt(t, e),
    i = n.parentNode(o);
  return (Qa(n, i, r, n.nextSibling(o), !1), r);
}
var tE = rE,
  Eh = () => !1;
function nE(e, t, n) {
  return Eh(e, t, n);
}
function rE(e, t, n, r) {
  if (e[Rt]) return;
  let o;
  (n.type & 8 ? (o = ze(r)) : (o = P0(t, n)), (e[Rt] = o));
}
function F0(e, t, n) {
  if (e[Rt] && e[et]) return !0;
  let r = n[Ne],
    o = t.index - U;
  if (!r || Tv(t) || qv(r, o)) return !1;
  let s = qd(r, o),
    a = r.data[hc]?.[o],
    [c, u] = s0(s, a);
  return ((e[Rt] = c), (e[et] = u), !0);
}
function L0(e, t, n, r) {
  Eh(e, n, t) || rE(e, t, n, r);
}
function oE() {
  ((tE = L0), (Eh = F0));
}
var uf = class e {
    queryList;
    matches = null;
    constructor(t) {
      this.queryList = t;
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  lf = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        Ih(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  df = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) {
      ((this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = G0(t)) : (this.predicate = t));
    }
  },
  ff = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  hf = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) {
      ((this.metadata = t), (this._declarationNodeIndex = n));
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          (this.matchTNodeWithReadOption(t, n, j0(n, i)),
            this.matchTNodeWithReadOption(t, n, Ba(n, t, i, !1, !1)));
        }
      else
        r === an
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Ba(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === We || o === pt || (o === an && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = Ba(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function j0(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function B0(e, t) {
  return e.type & 11 ? po(e, t) : e.type & 4 ? Cc(e, t) : null;
}
function V0(e, t, n, r) {
  return n === -1 ? B0(t, e) : n === -2 ? U0(e, t, r) : Di(e, e[b], n, t);
}
function U0(e, t, n) {
  if (n === We) return po(t, e);
  if (n === an) return Cc(t, e);
  if (n === pt) return eE(t, e);
}
function iE(e, t, n, r) {
  let o = t[Nt].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
      let u = s[c];
      if (u < 0) a.push(null);
      else {
        let l = i[u];
        a.push(V0(t, l, s[c + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function pf(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = iE(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let c = i[a];
      if (c > 0) r.push(s[a / 2]);
      else {
        let u = i[a + 1],
          l = t[-c];
        for (let d = le; d < l.length; d++) {
          let h = l[d];
          h[Mn] === h[ue] && pf(h[b], h, u, r);
        }
        if (l[ar] !== null) {
          let d = l[ar];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            pf(f[b], f, u, r);
          }
        }
      }
    }
  }
  return r;
}
function H0(e, t) {
  return e[Nt].queries[t].queryList;
}
function $0(e, t, n) {
  let r = new Ya((n & 4) === 4);
  return (
    Km(e, t, r, r.destroy),
    (t[Nt] ??= new lf()).queries.push(new uf(r)) - 1
  );
}
function z0(e, t, n) {
  let r = ne();
  return (
    r.firstCreatePass &&
      (W0(r, new df(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    $0(r, N(), t)
  );
}
function G0(e) {
  return e.split(",").map((t) => t.trim());
}
function W0(e, t, n) {
  (e.queries === null && (e.queries = new ff()), e.queries.track(new hf(t, n)));
}
function Ih(e, t) {
  return e.queries.getByIndex(t);
}
function q0(e, t) {
  let n = e[b],
    r = Ih(n, t);
  return r.crossesNgTemplate ? pf(n, e, t, []) : iE(n, e, r, t);
}
var Hy = new Set();
function Be(e) {
  Hy.has(e) ||
    (Hy.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
var mr = class {},
  Rc = class {};
var tc = class extends mr {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Ja(this);
    constructor(t, n, r, o = !0) {
      (super(), (this.ngModuleType = t), (this._parent = n));
      let i = Yl(t);
      ((this._bootstrapComponents = sD(i.bootstrap)),
        (this._r3Injector = Cd(
          t,
          n,
          [
            { provide: mr, useValue: this },
            { provide: Pi, useValue: this.componentFactoryResolver },
            ...r,
          ],
          Kt(t),
          new Set(["environment"]),
        )),
        o && this.resolveInjectorInitializers());
    }
    resolveInjectorInitializers() {
      (this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType)));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      (!t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null));
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  nc = class extends Rc {
    moduleType;
    constructor(t) {
      (super(), (this.moduleType = t));
    }
    create(t) {
      return new tc(this.moduleType, t, []);
    }
  };
var bi = class extends mr {
  injector;
  componentFactoryResolver = new Ja(this);
  instance = null;
  constructor(t) {
    super();
    let n = new tr(
      [
        ...t.providers,
        { provide: mr, useValue: this },
        { provide: Pi, useValue: this.componentFactoryResolver },
      ],
      t.parent || ci(),
      t.debugName,
      new Set(["environment"]),
    );
    ((this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers());
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function Dr(e, t, n = null) {
  return new bi({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
var Y0 = (() => {
  class e {
    _injector;
    cachedInjectors = new Map();
    constructor(n) {
      this._injector = n;
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = ya(!1, n.type),
          o =
            r.length > 0
              ? Dr([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static ɵprov = D({
      token: e,
      providedIn: "environment",
      factory: () => new e(S(re)),
    });
  }
  return e;
})();
function Io(e) {
  return ho(() => {
    let t = sE(e),
      n = W(w({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === xf.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: t.standalone
          ? (o) => o.get(Y0).getOrCreateStandaloneInjector(n)
          : null,
        getExternalStyles: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || on.Emulated,
        styles: e.styles || Te,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    (t.standalone && Be("NgStandalone"), aE(n));
    let r = e.dependencies;
    return (
      (n.directiveDefs = $y(r, Z0)),
      (n.pipeDefs = $y(r, Zl)),
      (n.id = X0(n)),
      n
    );
  });
}
function Z0(e) {
  return St(e) || ma(e);
}
function Pt(e) {
  return ho(() => ({
    type: e.type,
    bootstrap: e.bootstrap || Te,
    declarations: e.declarations || Te,
    imports: e.imports || Te,
    exports: e.exports || Te,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Q0(e, t) {
  if (e == null) return _n;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a,
        c;
      (Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i), (c = o[3] || null))
        : ((i = o), (s = o), (a = vc.None), (c = null)),
        (n[i] = [r, a, c]),
        (t[i] = s));
    }
  return n;
}
function K0(e) {
  if (e == null) return _n;
  let t = {};
  for (let n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function Oe(e) {
  return ho(() => {
    let t = sE(e);
    return (aE(t), t);
  });
}
function Ac(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone ?? !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function sE(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputConfig: e.inputs || _n,
    exportAs: e.exportAs || null,
    standalone: e.standalone ?? !0,
    signals: e.signals === !0,
    selectors: e.selectors || Te,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    resolveHostDirectives: null,
    hostDirectives: null,
    inputs: Q0(e.inputs, t),
    outputs: K0(e.outputs),
    debugInfo: null,
  };
}
function aE(e) {
  e.features?.forEach((t) => t(e));
}
function $y(e, t) {
  return e
    ? () => {
        let n = typeof e == "function" ? e() : e,
          r = [];
        for (let o of n) {
          let i = t(o);
          i !== null && r.push(i);
        }
        return r;
      }
    : null;
}
function X0(e) {
  let t = 0,
    n = typeof e.consts == "function" ? "" : e.consts,
    r = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      n,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ];
  for (let i of r.join("|")) t = (Math.imul(31, t) + i.charCodeAt(0)) << 0;
  return ((t += 2147483648), "c" + t);
}
function J0(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function wh(e) {
  let t = J0(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (At(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new I(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        ((s.inputs = kd(e.inputs)),
          (s.declaredInputs = kd(e.declaredInputs)),
          (s.outputs = kd(e.outputs)));
        let a = o.hostBindings;
        a && oM(e, a);
        let c = o.viewQuery,
          u = o.contentQueries;
        if (
          (c && nM(e, c),
          u && rM(e, u),
          eM(e, o),
          xm(e.outputs, o.outputs),
          At(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          (a && a.ngInherit && a(e), a === wh && (n = !1));
        }
    }
    t = Object.getPrototypeOf(t);
  }
  tM(r);
}
function eM(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    r !== void 0 &&
      ((e.inputs[n] = r), (e.declaredInputs[n] = t.declaredInputs[n]));
  }
}
function tM(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    ((o.hostVars = t += o.hostVars),
      (o.hostAttrs = uo(o.hostAttrs, (n = uo(n, o.hostAttrs)))));
  }
}
function kd(e) {
  return e === _n ? {} : e === Te ? [] : e;
}
function nM(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        (t(r, o), n(r, o));
      })
    : (e.viewQuery = t);
}
function rM(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        (t(r, o, i), n(r, o, i));
      })
    : (e.contentQueries = t);
}
function oM(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        (t(r, o), n(r, o));
      })
    : (e.hostBindings = t);
}
function cE(e, t, n, r, o, i, s, a) {
  if (n.firstCreatePass) {
    e.mergedAttrs = uo(e.mergedAttrs, e.attrs);
    let l = (e.tView = th(
      2,
      e,
      o,
      i,
      s,
      n.directiveRegistry,
      n.pipeRegistry,
      null,
      n.schemas,
      n.consts,
      null,
    ));
    n.queries !== null &&
      (n.queries.template(n, e), (l.queries = n.queries.embeddedTView(e)));
  }
  (a && (e.flags |= a), no(e, !1));
  let c = dE(n, t, e, r);
  (Na() && sh(n, t, c, e), lo(c, t));
  let u = PD(c, t, c, e);
  ((t[r + U] = u), rh(t, u), nE(u, e, t));
}
function iM(e, t, n, r, o, i, s, a, c, u, l) {
  let d = n + U,
    h;
  return (
    t.firstCreatePass
      ? ((h = Eo(t, d, 4, s || null, a || null)),
        wa() && YD(t, e, h, Re(t.consts, u), ch),
        lv(t, h))
      : (h = t.data[d]),
    cE(h, e, t, n, r, o, i, c),
    eo(h) && Ic(t, e, h),
    u != null && ki(e, h, l),
    h
  );
}
function yr(e, t, n, r, o, i, s, a, c, u, l) {
  let d = n + U,
    h;
  if (t.firstCreatePass) {
    if (((h = Eo(t, d, 4, s || null, a || null)), u != null)) {
      let f = Re(t.consts, u);
      h.localNames = [];
      for (let g = 0; g < f.length; g += 2) h.localNames.push(f[g], -1);
    }
  } else h = t.data[d];
  return (cE(h, e, t, n, r, o, i, c), u != null && ki(e, h, l), h);
}
function uE(e, t, n, r, o, i, s, a) {
  let c = N(),
    u = ne(),
    l = Re(u.consts, i);
  return (iM(c, u, e, t, n, r, o, l, void 0, s, a), uE);
}
function lE(e, t, n, r, o, i, s, a) {
  let c = N(),
    u = ne(),
    l = Re(u.consts, i);
  return (yr(c, u, e, t, n, r, o, l, void 0, s, a), lE);
}
var dE = fE;
function fE(e, t, n, r) {
  return (tn(!0), t[q].createComment(""));
}
function sM(e, t, n, r) {
  let o = !gc(t, n);
  tn(o);
  let i = t[Ne]?.data[kv]?.[r] ?? null;
  if (
    (i !== null &&
      n.tView !== null &&
      n.tView.ssrId === null &&
      (n.tView.ssrId = i),
    o)
  )
    return fE(e, t);
  let s = t[Ne],
    a = bc(s, e, t, n);
  pc(s, r, a);
  let c = Hf(s, r);
  return Tc(c, a);
}
function hE() {
  dE = sM;
}
var Le = (function (e) {
    return (
      (e[(e.NOT_STARTED = 0)] = "NOT_STARTED"),
      (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
      (e[(e.COMPLETE = 2)] = "COMPLETE"),
      (e[(e.FAILED = 3)] = "FAILED"),
      e
    );
  })(Le || {}),
  zy = 0,
  aM = 1,
  oe = (function (e) {
    return (
      (e[(e.Placeholder = 0)] = "Placeholder"),
      (e[(e.Loading = 1)] = "Loading"),
      (e[(e.Complete = 2)] = "Complete"),
      (e[(e.Error = 3)] = "Error"),
      e
    );
  })(oe || {}),
  pE = (function (e) {
    return ((e[(e.Initial = -1)] = "Initial"), e);
  })(pE || {}),
  co = 0,
  xc = 1,
  yi = 2,
  Pa = 3,
  cM = 4,
  uM = 5,
  lM = 6,
  dM = 7,
  Pd = 8,
  fM = 9,
  Ch = (function (e) {
    return (
      (e[(e.Manual = 0)] = "Manual"),
      (e[(e.Playthrough = 1)] = "Playthrough"),
      e
    );
  })(Ch || {});
function gE(e, t, n) {
  let r = yE(e);
  (t[r] === null && (t[r] = []), t[r].push(n));
}
function Ha(e, t) {
  let n = yE(e),
    r = t[n];
  if (r !== null) {
    for (let o of r) o();
    t[n] = null;
  }
}
function mE(e) {
  (Ha(1, e), Ha(0, e), Ha(2, e));
}
function yE(e) {
  let t = cM;
  return (e === 1 ? (t = uM) : e === 2 && (t = fM), t);
}
var Oc = (function (e) {
    return (
      (e[(e.CHANGE_DETECTION = 0)] = "CHANGE_DETECTION"),
      (e[(e.AFTER_NEXT_RENDER = 1)] = "AFTER_NEXT_RENDER"),
      e
    );
  })(Oc || {}),
  Er = new C(""),
  vE = !1,
  gf = class extends ie {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) {
      (super(),
        (this.__isAsync = t),
        zm() &&
          ((this.destroyRef = p(nn, { optional: !0 }) ?? void 0),
          (this.pendingTasks = p(xt, { optional: !0 }) ?? void 0)));
    }
    emit(t) {
      let n = R(null);
      try {
        super.next(t);
      } finally {
        R(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let c = t;
        ((o = c.next?.bind(c)),
          (i = c.error?.bind(c)),
          (s = c.complete?.bind(c)));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return (t instanceof X && t.add(a), a);
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          try {
            t(n);
          } finally {
            r !== void 0 && this.pendingTasks?.remove(r);
          }
        });
      };
    }
  },
  xe = gf;
function DE(e) {
  let t, n;
  function r() {
    e = gi;
    try {
      (n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t));
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      (e(), r());
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        (e(), r());
      })),
    () => r()
  );
}
function Gy(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = gi;
    }
  );
}
var bh = "isAngularZone",
  rc = bh + "_ID",
  hM = 0,
  Y = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new xe(!1);
    onMicrotaskEmpty = new xe(!1);
    onStable = new xe(!1);
    onError = new xe(!1);
    constructor(t) {
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = vE,
      } = t;
      if (typeof Zone > "u") throw new I(908, !1);
      Zone.assertZonePatched();
      let s = this;
      ((s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        mM(s));
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(bh) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new I(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new I(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, pM, gi, gi);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  pM = {};
function Th(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      (e._nesting++, e.onMicrotaskEmpty.emit(null));
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function gM(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    DE(() => {
      ((e.callbackScheduled = !1),
        mf(e),
        (e.isCheckStableRunning = !0),
        Th(e),
        (e.isCheckStableRunning = !1));
    });
  }
  (e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    mf(e));
}
function mM(e) {
  let t = () => {
      gM(e);
    },
    n = hM++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [bh]: !0, [rc]: n, [rc + n]: !0 },
    onInvokeTask: (r, o, i, s, a, c) => {
      if (yM(c)) return r.invokeTask(i, s, a, c);
      try {
        return (Wy(e), r.invokeTask(i, s, a, c));
      } finally {
        (((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          qy(e));
      }
    },
    onInvoke: (r, o, i, s, a, c, u) => {
      try {
        return (Wy(e), r.invoke(i, s, a, c, u));
      } finally {
        (e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !vM(c) &&
          t(),
          qy(e));
      }
    },
    onHasTask: (r, o, i, s) => {
      (r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), mf(e), Th(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask)));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s),
      e.runOutsideAngular(() => e.onError.emit(s)),
      !1
    ),
  });
}
function mf(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Wy(e) {
  (e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null)));
}
function qy(e) {
  (e._nesting--, Th(e));
}
var oc = class {
  hasPendingMicrotasks = !1;
  hasPendingMacrotasks = !1;
  isStable = !0;
  onUnstable = new xe();
  onMicrotaskEmpty = new xe();
  onStable = new xe();
  onError = new xe();
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function yM(e) {
  return EE(e, "__ignore_ng_zone__");
}
function vM(e) {
  return EE(e, "__scheduler_tick__");
}
function EE(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var Sh = (() => {
    class e {
      impl = null;
      execute() {
        this.impl?.execute();
      }
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  IE = [0, 1, 2, 3],
  wE = (() => {
    class e {
      ngZone = p(Y);
      scheduler = p(Xt);
      errorHandler = p(ct, { optional: !0 });
      sequences = new Set();
      deferredRegistrations = new Set();
      executing = !1;
      constructor() {
        p(Er, { optional: !0 });
      }
      execute() {
        let n = this.sequences.size > 0;
        (n && $(16), (this.executing = !0));
        for (let r of IE)
          for (let o of this.sequences)
            if (!(o.erroredOrDestroyed || !o.hooks[r]))
              try {
                o.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                  this.maybeTrace(() => {
                    let i = o.hooks[r];
                    return i(o.pipelinedValue);
                  }, o.snapshot),
                );
              } catch (i) {
                ((o.erroredOrDestroyed = !0),
                  this.errorHandler?.handleError(i));
              }
        this.executing = !1;
        for (let r of this.sequences)
          (r.afterRun(), r.once && (this.sequences.delete(r), r.destroy()));
        for (let r of this.deferredRegistrations) this.sequences.add(r);
        (this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
          this.deferredRegistrations.clear(),
          n && $(17));
      }
      register(n) {
        let { view: r } = n;
        r !== void 0
          ? ((r[sr] ??= []).push(n), to(r), (r[A] |= 8192))
          : this.executing
            ? this.deferredRegistrations.add(n)
            : this.addSequence(n);
      }
      addSequence(n) {
        (this.sequences.add(n), this.scheduler.notify(7));
      }
      unregister(n) {
        this.executing && this.sequences.has(n)
          ? ((n.erroredOrDestroyed = !0),
            (n.pipelinedValue = void 0),
            (n.once = !0))
          : (this.sequences.delete(n), this.deferredRegistrations.delete(n));
      }
      maybeTrace(n, r) {
        return r ? r.run(Oc.AFTER_NEXT_RENDER, n) : n();
      }
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  ic = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i, s = null) {
      ((this.impl = t),
        (this.hooks = n),
        (this.view = r),
        (this.once = o),
        (this.snapshot = s),
        (this.unregisterOnDestroy = i?.onDestroy(() => this.destroy())));
    }
    afterRun() {
      ((this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        this.snapshot?.dispose(),
        (this.snapshot = null));
    }
    destroy() {
      (this.impl.unregister(this), this.unregisterOnDestroy?.());
      let t = this.view?.[sr];
      t && (this.view[sr] = t.filter((n) => n !== this));
    }
  };
function _h(e, t) {
  let n = t?.injector ?? p(Se);
  return (Be("NgAfterNextRender"), EM(e, n, t, !0));
}
function DM(e) {
  return e instanceof Function
    ? [void 0, void 0, e, void 0]
    : [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function EM(e, t, n, r) {
  let o = t.get(Sh);
  o.impl ??= t.get(wE);
  let i = t.get(Er, null, { optional: !0 }),
    s = n?.manualCleanup !== !0 ? t.get(nn) : null,
    a = t.get(Ra, null, { optional: !0 }),
    c = new ic(o.impl, DM(e), a?.view, r, s, i?.snapshot(null));
  return (o.impl.register(c), c);
}
function kc(e) {
  return e + 1;
}
function wo(e, t) {
  let n = e[b],
    r = kc(t.index);
  return e[r];
}
function IM(e, t, n) {
  let r = e[b],
    o = kc(t);
  e[o] = n;
}
function Ir(e, t) {
  let n = kc(t.index);
  return e.data[n];
}
function wM(e, t, n) {
  let r = kc(t);
  e.data[r] = n;
}
function CM(e, t, n) {
  let r = t[b],
    o = Ir(r, n);
  switch (e) {
    case oe.Complete:
      return o.primaryTmplIndex;
    case oe.Loading:
      return o.loadingTmplIndex;
    case oe.Error:
      return o.errorTmplIndex;
    case oe.Placeholder:
      return o.placeholderTmplIndex;
    default:
      return null;
  }
}
function yf(e, t) {
  return t === oe.Placeholder
    ? (e.placeholderBlockConfig?.[zy] ?? null)
    : t === oe.Loading
      ? (e.loadingBlockConfig?.[zy] ?? null)
      : null;
}
function CE(e) {
  return e.loadingBlockConfig?.[aM] ?? null;
}
function Yy(e, t) {
  if (!e || e.length === 0) return t;
  let n = new Set(e);
  for (let r of t) n.add(r);
  return e.length === n.size ? e : Array.from(n);
}
function bM(e, t) {
  let n = t.primaryTmplIndex + U;
  return ur(e, n);
}
function TM(e, t) {
  let n = t.get(MM),
    r = () => n.remove(e);
  return (n.add(e), r);
}
var SM = () =>
    typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout,
  _M = () =>
    typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout,
  MM = (() => {
    class e {
      executingCallbacks = !1;
      idleId = null;
      current = new Set();
      deferred = new Set();
      ngZone = p(Y);
      requestIdleCallbackFn = SM().bind(globalThis);
      cancelIdleCallbackFn = _M().bind(globalThis);
      add(n) {
        ((this.executingCallbacks ? this.deferred : this.current).add(n),
          this.idleId === null && this.scheduleIdleCallback());
      }
      remove(n) {
        let { current: r, deferred: o } = this;
        (r.delete(n),
          o.delete(n),
          r.size === 0 && o.size === 0 && this.cancelIdleCallback());
      }
      scheduleIdleCallback() {
        let n = () => {
          (this.cancelIdleCallback(), (this.executingCallbacks = !0));
          for (let r of this.current) r();
          if (
            (this.current.clear(),
            (this.executingCallbacks = !1),
            this.deferred.size > 0)
          ) {
            for (let r of this.deferred) this.current.add(r);
            (this.deferred.clear(), this.scheduleIdleCallback());
          }
        };
        this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n));
      }
      cancelIdleCallback() {
        this.idleId !== null &&
          (this.cancelIdleCallbackFn(this.idleId), (this.idleId = null));
      }
      ngOnDestroy() {
        (this.cancelIdleCallback(),
          this.current.clear(),
          this.deferred.clear());
      }
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })();
function NM(e, t, n) {
  let r = n.get(bE),
    o = n.get(Y),
    i = () => r.remove(t);
  return (r.add(e, t, o), i);
}
var bE = (() => {
    class e {
      executingCallbacks = !1;
      timeoutId = null;
      invokeTimerAt = null;
      current = [];
      deferred = [];
      add(n, r, o) {
        let i = this.executingCallbacks ? this.deferred : this.current;
        (this.addToQueue(i, Date.now() + n, r), this.scheduleTimer(o));
      }
      remove(n) {
        let { current: r, deferred: o } = this;
        (this.removeFromQueue(r, n) === -1 && this.removeFromQueue(o, n),
          r.length === 0 && o.length === 0 && this.clearTimeout());
      }
      addToQueue(n, r, o) {
        let i = n.length;
        for (let s = 0; s < n.length; s += 2)
          if (n[s] > r) {
            i = s;
            break;
          }
        Gl(n, i, r, o);
      }
      removeFromQueue(n, r) {
        let o = -1;
        for (let i = 0; i < n.length; i += 2)
          if (n[i + 1] === r) {
            o = i;
            break;
          }
        return (o > -1 && zl(n, o, 2), o);
      }
      scheduleTimer(n) {
        let r = () => {
          (this.clearTimeout(), (this.executingCallbacks = !0));
          let i = [...this.current],
            s = Date.now();
          for (let c = 0; c < i.length; c += 2) {
            let u = i[c],
              l = i[c + 1];
            if (u <= s) l();
            else break;
          }
          let a = -1;
          for (
            let c = 0;
            c < this.current.length && this.current[c] <= s;
            c += 2
          )
            a = c + 1;
          if (
            (a >= 0 && zl(this.current, 0, a + 1),
            (this.executingCallbacks = !1),
            this.deferred.length > 0)
          ) {
            for (let c = 0; c < this.deferred.length; c += 2) {
              let u = this.deferred[c],
                l = this.deferred[c + 1];
              this.addToQueue(this.current, u, l);
            }
            this.deferred.length = 0;
          }
          this.scheduleTimer(n);
        };
        if (this.current.length > 0) {
          let i = Date.now(),
            s = this.current[0];
          if (
            this.timeoutId === null ||
            (this.invokeTimerAt && this.invokeTimerAt - s > 16)
          ) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            ((this.invokeTimerAt = s),
              (this.timeoutId = n.runOutsideAngular(() =>
                setTimeout(() => n.run(r), a),
              )));
          }
        }
      }
      clearTimeout() {
        this.timeoutId !== null &&
          (clearTimeout(this.timeoutId), (this.timeoutId = null));
      }
      ngOnDestroy() {
        (this.clearTimeout(),
          (this.current.length = 0),
          (this.deferred.length = 0));
      }
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  RM = (() => {
    class e {
      cachedInjectors = new Map();
      getOrCreateInjector(n, r, o, i) {
        if (!this.cachedInjectors.has(n)) {
          let s = o.length > 0 ? Dr(o, r, i) : null;
          this.cachedInjectors.set(n, s);
        }
        return this.cachedInjectors.get(n);
      }
      ngOnDestroy() {
        try {
          for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
        } finally {
          this.cachedInjectors.clear();
        }
      }
      static ɵprov = D({
        token: e,
        providedIn: "environment",
        factory: () => new e(),
      });
    }
    return e;
  })();
var TE = new C("");
function Fd(e, t, n) {
  return e.get(RM).getOrCreateInjector(t, e, n, "");
}
function AM(e, t, n) {
  if (e instanceof ao) {
    let o = e.injector,
      i = e.parentInjector,
      s = Fd(i, t, n);
    return new ao(o, s);
  }
  let r = e.get(re);
  if (r !== e) {
    let o = Fd(r, t, n);
    return new ao(e, o);
  }
  return Fd(e, t, n);
}
function rn(e, t, n, r = !1) {
  let o = n[ue],
    i = o[b];
  if (Nn(o)) return;
  let s = wo(o, t),
    a = s[xc],
    c = s[dM];
  if (!(c !== null && e < c) && Qy(a, e) && Qy(s[co] ?? -1, e)) {
    let u = Ir(i, t),
      d =
        !r &&
        !0 &&
        (CE(u) !== null || yf(u, oe.Loading) !== null || yf(u, oe.Placeholder))
          ? vf
          : SE;
    try {
      d(e, s, n, t, o);
    } catch (h) {
      dh(o, h);
    }
  }
}
function xM(e, t) {
  let n = e[et]?.findIndex((o) => o.data[Bf] === t[xc]) ?? -1;
  return { dehydratedView: n > -1 ? e[et][n] : null, dehydratedViewIx: n };
}
function SE(e, t, n, r, o) {
  $(20);
  let i = CM(e, o, r);
  if (i !== null) {
    t[xc] = e;
    let s = o[b],
      a = i + U,
      c = ur(s, a),
      u = 0;
    gh(n, u);
    let l;
    if (e === oe.Complete) {
      let g = Ir(s, r),
        E = g.providers;
      E && E.length > 0 && (l = AM(o[Fe], g, E));
    }
    let { dehydratedView: d, dehydratedViewIx: h } = xM(n, t),
      f = vo(o, c, null, { injector: l, dehydratedView: d });
    if (
      (Do(n, f, u, hr(c, d)),
      wc(f, 2),
      h > -1 && n[et]?.splice(h, 1),
      (e === oe.Complete || e === oe.Error) && Array.isArray(t[Pd]))
    ) {
      for (let g of t[Pd]) g();
      t[Pd] = null;
    }
  }
  $(21);
}
function OM(e, t, n, r, o) {
  let i = Date.now(),
    s = o[b],
    a = Ir(s, r);
  if (t[yi] === null || t[yi] <= i) {
    t[yi] = null;
    let c = CE(a),
      u = t[Pa] !== null;
    if (e === oe.Loading && c !== null && !u) {
      t[co] = e;
      let l = Zy(c, t, r, n, o);
      t[Pa] = l;
    } else {
      (e > oe.Loading && u && (t[Pa](), (t[Pa] = null), (t[co] = null)),
        SE(e, t, n, r, o));
      let l = yf(a, e);
      l !== null && ((t[yi] = i + l), Zy(l, t, r, n, o));
    }
  } else t[co] = e;
}
function Zy(e, t, n, r, o) {
  return NM(
    e,
    () => {
      let s = t[co];
      ((t[yi] = null), (t[co] = null), s !== null && rn(s, n, r));
    },
    o[Fe],
  );
}
function Qy(e, t) {
  return e < t;
}
function kM(e, t) {
  let n = e[t.index];
  rn(oe.Placeholder, t, n);
}
function Ky(e, t, n) {
  e.loadingPromise.then(() => {
    e.loadingState === Le.COMPLETE
      ? rn(oe.Complete, t, n)
      : e.loadingState === Le.FAILED && rn(oe.Error, t, n);
  });
}
var vf = null;
function PM(e, t, n, r) {
  let o = e.consts;
  (n != null && (t.placeholderBlockConfig = Re(o, n)),
    r != null && (t.loadingBlockConfig = Re(o, r)),
    vf === null && (vf = OM));
}
var Pc = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "platform" });
  }
  return e;
})();
var Mh = new C("");
function wr(e) {
  return !!e && typeof e.then == "function";
}
function Fc(e) {
  return !!e && typeof e.subscribe == "function";
}
var Nh = new C("");
function Lc(e) {
  return _t([{ provide: Nh, multi: !0, useValue: e }]);
}
var Rh = (() => {
    class e {
      resolve;
      reject;
      initialized = !1;
      done = !1;
      donePromise = new Promise((n, r) => {
        ((this.resolve = n), (this.reject = r));
      });
      appInits = p(Nh, { optional: !0 }) ?? [];
      injector = p(Se);
      constructor() {}
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = he(this.injector, o);
          if (wr(i)) n.push(i);
          else if (Fc(i)) {
            let s = new Promise((a, c) => {
              i.subscribe({ complete: a, error: c });
            });
            n.push(s);
          }
        }
        let r = () => {
          ((this.done = !0), this.resolve());
        };
        (Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0));
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  On = new C("");
function _E() {
  Ku(() => {
    let e = "";
    throw new I(600, e);
  });
}
function ME(e) {
  return e.isBoundToModule;
}
var FM = 10;
var gt = (() => {
  class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = p(Ae);
    afterRenderManager = p(Sh);
    zonelessEnabled = p(pi);
    rootEffectScheduler = p(Sd);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set();
    autoDetectTestViews = new Set();
    includeAllTestViews = !1;
    afterTick = new ie();
    get allViews() {
      return [
        ...(this.includeAllTestViews
          ? this.allTestViews
          : this.autoDetectTestViews
        ).keys(),
        ...this._views,
      ];
    }
    get destroyed() {
      return this._destroyed;
    }
    componentTypes = [];
    components = [];
    internalPendingTask = p(xt);
    get isStable() {
      return this.internalPendingTask.hasPendingTasksObservable.pipe(
        k((n) => !n),
      );
    }
    constructor() {
      p(Er, { optional: !0 });
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    _injector = p(re);
    _rendererFactory = null;
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      return this.bootstrapImpl(n, r);
    }
    bootstrapImpl(n, r, o = Se.NULL) {
      return this._injector.get(Y).run(() => {
        $(10);
        let s = n instanceof _c;
        if (!this._injector.get(Rh).done) {
          let g = "";
          throw new I(405, g);
        }
        let c;
        (s ? (c = n) : (c = this._injector.get(Pi).resolveComponentFactory(n)),
          this.componentTypes.push(c.componentType));
        let u = ME(c) ? void 0 : this._injector.get(mr),
          l = r || c.selector,
          d = c.create(o, [], l, u),
          h = d.location.nativeElement,
          f = d.injector.get(Mh, null);
        return (
          f?.registerApplication(h),
          d.onDestroy(() => {
            (this.detachView(d.hostView),
              vi(this.components, d),
              f?.unregisterApplication(h));
          }),
          this._loadComponent(d),
          $(11, d),
          d
        );
      });
    }
    tick() {
      (this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick());
    }
    _tick() {
      ($(12),
        this.tracingSnapshot !== null
          ? this.tracingSnapshot.run(Oc.CHANGE_DETECTION, this.tickImpl)
          : this.tickImpl());
    }
    tickImpl = () => {
      if (this._runningTick) throw new I(101, !1);
      let n = R(null);
      try {
        ((this._runningTick = !0), this.synchronize());
      } finally {
        ((this._runningTick = !1),
          this.tracingSnapshot?.dispose(),
          (this.tracingSnapshot = null),
          R(n),
          this.afterTick.next(),
          $(13));
      }
    };
    synchronize() {
      this._rendererFactory === null &&
        !this._injector.destroyed &&
        (this._rendererFactory = this._injector.get(pr, null, {
          optional: !0,
        }));
      let n = 0;
      for (; this.dirtyFlags !== 0 && n++ < FM; )
        ($(14), this.synchronizeOnce(), $(15));
    }
    synchronizeOnce() {
      this.dirtyFlags & 16 &&
        ((this.dirtyFlags &= -17), this.rootEffectScheduler.flush());
      let n = !1;
      if (this.dirtyFlags & 7) {
        let r = !!(this.dirtyFlags & 1);
        ((this.dirtyFlags &= -8), (this.dirtyFlags |= 8));
        for (let { _lView: o } of this.allViews) {
          if (!r && !fi(o)) continue;
          let i = r && !this.zonelessEnabled ? 0 : 1;
          (ph(o, i), (n = !0));
        }
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 23)
        )
          return;
      }
      (n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()),
        this.dirtyFlags & 8 &&
          ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews());
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => fi(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      (this._views.push(r), r.attachToAppRef(this));
    }
    detachView(n) {
      let r = n;
      (vi(this._views, r), r.detachFromAppRef());
    }
    _loadComponent(n) {
      this.attachView(n.hostView);
      try {
        this.tick();
      } catch (o) {
        this.internalErrorHandler(o);
      }
      (this.components.push(n),
        this._injector.get(On, []).forEach((o) => o(n)));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          (this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy()));
        } finally {
          ((this._destroyed = !0),
            (this._views = []),
            (this._destroyListeners = []));
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n),
        () => vi(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new I(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function vi(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function LM(e) {
  let t = N(),
    n = de();
  if ((kM(t, n), !RE(0, t))) return;
  let r = t[Fe],
    o = wo(t, n),
    i = e(() => jM(0, t, n), r);
  gE(0, o, i);
}
function NE(e, t, n) {
  let r = t[Fe],
    o = t[b];
  if (e.loadingState !== Le.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve();
  let i = wo(t, n),
    s = bM(o, e);
  ((e.loadingState = Le.IN_PROGRESS), Ha(1, i));
  let a = e.dependencyResolverFn,
    c = r.get(oo).add();
  return a
    ? ((e.loadingPromise = Promise.allSettled(a()).then((u) => {
        let l = !1,
          d = [],
          h = [];
        for (let f of u)
          if (f.status === "fulfilled") {
            let g = f.value,
              E = St(g) || ma(g);
            if (E) d.push(E);
            else {
              let y = Zl(g);
              y && h.push(y);
            }
          } else {
            l = !0;
            break;
          }
        if (l) {
          if (((e.loadingState = Le.FAILED), e.errorTmplIndex === null)) {
            let f = "",
              g = new I(-750, !1);
            dh(t, g);
          }
        } else {
          e.loadingState = Le.COMPLETE;
          let f = s.tView;
          if (d.length > 0) {
            f.directiveRegistry = Yy(f.directiveRegistry, d);
            let g = d.map((y) => y.type),
              E = ya(!1, ...g);
            e.providers = E;
          }
          h.length > 0 && (f.pipeRegistry = Yy(f.pipeRegistry, h));
        }
      })),
      e.loadingPromise.finally(() => {
        ((e.loadingPromise = null), c());
      }))
    : ((e.loadingPromise = Promise.resolve().then(() => {
        ((e.loadingPromise = null), (e.loadingState = Le.COMPLETE), c());
      })),
      e.loadingPromise);
}
function RE(e, t) {
  return t[Fe].get(TE, null, { optional: !0 })?.behavior !== Ch.Manual;
}
function jM(e, t, n) {
  let r = t[b],
    o = t[n.index];
  if (!RE(e, t)) return;
  let i = wo(t, n),
    s = Ir(r, n);
  switch ((mE(i), s.loadingState)) {
    case Le.NOT_STARTED:
      (rn(oe.Loading, n, o),
        NE(s, t, n),
        s.loadingState === Le.IN_PROGRESS && Ky(s, n, o));
      break;
    case Le.IN_PROGRESS:
      (rn(oe.Loading, n, o), Ky(s, n, o));
      break;
    case Le.COMPLETE:
      rn(oe.Complete, n, o);
      break;
    case Le.FAILED:
      rn(oe.Error, n, o);
      break;
    default:
  }
}
function BM(e, t, n) {
  return e === 0 ? Xy(t, n) : e === 2 ? !Xy(t, n) : !0;
}
function VM(e) {
  return e != null && (e & 1) === 1;
}
function Xy(e, t) {
  let n = e[Fe],
    r = Ir(e[b], t),
    o = Gv(n),
    i = VM(r.flags),
    a = wo(e, t)[lM] !== null;
  return !(i && a && o);
}
function UM(e, t, n, r, o, i, s, a, c, u) {
  let l = N(),
    d = ne(),
    h = e + U,
    f = yr(l, d, e, null, 0, 0),
    g = l[Fe];
  if (d.firstCreatePass) {
    Be("NgDefer");
    let ae = {
      primaryTmplIndex: t,
      loadingTmplIndex: r ?? null,
      placeholderTmplIndex: o ?? null,
      errorTmplIndex: i ?? null,
      placeholderBlockConfig: null,
      loadingBlockConfig: null,
      dependencyResolverFn: n ?? null,
      loadingState: Le.NOT_STARTED,
      loadingPromise: null,
      providers: null,
      hydrateTriggers: null,
      debug: null,
      flags: u ?? 0,
    };
    (c?.(d, ae, a, s), wM(d, h, ae));
  }
  let E = l[h];
  nE(E, f, l);
  let y = null,
    v = null;
  if (E[et]?.length > 0) {
    let ae = E[et][0].data;
    ((v = ae[jf] ?? null), (y = ae[Bf]));
  }
  let x = [null, pE.Initial, null, null, null, null, v, y, null, null];
  IM(l, h, x);
  let H = null;
  v !== null &&
    ((H = g.get(Bv)), H.add(v, { lView: l, tNode: f, lContainer: E }));
  let B = () => {
    (mE(x), v !== null && H?.cleanup([v]));
  };
  (gE(0, x, () => sd(l, B)), Ia(l, B));
}
function HM() {
  let e = N(),
    t = de();
  BM(0, e, t) && LM(TM);
}
function Co(e, t, n, r) {
  let o = N(),
    i = Rn();
  if (Ge(o, i, t)) {
    let s = ne(),
      a = Ma();
    S_(a, o, e, t, n, r);
  }
  return Co;
}
var Df = class {
  destroy(t) {}
  updateValue(t, n) {}
  swap(t, n) {
    let r = Math.min(t, n),
      o = Math.max(t, n),
      i = this.detach(o);
    if (o - r > 1) {
      let s = this.detach(r);
      (this.attach(r, i), this.attach(o, s));
    } else this.attach(r, i);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
};
function Ld(e, t, n, r, o) {
  return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0;
}
function $M(e, t, n) {
  let r,
    o,
    i = 0,
    s = e.length - 1,
    a = void 0;
  if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c; ) {
      let u = e.at(i),
        l = t[i],
        d = Ld(i, u, i, l, n);
      if (d !== 0) {
        (d < 0 && e.updateValue(i, l), i++);
        continue;
      }
      let h = e.at(s),
        f = t[c],
        g = Ld(s, h, c, f, n);
      if (g !== 0) {
        (g < 0 && e.updateValue(s, f), s--, c--);
        continue;
      }
      let E = n(i, u),
        y = n(s, h),
        v = n(i, l);
      if (Object.is(v, y)) {
        let x = n(c, f);
        (Object.is(x, E)
          ? (e.swap(i, s), e.updateValue(s, f), c--, s--)
          : e.move(s, i),
          e.updateValue(i, l),
          i++);
        continue;
      }
      if (((r ??= new sc()), (o ??= ev(e, i, s, n)), Ef(e, r, i, v)))
        (e.updateValue(i, l), i++, s++);
      else if (o.has(v)) (r.set(E, e.detach(i)), s--);
      else {
        let x = e.create(i, t[i]);
        (e.attach(i, x), i++, s++);
      }
    }
    for (; i <= c; ) (Jy(e, r, n, i, t[i]), i++);
  } else if (t != null) {
    let c = t[Symbol.iterator](),
      u = c.next();
    for (; !u.done && i <= s; ) {
      let l = e.at(i),
        d = u.value,
        h = Ld(i, l, i, d, n);
      if (h !== 0) (h < 0 && e.updateValue(i, d), i++, (u = c.next()));
      else {
        ((r ??= new sc()), (o ??= ev(e, i, s, n)));
        let f = n(i, d);
        if (Ef(e, r, i, f)) (e.updateValue(i, d), i++, s++, (u = c.next()));
        else if (!o.has(f))
          (e.attach(i, e.create(i, d)), i++, s++, (u = c.next()));
        else {
          let g = n(i, l);
          (r.set(g, e.detach(i)), s--);
        }
      }
    }
    for (; !u.done; ) (Jy(e, r, n, e.length, u.value), (u = c.next()));
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  r?.forEach((c) => {
    e.destroy(c);
  });
}
function Ef(e, t, n, r) {
  return t !== void 0 && t.has(r)
    ? (e.attach(n, t.get(r)), t.delete(r), !0)
    : !1;
}
function Jy(e, t, n, r, o) {
  if (Ef(e, t, r, n(r, o))) e.updateValue(r, o);
  else {
    let i = e.create(r, o);
    e.attach(r, i);
  }
}
function ev(e, t, n, r) {
  let o = new Set();
  for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
  return o;
}
var sc = class {
  kvMap = new Map();
  _vMap = void 0;
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let n = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(n)
        ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let r = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(r); ) r = o.get(r);
      o.set(r, n);
    } else this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, r] of this.kvMap)
      if ((t(r, n), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(r); ) ((r = o.get(r)), t(r, n));
      }
  }
};
function zM(e, t, n, r, o, i, s, a) {
  Be("NgControlFlow");
  let c = N(),
    u = ne(),
    l = Re(u.consts, i);
  return (yr(c, u, e, t, n, r, o, l, 256, s, a), Ah);
}
function Ah(e, t, n, r, o, i, s, a) {
  Be("NgControlFlow");
  let c = N(),
    u = ne(),
    l = Re(u.consts, i);
  return (yr(c, u, e, t, n, r, o, l, 512, s, a), Ah);
}
function GM(e, t) {
  Be("NgControlFlow");
  let n = N(),
    r = Rn(),
    o = n[r] !== je ? n[r] : -1,
    i = o !== -1 ? ac(n, U + o) : void 0,
    s = 0;
  if (Ge(n, r, e)) {
    let a = R(null);
    try {
      if ((i !== void 0 && gh(i, s), e !== -1)) {
        let c = U + e,
          u = ac(n, c),
          l = bf(n[b], c),
          d = zD(u, l, n),
          h = vo(n, l, t, { dehydratedView: d });
        Do(u, h, s, hr(l, d));
      }
    } finally {
      R(a);
    }
  } else if (i !== void 0) {
    let a = FD(i, s);
    a !== void 0 && (a[se] = t);
  }
}
var If = class {
  lContainer;
  $implicit;
  $index;
  constructor(t, n, r) {
    ((this.lContainer = t), (this.$implicit = n), (this.$index = r));
  }
  get $count() {
    return this.lContainer.length - le;
  }
};
var wf = class {
  hasEmptyBlock;
  trackByFn;
  liveCollection;
  constructor(t, n, r) {
    ((this.hasEmptyBlock = t), (this.trackByFn = n), (this.liveCollection = r));
  }
};
function WM(e, t, n, r, o, i, s, a, c, u, l, d, h) {
  Be("NgControlFlow");
  let f = N(),
    g = ne(),
    E = c !== void 0,
    y = N(),
    v = a ? s.bind(y[me][se]) : s,
    x = new wf(E, v);
  ((y[U + e] = x),
    yr(f, g, e + 1, t, n, r, o, Re(g.consts, i), 256),
    E && yr(f, g, e + 2, c, u, l, d, Re(g.consts, h), 512));
}
var Cf = class extends Df {
  lContainer;
  hostLView;
  templateTNode;
  operationsCounter = void 0;
  needsIndexUpdate = !1;
  constructor(t, n, r) {
    (super(),
      (this.lContainer = t),
      (this.hostLView = n),
      (this.templateTNode = r));
  }
  get length() {
    return this.lContainer.length - le;
  }
  at(t) {
    return this.getLView(t)[se].$implicit;
  }
  attach(t, n) {
    let r = n[Ne];
    ((this.needsIndexUpdate ||= t !== this.length),
      Do(this.lContainer, n, t, hr(this.templateTNode, r)));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1),
      YM(this.lContainer, t)
    );
  }
  create(t, n) {
    let r = Ci(this.lContainer, this.templateTNode.tView.ssrId),
      o = vo(
        this.hostLView,
        this.templateTNode,
        new If(this.lContainer, n, t),
        { dehydratedView: r },
      );
    return (this.operationsCounter?.recordCreate(), o);
  }
  destroy(t) {
    (Dc(t[b], t), this.operationsCounter?.recordDestroy());
  }
  updateValue(t, n) {
    this.getLView(t)[se].$implicit = n;
  }
  reset() {
    ((this.needsIndexUpdate = !1), this.operationsCounter?.reset());
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[se].$index = t;
  }
  getLView(t) {
    return ZM(this.lContainer, t);
  }
};
function qM(e) {
  let t = R(null),
    n = en();
  try {
    let r = N(),
      o = r[b],
      i = r[n],
      s = n + 1,
      a = ac(r, s);
    if (i.liveCollection === void 0) {
      let u = bf(o, s);
      i.liveCollection = new Cf(a, r, u);
    } else i.liveCollection.reset();
    let c = i.liveCollection;
    if (($M(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock)) {
      let u = Rn(),
        l = c.length === 0;
      if (Ge(r, u, l)) {
        let d = n + 2,
          h = ac(r, d);
        if (l) {
          let f = bf(o, d),
            g = zD(h, f, r),
            E = vo(r, f, void 0, { dehydratedView: g });
          Do(h, E, 0, hr(f, g));
        } else (o.firstUpdatePass && Sc(h), gh(h, 0));
      }
    }
  } finally {
    R(t);
  }
}
function ac(e, t) {
  return e[t];
}
function YM(e, t) {
  return wi(e, t);
}
function ZM(e, t) {
  return FD(e, t);
}
function bf(e, t) {
  return ur(e, t);
}
function AE(e, t, n) {
  let r = N(),
    o = Rn();
  if (Ge(r, o, t)) {
    let i = ne(),
      s = Ma();
    I_(s, r, e, t, r[q], n);
  }
  return AE;
}
function Tf(e, t, n, r, o) {
  fh(t, e, n, o ? "class" : "style", r);
}
function xh(e, t, n, r) {
  let o = N(),
    i = o[b],
    s = e + U,
    a = i.firstCreatePass ? yh(s, o, 2, t, ch, wa(), n, r) : i.data[s];
  if ((uh(a, o, e, t, Fh), eo(a))) {
    let c = o[b];
    (Ic(c, o, a), $f(c, a, o));
  }
  return (r != null && ki(o, a), xh);
}
function Oh() {
  let e = ne(),
    t = de(),
    n = lh(t);
  return (
    e.firstCreatePass && vh(e, n),
    ld(n) && dd(),
    ud(),
    n.classesWithoutHost != null &&
      jT(n) &&
      Tf(e, n, N(), n.classesWithoutHost, !0),
    n.stylesWithoutHost != null &&
      BT(n) &&
      Tf(e, n, N(), n.stylesWithoutHost, !1),
    Oh
  );
}
function jc(e, t, n, r) {
  return (xh(e, t, n, r), Oh(), jc);
}
function kh(e, t, n, r) {
  let o = N(),
    i = o[b],
    s = e + U,
    a = i.firstCreatePass ? E0(s, i, 2, t, n, r) : i.data[s];
  return (uh(a, o, e, t, Fh), r != null && ki(o, a), kh);
}
function Ph() {
  let e = de(),
    t = lh(e);
  return (ld(t) && dd(), ud(), Ph);
}
function xE(e, t, n, r) {
  return (kh(e, t, n, r), Ph(), xE);
}
var Fh = (e, t, n, r, o) => (tn(!0), Jf(t[q], r, wd()));
function QM(e, t, n, r, o) {
  let i = !gc(t, n);
  if ((tn(i), i)) return Jf(t[q], r, wd());
  let s = t[Ne],
    a = bc(s, e, t, n);
  return (
    Wv(s, o) && pc(s, o, a.nextSibling),
    s && (Cv(n) || bv(a)) && Jt(n) && (ey(n), fD(a)),
    a
  );
}
function OE() {
  Fh = QM;
}
function Lh(e, t, n) {
  let r = N(),
    o = r[b],
    i = e + U,
    s = o.firstCreatePass
      ? yh(i, r, 8, "ng-container", ch, wa(), t, n)
      : o.data[i];
  if ((uh(s, r, e, "ng-container", PE), eo(s))) {
    let a = r[b];
    (Ic(a, r, s), $f(a, s, r));
  }
  return (n != null && ki(r, s), Lh);
}
function jh() {
  let e = ne(),
    t = de(),
    n = lh(t);
  return (e.firstCreatePass && vh(e, n), jh);
}
function kE(e, t, n) {
  return (Lh(e, t, n), jh(), kE);
}
var PE = (e, t, n, r, o) => (tn(!0), lD(t[q], ""));
function KM(e, t, n, r, o) {
  let i,
    s = !gc(t, n);
  if ((tn(s), s)) return lD(t[q], "");
  let a = t[Ne],
    c = bc(a, e, t, n),
    u = gS(a, o);
  return (pc(a, o, c), (i = Tc(u, c)), i);
}
function FE() {
  PE = KM;
}
function XM() {
  return N();
}
function Bc(e, t, n) {
  let r = N(),
    o = Rn();
  if (Ge(r, o, t)) {
    let i = ne(),
      s = Ma();
    TD(s, r, e, t, r[q], n);
  }
  return Bc;
}
var tv = {};
function Bh(e, t, n) {
  (typeof t != "string" && ((n = t), (t = e[Ti.LocaleId])),
    (t = t.toLowerCase().replace(/_/g, "-")),
    (tv[t] = e),
    n && (tv[t][Ti.ExtraData] = n));
}
var Ti = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(Ti || {});
var Fi = "en-US";
var JM = Fi;
function LE(e) {
  typeof e == "string" && (JM = e.toLowerCase().replace(/_/g, "-"));
}
function Vc(e, t, n) {
  let r = N(),
    o = ne(),
    i = de();
  return (eN(o, r, r[q], i, e, t, n), Vc);
}
function eN(e, t, n, r, o, i, s) {
  let a = !0,
    c = null;
  if (
    ((r.type & 3 || s) &&
      ((c ??= xd(r, t, i)), C0(r, e, t, s, n, o, i, c) && (a = !1)),
    a)
  ) {
    let u = r.outputs?.[o],
      l = r.hostDirectiveOutputs?.[o];
    if (l && l.length)
      for (let d = 0; d < l.length; d += 2) {
        let h = l[d],
          f = l[d + 1];
        ((c ??= xd(r, t, i)), By(r, t, h, f, o, c));
      }
    if (u && u.length)
      for (let d of u) ((c ??= xd(r, t, i)), By(r, t, d, o, o, c));
  }
}
function tN(e = 1) {
  return hy(e);
}
function nN(e, t) {
  let n = null,
    r = GS(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? cD(e, i, !0) : YS(r, i)) return o;
  }
  return n;
}
function Vh(e) {
  let t = N()[me][Me];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = Bm(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? nN(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function Uh(e, t = 0, n, r, o, i) {
  let s = N(),
    a = ne(),
    c = r ? e + 1 : null;
  c !== null && yr(s, a, c, r, o, i, null, n);
  let u = Eo(a, U + e, 16, null, n || null);
  (u.projection === null && (u.projection = t), pd());
  let d = !s[Ne] || Ca();
  s[me][Me].projection[u.projection] === null && c !== null
    ? rN(s, a, c)
    : d && !Ai(u) && p_(a, s, u);
}
function rN(e, t, n) {
  let r = U + n,
    o = t.data[r],
    i = e[r],
    s = Ci(i, o.tView.ssrId),
    a = vo(e, o, void 0, { dehydratedView: s });
  Do(i, a, 0, hr(o, s));
}
function oN(e, t, n) {
  z0(e, t, n);
}
function jE(e) {
  let t = N(),
    n = ne(),
    r = Dd();
  Ta(r + 1);
  let o = Ih(n, r);
  if (e.dirty && Ym(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = q0(t, r);
      (e.reset(i, XT), e.notifyOnChanges());
    }
    return !0;
  }
  return !1;
}
function BE() {
  return H0(N(), Dd());
}
function iN(e) {
  let t = oy();
  return nd(t, U + e);
}
function Fa(e, t) {
  return (e << 17) | (t << 2);
}
function vr(e) {
  return (e >> 17) & 32767;
}
function sN(e) {
  return (e & 2) == 2;
}
function aN(e, t) {
  return (e & 131071) | (t << 17);
}
function Sf(e) {
  return e | 2;
}
function fo(e) {
  return (e & 131068) >> 2;
}
function jd(e, t) {
  return (e & -131069) | (t << 2);
}
function cN(e) {
  return (e & 1) === 1;
}
function _f(e) {
  return e | 1;
}
function uN(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = vr(s),
    c = fo(s);
  e[r] = n;
  let u = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    ((l = d[1]), (l === null || Kr(d, l) > 0) && (u = !0));
  } else l = n;
  if (o)
    if (c !== 0) {
      let h = vr(e[a + 1]);
      ((e[r + 1] = Fa(h, a)),
        h !== 0 && (e[h + 1] = jd(e[h + 1], r)),
        (e[a + 1] = aN(e[a + 1], r)));
    } else
      ((e[r + 1] = Fa(a, 0)), a !== 0 && (e[a + 1] = jd(e[a + 1], r)), (a = r));
  else
    ((e[r + 1] = Fa(c, 0)),
      a === 0 ? (a = r) : (e[c + 1] = jd(e[c + 1], r)),
      (c = r));
  (u && (e[r + 1] = Sf(e[r + 1])),
    nv(e, l, r, !0),
    nv(e, l, r, !1),
    lN(t, l, e, r, i),
    (s = Fa(a, c)),
    i ? (t.classBindings = s) : (t.styleBindings = s));
}
function lN(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    Kr(i, t) >= 0 &&
    (n[r + 1] = _f(n[r + 1]));
}
function nv(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? vr(o) : fo(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let c = e[s],
      u = e[s + 1];
    (dN(c, t) && ((a = !0), (e[s + 1] = r ? _f(u) : Sf(u))),
      (s = r ? vr(u) : fo(u)));
  }
  a && (e[n + 1] = r ? Sf(o) : _f(o));
}
function dN(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? Kr(e, t) >= 0
      : !1;
}
var dt = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function fN(e) {
  return e.substring(dt.key, dt.keyEnd);
}
function hN(e) {
  return (pN(e), VE(e, UE(e, 0, dt.textEnd)));
}
function VE(e, t) {
  let n = dt.textEnd;
  return n === t ? -1 : ((t = dt.keyEnd = gN(e, (dt.key = t), n)), UE(e, t, n));
}
function pN(e) {
  ((dt.key = 0),
    (dt.keyEnd = 0),
    (dt.value = 0),
    (dt.valueEnd = 0),
    (dt.textEnd = e.length));
}
function UE(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function gN(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function HE(e, t, n) {
  return ($E(e, t, n, !1), HE);
}
function Hh(e, t) {
  return ($E(e, t, null, !0), Hh);
}
function mN(e) {
  vN(bN, yN, e, !0);
}
function yN(e, t) {
  for (let n = hN(t); n >= 0; n = VE(t, n)) pa(e, fN(t), !0);
}
function $E(e, t, n, r) {
  let o = N(),
    i = ne(),
    s = vd(2);
  if ((i.firstUpdatePass && GE(i, e, s, r), t !== je && Ge(o, s, t))) {
    let a = i.data[en()];
    WE(i, a, o, o[q], e, (o[s + 1] = SN(t, n)), r, s);
  }
}
function vN(e, t, n, r) {
  let o = ne(),
    i = vd(2);
  o.firstUpdatePass && GE(o, null, i, r);
  let s = N();
  if (n !== je && Ge(s, i, n)) {
    let a = o.data[en()];
    if (qE(a, r) && !zE(o, i)) {
      let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
      (c !== null && (n = ua(c, n || "")), Tf(o, a, s, n, r));
    } else TN(o, a, s, s[q], s[i + 1], (s[i + 1] = CN(e, t, n)), r, i);
  }
}
function zE(e, t) {
  return t >= e.expandoStartIndex;
}
function GE(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[en()],
      s = zE(e, n);
    (qE(i, r) && t === null && !s && (t = !1),
      (t = DN(o, i, t, r)),
      uN(o, i, t, n, s, r));
  }
}
function DN(e, t, n, r) {
  let o = uy(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Bd(null, e, t, n, r)), (n = Si(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = Bd(o, e, t, n, r)), i === null)) {
        let c = EN(e, t, r);
        c !== void 0 &&
          Array.isArray(c) &&
          ((c = Bd(null, e, t, c[1], r)),
          (c = Si(c, t.attrs, r)),
          IN(e, t, r, c));
      } else i = wN(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)),
    n
  );
}
function EN(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (fo(r) !== 0) return e[vr(r)];
}
function IN(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[vr(o)] = r;
}
function wN(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = Si(r, s, n);
  }
  return Si(r, t.attrs, n);
}
function Bd(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = Si(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return (e !== null && (n.directiveStylingLast = a), r);
}
function Si(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          pa(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function CN(e, t, n) {
  if (n == null || n === "") return Te;
  let r = [],
    o = qe(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function bN(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && pa(e, r, n);
}
function TN(e, t, n, r, o, i, s, a) {
  o === je && (o = Te);
  let c = 0,
    u = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let h = c < o.length ? o[c + 1] : void 0,
      f = u < i.length ? i[u + 1] : void 0,
      g = null,
      E;
    (l === d
      ? ((c += 2), (u += 2), h !== f && ((g = d), (E = f)))
      : d === null || (l !== null && l < d)
        ? ((c += 2), (g = l))
        : ((u += 2), (g = d), (E = f)),
      g !== null && WE(e, t, n, r, g, E, s, a),
      (l = c < o.length ? o[c] : null),
      (d = u < i.length ? i[u] : null));
  }
}
function WE(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let c = e.data,
    u = c[a + 1],
    l = cN(u) ? rv(c, t, n, o, fo(u), s) : void 0;
  if (!cc(l)) {
    cc(i) || (sN(u) && (i = rv(c, null, n, o, a, s)));
    let d = td(en(), n);
    m_(r, s, d, o, i);
  }
}
function rv(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let c = e[o],
      u = Array.isArray(c),
      l = u ? c[1] : c,
      d = l === null,
      h = n[o + 1];
    h === je && (h = d ? Te : void 0);
    let f = d ? ga(h, r) : l === r ? h : void 0;
    if ((u && !cc(f) && (f = ga(c, r)), cc(f) && ((a = f), s))) return a;
    let g = e[o + 1];
    o = s ? vr(g) : fo(g);
  }
  if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = ga(c, r));
  }
  return a;
}
function cc(e) {
  return e !== void 0;
}
function SN(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = Kt(qe(e)))),
    e
  );
}
function qE(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function _N(e, t = "") {
  let n = N(),
    r = ne(),
    o = e + U,
    i = r.firstCreatePass ? Eo(r, o, 1, t, null) : r.data[o],
    s = YE(r, n, i, t, e);
  ((n[o] = s), Na() && sh(r, n, s, i), no(i, !1));
}
var YE = (e, t, n, r, o) => (tn(!0), uD(t[q], r));
function MN(e, t, n, r, o) {
  let i = !gc(t, n);
  if ((tn(i), i)) return uD(t[q], r);
  let s = t[Ne];
  return bc(s, e, t, n);
}
function ZE() {
  YE = MN;
}
function NN(e, t, n, r = "") {
  return Ge(e, Rn(), n) ? t + rr(n) + r : je;
}
function QE(e) {
  return ($h("", e), QE);
}
function $h(e, t, n) {
  let r = N(),
    o = NN(r, e, t, n);
  return (o !== je && RN(r, en(), o), $h);
}
function RN(e, t, n) {
  let r = td(t, e);
  XS(e[q], r, n);
}
function AN(e) {
  return Ge(N(), Rn(), e) ? rr(e) : je;
}
function xN(e, t, n) {
  let r = ne();
  if (r.firstCreatePass) {
    let o = At(e);
    (Mf(n, r.data, r.blueprint, o, !0), Mf(t, r.data, r.blueprint, o, !1));
  }
}
function Mf(e, t, n, r, o) {
  if (((e = ge(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Mf(e[i], t, n, r, o);
  else {
    let i = ne(),
      s = N(),
      a = de(),
      c = er(e) ? e : ge(e.provide),
      u = Kl(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (er(e) || !e.multi) {
      let f = new fr(u, o, V, null),
        g = Ud(c, t, o ? l : l + h, d);
      g === -1
        ? ($d(qa(a, s), i, c),
          Vd(i, e, t.length),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[g] = f), (s[g] = f));
    } else {
      let f = Ud(c, t, l + h, d),
        g = Ud(c, t, l, l + h),
        E = f >= 0 && n[f],
        y = g >= 0 && n[g];
      if ((o && !y) || (!o && !E)) {
        $d(qa(a, s), i, c);
        let v = PN(o ? kN : ON, n.length, o, r, u, e);
        (!o && y && (n[g].providerFactory = v),
          Vd(i, e, t.length, 0),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(v),
          s.push(v));
      } else {
        let v = KE(n[o ? g : f], u, !o && r);
        Vd(i, e, f > -1 ? f : g, v);
      }
      !o && r && y && n[g].componentProviders++;
    }
  }
}
function Vd(e, t, n, r) {
  let o = er(t),
    i = $m(t);
  if (o || i) {
    let c = (i ? ge(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
      let u = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = u.indexOf(n);
        l === -1 ? u.push(n, [r, c]) : u[l + 1].push(r, c);
      } else u.push(n, c);
    }
  }
}
function KE(e, t, n) {
  return (n && e.componentProviders++, e.multi.push(t) - 1);
}
function Ud(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function ON(e, t, n, r, o) {
  return Nf(this.multi, []);
}
function kN(e, t, n, r, o) {
  let i = this.multi,
    s;
  if (this.providerFactory) {
    let a = this.providerFactory.componentProviders,
      c = Di(r, r[b], this.providerFactory.index, o);
    ((s = c.slice(0, a)), Nf(i, s));
    for (let u = a; u < c.length; u++) s.push(c[u]);
  } else ((s = []), Nf(i, s));
  return s;
}
function Nf(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function PN(e, t, n, r, o, i) {
  let s = new fr(e, n, V, null);
  return (
    (s.multi = []),
    (s.index = t),
    (s.componentProviders = 0),
    KE(s, o, r && !n),
    s
  );
}
function FN(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => xN(r, o ? o(e) : e, t);
  };
}
function LN(e, t, n) {
  let r = ro() + e,
    o = N();
  return o[r] === je ? Nc(o, r, n ? t.call(n) : t()) : I0(o, r);
}
function jN(e, t, n, r) {
  return XE(N(), ro(), e, t, n, r);
}
function BN(e, t, n, r, o) {
  return UN(N(), ro(), e, t, n, r, o);
}
function VN(e, t, n, r, o, i) {
  return HN(N(), ro(), e, t, n, r, o, i);
}
function zh(e, t) {
  let n = e[t];
  return n === je ? void 0 : n;
}
function XE(e, t, n, r, o, i) {
  let s = t + n;
  return Ge(e, s, o) ? Nc(e, s + 1, i ? r.call(i, o) : r(o)) : zh(e, s + 1);
}
function UN(e, t, n, r, o, i, s) {
  let a = t + n;
  return KD(e, a, o, i)
    ? Nc(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : zh(e, a + 2);
}
function HN(e, t, n, r, o, i, s, a) {
  let c = t + n;
  return w0(e, c, o, i, s)
    ? Nc(e, c + 3, a ? r.call(a, o, i, s) : r(o, i, s))
    : zh(e, c + 3);
}
function $N(e, t) {
  let n = ne(),
    r,
    o = e + U;
  n.firstCreatePass
    ? ((r = zN(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = bn(r.type, !0)),
    s,
    a = be(V);
  try {
    let c = Wa(!1),
      u = i();
    return (Wa(c), rd(n, N(), o, u), u);
  } finally {
    be(a);
  }
}
function zN(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function GN(e, t, n) {
  let r = e + U,
    o = N(),
    i = nd(o, r);
  return WN(o, r) ? XE(o, ro(), t, i.transform, n, i) : i.transform(n);
}
function WN(e, t) {
  return e[b].data[t].pure;
}
function qN(e, t) {
  return Cc(e, t);
}
var uc = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
      ((this.ngModuleFactory = t), (this.componentFactories = n));
    }
  },
  Gh = (() => {
    class e {
      compileModuleSync(n) {
        return new nc(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Yl(n),
          i = sD(o.declarations).reduce((s, a) => {
            let c = St(a);
            return (c && s.push(new gr(c)), s);
          }, []);
        return new uc(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var YN = (() => {
  class e {
    zone = p(Y);
    changeDetectionScheduler = p(Xt);
    applicationRef = p(gt);
    applicationErrorHandler = p(Ae);
    _onMicrotaskEmptySubscription;
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.changeDetectionScheduler.runningTick ||
                this.zone.run(() => {
                  try {
                    ((this.applicationRef.dirtyFlags |= 1),
                      this.applicationRef._tick());
                  } catch (n) {
                    this.applicationErrorHandler(n);
                  }
                });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function JE({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new Y(W(w({}, eI()), { scheduleInRootZone: n }))),
    [
      { provide: Y, useFactory: e },
      {
        provide: Tt,
        multi: !0,
        useFactory: () => {
          let r = p(YN, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: Tt,
        multi: !0,
        useFactory: () => {
          let r = p(ZN);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: bd, useValue: !0 } : [],
      { provide: Td, useValue: n ?? vE },
      {
        provide: Ae,
        useFactory: () => {
          let r = p(Y),
            o = p(re),
            i;
          return (s) => {
            r.runOutsideAngular(() => {
              o.destroyed && !i
                ? setTimeout(() => {
                    throw s;
                  })
                : ((i ??= o.get(ct)), i.handleError(s));
            });
          };
        },
      },
    ]
  );
}
function eI(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var ZN = (() => {
  class e {
    subscription = new X();
    initialized = !1;
    zone = p(Y);
    pendingTasks = p(xt);
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      (!this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              (Y.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                }));
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            (Y.assertInAngularZone(), (n ??= this.pendingTasks.add()));
          }),
        ));
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
var tI = (() => {
  class e {
    applicationErrorHandler = p(Ae);
    appRef = p(gt);
    taskService = p(xt);
    ngZone = p(Y);
    zonelessEnabled = p(pi);
    tracing = p(Er, { optional: !0 });
    disableScheduling = p(bd, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new X();
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(rc) : null;
    scheduleInRootZone =
      !this.zonelessEnabled &&
      this.zoneIsDefined &&
      (p(Td, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() {
      (this.subscriptions.add(
        this.appRef.afterTick.subscribe(() => {
          this.runningTick || this.cleanup();
        }),
      ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof oc || !this.zoneIsDefined)));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      let r = !1;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 6: {
          ((this.appRef.dirtyFlags |= 2), (r = !0));
          break;
        }
        case 12: {
          ((this.appRef.dirtyFlags |= 16), (r = !0));
          break;
        }
        case 13: {
          ((this.appRef.dirtyFlags |= 2), (r = !0));
          break;
        }
        case 11: {
          r = !0;
          break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (
        ((this.appRef.tracingSnapshot =
          this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null),
        !this.shouldScheduleTick(r))
      )
        return;
      let o = this.useMicrotaskScheduler ? Gy : DE;
      ((this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick()),
            )));
    }
    shouldScheduleTick(n) {
      return !(
        (this.disableScheduling && !n) ||
        this.appRef.destroyed ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(rc + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
      }
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            ((this.runningTick = !0), this.appRef._tick());
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (r) {
        (this.taskService.remove(n), this.applicationErrorHandler(r));
      } finally {
        this.cleanup();
      }
      ((this.useMicrotaskScheduler = !0),
        Gy(() => {
          ((this.useMicrotaskScheduler = !1), this.taskService.remove(n));
        }));
    }
    ngOnDestroy() {
      (this.subscriptions.unsubscribe(), this.cleanup());
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        ((this.pendingRenderTaskId = null), this.taskService.remove(n));
      }
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function QN() {
  return (typeof $localize < "u" && $localize.locale) || Fi;
}
var Uc = new C("", {
  providedIn: "root",
  factory: () => p(Uc, { optional: !0, skipSelf: !0 }) || QN(),
});
function bo(e) {
  return Nm(e);
}
function Li(e, t) {
  return xs(e, t?.equal);
}
var nI = class {
  [Ie];
  constructor(t) {
    this[Ie] = t;
  }
  destroy() {
    this[Ie].destroy();
  }
};
var cI = Symbol("InputSignalNode#UNSET"),
  hR = W(w({}, Os), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
      jr(e, t);
    },
  });
function uI(e, t) {
  let n = Object.create(hR);
  ((n.value = e), (n.transformFn = t?.transform));
  function r() {
    if ((Pr(n), n.value === cI)) {
      let o = null;
      throw new I(-950, o);
    }
    return n.value;
  }
  return ((r[Ie] = n), r);
}
var $c = class {
    attributeName;
    constructor(t) {
      this.attributeName = t;
    }
    __NG_ELEMENT_ID__ = () => Mi(this.attributeName);
    toString() {
      return `HostAttributeToken ${this.attributeName}`;
    }
  },
  pR = new C("");
pR.__NG_ELEMENT_ID__ = (e) => {
  let t = de();
  if (t === null) throw new I(204, !1);
  if (t.type & 2) return t.value;
  if (e & 8) return null;
  throw new I(204, !1);
};
function rI(e, t) {
  return uI(e, t);
}
function gR(e) {
  return uI(cI, e);
}
var lI = ((rI.required = gR), rI);
var Wh = new C(""),
  mR = new C("");
function ji(e) {
  return !e.moduleRef;
}
function yR(e) {
  let t = ji(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(Y);
  return n.run(() => {
    ji(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(Ae),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({ next: r });
      }),
      ji(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(Wh);
      (s.add(i),
        t.onDestroy(() => {
          (o.unsubscribe(), s.delete(i));
        }));
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(Wh);
      (s.add(i),
        e.moduleRef.onDestroy(() => {
          (vi(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i));
        }));
    }
    return DR(r, n, () => {
      let i = t.get(xt),
        s = i.add(),
        a = t.get(Rh);
      return (
        a.runInitializers(),
        a.donePromise
          .then(() => {
            let c = t.get(Uc, Fi);
            if ((LE(c || Fi), !t.get(mR, !0)))
              return ji(e)
                ? t.get(gt)
                : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
            if (ji(e)) {
              let l = t.get(gt);
              return (
                e.rootComponent !== void 0 && l.bootstrap(e.rootComponent),
                l
              );
            } else
              return (vR?.(e.moduleRef, e.allPlatformModules), e.moduleRef);
          })
          .finally(() => void i.remove(s))
      );
    });
  });
}
var vR;
function DR(e, t, n) {
  try {
    let r = n();
    return wr(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e(r)), r);
  }
}
var Hc = null;
function ER(e = [], t) {
  return Se.create({
    name: t,
    providers: [
      { provide: ai, useValue: "platform" },
      { provide: Wh, useValue: new Set([() => (Hc = null)]) },
      ...e,
    ],
  });
}
function IR(e = []) {
  if (Hc) return Hc;
  let t = ER(e);
  return ((Hc = t), _E(), wR(t), t);
}
function wR(e) {
  let t = e.get(dc, null);
  he(e, () => {
    t?.forEach((n) => n());
  });
}
function I4() {
  return !1;
}
var To = (() => {
  class e {
    static __NG_ELEMENT_ID__ = CR;
  }
  return e;
})();
function CR(e) {
  return bR(de(), N(), (e & 16) === 16);
}
function bR(e, t, n) {
  if (Jt(e) && !n) {
    let r = nt(e.index, t);
    return new xn(r, r);
  } else if (e.type & 175) {
    let r = t[me];
    return new xn(r, t);
  }
  return null;
}
var qh = class {
    constructor() {}
    supports(t) {
      return Dh(t);
    }
    create(t) {
      return new Yh(t);
    }
  },
  TR = (e, t) => t,
  Yh = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) {
      this._trackByFn = t || TR;
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead,
        r = this._removalsHead,
        o = 0,
        i = null;
      for (; n || r; ) {
        let s = !r || (n && n.currentIndex < oI(r, o, i)) ? n : r,
          a = oI(s, o, i),
          c = s.currentIndex;
        if (s === r) (o--, (r = r._nextRemoved));
        else if (((n = n._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let u = a - o,
            l = c - o;
          if (u != l) {
            for (let h = 0; h < u; h++) {
              let f = h < i.length ? i[h] : (i[h] = 0),
                g = f + h;
              l <= g && g < u && (i[h] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = l - u;
          }
        }
        a !== c && t(s, a, c);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n);
    }
    diff(t) {
      if ((t == null && (t = []), !Dh(t))) throw new I(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead,
        r = !1,
        o,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          ((i = t[a]),
            (s = this._trackByFn(a, i)),
            n === null || !Object.is(n.trackById, s)
              ? ((n = this._mismatch(n, i, s, a)), (r = !0))
              : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            (n = n._next));
      } else
        ((o = 0),
          QD(t, (a) => {
            ((s = this._trackByFn(o, a)),
              n === null || !Object.is(n.trackById, s)
                ? ((n = this._mismatch(n, a, s, o)), (r = !0))
                : (r && (n = this._verifyReinsertion(n, a, s, o)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              (n = n._next),
              o++);
          }),
          (this.length = o));
      return (this._truncate(n), (this.collection = t), this.isDirty);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        ((this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null));
      }
    }
    _mismatch(t, n, r, o) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(r, null)),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, o))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(r, o)),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new Zh(n, r), i, o))),
        t
      );
    }
    _verifyReinsertion(t, n, r, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(r, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, o))
          : t.currentIndex != o &&
            ((t.currentIndex = o), this._addToMoves(t, o)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let n = t._next;
        (this._addToRemovals(this._unlink(t)), (t = n));
      }
      (this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null));
    }
    _reinsertAfter(t, n, r) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved,
        i = t._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
      );
    }
    _moveAfter(t, n, r) {
      return (
        this._unlink(t),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
      );
    }
    _addAfter(t, n, r) {
      return (
        this._insertAfter(t, n, r),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, n, r) {
      let o = n === null ? this._itHead : n._next;
      return (
        (t._next = o),
        (t._prev = n),
        o === null ? (this._itTail = t) : (o._prev = t),
        n === null ? (this._itHead = t) : (n._next = t),
        this._linkedRecords === null && (this._linkedRecords = new zc()),
        this._linkedRecords.put(t),
        (t.currentIndex = r),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev,
        r = t._next;
      return (
        n === null ? (this._itHead = r) : (n._next = r),
        r === null ? (this._itTail = n) : (r._prev = n),
        t
      );
    }
    _addToMoves(t, n) {
      return (
        t.previousIndex === n ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new zc()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, n) {
      return (
        (t.item = n),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  Zh = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) {
      ((this.item = t), (this.trackById = n));
    }
  },
  Qh = class {
    _head = null;
    _tail = null;
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, n) {
      let r;
      for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
          return r;
      return null;
    }
    remove(t) {
      let n = t._prevDup,
        r = t._nextDup;
      return (
        n === null ? (this._head = r) : (n._nextDup = r),
        r === null ? (this._tail = n) : (r._prevDup = n),
        this._head === null
      );
    }
  },
  zc = class {
    map = new Map();
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      (r || ((r = new Qh()), this.map.set(n, r)), r.add(t));
    }
    get(t, n) {
      let r = t,
        o = this.map.get(r);
      return o ? o.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return (this.map.get(n).remove(t) && this.map.delete(n), t);
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function oI(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return (n && r < n.length && (o = n[r]), r + t + o);
}
var Kh = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || Mc(t);
    }
    create() {
      return new Xh();
    }
  },
  Xh = class {
    _records = new Map();
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let n;
      for (n = this._mapHead; n !== null; n = n._next) t(n);
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachChangedItem(t) {
      let n;
      for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || Mc(t))) throw new I(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (r, o) => {
          if (n && n.key === o)
            (this._maybeAddToChanges(n, r),
              (this._appendAfter = n),
              (n = n._next));
          else {
            let i = this._getOrCreateRecordForKey(o, r);
            n = this._insertBeforeOrAppend(n, i);
          }
        }),
        n)
      ) {
        (n._prev && (n._prev._next = null), (this._removalsHead = n));
        for (let r = n; r !== null; r = r._nextRemoved)
          (r === this._mapHead && (this._mapHead = null),
            this._records.delete(r.key),
            (r._nextRemoved = r._next),
            (r.previousValue = r.currentValue),
            (r.currentValue = null),
            (r._prev = null),
            (r._next = null));
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, n) {
      if (t) {
        let r = t._prev;
        return (
          (n._next = t),
          (n._prev = r),
          (t._prev = n),
          r && (r._next = n),
          t === this._mapHead && (this._mapHead = n),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
          : (this._mapHead = n),
        (this._appendAfter = n),
        null
      );
    }
    _getOrCreateRecordForKey(t, n) {
      if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev,
          s = o._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let r = new Jh(t);
      return (
        this._records.set(t, r),
        (r.currentValue = n),
        this._addToAdditions(r),
        r
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        ((this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null));
      }
    }
    _maybeAddToChanges(t, n) {
      Object.is(n, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = n),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, n) {
      t instanceof Map
        ? t.forEach(n)
        : Object.keys(t).forEach((r) => n(t[r], r));
    }
  },
  Jh = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) {
      this.key = t;
    }
  };
function iI() {
  return new ep([new qh()]);
}
var ep = (() => {
  class e {
    factories;
    static ɵprov = D({ token: e, providedIn: "root", factory: iI });
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || iI()),
        deps: [[e, new Rf(), new lc()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new I(901, !1);
    }
  }
  return e;
})();
function sI() {
  return new tp([new Kh()]);
}
var tp = (() => {
  class e {
    static ɵprov = D({ token: e, providedIn: "root", factory: sI });
    factories;
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || sI()),
        deps: [[e, new Rf(), new lc()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r) return r;
      throw new I(901, !1);
    }
  }
  return e;
})();
function dI(e) {
  $(8);
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = IR(r),
      i = [JE({}), { provide: Xt, useExisting: tI }, gy, ...(n || [])],
      s = new bi({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return yR({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  } finally {
    $(9);
  }
}
var aI = !1;
function SR() {
  aI || ((aI = !0), Hv(), OE(), ZE(), FE(), hE(), oE(), $D(), bD());
}
function _R(e) {
  return e.whenStable();
}
function fI() {
  let e = [
    {
      provide: Ri,
      useFactory: () => {
        let t = !0;
        return (
          (t = !!p(yo, { optional: !0 })?.get(Uf, null)),
          t && Be("NgHydration"),
          t
        );
      },
    },
    {
      provide: Tt,
      useValue: () => {
        (jD(!1), p(Ri) && (Yv(go()), SR()));
      },
      multi: !0,
    },
  ];
  return (
    e.push(
      { provide: Vf, useFactory: () => p(Ri) },
      {
        provide: On,
        useFactory: () => {
          if (p(Ri)) {
            let t = p(gt);
            return () => {
              _R(t).then(() => {
                t.destroyed || VD(t);
              });
            };
          }
          return () => {};
        },
        multi: !0,
      },
    ),
    _t(e)
  );
}
function Bi(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function hI(e) {
  let t = St(e);
  if (!t) return null;
  let n = new gr(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
var mI = null;
function ln() {
  return mI;
}
function np(e) {
  mI ??= e;
}
var Vi = class {},
  Ui = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({
        token: e,
        factory: () => p(yI),
        providedIn: "platform",
      });
    }
    return e;
  })(),
  rp = new C(""),
  yI = (() => {
    class e extends Ui {
      _location;
      _history;
      _doc = p(Q);
      constructor() {
        (super(),
          (this._location = window.location),
          (this._history = window.history));
      }
      getBaseHrefFromDOM() {
        return ln().getBaseHref(this._doc);
      }
      onPopState(n) {
        let r = ln().getGlobalEventTarget(this._doc, "window");
        return (
          r.addEventListener("popstate", n, !1),
          () => r.removeEventListener("popstate", n)
        );
      }
      onHashChange(n) {
        let r = ln().getGlobalEventTarget(this._doc, "window");
        return (
          r.addEventListener("hashchange", n, !1),
          () => r.removeEventListener("hashchange", n)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(n) {
        this._location.pathname = n;
      }
      pushState(n, r, o) {
        this._history.pushState(n, r, o);
      }
      replaceState(n, r, o) {
        this._history.replaceState(n, r, o);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(n = 0) {
        this._history.go(n);
      }
      getState() {
        return this._history.state;
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      });
    }
    return e;
  })();
function Gc(e, t) {
  return e
    ? t
      ? e.endsWith("/")
        ? t.startsWith("/")
          ? e + t.slice(1)
          : e + t
        : t.startsWith("/")
          ? e + t
          : `${e}/${t}`
      : e
    : t;
}
function pI(e) {
  let t = e.search(/#|\?|$/);
  return e[t - 1] === "/" ? e.slice(0, t - 1) + e.slice(t) : e;
}
function mt(e) {
  return e && e[0] !== "?" ? `?${e}` : e;
}
var ot = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: () => p(qc), providedIn: "root" });
    }
    return e;
  })(),
  Wc = new C(""),
  qc = (() => {
    class e extends ot {
      _platformLocation;
      _baseHref;
      _removeListenerFns = [];
      constructor(n, r) {
        (super(),
          (this._platformLocation = n),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            p(Q).location?.origin ??
            ""));
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Gc(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + mt(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + mt(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + mt(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Ui), S(Wc, 8));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  kn = (() => {
    class e {
      _subject = new ie();
      _basePath;
      _locationStrategy;
      _urlChangeListeners = [];
      _urlChangeSubscription = null;
      constructor(n) {
        this._locationStrategy = n;
        let r = this._locationStrategy.getBaseHref();
        ((this._basePath = RR(pI(gI(r)))),
          this._locationStrategy.onPopState((o) => {
            this._subject.next({
              url: this.path(!0),
              pop: !0,
              state: o.state,
              type: o.type,
            });
          }));
      }
      ngOnDestroy() {
        (this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []));
      }
      path(n = !1) {
        return this.normalize(this._locationStrategy.path(n));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(n, r = "") {
        return this.path() == this.normalize(n + mt(r));
      }
      normalize(n) {
        return e.stripTrailingSlash(NR(this._basePath, gI(n)));
      }
      prepareExternalUrl(n) {
        return (
          n && n[0] !== "/" && (n = "/" + n),
          this._locationStrategy.prepareExternalUrl(n)
        );
      }
      go(n, r = "", o = null) {
        (this._locationStrategy.pushState(o, "", n, r),
          this._notifyUrlChangeListeners(
            this.prepareExternalUrl(n + mt(r)),
            o,
          ));
      }
      replaceState(n, r = "", o = null) {
        (this._locationStrategy.replaceState(o, "", n, r),
          this._notifyUrlChangeListeners(
            this.prepareExternalUrl(n + mt(r)),
            o,
          ));
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(n = 0) {
        this._locationStrategy.historyGo?.(n);
      }
      onUrlChange(n) {
        return (
          this._urlChangeListeners.push(n),
          (this._urlChangeSubscription ??= this.subscribe((r) => {
            this._notifyUrlChangeListeners(r.url, r.state);
          })),
          () => {
            let r = this._urlChangeListeners.indexOf(n);
            (this._urlChangeListeners.splice(r, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null)));
          }
        );
      }
      _notifyUrlChangeListeners(n = "", r) {
        this._urlChangeListeners.forEach((o) => o(n, r));
      }
      subscribe(n, r, o) {
        return this._subject.subscribe({
          next: n,
          error: r ?? void 0,
          complete: o ?? void 0,
        });
      }
      static normalizeQueryParams = mt;
      static joinWithSlash = Gc;
      static stripTrailingSlash = pI;
      static ɵfac = function (r) {
        return new (r || e)(S(ot));
      };
      static ɵprov = D({ token: e, factory: () => MR(), providedIn: "root" });
    }
    return e;
  })();
function MR() {
  return new kn(S(ot));
}
function NR(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function gI(e) {
  return e.replace(/\/index.html$/, "");
}
function RR(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
var Qc = (() => {
  class e extends ot {
    _platformLocation;
    _baseHref = "";
    _removeListenerFns = [];
    constructor(n, r) {
      (super(),
        (this._platformLocation = n),
        r != null && (this._baseHref = r));
    }
    ngOnDestroy() {
      for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
    }
    onPopState(n) {
      this._removeListenerFns.push(
        this._platformLocation.onPopState(n),
        this._platformLocation.onHashChange(n),
      );
    }
    getBaseHref() {
      return this._baseHref;
    }
    path(n = !1) {
      let r = this._platformLocation.hash ?? "#";
      return r.length > 0 ? r.substring(1) : r;
    }
    prepareExternalUrl(n) {
      let r = Gc(this._baseHref, n);
      return r.length > 0 ? "#" + r : r;
    }
    pushState(n, r, o, i) {
      let s =
        this.prepareExternalUrl(o + mt(i)) || this._platformLocation.pathname;
      this._platformLocation.pushState(n, r, s);
    }
    replaceState(n, r, o, i) {
      let s =
        this.prepareExternalUrl(o + mt(i)) || this._platformLocation.pathname;
      this._platformLocation.replaceState(n, r, s);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(n = 0) {
      this._platformLocation.historyGo?.(n);
    }
    static ɵfac = function (r) {
      return new (r || e)(S(Ui), S(Wc, 8));
    };
    static ɵprov = D({ token: e, factory: e.ɵfac });
  }
  return e;
})();
var op = /\s+/,
  vI = [],
  AR = (() => {
    class e {
      _ngEl;
      _renderer;
      initialClasses = vI;
      rawClass;
      stateMap = new Map();
      constructor(n, r) {
        ((this._ngEl = n), (this._renderer = r));
      }
      set klass(n) {
        this.initialClasses = n != null ? n.trim().split(op) : vI;
      }
      set ngClass(n) {
        this.rawClass = typeof n == "string" ? n.trim().split(op) : n;
      }
      ngDoCheck() {
        for (let r of this.initialClasses) this._updateState(r, !0);
        let n = this.rawClass;
        if (Array.isArray(n) || n instanceof Set)
          for (let r of n) this._updateState(r, !0);
        else if (n != null)
          for (let r of Object.keys(n)) this._updateState(r, !!n[r]);
        this._applyStateDiff();
      }
      _updateState(n, r) {
        let o = this.stateMap.get(n);
        o !== void 0
          ? (o.enabled !== r && ((o.changed = !0), (o.enabled = r)),
            (o.touched = !0))
          : this.stateMap.set(n, { enabled: r, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let n of this.stateMap) {
          let r = n[0],
            o = n[1];
          (o.changed
            ? (this._toggleClass(r, o.enabled), (o.changed = !1))
            : o.touched ||
              (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)),
            (o.touched = !1));
        }
      }
      _toggleClass(n, r) {
        ((n = n.trim()),
          n.length > 0 &&
            n.split(op).forEach((o) => {
              r
                ? this._renderer.addClass(this._ngEl.nativeElement, o)
                : this._renderer.removeClass(this._ngEl.nativeElement, o);
            }));
      }
      static ɵfac = function (r) {
        return new (r || e)(V(We), V(un));
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngClass", ""]],
        inputs: { klass: [0, "class", "klass"], ngClass: "ngClass" },
      });
    }
    return e;
  })();
var Yc = class {
    $implicit;
    ngForOf;
    index;
    count;
    constructor(t, n, r, o) {
      ((this.$implicit = t),
        (this.ngForOf = n),
        (this.index = r),
        (this.count = o));
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  II = (() => {
    class e {
      _viewContainer;
      _template;
      _differs;
      set ngForOf(n) {
        ((this._ngForOf = n), (this._ngForOfDirty = !0));
      }
      set ngForTrackBy(n) {
        this._trackByFn = n;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      _ngForOf = null;
      _ngForOfDirty = !0;
      _differ = null;
      _trackByFn;
      constructor(n, r, o) {
        ((this._viewContainer = n), (this._template = r), (this._differs = o));
      }
      set ngForTemplate(n) {
        n && (this._template = n);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let n = this._ngForOf;
          !this._differ &&
            n &&
            (this._differ = this._differs.find(n).create(this.ngForTrackBy));
        }
        if (this._differ) {
          let n = this._differ.diff(this._ngForOf);
          n && this._applyChanges(n);
        }
      }
      _applyChanges(n) {
        let r = this._viewContainer;
        n.forEachOperation((o, i, s) => {
          if (o.previousIndex == null)
            r.createEmbeddedView(
              this._template,
              new Yc(o.item, this._ngForOf, -1, -1),
              s === null ? void 0 : s,
            );
          else if (s == null) r.remove(i === null ? void 0 : i);
          else if (i !== null) {
            let a = r.get(i);
            (r.move(a, s), DI(a, o));
          }
        });
        for (let o = 0, i = r.length; o < i; o++) {
          let a = r.get(o).context;
          ((a.index = o), (a.count = i), (a.ngForOf = this._ngForOf));
        }
        n.forEachIdentityChange((o) => {
          let i = r.get(o.currentIndex);
          DI(i, o);
        });
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static ɵfac = function (r) {
        return new (r || e)(V(pt), V(an), V(ep));
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {
          ngForOf: "ngForOf",
          ngForTrackBy: "ngForTrackBy",
          ngForTemplate: "ngForTemplate",
        },
      });
    }
    return e;
  })();
function DI(e, t) {
  e.context.$implicit = t.item;
}
var xR = (() => {
    class e {
      _viewContainer;
      _context = new Zc();
      _thenTemplateRef = null;
      _elseTemplateRef = null;
      _thenViewRef = null;
      _elseViewRef = null;
      constructor(n, r) {
        ((this._viewContainer = n), (this._thenTemplateRef = r));
      }
      set ngIf(n) {
        ((this._context.$implicit = this._context.ngIf = n),
          this._updateView());
      }
      set ngIfThen(n) {
        (EI(n, !1),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView());
      }
      set ngIfElse(n) {
        (EI(n, !1),
          (this._elseTemplateRef = n),
          (this._elseViewRef = null),
          this._updateView());
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context,
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context,
              )));
      }
      static ngIfUseIfTypeGuard;
      static ngTemplateGuard_ngIf;
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static ɵfac = function (r) {
        return new (r || e)(V(pt), V(an));
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngIf", ""]],
        inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
      });
    }
    return e;
  })(),
  Zc = class {
    $implicit = null;
    ngIf = null;
  };
function EI(e, t) {
  if (e && !e.createEmbeddedView) throw new I(2020, !1);
}
var ip = class {
    _viewContainerRef;
    _templateRef;
    _created = !1;
    constructor(t, n) {
      ((this._viewContainerRef = t), (this._templateRef = n));
    }
    create() {
      ((this._created = !0),
        this._viewContainerRef.createEmbeddedView(this._templateRef));
    }
    destroy() {
      ((this._created = !1), this._viewContainerRef.clear());
    }
    enforceState(t) {
      t && !this._created
        ? this.create()
        : !t && this._created && this.destroy();
    }
  },
  wI = (() => {
    class e {
      _defaultViews = [];
      _defaultUsed = !1;
      _caseCount = 0;
      _lastCaseCheckIndex = 0;
      _lastCasesMatched = !1;
      _ngSwitch;
      set ngSwitch(n) {
        ((this._ngSwitch = n),
          this._caseCount === 0 && this._updateDefaultCases(!0));
      }
      _addCase() {
        return this._caseCount++;
      }
      _addDefault(n) {
        this._defaultViews.push(n);
      }
      _matchCase(n) {
        let r = n === this._ngSwitch;
        return (
          (this._lastCasesMatched ||= r),
          this._lastCaseCheckIndex++,
          this._lastCaseCheckIndex === this._caseCount &&
            (this._updateDefaultCases(!this._lastCasesMatched),
            (this._lastCaseCheckIndex = 0),
            (this._lastCasesMatched = !1)),
          r
        );
      }
      _updateDefaultCases(n) {
        if (this._defaultViews.length > 0 && n !== this._defaultUsed) {
          this._defaultUsed = n;
          for (let r of this._defaultViews) r.enforceState(n);
        }
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngSwitch", ""]],
        inputs: { ngSwitch: "ngSwitch" },
      });
    }
    return e;
  })(),
  OR = (() => {
    class e {
      ngSwitch;
      _view;
      ngSwitchCase;
      constructor(n, r, o) {
        ((this.ngSwitch = o), o._addCase(), (this._view = new ip(n, r)));
      }
      ngDoCheck() {
        this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
      }
      static ɵfac = function (r) {
        return new (r || e)(V(pt), V(an), V(wI, 9));
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngSwitchCase", ""]],
        inputs: { ngSwitchCase: "ngSwitchCase" },
      });
    }
    return e;
  })();
var kR = (() => {
    class e {
      _ngEl;
      _differs;
      _renderer;
      _ngStyle = null;
      _differ = null;
      constructor(n, r, o) {
        ((this._ngEl = n), (this._differs = r), (this._renderer = o));
      }
      set ngStyle(n) {
        ((this._ngStyle = n),
          !this._differ &&
            n &&
            (this._differ = this._differs.find(n).create()));
      }
      ngDoCheck() {
        if (this._differ) {
          let n = this._differ.diff(this._ngStyle);
          n && this._applyChanges(n);
        }
      }
      _setStyle(n, r) {
        let [o, i] = n.split("."),
          s = o.indexOf("-") === -1 ? void 0 : ft.DashCase;
        r != null
          ? this._renderer.setStyle(
              this._ngEl.nativeElement,
              o,
              i ? `${r}${i}` : r,
              s,
            )
          : this._renderer.removeStyle(this._ngEl.nativeElement, o, s);
      }
      _applyChanges(n) {
        (n.forEachRemovedItem((r) => this._setStyle(r.key, null)),
          n.forEachAddedItem((r) => this._setStyle(r.key, r.currentValue)),
          n.forEachChangedItem((r) => this._setStyle(r.key, r.currentValue)));
      }
      static ɵfac = function (r) {
        return new (r || e)(V(We), V(tp), V(un));
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngStyle", ""]],
        inputs: { ngStyle: "ngStyle" },
      });
    }
    return e;
  })(),
  PR = (() => {
    class e {
      _viewContainerRef;
      _viewRef = null;
      ngTemplateOutletContext = null;
      ngTemplateOutlet = null;
      ngTemplateOutletInjector = null;
      constructor(n) {
        this._viewContainerRef = n;
      }
      ngOnChanges(n) {
        if (this._shouldRecreateView(n)) {
          let r = this._viewContainerRef;
          if (
            (this._viewRef && r.remove(r.indexOf(this._viewRef)),
            !this.ngTemplateOutlet)
          ) {
            this._viewRef = null;
            return;
          }
          let o = this._createContextForwardProxy();
          this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
            injector: this.ngTemplateOutletInjector ?? void 0,
          });
        }
      }
      _shouldRecreateView(n) {
        return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
      }
      _createContextForwardProxy() {
        return new Proxy(
          {},
          {
            set: (n, r, o) =>
              this.ngTemplateOutletContext
                ? Reflect.set(this.ngTemplateOutletContext, r, o)
                : !1,
            get: (n, r, o) => {
              if (this.ngTemplateOutletContext)
                return Reflect.get(this.ngTemplateOutletContext, r, o);
            },
          },
        );
      }
      static ɵfac = function (r) {
        return new (r || e)(V(pt));
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["", "ngTemplateOutlet", ""]],
        inputs: {
          ngTemplateOutletContext: "ngTemplateOutletContext",
          ngTemplateOutlet: "ngTemplateOutlet",
          ngTemplateOutletInjector: "ngTemplateOutletInjector",
        },
        features: [ht],
      });
    }
    return e;
  })();
function FR(e, t) {
  return new I(2100, !1);
}
var sp = class {
    createSubscription(t, n, r) {
      return bo(() => t.subscribe({ next: n, error: r }));
    }
    dispose(t) {
      bo(() => t.unsubscribe());
    }
  },
  ap = class {
    createSubscription(t, n, r) {
      return (
        t.then(
          (o) => n?.(o),
          (o) => r?.(o),
        ),
        {
          unsubscribe: () => {
            ((n = null), (r = null));
          },
        }
      );
    }
    dispose(t) {
      t.unsubscribe();
    }
  },
  LR = new ap(),
  jR = new sp(),
  BR = (() => {
    class e {
      _ref;
      _latestValue = null;
      markForCheckOnValueUpdate = !0;
      _subscription = null;
      _obj = null;
      _strategy = null;
      applicationErrorHandler = p(Ae);
      constructor(n) {
        this._ref = n;
      }
      ngOnDestroy() {
        (this._subscription && this._dispose(), (this._ref = null));
      }
      transform(n) {
        if (!this._obj) {
          if (n)
            try {
              ((this.markForCheckOnValueUpdate = !1), this._subscribe(n));
            } finally {
              this.markForCheckOnValueUpdate = !0;
            }
          return this._latestValue;
        }
        return n !== this._obj
          ? (this._dispose(), this.transform(n))
          : this._latestValue;
      }
      _subscribe(n) {
        ((this._obj = n),
          (this._strategy = this._selectStrategy(n)),
          (this._subscription = this._strategy.createSubscription(
            n,
            (r) => this._updateLatestValue(n, r),
            (r) => this.applicationErrorHandler(r),
          )));
      }
      _selectStrategy(n) {
        if (wr(n)) return LR;
        if (Fc(n)) return jR;
        throw FR(e, n);
      }
      _dispose() {
        (this._strategy.dispose(this._subscription),
          (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null));
      }
      _updateLatestValue(n, r) {
        n === this._obj &&
          ((this._latestValue = r),
          this.markForCheckOnValueUpdate && this._ref?.markForCheck());
      }
      static ɵfac = function (r) {
        return new (r || e)(V(To, 16));
      };
      static ɵpipe = Ac({ name: "async", type: e, pure: !1 });
    }
    return e;
  })();
var VR = (() => {
  class e {
    transform(n) {
      return JSON.stringify(n, null, 2);
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵpipe = Ac({ name: "json", type: e, pure: !1 });
  }
  return e;
})();
var CI = (() => {
  class e {
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵmod = Pt({ type: e });
    static ɵinj = ut({});
  }
  return e;
})();
function Hi(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var Cr = class {};
function K5(e, t, n) {
  return Bh(e, t, n);
}
var up = "browser";
function X5(e) {
  return e === up;
}
var lp = (() => {
    class e {
      static ɵprov = D({
        token: e,
        providedIn: "root",
        factory: () => new cp(p(Q), window),
      });
    }
    return e;
  })(),
  cp = class {
    document;
    window;
    offset = () => [0, 0];
    constructor(t, n) {
      ((this.document = t), (this.window = n));
    }
    setOffset(t) {
      Array.isArray(t) ? (this.offset = () => t) : (this.offset = t);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(t, n) {
      this.window.scrollTo(W(w({}, n), { left: t[0], top: t[1] }));
    }
    scrollToAnchor(t, n) {
      let r = HR(this.document, t);
      r && (this.scrollToElement(r, n), r.focus());
    }
    setHistoryScrollRestoration(t) {
      try {
        this.window.history.scrollRestoration = t;
      } catch {
        console.warn(bt(2400, !1));
      }
    }
    scrollToElement(t, n) {
      let r = t.getBoundingClientRect(),
        o = r.left + this.window.pageXOffset,
        i = r.top + this.window.pageYOffset,
        s = this.offset();
      this.window.scrollTo(W(w({}, n), { left: o - s[0], top: i - s[1] }));
    }
  };
function HR(e, t) {
  let n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n) return n;
  if (
    typeof e.createTreeWalker == "function" &&
    e.body &&
    typeof e.body.attachShadow == "function"
  ) {
    let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT),
      o = r.currentNode;
    for (; o; ) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
        if (s) return s;
      }
      o = r.nextNode();
    }
  }
  return null;
}
var Xc = new C(""),
  gp = (() => {
    class e {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(n, r) {
        ((this._zone = r),
          n.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = n.slice().reverse()));
      }
      addEventListener(n, r, o, i) {
        return this._findPluginFor(r).addEventListener(n, r, o, i);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(n) {
        let r = this._eventNameToPlugin.get(n);
        if (r) return r;
        if (((r = this._plugins.find((i) => i.supports(n))), !r))
          throw new I(5101, !1);
        return (this._eventNameToPlugin.set(n, r), r);
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Xc), S(Y));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  $i = class {
    _doc;
    constructor(t) {
      this._doc = t;
    }
    manager;
  },
  dp = "ng-app-id";
function bI(e) {
  for (let t of e) t.remove();
}
function TI(e, t) {
  let n = t.createElement("style");
  return ((n.textContent = e), n);
}
function zR(e, t, n, r) {
  let o = e.head?.querySelectorAll(`style[${dp}="${t}"],link[${dp}="${t}"]`);
  if (o)
    for (let i of o)
      (i.removeAttribute(dp),
        i instanceof HTMLLinkElement
          ? r.set(i.href.slice(i.href.lastIndexOf("/") + 1), {
              usage: 0,
              elements: [i],
            })
          : i.textContent && n.set(i.textContent, { usage: 0, elements: [i] }));
}
function hp(e, t) {
  let n = t.createElement("link");
  return (n.setAttribute("rel", "stylesheet"), n.setAttribute("href", e), n);
}
var mp = (() => {
    class e {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      constructor(n, r, o, i = {}) {
        ((this.doc = n),
          (this.appId = r),
          (this.nonce = o),
          zR(n, r, this.inline, this.external),
          this.hosts.add(n.head));
      }
      addStyles(n, r) {
        for (let o of n) this.addUsage(o, this.inline, TI);
        r?.forEach((o) => this.addUsage(o, this.external, hp));
      }
      removeStyles(n, r) {
        for (let o of n) this.removeUsage(o, this.inline);
        r?.forEach((o) => this.removeUsage(o, this.external));
      }
      addUsage(n, r, o) {
        let i = r.get(n);
        i
          ? i.usage++
          : r.set(n, {
              usage: 1,
              elements: [...this.hosts].map((s) =>
                this.addElement(s, o(n, this.doc)),
              ),
            });
      }
      removeUsage(n, r) {
        let o = r.get(n);
        o && (o.usage--, o.usage <= 0 && (bI(o.elements), r.delete(n)));
      }
      ngOnDestroy() {
        for (let [, { elements: n }] of [...this.inline, ...this.external])
          bI(n);
        this.hosts.clear();
      }
      addHost(n) {
        this.hosts.add(n);
        for (let [r, { elements: o }] of this.inline)
          o.push(this.addElement(n, TI(r, this.doc)));
        for (let [r, { elements: o }] of this.external)
          o.push(this.addElement(n, hp(r, this.doc)));
      }
      removeHost(n) {
        this.hosts.delete(n);
      }
      addElement(n, r) {
        return (
          this.nonce && r.setAttribute("nonce", this.nonce),
          n.appendChild(r)
        );
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Q), S(Ni), S(fc, 8), S(mo));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  fp = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  yp = /%COMP%/g;
var _I = "%COMP%",
  GR = `_nghost-${_I}`,
  WR = `_ngcontent-${_I}`,
  qR = !0,
  YR = new C("", { providedIn: "root", factory: () => qR });
function ZR(e) {
  return WR.replace(yp, e);
}
function QR(e) {
  return GR.replace(yp, e);
}
function MI(e, t) {
  return t.map((n) => n.replace(yp, e));
}
var vp = (() => {
    class e {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(n, r, o, i, s, a, c, u = null, l = null) {
        ((this.eventManager = n),
          (this.sharedStylesHost = r),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = i),
          (this.doc = s),
          (this.platformId = a),
          (this.ngZone = c),
          (this.nonce = u),
          (this.tracingService = l),
          (this.platformIsServer = !1),
          (this.defaultRenderer = new zi(
            n,
            s,
            c,
            this.platformIsServer,
            this.tracingService,
          )));
      }
      createRenderer(n, r) {
        if (!n || !r) return this.defaultRenderer;
        let o = this.getOrCreateRenderer(n, r);
        return (
          o instanceof Kc
            ? o.applyToHost(n)
            : o instanceof Gi && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(n, r) {
        let o = this.rendererByCompId,
          i = o.get(r.id);
        if (!i) {
          let s = this.doc,
            a = this.ngZone,
            c = this.eventManager,
            u = this.sharedStylesHost,
            l = this.removeStylesOnCompDestroy,
            d = this.platformIsServer,
            h = this.tracingService;
          switch (r.encapsulation) {
            case on.Emulated:
              i = new Kc(c, u, r, this.appId, l, s, a, d, h);
              break;
            case on.ShadowDom:
              return new pp(c, u, n, r, s, a, this.nonce, d, h);
            default:
              i = new Gi(c, u, r, l, s, a, d, h);
              break;
          }
          o.set(r.id, i);
        }
        return i;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(n) {
        this.rendererByCompId.delete(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(
          S(gp),
          S(mp),
          S(Ni),
          S(YR),
          S(Q),
          S(mo),
          S(Y),
          S(fc),
          S(Er, 8),
        );
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  zi = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(t, n, r, o, i) {
      ((this.eventManager = t),
        (this.doc = n),
        (this.ngZone = r),
        (this.platformIsServer = o),
        (this.tracingService = i));
    }
    destroy() {}
    destroyNode = null;
    createElement(t, n) {
      return n
        ? this.doc.createElementNS(fp[n] || n, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, n) {
      (SI(t) ? t.content : t).appendChild(n);
    }
    insertBefore(t, n, r) {
      t && (SI(t) ? t.content : t).insertBefore(n, r);
    }
    removeChild(t, n) {
      n.remove();
    }
    selectRootElement(t, n) {
      let r = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!r) throw new I(-5104, !1);
      return (n || (r.textContent = ""), r);
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, n, r, o) {
      if (o) {
        n = o + ":" + n;
        let i = fp[o];
        i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
      } else t.setAttribute(n, r);
    }
    removeAttribute(t, n, r) {
      if (r) {
        let o = fp[r];
        o ? t.removeAttributeNS(o, n) : t.removeAttribute(`${r}:${n}`);
      } else t.removeAttribute(n);
    }
    addClass(t, n) {
      t.classList.add(n);
    }
    removeClass(t, n) {
      t.classList.remove(n);
    }
    setStyle(t, n, r, o) {
      o & (ft.DashCase | ft.Important)
        ? t.style.setProperty(n, r, o & ft.Important ? "important" : "")
        : (t.style[n] = r);
    }
    removeStyle(t, n, r) {
      r & ft.DashCase ? t.style.removeProperty(n) : (t.style[n] = "");
    }
    setProperty(t, n, r) {
      t != null && (t[n] = r);
    }
    setValue(t, n) {
      t.nodeValue = n;
    }
    listen(t, n, r, o) {
      if (
        typeof t == "string" &&
        ((t = ln().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new I(5102, !1);
      let i = this.decoratePreventDefault(r);
      return (
        this.tracingService?.wrapEventListener &&
          (i = this.tracingService.wrapEventListener(t, n, i)),
        this.eventManager.addEventListener(t, n, i, o)
      );
    }
    decoratePreventDefault(t) {
      return (n) => {
        if (n === "__ngUnwrap__") return t;
        t(n) === !1 && n.preventDefault();
      };
    }
  };
function SI(e) {
  return e.tagName === "TEMPLATE" && e.content !== void 0;
}
var pp = class extends zi {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(t, n, r, o, i, s, a, c, u) {
      (super(t, i, s, c, u),
        (this.sharedStylesHost = n),
        (this.hostEl = r),
        (this.shadowRoot = r.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot));
      let l = o.styles;
      l = MI(o.id, l);
      for (let h of l) {
        let f = document.createElement("style");
        (a && f.setAttribute("nonce", a),
          (f.textContent = h),
          this.shadowRoot.appendChild(f));
      }
      let d = o.getExternalStyles?.();
      if (d)
        for (let h of d) {
          let f = hp(h, i);
          (a && f.setAttribute("nonce", a), this.shadowRoot.appendChild(f));
        }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, n) {
      return super.appendChild(this.nodeOrShadowRoot(t), n);
    }
    insertBefore(t, n, r) {
      return super.insertBefore(this.nodeOrShadowRoot(t), n, r);
    }
    removeChild(t, n) {
      return super.removeChild(null, n);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Gi = class extends zi {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(t, n, r, o, i, s, a, c, u) {
      (super(t, i, s, a, c),
        (this.sharedStylesHost = n),
        (this.removeStylesOnCompDestroy = o));
      let l = r.styles;
      ((this.styles = u ? MI(u, l) : l),
        (this.styleUrls = r.getExternalStyles?.(u)));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  Kc = class extends Gi {
    contentAttr;
    hostAttr;
    constructor(t, n, r, o, i, s, a, c, u) {
      let l = o + "-" + r.id;
      (super(t, n, r, i, s, a, c, u, l),
        (this.contentAttr = ZR(l)),
        (this.hostAttr = QR(l)));
    }
    applyToHost(t) {
      (this.applyStyles(), this.setAttribute(t, this.hostAttr, ""));
    }
    createElement(t, n) {
      let r = super.createElement(t, n);
      return (super.setAttribute(r, this.contentAttr, ""), r);
    }
  };
var Jc = class e extends Vi {
    supportsDOMEvents = !0;
    static makeCurrent() {
      np(new e());
    }
    onAndCancel(t, n, r, o) {
      return (
        t.addEventListener(n, r, o),
        () => {
          t.removeEventListener(n, r, o);
        }
      );
    }
    dispatchEvent(t, n) {
      t.dispatchEvent(n);
    }
    remove(t) {
      t.remove();
    }
    createElement(t, n) {
      return ((n = n || this.getDefaultDocument()), n.createElement(t));
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, n) {
      return n === "window"
        ? window
        : n === "document"
          ? t
          : n === "body"
            ? t.body
            : null;
    }
    getBaseHref(t) {
      let n = KR();
      return n == null ? null : XR(n);
    }
    resetBaseElement() {
      Wi = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return Hi(document.cookie, t);
    }
  },
  Wi = null;
function KR() {
  return (
    (Wi = Wi || document.head.querySelector("base")),
    Wi ? Wi.getAttribute("href") : null
  );
}
function XR(e) {
  return new URL(e, document.baseURI).pathname;
}
var JR = (() => {
    class e {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  RI = (() => {
    class e extends $i {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return !0;
      }
      addEventListener(n, r, o, i) {
        return (
          n.addEventListener(r, o, i),
          () => this.removeEventListener(n, r, o, i)
        );
      }
      removeEventListener(n, r, o, i) {
        return n.removeEventListener(r, o, i);
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Q));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  NI = ["alt", "control", "meta", "shift"],
  eA = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  tA = {
    alt: (e) => e.altKey,
    control: (e) => e.ctrlKey,
    meta: (e) => e.metaKey,
    shift: (e) => e.shiftKey,
  },
  AI = (() => {
    class e extends $i {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return e.parseEventName(n) != null;
      }
      addEventListener(n, r, o, i) {
        let s = e.parseEventName(r),
          a = e.eventCallback(s.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => ln().onAndCancel(n, s.domEventName, a, i));
      }
      static parseEventName(n) {
        let r = n.toLowerCase().split("."),
          o = r.shift();
        if (r.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let i = e._normalizeKey(r.pop()),
          s = "",
          a = r.indexOf("code");
        if (
          (a > -1 && (r.splice(a, 1), (s = "code.")),
          NI.forEach((u) => {
            let l = r.indexOf(u);
            l > -1 && (r.splice(l, 1), (s += u + "."));
          }),
          (s += i),
          r.length != 0 || i.length === 0)
        )
          return null;
        let c = {};
        return ((c.domEventName = o), (c.fullKey = s), c);
      }
      static matchEventFullKeyCode(n, r) {
        let o = eA[n.key] || n.key,
          i = "";
        return (
          r.indexOf("code.") > -1 && ((o = n.code), (i = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              NI.forEach((s) => {
                if (s !== o) {
                  let a = tA[s];
                  a(n) && (i += s + ".");
                }
              }),
              (i += o),
              i === r)
        );
      }
      static eventCallback(n, r, o) {
        return (i) => {
          e.matchEventFullKeyCode(i, n) && o.runGuarded(() => r(i));
        };
      }
      static _normalizeKey(n) {
        return n === "esc" ? "escape" : n;
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Q));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })();
function nA(e, t) {
  let n = w({ rootComponent: e }, rA(t));
  return dI(n);
}
function rA(e) {
  return {
    appProviders: [...cA, ...(e?.providers ?? [])],
    platformProviders: aA,
  };
}
function oA() {
  Jc.makeCurrent();
}
function iA() {
  return new ct();
}
function sA() {
  return (Of(document), document);
}
var aA = [
  { provide: mo, useValue: up },
  { provide: dc, useValue: oA, multi: !0 },
  { provide: Q, useFactory: sA },
];
var cA = [
  { provide: ai, useValue: "root" },
  { provide: ct, useFactory: iA },
  { provide: Xc, useClass: RI, multi: !0, deps: [Q] },
  { provide: Xc, useClass: AI, multi: !0, deps: [Q] },
  vp,
  mp,
  gp,
  { provide: pr, useExisting: vp },
  { provide: Cr, useClass: JR },
  [],
];
var _o = class {},
  Mo = class {},
  vt = class e {
    headers;
    normalizedNames = new Map();
    lazyInit;
    lazyUpdate = null;
    constructor(t) {
      t
        ? typeof t == "string"
          ? (this.lazyInit = () => {
              ((this.headers = new Map()),
                t
                  .split(
                    `
`,
                  )
                  .forEach((n) => {
                    let r = n.indexOf(":");
                    if (r > 0) {
                      let o = n.slice(0, r),
                        i = n.slice(r + 1).trim();
                      this.addHeaderEntry(o, i);
                    }
                  }));
            })
          : typeof Headers < "u" && t instanceof Headers
            ? ((this.headers = new Map()),
              t.forEach((n, r) => {
                this.addHeaderEntry(r, n);
              }))
            : (this.lazyInit = () => {
                ((this.headers = new Map()),
                  Object.entries(t).forEach(([n, r]) => {
                    this.setHeaderEntries(n, r);
                  }));
              })
        : (this.headers = new Map());
    }
    has(t) {
      return (this.init(), this.headers.has(t.toLowerCase()));
    }
    get(t) {
      this.init();
      let n = this.headers.get(t.toLowerCase());
      return n && n.length > 0 ? n[0] : null;
    }
    keys() {
      return (this.init(), Array.from(this.normalizedNames.values()));
    }
    getAll(t) {
      return (this.init(), this.headers.get(t.toLowerCase()) || null);
    }
    append(t, n) {
      return this.clone({ name: t, value: n, op: "a" });
    }
    set(t, n) {
      return this.clone({ name: t, value: n, op: "s" });
    }
    delete(t, n) {
      return this.clone({ name: t, value: n, op: "d" });
    }
    maybeSetNormalizedName(t, n) {
      this.normalizedNames.has(n) || this.normalizedNames.set(n, t);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof e
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
          (this.lazyUpdate = null)));
    }
    copyFrom(t) {
      (t.init(),
        Array.from(t.headers.keys()).forEach((n) => {
          (this.headers.set(n, t.headers.get(n)),
            this.normalizedNames.set(n, t.normalizedNames.get(n)));
        }));
    }
    clone(t) {
      let n = new e();
      return (
        (n.lazyInit =
          this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this),
        (n.lazyUpdate = (this.lazyUpdate || []).concat([t])),
        n
      );
    }
    applyUpdate(t) {
      let n = t.name.toLowerCase();
      switch (t.op) {
        case "a":
        case "s":
          let r = t.value;
          if ((typeof r == "string" && (r = [r]), r.length === 0)) return;
          this.maybeSetNormalizedName(t.name, n);
          let o = (t.op === "a" ? this.headers.get(n) : void 0) || [];
          (o.push(...r), this.headers.set(n, o));
          break;
        case "d":
          let i = t.value;
          if (!i) (this.headers.delete(n), this.normalizedNames.delete(n));
          else {
            let s = this.headers.get(n);
            if (!s) return;
            ((s = s.filter((a) => i.indexOf(a) === -1)),
              s.length === 0
                ? (this.headers.delete(n), this.normalizedNames.delete(n))
                : this.headers.set(n, s));
          }
          break;
      }
    }
    addHeaderEntry(t, n) {
      let r = t.toLowerCase();
      (this.maybeSetNormalizedName(t, r),
        this.headers.has(r)
          ? this.headers.get(r).push(n)
          : this.headers.set(r, [n]));
    }
    setHeaderEntries(t, n) {
      let r = (Array.isArray(n) ? n : [n]).map((i) => i.toString()),
        o = t.toLowerCase();
      (this.headers.set(o, r), this.maybeSetNormalizedName(t, o));
    }
    forEach(t) {
      (this.init(),
        Array.from(this.normalizedNames.keys()).forEach((n) =>
          t(this.normalizedNames.get(n), this.headers.get(n)),
        ));
    }
  };
var nu = class {
  encodeKey(t) {
    return xI(t);
  }
  encodeValue(t) {
    return xI(t);
  }
  decodeKey(t) {
    return decodeURIComponent(t);
  }
  decodeValue(t) {
    return decodeURIComponent(t);
  }
};
function uA(e, t) {
  let n = new Map();
  return (
    e.length > 0 &&
      e
        .replace(/^\?/, "")
        .split("&")
        .forEach((o) => {
          let i = o.indexOf("="),
            [s, a] =
              i == -1
                ? [t.decodeKey(o), ""]
                : [t.decodeKey(o.slice(0, i)), t.decodeValue(o.slice(i + 1))],
            c = n.get(s) || [];
          (c.push(a), n.set(s, c));
        }),
    n
  );
}
var lA = /%(\d[a-f0-9])/gi,
  dA = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function xI(e) {
  return encodeURIComponent(e).replace(lA, (t, n) => dA[n] ?? t);
}
function eu(e) {
  return `${e}`;
}
var yt = class e {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(t = {}) {
    if (((this.encoder = t.encoder || new nu()), t.fromString)) {
      if (t.fromObject) throw new I(2805, !1);
      this.map = uA(t.fromString, this.encoder);
    } else
      t.fromObject
        ? ((this.map = new Map()),
          Object.keys(t.fromObject).forEach((n) => {
            let r = t.fromObject[n],
              o = Array.isArray(r) ? r.map(eu) : [eu(r)];
            this.map.set(n, o);
          }))
        : (this.map = null);
  }
  has(t) {
    return (this.init(), this.map.has(t));
  }
  get(t) {
    this.init();
    let n = this.map.get(t);
    return n ? n[0] : null;
  }
  getAll(t) {
    return (this.init(), this.map.get(t) || null);
  }
  keys() {
    return (this.init(), Array.from(this.map.keys()));
  }
  append(t, n) {
    return this.clone({ param: t, value: n, op: "a" });
  }
  appendAll(t) {
    let n = [];
    return (
      Object.keys(t).forEach((r) => {
        let o = t[r];
        Array.isArray(o)
          ? o.forEach((i) => {
              n.push({ param: r, value: i, op: "a" });
            })
          : n.push({ param: r, value: o, op: "a" });
      }),
      this.clone(n)
    );
  }
  set(t, n) {
    return this.clone({ param: t, value: n, op: "s" });
  }
  delete(t, n) {
    return this.clone({ param: t, value: n, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((t) => {
          let n = this.encoder.encodeKey(t);
          return this.map
            .get(t)
            .map((r) => n + "=" + this.encoder.encodeValue(r))
            .join("&");
        })
        .filter((t) => t !== "")
        .join("&")
    );
  }
  clone(t) {
    let n = new e({ encoder: this.encoder });
    return (
      (n.cloneFrom = this.cloneFrom || this),
      (n.updates = (this.updates || []).concat(t)),
      n
    );
  }
  init() {
    (this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
        this.updates.forEach((t) => {
          switch (t.op) {
            case "a":
            case "s":
              let n = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
              (n.push(eu(t.value)), this.map.set(t.param, n));
              break;
            case "d":
              if (t.value !== void 0) {
                let r = this.map.get(t.param) || [],
                  o = r.indexOf(eu(t.value));
                (o !== -1 && r.splice(o, 1),
                  r.length > 0
                    ? this.map.set(t.param, r)
                    : this.map.delete(t.param));
              } else {
                this.map.delete(t.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null)));
  }
};
var ru = class {
  map = new Map();
  set(t, n) {
    return (this.map.set(t, n), this);
  }
  get(t) {
    return (
      this.map.has(t) || this.map.set(t, t.defaultValue()),
      this.map.get(t)
    );
  }
  delete(t) {
    return (this.map.delete(t), this);
  }
  has(t) {
    return this.map.has(t);
  }
  keys() {
    return this.map.keys();
  }
};
function fA(e) {
  switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function OI(e) {
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer;
}
function kI(e) {
  return typeof Blob < "u" && e instanceof Blob;
}
function PI(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function hA(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
var qi = "Content-Type",
  ou = "Accept",
  Cp = "X-Request-URL",
  jI = "text/plain",
  BI = "application/json",
  VI = `${BI}, ${jI}, */*`,
  So = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(t, n, r, o) {
      ((this.url = n), (this.method = t.toUpperCase()));
      let i;
      if (
        (fA(this.method) || o
          ? ((this.body = r !== void 0 ? r : null), (i = o))
          : (i = r),
        i)
      ) {
        if (
          ((this.reportProgress = !!i.reportProgress),
          (this.withCredentials = !!i.withCredentials),
          (this.keepalive = !!i.keepalive),
          i.responseType && (this.responseType = i.responseType),
          i.headers && (this.headers = i.headers),
          i.context && (this.context = i.context),
          i.params && (this.params = i.params),
          i.priority && (this.priority = i.priority),
          i.cache && (this.cache = i.cache),
          i.credentials && (this.credentials = i.credentials),
          typeof i.timeout == "number")
        ) {
          if (i.timeout < 1 || !Number.isInteger(i.timeout))
            throw new Error("");
          this.timeout = i.timeout;
        }
        (i.mode && (this.mode = i.mode),
          i.redirect && (this.redirect = i.redirect),
          (this.transferCache = i.transferCache));
      }
      if (
        ((this.headers ??= new vt()), (this.context ??= new ru()), !this.params)
      )
        ((this.params = new yt()), (this.urlWithParams = n));
      else {
        let s = this.params.toString();
        if (s.length === 0) this.urlWithParams = n;
        else {
          let a = n.indexOf("?"),
            c = a === -1 ? "?" : a < n.length - 1 ? "&" : "";
          this.urlWithParams = n + c + s;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
            OI(this.body) ||
            kI(this.body) ||
            PI(this.body) ||
            hA(this.body)
          ? this.body
          : this.body instanceof yt
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || PI(this.body)
        ? null
        : kI(this.body)
          ? this.body.type || null
          : OI(this.body)
            ? null
            : typeof this.body == "string"
              ? jI
              : this.body instanceof yt
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? BI
                  : null;
    }
    clone(t = {}) {
      let n = t.method || this.method,
        r = t.url || this.url,
        o = t.responseType || this.responseType,
        i = t.keepalive ?? this.keepalive,
        s = t.priority || this.priority,
        a = t.cache || this.cache,
        c = t.mode || this.mode,
        u = t.redirect || this.redirect,
        l = t.credentials || this.credentials,
        d = t.transferCache ?? this.transferCache,
        h = t.timeout ?? this.timeout,
        f = t.body !== void 0 ? t.body : this.body,
        g = t.withCredentials ?? this.withCredentials,
        E = t.reportProgress ?? this.reportProgress,
        y = t.headers || this.headers,
        v = t.params || this.params,
        x = t.context ?? this.context;
      return (
        t.setHeaders !== void 0 &&
          (y = Object.keys(t.setHeaders).reduce(
            (H, B) => H.set(B, t.setHeaders[B]),
            y,
          )),
        t.setParams &&
          (v = Object.keys(t.setParams).reduce(
            (H, B) => H.set(B, t.setParams[B]),
            v,
          )),
        new e(n, r, f, {
          params: v,
          headers: y,
          context: x,
          reportProgress: E,
          responseType: o,
          withCredentials: g,
          transferCache: d,
          keepalive: i,
          cache: a,
          priority: s,
          timeout: h,
          mode: c,
          redirect: u,
          credentials: l,
        })
      );
    }
  },
  dn = (function (e) {
    return (
      (e[(e.Sent = 0)] = "Sent"),
      (e[(e.UploadProgress = 1)] = "UploadProgress"),
      (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
      (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
      (e[(e.Response = 4)] = "Response"),
      (e[(e.User = 5)] = "User"),
      e
    );
  })(dn || {}),
  No = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(t, n = 200, r = "OK") {
      ((this.headers = t.headers || new vt()),
        (this.status = t.status !== void 0 ? t.status : n),
        (this.statusText = t.statusText || r),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300));
    }
  },
  Yi = class e extends No {
    constructor(t = {}) {
      super(t);
    }
    type = dn.ResponseHeader;
    clone(t = {}) {
      return new e({
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  br = class e extends No {
    body;
    constructor(t = {}) {
      (super(t), (this.body = t.body !== void 0 ? t.body : null));
    }
    type = dn.Response;
    clone(t = {}) {
      return new e({
        body: t.body !== void 0 ? t.body : this.body,
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  Ft = class extends No {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(t) {
      (super(t, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${t.url || "(unknown url)"}`)
          : (this.message = `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`),
        (this.error = t.error || null));
    }
  },
  UI = 200,
  pA = 204;
function Dp(e, t) {
  return {
    body: t,
    headers: e.headers,
    context: e.context,
    observe: e.observe,
    params: e.params,
    reportProgress: e.reportProgress,
    responseType: e.responseType,
    withCredentials: e.withCredentials,
    transferCache: e.transferCache,
    keepalive: e.keepalive,
    priority: e.priority,
    cache: e.cache,
    mode: e.mode,
    redirect: e.redirect,
  };
}
var su = (() => {
    class e {
      handler;
      constructor(n) {
        this.handler = n;
      }
      request(n, r, o = {}) {
        let i;
        if (n instanceof So) i = n;
        else {
          let c;
          o.headers instanceof vt ? (c = o.headers) : (c = new vt(o.headers));
          let u;
          (o.params &&
            (o.params instanceof yt
              ? (u = o.params)
              : (u = new yt({ fromObject: o.params }))),
            (i = new So(n, r, o.body !== void 0 ? o.body : null, {
              headers: c,
              context: o.context,
              params: u,
              reportProgress: o.reportProgress,
              responseType: o.responseType || "json",
              withCredentials: o.withCredentials,
              transferCache: o.transferCache,
              keepalive: o.keepalive,
              priority: o.priority,
              cache: o.cache,
              mode: o.mode,
              redirect: o.redirect,
              credentials: o.credentials,
            })));
        }
        let s = _(i).pipe(Ct((c) => this.handler.handle(c)));
        if (n instanceof So || o.observe === "events") return s;
        let a = s.pipe(ce((c) => c instanceof br));
        switch (o.observe || "body") {
          case "body":
            switch (i.responseType) {
              case "arraybuffer":
                return a.pipe(
                  k((c) => {
                    if (c.body !== null && !(c.body instanceof ArrayBuffer))
                      throw new I(2806, !1);
                    return c.body;
                  }),
                );
              case "blob":
                return a.pipe(
                  k((c) => {
                    if (c.body !== null && !(c.body instanceof Blob))
                      throw new I(2807, !1);
                    return c.body;
                  }),
                );
              case "text":
                return a.pipe(
                  k((c) => {
                    if (c.body !== null && typeof c.body != "string")
                      throw new I(2808, !1);
                    return c.body;
                  }),
                );
              case "json":
              default:
                return a.pipe(k((c) => c.body));
            }
          case "response":
            return a;
          default:
            throw new I(2809, !1);
        }
      }
      delete(n, r = {}) {
        return this.request("DELETE", n, r);
      }
      get(n, r = {}) {
        return this.request("GET", n, r);
      }
      head(n, r = {}) {
        return this.request("HEAD", n, r);
      }
      jsonp(n, r) {
        return this.request("JSONP", n, {
          params: new yt().append(r, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(n, r = {}) {
        return this.request("OPTIONS", n, r);
      }
      patch(n, r, o = {}) {
        return this.request("PATCH", n, Dp(o, r));
      }
      post(n, r, o = {}) {
        return this.request("POST", n, Dp(o, r));
      }
      put(n, r, o = {}) {
        return this.request("PUT", n, Dp(o, r));
      }
      static ɵfac = function (r) {
        return new (r || e)(S(_o));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  gA = /^\)\]\}',?\n/;
function FI(e) {
  if (e.url) return e.url;
  let t = Cp.toLocaleLowerCase();
  return e.headers.get(t);
}
var HI = new C(""),
  tu = (() => {
    class e {
      fetchImpl =
        p(Ep, { optional: !0 })?.fetch ?? ((...n) => globalThis.fetch(...n));
      ngZone = p(Y);
      destroyRef = p(nn);
      destroyed = !1;
      constructor() {
        this.destroyRef.onDestroy(() => {
          this.destroyed = !0;
        });
      }
      handle(n) {
        return new P((r) => {
          let o = new AbortController();
          this.doRequest(n, o.signal, r).then(Ip, (s) =>
            r.error(new Ft({ error: s })),
          );
          let i;
          return (
            n.timeout &&
              (i = this.ngZone.runOutsideAngular(() =>
                setTimeout(() => {
                  o.signal.aborted ||
                    o.abort(
                      new DOMException("signal timed out", "TimeoutError"),
                    );
                }, n.timeout),
              )),
            () => {
              (i !== void 0 && clearTimeout(i), o.abort());
            }
          );
        });
      }
      doRequest(n, r, o) {
        return yn(this, null, function* () {
          let i = this.createRequestInit(n),
            s;
          try {
            let f = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(n.urlWithParams, w({ signal: r }, i)),
            );
            (mA(f), o.next({ type: dn.Sent }), (s = yield f));
          } catch (f) {
            o.error(
              new Ft({
                error: f,
                status: f.status ?? 0,
                statusText: f.statusText,
                url: n.urlWithParams,
                headers: f.headers,
              }),
            );
            return;
          }
          let a = new vt(s.headers),
            c = s.statusText,
            u = FI(s) ?? n.urlWithParams,
            l = s.status,
            d = null;
          if (
            (n.reportProgress &&
              o.next(new Yi({ headers: a, status: l, statusText: c, url: u })),
            s.body)
          ) {
            let f = s.headers.get("content-length"),
              g = [],
              E = s.body.getReader(),
              y = 0,
              v,
              x,
              H = typeof Zone < "u" && Zone.current,
              B = !1;
            if (
              (yield this.ngZone.runOutsideAngular(() =>
                yn(this, null, function* () {
                  for (;;) {
                    if (this.destroyed) {
                      (yield E.cancel(), (B = !0));
                      break;
                    }
                    let { done: zt, value: Gt } = yield E.read();
                    if (zt) break;
                    if ((g.push(Gt), (y += Gt.length), n.reportProgress)) {
                      x =
                        n.responseType === "text"
                          ? (x ?? "") +
                            (v ??= new TextDecoder()).decode(Gt, { stream: !0 })
                          : void 0;
                      let Es = () =>
                        o.next({
                          type: dn.DownloadProgress,
                          total: f ? +f : void 0,
                          loaded: y,
                          partialText: x,
                        });
                      H ? H.run(Es) : Es();
                    }
                  }
                }),
              ),
              B)
            ) {
              o.complete();
              return;
            }
            let ae = this.concatChunks(g, y);
            try {
              let zt = s.headers.get(qi) ?? "";
              d = this.parseBody(n, ae, zt, l);
            } catch (zt) {
              o.error(
                new Ft({
                  error: zt,
                  headers: new vt(s.headers),
                  status: s.status,
                  statusText: s.statusText,
                  url: FI(s) ?? n.urlWithParams,
                }),
              );
              return;
            }
          }
          (l === 0 && (l = d ? UI : 0),
            l >= 200 && l < 300
              ? (o.next(
                  new br({
                    body: d,
                    headers: a,
                    status: l,
                    statusText: c,
                    url: u,
                  }),
                ),
                o.complete())
              : o.error(
                  new Ft({
                    error: d,
                    headers: a,
                    status: l,
                    statusText: c,
                    url: u,
                  }),
                ));
        });
      }
      parseBody(n, r, o, i) {
        switch (n.responseType) {
          case "json":
            let s = new TextDecoder().decode(r).replace(gA, "");
            if (s === "") return null;
            try {
              return JSON.parse(s);
            } catch (a) {
              if (i < 200 || i >= 300) return s;
              throw a;
            }
          case "text":
            return new TextDecoder().decode(r);
          case "blob":
            return new Blob([r], { type: o });
          case "arraybuffer":
            return r.buffer;
        }
      }
      createRequestInit(n) {
        let r = {},
          o;
        if (
          ((o = n.credentials),
          n.withCredentials && (o = "include"),
          n.headers.forEach((i, s) => (r[i] = s.join(","))),
          n.headers.has(ou) || (r[ou] = VI),
          !n.headers.has(qi))
        ) {
          let i = n.detectContentTypeHeader();
          i !== null && (r[qi] = i);
        }
        return {
          body: n.serializeBody(),
          method: n.method,
          headers: r,
          credentials: o,
          keepalive: n.keepalive,
          cache: n.cache,
          priority: n.priority,
          mode: n.mode,
          redirect: n.redirect,
        };
      }
      concatChunks(n, r) {
        let o = new Uint8Array(r),
          i = 0;
        for (let s of n) (o.set(s, i), (i += s.length));
        return o;
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  Ep = class {};
function Ip() {}
function mA(e) {
  e.then(Ip, Ip);
}
function $I(e, t) {
  return t(e);
}
function yA(e, t) {
  return (n, r) => t.intercept(n, { handle: (o) => e(o, r) });
}
function vA(e, t, n) {
  return (r, o) => he(n, () => t(r, (i) => e(i, o)));
}
var zI = new C(""),
  bp = new C(""),
  Tp = new C(""),
  Sp = new C("", { providedIn: "root", factory: () => !0 });
function DA() {
  let e = null;
  return (t, n) => {
    e === null && (e = (p(zI, { optional: !0 }) ?? []).reduceRight(yA, $I));
    let r = p(oo);
    if (p(Sp)) {
      let i = r.add();
      return e(t, n).pipe(Cn(i));
    } else return e(t, n);
  };
}
var iu = (() => {
  class e extends _o {
    backend;
    injector;
    chain = null;
    pendingTasks = p(oo);
    contributeToStability = p(Sp);
    constructor(n, r) {
      (super(), (this.backend = n), (this.injector = r));
    }
    handle(n) {
      if (this.chain === null) {
        let r = Array.from(
          new Set([...this.injector.get(bp), ...this.injector.get(Tp, [])]),
        );
        this.chain = r.reduceRight((o, i) => vA(o, i, this.injector), $I);
      }
      if (this.contributeToStability) {
        let r = this.pendingTasks.add();
        return this.chain(n, (o) => this.backend.handle(o)).pipe(Cn(r));
      } else return this.chain(n, (r) => this.backend.handle(r));
    }
    static ɵfac = function (r) {
      return new (r || e)(S(Mo), S(re));
    };
    static ɵprov = D({ token: e, factory: e.ɵfac });
  }
  return e;
})();
var EA = /^\)\]\}',?\n/,
  IA = RegExp(`^${Cp}:`, "m");
function wA(e) {
  return "responseURL" in e && e.responseURL
    ? e.responseURL
    : IA.test(e.getAllResponseHeaders())
      ? e.getResponseHeader(Cp)
      : null;
}
var wp = (() => {
    class e {
      xhrFactory;
      constructor(n) {
        this.xhrFactory = n;
      }
      handle(n) {
        if (n.method === "JSONP") throw new I(-2800, !1);
        let r = this.xhrFactory;
        return _(null).pipe(
          Ce(
            () =>
              new P((i) => {
                let s = r.build();
                if (
                  (s.open(n.method, n.urlWithParams),
                  n.withCredentials && (s.withCredentials = !0),
                  n.headers.forEach((y, v) =>
                    s.setRequestHeader(y, v.join(",")),
                  ),
                  n.headers.has(ou) || s.setRequestHeader(ou, VI),
                  !n.headers.has(qi))
                ) {
                  let y = n.detectContentTypeHeader();
                  y !== null && s.setRequestHeader(qi, y);
                }
                if ((n.timeout && (s.timeout = n.timeout), n.responseType)) {
                  let y = n.responseType.toLowerCase();
                  s.responseType = y !== "json" ? y : "text";
                }
                let a = n.serializeBody(),
                  c = null,
                  u = () => {
                    if (c !== null) return c;
                    let y = s.statusText || "OK",
                      v = new vt(s.getAllResponseHeaders()),
                      x = wA(s) || n.url;
                    return (
                      (c = new Yi({
                        headers: v,
                        status: s.status,
                        statusText: y,
                        url: x,
                      })),
                      c
                    );
                  },
                  l = () => {
                    let { headers: y, status: v, statusText: x, url: H } = u(),
                      B = null;
                    (v !== pA &&
                      (B =
                        typeof s.response > "u" ? s.responseText : s.response),
                      v === 0 && (v = B ? UI : 0));
                    let ae = v >= 200 && v < 300;
                    if (n.responseType === "json" && typeof B == "string") {
                      let zt = B;
                      B = B.replace(EA, "");
                      try {
                        B = B !== "" ? JSON.parse(B) : null;
                      } catch (Gt) {
                        ((B = zt),
                          ae && ((ae = !1), (B = { error: Gt, text: B })));
                      }
                    }
                    ae
                      ? (i.next(
                          new br({
                            body: B,
                            headers: y,
                            status: v,
                            statusText: x,
                            url: H || void 0,
                          }),
                        ),
                        i.complete())
                      : i.error(
                          new Ft({
                            error: B,
                            headers: y,
                            status: v,
                            statusText: x,
                            url: H || void 0,
                          }),
                        );
                  },
                  d = (y) => {
                    let { url: v } = u(),
                      x = new Ft({
                        error: y,
                        status: s.status || 0,
                        statusText: s.statusText || "Unknown Error",
                        url: v || void 0,
                      });
                    i.error(x);
                  },
                  h = d;
                n.timeout &&
                  (h = (y) => {
                    let { url: v } = u(),
                      x = new Ft({
                        error: new DOMException(
                          "Request timed out",
                          "TimeoutError",
                        ),
                        status: s.status || 0,
                        statusText: s.statusText || "Request timeout",
                        url: v || void 0,
                      });
                    i.error(x);
                  });
                let f = !1,
                  g = (y) => {
                    f || (i.next(u()), (f = !0));
                    let v = { type: dn.DownloadProgress, loaded: y.loaded };
                    (y.lengthComputable && (v.total = y.total),
                      n.responseType === "text" &&
                        s.responseText &&
                        (v.partialText = s.responseText),
                      i.next(v));
                  },
                  E = (y) => {
                    let v = { type: dn.UploadProgress, loaded: y.loaded };
                    (y.lengthComputable && (v.total = y.total), i.next(v));
                  };
                return (
                  s.addEventListener("load", l),
                  s.addEventListener("error", d),
                  s.addEventListener("timeout", h),
                  s.addEventListener("abort", d),
                  n.reportProgress &&
                    (s.addEventListener("progress", g),
                    a !== null &&
                      s.upload &&
                      s.upload.addEventListener("progress", E)),
                  s.send(a),
                  i.next({ type: dn.Sent }),
                  () => {
                    (s.removeEventListener("error", d),
                      s.removeEventListener("abort", d),
                      s.removeEventListener("load", l),
                      s.removeEventListener("timeout", h),
                      n.reportProgress &&
                        (s.removeEventListener("progress", g),
                        a !== null &&
                          s.upload &&
                          s.upload.removeEventListener("progress", E)),
                      s.readyState !== s.DONE && s.abort());
                  }
                );
              }),
          ),
        );
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Cr));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  GI = new C(""),
  CA = "XSRF-TOKEN",
  bA = new C("", { providedIn: "root", factory: () => CA }),
  TA = "X-XSRF-TOKEN",
  SA = new C("", { providedIn: "root", factory: () => TA }),
  Zi = class {},
  _A = (() => {
    class e {
      doc;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      parseCount = 0;
      constructor(n, r) {
        ((this.doc = n), (this.cookieName = r));
      }
      getToken() {
        let n = this.doc.cookie || "";
        return (
          n !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Hi(n, this.cookieName)),
            (this.lastCookieString = n)),
          this.lastToken
        );
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Q), S(bA));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })();
function MA(e, t) {
  let n = e.url.toLowerCase();
  if (
    !p(GI) ||
    e.method === "GET" ||
    e.method === "HEAD" ||
    n.startsWith("http://") ||
    n.startsWith("https://")
  )
    return t(e);
  let r = p(Zi).getToken(),
    o = p(SA);
  return (
    r != null &&
      !e.headers.has(o) &&
      (e = e.clone({ headers: e.headers.set(o, r) })),
    t(e)
  );
}
var au = (function (e) {
  return (
    (e[(e.Interceptors = 0)] = "Interceptors"),
    (e[(e.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (e[(e.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (e[(e.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (e[(e.JsonpSupport = 4)] = "JsonpSupport"),
    (e[(e.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (e[(e.Fetch = 6)] = "Fetch"),
    e
  );
})(au || {});
function WI(e, t) {
  return { ɵkind: e, ɵproviders: t };
}
function NA(...e) {
  let t = [
    su,
    wp,
    iu,
    { provide: _o, useExisting: iu },
    { provide: Mo, useFactory: () => p(HI, { optional: !0 }) ?? p(wp) },
    { provide: bp, useValue: MA, multi: !0 },
    { provide: GI, useValue: !0 },
    { provide: Zi, useClass: _A },
  ];
  for (let n of e) t.push(...n.ɵproviders);
  return _t(t);
}
var LI = new C("");
function RA() {
  return WI(au.LegacyInterceptors, [
    { provide: LI, useFactory: DA },
    { provide: bp, useExisting: LI, multi: !0 },
  ]);
}
function AA() {
  return WI(au.Fetch, [
    tu,
    { provide: HI, useExisting: tu },
    { provide: Mo, useExisting: tu },
  ]);
}
var xA = new C(""),
  OA = "b",
  kA = "h",
  PA = "s",
  FA = "st",
  LA = "u",
  jA = "rt",
  _p = new C(""),
  BA = ["GET", "HEAD"];
function VA(e, t) {
  let f = p(_p),
    { isCacheActive: n } = f,
    r = zg(f, ["isCacheActive"]),
    { transferCache: o, method: i } = e;
  if (
    !n ||
    o === !1 ||
    (i === "POST" && !r.includePostRequests && !o) ||
    (i !== "POST" && !BA.includes(i)) ||
    (!r.includeRequestsWithAuthHeaders && UA(e)) ||
    r.filter?.(e) === !1
  )
    return t(e);
  let s = p(yo);
  if (p(xA, { optional: !0 })) throw new I(2803, !1);
  let c = e.url,
    u = HA(e, c),
    l = s.get(u, null),
    d = r.includeHeaders;
  if ((typeof o == "object" && o.includeHeaders && (d = o.includeHeaders), l)) {
    let { [OA]: g, [jA]: E, [kA]: y, [PA]: v, [FA]: x, [LA]: H } = l,
      B = g;
    switch (E) {
      case "arraybuffer":
        B = new TextEncoder().encode(g).buffer;
        break;
      case "blob":
        B = new Blob([g]);
        break;
    }
    let ae = new vt(y);
    return _(
      new br({ body: B, headers: ae, status: v, statusText: x, url: H }),
    );
  }
  return t(e);
}
function UA(e) {
  return e.headers.has("authorization") || e.headers.has("proxy-authorization");
}
function qI(e) {
  return [...e.keys()]
    .sort()
    .map((t) => `${t}=${e.getAll(t)}`)
    .join("&");
}
function HA(e, t) {
  let { params: n, method: r, responseType: o } = e,
    i = qI(n),
    s = e.serializeBody();
  s instanceof URLSearchParams ? (s = qI(s)) : typeof s != "string" && (s = "");
  let a = [r, o, t, s, i].join("|"),
    c = $A(a);
  return c;
}
function $A(e) {
  let t = 0;
  for (let n of e) t = (Math.imul(31, t) + n.charCodeAt(0)) << 0;
  return ((t += 2147483648), t.toString());
}
function Mp(e) {
  return [
    {
      provide: _p,
      useFactory: () => (
        Be("NgHttpTransferCache"),
        w({ isCacheActive: !0 }, e)
      ),
    },
    { provide: Tp, useValue: VA, multi: !0 },
    {
      provide: On,
      multi: !0,
      useFactory: () => {
        let t = p(gt),
          n = p(_p);
        return () => {
          t.whenStable().then(() => {
            n.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
var YI = (() => {
  class e {
    _doc;
    constructor(n) {
      this._doc = n;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(n) {
      this._doc.title = n || "";
    }
    static ɵfac = function (r) {
      return new (r || e)(S(Q));
    };
    static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
var Np = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({
        token: e,
        factory: function (r) {
          let o = null;
          return (r ? (o = new (r || e)()) : (o = S(zA)), o);
        },
        providedIn: "root",
      });
    }
    return e;
  })(),
  zA = (() => {
    class e extends Np {
      _doc;
      constructor(n) {
        (super(), (this._doc = n));
      }
      sanitize(n, r) {
        if (r == null) return null;
        switch (n) {
          case rt.NONE:
            return r;
          case rt.HTML:
            return kt(r, "HTML") ? qe(r) : yc(this._doc, String(r)).toString();
          case rt.STYLE:
            return kt(r, "Style") ? qe(r) : r;
          case rt.SCRIPT:
            if (kt(r, "Script")) return qe(r);
            throw new I(5200, !1);
          case rt.URL:
            return kt(r, "URL") ? qe(r) : xi(String(r));
          case rt.RESOURCE_URL:
            if (kt(r, "ResourceURL")) return qe(r);
            throw new I(5201, !1);
          default:
            throw new I(5202, !1);
        }
      }
      bypassSecurityTrustHtml(n) {
        return zf(n);
      }
      bypassSecurityTrustStyle(n) {
        return Gf(n);
      }
      bypassSecurityTrustScript(n) {
        return Wf(n);
      }
      bypassSecurityTrustUrl(n) {
        return qf(n);
      }
      bypassSecurityTrustResourceUrl(n) {
        return Yf(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(S(Q));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  cu = (function (e) {
    return (
      (e[(e.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
      (e[(e.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
      (e[(e.I18nSupport = 2)] = "I18nSupport"),
      (e[(e.EventReplay = 3)] = "EventReplay"),
      (e[(e.IncrementalHydration = 4)] = "IncrementalHydration"),
      e
    );
  })(cu || {});
function GA(e, t = [], n = {}) {
  return { ɵkind: e, ɵproviders: t };
}
function mW(e) {
  return GA(cu.HttpTransferCacheOptions, Mp(e));
}
function yW(...e) {
  let t = [],
    n = new Set();
  for (let { ɵproviders: o, ɵkind: i } of e) (n.add(i), o.length && t.push(o));
  let r = n.has(cu.HttpTransferCacheOptions);
  return _t([[], fI(), n.has(cu.NoHttpTransferCache) || r ? [] : Mp({}), t]);
}
var O = "primary",
  cs = Symbol("RouteTitle"),
  kp = class {
    params;
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let n = this.params[t];
        return Array.isArray(n) ? n[0] : n;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let n = this.params[t];
        return Array.isArray(n) ? n : [n];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function _r(e) {
  return new kp(e);
}
function rw(e, t, n) {
  let r = n.path.split("/");
  if (
    r.length > e.length ||
    (n.pathMatch === "full" && (t.hasChildren() || r.length < e.length))
  )
    return null;
  let o = {};
  for (let i = 0; i < r.length; i++) {
    let s = r[i],
      a = e[i];
    if (s[0] === ":") o[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: e.slice(0, r.length), posParams: o };
}
function WA(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; ++n) if (!Lt(e[n], t[n])) return !1;
  return !0;
}
function Lt(e, t) {
  let n = e ? Pp(e) : void 0,
    r = t ? Pp(t) : void 0;
  if (!n || !r || n.length != r.length) return !1;
  let o;
  for (let i = 0; i < n.length; i++)
    if (((o = n[i]), !ow(e[o], t[o]))) return !1;
  return !0;
}
function Pp(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
}
function ow(e, t) {
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    let n = [...e].sort(),
      r = [...t].sort();
    return n.every((o, i) => r[i] === o);
  } else return e === t;
}
function iw(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function fn(e) {
  return fl(e) ? e : wr(e) ? ee(Promise.resolve(e)) : _(e);
}
var qA = { exact: aw, subset: cw },
  sw = { exact: YA, subset: ZA, ignored: () => !0 };
function QI(e, t, n) {
  return (
    qA[n.paths](e.root, t.root, n.matrixParams) &&
    sw[n.queryParams](e.queryParams, t.queryParams) &&
    !(n.fragment === "exact" && e.fragment !== t.fragment)
  );
}
function YA(e, t) {
  return Lt(e, t);
}
function aw(e, t, n) {
  if (
    !Tr(e.segments, t.segments) ||
    !du(e.segments, t.segments, n) ||
    e.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let r in t.children)
    if (!e.children[r] || !aw(e.children[r], t.children[r], n)) return !1;
  return !0;
}
function ZA(e, t) {
  return (
    Object.keys(t).length <= Object.keys(e).length &&
    Object.keys(t).every((n) => ow(e[n], t[n]))
  );
}
function cw(e, t, n) {
  return uw(e, t, t.segments, n);
}
function uw(e, t, n, r) {
  if (e.segments.length > n.length) {
    let o = e.segments.slice(0, n.length);
    return !(!Tr(o, n) || t.hasChildren() || !du(o, n, r));
  } else if (e.segments.length === n.length) {
    if (!Tr(e.segments, n) || !du(e.segments, n, r)) return !1;
    for (let o in t.children)
      if (!e.children[o] || !cw(e.children[o], t.children[o], r)) return !1;
    return !0;
  } else {
    let o = n.slice(0, e.segments.length),
      i = n.slice(e.segments.length);
    return !Tr(e.segments, o) || !du(e.segments, o, r) || !e.children[O]
      ? !1
      : uw(e.children[O], t, i, r);
  }
}
function du(e, t, n) {
  return t.every((r, o) => sw[n](e[o].parameters, r.parameters));
}
var Bt = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(t = new z([], {}), n = {}, r = null) {
      ((this.root = t), (this.queryParams = n), (this.fragment = r));
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= _r(this.queryParams)),
        this._queryParamMap
      );
    }
    toString() {
      return XA.serialize(this);
    }
  },
  z = class {
    segments;
    children;
    parent = null;
    constructor(t, n) {
      ((this.segments = t),
        (this.children = n),
        Object.values(n).forEach((r) => (r.parent = this)));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return fu(this);
    }
  },
  Pn = class {
    path;
    parameters;
    _parameterMap;
    constructor(t, n) {
      ((this.path = t), (this.parameters = n));
    }
    get parameterMap() {
      return ((this._parameterMap ??= _r(this.parameters)), this._parameterMap);
    }
    toString() {
      return dw(this);
    }
  };
function QA(e, t) {
  return Tr(e, t) && e.every((n, r) => Lt(n.parameters, t[r].parameters));
}
function Tr(e, t) {
  return e.length !== t.length ? !1 : e.every((n, r) => n.path === t[r].path);
}
function KA(e, t) {
  let n = [];
  return (
    Object.entries(e.children).forEach(([r, o]) => {
      r === O && (n = n.concat(t(o, r)));
    }),
    Object.entries(e.children).forEach(([r, o]) => {
      r !== O && (n = n.concat(t(o, r)));
    }),
    n
  );
}
var Bn = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({
        token: e,
        factory: () => new Fn(),
        providedIn: "root",
      });
    }
    return e;
  })(),
  Fn = class {
    parse(t) {
      let n = new Lp(t);
      return new Bt(
        n.parseRootSegment(),
        n.parseQueryParams(),
        n.parseFragment(),
      );
    }
    serialize(t) {
      let n = `/${Qi(t.root, !0)}`,
        r = tx(t.queryParams),
        o = typeof t.fragment == "string" ? `#${JA(t.fragment)}` : "";
      return `${n}${r}${o}`;
    }
  },
  XA = new Fn();
function fu(e) {
  return e.segments.map((t) => dw(t)).join("/");
}
function Qi(e, t) {
  if (!e.hasChildren()) return fu(e);
  if (t) {
    let n = e.children[O] ? Qi(e.children[O], !1) : "",
      r = [];
    return (
      Object.entries(e.children).forEach(([o, i]) => {
        o !== O && r.push(`${o}:${Qi(i, !1)}`);
      }),
      r.length > 0 ? `${n}(${r.join("//")})` : n
    );
  } else {
    let n = KA(e, (r, o) =>
      o === O ? [Qi(e.children[O], !1)] : [`${o}:${Qi(r, !1)}`],
    );
    return Object.keys(e.children).length === 1 && e.children[O] != null
      ? `${fu(e)}/${n[0]}`
      : `${fu(e)}/(${n.join("//")})`;
  }
}
function lw(e) {
  return encodeURIComponent(e)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function uu(e) {
  return lw(e).replace(/%3B/gi, ";");
}
function JA(e) {
  return encodeURI(e);
}
function Fp(e) {
  return lw(e)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function hu(e) {
  return decodeURIComponent(e);
}
function KI(e) {
  return hu(e.replace(/\+/g, "%20"));
}
function dw(e) {
  return `${Fp(e.path)}${ex(e.parameters)}`;
}
function ex(e) {
  return Object.entries(e)
    .map(([t, n]) => `;${Fp(t)}=${Fp(n)}`)
    .join("");
}
function tx(e) {
  let t = Object.entries(e)
    .map(([n, r]) =>
      Array.isArray(r)
        ? r.map((o) => `${uu(n)}=${uu(o)}`).join("&")
        : `${uu(n)}=${uu(r)}`,
    )
    .filter((n) => n);
  return t.length ? `?${t.join("&")}` : "";
}
var nx = /^[^\/()?;#]+/;
function Rp(e) {
  let t = e.match(nx);
  return t ? t[0] : "";
}
var rx = /^[^\/()?;=#]+/;
function ox(e) {
  let t = e.match(rx);
  return t ? t[0] : "";
}
var ix = /^[^=?&#]+/;
function sx(e) {
  let t = e.match(ix);
  return t ? t[0] : "";
}
var ax = /^[^&#]+/;
function cx(e) {
  let t = e.match(ax);
  return t ? t[0] : "";
}
var Lp = class {
  url;
  remaining;
  constructor(t) {
    ((this.url = t), (this.remaining = t));
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new z([], {})
        : new z([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      (this.capture("/"), t.push(this.parseSegment()));
    let n = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (n = this.parseParens(!0)));
    let r = {};
    return (
      this.peekStartsWith("(") && (r = this.parseParens(!1)),
      (t.length > 0 || Object.keys(n).length > 0) && (r[O] = new z(t, n)),
      r
    );
  }
  parseSegment() {
    let t = Rp(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new I(4009, !1);
    return (this.capture(t), new Pn(hu(t), this.parseMatrixParams()));
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let n = ox(this.remaining);
    if (!n) return;
    this.capture(n);
    let r = "";
    if (this.consumeOptional("=")) {
      let o = Rp(this.remaining);
      o && ((r = o), this.capture(r));
    }
    t[hu(n)] = hu(r);
  }
  parseQueryParam(t) {
    let n = sx(this.remaining);
    if (!n) return;
    this.capture(n);
    let r = "";
    if (this.consumeOptional("=")) {
      let s = cx(this.remaining);
      s && ((r = s), this.capture(r));
    }
    let o = KI(n),
      i = KI(r);
    if (t.hasOwnProperty(o)) {
      let s = t[o];
      (Array.isArray(s) || ((s = [s]), (t[o] = s)), s.push(i));
    } else t[o] = i;
  }
  parseParens(t) {
    let n = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let r = Rp(this.remaining),
        o = this.remaining[r.length];
      if (o !== "/" && o !== ")" && o !== ";") throw new I(4010, !1);
      let i;
      r.indexOf(":") > -1
        ? ((i = r.slice(0, r.indexOf(":"))), this.capture(i), this.capture(":"))
        : t && (i = O);
      let s = this.parseChildren();
      ((n[i] = Object.keys(s).length === 1 ? s[O] : new z([], s)),
        this.consumeOptional("//"));
    }
    return n;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new I(4011, !1);
  }
};
function fw(e) {
  return e.segments.length > 0 ? new z([], { [O]: e }) : e;
}
function hw(e) {
  let t = {};
  for (let [r, o] of Object.entries(e.children)) {
    let i = hw(o);
    if (r === O && i.segments.length === 0 && i.hasChildren())
      for (let [s, a] of Object.entries(i.children)) t[s] = a;
    else (i.segments.length > 0 || i.hasChildren()) && (t[r] = i);
  }
  let n = new z(e.segments, t);
  return ux(n);
}
function ux(e) {
  if (e.numberOfChildren === 1 && e.children[O]) {
    let t = e.children[O];
    return new z(e.segments.concat(t.segments), t.children);
  }
  return e;
}
function Ln(e) {
  return e instanceof Bt;
}
function pw(e, t, n = null, r = null) {
  let o = gw(e);
  return mw(o, t, n, r);
}
function gw(e) {
  let t;
  function n(i) {
    let s = {};
    for (let c of i.children) {
      let u = n(c);
      s[c.outlet] = u;
    }
    let a = new z(i.url, s);
    return (i === e && (t = a), a);
  }
  let r = n(e.root),
    o = fw(r);
  return t ?? o;
}
function mw(e, t, n, r) {
  let o = e;
  for (; o.parent; ) o = o.parent;
  if (t.length === 0) return Ap(o, o, o, n, r);
  let i = lx(t);
  if (i.toRoot()) return Ap(o, o, new z([], {}), n, r);
  let s = dx(i, o, e),
    a = s.processChildren
      ? Xi(s.segmentGroup, s.index, i.commands)
      : vw(s.segmentGroup, s.index, i.commands);
  return Ap(o, s.segmentGroup, a, n, r);
}
function pu(e) {
  return typeof e == "object" && e != null && !e.outlets && !e.segmentPath;
}
function es(e) {
  return typeof e == "object" && e != null && e.outlets;
}
function Ap(e, t, n, r, o) {
  let i = {};
  r &&
    Object.entries(r).forEach(([c, u]) => {
      i[c] = Array.isArray(u) ? u.map((l) => `${l}`) : `${u}`;
    });
  let s;
  e === t ? (s = n) : (s = yw(e, t, n));
  let a = fw(hw(s));
  return new Bt(a, i, o);
}
function yw(e, t, n) {
  let r = {};
  return (
    Object.entries(e.children).forEach(([o, i]) => {
      i === t ? (r[o] = n) : (r[o] = yw(i, t, n));
    }),
    new z(e.segments, r)
  );
}
var gu = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(t, n, r) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = n),
      (this.commands = r),
      t && r.length > 0 && pu(r[0]))
    )
      throw new I(4003, !1);
    let o = r.find(es);
    if (o && o !== iw(r)) throw new I(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function lx(e) {
  if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
    return new gu(!0, 0, e);
  let t = 0,
    n = !1,
    r = e.reduce((o, i, s) => {
      if (typeof i == "object" && i != null) {
        if (i.outlets) {
          let a = {};
          return (
            Object.entries(i.outlets).forEach(([c, u]) => {
              a[c] = typeof u == "string" ? u.split("/") : u;
            }),
            [...o, { outlets: a }]
          );
        }
        if (i.segmentPath) return [...o, i.segmentPath];
      }
      return typeof i != "string"
        ? [...o, i]
        : s === 0
          ? (i.split("/").forEach((a, c) => {
              (c == 0 && a === ".") ||
                (c == 0 && a === ""
                  ? (n = !0)
                  : a === ".."
                    ? t++
                    : a != "" && o.push(a));
            }),
            o)
          : [...o, i];
    }, []);
  return new gu(n, t, r);
}
var xo = class {
  segmentGroup;
  processChildren;
  index;
  constructor(t, n, r) {
    ((this.segmentGroup = t), (this.processChildren = n), (this.index = r));
  }
};
function dx(e, t, n) {
  if (e.isAbsolute) return new xo(t, !0, 0);
  if (!n) return new xo(t, !1, NaN);
  if (n.parent === null) return new xo(n, !0, 0);
  let r = pu(e.commands[0]) ? 0 : 1,
    o = n.segments.length - 1 + r;
  return fx(n, o, e.numberOfDoubleDots);
}
function fx(e, t, n) {
  let r = e,
    o = t,
    i = n;
  for (; i > o; ) {
    if (((i -= o), (r = r.parent), !r)) throw new I(4005, !1);
    o = r.segments.length;
  }
  return new xo(r, !1, o - i);
}
function hx(e) {
  return es(e[0]) ? e[0].outlets : { [O]: e };
}
function vw(e, t, n) {
  if (((e ??= new z([], {})), e.segments.length === 0 && e.hasChildren()))
    return Xi(e, t, n);
  let r = px(e, t, n),
    o = n.slice(r.commandIndex);
  if (r.match && r.pathIndex < e.segments.length) {
    let i = new z(e.segments.slice(0, r.pathIndex), {});
    return (
      (i.children[O] = new z(e.segments.slice(r.pathIndex), e.children)),
      Xi(i, 0, o)
    );
  } else
    return r.match && o.length === 0
      ? new z(e.segments, {})
      : r.match && !e.hasChildren()
        ? jp(e, t, n)
        : r.match
          ? Xi(e, 0, o)
          : jp(e, t, n);
}
function Xi(e, t, n) {
  if (n.length === 0) return new z(e.segments, {});
  {
    let r = hx(n),
      o = {};
    if (
      Object.keys(r).some((i) => i !== O) &&
      e.children[O] &&
      e.numberOfChildren === 1 &&
      e.children[O].segments.length === 0
    ) {
      let i = Xi(e.children[O], t, n);
      return new z(e.segments, i.children);
    }
    return (
      Object.entries(r).forEach(([i, s]) => {
        (typeof s == "string" && (s = [s]),
          s !== null && (o[i] = vw(e.children[i], t, s)));
      }),
      Object.entries(e.children).forEach(([i, s]) => {
        r[i] === void 0 && (o[i] = s);
      }),
      new z(e.segments, o)
    );
  }
}
function px(e, t, n) {
  let r = 0,
    o = t,
    i = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; o < e.segments.length; ) {
    if (r >= n.length) return i;
    let s = e.segments[o],
      a = n[r];
    if (es(a)) break;
    let c = `${a}`,
      u = r < n.length - 1 ? n[r + 1] : null;
    if (o > 0 && c === void 0) break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
      if (!JI(c, u, s)) return i;
      r += 2;
    } else {
      if (!JI(c, {}, s)) return i;
      r++;
    }
    o++;
  }
  return { match: !0, pathIndex: o, commandIndex: r };
}
function jp(e, t, n) {
  let r = e.segments.slice(0, t),
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (es(i)) {
      let c = gx(i.outlets);
      return new z(r, c);
    }
    if (o === 0 && pu(n[0])) {
      let c = e.segments[t];
      (r.push(new Pn(c.path, XI(n[0]))), o++);
      continue;
    }
    let s = es(i) ? i.outlets[O] : `${i}`,
      a = o < n.length - 1 ? n[o + 1] : null;
    s && a && pu(a)
      ? (r.push(new Pn(s, XI(a))), (o += 2))
      : (r.push(new Pn(s, {})), o++);
  }
  return new z(r, {});
}
function gx(e) {
  let t = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      (typeof r == "string" && (r = [r]),
        r !== null && (t[n] = jp(new z([], {}), 0, r)));
    }),
    t
  );
}
function XI(e) {
  let t = {};
  return (Object.entries(e).forEach(([n, r]) => (t[n] = `${r}`)), t);
}
function JI(e, t, n) {
  return e == n.path && Lt(t, n.parameters);
}
var Oo = "imperative",
  fe = (function (e) {
    return (
      (e[(e.NavigationStart = 0)] = "NavigationStart"),
      (e[(e.NavigationEnd = 1)] = "NavigationEnd"),
      (e[(e.NavigationCancel = 2)] = "NavigationCancel"),
      (e[(e.NavigationError = 3)] = "NavigationError"),
      (e[(e.RoutesRecognized = 4)] = "RoutesRecognized"),
      (e[(e.ResolveStart = 5)] = "ResolveStart"),
      (e[(e.ResolveEnd = 6)] = "ResolveEnd"),
      (e[(e.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (e[(e.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (e[(e.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (e[(e.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (e[(e.ChildActivationStart = 11)] = "ChildActivationStart"),
      (e[(e.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (e[(e.ActivationStart = 13)] = "ActivationStart"),
      (e[(e.ActivationEnd = 14)] = "ActivationEnd"),
      (e[(e.Scroll = 15)] = "Scroll"),
      (e[(e.NavigationSkipped = 16)] = "NavigationSkipped"),
      e
    );
  })(fe || {}),
  Qe = class {
    id;
    url;
    constructor(t, n) {
      ((this.id = t), (this.url = n));
    }
  },
  jn = class extends Qe {
    type = fe.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(t, n, r = "imperative", o = null) {
      (super(t, n), (this.navigationTrigger = r), (this.restoredState = o));
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  it = class extends Qe {
    urlAfterRedirects;
    type = fe.NavigationEnd;
    constructor(t, n, r) {
      (super(t, n), (this.urlAfterRedirects = r));
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  ke = (function (e) {
    return (
      (e[(e.Redirect = 0)] = "Redirect"),
      (e[(e.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (e[(e.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (e[(e.GuardRejected = 3)] = "GuardRejected"),
      (e[(e.Aborted = 4)] = "Aborted"),
      e
    );
  })(ke || {}),
  Po = (function (e) {
    return (
      (e[(e.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      e
    );
  })(Po || {}),
  jt = class extends Qe {
    reason;
    code;
    type = fe.NavigationCancel;
    constructor(t, n, r, o) {
      (super(t, n), (this.reason = r), (this.code = o));
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Vt = class extends Qe {
    reason;
    code;
    type = fe.NavigationSkipped;
    constructor(t, n, r, o) {
      (super(t, n), (this.reason = r), (this.code = o));
    }
  },
  Fo = class extends Qe {
    error;
    target;
    type = fe.NavigationError;
    constructor(t, n, r, o) {
      (super(t, n), (this.error = r), (this.target = o));
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  ts = class extends Qe {
    urlAfterRedirects;
    state;
    type = fe.RoutesRecognized;
    constructor(t, n, r, o) {
      (super(t, n), (this.urlAfterRedirects = r), (this.state = o));
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  mu = class extends Qe {
    urlAfterRedirects;
    state;
    type = fe.GuardsCheckStart;
    constructor(t, n, r, o) {
      (super(t, n), (this.urlAfterRedirects = r), (this.state = o));
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  yu = class extends Qe {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = fe.GuardsCheckEnd;
    constructor(t, n, r, o, i) {
      (super(t, n),
        (this.urlAfterRedirects = r),
        (this.state = o),
        (this.shouldActivate = i));
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  vu = class extends Qe {
    urlAfterRedirects;
    state;
    type = fe.ResolveStart;
    constructor(t, n, r, o) {
      (super(t, n), (this.urlAfterRedirects = r), (this.state = o));
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Du = class extends Qe {
    urlAfterRedirects;
    state;
    type = fe.ResolveEnd;
    constructor(t, n, r, o) {
      (super(t, n), (this.urlAfterRedirects = r), (this.state = o));
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Eu = class {
    route;
    type = fe.RouteConfigLoadStart;
    constructor(t) {
      this.route = t;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Iu = class {
    route;
    type = fe.RouteConfigLoadEnd;
    constructor(t) {
      this.route = t;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  wu = class {
    snapshot;
    type = fe.ChildActivationStart;
    constructor(t) {
      this.snapshot = t;
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Cu = class {
    snapshot;
    type = fe.ChildActivationEnd;
    constructor(t) {
      this.snapshot = t;
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  bu = class {
    snapshot;
    type = fe.ActivationStart;
    constructor(t) {
      this.snapshot = t;
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Lo = class {
    snapshot;
    type = fe.ActivationEnd;
    constructor(t) {
      this.snapshot = t;
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  jo = class {
    routerEvent;
    position;
    anchor;
    type = fe.Scroll;
    constructor(t, n, r) {
      ((this.routerEvent = t), (this.position = n), (this.anchor = r));
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  ns = class {},
  Bo = class {
    url;
    navigationBehaviorOptions;
    constructor(t, n) {
      ((this.url = t), (this.navigationBehaviorOptions = n));
    }
  };
function mx(e) {
  return !(e instanceof ns) && !(e instanceof Bo);
}
function yx(e, t) {
  return (
    e.providers &&
      !e._injector &&
      (e._injector = Dr(e.providers, t, `Route: ${e.path}`)),
    e._injector ?? t
  );
}
function Dt(e) {
  return e.outlet || O;
}
function vx(e, t) {
  let n = e.filter((r) => Dt(r) === t);
  return (n.push(...e.filter((r) => Dt(r) !== t)), n);
}
function Ho(e) {
  if (!e) return null;
  if (e.routeConfig?._injector) return e.routeConfig._injector;
  for (let t = e.parent; t; t = t.parent) {
    let n = t.routeConfig;
    if (n?._loadedInjector) return n._loadedInjector;
    if (n?._injector) return n._injector;
  }
  return null;
}
var Tu = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return Ho(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(t) {
      ((this.rootInjector = t), (this.children = new Mr(this.rootInjector)));
    }
  },
  Mr = (() => {
    class e {
      rootInjector;
      contexts = new Map();
      constructor(n) {
        this.rootInjector = n;
      }
      onChildOutletCreated(n, r) {
        let o = this.getOrCreateContext(n);
        ((o.outlet = r), this.contexts.set(n, o));
      }
      onChildOutletDestroyed(n) {
        let r = this.getContext(n);
        r && ((r.outlet = null), (r.attachRef = null));
      }
      onOutletDeactivated() {
        let n = this.contexts;
        return ((this.contexts = new Map()), n);
      }
      onOutletReAttached(n) {
        this.contexts = n;
      }
      getOrCreateContext(n) {
        let r = this.getContext(n);
        return (
          r || ((r = new Tu(this.rootInjector)), this.contexts.set(n, r)),
          r
        );
      }
      getContext(n) {
        return this.contexts.get(n) || null;
      }
      static ɵfac = function (r) {
        return new (r || e)(S(re));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  Su = class {
    _root;
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let n = this.pathFromRoot(t);
      return n.length > 1 ? n[n.length - 2] : null;
    }
    children(t) {
      let n = Bp(t, this._root);
      return n ? n.children.map((r) => r.value) : [];
    }
    firstChild(t) {
      let n = Bp(t, this._root);
      return n && n.children.length > 0 ? n.children[0].value : null;
    }
    siblings(t) {
      let n = Vp(t, this._root);
      return n.length < 2
        ? []
        : n[n.length - 2].children.map((o) => o.value).filter((o) => o !== t);
    }
    pathFromRoot(t) {
      return Vp(t, this._root).map((n) => n.value);
    }
  };
function Bp(e, t) {
  if (e === t.value) return t;
  for (let n of t.children) {
    let r = Bp(e, n);
    if (r) return r;
  }
  return null;
}
function Vp(e, t) {
  if (e === t.value) return [t];
  for (let n of t.children) {
    let r = Vp(e, n);
    if (r.length) return (r.unshift(t), r);
  }
  return [];
}
var Ze = class {
  value;
  children;
  constructor(t, n) {
    ((this.value = t), (this.children = n));
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Ao(e) {
  let t = {};
  return (e && e.children.forEach((n) => (t[n.value.outlet] = n)), t);
}
var rs = class extends Su {
  snapshot;
  constructor(t, n) {
    (super(t), (this.snapshot = n), Yp(this, t));
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Dw(e) {
  let t = Dx(e),
    n = new pe([new Pn("", {})]),
    r = new pe({}),
    o = new pe({}),
    i = new pe({}),
    s = new pe(""),
    a = new Ut(n, r, i, s, o, O, e, t.root);
  return ((a.snapshot = t.root), new rs(new Ze(a, []), t));
}
function Dx(e) {
  let t = {},
    n = {},
    r = {},
    o = "",
    i = new Sr([], t, r, o, n, O, e, null, {});
  return new os("", new Ze(i, []));
}
var Ut = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(t, n, r, o, i, s, a, c) {
    ((this.urlSubject = t),
      (this.paramsSubject = n),
      (this.queryParamsSubject = r),
      (this.fragmentSubject = o),
      (this.dataSubject = i),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(k((u) => u[cs])) ?? _(void 0)),
      (this.url = t),
      (this.params = n),
      (this.queryParams = r),
      (this.fragment = o),
      (this.data = i));
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(k((t) => _r(t)))),
      this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(k((t) => _r(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function _u(e, t, n = "emptyOnly") {
  let r,
    { routeConfig: o } = e;
  return (
    t !== null &&
    (n === "always" ||
      o?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (r = {
          params: w(w({}, t.params), e.params),
          data: w(w({}, t.data), e.data),
          resolve: w(w(w(w({}, e.data), t.data), o?.data), e._resolvedData),
        })
      : (r = {
          params: w({}, e.params),
          data: w({}, e.data),
          resolve: w(w({}, e.data), e._resolvedData ?? {}),
        }),
    o && Iw(o) && (r.resolve[cs] = o.title),
    r
  );
}
var Sr = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[cs];
    }
    constructor(t, n, r, o, i, s, a, c, u) {
      ((this.url = t),
        (this.params = n),
        (this.queryParams = r),
        (this.fragment = o),
        (this.data = i),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = u));
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return ((this._paramMap ??= _r(this.params)), this._paramMap);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= _r(this.queryParams)),
        this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((r) => r.toString()).join("/"),
        n = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${n}')`;
    }
  },
  os = class extends Su {
    url;
    constructor(t, n) {
      (super(n), (this.url = t), Yp(this, n));
    }
    toString() {
      return Ew(this._root);
    }
  };
function Yp(e, t) {
  ((t.value._routerState = e), t.children.forEach((n) => Yp(e, n)));
}
function Ew(e) {
  let t = e.children.length > 0 ? ` { ${e.children.map(Ew).join(", ")} } ` : "";
  return `${e.value}${t}`;
}
function xp(e) {
  if (e.snapshot) {
    let t = e.snapshot,
      n = e._futureSnapshot;
    ((e.snapshot = n),
      Lt(t.queryParams, n.queryParams) ||
        e.queryParamsSubject.next(n.queryParams),
      t.fragment !== n.fragment && e.fragmentSubject.next(n.fragment),
      Lt(t.params, n.params) || e.paramsSubject.next(n.params),
      WA(t.url, n.url) || e.urlSubject.next(n.url),
      Lt(t.data, n.data) || e.dataSubject.next(n.data));
  } else
    ((e.snapshot = e._futureSnapshot),
      e.dataSubject.next(e._futureSnapshot.data));
}
function Up(e, t) {
  let n = Lt(e.params, t.params) && QA(e.url, t.url),
    r = !e.parent != !t.parent;
  return n && !r && (!e.parent || Up(e.parent, t.parent));
}
function Iw(e) {
  return typeof e.title == "string" || e.title === null;
}
var ww = new C(""),
  Zp = (() => {
    class e {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = O;
      activateEvents = new xe();
      deactivateEvents = new xe();
      attachEvents = new xe();
      detachEvents = new xe();
      routerOutletData = lI(void 0);
      parentContexts = p(Mr);
      location = p(pt);
      changeDetector = p(To);
      inputBinder = p(us, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(n) {
        if (n.name) {
          let { firstChange: r, previousValue: o } = n.name;
          if (r) return;
          (this.isTrackedInParentContexts(o) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
            this.initializeOutletWithName());
        }
      }
      ngOnDestroy() {
        (this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this));
      }
      isTrackedInParentContexts(n) {
        return this.parentContexts.getContext(n)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let n = this.parentContexts.getContext(this.name);
        n?.route &&
          (n.attachRef
            ? this.attach(n.attachRef, n.route)
            : this.activateWith(n.route, n.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new I(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new I(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new I(4012, !1);
        this.location.detach();
        let n = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(n.instance),
          n
        );
      }
      attach(n, r) {
        ((this.activated = n),
          (this._activatedRoute = r),
          this.location.insert(n.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(n.instance));
      }
      deactivate() {
        if (this.activated) {
          let n = this.component;
          (this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(n));
        }
      }
      activateWith(n, r) {
        if (this.isActivated) throw new I(4013, !1);
        this._activatedRoute = n;
        let o = this.location,
          s = n.snapshot.component,
          a = this.parentContexts.getOrCreateContext(this.name).children,
          c = new Hp(n, a, o.injector, this.routerOutletData);
        ((this.activated = o.createComponent(s, {
          index: o.length,
          injector: c,
          environmentInjector: r,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance));
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵdir = Oe({
        type: e,
        selectors: [["router-outlet"]],
        inputs: { name: "name", routerOutletData: [1, "routerOutletData"] },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        features: [ht],
      });
    }
    return e;
  })(),
  Hp = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(t, n, r, o) {
      ((this.route = t),
        (this.childContexts = n),
        (this.parent = r),
        (this.outletData = o));
    }
    get(t, n) {
      return t === Ut
        ? this.route
        : t === Mr
          ? this.childContexts
          : t === ww
            ? this.outletData
            : this.parent.get(t, n);
    }
  },
  us = new C(""),
  Qp = (() => {
    class e {
      outletDataSubscriptions = new Map();
      bindActivatedRouteToOutletComponent(n) {
        (this.unsubscribeFromRouteData(n), this.subscribeToRouteData(n));
      }
      unsubscribeFromRouteData(n) {
        (this.outletDataSubscriptions.get(n)?.unsubscribe(),
          this.outletDataSubscriptions.delete(n));
      }
      subscribeToRouteData(n) {
        let { activatedRoute: r } = n,
          o = Xo([r.queryParams, r.params, r.data])
            .pipe(
              Ce(
                ([i, s, a], c) => (
                  (a = w(w(w({}, i), s), a)),
                  c === 0 ? _(a) : Promise.resolve(a)
                ),
              ),
            )
            .subscribe((i) => {
              if (
                !n.isActivated ||
                !n.activatedComponentRef ||
                n.activatedRoute !== r ||
                r.component === null
              ) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              let s = hI(r.component);
              if (!s) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              for (let { templateName: a } of s.inputs)
                n.activatedComponentRef.setInput(a, i[a]);
            });
        this.outletDataSubscriptions.set(n, o);
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  Kp = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵcmp = Io({
        type: e,
        selectors: [["ng-component"]],
        exportAs: ["emptyRouterOutlet"],
        decls: 1,
        vars: 0,
        template: function (r, o) {
          r & 1 && jc(0, "router-outlet");
        },
        dependencies: [Zp],
        encapsulation: 2,
      });
    }
    return e;
  })();
function Xp(e) {
  let t = e.children && e.children.map(Xp),
    n = t ? W(w({}, e), { children: t }) : w({}, e);
  return (
    !n.component &&
      !n.loadComponent &&
      (t || n.loadChildren) &&
      n.outlet &&
      n.outlet !== O &&
      (n.component = Kp),
    n
  );
}
function Ex(e, t, n) {
  let r = is(e, t._root, n ? n._root : void 0);
  return new rs(r, t);
}
function is(e, t, n) {
  if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
    let r = n.value;
    r._futureSnapshot = t.value;
    let o = Ix(e, t, n);
    return new Ze(r, o);
  } else {
    if (e.shouldAttach(t.value)) {
      let i = e.retrieve(t.value);
      if (i !== null) {
        let s = i.route;
        return (
          (s.value._futureSnapshot = t.value),
          (s.children = t.children.map((a) => is(e, a))),
          s
        );
      }
    }
    let r = wx(t.value),
      o = t.children.map((i) => is(e, i));
    return new Ze(r, o);
  }
}
function Ix(e, t, n) {
  return t.children.map((r) => {
    for (let o of n.children)
      if (e.shouldReuseRoute(r.value, o.value.snapshot)) return is(e, r, o);
    return is(e, r);
  });
}
function wx(e) {
  return new Ut(
    new pe(e.url),
    new pe(e.params),
    new pe(e.queryParams),
    new pe(e.fragment),
    new pe(e.data),
    e.outlet,
    e.component,
    e,
  );
}
var Vo = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(t, n) {
      ((this.redirectTo = t), (this.navigationBehaviorOptions = n));
    }
  },
  Cw = "ngNavigationCancelingError";
function Mu(e, t) {
  let { redirectTo: n, navigationBehaviorOptions: r } = Ln(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    o = bw(!1, ke.Redirect);
  return ((o.url = n), (o.navigationBehaviorOptions = r), o);
}
function bw(e, t) {
  let n = new Error(`NavigationCancelingError: ${e || ""}`);
  return ((n[Cw] = !0), (n.cancellationCode = t), n);
}
function Cx(e) {
  return Tw(e) && Ln(e.url);
}
function Tw(e) {
  return !!e && e[Cw];
}
var bx = (e, t, n, r) =>
    k(
      (o) => (
        new $p(t, o.targetRouterState, o.currentRouterState, n, r).activate(e),
        o
      ),
    ),
  $p = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(t, n, r, o, i) {
      ((this.routeReuseStrategy = t),
        (this.futureState = n),
        (this.currState = r),
        (this.forwardEvent = o),
        (this.inputBindingEnabled = i));
    }
    activate(t) {
      let n = this.futureState._root,
        r = this.currState ? this.currState._root : null;
      (this.deactivateChildRoutes(n, r, t),
        xp(this.futureState.root),
        this.activateChildRoutes(n, r, t));
    }
    deactivateChildRoutes(t, n, r) {
      let o = Ao(n);
      (t.children.forEach((i) => {
        let s = i.value.outlet;
        (this.deactivateRoutes(i, o[s], r), delete o[s]);
      }),
        Object.values(o).forEach((i) => {
          this.deactivateRouteAndItsChildren(i, r);
        }));
    }
    deactivateRoutes(t, n, r) {
      let o = t.value,
        i = n ? n.value : null;
      if (o === i)
        if (o.component) {
          let s = r.getContext(o.outlet);
          s && this.deactivateChildRoutes(t, n, s.children);
        } else this.deactivateChildRoutes(t, n, r);
      else i && this.deactivateRouteAndItsChildren(n, r);
    }
    deactivateRouteAndItsChildren(t, n) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, n)
        : this.deactivateRouteAndOutlet(t, n);
    }
    detachAndStoreRouteSubtree(t, n) {
      let r = n.getContext(t.value.outlet),
        o = r && t.value.component ? r.children : n,
        i = Ao(t);
      for (let s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
      if (r && r.outlet) {
        let s = r.outlet.detach(),
          a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: s,
          route: t,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(t, n) {
      let r = n.getContext(t.value.outlet),
        o = r && t.value.component ? r.children : n,
        i = Ao(t);
      for (let s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
      r &&
        (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()),
        (r.attachRef = null),
        (r.route = null));
    }
    activateChildRoutes(t, n, r) {
      let o = Ao(n);
      (t.children.forEach((i) => {
        (this.activateRoutes(i, o[i.value.outlet], r),
          this.forwardEvent(new Lo(i.value.snapshot)));
      }),
        t.children.length && this.forwardEvent(new Cu(t.value.snapshot)));
    }
    activateRoutes(t, n, r) {
      let o = t.value,
        i = n ? n.value : null;
      if ((xp(o), o === i))
        if (o.component) {
          let s = r.getOrCreateContext(o.outlet);
          this.activateChildRoutes(t, n, s.children);
        } else this.activateChildRoutes(t, n, r);
      else if (o.component) {
        let s = r.getOrCreateContext(o.outlet);
        if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(o.snapshot);
          (this.routeReuseStrategy.store(o.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            xp(a.route.value),
            this.activateChildRoutes(t, null, s.children));
        } else
          ((s.attachRef = null),
            (s.route = o),
            s.outlet && s.outlet.activateWith(o, s.injector),
            this.activateChildRoutes(t, null, s.children));
      } else this.activateChildRoutes(t, null, r);
    }
  },
  Nu = class {
    path;
    route;
    constructor(t) {
      ((this.path = t), (this.route = this.path[this.path.length - 1]));
    }
  },
  ko = class {
    component;
    route;
    constructor(t, n) {
      ((this.component = t), (this.route = n));
    }
  };
function Tx(e, t, n) {
  let r = e._root,
    o = t ? t._root : null;
  return Ki(r, o, n, [r.value]);
}
function Sx(e) {
  let t = e.routeConfig ? e.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: e, guards: t };
}
function $o(e, t) {
  let n = Symbol(),
    r = t.get(e, n);
  return r === n ? (typeof e == "function" && !Ol(e) ? e : t.get(e)) : r;
}
function Ki(
  e,
  t,
  n,
  r,
  o = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let i = Ao(t);
  return (
    e.children.forEach((s) => {
      (_x(s, i[s.value.outlet], n, r.concat([s.value]), o),
        delete i[s.value.outlet]);
    }),
    Object.entries(i).forEach(([s, a]) => Ji(a, n.getContext(s), o)),
    o
  );
}
function _x(
  e,
  t,
  n,
  r,
  o = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let i = e.value,
    s = t ? t.value : null,
    a = n ? n.getContext(e.value.outlet) : null;
  if (s && i.routeConfig === s.routeConfig) {
    let c = Mx(s, i, i.routeConfig.runGuardsAndResolvers);
    (c
      ? o.canActivateChecks.push(new Nu(r))
      : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
      i.component ? Ki(e, t, a ? a.children : null, r, o) : Ki(e, t, n, r, o),
      c &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        o.canDeactivateChecks.push(new ko(a.outlet.component, s)));
  } else
    (s && Ji(t, a, o),
      o.canActivateChecks.push(new Nu(r)),
      i.component
        ? Ki(e, null, a ? a.children : null, r, o)
        : Ki(e, null, n, r, o));
  return o;
}
function Mx(e, t, n) {
  if (typeof n == "function") return n(e, t);
  switch (n) {
    case "pathParamsChange":
      return !Tr(e.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !Tr(e.url, t.url) || !Lt(e.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Up(e, t) || !Lt(e.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !Up(e, t);
  }
}
function Ji(e, t, n) {
  let r = Ao(e),
    o = e.value;
  (Object.entries(r).forEach(([i, s]) => {
    o.component
      ? t
        ? Ji(s, t.children.getContext(i), n)
        : Ji(s, null, n)
      : Ji(s, t, n);
  }),
    o.component
      ? t && t.outlet && t.outlet.isActivated
        ? n.canDeactivateChecks.push(new ko(t.outlet.component, o))
        : n.canDeactivateChecks.push(new ko(null, o))
      : n.canDeactivateChecks.push(new ko(null, o)));
}
function ls(e) {
  return typeof e == "function";
}
function Nx(e) {
  return typeof e == "boolean";
}
function Rx(e) {
  return e && ls(e.canLoad);
}
function Ax(e) {
  return e && ls(e.canActivate);
}
function xx(e) {
  return e && ls(e.canActivateChild);
}
function Ox(e) {
  return e && ls(e.canDeactivate);
}
function kx(e) {
  return e && ls(e.canMatch);
}
function Sw(e) {
  return e instanceof Yt || e?.name === "EmptyError";
}
var lu = Symbol("INITIAL_VALUE");
function Uo() {
  return Ce((e) =>
    Xo(e.map((t) => t.pipe(Xe(1), vl(lu)))).pipe(
      k((t) => {
        for (let n of t)
          if (n !== !0) {
            if (n === lu) return lu;
            if (n === !1 || Px(n)) return n;
          }
        return !0;
      }),
      ce((t) => t !== lu),
      Xe(1),
    ),
  );
}
function Px(e) {
  return Ln(e) || e instanceof Vo;
}
function Fx(e, t) {
  return Z((n) => {
    let {
      targetSnapshot: r,
      currentSnapshot: o,
      guards: { canActivateChecks: i, canDeactivateChecks: s },
    } = n;
    return s.length === 0 && i.length === 0
      ? _(W(w({}, n), { guardsResult: !0 }))
      : Lx(s, r, o, e).pipe(
          Z((a) => (a && Nx(a) ? jx(r, i, e, t) : _(a))),
          k((a) => W(w({}, n), { guardsResult: a })),
        );
  });
}
function Lx(e, t, n, r) {
  return ee(e).pipe(
    Z((o) => $x(o.component, o.route, n, t, r)),
    Zt((o) => o !== !0, !0),
  );
}
function jx(e, t, n, r) {
  return ee(t).pipe(
    Ct((o) =>
      In(
        Vx(o.route.parent, r),
        Bx(o.route, r),
        Hx(e, o.path, n),
        Ux(e, o.route, n),
      ),
    ),
    Zt((o) => o !== !0, !0),
  );
}
function Bx(e, t) {
  return (e !== null && t && t(new bu(e)), _(!0));
}
function Vx(e, t) {
  return (e !== null && t && t(new wu(e)), _(!0));
}
function Ux(e, t, n) {
  let r = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!r || r.length === 0) return _(!0);
  let o = r.map((i) =>
    Jo(() => {
      let s = Ho(t) ?? n,
        a = $o(i, s),
        c = Ax(a) ? a.canActivate(t, e) : he(s, () => a(t, e));
      return fn(c).pipe(Zt());
    }),
  );
  return _(o).pipe(Uo());
}
function Hx(e, t, n) {
  let r = t[t.length - 1],
    i = t
      .slice(0, t.length - 1)
      .reverse()
      .map((s) => Sx(s))
      .filter((s) => s !== null)
      .map((s) =>
        Jo(() => {
          let a = s.guards.map((c) => {
            let u = Ho(s.node) ?? n,
              l = $o(c, u),
              d = xx(l) ? l.canActivateChild(r, e) : he(u, () => l(r, e));
            return fn(d).pipe(Zt());
          });
          return _(a).pipe(Uo());
        }),
      );
  return _(i).pipe(Uo());
}
function $x(e, t, n, r, o) {
  let i = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!i || i.length === 0) return _(!0);
  let s = i.map((a) => {
    let c = Ho(t) ?? o,
      u = $o(a, c),
      l = Ox(u) ? u.canDeactivate(e, t, n, r) : he(c, () => u(e, t, n, r));
    return fn(l).pipe(Zt());
  });
  return _(s).pipe(Uo());
}
function zx(e, t, n, r) {
  let o = t.canLoad;
  if (o === void 0 || o.length === 0) return _(!0);
  let i = o.map((s) => {
    let a = $o(s, e),
      c = Rx(a) ? a.canLoad(t, n) : he(e, () => a(t, n));
    return fn(c);
  });
  return _(i).pipe(Uo(), _w(r));
}
function _w(e) {
  return il(
    te((t) => {
      if (typeof t != "boolean") throw Mu(e, t);
    }),
    k((t) => t === !0),
  );
}
function Gx(e, t, n, r) {
  let o = t.canMatch;
  if (!o || o.length === 0) return _(!0);
  let i = o.map((s) => {
    let a = $o(s, e),
      c = kx(a) ? a.canMatch(t, n) : he(e, () => a(t, n));
    return fn(c);
  });
  return _(i).pipe(Uo(), _w(r));
}
var ss = class {
    segmentGroup;
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  as = class extends Error {
    urlTree;
    constructor(t) {
      (super(), (this.urlTree = t));
    }
  };
function Ro(e) {
  return qt(new ss(e));
}
function Wx(e) {
  return qt(new I(4e3, !1));
}
function qx(e) {
  return qt(bw(!1, ke.GuardRejected));
}
var zp = class {
  urlSerializer;
  urlTree;
  constructor(t, n) {
    ((this.urlSerializer = t), (this.urlTree = n));
  }
  lineralizeSegments(t, n) {
    let r = [],
      o = n.root;
    for (;;) {
      if (((r = r.concat(o.segments)), o.numberOfChildren === 0)) return _(r);
      if (o.numberOfChildren > 1 || !o.children[O])
        return Wx(`${t.redirectTo}`);
      o = o.children[O];
    }
  }
  applyRedirectCommands(t, n, r, o, i) {
    return Yx(n, o, i).pipe(
      k((s) => {
        if (s instanceof Bt) throw new as(s);
        let a = this.applyRedirectCreateUrlTree(
          s,
          this.urlSerializer.parse(s),
          t,
          r,
        );
        if (s[0] === "/") throw new as(a);
        return a;
      }),
    );
  }
  applyRedirectCreateUrlTree(t, n, r, o) {
    let i = this.createSegmentGroup(t, n.root, r, o);
    return new Bt(
      i,
      this.createQueryParams(n.queryParams, this.urlTree.queryParams),
      n.fragment,
    );
  }
  createQueryParams(t, n) {
    let r = {};
    return (
      Object.entries(t).forEach(([o, i]) => {
        if (typeof i == "string" && i[0] === ":") {
          let a = i.substring(1);
          r[o] = n[a];
        } else r[o] = i;
      }),
      r
    );
  }
  createSegmentGroup(t, n, r, o) {
    let i = this.createSegments(t, n.segments, r, o),
      s = {};
    return (
      Object.entries(n.children).forEach(([a, c]) => {
        s[a] = this.createSegmentGroup(t, c, r, o);
      }),
      new z(i, s)
    );
  }
  createSegments(t, n, r, o) {
    return n.map((i) =>
      i.path[0] === ":" ? this.findPosParam(t, i, o) : this.findOrReturn(i, r),
    );
  }
  findPosParam(t, n, r) {
    let o = r[n.path.substring(1)];
    if (!o) throw new I(4001, !1);
    return o;
  }
  findOrReturn(t, n) {
    let r = 0;
    for (let o of n) {
      if (o.path === t.path) return (n.splice(r), o);
      r++;
    }
    return t;
  }
};
function Yx(e, t, n) {
  if (typeof e == "string") return _(e);
  let r = e,
    {
      queryParams: o,
      fragment: i,
      routeConfig: s,
      url: a,
      outlet: c,
      params: u,
      data: l,
      title: d,
    } = t;
  return fn(
    he(n, () =>
      r({
        params: u,
        data: l,
        queryParams: o,
        fragment: i,
        routeConfig: s,
        url: a,
        outlet: c,
        title: d,
      }),
    ),
  );
}
var Gp = {
  matched: !1,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {},
};
function Zx(e, t, n, r, o) {
  let i = Mw(e, t, n);
  return i.matched
    ? ((r = yx(t, r)),
      Gx(r, t, n, o).pipe(k((s) => (s === !0 ? i : w({}, Gp)))))
    : _(i);
}
function Mw(e, t, n) {
  if (t.path === "**") return Qx(n);
  if (t.path === "")
    return t.pathMatch === "full" && (e.hasChildren() || n.length > 0)
      ? w({}, Gp)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: n,
          parameters: {},
          positionalParamSegments: {},
        };
  let o = (t.matcher || rw)(n, e, t);
  if (!o) return w({}, Gp);
  let i = {};
  Object.entries(o.posParams ?? {}).forEach(([a, c]) => {
    i[a] = c.path;
  });
  let s =
    o.consumed.length > 0
      ? w(w({}, i), o.consumed[o.consumed.length - 1].parameters)
      : i;
  return {
    matched: !0,
    consumedSegments: o.consumed,
    remainingSegments: n.slice(o.consumed.length),
    parameters: s,
    positionalParamSegments: o.posParams ?? {},
  };
}
function Qx(e) {
  return {
    matched: !0,
    parameters: e.length > 0 ? iw(e).parameters : {},
    consumedSegments: e,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ew(e, t, n, r) {
  return n.length > 0 && Jx(e, n, r)
    ? {
        segmentGroup: new z(t, Xx(r, new z(n, e.children))),
        slicedSegments: [],
      }
    : n.length === 0 && eO(e, n, r)
      ? {
          segmentGroup: new z(e.segments, Kx(e, n, r, e.children)),
          slicedSegments: n,
        }
      : { segmentGroup: new z(e.segments, e.children), slicedSegments: n };
}
function Kx(e, t, n, r) {
  let o = {};
  for (let i of n)
    if (Au(e, t, i) && !r[Dt(i)]) {
      let s = new z([], {});
      o[Dt(i)] = s;
    }
  return w(w({}, r), o);
}
function Xx(e, t) {
  let n = {};
  n[O] = t;
  for (let r of e)
    if (r.path === "" && Dt(r) !== O) {
      let o = new z([], {});
      n[Dt(r)] = o;
    }
  return n;
}
function Jx(e, t, n) {
  return n.some((r) => Au(e, t, r) && Dt(r) !== O);
}
function eO(e, t, n) {
  return n.some((r) => Au(e, t, r));
}
function Au(e, t, n) {
  return (e.hasChildren() || t.length > 0) && n.pathMatch === "full"
    ? !1
    : n.path === "";
}
function tO(e, t, n) {
  return t.length === 0 && !e.children[n];
}
var Wp = class {};
function nO(e, t, n, r, o, i, s = "emptyOnly") {
  return new qp(e, t, n, r, o, s, i).recognize();
}
var rO = 31,
  qp = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(t, n, r, o, i, s, a) {
      ((this.injector = t),
        (this.configLoader = n),
        (this.rootComponentType = r),
        (this.config = o),
        (this.urlTree = i),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new zp(this.urlSerializer, this.urlTree)));
    }
    noMatchError(t) {
      return new I(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = ew(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        k(({ children: n, rootSnapshot: r }) => {
          let o = new Ze(r, n),
            i = new os("", o),
            s = pw(r, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (i.url = this.urlSerializer.serialize(s)),
            { state: i, tree: s }
          );
        }),
      );
    }
    match(t) {
      let n = new Sr(
        [],
        Object.freeze({}),
        Object.freeze(w({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        O,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, t, O, n).pipe(
        k((r) => ({ children: r, rootSnapshot: n })),
        Ve((r) => {
          if (r instanceof as)
            return ((this.urlTree = r.urlTree), this.match(r.urlTree.root));
          throw r instanceof ss ? this.noMatchError(r) : r;
        }),
      );
    }
    processSegmentGroup(t, n, r, o, i) {
      return r.segments.length === 0 && r.hasChildren()
        ? this.processChildren(t, n, r, i)
        : this.processSegment(t, n, r, r.segments, o, !0, i).pipe(
            k((s) => (s instanceof Ze ? [s] : [])),
          );
    }
    processChildren(t, n, r, o) {
      let i = [];
      for (let s of Object.keys(r.children))
        s === "primary" ? i.unshift(s) : i.push(s);
      return ee(i).pipe(
        Ct((s) => {
          let a = r.children[s],
            c = vx(n, s);
          return this.processSegmentGroup(t, c, a, s, o);
        }),
        yl((s, a) => (s.push(...a), s)),
        wn(null),
        ml(),
        Z((s) => {
          if (s === null) return Ro(r);
          let a = Nw(s);
          return (oO(a), _(a));
        }),
      );
    }
    processSegment(t, n, r, o, i, s, a) {
      return ee(n).pipe(
        Ct((c) =>
          this.processSegmentAgainstRoute(
            c._injector ?? t,
            n,
            c,
            r,
            o,
            i,
            s,
            a,
          ).pipe(
            Ve((u) => {
              if (u instanceof ss) return _(null);
              throw u;
            }),
          ),
        ),
        Zt((c) => !!c),
        Ve((c) => {
          if (Sw(c)) return tO(r, o, i) ? _(new Wp()) : Ro(r);
          throw c;
        }),
      );
    }
    processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
      return Dt(r) !== s && (s === O || !Au(o, i, r))
        ? Ro(o)
        : r.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, o, r, i, s, c)
          : this.allowRedirects && a
            ? this.expandSegmentAgainstRouteUsingRedirect(t, o, n, r, i, s, c)
            : Ro(o);
    }
    expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s, a) {
      let {
        matched: c,
        parameters: u,
        consumedSegments: l,
        positionalParamSegments: d,
        remainingSegments: h,
      } = Mw(n, o, i);
      if (!c) return Ro(n);
      typeof o.redirectTo == "string" &&
        o.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > rO && (this.allowRedirects = !1));
      let f = new Sr(
          i,
          u,
          Object.freeze(w({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          tw(o),
          Dt(o),
          o.component ?? o._loadedComponent ?? null,
          o,
          nw(o),
        ),
        g = _u(f, a, this.paramsInheritanceStrategy);
      return (
        (f.params = Object.freeze(g.params)),
        (f.data = Object.freeze(g.data)),
        this.applyRedirects
          .applyRedirectCommands(l, o.redirectTo, d, f, t)
          .pipe(
            Ce((y) => this.applyRedirects.lineralizeSegments(o, y)),
            Z((y) => this.processSegment(t, r, n, y.concat(h), s, !1, a)),
          )
      );
    }
    matchSegmentAgainstRoute(t, n, r, o, i, s) {
      let a = Zx(n, r, o, t, this.urlSerializer);
      return (
        r.path === "**" && (n.children = {}),
        a.pipe(
          Ce((c) =>
            c.matched
              ? ((t = r._injector ?? t),
                this.getChildConfig(t, r, o).pipe(
                  Ce(({ routes: u }) => {
                    let l = r._loadedInjector ?? t,
                      {
                        parameters: d,
                        consumedSegments: h,
                        remainingSegments: f,
                      } = c,
                      g = new Sr(
                        h,
                        d,
                        Object.freeze(w({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        tw(r),
                        Dt(r),
                        r.component ?? r._loadedComponent ?? null,
                        r,
                        nw(r),
                      ),
                      E = _u(g, s, this.paramsInheritanceStrategy);
                    ((g.params = Object.freeze(E.params)),
                      (g.data = Object.freeze(E.data)));
                    let { segmentGroup: y, slicedSegments: v } = ew(n, h, f, u);
                    if (v.length === 0 && y.hasChildren())
                      return this.processChildren(l, u, y, g).pipe(
                        k((H) => new Ze(g, H)),
                      );
                    if (u.length === 0 && v.length === 0)
                      return _(new Ze(g, []));
                    let x = Dt(r) === i;
                    return this.processSegment(
                      l,
                      u,
                      y,
                      v,
                      x ? O : i,
                      !0,
                      g,
                    ).pipe(k((H) => new Ze(g, H instanceof Ze ? [H] : [])));
                  }),
                ))
              : Ro(n),
          ),
        )
      );
    }
    getChildConfig(t, n, r) {
      return n.children
        ? _({ routes: n.children, injector: t })
        : n.loadChildren
          ? n._loadedRoutes !== void 0
            ? _({ routes: n._loadedRoutes, injector: n._loadedInjector })
            : zx(t, n, r, this.urlSerializer).pipe(
                Z((o) =>
                  o
                    ? this.configLoader.loadChildren(t, n).pipe(
                        te((i) => {
                          ((n._loadedRoutes = i.routes),
                            (n._loadedInjector = i.injector));
                        }),
                      )
                    : qx(n),
                ),
              )
          : _({ routes: [], injector: t });
    }
  };
function oO(e) {
  e.sort((t, n) =>
    t.value.outlet === O
      ? -1
      : n.value.outlet === O
        ? 1
        : t.value.outlet.localeCompare(n.value.outlet),
  );
}
function iO(e) {
  let t = e.value.routeConfig;
  return t && t.path === "";
}
function Nw(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    if (!iO(r)) {
      t.push(r);
      continue;
    }
    let o = t.find((i) => r.value.routeConfig === i.value.routeConfig);
    o !== void 0 ? (o.children.push(...r.children), n.add(o)) : t.push(r);
  }
  for (let r of n) {
    let o = Nw(r.children);
    t.push(new Ze(r.value, o));
  }
  return t.filter((r) => !n.has(r));
}
function tw(e) {
  return e.data || {};
}
function nw(e) {
  return e.resolve || {};
}
function sO(e, t, n, r, o, i) {
  return Z((s) =>
    nO(e, t, n, r, s.extractedUrl, o, i).pipe(
      k(({ state: a, tree: c }) =>
        W(w({}, s), { targetSnapshot: a, urlAfterRedirects: c }),
      ),
    ),
  );
}
function aO(e, t) {
  return Z((n) => {
    let {
      targetSnapshot: r,
      guards: { canActivateChecks: o },
    } = n;
    if (!o.length) return _(n);
    let i = new Set(o.map((c) => c.route)),
      s = new Set();
    for (let c of i) if (!s.has(c)) for (let u of Rw(c)) s.add(u);
    let a = 0;
    return ee(s).pipe(
      Ct((c) =>
        i.has(c)
          ? cO(c, r, e, t)
          : ((c.data = _u(c, c.parent, e).resolve), _(void 0)),
      ),
      te(() => a++),
      Zr(1),
      Z((c) => (a === s.size ? _(n) : De)),
    );
  });
}
function Rw(e) {
  let t = e.children.map((n) => Rw(n)).flat();
  return [e, ...t];
}
function cO(e, t, n, r) {
  let o = e.routeConfig,
    i = e._resolve;
  return (
    o?.title !== void 0 && !Iw(o) && (i[cs] = o.title),
    Jo(
      () => (
        (e.data = _u(e, e.parent, n).resolve),
        uO(i, e, t, r).pipe(
          k(
            (s) => (
              (e._resolvedData = s),
              (e.data = w(w({}, e.data), s)),
              null
            ),
          ),
        )
      ),
    )
  );
}
function uO(e, t, n, r) {
  let o = Pp(e);
  if (o.length === 0) return _({});
  let i = {};
  return ee(o).pipe(
    Z((s) =>
      lO(e[s], t, n, r).pipe(
        Zt(),
        te((a) => {
          if (a instanceof Vo) throw Mu(new Fn(), a);
          i[s] = a;
        }),
      ),
    ),
    Zr(1),
    k(() => i),
    Ve((s) => (Sw(s) ? De : qt(s))),
  );
}
function lO(e, t, n, r) {
  let o = Ho(t) ?? r,
    i = $o(e, o),
    s = i.resolve ? i.resolve(t, n) : he(o, () => i(t, n));
  return fn(s);
}
function Op(e) {
  return Ce((t) => {
    let n = e(t);
    return n ? ee(n).pipe(k(() => t)) : _(t);
  });
}
var Jp = (() => {
    class e {
      buildTitle(n) {
        let r,
          o = n.root;
        for (; o !== void 0; )
          ((r = this.getResolvedTitleForRoute(o) ?? r),
            (o = o.children.find((i) => i.outlet === O)));
        return r;
      }
      getResolvedTitleForRoute(n) {
        return n.data[cs];
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: () => p(Aw), providedIn: "root" });
    }
    return e;
  })(),
  Aw = (() => {
    class e extends Jp {
      title;
      constructor(n) {
        (super(), (this.title = n));
      }
      updateTitle(n) {
        let r = this.buildTitle(n);
        r !== void 0 && this.title.setTitle(r);
      }
      static ɵfac = function (r) {
        return new (r || e)(S(YI));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  hn = new C("", { providedIn: "root", factory: () => ({}) }),
  Nr = new C(""),
  xu = (() => {
    class e {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = p(Gh);
      loadComponent(n, r) {
        if (this.componentLoaders.get(r)) return this.componentLoaders.get(r);
        if (r._loadedComponent) return _(r._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = fn(he(n, () => r.loadComponent())).pipe(
            k(Ow),
            te((s) => {
              (this.onLoadEndListener && this.onLoadEndListener(r),
                (r._loadedComponent = s));
            }),
            Cn(() => {
              this.componentLoaders.delete(r);
            }),
          ),
          i = new Gr(o, () => new ie()).pipe(zr());
        return (this.componentLoaders.set(r, i), i);
      }
      loadChildren(n, r) {
        if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
        if (r._loadedRoutes)
          return _({ routes: r._loadedRoutes, injector: r._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(r);
        let i = xw(r, this.compiler, n, this.onLoadEndListener).pipe(
            Cn(() => {
              this.childrenLoaders.delete(r);
            }),
          ),
          s = new Gr(i, () => new ie()).pipe(zr());
        return (this.childrenLoaders.set(r, s), s);
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
function xw(e, t, n, r) {
  return fn(he(n, () => e.loadChildren())).pipe(
    k(Ow),
    Z((o) =>
      o instanceof Rc || Array.isArray(o) ? _(o) : ee(t.compileModuleAsync(o)),
    ),
    k((o) => {
      r && r(e);
      let i,
        s,
        a = !1;
      return (
        Array.isArray(o)
          ? ((s = o), (a = !0))
          : ((i = o.create(n).injector),
            (s = i.get(Nr, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(Xp), injector: i }
      );
    }),
  );
}
function dO(e) {
  return e && typeof e == "object" && "default" in e;
}
function Ow(e) {
  return dO(e) ? e.default : e;
}
var Ou = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: () => p(fO), providedIn: "root" });
    }
    return e;
  })(),
  fO = (() => {
    class e {
      shouldProcessUrl(n) {
        return !0;
      }
      extract(n) {
        return n;
      }
      merge(n, r) {
        return n;
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  eg = new C(""),
  tg = new C("");
function kw(e, t, n) {
  let r = e.get(tg),
    o = e.get(Q);
  if (!o.startViewTransition || r.skipNextTransition)
    return ((r.skipNextTransition = !1), new Promise((u) => setTimeout(u)));
  let i,
    s = new Promise((u) => {
      i = u;
    }),
    a = o.startViewTransition(() => (i(), hO(e)));
  a.ready.catch((u) => {});
  let { onViewTransitionCreated: c } = r;
  return (c && he(e, () => c({ transition: a, from: t, to: n })), s);
}
function hO(e) {
  return new Promise((t) => {
    _h({ read: () => setTimeout(t) }, { injector: e });
  });
}
var ng = new C(""),
  ds = (() => {
    class e {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new ie();
      transitionAbortWithErrorSubject = new ie();
      configLoader = p(xu);
      environmentInjector = p(re);
      destroyRef = p(nn);
      urlSerializer = p(Bn);
      rootContexts = p(Mr);
      location = p(kn);
      inputBindingEnabled = p(us, { optional: !0 }) !== null;
      titleStrategy = p(Jp);
      options = p(hn, { optional: !0 }) || {};
      paramsInheritanceStrategy =
        this.options.paramsInheritanceStrategy || "emptyOnly";
      urlHandlingStrategy = p(Ou);
      createViewTransition = p(eg, { optional: !0 });
      navigationErrorHandler = p(ng, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => _(void 0);
      rootComponentType = null;
      destroyed = !1;
      constructor() {
        let n = (o) => this.events.next(new Eu(o)),
          r = (o) => this.events.next(new Iu(o));
        ((this.configLoader.onLoadEndListener = r),
          (this.configLoader.onLoadStartListener = n),
          this.destroyRef.onDestroy(() => {
            this.destroyed = !0;
          }));
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(n) {
        let r = ++this.navigationId;
        this.transitions?.next(
          W(w({}, n), {
            extractedUrl: this.urlHandlingStrategy.extract(n.rawUrl),
            targetSnapshot: null,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
            abortController: new AbortController(),
            id: r,
          }),
        );
      }
      setupNavigations(n) {
        return (
          (this.transitions = new pe(null)),
          this.transitions.pipe(
            ce((r) => r !== null),
            Ce((r) => {
              let o = !1;
              return _(r).pipe(
                Ce((i) => {
                  if (this.navigationId > r.id)
                    return (
                      this.cancelNavigationTransition(
                        r,
                        "",
                        ke.SupersededByNewNavigation,
                      ),
                      De
                    );
                  ((this.currentTransition = r),
                    (this.currentNavigation = {
                      id: i.id,
                      initialUrl: i.rawUrl,
                      extractedUrl: i.extractedUrl,
                      targetBrowserUrl:
                        typeof i.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(i.extras.browserUrl)
                          : i.extras.browserUrl,
                      trigger: i.source,
                      extras: i.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? W(w({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                      abort: () => i.abortController.abort(),
                    }));
                  let s =
                      !n.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    a = i.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                  if (!s && a !== "reload") {
                    let c = "";
                    return (
                      this.events.next(
                        new Vt(
                          i.id,
                          this.urlSerializer.serialize(i.rawUrl),
                          c,
                          Po.IgnoredSameUrlNavigation,
                        ),
                      ),
                      i.resolve(!1),
                      De
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(i.rawUrl))
                    return _(i).pipe(
                      Ce(
                        (c) => (
                          this.events.next(
                            new jn(
                              c.id,
                              this.urlSerializer.serialize(c.extractedUrl),
                              c.source,
                              c.restoredState,
                            ),
                          ),
                          c.id !== this.navigationId ? De : Promise.resolve(c)
                        ),
                      ),
                      sO(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        n.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      te((c) => {
                        ((r.targetSnapshot = c.targetSnapshot),
                          (r.urlAfterRedirects = c.urlAfterRedirects),
                          (this.currentNavigation = W(
                            w({}, this.currentNavigation),
                            { finalUrl: c.urlAfterRedirects },
                          )));
                        let u = new ts(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot,
                        );
                        this.events.next(u);
                      }),
                    );
                  if (
                    s &&
                    this.urlHandlingStrategy.shouldProcessUrl(i.currentRawUrl)
                  ) {
                    let {
                        id: c,
                        extractedUrl: u,
                        source: l,
                        restoredState: d,
                        extras: h,
                      } = i,
                      f = new jn(c, this.urlSerializer.serialize(u), l, d);
                    this.events.next(f);
                    let g = Dw(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = r =
                        W(w({}, i), {
                          targetSnapshot: g,
                          urlAfterRedirects: u,
                          extras: W(w({}, h), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = u),
                      _(r)
                    );
                  } else {
                    let c = "";
                    return (
                      this.events.next(
                        new Vt(
                          i.id,
                          this.urlSerializer.serialize(i.extractedUrl),
                          c,
                          Po.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      i.resolve(!1),
                      De
                    );
                  }
                }),
                te((i) => {
                  let s = new mu(
                    i.id,
                    this.urlSerializer.serialize(i.extractedUrl),
                    this.urlSerializer.serialize(i.urlAfterRedirects),
                    i.targetSnapshot,
                  );
                  this.events.next(s);
                }),
                k(
                  (i) => (
                    (this.currentTransition = r =
                      W(w({}, i), {
                        guards: Tx(
                          i.targetSnapshot,
                          i.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    r
                  ),
                ),
                Fx(this.environmentInjector, (i) => this.events.next(i)),
                te((i) => {
                  if (
                    ((r.guardsResult = i.guardsResult),
                    i.guardsResult && typeof i.guardsResult != "boolean")
                  )
                    throw Mu(this.urlSerializer, i.guardsResult);
                  let s = new yu(
                    i.id,
                    this.urlSerializer.serialize(i.extractedUrl),
                    this.urlSerializer.serialize(i.urlAfterRedirects),
                    i.targetSnapshot,
                    !!i.guardsResult,
                  );
                  this.events.next(s);
                }),
                ce((i) =>
                  i.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(i, "", ke.GuardRejected),
                      !1),
                ),
                Op((i) => {
                  if (i.guards.canActivateChecks.length !== 0)
                    return _(i).pipe(
                      te((s) => {
                        let a = new vu(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                          s.targetSnapshot,
                        );
                        this.events.next(a);
                      }),
                      Ce((s) => {
                        let a = !1;
                        return _(s).pipe(
                          aO(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          te({
                            next: () => (a = !0),
                            complete: () => {
                              a ||
                                this.cancelNavigationTransition(
                                  s,
                                  "",
                                  ke.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      te((s) => {
                        let a = new Du(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                          s.targetSnapshot,
                        );
                        this.events.next(a);
                      }),
                    );
                }),
                Op((i) => {
                  let s = (a) => {
                    let c = [];
                    if (
                      a.routeConfig?.loadComponent &&
                      !a.routeConfig._loadedComponent
                    ) {
                      let u = Ho(a) ?? this.environmentInjector;
                      c.push(
                        this.configLoader.loadComponent(u, a.routeConfig).pipe(
                          te((l) => {
                            a.component = l;
                          }),
                          k(() => {}),
                        ),
                      );
                    }
                    for (let u of a.children) c.push(...s(u));
                    return c;
                  };
                  return Xo(s(i.targetSnapshot.root)).pipe(wn(null), Xe(1));
                }),
                Op(() => this.afterPreactivation()),
                Ce(() => {
                  let { currentSnapshot: i, targetSnapshot: s } = r,
                    a = this.createViewTransition?.(
                      this.environmentInjector,
                      i.root,
                      s.root,
                    );
                  return a ? ee(a).pipe(k(() => r)) : _(r);
                }),
                k((i) => {
                  let s = Ex(
                    n.routeReuseStrategy,
                    i.targetSnapshot,
                    i.currentRouterState,
                  );
                  return (
                    (this.currentTransition = r =
                      W(w({}, i), { targetRouterState: s })),
                    (this.currentNavigation.targetRouterState = s),
                    r
                  );
                }),
                te(() => {
                  this.events.next(new ns());
                }),
                bx(
                  this.rootContexts,
                  n.routeReuseStrategy,
                  (i) => this.events.next(i),
                  this.inputBindingEnabled,
                ),
                Xe(1),
                ei(
                  new P((i) => {
                    let s = r.abortController.signal,
                      a = () => i.next();
                    return (
                      s.addEventListener("abort", a),
                      () => s.removeEventListener("abort", a)
                    );
                  }).pipe(
                    ce(() => !o && !r.targetRouterState),
                    te(() => {
                      this.cancelNavigationTransition(
                        r,
                        r.abortController.signal.reason + "",
                        ke.Aborted,
                      );
                    }),
                  ),
                ),
                te({
                  next: (i) => {
                    ((o = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new it(
                          i.id,
                          this.urlSerializer.serialize(i.extractedUrl),
                          this.urlSerializer.serialize(i.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        i.targetRouterState.snapshot,
                      ),
                      i.resolve(!0));
                  },
                  complete: () => {
                    o = !0;
                  },
                }),
                ei(
                  this.transitionAbortWithErrorSubject.pipe(
                    te((i) => {
                      throw i;
                    }),
                  ),
                ),
                Cn(() => {
                  (o ||
                    this.cancelNavigationTransition(
                      r,
                      "",
                      ke.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === r.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null)));
                }),
                Ve((i) => {
                  if (this.destroyed) return (r.resolve(!1), De);
                  if (((o = !0), Tw(i)))
                    (this.events.next(
                      new jt(
                        r.id,
                        this.urlSerializer.serialize(r.extractedUrl),
                        i.message,
                        i.cancellationCode,
                      ),
                    ),
                      Cx(i)
                        ? this.events.next(
                            new Bo(i.url, i.navigationBehaviorOptions),
                          )
                        : r.resolve(!1));
                  else {
                    let s = new Fo(
                      r.id,
                      this.urlSerializer.serialize(r.extractedUrl),
                      i,
                      r.targetSnapshot ?? void 0,
                    );
                    try {
                      let a = he(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(s),
                      );
                      if (a instanceof Vo) {
                        let { message: c, cancellationCode: u } = Mu(
                          this.urlSerializer,
                          a,
                        );
                        (this.events.next(
                          new jt(
                            r.id,
                            this.urlSerializer.serialize(r.extractedUrl),
                            c,
                            u,
                          ),
                        ),
                          this.events.next(
                            new Bo(a.redirectTo, a.navigationBehaviorOptions),
                          ));
                      } else throw (this.events.next(s), i);
                    } catch (a) {
                      this.options.resolveNavigationPromiseOnError
                        ? r.resolve(!1)
                        : r.reject(a);
                    }
                  }
                  return De;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(n, r, o) {
        let i = new jt(
          n.id,
          this.urlSerializer.serialize(n.extractedUrl),
          r,
          o,
        );
        (this.events.next(i), n.resolve(!1));
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let n = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          r =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          n.toString() !== r?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
function pO(e) {
  return e !== Oo;
}
var Pw = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: () => p(gO), providedIn: "root" });
    }
    return e;
  })(),
  Ru = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, n) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, n) {
      return t.routeConfig === n.routeConfig;
    }
  },
  gO = (() => {
    class e extends Ru {
      static ɵfac = (() => {
        let n;
        return function (o) {
          return (n || (n = _i(e)))(o || e);
        };
      })();
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  Fw = (() => {
    class e {
      urlSerializer = p(Bn);
      options = p(hn, { optional: !0 }) || {};
      canceledNavigationResolution =
        this.options.canceledNavigationResolution || "replace";
      location = p(kn);
      urlHandlingStrategy = p(Ou);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new Bt();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      createBrowserPath({ finalUrl: n, initialUrl: r, targetBrowserUrl: o }) {
        let i = n !== void 0 ? this.urlHandlingStrategy.merge(n, r) : r,
          s = o ?? i;
        return s instanceof Bt ? this.urlSerializer.serialize(s) : s;
      }
      commitTransition({ targetRouterState: n, finalUrl: r, initialUrl: o }) {
        r && n
          ? ((this.currentUrlTree = r),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(r, o)),
            (this.routerState = n))
          : (this.rawUrlTree = o);
      }
      routerState = Dw(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      updateStateMemento() {
        this.stateMemento = this.createStateMemento();
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      resetInternalState({ finalUrl: n }) {
        ((this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n ?? this.rawUrlTree,
          )));
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: () => p(mO), providedIn: "root" });
    }
    return e;
  })(),
  mO = (() => {
    class e extends Fw {
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      registerNonRouterCurrentEntryChangeListener(n) {
        return this.location.subscribe((r) => {
          r.type === "popstate" &&
            setTimeout(() => {
              n(r.url, r.state, "popstate");
            });
        });
      }
      handleRouterEvent(n, r) {
        n instanceof jn
          ? this.updateStateMemento()
          : n instanceof Vt
            ? this.commitTransition(r)
            : n instanceof ts
              ? this.urlUpdateStrategy === "eager" &&
                (r.extras.skipLocationChange ||
                  this.setBrowserUrl(this.createBrowserPath(r), r))
              : n instanceof ns
                ? (this.commitTransition(r),
                  this.urlUpdateStrategy === "deferred" &&
                    !r.extras.skipLocationChange &&
                    this.setBrowserUrl(this.createBrowserPath(r), r))
                : n instanceof jt &&
                    n.code !== ke.SupersededByNewNavigation &&
                    n.code !== ke.Redirect
                  ? this.restoreHistory(r)
                  : n instanceof Fo
                    ? this.restoreHistory(r, !0)
                    : n instanceof it &&
                      ((this.lastSuccessfulId = n.id),
                      (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(n, { extras: r, id: o }) {
        let { replaceUrl: i, state: s } = r;
        if (this.location.isCurrentPathEqualTo(n) || i) {
          let a = this.browserPageId,
            c = w(w({}, s), this.generateNgRouterState(o, a));
          this.location.replaceState(n, "", c);
        } else {
          let a = w(
            w({}, s),
            this.generateNgRouterState(o, this.browserPageId + 1),
          );
          this.location.go(n, "", a);
        }
      }
      restoreHistory(n, r = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let o = this.browserPageId,
            i = this.currentPageId - o;
          i !== 0
            ? this.location.historyGo(i)
            : this.getCurrentUrlTree() === n.finalUrl &&
              i === 0 &&
              (this.resetInternalState(n), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (r && this.resetInternalState(n), this.resetUrlToCurrentUrlTree());
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.getRawUrlTree()),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(n, r) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: n, ɵrouterPageId: r }
          : { navigationId: n };
      }
      static ɵfac = (() => {
        let n;
        return function (o) {
          return (n || (n = _i(e)))(o || e);
        };
      })();
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
function ku(e, t) {
  e.events
    .pipe(
      ce(
        (n) =>
          n instanceof it ||
          n instanceof jt ||
          n instanceof Fo ||
          n instanceof Vt,
      ),
      k((n) =>
        n instanceof it || n instanceof Vt
          ? 0
          : (
                n instanceof jt
                  ? n.code === ke.Redirect ||
                    n.code === ke.SupersededByNewNavigation
                  : !1
              )
            ? 2
            : 1,
      ),
      ce((n) => n !== 2),
      Xe(1),
    )
    .subscribe(() => {
      t();
    });
}
var yO = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  vO = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  st = (() => {
    class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = p(Pc);
      stateManager = p(Fw);
      options = p(hn, { optional: !0 }) || {};
      pendingTasks = p(xt);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = p(ds);
      urlSerializer = p(Bn);
      location = p(kn);
      urlHandlingStrategy = p(Ou);
      injector = p(re);
      _events = new ie();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = p(Pw);
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = p(Nr, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!p(us, { optional: !0 });
      constructor() {
        (this.resetConfig(this.config),
          this.navigationTransitions.setupNavigations(this).subscribe({
            error: (n) => {
              this.console.warn(n);
            },
          }),
          this.subscribeToNavigationEvents());
      }
      eventsSubscription = new X();
      subscribeToNavigationEvents() {
        let n = this.navigationTransitions.events.subscribe((r) => {
          try {
            let o = this.navigationTransitions.currentTransition,
              i = this.navigationTransitions.currentNavigation;
            if (o !== null && i !== null) {
              if (
                (this.stateManager.handleRouterEvent(r, i),
                r instanceof jt &&
                  r.code !== ke.Redirect &&
                  r.code !== ke.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (r instanceof it) this.navigated = !0;
              else if (r instanceof Bo) {
                let s = r.navigationBehaviorOptions,
                  a = this.urlHandlingStrategy.merge(r.url, o.currentRawUrl),
                  c = w(
                    {
                      browserUrl: o.extras.browserUrl,
                      info: o.extras.info,
                      skipLocationChange: o.extras.skipLocationChange,
                      replaceUrl:
                        o.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        pO(o.source),
                    },
                    s,
                  );
                this.scheduleNavigation(a, Oo, null, c, {
                  resolve: o.resolve,
                  reject: o.reject,
                  promise: o.promise,
                });
              }
            }
            mx(r) && this._events.next(r);
          } catch (o) {
            this.navigationTransitions.transitionAbortWithErrorSubject.next(o);
          }
        });
        this.eventsSubscription.add(n);
      }
      resetRootComponentType(n) {
        ((this.routerState.root.component = n),
          (this.navigationTransitions.rootComponentType = n));
      }
      initialNavigation() {
        (this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Oo,
              this.stateManager.restoredState(),
            ));
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (n, r, o) => {
              this.navigateToSyncWithBrowser(n, o, r);
            },
          );
      }
      navigateToSyncWithBrowser(n, r, o) {
        let i = { replaceUrl: !0 },
          s = o?.navigationId ? o : null;
        if (o) {
          let c = w({}, o);
          (delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (i.state = c));
        }
        let a = this.parseUrl(n);
        this.scheduleNavigation(a, r, s, i).catch((c) => {
          this.disposed || this.injector.get(Ae)(c);
        });
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(n) {
        ((this.config = n.map(Xp)), (this.navigated = !1));
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        (this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe());
      }
      createUrlTree(n, r = {}) {
        let {
            relativeTo: o,
            queryParams: i,
            fragment: s,
            queryParamsHandling: a,
            preserveFragment: c,
          } = r,
          u = c ? this.currentUrlTree.fragment : s,
          l = null;
        switch (a ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            l = w(w({}, this.currentUrlTree.queryParams), i);
            break;
          case "preserve":
            l = this.currentUrlTree.queryParams;
            break;
          default:
            l = i || null;
        }
        l !== null && (l = this.removeEmptyProps(l));
        let d;
        try {
          let h = o ? o.snapshot : this.routerState.snapshot.root;
          d = gw(h);
        } catch {
          ((typeof n[0] != "string" || n[0][0] !== "/") && (n = []),
            (d = this.currentUrlTree.root));
        }
        return mw(d, n, l, u ?? null);
      }
      navigateByUrl(n, r = { skipLocationChange: !1 }) {
        let o = Ln(n) ? n : this.parseUrl(n),
          i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(i, Oo, null, r);
      }
      navigate(n, r = { skipLocationChange: !1 }) {
        return (DO(n), this.navigateByUrl(this.createUrlTree(n, r), r));
      }
      serializeUrl(n) {
        return this.urlSerializer.serialize(n);
      }
      parseUrl(n) {
        try {
          return this.urlSerializer.parse(n);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(n, r) {
        let o;
        if (
          (r === !0 ? (o = w({}, yO)) : r === !1 ? (o = w({}, vO)) : (o = r),
          Ln(n))
        )
          return QI(this.currentUrlTree, n, o);
        let i = this.parseUrl(n);
        return QI(this.currentUrlTree, i, o);
      }
      removeEmptyProps(n) {
        return Object.entries(n).reduce(
          (r, [o, i]) => (i != null && (r[o] = i), r),
          {},
        );
      }
      scheduleNavigation(n, r, o, i, s) {
        if (this.disposed) return Promise.resolve(!1);
        let a, c, u;
        s
          ? ((a = s.resolve), (c = s.reject), (u = s.promise))
          : (u = new Promise((d, h) => {
              ((a = d), (c = h));
            }));
        let l = this.pendingTasks.add();
        return (
          ku(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(l));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: r,
            restoredState: o,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: n,
            extras: i,
            resolve: a,
            reject: c,
            promise: u,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          u.catch((d) => Promise.reject(d))
        );
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
function DO(e) {
  for (let t = 0; t < e.length; t++) if (e[t] == null) throw new I(4008, !1);
}
var Lw = (() => {
  class e {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = lr(null);
    get href() {
      return bo(this.reactiveHref);
    }
    set href(n) {
      this.reactiveHref.set(n);
    }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new ie();
    applicationErrorHandler = p(Ae);
    options = p(hn, { optional: !0 });
    constructor(n, r, o, i, s, a) {
      ((this.router = n),
        (this.route = r),
        (this.tabIndexAttribute = o),
        (this.renderer = i),
        (this.el = s),
        (this.locationStrategy = a),
        this.reactiveHref.set(p(new $c("href"), { optional: !0 })));
      let c = s.nativeElement.tagName?.toLowerCase();
      ((this.isAnchorElement =
        c === "a" ||
        c === "area" ||
        !!(
          typeof customElements == "object" &&
          customElements.get(c)?.observedAttributes?.includes?.("href")
        )),
        this.isAnchorElement
          ? this.setTabIndexIfNotOnNativeEl("0")
          : this.subscribeToNavigationEventsIfNecessary());
    }
    subscribeToNavigationEventsIfNecessary() {
      if (this.subscription !== void 0 || !this.isAnchorElement) return;
      let n = this.preserveFragment,
        r = (o) => o === "merge" || o === "preserve";
      ((n ||= r(this.queryParamsHandling)),
        (n ||=
          !this.queryParamsHandling &&
          !r(this.options?.defaultQueryParamsHandling)),
        n &&
          (this.subscription = this.router.events.subscribe((o) => {
            o instanceof it && this.updateHref();
          })));
    }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(n) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue("tabindex", n);
    }
    ngOnChanges(n) {
      (this.isAnchorElement &&
        (this.updateHref(), this.subscribeToNavigationEventsIfNecessary()),
        this.onChanges.next(this));
    }
    routerLinkInput = null;
    set routerLink(n) {
      n == null
        ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
        : (Ln(n)
            ? (this.routerLinkInput = n)
            : (this.routerLinkInput = Array.isArray(n) ? n : [n]),
          this.setTabIndexIfNotOnNativeEl("0"));
    }
    onClick(n, r, o, i, s) {
      let a = this.urlTree;
      if (
        a === null ||
        (this.isAnchorElement &&
          (n !== 0 ||
            r ||
            o ||
            i ||
            s ||
            (typeof this.target == "string" && this.target != "_self")))
      )
        return !0;
      let c = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return (
        this.router.navigateByUrl(a, c)?.catch((u) => {
          this.applicationErrorHandler(u);
        }),
        !this.isAnchorElement
      );
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let n = this.urlTree;
      this.reactiveHref.set(
        n !== null && this.locationStrategy
          ? (this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(n),
            ) ?? "")
          : null,
      );
    }
    applyAttributeValue(n, r) {
      let o = this.renderer,
        i = this.el.nativeElement;
      r !== null ? o.setAttribute(i, n, r) : o.removeAttribute(i, n);
    }
    get urlTree() {
      return this.routerLinkInput === null
        ? null
        : Ln(this.routerLinkInput)
          ? this.routerLinkInput
          : this.router.createUrlTree(this.routerLinkInput, {
              relativeTo:
                this.relativeTo !== void 0 ? this.relativeTo : this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: this.preserveFragment,
            });
    }
    static ɵfac = function (r) {
      return new (r || e)(V(st), V(Ut), Mi("tabindex"), V(un), V(We), V(ot));
    };
    static ɵdir = Oe({
      type: e,
      selectors: [["", "routerLink", ""]],
      hostVars: 2,
      hostBindings: function (r, o) {
        (r & 1 &&
          Vc("click", function (s) {
            return o.onClick(
              s.button,
              s.ctrlKey,
              s.shiftKey,
              s.altKey,
              s.metaKey,
            );
          }),
          r & 2 && Co("href", o.reactiveHref(), Qf)("target", o.target));
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [2, "preserveFragment", "preserveFragment", Bi],
        skipLocationChange: [2, "skipLocationChange", "skipLocationChange", Bi],
        replaceUrl: [2, "replaceUrl", "replaceUrl", Bi],
        routerLink: "routerLink",
      },
      features: [ht],
    });
  }
  return e;
})();
var fs = class {},
  EO = (() => {
    class e {
      preload(n, r) {
        return r().pipe(Ve(() => _(null)));
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var jw = (() => {
    class e {
      router;
      injector;
      preloadingStrategy;
      loader;
      subscription;
      constructor(n, r, o, i) {
        ((this.router = n),
          (this.injector = r),
          (this.preloadingStrategy = o),
          (this.loader = i));
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            ce((n) => n instanceof it),
            Ct(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(n, r) {
        let o = [];
        for (let i of r) {
          i.providers &&
            !i._injector &&
            (i._injector = Dr(i.providers, n, `Route: ${i.path}`));
          let s = i._injector ?? n,
            a = i._loadedInjector ?? s;
          (((i.loadChildren && !i._loadedRoutes && i.canLoad === void 0) ||
            (i.loadComponent && !i._loadedComponent)) &&
            o.push(this.preloadConfig(s, i)),
            (i.children || i._loadedRoutes) &&
              o.push(this.processRoutes(a, i.children ?? i._loadedRoutes)));
        }
        return ee(o).pipe(En());
      }
      preloadConfig(n, r) {
        return this.preloadingStrategy.preload(r, () => {
          let o;
          r.loadChildren && r.canLoad === void 0
            ? (o = this.loader.loadChildren(n, r))
            : (o = _(null));
          let i = o.pipe(
            Z((s) =>
              s === null
                ? _(void 0)
                : ((r._loadedRoutes = s.routes),
                  (r._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? n, s.routes)),
            ),
          );
          if (r.loadComponent && !r._loadedComponent) {
            let s = this.loader.loadComponent(n, r);
            return ee([i, s]).pipe(En());
          } else return i;
        });
      }
      static ɵfac = function (r) {
        return new (r || e)(S(st), S(re), S(fs), S(xu));
      };
      static ɵprov = D({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  og = new C(""),
  Bw = (() => {
    class e {
      urlSerializer;
      transitions;
      viewportScroller;
      zone;
      options;
      routerEventsSubscription;
      scrollEventsSubscription;
      lastId = 0;
      lastSource = Oo;
      restoredId = 0;
      store = {};
      constructor(n, r, o, i, s = {}) {
        ((this.urlSerializer = n),
          (this.transitions = r),
          (this.viewportScroller = o),
          (this.zone = i),
          (this.options = s),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled"));
      }
      init() {
        (this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents()));
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof jn
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = n.navigationTrigger),
              (this.restoredId = n.restoredState
                ? n.restoredState.navigationId
                : 0))
            : n instanceof it
              ? ((this.lastId = n.id),
                this.scheduleScrollEvent(
                  n,
                  this.urlSerializer.parse(n.urlAfterRedirects).fragment,
                ))
              : n instanceof Vt &&
                n.code === Po.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  n,
                  this.urlSerializer.parse(n.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof jo &&
            (n.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(n.position)
              : n.anchor && this.options.anchorScrolling === "enabled"
                ? this.viewportScroller.scrollToAnchor(n.anchor)
                : this.options.scrollPositionRestoration !== "disabled" &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(n, r) {
        this.zone.runOutsideAngular(() =>
          yn(this, null, function* () {
            (yield new Promise((o) => {
              (setTimeout(o),
                typeof requestAnimationFrame < "u" && requestAnimationFrame(o));
            }),
              this.zone.run(() => {
                this.transitions.events.next(
                  new jo(
                    n,
                    this.lastSource === "popstate"
                      ? this.store[this.restoredId]
                      : null,
                    r,
                  ),
                );
              }));
          }),
        );
      }
      ngOnDestroy() {
        (this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe());
      }
      static ɵfac = function (r) {
        mh();
      };
      static ɵprov = D({ token: e, factory: e.ɵfac });
    }
    return e;
  })();
function IO(e, ...t) {
  return _t([
    { provide: Nr, multi: !0, useValue: e },
    [],
    { provide: Ut, useFactory: Vw, deps: [st] },
    { provide: On, multi: !0, useFactory: Uw },
    t.map((n) => n.ɵproviders),
  ]);
}
function Vw(e) {
  return e.routerState.root;
}
function Vn(e, t) {
  return { ɵkind: e, ɵproviders: t };
}
function wO(e = {}) {
  return Vn(4, [
    {
      provide: og,
      useFactory: () => {
        let n = p(lp),
          r = p(Y),
          o = p(ds),
          i = p(Bn);
        return new Bw(i, o, n, r, e);
      },
    },
  ]);
}
function Uw() {
  let e = p(Se);
  return (t) => {
    let n = e.get(gt);
    if (t !== n.components[0]) return;
    let r = e.get(st),
      o = e.get(Hw);
    (e.get(ig) === 1 && r.initialNavigation(),
      e.get(Gw, null, { optional: !0 })?.setUpPreloading(),
      e.get(og, null, { optional: !0 })?.init(),
      r.resetRootComponentType(n.componentTypes[0]),
      o.closed || (o.next(), o.complete(), o.unsubscribe()));
  };
}
var Hw = new C("", { factory: () => new ie() }),
  ig = new C("", { providedIn: "root", factory: () => 1 });
function $w() {
  let e = [
    { provide: ig, useValue: 0 },
    Lc(() => {
      let t = p(Se);
      return t.get(rp, Promise.resolve()).then(
        () =>
          new Promise((r) => {
            let o = t.get(st),
              i = t.get(Hw);
            (ku(o, () => {
              r(!0);
            }),
              (t.get(ds).afterPreactivation = () => (
                r(!0),
                i.closed ? _(void 0) : i
              )),
              o.initialNavigation());
          }),
      );
    }),
  ];
  return Vn(2, e);
}
function zw() {
  let e = [
    Lc(() => {
      p(st).setUpLocationChangeListener();
    }),
    { provide: ig, useValue: 2 },
  ];
  return Vn(3, e);
}
var Gw = new C("");
function Ww(e) {
  return Vn(0, [
    { provide: Gw, useExisting: jw },
    { provide: fs, useExisting: e },
  ]);
}
function CO(e) {
  return Vn(5, [{ provide: hn, useValue: e }]);
}
function bO() {
  return Vn(6, [{ provide: ot, useClass: Qc }]);
}
function qw() {
  return Vn(8, [Qp, { provide: us, useExisting: Qp }]);
}
function Yw(e) {
  Be("NgRouterViewTransitions");
  let t = [
    { provide: eg, useValue: kw },
    {
      provide: tg,
      useValue: w({ skipNextTransition: !!e?.skipInitialTransition }, e),
    },
  ];
  return Vn(9, t);
}
var Zw = [
    kn,
    { provide: Bn, useClass: Fn },
    st,
    Mr,
    { provide: Ut, useFactory: Vw, deps: [st] },
    xu,
    [],
  ],
  TO = (() => {
    class e {
      constructor() {}
      static forRoot(n, r) {
        return {
          ngModule: e,
          providers: [
            Zw,
            [],
            { provide: Nr, multi: !0, useValue: n },
            [],
            r?.errorHandler ? { provide: ng, useValue: r.errorHandler } : [],
            { provide: hn, useValue: r || {} },
            r?.useHash ? _O() : MO(),
            SO(),
            r?.preloadingStrategy ? Ww(r.preloadingStrategy).ɵproviders : [],
            r?.initialNavigation ? NO(r) : [],
            r?.bindToComponentInputs ? qw().ɵproviders : [],
            r?.enableViewTransitions ? Yw().ɵproviders : [],
            RO(),
          ],
        };
      }
      static forChild(n) {
        return {
          ngModule: e,
          providers: [{ provide: Nr, multi: !0, useValue: n }],
        };
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵmod = Pt({ type: e });
      static ɵinj = ut({});
    }
    return e;
  })();
function SO() {
  return {
    provide: og,
    useFactory: () => {
      let e = p(lp),
        t = p(Y),
        n = p(hn),
        r = p(ds),
        o = p(Bn);
      return (
        n.scrollOffset && e.setOffset(n.scrollOffset),
        new Bw(o, r, e, t, n)
      );
    },
  };
}
function _O() {
  return { provide: ot, useClass: Qc };
}
function MO() {
  return { provide: ot, useClass: qc };
}
function NO(e) {
  return [
    e.initialNavigation === "disabled" ? zw().ɵproviders : [],
    e.initialNavigation === "enabledBlocking" ? $w().ɵproviders : [],
  ];
}
var rg = new C("");
function RO() {
  return [
    { provide: rg, useFactory: Uw },
    { provide: On, multi: !0, useExisting: rg },
  ];
}
function AO(e, t, n) {
  return (
    (t = OO(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Qw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qw(Object(n), !0).forEach(function (r) {
          AO(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qw(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function xO(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OO(e) {
  var t = xO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
var Kw = () => {},
  Mg = {},
  CC = {},
  bC = null,
  TC = { mark: Kw, measure: Kw };
try {
  (typeof window < "u" && (Mg = window),
    typeof document < "u" && (CC = document),
    typeof MutationObserver < "u" && (bC = MutationObserver),
    typeof performance < "u" && (TC = performance));
} catch {}
var { userAgent: Xw = "" } = Mg.navigator || {},
  Hn = Mg,
  K = CC,
  Jw = bC,
  Pu = TC,
  r6 = !!Hn.document,
  mn =
    !!K.documentElement &&
    !!K.head &&
    typeof K.addEventListener == "function" &&
    typeof K.createElement == "function",
  SC = ~Xw.indexOf("MSIE") || ~Xw.indexOf("Trident/"),
  kO = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  PO =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  _C = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
  },
  FO = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  MC = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  Ee = "classic",
  Uu = "duotone",
  LO = "sharp",
  jO = "sharp-duotone",
  NC = [Ee, Uu, LO, jO],
  BO = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
  },
  VO = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
  },
  UO = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  HO = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab",
    },
    duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt",
    },
  },
  $O = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  eC = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  zO = ["kit"],
  GO = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  WO = ["fak", "fakd"],
  qO = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  tC = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  Fu = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  YO = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  ZO = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  QO = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  KO = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
  },
  XO = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  },
  dg = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
  },
  JO = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
  ],
  fg = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...YO,
    ...JO,
  ],
  ek = ["solid", "regular", "light", "thin", "duotone", "brands"],
  RC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  tk = RC.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  nk = [
    ...Object.keys(XO),
    ...ek,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    Fu.GROUP,
    Fu.SWAP_OPACITY,
    Fu.PRIMARY,
    Fu.SECONDARY,
  ]
    .concat(RC.map((e) => "".concat(e, "x")))
    .concat(tk.map((e) => "w-".concat(e))),
  rk = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  pn = "___FONT_AWESOME___",
  hg = 16,
  AC = "fa",
  xC = "svg-inline--fa",
  Ar = "data-fa-i2svg",
  pg = "data-fa-pseudo-element",
  ok = "data-fa-pseudo-element-pending",
  Ng = "data-prefix",
  Rg = "data-icon",
  nC = "fontawesome-i2svg",
  ik = "async",
  sk = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  OC = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function vs(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Ee];
    },
  });
}
var kC = m({}, _C);
kC[Ee] = m(
  m(m(m({}, { "fa-duotone": "duotone" }), _C[Ee]), eC.kit),
  eC["kit-duotone"],
);
var ak = vs(kC),
  gg = m({}, HO);
gg[Ee] = m(m(m(m({}, { duotone: "fad" }), gg[Ee]), tC.kit), tC["kit-duotone"]);
var rC = vs(gg),
  mg = m({}, dg);
mg[Ee] = m(m({}, mg[Ee]), qO.kit);
var Ag = vs(mg),
  yg = m({}, KO);
yg[Ee] = m(m({}, yg[Ee]), GO.kit);
var o6 = vs(yg),
  ck = kO,
  PC = "fa-layers-text",
  uk = PO,
  lk = m({}, BO),
  i6 = vs(lk),
  dk = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  sg = FO,
  fk = [...zO, ...nk],
  ps = Hn.FontAwesomeConfig || {};
function hk(e) {
  var t = K.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function pk(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
K &&
  typeof K.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((t) => {
    let [n, r] = t,
      o = pk(hk(n));
    o != null && (ps[r] = o);
  });
var FC = {
  styleDefault: "solid",
  familyDefault: Ee,
  cssPrefix: AC,
  replacementClass: xC,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
ps.familyPrefix && (ps.cssPrefix = ps.familyPrefix);
var Wo = m(m({}, FC), ps);
Wo.autoReplaceSvg || (Wo.observeMutations = !1);
var T = {};
Object.keys(FC).forEach((e) => {
  Object.defineProperty(T, e, {
    enumerable: !0,
    set: function (t) {
      ((Wo[e] = t), gs.forEach((n) => n(T)));
    },
    get: function () {
      return Wo[e];
    },
  });
});
Object.defineProperty(T, "familyPrefix", {
  enumerable: !0,
  set: function (e) {
    ((Wo.cssPrefix = e), gs.forEach((t) => t(T)));
  },
  get: function () {
    return Wo.cssPrefix;
  },
});
Hn.FontAwesomeConfig = T;
var gs = [];
function gk(e) {
  return (
    gs.push(e),
    () => {
      gs.splice(gs.indexOf(e), 1);
    }
  );
}
var Un = hg,
  Ht = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function mk(e) {
  if (!e || !mn) return;
  let t = K.createElement("style");
  (t.setAttribute("type", "text/css"), (t.innerHTML = e));
  let n = K.head.childNodes,
    r = null;
  for (let o = n.length - 1; o > -1; o--) {
    let i = n[o],
      s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
  }
  return (K.head.insertBefore(t, r), e);
}
var yk = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ms() {
  let e = 12,
    t = "";
  for (; e-- > 0; ) t += yk[(Math.random() * 62) | 0];
  return t;
}
function qo(e) {
  let t = [];
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function xg(e) {
  return e.classList
    ? qo(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function LC(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function vk(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + "".concat(n, '="').concat(LC(e[n]), '" '), "")
    .trim();
}
function Hu(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
    "",
  );
}
function Og(e) {
  return (
    e.size !== Ht.size ||
    e.x !== Ht.x ||
    e.y !== Ht.y ||
    e.rotate !== Ht.rotate ||
    e.flipX ||
    e.flipY
  );
}
function Dk(e) {
  let { transform: t, containerWidth: n, iconWidth: r } = e,
    o = { transform: "translate(".concat(n / 2, " 256)") },
    i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    s = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    a = "rotate(".concat(t.rotate, " 0 0)"),
    c = { transform: "".concat(i, " ").concat(s, " ").concat(a) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: o, inner: c, path: u };
}
function Ek(e) {
  let {
      transform: t,
      width: n = hg,
      height: r = hg,
      startCentered: o = !1,
    } = e,
    i = "";
  return (
    o && SC
      ? (i += "translate("
          .concat(t.x / Un - n / 2, "em, ")
          .concat(t.y / Un - r / 2, "em) "))
      : o
        ? (i += "translate(calc(-50% + "
            .concat(t.x / Un, "em), calc(-50% + ")
            .concat(t.y / Un, "em)) "))
        : (i += "translate(".concat(t.x / Un, "em, ").concat(t.y / Un, "em) ")),
    (i += "scale("
      .concat((t.size / Un) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Un) * (t.flipY ? -1 : 1), ") ")),
    (i += "rotate(".concat(t.rotate, "deg) ")),
    i
  );
}
var Ik = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function jC() {
  let e = AC,
    t = xC,
    n = T.cssPrefix,
    r = T.replacementClass,
    o = Ik;
  if (n !== e || r !== t) {
    let i = new RegExp("\\.".concat(e, "\\-"), "g"),
      s = new RegExp("\\--".concat(e, "\\-"), "g"),
      a = new RegExp("\\.".concat(t), "g");
    o = o
      .replace(i, ".".concat(n, "-"))
      .replace(s, "--".concat(n, "-"))
      .replace(a, ".".concat(r));
  }
  return o;
}
var oC = !1;
function ag() {
  T.autoAddCss && !oC && (mk(jC()), (oC = !0));
}
var wk = {
    mixout() {
      return { dom: { css: jC, insertCss: ag } };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          ag();
        },
        beforeI2svg() {
          ag();
        },
      };
    },
  },
  gn = Hn || {};
gn[pn] || (gn[pn] = {});
gn[pn].styles || (gn[pn].styles = {});
gn[pn].hooks || (gn[pn].hooks = {});
gn[pn].shims || (gn[pn].shims = []);
var $t = gn[pn],
  BC = [],
  VC = function () {
    (K.removeEventListener("DOMContentLoaded", VC),
      (Bu = 1),
      BC.map((e) => e()));
  },
  Bu = !1;
mn &&
  ((Bu = (K.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    K.readyState,
  )),
  Bu || K.addEventListener("DOMContentLoaded", VC));
function Ck(e) {
  mn && (Bu ? setTimeout(e, 0) : BC.push(e));
}
function Ds(e) {
  let { tag: t, attributes: n = {}, children: r = [] } = e;
  return typeof e == "string"
    ? LC(e)
    : "<"
        .concat(t, " ")
        .concat(vk(n), ">")
        .concat(r.map(Ds).join(""), "</")
        .concat(t, ">");
}
function iC(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var bk = function (t, n) {
    return function (r, o, i, s) {
      return t.call(n, r, o, i, s);
    };
  },
  cg = function (t, n, r, o) {
    var i = Object.keys(t),
      s = i.length,
      a = o !== void 0 ? bk(n, o) : n,
      c,
      u,
      l;
    for (
      r === void 0 ? ((c = 1), (l = t[i[0]])) : ((c = 0), (l = r));
      c < s;
      c++
    )
      ((u = i[c]), (l = a(l, t[u], u, t)));
    return l;
  };
function Tk(e) {
  let t = [],
    n = 0,
    r = e.length;
  for (; n < r; ) {
    let o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      let i = e.charCodeAt(n++);
      (i & 64512) == 56320
        ? t.push(((o & 1023) << 10) + (i & 1023) + 65536)
        : (t.push(o), n--);
    } else t.push(o);
  }
  return t;
}
function vg(e) {
  let t = Tk(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Sk(e, t) {
  let n = e.length,
    r = e.charCodeAt(t),
    o;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((o = e.charCodeAt(t + 1)), o >= 56320 && o <= 57343)
    ? (r - 55296) * 1024 + o - 56320 + 65536
    : r;
}
function sC(e) {
  return Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return (!!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t);
  }, {});
}
function Dg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    { skipHooks: r = !1 } = n,
    o = sC(t);
  (typeof $t.hooks.addPack == "function" && !r
    ? $t.hooks.addPack(e, sC(t))
    : ($t.styles[e] = m(m({}, $t.styles[e] || {}), o)),
    e === "fas" && Dg("fa", t));
}
var { styles: ys, shims: _k } = $t,
  UC = Object.keys(Ag),
  Mk = UC.reduce((e, t) => ((e[t] = Object.keys(Ag[t])), e), {}),
  kg = null,
  HC = {},
  $C = {},
  zC = {},
  GC = {},
  WC = {};
function Nk(e) {
  return ~fk.indexOf(e);
}
function Rk(e, t) {
  let n = t.split("-"),
    r = n[0],
    o = n.slice(1).join("-");
  return r === e && o !== "" && !Nk(o) ? o : null;
}
var qC = () => {
  let e = (r) => cg(ys, (o, i, s) => ((o[s] = cg(i, r, {})), o), {});
  ((HC = e(
    (r, o, i) => (
      o[3] && (r[o[3]] = i),
      o[2] &&
        o[2]
          .filter((a) => typeof a == "number")
          .forEach((a) => {
            r[a.toString(16)] = i;
          }),
      r
    ),
  )),
    ($C = e(
      (r, o, i) => (
        (r[i] = i),
        o[2] &&
          o[2]
            .filter((a) => typeof a == "string")
            .forEach((a) => {
              r[a] = i;
            }),
        r
      ),
    )),
    (WC = e((r, o, i) => {
      let s = o[2];
      return (
        (r[i] = i),
        s.forEach((a) => {
          r[a] = i;
        }),
        r
      );
    })));
  let t = "far" in ys || T.autoFetchSvg,
    n = cg(
      _k,
      (r, o) => {
        let i = o[0],
          s = o[1],
          a = o[2];
        return (
          s === "far" && !t && (s = "fas"),
          typeof i == "string" && (r.names[i] = { prefix: s, iconName: a }),
          typeof i == "number" &&
            (r.unicodes[i.toString(16)] = { prefix: s, iconName: a }),
          r
        );
      },
      { names: {}, unicodes: {} },
    );
  ((zC = n.names),
    (GC = n.unicodes),
    (kg = $u(T.styleDefault, { family: T.familyDefault })));
};
gk((e) => {
  kg = $u(e.styleDefault, { family: T.familyDefault });
});
qC();
function Pg(e, t) {
  return (HC[e] || {})[t];
}
function Ak(e, t) {
  return ($C[e] || {})[t];
}
function Rr(e, t) {
  return (WC[e] || {})[t];
}
function YC(e) {
  return zC[e] || { prefix: null, iconName: null };
}
function xk(e) {
  let t = GC[e],
    n = Pg("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function $n() {
  return kg;
}
var ZC = () => ({ prefix: null, iconName: null, rest: [] });
function Ok(e) {
  let t = Ee,
    n = UC.reduce(
      (r, o) => ((r[o] = "".concat(T.cssPrefix, "-").concat(o)), r),
      {},
    );
  return (
    NC.forEach((r) => {
      (e.includes(n[r]) || e.some((o) => Mk[r].includes(o))) && (t = r);
    }),
    t
  );
}
function $u(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    { family: n = Ee } = t,
    r = ak[n][e];
  if (n === Uu && !e) return "fad";
  let o = rC[n][e] || rC[n][r],
    i = e in $t.styles ? e : null;
  return o || i || null;
}
function kk(e) {
  let t = [],
    n = null;
  return (
    e.forEach((r) => {
      let o = Rk(T.cssPrefix, r);
      o ? (n = o) : r && t.push(r);
    }),
    { iconName: n, rest: t }
  );
}
function aC(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function zu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    { skipLookups: n = !1 } = t,
    r = null,
    o = fg.concat(ZO),
    i = aC(e.filter((d) => o.includes(d))),
    s = aC(e.filter((d) => !fg.includes(d))),
    a = i.filter((d) => ((r = d), !MC.includes(d))),
    [c = null] = a,
    u = Ok(i),
    l = m(m({}, kk(s)), {}, { prefix: $u(c, { family: u }) });
  return m(
    m(
      m({}, l),
      jk({
        values: e,
        family: u,
        styles: ys,
        config: T,
        canonical: l,
        givenPrefix: r,
      }),
    ),
    Pk(n, r, l),
  );
}
function Pk(e, t, n) {
  let { prefix: r, iconName: o } = n;
  if (e || !r || !o) return { prefix: r, iconName: o };
  let i = t === "fa" ? YC(o) : {},
    s = Rr(r, o);
  return (
    (o = i.iconName || s || o),
    (r = i.prefix || r),
    r === "far" && !ys.far && ys.fas && !T.autoFetchSvg && (r = "fas"),
    { prefix: r, iconName: o }
  );
}
var Fk = NC.filter((e) => e !== Ee || e !== Uu),
  Lk = Object.keys(dg)
    .filter((e) => e !== Ee)
    .map((e) => Object.keys(dg[e]))
    .flat();
function jk(e) {
  let {
      values: t,
      family: n,
      canonical: r,
      givenPrefix: o = "",
      styles: i = {},
      config: s = {},
    } = e,
    a = n === Uu,
    c = t.includes("fa-duotone") || t.includes("fad"),
    u = s.familyDefault === "duotone",
    l = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (
    (!a && (c || u || l) && (r.prefix = "fad"),
    (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"),
    !r.prefix &&
      Fk.includes(n) &&
      (Object.keys(i).find((h) => Lk.includes(h)) || s.autoFetchSvg))
  ) {
    let h = UO.get(n).defaultShortPrefixId;
    ((r.prefix = h), (r.iconName = Rr(r.prefix, r.iconName) || r.iconName));
  }
  return ((r.prefix === "fa" || o === "fa") && (r.prefix = $n() || "fas"), r);
}
var Eg = class {
    constructor() {
      this.definitions = {};
    }
    add() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      let o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach((i) => {
        ((this.definitions[i] = m(m({}, this.definitions[i] || {}), o[i])),
          Dg(i, o[i]));
        let s = Ag[Ee][i];
        (s && Dg(s, o[i]), qC());
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(t, n) {
      let r = n.prefix && n.iconName && n.icon ? { 0: n } : n;
      return (
        Object.keys(r).map((o) => {
          let { prefix: i, iconName: s, icon: a } = r[o],
            c = a[2];
          (t[i] || (t[i] = {}),
            c.length > 0 &&
              c.forEach((u) => {
                typeof u == "string" && (t[i][u] = a);
              }),
            (t[i][s] = a));
        }),
        t
      );
    }
  },
  cC = [],
  zo = {},
  Go = {},
  Bk = Object.keys(Go);
function Vk(e, t) {
  let { mixoutsTo: n } = t;
  return (
    (cC = e),
    (zo = {}),
    Object.keys(Go).forEach((r) => {
      Bk.indexOf(r) === -1 && delete Go[r];
    }),
    cC.forEach((r) => {
      let o = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(o).forEach((i) => {
          (typeof o[i] == "function" && (n[i] = o[i]),
            typeof o[i] == "object" &&
              Object.keys(o[i]).forEach((s) => {
                (n[i] || (n[i] = {}), (n[i][s] = o[i][s]));
              }));
        }),
        r.hooks)
      ) {
        let i = r.hooks();
        Object.keys(i).forEach((s) => {
          (zo[s] || (zo[s] = []), zo[s].push(i[s]));
        });
      }
      r.provides && r.provides(Go);
    }),
    n
  );
}
function Ig(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  return (
    (zo[e] || []).forEach((s) => {
      t = s.apply(null, [t, ...r]);
    }),
    t
  );
}
function xr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (zo[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function zn() {
  let e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Go[e] ? Go[e].apply(null, t) : void 0;
}
function wg(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let { iconName: t } = e,
    n = e.prefix || $n();
  if (t)
    return (
      (t = Rr(n, t) || t),
      iC(QC.definitions, n, t) || iC($t.styles, n, t)
    );
}
var QC = new Eg(),
  Uk = () => {
    ((T.autoReplaceSvg = !1), (T.observeMutations = !1), xr("noAuto"));
  },
  Hk = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return mn
        ? (xr("beforeI2svg", e), zn("pseudoElements2svg", e), zn("i2svg", e))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        { autoReplaceSvgRoot: t } = e;
      (T.autoReplaceSvg === !1 && (T.autoReplaceSvg = !0),
        (T.observeMutations = !0),
        Ck(() => {
          (zk({ autoReplaceSvgRoot: t }), xr("watch", e));
        }));
    },
  },
  $k = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == "object" && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: Rr(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        let t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
          n = $u(e[0]);
        return { prefix: n, iconName: Rr(n, t) || t };
      }
      if (
        typeof e == "string" &&
        (e.indexOf("".concat(T.cssPrefix, "-")) > -1 || e.match(ck))
      ) {
        let t = zu(e.split(" "), { skipLookups: !0 });
        return {
          prefix: t.prefix || $n(),
          iconName: Rr(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == "string") {
        let t = $n();
        return { prefix: t, iconName: Rr(t, e) || e };
      }
    },
  },
  Ke = {
    noAuto: Uk,
    config: T,
    dom: Hk,
    parse: $k,
    library: QC,
    findIconDefinition: wg,
    toHtml: Ds,
  },
  zk = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { autoReplaceSvgRoot: t = K } = e;
    (Object.keys($t.styles).length > 0 || T.autoFetchSvg) &&
      mn &&
      T.autoReplaceSvg &&
      Ke.dom.i2svg({ node: t });
  };
function Gu(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map((n) => Ds(n));
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (!mn) return;
        let n = K.createElement("div");
        return ((n.innerHTML = e.html), n.children);
      },
    }),
    e
  );
}
function Gk(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: i,
    transform: s,
  } = e;
  if (Og(s) && n.found && !r.found) {
    let { width: a, height: c } = n,
      u = { x: a / c / 2, y: 0.5 };
    o.style = Hu(
      m(
        m({}, i),
        {},
        {
          "transform-origin": ""
            .concat(u.x + s.x / 16, "em ")
            .concat(u.y + s.y / 16, "em"),
        },
      ),
    );
  }
  return [{ tag: "svg", attributes: o, children: t }];
}
function Wk(e) {
  let { prefix: t, iconName: n, children: r, attributes: o, symbol: i } = e,
    s = i === !0 ? "".concat(t, "-").concat(T.cssPrefix, "-").concat(n) : i;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: m(m({}, o), {}, { id: s }), children: r },
      ],
    },
  ];
}
function Fg(e) {
  let {
      icons: { main: t, mask: n },
      prefix: r,
      iconName: o,
      transform: i,
      symbol: s,
      title: a,
      maskId: c,
      titleId: u,
      extra: l,
      watchable: d = !1,
    } = e,
    { width: h, height: f } = n.found ? n : t,
    g = WO.includes(r),
    E = [T.replacementClass, o ? "".concat(T.cssPrefix, "-").concat(o) : ""]
      .filter((ae) => l.classes.indexOf(ae) === -1)
      .filter((ae) => ae !== "" || !!ae)
      .concat(l.classes)
      .join(" "),
    y = {
      children: [],
      attributes: m(
        m({}, l.attributes),
        {},
        {
          "data-prefix": r,
          "data-icon": o,
          class: E,
          role: l.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(h, " ").concat(f),
        },
      ),
    },
    v =
      g && !~l.classes.indexOf("fa-fw")
        ? { width: "".concat((h / f) * 16 * 0.0625, "em") }
        : {};
  (d && (y.attributes[Ar] = ""),
    a &&
      (y.children.push({
        tag: "title",
        attributes: {
          id: y.attributes["aria-labelledby"] || "title-".concat(u || ms()),
        },
        children: [a],
      }),
      delete y.attributes.title));
  let x = m(
      m({}, y),
      {},
      {
        prefix: r,
        iconName: o,
        main: t,
        mask: n,
        maskId: c,
        transform: i,
        symbol: s,
        styles: m(m({}, v), l.styles),
      },
    ),
    { children: H, attributes: B } =
      n.found && t.found
        ? zn("generateAbstractMask", x) || { children: [], attributes: {} }
        : zn("generateAbstractIcon", x) || { children: [], attributes: {} };
  return ((x.children = H), (x.attributes = B), s ? Wk(x) : Gk(x));
}
function uC(e) {
  let {
      content: t,
      width: n,
      height: r,
      transform: o,
      title: i,
      extra: s,
      watchable: a = !1,
    } = e,
    c = m(
      m(m({}, s.attributes), i ? { title: i } : {}),
      {},
      { class: s.classes.join(" ") },
    );
  a && (c[Ar] = "");
  let u = m({}, s.styles);
  Og(o) &&
    ((u.transform = Ek({
      transform: o,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (u["-webkit-transform"] = u.transform));
  let l = Hu(u);
  l.length > 0 && (c.style = l);
  let d = [];
  return (
    d.push({ tag: "span", attributes: c, children: [t] }),
    i &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
    d
  );
}
function qk(e) {
  let { content: t, title: n, extra: r } = e,
    o = m(
      m(m({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") },
    ),
    i = Hu(r.styles);
  i.length > 0 && (o.style = i);
  let s = [];
  return (
    s.push({ tag: "span", attributes: o, children: [t] }),
    n &&
      s.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    s
  );
}
var { styles: ug } = $t;
function Cg(e) {
  let t = e[0],
    n = e[1],
    [r] = e.slice(4),
    o = null;
  return (
    Array.isArray(r)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(T.cssPrefix, "-").concat(sg.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(T.cssPrefix, "-").concat(sg.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(T.cssPrefix, "-").concat(sg.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var Yk = { found: !1, width: 512, height: 512 };
function Zk(e, t) {
  !OC &&
    !T.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'),
    );
}
function bg(e, t) {
  let n = t;
  return (
    t === "fa" && T.styleDefault !== null && (t = $n()),
    new Promise((r, o) => {
      if (n === "fa") {
        let i = YC(e) || {};
        ((e = i.iconName || e), (t = i.prefix || t));
      }
      if (e && t && ug[t] && ug[t][e]) {
        let i = ug[t][e];
        return r(Cg(i));
      }
      (Zk(e, t),
        r(
          m(
            m({}, Yk),
            {},
            {
              icon:
                T.showMissingIcons && e ? zn("missingIconAbstract") || {} : {},
            },
          ),
        ));
    })
  );
}
var lC = () => {},
  Tg =
    T.measurePerformance && Pu && Pu.mark && Pu.measure
      ? Pu
      : { mark: lC, measure: lC },
  hs = 'FA "6.7.2"',
  Qk = (e) => (Tg.mark("".concat(hs, " ").concat(e, " begins")), () => KC(e)),
  KC = (e) => {
    (Tg.mark("".concat(hs, " ").concat(e, " ends")),
      Tg.measure(
        "".concat(hs, " ").concat(e),
        "".concat(hs, " ").concat(e, " begins"),
        "".concat(hs, " ").concat(e, " ends"),
      ));
  },
  Lg = { begin: Qk, end: KC },
  Lu = () => {};
function dC(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ar) : null) == "string";
}
function Kk(e) {
  let t = e.getAttribute ? e.getAttribute(Ng) : null,
    n = e.getAttribute ? e.getAttribute(Rg) : null;
  return t && n;
}
function Xk(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(T.replacementClass)
  );
}
function Jk() {
  return T.autoReplaceSvg === !0
    ? ju.replace
    : ju[T.autoReplaceSvg] || ju.replace;
}
function eP(e) {
  return K.createElementNS("http://www.w3.org/2000/svg", e);
}
function tP(e) {
  return K.createElement(e);
}
function XC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    { ceFn: n = e.tag === "svg" ? eP : tP } = t;
  if (typeof e == "string") return K.createTextNode(e);
  let r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (i) {
      r.setAttribute(i, e.attributes[i]);
    }),
    (e.children || []).forEach(function (i) {
      r.appendChild(XC(i, { ceFn: n }));
    }),
    r
  );
}
function nP(e) {
  let t = " ".concat(e.outerHTML, " ");
  return ((t = "".concat(t, "Font Awesome fontawesome.com ")), t);
}
var ju = {
  replace: function (e) {
    let t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((n) => {
          t.parentNode.insertBefore(XC(n), t);
        }),
        t.getAttribute(Ar) === null && T.keepOriginalSource)
      ) {
        let n = K.createComment(nP(t));
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    let t = e[0],
      n = e[1];
    if (~xg(t).indexOf(T.replacementClass)) return ju.replace(e);
    let r = new RegExp("".concat(T.cssPrefix, "-.*"));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      let i = n[0].attributes.class
        .split(" ")
        .reduce(
          (s, a) => (
            a === T.replacementClass || a.match(r)
              ? s.toSvg.push(a)
              : s.toNode.push(a),
            s
          ),
          { toNode: [], toSvg: [] },
        );
      ((n[0].attributes.class = i.toSvg.join(" ")),
        i.toNode.length === 0
          ? t.removeAttribute("class")
          : t.setAttribute("class", i.toNode.join(" ")));
    }
    let o = n.map((i) => Ds(i)).join(`
`);
    (t.setAttribute(Ar, ""), (t.innerHTML = o));
  },
};
function fC(e) {
  e();
}
function JC(e, t) {
  let n = typeof t == "function" ? t : Lu;
  if (e.length === 0) n();
  else {
    let r = fC;
    (T.mutateApproach === ik && (r = Hn.requestAnimationFrame || fC),
      r(() => {
        let o = Jk(),
          i = Lg.begin("mutate");
        (e.map(o), i(), n());
      }));
  }
}
var jg = !1;
function eb() {
  jg = !0;
}
function Sg() {
  jg = !1;
}
var Vu = null;
function hC(e) {
  if (!Jw || !T.observeMutations) return;
  let {
    treeCallback: t = Lu,
    nodeCallback: n = Lu,
    pseudoElementsCallback: r = Lu,
    observeMutationsRoot: o = K,
  } = e;
  ((Vu = new Jw((i) => {
    if (jg) return;
    let s = $n();
    qo(i).forEach((a) => {
      if (
        (a.type === "childList" &&
          a.addedNodes.length > 0 &&
          !dC(a.addedNodes[0]) &&
          (T.searchPseudoElements && r(a.target), t(a.target)),
        a.type === "attributes" &&
          a.target.parentNode &&
          T.searchPseudoElements &&
          r(a.target.parentNode),
        a.type === "attributes" && dC(a.target) && ~dk.indexOf(a.attributeName))
      )
        if (a.attributeName === "class" && Kk(a.target)) {
          let { prefix: c, iconName: u } = zu(xg(a.target));
          (a.target.setAttribute(Ng, c || s),
            u && a.target.setAttribute(Rg, u));
        } else Xk(a.target) && n(a.target);
    });
  })),
    mn &&
      Vu.observe(o, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      }));
}
function rP() {
  Vu && Vu.disconnect();
}
function oP(e) {
  let t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce((r, o) => {
        let i = o.split(":"),
          s = i[0],
          a = i.slice(1);
        return (s && a.length > 0 && (r[s] = a.join(":").trim()), r);
      }, {})),
    n
  );
}
function iP(e) {
  let t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    o = zu(xg(e));
  return (
    o.prefix || (o.prefix = $n()),
    t && n && ((o.prefix = t), (o.iconName = n)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        r.length > 0 &&
        (o.iconName =
          Ak(o.prefix, e.innerText) || Pg(o.prefix, vg(e.innerText))),
      !o.iconName &&
        T.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = e.firstChild.data)),
    o
  );
}
function sP(e) {
  let t = qo(e.attributes).reduce(
      (o, i) => (
        o.name !== "class" && o.name !== "style" && (o[i.name] = i.value),
        o
      ),
      {},
    ),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    T.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(T.replacementClass, "-title-")
            .concat(r || ms()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function aP() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ht,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function pC(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    { iconName: n, prefix: r, rest: o } = iP(e),
    i = sP(e),
    s = Ig("parseNodeAttributes", {}, e),
    a = t.styleParser ? oP(e) : [];
  return m(
    {
      iconName: n,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: r,
      transform: Ht,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: a, attributes: i },
    },
    s,
  );
}
var { styles: cP } = $t;
function tb(e) {
  let t = T.autoReplaceSvg === "nest" ? pC(e, { styleParser: !1 }) : pC(e);
  return ~t.extra.classes.indexOf(PC)
    ? zn("generateLayersText", e, t)
    : zn("generateSvgReplacementMutation", e, t);
}
function uP() {
  return [...$O, ...fg];
}
function gC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!mn) return Promise.resolve();
  let n = K.documentElement.classList,
    r = (l) => n.add("".concat(nC, "-").concat(l)),
    o = (l) => n.remove("".concat(nC, "-").concat(l)),
    i = T.autoFetchSvg ? uP() : MC.concat(Object.keys(cP));
  i.includes("fa") || i.push("fa");
  let s = [".".concat(PC, ":not([").concat(Ar, "])")]
    .concat(i.map((l) => ".".concat(l, ":not([").concat(Ar, "])")))
    .join(", ");
  if (s.length === 0) return Promise.resolve();
  let a = [];
  try {
    a = qo(e.querySelectorAll(s));
  } catch {}
  if (a.length > 0) (r("pending"), o("complete"));
  else return Promise.resolve();
  let c = Lg.begin("onTree"),
    u = a.reduce((l, d) => {
      try {
        let h = tb(d);
        h && l.push(h);
      } catch (h) {
        OC || (h.name === "MissingIcon" && console.error(h));
      }
      return l;
    }, []);
  return new Promise((l, d) => {
    Promise.all(u)
      .then((h) => {
        JC(h, () => {
          (r("active"),
            r("complete"),
            o("pending"),
            typeof t == "function" && t(),
            c(),
            l());
        });
      })
      .catch((h) => {
        (c(), d(h));
      });
  });
}
function lP(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  tb(e).then((n) => {
    n && JC([n], t);
  });
}
function dP(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : wg(t || {}),
      { mask: o } = n;
    return (
      o && (o = (o || {}).icon ? o : wg(o || {})),
      e(r, m(m({}, n), {}, { mask: o }))
    );
  };
}
var fP = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      {
        transform: n = Ht,
        symbol: r = !1,
        mask: o = null,
        maskId: i = null,
        title: s = null,
        titleId: a = null,
        classes: c = [],
        attributes: u = {},
        styles: l = {},
      } = t;
    if (!e) return;
    let { prefix: d, iconName: h, icon: f } = e;
    return Gu(
      m({ type: "icon" }, e),
      () => (
        xr("beforeDOMElementCreation", { iconDefinition: e, params: t }),
        T.autoA11y &&
          (s
            ? (u["aria-labelledby"] = ""
                .concat(T.replacementClass, "-title-")
                .concat(a || ms()))
            : ((u["aria-hidden"] = "true"), (u.focusable = "false"))),
        Fg({
          icons: {
            main: Cg(f),
            mask: o
              ? Cg(o.icon)
              : { found: !1, width: null, height: null, icon: {} },
          },
          prefix: d,
          iconName: h,
          transform: m(m({}, Ht), n),
          symbol: r,
          title: s,
          maskId: i,
          titleId: a,
          extra: { attributes: u, styles: l, classes: c },
        })
      ),
    );
  },
  hP = {
    mixout() {
      return { icon: dP(fP) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return ((e.treeCallback = gC), (e.nodeCallback = lP), e);
        },
      };
    },
    provides(e) {
      ((e.i2svg = function (t) {
        let { node: n = K, callback: r = () => {} } = t;
        return gC(n, r);
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          let {
            iconName: r,
            title: o,
            titleId: i,
            prefix: s,
            transform: a,
            symbol: c,
            mask: u,
            maskId: l,
            extra: d,
          } = n;
          return new Promise((h, f) => {
            Promise.all([
              bg(r, s),
              u.iconName
                ? bg(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((g) => {
                let [E, y] = g;
                h([
                  t,
                  Fg({
                    icons: { main: E, mask: y },
                    prefix: s,
                    iconName: r,
                    transform: a,
                    symbol: c,
                    maskId: l,
                    title: o,
                    titleId: i,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(f);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let {
              children: n,
              attributes: r,
              main: o,
              transform: i,
              styles: s,
            } = t,
            a = Hu(s);
          a.length > 0 && (r.style = a);
          let c;
          return (
            Og(i) &&
              (c = zn("generateAbstractTransformGrouping", {
                main: o,
                transform: i,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            n.push(c || o.icon),
            { children: n, attributes: r }
          );
        }));
    },
  },
  pP = {
    mixout() {
      return {
        layer(e) {
          let t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            { classes: n = [] } = t;
          return Gu({ type: "layer" }, () => {
            xr("beforeDOMElementCreation", { assembler: e, params: t });
            let r = [];
            return (
              e((o) => {
                Array.isArray(o)
                  ? o.map((i) => {
                      r = r.concat(i.abstract);
                    })
                  : (r = r.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(T.cssPrefix, "-layers"), ...n].join(" "),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  gP = {
    mixout() {
      return {
        counter(e) {
          let t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            {
              title: n = null,
              classes: r = [],
              attributes: o = {},
              styles: i = {},
            } = t;
          return Gu(
            { type: "counter", content: e },
            () => (
              xr("beforeDOMElementCreation", { content: e, params: t }),
              qk({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: o,
                  styles: i,
                  classes: ["".concat(T.cssPrefix, "-layers-counter"), ...r],
                },
              })
            ),
          );
        },
      };
    },
  },
  mP = {
    mixout() {
      return {
        text(e) {
          let t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            {
              transform: n = Ht,
              title: r = null,
              classes: o = [],
              attributes: i = {},
              styles: s = {},
            } = t;
          return Gu(
            { type: "text", content: e },
            () => (
              xr("beforeDOMElementCreation", { content: e, params: t }),
              uC({
                content: e,
                transform: m(m({}, Ht), n),
                title: r,
                extra: {
                  attributes: i,
                  styles: s,
                  classes: ["".concat(T.cssPrefix, "-layers-text"), ...o],
                },
              })
            ),
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        let { title: r, transform: o, extra: i } = n,
          s = null,
          a = null;
        if (SC) {
          let c = parseInt(getComputedStyle(t).fontSize, 10),
            u = t.getBoundingClientRect();
          ((s = u.width / c), (a = u.height / c));
        }
        return (
          T.autoA11y && !r && (i.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            t,
            uC({
              content: t.innerHTML,
              width: s,
              height: a,
              transform: o,
              title: r,
              extra: i,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  yP = new RegExp('"', "ug"),
  mC = [1105920, 1112319],
  yC = m(
    m(m(m({}, { FontAwesome: { normal: "fas", 400: "fas" } }), VO), rk),
    QO,
  ),
  _g = Object.keys(yC).reduce((e, t) => ((e[t.toLowerCase()] = yC[t]), e), {}),
  vP = Object.keys(_g).reduce((e, t) => {
    let n = _g[t];
    return ((e[t] = n[900] || [...Object.entries(n)][0][1]), e);
  }, {});
function DP(e) {
  let t = e.replace(yP, ""),
    n = Sk(t, 0),
    r = n >= mC[0] && n <= mC[1],
    o = t.length === 2 ? t[0] === t[1] : !1;
  return { value: vg(o ? t[0] : t), isSecondary: r || o };
}
function EP(e, t) {
  let n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(t),
    o = isNaN(r) ? "normal" : r;
  return (_g[n] || {})[o] || vP[n];
}
function vC(e, t) {
  let n = "".concat(ok).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null) return r();
    let s = qo(e.children).filter((h) => h.getAttribute(pg) === t)[0],
      a = Hn.getComputedStyle(e, t),
      c = a.getPropertyValue("font-family"),
      u = c.match(uk),
      l = a.getPropertyValue("font-weight"),
      d = a.getPropertyValue("content");
    if (s && !u) return (e.removeChild(s), r());
    if (u && d !== "none" && d !== "") {
      let h = a.getPropertyValue("content"),
        f = EP(c, l),
        { value: g, isSecondary: E } = DP(h),
        y = u[0].startsWith("FontAwesome"),
        v = Pg(f, g),
        x = v;
      if (y) {
        let H = xk(g);
        H.iconName && H.prefix && ((v = H.iconName), (f = H.prefix));
      }
      if (
        v &&
        !E &&
        (!s || s.getAttribute(Ng) !== f || s.getAttribute(Rg) !== x)
      ) {
        (e.setAttribute(n, x), s && e.removeChild(s));
        let H = aP(),
          { extra: B } = H;
        ((B.attributes[pg] = t),
          bg(v, f)
            .then((ae) => {
              let zt = Fg(
                  m(
                    m({}, H),
                    {},
                    {
                      icons: { main: ae, mask: ZC() },
                      prefix: f,
                      iconName: x,
                      extra: B,
                      watchable: !0,
                    },
                  ),
                ),
                Gt = K.createElementNS("http://www.w3.org/2000/svg", "svg");
              (t === "::before"
                ? e.insertBefore(Gt, e.firstChild)
                : e.appendChild(Gt),
                (Gt.outerHTML = zt.map((Es) => Ds(Es)).join(`
`)),
                e.removeAttribute(n),
                r());
            })
            .catch(o));
      } else r();
    } else r();
  });
}
function IP(e) {
  return Promise.all([vC(e, "::before"), vC(e, "::after")]);
}
function wP(e) {
  return (
    e.parentNode !== document.head &&
    !~sk.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(pg) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function DC(e) {
  if (mn)
    return new Promise((t, n) => {
      let r = qo(e.querySelectorAll("*")).filter(wP).map(IP),
        o = Lg.begin("searchPseudoElements");
      (eb(),
        Promise.all(r)
          .then(() => {
            (o(), Sg(), t());
          })
          .catch(() => {
            (o(), Sg(), n());
          }));
    });
}
var CP = {
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return ((e.pseudoElementsCallback = DC), e);
        },
      };
    },
    provides(e) {
      e.pseudoElements2svg = function (t) {
        let { node: n = K } = t;
        T.searchPseudoElements && DC(n);
      };
    },
  },
  EC = !1,
  bP = {
    mixout() {
      return {
        dom: {
          unwatch() {
            (eb(), (EC = !0));
          },
        },
      };
    },
    hooks() {
      return {
        bootstrap() {
          hC(Ig("mutationObserverCallbacks", {}));
        },
        noAuto() {
          rP();
        },
        watch(e) {
          let { observeMutationsRoot: t } = e;
          EC
            ? Sg()
            : hC(Ig("mutationObserverCallbacks", { observeMutationsRoot: t }));
        },
      };
    },
  },
  IC = (e) => {
    let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return e
      .toLowerCase()
      .split(" ")
      .reduce((n, r) => {
        let o = r.toLowerCase().split("-"),
          i = o[0],
          s = o.slice(1).join("-");
        if (i && s === "h") return ((n.flipX = !0), n);
        if (i && s === "v") return ((n.flipY = !0), n);
        if (((s = parseFloat(s)), isNaN(s))) return n;
        switch (i) {
          case "grow":
            n.size = n.size + s;
            break;
          case "shrink":
            n.size = n.size - s;
            break;
          case "left":
            n.x = n.x - s;
            break;
          case "right":
            n.x = n.x + s;
            break;
          case "up":
            n.y = n.y - s;
            break;
          case "down":
            n.y = n.y + s;
            break;
          case "rotate":
            n.rotate = n.rotate + s;
            break;
        }
        return n;
      }, t);
  },
  TP = {
    mixout() {
      return { parse: { transform: (e) => IC(e) } };
    },
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          let n = t.getAttribute("data-fa-transform");
          return (n && (e.transform = IC(n)), e);
        },
      };
    },
    provides(e) {
      e.generateAbstractTransformGrouping = function (t) {
        let { main: n, transform: r, containerWidth: o, iconWidth: i } = t,
          s = { transform: "translate(".concat(o / 2, " 256)") },
          a = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
          c = "scale("
            .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
            .concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
          u = "rotate(".concat(r.rotate, " 0 0)"),
          l = { transform: "".concat(a, " ").concat(c, " ").concat(u) },
          d = { transform: "translate(".concat((i / 2) * -1, " -256)") },
          h = { outer: s, inner: l, path: d };
        return {
          tag: "g",
          attributes: m({}, h.outer),
          children: [
            {
              tag: "g",
              attributes: m({}, h.inner),
              children: [
                {
                  tag: n.icon.tag,
                  children: n.icon.children,
                  attributes: m(m({}, n.icon.attributes), h.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  lg = { x: 0, y: 0, width: "100%", height: "100%" };
function wC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
    e
  );
}
function SP(e) {
  return e.tag === "g" ? e.children : [e];
}
var _P = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          let n = t.getAttribute("data-fa-mask"),
            r = n ? zu(n.split(" ").map((o) => o.trim())) : ZC();
          return (
            r.prefix || (r.prefix = $n()),
            (e.mask = r),
            (e.maskId = t.getAttribute("data-fa-mask-id")),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
            children: n,
            attributes: r,
            main: o,
            mask: i,
            maskId: s,
            transform: a,
          } = t,
          { width: c, icon: u } = o,
          { width: l, icon: d } = i,
          h = Dk({ transform: a, containerWidth: l, iconWidth: c }),
          f = { tag: "rect", attributes: m(m({}, lg), {}, { fill: "white" }) },
          g = u.children ? { children: u.children.map(wC) } : {},
          E = {
            tag: "g",
            attributes: m({}, h.inner),
            children: [
              wC(
                m(
                  { tag: u.tag, attributes: m(m({}, u.attributes), h.path) },
                  g,
                ),
              ),
            ],
          },
          y = { tag: "g", attributes: m({}, h.outer), children: [E] },
          v = "mask-".concat(s || ms()),
          x = "clip-".concat(s || ms()),
          H = {
            tag: "mask",
            attributes: m(
              m({}, lg),
              {},
              {
                id: v,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              },
            ),
            children: [f, y],
          },
          B = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: x }, children: SP(d) },
              H,
            ],
          };
        return (
          n.push(B, {
            tag: "rect",
            attributes: m(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(x, ")"),
                mask: "url(#".concat(v, ")"),
              },
              lg,
            ),
          }),
          { children: n, attributes: r }
        );
      };
    },
  },
  MP = {
    provides(e) {
      let t = !1;
      (Hn.matchMedia &&
        (t = Hn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (e.missingIconAbstract = function () {
          let n = [],
            r = { fill: "currentColor" },
            o = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          n.push({
            tag: "path",
            attributes: m(
              m({}, r),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              },
            ),
          });
          let i = m(m({}, o), {}, { attributeName: "opacity" }),
            s = {
              tag: "circle",
              attributes: m(m({}, r), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            t ||
              s.children.push(
                {
                  tag: "animate",
                  attributes: m(
                    m({}, o),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" },
                  ),
                },
                {
                  tag: "animate",
                  attributes: m(m({}, i), {}, { values: "1;0;1;1;0;1;" }),
                },
              ),
            n.push(s),
            n.push({
              tag: "path",
              attributes: m(
                m({}, r),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                },
              ),
              children: t
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: m(m({}, i), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            t ||
              n.push({
                tag: "path",
                attributes: m(
                  m({}, r),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  },
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: m(m({}, i), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: n }
          );
        }));
    },
  },
  NP = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          let n = t.getAttribute("data-fa-symbol"),
            r = n === null ? !1 : n === "" ? !0 : n;
          return ((e.symbol = r), e);
        },
      };
    },
  },
  RP = [wk, hP, pP, gP, mP, CP, bP, TP, _P, MP, NP];
Vk(RP, { mixoutsTo: Ke });
var s6 = Ke.noAuto,
  nb = Ke.config,
  a6 = Ke.library,
  rb = Ke.dom,
  ob = Ke.parse,
  c6 = Ke.findIconDefinition,
  u6 = Ke.toHtml,
  ib = Ke.icon,
  l6 = Ke.layer,
  AP = Ke.text,
  xP = Ke.counter;
var OP = ["*"],
  kP = (e) => {
    throw new Error(
      `Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`,
    );
  },
  PP = () => {
    throw new Error(
      "Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.",
    );
  },
  FP = (e) => {
    let t = {
      [`fa-${e.animation}`]:
        e.animation != null && !e.animation.startsWith("spin"),
      "fa-spin": e.animation === "spin" || e.animation === "spin-reverse",
      "fa-spin-pulse":
        e.animation === "spin-pulse" || e.animation === "spin-pulse-reverse",
      "fa-spin-reverse":
        e.animation === "spin-reverse" || e.animation === "spin-pulse-reverse",
      "fa-pulse":
        e.animation === "spin-pulse" || e.animation === "spin-pulse-reverse",
      "fa-fw": e.fixedWidth,
      "fa-border": e.border,
      "fa-inverse": e.inverse,
      "fa-layers-counter": e.counter,
      "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
      "fa-flip-vertical": e.flip === "vertical" || e.flip === "both",
      [`fa-${e.size}`]: e.size !== null,
      [`fa-rotate-${e.rotate}`]: e.rotate !== null,
      [`fa-pull-${e.pull}`]: e.pull !== null,
      [`fa-stack-${e.stackItemSize}`]: e.stackItemSize != null,
    };
    return Object.keys(t)
      .map((n) => (t[n] ? n : null))
      .filter((n) => n);
  },
  Bg = new WeakSet(),
  sb = "fa-auto-css";
function LP(e, t) {
  if (!t.autoAddCss || Bg.has(e)) return;
  if (e.getElementById(sb) != null) {
    ((t.autoAddCss = !1), Bg.add(e));
    return;
  }
  let n = e.createElement("style");
  (n.setAttribute("type", "text/css"),
    n.setAttribute("id", sb),
    (n.innerHTML = rb.css()));
  let r = e.head.childNodes,
    o = null;
  for (let i = r.length - 1; i > -1; i--) {
    let s = r[i],
      a = s.nodeName.toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (o = s);
  }
  (e.head.insertBefore(n, o), (t.autoAddCss = !1), Bg.add(e));
}
var jP = (e) => e.prefix !== void 0 && e.iconName !== void 0,
  BP = (e, t) =>
    jP(e)
      ? e
      : Array.isArray(e) && e.length === 2
        ? { prefix: e[0], iconName: e[1] }
        : { prefix: t, iconName: e },
  VP = (() => {
    let t = class t {
      constructor() {
        ((this.defaultPrefix = "fas"),
          (this.fallbackIcon = null),
          (this._autoAddCss = !0));
      }
      set autoAddCss(r) {
        ((nb.autoAddCss = r), (this._autoAddCss = r));
      }
      get autoAddCss() {
        return this._autoAddCss;
      }
    };
    ((t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = D({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  UP = (() => {
    let t = class t {
      constructor() {
        this.definitions = {};
      }
      addIcons(...r) {
        for (let o of r) {
          (o.prefix in this.definitions || (this.definitions[o.prefix] = {}),
            (this.definitions[o.prefix][o.iconName] = o));
          for (let i of o.icon[2])
            typeof i == "string" && (this.definitions[o.prefix][i] = o);
        }
      }
      addIconPacks(...r) {
        for (let o of r) {
          let i = Object.keys(o).map((s) => o[s]);
          this.addIcons(...i);
        }
      }
      getIconDefinition(r, o) {
        return r in this.definitions && o in this.definitions[r]
          ? this.definitions[r][o]
          : null;
      }
    };
    ((t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = D({ token: t, factory: t.ɵfac, providedIn: "root" })));
    let e = t;
    return e;
  })(),
  HP = (() => {
    let t = class t {
      constructor() {
        this.stackItemSize = "1x";
      }
      ngOnChanges(r) {
        if ("size" in r)
          throw new Error(
            'fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.',
          );
      }
    };
    ((t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵdir = Oe({
        type: t,
        selectors: [
          ["fa-icon", "stackItemSize", ""],
          ["fa-duotone-icon", "stackItemSize", ""],
        ],
        inputs: { stackItemSize: "stackItemSize", size: "size" },
        features: [ht],
      })));
    let e = t;
    return e;
  })(),
  $P = (() => {
    let t = class t {
      constructor(r, o) {
        ((this.renderer = r), (this.elementRef = o));
      }
      ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, "fa-stack");
      }
      ngOnChanges(r) {
        "size" in r &&
          (r.size.currentValue != null &&
            this.renderer.addClass(
              this.elementRef.nativeElement,
              `fa-${r.size.currentValue}`,
            ),
          r.size.previousValue != null &&
            this.renderer.removeClass(
              this.elementRef.nativeElement,
              `fa-${r.size.previousValue}`,
            ));
      }
    };
    ((t.ɵfac = function (o) {
      return new (o || t)(V(un), V(We));
    }),
      (t.ɵcmp = Io({
        type: t,
        selectors: [["fa-stack"]],
        inputs: { size: "size" },
        features: [ht],
        ngContentSelectors: OP,
        decls: 1,
        vars: 0,
        template: function (o, i) {
          o & 1 && (Vh(), Uh(0));
        },
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })(),
  w6 = (() => {
    let t = class t {
      constructor(r, o, i, s, a) {
        ((this.sanitizer = r),
          (this.config = o),
          (this.iconLibrary = i),
          (this.stackItem = s),
          (this.document = p(Q)),
          a != null &&
            s == null &&
            console.error(
              'FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.',
            ));
      }
      ngOnChanges(r) {
        if (this.icon == null && this.config.fallbackIcon == null) {
          PP();
          return;
        }
        if (r) {
          let o = this.findIconDefinition(
            this.icon ?? this.config.fallbackIcon,
          );
          if (o != null) {
            let i = this.buildParams();
            LP(this.document, this.config);
            let s = ib(o, i);
            this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(
              s.html.join(`
`),
            );
          }
        }
      }
      render() {
        this.ngOnChanges({});
      }
      findIconDefinition(r) {
        let o = BP(r, this.config.defaultPrefix);
        if ("icon" in o) return o;
        let i = this.iconLibrary.getIconDefinition(o.prefix, o.iconName);
        return i ?? (kP(o), null);
      }
      buildParams() {
        let r = {
            flip: this.flip,
            animation: this.animation,
            border: this.border,
            inverse: this.inverse,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth:
              typeof this.fixedWidth == "boolean"
                ? this.fixedWidth
                : this.config.fixedWidth,
            stackItemSize:
              this.stackItem != null ? this.stackItem.stackItemSize : null,
          },
          o =
            typeof this.transform == "string"
              ? ob.transform(this.transform)
              : this.transform;
        return {
          title: this.title,
          transform: o,
          classes: FP(r),
          mask: this.mask != null ? this.findIconDefinition(this.mask) : null,
          symbol: this.symbol,
          attributes: { role: this.a11yRole },
        };
      }
    };
    ((t.ɵfac = function (o) {
      return new (o || t)(V(Np), V(VP), V(UP), V(HP, 8), V($P, 8));
    }),
      (t.ɵcmp = Io({
        type: t,
        selectors: [["fa-icon"]],
        hostAttrs: [1, "ng-fa-icon"],
        hostVars: 2,
        hostBindings: function (o, i) {
          o & 2 &&
            (Bc("innerHTML", i.renderedIconHTML, Zf), Co("title", i.title));
        },
        inputs: {
          icon: "icon",
          title: "title",
          animation: "animation",
          mask: "mask",
          flip: "flip",
          size: "size",
          pull: "pull",
          border: "border",
          inverse: "inverse",
          symbol: "symbol",
          rotate: "rotate",
          fixedWidth: "fixedWidth",
          transform: "transform",
          a11yRole: "a11yRole",
        },
        features: [ht],
        decls: 0,
        vars: 0,
        template: function (o, i) {},
        encapsulation: 2,
      })));
    let e = t;
    return e;
  })();
var C6 = (() => {
  let t = class t {};
  ((t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = Pt({ type: t })),
    (t.ɵinj = ut({})));
  let e = t;
  return e;
})();
var N6 = (() => {
  var t, n, r;
  let o = class o {
    constructor() {
      Et(this, t);
      Et(this, n);
      Et(this, r);
      (Wt(this, t, "https://jsonplaceholder.typicode.com/users"),
        Wt(this, n, p(su)),
        Wt(this, r, lr({ users: [], loading: !0 })),
        (this.users = Li(() => ye(this, r).call(this).users)),
        (this.loading = Li(() => ye(this, r).call(this).loading)));
    }
    getUsers() {
      let s = `${ye(this, t)}`,
        a = new yt();
      return ye(this, n)
        .get(s, { params: a })
        .pipe(
          na(1500),
          te({
            next: (c) => ye(this, r).set({ loading: !1, users: c }),
            error: (c) => qt(() => c),
            complete: () => {},
          }),
          Ve((c) => qt(() => c)),
        );
    }
    getUserById(s) {
      let a = `${ye(this, t)}/${s}`;
      return ye(this, n).get(a).pipe(na(1500));
    }
  };
  ((t = new WeakMap()),
    (n = new WeakMap()),
    (r = new WeakMap()),
    (o.ɵfac = function (a) {
      return new (a || o)();
    }),
    (o.ɵprov = D({ token: o, factory: o.ɵfac, providedIn: "root" })));
  let e = o;
  return e;
})();
var ab = (() => {
  let t = class t {
    isValid(r) {
      return r != null && r.toString().trim() !== "";
    }
    isNumber(r) {
      return this.isValid(r) && !isNaN(Number(r));
    }
    isObject(r) {
      return r != null && Object.getPrototypeOf(r) === Object.prototype;
    }
  };
  ((t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = D({ token: t, factory: t.ɵfac, providedIn: "root" })));
  let e = t;
  return e;
})();
var F6 = (() => {
  var t, n;
  let r = class r {
    constructor() {
      Et(this, t, p(ab));
      Et(this, n, "");
    }
    set UserAgent(i) {
      Wt(this, n, i);
    }
    get UserAgent() {
      return structuredClone(ye(this, n));
    }
    isMobile() {
      let i = {
        Android: () => this.UserAgent.match(/android/i),
        BlackBerry: () => this.UserAgent.match(/blackberry/i),
        iOS: () => this.UserAgent.match(/iphone|ipad|ipod/i),
        Opera: () => this.UserAgent.match(/opera mini/i),
        Windows: () => this.UserAgent.match(/iemobile/i),
        any: () =>
          i.Android() || i.BlackBerry() || i.iOS() || i.Opera() || i.Windows(),
      };
      return ye(this, t).isValid(i.any()) && i.any() !== !1;
    }
    sortArrayByKey(i, s, a = "asc", c = !1) {
      return i.sort((u, l) => {
        let d = c ? parseFloat(u[s]) : u[s],
          h = c ? parseFloat(l[s]) : l[s];
        return a === "asc"
          ? d < h
            ? -1
            : d > h
              ? 1
              : 0
          : d > h
            ? -1
            : d < h
              ? 1
              : 0;
      });
    }
  };
  ((t = new WeakMap()),
    (n = new WeakMap()),
    (r.ɵfac = function (s) {
      return new (s || r)();
    }),
    (r.ɵprov = D({ token: r, factory: r.ɵfac, providedIn: "root" })));
  let e = r;
  return e;
})();
var $6 = (() => {
  var t, n;
  let r = class r {
    constructor() {
      Et(this, t);
      Et(this, n);
      (Wt(this, t, p(st)),
        Wt(this, n, new ie()),
        (this.currentRoute$ = ye(this, n).asObservable()));
    }
    setCurrentRoute() {
      return ye(this, t).events.pipe(
        ce((i) => i instanceof Lo),
        ce((i) => i.snapshot.firstChild === null),
        te(() => {
          ye(this, n).next(ye(this, t).url);
        }),
      );
    }
  };
  ((t = new WeakMap()),
    (n = new WeakMap()),
    (r.ɵfac = function (s) {
      return new (s || r)();
    }),
    (r.ɵprov = D({ token: r, factory: r.ɵfac, providedIn: "root" })));
  let e = r;
  return e;
})();
var Or = (function (e) {
    return (
      (e[(e.State = 0)] = "State"),
      (e[(e.Transition = 1)] = "Transition"),
      (e[(e.Sequence = 2)] = "Sequence"),
      (e[(e.Group = 3)] = "Group"),
      (e[(e.Animate = 4)] = "Animate"),
      (e[(e.Keyframes = 5)] = "Keyframes"),
      (e[(e.Style = 6)] = "Style"),
      (e[(e.Trigger = 7)] = "Trigger"),
      (e[(e.Reference = 8)] = "Reference"),
      (e[(e.AnimateChild = 9)] = "AnimateChild"),
      (e[(e.AnimateRef = 10)] = "AnimateRef"),
      (e[(e.Query = 11)] = "Query"),
      (e[(e.Stagger = 12)] = "Stagger"),
      e
    );
  })(Or || {}),
  K6 = "*";
function X6(e, t) {
  return { type: Or.Trigger, name: e, definitions: t, options: {} };
}
function J6(e, t = null) {
  return { type: Or.Animate, styles: t, timings: e };
}
function eq(e, t = null) {
  return { type: Or.Sequence, steps: e, options: t };
}
function tq(e) {
  return { type: Or.Style, styles: e, offset: null };
}
function nq(e, t, n) {
  return { type: Or.State, name: e, styles: t, options: n };
}
function rq(e, t, n = null) {
  return { type: Or.Transition, expr: e, animation: t, options: n };
}
var cb = class {
    _onDoneFns = [];
    _onStartFns = [];
    _onDestroyFns = [];
    _originalOnDoneFns = [];
    _originalOnStartFns = [];
    _started = !1;
    _destroyed = !1;
    _finished = !1;
    _position = 0;
    parentPlayer = null;
    totalTime;
    constructor(t = 0, n = 0) {
      this.totalTime = t + n;
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      (this._originalOnStartFns.push(t), this._onStartFns.push(t));
    }
    onDone(t) {
      (this._originalOnDoneFns.push(t), this._onDoneFns.push(t));
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      (this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0));
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      (this._onStartFns.forEach((t) => t()), (this._onStartFns = []));
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      ((this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns));
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      (n.forEach((r) => r()), (n.length = 0));
    }
  },
  ub = class {
    _onDoneFns = [];
    _onStartFns = [];
    _finished = !1;
    _started = !1;
    _destroyed = !1;
    _onDestroyFns = [];
    parentPlayer = null;
    totalTime = 0;
    players;
    constructor(t) {
      this.players = t;
      let n = 0,
        r = 0,
        o = 0,
        i = this.players.length;
      (i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            (s.onDone(() => {
              ++n == i && this._onFinish();
            }),
              s.onDestroy(() => {
                ++r == i && this._onDestroy();
              }),
              s.onStart(() => {
                ++o == i && this._onStart();
              }));
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        )));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      (this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play()));
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      (this._onFinish(), this.players.forEach((t) => t.finish()));
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1));
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => (n === null || r.totalTime > n.totalTime ? r : n),
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      (n.forEach((r) => r()), (n.length = 0));
    }
  },
  oq = "!";
export {
  w as a,
  W as b,
  zg as c,
  ye as d,
  Et as e,
  Wt as f,
  X as g,
  P as h,
  ie as i,
  pe as j,
  Tb as k,
  Sb as l,
  UF as m,
  HF as n,
  Ko as o,
  _ as p,
  qt as q,
  k as r,
  Xo as s,
  hl as t,
  pl as u,
  Yb as v,
  ce as w,
  Xe as x,
  Zb as y,
  yl as z,
  ei as A,
  I as B,
  la as C,
  D,
  ut as E,
  C as F,
  S as G,
  p as H,
  Vm as I,
  ty as J,
  ny as K,
  Se as L,
  Q as M,
  lr as N,
  ht as O,
  _i as P,
  We as Q,
  mo as R,
  iS as S,
  Pf as T,
  on as U,
  BS as V,
  o_ as W,
  an as X,
  Pi as Y,
  pr as Z,
  un as _,
  V as $,
  pt as aa,
  Be as ba,
  Io as ca,
  Pt as da,
  Oe as ea,
  wh as fa,
  uE as ga,
  lE as ha,
  xe as ia,
  Y as ja,
  PM as ka,
  gt as la,
  UM as ma,
  HM as na,
  Co as oa,
  zM as pa,
  GM as qa,
  WM as ra,
  qM as sa,
  AE as ta,
  xh as ua,
  Oh as va,
  jc as wa,
  kh as xa,
  Ph as ya,
  xE as za,
  Lh as Aa,
  jh as Ba,
  kE as Ca,
  XM as Da,
  Bc as Ea,
  Vc as Fa,
  tN as Ga,
  Vh as Ha,
  Uh as Ia,
  oN as Ja,
  jE as Ka,
  BE as La,
  iN as Ma,
  HE as Na,
  Hh as Oa,
  mN as Pa,
  _N as Qa,
  QE as Ra,
  $h as Sa,
  AN as Ta,
  FN as Ua,
  LN as Va,
  jN as Wa,
  BN as Xa,
  VN as Ya,
  $N as Za,
  GN as _a,
  qN as $a,
  Uc as ab,
  Li as bb,
  I4 as cb,
  To as db,
  AR as eb,
  II as fb,
  xR as gb,
  wI as hb,
  OR as ib,
  kR as jb,
  PR as kb,
  BR as lb,
  VR as mb,
  CI as nb,
  K5 as ob,
  X5 as pb,
  vp as qb,
  nA as rb,
  NA as sb,
  RA as tb,
  AA as ub,
  YI as vb,
  mW as wb,
  yW as xb,
  Zp as yb,
  st as zb,
  Lw as Ab,
  EO as Bb,
  IO as Cb,
  wO as Db,
  $w as Eb,
  Ww as Fb,
  CO as Gb,
  bO as Hb,
  qw as Ib,
  Yw as Jb,
  TO as Kb,
  UP as Lb,
  w6 as Mb,
  C6 as Nb,
  $6 as Ob,
  N6 as Pb,
  F6 as Qb,
  Or as Rb,
  K6 as Sb,
  X6 as Tb,
  J6 as Ub,
  eq as Vb,
  tq as Wb,
  nq as Xb,
  rq as Yb,
  cb as Zb,
  ub as _b,
  oq as $b,
};
