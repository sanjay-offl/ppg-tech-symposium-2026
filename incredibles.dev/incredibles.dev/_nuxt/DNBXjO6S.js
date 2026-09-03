const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BscOLqjR.js", "./usp-asset.9-7V2p3P.css", "./QAUZyLLR.js", "./cards-loop.Cvd5J4Uk.css", "./JuTPBnHz.js", "./C52vxEqk.js", "./BFluid.bxahTSu7.css", "./fluid-dark.CfnYjjX_.css", "./Ci9MXBeg.js", "./fluid-light.5pISEn71.css", "./Cb-3Q4L4.js", "./DFcaFsiw.js", "./CQmIGG9a.js", "./legals.C1dGNBB7.css", "./D2e_7CCb.js", "./privacy.DrkBNHHB.css", "./D5jJLml9.js", "./index.BBZDcOgN.css", "./AkmjTEQQ.js", "./ProsePre.D5orA6B_.css", "./C24D6pZf.js", "./C5CB_klN.js", "./DsqyPmm_.js", "./error-404.C3kT2QX-.css", "./DpnzUdTM.js", "./error-500.BW0Y54Of.css"]))) => i.map(i => d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
})();

function ru(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const ke = {},
    Ls = [],
    Rn = () => {},
    ep = () => !1,
    no = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ya = e => e.startsWith("onUpdate:"),
    ct = Object.assign,
    su = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    jy = Object.prototype.hasOwnProperty,
    Ee = (e, t) => jy.call(e, t),
    se = Array.isArray,
    Rs = e => ti(e) === "[object Map]",
    tp = e => ti(e) === "[object Set]",
    _f = e => ti(e) === "[object Date]",
    Hy = e => ti(e) === "[object RegExp]",
    oe = e => typeof e == "function",
    Oe = e => typeof e == "string",
    Qt = e => typeof e == "symbol",
    be = e => e !== null && typeof e == "object",
    iu = e => (be(e) || oe(e)) && oe(e.then) && oe(e.catch),
    np = Object.prototype.toString,
    ti = e => np.call(e),
    Uy = e => ti(e).slice(8, -1),
    ou = e => ti(e) === "[object Object]",
    ba = e => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Jr = ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    va = e => {
        const t = Object.create(null);
        return (n => t[n] || (t[n] = e(n)))
    },
    Vy = /-\w/g,
    kt = va(e => e.replace(Vy, t => t.slice(1).toUpperCase())),
    Wy = /\B([A-Z])/g,
    xr = va(e => e.replace(Wy, "-$1").toLowerCase()),
    wa = va(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Xa = va(e => e ? `on${wa(e)}` : ""),
    Pn = (e, t) => !Object.is(e, t),
    Os = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    rp = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        })
    },
    au = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    sp = e => {
        const t = Oe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let yf;
const Ea = () => yf || (yf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function cs(e) {
    if (se(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                s = Oe(r) ? Ky(r) : cs(r);
            if (s)
                for (const i in s) t[i] = s[i]
        }
        return t
    } else if (Oe(e) || be(e)) return e
}
const zy = /;(?![^(]*\))/g,
    qy = /:([^]+)/,
    Gy = /\/\*[^]*?\*\//g;

function Ky(e) {
    const t = {};
    return e.replace(Gy, "").split(zy).forEach(n => {
        if (n) {
            const r = n.split(qy);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function ni(e) {
    let t = "";
    if (Oe(e)) t = e;
    else if (se(e))
        for (let n = 0; n < e.length; n++) {
            const r = ni(e[n]);
            r && (t += r + " ")
        } else if (be(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function Yy(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !Oe(t) && (e.class = ni(t)), n && (e.style = cs(n)), e
}
const Xy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Jy = ru(Xy);

function ip(e) {
    return !!e || e === ""
}

function Qy(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = lu(e[r], t[r]);
    return n
}

function lu(e, t) {
    if (e === t) return !0;
    let n = _f(e),
        r = _f(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (n = Qt(e), r = Qt(t), n || r) return e === t;
    if (n = se(e), r = se(t), n || r) return n && r ? Qy(e, t) : !1;
    if (n = be(e), r = be(t), n || r) {
        if (!n || !r) return !1;
        const s = Object.keys(e).length,
            i = Object.keys(t).length;
        if (s !== i) return !1;
        for (const o in e) {
            const a = e.hasOwnProperty(o),
                l = t.hasOwnProperty(o);
            if (a && !l || !a && l || !lu(e[o], t[o])) return !1
        }
    }
    return String(e) === String(t)
}
const op = e => !!(e && e.__v_isRef === !0),
    Qr = e => Oe(e) ? e : e == null ? "" : se(e) || be(e) && (e.toString === np || !oe(e.toString)) ? op(e) ? Qr(e.value) : JSON.stringify(e, ap, 2) : String(e),
    ap = (e, t) => op(t) ? ap(e, t.value) : Rs(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], i) => (n[Ja(r, i) + " =>"] = s, n), {})
    } : tp(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => Ja(n))
    } : Qt(t) ? Ja(t) : be(t) && !se(t) && !ou(t) ? String(t) : t,
    Ja = (e, t = "") => {
        var n;
        return Qt(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
let at;
class lp {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && at && (at.active ? (this.parent = at, this.index = (at.scopes || (at.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1))
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = at;
            try {
                return at = this, t()
            } finally {
                at = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = at, at = this)
    }
    off() {
        if (this._on > 0 && --this._on === 0) {
            if (at === this) at = this.prevScope;
            else {
                let t = at;
                for (; t;) {
                    if (t.prevScope === this) {
                        t.prevScope = this.prevScope;
                        break
                    }
                    t = t.prevScope
                }
            }
            this.prevScope = void 0
        }
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function cu(e) {
    return new lp(e)
}

function Ar() {
    return at
}

function us(e, t = !1) {
    at && at.cleanups.push(e)
}
let Ne;
const Qa = new WeakSet;
class cp {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, at && (at.active ? at.effects.push(this) : this.flags &= -2)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, Qa.has(this) && (Qa.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fp(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, bf(this), dp(this);
        const t = Ne,
            n = dn;
        Ne = this, dn = !0;
        try {
            return this.fn()
        } finally {
            hp(this), Ne = t, dn = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) du(t);
            this.deps = this.depsTail = void 0, bf(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Qa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Dl(this) && this.run()
    }
    get dirty() {
        return Dl(this)
    }
}
let up = 0,
    ki, Pi;

function fp(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = Pi, Pi = e;
        return
    }
    e.next = ki, ki = e
}

function uu() {
    up++
}

function fu() {
    if (--up > 0) return;
    if (Pi) {
        let t = Pi;
        for (Pi = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; ki;) {
        let t = ki;
        for (ki = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (r) {
                e || (e = r)
            }
            t = n
        }
    }
    if (e) throw e
}

function dp(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function hp(e) {
    let t, n = e.depsTail,
        r = n;
    for (; r;) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s), du(r), Zy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
    }
    e.deps = t, e.depsTail = n
}

function Dl(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (pp(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function pp(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ni) || (e.globalVersion = Ni, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Dl(e)))) return;
    e.flags |= 2;
    const t = e.dep,
        n = Ne,
        r = dn;
    Ne = e, dn = !0;
    try {
        dp(e);
        const s = e.fn(e._value);
        (t.version === 0 || Pn(s, e._value)) && (e.flags |= 128, e._value = s, t.version++)
    } catch (s) {
        throw t.version++, s
    } finally {
        Ne = n, dn = r, hp(e), e.flags &= -3
    }
}

function du(e, t = !1) {
    const {
        dep: n,
        prevSub: r,
        nextSub: s
    } = e;
    if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep) du(i, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function Zy(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let dn = !0;
const gp = [];

function tr() {
    gp.push(dn), dn = !1
}

function nr() {
    const e = gp.pop();
    dn = e === void 0 ? !0 : e
}

function bf(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = Ne;
        Ne = void 0;
        try {
            t()
        } finally {
            Ne = n
        }
    }
}
let Ni = 0;
class eb {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Sa {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(t) {
        if (!Ne || !dn || Ne === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Ne) n = this.activeLink = new eb(Ne, this), Ne.deps ? (n.prevDep = Ne.depsTail, Ne.depsTail.nextDep = n, Ne.depsTail = n) : Ne.deps = Ne.depsTail = n, mp(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ne.depsTail, n.nextDep = void 0, Ne.depsTail.nextDep = n, Ne.depsTail = n, Ne.deps === n && (Ne.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++, Ni++, this.notify(t)
    }
    notify(t) {
        uu();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            fu()
        }
    }
}

function mp(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) mp(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const $o = new WeakMap,
    Zr = Symbol(""),
    Fl = Symbol(""),
    Di = Symbol("");

function vt(e, t, n) {
    if (dn && Ne) {
        let r = $o.get(e);
        r || $o.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new Sa), s.map = r, s.key = n), s.track()
    }
}

function zn(e, t, n, r, s, i) {
    const o = $o.get(e);
    if (!o) {
        Ni++;
        return
    }
    const a = l => {
        l && l.trigger()
    };
    if (uu(), t === "clear") o.forEach(a);
    else {
        const l = se(e),
            c = l && ba(n);
        if (l && n === "length") {
            const u = Number(r);
            o.forEach((f, d) => {
                (d === "length" || d === Di || !Qt(d) && d >= u) && a(f)
            })
        } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), c && a(o.get(Di)), t) {
            case "add":
                l ? c && a(o.get("length")) : (a(o.get(Zr)), Rs(e) && a(o.get(Fl)));
                break;
            case "delete":
                l || (a(o.get(Zr)), Rs(e) && a(o.get(Fl)));
                break;
            case "set":
                Rs(e) && a(o.get(Zr));
                break
        }
    }
    fu()
}

function tb(e, t) {
    const n = $o.get(e);
    return n && n.get(t)
}

function ys(e) {
    const t = _e(e);
    return t === e ? t : (vt(t, "iterate", Di), Yt(e) ? t : t.map(hn))
}

function Ta(e) {
    return vt(e = _e(e), "iterate", Di), e
}

function kn(e, t) {
    return In(e) ? Us(yr(e) ? hn(t) : t) : hn(t)
}
const nb = {
    __proto__: null,
    [Symbol.iterator]() {
        return Za(this, Symbol.iterator, e => kn(this, e))
    },
    concat(...e) {
        return ys(this).concat(...e.map(t => se(t) ? ys(t) : t))
    },
    entries() {
        return Za(this, "entries", e => (e[1] = kn(this, e[1]), e))
    },
    every(e, t) {
        return Fn(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Fn(this, "filter", e, t, n => n.map(r => kn(this, r)), arguments)
    },
    find(e, t) {
        return Fn(this, "find", e, t, n => kn(this, n), arguments)
    },
    findIndex(e, t) {
        return Fn(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Fn(this, "findLast", e, t, n => kn(this, n), arguments)
    },
    findLastIndex(e, t) {
        return Fn(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Fn(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return el(this, "includes", e)
    },
    indexOf(...e) {
        return el(this, "indexOf", e)
    },
    join(e) {
        return ys(this).join(e)
    },
    lastIndexOf(...e) {
        return el(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Fn(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return di(this, "pop")
    },
    push(...e) {
        return di(this, "push", e)
    },
    reduce(e, ...t) {
        return vf(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return vf(this, "reduceRight", e, t)
    },
    shift() {
        return di(this, "shift")
    },
    some(e, t) {
        return Fn(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return di(this, "splice", e)
    },
    toReversed() {
        return ys(this).toReversed()
    },
    toSorted(e) {
        return ys(this).toSorted(e)
    },
    toSpliced(...e) {
        return ys(this).toSpliced(...e)
    },
    unshift(...e) {
        return di(this, "unshift", e)
    },
    values() {
        return Za(this, "values", e => kn(this, e))
    }
};

function Za(e, t, n) {
    const r = Ta(e),
        s = r[t]();
    return r !== e && !Yt(e) && (s._next = s.next, s.next = () => {
        const i = s._next();
        return i.done || (i.value = n(i.value)), i
    }), s
}
const rb = Array.prototype;

function Fn(e, t, n, r, s, i) {
    const o = Ta(e),
        a = o !== e && !Yt(e),
        l = o[t];
    if (l !== rb[t]) {
        const f = l.apply(e, i);
        return a ? hn(f) : f
    }
    let c = n;
    o !== e && (a ? c = function(f, d) {
        return n.call(this, kn(e, f), d, e)
    } : n.length > 2 && (c = function(f, d) {
        return n.call(this, f, d, e)
    }));
    const u = l.call(o, c, r);
    return a && s ? s(u) : u
}

function vf(e, t, n, r) {
    const s = Ta(e),
        i = s !== e && !Yt(e);
    let o = n,
        a = !1;
    s !== e && (i ? (a = r.length === 0, o = function(c, u, f) {
        return a && (a = !1, c = kn(e, c)), n.call(this, c, kn(e, u), f, e)
    }) : n.length > 3 && (o = function(c, u, f) {
        return n.call(this, c, u, f, e)
    }));
    const l = s[t](o, ...r);
    return a ? kn(e, l) : l
}

function el(e, t, n) {
    const r = _e(e);
    vt(r, "iterate", Di);
    const s = r[t](...n);
    return (s === -1 || s === !1) && Ca(n[0]) ? (n[0] = _e(n[0]), r[t](...n)) : s
}

function di(e, t, n = []) {
    tr(), uu();
    const r = _e(e)[t].apply(e, n);
    return fu(), nr(), r
}
const sb = ru("__proto__,__v_isRef,__isVue"),
    _p = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Qt));

function ib(e) {
    Qt(e) || (e = String(e));
    const t = _e(this);
    return vt(t, "has", e), t.hasOwnProperty(e)
}
class yp {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip") return t.__v_skip;
        const s = this._isReadonly,
            i = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return r === (s ? i ? gb : Ep : i ? wp : vp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const o = se(t);
        if (!s) {
            let l;
            if (o && (l = nb[n])) return l;
            if (n === "hasOwnProperty") return ib
        }
        const a = Reflect.get(t, n, Fe(t) ? t : r);
        if ((Qt(n) ? _p.has(n) : sb(n)) || (s || vt(t, "get", n), i)) return a;
        if (Fe(a)) {
            const l = o && ba(n) ? a : a.value;
            return s && be(l) ? Bl(l) : l
        }
        return be(a) ? s ? Bl(a) : _n(a) : a
    }
}
class bp extends yp {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let i = t[n];
        const o = se(t) && ba(n);
        if (!this._isShallow) {
            const c = In(i);
            if (!Yt(r) && !In(r) && (i = _e(i), r = _e(r)), !o && Fe(i) && !Fe(r)) return c || (i.value = r), !0
        }
        const a = o ? Number(n) < t.length : Ee(t, n),
            l = Reflect.set(t, n, r, Fe(t) ? t : s);
        return t === _e(s) && (a ? Pn(r, i) && zn(t, "set", n, r) : zn(t, "add", n, r)), l
    }
    deleteProperty(t, n) {
        const r = Ee(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && zn(t, "delete", n, void 0), s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Qt(n) || !_p.has(n)) && vt(t, "has", n), r
    }
    ownKeys(t) {
        return vt(t, "iterate", se(t) ? "length" : Zr), Reflect.ownKeys(t)
    }
}
class ob extends yp {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const ab = new bp,
    lb = new ob,
    cb = new bp(!0);
const $l = e => e,
    co = e => Reflect.getPrototypeOf(e);

function ub(e, t, n) {
    return function(...r) {
        const s = this.__v_raw,
            i = _e(s),
            o = Rs(i),
            a = e === "entries" || e === Symbol.iterator && o,
            l = e === "keys" && o,
            c = s[e](...r),
            u = n ? $l : t ? Us : hn;
        return !t && vt(i, "iterate", l ? Fl : Zr), ct(Object.create(c), {
            next() {
                const {
                    value: f,
                    done: d
                } = c.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            }
        })
    }
}

function uo(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function fb(e, t) {
    const n = {
        get(s) {
            const i = this.__v_raw,
                o = _e(i),
                a = _e(s);
            e || (Pn(s, a) && vt(o, "get", s), vt(o, "get", a));
            const {
                has: l
            } = co(o), c = t ? $l : e ? Us : hn;
            if (l.call(o, s)) return c(i.get(s));
            if (l.call(o, a)) return c(i.get(a));
            i !== o && i.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && vt(_e(s), "iterate", Zr), s.size
        },
        has(s) {
            const i = this.__v_raw,
                o = _e(i),
                a = _e(s);
            return e || (Pn(s, a) && vt(o, "has", s), vt(o, "has", a)), s === a ? i.has(s) : i.has(s) || i.has(a)
        },
        forEach(s, i) {
            const o = this,
                a = o.__v_raw,
                l = _e(a),
                c = t ? $l : e ? Us : hn;
            return !e && vt(l, "iterate", Zr), a.forEach((u, f) => s.call(i, c(u), c(f), o))
        }
    };
    return ct(n, e ? {
        add: uo("add"),
        set: uo("set"),
        delete: uo("delete"),
        clear: uo("clear")
    } : {
        add(s) {
            const i = _e(this),
                o = co(i),
                a = _e(s),
                l = !t && !Yt(s) && !In(s) ? a : s;
            return o.has.call(i, l) || Pn(s, l) && o.has.call(i, s) || Pn(a, l) && o.has.call(i, a) || (i.add(l), zn(i, "add", l, l)), this
        },
        set(s, i) {
            !t && !Yt(i) && !In(i) && (i = _e(i));
            const o = _e(this),
                {
                    has: a,
                    get: l
                } = co(o);
            let c = a.call(o, s);
            c || (s = _e(s), c = a.call(o, s));
            const u = l.call(o, s);
            return o.set(s, i), c ? Pn(i, u) && zn(o, "set", s, i) : zn(o, "add", s, i), this
        },
        delete(s) {
            const i = _e(this),
                {
                    has: o,
                    get: a
                } = co(i);
            let l = o.call(i, s);
            l || (s = _e(s), l = o.call(i, s)), a && a.call(i, s);
            const c = i.delete(s);
            return l && zn(i, "delete", s, void 0), c
        },
        clear() {
            const s = _e(this),
                i = s.size !== 0,
                o = s.clear();
            return i && zn(s, "clear", void 0, void 0), o
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = ub(s, e, t)
    }), n
}

function hu(e, t) {
    const n = fb(e, t);
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(Ee(n, s) && s in r ? n : r, s, i)
}
const db = {
        get: hu(!1, !1)
    },
    hb = {
        get: hu(!1, !0)
    },
    pb = {
        get: hu(!0, !1)
    };
const vp = new WeakMap,
    wp = new WeakMap,
    Ep = new WeakMap,
    gb = new WeakMap;

function mb(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function _b(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : mb(Uy(e))
}

function _n(e) {
    return In(e) ? e : pu(e, !1, ab, db, vp)
}

function xn(e) {
    return pu(e, !1, cb, hb, wp)
}

function Bl(e) {
    return pu(e, !0, lb, pb, Ep)
}

function pu(e, t, n, r, s) {
    if (!be(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = _b(e);
    if (i === 0) return e;
    const o = s.get(e);
    if (o) return o;
    const a = new Proxy(e, i === 2 ? r : n);
    return s.set(e, a), a
}

function yr(e) {
    return In(e) ? yr(e.__v_raw) : !!(e && e.__v_isReactive)
}

function In(e) {
    return !!(e && e.__v_isReadonly)
}

function Yt(e) {
    return !!(e && e.__v_isShallow)
}

function Ca(e) {
    return e ? !!e.__v_raw : !1
}

function _e(e) {
    const t = e && e.__v_raw;
    return t ? _e(t) : e
}

function yb(e) {
    return !Ee(e, "__v_skip") && Object.isExtensible(e) && rp(e, "__v_skip", !0), e
}
const hn = e => be(e) ? _n(e) : e,
    Us = e => be(e) ? Bl(e) : e;

function Fe(e) {
    return e ? e.__v_isRef === !0 : !1
}

function lt(e) {
    return Sp(e, !1)
}

function pn(e) {
    return Sp(e, !0)
}

function Sp(e, t) {
    return Fe(e) ? e : new bb(e, t)
}
class bb {
    constructor(t, n) {
        this.dep = new Sa, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : _e(t), this._value = n ? t : hn(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            r = this.__v_isShallow || Yt(t) || In(t);
        t = r ? t : _e(t), Pn(t, n) && (this._rawValue = t, this._value = r ? t : hn(t), this.dep.trigger())
    }
}

function G(e) {
    return Fe(e) ? e.value : e
}

function Je(e) {
    return oe(e) ? e() : G(e)
}
const vb = {
    get: (e, t, n) => t === "__v_raw" ? e : G(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Fe(s) && !Fe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function Tp(e) {
    return yr(e) ? e : new Proxy(e, vb)
}
class wb {
    constructor(t) {
        this.__v_isRef = !0, this._value = void 0;
        const n = this.dep = new Sa,
            {
                get: r,
                set: s
            } = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r, this._set = s
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}

function Eb(e) {
    return new wb(e)
}
class Sb {
    constructor(t, n, r) {
        this._object = t, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._key = Qt(n) ? n : String(n), this._raw = _e(t);
        let s = !0,
            i = t;
        if (!se(t) || Qt(this._key) || !ba(this._key))
            do s = !Ca(i) || Yt(i); while (s && (i = i.__v_raw));
        this._shallow = s
    }
    get value() {
        let t = this._object[this._key];
        return this._shallow && (t = G(t)), this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        if (this._shallow && Fe(this._raw[this._key])) {
            const n = this._object[this._key];
            if (Fe(n)) {
                n.value = t;
                return
            }
        }
        this._object[this._key] = t
    }
    get dep() {
        return tb(this._raw, this._key)
    }
}
class Tb {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function gu(e, t, n) {
    return Fe(e) ? e : oe(e) ? new Tb(e) : be(e) && arguments.length > 1 ? Cb(e, t, n) : lt(e)
}

function Cb(e, t, n) {
    return new Sb(e, t, n)
}
class kb {
    constructor(t, n, r) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new Sa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ni - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && Ne !== this) return fp(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return pp(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function Pb(e, t, n = !1) {
    let r, s;
    return oe(e) ? r = e : (r = e.get, s = e.set), new kb(r, s, n)
}
const fo = {},
    Bo = new WeakMap;
let Wr;

function xb(e, t = !1, n = Wr) {
    if (n) {
        let r = Bo.get(n);
        r || Bo.set(n, r = []), r.push(e)
    }
}

function Ab(e, t, n = ke) {
    const {
        immediate: r,
        deep: s,
        once: i,
        scheduler: o,
        augmentJob: a,
        call: l
    } = n, c = b => s ? b : Yt(b) || s === !1 || s === 0 ? qn(b, 1) : qn(b);
    let u, f, d, h, g = !1,
        p = !1;
    if (Fe(e) ? (f = () => e.value, g = Yt(e)) : yr(e) ? (f = () => c(e), g = !0) : se(e) ? (p = !0, g = e.some(b => yr(b) || Yt(b)), f = () => e.map(b => {
            if (Fe(b)) return b.value;
            if (yr(b)) return c(b);
            if (oe(b)) return l ? l(b, 2) : b()
        })) : oe(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
            if (d) {
                tr();
                try {
                    d()
                } finally {
                    nr()
                }
            }
            const b = Wr;
            Wr = u;
            try {
                return l ? l(e, 3, [h]) : e(h)
            } finally {
                Wr = b
            }
        } : f = Rn, t && s) {
        const b = f,
            w = s === !0 ? 1 / 0 : s;
        f = () => qn(b(), w)
    }
    const v = Ar(),
        y = () => {
            u.stop(), v && v.active && su(v.effects, u)
        };
    if (i && t) {
        const b = t;
        t = (...w) => {
            b(...w), y()
        }
    }
    let m = p ? new Array(e.length).fill(fo) : fo;
    const _ = b => {
        if (!(!(u.flags & 1) || !u.dirty && !b))
            if (t) {
                const w = u.run();
                if (s || g || (p ? w.some((k, S) => Pn(k, m[S])) : Pn(w, m))) {
                    d && d();
                    const k = Wr;
                    Wr = u;
                    try {
                        const S = [w, m === fo ? void 0 : p && m[0] === fo ? [] : m, h];
                        m = w, l ? l(t, 3, S) : t(...S)
                    } finally {
                        Wr = k
                    }
                }
            } else u.run()
    };
    return a && a(_), u = new cp(f), u.scheduler = o ? () => o(_, !1) : _, h = b => xb(b, !1, u), d = u.onStop = () => {
        const b = Bo.get(u);
        if (b) {
            if (l) l(b, 4);
            else
                for (const w of b) w();
            Bo.delete(u)
        }
    }, t ? r ? _(!0) : m = u.run() : o ? o(_.bind(null, !0), !0) : u.run(), y.pause = u.pause.bind(u), y.resume = u.resume.bind(u), y.stop = y, y
}

function qn(e, t = 1 / 0, n) {
    if (t <= 0 || !be(e) || e.__v_skip || (n = n || new Map, (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, Fe(e)) qn(e.value, t, n);
    else if (se(e))
        for (let r = 0; r < e.length; r++) qn(e[r], t, n);
    else if (tp(e) || Rs(e)) e.forEach(r => {
        qn(r, t, n)
    });
    else if (ou(e)) {
        for (const r in e) qn(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && qn(e[r], t, n)
    }
    return e
}

function ro(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        ri(s, t, n)
    }
}

function gn(e, t, n, r) {
    if (oe(e)) {
        const s = ro(e, t, n, r);
        return s && iu(s) && s.catch(i => {
            ri(i, t, n)
        }), s
    }
    if (se(e)) {
        const s = [];
        for (let i = 0; i < e.length; i++) s.push(gn(e[i], t, n, r));
        return s
    }
}

function ri(e, t, n, r = !0) {
    const s = t ? t.vnode : null,
        {
            errorHandler: i,
            throwUnhandledErrorInProduction: o
        } = t && t.appContext.config || ke;
    if (t) {
        let a = t.parent;
        const l = t.proxy,
            c = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const u = a.ec;
            if (u) {
                for (let f = 0; f < u.length; f++)
                    if (u[f](e, l, c) === !1) return
            }
            a = a.parent
        }
        if (i) {
            tr(), ro(i, null, 10, [e, l, c]), nr();
            return
        }
    }
    Lb(e, n, s, r, o)
}

function Lb(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e)
}
const Ct = [];
let En = -1;
const Ms = [];
let dr = null,
    ws = 0;
const Cp = Promise.resolve();
let jo = null;

function fs(e) {
    const t = jo || Cp;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Rb(e) {
    let t = En + 1,
        n = Ct.length;
    for (; t < n;) {
        const r = t + n >>> 1,
            s = Ct[r],
            i = $i(s);
        i < e || i === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}

function mu(e) {
    if (!(e.flags & 1)) {
        const t = $i(e),
            n = Ct[Ct.length - 1];
        !n || !(e.flags & 2) && t >= $i(n) ? Ct.push(e) : Ct.splice(Rb(t), 0, e), e.flags |= 1, kp()
    }
}

function kp() {
    jo || (jo = Cp.then(Pp))
}

function Fi(e) {
    se(e) ? Ms.push(...e) : dr && e.id === -1 ? dr.splice(ws + 1, 0, e) : e.flags & 1 || (Ms.push(e), e.flags |= 1), kp()
}

function wf(e, t, n = En + 1) {
    for (; n < Ct.length; n++) {
        const r = Ct[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            Ct.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
        }
    }
}

function Ho(e) {
    if (Ms.length) {
        const t = [...new Set(Ms)].sort((n, r) => $i(n) - $i(r));
        if (Ms.length = 0, dr) {
            dr.push(...t);
            return
        }
        for (dr = t, ws = 0; ws < dr.length; ws++) {
            const n = dr[ws];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        dr = null, ws = 0
    }
}
const $i = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function Pp(e) {
    try {
        for (En = 0; En < Ct.length; En++) {
            const t = Ct[En];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ro(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; En < Ct.length; En++) {
            const t = Ct[En];
            t && (t.flags &= -2)
        }
        En = -1, Ct.length = 0, Ho(), jo = null, (Ct.length || Ms.length) && Pp()
    }
}
let ht = null,
    xp = null;

function Uo(e) {
    const t = ht;
    return ht = e, xp = e && e.type.__scopeId || null, t
}

function Gn(e, t = ht, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && Go(-1);
        const i = Uo(t);
        let o;
        try {
            o = e(...s)
        } finally {
            Uo(i), r._d && Go(1)
        }
        return o
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function RR(e, t) {
    if (ht === null) return e;
    const n = La(ht),
        r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [i, o, a, l = ke] = t[s];
        i && (oe(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && qn(o), r.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}

function Sn(e, t, n, r) {
    const s = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
        const a = s[o];
        i && (a.oldValue = i[o].value);
        let l = a.dir[r];
        l && (tr(), gn(l, n, 8, [e.el, a, e, t]), nr())
    }
}

function es(e, t) {
    if (dt) {
        let n = dt.provides;
        const r = dt.parent && dt.parent.provides;
        r === n && (n = dt.provides = Object.create(r)), n[e] = t
    }
}

function pt(e, t, n = !1) {
    const r = Ft();
    if (r || ts) {
        let s = ts ? ts._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && oe(t) ? t.call(r && r.proxy) : t
    }
}

function ka() {
    return !!(Ft() || ts)
}
const Ob = Symbol.for("v-scx"),
    Mb = () => pt(Ob);

function Ap(e, t) {
    return _u(e, null, t)
}

function gt(e, t, n) {
    return _u(e, t, n)
}

function _u(e, t, n = ke) {
    const {
        immediate: r,
        deep: s,
        flush: i,
        once: o
    } = n, a = ct({}, n), l = t && r || !t && i !== "post";
    let c;
    if (hs) {
        if (i === "sync") {
            const h = Mb();
            c = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {};
            return h.stop = Rn, h.resume = Rn, h.pause = Rn, h
        }
    }
    const u = dt;
    a.call = (h, g, p) => gn(h, u, g, p);
    let f = !1;
    i === "post" ? a.scheduler = h => {
        et(h, u && u.suspense)
    } : i !== "sync" && (f = !0, a.scheduler = (h, g) => {
        g ? h() : mu(h)
    }), a.augmentJob = h => {
        t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u))
    };
    const d = Ab(e, t, a);
    return hs && (c ? c.push(d) : l && d()), d
}

function Ib(e, t, n) {
    const r = this.proxy,
        s = Oe(e) ? e.includes(".") ? Lp(r, e) : () => r[e] : e.bind(r, r);
    let i;
    oe(t) ? i = t : (i = t.handler, n = t);
    const o = ii(this),
        a = _u(s, i.bind(r), n);
    return o(), a
}

function Lp(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}
const ur = new WeakMap,
    Rp = Symbol("_vte"),
    Op = e => e.__isTeleport,
    Gr = e => e && (e.disabled || e.disabled === ""),
    Nb = e => e && (e.defer || e.defer === ""),
    Ef = e => typeof SVGElement < "u" && e instanceof SVGElement,
    Sf = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    jl = (e, t) => {
        const n = e && e.to;
        return Oe(n) ? t ? t(n) : null : n
    },
    Db = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, r, s, i, o, a, l, c) {
            const {
                mc: u,
                pc: f,
                pbc: d,
                o: {
                    insert: h,
                    querySelector: g,
                    createText: p,
                    createComment: v,
                    parentNode: y
                }
            } = c, m = Gr(t.props);
            let {
                dynamicChildren: _
            } = t;
            const b = (S, L, x) => {
                    S.shapeFlag & 16 && u(S.children, L, x, s, i, o, a, l)
                },
                w = (S = t) => {
                    const L = Gr(S.props),
                        x = S.target = jl(S.props, g),
                        O = Hl(x, S, p, h);
                    x && (o !== "svg" && Ef(x) ? o = "svg" : o !== "mathml" && Sf(x) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = new Set)).add(x), L || (b(S, x, O), vi(S, !1)))
                },
                k = S => {
                    const L = () => {
                        if (ur.get(S) === L) {
                            if (ur.delete(S), Gr(S.props)) {
                                const x = y(S.el) || n;
                                b(S, x, S.anchor), vi(S, !0)
                            }
                            w(S)
                        }
                    };
                    ur.set(S, L), et(L, i)
                };
            if (e == null) {
                const S = t.el = p(""),
                    L = t.anchor = p("");
                if (h(S, n, r), h(L, n, r), Nb(t.props) || i && i.pendingBranch) {
                    k(t);
                    return
                }
                m && (b(t, n, L), vi(t, !0)), w()
            } else {
                t.el = e.el;
                const S = t.anchor = e.anchor,
                    L = ur.get(e);
                if (L) {
                    L.flags |= 8, ur.delete(e), k(t);
                    return
                }
                t.targetStart = e.targetStart;
                const x = t.target = e.target,
                    O = t.targetAnchor = e.targetAnchor,
                    H = Gr(e.props),
                    F = H ? n : x,
                    W = H ? S : O;
                if (o === "svg" || Ef(x) ? o = "svg" : (o === "mathml" || Sf(x)) && (o = "mathml"), _ ? (d(e.dynamicChildren, _, F, s, i, o, a), Su(e, t, !0)) : l || f(e, t, F, W, s, i, o, a, !1), m) H ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ho(t, n, S, c, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const Z = t.target = jl(t.props, g);
                    Z && ho(t, Z, null, c, 0)
                } else H && ho(t, x, O, c, 1);
                vi(t, m)
            }
        },
        remove(e, t, n, {
            um: r,
            o: {
                remove: s
            }
        }, i) {
            const {
                shapeFlag: o,
                children: a,
                anchor: l,
                targetStart: c,
                targetAnchor: u,
                target: f,
                props: d
            } = e;
            let h = i || !Gr(d);
            const g = ur.get(e);
            if (g && (g.flags |= 8, ur.delete(e), h = !1), f && (s(c), s(u)), i && s(l), o & 16)
                for (let p = 0; p < a.length; p++) {
                    const v = a[p];
                    r(v, t, n, h, !!v.dynamicChildren)
                }
        },
        move: ho,
        hydrate: Fb
    };

function ho(e, t, n, {
    o: {
        insert: r
    },
    m: s
}, i = 2) {
    i === 0 && r(e.targetAnchor, t, n);
    const {
        el: o,
        anchor: a,
        shapeFlag: l,
        children: c,
        props: u
    } = e, f = i === 2;
    if (f && r(o, t, n), !ur.has(e) && (!f || Gr(u)) && l & 16)
        for (let d = 0; d < c.length; d++) s(c[d], t, n, 2);
    f && r(a, t, n)
}

function Fb(e, t, n, r, s, i, {
    o: {
        nextSibling: o,
        parentNode: a,
        querySelector: l,
        insert: c,
        createText: u
    }
}, f) {
    function d(v, y) {
        let m = y;
        for (; m;) {
            if (m && m.nodeType === 8) {
                if (m.data === "teleport start anchor") t.targetStart = m;
                else if (m.data === "teleport anchor") {
                    t.targetAnchor = m, v._lpa = t.targetAnchor && o(t.targetAnchor);
                    break
                }
            }
            m = o(m)
        }
    }

    function h(v, y) {
        y.anchor = f(o(v), y, a(v), n, r, s, i)
    }
    const g = t.target = jl(t.props, l),
        p = Gr(t.props);
    if (g) {
        const v = g._lpa || g.firstChild;
        t.shapeFlag & 16 && (p ? (h(e, t), d(g, v), t.targetAnchor || Hl(g, t, u, c, a(e) === g ? e : null)) : (t.anchor = o(e), d(g, v), t.targetAnchor || Hl(g, t, u, c), f(v && o(v), t, g, n, r, s, i))), vi(t, p)
    } else p && t.shapeFlag & 16 && (h(e, t), t.targetStart = e, t.targetAnchor = o(e));
    return t.anchor && o(t.anchor)
}
const OR = Db;

function vi(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, s;
        for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
        n.ut()
    }
}

function Hl(e, t, n, r, s = null) {
    const i = t.targetStart = n(""),
        o = t.targetAnchor = n("");
    return i[Rp] = o, e && (r(i, e, s), r(o, e, s)), o
}
const Tn = Symbol("_leaveCb"),
    hi = Symbol("_enterCb");

function $b() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Lr(() => {
        e.isMounted = !0
    }), si(() => {
        e.isUnmounting = !0
    }), e
}
const nn = [Function, Array],
    Mp = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: nn,
        onEnter: nn,
        onAfterEnter: nn,
        onEnterCancelled: nn,
        onBeforeLeave: nn,
        onLeave: nn,
        onAfterLeave: nn,
        onLeaveCancelled: nn,
        onBeforeAppear: nn,
        onAppear: nn,
        onAfterAppear: nn,
        onAppearCancelled: nn
    },
    Ip = e => {
        const t = e.subTree;
        return t.component ? Ip(t.component) : t
    },
    Bb = {
        name: "BaseTransition",
        props: Mp,
        setup(e, {
            slots: t
        }) {
            const n = Ft(),
                r = $b();
            return () => {
                const s = t.default && Fp(t.default(), !0),
                    i = s && s.length ? Np(s) : n.subTree ? pr() : void 0;
                if (!i) return;
                const o = _e(e),
                    {
                        mode: a
                    } = o;
                if (r.isLeaving) return tl(i);
                const l = Tf(i);
                if (!l) return tl(i);
                let c = Ul(l, o, r, n, f => c = f);
                l.type !== nt && Vs(l, c);
                let u = n.subTree && Tf(n.subTree);
                if (u && u.type !== nt && !fn(u, l) && Ip(n).type !== nt) {
                    let f = Ul(u, o, r, n);
                    if (Vs(u, f), a === "out-in" && l.type !== nt) return r.isLeaving = !0, f.afterLeave = () => {
                        r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0
                    }, tl(i);
                    a === "in-out" && l.type !== nt ? f.delayLeave = (d, h, g) => {
                        const p = Dp(r, u);
                        p[String(u.key)] = u, d[Tn] = () => {
                            h(), d[Tn] = void 0, delete c.delayedLeave, u = void 0
                        }, c.delayedLeave = () => {
                            g(), delete c.delayedLeave, u = void 0
                        }
                    } : u = void 0
                } else u && (u = void 0);
                return i
            }
        }
    };

function Np(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== nt) {
                t = n;
                break
            }
    }
    return t
}
const jb = Bb;

function Dp(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Ul(e, t, n, r, s) {
    const {
        appear: i,
        mode: o,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: c,
        onAfterEnter: u,
        onEnterCancelled: f,
        onBeforeLeave: d,
        onLeave: h,
        onAfterLeave: g,
        onLeaveCancelled: p,
        onBeforeAppear: v,
        onAppear: y,
        onAfterAppear: m,
        onAppearCancelled: _
    } = t, b = String(e.key), w = Dp(n, e), k = (x, O) => {
        x && gn(x, r, 9, O)
    }, S = (x, O) => {
        const H = O[1];
        k(x, O), se(x) ? x.every(F => F.length <= 1) && H() : x.length <= 1 && H()
    }, L = {
        mode: o,
        persisted: a,
        beforeEnter(x) {
            let O = l;
            if (!n.isMounted)
                if (i) O = v || l;
                else return;
            x[Tn] && x[Tn](!0);
            const H = w[b];
            H && fn(e, H) && H.el[Tn] && H.el[Tn](), k(O, [x])
        },
        enter(x) {
            if (w[b] === e) return;
            let O = c,
                H = u,
                F = f;
            if (!n.isMounted)
                if (i) O = y || c, H = m || u, F = _ || f;
                else return;
            let W = !1;
            x[hi] = re => {
                W || (W = !0, re ? k(F, [x]) : k(H, [x]), L.delayedLeave && L.delayedLeave(), x[hi] = void 0)
            };
            const Z = x[hi].bind(null, !1);
            O ? S(O, [x, Z]) : Z()
        },
        leave(x, O) {
            const H = String(e.key);
            if (x[hi] && x[hi](!0), n.isUnmounting) return O();
            k(d, [x]);
            let F = !1;
            x[Tn] = Z => {
                F || (F = !0, O(), Z ? k(p, [x]) : k(g, [x]), x[Tn] = void 0, w[H] === e && delete w[H])
            };
            const W = x[Tn].bind(null, !1);
            w[H] = e, h ? S(h, [x, W]) : W()
        },
        clone(x) {
            const O = Ul(x, t, n, r, s);
            return s && s(O), O
        }
    };
    return L
}

function tl(e) {
    if (so(e)) return e = Nn(e), e.children = null, e
}

function Tf(e) {
    if (!so(e)) return Op(e.type) && e.children ? Np(e.children) : e;
    if (e.component) return e.component.subTree;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && oe(n.default)) return n.default()
    }
}

function Vs(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Fp(e, t = !1, n) {
    let r = [],
        s = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === Qe ? (o.patchFlag & 128 && s++, r = r.concat(Fp(o.children, t, a))) : (t || o.type !== nt) && r.push(a != null ? Nn(o, {
            key: a
        }) : o)
    }
    if (s > 1)
        for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r
}

function yn(e, t) {
    return oe(e) ? ct({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function MR() {
    const e = Ft();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}

function yu(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Hb(e) {
    const t = Ft(),
        n = pn(null);
    if (t) {
        const s = t.refs === ke ? t.refs = {} : t.refs;
        Object.defineProperty(s, e, {
            enumerable: !0,
            get: () => n.value,
            set: i => n.value = i
        })
    }
    return n
}

function Cf(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
const Vo = new WeakMap;

function Is(e, t, n, r, s = !1) {
    if (se(e)) {
        e.forEach((p, v) => Is(p, t && (se(t) ? t[v] : t), n, r, s));
        return
    }
    if (Qn(r) && !s) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Is(e, t, n, r.component.subTree);
        return
    }
    const i = r.shapeFlag & 4 ? La(r.component) : r.el,
        o = s ? null : i,
        {
            i: a,
            r: l
        } = e,
        c = t && t.r,
        u = a.refs === ke ? a.refs = {} : a.refs,
        f = a.setupState,
        d = _e(f),
        h = f === ke ? ep : p => Cf(u, p) ? !1 : Ee(d, p),
        g = (p, v) => !(v && Cf(u, v));
    if (c != null && c !== l) {
        if (kf(t), Oe(c)) u[c] = null, h(c) && (f[c] = null);
        else if (Fe(c)) {
            const p = t;
            g(c, p.k) && (c.value = null), p.k && (u[p.k] = null)
        }
    }
    if (oe(l)) ro(l, a, 12, [o, u]);
    else {
        const p = Oe(l),
            v = Fe(l);
        if (p || v) {
            const y = () => {
                if (e.f) {
                    const m = p ? h(l) ? f[l] : u[l] : g() || !e.k ? l.value : u[e.k];
                    if (s) se(m) && su(m, i);
                    else if (se(m)) m.includes(i) || m.push(i);
                    else if (p) u[l] = [i], h(l) && (f[l] = u[l]);
                    else {
                        const _ = [i];
                        g(l, e.k) && (l.value = _), e.k && (u[e.k] = _)
                    }
                } else p ? (u[l] = o, h(l) && (f[l] = o)) : v && (g(l, e.k) && (l.value = o), e.k && (u[e.k] = o))
            };
            if (o) {
                const m = () => {
                    y(), Vo.delete(e)
                };
                m.id = -1, Vo.set(e, m), et(m, n)
            } else kf(e), y()
        }
    }
}

function kf(e) {
    const t = Vo.get(e);
    t && (t.flags |= 8, Vo.delete(e))
}
let Pf = !1;
const bs = () => {
        Pf || (console.error("Hydration completed but contains mismatches."), Pf = !0)
    },
    Ub = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    Vb = e => e.namespaceURI.includes("MathML"),
    po = e => {
        if (e.nodeType === 1) {
            if (Ub(e)) return "svg";
            if (Vb(e)) return "mathml"
        }
    },
    ks = e => e.nodeType === 8;

function Wb(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: s,
            nextSibling: i,
            parentNode: o,
            remove: a,
            insert: l,
            createComment: c
        }
    } = e, u = (_, b) => {
        if (!b.hasChildNodes()) {
            n(null, _, b), Ho(), b._vnode = _;
            return
        }
        f(b.firstChild, _, null, null, null), Ho(), b._vnode = _
    }, f = (_, b, w, k, S, L = !1) => {
        L = L || !!b.dynamicChildren;
        const x = ks(_) && _.data === "[",
            O = () => p(_, b, w, k, S, x),
            {
                type: H,
                ref: F,
                shapeFlag: W,
                patchFlag: Z
            } = b;
        let re = _.nodeType;
        b.el = _, Z === -2 && (L = !1, b.dynamicChildren = null);
        let V = null;
        switch (H) {
            case br:
                re !== 3 ? b.children === "" ? (l(b.el = s(""), o(_), _), V = _) : V = O() : (_.data !== b.children && (bs(), _.data = b.children), V = i(_));
                break;
            case nt:
                m(_) ? (V = i(_), y(b.el = _.content.firstChild, _, w)) : re !== 8 || x ? V = O() : V = i(_);
                break;
            case Oo:
                if (x && (_ = i(_), re = _.nodeType), re === 1 || re === 3) {
                    V = _;
                    const X = !b.children.length;
                    for (let q = 0; q < b.staticCount; q++) X && (b.children += V.nodeType === 1 ? V.outerHTML : V.data), q === b.staticCount - 1 && (b.anchor = V), V = i(V);
                    return x ? i(V) : V
                } else O();
                break;
            case Qe:
                x ? V = g(_, b, w, k, S, L) : V = O();
                break;
            default:
                if (W & 1)(re !== 1 || b.type.toLowerCase() !== _.tagName.toLowerCase()) && !m(_) ? V = O() : V = d(_, b, w, k, S, L);
                else if (W & 6) {
                    b.slotScopeIds = S;
                    const X = o(_);
                    if (x ? V = v(_) : ks(_) && _.data === "teleport start" ? V = v(_, _.data, "teleport end") : V = i(_), t(b, X, null, w, k, po(X), L), Qn(b) && !b.type.__asyncResolved) {
                        let q;
                        x ? (q = Pe(Qe), q.anchor = V ? V.previousSibling : X.lastChild) : q = _.nodeType === 3 ? zs("") : Pe("div"), q.el = _, b.component.subTree = q
                    }
                } else W & 64 ? re !== 8 ? V = O() : V = b.type.hydrate(_, b, w, k, S, L, e, h) : W & 128 && (V = b.type.hydrate(_, b, w, k, po(o(_)), S, L, e, f))
        }
        return F != null && Is(F, null, k, b), V
    }, d = (_, b, w, k, S, L) => {
        L = L || !!b.dynamicChildren;
        const {
            type: x,
            props: O,
            patchFlag: H,
            shapeFlag: F,
            dirs: W,
            transition: Z
        } = b, re = x === "input" || x === "option";
        if (re || H !== -1) {
            W && Sn(b, null, w, "created");
            let V = !1;
            if (m(_)) {
                V = lg(null, Z) && w && w.vnode.props && w.vnode.props.appear;
                const q = _.content.firstChild;
                if (V) {
                    const ce = q.getAttribute("class");
                    ce && (q.$cls = ce), Z.beforeEnter(q)
                }
                y(q, _, w), b.el = _ = q
            }
            if (F & 16 && !(O && (O.innerHTML || O.textContent))) {
                let q = h(_.firstChild, b, _, w, k, S, L);
                for (; q;) {
                    go(_, 1) || bs();
                    const ce = q;
                    q = q.nextSibling, a(ce)
                }
            } else if (F & 8) {
                let q = b.children;
                q[0] === `
` && (_.tagName === "PRE" || _.tagName === "TEXTAREA") && (q = q.slice(1));
                const {
                    textContent: ce
                } = _;
                ce !== q && ce !== q.replace(/\r\n|\r/g, `
`) && (go(_, 0) || bs(), _.textContent = b.children)
            }
            if (O) {
                if (re || !L || H & 48) {
                    const q = _.tagName.includes("-");
                    for (const ce in O)(re && (ce.endsWith("value") || ce === "indeterminate") || no(ce) && !Jr(ce) || ce[0] === "." || q && !Jr(ce)) && r(_, ce, null, O[ce], void 0, w)
                } else if (O.onClick) r(_, "onClick", null, O.onClick, void 0, w);
                else if (H & 4 && yr(O.style))
                    for (const q in O.style) O.style[q]
            }
            let X;
            (X = O && O.onVnodeBeforeMount) && Lt(X, w, b), W && Sn(b, null, w, "beforeMount"), ((X = O && O.onVnodeMounted) || W || V) && hg(() => {
                X && Lt(X, w, b), V && Z.enter(_), W && Sn(b, null, w, "mounted")
            }, k)
        }
        return _.nextSibling
    }, h = (_, b, w, k, S, L, x) => {
        x = x || !!b.dynamicChildren;
        const O = b.children,
            H = O.length;
        for (let F = 0; F < H; F++) {
            const W = x ? O[F] : O[F] = Vt(O[F]),
                Z = W.type === br;
            _ ? (Z && !x && F + 1 < H && Vt(O[F + 1]).type === br && (l(s(_.data.slice(W.children.length)), w, i(_)), _.data = W.children), _ = f(_, W, k, S, L, x)) : Z && !W.children ? l(W.el = s(""), w) : (go(w, 1) || bs(), n(null, W, w, null, k, S, po(w), L))
        }
        return _
    }, g = (_, b, w, k, S, L) => {
        const {
            slotScopeIds: x
        } = b;
        x && (S = S ? S.concat(x) : x);
        const O = o(_),
            H = h(i(_), b, O, w, k, S, L);
        return H && ks(H) && H.data === "]" ? i(b.anchor = H) : (bs(), l(b.anchor = c("]"), O, H), H)
    }, p = (_, b, w, k, S, L) => {
        if (go(_.parentElement, 1) || bs(), b.el = null, L) {
            const H = v(_);
            for (;;) {
                const F = i(_);
                if (F && F !== H) a(F);
                else break
            }
        }
        const x = i(_),
            O = o(_);
        return a(_), n(null, b, O, x, w, k, po(O), S), w && (w.vnode.el = b.el, Aa(w, b.el)), x
    }, v = (_, b = "[", w = "]") => {
        let k = 0;
        for (; _;)
            if (_ = i(_), _ && ks(_) && (_.data === b && k++, _.data === w)) {
                if (k === 0) return i(_);
                k--
            }
        return _
    }, y = (_, b, w) => {
        const k = b.parentNode;
        k && k.replaceChild(_, b);
        let S = w;
        for (; S;) S.vnode.el === b && (S.vnode.el = S.subTree.el = _), S = S.parent
    }, m = _ => _.nodeType === 1 && _.tagName === "TEMPLATE";
    return [u, f]
}
const xf = "data-allow-mismatch",
    zb = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };

function go(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(xf);) e = e.parentElement;
    const n = e && e.getAttribute(xf);
    if (n == null) return !1;
    if (n === "") return !0; {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(zb[t])
    }
}
Ea().requestIdleCallback;
Ea().cancelIdleCallback;

function qb(e, t) {
    if (ks(e) && e.data === "[") {
        let n = 1,
            r = e.nextSibling;
        for (; r;) {
            if (r.nodeType === 1) {
                if (t(r) === !1) break
            } else if (ks(r))
                if (r.data === "]") {
                    if (--n === 0) break
                } else r.data === "[" && n++;
            r = r.nextSibling
        }
    } else t(e)
}
const Qn = e => !!e.type.__asyncLoader;

function Me(e) {
    oe(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: s = 200,
        hydrate: i,
        timeout: o,
        suspensible: a = !0,
        onError: l
    } = e;
    let c = null,
        u, f = 0;
    const d = () => (f++, c = null, h()),
        h = () => {
            let g;
            return c || (g = c = t().catch(p => {
                if (p = p instanceof Error ? p : new Error(String(p)), l) return new Promise((v, y) => {
                    l(p, () => v(d()), () => y(p), f + 1)
                });
                throw p
            }).then(p => g !== c && c ? c : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), u = p, p)))
        };
    return yn({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(g, p, v) {
            let y = !1;
            (p.bu || (p.bu = [])).push(() => y = !0);
            const m = () => {
                    y || v()
                },
                _ = i ? () => {
                    const b = i(m, w => qb(g, w));
                    b && (p.bum || (p.bum = [])).push(b)
                } : m;
            u ? _() : h().then(() => !p.isUnmounted && _())
        },
        get __asyncResolved() {
            return u
        },
        setup() {
            const g = dt;
            if (yu(g), u) return () => mo(u, g);
            const p = _ => {
                c = null, ri(_, g, 13, !r)
            };
            if (a && g.suspense || hs) return h().then(_ => () => mo(_, g)).catch(_ => (p(_), () => r ? Pe(r, {
                error: _
            }) : null));
            const v = lt(!1),
                y = lt(),
                m = lt(!!s);
            return s && setTimeout(() => {
                m.value = !1
            }, s), o != null && setTimeout(() => {
                if (!v.value && !y.value) {
                    const _ = new Error(`Async component timed out after ${o}ms.`);
                    p(_), y.value = _
                }
            }, o), h().then(() => {
                v.value = !0, g.parent && so(g.parent.vnode) && g.parent.update()
            }).catch(_ => {
                p(_), y.value = _
            }), () => {
                if (v.value && u) return mo(u, g);
                if (y.value && r) return Pe(r, {
                    error: y.value
                });
                if (n && !m.value) return mo(n, g)
            }
        }
    })
}

function mo(e, t) {
    const {
        ref: n,
        props: r,
        children: s,
        ce: i
    } = t.vnode, o = Pe(e, r, s);
    return o.ref = n, o.ce = i, delete t.vnode.ce, o
}
const so = e => e.type.__isKeepAlive,
    Gb = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = Ft(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const m = t.default && t.default();
                return m && m.length === 1 ? m[0] : m
            };
            const s = new Map,
                i = new Set;
            let o = null;
            const a = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: c,
                        um: u,
                        o: {
                            createElement: f
                        }
                    }
                } = r,
                d = f("div");
            r.activate = (m, _, b, w, k) => {
                const S = m.component;
                c(m, _, b, 0, a), l(S.vnode, m, _, b, S, a, w, m.slotScopeIds, k), et(() => {
                    S.isDeactivated = !1, S.a && Os(S.a);
                    const L = m.props && m.props.onVnodeMounted;
                    L && Lt(L, S.parent, m)
                }, a)
            }, r.deactivate = m => {
                const _ = m.component;
                zo(_.m), zo(_.a), c(m, d, null, 1, a), et(() => {
                    _.da && Os(_.da);
                    const b = m.props && m.props.onVnodeUnmounted;
                    b && Lt(b, _.parent, m), _.isDeactivated = !0
                }, a)
            };

            function h(m) {
                nl(m), u(m, n, a, !0)
            }

            function g(m) {
                s.forEach((_, b) => {
                    const w = Yl(Qn(_) ? _.type.__asyncResolved || {} : _.type);
                    w && !m(w) && p(b)
                })
            }

            function p(m) {
                const _ = s.get(m);
                _ && (!o || !fn(_, o)) ? h(_) : o && nl(o), s.delete(m), i.delete(m)
            }
            gt(() => [e.include, e.exclude], ([m, _]) => {
                m && g(b => wi(m, b)), _ && g(b => !wi(_, b))
            }, {
                flush: "post",
                deep: !0
            });
            let v = null;
            const y = () => {
                v != null && (qo(n.subTree.type) ? et(() => {
                    s.set(v, _o(n.subTree))
                }, n.subTree.suspense) : s.set(v, _o(n.subTree)))
            };
            return Lr(y), jp(y), si(() => {
                s.forEach(m => {
                    const {
                        subTree: _,
                        suspense: b
                    } = n, w = _o(_);
                    if (m.type === w.type && m.key === w.key) {
                        nl(w);
                        const k = w.component.da;
                        k && et(k, b);
                        return
                    }
                    h(m)
                })
            }), () => {
                if (v = null, !t.default) return o = null;
                const m = t.default(),
                    _ = m[0];
                if (m.length > 1) return o = null, m;
                if (!ds(_) || !(_.shapeFlag & 4) && !(_.shapeFlag & 128)) return o = null, _;
                let b = _o(_);
                if (b.type === nt) return o = null, b;
                const w = b.type,
                    k = Yl(Qn(b) ? b.type.__asyncResolved || {} : w),
                    {
                        include: S,
                        exclude: L,
                        max: x
                    } = e;
                if (S && (!k || !wi(S, k)) || L && k && wi(L, k)) return b.shapeFlag &= -257, o = b, _;
                const O = b.key == null ? w : b.key,
                    H = s.get(O);
                return b.el && (b = Nn(b), _.shapeFlag & 128 && (_.ssContent = b)), v = O, H ? (b.el = H.el, b.component = H.component, b.transition && Vs(b, b.transition), b.shapeFlag |= 512, i.delete(O), i.add(O)) : (i.add(O), x && i.size > parseInt(x, 10) && p(i.values().next().value)), b.shapeFlag |= 256, o = b, qo(_.type) ? _ : b
            }
        }
    },
    Kb = Gb;

function wi(e, t) {
    return se(e) ? e.some(n => wi(n, t)) : Oe(e) ? e.split(",").includes(t) : Hy(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function bu(e, t) {
    $p(e, "a", t)
}

function vu(e, t) {
    $p(e, "da", t)
}

function $p(e, t, n = dt) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (Pa(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) so(s.parent.vnode) && Yb(r, t, n, s), s = s.parent
    }
}

function Yb(e, t, n, r) {
    const s = Pa(t, e, r, !0);
    ms(() => {
        su(r[t], s)
    }, n)
}

function nl(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function _o(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Pa(e, t, n = dt, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...o) => {
                tr();
                const a = ii(n),
                    l = gn(t, n, e, o);
                return a(), nr(), l
            });
        return r ? s.unshift(i) : s.push(i), i
    }
}
const ar = e => (t, n = dt) => {
        (!hs || e === "sp") && Pa(e, (...r) => t(...r), n)
    },
    Bp = ar("bm"),
    Lr = ar("m"),
    Xb = ar("bu"),
    jp = ar("u"),
    si = ar("bum"),
    ms = ar("um"),
    Jb = ar("sp"),
    Qb = ar("rtg"),
    Zb = ar("rtc");

function Hp(e, t = dt) {
    Pa("ec", e, t)
}
const Up = "components";

function Af(e, t) {
    return zp(Up, e, !0, t) || e
}
const Vp = Symbol.for("v-ndc");

function Wp(e) {
    return Oe(e) ? zp(Up, e, !1) || e : e || Vp
}

function zp(e, t, n = !0, r = !1) {
    const s = ht || dt;
    if (s) {
        const i = s.type; {
            const a = Yl(i, !1);
            if (a && (a === t || a === kt(t) || a === wa(kt(t)))) return i
        }
        const o = Lf(s[e] || i[e], t) || Lf(s.appContext[e], t);
        return !o && r ? i : o
    }
}

function Lf(e, t) {
    return e && (e[t] || e[kt(t)] || e[wa(kt(t))])
}

function Rf(e, t, n, r) {
    let s;
    const i = n && n[r],
        o = se(e);
    if (o || Oe(e)) {
        const a = o && yr(e);
        let l = !1,
            c = !1;
        a && (l = !Yt(e), c = In(e), e = Ta(e)), s = new Array(e.length);
        for (let u = 0, f = e.length; u < f; u++) s[u] = t(l ? c ? Us(hn(e[u])) : hn(e[u]) : e[u], u, void 0, i && i[u])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i && i[a])
    } else if (be(e))
        if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, i && i[l]));
        else {
            const a = Object.keys(e);
            s = new Array(a.length);
            for (let l = 0, c = a.length; l < c; l++) {
                const u = a[l];
                s[l] = t(e[u], u, l, i && i[l])
            }
        }
    else s = [];
    return n && (n[r] = s), s
}

function ev(e, t, n = {}, r, s) {
    if (ht.ce || ht.parent && Qn(ht.parent) && ht.parent.ce) {
        const c = Object.keys(n).length > 0;
        return t !== "default" && (n.name = t), De(), zt(Qe, null, [Pe("slot", n, r && r())], c ? -2 : 64)
    }
    let i = e[t];
    i && i._c && (i._d = !1), De();
    const o = i && qp(i(n)),
        a = n.key || o && o.key,
        l = zt(Qe, {
            key: (a && !Qt(a) ? a : `_${t}`) + (!o && r ? "_fb" : "")
        }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
    return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l
}

function qp(e) {
    return e.some(t => ds(t) ? !(t.type === nt || t.type === Qe && !qp(t.children)) : !0) ? e : null
}
const Vl = e => e ? bg(e) ? La(e) : Vl(e.parent) : null,
    xi = ct(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Vl(e.parent),
        $root: e => Vl(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => Yp(e),
        $forceUpdate: e => e.f || (e.f = () => {
            mu(e.update)
        }),
        $nextTick: e => e.n || (e.n = fs.bind(e.proxy)),
        $watch: e => Ib.bind(e)
    }),
    rl = (e, t) => e !== ke && !e.__isScriptSetup && Ee(e, t),
    tv = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: r,
                data: s,
                props: i,
                accessCache: o,
                type: a,
                appContext: l
            } = e;
            if (t[0] !== "$") {
                const d = o[t];
                if (d !== void 0) switch (d) {
                    case 1:
                        return r[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (rl(r, t)) return o[t] = 1, r[t];
                    if (s !== ke && Ee(s, t)) return o[t] = 2, s[t];
                    if (Ee(i, t)) return o[t] = 3, i[t];
                    if (n !== ke && Ee(n, t)) return o[t] = 4, n[t];
                    Wl && (o[t] = 0)
                }
            }
            const c = xi[t];
            let u, f;
            if (c) return t === "$attrs" && vt(e.attrs, "get", ""), c(e);
            if ((u = a.__cssModules) && (u = u[t])) return u;
            if (n !== ke && Ee(n, t)) return o[t] = 4, n[t];
            if (f = l.config.globalProperties, Ee(f, t)) return f[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: s,
                ctx: i
            } = e;
            return rl(s, t) ? (s[t] = n, !0) : r !== ke && Ee(r, t) ? (r[t] = n, !0) : Ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: s,
                props: i,
                type: o
            }
        }, a) {
            let l;
            return !!(n[a] || e !== ke && a[0] !== "$" && Ee(e, a) || rl(t, a) || Ee(i, a) || Ee(r, a) || Ee(xi, a) || Ee(s.config.globalProperties, a) || (l = o.__cssModules) && l[a])
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function nv() {
    return Gp().slots
}

function rv() {
    return Gp().attrs
}

function Gp(e) {
    const t = Ft();
    return t.setupContext || (t.setupContext = wg(t))
}

function Of(e) {
    return se(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function sv(e) {
    const t = Ft(),
        n = hs;
    let r = e();
    ji(), n && Ds(!1);
    const s = () => {
            ii(t), n && Ds(!0)
        },
        i = () => {
            Ft() !== t && t.scope.off(), ji(), n && Ds(!1)
        };
    return iu(r) && (r = r.catch(o => {
        throw s(), Promise.resolve().then(() => Promise.resolve().then(i)), o
    })), [r, () => {
        s(), Promise.resolve().then(i)
    }]
}
let Wl = !0;

function iv(e) {
    const t = Yp(e),
        n = e.proxy,
        r = e.ctx;
    Wl = !1, t.beforeCreate && Mf(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: i,
        methods: o,
        watch: a,
        provide: l,
        inject: c,
        created: u,
        beforeMount: f,
        mounted: d,
        beforeUpdate: h,
        updated: g,
        activated: p,
        deactivated: v,
        beforeDestroy: y,
        beforeUnmount: m,
        destroyed: _,
        unmounted: b,
        render: w,
        renderTracked: k,
        renderTriggered: S,
        errorCaptured: L,
        serverPrefetch: x,
        expose: O,
        inheritAttrs: H,
        components: F,
        directives: W,
        filters: Z
    } = t;
    if (c && ov(c, r, null), o)
        for (const X in o) {
            const q = o[X];
            oe(q) && (r[X] = q.bind(n))
        }
    if (s) {
        const X = s.call(n, n);
        be(X) && (e.data = _n(X))
    }
    if (Wl = !0, i)
        for (const X in i) {
            const q = i[X],
                ce = oe(q) ? q.bind(n, n) : oe(q.get) ? q.get.bind(n, n) : Rn,
                it = !oe(q) && oe(q.set) ? q.set.bind(n) : Rn,
                Ke = ne({
                    get: ce,
                    set: it
                });
            Object.defineProperty(r, X, {
                enumerable: !0,
                configurable: !0,
                get: () => Ke.value,
                set: Ie => Ke.value = Ie
            })
        }
    if (a)
        for (const X in a) Kp(a[X], r, n, X);
    if (l) {
        const X = oe(l) ? l.call(n) : l;
        Reflect.ownKeys(X).forEach(q => {
            es(q, X[q])
        })
    }
    u && Mf(u, e, "c");

    function V(X, q) {
        se(q) ? q.forEach(ce => X(ce.bind(n))) : q && X(q.bind(n))
    }
    if (V(Bp, f), V(Lr, d), V(Xb, h), V(jp, g), V(bu, p), V(vu, v), V(Hp, L), V(Zb, k), V(Qb, S), V(si, m), V(ms, b), V(Jb, x), se(O))
        if (O.length) {
            const X = e.exposed || (e.exposed = {});
            O.forEach(q => {
                Object.defineProperty(X, q, {
                    get: () => n[q],
                    set: ce => n[q] = ce,
                    enumerable: !0
                })
            })
        } else e.exposed || (e.exposed = {});
    w && e.render === Rn && (e.render = w), H != null && (e.inheritAttrs = H), F && (e.components = F), W && (e.directives = W), x && yu(e)
}

function ov(e, t, n = Rn) {
    se(e) && (e = zl(e));
    for (const r in e) {
        const s = e[r];
        let i;
        be(s) ? "default" in s ? i = pt(s.from || r, s.default, !0) : i = pt(s.from || r) : i = pt(s), Fe(i) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[r] = i
    }
}

function Mf(e, t, n) {
    gn(se(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Kp(e, t, n, r) {
    let s = r.includes(".") ? Lp(n, r) : () => n[r];
    if (Oe(e)) {
        const i = t[e];
        oe(i) && gt(s, i)
    } else if (oe(e)) gt(s, e.bind(n));
    else if (be(e))
        if (se(e)) e.forEach(i => Kp(i, t, n, r));
        else {
            const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
            oe(i) && gt(s, i, e)
        }
}

function Yp(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: s,
            optionsCache: i,
            config: {
                optionMergeStrategies: o
            }
        } = e.appContext,
        a = i.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(c => Wo(l, c, o, !0)), Wo(l, t, o)), be(t) && i.set(t, l), l
}

function Wo(e, t, n, r = !1) {
    const {
        mixins: s,
        extends: i
    } = t;
    i && Wo(e, i, n, !0), s && s.forEach(o => Wo(e, o, n, !0));
    for (const o in t)
        if (!(r && o === "expose")) {
            const a = av[o] || n && n[o];
            e[o] = a ? a(e[o], t[o]) : t[o]
        }
    return e
}
const av = {
    data: If,
    props: Nf,
    emits: Nf,
    methods: Ei,
    computed: Ei,
    beforeCreate: St,
    created: St,
    beforeMount: St,
    mounted: St,
    beforeUpdate: St,
    updated: St,
    beforeDestroy: St,
    beforeUnmount: St,
    destroyed: St,
    unmounted: St,
    activated: St,
    deactivated: St,
    errorCaptured: St,
    serverPrefetch: St,
    components: Ei,
    directives: Ei,
    watch: cv,
    provide: If,
    inject: lv
};

function If(e, t) {
    return t ? e ? function() {
        return ct(oe(e) ? e.call(this, this) : e, oe(t) ? t.call(this, this) : t)
    } : t : e
}

function lv(e, t) {
    return Ei(zl(e), zl(t))
}

function zl(e) {
    if (se(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function St(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Ei(e, t) {
    return e ? ct(Object.create(null), e, t) : t
}

function Nf(e, t) {
    return e ? se(e) && se(t) ? [...new Set([...e, ...t])] : ct(Object.create(null), Of(e), Of(t ? ? {})) : t
}

function cv(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ct(Object.create(null), e);
    for (const r in t) n[r] = St(e[r], t[r]);
    return n
}

function Xp() {
    return {
        app: null,
        config: {
            isNativeTag: ep,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let uv = 0;

function fv(e, t) {
    return function(r, s = null) {
        oe(r) || (r = ct({}, r)), s != null && !be(s) && (s = null);
        const i = Xp(),
            o = new WeakSet,
            a = [];
        let l = !1;
        const c = i.app = {
            _uid: uv++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: Uv,
            get config() {
                return i.config
            },
            set config(u) {},
            use(u, ...f) {
                return o.has(u) || (u && oe(u.install) ? (o.add(u), u.install(c, ...f)) : oe(u) && (o.add(u), u(c, ...f))), c
            },
            mixin(u) {
                return i.mixins.includes(u) || i.mixins.push(u), c
            },
            component(u, f) {
                return f ? (i.components[u] = f, c) : i.components[u]
            },
            directive(u, f) {
                return f ? (i.directives[u] = f, c) : i.directives[u]
            },
            mount(u, f, d) {
                if (!l) {
                    const h = c._ceVNode || Pe(r, s);
                    return h.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && t ? t(h, u) : e(h, u, d), l = !0, c._container = u, u.__vue_app__ = c, La(h.component)
                }
            },
            onUnmount(u) {
                a.push(u)
            },
            unmount() {
                l && (gn(a, c._instance, 16), e(null, c._container), delete c._container.__vue_app__)
            },
            provide(u, f) {
                return i.provides[u] = f, c
            },
            runWithContext(u) {
                const f = ts;
                ts = c;
                try {
                    return u()
                } finally {
                    ts = f
                }
            }
        };
        return c
    }
}
let ts = null;
const dv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${kt(t)}Modifiers`] || e[`${xr(t)}Modifiers`];

function hv(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ke;
    let s = n;
    const i = t.startsWith("update:"),
        o = i && dv(r, t.slice(7));
    o && (o.trim && (s = n.map(u => Oe(u) ? u.trim() : u)), o.number && (s = n.map(au)));
    let a, l = r[a = Xa(t)] || r[a = Xa(kt(t))];
    !l && i && (l = r[a = Xa(xr(t))]), l && gn(l, e, 6, s);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, gn(c, e, 6, s)
    }
}
const pv = new WeakMap;

function Jp(e, t, n = !1) {
    const r = n ? pv : t.emitsCache,
        s = r.get(e);
    if (s !== void 0) return s;
    const i = e.emits;
    let o = {},
        a = !1;
    if (!oe(e)) {
        const l = c => {
            const u = Jp(c, t, !0);
            u && (a = !0, ct(o, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !i && !a ? (be(e) && r.set(e, null), null) : (se(i) ? i.forEach(l => o[l] = null) : ct(o, i), be(e) && r.set(e, o), o)
}

function xa(e, t) {
    return !e || !no(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, xr(t)) || Ee(e, t))
}

function sl(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [i],
        slots: o,
        attrs: a,
        emit: l,
        render: c,
        renderCache: u,
        props: f,
        data: d,
        setupState: h,
        ctx: g,
        inheritAttrs: p
    } = e, v = Uo(e);
    let y, m;
    try {
        if (n.shapeFlag & 4) {
            const b = s || r,
                w = b;
            y = Vt(c.call(w, b, u, f, h, d, g)), m = a
        } else {
            const b = t;
            y = Vt(b.length > 1 ? b(f, {
                attrs: a,
                slots: o,
                emit: l
            }) : b(f, null)), m = t.props ? a : mv(a)
        }
    } catch (b) {
        Ai.length = 0, ri(b, e, 1), y = Pe(nt)
    }
    let _ = y;
    if (m && p !== !1) {
        const b = Object.keys(m),
            {
                shapeFlag: w
            } = _;
        b.length && w & 7 && (i && b.some(ya) && (m = _v(m, i)), _ = Nn(_, m, !1, !0))
    }
    return n.dirs && (_ = Nn(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && Vs(_, n.transition), y = _, Uo(v), y
}

function gv(e, t = !0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (ds(s)) {
            if (s.type !== nt || s.children === "v-if") {
                if (n) return;
                n = s
            }
        } else return
    }
    return n
}
const mv = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || no(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    _v = (e, t) => {
        const n = {};
        for (const r in e)(!ya(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function yv(e, t, n) {
    const {
        props: r,
        children: s,
        component: i
    } = e, {
        props: o,
        children: a,
        patchFlag: l
    } = t, c = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? Df(r, o, c) : !!o;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (Qp(o, r, d) && !xa(c, d)) return !0
            }
        }
    } else return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? Df(r, o, c) : !0 : !!o;
    return !1
}

function Df(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (Qp(t, e, i) && !xa(n, i)) return !0
    }
    return !1
}

function Qp(e, t, n) {
    const r = e[n],
        s = t[n];
    return n === "style" && be(r) && be(s) ? !lu(r, s) : r !== s
}

function Aa({
    vnode: e,
    parent: t,
    suspense: n
}, r) {
    for (; t;) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)(e = t.vnode).el = r, t = t.parent;
        else break
    }
    n && n.activeBranch === e && (n.vnode.el = r)
}
const Zp = {},
    eg = () => Object.create(Zp),
    tg = e => Object.getPrototypeOf(e) === Zp;

function bv(e, t, n, r = !1) {
    const s = {},
        i = eg();
    e.propsDefaults = Object.create(null), ng(e, t, s, i);
    for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
    n ? e.props = r ? s : xn(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
}

function vv(e, t, n, r) {
    const {
        props: s,
        attrs: i,
        vnode: {
            patchFlag: o
        }
    } = e, a = _e(s), [l] = e.propsOptions;
    let c = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (xa(e.emitsOptions, d)) continue;
                const h = t[d];
                if (l)
                    if (Ee(i, d)) h !== i[d] && (i[d] = h, c = !0);
                    else {
                        const g = kt(d);
                        s[g] = ql(l, a, g, h, e, !1)
                    }
                else h !== i[d] && (i[d] = h, c = !0)
            }
        }
    } else {
        ng(e, t, s, i) && (c = !0);
        let u;
        for (const f in a)(!t || !Ee(t, f) && ((u = xr(f)) === f || !Ee(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (s[f] = ql(l, a, f, void 0, e, !0)) : delete s[f]);
        if (i !== a)
            for (const f in i)(!t || !Ee(t, f)) && (delete i[f], c = !0)
    }
    c && zn(e.attrs, "set", "")
}

function ng(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1,
        a;
    if (t)
        for (let l in t) {
            if (Jr(l)) continue;
            const c = t[l];
            let u;
            s && Ee(s, u = kt(l)) ? !i || !i.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : xa(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, o = !0)
        }
    if (i) {
        const l = _e(n),
            c = a || ke;
        for (let u = 0; u < i.length; u++) {
            const f = i[u];
            n[f] = ql(s, l, f, c[f], e, !Ee(c, f))
        }
    }
    return o
}

function ql(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
        const a = Ee(o, "default");
        if (a && r === void 0) {
            const l = o.default;
            if (o.type !== Function && !o.skipFactory && oe(l)) {
                const {
                    propsDefaults: c
                } = s;
                if (n in c) r = c[n];
                else {
                    const u = ii(s);
                    r = c[n] = l.call(null, t), u()
                }
            } else r = l;
            s.ce && s.ce._setProp(n, r)
        }
        o[0] && (i && !a ? r = !1 : o[1] && (r === "" || r === xr(n)) && (r = !0))
    }
    return r
}
const wv = new WeakMap;

function rg(e, t, n = !1) {
    const r = n ? wv : t.propsCache,
        s = r.get(e);
    if (s) return s;
    const i = e.props,
        o = {},
        a = [];
    let l = !1;
    if (!oe(e)) {
        const u = f => {
            l = !0;
            const [d, h] = rg(f, t, !0);
            ct(o, d), h && a.push(...h)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!i && !l) return be(e) && r.set(e, Ls), Ls;
    if (se(i))
        for (let u = 0; u < i.length; u++) {
            const f = kt(i[u]);
            Ff(f) && (o[f] = ke)
        } else if (i)
            for (const u in i) {
                const f = kt(u);
                if (Ff(f)) {
                    const d = i[u],
                        h = o[f] = se(d) || oe(d) ? {
                            type: d
                        } : ct({}, d),
                        g = h.type;
                    let p = !1,
                        v = !0;
                    if (se(g))
                        for (let y = 0; y < g.length; ++y) {
                            const m = g[y],
                                _ = oe(m) && m.name;
                            if (_ === "Boolean") {
                                p = !0;
                                break
                            } else _ === "String" && (v = !1)
                        } else p = oe(g) && g.name === "Boolean";
                    h[0] = p, h[1] = v, (p || Ee(h, "default")) && a.push(f)
                }
            }
    const c = [o, a];
    return be(e) && r.set(e, c), c
}

function Ff(e) {
    return e[0] !== "$" && !Jr(e)
}
const wu = e => e === "_" || e === "_ctx" || e === "$stable",
    Eu = e => se(e) ? e.map(Vt) : [Vt(e)],
    Ev = (e, t, n) => {
        if (t._n) return t;
        const r = Gn((...s) => Eu(t(...s)), n);
        return r._c = !1, r
    },
    sg = (e, t, n) => {
        const r = e._ctx;
        for (const s in e) {
            if (wu(s)) continue;
            const i = e[s];
            if (oe(i)) t[s] = Ev(s, i, r);
            else if (i != null) {
                const o = Eu(i);
                t[s] = () => o
            }
        }
    },
    ig = (e, t) => {
        const n = Eu(t);
        e.slots.default = () => n
    },
    og = (e, t, n) => {
        for (const r in t)(n || !wu(r)) && (e[r] = t[r])
    },
    Sv = (e, t, n) => {
        const r = e.slots = eg();
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (og(r, t, n), n && rp(r, "_", s, !0)) : sg(t, r)
        } else t && ig(e, t)
    },
    Tv = (e, t, n) => {
        const {
            vnode: r,
            slots: s
        } = e;
        let i = !0,
            o = ke;
        if (r.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? i = !1 : og(s, t, n) : (i = !t.$stable, sg(t, s)), o = t
        } else t && (ig(e, t), o = {
            default: 1
        });
        if (i)
            for (const a in s) !wu(a) && o[a] == null && delete s[a]
    },
    et = hg;

function Cv(e) {
    return ag(e)
}

function kv(e) {
    return ag(e, Wb)
}

function ag(e, t) {
    const n = Ea();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: i,
        createElement: o,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: f,
        nextSibling: d,
        setScopeId: h = Rn,
        insertStaticContent: g
    } = e, p = (T, P, I, U = null, B = null, E = null, C = void 0, R = null, N = !!P.dynamicChildren) => {
        if (T === P) return;
        T && !fn(T, P) && (U = j(T), Ie(T, B, E, !0), T = null), P.patchFlag === -2 && (N = !1, P.dynamicChildren = null);
        const {
            type: $,
            ref: z,
            shapeFlag: A
        } = P;
        switch ($) {
            case br:
                v(T, P, I, U);
                break;
            case nt:
                y(T, P, I, U);
                break;
            case Oo:
                T == null && m(P, I, U, C);
                break;
            case Qe:
                F(T, P, I, U, B, E, C, R, N);
                break;
            default:
                A & 1 ? w(T, P, I, U, B, E, C, R, N) : A & 6 ? W(T, P, I, U, B, E, C, R, N) : (A & 64 || A & 128) && $.process(T, P, I, U, B, E, C, R, N, ee)
        }
        z != null && B ? Is(z, T && T.ref, E, P || T, !P) : z == null && T && T.ref != null && Is(T.ref, null, E, T, !0)
    }, v = (T, P, I, U) => {
        if (T == null) r(P.el = a(P.children), I, U);
        else {
            const B = P.el = T.el;
            P.children !== T.children && c(B, P.children)
        }
    }, y = (T, P, I, U) => {
        T == null ? r(P.el = l(P.children || ""), I, U) : P.el = T.el
    }, m = (T, P, I, U) => {
        [T.el, T.anchor] = g(T.children, P, I, U, T.el, T.anchor)
    }, _ = ({
        el: T,
        anchor: P
    }, I, U) => {
        let B;
        for (; T && T !== P;) B = d(T), r(T, I, U), T = B;
        r(P, I, U)
    }, b = ({
        el: T,
        anchor: P
    }) => {
        let I;
        for (; T && T !== P;) I = d(T), s(T), T = I;
        s(P)
    }, w = (T, P, I, U, B, E, C, R, N) => {
        if (P.type === "svg" ? C = "svg" : P.type === "math" && (C = "mathml"), T == null) k(P, I, U, B, E, C, R, N);
        else {
            const $ = T.el && T.el._isVueCE ? T.el : null;
            try {
                $ && $._beginPatch(), x(T, P, B, E, C, R, N)
            } finally {
                $ && $._endPatch()
            }
        }
    }, k = (T, P, I, U, B, E, C, R) => {
        let N, $;
        const {
            props: z,
            shapeFlag: A,
            transition: D,
            dirs: Y
        } = T;
        if (N = T.el = o(T.type, E, z && z.is, z), A & 8 ? u(N, T.children) : A & 16 && L(T.children, N, null, U, B, il(T, E), C, R), Y && Sn(T, null, U, "created"), S(N, T, T.scopeId, C, U), z) {
            for (const de in z) de !== "value" && !Jr(de) && i(N, de, null, z[de], E, U);
            "value" in z && i(N, "value", null, z.value, E), ($ = z.onVnodeBeforeMount) && Lt($, U, T)
        }
        Y && Sn(T, null, U, "beforeMount");
        const te = lg(B, D);
        te && D.beforeEnter(N), r(N, P, I), (($ = z && z.onVnodeMounted) || te || Y) && et(() => {
            $ && Lt($, U, T), te && D.enter(N), Y && Sn(T, null, U, "mounted")
        }, B)
    }, S = (T, P, I, U, B) => {
        if (I && h(T, I), U)
            for (let E = 0; E < U.length; E++) h(T, U[E]);
        if (B) {
            let E = B.subTree;
            if (P === E || qo(E.type) && (E.ssContent === P || E.ssFallback === P)) {
                const C = B.vnode;
                S(T, C, C.scopeId, C.slotScopeIds, B.parent)
            }
        }
    }, L = (T, P, I, U, B, E, C, R, N = 0) => {
        for (let $ = N; $ < T.length; $++) {
            const z = T[$] = R ? Vn(T[$]) : Vt(T[$]);
            p(null, z, P, I, U, B, E, C, R)
        }
    }, x = (T, P, I, U, B, E, C) => {
        const R = P.el = T.el;
        let {
            patchFlag: N,
            dynamicChildren: $,
            dirs: z
        } = P;
        N |= T.patchFlag & 16;
        const A = T.props || ke,
            D = P.props || ke;
        let Y;
        if (I && Fr(I, !1), (Y = D.onVnodeBeforeUpdate) && Lt(Y, I, P, T), z && Sn(P, T, I, "beforeUpdate"), I && Fr(I, !0), (A.innerHTML && D.innerHTML == null || A.textContent && D.textContent == null) && u(R, ""), $ ? O(T.dynamicChildren, $, R, I, U, il(P, B), E) : C || q(T, P, R, null, I, U, il(P, B), E, !1), N > 0) {
            if (N & 16) H(R, A, D, I, B);
            else if (N & 2 && A.class !== D.class && i(R, "class", null, D.class, B), N & 4 && i(R, "style", A.style, D.style, B), N & 8) {
                const te = P.dynamicProps;
                for (let de = 0; de < te.length; de++) {
                    const pe = te[de],
                        me = A[pe],
                        Ye = D[pe];
                    (Ye !== me || pe === "value") && i(R, pe, me, Ye, B, I)
                }
            }
            N & 1 && T.children !== P.children && u(R, P.children)
        } else !C && $ == null && H(R, A, D, I, B);
        ((Y = D.onVnodeUpdated) || z) && et(() => {
            Y && Lt(Y, I, P, T), z && Sn(P, T, I, "updated")
        }, U)
    }, O = (T, P, I, U, B, E, C) => {
        for (let R = 0; R < P.length; R++) {
            const N = T[R],
                $ = P[R],
                z = N.el && (N.type === Qe || !fn(N, $) || N.shapeFlag & 198) ? f(N.el) : I;
            p(N, $, z, null, U, B, E, C, !0)
        }
    }, H = (T, P, I, U, B) => {
        if (P !== I) {
            if (P !== ke)
                for (const E in P) !Jr(E) && !(E in I) && i(T, E, P[E], null, B, U);
            for (const E in I) {
                if (Jr(E)) continue;
                const C = I[E],
                    R = P[E];
                C !== R && E !== "value" && i(T, E, R, C, B, U)
            }
            "value" in I && i(T, "value", P.value, I.value, B)
        }
    }, F = (T, P, I, U, B, E, C, R, N) => {
        const $ = P.el = T ? T.el : a(""),
            z = P.anchor = T ? T.anchor : a("");
        let {
            patchFlag: A,
            dynamicChildren: D,
            slotScopeIds: Y
        } = P;
        Y && (R = R ? R.concat(Y) : Y), T == null ? (r($, I, U), r(z, I, U), L(P.children || [], I, z, B, E, C, R, N)) : A > 0 && A & 64 && D && T.dynamicChildren && T.dynamicChildren.length === D.length ? (O(T.dynamicChildren, D, I, B, E, C, R), (P.key != null || B && P === B.subTree) && Su(T, P, !0)) : q(T, P, I, z, B, E, C, R, N)
    }, W = (T, P, I, U, B, E, C, R, N) => {
        P.slotScopeIds = R, T == null ? P.shapeFlag & 512 ? B.ctx.activate(P, I, U, C, N) : Z(P, I, U, B, E, C, N) : re(T, P, N)
    }, Z = (T, P, I, U, B, E, C) => {
        const R = T.component = Fv(T, U, B);
        if (so(T) && (R.ctx.renderer = ee), $v(R, !1, C), R.asyncDep) {
            if (B && B.registerDep(R, V, C), !T.el) {
                const N = R.subTree = Pe(nt);
                y(null, N, P, I), T.placeholder = N.el
            }
        } else V(R, T, P, I, B, E, C)
    }, re = (T, P, I) => {
        const U = P.component = T.component;
        if (yv(T, P, I))
            if (U.asyncDep && !U.asyncResolved) {
                X(U, P, I);
                return
            } else U.next = P, U.update();
        else P.el = T.el, U.vnode = P
    }, V = (T, P, I, U, B, E, C) => {
        const R = () => {
            if (T.isMounted) {
                let {
                    next: A,
                    bu: D,
                    u: Y,
                    parent: te,
                    vnode: de
                } = T; {
                    const jt = cg(T);
                    if (jt) {
                        A && (A.el = de.el, X(T, A, C)), jt.asyncDep.then(() => {
                            et(() => {
                                T.isUnmounted || $()
                            }, B)
                        });
                        return
                    }
                }
                let pe = A,
                    me;
                Fr(T, !1), A ? (A.el = de.el, X(T, A, C)) : A = de, D && Os(D), (me = A.props && A.props.onVnodeBeforeUpdate) && Lt(me, te, A, de), Fr(T, !0);
                const Ye = sl(T),
                    tn = T.subTree;
                T.subTree = Ye, p(tn, Ye, f(tn.el), j(tn), T, B, E), A.el = Ye.el, pe === null && Aa(T, Ye.el), Y && et(Y, B), (me = A.props && A.props.onVnodeUpdated) && et(() => Lt(me, te, A, de), B)
            } else {
                let A;
                const {
                    el: D,
                    props: Y
                } = P, {
                    bm: te,
                    m: de,
                    parent: pe,
                    root: me,
                    type: Ye
                } = T, tn = Qn(P);
                if (Fr(T, !1), te && Os(te), !tn && (A = Y && Y.onVnodeBeforeMount) && Lt(A, pe, P), Fr(T, !0), D && Te) {
                    const jt = () => {
                        T.subTree = sl(T), Te(D, T.subTree, T, B, null)
                    };
                    tn && Ye.__asyncHydrate ? Ye.__asyncHydrate(D, T, jt) : jt()
                } else {
                    me.ce && me.ce._hasShadowRoot() && me.ce._injectChildStyle(Ye, T.parent ? T.parent.type : void 0);
                    const jt = T.subTree = sl(T);
                    p(null, jt, I, U, T, B, E), P.el = jt.el
                }
                if (de && et(de, B), !tn && (A = Y && Y.onVnodeMounted)) {
                    const jt = P;
                    et(() => Lt(A, pe, jt), B)
                }(P.shapeFlag & 256 || pe && Qn(pe.vnode) && pe.vnode.shapeFlag & 256) && T.a && et(T.a, B), T.isMounted = !0, P = I = U = null
            }
        };
        T.scope.on();
        const N = T.effect = new cp(R);
        T.scope.off();
        const $ = T.update = N.run.bind(N),
            z = T.job = N.runIfDirty.bind(N);
        z.i = T, z.id = T.uid, N.scheduler = () => mu(z), Fr(T, !0), $()
    }, X = (T, P, I) => {
        P.component = T;
        const U = T.vnode.props;
        T.vnode = P, T.next = null, vv(T, P.props, U, I), Tv(T, P.children, I), tr(), wf(T), nr()
    }, q = (T, P, I, U, B, E, C, R, N = !1) => {
        const $ = T && T.children,
            z = T ? T.shapeFlag : 0,
            A = P.children,
            {
                patchFlag: D,
                shapeFlag: Y
            } = P;
        if (D > 0) {
            if (D & 128) {
                it($, A, I, U, B, E, C, R, N);
                return
            } else if (D & 256) {
                ce($, A, I, U, B, E, C, R, N);
                return
            }
        }
        Y & 8 ? (z & 16 && _t($, B, E), A !== $ && u(I, A)) : z & 16 ? Y & 16 ? it($, A, I, U, B, E, C, R, N) : _t($, B, E, !0) : (z & 8 && u(I, ""), Y & 16 && L(A, I, U, B, E, C, R, N))
    }, ce = (T, P, I, U, B, E, C, R, N) => {
        T = T || Ls, P = P || Ls;
        const $ = T.length,
            z = P.length,
            A = Math.min($, z);
        let D;
        for (D = 0; D < A; D++) {
            const Y = P[D] = N ? Vn(P[D]) : Vt(P[D]);
            p(T[D], Y, I, null, B, E, C, R, N)
        }
        $ > z ? _t(T, B, E, !0, !1, A) : L(P, I, U, B, E, C, R, N, A)
    }, it = (T, P, I, U, B, E, C, R, N) => {
        let $ = 0;
        const z = P.length;
        let A = T.length - 1,
            D = z - 1;
        for (; $ <= A && $ <= D;) {
            const Y = T[$],
                te = P[$] = N ? Vn(P[$]) : Vt(P[$]);
            if (fn(Y, te)) p(Y, te, I, null, B, E, C, R, N);
            else break;
            $++
        }
        for (; $ <= A && $ <= D;) {
            const Y = T[A],
                te = P[D] = N ? Vn(P[D]) : Vt(P[D]);
            if (fn(Y, te)) p(Y, te, I, null, B, E, C, R, N);
            else break;
            A--, D--
        }
        if ($ > A) {
            if ($ <= D) {
                const Y = D + 1,
                    te = Y < z ? P[Y].el : U;
                for (; $ <= D;) p(null, P[$] = N ? Vn(P[$]) : Vt(P[$]), I, te, B, E, C, R, N), $++
            }
        } else if ($ > D)
            for (; $ <= A;) Ie(T[$], B, E, !0), $++;
        else {
            const Y = $,
                te = $,
                de = new Map;
            for ($ = te; $ <= D; $++) {
                const Ht = P[$] = N ? Vn(P[$]) : Vt(P[$]);
                Ht.key != null && de.set(Ht.key, $)
            }
            let pe, me = 0;
            const Ye = D - te + 1;
            let tn = !1,
                jt = 0;
            const fi = new Array(Ye);
            for ($ = 0; $ < Ye; $++) fi[$] = 0;
            for ($ = Y; $ <= A; $++) {
                const Ht = T[$];
                if (me >= Ye) {
                    Ie(Ht, B, E, !0);
                    continue
                }
                let bn;
                if (Ht.key != null) bn = de.get(Ht.key);
                else
                    for (pe = te; pe <= D; pe++)
                        if (fi[pe - te] === 0 && fn(Ht, P[pe])) {
                            bn = pe;
                            break
                        }
                bn === void 0 ? Ie(Ht, B, E, !0) : (fi[bn - te] = $ + 1, bn >= jt ? jt = bn : tn = !0, p(Ht, P[bn], I, null, B, E, C, R, N), me++)
            }
            const pf = tn ? Pv(fi) : Ls;
            for (pe = pf.length - 1, $ = Ye - 1; $ >= 0; $--) {
                const Ht = te + $,
                    bn = P[Ht],
                    gf = P[Ht + 1],
                    mf = Ht + 1 < z ? gf.el || ug(gf) : U;
                fi[$] === 0 ? p(null, bn, I, mf, B, E, C, R, N) : tn && (pe < 0 || $ !== pf[pe] ? Ke(bn, I, mf, 2) : pe--)
            }
        }
    }, Ke = (T, P, I, U, B = null) => {
        const {
            el: E,
            type: C,
            transition: R,
            children: N,
            shapeFlag: $
        } = T;
        if ($ & 6) {
            Ke(T.component.subTree, P, I, U);
            return
        }
        if ($ & 128) {
            T.suspense.move(P, I, U);
            return
        }
        if ($ & 64) {
            C.move(T, P, I, ee);
            return
        }
        if (C === Qe) {
            r(E, P, I);
            for (let A = 0; A < N.length; A++) Ke(N[A], P, I, U);
            r(T.anchor, P, I);
            return
        }
        if (C === Oo) {
            _(T, P, I);
            return
        }
        if (U !== 2 && $ & 1 && R)
            if (U === 0) R.beforeEnter(E), r(E, P, I), et(() => R.enter(E), B);
            else {
                const {
                    leave: A,
                    delayLeave: D,
                    afterLeave: Y
                } = R, te = () => {
                    T.ctx.isUnmounted ? s(E) : r(E, P, I)
                }, de = () => {
                    E._isLeaving && E[Tn](!0), A(E, () => {
                        te(), Y && Y()
                    })
                };
                D ? D(E, te, de) : de()
            }
        else r(E, P, I)
    }, Ie = (T, P, I, U = !1, B = !1) => {
        const {
            type: E,
            props: C,
            ref: R,
            children: N,
            dynamicChildren: $,
            shapeFlag: z,
            patchFlag: A,
            dirs: D,
            cacheIndex: Y,
            memo: te
        } = T;
        if (A === -2 && (B = !1), R != null && (tr(), Is(R, null, I, T, !0), nr()), Y != null && (P.renderCache[Y] = void 0), z & 256) {
            P.ctx.deactivate(T);
            return
        }
        const de = z & 1 && D,
            pe = !Qn(T);
        let me;
        if (pe && (me = C && C.onVnodeBeforeUnmount) && Lt(me, P, T), z & 6) ut(T.component, I, U);
        else {
            if (z & 128) {
                T.suspense.unmount(I, U);
                return
            }
            de && Sn(T, null, P, "beforeUnmount"), z & 64 ? T.type.remove(T, P, I, ee, U) : $ && !$.hasOnce && (E !== Qe || A > 0 && A & 64) ? _t($, P, I, !1, !0) : (E === Qe && A & 384 || !B && z & 16) && _t(N, P, I), U && Bt(T)
        }
        const Ye = te != null && Y == null;
        (pe && (me = C && C.onVnodeUnmounted) || de || Ye) && et(() => {
            me && Lt(me, P, T), de && Sn(T, null, P, "unmounted"), Ye && (T.el = null)
        }, I)
    }, Bt = T => {
        const {
            type: P,
            el: I,
            anchor: U,
            transition: B
        } = T;
        if (P === Qe) {
            Ze(I, U);
            return
        }
        if (P === Oo) {
            b(T);
            return
        }
        const E = () => {
            s(I), B && !B.persisted && B.afterLeave && B.afterLeave()
        };
        if (T.shapeFlag & 1 && B && !B.persisted) {
            const {
                leave: C,
                delayLeave: R
            } = B, N = () => C(I, E);
            R ? R(T.el, E, N) : N()
        } else E()
    }, Ze = (T, P) => {
        let I;
        for (; T !== P;) I = d(T), s(T), T = I;
        s(P)
    }, ut = (T, P, I) => {
        const {
            bum: U,
            scope: B,
            job: E,
            subTree: C,
            um: R,
            m: N,
            a: $
        } = T;
        zo(N), zo($), U && Os(U), B.stop(), E && (E.flags |= 8, Ie(C, T, P, I)), R && et(R, P), et(() => {
            T.isUnmounted = !0
        }, P)
    }, _t = (T, P, I, U = !1, B = !1, E = 0) => {
        for (let C = E; C < T.length; C++) Ie(T[C], P, I, U, B)
    }, j = T => {
        if (T.shapeFlag & 6) return j(T.component.subTree);
        if (T.shapeFlag & 128) return T.suspense.next();
        const P = d(T.anchor || T.el),
            I = P && P[Rp];
        return I ? d(I) : P
    };
    let Q = !1;
    const K = (T, P, I) => {
            let U;
            T == null ? P._vnode && (Ie(P._vnode, null, null, !0), U = P._vnode.component) : p(P._vnode || null, T, P, null, null, null, I), P._vnode = T, Q || (Q = !0, wf(U), Ho(), Q = !1)
        },
        ee = {
            p,
            um: Ie,
            m: Ke,
            r: Bt,
            mt: Z,
            mc: L,
            pc: q,
            pbc: O,
            n: j,
            o: e
        };
    let fe, Te;
    return t && ([fe, Te] = t(ee)), {
        render: K,
        hydrate: fe,
        createApp: fv(K, fe)
    }
}

function il({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Fr({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function lg(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Su(e, t, n = !1) {
    const r = e.children,
        s = t.children;
    if (se(r) && se(s))
        for (let i = 0; i < r.length; i++) {
            const o = r[i];
            let a = s[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = Vn(s[i]), a.el = o.el), !n && a.patchFlag !== -2 && Su(o, a)), a.type === br && (a.patchFlag === -1 && (a = s[i] = Vn(a)), a.el = o.el), a.type === nt && !a.el && (a.el = o.el)
        }
}

function Pv(e) {
    const t = e.slice(),
        n = [0];
    let r, s, i, o, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (s = n[n.length - 1], e[s] < c) {
                t[r] = s, n.push(r);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) a = i + o >> 1, e[n[a]] < c ? i = a + 1 : o = a;
            c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
    return n
}

function cg(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : cg(t)
}

function zo(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function ug(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? ug(t.subTree) : null
}
const qo = e => e.__isSuspense;
let Gl = 0;
const xv = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, s, i, o, a, l, c) {
            if (e == null) Av(t, n, r, s, i, o, a, l, c);
            else {
                if (i && i.deps > 0 && !e.suspense.isInFallback) {
                    t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
                    return
                }
                Lv(e, t, n, r, s, o, a, l, c)
            }
        },
        hydrate: Rv,
        normalize: Ov
    },
    fg = xv;

function Bi(e, t) {
    const n = e.props && e.props[t];
    oe(n) && n()
}

function Av(e, t, n, r, s, i, o, a, l) {
    const {
        p: c,
        o: {
            createElement: u
        }
    } = l, f = u("div"), d = e.suspense = dg(e, s, r, t, f, n, i, o, a, l);
    c(null, d.pendingBranch = e.ssContent, f, null, r, d, i, o), d.deps > 0 ? (Bi(e, "onPending"), Bi(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, i, o), Ns(d, e.ssFallback)) : d.resolve(!1, !0)
}

function Lv(e, t, n, r, s, i, o, a, {
    p: l,
    um: c,
    o: {
        createElement: u
    }
}) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const d = t.ssContent,
        h = t.ssFallback,
        {
            activeBranch: g,
            pendingBranch: p,
            isInFallback: v,
            isHydrating: y
        } = f;
    if (p) f.pendingBranch = d, fn(p, d) ? (l(p, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : v && (y || (l(g, h, n, r, s, null, i, o, a), Ns(f, h)))) : (f.pendingId = Gl++, y ? (f.isHydrating = !1, f.activeBranch = p) : c(p, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = u("div"), v ? (l(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : (l(g, h, n, r, s, null, i, o, a), Ns(f, h))) : g && fn(g, d) ? (l(g, d, n, r, s, f, i, o, a), f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 && f.resolve()));
    else if (g && fn(g, d)) l(g, d, n, r, s, f, i, o, a), Ns(f, d);
    else if (Bi(t, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Gl++, l(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: m,
            pendingId: _
        } = f;
        m > 0 ? setTimeout(() => {
            f.pendingId === _ && f.fallback(h)
        }, m) : m === 0 && f.fallback(h)
    }
}

function dg(e, t, n, r, s, i, o, a, l, c, u = !1) {
    const {
        p: f,
        m: d,
        um: h,
        n: g,
        o: {
            parentNode: p,
            remove: v
        }
    } = c;
    let y;
    const m = Mv(e);
    m && t && t.pendingBranch && (y = t.pendingId, t.deps++);
    const _ = e.props ? sp(e.props.timeout) : void 0,
        b = i,
        w = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: o,
            container: r,
            hiddenContainer: s,
            deps: 0,
            pendingId: Gl++,
            timeout: typeof _ == "number" ? _ : -1,
            activeBranch: null,
            isFallbackMountPending: !1,
            pendingBranch: null,
            isInFallback: !u,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(k = !1, S = !1) {
                const {
                    vnode: L,
                    activeBranch: x,
                    pendingBranch: O,
                    pendingId: H,
                    effects: F,
                    parentComponent: W,
                    container: Z,
                    isInFallback: re
                } = w;
                let V = !1;
                if (w.isHydrating) w.isHydrating = !1;
                else if (!k) {
                    V = x && O.transition && O.transition.mode === "out-in";
                    let ce = !1;
                    V && (x.transition.afterLeave = () => {
                        H === w.pendingId && (d(O, Z, i === b && !ce ? g(x) : i, 0), Fi(F), re && L.ssFallback && (L.ssFallback.el = null))
                    }), x && !w.isFallbackMountPending && (p(x.el) === Z && (i = g(x), ce = !0), h(x, W, w, !0), !V && re && L.ssFallback && et(() => L.ssFallback.el = null, w)), V || d(O, Z, i, 0)
                }
                w.isFallbackMountPending = !1, Ns(w, O), w.pendingBranch = null, w.isInFallback = !1;
                let X = w.parent,
                    q = !1;
                for (; X;) {
                    if (X.pendingBranch) {
                        X.effects.push(...F), q = !0;
                        break
                    }
                    X = X.parent
                }!q && !V && Fi(F), w.effects = [], m && t && t.pendingBranch && y === t.pendingId && (t.deps--, t.deps === 0 && !S && t.resolve()), Bi(L, "onResolve")
            },
            fallback(k) {
                if (!w.pendingBranch) return;
                const {
                    vnode: S,
                    activeBranch: L,
                    parentComponent: x,
                    container: O,
                    namespace: H
                } = w;
                Bi(S, "onFallback");
                const F = g(L),
                    W = () => {
                        w.isFallbackMountPending = !1, w.isInFallback && (f(null, k, O, F, x, null, H, a, l), Ns(w, k))
                    },
                    Z = k.transition && k.transition.mode === "out-in";
                Z && (w.isFallbackMountPending = !0, L.transition.afterLeave = W), w.isInFallback = !0, h(L, x, null, !0), Z || W()
            },
            move(k, S, L) {
                w.activeBranch && d(w.activeBranch, k, S, L), w.container = k
            },
            next() {
                return w.activeBranch && g(w.activeBranch)
            },
            registerDep(k, S, L) {
                const x = !!w.pendingBranch;
                x && w.deps++;
                const O = k.vnode.el;
                k.asyncDep.catch(H => {
                    ri(H, k, 0)
                }).then(H => {
                    if (k.isUnmounted || w.isUnmounted || w.pendingId !== k.suspenseId) return;
                    ji(), k.asyncResolved = !0;
                    const {
                        vnode: F
                    } = k;
                    Kl(k, H), O && (F.el = O);
                    const W = !O && k.subTree.el;
                    S(k, F, p(O || k.subTree.el), O ? null : g(k.subTree), w, o, L), W && (F.placeholder = null, v(W)), Aa(k, F.el), x && --w.deps === 0 && w.resolve()
                })
            },
            unmount(k, S) {
                w.isUnmounted = !0, w.activeBranch && h(w.activeBranch, n, k, S), w.pendingBranch && h(w.pendingBranch, n, k, S)
            }
        };
    return w
}

function Rv(e, t, n, r, s, i, o, a, l) {
    const c = t.suspense = dg(t, r, n, e.parentNode, document.createElement("div"), null, s, i, o, a, !0),
        u = l(e, c.pendingBranch = t.ssContent, n, c, i, o);
    return c.deps === 0 && c.resolve(!1, !0), u
}

function Ov(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = $f(r ? n.default : n), e.ssFallback = r ? $f(n.fallback) : Pe(nt)
}

function $f(e) {
    let t;
    if (oe(e)) {
        const n = Ws && e._c;
        n && (e._d = !1, De()), e = e(), n && (e._d = !0, t = Ot, pg())
    }
    return se(e) && (e = gv(e)), e = Vt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function hg(e, t) {
    t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : Fi(e)
}

function Ns(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e;
    let s = t.el;
    for (; !s && t.component;) t = t.component.subTree, s = t.el;
    n.el = s, r && r.subTree === n && (r.vnode.el = s, Aa(r, s))
}

function Mv(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Qe = Symbol.for("v-fgt"),
    br = Symbol.for("v-txt"),
    nt = Symbol.for("v-cmt"),
    Oo = Symbol.for("v-stc"),
    Ai = [];
let Ot = null;

function De(e = !1) {
    Ai.push(Ot = e ? null : [])
}

function pg() {
    Ai.pop(), Ot = Ai[Ai.length - 1] || null
}
let Ws = 1;

function Go(e, t = !1) {
    Ws += e, e < 0 && Ot && t && (Ot.hasOnce = !0)
}

function gg(e) {
    return e.dynamicChildren = Ws > 0 ? Ot || Ls : null, pg(), Ws > 0 && Ot && Ot.push(e), e
}

function Wt(e, t, n, r, s, i) {
    return gg(Le(e, t, n, r, s, i, !0))
}

function zt(e, t, n, r, s) {
    return gg(Pe(e, t, n, r, s, !0))
}

function ds(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function fn(e, t) {
    return e.type === t.type && e.key === t.key
}
const mg = ({
        key: e
    }) => e ? ? null,
    Mo = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || Fe(e) || oe(e) ? {
        i: ht,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function Le(e, t = null, n = null, r = 0, s = null, i = e === Qe ? 0 : 1, o = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && mg(t),
        ref: t && Mo(t),
        scopeId: xp,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: ht
    };
    return a ? (Tu(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Oe(n) ? 8 : 16), Ws > 0 && !o && Ot && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Ot.push(l), l
}
const Pe = Iv;

function Iv(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === Vp) && (e = nt), ds(e)) {
        const a = Nn(e, t, !0);
        return n && Tu(a, n), Ws > 0 && !i && Ot && (a.shapeFlag & 6 ? Ot[Ot.indexOf(e)] = a : Ot.push(a)), a.patchFlag = -2, a
    }
    if (Hv(e) && (e = e.__vccOpts), t) {
        t = _g(t);
        let {
            class: a,
            style: l
        } = t;
        a && !Oe(a) && (t.class = ni(a)), be(l) && (Ca(l) && !se(l) && (l = ct({}, l)), t.style = cs(l))
    }
    const o = Oe(e) ? 1 : qo(e) ? 128 : Op(e) ? 64 : be(e) ? 4 : oe(e) ? 2 : 0;
    return Le(e, t, n, r, s, o, i, !0)
}

function _g(e) {
    return e ? Ca(e) || tg(e) ? ct({}, e) : e : null
}

function Nn(e, t, n = !1, r = !1) {
    const {
        props: s,
        ref: i,
        patchFlag: o,
        children: a,
        transition: l
    } = e, c = t ? yg(s || {}, t) : s, u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && mg(c),
        ref: t && t.ref ? n && i ? se(i) ? i.concat(Mo(t)) : [i, Mo(t)] : Mo(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Qe ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Nn(e.ssContent),
        ssFallback: e.ssFallback && Nn(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Vs(u, l.clone(u)), u
}

function zs(e = " ", t = 0) {
    return Pe(br, null, e, t)
}

function pr(e = "", t = !1) {
    return t ? (De(), zt(nt, null, e)) : Pe(nt, null, e)
}

function Vt(e) {
    return e == null || typeof e == "boolean" ? Pe(nt) : se(e) ? Pe(Qe, null, e.slice()) : ds(e) ? Vn(e) : Pe(br, null, String(e))
}

function Vn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nn(e)
}

function Tu(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (se(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), Tu(e, s()), s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !tg(t) ? t._ctx = ht : s === 3 && ht && (ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else oe(t) ? (t = {
        default: t,
        _ctx: ht
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zs(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function yg(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class") t.class !== r.class && (t.class = ni([t.class, r.class]));
            else if (s === "style") t.style = cs([t.style, r.style]);
        else if (no(s)) {
            const i = t[s],
                o = r[s];
            o && i !== o && !(se(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && !ya(s) && (t[s] = o)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function Lt(e, t, n, r = null) {
    gn(e, t, 7, [n, r])
}
const Nv = Xp();
let Dv = 0;

function Fv(e, t, n) {
    const r = e.type,
        s = (t ? t.appContext : e.appContext) || Nv,
        i = {
            uid: Dv++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new lp(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: rg(r, s),
            emitsOptions: Jp(r, s),
            emit: null,
            emitted: null,
            propsDefaults: ke,
            inheritAttrs: r.inheritAttrs,
            ctx: ke,
            data: ke,
            props: ke,
            attrs: ke,
            slots: ke,
            refs: ke,
            setupState: ke,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = hv.bind(null, i), e.ce && e.ce(i), i
}
let dt = null;
const Ft = () => dt || ht;
let Ko, Ds; {
    const e = Ea(),
        t = (n, r) => {
            let s;
            return (s = e[n]) || (s = e[n] = []), s.push(r), i => {
                s.length > 1 ? s.forEach(o => o(i)) : s[0](i)
            }
        };
    Ko = t("__VUE_INSTANCE_SETTERS__", n => dt = n), Ds = t("__VUE_SSR_SETTERS__", n => hs = n)
}
const ii = e => {
        const t = dt;
        return Ko(e), e.scope.on(), () => {
            e.scope.off(), Ko(t)
        }
    },
    ji = () => {
        dt && dt.scope.off(), Ko(null)
    };

function bg(e) {
    return e.vnode.shapeFlag & 4
}
let hs = !1;

function $v(e, t = !1, n = !1) {
    t && Ds(t);
    const {
        props: r,
        children: s
    } = e.vnode, i = bg(e);
    bv(e, r, i, t), Sv(e, s, n || t);
    const o = i ? Bv(e, t) : void 0;
    return t && Ds(!1), o
}

function Bv(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, tv);
    const {
        setup: r
    } = n;
    if (r) {
        tr();
        const s = e.setupContext = r.length > 1 ? wg(e) : null,
            i = ii(e),
            o = ro(r, e, 0, [e.props, s]),
            a = iu(o);
        if (nr(), i(), (a || e.sp) && !Qn(e) && yu(e), a) {
            if (o.then(ji, ji), t) return o.then(l => {
                Kl(e, l)
            }).catch(l => {
                ri(l, e, 0)
            });
            e.asyncDep = o
        } else Kl(e, o)
    } else vg(e)
}

function Kl(e, t, n) {
    oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Tp(t)), vg(e)
}

function vg(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Rn); {
        const s = ii(e);
        tr();
        try {
            iv(e)
        } finally {
            nr(), s()
        }
    }
}
const jv = {
    get(e, t) {
        return vt(e, "get", ""), e[t]
    }
};

function wg(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, jv),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function La(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tp(yb(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in xi) return xi[n](e)
        },
        has(t, n) {
            return n in t || n in xi
        }
    })) : e.proxy
}

function Yl(e, t = !0) {
    return oe(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Hv(e) {
    return oe(e) && "__vccOpts" in e
}
const ne = (e, t) => Pb(e, t, hs);

function rt(e, t, n) {
    try {
        Go(-1);
        const r = arguments.length;
        return r === 2 ? be(t) && !se(t) ? ds(t) ? Pe(e, null, [t]) : Pe(e, t) : Pe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ds(n) && (n = [n]), Pe(e, t, n))
    } finally {
        Go(1)
    }
}
const Uv = "3.5.34";
let Xl;
const Bf = typeof window < "u" && window.trustedTypes;
if (Bf) try {
    Xl = Bf.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const Eg = Xl ? e => Xl.createHTML(e) : e => e,
    Vv = "http://www.w3.org/2000/svg",
    Wv = "http://www.w3.org/1998/Math/MathML",
    Hn = typeof document < "u" ? document : null,
    jf = Hn && Hn.createElement("template"),
    zv = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t === "svg" ? Hn.createElementNS(Vv, e) : t === "mathml" ? Hn.createElementNS(Wv, e) : n ? Hn.createElement(e, {
                is: n
            }) : Hn.createElement(e);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => Hn.createTextNode(e),
        createComment: e => Hn.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Hn.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (s && (s === i || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)););
            else {
                jf.innerHTML = Eg(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                const a = jf.content;
                if (r === "svg" || r === "mathml") {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                t.insertBefore(a, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    lr = "transition",
    pi = "animation",
    Hi = Symbol("_vtc"),
    Sg = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    qv = ct({}, Mp, Sg),
    Gv = e => (e.displayName = "Transition", e.props = qv, e),
    Kv = Gv((e, {
        slots: t
    }) => rt(jb, Yv(e), t)),
    $r = (e, t = []) => {
        se(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Hf = e => e ? se(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Yv(e) {
    const t = {};
    for (const F in e) F in Sg || (t[F] = e[F]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: o = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: l = i,
        appearActiveClass: c = o,
        appearToClass: u = a,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: h = `${n}-leave-to`
    } = e, g = Xv(s), p = g && g[0], v = g && g[1], {
        onBeforeEnter: y,
        onEnter: m,
        onEnterCancelled: _,
        onLeave: b,
        onLeaveCancelled: w,
        onBeforeAppear: k = y,
        onAppear: S = m,
        onAppearCancelled: L = _
    } = t, x = (F, W, Z, re) => {
        F._enterCancelled = re, Br(F, W ? u : a), Br(F, W ? c : o), Z && Z()
    }, O = (F, W) => {
        F._isLeaving = !1, Br(F, f), Br(F, h), Br(F, d), W && W()
    }, H = F => (W, Z) => {
        const re = F ? S : m,
            V = () => x(W, F, Z);
        $r(re, [W, V]), Uf(() => {
            Br(W, F ? l : i), $n(W, F ? u : a), Hf(re) || Vf(W, r, p, V)
        })
    };
    return ct(t, {
        onBeforeEnter(F) {
            $r(y, [F]), $n(F, i), $n(F, o)
        },
        onBeforeAppear(F) {
            $r(k, [F]), $n(F, l), $n(F, c)
        },
        onEnter: H(!1),
        onAppear: H(!0),
        onLeave(F, W) {
            F._isLeaving = !0;
            const Z = () => O(F, W);
            $n(F, f), F._enterCancelled ? ($n(F, d), qf(F)) : (qf(F), $n(F, d)), Uf(() => {
                F._isLeaving && (Br(F, f), $n(F, h), Hf(b) || Vf(F, r, v, Z))
            }), $r(b, [F, Z])
        },
        onEnterCancelled(F) {
            x(F, !1, void 0, !0), $r(_, [F])
        },
        onAppearCancelled(F) {
            x(F, !0, void 0, !0), $r(L, [F])
        },
        onLeaveCancelled(F) {
            O(F), $r(w, [F])
        }
    })
}

function Xv(e) {
    if (e == null) return null;
    if (be(e)) return [ol(e.enter), ol(e.leave)]; {
        const t = ol(e);
        return [t, t]
    }
}

function ol(e) {
    return sp(e)
}

function $n(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Hi] || (e[Hi] = new Set)).add(t)
}

function Br(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Hi];
    n && (n.delete(t), n.size || (e[Hi] = void 0))
}

function Uf(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Jv = 0;

function Vf(e, t, n, r) {
    const s = e._endId = ++Jv,
        i = () => {
            s === e._endId && r()
        };
    if (n != null) return setTimeout(i, n);
    const {
        type: o,
        timeout: a,
        propCount: l
    } = Qv(e, t);
    if (!o) return r();
    const c = o + "end";
    let u = 0;
    const f = () => {
            e.removeEventListener(c, d), i()
        },
        d = h => {
            h.target === e && ++u >= l && f()
        };
    setTimeout(() => {
        u < l && f()
    }, a + 1), e.addEventListener(c, d)
}

function Qv(e, t) {
    const n = window.getComputedStyle(e),
        r = g => (n[g] || "").split(", "),
        s = r(`${lr}Delay`),
        i = r(`${lr}Duration`),
        o = Wf(s, i),
        a = r(`${pi}Delay`),
        l = r(`${pi}Duration`),
        c = Wf(a, l);
    let u = null,
        f = 0,
        d = 0;
    t === lr ? o > 0 && (u = lr, f = o, d = i.length) : t === pi ? c > 0 && (u = pi, f = c, d = l.length) : (f = Math.max(o, c), u = f > 0 ? o > c ? lr : pi : null, d = u ? u === lr ? i.length : l.length : 0);
    const h = u === lr && /\b(?:transform|all)(?:,|$)/.test(r(`${lr}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}

function Wf(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => zf(n) + zf(e[r])))
}

function zf(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function qf(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight
}

function Zv(e, t, n) {
    const r = e[Hi];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Gf = Symbol("_vod"),
    e0 = Symbol("_vsh"),
    t0 = Symbol(""),
    n0 = /(?:^|;)\s*display\s*:/;

function r0(e, t, n) {
    const r = e.style,
        s = Oe(n);
    let i = !1;
    if (n && !s) {
        if (t)
            if (Oe(t))
                for (const o of t.split(";")) {
                    const a = o.slice(0, o.indexOf(":")).trim();
                    n[a] == null && Si(r, a, "")
                } else
                    for (const o in t) n[o] == null && Si(r, o, "");
        for (const o in n) {
            o === "display" && (i = !0);
            const a = n[o];
            a != null ? i0(e, o, !Oe(t) && t ? t[o] : void 0, a) || Si(r, o, a) : Si(r, o, "")
        }
    } else if (s) {
        if (t !== n) {
            const o = r[t0];
            o && (n += ";" + o), r.cssText = n, i = n0.test(n)
        }
    } else t && e.removeAttribute("style");
    Gf in e && (e[Gf] = i ? r.display : "", e[e0] && (r.display = "none"))
}
const Kf = /\s*!important$/;

function Si(e, t, n) {
    if (se(n)) n.forEach(r => Si(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = s0(e, t);
        Kf.test(n) ? e.setProperty(xr(r), n.replace(Kf, ""), "important") : e[r] = n
    }
}
const Yf = ["Webkit", "Moz", "ms"],
    al = {};

function s0(e, t) {
    const n = al[t];
    if (n) return n;
    let r = kt(t);
    if (r !== "filter" && r in e) return al[t] = r;
    r = wa(r);
    for (let s = 0; s < Yf.length; s++) {
        const i = Yf[s] + r;
        if (i in e) return al[t] = i
    }
    return t
}

function i0(e, t, n, r) {
    return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Oe(r) && n === r
}
const Xf = "http://www.w3.org/1999/xlink";

function Jf(e, t, n, r, s, i = Jy(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xf, t.slice(6, t.length)) : e.setAttributeNS(Xf, t, n) : n == null || i && !ip(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Qt(n) ? String(n) : n)
}

function Qf(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Eg(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = ip(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(s || t)
}

function Es(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function o0(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Zf = Symbol("_vei");

function a0(e, t, n, r, s = null) {
    const i = e[Zf] || (e[Zf] = {}),
        o = i[t];
    if (r && o) o.value = r;
    else {
        const [a, l] = l0(t);
        if (r) {
            const c = i[t] = f0(r, s);
            Es(e, a, c, l)
        } else o && (o0(e, a, o, l), i[t] = void 0)
    }
}
const ed = /(?:Once|Passive|Capture)$/;

function l0(e) {
    let t;
    if (ed.test(e)) {
        t = {};
        let r;
        for (; r = e.match(ed);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : xr(e.slice(2)), t]
}
let ll = 0;
const c0 = Promise.resolve(),
    u0 = () => ll || (c0.then(() => ll = 0), ll = Date.now());

function f0(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        gn(d0(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = u0(), n
}

function d0(e, t) {
    if (se(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}
const td = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    h0 = (e, t, n, r, s, i) => {
        const o = s === "svg";
        t === "class" ? Zv(e, r, o) : t === "style" ? r0(e, n, r) : no(t) ? ya(t) || a0(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : p0(e, t, r, o)) ? (Qf(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Jf(e, t, r, o, i, t !== "value")) : e._isVueCE && (g0(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !Oe(r))) ? Qf(e, kt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Jf(e, t, r, o))
    };

function p0(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && td(t) && oe(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return td(t) && Oe(n) ? !1 : t in e
}

function g0(e, t) {
    const n = e._def.props;
    if (!n) return !1;
    const r = kt(t);
    return Array.isArray(n) ? n.some(s => kt(s) === r) : Object.keys(n).some(s => kt(s) === r)
}
const nd = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return se(t) ? n => Os(t, n) : t
};

function m0(e) {
    e.target.composing = !0
}

function rd(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const cl = Symbol("_assign");

function sd(e, t, n) {
    return t && (e = e.trim()), n && (e = au(e)), e
}
const IR = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, s) {
            e[cl] = nd(s);
            const i = r || s.props && s.props.type === "number";
            Es(e, t ? "change" : "input", o => {
                o.target.composing || e[cl](sd(e.value, n, i))
            }), (n || i) && Es(e, "change", () => {
                e.value = sd(e.value, n, i)
            }), t || (Es(e, "compositionstart", m0), Es(e, "compositionend", rd), Es(e, "change", rd))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: r,
                trim: s,
                number: i
            }
        }, o) {
            if (e[cl] = nd(o), e.composing) return;
            const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? au(e.value) : e.value,
                l = t ? ? "";
            if (a === l) return;
            const c = e.getRootNode();
            (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l)
        }
    },
    _0 = ["ctrl", "shift", "alt", "meta"],
    y0 = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => _0.some(n => e[`${n}Key`] && !t.includes(n))
    },
    b0 = (e, t) => {
        if (!e) return e;
        const n = e._withMods || (e._withMods = {}),
            r = t.join(".");
        return n[r] || (n[r] = ((s, ...i) => {
            for (let o = 0; o < t.length; o++) {
                const a = y0[t[o]];
                if (a && a(s, t)) return
            }
            return e(s, ...i)
        }))
    },
    v0 = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    NR = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            r = t.join(".");
        return n[r] || (n[r] = (s => {
            if (!("key" in s)) return;
            const i = xr(s.key);
            if (t.some(o => o === i || v0[o] === i)) return e(s)
        }))
    },
    Tg = ct({
        patchProp: h0
    }, zv);
let Li, id = !1;

function w0() {
    return Li || (Li = Cv(Tg))
}

function E0() {
    return Li = id ? Li : kv(Tg), id = !0, Li
}
const S0 = ((...e) => {
        const t = w0().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = kg(r);
            if (!s) return;
            const i = t._component;
            !oe(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
            const o = n(s, !1, Cg(s));
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o
        }, t
    }),
    T0 = ((...e) => {
        const t = E0().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = kg(r);
            if (s) return n(s, !0, Cg(s))
        }, t
    });

function Cg(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function kg(e) {
    return Oe(e) ? document.querySelector(e) : e
}
const C0 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    k0 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    P0 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function x0(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        A0(e);
        return
    }
    return t
}

function A0(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function L0(e, t = {}) {
    if (typeof e != "string") return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9) switch (n.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "undefined":
            return;
        case "null":
            return null;
        case "nan":
            return Number.NaN;
        case "infinity":
            return Number.POSITIVE_INFINITY;
        case "-infinity":
            return Number.NEGATIVE_INFINITY
    }
    if (!P0.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (C0.test(e) || k0.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, x0)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r;
        return e
    }
}
const Pg = /#/g,
    xg = /&/g,
    Ag = /\//g,
    R0 = /=/g,
    O0 = /\?/g,
    Ra = /\+/g,
    M0 = /%5e/gi,
    I0 = /%60/gi,
    N0 = /%7c/gi,
    D0 = /%20/gi,
    F0 = /%2f/gi,
    $0 = /%252f/gi;

function Lg(e) {
    return encodeURI("" + e).replace(N0, "|")
}

function Jl(e) {
    return Lg(typeof e == "string" ? e : JSON.stringify(e)).replace(Ra, "%2B").replace(D0, "+").replace(Pg, "%23").replace(xg, "%26").replace(I0, "`").replace(M0, "^").replace(Ag, "%2F")
}

function ul(e) {
    return Jl(e).replace(R0, "%3D")
}

function Rg(e) {
    return Lg(e).replace(Pg, "%23").replace(O0, "%3F").replace($0, "%2F").replace(xg, "%26").replace(Ra, "%2B")
}

function DR(e) {
    return Rg(e).replace(Ag, "%2F")
}

function ps(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function B0(e) {
    return ps(e.replace(F0, "%252F"))
}

function j0(e) {
    return ps(e.replace(Ra, " "))
}

function H0(e) {
    return ps(e.replace(Ra, " "))
}

function Oa(e = "") {
    const t = Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const s = j0(r[1]);
        if (s === "__proto__" || s === "constructor") continue;
        const i = H0(r[2] || "");
        t[s] === void 0 ? t[s] = i : Array.isArray(t[s]) ? t[s].push(i) : t[s] = [t[s], i]
    }
    return t
}

function U0(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${ul(e)}=${Jl(n)}`).join("&") : `${ul(e)}=${Jl(t)}` : ul(e)
}

function Og(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => U0(t, e[t])).filter(Boolean).join("&")
}
const V0 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    Mg = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    W0 = /^([/\\]\s*){2,}[^/\\]/,
    z0 = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    q0 = /\/$|\/\?|\/#/,
    G0 = /^\.?\//;

function xt(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? V0.test(e) : Mg.test(e) || (t.acceptRelative ? W0.test(e) : !1)
}

function K0(e) {
    return !!e && z0.test(e)
}

function Ql(e = "", t) {
    return t ? q0.test(e) : e.endsWith("/")
}

function rr(e = "", t) {
    if (!t) return (Ql(e) ? e.slice(0, -1) : e) || "/";
    if (!Ql(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    s !== -1 && (n = e.slice(0, s), r = e.slice(s));
    const [i, ...o] = n.split("?");
    return ((i.endsWith("/") ? i.slice(0, -1) : i) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function gs(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ql(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    if (s !== -1 && (n = e.slice(0, s), r = e.slice(s), !n)) return r;
    const [i, ...o] = n.split("?");
    return i + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function Ig(e = "") {
    return e.startsWith("/")
}

function FR(e = "") {
    return (Ig(e) ? e.slice(1) : e) || "/"
}

function Yo(e = "") {
    return Ig(e) ? e : "/" + e
}

function Zl(e, t) {
    if (Ng(t) || xt(e)) return e;
    const n = rr(t);
    if (e.startsWith(n)) {
        const r = e[n.length];
        if (!r || r === "/" || r === "?") return e
    }
    return sr(n, e)
}

function od(e, t) {
    if (Ng(t)) return e;
    const n = rr(t);
    if (!e.startsWith(n)) return e;
    const r = e[n.length];
    return r && r !== "/" && r !== "?" ? e : "/" + e.slice(n.length).replace(/^\/+/, "")
}

function Ma(e, t) {
    const n = Sr(e),
        r = { ...Oa(n.search),
            ...t
        };
    return n.search = Og(r), Z0(n)
}

function Ng(e) {
    return !e || e === "/"
}

function Y0(e) {
    return e && e !== "/"
}

function sr(e, ...t) {
    let n = e || "";
    for (const r of t.filter(s => Y0(s)))
        if (n) {
            const s = r.replace(G0, "");
            n = gs(n) + s
        } else n = r;
    return n
}

function Dg(...e) {
    const t = /\/(?!\/)/,
        n = e.filter(Boolean),
        r = [];
    let s = 0;
    for (const o of n)
        if (!(!o || o === "/")) {
            for (const [a, l] of o.split(t).entries())
                if (!(!l || l === ".")) {
                    if (l === "..") {
                        if (r.length === 1 && xt(r[0])) continue;
                        r.pop(), s--;
                        continue
                    }
                    if (a === 1 && r[r.length - 1] ? .endsWith(":/")) {
                        r[r.length - 1] += "/" + l;
                        continue
                    }
                    r.push(l), s++
                }
        }
    let i = r.join("/");
    return s >= 0 ? n[0] ? .startsWith("/") && !i.startsWith("/") ? i = "/" + i : n[0] ? .startsWith("./") && !i.startsWith("./") && (i = "./" + i) : i = "../".repeat(-1 * s) + i, n[n.length - 1] ? .endsWith("/") && !i.endsWith("/") && (i += "/"), i
}

function X0(e) {
    return J0(e, "https://")
}

function J0(e, t) {
    let n = e.match(Mg);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e
}

function Fg(e, t) {
    return ps(rr(e)) === ps(rr(t))
}

function Q0(e, t, n = {}) {
    return n.trailingSlash || (e = gs(e), t = gs(t)), n.leadingSlash || (e = Yo(e), t = Yo(t)), n.encoding || (e = ps(e), t = ps(t)), e === t
}
const $g = Symbol.for("ufo:protocolRelative");

function Sr(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, f, d = ""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!xt(e, {
            acceptRelative: !0
        })) return t ? Sr(t + e) : ec(e);
    const [, r = "", s, i = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, o = "", a = ""] = i.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {
        pathname: l,
        search: c,
        hash: u
    } = ec(a);
    return {
        protocol: r.toLowerCase(),
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: o,
        pathname: l,
        search: c,
        hash: u,
        [$g]: !r
    }
}

function ec(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function Z0(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        s = e.auth ? e.auth + "@" : "",
        i = e.host || "";
    return (e.protocol || e[$g] ? (e.protocol || "") + "//" : "") + s + i + t + n + r
}
class ew extends Error {
    constructor(t, n) {
        super(t, n), this.name = "FetchError", n ? .cause && !this.cause && (this.cause = n.cause)
    }
}

function tw(e) {
    const t = e.error ? .message || e.error ? .toString() || "",
        n = e.request ? .method || e.options ? .method || "GET",
        r = e.request ? .url || String(e.request) || "/",
        s = `[${n}] ${JSON.stringify(r)}`,
        i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        o = `${s}: ${i}${t?` ${t}`:""}`,
        a = new ew(o, e.error ? {
            cause: e.error
        } : void 0);
    for (const l of ["request", "options", "response"]) Object.defineProperty(a, l, {
        get() {
            return e[l]
        }
    });
    for (const [l, c] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(a, l, {
        get() {
            return e.response && e.response[c]
        }
    });
    return a
}
const nw = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function ad(e = "GET") {
    return nw.has(e.toUpperCase())
}

function rw(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer || e instanceof FormData || e instanceof URLSearchParams ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const sw = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    iw = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ow(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return iw.test(t) ? "json" : t === "text/event-stream" ? "stream" : sw.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function aw(e, t, n, r) {
    const s = lw(t ? .headers ? ? e ? .headers, n ? .headers, r);
    let i;
    return (n ? .query || n ? .params || t ? .params || t ? .query) && (i = { ...n ? .params,
        ...n ? .query,
        ...t ? .params,
        ...t ? .query
    }), { ...n,
        ...t,
        query: i,
        params: i,
        headers: s
    }
}

function lw(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e)
        for (const [s, i] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(s, i);
    return r
}
async function yo(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t) await n(e);
        else await t(e)
}
const cw = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    uw = new Set([101, 204, 205, 304]);

function Bg(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: r = globalThis.AbortController
    } = e;
    async function s(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let u;
            typeof a.options.retry == "number" ? u = a.options.retry : u = ad(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : cw.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)), i(a.request, { ...a.options,
                    retry: u - 1
                })
            }
        }
        const c = tw(a);
        throw Error.captureStackTrace && Error.captureStackTrace(c, i), c
    }
    const i = async function(l, c = {}) {
            const u = {
                request: l,
                options: aw(l, c, e.defaults, n),
                response: void 0,
                error: void 0
            };
            if (u.options.method && (u.options.method = u.options.method.toUpperCase()), u.options.onRequest && (await yo(u, u.options.onRequest), u.options.headers instanceof n || (u.options.headers = new n(u.options.headers || {}))), typeof u.request == "string" && (u.options.baseURL && (u.request = Zl(u.request, u.options.baseURL)), u.options.query && (u.request = Ma(u.request, u.options.query), delete u.options.query), "query" in u.options && delete u.options.query, "params" in u.options && delete u.options.params), u.options.body && ad(u.options.method))
                if (rw(u.options.body)) {
                    const h = u.options.headers.get("content-type");
                    typeof u.options.body != "string" && (u.options.body = h === "application/x-www-form-urlencoded" ? new URLSearchParams(u.options.body).toString() : JSON.stringify(u.options.body)), h || u.options.headers.set("content-type", "application/json"), u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")
                } else("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half"));
            let f;
            if (!u.options.signal && u.options.timeout) {
                const h = new r;
                f = setTimeout(() => {
                    const g = new Error("[TimeoutError]: The operation was aborted due to timeout");
                    g.name = "TimeoutError", g.code = 23, h.abort(g)
                }, u.options.timeout), u.options.signal = h.signal
            }
            try {
                u.response = await t(u.request, u.options)
            } catch (h) {
                return u.error = h, u.options.onRequestError && await yo(u, u.options.onRequestError), await s(u)
            } finally {
                f && clearTimeout(f)
            }
            if ((u.response.body || u.response._bodyInit) && !uw.has(u.response.status) && u.options.method !== "HEAD") {
                const h = (u.options.parseResponse ? "json" : u.options.responseType) || ow(u.response.headers.get("content-type") || "");
                switch (h) {
                    case "json":
                        {
                            const g = await u.response.text(),
                                p = u.options.parseResponse || L0;u.response._data = p(g);
                            break
                        }
                    case "stream":
                        {
                            u.response._data = u.response.body || u.response._bodyInit;
                            break
                        }
                    default:
                        u.response._data = await u.response[h]()
                }
            }
            return u.options.onResponse && await yo(u, u.options.onResponse), !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await yo(u, u.options.onResponseError), await s(u)) : u.response
        },
        o = async function(l, c) {
            return (await i(l, c))._data
        };
    return o.raw = i, o.native = (...a) => t(...a), o.create = (a = {}, l = {}) => Bg({ ...e,
        ...l,
        defaults: { ...e.defaults,
            ...l.defaults,
            ...a
        }
    }), o
}
const Xo = (function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    })(),
    fw = Xo.fetch ? (...e) => Xo.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
    dw = Xo.Headers,
    hw = Xo.AbortController,
    pw = Bg({
        fetch: fw,
        Headers: dw,
        AbortController: hw
    }),
    gw = pw,
    mw = () => window ? .__NUXT__ ? .config || window ? .useNuxtApp ? .().payload ? .config,
    Cu = () => mw().app,
    _w = () => Cu().baseURL,
    yw = () => Cu().buildAssetsDir,
    ku = (...e) => Dg(jg(), yw(), ...e),
    jg = (...e) => {
        const t = Cu(),
            n = t.cdnURL || t.baseURL;
        return e.length ? Dg(n, ...e) : n
    };
globalThis.__buildAssetsURL = ku, globalThis.__publicAssetsURL = jg;
globalThis.$fetch || (globalThis.$fetch = gw.create({
    baseURL: _w()
}));
"global" in globalThis || (globalThis.global = globalThis);

function tc(e, t = {}, n) {
    for (const r in e) {
        const s = e[r],
            i = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? tc(s, t, i) : typeof s == "function" && (t[i] = s)
    }
    return t
}
const Hg = (() => {
    if (console.createTask) return console.createTask;
    const e = {
        run: t => t()
    };
    return () => e
})();

function Ug(e, t, n, r) {
    for (let s = n; s < e.length; s += 1) try {
        const i = r ? r.run(() => e[s](...t)) : e[s](...t);
        if (i && typeof i.then == "function") return Promise.resolve(i).then(() => Ug(e, t, s + 1, r))
    } catch (i) {
        return Promise.reject(i)
    }
}

function bw(e, t, n) {
    if (e.length > 0) return Ug(e, t, 0, Hg(n))
}

function vw(e, t, n) {
    if (e.length > 0) {
        const r = Hg(n);
        return Promise.all(e.map(s => r.run(() => s(...t))))
    }
}

function fl(e, t) {
    for (const n of [...e]) n(t)
}
var ww = class {
    _hooks;
    _before;
    _after;
    _deprecatedHooks;
    _deprecatedMessages;
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const s = t;
        let i;
        for (; this._deprecatedHooks[t];) i = this._deprecatedHooks[t], t = i.to;
        if (i && !r.allowDeprecated) {
            let o = i.message;
            o || (o = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...i) => (typeof r == "function" && r(), r = void 0, s = void 0, n(...i));
        return r = this.hook(t, s), r
    }
    removeHook(t, n) {
        const r = this._hooks[t];
        if (r) {
            const s = r.indexOf(n);
            s !== -1 && r.splice(s, 1), r.length === 0 && (this._hooks[t] = void 0)
        }
    }
    clearHook(t) {
        this._hooks[t] = void 0
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        this._hooks[t] = void 0;
        for (const s of r) this.hook(t, s)
    }
    deprecateHooks(t) {
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = tc(t),
            r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r) s();
            r.length = 0
        }
    }
    removeHooks(t) {
        const n = tc(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        this._hooks = {}
    }
    callHook(t, ...n) {
        return this.callHookWith(bw, t, n)
    }
    callHookParallel(t, ...n) {
        return this.callHookWith(vw, t, n)
    }
    callHookWith(t, n, r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && fl(this._before, s);
        const i = t(this._hooks[n] ? [...this._hooks[n]] : [], r, n);
        return i instanceof Promise ? i.finally(() => {
            this._after && s && fl(this._after, s)
        }) : (this._after && s && fl(this._after, s), i)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
};

function Ew() {
    return new ww
}

function Sw(e = {}) {
    let t, n = !1;
    const r = o => {
        if (t && t !== o) throw new Error("Context conflict")
    };
    let s;
    if (e.asyncContext) {
        const o = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        o ? s = new o : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const i = () => {
        if (s) {
            const o = s.getStore();
            if (o !== void 0) return o
        }
        return t
    };
    return {
        use: () => {
            const o = i();
            if (o === void 0) throw new Error("Context is not available");
            return o
        },
        tryUse: () => i(),
        set: (o, a) => {
            a || r(o), t = o, n = !0
        },
        unset: () => {
            t = void 0, n = !1
        },
        call: (o, a) => {
            r(o), t = o;
            try {
                return s ? s.run(o, a) : a()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(o, a) {
            t = o;
            const l = () => {
                    t = o
                },
                c = () => t === o ? l : void 0;
            nc.add(c);
            try {
                const u = s ? s.run(o, a) : a();
                return n || (t = void 0), await u
            } finally {
                nc.delete(c)
            }
        }
    }
}

function Tw(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return t[n] || (t[n] = Sw({ ...e,
                ...r
            })), t[n]
        }
    }
}
const Jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    ld = "__unctx__",
    Cw = Jo[ld] || (Jo[ld] = Tw()),
    kw = (e, t = {}) => Cw.get(e, t),
    cd = "__unctx_async_handlers__",
    nc = Jo[cd] || (Jo[cd] = new Set);

function Zn(e) {
    const t = [];
    for (const s of nc) {
        const i = s();
        i && t.push(i)
    }
    const n = () => {
        for (const s of t) s()
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(s => {
        throw n(), s
    })), [r, n]
}
const ud = !1,
    Pw = !1,
    fd = {
        id: "__nuxt-loader"
    },
    xw = !0,
    Aw = {
        componentName: "NuxtLink",
        prefetch: !0,
        prefetchOn: {
            visibility: !0
        }
    },
    Lw = {
        deep: !1
    },
    Rw = {},
    Ow = "#__nuxt",
    Vg = "nuxt-app",
    dd = 3e4,
    Mw = "vite:preloadError";

function Wg(e = Vg) {
    return kw(e, {
        asyncContext: !1
    })
}
const Iw = "__nuxt_plugin";

function Nw(e) {
    let t = 0;
    const n = {
        _id: e.id || Vg || "nuxt-app",
        _scope: cu(),
        provide: void 0,
        versions: {
            get nuxt() {
                return "4.4.6"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: xn({ ...e.ssrContext ? .payload || {},
            data : xn({}),
            state: _n({}),
            once: new Set,
            _errors: xn({})
        }),
        static: {
            data: {}
        },
        runWithContext(s) {
            return n._scope.active && !Ar() ? n._scope.run(() => hd(n, s)) : hd(n, s)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let s = !1;
            return () => {
                if (!s && (s = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: xn({}),
        _state: xn({}),
        _payloadRevivers: {},
        ...e
    }; {
        const s = window.__NUXT__;
        if (s)
            for (const i in s) switch (i) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[i], s[i]);
                    break;
                default:
                    n.payload[i] = s[i]
            }
    }
    n.hooks = Ew(), n.hook = n.hooks.hook; {
        const s = n.hooks.callHook;
        n.hooks.callHook = (i, ...o) => Promise.resolve().then(() => s(i, ...o))
    }
    n.callHook = n.hooks.callHook, n.provide = (s, i) => {
        const o = "$" + s;
        bo(n, o, i), bo(n.vueApp.config.globalProperties, o, i)
    }, bo(n.vueApp, "$nuxt", n), bo(n.vueApp.config.globalProperties, "$nuxt", n); {
        window.addEventListener(Mw, i => {
            n.callHook("app:chunkError", {
                error: i.payload
            }), i.payload.message.includes("Unable to preload CSS") && i.preventDefault()
        }), window.useNuxtApp || = ue;
        const s = n.hook("app:error", (...i) => {
            console.error("[nuxt] error caught during app initialization", ...i)
        });
        n.hook("app:mounted", s)
    }
    const r = n.payload.config;
    return n.provide("config", r), n
}

function Dw(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function Fw(e, t) {
    if (typeof t == "function") {
        const {
            provide: n
        } = await e.runWithContext(() => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n) e.provide(r, n[r])
    }
}
async function $w(e, t) {
    const n = new Set,
        r = [],
        s = [];
    let i, o = 0;
    async function a(l) {
        const c = l.dependsOn ? .filter(u => t.some(f => f._name === u) && !n.has(u)) ? ? [];
        if (c.length > 0) r.push([new Set(c), l]);
        else {
            const u = Fw(e, l).then(async () => {
                l._name && (n.add(l._name), await Promise.all(r.map(async ([f, d]) => {
                    f.has(l._name) && (f.delete(l._name), f.size === 0 && (o++, await a(d)))
                })))
            }).catch(f => {
                if (!l.parallel && !e.payload.error) throw f;
                i || = f
            });
            l.parallel ? s.push(u) : await u
        }
    }
    for (const l of t) Dw(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(s), o)
        for (let l = 0; l < o; l++) await Promise.all(s);
    if (i) throw e.payload.error || i
}

function xe(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {}), e, {
        [Iw]: !0,
        _name: t
    })
}

function hd(e, t, n) {
    const r = () => t();
    return Wg(e._id).set(e), e.vueApp.runWithContext(r)
}

function zg(e) {
    let t;
    return ka() && (t = Ft() ? .appContext.app.$nuxt), t || = Wg(e).tryUse(), t || null
}

function ue(e) {
    const t = zg(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t
}

function At(e) {
    return ue().$config
}

function bo(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}

function dl(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function rc(e, t, n = ".", r) {
    if (!dl(t)) return rc(e, {}, n, r);
    const s = { ...t
    };
    for (const i of Object.keys(e)) {
        if (i === "__proto__" || i === "constructor") continue;
        const o = e[i];
        o != null && (r && r(s, i, o, n) || (Array.isArray(o) && Array.isArray(s[i]) ? s[i] = [...o, ...s[i]] : dl(o) && dl(s[i]) ? s[i] = rc(o, s[i], (n ? `${n}.` : "") + i.toString(), r) : s[i] = o))
    }
    return s
}

function qg(e) {
    return (...t) => t.reduce((n, r) => rc(n, r, "", e), {})
}
const Ia = qg();

function Bw(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
class pd extends Error {
    static __h3_error__ = !0;
    statusCode = 500;
    fatal = !1;
    unhandled = !1;
    statusMessage;
    data;
    cause;
    constructor(t, n = {}) {
        super(t, n), n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: sc(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Gg(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}

function jw(e) {
    if (typeof e == "string") return new pd(e);
    if (Hw(e)) return e;
    const t = new pd(e.message ? ? e.statusMessage ? ? "", {
        cause: e.cause || e
    });
    if (Bw(e, "stack")) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = sc(e.statusCode, t.statusCode) : e.status && (t.statusCode = sc(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const n = t.statusMessage;
        Gg(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function Hw(e) {
    return e ? .constructor ? .__h3_error__ === !0
}

function Uw(e) {
    const t = {};
    for (const n in e.node.req.headers) {
        const r = e.node.req.headers[n];
        t[n] = Array.isArray(r) ? r.filter(Boolean).join(", ") : r
    }
    return t
}
const Vw = /[^\u0009\u0020-\u007E]/g;

function Gg(e = "") {
    return e.replace(Vw, "")
}

function sc(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const Ww = Symbol("layout-meta"),
    Na = Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const Pt = () => ue() ? .$router,
    oi = () => ka() ? pt(Na, ue()._route) : ue()._route;
const zw = (e, t, n = {}) => {
        const r = ue(),
            s = n.global || typeof e != "string",
            i = t;
        if (!i) {
            console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
            return
        }
        s ? r._middleware.global.push(i) : r._middleware.named[e] = i
    },
    qw = () => {
        try {
            if (ue()._processingMiddleware) return !0
        } catch {
            return !1
        }
        return !1
    },
    ic = (e, t) => {
        e || = "/";
        const n = typeof e == "string" ? e : "path" in e ? oc(e) : Pt().resolve(e).href;
        if (t ? .open) {
            const {
                target: c = "_blank",
                windowFeatures: u = {}
            } = t.open, f = [];
            for (const [d, h] of Object.entries(u)) h !== void 0 && f.push(`${d.toLowerCase()}=${h}`);
            return open(n, c, f.join(", ")), Promise.resolve()
        }
        const r = xt(n, {
                acceptRelative: !0
            }),
            s = t ? .external || r;
        if (s) {
            if (!t ? .external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
            const {
                protocol: c
            } = new URL(n, window.location.href);
            if (c && K0(c)) throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)
        }
        const i = qw();
        if (!s && i) {
            if (t ? .replace) {
                if (typeof e == "string") {
                    const {
                        pathname: c,
                        search: u,
                        hash: f
                    } = Sr(e);
                    return {
                        path: c,
                        ...u && {
                            query: Oa(u)
                        },
                        ...f && {
                            hash: f
                        },
                        replace: !0
                    }
                }
                return { ...e,
                    replace: !0
                }
            }
            return e
        }
        const o = Pt(),
            a = ue();
        if (s) return a._scope.stop(), t ? .replace ? location.replace(n) : location.href = n, i ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve();
        const l = typeof e == "string" ? Kg(e) : e;
        return t ? .replace ? o.replace(l) : o.push(l)
    };

function oc(e) {
    return Ma(e.path || "", e.query || {}) + (e.hash || "")
}

function Kg(e) {
    const t = Sr(e);
    return Rg(B0(t.pathname)) + t.search + t.hash
}
const Yg = "__nuxt_error",
    ai = () => gu(ue().payload, "error"),
    zr = e => {
        const t = vr(e);
        try {
            const n = ai();
            ue().hooks.callHook("app:error", t), n.value || = t
        } catch {
            throw t
        }
        return t
    },
    Gw = async (e = {}) => {
        const t = ue(),
            n = ai();
        t.callHook("app:error:cleared", e), e.redirect && await Pt().replace(e.redirect), n.value = void 0
    },
    Xg = e => !!e && typeof e == "object" && Yg in e,
    vr = e => {
        typeof e != "string" && e.statusText && (e.message ? ? = e.statusText);
        const t = jw(e);
        return Object.defineProperty(t, Yg, {
            value: !0,
            configurable: !1,
            writable: !1
        }), Object.defineProperty(t, "status", {
            get: () => t.statusCode,
            configurable: !0
        }), Object.defineProperty(t, "statusText", {
            get: () => t.statusMessage,
            configurable: !0
        }), t
    },
    Kw = -1,
    Yw = -2,
    Xw = -3,
    Jw = -4,
    Qw = -5,
    Zw = -6,
    eE = -7,
    Jg = 2 ** 32 - 1,
    ac = Jg - 1;

function tE(e) {
    return !(!Number.isInteger(e) || e < 0 || e > ac)
}

function nE(e) {
    return !(!Number.isInteger(e) || e < 0 || e > Jg)
}

function rE(e) {
    return Uint8Array.fromBase64(e).buffer
}

function sE(e) {
    return Uint8Array.from(Buffer.from(e, "base64")).buffer
}

function iE(e) {
    const t = atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let s = 0; s < n; s++) r[s] = t.charCodeAt(s);
    return r.buffer
}
const oE = typeof Uint8Array.fromBase64 == "function",
    aE = typeof process == "object" && process.versions ? .node !== void 0,
    lE = oE ? rE : aE ? sE : iE;

function cE(e, t) {
    return uE(JSON.parse(e), t)
}

function uE(e, t) {
    if (typeof e == "number") return i(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e,
        r = Array(n.length);
    let s = null;

    function i(o, a = !1) {
        if (o === Kw) return;
        if (o === Xw) return NaN;
        if (o === Jw) return 1 / 0;
        if (o === Qw) return -1 / 0;
        if (o === Zw) return -0;
        if (a || typeof o != "number") throw new Error("Invalid input");
        if (o in r) return r[o];
        const l = n[o];
        if (!l || typeof l != "object") r[o] = l;
        else if (Array.isArray(l))
            if (typeof l[0] == "string") {
                const c = l[0],
                    u = t && Object.hasOwn(t, c) ? t[c] : void 0;
                if (u) {
                    let f = l[1];
                    if (typeof f != "number" && (f = n.push(l[1]) - 1), s ? ? = new Set, s.has(f)) throw new Error("Invalid circular reference");
                    return s.add(f), r[o] = u(i(f)), s.delete(f), r[o]
                }
                switch (c) {
                    case "Date":
                        r[o] = new Date(l[1]);
                        break;
                    case "Set":
                        const f = new Set;
                        r[o] = f;
                        for (let g = 1; g < l.length; g += 1) f.add(i(l[g]));
                        break;
                    case "Map":
                        const d = new Map;
                        r[o] = d;
                        for (let g = 1; g < l.length; g += 2) d.set(i(l[g]), i(l[g + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(l[1], l[2]);
                        break;
                    case "Object":
                        {
                            const g = l[1];
                            if (typeof n[g] == "object" && n[g][0] !== "BigInt") throw new Error("Invalid input");r[o] = Object(i(g));
                            break
                        }
                    case "BigInt":
                        r[o] = BigInt(l[1]);
                        break;
                    case "null":
                        const h = Object.create(null);
                        r[o] = h;
                        for (let g = 1; g < l.length; g += 2) {
                            if (l[g] === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
                            h[l[g]] = i(l[g + 1])
                        }
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Float16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array":
                    case "DataView":
                        {
                            if (n[l[1]][0] !== "ArrayBuffer") throw new Error("Invalid data");
                            const g = globalThis[c],
                                p = i(l[1]);r[o] = l[2] !== void 0 ? new g(p, l[2], l[3]) : new g(p);
                            break
                        }
                    case "ArrayBuffer":
                        {
                            const g = l[1];
                            if (typeof g != "string") throw new Error("Invalid ArrayBuffer encoding");
                            const p = lE(g);r[o] = p;
                            break
                        }
                    case "Temporal.Duration":
                    case "Temporal.Instant":
                    case "Temporal.PlainDate":
                    case "Temporal.PlainTime":
                    case "Temporal.PlainDateTime":
                    case "Temporal.PlainMonthDay":
                    case "Temporal.PlainYearMonth":
                    case "Temporal.ZonedDateTime":
                        {
                            const g = c.slice(9);r[o] = Temporal[g].from(l[1]);
                            break
                        }
                    case "URL":
                        {
                            const g = new URL(l[1]);r[o] = g;
                            break
                        }
                    case "URLSearchParams":
                        {
                            const g = new URLSearchParams(l[1]);r[o] = g;
                            break
                        }
                    default:
                        throw new Error(`Unknown type ${c}`)
                }
            } else if (l[0] === eE) {
            const c = l[1];
            if (!nE(c)) throw new Error("Invalid input");
            const u = [];
            r[o] = u, u[ac] = void 0, delete u[ac];
            for (let f = 2; f < l.length; f += 2) {
                const d = l[f];
                if (!tE(d) || d >= c) throw new Error("Invalid input");
                u[d] = i(l[f + 1])
            }
            u.length = c
        } else {
            const c = new Array(l.length);
            r[o] = c;
            for (let u = 0; u < l.length; u += 1) {
                const f = l[u];
                f !== Yw && (c[u] = i(f))
            }
        } else {
            const c = {};
            r[o] = c;
            for (const u of Object.keys(l)) {
                if (u === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
                const f = l[u];
                c[u] = i(f)
            }
        }
        return r[o]
    }
    return i(0)
}
const fE = new Set(["link", "style", "script", "noscript"]),
    dE = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
    lc = new Set(["base", "meta", "link", "style", "script", "noscript"]),
    hE = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
    pE = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
    gE = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]),
    mE = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
    Pu = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]),
    Ui = {
        META: new Set(["twitter"]),
        OG: new Set(["og", "book", "article", "profile", "fb"]),
        MEDIA: new Set(["ogImage", "ogVideo", "ogAudio", "twitterImage"]),
        HTTP_EQUIV: new Set(["contentType", "defaultStyle", "xUaCompatible"])
    },
    _E = {
        articleExpirationTime: "article:expiration_time",
        articleModifiedTime: "article:modified_time",
        articlePublishedTime: "article:published_time",
        bookReleaseDate: "book:release_date",
        fbAppId: "fb:app_id",
        ogAudioSecureUrl: "og:audio:secure_url",
        ogAudioUrl: "og:audio",
        ogImageSecureUrl: "og:image:secure_url",
        ogImageUrl: "og:image",
        ogSiteName: "og:site_name",
        ogVideoSecureUrl: "og:video:secure_url",
        ogVideoUrl: "og:video",
        profileFirstName: "profile:first_name",
        profileLastName: "profile:last_name",
        profileUsername: "profile:username",
        msapplicationConfig: "msapplication-Config",
        msapplicationTileColor: "msapplication-TileColor",
        msapplicationTileImage: "msapplication-TileImage"
    },
    Qg = {
        appleItunesApp: {
            unpack: {
                entrySeparator: ", ",
                resolve: ({
                    key: e,
                    value: t
                }) => `${Kn(e)}=${t}`
            }
        },
        refresh: {
            metaKey: "http-equiv",
            unpack: {
                entrySeparator: ";",
                resolve: ({
                    key: e,
                    value: t
                }) => e === "seconds" ? `${t}` : void 0
            }
        },
        robots: {
            unpack: {
                entrySeparator: ", ",
                resolve: ({
                    key: e,
                    value: t
                }) => typeof t == "boolean" ? Kn(e) : `${Kn(e)}:${t}`
            }
        },
        contentSecurityPolicy: {
            metaKey: "http-equiv",
            unpack: {
                entrySeparator: "; ",
                resolve: ({
                    key: e,
                    value: t
                }) => `${Kn(e)} ${t}`
            }
        },
        charset: {}
    };

function Kn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(),
        n = t.indexOf("-");
    return n === -1 ? t : Ui.META.has(t.slice(0, n)) || Ui.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}

function Zg(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t))
}

function cc(e) {
    return Array.isArray(e) ? e.map(cc) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [Kn(t), cc(n)]))
}

function em(e, t = {}) {
    const {
        entrySeparator: n = "",
        keyValueSeparator: r = "",
        wrapValue: s,
        resolve: i
    } = t;
    return Object.entries(e).map(([o, a]) => {
        if (i) {
            const c = i({
                key: o,
                value: a
            });
            if (c !== void 0) return c
        }
        const l = typeof a == "object" ? em(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && s ? `${s}${a.replace(new RegExp(s,"g"),`\\${s}`)}${s}` : a;
        return `${o}${r}${l}`
    }).join(n)
}

function gd(e, t) {
    const n = Zg(t),
        r = Kn(e),
        s = tm(r);
    if (!Pu.has(r)) return [{
        [s]: r,
        ...n
    }];
    const i = Object.fromEntries(Object.entries(n).map(([o, a]) => [`${e}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`, a]));
    return Qo(i || {}).sort((o, a) => (o[s] ? .length || 0) - (a[s] ? .length || 0))
}

function tm(e) {
    if (Qg[e] ? .metaKey === "http-equiv" || Ui.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = Kn(e),
        n = t.indexOf(":");
    return n === -1 ? "name" : Ui.OG.has(t.slice(0, n)) ? "property" : "name"
}

function yE(e) {
    return _E[e] || Kn(e)
}

function bE(e, t) {
    return t === "refresh" ? `${e.seconds};url=${e.url}` : em(cc(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve: ({
            value: n,
            key: r
        }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
        ...Qg[t] ? .unpack
    })
}

function Qo(e) {
    const t = [],
        n = {};
    for (const [s, i] of Object.entries(e)) {
        if (Array.isArray(i)) {
            if (s === "themeColor") {
                i.forEach(o => {
                    typeof o == "object" && o !== null && t.push({
                        name: "theme-color",
                        ...o
                    })
                });
                continue
            }
            for (const o of i)
                if (typeof o == "object" && o !== null) {
                    const a = [],
                        l = [];
                    for (const [c, u] of Object.entries(o)) {
                        const f = `${s}${c==="url"?"":`:${c}`}`,
                            d = Qo({
                                [f]: u
                            });
                        (c === "url" ? a : l).push(...d)
                    }
                    t.push(...a, ...l)
                } else t.push(...typeof o == "string" ? Qo({
                    [s]: o
                }) : gd(s, o));
            continue
        }
        if (typeof i == "object" && i)
            if (Ui.MEDIA.has(s)) {
                const o = s.startsWith("twitter") ? "twitter" : "og",
                    a = s.replace(/^(og|twitter)/, "").toLowerCase(),
                    l = o === "twitter" ? "name" : "property";
                i.url && t.push({
                    [l]: `${o}:${a}`,
                    content: i.url
                }), i.secureUrl && t.push({
                    [l]: `${o}:${a}:secure_url`,
                    content: i.secureUrl
                });
                for (const [c, u] of Object.entries(i)) c !== "url" && c !== "secureUrl" && t.push({
                    [l]: `${o}:${a}:${c}`,
                    content: u
                })
            } else Pu.has(Kn(s)) ? t.push(...gd(s, i)) : n[s] = Zg(i);
        else n[s] = i
    }
    const r = Object.entries(n).map(([s, i]) => {
        if (s === "charset") return {
            charset: i === null ? "_null" : i
        };
        const o = tm(s),
            a = yE(s),
            l = i === null ? "_null" : typeof i == "object" ? bE(i, s) : typeof i == "number" ? i.toString() : i;
        return o === "http-equiv" ? {
            "http-equiv": a,
            content: l
        } : {
            [o]: a,
            content: l
        }
    });
    return [...t, ...r].map(s => "content" in s && s.content === "_null" ? { ...s,
        content: null
    } : s)
}
const vE = {
    key: "flatMeta",
    hooks: {
        "entries:normalize": e => {
            const t = [];
            e.tags = e.tags.map(n => n.tag !== "_flatMeta" ? n : (t.push(Qo(n.props).map(r => ({ ...n,
                tag: "meta",
                props: r
            }))), !1)).filter(Boolean).concat(...t)
        }
    }
};

function uc(e, t = {}, n) {
    for (const r in e) {
        const s = e[r],
            i = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? uc(s, t, i) : typeof s == "function" && (t[i] = s)
    }
    return t
}
const nm = (() => {
    if (console.createTask) return console.createTask;
    const e = {
        run: t => t()
    };
    return () => e
})();

function rm(e, t, n, r) {
    for (let s = n; s < e.length; s += 1) try {
        const i = r ? r.run(() => e[s](...t)) : e[s](...t);
        if (i && typeof i.then == "function") return Promise.resolve(i).then(() => rm(e, t, s + 1, r))
    } catch (i) {
        return Promise.reject(i)
    }
}

function wE(e, t, n) {
    if (e.length > 0) return rm(e, t, 0, nm(n))
}

function EE(e, t, n) {
    if (e.length > 0) {
        const r = nm(n);
        return Promise.all(e.map(s => r.run(() => s(...t))))
    }
}

function hl(e, t) {
    for (const n of [...e]) n(t)
}
var SE = class {
    _hooks;
    _before;
    _after;
    _deprecatedHooks;
    _deprecatedMessages;
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, t, n = {}) {
        if (!e || typeof t != "function") return () => {};
        const r = e;
        let s;
        for (; this._deprecatedHooks[e];) s = this._deprecatedHooks[e], e = s.to;
        if (s && !n.allowDeprecated) {
            let i = s.message;
            i || (i = `${r} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
        }
        if (!t.name) try {
            Object.defineProperty(t, "name", {
                get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
            t && (this.removeHook(e, t), t = void 0)
        }
    }
    hookOnce(e, t) {
        let n, r = (...s) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...s));
        return n = this.hook(e, r), n
    }
    removeHook(e, t) {
        const n = this._hooks[e];
        if (n) {
            const r = n.indexOf(t);
            r !== -1 && n.splice(r, 1), n.length === 0 && (this._hooks[e] = void 0)
        }
    }
    clearHook(e) {
        this._hooks[e] = void 0
    }
    deprecateHook(e, t) {
        this._deprecatedHooks[e] = typeof t == "string" ? {
            to: t
        } : t;
        const n = this._hooks[e] || [];
        this._hooks[e] = void 0;
        for (const r of n) this.hook(e, r)
    }
    deprecateHooks(e) {
        for (const t in e) this.deprecateHook(t, e[t])
    }
    addHooks(e) {
        const t = uc(e),
            n = Object.keys(t).map(r => this.hook(r, t[r]));
        return () => {
            for (const r of n) r();
            n.length = 0
        }
    }
    removeHooks(e) {
        const t = uc(e);
        for (const n in t) this.removeHook(n, t[n])
    }
    removeAllHooks() {
        this._hooks = {}
    }
    callHook(e, ...t) {
        return this.callHookWith(wE, e, t)
    }
    callHookParallel(e, ...t) {
        return this.callHookWith(EE, e, t)
    }
    callHookWith(e, t, n) {
        const r = this._before || this._after ? {
            name: t,
            args: n,
            context: {}
        } : void 0;
        this._before && hl(this._before, r);
        const s = e(this._hooks[t] ? [...this._hooks[t]] : [], n, t);
        return s instanceof Promise ? s.finally(() => {
            this._after && r && hl(this._after, r)
        }) : (this._after && r && hl(this._after, r), s)
    }
    beforeEach(e) {
        return this._before = this._before || [], this._before.push(e), () => {
            if (this._before !== void 0) {
                const t = this._before.indexOf(e);
                t !== -1 && this._before.splice(t, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [], this._after.push(e), () => {
            if (this._after !== void 0) {
                const t = this._after.indexOf(e);
                t !== -1 && this._after.splice(t, 1)
            }
        }
    }
};

function TE() {
    return new SE
}
const CE = ["name", "property", "http-equiv"],
    kE = new Set(["viewport", "description", "keywords", "robots"]);

function sm(e) {
    const t = e.split(":");
    return t.length ? Pu.has(t[1]) : !1
}

function fc(e) {
    const {
        props: t,
        tag: n
    } = e;
    if (pE.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (n === "link" && t.rel === "alternate") {
        if (t.hreflang) return `alternate:${t.hreflang}`;
        if (t.type) return `alternate:${t.type}:${t.href||""}`
    }
    if (t.charset) return "charset";
    if (e.tag === "meta") {
        for (const r of CE)
            if (t[r] !== void 0) {
                const s = t[r],
                    i = s && typeof s == "string" && s.includes(":"),
                    o = s && kE.has(s),
                    l = !(i || o) && e.key ? `:key:${e.key}` : "";
                return `${n}:${s}${l}`
            }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (n === "link" && t.rel === "alternate") return `alternate:${t.href||""}`;
    if (dE.has(n)) {
        const r = e.textContent || e.innerHTML;
        if (r) return `${n}:content:${r}`
    }
}

function im(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`
}

function Zo(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    const s = t ? t(n, e) : e;
    if (Array.isArray(s)) return s.map(i => Zo(i, t));
    if (s ? .constructor === Object) {
        const i = {};
        for (const o of Object.keys(s)) i[o] = Zo(s[o], t, o);
        return i
    }
    return s
}

function PE(e, t) {
    const n = e === "style" ? new Map : new Set;

    function r(s) {
        if (s == null || s === void 0) return;
        const i = String(s).trim();
        if (i)
            if (e === "style") {
                const [o, ...a] = i.split(":").map(l => l ? l.trim() : "");
                o && a.length && n.set(o, a.join(":"))
            } else i.split(" ").filter(Boolean).forEach(o => n.add(o))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach(s => r(s)) : t && typeof t == "object" && Object.entries(t).forEach(([s, i]) => {
        i && i !== "false" && (e === "style" ? n.set(String(s).trim(), String(i)) : r(s))
    }), n
}

function om(e, t) {
    if (e.props = e.props || {}, !t) return e;
    if (e.tag === "templateParams") return e.props = t, e;
    const n = lc.has(e.tag) || e.tag === "htmlAttrs" || e.tag === "bodyAttrs";
    return Object.entries(t).forEach(([r, s]) => {
        if (r === "__proto__" || r === "constructor" || r === "prototype") return;
        if (s === null) {
            e.props[r] = null;
            return
        }
        if (r === "class" || r === "style") {
            e.props[r] = PE(r, s);
            return
        }
        if (gE.has(r)) {
            if ((r === "textContent" || r === "innerHTML") && typeof s == "object") {
                let c = t.type;
                if (t.type || (c = "application/json"), !c ? .endsWith("json") && c !== "speculationrules") return;
                t.type = c, e.props.type = c, e[r] = JSON.stringify(s)
            } else e[r] = s;
            return
        }
        const i = r.startsWith("data-"),
            o = n && !i ? r.toLowerCase() : r,
            a = String(s),
            l = e.tag === "meta" && o === "content";
        a === "true" || a === "" ? e.props[o] = i || l ? a : !0 : !s && i && a === "false" ? e.props[o] = "false" : s !== void 0 && (e.props[o] = s)
    }), e
}

function xE(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
            [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
        },
        r = om({
            tag: e,
            props: {}
        }, n);
    return r.key && fE.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map(s => ({ ...r,
        props: { ...r.props,
            content: s
        }
    })) : r
}

function AE(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (s, i) => {
        for (let o = 0; o < t.length; o++) i = t[o](s, i);
        return i
    };
    e = n(void 0, e);
    const r = [];
    return e = Zo(e, n), Object.entries(e || {}).forEach(([s, i]) => {
        if (i !== void 0)
            for (const o of Array.isArray(i) ? i : [i]) r.push(xE(s, o))
    }), r.flat()
}
const md = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w,
    _d = {
        base: -10,
        title: 10
    },
    LE = {
        critical: -8,
        high: -1,
        low: 2
    },
    yd = {
        meta: {
            "content-security-policy": -30,
            charset: -20,
            viewport: -15
        },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            "dns-prefetch": 90,
            prerender: 90
        },
        script: {
            async: 30,
            defer: 80,
            sync: 50
        },
        style: {
            imported: 40,
            sync: 60
        }
    },
    RE = /@import/,
    gi = e => e === "" || e === !0;

function OE(e, t) {
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = LE[t.tagPriority] || 0,
        s = e.resolvedOptions.disableCapoSorting ? {
            link: {},
            script: {},
            style: {}
        } : yd;
    if (t.tag in _d) n = _d[t.tag];
    else if (t.tag === "meta") {
        const i = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        i && (n = yd.meta[i])
    } else if (t.tag === "link" && t.props.rel) n = s.link[t.props.rel];
    else if (t.tag === "script") {
        const i = String(t.props.type);
        gi(t.props.async) ? n = s.script.async : t.props.src && !gi(t.props.defer) && !gi(t.props.async) && i !== "module" && !i.endsWith("json") || t.innerHTML && !i.endsWith("json") ? n = s.script.sync : (gi(t.props.defer) && t.props.src && !gi(t.props.async) || i === "module") && (n = s.script.defer)
    } else t.tag === "style" && (n = t.innerHTML && RE.test(t.innerHTML) ? s.style.imported : s.style.sync);
    return (n || 100) + r
}

function bd(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}))
}

function ME(e = {}) {
    const t = TE();
    t.addHooks(e.hooks || {});
    const n = !e.document,
        r = new Map,
        s = new Map,
        i = new Set,
        o = {
            _entryCount: 1,
            plugins: s,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            ssr: n,
            entries: r,
            headEntries() {
                return [...r.values()]
            },
            use: a => bd(o, a),
            push(a, l) {
                const c = { ...l || {}
                };
                delete c.head;
                const u = c._index ? ? o._entryCount++,
                    f = {
                        _i: u,
                        input: a,
                        options: c
                    },
                    d = {
                        _poll(h = !1) {
                            o.dirty = !0, !h && i.add(u), t.callHook("entries:updated", o)
                        },
                        dispose() {
                            r.delete(u) && o.invalidate()
                        },
                        patch(h) {
                            (!c.mode || c.mode === "server" && n || c.mode === "client" && !n) && (f.input = h, r.set(u, f), d._poll())
                        }
                    };
                return d.patch(a), d
            },
            async resolveTags() {
                const a = {
                    tagMap: new Map,
                    tags: [],
                    entries: [...o.entries.values()]
                };
                for (await t.callHook("entries:resolve", a); i.size;) {
                    const d = i.values().next().value;
                    i.delete(d);
                    const h = r.get(d);
                    if (h) {
                        const g = {
                            tags: AE(h.input, e.propResolvers || []).map(p => Object.assign(p, h.options)),
                            entry: h
                        };
                        await t.callHook("entries:normalize", g), h._tags = g.tags.map((p, v) => (p._w = OE(o, p), p._p = (h._i << 10) + v, p._d = fc(p), p._d || (p._h = im(p)), p))
                    }
                }
                let l = !1;
                a.entries.flatMap(d => (d._tags || []).map(h => ({ ...h,
                    props: { ...h.props
                    }
                }))).sort(md).reduce((d, h) => {
                    const g = h._d || h._h;
                    if (!d.has(g)) return d.set(g, h);
                    const p = d.get(g);
                    if ((h ? .tagDuplicateStrategy || (mE.has(h.tag) ? "merge" : null) || (h.key && h.key === p.key ? "merge" : null)) === "merge") {
                        const y = { ...p.props
                        };
                        Object.entries(h.props).forEach(([m, _]) => y[m] = m === "style" ? new Map([...p.props.style || new Map, ..._]) : m === "class" ? new Set([...p.props.class || new Set, ..._]) : _), d.set(g, { ...h,
                            props: y
                        })
                    } else h._p >> 10 === p._p >> 10 && h.tag === "meta" && sm(g) ? (d.set(g, Object.assign([...Array.isArray(p) ? p : [p], h], h)), l = !0) : (h._w === p._w ? h._p > p._p : h ? ._w < p ? ._w) && d.set(g, h);
                    return d
                }, a.tagMap);
                const c = a.tagMap.get("title"),
                    u = a.tagMap.get("titleTemplate");
                if (o._title = c ? .textContent, u) {
                    const d = u ? .textContent;
                    if (o._titleTemplate = d, d) {
                        let h = typeof d == "function" ? d(c ? .textContent) : d;
                        typeof h == "string" && !o.plugins.has("template-params") && (h = h.replace("%s", c ? .textContent || "")), c ? h === null ? a.tagMap.delete("title") : a.tagMap.set("title", { ...c,
                            textContent: h
                        }) : (u.tag = "title", u.textContent = h)
                    }
                }
                a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(md)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
                const f = [];
                for (const d of a.tags) {
                    const {
                        innerHTML: h,
                        tag: g,
                        props: p
                    } = d;
                    if (hE.has(g) && !(Object.keys(p).length === 0 && !d.innerHTML && !d.textContent) && !(g === "meta" && !p.content && !p["http-equiv"] && !p.charset)) {
                        if (g === "script" && h) {
                            if (String(p.type).endsWith("json")) {
                                const v = typeof h == "string" ? h : JSON.stringify(h);
                                d.innerHTML = v.replace(/</g, "\\u003C")
                            } else typeof h == "string" && (d.innerHTML = h.replace(new RegExp(`</${g}`, "g"), `<\\/${g}`));
                            d._d = fc(d)
                        }
                        f.push(d)
                    }
                }
                return f
            },
            invalidate() {
                for (const a of r.values()) i.add(a._i);
                o.dirty = !0, t.callHook("entries:updated", o)
            }
        };
    return (e ? .plugins || []).forEach(a => bd(o, a)), o.hooks.callHook("init", o), e.init ? .forEach(a => a && o.push(a)), o
}
const pl = "%separator";

function IE(e, t, n = !1) {
    let r;
    if (t === "s" || t === "pageTitle") r = e.pageTitle;
    else if (t.includes(".")) {
        const s = t.indexOf(".");
        r = e[t.substring(0, s)] ? .[t.substring(s + 1)]
    } else r = e[t];
    if (r !== void 0) return n ? (r || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r || ""
}

function vo(e, t, n, r = !1) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let s = e;
    try {
        s = decodeURI(e)
    } catch {}
    const i = s.match(/%\w+(?:\.\w+)?/g);
    if (!i) return e;
    const o = e.includes(pl);
    return e = e.replace(/%\w+(?:\.\w+)?/g, a => {
        if (a === pl || !i.includes(a)) return a;
        const l = IE(t, a.slice(1), r);
        return l !== void 0 ? l : a
    }).trim(), o && (e = e.split(pl).map(a => a.trim()).filter(a => a !== "").join(n ? ` ${n} ` : " ")), e
}
const NE = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    DE = ["innerHTML", "textContent"],
    am = e => ({
        key: "template-params",
        hooks: {
            "entries:normalize": t => {
                const n = t.tags.filter(r => r.tag === "templateParams" && r.mode === "server") ? .[0] ? .props || {};
                Object.keys(n).length && (e._ssrPayload = {
                    templateParams: { ...e._ssrPayload ? .templateParams || {},
                        ...n
                    }
                })
            },
            "tags:resolve": ({
                tagMap: t,
                tags: n
            }) => {
                const r = t.get("templateParams") ? .props || {},
                    s = r.separator || "|";
                delete r.separator, r.pageTitle = vo(r.pageTitle || e._title || "", r, s);
                for (const i of n) {
                    if (i.processTemplateParams === !1) continue;
                    const o = NE[i.tag];
                    if (o && typeof i.props[o] == "string") i.props[o] = vo(i.props[o], r, s);
                    else if (i.processTemplateParams || i.tag === "titleTemplate" || i.tag === "title")
                        for (const a of DE) typeof i[a] == "string" && (i[a] = vo(i[a], r, s, i.tag === "script" && i.props.type.endsWith("json")))
                }
                e._templateParams = r, e._separator = s
            },
            "tags:afterResolve": ({
                tagMap: t
            }) => {
                const n = t.get("title");
                n ? .textContent && n.processTemplateParams !== !1 && (n.textContent = vo(n.textContent, e._templateParams, e._separator))
            }
        }
    });

function FE(e = {}) {
    return t => (t.push({
        meta: [{
            name: "twitter:card",
            content: e.twitterCard || "summary_large_image",
            tagPriority: "low"
        }, {
            property: "og:title",
            tagPriority: "low",
            "data-infer": ""
        }, {
            property: "og:description",
            tagPriority: "low",
            "data-infer": ""
        }]
    }), {
        key: "infer-seo-meta",
        hooks: {
            "tags:beforeResolve": ({
                tagMap: n
            }) => {
                let r = t._titleTemplate || t._title;
                const s = n.get("meta:og:title");
                typeof s ? .props["data-infer"] < "u" && (typeof r == "function" && (r = r(t._title)), s.props.content = e.ogTitle ? e.ogTitle(r) : r || "", s.processTemplateParams = !0);
                const i = n.get("meta:description") ? .props ? .content,
                    o = n.get("meta:og:description");
                typeof o ? .props["data-infer"] < "u" && (o.props.content = e.ogDescription ? e.ogDescription(i) : i || "", o.processTemplateParams = !0)
            }
        }
    })
}
const $E = (e, t) => Fe(t) ? Je(t) : t,
    xu = "usehead";

function BE(e) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(xu, e)
        }
    }.install
}

function lm() {
    if (ka()) {
        const e = pt(xu);
        if (e) return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}

function cm(e, t = {}) {
    const n = t.head || lm();
    return jE(n, e, t)
}

function jE(e, t, n = {}) {
    const r = lt(!1);
    let s;
    return Ap(() => {
        const o = r.value ? {} : Zo(t, $E);
        s ? s.patch(o) : s = e.push(o, n)
    }), Ft() && (si(() => {
        s.dispose()
    }), vu(() => {
        r.value = !0
    }), bu(() => {
        r.value = !1
    })), s
}

function HE(e = {}, t = {}) {
    (t.head || lm()).use(vE);
    const {
        title: r,
        titleTemplate: s,
        ...i
    } = e;
    return cm({
        title: r,
        titleTemplate: s,
        _flatMeta: i
    }, t)
}

function li(e) {
    const t = e || ue();
    return t.ssrContext ? .head || t.runWithContext(() => {
        if (ka()) {
            const n = pt(xu);
            if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
            return n
        }
    })
}

function Tr(e, t = {}) {
    const n = t.head || li(t.nuxt);
    return cm(e, {
        head: n,
        ...t
    })
}

function dc(e, t = {}) {
    const n = t.head || li(t.nuxt);
    return HE(e, {
        head: n,
        ...t
    })
}
const UE = (() => {
        const e = {
                prerender: !0
            },
            t = {
                redirect: "/sitemap_index.xml"
            },
            n = {},
            r = {
                payload: !1
            };
        return (s, i) => {
            let o = [];
            i.charCodeAt(i.length - 1) === 47 && (i = i.slice(0, -1) || "/"), i === "/__nuxt_content/content_en/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/content_fr/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/legals_en/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/legals_fr/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/privacy_en/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/privacy_fr/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/contact_en/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/contact_fr/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/calculator_en/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/__nuxt_content/calculator_fr/sql_dump.txt" ? o.unshift({
                data: e
            }) : i === "/sitemap.xml" ? o.unshift({
                data: t
            }) : i === "/sitemap_index.xml" ? o.unshift({
                data: n
            }) : i === "/__sitemap__/fr-FR.xml" ? o.unshift({
                data: n
            }) : i === "/__sitemap__/en-US.xml" ? o.unshift({
                data: n
            }) : i === "/_nuxt" && o.unshift({
                data: n
            });
            let a = i.split("/");
            return a.length > 1 && (a[1] === "dev" ? o.unshift({
                data: n,
                params: {
                    _: a.slice(2).join("/")
                }
            }) : a[1] === "_studio" ? o.unshift({
                data: n,
                params: {
                    _: a.slice(2).join("/")
                }
            }) : a[1] === "__nuxt_content" && o.unshift({
                data: r,
                params: {
                    _: a.slice(2).join("/")
                }
            })), o
        }
    })(),
    VE = e => Ia({}, ...UE("", e).map(t => t.data).reverse()),
    WE = VE;
let Io;

function zE() {
    let e;
    return e = $fetch(ku(`builds/meta/${At().app.buildId}.json`), {
        responseType: "json"
    }).then(t => {
        if (!t || typeof t != "object" || !Array.isArray(t.prerendered)) throw new Error("[nuxt] Received malformed app manifest. Ensure that `builds/meta/*.json` is served as JSON by your hosting/proxy and not rewritten to an HTML fallback.");
        return t
    }), Io = e, e.catch(t => {
        Io === e && (Io = void 0), console.error("[nuxt] Error fetching app manifest.", t)
    }), e
}

function Da() {
    return Io || zE()
}

function Fa(e) {
    const t = typeof e == "string" ? e : e.path;
    try {
        return WE(t)
    } catch (n) {
        return console.error("[nuxt] Error matching route rules.", n), {}
    }
}
async function vd(e, t = {}) {
    if (await KE(e)) {
        const n = await GE(e, t);
        return await um(n) || null
    }
    return null
}
const qE = "_payload.json";
async function GE(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || xt(n.pathname, {
            acceptRelative: !0
        })) throw new Error("Payload URL must not include hostname: " + e);
    const r = At(),
        s = t.hash || (t.fresh ? Date.now() : r.app.buildId),
        i = r.app.cdnURL,
        o = i && await YE(e) ? i : r.app.baseURL;
    return sr(o, n.pathname, qE + (s ? `?${s}` : ""))
}
async function um(e) {
    try {
        if (xw) {
            const t = await fetch(e, {
                cache: "force-cache"
            });
            return t.ok ? await hm(await t.text()) : null
        }
    } catch (t) {
        console.warn("[nuxt] Cannot load payload ", e, t)
    }
    return null
}

function fm(e) {
    if (e.redirect) return !1;
    if (e.prerender) return !0
}
async function dm(e) {
    e = e === "/" ? e : e.replace(/\/$/, "");
    try {
        return (await Da()).prerendered.includes(e)
    } catch {
        return !1
    }
}
async function KE(e = oi().path) {
    const t = Fa({
        path: e
    });
    if (t.ssr === !1) return !1;
    const n = fm(t);
    return n !== void 0 ? n : t.payload ? !0 : await dm(e)
}
async function YE(e = oi().path) {
    const t = fm(Fa({
        path: e
    }));
    return t !== void 0 ? t : await dm(e)
}
let jr = null;
async function XE() {
    if (jr) return jr;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await hm(e.textContent || ""),
        n = e.dataset.src ? await um(e.dataset.src) : void 0;
    return jr = { ...t,
        ...n,
        ...window.__NUXT__
    }, jr.config ? .public && (jr.config.public = _n(jr.config.public)), jr
}
async function hm(e) {
    return await cE(e, ue()._payloadRevivers)
}

function JE(e, t) {
    ue()._payloadRevivers[e] = t
}

function wd(e) {
    try {
        return JSON.parse(e)
    } catch {
        return e
    }
}
const QE = [
        ["NuxtError", e => vr(e)],
        ["EmptyShallowRef", e => pn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : wd(e))],
        ["EmptyRef", e => lt(e === "_" ? void 0 : e === "0n" ? BigInt(0) : wd(e))],
        ["ShallowRef", e => pn(e)],
        ["ShallowReactive", e => xn(e)],
        ["Ref", e => lt(e)],
        ["Reactive", e => _n(e)]
    ],
    ZE = xe({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n;
            for (const [r, s] of QE) JE(r, s);
            Object.assign(e.payload, ([t, n] = Zn(() => e.runWithContext(XE)), t = await t, n(), t)), delete window.__NUXT__
        }
    });

function hc(e) {
    return typeof e == "string" ? `'${e}'` : new e1().serialize(e)
}
const e1 = (function() {
    class e {#
        e = new Map;
        compare(n, r) {
            const s = typeof n,
                i = typeof r;
            return s === "string" && i === "string" ? n.localeCompare(r) : s === "number" && i === "number" ? n - r : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(r, !0))
        }
        serialize(n, r) {
            if (n === null) return "null";
            switch (typeof n) {
                case "string":
                    return r ? n : `'${n}'`;
                case "bigint":
                    return `${n}n`;
                case "object":
                    return this.$object(n);
                case "function":
                    return this.$function(n)
            }
            return String(n)
        }
        serializeObject(n) {
            const r = Object.prototype.toString.call(n);
            if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), n);
            const s = n.constructor,
                i = s === Object || s === void 0 ? "" : s.name;
            if (i !== "" && globalThis[i] === s) return this.serializeBuiltInType(i, n);
            if (typeof n.toJSON == "function") {
                const o = n.toJSON();
                return i + (o !== null && typeof o == "object" ? this.$object(o) : `(${this.serialize(o)})`)
            }
            return this.serializeObjectEntries(i, Object.entries(n))
        }
        serializeBuiltInType(n, r) {
            const s = this["$" + n];
            if (s) return s.call(this, r);
            if (typeof r ? .entries == "function") return this.serializeObjectEntries(n, r.entries());
            throw new Error(`Cannot serialize ${n}`)
        }
        serializeObjectEntries(n, r) {
            const s = Array.from(r).sort((o, a) => this.compare(o[0], a[0]));
            let i = `${n}{`;
            for (let o = 0; o < s.length; o++) {
                const [a, l] = s[o];
                i += `${this.serialize(a,!0)}:${this.serialize(l)}`, o < s.length - 1 && (i += ",")
            }
            return i + "}"
        }
        $object(n) {
            let r = this.#e.get(n);
            return r === void 0 && (this.#e.set(n, `#${this.#e.size}`), r = this.serializeObject(n), this.#e.set(n, r)), r
        }
        $function(n) {
            const r = Function.prototype.toString.call(n);
            return r.slice(-15) === "[native code] }" ? `${n.name||""}()[native]` : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`
        }
        $Array(n) {
            let r = "[";
            for (let s = 0; s < n.length; s++) r += this.serialize(n[s]), s < n.length - 1 && (r += ",");
            return r + "]"
        }
        $Date(n) {
            try {
                return `Date(${n.toISOString()})`
            } catch {
                return "Date(null)"
            }
        }
        $ArrayBuffer(n) {
            return `ArrayBuffer[${new Uint8Array(n).join(",")}]`
        }
        $Set(n) {
            return `Set${this.$Array(Array.from(n).sort((r,s)=>this.compare(r,s)))}`
        }
        $Map(n) {
            return this.serializeObjectEntries("Map", n.entries())
        }
    }
    for (const t of ["Error", "RegExp", "URL"]) e.prototype["$" + t] = function(n) {
        return `${t}(${n})`
    };
    for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + t] = function(n) {
        return `${t}[${n.join(",")}]`
    };
    for (const t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(n) {
        return `${t}[${n.join("n,")}${n.length>0?"n":""}]`
    };
    return e
})();

function t1(e, t) {
    return e === t || hc(e) === hc(t)
}
const n1 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
    r1 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
    s1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    Hr = [];
let i1 = class {
        _data = new wo;
        _hash = new wo([...n1]);
        _nDataBytes = 0;
        _minBufferSize = 0;
        finalize(t) {
            t && this._append(t);
            const n = this._nDataBytes * 8,
                r = this._data.sigBytes * 8;
            return this._data.words[r >>> 5] |= 128 << 24 - r % 32, this._data.words[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), this._data.words[(r + 64 >>> 9 << 4) + 15] = n, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
        }
        _doProcessBlock(t, n) {
            const r = this._hash.words;
            let s = r[0],
                i = r[1],
                o = r[2],
                a = r[3],
                l = r[4],
                c = r[5],
                u = r[6],
                f = r[7];
            for (let d = 0; d < 64; d++) {
                if (d < 16) Hr[d] = t[n + d] | 0;
                else {
                    const _ = Hr[d - 15],
                        b = (_ << 25 | _ >>> 7) ^ (_ << 14 | _ >>> 18) ^ _ >>> 3,
                        w = Hr[d - 2],
                        k = (w << 15 | w >>> 17) ^ (w << 13 | w >>> 19) ^ w >>> 10;
                    Hr[d] = b + Hr[d - 7] + k + Hr[d - 16]
                }
                const h = l & c ^ ~l & u,
                    g = s & i ^ s & o ^ i & o,
                    p = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                    v = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25),
                    y = f + v + h + r1[d] + Hr[d],
                    m = p + g;
                f = u, u = c, c = l, l = a + y | 0, a = o, o = i, i = s, s = y + m | 0
            }
            r[0] = r[0] + s | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + a | 0, r[4] = r[4] + l | 0, r[5] = r[5] + c | 0, r[6] = r[6] + u | 0, r[7] = r[7] + f | 0
        }
        _append(t) {
            typeof t == "string" && (t = wo.fromUtf8(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
        }
        _process(t) {
            let n, r = this._data.sigBytes / 64;
            t ? r = Math.ceil(r) : r = Math.max((r | 0) - this._minBufferSize, 0);
            const s = r * 16,
                i = Math.min(s * 4, this._data.sigBytes);
            if (s) {
                for (let o = 0; o < s; o += 16) this._doProcessBlock(this._data.words, o);
                n = this._data.words.splice(0, s), this._data.sigBytes -= i
            }
            return new wo(n, i)
        }
    },
    wo = class pm {
        words;
        sigBytes;
        constructor(t, n) {
            t = this.words = t || [], this.sigBytes = n === void 0 ? t.length * 4 : n
        }
        static fromUtf8(t) {
            const n = unescape(encodeURIComponent(t)),
                r = n.length,
                s = [];
            for (let i = 0; i < r; i++) s[i >>> 2] |= (n.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            return new pm(s, r)
        }
        toBase64() {
            const t = [];
            for (let n = 0; n < this.sigBytes; n += 3) {
                const r = this.words[n >>> 2] >>> 24 - n % 4 * 8 & 255,
                    s = this.words[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255,
                    i = this.words[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255,
                    o = r << 16 | s << 8 | i;
                for (let a = 0; a < 4 && n * 8 + a * 6 < this.sigBytes * 8; a++) t.push(s1.charAt(o >>> 6 * (3 - a) & 63))
            }
            return t.join("")
        }
        concat(t) {
            if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4)
                for (let n = 0; n < t.sigBytes; n++) {
                    const r = t.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    this.words[this.sigBytes + n >>> 2] |= r << 24 - (this.sigBytes + n) % 4 * 8
                } else
                    for (let n = 0; n < t.sigBytes; n += 4) this.words[this.sigBytes + n >>> 2] = t.words[n >>> 2];
            this.sigBytes += t.sigBytes
        }
    };

function o1(e) {
    return new i1().finalize(e).toBase64()
}

function Ss(e) {
    return o1(hc(e))
}
const a1 = {
    trailing: !0
};

function l1(e, t = 25, n = {}) {
    if (n = { ...a1,
            ...n
        }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let r, s, i = [],
        o, a;
    const l = (f, d) => (o = c1(e, f, d), o.finally(() => {
            if (o = null, n.trailing && a && !s) {
                const h = l(f, a);
                return a = null, h
            }
        }), o),
        c = function(...f) {
            return n.trailing && (a = f), o || new Promise(d => {
                const h = !s && n.leading;
                clearTimeout(s), s = setTimeout(() => {
                    s = null;
                    const g = n.leading ? r : l(this, f);
                    a = null;
                    for (const p of i) p(g);
                    i = []
                }, t), h ? (r = l(this, f), d(r)) : i.push(d)
            })
        },
        u = f => {
            f && (clearTimeout(f), s = null)
        };
    return c.isPending = () => !!s, c.cancel = () => {
        u(s), i = [], a = null
    }, c.flush = () => {
        if (u(s), !a || o) return;
        const f = a;
        return a = null, l(this, f)
    }, c
}
async function c1(e, t, n) {
    return await e.apply(t, n)
}
const Ts = typeof document < "u";

function gm(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function u1(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && gm(e.default)
}
const ve = Object.assign;

function gl(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = mn(s) ? s.map(e) : e(s)
    }
    return n
}
const Ri = () => {},
    mn = Array.isArray;

function Ed(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}
let We = (function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e
})({});
const mm = Symbol("");
We.MATCHER_NOT_FOUND + "", We.NAVIGATION_GUARD_REDIRECT + "", We.NAVIGATION_ABORTED + "", We.NAVIGATION_CANCELLED + "", We.NAVIGATION_DUPLICATED + "";

function qs(e, t) {
    return ve(new Error, {
        type: e,
        [mm]: !0
    }, t)
}

function Bn(e, t) {
    return e instanceof Error && mm in e && (t == null || !!(e.type & t))
}
const f1 = ["params", "query", "hash"];

function d1(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of f1) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2)
}
const _m = Symbol(""),
    Sd = Symbol(""),
    Au = Symbol(""),
    ym = Symbol(""),
    pc = Symbol("");
const bm = /#/g,
    h1 = /&/g,
    p1 = /\//g,
    g1 = /=/g,
    m1 = /\?/g,
    vm = /\+/g,
    _1 = /%5B/g,
    y1 = /%5D/g,
    wm = /%5E/g,
    b1 = /%60/g,
    Em = /%7B/g,
    v1 = /%7C/g,
    Sm = /%7D/g,
    w1 = /%20/g;

function Lu(e) {
    return e == null ? "" : encodeURI("" + e).replace(v1, "|").replace(_1, "[").replace(y1, "]")
}

function E1(e) {
    return Lu(e).replace(Em, "{").replace(Sm, "}").replace(wm, "^")
}

function gc(e) {
    return Lu(e).replace(vm, "%2B").replace(w1, "+").replace(bm, "%23").replace(h1, "%26").replace(b1, "`").replace(Em, "{").replace(Sm, "}").replace(wm, "^")
}

function S1(e) {
    return gc(e).replace(g1, "%3D")
}

function T1(e) {
    return Lu(e).replace(bm, "%23").replace(m1, "%3F")
}

function C1(e) {
    return T1(e).replace(p1, "%2F")
}

function ea(e) {
    if (e == null) return null;
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const k1 = /\/$/,
    P1 = e => e.replace(k1, "");

function ml(e, t, n = "/") {
    let r, s = {},
        i = "",
        o = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), i = t.slice(l, a > 0 ? a : t.length), s = e(i.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = R1(r ? ? t, n), {
        fullPath: r + i + o,
        path: r,
        query: s,
        hash: ea(o)
    }
}

function x1(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function Td(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function A1(e, t, n) {
    const r = t.matched.length - 1,
        s = n.matched.length - 1;
    return r > -1 && r === s && Gs(t.matched[r], n.matched[s]) && Tm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Gs(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Tm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var n in e)
        if (!L1(e[n], t[n])) return !1;
    return !0
}

function L1(e, t) {
    return mn(e) ? Cd(e, t) : mn(t) ? Cd(t, e) : (e && e.valueOf()) === (t && t.valueOf())
}

function Cd(e, t) {
    return mn(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function R1(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1,
        o, a;
    for (o = 0; o < r.length; o++)
        if (a = r[o], a !== ".")
            if (a === "..") i > 1 && i--;
            else break;
    return n.slice(0, i).join("/") + "/" + r.slice(o).join("/")
}
const sn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
let mc = (function(e) {
        return e.pop = "pop", e.push = "push", e
    })({}),
    _l = (function(e) {
        return e.back = "back", e.forward = "forward", e.unknown = "", e
    })({});

function O1(e) {
    if (!e)
        if (Ts) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), P1(e)
}
const M1 = /^[^#]+#/;

function I1(e, t) {
    return e.replace(M1, "#") + t
}

function N1(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const $a = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function D1(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s) return;
        t = N1(s, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function kd(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const _c = new Map;

function F1(e, t) {
    _c.set(e, t)
}

function $1(e) {
    const t = _c.get(e);
    return _c.delete(e), t
}

function B1(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Cm(e) {
    return typeof e == "string" || typeof e == "symbol"
}

function j1(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
        const s = n[r].replace(vm, " "),
            i = s.indexOf("="),
            o = ea(i < 0 ? s : s.slice(0, i)),
            a = i < 0 ? null : ea(s.slice(i + 1));
        if (o in t) {
            let l = t[o];
            mn(l) || (l = t[o] = [l]), l.push(a)
        } else t[o] = a
    }
    return t
}

function Pd(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = S1(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(mn(r) ? r.map(s => s && gc(s)) : [r && gc(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
        })
    }
    return t
}

function H1(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = mn(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}

function mi() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function U1(e, t, n) {
    const r = e.value;
    if (!r) return;
    let s = r;
    const i = () => {
        s[t].delete(n)
    };
    ms(i), vu(i), bu(() => {
        const o = e.value;
        o && (s = o), s[t].add(n)
    }), s[t].add(n)
}

function jR(e) {
    U1(pt(_m, {}), "leaveGuards", e)
}

function hr(e, t, n, r, s, i = o => o()) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((a, l) => {
        const c = d => {
                d === !1 ? l(qs(We.NAVIGATION_ABORTED, {
                    from: n,
                    to: t
                })) : d instanceof Error ? l(d) : B1(d) ? l(qs(We.NAVIGATION_GUARD_REDIRECT, {
                    from: t,
                    to: d
                })) : (o && r.enterCallbacks[s] === o && typeof d == "function" && o.push(d), a())
            },
            u = i(() => e.call(r && r.instances[s], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)), f.catch(d => l(d))
    })
}

function yl(e, t, n, r, s = i => i()) {
    const i = [];
    for (const o of e)
        for (const a in o.components) {
            let l = o.components[a];
            if (!(t !== "beforeRouteEnter" && !o.instances[a]))
                if (gm(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && i.push(hr(c, n, r, o, a, s))
                } else {
                    let c = l();
                    i.push(() => c.then(u => {
                        if (!u) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
                        const f = u1(u) ? u.default : u;
                        o.mods[a] = u, o.components[a] = f;
                        const d = (f.__vccOpts || f)[t];
                        return d && hr(d, n, r, o, a, s)()
                    }))
                }
        }
    return i
}

function V1(e, t) {
    const n = [],
        r = [],
        s = [],
        i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
        const a = t.matched[o];
        a && (e.matched.find(c => Gs(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[o];
        l && (t.matched.find(c => Gs(c, l)) || s.push(l))
    }
    return [n, r, s]
}
let W1 = () => location.protocol + "//" + location.host;

function km(e, t) {
    const {
        pathname: n,
        search: r,
        hash: s
    } = t, i = e.indexOf("#");
    if (i > -1) {
        let o = s.includes(e.slice(i)) ? e.slice(i).length : 1,
            a = s.slice(o);
        return a[0] !== "/" && (a = "/" + a), Td(a, "")
    }
    return Td(n, e) + r + s
}

function z1(e, t, n, r) {
    let s = [],
        i = [],
        o = null;
    const a = ({
        state: d
    }) => {
        const h = km(e, location),
            g = n.value,
            p = t.value;
        let v = 0;
        if (d) {
            if (n.value = h, t.value = d, o && o === g) {
                o = null;
                return
            }
            v = p ? d.position - p.position : 0
        } else r(h);
        s.forEach(y => {
            y(n.value, g, {
                delta: v,
                type: mc.pop,
                direction: v ? v > 0 ? _l.forward : _l.back : _l.unknown
            })
        })
    };

    function l() {
        o = n.value
    }

    function c(d) {
        s.push(d);
        const h = () => {
            const g = s.indexOf(d);
            g > -1 && s.splice(g, 1)
        };
        return i.push(h), h
    }

    function u() {
        if (document.visibilityState === "hidden") {
            const {
                history: d
            } = window;
            if (!d.state) return;
            d.replaceState(ve({}, d.state, {
                scroll: $a()
            }), "")
        }
    }

    function f() {
        for (const d of i) d();
        i = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u)
    }
    return window.addEventListener("popstate", a), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}

function xd(e, t, n, r = !1, s = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? $a() : null
    }
}

function q1(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: km(e, n)
    }, s = {
        value: t.state
    };
    s.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(l, c, u) {
        const f = e.indexOf("#"),
            d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : W1() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d), s.value = c
        } catch (h) {
            console.error(h), n[u ? "replace" : "assign"](d)
        }
    }

    function o(l, c) {
        i(l, ve({}, t.state, xd(s.value.back, l, s.value.forward, !0), c, {
            position: s.value.position
        }), !0), r.value = l
    }

    function a(l, c) {
        const u = ve({}, s.value, t.state, {
            forward: l,
            scroll: $a()
        });
        i(u.current, u, !0), i(l, ve({}, xd(r.value, l, null), {
            position: u.position + 1
        }, c), !1), r.value = l
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: o
    }
}

function G1(e) {
    e = O1(e);
    const t = q1(e),
        n = z1(e, t.state, t.location, t.replace);

    function r(i, o = !0) {
        o || n.pauseListeners(), history.go(i)
    }
    const s = ve({
        location: "",
        base: e,
        go: r,
        createHref: I1.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), s
}
let Kr = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e
})({});
var ot = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e
})(ot || {});
const K1 = {
        type: Kr.Static,
        value: ""
    },
    Y1 = /[a-zA-Z0-9_]/;

function X1(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [K1]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(h) {
        throw new Error(`ERR (${n})/"${c}": ${h}`)
    }
    let n = ot.Static,
        r = n;
    const s = [];
    let i;

    function o() {
        i && s.push(i), i = []
    }
    let a = 0,
        l, c = "",
        u = "";

    function f() {
        c && (n === ot.Static ? i.push({
            type: Kr.Static,
            value: c
        }) : n === ot.Param || n === ot.ParamRegExp || n === ot.ParamRegExpEnd ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: Kr.Param,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function d() {
        c += l
    }
    for (; a < e.length;) {
        if (l = e[a++], l === "\\" && n !== ot.ParamRegExp) {
            r = n, n = ot.EscapeNext;
            continue
        }
        switch (n) {
            case ot.Static:
                l === "/" ? (c && f(), o()) : l === ":" ? (f(), n = ot.Param) : d();
                break;
            case ot.EscapeNext:
                d(), n = r;
                break;
            case ot.Param:
                l === "(" ? n = ot.ParamRegExp : Y1.test(l) ? d() : (f(), n = ot.Static, l !== "*" && l !== "?" && l !== "+" && a--);
                break;
            case ot.ParamRegExp:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = ot.ParamRegExpEnd : u += l;
                break;
            case ot.ParamRegExpEnd:
                f(), n = ot.Static, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === ot.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), s
}
const Ad = "[^/]+?",
    J1 = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    };
var Tt = (function(e) {
    return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e
})(Tt || {});
const Q1 = /[.+*?^${}()[\]/\\]/g;

function Z1(e, t) {
    const n = ve({}, J1, t),
        r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const c of e) {
        const u = c.length ? [] : [Tt.Root];
        n.strict && !c.length && (s += "/");
        for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let h = Tt.Segment + (n.sensitive ? Tt.BonusCaseSensitive : 0);
            if (d.type === Kr.Static) f || (s += "/"), s += d.value.replace(Q1, "\\$&"), h += Tt.Static;
            else if (d.type === Kr.Param) {
                const {
                    value: g,
                    repeatable: p,
                    optional: v,
                    regexp: y
                } = d;
                i.push({
                    name: g,
                    repeatable: p,
                    optional: v
                });
                const m = y || Ad;
                if (m !== Ad) {
                    h += Tt.BonusCustomRegExp;
                    try {
                        new RegExp(`(${m})`)
                    } catch (b) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${m}): ` + b.message)
                    }
                }
                let _ = p ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
                f || (_ = v && c.length < 2 ? `(?:/${_})` : "/" + _), v && (_ += "?"), s += _, h += Tt.Dynamic, v && (h += Tt.BonusOptional), p && (h += Tt.BonusRepeatable), m === ".*" && (h += Tt.BonusWildcard)
            }
            u.push(h)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += Tt.BonusStrict
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const o = new RegExp(s, n.sensitive ? "" : "i");

    function a(c) {
        const u = c.match(o),
            f = {};
        if (!u) return null;
        for (let d = 1; d < u.length; d++) {
            const h = u[d] || "",
                g = i[d - 1];
            f[g.name] = h && g.repeatable ? h.split("/") : h
        }
        return f
    }

    function l(c) {
        let u = "",
            f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"), f = !1;
            for (const h of d)
                if (h.type === Kr.Static) u += h.value;
                else if (h.type === Kr.Param) {
                const {
                    value: g,
                    repeatable: p,
                    optional: v
                } = h, y = g in c ? c[g] : "";
                if (mn(y) && !p) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                const m = mn(y) ? y.join("/") : y;
                if (!m)
                    if (v) d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${g}"`);
                u += m
            }
        }
        return u || "/"
    }
    return {
        re: o,
        score: r,
        keys: i,
        parse: a,
        stringify: l
    }
}

function eS(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === Tt.Static + Tt.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Tt.Static + Tt.Segment ? 1 : -1 : 0
}

function Pm(e, t) {
    let n = 0;
    const r = e.score,
        s = t.score;
    for (; n < r.length && n < s.length;) {
        const i = eS(r[n], s[n]);
        if (i) return i;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (Ld(r)) return 1;
        if (Ld(s)) return -1
    }
    return s.length - r.length
}

function Ld(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const tS = {
    strict: !1,
    end: !0,
    sensitive: !1
};

function nS(e, t, n) {
    const r = Z1(X1(e.path), n),
        s = ve(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function rS(e, t) {
    const n = [],
        r = new Map;
    t = Ed(tS, t);

    function s(f) {
        return r.get(f)
    }

    function i(f, d, h) {
        const g = !h,
            p = Od(f);
        p.aliasOf = h && h.record;
        const v = Ed(t, f),
            y = [p];
        if ("alias" in f) {
            const b = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const w of b) y.push(Od(ve({}, p, {
                components: h ? h.record.components : p.components,
                path: w,
                aliasOf: h ? h.record : p
            })))
        }
        let m, _;
        for (const b of y) {
            const {
                path: w
            } = b;
            if (d && w[0] !== "/") {
                const k = d.record.path,
                    S = k[k.length - 1] === "/" ? "" : "/";
                b.path = d.record.path + (w && S + w)
            }
            if (m = nS(b, d, v), h ? h.alias.push(m) : (_ = _ || m, _ !== m && _.alias.push(m), g && f.name && !Md(m) && o(f.name)), xm(m) && l(m), p.children) {
                const k = p.children;
                for (let S = 0; S < k.length; S++) i(k[S], m, h && h.children[S])
            }
            h = h || m
        }
        return _ ? () => {
            o(_)
        } : Ri
    }

    function o(f) {
        if (Cm(f)) {
            const d = r.get(f);
            d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o))
        }
    }

    function a() {
        return n
    }

    function l(f) {
        const d = oS(f, n);
        n.splice(d, 0, f), f.record.name && !Md(f) && r.set(f.record.name, f)
    }

    function c(f, d) {
        let h, g = {},
            p, v;
        if ("name" in f && f.name) {
            if (h = r.get(f.name), !h) throw qs(We.MATCHER_NOT_FOUND, {
                location: f
            });
            v = h.record.name, g = ve(Rd(d.params, h.keys.filter(_ => !_.optional).concat(h.parent ? h.parent.keys.filter(_ => _.optional) : []).map(_ => _.name)), f.params && Rd(f.params, h.keys.map(_ => _.name))), p = h.stringify(g)
        } else if (f.path != null) p = f.path, h = n.find(_ => _.re.test(p)), h && (g = h.parse(p), v = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(_ => _.re.test(d.path)), !h) throw qs(We.MATCHER_NOT_FOUND, {
                location: f,
                currentLocation: d
            });
            v = h.record.name, g = ve({}, d.params, f.params), p = h.stringify(g)
        }
        const y = [];
        let m = h;
        for (; m;) y.unshift(m.record), m = m.parent;
        return {
            name: v,
            path: p,
            params: g,
            matched: y,
            meta: iS(y)
        }
    }
    e.forEach(f => i(f));

    function u() {
        n.length = 0, r.clear()
    }
    return {
        addRoute: i,
        resolve: c,
        removeRoute: o,
        clearRoutes: u,
        getRoutes: a,
        getRecordMatcher: s
    }
}

function Rd(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function Od(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: sS(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function sS(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function Md(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function iS(e) {
    return e.reduce((t, n) => ve(t, n.meta), {})
}

function oS(e, t) {
    let n = 0,
        r = t.length;
    for (; n !== r;) {
        const i = n + r >> 1;
        Pm(e, t[i]) < 0 ? r = i : n = i + 1
    }
    const s = aS(e);
    return s && (r = t.lastIndexOf(s, r - 1)), r
}

function aS(e) {
    let t = e;
    for (; t = t.parent;)
        if (xm(t) && Pm(e, t) === 0) return t
}

function xm({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function Id(e) {
    const t = pt(Au),
        n = pt(ym),
        r = ne(() => {
            const l = G(e.to);
            return t.resolve(l)
        }),
        s = ne(() => {
            const {
                matched: l
            } = r.value, {
                length: c
            } = l, u = l[c - 1], f = n.matched;
            if (!u || !f.length) return -1;
            const d = f.findIndex(Gs.bind(null, u));
            if (d > -1) return d;
            const h = Nd(l[c - 2]);
            return c > 1 && Nd(u) === h && f[f.length - 1].path !== h ? f.findIndex(Gs.bind(null, l[c - 2])) : d
        }),
        i = ne(() => s.value > -1 && dS(n.params, r.value.params)),
        o = ne(() => s.value > -1 && s.value === n.matched.length - 1 && Tm(n.params, r.value.params));

    function a(l = {}) {
        if (fS(l)) {
            const c = t[G(e.replace) ? "replace" : "push"](G(e.to)).catch(Ri);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: ne(() => r.value.href),
        isActive: i,
        isExactActive: o,
        navigate: a
    }
}

function lS(e) {
    return e.length === 1 ? e[0] : e
}
const cS = yn({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            },
            viewTransition: Boolean
        },
        useLink: Id,
        setup(e, {
            slots: t
        }) {
            const n = _n(Id(e)),
                {
                    options: r
                } = pt(Au),
                s = ne(() => ({
                    [Dd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Dd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const i = t.default && lS(t.default(n));
                return e.custom ? i : rt("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: s.value
                }, i)
            }
        }
    }),
    uS = cS;

function fS(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function dS(e, t) {
    for (const n in t) {
        const r = t[n],
            s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1
        } else if (!mn(s) || s.length !== r.length || r.some((i, o) => i.valueOf() !== s[o].valueOf())) return !1
    }
    return !0
}

function Nd(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Dd = (e, t, n) => e ? ? t ? ? n,
    hS = yn({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = pt(pc),
                s = ne(() => e.route || r.value),
                i = pt(Sd, 0),
                o = ne(() => {
                    let c = G(i);
                    const {
                        matched: u
                    } = s.value;
                    let f;
                    for (;
                        (f = u[c]) && !f.components;) c++;
                    return c
                }),
                a = ne(() => s.value.matched[o.value]);
            es(Sd, ne(() => o.value + 1)), es(_m, a), es(pc, s);
            const l = lt();
            return gt(() => [l.value, a.value, e.name], ([c, u, f], [d, h, g]) => {
                u && (u.instances[f] = c, h && h !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), c && u && (!h || !Gs(u, h) || !d) && (u.enterCallbacks[f] || []).forEach(p => p(c))
            }, {
                flush: "post"
            }), () => {
                const c = s.value,
                    u = e.name,
                    f = a.value,
                    d = f && f.components[u];
                if (!d) return Fd(n.default, {
                    Component: d,
                    route: c
                });
                const h = f.props[u],
                    g = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null,
                    v = rt(d, ve({}, g, t, {
                        onVnodeUnmounted: y => {
                            y.component.isUnmounted && (f.instances[u] = null)
                        },
                        ref: l
                    }));
                return Fd(n.default, {
                    Component: v,
                    route: c
                }) || v
            }
        }
    });

function Fd(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Am = hS;

function pS(e) {
    const t = rS(e.routes, e),
        n = e.parseQuery || j1,
        r = e.stringifyQuery || Pd,
        s = e.history,
        i = mi(),
        o = mi(),
        a = mi(),
        l = pn(sn);
    let c = sn;
    Ts && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = gl.bind(null, j => "" + j),
        f = gl.bind(null, C1),
        d = gl.bind(null, ea);

    function h(j, Q) {
        let K, ee;
        return Cm(j) ? (K = t.getRecordMatcher(j), ee = Q) : ee = j, t.addRoute(ee, K)
    }

    function g(j) {
        const Q = t.getRecordMatcher(j);
        Q && t.removeRoute(Q)
    }

    function p() {
        return t.getRoutes().map(j => j.record)
    }

    function v(j) {
        return !!t.getRecordMatcher(j)
    }

    function y(j, Q) {
        if (Q = ve({}, Q || l.value), typeof j == "string") {
            const P = ml(n, j, Q.path),
                I = t.resolve({
                    path: P.path
                }, Q),
                U = s.createHref(P.fullPath);
            return ve(P, I, {
                params: d(I.params),
                redirectedFrom: void 0,
                href: U
            })
        }
        let K;
        if (j.path != null) K = ve({}, j, {
            path: ml(n, j.path, Q.path).path
        });
        else {
            const P = ve({}, j.params);
            for (const I in P) P[I] == null && delete P[I];
            K = ve({}, j, {
                params: f(P)
            }), Q.params = f(Q.params)
        }
        const ee = t.resolve(K, Q),
            fe = j.hash || "";
        ee.params = u(d(ee.params));
        const Te = x1(r, ve({}, j, {
                hash: E1(fe),
                path: ee.path
            })),
            T = s.createHref(Te);
        return ve({
            fullPath: Te,
            hash: fe,
            query: r === Pd ? H1(j.query) : j.query || {}
        }, ee, {
            redirectedFrom: void 0,
            href: T
        })
    }

    function m(j) {
        return typeof j == "string" ? ml(n, j, l.value.path) : ve({}, j)
    }

    function _(j, Q) {
        if (c !== j) return qs(We.NAVIGATION_CANCELLED, {
            from: Q,
            to: j
        })
    }

    function b(j) {
        return S(j)
    }

    function w(j) {
        return b(ve(m(j), {
            replace: !0
        }))
    }

    function k(j, Q) {
        const K = j.matched[j.matched.length - 1];
        if (K && K.redirect) {
            const {
                redirect: ee
            } = K;
            let fe = typeof ee == "function" ? ee(j, Q) : ee;
            return typeof fe == "string" && (fe = fe.includes("?") || fe.includes("#") ? fe = m(fe) : {
                path: fe
            }, fe.params = {}), ve({
                query: j.query,
                hash: j.hash,
                params: fe.path != null ? {} : j.params
            }, fe)
        }
    }

    function S(j, Q) {
        const K = c = y(j),
            ee = l.value,
            fe = j.state,
            Te = j.force,
            T = j.replace === !0,
            P = k(K, ee);
        if (P) return S(ve(m(P), {
            state: typeof P == "object" ? ve({}, fe, P.state) : fe,
            force: Te,
            replace: T
        }), Q || K);
        const I = K;
        I.redirectedFrom = Q;
        let U;
        return !Te && A1(r, ee, K) && (U = qs(We.NAVIGATION_DUPLICATED, {
            to: I,
            from: ee
        }), Ke(ee, ee, !0, !1)), (U ? Promise.resolve(U) : O(I, ee)).catch(B => Bn(B) ? Bn(B, We.NAVIGATION_GUARD_REDIRECT) ? B : it(B) : q(B, I, ee)).then(B => {
            if (B) {
                if (Bn(B, We.NAVIGATION_GUARD_REDIRECT)) return S(ve({
                    replace: T
                }, m(B.to), {
                    state: typeof B.to == "object" ? ve({}, fe, B.to.state) : fe,
                    force: Te
                }), Q || I)
            } else B = F(I, ee, !0, T, fe);
            return H(I, ee, B), B
        })
    }

    function L(j, Q) {
        const K = _(j, Q);
        return K ? Promise.reject(K) : Promise.resolve()
    }

    function x(j) {
        const Q = Ze.values().next().value;
        return Q && typeof Q.runWithContext == "function" ? Q.runWithContext(j) : j()
    }

    function O(j, Q) {
        let K;
        const [ee, fe, Te] = V1(j, Q);
        K = yl(ee.reverse(), "beforeRouteLeave", j, Q);
        for (const P of ee) P.leaveGuards.forEach(I => {
            K.push(hr(I, j, Q))
        });
        const T = L.bind(null, j, Q);
        return K.push(T), _t(K).then(() => {
            K = [];
            for (const P of i.list()) K.push(hr(P, j, Q));
            return K.push(T), _t(K)
        }).then(() => {
            K = yl(fe, "beforeRouteUpdate", j, Q);
            for (const P of fe) P.updateGuards.forEach(I => {
                K.push(hr(I, j, Q))
            });
            return K.push(T), _t(K)
        }).then(() => {
            K = [];
            for (const P of Te)
                if (P.beforeEnter)
                    if (mn(P.beforeEnter))
                        for (const I of P.beforeEnter) K.push(hr(I, j, Q));
                    else K.push(hr(P.beforeEnter, j, Q));
            return K.push(T), _t(K)
        }).then(() => (j.matched.forEach(P => P.enterCallbacks = {}), K = yl(Te, "beforeRouteEnter", j, Q, x), K.push(T), _t(K))).then(() => {
            K = [];
            for (const P of o.list()) K.push(hr(P, j, Q));
            return K.push(T), _t(K)
        }).catch(P => Bn(P, We.NAVIGATION_CANCELLED) ? P : Promise.reject(P))
    }

    function H(j, Q, K) {
        a.list().forEach(ee => x(() => ee(j, Q, K)))
    }

    function F(j, Q, K, ee, fe) {
        const Te = _(j, Q);
        if (Te) return Te;
        const T = Q === sn,
            P = Ts ? history.state : {};
        K && (ee || T ? s.replace(j.fullPath, ve({
            scroll: T && P && P.scroll
        }, fe)) : s.push(j.fullPath, fe)), l.value = j, Ke(j, Q, K, T), it()
    }
    let W;

    function Z() {
        W || (W = s.listen((j, Q, K) => {
            if (!ut.listening) return;
            const ee = y(j),
                fe = k(ee, ut.currentRoute.value);
            if (fe) {
                S(ve(fe, {
                    replace: !0,
                    force: !0
                }), ee).catch(Ri);
                return
            }
            c = ee;
            const Te = l.value;
            Ts && F1(kd(Te.fullPath, K.delta), $a()), O(ee, Te).catch(T => Bn(T, We.NAVIGATION_ABORTED | We.NAVIGATION_CANCELLED) ? T : Bn(T, We.NAVIGATION_GUARD_REDIRECT) ? (S(ve(m(T.to), {
                force: !0
            }), ee).then(P => {
                Bn(P, We.NAVIGATION_ABORTED | We.NAVIGATION_DUPLICATED) && !K.delta && K.type === mc.pop && s.go(-1, !1)
            }).catch(Ri), Promise.reject()) : (K.delta && s.go(-K.delta, !1), q(T, ee, Te))).then(T => {
                T = T || F(ee, Te, !1), T && (K.delta && !Bn(T, We.NAVIGATION_CANCELLED) ? s.go(-K.delta, !1) : K.type === mc.pop && Bn(T, We.NAVIGATION_ABORTED | We.NAVIGATION_DUPLICATED) && s.go(-1, !1)), H(ee, Te, T)
            }).catch(Ri)
        }))
    }
    let re = mi(),
        V = mi(),
        X;

    function q(j, Q, K) {
        it(j);
        const ee = V.list();
        return ee.length ? ee.forEach(fe => fe(j, Q, K)) : console.error(j), Promise.reject(j)
    }

    function ce() {
        return X && l.value !== sn ? Promise.resolve() : new Promise((j, Q) => {
            re.add([j, Q])
        })
    }

    function it(j) {
        return X || (X = !j, Z(), re.list().forEach(([Q, K]) => j ? K(j) : Q()), re.reset()), j
    }

    function Ke(j, Q, K, ee) {
        const {
            scrollBehavior: fe
        } = e;
        if (!Ts || !fe) return Promise.resolve();
        const Te = !K && $1(kd(j.fullPath, 0)) || (ee || !K) && history.state && history.state.scroll || null;
        return fs().then(() => fe(j, Q, Te)).then(T => T && D1(T)).catch(T => q(T, j, Q))
    }
    const Ie = j => s.go(j);
    let Bt;
    const Ze = new Set,
        ut = {
            currentRoute: l,
            listening: !0,
            addRoute: h,
            removeRoute: g,
            clearRoutes: t.clearRoutes,
            hasRoute: v,
            getRoutes: p,
            resolve: y,
            options: e,
            push: b,
            replace: w,
            go: Ie,
            back: () => Ie(-1),
            forward: () => Ie(1),
            beforeEach: i.add,
            beforeResolve: o.add,
            afterEach: a.add,
            onError: V.add,
            isReady: ce,
            install(j) {
                j.component("RouterLink", uS), j.component("RouterView", Am), j.config.globalProperties.$router = ut, Object.defineProperty(j.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => G(l)
                }), Ts && !Bt && l.value === sn && (Bt = !0, b(s.location).catch(ee => {}));
                const Q = {};
                for (const ee in sn) Object.defineProperty(Q, ee, {
                    get: () => l.value[ee],
                    enumerable: !0
                });
                j.provide(Au, ut), j.provide(ym, xn(Q)), j.provide(pc, l);
                const K = j.unmount;
                Ze.add(j), j.unmount = function() {
                    Ze.delete(j), Ze.size < 1 && (c = sn, W && W(), W = null, l.value = sn, Bt = !1, X = !1), K()
                }
            }
        };

    function _t(j) {
        return j.reduce((Q, K) => Q.then(() => x(K)), Promise.resolve())
    }
    return ut
}
const gS = (e, t) => ({
        default: () => e ? rt(Kv, e === !0 ? {} : e, t) : t.default ? .()
    }),
    mS = /(:\w+)\([^)]+\)/g,
    _S = /(:\w+)[?+*]/g,
    yS = /:\w+/g;

function $d(e) {
    const t = e ? .meta.key ? ? e.path.replace(mS, "$1").replace(_S, "$1").replace(yS, n => e.params[n.slice(1)] ? .toString() || "");
    return typeof t == "function" ? t(e) : t
}

function bS(e, t) {
    return e === t || t === sn ? !1 : $d(e) !== $d(t) ? !0 : !e.matched.every((r, s) => r.components && r.components.default === t.matched[s] ? .components ? .default)
}

function Bd(e) {
    return Array.isArray(e) ? e : [e]
}

function vS(e) {
    const t = [];
    for (const n of e) n && t.push({ ...n,
        onAfterLeave: n.onAfterLeave ? Bd(n.onAfterLeave) : void 0,
        onBeforeLeave: n.onBeforeLeave ? Bd(n.onBeforeLeave) : void 0
    });
    return Ia(...t)
}
const Lm = Symbol.for("nuxt:client-only"),
    HR = yn({
        name: "ClientOnly",
        inheritAttrs: !1,
        props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
        setup(e, {
            slots: t,
            attrs: n
        }) {
            const r = pn(!1);
            Lr(() => {
                r.value = !0
            });
            const s = Ft();
            return s && (s._nuxtClientOnly = !0), es(Lm, !0), () => {
                if (r.value) {
                    const l = t.default ? .();
                    return l && l.length === 1 ? [Nn(l[0], n)] : l
                }
                const i = t.fallback || t.placeholder;
                if (i) return rt(i);
                const o = e.fallback || e.placeholder || "",
                    a = e.fallbackTag || e.placeholderTag || "span";
                return Wt(a, n, o)
            }
        }
    }),
    Vi = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            n = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(n)
        }, 1)
    }),
    wS = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }),
    Ba = e => {
        const t = ue();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            Vi(() => e())
        }) : Vi(() => e())
    },
    ES = /\d/,
    SS = ["-", "_", "/", "."];

function TS(e = "") {
    if (!ES.test(e)) return e !== e.toLowerCase()
}

function Ru(e, t) {
    const n = SS,
        r = [];
    if (!e || typeof e != "string") return r;
    let s = "",
        i, o;
    for (const a of e) {
        const l = n.includes(a);
        if (l === !0) {
            r.push(s), s = "", i = void 0;
            continue
        }
        const c = TS(a);
        if (o === !1) {
            if (i === !1 && c === !0) {
                r.push(s), s = a, i = c;
                continue
            }
            if (i === !0 && c === !1 && s.length > 1) {
                const u = s.at(-1);
                r.push(s.slice(0, Math.max(0, s.length - 1))), s = u + a, i = c;
                continue
            }
        }
        s += a, i = c, o = l
    }
    return r.push(s), r
}

function Rm(e) {
    return e ? e[0].toUpperCase() + e.slice(1) : ""
}

function CS(e, t) {
    return e ? (Array.isArray(e) ? e : Ru(e)).map(n => Rm(t ? .normalize ? n.toLowerCase() : n)).join("") : ""
}

function UR(e, t) {
    return e ? (Array.isArray(e) ? e : Ru(e)).map(n => n.toLowerCase()).join("-") : ""
}
const kS = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;

function PS(e, t) {
    return (Array.isArray(e) ? e : Ru(e)).filter(Boolean).map(n => kS.test(n) ? n.toLowerCase() : Rm(n)).join(" ")
}

function Om(e) {
    return Object.defineProperty(function() {
        throw new Error(`[nuxt] \`${e.name}\` is a compiler macro and cannot be called at runtime.`)
    }, "__nuxt_factory", {
        enumerable: !1,
        get: () => e.factory
    })
}
const Mm = Om({
        name: "createUseAsyncData",
        factory(e = {}) {
            function t(...n) {
                const r = typeof n[n.length - 1] == "string" ? n.pop() : void 0;
                xS(n[0], n[1]) && n.unshift(r);
                let [s, i, o = {}] = n, a = !1;
                const l = Fe(s) || typeof s == "function",
                    c = l ? ne(() => Je(s)) : {
                        value: s
                    };
                if (!c.value || typeof c.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a non-empty string.");
                if (typeof i != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
                const u = typeof e == "function",
                    f = ue(),
                    d = u ? e(o) : e;
                if (!u)
                    for (const _ in d) d[_] !== void 0 && o[_] === void 0 && (o[_] = d[_]);
                if (o.server ? ? = !0, o.default ? ? = LS, o.getCachedData ? ? = Nm, o.lazy ? ? = !1, o.immediate ? ? = !0, o.deep ? ? = Lw.deep, o.dedupe ? ? = "cancel", u)
                    for (const _ in d) d[_] !== void 0 && (o[_] = d[_]);
                f._asyncData[c.value];

                function h() {
                    const _ = {
                            cause: "initial",
                            dedupe: o.dedupe
                        },
                        b = f._asyncData[c.value];
                    return b ? ._init ? _.cachedData = b._initialCachedData : (_.cachedData = o.getCachedData(c.value, f, {
                        cause: "initial"
                    }), f._asyncData[c.value] = jd(f, c.value, i, o, _.cachedData), f._asyncData[c.value]._initialCachedData = _.cachedData), () => f._asyncData[c.value].execute(_)
                }
                const g = h(),
                    p = f._asyncData[c.value];
                p._deps++;
                const v = o.server !== !1 && f.payload.serverRendered; {
                    let _ = function(O) {
                        const H = f._asyncData[O];
                        H ? ._deps && (H._deps--, H._deps === 0 && H ? ._off())
                    };
                    const b = Ft();
                    if (b && v && o.immediate && !b.sp && (b.sp = []), b && !b._nuxtOnBeforeMountCbs) {
                        b._nuxtOnBeforeMountCbs = [];
                        const O = b._nuxtOnBeforeMountCbs;
                        Bp(() => {
                            O.forEach(H => {
                                H()
                            }), O.splice(0, O.length)
                        }), ms(() => O.splice(0, O.length))
                    }
                    const w = b && (b._nuxtClientOnly || pt(Lm, !1));
                    v && f.isHydrating && (p.error.value || p.data.value !== void 0) ? p.status.value = p.error.value ? "error" : "success" : b && (!w && f.payload.serverRendered && f.isHydrating || o.lazy) && o.immediate ? b._nuxtOnBeforeMountCbs.push(g) : o.immediate && p.status.value !== "success" && g();
                    const k = Ar(),
                        S = () => {},
                        L = l ? gt(c, (O, H) => {
                            if ((O || H) && O !== H) {
                                a = !0;
                                const F = f._asyncData[H] ? .data.value !== void 0,
                                    W = f._asyncDataPromises[H] !== void 0,
                                    Z = {
                                        cause: "initial",
                                        dedupe: o.dedupe
                                    };
                                if (!f._asyncData[O] ? ._init) {
                                    let V;
                                    H && F ? V = f._asyncData[H].data.value : (V = o.getCachedData(O, f, {
                                        cause: "initial"
                                    }), Z.cachedData = V), f._asyncData[O] = jd(f, O, i, o, V)
                                }
                                f._asyncData[O]._deps++, H && _(H), o._keyTriggersExecute !== !1 && (o.immediate || F || W) && f._asyncData[O].execute(Z), Fi(() => {
                                    a = !1
                                })
                            }
                        }, {
                            flush: "sync"
                        }) : S,
                        x = o.watch ? gt(o.watch, () => {
                            a || (f._asyncData[c.value] ? ._execute.isPending() && Fi(() => {
                                f._asyncData[c.value] ? ._execute.flush()
                            }), f._asyncData[c.value] ? ._execute({
                                cause: "watch",
                                dedupe: o.dedupe
                            }))
                        }) : S;
                    k && us(() => {
                        L(), x(), _(c.value)
                    })
                }
                const y = {
                        data: Eo(() => f._asyncData[c.value] ? .data),
                        pending: Eo(() => f._asyncData[c.value] ? .pending),
                        status: Eo(() => f._asyncData[c.value] ? .status),
                        error: Eo(() => f._asyncData[c.value] ? .error),
                        refresh: (..._) => f._asyncData[c.value] ? ._init ? f._asyncData[c.value].execute(..._) : h()(),
                        execute: (..._) => y.refresh(..._),
                        clear: () => {
                            const _ = f._asyncData[c.value];
                            if (_ ? ._abortController) try {
                                _._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"))
                            } finally {
                                _._abortController = void 0
                            }
                            Im(f, c.value)
                        }
                    },
                    m = Promise.resolve(f._asyncDataPromises[c.value]).then(() => y);
                return Object.assign(m, y), Object.defineProperties(m, {
                    then: {
                        enumerable: !0,
                        value: m.then.bind(m)
                    },
                    catch: {
                        enumerable: !0,
                        value: m.catch.bind(m)
                    },
                    finally: {
                        enumerable: !0,
                        value: m.finally.bind(m)
                    }
                }), m
            }
            return t
        }
    }),
    Ou = Mm.__nuxt_factory();
Mm.__nuxt_factory({
    lazy: !0,
    _functionName: "useLazyAsyncData"
});

function Eo(e) {
    return ne({
        get() {
            return e() ? .value
        },
        set(t) {
            const n = e();
            n && (n.value = t)
        }
    })
}

function xS(e, t) {
    return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function")
}

function VR(e) {
    const t = ue();
    if (e in t.payload.data || (t.payload.data[e] = void 0), t._asyncData[e]) {
        const n = t._asyncData[e];
        n._deps++, Ar() && us(() => {
            n._deps--, n._deps === 0 && n ? ._off()
        })
    }
    return {
        data: ne({
            get() {
                return t._asyncData[e] ? .data.value ? ? t.payload.data[e]
            },
            set(n) {
                t._asyncData[e] ? t._asyncData[e].data.value = n : t.payload.data[e] = n
            }
        })
    }
}

function Im(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = void 0), e._asyncData[t] && (e._asyncData[t].data.value = G(e._asyncData[t]._default()), e._asyncData[t].error.value = void 0, e._asyncData[t].status.value = "idle", e._asyncData[t]._initialCachedData = void 0), t in e._asyncDataPromises && (e._asyncDataPromises[t] = void 0)
}

function AS(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n
}

function jd(e, t, n, r, s) {
    e.payload._errors[t] ? ? = void 0;
    const i = r.getCachedData !== Nm,
        o = n,
        a = r.deep ? lt : pn,
        l = s !== void 0,
        c = e.hook("app:data:refresh", async f => {
            (!f || f.includes(t)) && await u.execute({
                cause: "refresh:hook"
            })
        }),
        u = {
            data: a(l ? s : r.default()),
            pending: ne(() => u.status.value === "pending"),
            error: gu(e.payload._errors, t),
            status: pn("idle"),
            execute: (...f) => {
                const [d, h = void 0] = f, g = d && h === void 0 && typeof d == "object" ? d : {};
                if (e._asyncDataPromises[t] && (g.dedupe ? ? r.dedupe) === "defer") return e._asyncDataPromises[t]; {
                    const y = "cachedData" in g ? g.cachedData : r.getCachedData(t, e, {
                        cause: g.cause ? ? "refresh:manual"
                    });
                    if (y !== void 0) return e.payload.data[t] = u.data.value = y, u.error.value = void 0, u.status.value = "success", Promise.resolve(y)
                }
                u._abortController && u._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError")), u._abortController = new AbortController, u.status.value = "pending";
                const p = new AbortController,
                    v = new Promise((y, m) => {
                        try {
                            const _ = g.timeout ? ? r.timeout,
                                b = RS([u._abortController ? .signal, g ? .signal], p.signal, _);
                            if (b.aborted) {
                                const w = b.reason;
                                m(w instanceof Error ? w : new DOMException(String(w ? ? "Aborted"), "AbortError"));
                                return
                            }
                            return b.addEventListener("abort", () => {
                                const w = b.reason;
                                m(w instanceof Error ? w : new DOMException(String(w ? ? "Aborted"), "AbortError"))
                            }, {
                                once: !0,
                                signal: p.signal
                            }), Promise.resolve(o(e, {
                                signal: b
                            })).then(y, m)
                        } catch (_) {
                            m(_)
                        }
                    }).then(async y => {
                        if (e._asyncDataPromises[t] !== v) return;
                        let m = y;
                        r.transform && (m = await r.transform(y)), r.pick && (m = AS(m, r.pick)), e.payload.data[t] = m, u.data.value = m, u.error.value = void 0, u.status.value = "success"
                    }).catch(y => {
                        if (e._asyncDataPromises[t] !== v || u._abortController ? .signal.aborted) return e._asyncDataPromises[t];
                        if (typeof DOMException < "u" && y instanceof DOMException && y.name === "AbortError") return u.status.value = "idle", e._asyncDataPromises[t];
                        u.error.value = vr(y), u.data.value = G(r.default()), u.status.value = "error"
                    }).finally(() => {
                        p.abort(), e._asyncDataPromises[t] === v && delete e._asyncDataPromises[t]
                    });
                return e._asyncDataPromises[t] = v, e._asyncDataPromises[t]
            },
            _execute: l1((...f) => u.execute(...f), 0, {
                leading: !0
            }),
            _default: r.default,
            _deps: 0,
            _init: !0,
            _hash: void 0,
            _off: () => {
                c(), e._asyncData[t] ? ._init && (e._asyncData[t]._init = !1), i || fs(() => {
                    e._asyncData[t] ? ._init || (Im(e, t), u.execute = () => Promise.resolve())
                })
            }
        };
    return u
}
const LS = () => {},
    Nm = (e, t, n) => {
        if (t.isHydrating) return t.payload.data[e];
        if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook") return t.static.data[e]
    };

function RS(e, t, n) {
    const r = e.filter(o => !!o);
    if (typeof n == "number" && n >= 0) {
        const o = AbortSignal.timeout ? .(n);
        o && r.push(o)
    }
    if (AbortSignal.any) return AbortSignal.any(r);
    const s = new AbortController;
    for (const o of r)
        if (o.aborted) {
            const a = o.reason ? ? new DOMException("Aborted", "AbortError");
            try {
                s.abort(a)
            } catch {
                s.abort()
            }
            return s.signal
        }
    const i = () => {
        const a = r.find(l => l.aborted) ? .reason ? ? new DOMException("Aborted", "AbortError");
        try {
            s.abort(a)
        } catch {
            s.abort()
        }
    };
    for (const o of r) o.addEventListener ? .("abort", i, {
        once: !0,
        signal: t
    });
    return s.signal
}
const OS = "$s";

function Rr(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const s = OS + n,
        i = ue(),
        o = gu(i.payload.state, s);
    if (r && (i._state[s] ? ? = {
            _default: r
        }), o.value === void 0 && r) {
        const a = r();
        if (Fe(a)) return i.payload.state[s] = a, a;
        o.value = a
    }
    return o
}

function MS(e) {
    const t = [Je(e.method) ? .toUpperCase() || "GET", Je(e.baseURL)];
    for (const n of [e.query || e.params]) {
        const r = Je(n);
        if (!r) continue;
        const s = {};
        for (const [i, o] of Object.entries(r)) s[Je(i)] = Je(o);
        t.push(s)
    }
    if (e.body) {
        const n = Je(e.body);
        if (!n) t.push(Ss(n));
        else if (n instanceof ArrayBuffer) t.push(Ss(Object.fromEntries([...new Uint8Array(n).entries()].map(([r, s]) => [r, s.toString()]))));
        else if (n instanceof FormData) {
            const r = [];
            for (const s of n.entries()) {
                const [i, o] = s;
                r.push([i, o instanceof File ? `${o.name}:${o.size}:${o.lastModified}` : o])
            }
            t.push(Ss(r))
        } else if (ou(n)) t.push(Ss(_n(n)));
        else try {
            t.push(Ss(n))
        } catch {
            console.warn("[useFetch] Failed to hash body", n)
        }
    }
    return t
}
const Dm = Om({
    name: "createUseFetch",
    factory(e = {}) {
        function t(n, r, s) {
            const [i = {}, o] = typeof r == "string" ? [{}, r] : [r, s], a = typeof e == "function" ? e(i) : e, {
                server: l,
                lazy: c,
                default: u,
                transform: f,
                pick: d,
                watch: h,
                immediate: g,
                getCachedData: p,
                deep: v,
                dedupe: y,
                timeout: m,
                ..._
            } = { ...typeof e == "function" ? {} : a,
                ...i,
                ...typeof e == "function" ? a : {}
            }, b = ne(() => Je(n)), w = ne(() => Je(_.key) || "$f" + Ss([o, typeof b.value == "string" ? b.value : "", ...MS(_)]));
            if (!_.baseURL && typeof b.value == "string" && b.value[0] === "/" && b.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
            const k = _n({ ...Rw,
                    ..._,
                    cache: typeof _.cache == "boolean" ? void 0 : _.cache
                }),
                S = {
                    server: l,
                    lazy: c,
                    default: u,
                    transform: f,
                    pick: d,
                    immediate: g,
                    getCachedData: p,
                    deep: v,
                    dedupe: y,
                    timeout: m,
                    watch: h === !1 ? [] : [...h || [], k]
                };
            return h === !1 && (S._keyTriggersExecute = !1), Ou(w, (x, {
                signal: O
            }) => (_.$fetch || globalThis.$fetch)(b.value, {
                signal: O,
                ...k
            }), S)
        }
        return t
    }
});
Dm.__nuxt_factory();
Dm.__nuxt_factory({
    lazy: !0,
    _functionName: "useLazyFetch"
});
const IS = 3456e4;

function NS(e, t, n) {
    const r = e.indexOf(";", t);
    return r === -1 ? n : r
}

function DS(e, t, n) {
    const r = e.indexOf("=", t);
    return r < n ? r : -1
}

function Hd(e, t, n) {
    if (t === n) return "";
    let r = t,
        s = n;
    do {
        const i = e.charCodeAt(r);
        if (i !== 32 && i !== 9) break
    } while (++r < s);
    for (; s > r;) {
        const i = e.charCodeAt(s - 1);
        if (i !== 32 && i !== 9) break;
        s--
    }
    return e.slice(r, s)
}
const FS = (() => {
    const e = function() {};
    return e.prototype = Object.create(null), e
})();

function $S(e, t) {
    const n = new FS,
        r = e.length;
    if (r < 2) return n;
    const s = t ? .decode || BS,
        i = t ? .allowMultiple || !1;
    let o = 0;
    do {
        const a = DS(e, o, r);
        if (a === -1) break;
        const l = NS(e, o, r);
        if (a > l) {
            o = e.lastIndexOf(";", a - 1) + 1;
            continue
        }
        const c = Hd(e, o, a);
        if (t ? .filter && !t.filter(c)) {
            o = l + 1;
            continue
        }
        const u = s(Hd(e, a + 1, l));
        if (i) {
            const f = n[c];
            f === void 0 ? n[c] = u : Array.isArray(f) ? f.push(u) : n[c] = [f, u]
        } else n[c] === void 0 && (n[c] = u);
        o = l + 1
    } while (o < r);
    return n
}

function BS(e) {
    if (!e.includes("%")) return e;
    try {
        return decodeURIComponent(e)
    } catch {
        return e
    }
}
const jS = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    HS = /^[\u0021-\u003A\u003C-\u007E]*$/,
    US = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    VS = /^[\u0020-\u003A\u003C-\u007E]*$/,
    WS = Object.prototype.toString;

function Ud(e, t, n) {
    const r = typeof e == "object" && e !== null,
        s = r ? t : n,
        i = s ? .stringify || JSON.stringify,
        o = r ? e : { ...n,
            name: e,
            value: t == null ? "" : typeof t == "string" ? t : i(t)
        },
        a = s ? .encode || encodeURIComponent;
    if (!jS.test(o.name)) throw new TypeError(`argument name is invalid: ${o.name}`);
    const l = o.value ? a(o.value) : "";
    if (!HS.test(l)) throw new TypeError(`argument val is invalid: ${o.value}`);
    if (!o.secure) {
        if (o.partitioned) throw new TypeError("Partitioned cookies must have the Secure attribute");
        if (o.sameSite && String(o.sameSite).toLowerCase() === "none") throw new TypeError("SameSite=None cookies must have the Secure attribute");
        if (o.name.length > 9 && o.name.charCodeAt(0) === 95 && o.name.charCodeAt(1) === 95) {
            const u = o.name.toLowerCase();
            if (u.startsWith("__secure-") || u.startsWith("__host-")) throw new TypeError(`${o.name} cookies must have the Secure attribute`)
        }
    }
    if (o.name.length > 7 && o.name.charCodeAt(0) === 95 && o.name.charCodeAt(1) === 95 && o.name.toLowerCase().startsWith("__host-")) {
        if (o.path !== "/") throw new TypeError("__Host- cookies must have Path=/");
        if (o.domain) throw new TypeError("__Host- cookies must not have a Domain attribute")
    }
    let c = o.name + "=" + l;
    if (o.maxAge !== void 0) {
        if (!Number.isInteger(o.maxAge)) throw new TypeError(`option maxAge is invalid: ${o.maxAge}`);
        c += "; Max-Age=" + Math.max(0, Math.min(o.maxAge, IS))
    }
    if (o.domain) {
        if (!US.test(o.domain)) throw new TypeError(`option domain is invalid: ${o.domain}`);
        c += "; Domain=" + o.domain
    }
    if (o.path) {
        if (!VS.test(o.path)) throw new TypeError(`option path is invalid: ${o.path}`);
        c += "; Path=" + o.path
    }
    if (o.expires) {
        if (!zS(o.expires) || !Number.isFinite(o.expires.valueOf())) throw new TypeError(`option expires is invalid: ${o.expires}`);
        c += "; Expires=" + o.expires.toUTCString()
    }
    if (o.httpOnly && (c += "; HttpOnly"), o.secure && (c += "; Secure"), o.partitioned && (c += "; Partitioned"), o.priority) switch (typeof o.priority == "string" ? o.priority.toLowerCase() : void 0) {
        case "low":
            c += "; Priority=Low";
            break;
        case "medium":
            c += "; Priority=Medium";
            break;
        case "high":
            c += "; Priority=High";
            break;
        default:
            throw new TypeError(`option priority is invalid: ${o.priority}`)
    }
    if (o.sameSite) switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
        case !0:
        case "strict":
            c += "; SameSite=Strict";
            break;
        case "lax":
            c += "; SameSite=Lax";
            break;
        case "none":
            c += "; SameSite=None";
            break;
        default:
            throw new TypeError(`option sameSite is invalid: ${o.sameSite}`)
    }
    return c
}

function zS(e) {
    return WS.call(e) === "[object Date]"
}

function un(e) {
    if (typeof e != "object") return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = un(e[t]))
        } else {
            n = {};
            for (t in e) t === "__proto__" ? Object.defineProperty(n, t, {
                value: un(e[t]),
                configurable: !0,
                enumerable: !0,
                writable: !0
            }) : n[t] = un(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length, n = Array(t); t--;) n[t] = un(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set, e.forEach(function(s) {
        n.add(un(s))
    }), n) : r === "[object Map]" ? (n = new Map, e.forEach(function(s, i) {
        n.set(un(i), un(s))
    }), n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(un(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}

function qS(e) {
    if (e !== "undefined") try {
        const t = JSON.parse(e);
        return typeof t == "number" && String(t) !== e ? e : t
    } catch {
        return e
    }
}
const GS = {
        path: "/",
        watch: !0,
        decode: e => e && qS(decodeURIComponent(e)),
        encode: e => {
            if (typeof e != "string" || e === "undefined") return encodeURIComponent(JSON.stringify(e));
            try {
                if (typeof JSON.parse(e) != "string") return encodeURIComponent(JSON.stringify(e))
            } catch {}
            return encodeURIComponent(e)
        },
        refresh: !1
    },
    So = globalThis.cookieStore;

function Mu(e, t) {
    const n = { ...GS,
        ...t
    };
    n.filter ? ? = c => c === e;
    const r = Vd(n) || {};
    let s;
    n.maxAge !== void 0 ? s = n.maxAge * 1e3 : n.expires && (s = n.expires.getTime() - Date.now());
    const i = s !== void 0 && s <= 0,
        o = i || r[e] === void 0 || r[e] === null,
        a = un(i ? void 0 : r[e] ? ? n.default ? .()),
        l = s && !i ? QS(a, s, n.watch && n.watch !== "shallow") : lt(a); {
        let c = null;
        try {
            !So && typeof BroadcastChannel < "u" && (c = new BroadcastChannel(`nuxt:cookies:${e}`))
        } catch {}
        const u = (g = !1) => {
                if (!g && (n.readonly || t1(l.value, r[e]))) return;
                const p = l.value === null || l.value === void 0 ? void 0 : n.encode(l.value);
                JS(e, p, n), r[e] = un(l.value), c ? .postMessage({
                    value: n.encode(l.value)
                })
            },
            f = g => {
                const p = g.refresh ? Vd(n) ? .[e] : n.decode(g.value);
                d = !0, l.value = p, r[e] = un(p), fs(() => {
                    d = !1
                })
            };
        let d = !1;
        const h = !!Ar();
        if (h && us(() => {
                d = !0, u(), c ? .close()
            }), So) {
            const g = p => {
                const v = p.changed.find(m => m.name === e),
                    y = p.deleted.find(m => m.name === e);
                v && f({
                    value: v.value
                }), y && f({
                    value: null
                })
            };
            So.addEventListener("change", g), h && us(() => So.removeEventListener("change", g))
        } else c && (c.onmessage = ({
            data: g
        }) => f(g));
        n.watch && gt(l, () => {
            d || u(n.refresh)
        }, {
            deep: n.watch !== "shallow"
        }), o && u(o)
    }
    return l
}

function Vd(e = {}) {
    return $S(document.cookie, e)
}
const KS = e => e;

function YS(e) {
    const {
        encode: t,
        decode: n,
        ...r
    } = e;
    return { ...r,
        encode: KS
    }
}

function XS(e, t, n = {}) {
    const r = YS(n);
    return t === void 0 ? Ud(e, "", { ...r,
        maxAge: -1
    }) : Ud(e, t, r)
}

function JS(e, t, n = {}) {
    document.cookie = XS(e, t, n)
}
const Wd = 2147483647;

function QS(e, t, n) {
    let r, s, i = 0;
    const o = n ? lt(e) : {
        value: e
    };
    return Ar() && us(() => {
        s ? .(), clearTimeout(r)
    }), Eb((a, l) => {
        n && (s = gt(o, l));

        function c() {
            const f = t - i,
                d = f < Wd ? f : Wd;
            r = setTimeout(() => {
                if (i += d, i < t) return c();
                o.value = void 0, l()
            }, d)
        }

        function u() {
            i = 0, clearTimeout(r), c()
        }
        return {
            get() {
                return a(), o.value
            },
            set(f) {
                u(), o.value = f, l()
            }
        }
    })
}

function ZS(e) {
    if (e ? .__asyncLoader && !e.__asyncResolved) return e.__asyncLoader()
}
async function Fm(e, t = Pt()) {
    const {
        path: n,
        matched: r
    } = t.resolve(e);
    if (!r.length || (t._routePreloaded || = new Set, t._routePreloaded.has(n))) return;
    const s = t._preloadPromises || = [];
    if (s.length > 4) return Promise.all(s).then(() => Fm(e, t));
    t._routePreloaded.add(n);
    for (const i of r) {
        const o = i.components ? .default;
        if (typeof o != "function") continue;
        const a = Promise.resolve(o()).catch(() => {}).finally(() => s.splice(s.indexOf(a), 1));
        s.push(a)
    }
    await Promise.all(s)
}

function eT(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = JSON.parse(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || n ? .path !== t || n ? .expires < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ? ? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: ue().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}

function $m(e) {
    return new URL(globalThis.location.href)
}
const tT = {
    scrollBehavior(e, t, n) {
        const r = ue(),
            s = Pt().options ? .scrollBehaviorType ? ? "auto";
        return e.path.replace(/\/$/, "") === t.path.replace(/\/$/, "") ? t.hash && !e.hash ? {
            left: 0,
            top: 0
        } : e.hash ? {
            el: e.hash,
            top: Bm(e.hash),
            behavior: s
        } : !1 : (typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1 ? !1 : t === sn ? zd(e, t, n, s) : new Promise(o => {
            const a = () => {
                requestAnimationFrame(() => o(zd(e, t, n, s)))
            };
            r.hooks.hookOnce("page:loading:end", () => {
                const l = r["~transitionPromise"];
                l ? l.then(a) : a()
            })
        })
    }
};

function Bm(e) {
    try {
        const t = document.querySelector(e);
        if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}

function zd(e, t, n, r) {
    return n || (e.hash ? {
        el: e.hash,
        top: Bm(e.hash),
        behavior: bS(e, t) ? r : "instant"
    } : {
        left: 0,
        top: 0
    })
}
const nT = {
        hashMode: !1,
        scrollBehaviorType: "auto"
    },
    cr = { ...nT,
        ...tT
    },
    rT = (...e) => e.find(t => t !== void 0);

function sT(e) {
    const t = e.componentName || "NuxtLink";

    function n(i) {
        return typeof i == "string" && i.startsWith("#")
    }

    function r(i, o, a) {
        const l = a ? ? e.trailingSlash;
        if (!i || l !== "append" && l !== "remove") return i;
        if (typeof i == "string") return To(i, l);
        const c = "path" in i && i.path !== void 0 ? i.path : o(i).path;
        return { ...i,
            name: void 0,
            path: To(c, l)
        }
    }

    function s(i) {
        const o = Pt(),
            a = At(),
            l = ne(() => !!G(i.target) && G(i.target) !== "_self"),
            c = ne(() => {
                const v = G(i.to) || G(i.href) || "";
                return typeof v == "string" && xt(v, {
                    acceptRelative: !0
                })
            }),
            u = Af("RouterLink"),
            f = u && typeof u != "string" ? u.useLink : void 0,
            d = ne(() => {
                if (G(i.external)) return !0;
                const v = G(i.to) || G(i.href) || "";
                return typeof v == "object" ? !1 : v === "" || c.value
            }),
            h = ne(() => {
                const v = G(i.to) || G(i.href) || "";
                return d.value ? v : r(v, o.resolve, G(i.trailingSlash))
            }),
            g = d.value ? void 0 : f ? .({ ...i,
                to: h,
                viewTransition: G(i.viewTransition)
            }),
            p = ne(() => {
                const v = G(i.trailingSlash) ? ? e.trailingSlash;
                if (!h.value || c.value || n(h.value)) return h.value;
                if (d.value) {
                    const y = typeof h.value == "object" && "path" in h.value ? oc(h.value) : h.value,
                        m = typeof y == "object" ? o.resolve(y).href : y;
                    return To(m, v)
                }
                return typeof h.value == "object" ? o.resolve(h.value) ? .href ? ? null : To(sr(a.app.baseURL, h.value), v)
            });
        return {
            to: h,
            hasTarget: l,
            isAbsoluteUrl: c,
            isExternal: d,
            href: p,
            isActive: g ? .isActive ? ? ne(() => h.value === o.currentRoute.value.path),
            isExactActive: g ? .isExactActive ? ? ne(() => h.value === o.currentRoute.value.path),
            route: g ? .route ? ? ne(() => o.resolve(h.value)),
            async navigate(v) {
                await ic(p.value, {
                    replace: G(i.replace),
                    external: d.value || l.value
                })
            }
        }
    }
    return yn({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetchOn: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            trailingSlash: {
                type: String,
                default: void 0,
                required: !1
            }
        },
        useLink: s,
        setup(i, {
            slots: o
        }) {
            const a = Pt(),
                {
                    to: l,
                    href: c,
                    navigate: u,
                    isExternal: f,
                    hasTarget: d,
                    isAbsoluteUrl: h
                } = s(i),
                g = pn(!1),
                p = lt(null),
                v = _ => {
                    p.value = i.custom ? _ ? .$el ? .nextElementSibling : _ ? .$el
                };

            function y(_) {
                return !g.value && (typeof i.prefetchOn == "string" ? i.prefetchOn === _ : i.prefetchOn ? .[_] ? ? e.prefetchOn ? .[_]) && (i.prefetch ? ? e.prefetch) !== !1 && i.noPrefetch !== !0 && i.target !== "_blank" && !aT()
            }
            async function m(_ = ue()) {
                if (g.value) return;
                g.value = !0;
                const b = typeof l.value == "string" ? l.value : f.value ? oc(l.value) : a.resolve(l.value).fullPath,
                    w = f.value ? new URL(b, window.location.href).href : b;
                await Promise.all([_.hooks.callHook("link:prefetch", w) ? .catch(() => {}), !f.value && !d.value && Fm(l.value, a).catch(() => {})])
            }
            if (y("visibility")) {
                const _ = ue();
                let b, w = null;
                Lr(() => {
                    const k = iT();
                    Ba(() => {
                        b = Vi(() => {
                            p ? .value ? .tagName && (w = k.observe(p.value, async () => {
                                w ? .(), w = null, await m(_)
                            }))
                        })
                    })
                }), si(() => {
                    b && wS(b), w ? .(), w = null
                })
            }
            return () => {
                if (!f.value && !d.value && !n(l.value)) {
                    const w = {
                        ref: v,
                        to: l.value,
                        activeClass: i.activeClass || e.activeClass,
                        exactActiveClass: i.exactActiveClass || e.exactActiveClass,
                        replace: i.replace,
                        ariaCurrentValue: i.ariaCurrentValue,
                        custom: i.custom
                    };
                    return i.custom || (y("interaction") && (w.onPointerenter = m.bind(null, void 0), w.onFocus = m.bind(null, void 0)), g.value && (w.class = i.prefetchedClass || e.prefetchedClass), w.rel = i.rel || void 0), rt(Af("RouterLink"), w, o.default)
                }
                const _ = i.target || null,
                    b = rT(i.noRel ? "" : i.rel, e.externalRelAttribute, h.value || d.value ? "noopener noreferrer" : "") || null;
                return i.custom ? o.default ? o.default({
                    href: c.value,
                    navigate: u,
                    prefetch: m,
                    get route() {
                        if (!c.value) return;
                        const w = new URL(c.value, window.location.href);
                        return {
                            path: w.pathname,
                            fullPath: w.pathname,
                            get query() {
                                return Oa(w.search)
                            },
                            hash: w.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: c.value
                        }
                    },
                    rel: b,
                    target: _,
                    isExternal: f.value || d.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : rt("a", {
                    ref: p,
                    href: c.value || null,
                    rel: b,
                    target: _,
                    onClick: async w => {
                        if (!(f.value || d.value)) {
                            w.preventDefault();
                            try {
                                const k = Kg(c.value);
                                return await (i.replace ? a.replace(k) : a.push(k))
                            } finally {
                                if (n(l.value)) {
                                    const k = l.value.slice(1);
                                    let S = k;
                                    try {
                                        S = decodeURIComponent(k)
                                    } catch {}
                                    document.getElementById(S) ? .focus()
                                }
                            }
                        }
                    }
                }, o.default ? .())
            }
        }
    })
}
const ta = sT(Aw);

function To(e, t) {
    const n = t === "append" ? gs : rr;
    return xt(e) && !e.startsWith("http") ? e : n(e, !0)
}

function iT() {
    const e = ue();
    if (e._observer) return e._observer;
    let t = null;
    const n = new Map,
        r = (i, o) => (t || = new IntersectionObserver(a => {
            for (const l of a) {
                const c = n.get(l.target);
                (l.isIntersecting || l.intersectionRatio > 0) && c && c()
            }
        }), n.set(i, o), t.observe(i), () => {
            n.delete(i), t ? .unobserve(i), n.size === 0 && (t ? .disconnect(), t = null)
        });
    return e._observer = {
        observe: r
    }
}
const oT = /2g/;

function aT() {
    const e = navigator.connection;
    return !!(e && (e.saveData || oT.test(e.effectiveType)))
}
const lT = {
    build: -1
};

function cT(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !xt(String(e.url), {
        acceptRelative: !0,
        strict: !1
    }) && (e.url = X0(String(e.url)));
    const t = Object.keys(e).sort((r, s) => r.localeCompare(s)),
        n = {};
    for (const r of t) n[r] = e[r];
    return n
}

function uT(e) {
    const n = [];

    function r(i) {
        if (!i || typeof i != "object" || Object.keys(i).length === 0) return () => {};
        i._context;
        const o = {};
        for (const a in i) {
            const l = i[a];
            typeof l < "u" && l !== "" && (o[a] = l)
        }
        return Object.keys(o).filter(a => !a.startsWith("_")).length === 0 ? () => {} : (n.push(o), () => {
            const a = n.indexOf(o);
            a !== -1 && n.splice(a, 1)
        })
    }

    function s(i) {
        const o = {};
        i ? .debug && (o._context = {}), o._priority = {};
        for (const a in n.sort((l, c) => (l._priority || 0) - (c._priority || 0)))
            for (const l in n[a]) {
                const c = l,
                    u = i ? .resolveRefs ? Je(n[a][l]) : n[a][l];
                !l.startsWith("_") && typeof u < "u" && u !== "" && (o[l] = u, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (o._priority[c] = n[a]._priority), i ? .debug && (o._context[c] = n[a]._context ? .[c] || n[a]._context || "anonymous"))
            }
        return i ? .skipNormalize ? o : cT(o)
    }
    return {
        stack: n,
        push: r,
        get: s
    }
}
const fT = xe({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
        const t = uT(),
            n = Rr("site-config"); {
            const r = n.value || window.__NUXT_SITE_CONFIG__ || {};
            for (const s in r) s[0] !== "_" && t.push({
                [s]: r[s],
                _priority: r._priority ? .[s] || -1
            })
        }
        return {
            provide: {
                nuxtSiteConfig: t
            }
        }
    }
});
async function Iu(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async s => {
        const i = new Map,
            o = new Promise(h => {
                e.resolveTags().then(g => {
                    h(g.map(p => {
                        const v = i.get(p._d) || 0,
                            y = {
                                tag: p,
                                id: (v ? `${p._d}:${v}` : p._d) || p._h,
                                shouldRender: !0
                            };
                        return p._d && sm(p._d) && i.set(p._d, v + 1), y
                    }))
                })
            });
        let a = e._dom;
        if (!a) {
            a = {
                title: n.title,
                elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
            };
            for (const h of ["body", "head"]) {
                const g = n[h] ? .children;
                for (const p of g) {
                    const v = p.tagName.toLowerCase();
                    if (!lc.has(v)) continue;
                    const y = om({
                        tag: v,
                        props: {}
                    }, {
                        innerHTML: p.innerHTML,
                        ...p.getAttributeNames().reduce((m, _) => (m[_] = p.getAttribute(_), m), {}) || {}
                    });
                    if (y.key = p.getAttribute("data-hid") || void 0, y._d = fc(y) || im(y), a.elMap.has(y._d)) {
                        let m = 1,
                            _ = y._d;
                        for (; a.elMap.has(_);) _ = `${y._d}:${m++}`;
                        a.elMap.set(_, p)
                    } else a.elMap.set(y._d, p)
                }
            }
        }
        a.pendingSideEffects = { ...a.sideEffects
        }, a.sideEffects = {};

        function l(h, g, p) {
            const v = `${h}:${g}`;
            a.sideEffects[v] = p, delete a.pendingSideEffects[v]
        }

        function c({
            id: h,
            $el: g,
            tag: p
        }) {
            const v = p.tag.endsWith("Attrs");
            a.elMap.set(h, g), v || (p.textContent && p.textContent !== g.textContent && (g.textContent = p.textContent), p.innerHTML && p.innerHTML !== g.innerHTML && (g.innerHTML = p.innerHTML), l(h, "el", () => {
                g ? .remove(), a.elMap.delete(h)
            }));
            for (const y in p.props) {
                if (!Object.prototype.hasOwnProperty.call(p.props, y)) continue;
                const m = p.props[y];
                if (y.startsWith("on") && typeof m == "function") {
                    const b = g ? .dataset;
                    if (b && b[`${y}fired`]) {
                        const w = y.slice(0, -5);
                        m.call(g, new Event(w.substring(2)))
                    }
                    g.getAttribute(`data-${y}`) !== "" && ((p.tag === "bodyAttrs" ? n.defaultView : g).addEventListener(y.substring(2), m.bind(g)), g.setAttribute(`data-${y}`, ""));
                    continue
                }
                const _ = `attr:${y}`;
                if (y === "class") {
                    if (!m) continue;
                    for (const b of m) v && l(h, `${_}:${b}`, () => g.classList.remove(b)), !g.classList.contains(b) && g.classList.add(b)
                } else if (y === "style") {
                    if (!m) continue;
                    for (const [b, w] of m) l(h, `${_}:${b}`, () => {
                        g.style.removeProperty(b)
                    }), g.style.setProperty(b, w)
                } else m !== !1 && m !== null && (g.getAttribute(y) !== m && g.setAttribute(y, m === !0 ? "" : String(m)), v && l(h, _, () => g.removeAttribute(y)))
            }
        }
        const u = [],
            f = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            },
            d = await o;
        for (const h of d) {
            const {
                tag: g,
                shouldRender: p,
                id: v
            } = h;
            if (p) {
                if (g.tag === "title") {
                    n.title = g.textContent, l("title", "", () => n.title = a.title);
                    continue
                }
                h.$el = h.$el || a.elMap.get(v), h.$el ? c(h) : lc.has(g.tag) && u.push(h)
            }
        }
        for (const h of u) {
            const g = h.tag.tagPosition || "head";
            h.$el = n.createElement(h.tag.tag), c(h), f[g] = f[g] || n.createDocumentFragment(), f[g].appendChild(h.$el)
        }
        for (const h of d) await e.hooks.callHook("dom:renderTag", h, n, l);
        f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
        for (const h in a.pendingSideEffects) a.pendingSideEffects[h]();
        e._dom = a, await e.hooks.callHook("dom:rendered", {
            renders: d
        }), s()
    }).finally(() => {
        e._domUpdatePromise = void 0, e.dirty = !1
    })), e._domUpdatePromise
}

function dT(e = {}) {
    const t = e.domOptions ? .render || Iu;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = e.document ? .head.querySelector('script[id="unhead:payload"]') ? .innerHTML || !1;
    return ME({ ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...e.init || []]
    })
}

function hT(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t(() => {
            n === r && e()
        })
    }
}

function pT(e = {}) {
    const t = dT({
        domOptions: {
            render: hT(() => Iu(t), n => setTimeout(n, 0))
        },
        ...e
    });
    return t.install = BE(t), t
}
const gT = {
        disableDefaults: !0
    },
    mT = xe({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = pT(gT);
            e.vueApp.use(t); {
                let n = !0;
                const r = async () => {
                    n = !1, await Iu(t)
                };
                t.hooks.hook("dom:beforeRender", i => {
                    i.shouldRender = !n
                }), e.hooks.hook("page:start", () => {
                    n = !0
                }), e.hooks.hook("page:finish", () => {
                    e.isHydrating || r()
                }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r);
                const s = t.push.bind(t);
                t.push = ((i, o) => {
                    const a = s(i, o),
                        l = a.dispose.bind(a);
                    return a.dispose = () => {
                        const c = e["~transitionPromise"];
                        c ? c.then(l) : l()
                    }, a
                })
            }
        }
    }),
    _T = /(:\w+)\([^)]+\)/g,
    yT = /(:\w+)[?+*]/g,
    bT = /:\w+/g,
    vT = (e, t) => t.path.replace(_T, "$1").replace(yT, "$1").replace(bT, n => e.params[n.slice(1)] ? .toString() || ""),
    yc = (e, t) => {
        const n = e.route.matched.find(s => s.components ? .default === e.Component.type),
            r = t ? ? n ? .meta.key ? ? (n && vT(e.route, n));
        return typeof r == "function" ? r(e.route) : r
    },
    wT = (e, t) => ({
        default: () => e ? rt(Kb, e === !0 ? {} : e, t) : t
    });

function jm(e) {
    return Array.isArray(e) ? e : [e]
}
const ET = "modulepreload",
    ST = function(e, t) {
        return new URL(e, t).href
    },
    qd = {},
    le = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            let c = function(u) {
                return Promise.all(u.map(f => Promise.resolve(f).then(d => ({
                    status: "fulfilled",
                    value: d
                }), d => ({
                    status: "rejected",
                    reason: d
                }))))
            };
            const o = document.getElementsByTagName("link"),
                a = document.querySelector("meta[property=csp-nonce]"),
                l = a ? .nonce || a ? .getAttribute("nonce");
            s = c(n.map(u => {
                if (u = ST(u, r), u in qd) return;
                qd[u] = !0;
                const f = u.endsWith(".css"),
                    d = f ? '[rel="stylesheet"]' : "";
                if (r)
                    for (let g = o.length - 1; g >= 0; g--) {
                        const p = o[g];
                        if (p.href === u && (!f || p.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${u}"]${d}`)) return;
                const h = document.createElement("link");
                if (h.rel = f ? "stylesheet" : ET, f || (h.as = "script"), h.crossOrigin = "", h.href = u, l && h.setAttribute("nonce", l), document.head.appendChild(h), f) return new Promise((g, p) => {
                    h.addEventListener("load", g), h.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${u}`)))
                })
            }))
        }

        function i(o) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o
        }
        return s.then(o => {
            for (const a of o || []) a.status === "rejected" && i(a.reason);
            return t().catch(i)
        })
    },
    Gd = {
        layout: !1
    },
    Kd = null,
    Yd = {},
    bl = [{
        name: "dev-usp-asset___fr",
        path: "/fr/dev/usp-asset/",
        meta: Gd || {},
        component: () => le(() =>
            import ("./BscOLqjR.js"), __vite__mapDeps([0, 1]),
            import.meta.url)
    }, {
        name: "dev-usp-asset___en",
        path: "/dev/usp-asset/",
        meta: Gd || {},
        component: () => le(() =>
            import ("./BscOLqjR.js"), __vite__mapDeps([0, 1]),
            import.meta.url)
    }, {
        name: "cards-loop___fr",
        path: "/fr/cards-loop/",
        component: () => le(() =>
            import ("./QAUZyLLR.js"), __vite__mapDeps([2, 3]),
            import.meta.url)
    }, {
        name: "cards-loop___en",
        path: "/cards-loop/",
        component: () => le(() =>
            import ("./QAUZyLLR.js"), __vite__mapDeps([2, 3]),
            import.meta.url)
    }, {
        name: "fluid-dark___fr",
        path: "/fr/fluid-dark/",
        component: () => le(() =>
            import ("./JuTPBnHz.js"), __vite__mapDeps([4, 5, 6, 7]),
            import.meta.url)
    }, {
        name: "fluid-dark___en",
        path: "/fluid-dark/",
        component: () => le(() =>
            import ("./JuTPBnHz.js"), __vite__mapDeps([4, 5, 6, 7]),
            import.meta.url)
    }, {
        name: "fluid-light___fr",
        path: "/fr/fluid-light/",
        component: () => le(() =>
            import ("./Ci9MXBeg.js"), __vite__mapDeps([8, 5, 6, 9]),
            import.meta.url)
    }, {
        name: "fluid-light___en",
        path: "/fluid-light/",
        component: () => le(() =>
            import ("./Ci9MXBeg.js"), __vite__mapDeps([8, 5, 6, 9]),
            import.meta.url)
    }, {
        name: "legals___fr",
        path: "/fr/legals/",
        component: () => le(() =>
            import ("./Cb-3Q4L4.js"), __vite__mapDeps([10, 11, 12, 13]),
            import.meta.url)
    }, {
        name: "legals___en",
        path: "/legals/",
        component: () => le(() =>
            import ("./Cb-3Q4L4.js"), __vite__mapDeps([10, 11, 12, 13]),
            import.meta.url)
    }, {
        name: "privacy___fr",
        path: "/fr/privacy/",
        component: () => le(() =>
            import ("./D2e_7CCb.js"), __vite__mapDeps([14, 11, 12, 15]),
            import.meta.url)
    }, {
        name: "privacy___en",
        path: "/privacy/",
        component: () => le(() =>
            import ("./D2e_7CCb.js"), __vite__mapDeps([14, 11, 12, 15]),
            import.meta.url)
    }, {
        name: "index___fr",
        path: "/fr/",
        component: () => le(() =>
            import ("./D5jJLml9.js").then(e => e.i), __vite__mapDeps([16, 5, 6, 17]),
            import.meta.url)
    }, {
        name: "index___en",
        path: "/",
        component: () => le(() =>
            import ("./D5jJLml9.js").then(e => e.i), __vite__mapDeps([16, 5, 6, 17]),
            import.meta.url)
    }, {
        name: Kd ? .name,
        path: "/fr/sitemap.xml/",
        component: Yd
    }, {
        name: Kd ? .name,
        path: "/sitemap.xml/",
        component: Yd
    }],
    TT = async (e, t) => {
        let n, r;
        if (!e.meta ? .validate) return;
        const s = ([n, r] = Zn(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
        if (s === !0) return;
        const i = vr({
            fatal: !0,
            status: s && (s.status || s.statusCode) || 404,
            statusText: s && (s.statusText || s.statusMessage) || `Page Not Found: ${e.fullPath}`,
            data: {
                path: e.fullPath
            }
        });
        return typeof window < "u" && window.history.pushState({}, "", t.fullPath), i
    },
    CT = e => {
        const t = Fa({
            path: e.path
        });
        if (t.redirect) {
            const n = t.redirect.includes("#") ? t.redirect : t.redirect + e.hash;
            return xt(n, {
                acceptRelative: !0
            }) ? (window.location.href = n, !1) : n
        }
    },
    kT = [TT, CT],
    bc = {};

function PT(e, t, n) {
    const {
        pathname: r,
        search: s,
        hash: i
    } = t, o = e.indexOf("#");
    if (o > -1) {
        const c = i.includes(e.slice(o)) ? e.slice(o).length : 1;
        let u = i.slice(c);
        return u[0] !== "/" && (u = "/" + u), od(u, "")
    }
    const a = od(r, e),
        l = !n || Fg(a, n) ? a : n;
    return l + (l.includes("?") ? "" : s) + i
}
const xT = xe({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            let t, n, r = At().app.baseURL;
            const s = cr.history ? .(r) ? ? G1(r),
                i = cr.routes ? ([t, n] = Zn(() => cr.routes(bl)), t = await t, n(), t ? ? bl) : bl;
            let o;
            const a = pS({ ...cr,
                scrollBehavior: (y, m, _) => {
                    if (m === sn) {
                        o = _;
                        return
                    }
                    if (cr.scrollBehavior) {
                        if (a.options.scrollBehavior = cr.scrollBehavior, "scrollRestoration" in window.history) {
                            const b = a.beforeEach(() => {
                                b(), window.history.scrollRestoration = "manual"
                            })
                        }
                        return cr.scrollBehavior(y, sn, o || _)
                    }
                },
                history: s,
                routes: i
            });
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
            const l = pn(a.currentRoute.value);
            a.afterEach((y, m) => {
                l.value = m
            }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
                get: () => l.value
            });
            const c = PT(r, window.location, e.payload.path),
                u = pn(a.currentRoute.value),
                f = () => {
                    u.value = a.currentRoute.value
                };
            a.afterEach((y, m) => {
                const _ = y.matched.at(-1) ? .components ? .default,
                    b = m.matched.at(-1) ? .components ? .default;
                if (_ === b) {
                    f();
                    return
                }
                y.matched.length < m.matched.length && y.matched.every((w, k) => w.components ? .default === m.matched[k] ? .components ? .default) && f()
            });
            const d = {
                sync: f
            };
            for (const y in u.value) Object.defineProperty(d, y, {
                get: () => u.value[y],
                enumerable: !0
            });
            e._route = xn(d), e._middleware || = {
                global: [],
                named: {}
            };
            const h = ai();
            a.afterEach(async (y, m, _) => {
                delete e._processingMiddleware, !e.isHydrating && h.value && await e.runWithContext(Gw), _ && await e.callHook("page:loading:end")
            });
            try {
                [t, n] = Zn(() => a.isReady()), await t, n()
            } catch (y) {
                [t, n] = Zn(() => e.runWithContext(() => zr(y))), await t, n()
            }
            const g = c !== a.currentRoute.value.fullPath ? a.resolve(c) : a.currentRoute.value,
                p = e.isHydrating && e.payload.prerenderedAt && e.payload.path && c !== e.payload.path && Fg(a.currentRoute.value.path, e.payload.path);
            f();
            const v = e.payload.state._layout;
            return a.beforeEach(async (y, m) => {
                await e.callHook("page:loading:start"), y.meta = _n(y.meta), e.isHydrating && v && !In(y.meta.layout) && (y.meta.layout = v), e._processingMiddleware = !0; {
                    const _ = new Set([...kT, ...e._middleware.global]);
                    for (const w of y.matched) {
                        const k = w.meta.middleware;
                        if (k)
                            for (const S of jm(k)) _.add(S)
                    }
                    const b = Fa({
                        path: y.path
                    });
                    if (b.appMiddleware)
                        for (const w in b.appMiddleware) b.appMiddleware[w] ? _.add(w) : _.delete(w);
                    for (const w of _) {
                        const k = typeof w == "string" ? e._middleware.named[w] || await bc[w] ? .().then(S => S.default || S) : w;
                        if (!k) throw new Error(`Unknown route middleware: '${w}'.`);
                        try {
                            const S = await e.runWithContext(() => k(y, m));
                            if (!e.payload.serverRendered && e.isHydrating && (S === !1 || S instanceof Error)) {
                                const L = S || vr({
                                    status: 404,
                                    statusText: `Page Not Found: ${c}`
                                });
                                return await e.runWithContext(() => zr(L)), !1
                            }
                            if (S === !0) continue;
                            if (S === !1) return S;
                            if (S) return Xg(S) && S.fatal && await e.runWithContext(() => zr(S)), S
                        } catch (S) {
                            const L = vr(S);
                            return L.fatal && await e.runWithContext(() => zr(L)), L
                        }
                    }
                }
            }), a.onError(async () => {
                delete e._processingMiddleware, await e.callHook("page:loading:end")
            }), a.afterEach(y => {
                if (y.matched.length === 0 && !h.value) return e.runWithContext(() => zr(vr({
                    status: 404,
                    fatal: !1,
                    statusText: `Page not found: ${y.fullPath}`,
                    data: {
                        path: y.fullPath
                    }
                })))
            }), e.hooks.hookOnce("app:created", async () => {
                try {
                    if ("name" in g && (g.name = void 0), p) {
                        const y = a.resolve(e.payload.path);
                        "name" in y && (y.name = void 0), await a.replace({ ...y,
                            force: !0
                        }), e.hooks.hookOnce("app:suspense:resolve", async () => {
                            await a.replace({ ...g,
                                force: !0
                            })
                        })
                    } else await a.replace({ ...g,
                        force: !0
                    });
                    a.options.scrollBehavior = cr.scrollBehavior
                } catch (y) {
                    await e.runWithContext(() => zr(y))
                }
            }), {
                provide: {
                    router: a
                }
            }
        }
    }),
    AT = xe({
        setup() {
            const {
                plausible: e
            } = At().public;
            e.enabled && e.apiHost && Tr({
                link: [{
                    rel: "preconnect",
                    href: e.apiHost
                }]
            })
        }
    }),
    LT = xe({
        name: "nuxt:payload",
        setup(e) {
            const t = new Set;
            Pt().beforeResolve(async (n, r) => {
                if (n.path === r.path) return;
                const s = await vd(n.path);
                if (s) {
                    for (const i of t) delete e.static.data[i];
                    for (const i in s.data) i in e.static.data || t.add(i), e.static.data[i] = s.data[i]
                }
            }), Ba(() => {
                e.hooks.hook("link:prefetch", async n => {
                    const {
                        hostname: r
                    } = new URL(n, window.location.href);
                    r === window.location.hostname && await vd(n).catch(() => {
                        console.warn("[nuxt] Error preloading payload for", n)
                    })
                }), navigator.connection ? .effectiveType !== "slow-2g" && setTimeout(Da, 1e3)
            })
        }
    }),
    RT = xe(() => {
        const e = Pt();
        Ba(() => {
            e.beforeResolve(async () => {
                await new Promise(t => {
                    setTimeout(t, 100), requestAnimationFrame(() => {
                        setTimeout(t, 0)
                    })
                })
            })
        })
    }),
    OT = xe(e => {
        let t;
        async function n() {
            let r;
            try {
                r = await Da()
            } catch (s) {
                const i = s;
                if (!("status" in i && (i.status === 404 || i.status === 403))) throw i
            }
            t && clearTimeout(t), t = setTimeout(n, dd);
            try {
                const s = await $fetch(ku("builds/latest.json") + `?${Date.now()}`);
                s.id !== r ? .id && (e.hooks.callHook("app:manifest:update", s), t && clearTimeout(t))
            } catch {}
        }
        Ba(() => {
            t = setTimeout(n, dd)
        })
    }),
    MT = xe({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = Pt(),
                n = At(),
                r = new Set;
            t.beforeEach(() => {
                r.clear()
            }), e.hook("app:chunkError", ({
                error: i
            }) => {
                r.add(i)
            });

            function s(i) {
                const o = sr(n.app.baseURL, i.fullPath);
                eT({
                    path: o,
                    persistState: !0
                })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(s)
            }), t.onError((i, o) => {
                r.has(i) && s(o)
            })
        }
    }),
    IT = xe(async () => ({
        provide: {
            content: {
                loadLocalDatabase: () => le(() =>
                    import ("./BPmM1EnY.js"), [],
                    import.meta.url).then(e => e.loadDatabaseAdapter)
            }
        }
    }));

function Nu(e) {
    const t = _n({});
    return Ap(() => {
        const n = ue().$nuxtSiteConfig.get(Ia({
            resolveRefs: !0
        }, e));
        t && n && Object.assign(t, n)
    }), delete t._priority, t
}
const NT = xe(() => {
        const e = li();
        if (!e) return;
        const {
            tagPriority: t,
            separator: n,
            titleSeparator: r
        } = At().public["seo-utils"], s = Nu(), i = s.separator || n || s.titleSeparator || r, o = s.titleSeparator || r || s.separator || n, a = {
            meta: [],
            templateParams: {
                site: s,
                siteUrl: s.url,
                siteName: s.name
            }
        };
        i && (a.templateParams.separator = i), o && (a.templateParams.titleSeparator = o), s.description && (a.templateParams.siteDescription = s.description, a.meta.push({
            name: "description",
            content: "%site.description",
            tagPriority: t
        })), e.push(a)
    }),
    DT = xe(() => {
        const e = li();
        e && (e.use(am), e.use(FE()))
    });

function FT(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const na = typeof window < "u",
    Or = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    $T = (e, t, n) => BT({
        l: e,
        k: t,
        s: n
    }),
    BT = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    st = e => typeof e == "number" && isFinite(e),
    Hm = e => Ha(e) === "[object Date]",
    ra = e => Ha(e) === "[object RegExp]",
    ja = e => ye(e) && Object.keys(e).length === 0,
    Ge = Object.assign,
    jT = Object.create,
    Se = (e = null) => jT(e);

function Xd(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;")
}

function Jd(e) {
    return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function HT(e) {
    return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, i) => `${s}="${Jd(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, i) => `${s}='${Jd(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r => {
        e = e.replace(r, "$1javascript&#58;")
    }), e
}
const UT = Object.prototype.hasOwnProperty;

function on(e, t) {
    return UT.call(e, t)
}
const ze = Array.isArray,
    $e = e => typeof e == "function",
    J = e => typeof e == "string",
    Ue = e => typeof e == "boolean",
    ge = e => e !== null && typeof e == "object",
    VT = e => ge(e) && $e(e.then) && $e(e.catch),
    Um = Object.prototype.toString,
    Ha = e => Um.call(e),
    ye = e => Ha(e) === "[object Object]",
    WT = e => e == null ? "" : ze(e) || ye(e) && e.toString === Um ? JSON.stringify(e, null, 2) : String(e);

function Du(e, t = "") {
    return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}
const Co = e => !ge(e) || ze(e);

function Fs(e, t) {
    if (Co(e) || Co(t)) throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length;) {
        const {
            src: r,
            des: s
        } = n.pop();
        Object.keys(r).forEach(i => {
            i !== "__proto__" && (ge(r[i]) && !ge(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : Se()), Co(s[i]) || Co(r[i]) ? s[i] = r[i] : n.push({
                src: r[i],
                des: s[i]
            }))
        })
    }
}

function zT(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}

function vc(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const we = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14
    },
    qT = 17;

function Ua(e, t, n = {}) {
    const {
        domain: r,
        messages: s,
        args: i
    } = n, o = e, a = new SyntaxError(String(o));
    return a.code = e, t && (a.location = t), a.domain = r, a
}

function GT(e) {
    throw e
}
const vn = " ",
    KT = "\r",
    bt = `
`,
    YT = "\u2028",
    XT = "\u2029";

function JT(e) {
    const t = e;
    let n = 0,
        r = 1,
        s = 1,
        i = 0;
    const o = S => t[S] === KT && t[S + 1] === bt,
        a = S => t[S] === bt,
        l = S => t[S] === XT,
        c = S => t[S] === YT,
        u = S => o(S) || a(S) || l(S) || c(S),
        f = () => n,
        d = () => r,
        h = () => s,
        g = () => i,
        p = S => o(S) || l(S) || c(S) ? bt : t[S],
        v = () => p(n),
        y = () => p(n + i);

    function m() {
        return i = 0, u(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n]
    }

    function _() {
        return o(n + i) && i++, i++, t[n + i]
    }

    function b() {
        n = 0, r = 1, s = 1, i = 0
    }

    function w(S = 0) {
        i = S
    }

    function k() {
        const S = n + i;
        for (; S !== n;) m();
        i = 0
    }
    return {
        index: f,
        line: d,
        column: h,
        peekOffset: g,
        charAt: p,
        currentChar: v,
        currentPeek: y,
        next: m,
        peek: _,
        reset: b,
        resetPeek: w,
        skipToPeek: k
    }
}
const jn = void 0,
    QT = ".",
    Qd = "'",
    ZT = "tokenizer";

function eC(e, t = {}) {
    const n = t.location !== !1,
        r = JT(e),
        s = () => r.index(),
        i = () => zT(r.line(), r.column(), r.index()),
        o = i(),
        a = s(),
        l = {
            currentType: 13,
            offset: a,
            startLoc: o,
            endLoc: o,
            lastType: 13,
            lastOffset: a,
            lastStartLoc: o,
            lastEndLoc: o,
            braceNest: 0,
            inLinked: !1,
            text: ""
        },
        c = () => l,
        {
            onError: u
        } = t;

    function f(E, C, R, ...N) {
        const $ = c();
        if (C.column += R, C.offset += R, u) {
            const z = n ? vc($.startLoc, C) : null,
                A = Ua(E, z, {
                    domain: ZT,
                    args: N
                });
            u(A)
        }
    }

    function d(E, C, R) {
        E.endLoc = i(), E.currentType = C;
        const N = {
            type: C
        };
        return n && (N.loc = vc(E.startLoc, E.endLoc)), R != null && (N.value = R), N
    }
    const h = E => d(E, 13);

    function g(E, C) {
        return E.currentChar() === C ? (E.next(), C) : (f(we.EXPECTED_TOKEN, i(), 0, C), "")
    }

    function p(E) {
        let C = "";
        for (; E.currentPeek() === vn || E.currentPeek() === bt;) C += E.currentPeek(), E.peek();
        return C
    }

    function v(E) {
        const C = p(E);
        return E.skipToPeek(), C
    }

    function y(E) {
        if (E === jn) return !1;
        const C = E.charCodeAt(0);
        return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C === 95
    }

    function m(E) {
        if (E === jn) return !1;
        const C = E.charCodeAt(0);
        return C >= 48 && C <= 57
    }

    function _(E, C) {
        const {
            currentType: R
        } = C;
        if (R !== 2) return !1;
        p(E);
        const N = y(E.currentPeek());
        return E.resetPeek(), N
    }

    function b(E, C) {
        const {
            currentType: R
        } = C;
        if (R !== 2) return !1;
        p(E);
        const N = E.currentPeek() === "-" ? E.peek() : E.currentPeek(),
            $ = m(N);
        return E.resetPeek(), $
    }

    function w(E, C) {
        const {
            currentType: R
        } = C;
        if (R !== 2) return !1;
        p(E);
        const N = E.currentPeek() === Qd;
        return E.resetPeek(), N
    }

    function k(E, C) {
        const {
            currentType: R
        } = C;
        if (R !== 7) return !1;
        p(E);
        const N = E.currentPeek() === ".";
        return E.resetPeek(), N
    }

    function S(E, C) {
        const {
            currentType: R
        } = C;
        if (R !== 8) return !1;
        p(E);
        const N = y(E.currentPeek());
        return E.resetPeek(), N
    }

    function L(E, C) {
        const {
            currentType: R
        } = C;
        if (!(R === 7 || R === 11)) return !1;
        p(E);
        const N = E.currentPeek() === ":";
        return E.resetPeek(), N
    }

    function x(E, C) {
        const {
            currentType: R
        } = C;
        if (R !== 9) return !1;
        const N = () => {
                const z = E.currentPeek();
                return z === "{" ? y(E.peek()) : z === "@" || z === "|" || z === ":" || z === "." || z === vn || !z ? !1 : z === bt ? (E.peek(), N()) : H(E, !1)
            },
            $ = N();
        return E.resetPeek(), $
    }

    function O(E) {
        p(E);
        const C = E.currentPeek() === "|";
        return E.resetPeek(), C
    }

    function H(E, C = !0) {
        const R = ($ = !1, z = "") => {
                const A = E.currentPeek();
                return A === "{" || A === "@" || !A ? $ : A === "|" ? !(z === vn || z === bt) : A === vn ? (E.peek(), R(!0, vn)) : A === bt ? (E.peek(), R(!0, bt)) : !0
            },
            N = R();
        return C && E.resetPeek(), N
    }

    function F(E, C) {
        const R = E.currentChar();
        return R === jn ? jn : C(R) ? (E.next(), R) : null
    }

    function W(E) {
        const C = E.charCodeAt(0);
        return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57 || C === 95 || C === 36
    }

    function Z(E) {
        return F(E, W)
    }

    function re(E) {
        const C = E.charCodeAt(0);
        return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57 || C === 95 || C === 36 || C === 45
    }

    function V(E) {
        return F(E, re)
    }

    function X(E) {
        const C = E.charCodeAt(0);
        return C >= 48 && C <= 57
    }

    function q(E) {
        return F(E, X)
    }

    function ce(E) {
        const C = E.charCodeAt(0);
        return C >= 48 && C <= 57 || C >= 65 && C <= 70 || C >= 97 && C <= 102
    }

    function it(E) {
        return F(E, ce)
    }

    function Ke(E) {
        let C = "",
            R = "";
        for (; C = q(E);) R += C;
        return R
    }

    function Ie(E) {
        let C = "";
        for (;;) {
            const R = E.currentChar();
            if (R === "\\") {
                const N = E.peek();
                N === "{" || N === "}" || N === "@" || N === "|" || N === "\\" ? (C += R + N, E.next(), E.next()) : (E.resetPeek(), C += R, E.next())
            } else {
                if (R === "{" || R === "}" || R === "@" || R === "|" || !R) break;
                if (R === vn || R === bt)
                    if (H(E)) C += R, E.next();
                    else {
                        if (O(E)) break;
                        C += R, E.next()
                    }
                else C += R, E.next()
            }
        }
        return C
    }

    function Bt(E) {
        v(E);
        let C = "",
            R = "";
        for (; C = V(E);) R += C;
        const N = E.currentChar();
        if (N && N !== "}" && N !== jn && N !== vn && N !== bt && N !== "　") {
            const $ = ee(E);
            return f(we.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, R + $), R + $
        }
        return E.currentChar() === jn && f(we.UNTERMINATED_CLOSING_BRACE, i(), 0), R
    }

    function Ze(E) {
        v(E);
        let C = "";
        return E.currentChar() === "-" ? (E.next(), C += `-${Ke(E)}`) : C += Ke(E), E.currentChar() === jn && f(we.UNTERMINATED_CLOSING_BRACE, i(), 0), C
    }

    function ut(E) {
        return E !== Qd && E !== bt
    }

    function _t(E) {
        v(E), g(E, "'");
        let C = "",
            R = "";
        for (; C = F(E, ut);) C === "\\" ? R += j(E) : R += C;
        const N = E.currentChar();
        return N === bt || N === jn ? (f(we.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), N === bt && (E.next(), g(E, "'")), R) : (g(E, "'"), R)
    }

    function j(E) {
        const C = E.currentChar();
        switch (C) {
            case "\\":
            case "'":
                return E.next(), `\\${C}`;
            case "u":
                return Q(E, C, 4);
            case "U":
                return Q(E, C, 6);
            default:
                return f(we.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, C), ""
        }
    }

    function Q(E, C, R) {
        g(E, C);
        let N = "";
        for (let $ = 0; $ < R; $++) {
            const z = it(E);
            if (!z) {
                f(we.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${C}${N}${E.currentChar()}`);
                break
            }
            N += z
        }
        return `\\${C}${N}`
    }

    function K(E) {
        return E !== "{" && E !== "}" && E !== vn && E !== bt
    }

    function ee(E) {
        v(E);
        let C = "",
            R = "";
        for (; C = F(E, K);) R += C;
        return R
    }

    function fe(E) {
        let C = "",
            R = "";
        for (; C = Z(E);) R += C;
        return R
    }

    function Te(E) {
        const C = R => {
            const N = E.currentChar();
            return N === "{" || N === "@" || N === "|" || N === "(" || N === ")" || !N || N === vn ? R : (R += N, E.next(), C(R))
        };
        return C("")
    }

    function T(E) {
        v(E);
        const C = g(E, "|");
        return v(E), C
    }

    function P(E, C) {
        let R = null;
        switch (E.currentChar()) {
            case "{":
                return C.braceNest >= 1 && f(we.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), E.next(), R = d(C, 2, "{"), v(E), C.braceNest++, R;
            case "}":
                return C.braceNest > 0 && C.currentType === 2 && f(we.EMPTY_PLACEHOLDER, i(), 0), E.next(), R = d(C, 3, "}"), C.braceNest--, C.braceNest > 0 && v(E), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), R;
            case "@":
                return C.braceNest > 0 && f(we.UNTERMINATED_CLOSING_BRACE, i(), 0), R = I(E, C) || h(C), C.braceNest = 0, R;
            default:
                {
                    let $ = !0,
                        z = !0,
                        A = !0;
                    if (O(E)) return C.braceNest > 0 && f(we.UNTERMINATED_CLOSING_BRACE, i(), 0), R = d(C, 1, T(E)), C.braceNest = 0, C.inLinked = !1, R;
                    if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6)) return f(we.UNTERMINATED_CLOSING_BRACE, i(), 0), C.braceNest = 0, U(E, C);
                    if ($ = _(E, C)) return R = d(C, 4, Bt(E)), v(E), R;
                    if (z = b(E, C)) return R = d(C, 5, Ze(E)), v(E), R;
                    if (A = w(E, C)) return R = d(C, 6, _t(E)), v(E), R;
                    if (!$ && !z && !A) return R = d(C, 12, ee(E)), f(we.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, R.value), v(E), R;
                    break
                }
        }
        return R
    }

    function I(E, C) {
        const {
            currentType: R
        } = C;
        let N = null;
        const $ = E.currentChar();
        switch ((R === 7 || R === 8 || R === 11 || R === 9) && ($ === bt || $ === vn) && f(we.INVALID_LINKED_FORMAT, i(), 0), $) {
            case "@":
                return E.next(), N = d(C, 7, "@"), C.inLinked = !0, N;
            case ".":
                return v(E), E.next(), d(C, 8, ".");
            case ":":
                return v(E), E.next(), d(C, 9, ":");
            default:
                return O(E) ? (N = d(C, 1, T(E)), C.braceNest = 0, C.inLinked = !1, N) : k(E, C) || L(E, C) ? (v(E), I(E, C)) : S(E, C) ? (v(E), d(C, 11, fe(E))) : x(E, C) ? (v(E), $ === "{" ? P(E, C) || N : d(C, 10, Te(E))) : (R === 7 && f(we.INVALID_LINKED_FORMAT, i(), 0), C.braceNest = 0, C.inLinked = !1, U(E, C))
        }
    }

    function U(E, C) {
        let R = {
            type: 13
        };
        if (C.braceNest > 0) return P(E, C) || h(C);
        if (C.inLinked) return I(E, C) || h(C);
        switch (E.currentChar()) {
            case "{":
                return P(E, C) || h(C);
            case "}":
                return f(we.UNBALANCED_CLOSING_BRACE, i(), 0), E.next(), d(C, 3, "}");
            case "@":
                return I(E, C) || h(C);
            default:
                {
                    if (O(E)) return R = d(C, 1, T(E)), C.braceNest = 0, C.inLinked = !1, R;
                    if (H(E)) return d(C, 0, Ie(E));
                    break
                }
        }
        return R
    }

    function B() {
        const {
            currentType: E,
            offset: C,
            startLoc: R,
            endLoc: N
        } = l;
        return l.lastType = E, l.lastOffset = C, l.lastStartLoc = R, l.lastEndLoc = N, l.offset = s(), l.startLoc = i(), r.currentChar() === jn ? d(l, 13) : U(r, l)
    }
    return {
        nextToken: B,
        currentOffset: s,
        currentPosition: i,
        context: c
    }
}
const tC = "parser",
    nC = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,
    rC = /\\([\\@{}|])/g;

function sC(e, t) {
    return t
}

function iC(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            {
                const r = parseInt(t || n, 16);
                return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
            }
    }
}

function oC(e = {}) {
    const t = e.location !== !1,
        {
            onError: n
        } = e;

    function r(y, m, _, b, ...w) {
        const k = y.currentPosition();
        if (k.offset += b, k.column += b, n) {
            const S = t ? vc(_, k) : null,
                L = Ua(m, S, {
                    domain: tC,
                    args: w
                });
            n(L)
        }
    }

    function s(y, m, _) {
        const b = {
            type: y
        };
        return t && (b.start = m, b.end = m, b.loc = {
            start: _,
            end: _
        }), b
    }

    function i(y, m, _, b) {
        t && (y.end = m, y.loc && (y.loc.end = _))
    }

    function o(y, m) {
        const _ = y.context(),
            b = s(3, _.offset, _.startLoc);
        return b.value = m.replace(rC, sC), i(b, y.currentOffset(), y.currentPosition()), b
    }

    function a(y, m) {
        const _ = y.context(),
            {
                lastOffset: b,
                lastStartLoc: w
            } = _,
            k = s(5, b, w);
        return k.index = parseInt(m, 10), y.nextToken(), i(k, y.currentOffset(), y.currentPosition()), k
    }

    function l(y, m) {
        const _ = y.context(),
            {
                lastOffset: b,
                lastStartLoc: w
            } = _,
            k = s(4, b, w);
        return k.key = m, y.nextToken(), i(k, y.currentOffset(), y.currentPosition()), k
    }

    function c(y, m) {
        const _ = y.context(),
            {
                lastOffset: b,
                lastStartLoc: w
            } = _,
            k = s(9, b, w);
        return k.value = m.replace(nC, iC), y.nextToken(), i(k, y.currentOffset(), y.currentPosition()), k
    }

    function u(y) {
        const m = y.nextToken(),
            _ = y.context(),
            {
                lastOffset: b,
                lastStartLoc: w
            } = _,
            k = s(8, b, w);
        return m.type !== 11 ? (r(y, we.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), k.value = "", i(k, b, w), {
            nextConsumeToken: m,
            node: k
        }) : (m.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, wn(m)), k.value = m.value || "", i(k, y.currentOffset(), y.currentPosition()), {
            node: k
        })
    }

    function f(y, m) {
        const _ = y.context(),
            b = s(7, _.offset, _.startLoc);
        return b.value = m, i(b, y.currentOffset(), y.currentPosition()), b
    }

    function d(y) {
        const m = y.context(),
            _ = s(6, m.offset, m.startLoc);
        let b = y.nextToken();
        if (b.type === 8) {
            const w = u(y);
            _.modifier = w.node, b = w.nextConsumeToken || y.nextToken()
        }
        switch (b.type !== 9 && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(b)), b = y.nextToken(), b.type === 2 && (b = y.nextToken()), b.type) {
            case 10:
                b.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(b)), _.key = f(y, b.value || "");
                break;
            case 4:
                b.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(b)), _.key = l(y, b.value || "");
                break;
            case 5:
                b.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(b)), _.key = a(y, b.value || "");
                break;
            case 6:
                b.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(b)), _.key = c(y, b.value || "");
                break;
            default:
                {
                    r(y, we.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
                    const w = y.context(),
                        k = s(7, w.offset, w.startLoc);
                    return k.value = "",
                    i(k, w.offset, w.startLoc),
                    _.key = k,
                    i(_, w.offset, w.startLoc),
                    {
                        nextConsumeToken: b,
                        node: _
                    }
                }
        }
        return i(_, y.currentOffset(), y.currentPosition()), {
            node: _
        }
    }

    function h(y) {
        const m = y.context(),
            _ = m.currentType === 1 ? y.currentOffset() : m.offset,
            b = m.currentType === 1 ? m.endLoc : m.startLoc,
            w = s(2, _, b);
        w.items = [];
        let k = null;
        do {
            const x = k || y.nextToken();
            switch (k = null, x.type) {
                case 0:
                    x.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(x)), w.items.push(o(y, x.value || ""));
                    break;
                case 5:
                    x.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(x)), w.items.push(a(y, x.value || ""));
                    break;
                case 4:
                    x.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(x)), w.items.push(l(y, x.value || ""));
                    break;
                case 6:
                    x.value == null && r(y, we.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, wn(x)), w.items.push(c(y, x.value || ""));
                    break;
                case 7:
                    {
                        const O = d(y);w.items.push(O.node),
                        k = O.nextConsumeToken || null;
                        break
                    }
            }
        } while (m.currentType !== 13 && m.currentType !== 1);
        const S = m.currentType === 1 ? m.lastOffset : y.currentOffset(),
            L = m.currentType === 1 ? m.lastEndLoc : y.currentPosition();
        return i(w, S, L), w
    }

    function g(y, m, _, b) {
        const w = y.context();
        let k = b.items.length === 0;
        const S = s(1, m, _);
        S.cases = [], S.cases.push(b);
        do {
            const L = h(y);
            k || (k = L.items.length === 0), S.cases.push(L)
        } while (w.currentType !== 13);
        return k && r(y, we.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), i(S, y.currentOffset(), y.currentPosition()), S
    }

    function p(y) {
        const m = y.context(),
            {
                offset: _,
                startLoc: b
            } = m,
            w = h(y);
        return m.currentType === 13 ? w : g(y, _, b, w)
    }

    function v(y) {
        const m = eC(y, Ge({}, e)),
            _ = m.context(),
            b = s(0, _.offset, _.startLoc);
        return t && b.loc && (b.loc.source = y), b.body = p(m), e.onCacheKey && (b.cacheKey = e.onCacheKey(y)), _.currentType !== 13 && r(m, we.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, y[_.offset] || ""), i(b, m.currentOffset(), m.currentPosition()), b
    }
    return {
        parse: v
    }
}

function wn(e) {
    if (e.type === 13) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function aC(e, t = {}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: i => (n.helpers.add(i), i)
    }
}

function Zd(e, t) {
    for (let n = 0; n < e.length; n++) Fu(e[n], t)
}

function Fu(e, t) {
    switch (e.type) {
        case 1:
            Zd(e.cases, t), t.helper("plural");
            break;
        case 2:
            Zd(e.items, t);
            break;
        case 6:
            {
                Fu(e.key, t),
                t.helper("linked"),
                t.helper("type");
                break
            }
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function lC(e, t = {}) {
    const n = aC(e);
    n.helper("normalize"), e.body && Fu(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}

function cC(e) {
    const t = e.body;
    return t.type === 2 ? eh(t) : t.cases.forEach(n => eh(n)), e
}

function eh(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null) break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = Du(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}

function Cs(e) {
    switch (e.t = e.type, e.type) {
        case 0:
            {
                const t = e;Cs(t.body),
                t.b = t.body,
                delete t.body;
                break
            }
        case 1:
            {
                const t = e,
                    n = t.cases;
                for (let r = 0; r < n.length; r++) Cs(n[r]);t.c = n,
                delete t.cases;
                break
            }
        case 2:
            {
                const t = e,
                    n = t.items;
                for (let r = 0; r < n.length; r++) Cs(n[r]);t.i = n,
                delete t.items,
                t.static && (t.s = t.static, delete t.static);
                break
            }
        case 3:
        case 9:
        case 8:
        case 7:
            {
                const t = e;t.value && (t.v = t.value, delete t.value);
                break
            }
        case 6:
            {
                const t = e;Cs(t.key),
                t.k = t.key,
                delete t.key,
                t.modifier && (Cs(t.modifier), t.m = t.modifier, delete t.modifier);
                break
            }
        case 5:
            {
                const t = e;t.i = t.index,
                delete t.index;
                break
            }
        case 4:
            {
                const t = e;t.k = t.key,
                delete t.key;
                break
            }
    }
    delete e.type
}

function uC(e, t) {
    const {
        filename: n,
        breakLineCode: r,
        needIndent: s
    } = t, i = t.location !== !1, o = {
        filename: n,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: r,
        needIndent: s,
        indentLevel: 0
    };
    i && e.loc && (o.source = e.loc.source);
    const a = () => o;

    function l(p, v) {
        o.code += p
    }

    function c(p, v = !0) {
        const y = v ? r : "";
        l(s ? y + "  ".repeat(p) : y)
    }

    function u(p = !0) {
        const v = ++o.indentLevel;
        p && c(v)
    }

    function f(p = !0) {
        const v = --o.indentLevel;
        p && c(v)
    }

    function d() {
        c(o.indentLevel)
    }
    return {
        context: a,
        push: l,
        indent: u,
        deindent: f,
        newline: d,
        helper: p => `_${p}`,
        needIndent: () => o.needIndent
    }
}

function fC(e, t) {
    const {
        helper: n
    } = e;
    e.push(`${n("linked")}(`), Ks(e, t.key), t.modifier ? (e.push(", "), Ks(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function dC(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const s = t.items.length;
    for (let i = 0; i < s && (Ks(e, t.items[i]), i !== s - 1); i++) e.push(", ");
    e.deindent(r()), e.push("])")
}

function hC(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(r());
        const s = t.cases.length;
        for (let i = 0; i < s && (Ks(e, t.cases[i]), i !== s - 1); i++) e.push(", ");
        e.deindent(r()), e.push("])")
    }
}

function pC(e, t) {
    t.body ? Ks(e, t.body) : e.push("null")
}

function Ks(e, t) {
    const {
        helper: n
    } = e;
    switch (t.type) {
        case 0:
            pC(e, t);
            break;
        case 1:
            hC(e, t);
            break;
        case 2:
            dC(e, t);
            break;
        case 6:
            fC(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break
    }
}
const gC = (e, t = {}) => {
    const n = J(t.mode) ? t.mode : "normal",
        r = J(t.filename) ? t.filename : "message.intl";
    t.sourceMap;
    const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
        i = t.needIndent ? t.needIndent : n !== "arrow",
        o = e.helpers || [],
        a = uC(e, {
            filename: r,
            breakLineCode: s,
            needIndent: i
        });
    a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(i), o.length > 0 && (a.push(`const { ${Du(o.map(u=>`${u}: _${u}`),", ")} } = ctx`), a.newline()), a.push("return "), Ks(a, e), a.deindent(i), a.push("}"), delete e.helpers;
    const {
        code: l,
        map: c
    } = a.context();
    return {
        ast: e,
        code: l,
        map: c ? c.toJSON() : void 0
    }
};

function mC(e, t = {}) {
    const n = Ge({}, t),
        r = !!n.jit,
        s = !!n.minify,
        i = n.optimize == null ? !0 : n.optimize,
        a = oC(n).parse(e);
    return r ? (i && cC(a), s && Cs(a), {
        ast: a,
        code: ""
    }) : (lC(a, n), gC(a, n))
}

function On(e) {
    return ge(e) && $u(e) === 0 && (on(e, "b") || on(e, "body"))
}
const Vm = ["b", "body"];

function _C(e) {
    return Mr(e, Vm)
}
const Wm = ["c", "cases"];

function yC(e) {
    return Mr(e, Wm, [])
}
const zm = ["s", "static"];

function bC(e) {
    return Mr(e, zm)
}
const qm = ["i", "items"];

function vC(e) {
    return Mr(e, qm, [])
}
const Gm = ["t", "type"];

function $u(e) {
    return Mr(e, Gm)
}
const Km = ["v", "value"];

function ko(e, t) {
    const n = Mr(e, Km);
    if (n != null) return n;
    throw Wi(t)
}
const Ym = ["m", "modifier"];

function wC(e) {
    return Mr(e, Ym)
}
const Xm = ["k", "key"];

function EC(e) {
    const t = Mr(e, Xm);
    if (t) return t;
    throw Wi(6)
}

function Mr(e, t, n) {
    for (let r = 0; r < t.length; r++) {
        const s = t[r];
        if (on(e, s) && e[s] != null) return e[s]
    }
    return n
}
const Jm = [...Vm, ...Wm, ...zm, ...qm, ...Xm, ...Ym, ...Km, ...Gm];

function Wi(e) {
    return new Error(`unhandled node type: ${e}`)
}

function vl(e) {
    return n => SC(n, e)
}

function SC(e, t) {
    const n = _C(t);
    if (n == null) throw Wi(0);
    if ($u(n) === 1) {
        const i = yC(n);
        return e.plural(i.reduce((o, a) => [...o, th(e, a)], []))
    } else return th(e, n)
}

function th(e, t) {
    const n = bC(t);
    if (n != null) return e.type === "text" ? n : e.normalize([n]); {
        const r = vC(t).reduce((s, i) => [...s, wc(e, i)], []);
        return e.normalize(r)
    }
}

function wc(e, t) {
    const n = $u(t);
    switch (n) {
        case 3:
            return ko(t, n);
        case 9:
            return ko(t, n);
        case 4:
            {
                const r = t;
                if (on(r, "k") && r.k) return e.interpolate(e.named(r.k));
                if (on(r, "key") && r.key) return e.interpolate(e.named(r.key));
                throw Wi(n)
            }
        case 5:
            {
                const r = t;
                if (on(r, "i") && st(r.i)) return e.interpolate(e.list(r.i));
                if (on(r, "index") && st(r.index)) return e.interpolate(e.list(r.index));
                throw Wi(n)
            }
        case 6:
            {
                const r = t,
                    s = wC(r),
                    i = EC(r);
                return e.linked(wc(e, i), s ? wc(e, s) : void 0, e.type)
            }
        case 7:
            return ko(t, n);
        case 8:
            return ko(t, n);
        default:
            throw new Error(`unhandled node on format message part: ${n}`)
    }
}
const TC = e => e;
let Po = Se();

function CC(e, t = {}) {
    let n = !1;
    const r = t.onError || GT;
    return t.onError = s => {
        n = !0, r(s)
    }, { ...mC(e, t),
        detectError: n
    }
}

function kC(e, t) {
    if (J(e)) {
        Ue(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || TC)(e),
            s = Po[r];
        if (s) return s;
        const {
            ast: i,
            detectError: o
        } = CC(e, { ...t,
            location: !1,
            jit: !0
        }), a = vl(i);
        return o ? a : Po[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = Po[n];
            return r || (Po[n] = vl(e))
        } else return vl(e)
    }
}
const Yn = {
        INVALID_ARGUMENT: qT,
        INVALID_DATE_ARGUMENT: 18,
        INVALID_ISO_DATE_ARGUMENT: 19,
        NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
        NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
        NOT_SUPPORT_LOCALE_TYPE: 23
    },
    PC = 24;

function Xn(e) {
    return Ua(e, null, void 0)
}

function Bu(e, t) {
    return t.locale != null ? nh(t.locale) : nh(e.locale)
}
let wl;

function nh(e) {
    if (J(e)) return e;
    if ($e(e)) {
        if (e.resolvedOnce && wl != null) return wl;
        if (e.constructor.name === "Function") {
            const t = e();
            if (VT(t)) throw Xn(Yn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return wl = t
        } else throw Xn(Yn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else throw Xn(Yn.NOT_SUPPORT_LOCALE_TYPE)
}

function xC(e, t, n) {
    return [...new Set([n, ...ze(t) ? t : ge(t) ? Object.keys(t) : J(t) ? [t] : [n]])]
}

function Ec(e, t, n) {
    const r = J(n) ? n : sa,
        s = e;
    s.__localeChainCache || (s.__localeChainCache = new Map);
    let i = s.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let o = [n];
        for (; ze(o);) o = rh(i, o, t);
        const a = ze(t) || !ye(t) ? t : t.default ? t.default : null;
        o = J(a) ? [a] : a, ze(o) && rh(i, o, !1), s.__localeChainCache.set(r, i)
    }
    return i
}

function rh(e, t, n) {
    let r = !0;
    for (let s = 0; s < t.length && Ue(r); s++) {
        const i = t[s];
        J(i) && (r = AC(e, t[s], n))
    }
    return r
}

function AC(e, t, n) {
    let r;
    const s = t.split("-");
    do {
        const i = s.join("-");
        r = LC(e, i, n), s.splice(-1, 1)
    } while (s.length && r === !0);
    return r
}

function LC(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const s = t.replace(/!/g, "");
        e.push(s), (ze(n) || ye(n)) && n[s] && (r = n[s])
    }
    return r
}
const Ir = [];
Ir[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Ir[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Ir[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Ir[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Ir[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Ir[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Ir[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const RC = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function OC(e) {
    return RC.test(e)
}

function MC(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function IC(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function NC(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : OC(t) ? MC(t) : "*" + t
}

function DC(e) {
    const t = [];
    let n = -1,
        r = 0,
        s = 0,
        i, o, a, l, c, u, f;
    const d = [];
    d[0] = () => {
        o === void 0 ? o = a : o += a
    }, d[1] = () => {
        o !== void 0 && (t.push(o), o = void 0)
    }, d[2] = () => {
        d[0](), s++
    }, d[3] = () => {
        if (s > 0) s--, r = 4, d[0]();
        else {
            if (s = 0, o === void 0 || (o = NC(o), o === !1)) return !1;
            d[1]()
        }
    };

    function h() {
        const g = e[n + 1];
        if (r === 5 && g === "'" || r === 6 && g === '"') return n++, a = "\\" + g, d[0](), !0
    }
    for (; r !== null;)
        if (n++, i = e[n], !(i === "\\" && h())) {
            if (l = IC(i), f = Ir[r], c = f[l] || f.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = d[c[1]], u && (a = i, u() === !1)))) return;
            if (r === 7) return t
        }
}
const sh = new Map;

function FC(e, t) {
    return ge(e) ? e[t] : null
}

function $C(e, t) {
    if (!ge(e)) return null;
    let n = sh.get(t);
    if (n || (n = DC(t), n && sh.set(t, n)), !n) return null;
    const r = n.length;
    let s = e,
        i = 0;
    for (; i < r;) {
        const o = n[i];
        if (Jm.includes(o) && On(s) || !ge(s) || !on(s, o)) return null;
        const a = s[o];
        if (a === void 0 || $e(s)) return null;
        s = a, i++
    }
    return s
}
const BC = "11.4.2",
    Va = -1,
    sa = "en-US",
    ia = "",
    ih = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function jC() {
    return {
        upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && ge(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && ge(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && J(e) ? ih(e) : t === "vnode" && ge(e) && "__v_isVNode" in e ? ih(e.children) : e
    }
}
let Qm;

function HC(e) {
    Qm = e
}
let Zm;

function UC(e) {
    Zm = e
}
let e_;

function VC(e) {
    e_ = e
}
let t_ = null;
const oh = e => {
        t_ = e
    },
    WC = () => t_;
let ah = 0;

function zC(e = {}) {
    const t = $e(e.onWarn) ? e.onWarn : FT,
        n = J(e.version) ? e.version : BC,
        r = J(e.locale) || $e(e.locale) ? e.locale : sa,
        s = $e(r) ? sa : r,
        i = ze(e.fallbackLocale) || ye(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s,
        o = ye(e.messages) ? e.messages : El(s),
        a = ye(e.datetimeFormats) ? e.datetimeFormats : El(s),
        l = ye(e.numberFormats) ? e.numberFormats : El(s),
        c = Ge(Se(), e.modifiers, jC()),
        u = e.pluralRules || Se(),
        f = $e(e.missing) ? e.missing : null,
        d = Ue(e.missingWarn) || ra(e.missingWarn) ? e.missingWarn : !0,
        h = Ue(e.fallbackWarn) || ra(e.fallbackWarn) ? e.fallbackWarn : !0,
        g = !!e.fallbackFormat,
        p = !!e.unresolving,
        v = $e(e.postTranslation) ? e.postTranslation : null,
        y = ye(e.processor) ? e.processor : null,
        m = Ue(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        _ = !!e.escapeParameter,
        b = $e(e.messageCompiler) ? e.messageCompiler : Qm,
        w = $e(e.messageResolver) ? e.messageResolver : Zm || FC,
        k = $e(e.localeFallbacker) ? e.localeFallbacker : e_ || xC,
        S = ge(e.fallbackContext) ? e.fallbackContext : void 0,
        L = e,
        x = ge(L.__datetimeFormatters) ? L.__datetimeFormatters : new Map,
        O = ge(L.__numberFormatters) ? L.__numberFormatters : new Map,
        H = ge(L.__meta) ? L.__meta : {};
    ah++;
    const F = {
        version: n,
        cid: ah,
        locale: r,
        fallbackLocale: i,
        messages: o,
        modifiers: c,
        pluralRules: u,
        missing: f,
        missingWarn: d,
        fallbackWarn: h,
        fallbackFormat: g,
        unresolving: p,
        postTranslation: v,
        processor: y,
        warnHtmlMessage: m,
        escapeParameter: _,
        messageCompiler: b,
        messageResolver: w,
        localeFallbacker: k,
        fallbackContext: S,
        onWarn: t,
        __meta: H
    };
    return F.datetimeFormats = a, F.numberFormats = l, F.__datetimeFormatters = x, F.__numberFormatters = O, F
}
const El = e => ({
    [e]: Se()
});

function ju(e, t, n, r, s) {
    const {
        missing: i,
        onWarn: o
    } = e;
    if (i !== null) {
        const a = i(e, n, t, s);
        return J(a) ? a : t
    } else return t
}

function _i(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function qC(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function GC(e, t) {
    const n = t.indexOf(e);
    if (n === -1) return !1;
    for (let r = n + 1; r < t.length; r++)
        if (qC(e, t[r])) return !0;
    return !1
}

function lh(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: s,
        onWarn: i,
        localeFallbacker: o
    } = e, {
        __datetimeFormatters: a
    } = e;
    if (!J(t[0]) && !Hm(t[0]) && !st(t[0])) return ia;
    const [l, c, u, f] = Sc(...t), d = Ue(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Ue(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const h = !!u.part,
        g = Bu(e, u),
        p = o(e, s, g);
    if (!J(l) || l === "") return new Intl.DateTimeFormat(g.replace(/!/g, ""), f).format(c);
    let v = {},
        y, m = null;
    const _ = "datetime format";
    for (let k = 0; k < p.length && (y = p[k], v = n[y] || {}, m = v[l], !ye(m)); k++) ju(e, l, y, d, _);
    if (!ye(m) || !J(y)) return r ? Va : l;
    let b = `${y}__${l}`;
    ja(f) || (b = `${b}__${JSON.stringify(f)}`);
    let w = a.get(b);
    return w || (w = new Intl.DateTimeFormat(y, Ge({}, m, f)), a.set(b, w)), h ? w.formatToParts(c) : w.format(c)
}
const n_ = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Sc(...e) {
    const [t, n, r, s] = e, i = Se();
    let o = Se(),
        a;
    if (J(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l) throw Xn(Yn.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw Xn(Yn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Hm(t)) {
        if (isNaN(t.getTime())) throw Xn(Yn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (st(t)) a = t;
    else throw Xn(Yn.INVALID_ARGUMENT);
    return J(n) ? i.key = n : ye(n) && Object.keys(n).forEach(l => {
        n_.includes(l) ? o[l] = n[l] : i[l] = n[l]
    }), J(r) ? i.locale = r : ye(r) && (o = r), ye(s) && (o = s), [i.key || "", a, i, o]
}

function ch(e, t, n) {
    const r = e;
    for (const s in n) {
        const i = `${t}__${s}`;
        r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
    }
}

function uh(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: s,
        onWarn: i,
        localeFallbacker: o
    } = e, {
        __numberFormatters: a
    } = e;
    if (!st(t[0])) return ia;
    const [l, c, u, f] = Tc(...t), d = Ue(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Ue(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const h = !!u.part,
        g = Bu(e, u),
        p = o(e, s, g);
    if (!J(l) || l === "") return new Intl.NumberFormat(g.replace(/!/g, ""), f).format(c);
    let v = {},
        y, m = null;
    const _ = "number format";
    for (let k = 0; k < p.length && (y = p[k], v = n[y] || {}, m = v[l], !ye(m)); k++) ju(e, l, y, d, _);
    if (!ye(m) || !J(y)) return r ? Va : l;
    let b = `${y}__${l}`;
    ja(f) || (b = `${b}__${JSON.stringify(f)}`);
    let w = a.get(b);
    return w || (w = new Intl.NumberFormat(y, Ge({}, m, f)), a.set(b, w)), h ? w.formatToParts(c) : w.format(c)
}
const r_ = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Tc(...e) {
    const [t, n, r, s] = e, i = Se();
    let o = Se();
    if (!st(t)) throw Xn(Yn.INVALID_ARGUMENT);
    const a = t;
    return J(n) ? i.key = n : ye(n) && Object.keys(n).forEach(l => {
        r_.includes(l) ? o[l] = n[l] : i[l] = n[l]
    }), J(r) ? i.locale = r : ye(r) && (o = r), ye(s) && (o = s), [i.key || "", a, i, o]
}

function fh(e, t, n) {
    const r = e;
    for (const s in n) {
        const i = `${t}__${s}`;
        r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
    }
}
const KC = e => e,
    YC = e => "",
    XC = "text",
    JC = e => e.length === 0 ? "" : Du(e),
    QC = WT;

function Sl(e, t) {
    return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2)
}

function ZC(e) {
    const t = st(e.pluralIndex) ? e.pluralIndex : -1;
    return st(e.named ? .count) ? e.named.count : st(e.named ? .n) ? e.named.n : t
}

function ek(e = {}) {
    const t = e.locale,
        n = ZC(e),
        r = J(t) && $e(e.pluralRules ? .[t]) ? e.pluralRules[t] : Sl,
        s = r === Sl ? void 0 : Sl,
        i = y => y[r(n, y.length, s)],
        o = e.list || [],
        a = y => o[y],
        l = e.named || Se();
    st(e.pluralIndex) && (l.count || = e.pluralIndex, l.n || = e.pluralIndex);
    const c = y => l[y];

    function u(y, m) {
        const _ = $e(e.messages) ? e.messages(y, !!m) : ge(e.messages) ? e.messages[y] : !1;
        return _ || (e.parent ? e.parent.message(y) : YC)
    }
    const f = y => e.modifiers ? e.modifiers[y] : KC,
        d = $e(e.processor ? .normalize) ? e.processor.normalize : JC,
        h = $e(e.processor ? .interpolate) ? e.processor.interpolate : QC,
        g = J(e.processor ? .type) ? e.processor.type : XC,
        v = {
            list: a,
            named: c,
            plural: i,
            linked: (y, ...m) => {
                const [_, b] = m;
                let w = "text",
                    k = "";
                m.length === 1 ? ge(_) ? (k = _.modifier || k, w = _.type || w) : J(_) && (k = _ || k) : m.length === 2 && (J(_) && (k = _ || k), J(b) && (w = b || w));
                const S = u(y, !0)(v),
                    L = S === "" || S === void 0 ? y : S,
                    x = w === "vnode" && ze(L) && k ? L[0] : L;
                return k ? f(k)(x, w) : x
            },
            message: u,
            type: g,
            interpolate: h,
            normalize: d,
            values: Ge(Se(), o, l)
        };
    return v
}
const dh = () => "",
    er = e => $e(e);

function hh(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: s,
        messageCompiler: i,
        fallbackLocale: o,
        messages: a
    } = e, [l, c] = Cc(...t), u = Ue(c.missingWarn) ? c.missingWarn : e.missingWarn, f = Ue(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, d = Ue(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, g = J(c.default) || Ue(c.default) ? Ue(c.default) ? i ? l : () => l : c.default : n ? i ? l : () => l : null, p = n || g != null && (J(g) || $e(g)), v = Bu(e, c);
    d && tk(c);
    let [y, m, _] = h ? [l, v, a[v] || Se()] : s_(e, l, v, o, f, u), b = y, w = l;
    if (!h && !(J(b) || On(b) || er(b)) && p && (b = g, w = b), !h && (!(J(b) || On(b) || er(b)) || !J(m))) return s ? Va : l;
    let k = !1;
    const S = () => {
            k = !0
        },
        L = er(b) ? b : i_(e, l, m, b, w, S);
    if (k) return b;
    const x = sk(e, m, _, c),
        O = ek(x),
        H = nk(e, L, O);
    let F = r ? r(H, l) : H;
    return d && J(F) && (F = HT(F)), F
}

function tk(e) {
    ze(e.list) ? e.list = e.list.map(t => J(t) ? Xd(t) : t) : ge(e.named) && Object.keys(e.named).forEach(t => {
        J(e.named[t]) && (e.named[t] = Xd(e.named[t]))
    })
}

function s_(e, t, n, r, s, i) {
    const {
        messages: o,
        onWarn: a,
        messageResolver: l,
        localeFallbacker: c
    } = e, u = c(e, r, n);
    let f = Se(),
        d, h = null;
    const g = "translate";
    for (let p = 0; p < u.length && (d = u[p], f = o[d] || Se(), (h = l(f, t)) === null && (h = f[t]), !(J(h) || On(h) || er(h))); p++)
        if (!GC(d, u)) {
            const v = ju(e, t, d, i, g);
            v !== t && (h = v)
        }
    return [h, d, f]
}

function i_(e, t, n, r, s, i) {
    const {
        messageCompiler: o,
        warnHtmlMessage: a
    } = e;
    if (er(r)) {
        const c = r;
        return c.locale = c.locale || n, c.key = c.key || t, c
    }
    if (o == null) {
        const c = (() => r);
        return c.locale = n, c.key = t, c
    }
    const l = o(r, rk(e, n, s, r, a, i));
    return l.locale = n, l.key = t, l.source = r, l
}

function nk(e, t, n) {
    return t(n)
}

function Cc(...e) {
    const [t, n, r] = e, s = Se();
    if (!J(t) && !st(t) && !er(t) && !On(t)) throw Xn(Yn.INVALID_ARGUMENT);
    const i = st(t) ? String(t) : (er(t), t);
    return st(n) ? s.plural = n : J(n) ? s.default = n : ye(n) && !ja(n) ? s.named = n : ze(n) && (s.list = n), st(r) ? s.plural = r : J(r) ? s.default = r : ye(r) && Ge(s, r), [i, s]
}

function rk(e, t, n, r, s, i) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: s,
        onError: o => {
            throw i && i(o), o
        },
        onCacheKey: o => $T(t, n, o)
    }
}

function sk(e, t, n, r) {
    const {
        modifiers: s,
        pluralRules: i,
        messageResolver: o,
        fallbackLocale: a,
        fallbackWarn: l,
        missingWarn: c,
        fallbackContext: u
    } = e, d = {
        locale: t,
        modifiers: s,
        pluralRules: i,
        messages: (h, g) => {
            let p = o(n, h);
            if (p == null && (u || g)) {
                const [v, , y] = s_(u || e, h, t, a, l, c);
                p = v ? ? o(y, h)
            }
            if (J(p) || On(p)) {
                let v = !1;
                const m = i_(e, h, t, p, h, () => {
                    v = !0
                });
                return v ? dh : m
            } else return er(p) ? p : dh
        }
    };
    return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), st(r.plural) && (d.pluralIndex = r.plural), d
}
const ik = "11.4.2",
    Xt = {
        UNEXPECTED_RETURN_TYPE: PC,
        INVALID_ARGUMENT: 25,
        MUST_BE_CALL_SETUP_TOP: 26,
        NOT_INSTALLED: 27,
        REQUIRED_VALUE: 28,
        INVALID_VALUE: 29,
        NOT_INSTALLED_WITH_PROVIDE: 31,
        UNEXPECTED_ERROR: 32,
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
    };

function cn(e, ...t) {
    return Ua(e, null, void 0)
}
const kc = Or("__translateVNode"),
    Pc = Or("__datetimeParts"),
    xc = Or("__numberParts"),
    ok = Or("__setPluralRules"),
    ak = Or("__injectWithOption"),
    Ps = Or("__dispose");

function zi(e) {
    if (!ge(e) || On(e)) return e;
    for (const t in e)
        if (on(e, t))
            if (!t.includes(".")) ge(e[t]) && zi(e[t]);
            else {
                const n = t.split("."),
                    r = n.length - 1;
                let s = e,
                    i = !1;
                for (let o = 0; o < r; o++) {
                    if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
                    if (n[o] in s || (s[n[o]] = Se()), !ge(s[n[o]])) {
                        i = !0;
                        break
                    }
                    s = s[n[o]]
                }
                if (i || (On(s) ? Jm.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !On(s)) {
                    const o = s[n[r]];
                    ge(o) && zi(o)
                }
            }
    return e
}

function o_(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: s,
        flatJson: i
    } = t, o = ye(n) ? n : ze(r) ? Se() : {
        [e]: Se()
    };
    if (ze(r) && r.forEach(a => {
            if ("locale" in a && "resource" in a) {
                const {
                    locale: l,
                    resource: c
                } = a;
                l ? (o[l] = o[l] || Se(), Fs(c, o[l])) : Fs(c, o)
            } else J(a) && Fs(JSON.parse(a), o)
        }), s == null && i)
        for (const a in o) on(o, a) && zi(o[a]);
    return o
}

function lk(e) {
    return e.type
}

function ck(e, t, n) {
    let r = ge(t.messages) ? t.messages : Se();
    "__i18nGlobal" in n && (r = o_(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const s = Object.keys(r);
    s.length && s.forEach(i => {
        e.mergeLocaleMessage(i, r[i])
    }); {
        if (ge(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length && i.forEach(o => {
                e.mergeDateTimeFormat(o, t.datetimeFormats[o])
            })
        }
        if (ge(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length && i.forEach(o => {
                e.mergeNumberFormat(o, t.numberFormats[o])
            })
        }
    }
}

function ph(e) {
    return Pe(br, null, e, 0)
}

function a_() {
    return Ft()
}
const gh = () => [],
    uk = () => !1;
let mh = 0;

function _h(e) {
    return ((t, n, r, s) => e(n, r, a_() || void 0, s))
}

function Ac(e = {}) {
    const {
        __root: t,
        __injectWithOption: n
    } = e, r = t === void 0, s = e.flatJson, i = na ? lt : pn;
    let o = Ue(e.inheritLocale) ? e.inheritLocale : !0;
    const a = i(t && o ? t.locale.value : J(e.locale) ? e.locale : sa),
        l = i(t && o ? t.fallbackLocale.value : J(e.fallbackLocale) || ze(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value),
        c = i(o_(a.value, e)),
        u = i(ye(e.datetimeFormats) ? e.datetimeFormats : {
            [a.value]: {}
        }),
        f = i(ye(e.numberFormats) ? e.numberFormats : {
            [a.value]: {}
        });
    let d = t ? t.missingWarn : Ue(e.missingWarn) || ra(e.missingWarn) ? e.missingWarn : !0,
        h = t ? t.fallbackWarn : Ue(e.fallbackWarn) || ra(e.fallbackWarn) ? e.fallbackWarn : !0,
        g = t ? t.fallbackRoot : Ue(e.fallbackRoot) ? e.fallbackRoot : !0,
        p = !!e.fallbackFormat,
        v = $e(e.missing) ? e.missing : null,
        y = $e(e.missing) ? _h(e.missing) : null,
        m = $e(e.postTranslation) ? e.postTranslation : null,
        _ = t ? t.warnHtmlMessage : Ue(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        b = !!e.escapeParameter;
    const w = t ? t.modifiers : ye(e.modifiers) ? e.modifiers : {};
    let k = e.pluralRules || t && t.pluralRules,
        S;
    S = (() => {
        r && oh(null);
        const A = {
            version: ik,
            locale: a.value,
            fallbackLocale: l.value,
            messages: c.value,
            modifiers: w,
            pluralRules: k,
            missing: y === null ? void 0 : y,
            missingWarn: d,
            fallbackWarn: h,
            fallbackFormat: p,
            unresolving: !0,
            postTranslation: m === null ? void 0 : m,
            warnHtmlMessage: _,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        A.datetimeFormats = u.value, A.numberFormats = f.value, A.__datetimeFormatters = ye(S) ? S.__datetimeFormatters : void 0, A.__numberFormatters = ye(S) ? S.__numberFormatters : void 0;
        const D = zC(A);
        return r && oh(D), D
    })(), _i(S, a.value, l.value);

    function x() {
        return [a.value, l.value, c.value, u.value, f.value]
    }
    const O = ne({
            get: () => a.value,
            set: A => {
                S.locale = A, a.value = A
            }
        }),
        H = ne({
            get: () => l.value,
            set: A => {
                S.fallbackLocale = A, l.value = A, _i(S, a.value, A)
            }
        }),
        F = ne(() => c.value),
        W = ne(() => u.value),
        Z = ne(() => f.value);

    function re() {
        return $e(m) ? m : null
    }

    function V(A) {
        m = A, S.postTranslation = A
    }

    function X() {
        return v
    }

    function q(A) {
        A !== null && (y = _h(A)), v = A, S.missing = y
    }
    const ce = (A, D, Y, te, de, pe) => {
        x();
        let me;
        try {
            r || (S.fallbackContext = t ? WC() : void 0), me = A(S)
        } finally {
            r || (S.fallbackContext = void 0)
        }
        if (Y !== "translate exists" && st(me) && me === Va || Y === "translate exists" && !me) {
            const [Ye, tn] = D();
            return t && g ? te(t) : de(Ye)
        } else {
            if (pe(me)) return me;
            throw cn(Xt.UNEXPECTED_RETURN_TYPE)
        }
    };

    function it(...A) {
        return ce(D => Reflect.apply(hh, null, [D, ...A]), () => Cc(...A), "translate", D => Reflect.apply(D.t, D, [...A]), D => D, D => J(D))
    }

    function Ke(...A) {
        const [D, Y, te] = A;
        if (te && !ge(te)) throw cn(Xt.INVALID_ARGUMENT);
        return it(D, Y, Ge({
            resolvedMessage: !0
        }, te || {}))
    }

    function Ie(...A) {
        return ce(D => Reflect.apply(lh, null, [D, ...A]), () => Sc(...A), "datetime format", D => Reflect.apply(D.d, D, [...A]), () => ia, D => J(D) || ze(D))
    }

    function Bt(...A) {
        return ce(D => Reflect.apply(uh, null, [D, ...A]), () => Tc(...A), "number format", D => Reflect.apply(D.n, D, [...A]), () => ia, D => J(D) || ze(D))
    }

    function Ze(A) {
        return A.map(D => J(D) || st(D) || Ue(D) ? ph(String(D)) : D)
    }
    const _t = {
        normalize: Ze,
        interpolate: A => A,
        type: "vnode"
    };

    function j(...A) {
        return ce(D => {
            let Y;
            const te = D;
            try {
                te.processor = _t, Y = Reflect.apply(hh, null, [te, ...A])
            } finally {
                te.processor = null
            }
            return Y
        }, () => Cc(...A), "translate", D => D[kc](...A), D => [ph(D)], D => ze(D))
    }

    function Q(...A) {
        return ce(D => Reflect.apply(uh, null, [D, ...A]), () => Tc(...A), "number format", D => D[xc](...A), gh, D => J(D) || ze(D))
    }

    function K(...A) {
        return ce(D => Reflect.apply(lh, null, [D, ...A]), () => Sc(...A), "datetime format", D => D[Pc](...A), gh, D => J(D) || ze(D))
    }

    function ee(A) {
        k = A, S.pluralRules = k
    }

    function fe(A, D) {
        return ce(() => {
            if (!A) return !1;
            const Y = J(D) ? D : a.value,
                te = J(D) ? [Y] : Ec(S, l.value, Y);
            for (let de = 0; de < te.length; de++) {
                const pe = P(te[de]);
                let me = S.messageResolver(pe, A);
                if (me === null && (me = pe[A]), On(me) || er(me) || J(me)) return !0
            }
            return !1
        }, () => [A], "translate exists", Y => Reflect.apply(Y.te, Y, [A, D]), uk, Y => Ue(Y))
    }

    function Te(A) {
        let D = null;
        const Y = Ec(S, l.value, a.value);
        for (let te = 0; te < Y.length; te++) {
            const de = c.value[Y[te]] || {},
                pe = S.messageResolver(de, A);
            if (pe != null) {
                D = pe;
                break
            }
        }
        return D
    }

    function T(A) {
        const D = Te(A);
        return D ? ? (t ? t.tm(A) || {} : {})
    }

    function P(A) {
        return c.value[A] || {}
    }

    function I(A, D) {
        if (s) {
            const Y = {
                [A]: D
            };
            for (const te in Y) on(Y, te) && zi(Y[te]);
            D = Y[A]
        }
        c.value[A] = D, S.messages = c.value
    }

    function U(A, D) {
        c.value[A] = c.value[A] || {};
        const Y = {
            [A]: D
        };
        if (s)
            for (const te in Y) on(Y, te) && zi(Y[te]);
        D = Y[A], Fs(D, c.value[A]), S.messages = c.value
    }

    function B(A) {
        return u.value[A] || {}
    }

    function E(A, D) {
        u.value[A] = D, S.datetimeFormats = u.value, ch(S, A, D)
    }

    function C(A, D) {
        u.value[A] = Ge(u.value[A] || {}, D), S.datetimeFormats = u.value, ch(S, A, D)
    }

    function R(A) {
        return f.value[A] || {}
    }

    function N(A, D) {
        f.value[A] = D, S.numberFormats = f.value, fh(S, A, D)
    }

    function $(A, D) {
        f.value[A] = Ge(f.value[A] || {}, D), S.numberFormats = f.value, fh(S, A, D)
    }
    mh++, t && na && (gt(t.locale, A => {
        o && (a.value = A, S.locale = A, _i(S, a.value, l.value))
    }), gt(t.fallbackLocale, A => {
        o && (l.value = A, S.fallbackLocale = A, _i(S, a.value, l.value))
    }));
    const z = {
        id: mh,
        locale: O,
        fallbackLocale: H,
        get inheritLocale() {
            return o
        },
        set inheritLocale(A) {
            o = A, A && t && (a.value = t.locale.value, l.value = t.fallbackLocale.value, _i(S, a.value, l.value))
        },
        get availableLocales() {
            return Object.keys(c.value).sort()
        },
        messages: F,
        get modifiers() {
            return w
        },
        get pluralRules() {
            return k || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return d
        },
        set missingWarn(A) {
            d = A, S.missingWarn = d
        },
        get fallbackWarn() {
            return h
        },
        set fallbackWarn(A) {
            h = A, S.fallbackWarn = h
        },
        get fallbackRoot() {
            return g
        },
        set fallbackRoot(A) {
            g = A
        },
        get fallbackFormat() {
            return p
        },
        set fallbackFormat(A) {
            p = A, S.fallbackFormat = p
        },
        get warnHtmlMessage() {
            return _
        },
        set warnHtmlMessage(A) {
            _ = A, S.warnHtmlMessage = A
        },
        get escapeParameter() {
            return b
        },
        set escapeParameter(A) {
            b = A, S.escapeParameter = A
        },
        t: it,
        getLocaleMessage: P,
        setLocaleMessage: I,
        mergeLocaleMessage: U,
        getPostTranslationHandler: re,
        setPostTranslationHandler: V,
        getMissingHandler: X,
        setMissingHandler: q,
        [ok]: ee
    };
    return z.datetimeFormats = W, z.numberFormats = Z, z.rt = Ke, z.te = fe, z.tm = T, z.d = Ie, z.n = Bt, z.getDateTimeFormat = B, z.setDateTimeFormat = E, z.mergeDateTimeFormat = C, z.getNumberFormat = R, z.setNumberFormat = N, z.mergeNumberFormat = $, z[ak] = n, z[kc] = j, z[Pc] = K, z[xc] = Q, z
}
const Hu = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function fk({
    slots: e
}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [...r, ...s.type === Qe ? s.children : [s]], []) : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n
    }, Se())
}

function l_() {
    return Qe
}
const dk = yn({
        name: "i18n-t",
        props: Ge({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => st(e) || !isNaN(e)
            }
        }, Hu),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, s = e.i18n || Nr({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const i = () => {
                        const l = Object.keys(n).filter(f => f[0] !== "_"),
                            c = Se();
                        e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = J(e.plural) ? +e.plural : e.plural);
                        const u = fk(t, l);
                        return s[kc](e.keypath, u, c)
                    },
                    o = Ge(Se(), r),
                    a = J(e.tag) || ge(e.tag) ? e.tag : l_();
                return ge(a) ? rt(a, o, {
                    default: i
                }) : rt(a, o, i())
            }
        }
    }),
    yh = dk;

function hk(e) {
    return ze(e) && !J(e[0])
}

function c_(e, t, n, r) {
    const {
        slots: s,
        attrs: i
    } = t;
    return () => {
        const o = () => {
                const c = {
                    part: !0
                };
                let u = Se();
                e.locale && (c.locale = e.locale), J(e.format) ? c.key = e.format : ge(e.format) && (J(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((h, g) => n.includes(g) ? Ge(Se(), h, {
                    [g]: e.format[g]
                }) : h, Se()));
                const f = r(e.value, c, u);
                let d = [c.key];
                return ze(f) ? d = f.map((h, g) => {
                    const p = s[h.type],
                        v = p ? p({
                            [h.type]: h.value,
                            index: g,
                            parts: f
                        }) : [h.value];
                    return hk(v) && (v[0].key = `${h.type}-${g}`), v
                }) : J(f) && (d = [f]), d
            },
            a = Ge(Se(), i),
            l = J(e.tag) || ge(e.tag) ? e.tag : l_();
        return ge(l) ? rt(l, a, {
            default: o
        }) : rt(l, a, o())
    }
}
const pk = yn({
        name: "i18n-n",
        props: Ge({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, Hu),
        setup(e, t) {
            const n = e.i18n || Nr({
                useScope: e.scope,
                __useComponent: !0
            });
            return c_(e, t, r_, (...r) => n[xc](...r))
        }
    }),
    bh = pk;

function gk(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global; {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function mk(e) {
    const t = o => {
        const {
            instance: a,
            value: l
        } = o;
        if (!a || !a.$) throw cn(Xt.UNEXPECTED_ERROR);
        const c = gk(e, a.$),
            u = vh(l);
        return [Reflect.apply(c.t, c, [...wh(u)]), c]
    };
    return {
        created: (o, a) => {
            const [l, c] = t(a);
            na && (o.__i18nWatcher = gt(c.locale, () => {
                a.instance && a.instance.$forceUpdate()
            })), o.__composer = c, o.textContent = l
        },
        unmounted: o => {
            na && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer)
        },
        beforeUpdate: (o, {
            value: a
        }) => {
            if (o.__composer) {
                const l = o.__composer,
                    c = vh(a);
                o.textContent = Reflect.apply(l.t, l, [...wh(c)])
            }
        },
        getSSRProps: o => {
            const [a] = t(o);
            return {
                textContent: a
            }
        }
    }
}

function vh(e) {
    if (J(e)) return {
        path: e
    };
    if (ye(e)) {
        if (!("path" in e)) throw cn(Xt.REQUIRED_VALUE, "path");
        return e
    } else throw cn(Xt.INVALID_VALUE)
}

function wh(e) {
    const {
        path: t,
        locale: n,
        args: r,
        choice: s,
        plural: i
    } = e, o = {}, a = r || {};
    return J(n) && (o.locale = n), st(s) && (o.plural = s), st(i) && (o.plural = i), [t, a, o]
}

function _k(e, t, ...n) {
    const r = ye(n[0]) ? n[0] : {};
    (!Ue(r.globalInstall) || r.globalInstall) && ([yh.name, "I18nT"].forEach(i => e.component(i, yh)), [bh.name, "I18nN"].forEach(i => e.component(i, bh)), [Th.name, "I18nD"].forEach(i => e.component(i, Th))), e.directive("t", mk(t))
}
const yk = Or("global-vue-i18n");

function bk(e = {}) {
    const t = Ue(e.globalInjection) ? e.globalInjection : !0,
        n = new Map,
        [r, s] = vk(e),
        i = Or("");

    function o(u) {
        return n.get(u) || null
    }

    function a(u, f) {
        n.set(u, f)
    }

    function l(u) {
        n.delete(u)
    }
    const c = {
        get mode() {
            return "composition"
        },
        async install(u, ...f) {
            if (u.__VUE_I18N_SYMBOL__ = i, u.provide(u.__VUE_I18N_SYMBOL__, c), ye(f[0])) {
                const g = f[0];
                c.__composerExtend = g.__composerExtend, c.__vueI18nExtend = g.__vueI18nExtend
            }
            let d = null;
            t && (d = Pk(u, c.global)), _k(u, c, ...f);
            const h = u.unmount;
            u.unmount = () => {
                d && d(), c.dispose(), h()
            }
        },
        get global() {
            return s
        },
        dispose() {
            r.stop()
        },
        __instances: n,
        __getInstance: o,
        __setInstance: a,
        __deleteInstance: l
    };
    return c
}

function Nr(e = {}) {
    const t = a_();
    if (t == null) throw cn(Xt.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw cn(Xt.NOT_INSTALLED);
    const n = wk(t),
        r = Sk(n),
        s = lk(t),
        i = Ek(e, s);
    if (i === "global") return ck(r, e, s), r;
    if (i === "parent") {
        let l = Eh(n, t, e.__useComponent);
        return l == null && (l = r), l
    }
    if (i === "isolated") {
        if (n.mode !== "composition") throw cn(Xt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const l = n,
            c = Ge({}, e),
            u = Eh(n, t);
        c.__root = u || r;
        const f = Ac(c);
        return l.__composerExtend && (f[Ps] = l.__composerExtend(f)), Ar() && us(() => {
            const h = f[Ps];
            h && (h(), delete f[Ps])
        }), f
    }
    const o = n;
    let a = o.__getInstance(t);
    if (a == null) {
        const l = Ge({}, e);
        "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), a = Ac(l), o.__composerExtend && (a[Ps] = o.__composerExtend(a)), Ck(o, t, a), o.__setInstance(t, a)
    }
    return a
}

function vk(e, t) {
    const n = cu(),
        r = n.run(() => Ac(e));
    if (r == null) throw cn(Xt.UNEXPECTED_ERROR);
    return [n, r]
}

function wk(e) {
    const t = pt(e.isCE ? yk : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw cn(e.isCE ? Xt.NOT_INSTALLED_WITH_PROVIDE : Xt.UNEXPECTED_ERROR);
    return t
}

function Ek(e, t) {
    return ja(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function Sk(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function Eh(e, t, n = !1) {
    let r = null;
    const s = t.root;
    let i = Tk(t, n);
    for (; i != null;) {
        const o = e;
        if (e.mode === "composition" && (r = o.__getInstance(i)), r != null || s === i) break;
        i = i.parent
    }
    return r
}

function Tk(e, t = !1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}

function Ck(e, t, n) {
    Lr(() => {}, t), ms(() => {
        const r = n;
        e.__deleteInstance(t);
        const s = r[Ps];
        s && (s(), delete r[Ps])
    }, t)
}
const kk = ["locale", "fallbackLocale", "availableLocales"],
    Sh = ["t", "rt", "d", "n", "tm", "te"];

function Pk(e, t) {
    const n = Object.create(null);
    return kk.forEach(s => {
        const i = Object.getOwnPropertyDescriptor(t, s);
        if (!i) throw cn(Xt.UNEXPECTED_ERROR);
        const o = Fe(i.value) ? {
            get() {
                return i.value.value
            },
            set(a) {
                i.value.value = a
            }
        } : {
            get() {
                return i.get && i.get()
            }
        };
        Object.defineProperty(n, s, o)
    }), e.config.globalProperties.$i18n = n, Sh.forEach(s => {
        const i = Object.getOwnPropertyDescriptor(t, s);
        if (!i || !i.value) throw cn(Xt.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${s}`, i)
    }), () => {
        delete e.config.globalProperties.$i18n, Sh.forEach(s => {
            delete e.config.globalProperties[`$${s}`]
        })
    }
}
const xk = yn({
        name: "i18n-d",
        props: Ge({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, Hu),
        setup(e, t) {
            const n = e.i18n || Nr({
                useScope: e.scope,
                __useComponent: !0
            });
            return c_(e, t, n_, (...r) => n[Pc](...r))
        }
    }),
    Th = xk;
HC(kC);
UC($C);
VC(Ec);

function Ak() {
    const e = oi(),
        t = ai();
    let n;
    try {
        n = Nr()
    } catch {}
    return ne(() => {
        if (t.value ? .statusCode && [404, 500].includes(t.value.statusCode)) return `${t.value.statusCode} - ${t.value.message}`;
        if (typeof e.meta ? .title == "string") return e.meta ? .title;
        const s = rr(e.path || "/").split("/").pop();
        let i = s ? PS(s) : null;
        const o = e.matched ? .at(-1);
        if (o) {
            const a = String(o.name).split("___") ? .[0];
            a && n && (i = n.t(`pages.${a}.title`, i || "", {
                missingWarn: !1
            }) || i)
        }
        return i
    })
}
const Lk = xe({
        name: "nuxt-seo:fallback-titles",
        env: {
            islands: !1
        },
        dependsOn: ["nuxt-site-config:i18n"],
        setup() {
            const e = Ak();
            Tr({
                title: () => e.value
            }, {
                tagPriority: 101
            })
        }
    }),
    Rk = /\.[0-9a-z]+$/i;

function Ok(e, t) {
    let n = e;
    xt(e, {
        strict: !1,
        acceptRelative: !0
    }) && (n = Sr(e).pathname);
    const r = Yo(t.base || "/");
    r !== "/" && n.startsWith(r) && (n = n.slice(r.length));
    let s = rr(t.absolute ? t.siteUrl : "");
    r !== "/" && s.endsWith(r) && (s = s.slice(0, s.indexOf(r)));
    const i = t.withBase ? Zl(r, s || "/") : s,
        o = Zl(n, i);
    return n === "/" && !t.withBase ? gs(o) : Nk(t.trailingSlash, o)
}
const Mk = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "ico", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "md", "markdown", "zip", "rar", "7z", "tar", "gz", "mp3", "wav", "flac", "ogg", "opus", "m4a", "aac", "midi", "mid", "mp4", "avi", "mkv", "mov", "wmv", "flv", "webm", "html", "css", "js", "json", "xml", "tsx", "jsx", "ts", "vue", "svelte", "xsl", "rss", "atom", "php", "py", "rb", "java", "c", "cpp", "h", "go", "csv", "tsv", "sql", "yaml", "yml", "woff", "woff2", "ttf", "otf", "eot", "exe", "msi", "apk", "ipa", "dmg", "iso", "bin", "bat", "cmd", "sh", "env", "htaccess", "conf", "toml", "ini", "deb", "rpm", "jar", "war", "epub", "mobi", "log", "tmp", "bak", "old", "sav"];

function Ik(e) {
    const n = (e.split("/").pop() || e).match(Rk) ? .[0];
    return !!(n && Mk.includes(n.replace(".", "")))
}

function Nk(e, t) {
    const n = Sr(t);
    if (Ik(n.pathname)) return t;
    const r = e ? gs(n.pathname) : rr(n.pathname);
    return `${n.protocol?`${n.protocol}//`:""}${n.host||""}${r}${n.search||""}${n.hash||""}`
}

function Dk(e) {
    return window.location.origin
}

function Fk(e) {
    return Dk()
}

function $k(e = {}) {
    const t = Nu(),
        n = Fk(),
        r = At().app.baseURL || "/";
    return s => ne(() => Ok(G(s), {
        absolute: G(e.absolute),
        withBase: G(e.withBase),
        siteUrl: G(e.canonical) !== !1 ? t.url : n,
        trailingSlash: t.trailingSlash,
        base: r
    }))
}
const Bk = /_/g;

function jk() {
    const e = Nu({
            resolveRefs: !1
        }),
        t = () => (Je(e.currentLocale) || Je(e.defaultLocale) || "en").replace(Bk, "-");
    li().use(am);
    const {
        canonicalQueryWhitelist: r,
        canonicalLowercase: s,
        tagPriority: i,
        separator: o,
        titleSeparator: a
    } = At().public["seo-utils"], l = oi(), c = $k({
        withBase: !0,
        absolute: !0
    }), u = ai(), f = () => Je(e.separator) || o || Je(e.titleSeparator) || a, d = () => Je(e.titleSeparator) || a || Je(e.separator) || o, h = ne(() => {
        if (u.value) return !1;
        const {
            query: y
        } = l;
        let m = c(l.path || "/").value || l.path;
        if (s) try {
            m = m.toLocaleLowerCase(t())
        } catch {
            m = m.toLowerCase()
        }
        const _ = Object.fromEntries(Object.entries(y).filter(([w]) => r.includes(w)).sort(([w], [k]) => w.localeCompare(k)));
        return {
            rel: "canonical",
            href: Object.keys(_).length ? `${m}?${Og(_)}` : m
        }
    }), g = {
        tagPriority: "low"
    }, p = {
        tagPriority: i
    };
    Tr({
        htmlAttrs: {
            lang: t
        },
        templateParams: {
            site: () => e,
            siteName: () => e.name,
            separator: f,
            titleSeparator: d
        },
        titleTemplate: () => u.value ? "%s" : "%s %separator %siteName",
        link: [() => h.value]
    }, g), dc({
        ogLocale: () => {
            const y = t();
            if (y) {
                const m = y.replace("-", "_");
                if (m.includes("_")) return m
            }
            return !1
        }
    }, g);
    const v = {
        ogType: "website",
        ogUrl: () => {
            const y = h.value;
            return y ? y.href : !1
        },
        ogSiteName: e.name
    };
    if (e.twitter) {
        const y = e.twitter.startsWith("@") ? e.twitter : `@${e.twitter}`;
        v.twitterCreator = y, v.twitterSite = y
    }
    dc(v, p)
}
const Hk = xe({
        name: "nuxt-seo:defaults",
        env: {
            islands: !1
        },
        dependsOn: ["nuxt-site-config:i18n"],
        setup() {
            jk()
        }
    }),
    Uk = ["i18n:plugin", "i18n:plugin:ssg-detect", "i18n:plugin:route-locale-detect"];

function Vk() {
    return ue().$nuxtSiteConfig
}

function u_(e) {
    const t = Je(e.locales).find(n => n.code === e.defaultLocale);
    return t ? .language || t ? .iso || e.defaultLocale
}

function Wk(e) {
    return Je(e.baseUrl) || void 0
}

function zk(e) {
    const t = Je(e.localeProperties);
    return t.language ? t.language : u_(e)
}

function qk(e) {
    return e.te("nuxtSiteConfig.description") ? e.t("nuxtSiteConfig.description") : void 0
}

function Gk(e) {
    return e.te("nuxtSiteConfig.name") ? e.t("nuxtSiteConfig.name") : void 0
}
const Kk = xe({
        name: "nuxt-site-config:i18n",
        dependsOn: Uk,
        setup(e) {
            const t = e.$i18n;
            if (!t) return;
            const n = Vk(),
                r = Je(t.baseUrl);
            if (r) {
                const u = n.get({
                        resolveRefs: !0
                    }),
                    f = u.url;
                if (f && !f.includes("localhost")) {
                    const d = Sr(r, "https://"),
                        h = Sr(f, "https://");
                    d.host !== h.host && u.env === "production" && console.error(`[Nuxt Site Config] Your I18n baseUrl \`${d.host}\` doesn't match your site url ${h.host}. This will cause production SEO issues. Either provide a matching baseUrl or remove the site url config.`)
                }
            }
            const s = ne(() => u_(t)),
                i = ne(() => Wk(t)),
                o = ne(() => zk(t)),
                a = ne(() => qk(t)),
                l = ne(() => Gk(t));
            let c;
            gt(t.locale, () => {
                c && c(), c = n.push({
                    _priority: lT.build,
                    _context: "@nuxtjs/i18n",
                    url: i,
                    defaultLocale: s,
                    currentLocale: o,
                    description: a,
                    name: l
                })
            }, {
                immediate: !0
            })
        }
    }),
    Yk = Me(() => le(() =>
        import ("./DsiWM_Hb.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    Xk = Me(() => le(() =>
        import ("./B9RdDC9X.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    Jk = Me(() => le(() =>
        import ("./DXbpiPos.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    Qk = Me(() => le(() =>
        import ("./BIrG5hsJ.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    Zk = Me(() => le(() =>
        import ("./4Q7OUVUw.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    eP = Me(() => le(() =>
        import ("./Zo1vLZA6.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    tP = Me(() => le(() =>
        import ("./Cr7cPHe5.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    nP = Me(() => le(() =>
        import ("./CrMP6pXR.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    rP = Me(() => le(() =>
        import ("./DDIqwhVJ.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    sP = Me(() => le(() =>
        import ("./CTCSCcpX.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    iP = Me(() => le(() =>
        import ("./BarNcArM.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    oP = Me(() => le(() =>
        import ("./EWdC6ku7.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    aP = Me(() => le(() =>
        import ("./D8U_CNzW.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    lP = Me(() => le(() =>
        import ("./DCXksDw1.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    cP = Me(() => le(() =>
        import ("./VtmCIcIh.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    uP = Me(() => le(() =>
        import ("./AkmjTEQQ.js"), __vite__mapDeps([18, 19]),
        import.meta.url).then(e => e.default || e.default || e)),
    fP = Me(() => le(() =>
        import ("./C4phlT7M.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    dP = Me(() => le(() =>
        import ("./BJ0TtoOb.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    hP = Me(() => le(() =>
        import ("./DO2i98HR.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    pP = Me(() => le(() =>
        import ("./CoGG4PNy.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    gP = Me(() => le(() =>
        import ("./Mtabl3TV.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    mP = Me(() => le(() =>
        import ("./BKu1y8bp.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    _P = Me(() => le(() =>
        import ("./DZkGU4uO.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    yP = Me(() => le(() =>
        import ("./dmbLpPOg.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    bP = Me(() => le(() =>
        import ("./Cwlx2y51.js"), [],
        import.meta.url).then(e => e.default || e.default || e)),
    vP = [
        ["ProseA", Yk],
        ["ProseBlockquote", Xk],
        ["ProseCode", Jk],
        ["ProseEm", Qk],
        ["ProseH1", Zk],
        ["ProseH2", eP],
        ["ProseH3", tP],
        ["ProseH4", nP],
        ["ProseH5", rP],
        ["ProseH6", sP],
        ["ProseHr", iP],
        ["ProseImg", oP],
        ["ProseLi", aP],
        ["ProseOl", lP],
        ["ProseP", cP],
        ["ProsePre", uP],
        ["ProseScript", fP],
        ["ProseStrong", dP],
        ["ProseTable", hP],
        ["ProseTbody", pP],
        ["ProseTd", gP],
        ["ProseTh", mP],
        ["ProseThead", _P],
        ["ProseTr", yP],
        ["ProseUl", bP]
    ],
    wP = xe({
        name: "nuxt:global-components",
        setup(e) {
            for (const [t, n] of vP) e.vueApp.component(t, n), e.vueApp.component("Lazy" + t, n)
        }
    }),
    xo = {},
    EP = xe({
        name: "nuxt:prefetch",
        setup(e) {
            const t = Pt();
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async n => {
                    const r = n ? .meta ? .layout;
                    r && typeof xo[r] == "function" && await xo[r]()
                })
            }), e.hooks.hook("link:prefetch", n => {
                if (xt(n)) return;
                const r = t.resolve(n);
                if (!r) return;
                const s = r.meta.layout;
                let i = jm(r.meta.middleware);
                i = i.filter(o => typeof o == "string");
                for (const o of i) typeof bc[o] == "function" && bc[o]();
                typeof s == "string" && s in xo && ZS(xo[s])
            })
        }
    });
var Uu, Ys, ns, Ce = {};

function SP(e) {
    return Object.assign(e, {
        autoCapturePageviews: e.autoCapturePageviews !== !1,
        logging: e.logging !== !1,
        bindToWindow: e.bindToWindow !== !1
    })
}

function TP(e) {
    if (Ce.isInitialized) throw Error("plausible.init() can only be called once");
    if (!e || !e.domain) throw Error("plausible.init(): domain argument is required");
    e.endpoint || (e.endpoint = "https://plausible.io/api/event"), Object.assign(Ce, e), Ce.isInitialized = !0
}

function f_(e, t, n) {
    window.fetch && fetch(e, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        keepalive: !0,
        body: JSON.stringify(t)
    }).then(function(r) {
        n && n.callback && n.callback({
            status: r.status
        })
    }).catch(function(r) {
        n && n.callback && n.callback({
            error: r
        })
    })
}
var Lc = !1,
    d_ = location.href,
    h_ = {},
    Rc = -1,
    rs = 0,
    qi = 0;

function CP() {
    Lc && (p_(), Ys = Oc(), ns = Mc())
}

function kP(e) {
    Uu = !1, d_ = e.u, h_ = e.p, Rc = -1, qi = 0, rs = Date.now(), xP()
}

function PP() {
    Uu = !0
}

function p_() {
    var e = g_();
    if (!Uu && (Rc < ns || e >= 3e3)) {
        Rc = ns;
        var t = {
            n: "engagement",
            sd: Math.round(ns / Ys * 100),
            d: Ce.domain,
            u: d_,
            p: h_,
            e,
            v: 34
        };
        rs = 0, qi = 0, Ce.hashBasedRouting && (t.h = 1), f_(Ce.endpoint, t)
    }
}

function Tl() {
    document.visibilityState === "visible" && document.hasFocus() && rs === 0 ? rs = Date.now() : document.visibilityState !== "hidden" && document.hasFocus() || (qi = g_(), rs = 0, p_())
}

function xP() {
    Lc || (document.addEventListener("visibilitychange", Tl), window.addEventListener("blur", Tl), window.addEventListener("focus", Tl), Lc = !0)
}

function g_() {
    return rs ? qi + (Date.now() - rs) : qi
}

function Oc() {
    var e = document.body || {},
        t = document.documentElement || {};
    return Math.max(e.scrollHeight || 0, e.offsetHeight || 0, e.clientHeight || 0, t.scrollHeight || 0, t.offsetHeight || 0, t.clientHeight || 0)
}

function Mc() {
    var e, t;
    return e = window.innerHeight, t = window.scrollY, Ys <= e ? Ys : t + e
}

function AP() {
    Ys = Oc(), ns = Mc(), new ResizeObserver(function() {
        Ys = Oc()
    }).observe(document.documentElement), document.addEventListener("scroll", function() {
        var e = Mc();
        e > ns && (ns = e)
    })
}

function Mn(e, t) {
    if (!Ce.isInitialized) throw Error("plausible.track() can only be called after plausible.init()");
    var n, r = e === "pageview";
    if (r && CP(), !Ce.captureOnLocalhost) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) || location.protocol === "file:") return Ao(e, t, "localhost");
        if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) return Ao(e, t)
    }
    try {
        if (window.localStorage.plausible_ignore === "true") return Ao(e, t, "localStorage flag")
    } catch {}
    var s = {};
    s.n = e, s.v = 34;
    var i = t && (t.u || t.url);
    if (s.u = i || location.href, s.d = Ce.domain, s.r = document.referrer || null, t && t.props && (s.p = t.props), t && t.interactive === !1 && (s.i = !1), t && t.revenue && (s.$ = t.revenue), Ce.customProperties) {
        var n = Ce.customProperties;
        typeof n == "function" && (n = Ce.customProperties(e)), typeof n == "object" && (s.p = Object.assign({}, n, s.p))
    }
    if (Ce.hashBasedRouting && (s.h = 1), typeof Ce.transformRequest == "function" && !(s = Ce.transformRequest(s))) return Ao(e, t, "transformRequest");
    r && kP(s), f_(Ce.endpoint, s, t)
}

function Ao(e, t, n) {
    n && Ce.logging && console.warn("Ignoring Event: " + n), t && t.callback && t.callback(), e === "pageview" && PP()
}
var LP = ["pdf", "xlsx", "docx", "txt", "rtf", "csv", "exe", "key", "pps", "ppt", "pptx", "7z", "pkg", "rar", "gz", "zip", "avi", "mov", "mp4", "mpeg", "wmv", "midi", "mp3", "wav", "wma", "dmg"],
    m_ = 1,
    __ = 3,
    y_ = LP;

function RP(e) {
    for (; e && (e.tagName === void 0 || !b_(e) || !e.href);) e = e.parentNode;
    return e
}

function b_(e) {
    return e && e.tagName && e.tagName.toLowerCase() === "a"
}

function Ch(e) {
    if (e.type !== "auxclick" || e.button === m_) {
        var t = RP(e.target),
            n = t && typeof t.href == "string" && t.href.split("?")[0];
        if (!Wu(t, 0)) {
            if (Ce.outboundLinks && OP(t)) return Ic(e, t, {
                name: "Outbound Link: Click",
                props: {
                    url: t.href
                }
            });
            if (Ce.fileDownloads && MP(n)) return Ic(e, t, {
                name: "File Download",
                props: {
                    url: n
                }
            })
        }
    }
}

function Ic(e, t, n) {
    var r;
    (r = {
        props: n.props
    }).revenue = n.revenue, Mn(n.name, r)
}

function OP(e) {
    return e && typeof e.href == "string" && e.host && e.host !== location.host
}

function MP(e) {
    if (!e) return !1;
    var t = e.split(".").pop();
    return y_.some(function(n) {
        return n === t
    })
}

function Vu(e) {
    var t = e && e.classList;
    if (t) {
        for (var n = 0; n < t.length; n++)
            if (t.item(n).match(/plausible-event-name(=|--)(.+)/)) return !0
    }
    return !1
}

function Wu(e, t) {
    return !!e && !(t > __) && (!!Vu(e) || Wu(e.parentNode, t + 1))
}

function kh(e) {
    var t = Vu(e) ? e : e && e.parentNode,
        n = {
            name: null,
            props: {}
        };
    n.revenue = {};
    var r = t && t.classList;
    if (!r) return n;
    for (var s = 0; s < r.length; s++) {
        var i, o, a = r.item(s),
            l = a.match(/plausible-event-(.+)(=|--)(.+)/);
        l && (i = l[1], o = l[3].replace(/\+/g, " "), i.toLowerCase() == "name" ? n.name = o : n.props[i] = o);
        var c = a.match(/plausible-revenue-(.+)(=|--)(.+)/);
        c && (i = c[1], o = c[3], n.revenue[i] = o)
    }
    return n
}

function IP() {
    function e(t) {
        if (t.type !== "auxclick" || t.button === m_) {
            for (var n, r, s, i = t.target, o = 0; o <= __ && i; o++) {
                if ((n = i) && n.tagName && n.tagName.toLowerCase() === "form") return;
                b_(i) && (r = i), Vu(i) && (s = i), i = i.parentNode
            }
            if (s) {
                var a = kh(s);
                if (r) a.props.url = r.href, Ic(t, r, a);
                else {
                    var l = {};
                    l.props = a.props, l.revenue = a.revenue, Mn(a.name, l)
                }
            }
        }
    }
    document.addEventListener("click", Ch), document.addEventListener("auxclick", Ch), Ce.fileDownloads && typeof Ce.fileDownloads == "object" && Array.isArray(Ce.fileDownloads.fileExtensions) && (y_ = Ce.fileDownloads.fileExtensions), Ce.formSubmissions && document.addEventListener("submit", function(t) {
        (t.target.hasAttribute("novalidate") || t.target.checkValidity()) && (Wu(t.target, 0) || Mn("Form: Submission"))
    }, !0), document.addEventListener("submit", function(t) {
        var n, r = kh(t.target);
        r.name && ((n = {
            props: r.props
        }).revenue = r.revenue, Mn(r.name, n))
    }), document.addEventListener("click", e), document.addEventListener("auxclick", e)
}

function NP(e) {
    function t(o) {
        (Ce.hashBasedRouting || !o || n !== location.pathname) && (n = location.pathname, e("pageview"))
    }
    var n, r = function() {
        t(!0)
    };
    if (Ce.hashBasedRouting) window.addEventListener("hashchange", r);
    else {
        var s = window.history;
        if (s.pushState) {
            var i = s.pushState;
            s.pushState = function() {
                i.apply(this, arguments), r()
            }, window.addEventListener("popstate", r)
        }
    }
    document.visibilityState === "hidden" || document.visibilityState === "prerender" ? document.addEventListener("visibilitychange", function() {
        n || document.visibilityState !== "visible" || t()
    }) : t(), window.addEventListener("pageshow", function(o) {
        o.persisted && t()
    })
}

function v_(e) {
    TP(SP(e || {})), AP(), Ce.autoCapturePageviews && NP(Mn), IP(), Ce.bindToWindow && typeof window < "u" && (window.plausible = Mn, window.plausible.s = "npm", window.plausible.v = 34, window.plausible.l = !0)
}
const DP = xe({
    name: "plausible",
    setup() {
        const {
            plausible: e
        } = At().public;
        return e.enabled ? (v_({
            domain: e.domain || window.location.hostname,
            endpoint: sr(e.proxy ? Yo(e.proxyBaseEndpoint) : e.apiHost, "api/event"),
            autoCapturePageviews: e.autoPageviews,
            hashBasedRouting: e.hashMode,
            outboundLinks: e.autoOutboundTracking,
            fileDownloads: e.fileDownloads,
            formSubmissions: e.formSubmissions,
            captureOnLocalhost: !e.ignoredHostnames.includes("localhost"),
            logging: e.logIgnoredEvents,
            transformRequest: FP(e.ignoredHostnames, e.ignoreSubDomains)
        }), {
            provide: {
                plausible: {
                    trackEvent(n, r) {
                        Mn(n, r ? ? {})
                    },
                    trackPageview(n) {
                        Mn("pageview", n ? ? {})
                    }
                }
            }
        }) : void 0
    }
});

function FP(e, t) {
    const n = e.filter(r => r !== "localhost");
    if (n.length !== 0) return r => {
        const {
            hostname: s
        } = window.location;
        return n.some(o => t ? s === o || s.endsWith(`.${o}`) : s === o) ? null : r
    }
}
async function $P(e) {
    const t = Rr("studio-session", () => null),
        n = At().public.studio,
        r = Mu("studio-session-check");
    if (n.dev) return await e({
        provider: "github",
        email: "dev@nuxt.com",
        name: "Dev",
        accessToken: "",
        providerId: "",
        avatar: ""
    });
    t.value = String(r.value) === "true" ? await $fetch("/__nuxt_studio/auth/session").then(i => i ? .user ? ? null) : null;
    let s = !1;
    if (t.value ? .email) {
        const i = await Da();
        i.prerendered = [], await e(t.value), s = !0
    } else s ? window.location.reload() : document.addEventListener("keydown", i => {
        i.metaKey && i.key === "." && setTimeout(() => {
            window.location.href = n.route + "?redirect=" + encodeURIComponent(window.location.pathname)
        })
    })
}
const BP = xe(() => {
    $P(async e => {
        const t = At(),
            r = (await (t.public.studio.dev ? le(() =>
                import ("./C24D6pZf.js"), __vite__mapDeps([20, 21, 12]),
                import.meta.url) : le(() =>
                import ("./C5CB_klN.js").then(s => s.l), __vite__mapDeps([21, 12]),
                import.meta.url)).then(s => s.useStudioHost))(e, t.public.studio.repository);
        window.useStudioHost = () => r, await le(() =>
            import ("/_studio-app/1.7.0/main.js"), [],
            import.meta.url), document.body.appendChild(document.createElement("nuxt-studio"))
    })
});

function Nc(e, t = e.getCurrentLanguage(), n = e.getCurrentDirection()) {
    const r = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (e.dir && (r.htmlAttrs.dir = n), e.lang && t && (r.htmlAttrs.lang = t), e.seo) {
        const s = HP(e);
        r.link = r.link.concat(s, VP(e)), r.meta = r.meta.concat(WP(e), zP(e), qP(e, e.locales.map(i => i.language || i.code)))
    }
    return r
}

function jP(e) {
    const t = new Map;
    for (const n of e) {
        if (!n.language) {
            console.warn("Locale `language` ISO code is required to generate alternate link");
            continue
        }
        const [r, s] = n.language.split("-");
        r && s && (n.isCatchallLocale || !t.has(r)) && t.set(r, n), t.set(n.language, n)
    }
    return t
}

function HP(e) {
    if (!e.hreflangLinks) return [];
    const t = [],
        n = jP(e.locales);
    for (const [r, s] of n.entries()) {
        const i = UP(r, s, e);
        i && (t.push(i), e.defaultLocale && e.defaultLocale === s.code && t[0].hreflang !== "x-default" && t.unshift({
            [e.key]: "i18n-xd",
            rel: "alternate",
            href: i.href,
            hreflang: "x-default"
        }))
    }
    return t
}

function UP(e, t, n, r = n.strictCanonicals ? n.getRouteWithoutQuery() : void 0) {
    const s = n.getLocalizedRoute(t.code, r);
    if (!s) return;
    const i = Ma(xt(s) ? s : sr(n.baseUrl, s), n.strictCanonicals ? E_(n) : {});
    return {
        [n.key]: `i18n-alt-${e}`,
        rel: "alternate",
        href: i,
        hreflang: e
    }
}

function w_(e, t = e.getCurrentRoute()) {
    const n = e.getLocaleRoute(Object.assign({}, t, {
        path: void 0,
        name: e.getRouteBaseName(t)
    }));
    return n ? Ma(sr(e.baseUrl, n.path), E_(e)) : ""
}

function VP(e, t = w_(e)) {
    return t ? [{
        [e.key]: "i18n-can",
        rel: "canonical",
        href: t
    }] : []
}

function E_(e, t = e.getCurrentRoute()) {
    const r = e.getLocaleRoute(Object.assign({}, t, {
            path: void 0,
            name: e.getRouteBaseName(t)
        })) ? .query ? ? {},
        s = {};
    for (const i of e.canonicalQueries.filter(o => o in r)) {
        s[i] ? ? = [];
        for (const o of GP(r[i])) s[i].push(o || "")
    }
    return s
}

function WP(e, t = w_(e)) {
    return t ? [{
        [e.key]: "i18n-og-url",
        property: "og:url",
        content: t
    }] : []
}

function zP(e, t = e.getCurrentLanguage()) {
    return t ? [{
        [e.key]: "i18n-og",
        property: "og:locale",
        content: S_(t)
    }] : []
}

function qP(e, t, n = e.getCurrentLanguage()) {
    return t.filter(s => s && s !== n).map(s => ({
        [e.key]: `i18n-og-alt-${s}`,
        property: "og:locale:alternate",
        content: S_(s)
    }))
}

function S_(e = "") {
    return e.replace(/-/g, "_")
}

function GP(e) {
    return Array.isArray(e) ? e : [e]
}

function oa(e, t, n = e.getLocale()) {
    if (J(t) && xt(t, {
            acceptRelative: !0
        })) return t;
    try {
        return C_(e, t, n).fullPath
    } catch {
        return ""
    }
}

function T_(e, t, n = e.getLocale()) {
    try {
        return C_(e, t, n)
    } catch {
        return
    }
}

function KP(e) {
    if (!J(e)) return Ge({}, e);
    if (e[0] === "/") {
        const {
            pathname: t,
            search: n,
            hash: r
        } = ec(e);
        return {
            path: t,
            query: Oa(n),
            hash: r
        }
    }
    return {
        name: e
    }
}

function C_(e, t, n) {
    const r = KP(t),
        s = e.router.resolve(e.resolveLocalizedRouteObject(r, n));
    return s.name ? s : e.router.resolve(t)
}

function zu(e, t, n = e.router.currentRoute.value) {
    const r = e.getRouteBaseName(n);
    if (!r) return "";
    const s = {
            name: r,
            params: Ge({}, n.params, e.getLocalizedDynamicParams(t)),
            fullPath: n.fullPath,
            query: n.query,
            hash: n.hash,
            path: n.path,
            meta: n.meta
        },
        i = oa(e, s, t);
    return e.afterSwitchLocalePath(i, t)
}

function Dc(e, t, n = e.getLocale(), r = e.getLocales(), s = e.getBaseUrl()) {
    const i = r.find(a => a.code === n) || {},
        o = typeof t.seo == "object" && t.seo ? .canonicalQueries || [];
    return s || console.warn("I18n `baseUrl` is required to generate valid SEO tag links."), { ...t,
        key: "id",
        locales: r,
        baseUrl: s,
        canonicalQueries: o,
        hreflangLinks: e.routingOptions.hreflangLinks,
        defaultLocale: e.routingOptions.defaultLocale,
        strictCanonicals: e.routingOptions.strictCanonicals,
        getRouteBaseName: e.getRouteBaseName,
        getCurrentRoute: () => e.router.currentRoute.value,
        getCurrentLanguage: () => i.language,
        getCurrentDirection: () => i.dir || "ltr",
        getLocaleRoute: a => T_(e, a),
        getLocalizedRoute: (a, l) => zu(e, a, l),
        getRouteWithoutQuery: () => {
            try {
                return Ge({}, e.router.resolve({
                    query: {}
                }), {
                    meta: e.router.currentRoute.value.meta
                })
            } catch {
                return
            }
        }
    }
}

function YP(e, {
    dir: t = !0,
    lang: n = !0,
    seo: r = !0
}) {
    return Nc(Dc(e, {
        dir: t,
        lang: n,
        seo: r
    }))
}

function XP(e, t) {
    const n = lt(Nc(Dc(e, t))); {
        const r = gt([() => e.router.currentRoute.value, () => e.getLocale()], () => {
            n.value = Nc(Dc(e, t))
        });
        Ar() && us(r)
    }
    return n
}

function JP(e = 0) {
    return t => {
        const s = (typeof t == "string" ? t : t.pathname).split("?")[0].split("/");
        return s[0] === "" && s.shift(), s.length > e && s[e] || ""
    }
}
const Wa = "___",
    QP = "default",
    WR = Wa + QP;

function k_(e) {
    return typeof e == "string" ? e : e != null ? e.toString() : ""
}

function Cl(e) {
    return k_(typeof e == "object" ? e ? .name : e).split(Wa)[0]
}

function ZP(e, t, n) {
    return e + Wa + t
}
const ex = JP(0),
    Fc = e => ex(e),
    tx = e => e.split(Wa).at(1) ? ? "";

function nx(e) {
    return String(typeof e != "object" ? e : e ? .name || e ? .path || "")
}

function rx(e) {
    const t = nx(e);
    if (t[0] === "/") return Fc(t);
    const n = tx(t);
    return n || (typeof e == "object" && e ? .path ? Fc(String(e.path)) : "")
}

function sx(e) {
    return (t, n) => ZP(k_(t), n)
}

function ix(e) {
    return t => e.resolve(t)
}
const Gi = ["fr", "en"],
    aa = {
        fr: [],
        en: []
    },
    ox = [],
    io = [{
        code: "fr",
        name: "French",
        language: "fr-FR",
        dir: "ltr"
    }, {
        code: "en",
        name: "English",
        language: "en-US",
        dir: "ltr"
    }],
    P_ = new Map,
    ax = qg((e, t, n) => {
        if (t === "messages" || t === "datetimeFormats" || t === "numberFormats") return e[t] ? ? = Se(null), Fs(n, e[t]), !0
    });
async function lx(e) {
    const t = ue();
    let n = {
        messages: Se(null)
    };
    for (const r of e) {
        const s = await r().then(o => x_(o) ? o.default : o),
            i = $e(s) ? await t.runWithContext(() => s()) : s;
        n = ax(Se(null), i, n)
    }
    return n.fallbackLocale ? ? = !1, n
}
const x_ = e => Ha(e) === "[object Module]";
async function cx(e, t) {
    const n = ue();
    try {
        const r = await n.runWithContext(t.load).then(s => x_(s) ? s.default : s);
        return $e(r) ? await n.runWithContext(() => r(e)) : r
    } catch (r) {
        throw new Error(`Failed loading locale (${e}): ` + r.message)
    }
}
async function ux(e, t = []) {
    const n = ue(),
        r = await Promise.all(t.map(async i => {
            const o = fx(i),
                a = o || await n.runWithContext(() => cx(e, i));
            return !o && i.cache !== !1 && P_.set(i.key, {
                ttl: Date.now() + 86400 * 1e3,
                value: a
            }), a
        })),
        s = {};
    for (const i of r) Fs(i, s);
    return s
}

function fx(e) {
    if (e.cache === !1) return;
    const t = P_.get(e.key);
    if (t != null) return t.ttl > Date.now() ? t.value : void 0
}

function qu(e) {
    return e != null && "global" in e && "mode" in e ? e.global : e
}

function Lo(e) {
    const t = qu(e);
    return "__composer" in t ? t.__composer : t
}

function za(e, t) {
    return e ? e.$config.public.i18n : At().public.i18n
}

function oo(e) {
    const t = za(e).detectBrowserLanguage,
        n = t || {};
    return { ...n,
        enabled: !!t,
        cookieKey: n.cookieKey || "i18n_redirected"
    }
}

function dx(e) {
    if (e) return {
        path: "/" + (J(e) ? e : e.path).replace(/^\//, ""),
        code: !J(e) && e.statusCode || 302
    }
}

function hx(e) {
    return Array.isArray(e) ? e : [e]
}

function px(e, t, n) {
    const r = (i = "") => i.replace(/https?:\/\//, ""),
        s = e.filter(i => r(i.domain) === t || hx(i.domains).includes(t));
    return s.length <= 1 ? s[0] ? .code : s.find(i => i.code === n) ? .code || s.find(i => i.defaultForDomains ? .includes(t) ? ? i.domainDefault) ? .code
}

function gx(e, t, n) {
    const r = io.find(i => i.code === n),
        s = e ? .[n] ? .domain || r ? .domain || r ? .domains ? .find(i => i === t.host);
    if (s) return xt(s, {
        strict: !0
    }) ? s : t.protocol + "//" + s
}

function mx(e) {
    const t = {};
    for (const n of Gi) {
        const r = _x(e, [n]),
            s = yx(n, r);
        t[n] = {
            fallbacks: r,
            cacheable: s
        }
    }
    return t
}

function _x(e, t) {
    if (e === !1) return [];
    if (ze(e)) return e;
    let n = [];
    if (J(e)) return t.every(s => s !== e) && n.push(e), n;
    const r = [...t, "default"];
    for (const s of r) s in e && (n = [...n, ...e[s].filter(Boolean)]);
    return n
}

function Ph(e) {
    return aa[e] != null && aa[e].every(t => t.cache !== !1)
}

function yx(e, t) {
    return Ph(e) && t.every(n => Ph(n))
}

function bx(e) {
    return io.find(t => !!t.defaultForDomains ? .includes(e)) ? .code
}
const ss = e => Gi.includes(e || ""),
    xh = e => ss(e) ? e : void 0;
var vx = {
    fr: "e3b0c442",
    en: "e3b0c442"
};
const A_ = () => Rr("i18n:cached-locale-configs", () => {}),
    L_ = () => Rr("i18n:resolved-locale", () => "");

function wx({
    cookieCrossOrigin: e,
    cookieDomain: t,
    cookieSecure: n,
    cookieKey: r
}) {
    const s = new Date;
    return Mu(r || "i18n_redirected", {
        path: "/",
        readonly: !1,
        expires: new Date(s.setDate(s.getDate() + 365)),
        sameSite: e ? "none" : "lax",
        domain: t || void 0,
        secure: e || n
    })
}

function Ex(e, t, n) {
    const r = qu(t),
        s = za(e),
        i = oo(e),
        o = A_(),
        a = wx(i),
        l = new Set,
        c = v => o.value[v],
        u = v => gx(s.domainLocales, $m(), v),
        f = Dx(e, s.baseUrl),
        d = L_(),
        h = async v => {
            const y = c(v) ? .fallbacks ? ? [];
            y.includes(v) || y.push(v);
            for (const m of y) {
                const _ = await e.runWithContext(() => ux(m, aa[m]));
                r.mergeLocaleMessage(m, _)
            }
        },
        g = async v => {
            if (!(v in aa)) return;
            const y = c(v) ? .cacheable ? {} : {
                    "Cache-Control": "no-cache"
                },
                m = await $fetch(`/_i18n/${vx[v]}/${v}/messages.json`, {
                    headers: y
                });
            for (const _ of Object.keys(m)) r.mergeLocaleMessage(_, m[_])
        },
        p = {
            vueI18n: t,
            initial: !0,
            preloaded: !1,
            config: s,
            rootRedirect: dx(s.rootRedirect),
            redirectStatusCode: s.redirectStatusCode ? ? 302,
            dynamicResourcesSSG: !1,
            getDefaultLocale: () => n,
            getLocale: () => G(r.locale),
            setLocale: async v => {
                const y = p.getLocale();
                v === y || !ss(v) || (Fe(r.locale) ? r.locale.value = v : r.locale = v, await e.callHook("i18n:localeSwitched", {
                    newLocale: v,
                    oldLocale: y
                }), d.value = v)
            },
            setLocaleSuspend: async v => {
                ss(v) && (p.vueI18n.__pendingLocale = v, p.vueI18n.__pendingLocalePromise = new Promise(y => {
                    p.vueI18n.__resolvePendingLocalePromise = async () => {
                        p.setCookieLocale(v), await p.setLocale(v), p.vueI18n.__pendingLocale = void 0, y()
                    }
                }), (e.isHydrating || !p.config.skipSettingLocaleOnNavigate) && await p.vueI18n.__resolvePendingLocalePromise ? .())
            },
            getLocales: () => G(r.locales).map(v => J(v) ? {
                code: v
            } : v),
            setCookieLocale: v => {
                i.useCookie && ss(v) && (a.value = v)
            },
            getBaseUrl: v => sr(v && u(v) || f(), e.$config.app.baseURL),
            loadMessages: async v => {
                if (!(e.isHydrating && l.has(v))) try {
                    return p.dynamicResourcesSSG ? await h(v) : await g(v)
                } catch (y) {
                    console.warn(`Failed to load messages for locale "${v}"`, y)
                } finally {
                    l.add(v)
                }
            },
            composableCtx: void 0
        };
    return p.composableCtx = Ox(p, e), p
}

function ao(e) {
    if (e._nuxtI18n == null) throw new Error("Nuxt I18n context has not been set up yet.");
    return e._nuxtI18n
}

function Sx(e, t) {
    const n = [];
    for (const [r, s] of t.entries()) {
        const i = e.find(o => o.language ? .toLowerCase() === s.toLowerCase());
        if (i) {
            n.push({
                code: i.code,
                score: 1 - r / t.length
            });
            break
        }
    }
    for (const [r, s] of t.entries()) {
        const i = s.split("-")[0].toLowerCase(),
            o = e.find(a => a.language ? .split("-")[0].toLowerCase() === i);
        if (o) {
            n.push({
                code: o.code,
                score: .999 - r / t.length
            });
            break
        }
    }
    return n
}

function Tx(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}

function Cx(e, t) {
    return Sx(e.map(r => ({
        code: r.code,
        language: r.language || r.code
    })), t).sort(Tx).at(0) ? .code ? ? ""
}
const kx = (e, t) => Mu(t).value || void 0,
    Px = (e, t) => rx(t),
    xx = e => Cx(io, navigator.languages),
    Ax = (e, t, n) => {
        const r = new URL(window.location.href).host,
            s = io.map(i => ({ ...i,
                domain: n[i.code] ? .domain ? ? i.domain
            }));
        return px(s, r, Fc(t))
    },
    qa = (e, t, n) => {
        const r = za(n);
        return {
            cookie: () => kx(e, t.cookieKey),
            header: () => {},
            navigator: () => xx(),
            host: s => Ax(e, s, r.domainLocales),
            route: s => Px(e, s)
        }
    },
    Lx = e => !!e.path && !e.name;

function ci(e) {
    const t = e ? ._nuxtI18n ? .composableCtx;
    if (!t) throw new Error("i18n context is not initialized. Ensure the i18n plugin is installed and the composable is used within a Vue component or setup function.");
    return t
}
const Rx = gs;

function Ox(e, t = ue()) {
    const n = Pt();
    qa(void 0, oo(t), t);
    const r = e.getDefaultLocale(),
        s = sx();

    function i(c, u) {
        c.name = Cl(c.name || n.currentRoute.value);
        const f = s(c.name, u);
        return n.hasRoute(f) && (c.name = f), c.name = f, c
    }
    const o = ix(n);

    function a(c, u) {
        const f = o(c, u),
            d = Cl(f);
        if (d) {
            const h = s(d, u);
            return n.hasRoute(h), f.name = h, f
        }
        return Nx(u, r) && (f.path = "/" + u + f.path), f.path = Rx(f.path, !0), f
    }
    const l = {
        router: n,
        _head: void 0,
        get head() {
            return this._head ? ? = Tr({}), this._head
        },
        metaState: {
            htmlAttrs: {},
            meta: [],
            link: []
        },
        seoSettings: {
            dir: !1,
            lang: !1,
            seo: !1
        },
        localePathPayload: Mx(),
        routingOptions: {
            defaultLocale: r,
            strictCanonicals: e.config.experimental.alternateLinkCanonicalQueries ? ? !0,
            hreflangLinks: !0
        },
        getLocale: e.getLocale,
        getLocales: e.getLocales,
        getBaseUrl: e.getBaseUrl,
        getRouteBaseName: Cl,
        getRouteLocalizedParams: () => n.currentRoute.value.meta.nuxtI18nInternal ? ? {},
        getLocalizedDynamicParams: c => l.getRouteLocalizedParams() ? .[c],
        afterSwitchLocalePath: (c, u) => (l.getRouteLocalizedParams(), c),
        resolveLocalizedRouteObject: (c, u) => Lx(c) ? a(c, u) : i(c, u)
    };
    return l
}

function Mx(e = ue()) {
    const t = document.querySelector(`[data-nuxt-i18n-slp="${e._id}"]`) ? .textContent;
    return JSON.parse(t || "{}")
}
async function $c(e, t) {
    const n = ao(e),
        r = n.getLocale();
    if (t === r && !n.initial && (!n.vueI18n.__pendingLocale || n.vueI18n.__pendingLocale === t)) return t;
    const s = {
        oldLocale: r,
        newLocale: t,
        initialSetup: n.initial,
        context: e
    };
    let i = await e.callHook("i18n:beforeLocaleSwitch", s);
    return i != null, i ? ? = s.newLocale, ss(i) && (t = i), await n.loadMessages(t), await n.setLocaleSuspend(t), t
}

function Ix(e, t, n) {
    return !!(e.redirectOn === "root" && t !== "/" || e.redirectOn === "no prefix" && !e.alwaysRedirect && ss(n))
}

function Bc(e, t) {
    const n = oo(e),
        r = qa(void 0, n, e),
        s = ao(e),
        i = J(t) ? t : t.path;

    function* o() {
        s.initial && n.enabled && !Ix(n, i, r.route(i)) && (yield r.cookie(), yield r.header(), yield r.navigator(), yield n.fallbackLocale), yield r.route(t)
    }
    for (const a of o())
        if (a && ss(a)) return a;
    return s.getLocale() || s.getDefaultLocale() || ""
}

function R_(e, t, n) {
    const r = ao(e),
        s = ci(e);
    if (t.path === "/" && r.rootRedirect) return ic(oa(s, r.rootRedirect.path, n), {
        redirectCode: r.rootRedirect.code
    });
    if (r.vueI18n.__pendingLocale && ue()._processingMiddleware || qa(void 0, oo(e), e).route(t) === n) return;
    const o = zu(s, n, t) || oa(s, t.fullPath, n);
    if (!Q0(o, t.fullPath)) return ic(o, {
        redirectCode: r.redirectStatusCode
    })
}

function Nx(e, t) {
    return e !== t || !1
}

function Dx(e, t, n, r) {
    return $e(t) ? () => t(e) : () => t ? ? ""
}

function Fx({
    dir: e = !0,
    lang: t = !0,
    seo: n = !0
} = {}, r = ue()) {
    const s = ci(r);
    s.seoSettings = {
        dir: e,
        lang: t,
        seo: n
    };
    const i = XP(s, s.seoSettings);
    return gt(i, () => s.metaState = i.value), s.metaState = i.value, i
}

function Ah(e = ue()) {
    const t = ci(e);
    return n => {
        if (n != null) return t.getRouteBaseName(n) || void 0
    }
}

function O_(e = ue()) {
    const t = ci(e);
    return (n, r) => oa(t, n, r)
}

function M_(e = ue()) {
    const t = ci(e);
    return (n, r) => T_(t, n, r)
}

function Gu(e = ue()) {
    const t = ci(e);
    return n => zu(t, n)
}
const Lh = "nuxt-i18n-slp",
    $x = new RegExp([`<!--${Lh}-\\[(\\w+)\\]-->`, ".+?", `<!--/${Lh}-->`].join(""), "g"),
    Bx = xe({
        name: "i18n:plugin:switch-locale-path-ssr",
        dependsOn: ["i18n:plugin"],
        setup(e) {
            const t = ue(e._id),
                n = Gu(t);
            t.hook("app:rendered", r => {
                r.renderResult ? .html != null && (r.renderResult.html = r.renderResult.html.replaceAll($x, (s, i) => {
                    const o = encodeURI(n(i ? ? ""));
                    return s.replace(/href="([^"]+)"/, `href="${o||"#"}" `)
                }))
            })
        }
    }),
    jx = xe({
        name: "i18n:plugin:route-locale-detect",
        dependsOn: ["i18n:plugin"],
        async setup(e) {
            let t, n;
            const r = ue(e._id),
                s = ao(r),
                i = L_();
            [t, n] = Zn(() => r.runWithContext(() => $c(r, s.initial && i.value || Bc(r, r.$router.currentRoute.value)))), await t, n(), zw("locale-changing", async o => {
                let a, l;
                const c = ([a, l] = Zn(() => r.runWithContext(() => $c(r, Bc(r, o)))), a = await a, l(), a);
                return s.initial = !1, r.runWithContext(() => R_(r, o, c))
            }, {
                global: !0
            })
        }
    }),
    Hx = xe({
        name: "i18n:plugin:preload",
        dependsOn: ["i18n:plugin"],
        async setup(e) {}
    });

function Ux(e, {
    extendComposer: t,
    extendComposerInstance: n
}) {
    const r = cu(),
        s = e.install.bind(e);
    e.install = (i, ...o) => {
        const a = Ge({}, o[0]);
        a.__composerExtend = c => (n(c, Lo(e)), () => {}), e.mode === "legacy" && (a.__vueI18nExtend = c => (n(c, Lo(c)), () => {})), Reflect.apply(s, e, [i, a]);
        const l = Lo(e);
        if (r.run(() => {
                t(l), e.mode === "legacy" && "__composer" in e.global && n(e.global, Lo(e.global))
            }), e.mode === "composition" && i.config.globalProperties.$i18n != null && n(i.config.globalProperties.$i18n, l), i.unmount) {
            const c = i.unmount.bind(i);
            i.unmount = () => {
                r.stop(), c()
            }
        }
    }
}
const Vx = async e => {
    const t = await lx(ox);
    t.locale = e || t.locale || "en-US", t.defaultLocale = e, t.fallbackLocale ? ? = !1, t.messages ? ? = {};
    for (const n of Gi) t.messages[n] ? ? = {};
    return t
};
var Wx = {
    fr: "e3b0c442",
    en: "e3b0c442"
};
const zx = xe({
        name: "i18n:plugin",
        parallel: !1,
        async setup(e) {
            let t, n;
            Object.defineProperty(e.versions, "nuxtI18n", {
                get: () => "10.3.0"
            });
            const r = ue(e._id),
                s = za(r),
                i = r.ssrContext ? .event ? .context ? .nuxtI18n ? .vueI18nOptions,
                o = bx($m().host) || s.defaultLocale || "",
                a = i || ([t, n] = Zn(() => Vx(o)), t = await t, n(), t),
                l = A_();
            l.value ? ? = mx(a.fallbackLocale), Gi.map(d => `/_i18n/${Wx[d]}/${d}/messages.json`);
            const c = bk(a),
                u = qa(void 0, oo(r), r),
                f = Ex(r, c, a.defaultLocale);
            r._nuxtI18n = f, Ux(c, {
                extendComposer(d) {
                    d.locales = ne(() => s.locales), d.localeCodes = ne(() => Gi);
                    const h = lt(f.getBaseUrl());
                    d.baseUrl = ne(() => h.value), gt(d.locale, () => h.value = f.getBaseUrl()), d.strategy = "prefix_except_default", d.localeProperties = ne(() => io.find(g => g.code === d.locale.value) || {
                        code: d.locale.value
                    }), d.setLocale = async g => {
                        await $c(r, g), await r.runWithContext(() => R_(r, r.$router.currentRoute.value, g))
                    }, d.loadLocaleMessages = f.loadMessages, d.differentDomains = !1, d.defaultLocale = a.defaultLocale, d.getBrowserLocale = () => xh(u.navigator()), d.getLocaleCookie = () => xh(u.cookie()), d.setLocaleCookie = f.setCookieLocale, d.finalizePendingLocaleChange = async () => {
                        c.__pendingLocale && await c.__resolvePendingLocalePromise ? .()
                    }, d.waitForPendingLocaleChange = async () => {
                        await c ? .__pendingLocalePromise
                    }
                },
                extendComposerInstance(d, h) {
                    const g = [
                        ["locales", () => h.locales],
                        ["localeCodes", () => h.localeCodes],
                        ["baseUrl", () => h.baseUrl],
                        ["strategy", () => "prefix_except_default"],
                        ["localeProperties", () => h.localeProperties],
                        ["setLocale", () => p => Reflect.apply(h.setLocale, h, [p])],
                        ["loadLocaleMessages", () => p => Reflect.apply(h.loadLocaleMessages, h, [p])],
                        ["differentDomains", () => !1],
                        ["defaultLocale", () => h.defaultLocale],
                        ["getBrowserLocale", () => () => Reflect.apply(h.getBrowserLocale, h, [])],
                        ["getLocaleCookie", () => () => Reflect.apply(h.getLocaleCookie, h, [])],
                        ["setLocaleCookie", () => p => Reflect.apply(h.setLocaleCookie, h, [p])],
                        ["finalizePendingLocaleChange", () => () => Reflect.apply(h.finalizePendingLocaleChange, h, [])],
                        ["waitForPendingLocaleChange", () => () => Reflect.apply(h.waitForPendingLocaleChange, h, [])]
                    ];
                    for (const [p, v] of g) Object.defineProperty(d, p, {
                        get: v
                    })
                }
            }), r.vueApp.use(c), Object.defineProperty(r, "$i18n", {
                get: () => qu(c)
            }), r.provide("localeHead", d => YP(r._nuxtI18n.composableCtx, d)), r.provide("localePath", O_(r)), r.provide("localeRoute", M_(r)), r.provide("routeBaseName", Ah(r)), r.provide("getRouteBaseName", Ah(r)), r.provide("switchLocalePath", Gu(r))
        }
    }),
    qx = {
        content_en: "v3.5.0--D_uMlFVgRJKGapF2womAKM028Tm3gsSq1Lg6ybtA1T8",
        content_fr: "v3.5.0--w-SiF-Vg4tWZnuYAAmZXijIzh8kkMsf_CnyiZp6pUHk",
        legals_en: "v3.5.0--vV3c0LBs9bSPBONQ_ugfiVuRBmfCw51xNkQZHBe0a30",
        legals_fr: "v3.5.0--TyhhVq3pD2aBcjOdOTEdsXVRKhgo-NKCkatSgia9HdY",
        privacy_en: "v3.5.0--ZsS5qcZVGfcjNFYMrmHDiMXnJOaoEvB-wb_M4SmITKo",
        privacy_fr: "v3.5.0--j1Q3fPf_HvEILOfLJWRyTbPa3iv7M7Vkd0VNAmWkE6w",
        contact_en: "v3.5.0---hBktPXk6vjc-45Ksznp5SrYT5DHqLhAhh94kIYa0O4",
        contact_fr: "v3.5.0--5gZnP1wq6Gg4JJmmONemoUcG6PlmOzAzDT6VwLy701A",
        calculator_en: "v3.5.0--6N8F59tWfrR9cTEF2vi9yTD2REEJvoKIIywLtiJUT8g",
        calculator_fr: "v3.5.0--6NIClhgS8bHm-zk7Rv9WVCDnUrpaVkiwYdVCHMJc9N4"
    },
    Gx = {
        content_en: "_content_content_en",
        content_fr: "_content_content_fr",
        legals_en: "_content_legals_en",
        legals_fr: "_content_legals_fr",
        privacy_en: "_content_privacy_en",
        privacy_fr: "_content_privacy_fr",
        contact_en: "_content_contact_en",
        contact_fr: "_content_contact_fr",
        calculator_en: "_content_calculator_en",
        calculator_fr: "_content_calculator_fr",
        info: "_content_info"
    },
    zR = {
        content_en: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                author: "string",
                body: "json",
                catchphrase: "json",
                dateModified: "string",
                datePublished: "string",
                delivery: "json",
                description: "string",
                execution: "json",
                extension: "string",
                faq: "json",
                finalCTA: "json",
                hero: "json",
                meta: "json",
                navigation: "json",
                path: "string",
                pricing: "json",
                recurring: "json",
                seo: "json",
                showreel: "json",
                siteHead: "json",
                stem: "string",
                strings: "json",
                usps: "json"
            }
        },
        content_fr: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                author: "string",
                body: "json",
                catchphrase: "json",
                dateModified: "string",
                datePublished: "string",
                delivery: "json",
                description: "string",
                execution: "json",
                extension: "string",
                faq: "json",
                finalCTA: "json",
                hero: "json",
                meta: "json",
                navigation: "json",
                path: "string",
                pricing: "json",
                recurring: "json",
                seo: "json",
                showreel: "json",
                siteHead: "json",
                stem: "string",
                strings: "json",
                usps: "json"
            }
        },
        legals_en: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                dateModified: "string",
                datePublished: "string",
                description: "string",
                extension: "string",
                meta: "json",
                navigation: "json",
                path: "string",
                seo: "json",
                stem: "string"
            }
        },
        legals_fr: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                dateModified: "string",
                datePublished: "string",
                description: "string",
                extension: "string",
                meta: "json",
                navigation: "json",
                path: "string",
                seo: "json",
                stem: "string"
            }
        },
        privacy_en: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                dateModified: "string",
                datePublished: "string",
                description: "string",
                extension: "string",
                meta: "json",
                navigation: "json",
                path: "string",
                seo: "json",
                stem: "string"
            }
        },
        privacy_fr: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                dateModified: "string",
                datePublished: "string",
                description: "string",
                extension: "string",
                meta: "json",
                navigation: "json",
                path: "string",
                seo: "json",
                stem: "string"
            }
        },
        contact_en: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                description: "string",
                extension: "string",
                form: "json",
                meta: "json",
                navigation: "json",
                path: "string",
                seo: "json",
                stem: "string",
                steps: "json",
                text: "json",
                textSuccess: "json",
                timezone: "string",
                titleSuccess: "string"
            }
        },
        contact_fr: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                description: "string",
                extension: "string",
                form: "json",
                meta: "json",
                navigation: "json",
                path: "string",
                seo: "json",
                stem: "string",
                steps: "json",
                text: "json",
                textSuccess: "json",
                timezone: "string",
                titleSuccess: "string"
            }
        },
        calculator_en: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                button: "string",
                description: "string",
                extension: "string",
                hint: "string",
                meta: "json",
                navigation: "json",
                path: "string",
                projectComplexity: "string",
                projectComplexityOptions: "json",
                projectSize: "string",
                projectSizeOptionsByType: "json",
                projectTimeline: "string",
                projectTimelineOptions: "json",
                projectType: "string",
                projectTypeOptions: "json",
                seo: "json",
                stem: "string",
                step1name: "string",
                step2name: "string",
                step3name: "string",
                step4name: "string",
                subtitle: "json",
                text: "string",
                weeksLabel: "string"
            }
        },
        calculator_fr: {
            type: "page",
            fields: {
                id: "string",
                title: "string",
                body: "json",
                button: "string",
                description: "string",
                extension: "string",
                hint: "string",
                meta: "json",
                navigation: "json",
                path: "string",
                projectComplexity: "string",
                projectComplexityOptions: "json",
                projectSize: "string",
                projectSizeOptionsByType: "json",
                projectTimeline: "string",
                projectTimelineOptions: "json",
                projectType: "string",
                projectTypeOptions: "json",
                seo: "json",
                stem: "string",
                step1name: "string",
                step2name: "string",
                step3name: "string",
                step4name: "string",
                subtitle: "json",
                text: "string",
                weeksLabel: "string"
            }
        },
        info: {
            type: "data",
            fields: {}
        }
    },
    la = (e, t) => {
        const n = e._conditions;
        return n.length > 0 ? `(${n.join(` ${t} `)})` : ""
    },
    ca = e => {
        const t = [],
            n = {
                _conditions: t,
                where(r, s, i) {
                    let o;
                    switch (s.toUpperCase()) {
                        case "IN":
                        case "NOT IN":
                            if (Array.isArray(i)) {
                                const a = i.map(l => yi(l)).join(", ");
                                o = `"${String(r)}" ${s.toUpperCase()} (${a})`
                            } else throw new TypeError(`Value for ${s} must be an array`);
                            break;
                        case "BETWEEN":
                        case "NOT BETWEEN":
                            if (Array.isArray(i) && i.length === 2) o = `"${String(r)}" ${s.toUpperCase()} ${yi(i[0])} AND ${yi(i[1])}`;
                            else throw new Error(`Value for ${s} must be an array with two elements`);
                            break;
                        case "IS NULL":
                        case "IS NOT NULL":
                            o = `"${String(r)}" ${s.toUpperCase()}`;
                            break;
                        case "LIKE":
                        case "NOT LIKE":
                            o = `"${String(r)}" ${s.toUpperCase()} ${yi(i)}`;
                            break;
                        default:
                            o = `"${String(r)}" ${s} ${yi(typeof i=="boolean"?Number(i):i)}`
                    }
                    return t.push(`${o}`), n
                },
                andWhere(r) {
                    const s = r(ca());
                    return t.push(la(s, "AND")), n
                },
                orWhere(r) {
                    const s = r(ca());
                    return t.push(la(s, "OR")), n
                }
            };
        return n
    },
    Kx = (e, t) => {
        const n = {
                conditions: [],
                selectedFields: [],
                offset: 0,
                limit: 0,
                orderBy: [],
                count: {
                    field: "",
                    distinct: !1
                }
            },
            r = {
                __params: n,
                andWhere(i) {
                    const o = i(ca());
                    return n.conditions.push(la(o, "AND")), r
                },
                orWhere(i) {
                    const o = i(ca());
                    return n.conditions.push(la(o, "OR")), r
                },
                path(i) {
                    return r.where("path", "=", rr(i))
                },
                skip(i) {
                    return n.offset = i, r
                },
                where(i, o, a) {
                    return r.andWhere(l => l.where(String(i), o, a)), r
                },
                limit(i) {
                    return n.limit = i, r
                },
                select(...i) {
                    return i.length && n.selectedFields.push(...i), r
                },
                order(i, o) {
                    return n.orderBy.push(`"${String(i)}" ${o}`), r
                },
                async all() {
                    return t(e, s()).then(i => i || [])
                },
                async first() {
                    return t(e, s({
                        limit: 1
                    })).then(i => i[0] || null)
                },
                async count(i = "*", o = !1) {
                    return t(e, s({
                        count: {
                            field: String(i),
                            distinct: o
                        }
                    })).then(a => a[0].count)
                }
            };

        function s(i = {}) {
            let o = "SELECT ";
            if (i ? .count) o += `COUNT(${i.count.distinct?"DISTINCT ":""}${i.count.field}) as count`;
            else {
                const l = Array.from(new Set(n.selectedFields));
                o += l.length > 0 ? l.map(c => `"${String(c)}"`).join(", ") : "*"
            }
            o += ` FROM ${Gx[String(e)]}`, n.conditions.length > 0 && (o += ` WHERE ${n.conditions.join(" AND ")}`), n.orderBy.length > 0 ? o += ` ORDER BY ${n.orderBy.join(", ")}` : o += " ORDER BY stem ASC";
            const a = i ? .limit || n.limit;
            return a > 0 && (n.offset > 0 ? o += ` LIMIT ${a} OFFSET ${n.offset}` : o += ` LIMIT ${a}`), o
        }
        return r
    };

function yi(e) {
    return `'${String(e).replace(/'/g,"''")}'`
}

function jc(e) {
    return t => (t = t || {}, (e || []).filter(n => typeof t[n] < "u").reduce((n, r) => Object.assign(n, {
        [r]: t[r]
    }), {}))
}
async function I_(e, t = []) {
    e.__params ? .orderBy ? .length || (e = e.order("stem", "ASC"));
    const r = await e.orWhere(c => c.where("navigation", "<>", "false").where("navigation", "IS NULL")).select("navigation", "stem", "path", "title", "meta", ...t || []).all(),
        {
            contents: s,
            configs: i
        } = r.reduce((c, u) => {
            if (String(u.stem).split("/").pop() === ".navigation") {
                u.title = u.title ? .toLowerCase() === "navigation" ? "" : u.title;
                const f = u.path.split("/").slice(0, -1).join("/") || "/";
                c.configs[f] = { ...u,
                    ...u.body
                }
            } else c.contents.push(u);
            return c
        }, {
            configs: {},
            contents: []
        }),
        o = c => ({ ...jc(["title", ...t])(c),
            ...c.meta,
            ...Rh(c ? .navigation) ? c.navigation : {}
        }),
        a = c => ({ ...jc(["title", ...t])(c),
            ...Rh(c ? .navigation) ? c.navigation : {}
        }),
        l = s.reduce((c, u) => {
            const f = u.path.substring(1).split("/"),
                d = u.stem.split("/"),
                h = !!d[d.length - 1] ? .match(/([1-9]\d*\.)?index/g),
                g = m => ({
                    title: m.title,
                    path: m.path,
                    stem: m.stem,
                    children: [],
                    ...a(m)
                }),
                p = g(u);
            if (h) {
                const m = i[p.path];
                if (typeof m ? .navigation < "u" && m ? .navigation === !1) return c;
                if (u.path !== "/") {
                    const _ = g(u);
                    p.children.push(_)
                }
                m && Object.assign(p, o(m))
            }
            if (f.length === 1) {
                const m = c.find(_ => _.path === p.path && _.page === !1);
                return h && m ? Object.assign(m, {
                    page: void 0,
                    children: [...p.children || [], ...m.children || []]
                }) : c.push(p), c
            }
            const v = f.slice(0, -1).reduce((m, _, b) => {
                    const w = "/" + f.slice(0, b + 1).join("/"),
                        k = i[w];
                    if (typeof k ? .navigation < "u" && k.navigation === !1) return [];
                    let S = m.find(L => L.path === w);
                    if (!S) {
                        const L = k ? o(k) : {};
                        S = { ...L,
                            title: L.title || Yx(_),
                            path: w,
                            stem: d.slice(0, b + 1).join("/"),
                            children: [],
                            page: !1
                        }, m.push(S)
                    }
                    return S.children
                }, c),
                y = v.find(m => m.path === p.path && m.page === !1);
            return y ? Object.assign(y, { ...p,
                page: void 0,
                children: [...p.children || [], ...y.children || []]
            }) : v.push(p), c
        }, []);
    return N_(l)
}

function N_(e) {
    const t = e;
    for (const n of t) n.children ? .length ? N_(n.children) : delete n.children;
    return e
}

function Rh(e) {
    return e !== null && Object.prototype.toString.call(e) === "[object Object]"
}
const Yx = e => e.split(/[\s-]/g).map(CS).join(" ");
async function Xx(e, t, n) {
    const {
        before: r = 1,
        after: s = 1,
        fields: i = []
    } = n || {}, o = await I_(e, i), a = D_(o), l = a.findIndex(f => f.path === t), c = l === -1 ? [] : a.slice(l - r, l), u = l === -1 ? [] : a.slice(l + 1, l + s + 1);
    return [...Array.from({
        length: r
    }).fill(null).concat(c).slice(c.length), ...u.concat(Array.from({
        length: s
    }).fill(null)).slice(0, s)]
}

function D_(e) {
    return e.flatMap(n => {
        const r = n.children ? D_(n.children) : [];
        return n.page === !1 || r.length && r.find(s => s.path === n.path) ? r : [{ ...n,
            children: void 0
        }, ...r]
    })
}

function qR(e) {
    return {
        type: "minimark",
        value: e.children.map(F_).filter(t => t !== void 0)
    }
}

function F_(e) {
    if (e.type !== "comment") return e.type === "text" ? e.value : (e.tag === "code" && e.props ? .className && e.props.className.length === 0 && delete e.props.className, [e.tag, e.props || {}, ...(e.children || []).map(F_).filter(t => t !== void 0)])
}

function Jx(e) {
    return {
        type: "root",
        children: e.value.map($_)
    }
}

function $_(e) {
    if (typeof e == "string") return {
        type: "text",
        value: e
    };
    const [t, n, ...r] = e;
    return {
        type: "element",
        tag: t,
        props: n,
        children: r.map($_)
    }
}
const Qx = /^h([1-6])$/,
    Hc = e => Number(e.match(Qx) ? .[1] ? ? 0);
async function Zx(e, t) {
    const {
        ignoredTags: n = [],
        extraFields: r = [],
        minHeading: s = "h1",
        maxHeading: i = "h6"
    } = t || {}, o = Hc(s), a = Hc(i);
    return (await e.where("extension", "=", "md").select("path", "body", "description", "title", ...r || []).all()).flatMap(c => eA(c, {
        ignoredTags: n,
        extraFields: r,
        minLevel: o,
        maxLevel: a
    }))
}

function eA(e, {
    ignoredTags: t,
    extraFields: n,
    minLevel: r,
    maxLevel: s
}) {
    const i = !e.body || e.body ? .type === "root" ? e.body : Jx(e.body),
        o = e.path ? ? "",
        a = jc(n)(e),
        l = [{ ...a,
            id: o,
            title: e.title || "",
            titles: [],
            content: (e.description || "").trim(),
            level: 1
        }];
    if (!i ? .children) return l;
    let c = 1,
        u = 0;
    const f = [e.title ? ? ""];
    for (const d of i.children) {
        const h = d.tag || "",
            g = Hc(h);
        if (g >= r && g <= s) {
            const p = Uc(d).trim();
            g === 1 ? f.splice(0, f.length) : g < u ? f.splice(g - 1, f.length - 1) : g === u && f.pop(), l.push({ ...a,
                id: `${o}#${d.props?.id}`,
                title: p,
                titles: [...f],
                content: "",
                level: g
            }), f.push(p), u = g, c += 1
        } else {
            const p = Uc(d, t).trim();
            if (c === 1 && l[c - 1] ? .content === p) continue;
            l[c - 1].content = `${l[c-1].content} ${p}`.trim()
        }
    }
    return l
}

function Uc(e, t = []) {
    let n = "";
    return e.type === "text" && (n += e.value || ""), t.includes(e.tag ? ? "") ? "" : (e.children ? .length && (n += e.children.map(r => Uc(r, t)).filter(Boolean).join("")), n)
}
async function B_(e, t, n, r) {
    const s = e ? Uw(e) : {};
    s["accept-encoding"] = void 0;
    const i = `/__nuxt_content/${t}/${n}`,
        o = { ...r,
            headers: { ...s,
                ...r.headers
            },
            query: {
                v: qx[String(t)],
                t: void 0
            }
        };
    return e ? await e.$fetch(i, o) : await $fetch(i, o)
}
async function GR(e, t) {
    return B_(e, t, "sql_dump.txt", {
        responseType: "text",
        headers: {
            "content-type": "text/plain"
        }
    })
}
async function tA(e, t, n) {
    return B_(e, t, "query", {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: {
            sql: n
        }
    })
}
const ua = e => {
    const t = zg() ? .ssrContext ? .event;
    return Kx(e, (n, r) => nA(t, n, r))
};

function KR(e, t) {
    return Ku(e, n => I_(n, t))
}

function YR(e, t, n) {
    return Ku(e, r => Xx(r, t, n))
}

function XR(e, t) {
    return Ku(e, n => Zx(n, t))
}
async function nA(e, t, n) {
    return window.WebAssembly ? rA(t, n) : tA(e, String(t), n)
}
async function rA(e, t) {
    return await le(() =>
        import ("./BPmM1EnY.js"), [],
        import.meta.url).then(r => r.loadDatabaseAdapter(e)).then(r => r.all(t))
}

function Ku(e, t) {
    const n = ua(e),
        r = {
            where(s, i, o) {
                return n.where(String(s), i, o), r
            },
            andWhere(s) {
                return n.andWhere(s), r
            },
            orWhere(s) {
                return n.orWhere(s), r
            },
            order(s, i) {
                return n.order(String(s), i), r
            },
            then(s, i) {
                return t(n).then(s, i)
            },
            catch (s) {
                return this.then(void 0, s)
            },
            finally(s) {
                return this.then(void 0, void 0).finally(s)
            },
            get [Symbol.toStringTag]() {
                return "Promise"
            }
        };
    return r
}
const sA = xe({
        name: "global-strings",
        dependsOn: ["i18n:plugin"],
        async setup(e) {
            let t, n;
            const r = e.$i18n.locale,
                {
                    data: s
                } = ([t, n] = Zn(() => Ou("global-strings", async () => {
                    const o = `content_${r.value}`,
                        a = await ua(o).path("/global").first();
                    return a || r.value === "en" ? a : ua("content_en").path("/global").first()
                }, {
                    watch: [r]
                })), t = await t, n(), t),
                i = ne(() => s.value ? .strings);
            return {
                provide: {
                    globalContent: s,
                    globalStrings: i
                }
            }
        }
    }),
    iA = xe(() => {
        document.addEventListener("click", e => {
            if (e.metaKey || e.ctrlKey) return;
            const t = e.target.closest ? .('a[href^="#"]');
            if (!t) return;
            const n = t.getAttribute("href");
            if (!n || n === "#") return;
            const r = document.getElementById(n.slice(1));
            r && (e.preventDefault(), e.stopPropagation(), window.lenis ? window.lenis.scrollTo(r, {
                easing: s => s < .5 ? 16 * s * s * s * s * s : 1 - Math.pow(-2 * s + 2, 5) / 2,
                duration: 1.5
            }) : r.scrollIntoView({
                behavior: "smooth"
            }))
        }, !0)
    }),
    oA = ["incredibles.dev", "www.incredibles.dev"],
    aA = xe({
        name: "plausible-prod",
        setup() {
            if (oA.includes(window.location.hostname)) return v_({
                domain: "incredibles.dev",
                endpoint: "https://plausible.io/api/event",
                autoCapturePageviews: !0
            }), Tr({
                link: [{
                    rel: "preconnect",
                    href: "https://plausible.io"
                }]
            }), {
                provide: {
                    plausible: {
                        trackEvent(e, t) {
                            Mn(e, t ? ? {})
                        },
                        trackPageview(e) {
                            Mn("pageview", e ? ? {})
                        }
                    }
                }
            }
        }
    }),
    lA = xe({
        enforce: "post",
        env: {
            islands: !1
        },
        async setup() {
            const e = li();
            if (!e) return;
            const {
                tagPriority: t
            } = At().public["seo-utils"], n = Rr("nuxt-seo-utils:routeRules", () => null);
            if (n.value) {
                const {
                    head: r,
                    seoMeta: s
                } = n.value;
                r && e.push(r), s && dc(s, {
                    tagPriority: t
                })
            }
        }
    }),
    cA = xe({
        name: "i18n:plugin:ssg-detect",
        dependsOn: ["i18n:plugin", "i18n:plugin:route-locale-detect"],
        enforce: "post",
        setup(e) {
            const t = ue(e._id),
                n = ao(t);
            t.hook("app:mounted", async () => {
                const r = Bc(t, t.$router.currentRoute.value);
                await t.runWithContext(() => t.$i18n.setLocale(r)), n.initial = !1
            })
        }
    }),
    uA = [ZE, fT, mT, xT, AT, LT, RT, OT, MT, IT, NT, DT, Lk, Hk, Kk, wP, EP, DP, BP, Bx, jx, Hx, zx, sA, iA, aA, lA, cA],
    fA = {
        class: "btn-main__outer"
    },
    dA = {
        class: "btn-main__inner"
    },
    hA = {
        class: "btn-main__text u-height-fix"
    },
    pA = {
        class: "btn-main__hover"
    },
    gA = ["data-text"],
    mA = Object.assign({
        inheritAttrs: !1
    }, {
        __name: "BtnMain",
        props: {
            elem: {
                type: String,
                default: "a",
                validator: e => ["a", "button"].includes(e)
            },
            variant: {
                type: String,
                default: "primary",
                validator: e => ["primary", "secondary"].includes(e)
            },
            color: {
                type: String,
                default: "black",
                validator: e => ["black", "white", "accent"].includes(e)
            },
            size: {
                type: String,
                default: "lg",
                validator: e => ["lg", "md", "sm", "xs"].includes(e)
            },
            to: {
                type: [String, Object],
                default: "#"
            },
            icon: {
                type: String,
                default: null
            }
        },
        setup(e, {
            expose: t
        }) {
            const n = ta,
                r = {
                    el: Hb("el")
                };
            t(r);
            const s = e,
                i = rv(),
                o = ne(() => [`btn-main--${s.variant}`, `btn-main--${s.color}`, `btn-main--${s.size}`, {
                    "btn-main--icon": s.icon
                }]),
                a = ne(() => s.icon ? {
                    maskImage: `url(/images/${s.icon}.svg)`
                } : null),
                l = nv();

            function c() {
                const u = l.default;
                return u ? u().map(h => typeof h.children == "string" ? h.children : "").join("").trim() : ""
            }
            return (u, f) => (De(), zt(Wp(e.elem === "a" ? G(n) : "button"), yg({
                ref: "el",
                class: ["btn-main", G(o)],
                to: e.elem === "a" ? e.to : void 0
            }, G(i)), {
                default: Gn(() => [Le("span", fA, [Le("span", dA, [Le("span", hA, [ev(u.$slots, "default")]), e.icon ? (De(), Wt("span", {
                    key: 0,
                    class: "btn-main__icon",
                    style: cs(G(a))
                }, null, 4)) : pr("", !0)]), Le("span", pA, [Le("span", {
                    class: "btn-main__text u-height-fix",
                    "data-text": c()
                }, null, 8, gA), e.icon ? (De(), Wt("span", {
                    key: 0,
                    class: "btn-main__icon",
                    style: cs(G(a))
                }, null, 4)) : pr("", !0)])])]),
                _: 3
            }, 16, ["to", "class"]))
        }
    });

function Yr(e, t) {
    ue().$plausible ? .trackEvent(e, t)
}
const _A = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='6'%20fill='%232B2B2B'/%3e%3cpath%20d='M16.8895%208H20.5039L17.8073%2016L15.1108%2024H11.4965L16.8895%208Z'%20fill='%23FAFAFA'/%3e%3c/svg%3e";
class yA {
    constructor() {
        this.events = []
    }
    on(t, n, r, s = !1) {
        this.events[t] || (this.events[t] = []);
        let i = !1;
        this.events[t].forEach(o => {
            if (o.cb === n && o.context === r) {
                i = !0;
                return
            }
        }), !i && this.events[t].push({
            cb: n,
            context: r,
            once: s
        })
    }
    once(t, n, r) {
        this.on(t, n, r, !0)
    }
    emit(t) {
        const n = [].slice.call(arguments, 1);
        this.events[t] && (this.events[t].slice().forEach(s => {
            s.cb.apply(s.context, n)
        }), this.events[t] = this.events[t].filter(s => !s.once))
    }
    off(t, n, r) {
        this.events[t] && (this.events[t] = this.events[t].filter(s => !(s.cb === n && s.context === r)))
    }
}
const Jn = new yA;

function bA(e, t, n = {}) {
    const {
        locale: r
    } = Nr();
    return Ou(() => `${e}-${r.value}`, async () => {
        const s = await t(r.value);
        return s || r.value === "en" ? s : t("en")
    }, {
        watch: [r],
        getCachedData: (s, i, o) => {
            if (!(o.cause === "refresh:manual" || o.cause === "refresh:hook")) return i.payload.data[s] ? ? i.static.data[s]
        },
        ...n
    })
}
const vA = {
        class: "site-head"
    },
    wA = {
        class: "s__brand"
    },
    EA = ["alt"],
    SA = {
        class: "s__nav"
    },
    TA = {
        class: "s__menu"
    },
    CA = {
        ref: "cta",
        class: "s__menu-item s__menu-item--cta"
    },
    kA = ["aria-label"],
    PA = {
        class: "u-height-fix"
    },
    xA = {
        __name: "SiteHead",
        async setup(e) {
            let t, n;
            const {
                locale: r,
                locales: s
            } = Nr(), i = Gu(), o = O_(), a = oi();

            function l(g) {
                return g.endsWith("/") ? g : `${g}/`
            }
            const c = ne(() => l(o("/")));

            function u(g) {
                g.metaKey || g.ctrlKey || g.shiftKey || g.altKey || l(a.path) === c.value && (g.preventDefault(), window.lenis ? window.lenis.scrollTo(0, {
                    easing: p => p < .5 ? 16 * p * p * p * p * p : 1 - Math.pow(-2 * p + 2, 5) / 2,
                    duration: 1.5
                }) : window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }))
            }
            const {
                data: f
            } = ([t, n] = sv(() => bA("site-head", g => ua(`content_${g}`).path("/global").first())), t = await t, n(), t), d = ne(() => {
                const g = f.value ? .siteHead;
                return {
                    logoLabel: g ? .logoLabel || "incredibles",
                    ctaLabel: g ? .ctaLabel || "Start a conversation",
                    languageLabel: g ? .languageLabel || "Language",
                    links: Array.isArray(g ? .links) ? g.links : []
                }
            });

            function h() {
                const g = "header";
                Yr("Contact Form Opened", {
                    props: {
                        source: g
                    }
                }), Jn.emit("siteContactOpen", {
                    source: g
                })
            }
            return (g, p) => {
                const v = ta,
                    y = mA;
                return De(), Wt("header", vA, [Le("div", wA, [Pe(v, {
                    to: G(c),
                    class: "s__logo",
                    onClick: u
                }, {
                    default: Gn(() => [Le("img", {
                        src: _A,
                        alt: G(d).logoLabel,
                        width: "32",
                        height: "32"
                    }, null, 8, EA)]),
                    _: 1
                }, 8, ["to"])]), Le("nav", SA, [Le("ul", TA, [(De(!0), Wt(Qe, null, Rf(G(d).links, m => (De(), Wt("li", {
                    ref_for: !0,
                    ref: "links",
                    key: m.href,
                    class: "s__menu-item s__menu-item--link"
                }, [Pe(y, {
                    elem: "a",
                    class: "s__menu-link",
                    variant: "secondary",
                    color: "black",
                    size: "md",
                    to: m.href,
                    onClick: _ => ("useTrackEvent" in g ? g.useTrackEvent : G(Yr))("Header Nav Click", {
                        props: {
                            label: m.label,
                            href: m.href
                        }
                    })
                }, {
                    default: Gn(() => [zs(Qr(m.label), 1)]),
                    _: 2
                }, 1032, ["to", "onClick"])]))), 128)), Le("li", CA, [Pe(y, {
                    elem: "button",
                    class: "s__menu-link s__menu-link--cta",
                    variant: "primary",
                    color: "black",
                    size: "md",
                    onClick: h
                }, {
                    default: Gn(() => [zs(Qr(G(d).ctaLabel), 1)]),
                    _: 1
                })], 512)]), Le("ul", {
                    class: "s__language-selector",
                    "aria-label": G(d).languageLabel
                }, [(De(!0), Wt(Qe, null, Rf(G(s), m => (De(), Wt("li", {
                    key: m.code,
                    class: "s__language-item"
                }, [Pe(v, {
                    to: l(G(i)(m.code)),
                    external: "",
                    class: ni(["s__language-link", {
                        "is-active": m.code === G(r)
                    }]),
                    hreflang: m.language,
                    "aria-label": m.name,
                    "aria-current": m.code === G(r) ? "page" : void 0,
                    onClick: _ => ("useTrackEvent" in g ? g.useTrackEvent : G(Yr))("Language Switch", {
                        props: {
                            to: m.code
                        }
                    })
                }, {
                    default: Gn(() => [Le("span", PA, Qr(m.code.toUpperCase()), 1)]),
                    _: 2
                }, 1032, ["to", "class", "hreflang", "aria-label", "aria-current", "onClick"])]))), 128))], 8, kA)])])
            }
        }
    },
    j_ = (e = "RouteProvider") => yn({
        name: e,
        props: {
            route: {
                type: Object,
                required: !0
            },
            vnode: Object,
            vnodeRef: Object,
            renderKey: String,
            trackRootNodes: Boolean
        },
        setup(t) {
            const n = t.renderKey,
                r = t.route,
                s = {};
            for (const i in t.route) Object.defineProperty(s, i, {
                get: () => n === t.renderKey ? t.route[i] : r[i],
                enumerable: !0
            });
            return es(Na, xn(s)), () => t.vnode ? rt(t.vnode, {
                ref: t.vnodeRef
            }) : t.vnode
        }
    }),
    AA = j_(),
    Oh = new WeakMap,
    LA = yn({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t,
            slots: n,
            expose: r
        }) {
            const s = ue(),
                i = lt(),
                o = pt(Na, null);
            let a;
            r({
                pageRef: i
            });
            const l = pt(Ww, null);
            let c;
            const u = s.deferHydration();
            let f = !1,
                d = !1,
                h = 0;
            if (s.isHydrating) {
                const p = s.hooks.hookOnce("app:error", u),
                    v = Pt().beforeEach(() => {
                        p(), v()
                    })
            }
            e.pageKey && gt(() => e.pageKey, (p, v) => {
                p !== v && s.callHook("page:loading:start")
            });
            let g = !1; {
                const p = Pt().beforeResolve(() => {
                    g = !1
                });
                si(() => {
                    p(), u()
                })
            }
            return () => rt(Am, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: p => {
                    const v = RA(o, p.route, p.Component),
                        y = o && o.matched.length === p.route.matched.length;
                    if (!p.Component) {
                        if (c && !y && !kl(c)) return c;
                        u();
                        return
                    }
                    if (c && l && !kl(c) && !l.isCurrent(p.route)) return c;
                    if (v && o && (!l || l ? .isCurrent(o))) return (y || c) && !kl(c) ? c : null;
                    const m = yc(p, e.pageKey),
                        _ = OA(o, p.route, p.Component);
                    !s.isHydrating && a === m && !_ && fs(() => {
                        g || (g = !0, s.callHook("page:loading:end"))
                    }), f && a !== m && d && h++, a = m;
                    const b = !!(e.transition ? ? p.route.meta.pageTransition ? ? ud),
                        w = b && vS([e.transition, p.route.meta.pageTransition, ud, {
                            onAfterLeave() {
                                s["~transitionFinish"] ? .(), delete s["~transitionFinish"], delete s["~transitionPromise"], s.callHook("page:transition:finish", p.Component)
                            }
                        }]),
                        k = e.keepalive ? ? p.route.meta.keepalive ? ? Pw;
                    return c = gS(b && w, wT(k, rt(fg, {
                        key: h,
                        suspensible: !0,
                        onPending: () => {
                            f = !0, b && !s["~transitionPromise"] && (s["~transitionPromise"] = new Promise(S => {
                                s["~transitionFinish"] = S
                            })), s.callHook("page:start", p.Component)
                        },
                        onResolve: async () => {
                            f = !1, d = !0;
                            try {
                                await fs(), s._route.sync ? .(), await s.callHook("page:finish", p.Component), !g && !_ && (g = !0, await s.callHook("page:loading:end"))
                            } finally {
                                u()
                            }
                        }
                    }, {
                        default: () => {
                            const S = {
                                key: m || void 0,
                                vnode: n.default ? MA(n.default, p) : p.Component,
                                route: p.route,
                                renderKey: m || void 0,
                                trackRootNodes: b,
                                vnodeRef: i
                            };
                            if (!k) return rt(AA, S);
                            const L = p.Component.type,
                                x = L;
                            let O = Oh.get(x);
                            return O || (O = j_(L.name || L.__name), Oh.set(x, O)), rt(O, S)
                        }
                    }))).default(), c
                }
            })
        }
    });

function RA(e, t, n) {
    if (!e) return !1;
    const r = t.matched.findIndex(o => o.components ? .default === n ? .type);
    if (r === -1) return !1;
    const s = t.matched.slice(0, r).filter(o => o.components ? .default);
    if (!s.length) return !1;
    const i = e.matched.filter(o => o.components ? .default);
    return s.some((o, a) => o.components ? .default !== i[a] ? .components ? .default) || n && yc({
        route: t,
        Component: n
    }) !== yc({
        route: e,
        Component: n
    })
}

function OA(e, t, n) {
    return e ? t.matched.findIndex(s => s.components ? .default === n ? .type) < t.matched.length - 1 : !1
}

function MA(e, t) {
    const n = e(t);
    return n.length === 1 ? rt(n[0]) : rt(Qe, void 0, n)
}

function kl(e) {
    return !!e && (!!e.suspense ? .isUnmounted || !!e.component ? .isUnmounted)
}

function H_() {
    return Rr("hasScrollbar", () => !0)
}

function U_() {
    return Rr("isScrollbarDragging", () => !1)
}
const IA = {
        __name: "SiteScrollbar",
        setup(e) {
            const t = H_(),
                n = lt(!1),
                r = U_(),
                s = lt(0),
                i = lt(0),
                o = ne(() => ({
                    "--scrollbar-height": `${s.value}px`,
                    "--scrollbar-top": `${i.value}px`
                }));
            let a = !1,
                l = 0,
                c = 0;

            function u() {
                return navigator.maxTouchPoints > 0 ? !0 : /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }

            function f() {
                const p = window.safeHeight || window.innerHeight,
                    v = document.body.scrollHeight,
                    y = Math.max(v - p, 1),
                    m = window.scrollY / y;
                s.value = p / v * p, i.value = m * (p - s.value)
            }

            function d(p) {
                a = !0, r.value = !0, l = p.clientY ? ? p.touches[0].clientY;
                const v = window.safeHeight || window.innerHeight,
                    y = document.body.scrollHeight,
                    m = Math.max(y - v, 1);
                c = window.scrollY / m
            }

            function h(p) {
                if (!a) return;
                p.preventDefault();
                const v = p.clientY ? ? p.touches ? .[0] ? .clientY,
                    y = window.safeHeight || window.innerHeight,
                    m = document.body.scrollHeight,
                    _ = Math.max(m - y, 1),
                    w = (v - l) / y,
                    S = Math.max(0, Math.min(1, c + w)) * _;
                window.lenis ? window.lenis.scrollTo(S, {
                    immediate: !0
                }) : window.scrollTo(0, S)
            }

            function g() {
                a = !1, r.value = !1
            }
            return Lr(() => {
                if (u()) {
                    t.value = !1;
                    return
                }
                n.value = !0, t.value = !0, f(), Jn.on("resize", f), Jn.on("scroll", f), document.addEventListener("mousemove", h), document.addEventListener("touchmove", h, {
                    passive: !1
                }), document.addEventListener("mouseup", g), document.addEventListener("touchend", g)
            }), ms(() => {
                t.value = !1, Jn.off("resize", f), Jn.off("scroll", f), document.removeEventListener("mousemove", h), document.removeEventListener("touchmove", h), document.removeEventListener("mouseup", g), document.removeEventListener("touchend", g)
            }), (p, v) => G(n) ? (De(), Wt("div", {
                key: 0,
                class: ni(["site-scrollbar", {
                    "is-dragging": G(r)
                }]),
                style: cs(G(o))
            }, [v[0] || (v[0] = Le("div", {
                class: "site-scrollbar__track"
            }, null, -1)), Le("div", {
                ref: "thumb",
                class: "site-scrollbar__thumb",
                onMousedown: d,
                onTouchstart: b0(d, ["prevent"])
            }, null, 544)], 6)) : pr("", !0)
        }
    },
    NA = yn({
        name: "NuxtLinkLocale",
        props: { ...ta.props,
            locale: {
                type: String,
                default: void 0,
                required: !1
            }
        },
        setup(e, {
            slots: t
        }) {
            const n = M_(),
                r = ne(() => {
                    const a = e.to || e.href || "";
                    return typeof a == "string" && xt(a, {
                        acceptRelative: !0
                    })
                }),
                s = ne(() => {
                    const a = e.to ? ? e.href,
                        l = a != null ? n(a, e.locale) : a;
                    return l && ge(e.to) && (l.state = e.to ? .state), a != null ? l : a
                }),
                i = ne(() => {
                    if (e.external) return !0;
                    const a = e.to || e.href || "";
                    return ge(a) ? !1 : a === "" || r.value
                }),
                o = () => {
                    const a = { ...e
                    };
                    return i.value || (a.to = s.value), delete a.href, delete a.locale, a
                };
            return () => rt(ta, o(), t.default)
        }
    }),
    DA = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, s] of t) n[r] = s;
        return n
    },
    FA = {
        class: "site-foot t-t-3xs rte"
    },
    $A = {
        class: "u-container"
    },
    BA = {
        class: "s__nav"
    },
    jA = {
        class: "s__pages"
    },
    HA = {
        class: "s__page"
    },
    UA = {
        class: "s__page"
    },
    VA = {
        class: "s__contact"
    },
    WA = {
        class: "s__socials"
    },
    zA = {
        class: "s__social"
    },
    qA = {
        __name: "SiteFoot",
        setup(e) {
            const {
                locale: t
            } = Nr(), n = {
                en: {
                    terms: "Legals",
                    privacy: "Privacy"
                },
                fr: {
                    terms: "Mentions légales",
                    privacy: "Confidentialité"
                }
            }, r = ne(() => n[t.value] || n.en);
            return (s, i) => {
                const o = NA;
                return De(), Wt("footer", FA, [Le("div", $A, [Le("nav", BA, [Le("ul", jA, [Le("li", HA, [Pe(o, {
                    to: "/legals",
                    class: "s__link",
                    onClick: i[0] || (i[0] = a => ("useTrackEvent" in s ? s.useTrackEvent : G(Yr))("Footer Nav Click", {
                        props: {
                            label: G(r).terms,
                            href: "/legals"
                        }
                    }))
                }, {
                    default: Gn(() => [zs(Qr(G(r).terms), 1)]),
                    _: 1
                })]), Le("li", UA, [Pe(o, {
                    to: "/privacy",
                    class: "s__link",
                    onClick: i[1] || (i[1] = a => ("useTrackEvent" in s ? s.useTrackEvent : G(Yr))("Footer Nav Click", {
                        props: {
                            label: G(r).privacy,
                            href: "/privacy"
                        }
                    }))
                }, {
                    default: Gn(() => [zs(Qr(G(r).privacy), 1)]),
                    _: 1
                })])])]), Le("div", VA, [Le("a", {
                    href: "mailto:hi@incredibles.dev",
                    onClick: i[2] || (i[2] = a => ("useTrackEvent" in s ? s.useTrackEvent : G(Yr))("Outbound: Email", {
                        props: {
                            href: "mailto:hi@incredibles.dev"
                        }
                    }))
                }, "hi@incredibles.dev")]), Le("ul", WA, [Le("li", zA, [Le("a", {
                    href: "https://www.linkedin.com/company/incredibles-dev/",
                    class: "s__social__link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: i[3] || (i[3] = a => ("useTrackEvent" in s ? s.useTrackEvent : G(Yr))("Outbound: LinkedIn", {
                        props: {
                            href: "https://www.linkedin.com/company/incredibles-dev"
                        }
                    }))
                }, " LinkedIn ")])])])])
            }
        }
    },
    GA = DA(qA, [
        ["__scopeId", "data-v-51fde519"]
    ]);

function Un(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function V_(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Jt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Ki = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Yu, mt, Be, an = 1e8,
    Re = 1 / an,
    Vc = Math.PI * 2,
    KA = Vc / 4,
    YA = 0,
    W_ = Math.sqrt,
    XA = Math.cos,
    JA = Math.sin,
    ft = function(t) {
        return typeof t == "string"
    },
    qe = function(t) {
        return typeof t == "function"
    },
    ir = function(t) {
        return typeof t == "number"
    },
    Xu = function(t) {
        return typeof t > "u"
    },
    Dn = function(t) {
        return typeof t == "object"
    },
    Mt = function(t) {
        return t !== !1
    },
    Ju = function() {
        return typeof window < "u"
    },
    Ro = function(t) {
        return qe(t) || ft(t)
    },
    z_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Et = Array.isArray,
    QA = /random\([^)]+\)/g,
    ZA = /,\s*/g,
    Mh = /(?:-?\.?\d|\.)+/gi,
    q_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    xs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Pl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    G_ = /[+-]=-?[.\d]+/,
    eL = /[^,'"\[\]\s]+/gi,
    tL = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    He, Cn, Wc, Qu, Zt = {},
    fa = {},
    K_, Y_ = function(t) {
        return (fa = Xs(t, Zt)) && $t
    },
    Zu = function(t, n) {
        return console.warn("Invalid property", t, "set to", n, "Missing plugin? gsap.registerPlugin()")
    },
    Yi = function(t, n) {
        return !n && console.warn(t)
    },
    X_ = function(t, n) {
        return t && (Zt[t] = n) && fa && (fa[t] = n) || Zt
    },
    Xi = function() {
        return 0
    },
    nL = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    No = {
        suppressEvents: !0,
        kill: !1
    },
    rL = {
        suppressEvents: !0
    },
    ef = {},
    wr = [],
    zc = {},
    J_, Ut = {},
    xl = {},
    Ih = 30,
    Do = [],
    tf = "",
    nf = function(t) {
        var n = t[0],
            r, s;
        if (Dn(n) || qe(n) || (t = [t]), !(r = (n._gsap || {}).harness)) {
            for (s = Do.length; s-- && !Do[s].targetTest(n););
            r = Do[s]
        }
        for (s = t.length; s--;) t[s] && (t[s]._gsap || (t[s]._gsap = new by(t[s], r))) || t.splice(s, 1);
        return t
    },
    is = function(t) {
        return t._gsap || nf(ln(t))[0]._gsap
    },
    Q_ = function(t, n, r) {
        return (r = t[n]) && qe(r) ? t[n]() : Xu(r) && t.getAttribute && t.getAttribute(n) || r
    },
    It = function(t, n) {
        return (t = t.split(",")).forEach(n) || t
    },
    Xe = function(t) {
        return Math.round(t * 1e5) / 1e5 || 0
    },
    je = function(t) {
        return Math.round(t * 1e7) / 1e7 || 0
    },
    $s = function(t, n) {
        var r = n.charAt(0),
            s = parseFloat(n.substr(2));
        return t = parseFloat(t), r === "+" ? t + s : r === "-" ? t - s : r === "*" ? t * s : t / s
    },
    sL = function(t, n) {
        for (var r = n.length, s = 0; t.indexOf(n[s]) < 0 && ++s < r;);
        return s < r
    },
    da = function() {
        var t = wr.length,
            n = wr.slice(0),
            r, s;
        for (zc = {}, wr.length = 0, r = 0; r < t; r++) s = n[r], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
    },
    rf = function(t) {
        return !!(t._initted || t._startAt || t.add)
    },
    Z_ = function(t, n, r, s) {
        wr.length && !mt && da(), t.render(n, r, !!(mt && n < 0 && rf(t))), wr.length && !mt && da()
    },
    ey = function(t) {
        var n = parseFloat(t);
        return (n || n === 0) && (t + "").match(eL).length < 2 ? n : ft(t) ? t.trim() : t
    },
    ty = function(t) {
        return t
    },
    en = function(t, n) {
        for (var r in n) r in t || (t[r] = n[r]);
        return t
    },
    iL = function(t) {
        return function(n, r) {
            for (var s in r) s in n || s === "duration" && t || s === "ease" || (n[s] = r[s])
        }
    },
    Xs = function(t, n) {
        for (var r in n) t[r] = n[r];
        return t
    },
    Nh = function e(t, n) {
        for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Dn(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
        return t
    },
    ha = function(t, n) {
        var r = {},
            s;
        for (s in t) s in n || (r[s] = t[s]);
        return r
    },
    Oi = function(t) {
        var n = t.parent || He,
            r = t.keyframes ? iL(Et(t.keyframes)) : en;
        if (Mt(t.inherit))
            for (; n;) r(t, n.vars.defaults), n = n.parent || n._dp;
        return t
    },
    oL = function(t, n) {
        for (var r = t.length, s = r === n.length; s && r-- && t[r] === n[r];);
        return r < 0
    },
    ny = function(t, n, r, s, i) {
        var o = t[s],
            a;
        if (i)
            for (a = n[i]; o && o[i] > a;) o = o._prev;
        return o ? (n._next = o._next, o._next = n) : (n._next = t[r], t[r] = n), n._next ? n._next._prev = n : t[s] = n, n._prev = o, n.parent = n._dp = t, n
    },
    Ga = function(t, n, r, s) {
        r === void 0 && (r = "_first"), s === void 0 && (s = "_last");
        var i = n._prev,
            o = n._next;
        i ? i._next = o : t[r] === n && (t[r] = o), o ? o._prev = i : t[s] === n && (t[s] = i), n._next = n._prev = n.parent = null
    },
    Cr = function(t, n) {
        t.parent && (!n || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    },
    os = function(t, n) {
        if (t && (!n || n._end > t._dur || n._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    },
    aL = function(t) {
        for (var n = t.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
        return t
    },
    qc = function(t, n, r, s) {
        return t._startAt && (mt ? t._startAt.revert(No) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(n, !0, s))
    },
    lL = function e(t) {
        return !t || t._ts && e(t.parent)
    },
    Dh = function(t) {
        return t._repeat ? Js(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    Js = function(t, n) {
        var r = Math.floor(t = je(t / n));
        return t && r === t ? r - 1 : r
    },
    pa = function(t, n) {
        return (t - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    },
    Ka = function(t) {
        return t._end = je(t._start + (t._tDur / Math.abs(t._ts || t._rts || Re) || 0))
    },
    Ya = function(t, n) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = je(r._time - (t._ts > 0 ? n / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)), Ka(t), r._dirty || os(r, t)), t
    },
    ry = function(t, n) {
        var r;
        if ((n._time || !n._dur && n._initted || n._start < t._time && (n._dur || !n.add)) && (r = pa(t.rawTime(), n), (!n._dur || lo(0, n.totalDuration(), r) - n._tTime > Re) && n.render(r, !0)), os(t, n)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -Re
        }
    },
    An = function(t, n, r, s) {
        return n.parent && Cr(n), n._start = je((ir(r) ? r : r || t !== He ? rn(t, r, n) : t._time) + n._delay), n._end = je(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), ny(t, n, "_first", "_last", t._sort ? "_start" : 0), Gc(n) || (t._recent = n), s || ry(t, n), t._ts < 0 && Ya(t, t._tTime), t
    },
    sy = function(t, n) {
        return (Zt.ScrollTrigger || Zu("scrollTrigger", n)) && Zt.ScrollTrigger.create(n, t)
    },
    iy = function(t, n, r, s, i) {
        if ( of (t, n, i), !t._initted) return 1;
        if (!r && t._pt && !mt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && J_ !== qt.frame) return wr.push(t), t._lazy = [i, s], 1
    },
    cL = function e(t) {
        var n = t.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
    },
    Gc = function(t) {
        var n = t.data;
        return n === "isFromStart" || n === "isStart"
    },
    uL = function(t, n, r, s) {
        var i = t.ratio,
            o = n < 0 || !n && (!t._start && cL(t) && !(!t._initted && Gc(t)) || (t._ts < 0 || t._dp._ts < 0) && !Gc(t)) ? 0 : 1,
            a = t._rDelay,
            l = 0,
            c, u, f;
        if (a && t._repeat && (l = lo(0, t._tDur, n), u = Js(l, a), t._yoyo && u & 1 && (o = 1 - o), u !== Js(t._tTime, a) && (i = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== i || mt || s || t._zTime === Re || !n && t._zTime) {
            if (!t._initted && iy(t, n, s, r, l)) return;
            for (f = t._zTime, t._zTime = n || (r ? Re : 0), r || (r = n && !f), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, c = t._pt; c;) c.r(o, c.d), c = c._next;
            n < 0 && qc(t, n, r, !0), t._onUpdate && !r && Gt(t, "onUpdate"), l && t._repeat && !r && t.parent && Gt(t, "onRepeat"), (n >= t._tDur || n < 0) && t.ratio === o && (o && Cr(t, 1), !r && !mt && (Gt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = n)
    },
    fL = function(t, n, r) {
        var s;
        if (r > n)
            for (s = t._first; s && s._start <= r;) {
                if (s.data === "isPause" && s._start > n) return s;
                s = s._next
            } else
                for (s = t._last; s && s._start >= r;) {
                    if (s.data === "isPause" && s._start < n) return s;
                    s = s._prev
                }
    },
    Qs = function(t, n, r, s) {
        var i = t._repeat,
            o = je(n) || 0,
            a = t._tTime / t._tDur;
        return a && !s && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : je(o * (i + 1) + t._rDelay * i) : o, a > 0 && !s && Ya(t, t._tTime = t._tDur * a), t.parent && Ka(t), r || os(t.parent, t), t
    },
    Fh = function(t) {
        return t instanceof Rt ? os(t) : Qs(t, t._dur)
    },
    dL = {
        _start: 0,
        endTime: Xi,
        totalDuration: Xi
    },
    rn = function e(t, n, r) {
        var s = t.labels,
            i = t._recent || dL,
            o = t.duration() >= an ? i.endTime(!1) : t._dur,
            a, l, c;
        return ft(n) && (isNaN(n) || n in s) ? (l = n.charAt(0), c = n.substr(-1) === "%", a = n.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")), (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (c ? (a < 0 ? i : r).totalDuration() / 100 : 1)) : a < 0 ? (n in s || (s[n] = o), s[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)), c && r && (l = l / 100 * (Et(r) ? r[0] : r).totalDuration()), a > 1 ? e(t, n.substr(0, a - 1), r) + l : o + l)) : n == null ? o : +n
    },
    Mi = function(t, n, r) {
        var s = ir(n[1]),
            i = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = n[i],
            a, l;
        if (s && (o.duration = n[1]), o.parent = r, t) {
            for (a = o, l = r; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = Mt(l.vars.inherit) && l.parent;
            o.immediateRender = Mt(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = n[i - 1]
        }
        return new tt(n[0], o, n[i + 1])
    },
    Dr = function(t, n) {
        return t || t === 0 ? n(t) : n
    },
    lo = function(t, n, r) {
        return r < t ? t : r > n ? n : r
    },
    wt = function(t, n) {
        return !ft(t) || !(n = tL.exec(t)) ? "" : n[1]
    },
    hL = function(t, n, r) {
        return Dr(r, function(s) {
            return lo(t, n, s)
        })
    },
    Kc = [].slice,
    oy = function(t, n) {
        return t && Dn(t) && "length" in t && (!n && !t.length || t.length - 1 in t && Dn(t[0])) && !t.nodeType && t !== Cn
    },
    pL = function(t, n, r) {
        return r === void 0 && (r = []), t.forEach(function(s) {
            var i;
            return ft(s) && !n || oy(s, 1) ? (i = r).push.apply(i, ln(s)) : r.push(s)
        }) || r
    },
    ln = function(t, n, r) {
        return Be && !n && Be.selector ? Be.selector(t) : ft(t) && !r && (Wc || !Zs()) ? Kc.call((n || Qu).querySelectorAll(t), 0) : Et(t) ? pL(t, r) : oy(t) ? Kc.call(t, 0) : t ? [t] : []
    },
    Yc = function(t) {
        return t = ln(t)[0] || Yi("Invalid scope") || {},
            function(n) {
                var r = t.current || t.nativeElement || t;
                return ln(n, r.querySelectorAll ? r : r === t ? Yi("Invalid scope") || Qu.createElement("div") : t)
            }
    },
    ay = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    },
    ly = function(t) {
        if (qe(t)) return t;
        var n = Dn(t) ? t : {
                each: t
            },
            r = as(n.ease),
            s = n.from || 0,
            i = parseFloat(n.base) || 0,
            o = {},
            a = s > 0 && s < 1,
            l = isNaN(s) || a,
            c = n.axis,
            u = s,
            f = s;
        return ft(s) ? u = f = {
                center: .5,
                edges: .5,
                end: 1
            }[s] || 0 : !a && l && (u = s[0], f = s[1]),
            function(d, h, g) {
                var p = (g || n).length,
                    v = o[p],
                    y, m, _, b, w, k, S, L, x;
                if (!v) {
                    if (x = n.grid === "auto" ? 0 : (n.grid || [1, an])[1], !x) {
                        for (S = -an; S < (S = g[x++].getBoundingClientRect().left) && x < p;);
                        x < p && x--
                    }
                    for (v = o[p] = [], y = l ? Math.min(x, p) * u - .5 : s % x, m = x === an ? 0 : l ? p * f / x - .5 : s / x | 0, S = 0, L = an, k = 0; k < p; k++) _ = k % x - y, b = m - (k / x | 0), v[k] = w = c ? Math.abs(c === "y" ? b : _) : W_(_ * _ + b * b), w > S && (S = w), w < L && (L = w);
                    s === "random" && ay(v), v.max = S - L, v.min = L, v.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (x > p ? p - 1 : c ? c === "y" ? p / x : x : Math.max(x, p / x)) || 0) * (s === "edges" ? -1 : 1), v.b = p < 0 ? i - p : i, v.u = wt(n.amount || n.each) || 0, r = r && p < 0 ? PL(r) : r
                }
                return p = (v[d] - v.min) / v.max || 0, je(v.b + (r ? r(p) : p) * v.v) + v.u
            }
    },
    Xc = function(t) {
        var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var s = je(Math.round(parseFloat(r) / t) * t * n);
            return (s - s % 1) / n + (ir(r) ? 0 : wt(r))
        }
    },
    cy = function(t, n) {
        var r = Et(t),
            s, i;
        return !r && Dn(t) && (s = r = t.radius || an, t.values ? (t = ln(t.values), (i = !ir(t[0])) && (s *= s)) : t = Xc(t.increment)), Dr(n, r ? qe(t) ? function(o) {
            return i = t(o), Math.abs(i - o) <= s ? i : o
        } : function(o) {
            for (var a = parseFloat(i ? o.x : o), l = parseFloat(i ? o.y : 0), c = an, u = 0, f = t.length, d, h; f--;) i ? (d = t[f].x - a, h = t[f].y - l, d = d * d + h * h) : d = Math.abs(t[f] - a), d < c && (c = d, u = f);
            return u = !s || c <= s ? t[u] : o, i || u === o || ir(o) ? u : u + wt(o)
        } : Xc(t))
    },
    uy = function(t, n, r, s) {
        return Dr(Et(t) ? !n : r === !0 ? !!(r = 0) : !s, function() {
            return Et(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (n - t + r * .99)) / r) * r * s) / s
        })
    },
    gL = function() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return function(s) {
            return n.reduce(function(i, o) {
                return o(i)
            }, s)
        }
    },
    mL = function(t, n) {
        return function(r) {
            return t(parseFloat(r)) + (n || wt(r))
        }
    },
    _L = function(t, n, r) {
        return dy(t, n, 0, 1, r)
    },
    fy = function(t, n, r) {
        return Dr(r, function(s) {
            return t[~~n(s)]
        })
    },
    yL = function e(t, n, r) {
        var s = n - t;
        return Et(t) ? fy(t, e(0, t.length), n) : Dr(r, function(i) {
            return (s + (i - t) % s) % s + t
        })
    },
    bL = function e(t, n, r) {
        var s = n - t,
            i = s * 2;
        return Et(t) ? fy(t, e(0, t.length - 1), n) : Dr(r, function(o) {
            return o = (i + (o - t) % i) % i || 0, t + (o > s ? i - o : o)
        })
    },
    Ji = function(t) {
        return t.replace(QA, function(n) {
            var r = n.indexOf("[") + 1,
                s = n.substring(r || 7, r ? n.indexOf("]") : n.length - 1).split(ZA);
            return uy(r ? s : +s[0], r ? 0 : +s[1], +s[2] || 1e-5)
        })
    },
    dy = function(t, n, r, s, i) {
        var o = n - t,
            a = s - r;
        return Dr(i, function(l) {
            return r + ((l - t) / o * a || 0)
        })
    },
    vL = function e(t, n, r, s) {
        var i = isNaN(t + n) ? 0 : function(h) {
            return (1 - h) * t + h * n
        };
        if (!i) {
            var o = ft(t),
                a = {},
                l, c, u, f, d;
            if (r === !0 && (s = 1) && (r = null), o) t = {
                p: t
            }, n = {
                p: n
            };
            else if (Et(t) && !Et(n)) {
                for (u = [], f = t.length, d = f - 2, c = 1; c < f; c++) u.push(e(t[c - 1], t[c]));
                f--, i = function(g) {
                    g *= f;
                    var p = Math.min(d, ~~g);
                    return u[p](g - p)
                }, r = n
            } else s || (t = Xs(Et(t) ? [] : {}, t));
            if (!u) {
                for (l in n) sf.call(a, t, l, "get", n[l]);
                i = function(g) {
                    return cf(g, a) || (o ? t.p : t)
                }
            }
        }
        return Dr(r, i)
    },
    $h = function(t, n, r) {
        var s = t.labels,
            i = an,
            o, a, l;
        for (o in s) a = s[o] - n, a < 0 == !!r && a && i > (a = Math.abs(a)) && (l = o, i = a);
        return l
    },
    Gt = function(t, n, r) {
        var s = t.vars,
            i = s[n],
            o = Be,
            a = t._ctx,
            l, c, u;
        if (i) return l = s[n + "Params"], c = s.callbackScope || t, r && wr.length && da(), a && (Be = a), u = l ? i.apply(c, l) : i.call(c), Be = o, u
    },
    Ti = function(t) {
        return Cr(t), t.scrollTrigger && t.scrollTrigger.kill(!!mt), t.progress() < 1 && Gt(t, "onInterrupt"), t
    },
    As, hy = [],
    py = function(t) {
        if (t)
            if (t = !t.name && t.default || t, Ju() || t.headless) {
                var n = t.name,
                    r = qe(t),
                    s = n && !r && t.init ? function() {
                        this._props = []
                    } : t,
                    i = {
                        init: Xi,
                        render: cf,
                        add: sf,
                        kill: FL,
                        modifier: DL,
                        rawVars: 0
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: lf,
                        aliases: {},
                        register: 0
                    };
                if (Zs(), t !== s) {
                    if (Ut[n]) return;
                    en(s, en(ha(t, i), o)), Xs(s.prototype, Xs(i, ha(t, o))), Ut[s.prop = n] = s, t.targetTest && (Do.push(s), ef[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
                }
                X_(n, s), t.register && t.register($t, s, Nt)
            } else hy.push(t)
    },
    Ae = 255,
    Ci = {
        aqua: [0, Ae, Ae],
        lime: [0, Ae, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ae],
        navy: [0, 0, 128],
        white: [Ae, Ae, Ae],
        olive: [128, 128, 0],
        yellow: [Ae, Ae, 0],
        orange: [Ae, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ae, 0, 0],
        pink: [Ae, 192, 203],
        cyan: [0, Ae, Ae],
        transparent: [Ae, Ae, Ae, 0]
    },
    Al = function(t, n, r) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? n + (r - n) * t * 6 : t < .5 ? r : t * 3 < 2 ? n + (r - n) * (2 / 3 - t) * 6 : n) * Ae + .5 | 0
    },
    gy = function(t, n, r) {
        var s = t ? ir(t) ? [t >> 16, t >> 8 & Ae, t & Ae] : 0 : Ci.black,
            i, o, a, l, c, u, f, d, h, g;
        if (!s) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ci[t]) s = Ci[t];
            else if (t.charAt(0) === "#") {
                if (t.length < 6 && (i = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + i + i + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return s = parseInt(t.substr(1, 6), 16), [s >> 16, s >> 8 & Ae, s & Ae, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), s = [t >> 16, t >> 8 & Ae, t & Ae]
            } else if (t.substr(0, 3) === "hsl") {
                if (s = g = t.match(Mh), !n) l = +s[0] % 360 / 360, c = +s[1] / 100, u = +s[2] / 100, o = u <= .5 ? u * (c + 1) : u + c - u * c, i = u * 2 - o, s.length > 3 && (s[3] *= 1), s[0] = Al(l + 1 / 3, i, o), s[1] = Al(l, i, o), s[2] = Al(l - 1 / 3, i, o);
                else if (~t.indexOf("=")) return s = t.match(q_), r && s.length < 4 && (s[3] = 1), s
            } else s = t.match(Mh) || Ci.transparent;
            s = s.map(Number)
        }
        return n && !g && (i = s[0] / Ae, o = s[1] / Ae, a = s[2] / Ae, f = Math.max(i, o, a), d = Math.min(i, o, a), u = (f + d) / 2, f === d ? l = c = 0 : (h = f - d, c = u > .5 ? h / (2 - f - d) : h / (f + d), l = f === i ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - i) / h + 2 : (i - o) / h + 4, l *= 60), s[0] = ~~(l + .5), s[1] = ~~(c * 100 + .5), s[2] = ~~(u * 100 + .5)), r && s.length < 4 && (s[3] = 1), s
    },
    my = function(t) {
        var n = [],
            r = [],
            s = -1;
        return t.split(Er).forEach(function(i) {
            var o = i.match(xs) || [];
            n.push.apply(n, o), r.push(s += o.length + 1)
        }), n.c = r, n
    },
    Bh = function(t, n, r) {
        var s = "",
            i = (t + s).match(Er),
            o = n ? "hsla(" : "rgba(",
            a = 0,
            l, c, u, f;
        if (!i) return t;
        if (i = i.map(function(d) {
                return (d = gy(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
            }), r && (u = my(t), l = r.c, l.join(s) !== u.c.join(s)))
            for (c = t.replace(Er, "1").split(xs), f = c.length - 1; a < f; a++) s += c[a] + (~l.indexOf(a) ? i.shift() || o + "0,0,0,0)" : (u.length ? u : i.length ? i : r).shift());
        if (!c)
            for (c = t.split(Er), f = c.length - 1; a < f; a++) s += c[a] + i[a];
        return s + c[f]
    },
    Er = (function() {
        var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            t;
        for (t in Ci) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi")
    })(),
    wL = /hsl[a]?\(/,
    _y = function(t) {
        var n = t.join(" "),
            r;
        if (Er.lastIndex = 0, Er.test(n)) return r = wL.test(n), t[1] = Bh(t[1], r), t[0] = Bh(t[0], r, my(t[1])), !0
    },
    Qi, qt = (function() {
        var e = Date.now,
            t = 500,
            n = 33,
            r = e(),
            s = r,
            i = 1e3 / 240,
            o = i,
            a = [],
            l, c, u, f, d, h, g = function p(v) {
                var y = e() - s,
                    m = v === !0,
                    _, b, w, k;
                if ((y > t || y < 0) && (r += y - n), s += y, w = s - r, _ = w - o, (_ > 0 || m) && (k = ++f.frame, d = w - f.time * 1e3, f.time = w = w / 1e3, o += _ + (_ >= i ? 4 : i - _), b = 1), m || (l = c(p)), b)
                    for (h = 0; h < a.length; h++) a[h](w, d, k, v)
            };
        return f = {
            time: 0,
            frame: 0,
            tick: function() {
                g(!0)
            },
            deltaRatio: function(v) {
                return d / (1e3 / (v || 60))
            },
            wake: function() {
                K_ && (!Wc && Ju() && (Cn = Wc = window, Qu = Cn.document || {}, Zt.gsap = $t, (Cn.gsapVersions || (Cn.gsapVersions = [])).push($t.version), Y_(fa || Cn.GreenSockGlobals || !Cn.gsap && Cn || {}), hy.forEach(py)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && f.sleep(), c = u || function(v) {
                    return setTimeout(v, o - f.time * 1e3 + 1 | 0)
                }, Qi = 1, g(2))
            },
            sleep: function() {
                (u ? cancelAnimationFrame : clearTimeout)(l), Qi = 0, c = Xi
            },
            lagSmoothing: function(v, y) {
                t = v || 1 / 0, n = Math.min(y || 33, t)
            },
            fps: function(v) {
                i = 1e3 / (v || 240), o = f.time * 1e3 + i
            },
            add: function(v, y, m) {
                var _ = y ? function(b, w, k, S) {
                    v(b, w, k, S), f.remove(_)
                } : v;
                return f.remove(v), a[m ? "unshift" : "push"](_), Zs(), _
            },
            remove: function(v, y) {
                ~(y = a.indexOf(v)) && a.splice(y, 1) && h >= y && h--
            },
            _listeners: a
        }, f
    })(),
    Zs = function() {
        return !Qi && qt.wake()
    },
    he = {},
    EL = /^[\d.\-M][\d.\-,\s]/,
    SL = /["']/g,
    TL = function(t) {
        for (var n = {}, r = t.substr(1, t.length - 3).split(":"), s = r[0], i = 1, o = r.length, a, l, c; i < o; i++) l = r[i], a = i !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), n[s] = isNaN(c) ? c.replace(SL, "").trim() : +c, s = l.substr(a + 1).trim();
        return n
    },
    CL = function(t) {
        var n = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            s = t.indexOf("(", n);
        return t.substring(n, ~s && s < r ? t.indexOf(")", r + 1) : r)
    },
    kL = function(t) {
        var n = (t + "").split("("),
            r = he[n[0]];
        return r && n.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [TL(n[1])] : CL(t).split(",").map(ey)) : he._CE && EL.test(t) ? he._CE("", t) : r
    },
    PL = function(t) {
        return function(n) {
            return 1 - t(1 - n)
        }
    },
    as = function(t, n) {
        return t && (qe(t) ? t : he[t] || kL(t)) || n
    },
    _s = function(t, n, r, s) {
        r === void 0 && (r = function(l) {
            return 1 - n(1 - l)
        }), s === void 0 && (s = function(l) {
            return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
        });
        var i = {
                easeIn: n,
                easeOut: r,
                easeInOut: s
            },
            o;
        return It(t, function(a) {
            he[a] = Zt[a] = i, he[o = a.toLowerCase()] = r;
            for (var l in i) he[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = he[a + "." + l] = i[l]
        }), i
    },
    yy = function(t) {
        return function(n) {
            return n < .5 ? (1 - t(1 - n * 2)) / 2 : .5 + t((n - .5) * 2) / 2
        }
    },
    Ll = function e(t, n, r) {
        var s = n >= 1 ? n : 1,
            i = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
            o = i / Vc * (Math.asin(1 / s) || 0),
            a = function(u) {
                return u === 1 ? 1 : s * Math.pow(2, -10 * u) * JA((u - o) * i) + 1
            },
            l = t === "out" ? a : t === "in" ? function(c) {
                return 1 - a(1 - c)
            } : yy(a);
        return i = Vc / i, l.config = function(c, u) {
            return e(t, c, u)
        }, l
    },
    Rl = function e(t, n) {
        n === void 0 && (n = 1.70158);
        var r = function(o) {
                return o ? --o * o * ((n + 1) * o + n) + 1 : 0
            },
            s = t === "out" ? r : t === "in" ? function(i) {
                return 1 - r(1 - i)
            } : yy(r);
        return s.config = function(i) {
            return e(t, i)
        }, s
    };
It("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
    var n = t < 5 ? t + 1 : t;
    _s(e + ",Power" + (n - 1), t ? function(r) {
        return Math.pow(r, n)
    } : function(r) {
        return r
    }, function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
he.Linear.easeNone = he.none = he.Linear.easeIn;
_s("Elastic", Ll("in"), Ll("out"), Ll());
(function(e, t) {
    var n = 1 / t,
        r = 2 * n,
        s = 2.5 * n,
        i = function(a) {
            return a < n ? e * a * a : a < r ? e * Math.pow(a - 1.5 / t, 2) + .75 : a < s ? e * (a -= 2.25 / t) * a + .9375 : e * Math.pow(a - 2.625 / t, 2) + .984375
        };
    _s("Bounce", function(o) {
        return 1 - i(1 - o)
    }, i)
})(7.5625, 2.75);
_s("Expo", function(e) {
    return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
});
_s("Circ", function(e) {
    return -(W_(1 - e * e) - 1)
});
_s("Sine", function(e) {
    return e === 1 ? 1 : -XA(e * KA) + 1
});
_s("Back", Rl("in"), Rl("out"), Rl());
he.SteppedEase = he.steps = Zt.SteppedEase = {
    config: function(t, n) {
        t === void 0 && (t = 1);
        var r = 1 / t,
            s = t + (n ? 0 : 1),
            i = n ? 1 : 0,
            o = 1 - Re;
        return function(a) {
            return ((s * lo(0, o, a) | 0) + i) * r
        }
    }
};
Ki.ease = he["quad.out"];
It("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
    return tf += e + "," + e + "Params,"
});
var by = function(t, n) {
        this.id = YA++, t._gsap = this, this.target = t, this.harness = n, this.get = n ? n.get : Q_, this.set = n ? n.getSetter : lf
    },
    Zi = (function() {
        function e(n) {
            this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Qs(this, +n.duration, 1, 1), this.data = n.data, Be && (this._ctx = Be, Be.data.push(this)), Qi || qt.wake()
        }
        var t = e.prototype;
        return t.delay = function(r) {
            return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
        }, t.duration = function(r) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
        }, t.totalDuration = function(r) {
            return arguments.length ? (this._dirty = 0, Qs(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function(r, s) {
            if (Zs(), !arguments.length) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (Ya(this, r), !i._dp || i.parent || ry(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && An(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== r || !this._dur && !s || this._initted && Math.abs(this._zTime) === Re || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Z_(this, r, s)), this
        }, t.time = function(r, s) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Dh(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s) : this._time
        }, t.totalProgress = function(r, s) {
            return arguments.length ? this.totalTime(this.totalDuration() * r, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }, t.progress = function(r, s) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Dh(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, t.iteration = function(r, s) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (r - 1) * i, s) : this._repeat ? Js(this._tTime, i) + 1 : 1
        }, t.timeScale = function(r, s) {
            if (!arguments.length) return this._rts === -Re ? 0 : this._rts;
            if (this._rts === r) return this;
            var i = this.parent && this._ts ? pa(this.parent._time, this) : this._tTime;
            return this._rts = +r || 0, this._ts = this._ps || r === -Re ? 0 : this._rts, this.totalTime(lo(-Math.abs(this._delay), this.totalDuration(), i), s !== !1), Ka(this), aL(this)
        }, t.paused = function(r) {
            return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Zs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Re && (this._tTime -= Re)))), this) : this._ps
        }, t.startTime = function(r) {
            if (arguments.length) {
                this._start = je(r);
                var s = this.parent || this._dp;
                return s && (s._sort || !this.parent) && An(s, this, this._start - this._delay), this
            }
            return this._start
        }, t.endTime = function(r) {
            return this._start + (Mt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function(r) {
            var s = this.parent || this._dp;
            return s ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? pa(s.rawTime(r), this) : this._tTime : this._tTime
        }, t.revert = function(r) {
            r === void 0 && (r = rL);
            var s = mt;
            return mt = r, rf(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), mt = s, this
        }, t.globalTime = function(r) {
            for (var s = this, i = arguments.length ? r : s.rawTime(); s;) i = s._start + i / (Math.abs(s._ts) || 1), s = s._dp;
            return !this.parent && this._sat ? this._sat.globalTime(r) : i
        }, t.repeat = function(r) {
            return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Fh(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, t.repeatDelay = function(r) {
            if (arguments.length) {
                var s = this._time;
                return this._rDelay = r, Fh(this), s ? this.time(s) : this
            }
            return this._rDelay
        }, t.yoyo = function(r) {
            return arguments.length ? (this._yoyo = r, this) : this._yoyo
        }, t.seek = function(r, s) {
            return this.totalTime(rn(this, r), Mt(s))
        }, t.restart = function(r, s) {
            return this.play().totalTime(r ? -this._delay : 0, Mt(s)), this._dur || (this._zTime = -Re), this
        }, t.play = function(r, s) {
            return r != null && this.seek(r, s), this.reversed(!1).paused(!1)
        }, t.reverse = function(r, s) {
            return r != null && this.seek(r || this.totalDuration(), s), this.reversed(!0).paused(!1)
        }, t.pause = function(r, s) {
            return r != null && this.seek(r, s), this.paused(!0)
        }, t.resume = function() {
            return this.paused(!1)
        }, t.reversed = function(r) {
            return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Re : 0)), this) : this._rts < 0
        }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Re, this
        }, t.isActive = function() {
            var r = this.parent || this._dp,
                s = this._start,
                i;
            return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= s && i < this.endTime(!0) - Re)
        }, t.eventCallback = function(r, s, i) {
            var o = this.vars;
            return arguments.length > 1 ? (s ? (o[r] = s, i && (o[r + "Params"] = i), r === "onUpdate" && (this._onUpdate = s)) : delete o[r], this) : o[r]
        }, t.then = function(r) {
            var s = this,
                i = s._prom;
            return new Promise(function(o) {
                var a = qe(r) ? r : ty,
                    l = function() {
                        var u = s.then;
                        s.then = null, i && i(), qe(a) && (a = a(s)) && (a.then || a === s) && (s.then = u), o(a), s.then = u
                    };
                s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? l() : s._prom = l
            })
        }, t.kill = function() {
            Ti(this)
        }, e
    })();
en(Zi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Re,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Rt = (function(e) {
    V_(t, e);

    function t(r, s) {
        var i;
        return r === void 0 && (r = {}), i = e.call(this, r) || this, i.labels = {}, i.smoothChildTiming = !!r.smoothChildTiming, i.autoRemoveChildren = !!r.autoRemoveChildren, i._sort = Mt(r.sortChildren), He && An(r.parent || He, Un(i), s), r.reversed && i.reverse(), r.paused && i.paused(!0), r.scrollTrigger && sy(Un(i), r.scrollTrigger), i
    }
    var n = t.prototype;
    return n.to = function(s, i, o) {
        return Mi(0, arguments, this), this
    }, n.from = function(s, i, o) {
        return Mi(1, arguments, this), this
    }, n.fromTo = function(s, i, o, a) {
        return Mi(2, arguments, this), this
    }, n.set = function(s, i, o) {
        return i.duration = 0, i.parent = this, Oi(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new tt(s, i, rn(this, o), 1), this
    }, n.call = function(s, i, o) {
        return An(this, tt.delayedCall(0, s, i), o)
    }, n.staggerTo = function(s, i, o, a, l, c, u) {
        return o.duration = i, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new tt(s, o, rn(this, l)), this
    }, n.staggerFrom = function(s, i, o, a, l, c, u) {
        return o.runBackwards = 1, Oi(o).immediateRender = Mt(o.immediateRender), this.staggerTo(s, i, o, a, l, c, u)
    }, n.staggerFromTo = function(s, i, o, a, l, c, u, f) {
        return a.startAt = o, Oi(a).immediateRender = Mt(a.immediateRender), this.staggerTo(s, i, a, l, c, u, f)
    }, n.render = function(s, i, o) {
        var a = this._time,
            l = this._dirty ? this.totalDuration() : this._tDur,
            c = this._dur,
            u = s <= 0 ? 0 : je(s),
            f = this._zTime < 0 != s < 0 && (this._initted || !c),
            d, h, g, p, v, y, m, _, b, w, k, S;
        if (this !== He && u > l && s >= 0 && (u = l), u !== this._tTime || o || f) {
            if (a !== this._time && c && (u += this._time - a, s += this._time - a), d = u, b = this._start, _ = this._ts, y = !_, f && (c || (a = this._zTime), (s || !i) && (this._zTime = s)), this._repeat) {
                if (k = this._yoyo, v = c + this._rDelay, this._repeat < -1 && s < 0) return this.totalTime(v * 100 + s, i, o);
                if (d = je(u % v), u === l ? (p = this._repeat, d = c) : (w = je(u / v), p = ~~w, p && p === w && (d = c, p--), d > c && (d = c)), w = Js(this._tTime, v), !a && this._tTime && w !== p && this._tTime - w * v - this._dur <= 0 && (w = p), k && p & 1 && (d = c - d, S = 1), p !== w && !this._lock) {
                    var L = k && w & 1,
                        x = L === (k && p & 1);
                    if (p < w && (L = !L), a = L ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (S ? 0 : je(p * v)), i, !c)._lock = 0, this._tTime = u, !i && this.parent && Gt(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, w = p), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (c = this._dur, l = this._tDur, x && (this._lock = 2, a = L ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y) return this
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = fL(this, je(a), je(d)), m && (u -= d - (d = m._start))), this._tTime = u, this._time = d, this._act = !!_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, a = 0), !a && u && c && !i && !w && (Gt(this, "onStart"), this._tTime !== u)) return this;
            if (d >= a && s >= 0)
                for (h = this._first; h;) {
                    if (g = h._next, (h._act || d >= h._start) && h._ts && m !== h) {
                        if (h.parent !== this) return this.render(s, i, o);
                        if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, i, o), d !== this._time || !this._ts && !y) {
                            m = 0, g && (u += this._zTime = -Re);
                            break
                        }
                    }
                    h = g
                } else {
                    h = this._last;
                    for (var O = s < 0 ? s : d; h;) {
                        if (g = h._prev, (h._act || O <= h._end) && h._ts && m !== h) {
                            if (h.parent !== this) return this.render(s, i, o);
                            if (h.render(h._ts > 0 ? (O - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (O - h._start) * h._ts, i, o || mt && rf(h)), d !== this._time || !this._ts && !y) {
                                m = 0, g && (u += this._zTime = O ? -Re : Re);
                                break
                            }
                        }
                        h = g
                    }
                }
            if (m && !i && (this.pause(), m.render(d >= a ? 0 : -Re)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = b, Ka(this), this.render(s, i, o);
            this._onUpdate && !i && Gt(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (b === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((s || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Cr(this, 1), !i && !(s < 0 && !a) && (u || a || !l) && (Gt(this, u === l && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, n.add = function(s, i) {
        var o = this;
        if (ir(i) || (i = rn(this, i, s)), !(s instanceof Zi)) {
            if (Et(s)) return s.forEach(function(a) {
                return o.add(a, i)
            }), this;
            if (ft(s)) return this.addLabel(s, i);
            if (qe(s)) s = tt.delayedCall(0, s);
            else return this
        }
        return this !== s ? An(this, s, i) : this
    }, n.getChildren = function(s, i, o, a) {
        s === void 0 && (s = !0), i === void 0 && (i = !0), o === void 0 && (o = !0), a === void 0 && (a = -an);
        for (var l = [], c = this._first; c;) c._start >= a && (c instanceof tt ? i && l.push(c) : (o && l.push(c), s && l.push.apply(l, c.getChildren(!0, i, o)))), c = c._next;
        return l
    }, n.getById = function(s) {
        for (var i = this.getChildren(1, 1, 1), o = i.length; o--;)
            if (i[o].vars.id === s) return i[o]
    }, n.remove = function(s) {
        return ft(s) ? this.removeLabel(s) : qe(s) ? this.killTweensOf(s) : (s.parent === this && Ga(this, s), s === this._recent && (this._recent = this._last), os(this))
    }, n.totalTime = function(s, i) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = je(qt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), e.prototype.totalTime.call(this, s, i), this._forcing = 0, this) : this._tTime
    }, n.addLabel = function(s, i) {
        return this.labels[s] = rn(this, i), this
    }, n.removeLabel = function(s) {
        return delete this.labels[s], this
    }, n.addPause = function(s, i, o) {
        var a = tt.delayedCall(0, i || Xi, o);
        return a.data = "isPause", this._hasPause = 1, An(this, a, rn(this, s))
    }, n.removePause = function(s) {
        var i = this._first;
        for (s = rn(this, s); i;) i._start === s && i.data === "isPause" && Cr(i), i = i._next
    }, n.killTweensOf = function(s, i, o) {
        for (var a = this.getTweensOf(s, o), l = a.length; l--;) gr !== a[l] && a[l].kill(s, i);
        return this
    }, n.getTweensOf = function(s, i) {
        for (var o = [], a = ln(s), l = this._first, c = ir(i), u; l;) l instanceof tt ? sL(l._targets, a) && (c ? (!gr || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, i)).length && o.push.apply(o, u), l = l._next;
        return o
    }, n.tweenTo = function(s, i) {
        i = i || {};
        var o = this,
            a = rn(o, s),
            l = i,
            c = l.startAt,
            u = l.onStart,
            f = l.onStartParams,
            d = l.immediateRender,
            h, g = tt.to(o, en({
                ease: i.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: i.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || Re,
                onStart: function() {
                    if (o.pause(), !h) {
                        var v = i.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
                        g._dur !== v && Qs(g, v, 0, 1).render(g._time, !0, !0), h = 1
                    }
                    u && u.apply(g, f || [])
                }
            }, i));
        return d ? g.render(0) : g
    }, n.tweenFromTo = function(s, i, o) {
        return this.tweenTo(i, en({
            startAt: {
                time: rn(this, s)
            }
        }, o))
    }, n.recent = function() {
        return this._recent
    }, n.nextLabel = function(s) {
        return s === void 0 && (s = this._time), $h(this, rn(this, s))
    }, n.previousLabel = function(s) {
        return s === void 0 && (s = this._time), $h(this, rn(this, s), 1)
    }, n.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + Re)
    }, n.shiftChildren = function(s, i, o) {
        o === void 0 && (o = 0);
        var a = this._first,
            l = this.labels,
            c;
        for (s = je(s); a;) a._start >= o && (a._start += s, a._end += s), a = a._next;
        if (i)
            for (c in l) l[c] >= o && (l[c] += s);
        return os(this)
    }, n.invalidate = function(s) {
        var i = this._first;
        for (this._lock = 0; i;) i.invalidate(s), i = i._next;
        return e.prototype.invalidate.call(this, s)
    }, n.clear = function(s) {
        s === void 0 && (s = !0);
        for (var i = this._first, o; i;) o = i._next, this.remove(i), i = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), os(this)
    }, n.totalDuration = function(s) {
        var i = 0,
            o = this,
            a = o._last,
            l = an,
            c, u, f;
        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
        if (o._dirty) {
            for (f = o.parent; a;) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, An(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (i -= u, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += je(u / o._ts), o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > i && a._ts && (i = a._end), a = c;
            Qs(o, o === He && o._time > i ? o._time : i, 1, 1), o._dirty = 0
        }
        return o._tDur
    }, t.updateRoot = function(s) {
        if (He._ts && (Z_(He, pa(s, He)), J_ = qt.frame), qt.frame >= Ih) {
            Ih += Jt.autoSleep || 120;
            var i = He._first;
            if ((!i || !i._ts) && Jt.autoSleep && qt._listeners.length < 2) {
                for (; i && !i._ts;) i = i._next;
                i || qt.sleep()
            }
        }
    }, t
})(Zi);
en(Rt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var xL = function(t, n, r, s, i, o, a) {
        var l = new Nt(this._pt, t, n, 0, 1, Cy, null, i),
            c = 0,
            u = 0,
            f, d, h, g, p, v, y, m;
        for (l.b = r, l.e = s, r += "", s += "", (y = ~s.indexOf("random(")) && (s = Ji(s)), o && (m = [r, s], o(m, t, n), r = m[0], s = m[1]), d = r.match(Pl) || []; f = Pl.exec(s);) g = f[0], p = s.substring(c, f.index), h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1), g !== d[u++] && (v = parseFloat(d[u - 1]) || 0, l._pt = {
            _next: l._pt,
            p: p || u === 1 ? p : ",",
            s: v,
            c: g.charAt(1) === "=" ? $s(v, g) - v : parseFloat(g) - v,
            m: h && h < 4 ? Math.round : 0
        }, c = Pl.lastIndex);
        return l.c = c < s.length ? s.substring(c, s.length) : "", l.fp = a, (G_.test(s) || y) && (l.e = 0), this._pt = l, l
    },
    sf = function(t, n, r, s, i, o, a, l, c, u) {
        qe(s) && (s = s(i || 0, t, o));
        var f = t[n],
            d = r !== "get" ? r : qe(f) ? c ? t[n.indexOf("set") || !qe(t["get" + n.substr(3)]) ? n : "get" + n.substr(3)](c) : t[n]() : f,
            h = qe(f) ? c ? ML : Sy : af,
            g;
        if (ft(s) && (~s.indexOf("random(") && (s = Ji(s)), s.charAt(1) === "=" && (g = $s(d, s) + (wt(d) || 0), (g || g === 0) && (s = g))), !u || d !== s || Jc) return !isNaN(d * s) && s !== "" ? (g = new Nt(this._pt, t, n, +d || 0, s - (d || 0), typeof f == "boolean" ? NL : Ty, 0, h), c && (g.fp = c), a && g.modifier(a, this, t), this._pt = g) : (!f && !(n in t) && Zu(n, s), xL.call(this, t, n, d, s, h, l || Jt.stringFilter, c))
    },
    AL = function(t, n, r, s, i) {
        if (qe(t) && (t = Ii(t, i, n, r, s)), !Dn(t) || t.style && t.nodeType || Et(t) || z_(t)) return ft(t) ? Ii(t, i, n, r, s) : t;
        var o = {},
            a;
        for (a in t) o[a] = Ii(t[a], i, n, r, s);
        return o
    },
    vy = function(t, n, r, s, i, o) {
        var a, l, c, u;
        if (Ut[t] && (a = new Ut[t]).init(i, a.rawVars ? n[t] : AL(n[t], s, i, o, r), r, s, o) !== !1 && (r._pt = l = new Nt(r._pt, i, t, 0, 1, a.render, a, 0, a.priority), r !== As))
            for (c = r._ptLookup[r._targets.indexOf(i)], u = a._props.length; u--;) c[a._props[u]] = l;
        return a
    },
    gr, Jc, of = function e(t, n, r) {
        var s = t.vars,
            i = s.ease,
            o = s.startAt,
            a = s.immediateRender,
            l = s.lazy,
            c = s.onUpdate,
            u = s.runBackwards,
            f = s.yoyoEase,
            d = s.keyframes,
            h = s.autoRevert,
            g = t._dur,
            p = t._startAt,
            v = t._targets,
            y = t.parent,
            m = y && y.data === "nested" ? y.vars.targets : v,
            _ = t._overwrite === "auto" && !Yu,
            b = t.timeline,
            w = s.easeReverse || f,
            k, S, L, x, O, H, F, W, Z, re, V, X, q;
        if (b && (!d || !i) && (i = "none"), t._ease = as(i, Ki.ease), t._rEase = w && (as(w) || t._ease), t._from = !b && !!s.runBackwards, t._from && (t.ratio = 1), !b || d && !s.stagger) {
            if (W = v[0] ? is(v[0]).harness : 0, X = W && s[W.prop], k = ha(s, ef), p && (p._zTime < 0 && p.progress(1), n < 0 && u && a && !h ? p.render(-1, !0) : p.revert(u && g ? No : nL), p._lazy = 0), o) {
                if (Cr(t._startAt = tt.set(v, en({
                        data: "isStart",
                        overwrite: !1,
                        parent: y,
                        immediateRender: !0,
                        lazy: !p && Mt(l),
                        startAt: null,
                        delay: 0,
                        onUpdate: c && function() {
                            return Gt(t, "onUpdate")
                        },
                        stagger: 0
                    }, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (mt || !a && !h) && t._startAt.revert(No), a && g && n <= 0 && r <= 0) {
                    n && (t._zTime = n);
                    return
                }
            } else if (u && g && !p) {
                if (n && (a = !1), L = en({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !p && Mt(l),
                        immediateRender: a,
                        stagger: 0,
                        parent: y
                    }, k), X && (L[W.prop] = X), Cr(t._startAt = tt.set(v, L)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (mt ? t._startAt.revert(No) : t._startAt.render(-1, !0)), t._zTime = n, !a) e(t._startAt, Re, Re);
                else if (!n) return
            }
            for (t._pt = t._ptCache = 0, l = g && Mt(l) || l && !g, S = 0; S < v.length; S++) {
                if (O = v[S], F = O._gsap || nf(v)[S]._gsap, t._ptLookup[S] = re = {}, zc[F.id] && wr.length && da(), V = m === v ? S : m.indexOf(O), W && (Z = new W).init(O, X || k, t, V, m) !== !1 && (t._pt = x = new Nt(t._pt, O, Z.name, 0, 1, Z.render, Z, 0, Z.priority), Z._props.forEach(function(ce) {
                        re[ce] = x
                    }), Z.priority && (H = 1)), !W || X)
                    for (L in k) Ut[L] && (Z = vy(L, k, t, V, O, m)) ? Z.priority && (H = 1) : re[L] = x = sf.call(t, O, L, "get", k[L], V, m, 0, s.stringFilter);
                t._op && t._op[S] && t.kill(O, t._op[S]), _ && t._pt && (gr = t, He.killTweensOf(O, re, t.globalTime(n)), q = !t.parent, gr = 0), t._pt && l && (zc[F.id] = 1)
            }
            H && ky(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = c, t._initted = (!t._op || t._pt) && !q, d && n <= 0 && b.render(an, !0, !0)
    },
    LL = function(t, n, r, s, i, o, a, l) {
        var c = (t._pt && t._ptCache || (t._ptCache = {}))[n],
            u, f, d, h;
        if (!c)
            for (c = t._ptCache[n] = [], d = t._ptLookup, h = t._targets.length; h--;) {
                if (u = d[h][n], u && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== n && u.fp !== n;) u = u._next;
                if (!u) return Jc = 1, t.vars[n] = "+=0", of (t, a), Jc = 0, l ? Yi(n + " not eligible for reset. Try splitting into individual properties") : 1;
                c.push(u)
            }
        for (h = c.length; h--;) f = c[h], u = f._pt || f, u.s = (s || s === 0) && !i ? s : u.s + (s || 0) + o * u.c, u.c = r - u.s, f.e && (f.e = Xe(r) + wt(f.e)), f.b && (f.b = u.s + wt(f.b))
    },
    RL = function(t, n) {
        var r = t[0] ? is(t[0]).harness : 0,
            s = r && r.aliases,
            i, o, a, l;
        if (!s) return n;
        i = Xs({}, n);
        for (o in s)
            if (o in i)
                for (l = s[o].split(","), a = l.length; a--;) i[l[a]] = i[o];
        return i
    },
    OL = function(t, n, r, s) {
        var i = n.ease || s || "power1.inOut",
            o, a;
        if (Et(n)) a = r[t] || (r[t] = []), n.forEach(function(l, c) {
            return a.push({
                t: c / (n.length - 1) * 100,
                v: l,
                e: i
            })
        });
        else
            for (o in n) a = r[o] || (r[o] = []), o === "ease" || a.push({
                t: parseFloat(t),
                v: n[o],
                e: i
            })
    },
    Ii = function(t, n, r, s, i) {
        return qe(t) ? t.call(n, r, s, i) : ft(t) && ~t.indexOf("random(") ? Ji(t) : t
    },
    wy = tf + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
    Ey = {};
It(wy + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
    return Ey[e] = 1
});
var tt = (function(e) {
    V_(t, e);

    function t(r, s, i, o) {
        var a;
        typeof s == "number" && (i.duration = s, s = i, i = null), a = e.call(this, o ? s : Oi(s)) || this;
        var l = a.vars,
            c = l.duration,
            u = l.delay,
            f = l.immediateRender,
            d = l.stagger,
            h = l.overwrite,
            g = l.keyframes,
            p = l.defaults,
            v = l.scrollTrigger,
            y = s.parent || He,
            m = (Et(r) || z_(r) ? ir(r[0]) : "length" in s) ? [r] : ln(r),
            _, b, w, k, S, L, x, O;
        if (a._targets = m.length ? nf(m) : Yi("GSAP target " + r + " not found. https://gsap.com", !Jt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, g || d || Ro(c) || Ro(u)) {
            s = a.vars;
            var H = s.easeReverse || s.yoyoEase;
            if (_ = a.timeline = new Rt({
                    data: "nested",
                    defaults: p || {},
                    targets: y && y.data === "nested" ? y.vars.targets : m
                }), _.kill(), _.parent = _._dp = Un(a), _._start = 0, d || Ro(c) || Ro(u)) {
                if (k = m.length, x = d && ly(d), Dn(d))
                    for (S in d) ~wy.indexOf(S) && (O || (O = {}), O[S] = d[S]);
                for (b = 0; b < k; b++) w = ha(s, Ey), w.stagger = 0, H && (w.easeReverse = H), O && Xs(w, O), L = m[b], w.duration = +Ii(c, Un(a), b, L, m), w.delay = (+Ii(u, Un(a), b, L, m) || 0) - a._delay, !d && k === 1 && w.delay && (a._delay = u = w.delay, a._start += u, w.delay = 0), _.to(L, w, x ? x(b, L, m) : 0), _._ease = he.none;
                _.duration() ? c = u = 0 : a.timeline = 0
            } else if (g) {
                Oi(en(_.vars.defaults, {
                    ease: "none"
                })), _._ease = as(g.ease || s.ease || "none");
                var F = 0,
                    W, Z, re;
                if (Et(g)) g.forEach(function(V) {
                    return _.to(m, V, ">")
                }), _.duration();
                else {
                    w = {};
                    for (S in g) S === "ease" || S === "easeEach" || OL(S, g[S], w, g.easeEach);
                    for (S in w)
                        for (W = w[S].sort(function(V, X) {
                                return V.t - X.t
                            }), F = 0, b = 0; b < W.length; b++) Z = W[b], re = {
                            ease: Z.e,
                            duration: (Z.t - (b ? W[b - 1].t : 0)) / 100 * c
                        }, re[S] = Z.v, _.to(m, re, F), F += re.duration;
                    _.duration() < c && _.to({}, {
                        duration: c - _.duration()
                    })
                }
            }
            c || a.duration(c = _.duration())
        } else a.timeline = 0;
        return h === !0 && !Yu && (gr = Un(a), He.killTweensOf(m), gr = 0), An(y, Un(a), i), s.reversed && a.reverse(), s.paused && a.paused(!0), (f || !c && !g && a._start === je(y._time) && Mt(f) && lL(Un(a)) && y.data !== "nested") && (a._tTime = -Re, a.render(Math.max(0, -u) || 0)), v && sy(Un(a), v), a
    }
    var n = t.prototype;
    return n.render = function(s, i, o) {
        var a = this._time,
            l = this._tDur,
            c = this._dur,
            u = s < 0,
            f = s > l - Re && !u ? l : s < Re ? 0 : s,
            d, h, g, p, v, y, m, _;
        if (!c) uL(this, s, i, o);
        else if (f !== this._tTime || !s || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
            if (d = f, _ = this.timeline, this._repeat) {
                if (p = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(p * 100 + s, i, o);
                if (d = je(f % p), f === l ? (g = this._repeat, d = c) : (v = je(f / p), g = ~~v, g && g === v ? (d = c, g--) : d > c && (d = c)), y = this._yoyo && g & 1, y && (d = c - d), v = Js(this._tTime, p), d === a && !o && this._initted && g === v) return this._tTime = f, this;
                g !== v && this.vars.repeatRefresh && !y && !this._lock && d !== p && this._initted && (this._lock = o = 1, this.render(je(p * g), !0).invalidate()._lock = 0)
            }
            if (!this._initted) {
                if (iy(this, u ? s : d, o, i, f)) return this._tTime = 0, this;
                if (a !== this._time && !(o && this.vars.repeatRefresh && g !== v)) return this;
                if (c !== this._dur) return this.render(s, i, o)
            }
            if (this._rEase) {
                var b = d < a;
                if (b !== this._inv) {
                    var w = b ? a : c - a;
                    this._inv = b, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = w ? (b ? -1 : 1) / w : 0, this._invScale = b ? -this.ratio : 1 - this.ratio, this._invEase = b ? this._rEase : this._ease
                }
                this.ratio = m = this._invRatio + this._invScale * this._invEase((d - this._invTime) * this._invRecip)
            } else this.ratio = m = this._ease(d / c);
            if (this._from && (this.ratio = m = 1 - m), this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && f && !i && !v && (Gt(this, "onStart"), this._tTime !== f)) return this;
            for (h = this._pt; h;) h.r(m, h.d), h = h._next;
            _ && _.render(s < 0 ? s : _._dur * _._ease(d / this._dur), i, o) || this._startAt && (this._zTime = s), this._onUpdate && !i && (u && qc(this, s, i, o), Gt(this, "onUpdate")), this._repeat && g !== v && this.vars.onRepeat && !i && this.parent && Gt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && qc(this, s, !0, !0), (s || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Cr(this, 1), !i && !(u && !a) && (f || a || y) && (Gt(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, n.targets = function() {
        return this._targets
    }, n.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), e.prototype.invalidate.call(this, s)
    }, n.resetTo = function(s, i, o, a, l) {
        Qi || qt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            u;
        return this._initted || of (this, c), u = this._ease(c / this._dur), LL(this, s, i, o, a, u, c, l) ? this.resetTo(s, i, o, a, 1) : (Ya(this, 0), this.parent || ny(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, n.kill = function(s, i) {
        if (i === void 0 && (i = "all"), !s && (!i || i === "all")) return this._lazy = this._pt = 0, this.parent ? Ti(this) : this.scrollTrigger && this.scrollTrigger.kill(!!mt), this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, i, gr && gr.vars.overwrite !== !0)._first || Ti(this), this.parent && o !== this.timeline.totalDuration() && Qs(this, this._dur * this.timeline._tDur / o, 0, 1), this
        }
        var a = this._targets,
            l = s ? ln(s) : a,
            c = this._ptLookup,
            u = this._pt,
            f, d, h, g, p, v, y;
        if ((!i || i === "all") && oL(a, l)) return i === "all" && (this._pt = 0), Ti(this);
        for (f = this._op = this._op || [], i !== "all" && (ft(i) && (p = {}, It(i, function(m) {
                return p[m] = 1
            }), i = p), i = RL(a, i)), y = a.length; y--;)
            if (~l.indexOf(a[y])) {
                d = c[y], i === "all" ? (f[y] = i, g = d, h = {}) : (h = f[y] = f[y] || {}, g = i);
                for (p in g) v = d && d[p], v && ((!("kill" in v.d) || v.d.kill(p) === !0) && Ga(this, v, "_pt"), delete d[p]), h !== "all" && (h[p] = 1)
            }
        return this._initted && !this._pt && u && Ti(this), this
    }, t.to = function(s, i) {
        return new t(s, i, arguments[2])
    }, t.from = function(s, i) {
        return Mi(1, arguments)
    }, t.delayedCall = function(s, i, o, a) {
        return new t(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }, t.fromTo = function(s, i, o) {
        return Mi(2, arguments)
    }, t.set = function(s, i) {
        return i.duration = 0, i.repeatDelay || (i.repeat = 0), new t(s, i)
    }, t.killTweensOf = function(s, i, o) {
        return He.killTweensOf(s, i, o)
    }, t
})(Zi);
en(tt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
It("staggerTo,staggerFrom,staggerFromTo", function(e) {
    tt[e] = function() {
        var t = new Rt,
            n = Kc.call(arguments, 0);
        return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n)
    }
});
var af = function(t, n, r) {
        return t[n] = r
    },
    Sy = function(t, n, r) {
        return t[n](r)
    },
    ML = function(t, n, r, s) {
        return t[n](s.fp, r)
    },
    IL = function(t, n, r) {
        return t.setAttribute(n, r)
    },
    lf = function(t, n) {
        return qe(t[n]) ? Sy : Xu(t[n]) && t.setAttribute ? IL : af
    },
    Ty = function(t, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n)
    },
    NL = function(t, n) {
        return n.set(n.t, n.p, !!(n.s + n.c * t), n)
    },
    Cy = function(t, n) {
        var r = n._pt,
            s = "";
        if (!t && n.b) s = n.b;
        else if (t === 1 && n.e) s = n.e;
        else {
            for (; r;) s = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + s, r = r._next;
            s += n.c
        }
        n.set(n.t, n.p, s, n)
    },
    cf = function(t, n) {
        for (var r = n._pt; r;) r.r(t, r.d), r = r._next
    },
    DL = function(t, n, r, s) {
        for (var i = this._pt, o; i;) o = i._next, i.p === s && i.modifier(t, n, r), i = o
    },
    FL = function(t) {
        for (var n = this._pt, r, s; n;) s = n._next, n.p === t && !n.op || n.op === t ? Ga(this, n, "_pt") : n.dep || (r = 1), n = s;
        return !r
    },
    $L = function(t, n, r, s) {
        s.mSet(t, n, s.m.call(s.tween, r, s.mt), s)
    },
    ky = function(t) {
        for (var n = t._pt, r, s, i, o; n;) {
            for (r = n._next, s = i; s && s.pr > n.pr;) s = s._next;
            (n._prev = s ? s._prev : o) ? n._prev._next = n: i = n, (n._next = s) ? s._prev = n : o = n, n = r
        }
        t._pt = i
    },
    Nt = (function() {
        function e(n, r, s, i, o, a, l, c, u) {
            this.t = r, this.s = i, this.c = o, this.p = s, this.r = a || Ty, this.d = l || this, this.set = c || af, this.pr = u || 0, this._next = n, n && (n._prev = this)
        }
        var t = e.prototype;
        return t.modifier = function(r, s, i) {
            this.mSet = this.mSet || this.set, this.set = $L, this.m = r, this.mt = i, this.tween = s
        }, e
    })();
It(tf + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
    return ef[e] = 1
});
Zt.TweenMax = Zt.TweenLite = tt;
Zt.TimelineLite = Zt.TimelineMax = Rt;
He = new Rt({
    sortChildren: !1,
    defaults: Ki,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Jt.stringFilter = _y;
var ls = [],
    Fo = {},
    BL = [],
    jh = 0,
    jL = 0,
    Ol = function(t) {
        return (Fo[t] || BL).map(function(n) {
            return n()
        })
    },
    Qc = function() {
        var t = Date.now(),
            n = [];
        t - jh > 2 && (Ol("matchMediaInit"), ls.forEach(function(r) {
            var s = r.queries,
                i = r.conditions,
                o, a, l, c;
            for (a in s) o = Cn.matchMedia(s[a]).matches, o && (l = 1), o !== i[a] && (i[a] = o, c = 1);
            c && (r.revert(), l && n.push(r))
        }), Ol("matchMediaRevert"), n.forEach(function(r) {
            return r.onMatch(r, function(s) {
                return r.add(null, s)
            })
        }), jh = t, Ol("matchMedia"))
    },
    Py = (function() {
        function e(n, r) {
            this.selector = r && Yc(r), this.data = [], this._r = [], this.isReverted = !1, this.id = jL++, n && this.add(n)
        }
        var t = e.prototype;
        return t.add = function(r, s, i) {
            qe(r) && (i = s, s = r, r = qe);
            var o = this,
                a = function() {
                    var c = Be,
                        u = o.selector,
                        f;
                    return c && c !== o && c.data.push(o), i && (o.selector = Yc(i)), Be = o, f = s.apply(o, arguments), qe(f) && o._r.push(f), Be = c, o.selector = u, o.isReverted = !1, f
                };
            return o.last = a, r === qe ? a(o, function(l) {
                return o.add(null, l)
            }) : r ? o[r] = a : a
        }, t.ignore = function(r) {
            var s = Be;
            Be = null, r(this), Be = s
        }, t.getTweens = function() {
            var r = [];
            return this.data.forEach(function(s) {
                return s instanceof e ? r.push.apply(r, s.getTweens()) : s instanceof tt && !(s.parent && s.parent.data === "nested") && r.push(s)
            }), r
        }, t.clear = function() {
            this._r.length = this.data.length = 0
        }, t.kill = function(r, s) {
            var i = this;
            if (r ? (function() {
                    for (var a = i.getTweens(), l = i.data.length, c; l--;) c = i.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
                        return a.splice(a.indexOf(u), 1)
                    }));
                    for (a.map(function(u) {
                            return {
                                g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                                t: u
                            }
                        }).sort(function(u, f) {
                            return f.g - u.g || -1 / 0
                        }).forEach(function(u) {
                            return u.t.revert(r)
                        }), l = i.data.length; l--;) c = i.data[l], c instanceof Rt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof tt) && c.revert && c.revert(r);
                    i._r.forEach(function(u) {
                        return u(r, i)
                    }), i.isReverted = !0
                })() : this.data.forEach(function(a) {
                    return a.kill && a.kill()
                }), this.clear(), s)
                for (var o = ls.length; o--;) ls[o].id === this.id && ls.splice(o, 1)
        }, t.revert = function(r) {
            this.kill(r || {})
        }, e
    })(),
    HL = (function() {
        function e(n) {
            this.contexts = [], this.scope = n, Be && Be.data.push(this)
        }
        var t = e.prototype;
        return t.add = function(r, s, i) {
            Dn(r) || (r = {
                matches: r
            });
            var o = new Py(0, i || this.scope),
                a = o.conditions = {},
                l, c, u;
            Be && !o.selector && (o.selector = Be.selector), this.contexts.push(o), s = o.add("onMatch", s), o.queries = r;
            for (c in r) c === "all" ? u = 1 : (l = Cn.matchMedia(r[c]), l && (ls.indexOf(o) < 0 && ls.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Qc) : l.addEventListener("change", Qc)));
            return u && s(o, function(f) {
                return o.add(null, f)
            }), this
        }, t.revert = function(r) {
            this.kill(r || {})
        }, t.kill = function(r) {
            this.contexts.forEach(function(s) {
                return s.kill(r, !0)
            })
        }, e
    })(),
    ga = {
        registerPlugin: function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            n.forEach(function(s) {
                return py(s)
            })
        },
        timeline: function(t) {
            return new Rt(t)
        },
        getTweensOf: function(t, n) {
            return He.getTweensOf(t, n)
        },
        getProperty: function(t, n, r, s) {
            ft(t) && (t = ln(t)[0]);
            var i = is(t || {}).get,
                o = r ? ty : ey;
            return r === "native" && (r = ""), t && (n ? o((Ut[n] && Ut[n].get || i)(t, n, r, s)) : function(a, l, c) {
                return o((Ut[a] && Ut[a].get || i)(t, a, l, c))
            })
        },
        quickSetter: function(t, n, r) {
            if (t = ln(t), t.length > 1) {
                var s = t.map(function(u) {
                        return $t.quickSetter(u, n, r)
                    }),
                    i = s.length;
                return function(u) {
                    for (var f = i; f--;) s[f](u)
                }
            }
            t = t[0] || {};
            var o = Ut[n],
                a = is(t),
                l = a.harness && (a.harness.aliases || {})[n] || n,
                c = o ? function(u) {
                    var f = new o;
                    As._pt = 0, f.init(t, r ? u + r : u, As, 0, [t]), f.render(1, f), As._pt && cf(1, As)
                } : a.set(t, l);
            return o ? c : function(u) {
                return c(t, l, r ? u + r : u, a, 1)
            }
        },
        quickTo: function(t, n, r) {
            var s, i = $t.to(t, en((s = {}, s[n] = "+=0.1", s.paused = !0, s.stagger = 0, s), r || {})),
                o = function(l, c, u) {
                    return i.resetTo(n, l, c, u)
                };
            return o.tween = i, o
        },
        isTweening: function(t) {
            return He.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = as(t.ease, Ki.ease)), Nh(Ki, t || {})
        },
        config: function(t) {
            return Nh(Jt, t || {})
        },
        registerEffect: function(t) {
            var n = t.name,
                r = t.effect,
                s = t.plugins,
                i = t.defaults,
                o = t.extendTimeline;
            (s || "").split(",").forEach(function(a) {
                return a && !Ut[a] && !Zt[a] && Yi(n + " effect requires " + a + " plugin.")
            }), xl[n] = function(a, l, c) {
                return r(ln(a), en(l || {}, i), c)
            }, o && (Rt.prototype[n] = function(a, l, c) {
                return this.add(xl[n](a, Dn(l) ? l : (c = l) && {}, this), c)
            })
        },
        registerEase: function(t, n) {
            he[t] = as(n)
        },
        parseEase: function(t, n) {
            return arguments.length ? as(t, n) : he
        },
        getById: function(t) {
            return He.getById(t)
        },
        exportRoot: function(t, n) {
            t === void 0 && (t = {});
            var r = new Rt(t),
                s, i;
            for (r.smoothChildTiming = Mt(t.smoothChildTiming), He.remove(r), r._dp = 0, r._time = r._tTime = He._time, s = He._first; s;) i = s._next, (n || !(!s._dur && s instanceof tt && s.vars.onComplete === s._targets[0])) && An(r, s, s._start - s._delay), s = i;
            return An(He, r, 0), r
        },
        context: function(t, n) {
            return t ? new Py(t, n) : Be
        },
        matchMedia: function(t) {
            return new HL(t)
        },
        matchMediaRefresh: function() {
            return ls.forEach(function(t) {
                var n = t.conditions,
                    r, s;
                for (s in n) n[s] && (n[s] = !1, r = 1);
                r && t.revert()
            }) || Qc()
        },
        addEventListener: function(t, n) {
            var r = Fo[t] || (Fo[t] = []);
            ~r.indexOf(n) || r.push(n)
        },
        removeEventListener: function(t, n) {
            var r = Fo[t],
                s = r && r.indexOf(n);
            s >= 0 && r.splice(s, 1)
        },
        utils: {
            wrap: yL,
            wrapYoyo: bL,
            distribute: ly,
            random: uy,
            snap: cy,
            normalize: _L,
            getUnit: wt,
            clamp: hL,
            splitColor: gy,
            toArray: ln,
            selector: Yc,
            mapRange: dy,
            pipe: gL,
            unitize: mL,
            interpolate: vL,
            shuffle: ay
        },
        install: Y_,
        effects: xl,
        ticker: qt,
        updateRoot: Rt.updateRoot,
        plugins: Ut,
        globalTimeline: He,
        core: {
            PropTween: Nt,
            globals: X_,
            Tween: tt,
            Timeline: Rt,
            Animation: Zi,
            getCache: is,
            _removeLinkedListItem: Ga,
            reverting: function() {
                return mt
            },
            context: function(t) {
                return t && Be && (Be.data.push(t), t._ctx = Be), Be
            },
            suppressOverwrites: function(t) {
                return Yu = t
            }
        }
    };
It("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
    return ga[e] = tt[e]
});
qt.add(Rt.updateRoot);
As = ga.to({}, {
    duration: 0
});
var UL = function(t, n) {
        for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n;) r = r._next;
        return r
    },
    VL = function(t, n) {
        var r = t._targets,
            s, i, o;
        for (s in n)
            for (i = r.length; i--;) o = t._ptLookup[i][s], o && (o = o.d) && (o._pt && (o = UL(o, s)), o && o.modifier && o.modifier(n[s], t, r[i], s))
    },
    Ml = function(t, n) {
        return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function(s, i, o) {
                o._onInit = function(a) {
                    var l, c;
                    if (ft(i) && (l = {}, It(i, function(u) {
                            return l[u] = 1
                        }), i = l), n) {
                        l = {};
                        for (c in i) l[c] = n(i[c]);
                        i = l
                    }
                    VL(a, i)
                }
            }
        }
    },
    $t = ga.registerPlugin({
        name: "attr",
        init: function(t, n, r, s, i) {
            var o, a, l;
            this.tween = r;
            for (o in n) l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", n[o], s, i, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
        },
        render: function(t, n) {
            for (var r = n._pt; r;) mt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(t, n) {
            for (var r = n.length; r--;) this.add(t, r, t[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
        }
    }, Ml("roundProps", Xc), Ml("modifiers"), Ml("snap", cy)) || ga;
tt.version = Rt.version = $t.version = "3.15.0";
K_ = 1;
Ju() && Zs();
he.Power0;
he.Power1;
he.Power2;
he.Power3;
he.Power4;
he.Linear;
he.Quad;
he.Cubic;
he.Quart;
he.Quint;
he.Strong;
he.Elastic;
he.Back;
he.SteppedEase;
he.Bounce;
he.Sine;
he.Expo;
he.Circ;
var Hh, mr, Bs, uf, Xr, Uh, ff, WL = function() {
        return typeof window < "u"
    },
    or = {},
    qr = 180 / Math.PI,
    js = Math.PI / 180,
    vs = Math.atan2,
    Vh = 1e8,
    df = /([A-Z])/g,
    zL = /(left|right|width|margin|padding|x)/i,
    qL = /[\s,\(]\S/,
    Ln = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Zc = function(t, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n)
    },
    GL = function(t, n) {
        return n.set(n.t, n.p, t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n)
    },
    KL = function(t, n) {
        return n.set(n.t, n.p, t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n)
    },
    YL = function(t, n) {
        return n.set(n.t, n.p, t === 1 ? n.e : t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n)
    },
    XL = function(t, n) {
        var r = n.s + n.c * t;
        n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
    },
    xy = function(t, n) {
        return n.set(n.t, n.p, t ? n.e : n.b, n)
    },
    Ay = function(t, n) {
        return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n)
    },
    JL = function(t, n, r) {
        return t.style[n] = r
    },
    QL = function(t, n, r) {
        return t.style.setProperty(n, r)
    },
    ZL = function(t, n, r) {
        return t._gsap[n] = r
    },
    eR = function(t, n, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    },
    tR = function(t, n, r, s, i) {
        var o = t._gsap;
        o.scaleX = o.scaleY = r, o.renderTransform(i, o)
    },
    nR = function(t, n, r, s, i) {
        var o = t._gsap;
        o[n] = r, o.renderTransform(i, o)
    },
    Ve = "transform",
    Dt = Ve + "Origin",
    rR = function e(t, n) {
        var r = this,
            s = this.target,
            i = s.style,
            o = s._gsap;
        if (t in or && i) {
            if (this.tfm = this.tfm || {}, t !== "transform") t = Ln[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
                return r.tfm[a] = Wn(s, a)
            }) : this.tfm[t] = o.x ? o[t] : Wn(s, t), t === Dt && (this.tfm.zOrigin = o.zOrigin);
            else return Ln.transform.split(",").forEach(function(a) {
                return e.call(r, a, n)
            });
            if (this.props.indexOf(Ve) >= 0) return;
            o.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(Dt, n, "")), t = Ve
        }(i || n) && this.props.push(t, n, i[t])
    },
    Ly = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    sR = function() {
        var t = this.props,
            n = this.target,
            r = n.style,
            s = n._gsap,
            i, o;
        for (i = 0; i < t.length; i += 3) t[i + 1] ? t[i + 1] === 2 ? n[t[i]](t[i + 2]) : n[t[i]] = t[i + 2] : t[i + 2] ? r[t[i]] = t[i + 2] : r.removeProperty(t[i].substr(0, 2) === "--" ? t[i] : t[i].replace(df, "-$1").toLowerCase());
        if (this.tfm) {
            for (o in this.tfm) s[o] = this.tfm[o];
            s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), i = ff(), (!i || !i.isStart) && !r[Ve] && (Ly(r), s.zOrigin && r[Dt] && (r[Dt] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
        }
    },
    Ry = function(t, n) {
        var r = {
            target: t,
            props: [],
            revert: sR,
            save: rR
        };
        return t._gsap || $t.core.getCache(t), n && t.style && t.nodeType && n.split(",").forEach(function(s) {
            return r.save(s)
        }), r
    },
    Oy, eu = function(t, n) {
        var r = mr.createElementNS ? mr.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : mr.createElement(t);
        return r && r.style ? r : mr.createElement(t)
    },
    Kt = function e(t, n, r) {
        var s = getComputedStyle(t);
        return s[n] || s.getPropertyValue(n.replace(df, "-$1").toLowerCase()) || s.getPropertyValue(n) || !r && e(t, ei(n) || n, 1) || ""
    },
    Wh = "O,Moz,ms,Ms,Webkit".split(","),
    ei = function(t, n, r) {
        var s = n || Xr,
            i = s.style,
            o = 5;
        if (t in i && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Wh[o] + t in i););
        return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Wh[o] : "") + t
    },
    tu = function() {
        WL() && window.document && (Hh = window, mr = Hh.document, Bs = mr.documentElement, Xr = eu("div") || {
            style: {}
        }, eu("div"), Ve = ei(Ve), Dt = Ve + "Origin", Xr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Oy = !!ei("perspective"), ff = $t.core.reverting, uf = 1)
    },
    zh = function(t) {
        var n = t.ownerSVGElement,
            r = eu("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = t.cloneNode(!0),
            i;
        s.style.display = "block", r.appendChild(s), Bs.appendChild(r);
        try {
            i = s.getBBox()
        } catch {}
        return r.removeChild(s), Bs.removeChild(r), i
    },
    qh = function(t, n) {
        for (var r = n.length; r--;)
            if (t.hasAttribute(n[r])) return t.getAttribute(n[r])
    },
    My = function(t) {
        var n, r;
        try {
            n = t.getBBox()
        } catch {
            n = zh(t), r = 1
        }
        return n && (n.width || n.height) || r || (n = zh(t)), n && !n.width && !n.x && !n.y ? {
            x: +qh(t, ["x", "cx", "x1"]) || 0,
            y: +qh(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : n
    },
    Iy = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && My(t))
    },
    kr = function(t, n) {
        if (n) {
            var r = t.style,
                s;
            n in or && n !== Dt && (n = Ve), r.removeProperty ? (s = n.substr(0, 2), (s === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(s === "--" ? n : n.replace(df, "-$1").toLowerCase())) : r.removeAttribute(n)
        }
    },
    _r = function(t, n, r, s, i, o) {
        var a = new Nt(t._pt, n, r, 0, 1, o ? Ay : xy);
        return t._pt = a, a.b = s, a.e = i, t._props.push(r), a
    },
    Gh = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    iR = {
        grid: 1,
        flex: 1
    },
    Pr = function e(t, n, r, s) {
        var i = parseFloat(r) || 0,
            o = (r + "").trim().substr((i + "").length) || "px",
            a = Xr.style,
            l = zL.test(n),
            c = t.tagName.toLowerCase() === "svg",
            u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
            f = 100,
            d = s === "px",
            h = s === "%",
            g, p, v, y;
        if (s === o || !i || Gh[s] || Gh[o]) return i;
        if (o !== "px" && !d && (i = e(t, n, r, "px")), y = t.getCTM && Iy(t), (h || o === "%") && (or[n] || ~n.indexOf("adius"))) return g = y ? t.getBBox()[l ? "width" : "height"] : t[u], Xe(h ? i / g * f : i / 100 * g);
        if (a[l ? "width" : "height"] = f + (d ? o : s), p = s !== "rem" && ~n.indexOf("adius") || s === "em" && t.appendChild && !c ? t : t.parentNode, y && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === mr || !p.appendChild) && (p = mr.body), v = p._gsap, v && h && v.width && l && v.time === qt.time && !v.uncache) return Xe(i / v.width * f);
        if (h && (n === "height" || n === "width")) {
            var m = t.style[n];
            t.style[n] = f + s, g = t[u], m ? t.style[n] = m : kr(t, n)
        } else(h || o === "%") && !iR[Kt(p, "display")] && (a.position = Kt(t, "position")), p === t && (a.position = "static"), p.appendChild(Xr), g = Xr[u], p.removeChild(Xr), a.position = "absolute";
        return l && h && (v = is(p), v.time = qt.time, v.width = p[u]), Xe(d ? g * i / f : g && i ? f / g * i : 0)
    },
    Wn = function(t, n, r, s) {
        var i;
        return uf || tu(), n in Ln && n !== "transform" && (n = Ln[n], ~n.indexOf(",") && (n = n.split(",")[0])), or[n] && n !== "transform" ? (i = to(t, s), i = n !== "transformOrigin" ? i[n] : i.svg ? i.origin : _a(Kt(t, Dt)) + " " + i.zOrigin + "px") : (i = t.style[n], (!i || i === "auto" || s || ~(i + "").indexOf("calc(")) && (i = ma[n] && ma[n](t, n, r) || Kt(t, n) || Q_(t, n) || (n === "opacity" ? 1 : 0))), r && !~(i + "").trim().indexOf(" ") ? Pr(t, n, i, r) + r : i
    },
    oR = function(t, n, r, s) {
        if (!r || r === "none") {
            var i = ei(n, t, 1),
                o = i && Kt(t, i, 1);
            o && o !== r ? (n = i, r = o) : n === "borderColor" && (r = Kt(t, "borderTopColor"))
        }
        var a = new Nt(this._pt, t.style, n, 0, 1, Cy),
            l = 0,
            c = 0,
            u, f, d, h, g, p, v, y, m, _, b, w;
        if (a.b = r, a.e = s, r += "", s += "", s.substring(0, 6) === "var(--" && (s = Kt(t, s.substring(4, s.indexOf(")")))), s === "auto" && (p = t.style[n], t.style[n] = s, s = Kt(t, n) || s, p ? t.style[n] = p : kr(t, n)), u = [r, s], _y(u), r = u[0], s = u[1], d = r.match(xs) || [], w = s.match(xs) || [], w.length) {
            for (; f = xs.exec(s);) v = f[0], m = s.substring(l, f.index), g ? g = (g + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (g = 1), v !== (p = d[c++] || "") && (h = parseFloat(p) || 0, b = p.substr((h + "").length), v.charAt(1) === "=" && (v = $s(h, v) + b), y = parseFloat(v), _ = v.substr((y + "").length), l = xs.lastIndex - _.length, _ || (_ = _ || Jt.units[n] || b, l === s.length && (s += _, a.e += _)), b !== _ && (h = Pr(t, n, p, _) || 0), a._pt = {
                _next: a._pt,
                p: m || c === 1 ? m : ",",
                s: h,
                c: y - h,
                m: g && g < 4 || n === "zIndex" ? Math.round : 0
            });
            a.c = l < s.length ? s.substring(l, s.length) : ""
        } else a.r = n === "display" && s === "none" ? Ay : xy;
        return G_.test(s) && (a.e = 0), this._pt = a, a
    },
    Kh = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    aR = function(t) {
        var n = t.split(" "),
            r = n[0],
            s = n[1] || "50%";
        return (r === "top" || r === "bottom" || s === "left" || s === "right") && (t = r, r = s, s = t), n[0] = Kh[r] || r, n[1] = Kh[s] || s, n.join(" ")
    },
    lR = function(t, n) {
        if (n.tween && n.tween._time === n.tween._dur) {
            var r = n.t,
                s = r.style,
                i = n.u,
                o = r._gsap,
                a, l, c;
            if (i === "all" || i === !0) s.cssText = "", l = 1;
            else
                for (i = i.split(","), c = i.length; --c > -1;) a = i[c], or[a] && (l = 1, a = a === "transformOrigin" ? Dt : Ve), kr(r, a);
            l && (kr(r, Ve), o && (o.svg && r.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", to(r, 1), o.uncache = 1, Ly(s)))
        }
    },
    ma = {
        clearProps: function(t, n, r, s, i) {
            if (i.data !== "isFromStart") {
                var o = t._pt = new Nt(t._pt, n, r, 0, 0, lR);
                return o.u = s, o.pr = -10, o.tween = i, t._props.push(r), 1
            }
        }
    },
    eo = [1, 0, 0, 1, 0, 0],
    Ny = {},
    Dy = function(t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    },
    Yh = function(t) {
        var n = Kt(t, Ve);
        return Dy(n) ? eo : n.substr(7).match(q_).map(Xe)
    },
    hf = function(t, n) {
        var r = t._gsap || is(t),
            s = t.style,
            i = Yh(t),
            o, a, l, c;
        return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, i = [l.a, l.b, l.c, l.d, l.e, l.f], i.join(",") === "1,0,0,1,0,0" ? eo : i) : (i === eo && !t.offsetParent && t !== Bs && !r.svg && (l = s.display, s.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, a = t.nextElementSibling, Bs.appendChild(t)), i = Yh(t), l ? s.display = l : kr(t, "display"), c && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : Bs.removeChild(t))), n && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
    },
    nu = function(t, n, r, s, i, o) {
        var a = t._gsap,
            l = i || hf(t, !0),
            c = a.xOrigin || 0,
            u = a.yOrigin || 0,
            f = a.xOffset || 0,
            d = a.yOffset || 0,
            h = l[0],
            g = l[1],
            p = l[2],
            v = l[3],
            y = l[4],
            m = l[5],
            _ = n.split(" "),
            b = parseFloat(_[0]) || 0,
            w = parseFloat(_[1]) || 0,
            k, S, L, x;
        r ? l !== eo && (S = h * v - g * p) && (L = b * (v / S) + w * (-p / S) + (p * m - v * y) / S, x = b * (-g / S) + w * (h / S) - (h * m - g * y) / S, b = L, w = x) : (k = My(t), b = k.x + (~_[0].indexOf("%") ? b / 100 * k.width : b), w = k.y + (~(_[1] || _[0]).indexOf("%") ? w / 100 * k.height : w)), s || s !== !1 && a.smooth ? (y = b - c, m = w - u, a.xOffset = f + (y * h + m * p) - y, a.yOffset = d + (y * g + m * v) - m) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = w, a.smooth = !!s, a.origin = n, a.originIsAbsolute = !!r, t.style[Dt] = "0px 0px", o && (_r(o, a, "xOrigin", c, b), _r(o, a, "yOrigin", u, w), _r(o, a, "xOffset", f, a.xOffset), _r(o, a, "yOffset", d, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + w)
    },
    to = function(t, n) {
        var r = t._gsap || new by(t);
        if ("x" in r && !n && !r.uncache) return r;
        var s = t.style,
            i = r.scaleX < 0,
            o = "px",
            a = "deg",
            l = getComputedStyle(t),
            c = Kt(t, Dt) || "0",
            u, f, d, h, g, p, v, y, m, _, b, w, k, S, L, x, O, H, F, W, Z, re, V, X, q, ce, it, Ke, Ie, Bt, Ze, ut;
        return u = f = d = p = v = y = m = _ = b = 0, h = g = 1, r.svg = !!(t.getCTM && Iy(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[Ve] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ve] !== "none" ? l[Ve] : "")), s.scale = s.rotate = s.translate = "none"), S = hf(t, r.svg), r.svg && (r.uncache ? (q = t.getBBox(), c = r.xOrigin - q.x + "px " + (r.yOrigin - q.y) + "px", X = "") : X = !n && t.getAttribute("data-svg-origin"), nu(t, X || c, !!X || r.originIsAbsolute, r.smooth !== !1, S)), w = r.xOrigin || 0, k = r.yOrigin || 0, S !== eo && (H = S[0], F = S[1], W = S[2], Z = S[3], u = re = S[4], f = V = S[5], S.length === 6 ? (h = Math.sqrt(H * H + F * F), g = Math.sqrt(Z * Z + W * W), p = H || F ? vs(F, H) * qr : 0, m = W || Z ? vs(W, Z) * qr + p : 0, m && (g *= Math.abs(Math.cos(m * js))), r.svg && (u -= w - (w * H + k * W), f -= k - (w * F + k * Z))) : (ut = S[6], Bt = S[7], it = S[8], Ke = S[9], Ie = S[10], Ze = S[11], u = S[12], f = S[13], d = S[14], L = vs(ut, Ie), v = L * qr, L && (x = Math.cos(-L), O = Math.sin(-L), X = re * x + it * O, q = V * x + Ke * O, ce = ut * x + Ie * O, it = re * -O + it * x, Ke = V * -O + Ke * x, Ie = ut * -O + Ie * x, Ze = Bt * -O + Ze * x, re = X, V = q, ut = ce), L = vs(-W, Ie), y = L * qr, L && (x = Math.cos(-L), O = Math.sin(-L), X = H * x - it * O, q = F * x - Ke * O, ce = W * x - Ie * O, Ze = Z * O + Ze * x, H = X, F = q, W = ce), L = vs(F, H), p = L * qr, L && (x = Math.cos(L), O = Math.sin(L), X = H * x + F * O, q = re * x + V * O, F = F * x - H * O, V = V * x - re * O, H = X, re = q), v && Math.abs(v) + Math.abs(p) > 359.9 && (v = p = 0, y = 180 - y), h = Xe(Math.sqrt(H * H + F * F + W * W)), g = Xe(Math.sqrt(V * V + ut * ut)), L = vs(re, V), m = Math.abs(L) > 2e-4 ? L * qr : 0, b = Ze ? 1 / (Ze < 0 ? -Ze : Ze) : 0), r.svg && (X = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Dy(Kt(t, Ve)), X && t.setAttribute("transform", X))), Math.abs(m) > 90 && Math.abs(m) < 270 && (i ? (h *= -1, m += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, m += m <= 0 ? 180 : -180)), n = n || r.uncache, r.x = u - ((r.xPercent = u && (!n && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = d + o, r.scaleX = Xe(h), r.scaleY = Xe(g), r.rotation = Xe(p) + a, r.rotationX = Xe(v) + a, r.rotationY = Xe(y) + a, r.skewX = m + a, r.skewY = _ + a, r.transformPerspective = b + o, (r.zOrigin = parseFloat(c.split(" ")[2]) || !n && r.zOrigin || 0) && (s[Dt] = _a(c)), r.xOffset = r.yOffset = 0, r.force3D = Jt.force3D, r.renderTransform = r.svg ? uR : Oy ? Fy : cR, r.uncache = 0, r
    },
    _a = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    Il = function(t, n, r) {
        var s = wt(n);
        return Xe(parseFloat(n) + parseFloat(Pr(t, "x", r + "px", s))) + s
    },
    cR = function(t, n) {
        n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, Fy(t, n)
    },
    Ur = "0deg",
    bi = "0px",
    Vr = ") ",
    Fy = function(t, n) {
        var r = n || this,
            s = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            l = r.z,
            c = r.rotation,
            u = r.rotationY,
            f = r.rotationX,
            d = r.skewX,
            h = r.skewY,
            g = r.scaleX,
            p = r.scaleY,
            v = r.transformPerspective,
            y = r.force3D,
            m = r.target,
            _ = r.zOrigin,
            b = "",
            w = y === "auto" && t && t !== 1 || y === !0;
        if (_ && (f !== Ur || u !== Ur)) {
            var k = parseFloat(u) * js,
                S = Math.sin(k),
                L = Math.cos(k),
                x;
            k = parseFloat(f) * js, x = Math.cos(k), o = Il(m, o, S * x * -_), a = Il(m, a, -Math.sin(k) * -_), l = Il(m, l, L * x * -_ + _)
        }
        v !== bi && (b += "perspective(" + v + Vr), (s || i) && (b += "translate(" + s + "%, " + i + "%) "), (w || o !== bi || a !== bi || l !== bi) && (b += l !== bi || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Vr), c !== Ur && (b += "rotate(" + c + Vr), u !== Ur && (b += "rotateY(" + u + Vr), f !== Ur && (b += "rotateX(" + f + Vr), (d !== Ur || h !== Ur) && (b += "skew(" + d + ", " + h + Vr), (g !== 1 || p !== 1) && (b += "scale(" + g + ", " + p + Vr), m.style[Ve] = b || "translate(0, 0)"
    },
    uR = function(t, n) {
        var r = n || this,
            s = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            l = r.rotation,
            c = r.skewX,
            u = r.skewY,
            f = r.scaleX,
            d = r.scaleY,
            h = r.target,
            g = r.xOrigin,
            p = r.yOrigin,
            v = r.xOffset,
            y = r.yOffset,
            m = r.forceCSS,
            _ = parseFloat(o),
            b = parseFloat(a),
            w, k, S, L, x;
        l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= js, c *= js, w = Math.cos(l) * f, k = Math.sin(l) * f, S = Math.sin(l - c) * -d, L = Math.cos(l - c) * d, c && (u *= js, x = Math.tan(c - u), x = Math.sqrt(1 + x * x), S *= x, L *= x, u && (x = Math.tan(u), x = Math.sqrt(1 + x * x), w *= x, k *= x)), w = Xe(w), k = Xe(k), S = Xe(S), L = Xe(L)) : (w = f, L = d, k = S = 0), (_ && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (_ = Pr(h, "x", o, "px"), b = Pr(h, "y", a, "px")), (g || p || v || y) && (_ = Xe(_ + g - (g * w + p * S) + v), b = Xe(b + p - (g * k + p * L) + y)), (s || i) && (x = h.getBBox(), _ = Xe(_ + s / 100 * x.width), b = Xe(b + i / 100 * x.height)), x = "matrix(" + w + "," + k + "," + S + "," + L + "," + _ + "," + b + ")", h.setAttribute("transform", x), m && (h.style[Ve] = x)
    },
    fR = function(t, n, r, s, i) {
        var o = 360,
            a = ft(i),
            l = parseFloat(i) * (a && ~i.indexOf("rad") ? qr : 1),
            c = l - s,
            u = s + c + "deg",
            f, d;
        return a && (f = i.split("_")[1], f === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), f === "cw" && c < 0 ? c = (c + o * Vh) % o - ~~(c / o) * o : f === "ccw" && c > 0 && (c = (c - o * Vh) % o - ~~(c / o) * o)), t._pt = d = new Nt(t._pt, n, r, s, c, GL), d.e = u, d.u = "deg", t._props.push(r), d
    },
    Xh = function(t, n) {
        for (var r in n) t[r] = n[r];
        return t
    },
    dR = function(t, n, r) {
        var s = Xh({}, r._gsap),
            i = "perspective,force3D,transformOrigin,svgOrigin",
            o = r.style,
            a, l, c, u, f, d, h, g;
        s.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), o[Ve] = n, a = to(r, 1), kr(r, Ve), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[Ve], o[Ve] = n, a = to(r, 1), o[Ve] = c);
        for (l in or) c = s[l], u = a[l], c !== u && i.indexOf(l) < 0 && (h = wt(c), g = wt(u), f = h !== g ? Pr(r, l, c, g) : parseFloat(c), d = parseFloat(u), t._pt = new Nt(t._pt, a, l, f, d - f, Zc), t._pt.u = g || 0, t._props.push(l));
        Xh(a, s)
    };
It("padding,margin,Width,Radius", function(e, t) {
    var n = "Top",
        r = "Right",
        s = "Bottom",
        i = "Left",
        o = (t < 3 ? [n, r, s, i] : [n + i, n + r, s + r, s + i]).map(function(a) {
            return t < 2 ? e + a : "border" + a + e
        });
    ma[t > 1 ? "border" + e : e] = function(a, l, c, u, f) {
        var d, h;
        if (arguments.length < 4) return d = o.map(function(g) {
            return Wn(a, g, c)
        }), h = d.join(" "), h.split(d[0]).length === 5 ? d[0] : h;
        d = (u + "").split(" "), h = {}, o.forEach(function(g, p) {
            return h[g] = d[p] = d[p] || d[(p - 1) / 2 | 0]
        }), a.init(l, h, f)
    }
});
var $y = {
    name: "css",
    register: tu,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, n, r, s, i) {
        var o = this._props,
            a = t.style,
            l = r.vars.startAt,
            c, u, f, d, h, g, p, v, y, m, _, b, w, k, S, L, x;
        uf || tu(), this.styles = this.styles || Ry(t), L = this.styles.props, this.tween = r;
        for (p in n)
            if (p !== "autoRound" && (u = n[p], !(Ut[p] && vy(p, n, r, s, t, i)))) {
                if (h = typeof u, g = ma[p], h === "function" && (u = u.call(r, s, t, i), h = typeof u), h === "string" && ~u.indexOf("random(") && (u = Ji(u)), g) g(this, t, p, u, r) && (S = 1);
                else if (p.substr(0, 2) === "--") c = (getComputedStyle(t).getPropertyValue(p) + "").trim(), u += "", Er.lastIndex = 0, Er.test(c) || (v = wt(c), y = wt(u), y ? v !== y && (c = Pr(t, p, c, y) + y) : v && (u += v)), this.add(a, "setProperty", c, u, s, i, 0, 0, p), o.push(p), L.push(p, 0, a[p]);
                else if (h !== "undefined") {
                    if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(r, s, t, i) : l[p], ft(c) && ~c.indexOf("random(") && (c = Ji(c)), wt(c + "") || c === "auto" || (c += Jt.units[p] || wt(Wn(t, p)) || ""), (c + "").charAt(1) === "=" && (c = Wn(t, p))) : c = Wn(t, p), d = parseFloat(c), m = h === "string" && u.charAt(1) === "=" && u.substr(0, 2), m && (u = u.substr(2)), f = parseFloat(u), p in Ln && (p === "autoAlpha" && (d === 1 && Wn(t, "visibility") === "hidden" && f && (d = 0), L.push("visibility", 0, a.visibility), _r(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), p !== "scale" && p !== "transform" && (p = Ln[p], ~p.indexOf(",") && (p = p.split(",")[0]))), _ = p in or, _) {
                        if (this.styles.save(p), x = u, h === "string" && u.substring(0, 6) === "var(--") {
                            if (u = Kt(t, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                                var O = t.style.perspective;
                                t.style.perspective = u, u = Kt(t, "perspective"), O ? t.style.perspective = O : kr(t, "perspective")
                            }
                            f = parseFloat(u)
                        }
                        if (b || (w = t._gsap, w.renderTransform && !n.parseTransform || to(t, n.parseTransform), k = n.smoothOrigin !== !1 && w.smooth, b = this._pt = new Nt(this._pt, a, Ve, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), p === "scale") this._pt = new Nt(this._pt, w, "scaleY", w.scaleY, (m ? $s(w.scaleY, m + f) : f) - w.scaleY || 0, Zc), this._pt.u = 0, o.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            L.push(Dt, 0, a[Dt]), u = aR(u), w.svg ? nu(t, u, 0, k, 0, this) : (y = parseFloat(u.split(" ")[2]) || 0, y !== w.zOrigin && _r(this, w, "zOrigin", w.zOrigin, y), _r(this, a, p, _a(c), _a(u)));
                            continue
                        } else if (p === "svgOrigin") {
                            nu(t, u, 1, k, 0, this);
                            continue
                        } else if (p in Ny) {
                            fR(this, w, p, d, m ? $s(d, m + u) : u);
                            continue
                        } else if (p === "smoothOrigin") {
                            _r(this, w, "smooth", w.smooth, u);
                            continue
                        } else if (p === "force3D") {
                            w[p] = u;
                            continue
                        } else if (p === "transform") {
                            dR(this, u, t);
                            continue
                        }
                    } else p in a || (p = ei(p) || p);
                    if (_ || (f || f === 0) && (d || d === 0) && !qL.test(u) && p in a) v = (c + "").substr((d + "").length), f || (f = 0), y = wt(u) || (p in Jt.units ? Jt.units[p] : v), v !== y && (d = Pr(t, p, c, y)), this._pt = new Nt(this._pt, _ ? w : a, p, d, (m ? $s(d, m + f) : f) - d, !_ && (y === "px" || p === "zIndex") && n.autoRound !== !1 ? XL : Zc), this._pt.u = y || 0, _ && x !== u ? (this._pt.b = c, this._pt.e = x, this._pt.r = YL) : v !== y && y !== "%" && (this._pt.b = c, this._pt.r = KL);
                    else if (p in a) oR.call(this, t, p, c, m ? m + u : u);
                    else if (p in t) this.add(t, p, c || t[p], m ? m + u : u, s, i);
                    else if (p !== "parseTransform") {
                        Zu(p, u);
                        continue
                    }
                    _ || (p in a ? L.push(p, 0, a[p]) : typeof t[p] == "function" ? L.push(p, 2, t[p]()) : L.push(p, 1, c || t[p])), o.push(p)
                }
            }
        S && ky(this)
    },
    render: function(t, n) {
        if (n.tween._time || !ff())
            for (var r = n._pt; r;) r.r(t, r.d), r = r._next;
        else n.styles.revert()
    },
    get: Wn,
    aliases: Ln,
    getSetter: function(t, n, r) {
        var s = Ln[n];
        return s && s.indexOf(",") < 0 && (n = s), n in or && n !== Dt && (t._gsap.x || Wn(t, "x")) ? r && Uh === r ? n === "scale" ? eR : ZL : (Uh = r || {}) && (n === "scale" ? tR : nR) : t.style && !Xu(t.style[n]) ? JL : ~n.indexOf("-") ? QL : lf(t, n)
    },
    core: {
        _removeProperty: kr,
        _getMatrix: hf
    }
};
$t.utils.checkPrefix = ei;
$t.core.getStyleSaver = Ry;
(function(e, t, n, r) {
    var s = It(e + "," + t + "," + n, function(i) {
        or[i] = 1
    });
    It(t, function(i) {
        Jt.units[i] = "deg", Ny[i] = 1
    }), Ln[s[13]] = e + "," + t, It(r, function(i) {
        var o = i.split(":");
        Ln[o[1]] = s[o[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
It("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
    Jt.units[e] = "px"
});
$t.registerPlugin($y);
var Hs = $t.registerPlugin($y) || $t;
Hs.core.Tween;
const hR = {
        AmazonBot: "amazonbot",
        "Amazon Silk": "amazon_silk",
        "Android Browser": "android",
        BaiduSpider: "baiduspider",
        Bada: "bada",
        BingCrawler: "bingcrawler",
        Brave: "brave",
        BlackBerry: "blackberry",
        "ChatGPT-User": "chatgpt_user",
        Chrome: "chrome",
        ClaudeBot: "claudebot",
        Chromium: "chromium",
        Diffbot: "diffbot",
        DuckDuckBot: "duckduckbot",
        DuckDuckGo: "duckduckgo",
        Electron: "electron",
        Epiphany: "epiphany",
        FacebookExternalHit: "facebookexternalhit",
        Firefox: "firefox",
        Focus: "focus",
        Generic: "generic",
        "Google Search": "google_search",
        Googlebot: "googlebot",
        GPTBot: "gptbot",
        "Internet Explorer": "ie",
        InternetArchiveCrawler: "internetarchivecrawler",
        "K-Meleon": "k_meleon",
        LibreWolf: "librewolf",
        Linespider: "linespider",
        Maxthon: "maxthon",
        "Meta-ExternalAds": "meta_externalads",
        "Meta-ExternalAgent": "meta_externalagent",
        "Meta-ExternalFetcher": "meta_externalfetcher",
        "Meta-WebIndexer": "meta_webindexer",
        "Microsoft Edge": "edge",
        "MZ Browser": "mz",
        "NAVER Whale Browser": "naver",
        "OAI-SearchBot": "oai_searchbot",
        Omgilibot: "omgilibot",
        Opera: "opera",
        "Opera Coast": "opera_coast",
        "Pale Moon": "pale_moon",
        PerplexityBot: "perplexitybot",
        "Perplexity-User": "perplexity_user",
        PhantomJS: "phantomjs",
        PingdomBot: "pingdombot",
        Puffin: "puffin",
        QQ: "qq",
        QQLite: "qqlite",
        QupZilla: "qupzilla",
        Roku: "roku",
        Safari: "safari",
        Sailfish: "sailfish",
        "Samsung Internet for Android": "samsung_internet",
        SlackBot: "slackbot",
        SeaMonkey: "seamonkey",
        Sleipnir: "sleipnir",
        "Sogou Browser": "sogou",
        Swing: "swing",
        Tizen: "tizen",
        "UC Browser": "uc",
        Vivaldi: "vivaldi",
        "WebOS Browser": "webos",
        WeChat: "wechat",
        YahooSlurp: "yahooslurp",
        "Yandex Browser": "yandex",
        YandexBot: "yandexbot",
        YouBot: "youbot"
    },
    By = {
        amazonbot: "AmazonBot",
        amazon_silk: "Amazon Silk",
        android: "Android Browser",
        baiduspider: "BaiduSpider",
        bada: "Bada",
        bingcrawler: "BingCrawler",
        blackberry: "BlackBerry",
        brave: "Brave",
        chatgpt_user: "ChatGPT-User",
        chrome: "Chrome",
        claudebot: "ClaudeBot",
        chromium: "Chromium",
        diffbot: "Diffbot",
        duckduckbot: "DuckDuckBot",
        duckduckgo: "DuckDuckGo",
        edge: "Microsoft Edge",
        electron: "Electron",
        epiphany: "Epiphany",
        facebookexternalhit: "FacebookExternalHit",
        firefox: "Firefox",
        focus: "Focus",
        generic: "Generic",
        google_search: "Google Search",
        googlebot: "Googlebot",
        gptbot: "GPTBot",
        ie: "Internet Explorer",
        internetarchivecrawler: "InternetArchiveCrawler",
        k_meleon: "K-Meleon",
        librewolf: "LibreWolf",
        linespider: "Linespider",
        maxthon: "Maxthon",
        meta_externalads: "Meta-ExternalAds",
        meta_externalagent: "Meta-ExternalAgent",
        meta_externalfetcher: "Meta-ExternalFetcher",
        meta_webindexer: "Meta-WebIndexer",
        mz: "MZ Browser",
        naver: "NAVER Whale Browser",
        oai_searchbot: "OAI-SearchBot",
        omgilibot: "Omgilibot",
        opera: "Opera",
        opera_coast: "Opera Coast",
        pale_moon: "Pale Moon",
        perplexitybot: "PerplexityBot",
        perplexity_user: "Perplexity-User",
        phantomjs: "PhantomJS",
        pingdombot: "PingdomBot",
        puffin: "Puffin",
        qq: "QQ Browser",
        qqlite: "QQ Browser Lite",
        qupzilla: "QupZilla",
        roku: "Roku",
        safari: "Safari",
        sailfish: "Sailfish",
        samsung_internet: "Samsung Internet for Android",
        seamonkey: "SeaMonkey",
        slackbot: "SlackBot",
        sleipnir: "Sleipnir",
        sogou: "Sogou Browser",
        swing: "Swing",
        tizen: "Tizen",
        uc: "UC Browser",
        vivaldi: "Vivaldi",
        webos: "WebOS Browser",
        wechat: "WeChat",
        yahooslurp: "YahooSlurp",
        yandex: "Yandex Browser",
        yandexbot: "YandexBot",
        youbot: "YouBot"
    },
    ie = {
        bot: "bot",
        desktop: "desktop",
        mobile: "mobile",
        tablet: "tablet",
        tv: "tv"
    },
    yt = {
        Android: "Android",
        Bada: "Bada",
        BlackBerry: "BlackBerry",
        ChromeOS: "Chrome OS",
        HarmonyOS: "HarmonyOS",
        iOS: "iOS",
        Linux: "Linux",
        MacOS: "macOS",
        PlayStation4: "PlayStation 4",
        Roku: "Roku",
        Tizen: "Tizen",
        WebOS: "WebOS",
        Windows: "Windows",
        WindowsPhone: "Windows Phone"
    },
    fr = {
        Blink: "Blink",
        EdgeHTML: "EdgeHTML",
        Gecko: "Gecko",
        Presto: "Presto",
        Trident: "Trident",
        WebKit: "WebKit"
    };
class M {
    static getFirstMatch(t, n) {
        const r = n.match(t);
        return r && r.length > 0 && r[1] || ""
    }
    static getSecondMatch(t, n) {
        const r = n.match(t);
        return r && r.length > 1 && r[2] || ""
    }
    static matchAndReturnConst(t, n, r) {
        if (t.test(n)) return r
    }
    static getWindowsVersionName(t) {
        switch (t) {
            case "NT":
                return "NT";
            case "XP":
                return "XP";
            case "NT 5.0":
                return "2000";
            case "NT 5.1":
                return "XP";
            case "NT 5.2":
                return "2003";
            case "NT 6.0":
                return "Vista";
            case "NT 6.1":
                return "7";
            case "NT 6.2":
                return "8";
            case "NT 6.3":
                return "8.1";
            case "NT 10.0":
                return "10";
            default:
                return
        }
    }
    static getMacOSVersionName(t) {
        const n = t.split(".").splice(0, 2).map(i => parseInt(i, 10) || 0);
        n.push(0);
        const r = n[0],
            s = n[1];
        if (r === 10) switch (s) {
            case 5:
                return "Leopard";
            case 6:
                return "Snow Leopard";
            case 7:
                return "Lion";
            case 8:
                return "Mountain Lion";
            case 9:
                return "Mavericks";
            case 10:
                return "Yosemite";
            case 11:
                return "El Capitan";
            case 12:
                return "Sierra";
            case 13:
                return "High Sierra";
            case 14:
                return "Mojave";
            case 15:
                return "Catalina";
            default:
                return
        }
        switch (r) {
            case 11:
                return "Big Sur";
            case 12:
                return "Monterey";
            case 13:
                return "Ventura";
            case 14:
                return "Sonoma";
            case 15:
                return "Sequoia";
            default:
                return
        }
    }
    static getAndroidVersionName(t) {
        const n = t.split(".").splice(0, 2).map(r => parseInt(r, 10) || 0);
        if (n.push(0), !(n[0] === 1 && n[1] < 5)) {
            if (n[0] === 1 && n[1] < 6) return "Cupcake";
            if (n[0] === 1 && n[1] >= 6) return "Donut";
            if (n[0] === 2 && n[1] < 2) return "Eclair";
            if (n[0] === 2 && n[1] === 2) return "Froyo";
            if (n[0] === 2 && n[1] > 2) return "Gingerbread";
            if (n[0] === 3) return "Honeycomb";
            if (n[0] === 4 && n[1] < 1) return "Ice Cream Sandwich";
            if (n[0] === 4 && n[1] < 4) return "Jelly Bean";
            if (n[0] === 4 && n[1] >= 4) return "KitKat";
            if (n[0] === 5) return "Lollipop";
            if (n[0] === 6) return "Marshmallow";
            if (n[0] === 7) return "Nougat";
            if (n[0] === 8) return "Oreo";
            if (n[0] === 9) return "Pie"
        }
    }
    static getVersionPrecision(t) {
        return t.split(".").length
    }
    static compareVersions(t, n, r = !1) {
        const s = M.getVersionPrecision(t),
            i = M.getVersionPrecision(n);
        let o = Math.max(s, i),
            a = 0;
        const l = M.map([t, n], c => {
            const u = o - M.getVersionPrecision(c),
                f = c + new Array(u + 1).join(".0");
            return M.map(f.split("."), d => new Array(20 - d.length).join("0") + d).reverse()
        });
        for (r && (a = o - Math.min(s, i)), o -= 1; o >= a;) {
            if (l[0][o] > l[1][o]) return 1;
            if (l[0][o] === l[1][o]) {
                if (o === a) return 0;
                o -= 1
            } else if (l[0][o] < l[1][o]) return -1
        }
    }
    static map(t, n) {
        const r = [];
        let s;
        if (Array.prototype.map) return Array.prototype.map.call(t, n);
        for (s = 0; s < t.length; s += 1) r.push(n(t[s]));
        return r
    }
    static find(t, n) {
        let r, s;
        if (Array.prototype.find) return Array.prototype.find.call(t, n);
        for (r = 0, s = t.length; r < s; r += 1) {
            const i = t[r];
            if (n(i, r)) return i
        }
    }
    static assign(t, ...n) {
        const r = t;
        let s, i;
        if (Object.assign) return Object.assign(t, ...n);
        for (s = 0, i = n.length; s < i; s += 1) {
            const o = n[s];
            typeof o == "object" && o !== null && Object.keys(o).forEach(l => {
                r[l] = o[l]
            })
        }
        return t
    }
    static getBrowserAlias(t) {
        return hR[t]
    }
    static getBrowserTypeByAlias(t) {
        return By[t] || ""
    }
}
const ae = /version\/(\d+(\.?_?\d+)+)/i,
    pR = [{
        test: [/gptbot/i],
        describe(e) {
            const t = {
                    name: "GPTBot"
                },
                n = M.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/chatgpt-user/i],
        describe(e) {
            const t = {
                    name: "ChatGPT-User"
                },
                n = M.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/oai-searchbot/i],
        describe(e) {
            const t = {
                    name: "OAI-SearchBot"
                },
                n = M.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i],
        describe(e) {
            const t = {
                    name: "ClaudeBot"
                },
                n = M.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/omgilibot/i, /webzio-extended/i],
        describe(e) {
            const t = {
                    name: "Omgilibot"
                },
                n = M.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/diffbot/i],
        describe(e) {
            const t = {
                    name: "Diffbot"
                },
                n = M.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/perplexitybot/i],
        describe(e) {
            const t = {
                    name: "PerplexityBot"
                },
                n = M.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/perplexity-user/i],
        describe(e) {
            const t = {
                    name: "Perplexity-User"
                },
                n = M.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/youbot/i],
        describe(e) {
            const t = {
                    name: "YouBot"
                },
                n = M.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/meta-webindexer/i],
        describe(e) {
            const t = {
                    name: "Meta-WebIndexer"
                },
                n = M.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/meta-externalads/i],
        describe(e) {
            const t = {
                    name: "Meta-ExternalAds"
                },
                n = M.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/meta-externalagent/i],
        describe(e) {
            const t = {
                    name: "Meta-ExternalAgent"
                },
                n = M.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/meta-externalfetcher/i],
        describe(e) {
            const t = {
                    name: "Meta-ExternalFetcher"
                },
                n = M.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/googlebot/i],
        describe(e) {
            const t = {
                    name: "Googlebot"
                },
                n = M.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/linespider/i],
        describe(e) {
            const t = {
                    name: "Linespider"
                },
                n = M.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/amazonbot/i],
        describe(e) {
            const t = {
                    name: "AmazonBot"
                },
                n = M.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/bingbot/i],
        describe(e) {
            const t = {
                    name: "BingCrawler"
                },
                n = M.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/baiduspider/i],
        describe(e) {
            const t = {
                    name: "BaiduSpider"
                },
                n = M.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/duckduckbot/i],
        describe(e) {
            const t = {
                    name: "DuckDuckBot"
                },
                n = M.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/ia_archiver/i],
        describe(e) {
            const t = {
                    name: "InternetArchiveCrawler"
                },
                n = M.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/facebookexternalhit/i, /facebookcatalog/i],
        describe() {
            return {
                name: "FacebookExternalHit"
            }
        }
    }, {
        test: [/slackbot/i, /slack-imgProxy/i],
        describe(e) {
            const t = {
                    name: "SlackBot"
                },
                n = M.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/yahoo!?[\s/]*slurp/i],
        describe() {
            return {
                name: "YahooSlurp"
            }
        }
    }, {
        test: [/yandexbot/i, /yandexmobilebot/i],
        describe() {
            return {
                name: "YandexBot"
            }
        }
    }, {
        test: [/pingdom/i],
        describe() {
            return {
                name: "PingdomBot"
            }
        }
    }, {
        test: [/opera/i],
        describe(e) {
            const t = {
                    name: "Opera"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/opr\/|opios/i],
        describe(e) {
            const t = {
                    name: "Opera"
                },
                n = M.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/SamsungBrowser/i],
        describe(e) {
            const t = {
                    name: "Samsung Internet for Android"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/Whale/i],
        describe(e) {
            const t = {
                    name: "NAVER Whale Browser"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/PaleMoon/i],
        describe(e) {
            const t = {
                    name: "Pale Moon"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/MZBrowser/i],
        describe(e) {
            const t = {
                    name: "MZ Browser"
                },
                n = M.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/focus/i],
        describe(e) {
            const t = {
                    name: "Focus"
                },
                n = M.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/swing/i],
        describe(e) {
            const t = {
                    name: "Swing"
                },
                n = M.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/coast/i],
        describe(e) {
            const t = {
                    name: "Opera Coast"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/opt\/\d+(?:.?_?\d+)+/i],
        describe(e) {
            const t = {
                    name: "Opera Touch"
                },
                n = M.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/yabrowser/i],
        describe(e) {
            const t = {
                    name: "Yandex Browser"
                },
                n = M.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/ucbrowser/i],
        describe(e) {
            const t = {
                    name: "UC Browser"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/Maxthon|mxios/i],
        describe(e) {
            const t = {
                    name: "Maxthon"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/epiphany/i],
        describe(e) {
            const t = {
                    name: "Epiphany"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/puffin/i],
        describe(e) {
            const t = {
                    name: "Puffin"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/sleipnir/i],
        describe(e) {
            const t = {
                    name: "Sleipnir"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/k-meleon/i],
        describe(e) {
            const t = {
                    name: "K-Meleon"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/micromessenger/i],
        describe(e) {
            const t = {
                    name: "WeChat"
                },
                n = M.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/qqbrowser/i],
        describe(e) {
            const t = {
                    name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                },
                n = M.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/msie|trident/i],
        describe(e) {
            const t = {
                    name: "Internet Explorer"
                },
                n = M.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/\sedg\//i],
        describe(e) {
            const t = {
                    name: "Microsoft Edge"
                },
                n = M.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/edg([ea]|ios)/i],
        describe(e) {
            const t = {
                    name: "Microsoft Edge"
                },
                n = M.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/vivaldi/i],
        describe(e) {
            const t = {
                    name: "Vivaldi"
                },
                n = M.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/seamonkey/i],
        describe(e) {
            const t = {
                    name: "SeaMonkey"
                },
                n = M.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/sailfish/i],
        describe(e) {
            const t = {
                    name: "Sailfish"
                },
                n = M.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/silk/i],
        describe(e) {
            const t = {
                    name: "Amazon Silk"
                },
                n = M.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/phantom/i],
        describe(e) {
            const t = {
                    name: "PhantomJS"
                },
                n = M.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/slimerjs/i],
        describe(e) {
            const t = {
                    name: "SlimerJS"
                },
                n = M.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(e) {
            const t = {
                    name: "BlackBerry"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/(web|hpw)[o0]s/i],
        describe(e) {
            const t = {
                    name: "WebOS Browser"
                },
                n = M.getFirstMatch(ae, e) || M.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/bada/i],
        describe(e) {
            const t = {
                    name: "Bada"
                },
                n = M.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/tizen/i],
        describe(e) {
            const t = {
                    name: "Tizen"
                },
                n = M.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/qupzilla/i],
        describe(e) {
            const t = {
                    name: "QupZilla"
                },
                n = M.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/librewolf/i],
        describe(e) {
            const t = {
                    name: "LibreWolf"
                },
                n = M.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/firefox|iceweasel|fxios/i],
        describe(e) {
            const t = {
                    name: "Firefox"
                },
                n = M.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/electron/i],
        describe(e) {
            const t = {
                    name: "Electron"
                },
                n = M.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i],
        describe(e) {
            const t = {
                    name: "Sogou Browser"
                },
                n = M.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, e),
                r = M.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e),
                s = M.getFirstMatch(/se ([\d.]+)x/i, e),
                i = n || r || s;
            return i && (t.version = i), t
        }
    }, {
        test: [/MiuiBrowser/i],
        describe(e) {
            const t = {
                    name: "Miui"
                },
                n = M.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test(e) {
            return e.hasBrand("DuckDuckGo") ? !0 : e.test(/\sDdg\/[\d.]+$/i)
        },
        describe(e, t) {
            const n = {
                name: "DuckDuckGo"
            };
            if (t) {
                const s = t.getBrandVersion("DuckDuckGo");
                if (s) return n.version = s, n
            }
            const r = M.getFirstMatch(/\sDdg\/([\d.]+)$/i, e);
            return r && (n.version = r), n
        }
    }, {
        test(e) {
            return e.hasBrand("Brave")
        },
        describe(e, t) {
            const n = {
                name: "Brave"
            };
            if (t) {
                const r = t.getBrandVersion("Brave");
                if (r) return n.version = r, n
            }
            return n
        }
    }, {
        test: [/chromium/i],
        describe(e) {
            const t = {
                    name: "Chromium"
                },
                n = M.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/chrome|crios|crmo/i],
        describe(e) {
            const t = {
                    name: "Chrome"
                },
                n = M.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/GSA/i],
        describe(e) {
            const t = {
                    name: "Google Search"
                },
                n = M.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test(e) {
            const t = !e.test(/like android/i),
                n = e.test(/android/i);
            return t && n
        },
        describe(e) {
            const t = {
                    name: "Android Browser"
                },
                n = M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/playstation 4/i],
        describe(e) {
            const t = {
                    name: "PlayStation 4"
                },
                n = M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/safari|applewebkit/i],
        describe(e) {
            const t = {
                    name: "Safari"
                },
                n = M.getFirstMatch(ae, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/.*/i],
        describe(e) {
            const t = /^(.*)\/(.*) /,
                n = /^(.*)\/(.*)[ \t]\((.*)/,
                s = e.search("\\(") !== -1 ? n : t;
            return {
                name: M.getFirstMatch(s, e),
                version: M.getSecondMatch(s, e)
            }
        }
    }],
    gR = [{
        test: [/Roku\/DVP/],
        describe(e) {
            const t = M.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
            return {
                name: yt.Roku,
                version: t
            }
        }
    }, {
        test: [/windows phone/i],
        describe(e) {
            const t = M.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
            return {
                name: yt.WindowsPhone,
                version: t
            }
        }
    }, {
        test: [/windows /i],
        describe(e) {
            const t = M.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                n = M.getWindowsVersionName(t);
            return {
                name: yt.Windows,
                version: t,
                versionName: n
            }
        }
    }, {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe(e) {
            const t = {
                    name: yt.iOS
                },
                n = M.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/macintosh/i],
        describe(e) {
            const t = M.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                n = M.getMacOSVersionName(t),
                r = {
                    name: yt.MacOS,
                    version: t
                };
            return n && (r.versionName = n), r
        }
    }, {
        test: [/(ipod|iphone|ipad)/i],
        describe(e) {
            const t = M.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
            return {
                name: yt.iOS,
                version: t
            }
        }
    }, {
        test: [/OpenHarmony/i],
        describe(e) {
            const t = M.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, e);
            return {
                name: yt.HarmonyOS,
                version: t
            }
        }
    }, {
        test(e) {
            const t = !e.test(/like android/i),
                n = e.test(/android/i);
            return t && n
        },
        describe(e) {
            const t = M.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                n = M.getAndroidVersionName(t),
                r = {
                    name: yt.Android,
                    version: t
                };
            return n && (r.versionName = n), r
        }
    }, {
        test: [/(web|hpw)[o0]s/i],
        describe(e) {
            const t = M.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                n = {
                    name: yt.WebOS
                };
            return t && t.length && (n.version = t), n
        }
    }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(e) {
            const t = M.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || M.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || M.getFirstMatch(/\bbb(\d+)/i, e);
            return {
                name: yt.BlackBerry,
                version: t
            }
        }
    }, {
        test: [/bada/i],
        describe(e) {
            const t = M.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
            return {
                name: yt.Bada,
                version: t
            }
        }
    }, {
        test: [/tizen/i],
        describe(e) {
            const t = M.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
            return {
                name: yt.Tizen,
                version: t
            }
        }
    }, {
        test: [/linux/i],
        describe() {
            return {
                name: yt.Linux
            }
        }
    }, {
        test: [/CrOS/],
        describe() {
            return {
                name: yt.ChromeOS
            }
        }
    }, {
        test: [/PlayStation 4/],
        describe(e) {
            const t = M.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
            return {
                name: yt.PlayStation4,
                version: t
            }
        }
    }],
    mR = [{
        test: [/googlebot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Google"
            }
        }
    }, {
        test: [/linespider/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Line"
            }
        }
    }, {
        test: [/amazonbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Amazon"
            }
        }
    }, {
        test: [/gptbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "OpenAI"
            }
        }
    }, {
        test: [/chatgpt-user/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "OpenAI"
            }
        }
    }, {
        test: [/oai-searchbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "OpenAI"
            }
        }
    }, {
        test: [/baiduspider/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Baidu"
            }
        }
    }, {
        test: [/bingbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Bing"
            }
        }
    }, {
        test: [/duckduckbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "DuckDuckGo"
            }
        }
    }, {
        test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Anthropic"
            }
        }
    }, {
        test: [/omgilibot/i, /webzio-extended/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Webz.io"
            }
        }
    }, {
        test: [/diffbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Diffbot"
            }
        }
    }, {
        test: [/perplexitybot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Perplexity AI"
            }
        }
    }, {
        test: [/perplexity-user/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Perplexity AI"
            }
        }
    }, {
        test: [/youbot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "You.com"
            }
        }
    }, {
        test: [/ia_archiver/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Internet Archive"
            }
        }
    }, {
        test: [/meta-webindexer/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Meta"
            }
        }
    }, {
        test: [/meta-externalads/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Meta"
            }
        }
    }, {
        test: [/meta-externalagent/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Meta"
            }
        }
    }, {
        test: [/meta-externalfetcher/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Meta"
            }
        }
    }, {
        test: [/facebookexternalhit/i, /facebookcatalog/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Meta"
            }
        }
    }, {
        test: [/slackbot/i, /slack-imgProxy/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Slack"
            }
        }
    }, {
        test: [/yahoo/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Yahoo"
            }
        }
    }, {
        test: [/yandexbot/i, /yandexmobilebot/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Yandex"
            }
        }
    }, {
        test: [/pingdom/i],
        describe() {
            return {
                type: ie.bot,
                vendor: "Pingdom"
            }
        }
    }, {
        test: [/huawei/i],
        describe(e) {
            const t = M.getFirstMatch(/(can-l01)/i, e) && "Nova",
                n = {
                    type: ie.mobile,
                    vendor: "Huawei"
                };
            return t && (n.model = t), n
        }
    }, {
        test: [/nexus\s*(?:7|8|9|10).*/i],
        describe() {
            return {
                type: ie.tablet,
                vendor: "Nexus"
            }
        }
    }, {
        test: [/ipad/i],
        describe() {
            return {
                type: ie.tablet,
                vendor: "Apple",
                model: "iPad"
            }
        }
    }, {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe() {
            return {
                type: ie.tablet,
                vendor: "Apple",
                model: "iPad"
            }
        }
    }, {
        test: [/kftt build/i],
        describe() {
            return {
                type: ie.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
            }
        }
    }, {
        test: [/silk/i],
        describe() {
            return {
                type: ie.tablet,
                vendor: "Amazon"
            }
        }
    }, {
        test: [/tablet(?! pc)/i],
        describe() {
            return {
                type: ie.tablet
            }
        }
    }, {
        test(e) {
            const t = e.test(/ipod|iphone/i),
                n = e.test(/like (ipod|iphone)/i);
            return t && !n
        },
        describe(e) {
            const t = M.getFirstMatch(/(ipod|iphone)/i, e);
            return {
                type: ie.mobile,
                vendor: "Apple",
                model: t
            }
        }
    }, {
        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
        describe() {
            return {
                type: ie.mobile,
                vendor: "Nexus"
            }
        }
    }, {
        test: [/Nokia/i],
        describe(e) {
            const t = M.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, e),
                n = {
                    type: ie.mobile,
                    vendor: "Nokia"
                };
            return t && (n.model = t), n
        }
    }, {
        test: [/[^-]mobi/i],
        describe() {
            return {
                type: ie.mobile
            }
        }
    }, {
        test(e) {
            return e.getBrowserName(!0) === "blackberry"
        },
        describe() {
            return {
                type: ie.mobile,
                vendor: "BlackBerry"
            }
        }
    }, {
        test(e) {
            return e.getBrowserName(!0) === "bada"
        },
        describe() {
            return {
                type: ie.mobile
            }
        }
    }, {
        test(e) {
            return e.getBrowserName() === "windows phone"
        },
        describe() {
            return {
                type: ie.mobile,
                vendor: "Microsoft"
            }
        }
    }, {
        test(e) {
            const t = Number(String(e.getOSVersion()).split(".")[0]);
            return e.getOSName(!0) === "android" && t >= 3
        },
        describe() {
            return {
                type: ie.tablet
            }
        }
    }, {
        test(e) {
            return e.getOSName(!0) === "android"
        },
        describe() {
            return {
                type: ie.mobile
            }
        }
    }, {
        test: [/smart-?tv|smarttv/i],
        describe() {
            return {
                type: ie.tv
            }
        }
    }, {
        test: [/netcast/i],
        describe() {
            return {
                type: ie.tv
            }
        }
    }, {
        test(e) {
            return e.getOSName(!0) === "macos"
        },
        describe() {
            return {
                type: ie.desktop,
                vendor: "Apple"
            }
        }
    }, {
        test(e) {
            return e.getOSName(!0) === "windows"
        },
        describe() {
            return {
                type: ie.desktop
            }
        }
    }, {
        test(e) {
            return e.getOSName(!0) === "linux"
        },
        describe() {
            return {
                type: ie.desktop
            }
        }
    }, {
        test(e) {
            return e.getOSName(!0) === "playstation 4"
        },
        describe() {
            return {
                type: ie.tv
            }
        }
    }, {
        test(e) {
            return e.getOSName(!0) === "roku"
        },
        describe() {
            return {
                type: ie.tv
            }
        }
    }],
    _R = [{
        test(e) {
            return e.getBrowserName(!0) === "microsoft edge"
        },
        describe(e) {
            if (/\sedg\//i.test(e)) return {
                name: fr.Blink
            };
            const n = M.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
            return {
                name: fr.EdgeHTML,
                version: n
            }
        }
    }, {
        test: [/trident/i],
        describe(e) {
            const t = {
                    name: fr.Trident
                },
                n = M.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test(e) {
            return e.test(/presto/i)
        },
        describe(e) {
            const t = {
                    name: fr.Presto
                },
                n = M.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test(e) {
            const t = e.test(/gecko/i),
                n = e.test(/like gecko/i);
            return t && !n
        },
        describe(e) {
            const t = {
                    name: fr.Gecko
                },
                n = M.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }, {
        test: [/(apple)?webkit\/537\.36/i],
        describe() {
            return {
                name: fr.Blink
            }
        }
    }, {
        test: [/(apple)?webkit/i],
        describe(e) {
            const t = {
                    name: fr.WebKit
                },
                n = M.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
            return n && (t.version = n), t
        }
    }];
class Jh {
    constructor(t, n = !1, r = null) {
        if (t == null || t === "") throw new Error("UserAgent parameter can't be empty");
        this._ua = t;
        let s = !1;
        typeof n == "boolean" ? (s = n, this._hints = r) : n != null && typeof n == "object" ? this._hints = n : this._hints = null, this.parsedResult = {}, s !== !0 && this.parse()
    }
    getHints() {
        return this._hints
    }
    hasBrand(t) {
        if (!this._hints || !Array.isArray(this._hints.brands)) return !1;
        const n = t.toLowerCase();
        return this._hints.brands.some(r => r.brand && r.brand.toLowerCase() === n)
    }
    getBrandVersion(t) {
        if (!this._hints || !Array.isArray(this._hints.brands)) return;
        const n = t.toLowerCase(),
            r = this._hints.brands.find(s => s.brand && s.brand.toLowerCase() === n);
        return r ? r.version : void 0
    }
    getUA() {
        return this._ua
    }
    test(t) {
        return t.test(this._ua)
    }
    parseBrowser() {
        this.parsedResult.browser = {};
        const t = M.find(pR, n => {
            if (typeof n.test == "function") return n.test(this);
            if (Array.isArray(n.test)) return n.test.some(r => this.test(r));
            throw new Error("Browser's test function is not valid")
        });
        return t && (this.parsedResult.browser = t.describe(this.getUA(), this)), this.parsedResult.browser
    }
    getBrowser() {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
    }
    getBrowserName(t) {
        return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
    }
    getBrowserVersion() {
        return this.getBrowser().version
    }
    getOS() {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
    }
    parseOS() {
        this.parsedResult.os = {};
        const t = M.find(gR, n => {
            if (typeof n.test == "function") return n.test(this);
            if (Array.isArray(n.test)) return n.test.some(r => this.test(r));
            throw new Error("Browser's test function is not valid")
        });
        return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
    }
    getOSName(t) {
        const {
            name: n
        } = this.getOS();
        return t ? String(n).toLowerCase() || "" : n || ""
    }
    getOSVersion() {
        return this.getOS().version
    }
    getPlatform() {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
    }
    getPlatformType(t = !1) {
        const {
            type: n
        } = this.getPlatform();
        return t ? String(n).toLowerCase() || "" : n || ""
    }
    parsePlatform() {
        this.parsedResult.platform = {};
        const t = M.find(mR, n => {
            if (typeof n.test == "function") return n.test(this);
            if (Array.isArray(n.test)) return n.test.some(r => this.test(r));
            throw new Error("Browser's test function is not valid")
        });
        return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
    }
    getEngine() {
        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
    }
    getEngineName(t) {
        return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
    }
    parseEngine() {
        this.parsedResult.engine = {};
        const t = M.find(_R, n => {
            if (typeof n.test == "function") return n.test(this);
            if (Array.isArray(n.test)) return n.test.some(r => this.test(r));
            throw new Error("Browser's test function is not valid")
        });
        return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
    }
    parse() {
        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
    }
    getResult() {
        return M.assign({}, this.parsedResult)
    }
    satisfies(t) {
        const n = {};
        let r = 0;
        const s = {};
        let i = 0;
        if (Object.keys(t).forEach(a => {
                const l = t[a];
                typeof l == "string" ? (s[a] = l, i += 1) : typeof l == "object" && (n[a] = l, r += 1)
            }), r > 0) {
            const a = Object.keys(n),
                l = M.find(a, u => this.isOS(u));
            if (l) {
                const u = this.satisfies(n[l]);
                if (u !== void 0) return u
            }
            const c = M.find(a, u => this.isPlatform(u));
            if (c) {
                const u = this.satisfies(n[c]);
                if (u !== void 0) return u
            }
        }
        if (i > 0) {
            const a = Object.keys(s),
                l = M.find(a, c => this.isBrowser(c, !0));
            if (l !== void 0) return this.compareVersion(s[l])
        }
    }
    isBrowser(t, n = !1) {
        const r = this.getBrowserName().toLowerCase();
        let s = t.toLowerCase();
        const i = M.getBrowserTypeByAlias(s);
        return n && i && (s = i.toLowerCase()), s === r
    }
    compareVersion(t) {
        let n = [0],
            r = t,
            s = !1;
        const i = this.getBrowserVersion();
        if (typeof i == "string") return t[0] === ">" || t[0] === "<" ? (r = t.substr(1), t[1] === "=" ? (s = !0, r = t.substr(2)) : n = [], t[0] === ">" ? n.push(1) : n.push(-1)) : t[0] === "=" ? r = t.substr(1) : t[0] === "~" && (s = !0, r = t.substr(1)), n.indexOf(M.compareVersions(i, r, s)) > -1
    }
    isOS(t) {
        return this.getOSName(!0) === String(t).toLowerCase()
    }
    isPlatform(t) {
        return this.getPlatformType(!0) === String(t).toLowerCase()
    }
    isEngine(t) {
        return this.getEngineName(!0) === String(t).toLowerCase()
    }
    is(t, n = !1) {
        return this.isBrowser(t, n) || this.isOS(t) || this.isPlatform(t)
    }
    some(t = []) {
        return t.some(n => this.is(n))
    }
}
class yR {
    static getParser(t, n = !1, r = null) {
        if (typeof t != "string") throw new Error("UserAgent should be a string");
        return new Jh(t, n, r)
    }
    static parse(t, n = null) {
        return new Jh(t, n).getResult()
    }
    static get BROWSER_MAP() {
        return By
    }
    static get ENGINE_MAP() {
        return fr
    }
    static get OS_MAP() {
        return yt
    }
    static get PLATFORMS_MAP() {
        return ie
    }
}
class bR {
    constructor() {
        this.callbacks = [], this.onceCallbacks = [], this.boundTick = this.tick.bind(this)
    }
    start() {
        Hs.ticker.add(this.boundTick)
    }
    add(t, n) {
        let r = !1;
        this.callbacks.forEach(s => {
            s.cb === t && s.context === n && (r = !0)
        }), r || this.callbacks.push({
            cb: t,
            context: n
        })
    }
    remove(t, n) {
        for (let r = this.callbacks.length - 1; r >= 0; r--) {
            const s = this.callbacks[r];
            s.cb === t && s.context === n && this.callbacks.splice(r, 1)
        }
    }
    nextTick(t, n) {
        this.onceCallbacks.push({
            cb: t,
            context: n
        })
    }
    tick(t) {
        const n = this.callbacks.slice();
        for (const r of n) r.cb.apply(r.context, [t]);
        if (this.onceCallbacks.length) {
            const r = this.onceCallbacks;
            this.onceCallbacks = [];
            for (const s of r) s.cb.apply(s.context, [t])
        }
    }
    destroy() {
        Hs.ticker.remove(this.boundTick), this.callbacks = [], this.onceCallbacks = []
    }
}
const Nl = new bR;

function vR() {
    return {
        isTouch: ne(() => navigator.maxTouchPoints > 1 || window.innerWidth <= 1024)
    }
}

function wR() {
    return Ia(At().public["nuxt-schema-org"], {
        scriptAttributes: {}
    })
}

function ER(e) {
    const t = wR(),
        n = ue(),
        s = {
            type: "application/ld+json",
            key: "schema-org-graph",
            nodes: Fe(e) ? ne(() => n.runWithContext(() => e.value)) : e,
            tagPriority: "high",
            ...t.scriptAttributes
        };
    if (t ? .reactive) return Tr({
        script: [s]
    })
}

function ui(e, t) {
    e || (e = {});
    const n = Fe(e) ? e.value : e;
    return n._resolver = t, e
}

function JR(e) {
    return ui(e, "breadcrumb")
}

function QR(e) {
    return ui(e, "localBusiness")
}

function SR(e) {
    return ui(e, "organization")
}

function ZR(e) {
    return ui(e, "person")
}

function TR(e) {
    return ui(e, "webPage")
}

function CR(e) {
    return ui(e, "webSite")
}
const kR = {
        key: 0,
        href: "#main-content",
        class: "skip-link"
    },
    PR = {
        id: "main-content",
        tabindex: "-1"
    },
    xR = {
        __name: "app",
        setup(e) {
            const t = Rr("hideChrome", () => !1),
                {
                    $globalStrings: n
                } = ue(),
                r = {},
                s = {};
            let i = null;
            const o = H_(),
                a = U_(),
                {
                    isTouch: l
                } = vR(),
                {
                    locale: c,
                    locales: u
                } = Nr(),
                f = Fx(),
                d = {
                    en: "en_US",
                    fr: "fr_FR"
                };
            Tr(() => ({
                htmlAttrs: {
                    lang: f.value.htmlAttrs ? .lang,
                    dir: f.value.htmlAttrs ? .dir,
                    class: [o.value ? "has-scrollbar" : void 0, a.value ? "is-scrollbar-dragging" : void 0, l.value ? "is-touch" : "is-mouse"].filter(Boolean).join(" ") || void 0
                },
                link: [{
                    rel: "preload",
                    href: "/fonts/frama/PPFrama-Regular-RD.woff2",
                    as: "font",
                    type: "font/woff2",
                    crossorigin: ""
                }, {
                    rel: "preload",
                    href: "/fonts/neue-montreal/PPNeueMontreal-Regular-RD.woff2",
                    as: "font",
                    type: "font/woff2",
                    crossorigin: ""
                }, {
                    rel: "preload",
                    href: "/fonts/supply-mono/PPSupplyMono-Medium.woff2",
                    as: "font",
                    type: "font/woff2",
                    crossorigin: ""
                }, ...f.value.link || []],
                meta: [...f.value.meta || []]
            })), Tr({
                meta: [{
                    property: "og:locale",
                    content: () => d[c.value] || "en_US"
                }, {
                    property: "og:locale:alternate",
                    content: () => u.value.map(m => d[m.code]).filter(m => m && m !== (d[c.value] || "en_US"))
                }, {
                    property: "og:image",
                    content: "https://incredibles.dev/incredibles-social-bd.jpg?v=2"
                }, {
                    name: "twitter:image",
                    content: "https://incredibles.dev/incredibles-social-bd.jpg?v=2"
                }]
            }), ER([SR({
                "@id": "https://incredibles.dev/#organization",
                name: "incredibles",
                url: "https://incredibles.dev",
                logo: "https://incredibles.dev/favicon/web-app-manifest-512x512.png"
            }), CR({
                name: "incredibles",
                inLanguage: () => c.value,
                publisher: {
                    "@id": "https://incredibles.dev/#organization"
                }
            }), TR()]), Lr(() => {
                h(), y(), Nl.start(), Hs.ticker.fps(60), Hs.ticker.lagSmoothing(0);
                const m = async () => {
                    const {
                        default: _
                    } = await le(async () => {
                            const {
                                default: b
                            } = await
                            import ("./DQy71oTq.js");
                            return {
                                default: b
                            }
                        }, [],
                        import.meta.url);
                    i = new _, window.lenis = i, Hs.ticker.add(b => {
                        i.raf(b * 1e3)
                    })
                };
                typeof Vi == "function" ? Vi(m) : setTimeout(m, 1), window.addEventListener("resize", g), window.addEventListener("mousemove", p, {
                    passive: !0
                }), window.addEventListener("scroll", v, {
                    passive: !0
                })
            }), ms(() => {
                i && i.destroy(), Nl.destroy(), window.removeEventListener("resize", g), window.removeEventListener("mousemove", p), window.removeEventListener("scroll", v)
            }), r.resizeThrottle = null;

            function h() {
                const m = window.innerWidth;
                let _ = !1;
                s.width !== m && (s.width !== void 0 && (_ = !0), s.width = m);
                const b = window.innerHeight;
                let w = !1;
                s.height !== b && (s.height !== void 0 && (w = !0), s.height = b), window.safeWidth = m, window.safeHeight = b, Jn.emit("resize", _, w)
            }

            function g() {
                Jn.emit("rawResize"), clearTimeout(r.resizeThrottle), r.resizeThrottle = setTimeout(() => {
                    Nl.nextTick(h, this)
                }, 200)
            }

            function p(m) {
                Jn.emit("mousemove", m)
            }

            function v(m) {
                Jn.emit("scroll", m)
            }

            function y() {
                const m = yR.getParser(window.navigator.userAgent);
                document.documentElement.classList.add("is-" + m.getPlatformType()), document.documentElement.classList.add("is-" + m.getBrowserName().toLowerCase()), document.documentElement.classList.add("is-" + m.getOSName(!0)), (m.is("mobile") || m.is("tablet")) && document.documentElement.classList.add("is-handheld"), m.is("Safari") && (document.documentElement.classList.add("is-safari"), document.documentElement.classList.add("is-safari-" + m.getBrowserVersion()))
            }
            return (m, _) => {
                const b = xA,
                    w = LA,
                    k = IA,
                    S = GA;
                return De(), Wt(Qe, null, [G(t) ? pr("", !0) : (De(), Wt("a", kR, Qr(G(n) ? .skipToContent), 1)), G(t) ? pr("", !0) : (De(), zt(b, {
                    key: 1
                })), Le("main", PR, [Pe(w)]), G(t) ? pr("", !0) : (De(), zt(k, {
                    key: 2
                })), G(t) ? pr("", !0) : (De(), zt(S, {
                    key: 3
                }))], 64)
            }
        }
    },
    AR = {
        __name: "nuxt-error-page",
        props: {
            error: Object
        },
        setup(e) {
            const n = e.error,
                r = Number(n.statusCode || 500),
                s = r === 404,
                i = n.statusMessage ? ? (s ? "Page Not Found" : "Internal Server Error"),
                o = n.message || n.toString(),
                a = void 0,
                u = s ? Me(() => le(() =>
                    import ("./DsqyPmm_.js"), __vite__mapDeps([22, 23]),
                    import.meta.url)) : Me(() => le(() =>
                    import ("./DpnzUdTM.js"), __vite__mapDeps([24, 25]),
                    import.meta.url));
            return (f, d) => (De(), zt(G(u), Yy(_g({
                status: G(r),
                statusText: G(i),
                statusCode: G(r),
                statusMessage: G(i),
                description: G(o),
                stack: G(a)
            })), null, 16))
        }
    },
    LR = {
        key: 0
    },
    Qh = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = ue(),
                r = n.deferHydration();
            if (n.isHydrating) {
                const u = n.hooks.hookOnce("app:error", r),
                    f = Pt().beforeEach(() => {
                        u(), f()
                    })
            }
            const s = !1;
            es(Na, oi()), n.hooks.callHookWith(u => u.map(f => f()), "vue:setup", []);
            const i = ai(),
                o = !1,
                a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;

            function l(u, f, d) {
                const h = n.vueApp.config.errorHandler;
                if (h && !h.__nuxt_default) try {
                    h(u, f, d)
                } catch (g) {
                    console.error("[nuxt] Error in `app.config.errorHandler`", g)
                }
            }
            Hp((u, f, d) => {
                if (n.hooks.callHook("vue:error", u, f, d) ? .catch(h => console.error("[nuxt] Error in `vue:error` hook", h)), a.test(navigator.userAgent)) return n.hooks.callHook("app:error", u), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, u), !1;
                if (Xg(u) && (u.fatal || u.unhandled)) return n.runWithContext(() => zr(u)), l(u, f, d), !1
            });
            const c = !1;
            return (u, f) => (De(), zt(fg, {
                onResolve: G(r)
            }, {
                default: Gn(() => [G(o) ? (De(), Wt("div", LR)) : G(i) ? (De(), zt(G(AR), {
                    key: 1,
                    error: G(i)
                }, null, 8, ["error"])) : G(c) ? (De(), zt(G(t), {
                    key: 2,
                    context: G(c)
                }, null, 8, ["context"])) : G(s) ? (De(), zt(Wp(G(s)), {
                    key: 3
                })) : (De(), zt(G(xR), {
                    key: 4
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
let Zh; {
    let e;
    Zh = async function() {
        if (e) return e;
        const n = !!(window.__NUXT__ ? .serverRendered ? ? document.getElementById("__NUXT_DATA__") ? .dataset.ssr === "true"),
            r = n ? T0(Qh) : S0(Qh),
            s = Nw({
                vueApp: r
            });
        async function i(o) {
            await s.callHook("app:error", o), s.payload.error || = vr(o)
        }
        i.__nuxt_default = !0, r.config.errorHandler = i, s.hook("app:suspense:resolve", () => {
            r.config.errorHandler === i && (r.config.errorHandler = void 0)
        }), !n && fd.id && s.hook("app:suspense:resolve", () => {
            document.getElementById(fd.id) ? .remove()
        });
        try {
            await $w(s, uA)
        } catch (o) {
            i(o)
        }
        try {
            await s.hooks.callHook("app:created", r), await s.hooks.callHook("app:beforeMount", r), r.mount(Ow), await s.hooks.callHook("app:mounted", r), await fs()
        } catch (o) {
            i(o)
        }
        return r
    }, e = Zh().catch(t => {
        throw console.error("Error while mounting app:", t), t
    })
}
export {
    gw as $, KR as A, YR as B, ua as C, lt as D, DA as E, Tr as F, De as G, Wt as H, Le as I, Qr as J, Pe as K, Gn as L, zs as M, ta as N, vr as O, Hb as P, Lr as Q, Jn as R, ms as S, Nl as T, Hs as U, Rr as V, jR as W, Nr as X, oi as Y, sv as Z, le as _, qx as a, ER as a0, G as a1, zt as a2, pr as a3, bA as a4, TR as a5, JR as a6, yn as a7, rt as a8, _n as a9, Yy as aA, _g as aB, MR as aC, Vi as aD, wS as aE, HR as aF, ZR as aG, QR as aH, si as aI, Sr as aJ, DR as aK, Rg as aL, rv as aM, gs as aN, jg as aO, OR as aP, Je as aQ, Bl as aR, Ap as aS, RR as aT, IR as aU, gt as aa, Ft as ab, _e as ac, Af as ad, Me as ae, br as af, nt as ag, ni as ah, ev as ai, fs as aj, Wp as ak, Qe as al, Rf as am, cs as an, pt as ao, vR as ap, Yr as aq, mA as ar, VR as as, es as at, NR as au, b0 as av, yg as aw, Kv as ax, ue as ay, Fe as az, rr as b, zR as c, l1 as d, FR as e, GR as f, qR as g, Ss as h, Jx as i, sr as j, UR as k, Ia as l, xt as m, cu as n, Ar as o, CS as p, us as q, ne as r, pn as s, Gx as t, At as u, L0 as v, Yo as w, Gw as x, Da as y, XR as z
};