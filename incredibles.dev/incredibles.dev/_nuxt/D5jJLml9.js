const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./C52vxEqk.js", "./DNBXjO6S.js", "./entry.2V6dYgIy.css", "./BFluid.bxahTSu7.css", "./Co-GT-QY.js", "./BShowreel.PWn06waS.css", "./CKJT1Nh5.js", "./BForm.DDvHgsEW.css"]))) => i.map(i => d[i]);
import {
    _ as Zr,
    u as Gr,
    a as Lo
} from "./C52vxEqk.js";
import {
    U as G,
    R as se,
    E as Tn,
    P as K,
    Q as bt,
    S as ut,
    aj as ct,
    G as q,
    H as V,
    I as O,
    a2 as mt,
    ak as Yr,
    a1 as F,
    K as ke,
    J as $,
    r as Ue,
    al as At,
    am as St,
    a3 as ve,
    ah as cn,
    D as Xe,
    an as Jr,
    ao as qs,
    T as Qi,
    ap as Qr,
    ae as Ai,
    _ as Si,
    aq as lt,
    Z as Ki,
    a4 as $i,
    C as es,
    L as sn,
    M as vn,
    ar as ki,
    X as Kr,
    as as Oo,
    at as us,
    aa as It,
    au as Js,
    av as xn,
    ai as Bo,
    a9 as Do,
    V as $r,
    aw as nn,
    ax as Qs,
    ay as eo,
    az as No,
    aA as ri,
    aB as Ho,
    aC as qo,
    aD as zo,
    aE as jo,
    aF as Fo,
    Y as Vo,
    F as Ks,
    a0 as Xo,
    aG as $s,
    a5 as Uo,
    aH as Wo
} from "./DNBXjO6S.js";
var Zo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    Go = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    Yo = Math.PI / 180,
    Pi = Math.sin,
    Ri = Math.cos,
    di = Math.abs,
    Jn = Math.sqrt,
    Jo = function(e) {
        return typeof e == "number"
    },
    er = 1e5,
    en = function(e) {
        return Math.round(e * er) / er || 0
    },
    tr = function(e) {
        return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001
    };

function Qo(s, e, i, t, n, r, l) {
    for (var o = s.length, a, d, f, c, p; --o > -1;)
        for (a = s[o], d = a.length, f = 0; f < d; f += 2) c = a[f], p = a[f + 1], a[f] = c * e + p * t + r, a[f + 1] = c * i + p * n + l;
    return s._dirty = 1, s
}

function Ko(s, e, i, t, n, r, l, o, a) {
    if (!(s === o && e === a)) {
        i = di(i), t = di(t);
        var d = n % 360 * Yo,
            f = Ri(d),
            c = Pi(d),
            p = Math.PI,
            u = p * 2,
            g = (s - o) / 2,
            x = (e - a) / 2,
            w = f * g + c * x,
            m = -c * g + f * x,
            S = w * w,
            R = m * m,
            P = S / (i * i) + R / (t * t);
        P > 1 && (i = Jn(P) * i, t = Jn(P) * t);
        var _ = i * i,
            v = t * t,
            C = (_ * v - _ * R - v * S) / (_ * R + v * S);
        C < 0 && (C = 0);
        var M = (r === l ? -1 : 1) * Jn(C),
            B = M * (i * m / t),
            b = M * -(t * w / i),
            L = (s + o) / 2,
            k = (e + a) / 2,
            H = L + (f * B - c * b),
            T = k + (c * B + f * b),
            U = (w - B) / i,
            J = (m - b) / t,
            D = (-w - B) / i,
            E = (-m - b) / t,
            N = U * U + J * J,
            h = (J < 0 ? -1 : 1) * Math.acos(U / Jn(N)),
            y = (U * E - J * D < 0 ? -1 : 1) * Math.acos((U * D + J * E) / Jn(N * (D * D + E * E)));
        isNaN(y) && (y = p), !l && y > 0 ? y -= u : l && y < 0 && (y += u), h %= u, y %= u;
        var I = Math.ceil(di(y) / (u / 4)),
            z = [],
            W = y / I,
            Z = 4 / 3 * Pi(W / 2) / (1 + Ri(W / 2)),
            ee = f * i,
            ue = c * i,
            Ie = c * -t,
            _e = f * t,
            be;
        for (be = 0; be < I; be++) n = h + be * W, w = Ri(n), m = Pi(n), U = Ri(n += W), J = Pi(n), z.push(w - Z * m, m + Z * w, U + Z * J, J - Z * U, U, J);
        for (be = 0; be < z.length; be += 2) w = z[be], m = z[be + 1], z[be] = w * ee + m * Ie + H, z[be + 1] = w * ue + m * _e + T;
        return z[be - 2] = o, z[be - 1] = a, z
    }
}

function $o(s) {
    var e = (s + "").replace(Go, function(B) {
            var b = +B;
            return b < 1e-4 && b > -1e-4 ? 0 : b
        }).match(Zo) || [],
        i = [],
        t = 0,
        n = 0,
        r = 2 / 3,
        l = e.length,
        o = 0,
        a = "ERROR: malformed path: " + s,
        d, f, c, p, u, g, x, w, m, S, R, P, _, v, C, M = function(b, L, k, H) {
            S = (k - b) / 3, R = (H - L) / 3, x.push(b + S, L + R, k - S, H - R, k, H)
        };
    if (!s || !isNaN(e[0]) || isNaN(e[1])) return console.log(a), i;
    for (d = 0; d < l; d++)
        if (_ = u, isNaN(e[d]) ? (u = e[d].toUpperCase(), g = u !== e[d]) : d--, c = +e[d + 1], p = +e[d + 2], g && (c += t, p += n), d || (w = c, m = p), u === "M") x && (x.length < 8 ? i.length -= 1 : o += x.length, tr(x)), t = w = c, n = m = p, x = [c, p], i.push(x), d += 2, u = "L";
        else if (u === "C") x || (x = [0, 0]), g || (t = n = 0), x.push(c, p, t + e[d + 3] * 1, n + e[d + 4] * 1, t += e[d + 5] * 1, n += e[d + 6] * 1), d += 6;
    else if (u === "S") S = t, R = n, (_ === "C" || _ === "S") && (S += t - x[x.length - 4], R += n - x[x.length - 3]), g || (t = n = 0), x.push(S, R, c, p, t += e[d + 3] * 1, n += e[d + 4] * 1), d += 4;
    else if (u === "Q") S = t + (c - t) * r, R = n + (p - n) * r, g || (t = n = 0), t += e[d + 3] * 1, n += e[d + 4] * 1, x.push(S, R, t + (c - t) * r, n + (p - n) * r, t, n), d += 4;
    else if (u === "T") S = t - x[x.length - 4], R = n - x[x.length - 3], x.push(t + S, n + R, c + (t + S * 1.5 - c) * r, p + (n + R * 1.5 - p) * r, t = c, n = p), d += 2;
    else if (u === "H") M(t, n, t = c, n), d += 1;
    else if (u === "V") M(t, n, t, n = c + (g ? n - t : 0)), d += 1;
    else if (u === "L" || u === "Z") u === "Z" && (c = w, p = m, x.closed = !0), (u === "L" || di(t - c) > .5 || di(n - p) > .5) && (M(t, n, c, p), u === "L" && (d += 2)), t = c, n = p;
    else if (u === "A") {
        if (v = e[d + 4], C = e[d + 5], S = e[d + 6], R = e[d + 7], f = 7, v.length > 1 && (v.length < 3 ? (R = S, S = C, f--) : (R = C, S = v.substr(2), f -= 2), C = v.charAt(1), v = v.charAt(0)), P = Ko(t, n, +e[d + 1], +e[d + 2], +e[d + 3], +v, +C, (g ? t : 0) + S * 1, (g ? n : 0) + R * 1), d += f, P)
            for (f = 0; f < P.length; f++) x.push(P[f]);
        t = x[x.length - 2], n = x[x.length - 1]
    } else console.log(a);
    return d = x.length, d < 6 ? (i.pop(), d = 0) : tr(x), i.totalPoints = o + d, i
}

function el(s) {
    Jo(s[0]) && (s = [s]);
    var e = "",
        i = s.length,
        t, n, r, l;
    for (n = 0; n < i; n++) {
        for (l = s[n], e += "M" + en(l[0]) + "," + en(l[1]) + " C", t = l.length, r = 2; r < t; r++) e += en(l[r++]) + "," + en(l[r++]) + " " + en(l[r++]) + "," + en(l[r++]) + " " + en(l[r++]) + "," + en(l[r]) + " ";
        l.closed && (e += "z")
    }
    return e
}
var at, to, no = function() {
        return at || typeof window < "u" && (at = window.gsap) && at.registerPlugin && at
    },
    nr = function() {
        at = no(), at ? (at.registerEase("_CE", _n.create), to = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    },
    tl = 1e20,
    Ii = function(e) {
        return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
    },
    nl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
    il = /[cLlsSaAhHvVtTqQ]/g,
    sl = function(e) {
        var i = e.length,
            t = tl,
            n;
        for (n = 1; n < i; n += 6) + e[n] < t && (t = +e[n]);
        return t
    },
    rl = function(e, i, t) {
        !t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
        var n = +e[0] * -1,
            r = -t,
            l = e.length,
            o = 1 / (+e[l - 2] + n),
            a = -i || (Math.abs(+e[l - 1] - +e[1]) < .01 * (+e[l - 2] - +e[0]) ? sl(e) + r : +e[l - 1] + r),
            d;
        for (a ? a = 1 / a : a = -o, d = 0; d < l; d += 2) e[d] = (+e[d] + n) * o, e[d + 1] = (+e[d + 1] + r) * a
    },
    ol = function s(e, i, t, n, r, l, o, a, d, f, c) {
        var p = (e + t) / 2,
            u = (i + n) / 2,
            g = (t + r) / 2,
            x = (n + l) / 2,
            w = (r + o) / 2,
            m = (l + a) / 2,
            S = (p + g) / 2,
            R = (u + x) / 2,
            P = (g + w) / 2,
            _ = (x + m) / 2,
            v = (S + P) / 2,
            C = (R + _) / 2,
            M = o - e,
            B = a - i,
            b = Math.abs((t - o) * B - (n - a) * M),
            L = Math.abs((r - o) * B - (l - a) * M),
            k;
        return f || (f = [{
            x: e,
            y: i
        }, {
            x: o,
            y: a
        }], c = 1), f.splice(c || f.length - 1, 0, {
            x: v,
            y: C
        }), (b + L) * (b + L) > d * (M * M + B * B) && (k = f.length, s(e, i, p, u, S, R, v, C, d, f, c), s(v, C, P, _, w, m, o, a, d, f, c + 1 + (f.length - k))), f
    },
    _n = (function() {
        function s(i, t, n) {
            to || nr(), this.id = i, this.setData(t, n)
        }
        var e = s.prototype;
        return e.setData = function(t, n) {
            n = n || {}, t = t || "0,0,1,1";
            var r = t.match(nl),
                l = 1,
                o = [],
                a = [],
                d = n.precision || 1,
                f = d <= 1,
                c, p, u, g, x, w, m, S, R;
            if (this.data = t, (il.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (r = $o(t)[0]), c = r.length, c === 4) r.unshift(0, 0), r.push(1, 1), c = 8;
            else if ((c - 2) % 6) throw "Invalid CustomEase";
            for ((+r[0] != 0 || +r[c - 2] != 1) && rl(r, n.height, n.originY), this.segment = r, g = 2; g < c; g += 6) p = {
                x: +r[g - 2],
                y: +r[g - 1]
            }, u = {
                x: +r[g + 4],
                y: +r[g + 5]
            }, o.push(p, u), ol(p.x, p.y, +r[g], +r[g + 1], +r[g + 2], +r[g + 3], u.x, u.y, 1 / (d * 2e5), o, o.length - 1);
            for (c = o.length, g = 0; g < c; g++) m = o[g], S = o[g - 1] || m, (m.x > S.x || S.y !== m.y && S.x === m.x || m === S) && m.x <= 1 ? (S.cx = m.x - S.x, S.cy = m.y - S.y, S.n = m, S.nx = m.x, f && g > 1 && Math.abs(S.cy / S.cx - o[g - 2].cy / o[g - 2].cx) > 2 && (f = 0), S.cx < l && (S.cx ? l = S.cx : (S.cx = .001, g === c - 1 && (S.x -= .001, l = Math.min(l, .001), f = 0)))) : (o.splice(g--, 1), c--);
            if (c = 1 / l + 1 | 0, x = 1 / c, w = 0, m = o[0], f) {
                for (g = 0; g < c; g++) R = g * x, m.nx < R && (m = o[++w]), p = m.y + (R - m.x) / m.cx * m.cy, a[g] = {
                    x: R,
                    cx: x,
                    y: p,
                    cy: 0,
                    nx: 9
                }, g && (a[g - 1].cy = p - a[g - 1].y);
                w = o[o.length - 1], a[c - 1].cy = w.y - p, a[c - 1].cx = w.x - a[a.length - 1].x
            } else {
                for (g = 0; g < c; g++) m.nx < g * x && (m = o[++w]), a[g] = m;
                w < o.length - 1 && (a[g - 1] = o[o.length - 2])
            }
            return this.ease = function(P) {
                var _ = a[P * c | 0] || a[c - 1];
                return _.nx < P && (_ = _.n), _.y + (P - _.x) / _.cx * _.cy
            }, this.ease.custom = this, this.id && at && at.registerEase(this.id, this.ease), this
        }, e.getSVGData = function(t) {
            return s.getSVGData(this, t)
        }, s.create = function(t, n, r) {
            return new s(t, n, r).ease
        }, s.register = function(t) {
            at = t, nr()
        }, s.get = function(t) {
            return at.parseEase(t)
        }, s.getSVGData = function(t, n) {
            n = n || {};
            var r = n.width || 100,
                l = n.height || 100,
                o = n.x || 0,
                a = (n.y || 0) + l,
                d = at.utils.toArray(n.path)[0],
                f, c, p, u, g, x, w, m, S, R;
            if (n.invert && (l = -l, a = 0), typeof t == "string" && (t = at.parseEase(t)), t.custom && (t = t.custom), t instanceof s) f = el(Qo([t.segment.slice(0)], r, 0, 0, -l, o, a));
            else {
                for (f = [o, a], w = Math.max(5, (n.precision || 1) * 200), u = 1 / w, w += 2, m = 5 / w, S = Ii(o + u * r), R = Ii(a + t(u) * -l), c = (R - a) / (S - o), p = 2; p < w; p++) g = Ii(o + p * u * r), x = Ii(a + t(p * u) * -l), (Math.abs((x - R) / (g - S) - c) > m || p === w - 1) && (f.push(S, R), c = (x - R) / (g - S)), S = g, R = x;
                f = "M" + f.join(",")
            }
            return d && d.setAttribute("d", f), f
        }, s
    })();
_n.version = "3.15.0";
_n.headless = !0;
no() && at.registerPlugin(_n);
G.registerPlugin(_n);
const Un = {
        backExpoInOut: _n.create("backExpoInOut", "M0,0 C0.214,-0.173 0.269,-0.083 0.3,0 0.359,0.165 0.345,0.211 0.372,0.427 0.4,0.655 0.436,0.823 0.54,0.892 0.629,0.951 0.698,1 1,1 "),
        expoInOutBack: _n.create("expoInOutBack", "M0,0 C0.137,0 0.152,0.352 0.184,0.562 0.217,0.79 0.201,1.019 0.383,1.062 0.671,1.13 0.746,1 1,1 ")
    },
    _s = "usp-asset-cycle";
let Vn = null;
const Nn = new Map;
let ll = 0,
    ds = !1,
    ts = !0;

function zs() {
    if (Vn ? .kill(), !Nn.size || ts) return;
    const s = Math.max(...Nn.values());
    Vn = G.delayedCall(s, () => {
        se.emit(_s), zs()
    })
}

function al() {
    ds || (ds = !0, Promise.resolve().then(() => {
        ds = !1, zs()
    }))
}

function ls() {
    const s = ++ll;

    function e(n, r) {
        Nn.set(s, n), se.on(_s, r), al()
    }

    function i(n) {
        Nn.set(s, n)
    }

    function t(n) {
        Nn.delete(s), se.off(_s, n), Nn.size || (Vn ? .kill(), Vn = null)
    }
    return {
        register: e,
        updateDuration: i,
        unregister: t
    }
}

function ir() {
    ts = !0, Vn ? .kill(), Vn = null
}

function sr() {
    ts && (ts = !1, zs())
}
const cl = {
        ref: "el",
        class: "b-usp-asset-continuity",
        "aria-hidden": "true"
    },
    ul = {
        ref: "svg",
        class: "b__svg",
        xmlns: "http://www.w3.org/2000/svg"
    },
    dl = {
        ref: "squares",
        class: "b__svg__squares"
    },
    Qn = 100,
    Dt = 25,
    rr = 5,
    fl = 344,
    pl = 100,
    hl = 86,
    gl = 2,
    Kn = 5,
    or = 1.5,
    lr = .05,
    ml = "http://www.w3.org/2000/svg",
    vl = {
        __name: "BUspAssetContinuity",
        setup(s) {
            const e = Array.from({
                    length: Kn
                }, (w, m) => `hsl(${fl}, ${pl}%, ${hl+(Kn-1-m)*gl}%)`),
                {
                    register: i,
                    updateDuration: t,
                    unregister: n
                } = ls(),
                r = {
                    el: K("el"),
                    svg: K("svg"),
                    squares: K("squares")
                };
            let l = 0,
                o = 0,
                a = 0;
            const d = {
                el: [],
                proxy: [],
                x: [],
                y: [],
                offsetX: [],
                offsetY: []
            };

            function f(w) {
                return Number(w).toFixed(2)
            }
            bt(() => {
                p(), u(), x(), i(a, g), se.on("resize", c)
            }), ut(() => {
                G.killTweensOf(d.proxy), n(g), se.off("resize", c)
            });
            async function c() {
                G.killTweensOf(d.proxy), p(), await ct(), u(), x()
            }

            function p() {
                const w = r.el.value;
                if (!w) return;
                const m = w.getBoundingClientRect();
                l = m.width, o = m.height
            }

            function u() {
                const w = r.svg.value,
                    m = r.squares.value;
                if (!w || !m || !l || !o) return;
                m.innerHTML = "", d.el.length = 0, d.proxy.length = 0, d.x.length = 0, d.y.length = 0, d.offsetX.length = 0, d.offsetY.length = 0, w.setAttribute("viewBox", `0 0 ${f(l)} ${f(o)}`);
                const S = Math.max(Math.ceil((l - Qn) / Dt) + 1, Math.ceil((o - Qn) / Dt) + 1),
                    R = (S - 1) * Dt + Qn,
                    P = (l - R) / 2,
                    _ = (o - R) / 2;
                m.setAttribute("transform", `translate(${f(P)}, ${f(_)})`);
                for (let v = -rr; v <= S; v++) {
                    const C = document.createElementNS(ml, "rect");
                    C.setAttribute("x", f(v * Dt)), C.setAttribute("y", f(v * Dt)), C.setAttribute("width", f(Qn)), C.setAttribute("height", f(Qn));
                    const M = e[(v % Kn + Kn) % Kn];
                    C.setAttribute("fill", M), m.appendChild(C), d.el.push(C), d.proxy.push({
                        ox: 0,
                        oy: 0
                    }), d.x.push(v * Dt), d.y.push(v * Dt), d.offsetX.push(0), d.offsetY.push(0)
                }
                a = or + (d.el.length - 1) * lr, t(a)
            }

            function g() {
                G.killTweensOf(d.proxy), x()
            }

            function x() {
                const w = d.el.length;
                if (!w) return;
                const m = or,
                    S = lr,
                    R = Dt * rr;
                d.el.forEach((P, _) => {
                    const v = d.proxy[_];
                    v.ox = d.offsetX[_], v.oy = d.offsetY[_];
                    const C = v.ox + Dt,
                        M = v.oy + Dt;
                    G.to(v, {
                        ox: C,
                        oy: M,
                        duration: m,
                        delay: (w - _) * S,
                        ease: Un.backExpoInOut,
                        onUpdate() {
                            d.x[_] != null && (d.offsetX[_] = v.ox, d.offsetY[_] = v.oy, P.setAttribute("x", f(d.x[_] + v.ox)), P.setAttribute("y", f(d.y[_] + v.oy)))
                        },
                        onComplete() {
                            d.offsetX[_] != null && (d.offsetX[_] = C % R, d.offsetY[_] = M % R)
                        }
                    })
                })
            }
            return (w, m) => (q(), V("div", cl, [(q(), V("svg", ul, [O("g", dl, null, 512)], 512))], 512))
        }
    },
    yl = Tn(vl, [
        ["__scopeId", "data-v-0d4f3093"]
    ]),
    bl = {
        ref: "el",
        class: "b-usp-asset-capacity",
        "aria-hidden": "true"
    },
    Cl = {
        ref: "svg",
        class: "b__svg",
        xmlns: "http://www.w3.org/2000/svg"
    },
    wl = {
        ref: "rects",
        class: "b__svg__rects"
    },
    xl = 100,
    ar = 100,
    _l = 30,
    Al = 15,
    Sl = 30,
    kl = 4,
    Tl = 344,
    El = 100,
    Ml = 86,
    Pl = 2,
    Ut = 5,
    cr = 1.5,
    ur = .025,
    Rl = "http://www.w3.org/2000/svg",
    Il = {
        __name: "BUspAssetCapacity",
        setup(s) {
            const e = Array.from({
                    length: Ut
                }, (v, C) => `hsl(${Tl}, ${El}%, ${Ml+(Ut-1-C)*Pl}%)`),
                {
                    register: i,
                    updateDuration: t,
                    unregister: n
                } = ls(),
                r = {
                    el: K("el"),
                    svg: K("svg"),
                    rects: K("rects")
                };
            let l = 0,
                o = 0,
                a = 0,
                d = 0,
                f = 0;
            const c = {
                el: [],
                level: []
            };

            function p(v) {
                return ar - Al * Math.sqrt(v)
            }

            function u(v) {
                let C = o - ar / 2;
                for (let M = 1; M <= v; M++) C += Sl - p(M);
                return C
            }

            function g(v) {
                return xl + v * _l
            }

            function x(v) {
                return (l - g(v)) / 2
            }

            function w(v) {
                return Number(v).toFixed(2)
            }
            bt(() => {
                S(), R(), _(), i(f, P), se.on("resize", m)
            }), ut(() => {
                G.killTweensOf(c.el), n(P), se.off("resize", m)
            });
            async function m() {
                G.killTweensOf(c.el), S(), await ct(), R(), _()
            }

            function S() {
                const v = r.el.value;
                if (!v) return;
                const C = v.getBoundingClientRect();
                l = C.width, o = C.height
            }

            function R() {
                const v = r.svg.value,
                    C = r.rects.value;
                if (!v || !C || !l || !o) return;
                C.innerHTML = "", c.el.length = 0, c.level.length = 0, v.setAttribute("viewBox", `0 0 ${w(l)} ${w(o)}`), a = 0;
                let M = 0;
                for (; M < kl && (a++, u(a) < 0 && M++, !(a > 200)););
                d = ((a - 1) % Ut + Ut) % Ut;
                const B = new Array(a + 1);
                for (let b = a; b >= 0; b--) {
                    const L = ((b - 1) % Ut + Ut) % Ut,
                        k = document.createElementNS(Rl, "rect");
                    k.setAttribute("x", w(x(b))), k.setAttribute("y", w(u(b))), k.setAttribute("width", w(g(b))), k.setAttribute("height", w(p(b))), k.setAttribute("fill", e[L]), C.appendChild(k), B[b] = k
                }
                for (let b = 0; b <= a; b++) c.el.push(B[b]), c.level.push(b);
                f = cr + a * ur, t(f)
            }

            function P() {
                G.killTweensOf(c.el);
                const v = r.rects.value;
                if (!v) return;
                const C = c.level.findIndex(M => M === 0);
                for (let M = 0; M < c.level.length; M++) c.level[M]--;
                if (C !== -1) {
                    d = (d + 1) % Ut, c.level[C] = a;
                    const M = c.el[C];
                    M.setAttribute("x", w(x(a))), M.setAttribute("y", w(u(a))), M.setAttribute("width", w(g(a))), M.setAttribute("height", w(p(a))), M.setAttribute("fill", e[d]), v.insertBefore(M, v.firstChild)
                }
                _()
            }

            function _() {
                if (!c.el.length) return;
                const v = cr,
                    C = ur,
                    M = Un.backExpoInOut;
                c.el.forEach((B, b) => {
                    const L = c.level[b],
                        k = L * C,
                        H = {
                            y: u(L),
                            h: p(L),
                            w: g(L)
                        };
                    if (L === 0) {
                        G.to(H, {
                            y: o + p(0),
                            duration: v,
                            delay: k,
                            ease: M,
                            onUpdate() {
                                B.setAttribute("y", w(H.y))
                            }
                        });
                        return
                    }
                    G.to(H, {
                        y: u(L - 1),
                        h: p(L - 1),
                        duration: v,
                        delay: k,
                        ease: M,
                        onUpdate() {
                            B.setAttribute("y", w(H.y)), B.setAttribute("height", w(H.h))
                        }
                    }), G.to(H, {
                        w: g(L - 1),
                        duration: v * .7,
                        delay: Math.max(0, k - .25),
                        ease: M,
                        onUpdate() {
                            B.setAttribute("x", w((l - H.w) / 2)), B.setAttribute("width", w(H.w))
                        }
                    })
                })
            }
            return (v, C) => (q(), V("div", bl, [(q(), V("svg", Cl, [O("g", wl, null, 512)], 512))], 512))
        }
    },
    Ll = Tn(Il, [
        ["__scopeId", "data-v-255a697f"]
    ]),
    Ol = {
        ref: "el",
        class: "b-usp-asset-collaboration",
        "aria-hidden": "true"
    },
    Bl = {
        ref: "svg",
        class: "b__svg",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Dl = {
        ref: "circles",
        class: "b__svg__circles"
    },
    fs = 80,
    Nl = 344,
    Hl = 100,
    ql = 86,
    zl = 2,
    $n = 5,
    dr = 1.5,
    fr = .05,
    jl = "http://www.w3.org/2000/svg",
    Fl = {
        __name: "BUspAssetCollaboration",
        setup(s) {
            const e = fs,
                i = $n,
                t = Array.from({
                    length: $n
                }, (R, P) => `hsl(${Nl}, ${Hl}%, ${ql+($n-1-P)*zl}%)`),
                {
                    register: n,
                    updateDuration: r,
                    unregister: l
                } = ls(),
                o = {
                    el: K("el"),
                    svg: K("svg"),
                    circles: K("circles")
                };
            let a = 0,
                d = 0,
                f = 0,
                c = 0;
            const p = {
                el: [],
                cx: [],
                initialCx: []
            };

            function u(R) {
                return Number(R).toFixed(2)
            }
            bt(() => {
                x(), w(), S(), n(c, m), se.on("resize", g)
            }), ut(() => {
                G.killTweensOf(p.el), l(m), se.off("resize", g)
            });
            async function g() {
                G.killTweensOf(p.el), x(), await ct(), w(), S()
            }

            function x() {
                const R = o.el.value;
                if (!R) return;
                const P = R.getBoundingClientRect();
                a = P.width, d = P.height
            }

            function w() {
                const R = o.svg.value,
                    P = o.circles.value;
                if (!R || !P || !a || !d) return;
                P.innerHTML = "", p.el.length = 0, p.cx.length = 0, p.initialCx.length = 0, f = 0, R.setAttribute("viewBox", `0 0 ${u(a)} ${u(d)}`);
                const _ = d / 2,
                    C = Math.ceil((a + fs) / e) + 1 + i,
                    B = a - (C - 1) * e;
                for (let b = 0; b < C; b++) {
                    const L = B + b * e,
                        k = b % $n,
                        H = document.createElementNS(jl, "circle");
                    H.setAttribute("cx", u(L)), H.setAttribute("cy", u(_)), H.setAttribute("r", u(fs)), H.setAttribute("fill", t[k]), P.appendChild(H), p.el.push(H), p.cx.push(L), p.initialCx.push(L)
                }
                c = dr + (p.el.length - 1) * fr, r(c)
            }

            function m() {
                G.killTweensOf(p.el), f++, f >= $n && (f = 0, p.el.forEach((R, P) => {
                    p.cx[P] = p.initialCx[P], R.setAttribute("cx", u(p.initialCx[P]))
                })), S()
            }

            function S() {
                const R = p.el.length;
                if (!R) return;
                const P = dr,
                    _ = fr,
                    v = Un.backExpoInOut;
                p.el.forEach((C, M) => {
                    const B = {
                        cx: p.cx[M]
                    };
                    G.to(B, {
                        cx: B.cx + e,
                        duration: P,
                        delay: (R - M) * _,
                        ease: v,
                        onUpdate() {
                            C.setAttribute("cx", u(B.cx))
                        },
                        onComplete() {
                            p.cx[M] = B.cx
                        }
                    })
                })
            }
            return (R, P) => (q(), V("div", Ol, [(q(), V("svg", Bl, [O("g", Dl, null, 512)], 512))], 512))
        }
    },
    Vl = Tn(Fl, [
        ["__scopeId", "data-v-5d34e45e"]
    ]),
    Xl = {
        ref: "el",
        class: "b-usp-asset-experience",
        "aria-hidden": "true"
    },
    Ul = {
        ref: "svg",
        class: "b__svg",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Wl = {
        ref: "rects",
        class: "b__svg__rects"
    },
    Zl = 80,
    Gl = 40,
    Yl = 2,
    Jl = 344,
    Ql = 100,
    Kl = 86,
    $l = 2,
    ei = 5,
    pr = 1.5,
    hr = .05,
    gr = "http://www.w3.org/2000/svg",
    ea = {
        __name: "BUspAssetExperience",
        setup(s) {
            const e = Array.from({
                    length: ei
                }, (_, v) => `hsl(${Jl}, ${Ql}%, ${Kl+(ei-1-v)*$l}%)`),
                {
                    register: i,
                    updateDuration: t,
                    unregister: n
                } = ls(),
                r = {
                    el: K("el"),
                    svg: K("svg"),
                    rects: K("rects")
                };
            let l = 0,
                o = 0,
                a = 0,
                d = 0,
                f = 0,
                c = 0,
                p = 0;
            const u = {
                el: [],
                level: []
            };

            function g(_) {
                return _ < 0 ? 0 : Zl + _ * Gl
            }

            function x(_) {
                return Number(_).toFixed(2)
            }
            bt(() => {
                m(), S(), P(), i(p, R), se.on("resize", w)
            }), ut(() => {
                G.killTweensOf(u.el), n(R), se.off("resize", w)
            });
            async function w() {
                G.killTweensOf(u.el), m(), await ct(), S(), P()
            }

            function m() {
                const _ = r.el.value;
                if (!_) return;
                const v = _.getBoundingClientRect();
                l = v.width, o = v.height, a = l / 2, d = o / 2
            }

            function S() {
                const _ = r.svg.value,
                    v = r.rects.value;
                if (!_ || !v || !l || !o) return;
                v.innerHTML = "", u.el.length = 0, u.level.length = 0, _.setAttribute("viewBox", `0 0 ${x(l)} ${x(o)}`);
                const C = Math.max(l, o);
                v.setAttribute("transform", `rotate(45, ${x(a)}, ${x(d)})`), f = 0;
                let M = 0;
                for (; M < Yl && (f++, g(f) * Math.SQRT2 >= C && M++, !(f > 200)););
                c = (f + 1) % ei;
                const B = new Array(f + 1);
                for (let L = f; L >= 0; L--) {
                    const k = g(L),
                        H = L % ei,
                        T = document.createElementNS(gr, "rect");
                    T.setAttribute("x", x(a - k / 2)), T.setAttribute("y", x(d - k / 2)), T.setAttribute("width", x(k)), T.setAttribute("height", x(k)), T.setAttribute("fill", e[H]), v.appendChild(T), B[L] = T
                }
                const b = document.createElementNS(gr, "rect");
                b.setAttribute("x", x(a)), b.setAttribute("y", x(d)), b.setAttribute("width", x(0)), b.setAttribute("height", x(0)), b.setAttribute("fill", e[c]), v.appendChild(b);
                for (let L = 0; L <= f; L++) u.el.push(B[L]), u.level.push(L);
                u.el.push(b), u.level.push(-1), p = pr + (f - 1) * hr, t(p)
            }

            function R() {
                G.killTweensOf(u.el);
                const _ = r.rects.value;
                if (!_) return;
                const v = u.level.findIndex(C => C === f);
                for (let C = 0; C < u.level.length; C++) C !== v && u.level[C]++;
                if (v !== -1) {
                    c = (c + 1) % ei, u.level[v] = -1;
                    const C = u.el[v];
                    C.setAttribute("x", x(a)), C.setAttribute("y", x(d)), C.setAttribute("width", x(0)), C.setAttribute("height", x(0)), C.setAttribute("fill", e[c]), _.appendChild(C)
                }
                P()
            }

            function P() {
                if (!u.el.length) return;
                const _ = pr,
                    v = hr,
                    C = Un.backExpoInOut;
                u.el.forEach((M, B) => {
                    const b = u.level[B];
                    if (b === f) return;
                    const L = g(b),
                        k = g(b + 1),
                        H = b < 0 ? 0 : b * v,
                        T = {
                            w: L,
                            h: L
                        };
                    G.to(T, {
                        h: k,
                        duration: _,
                        delay: H,
                        ease: C,
                        onUpdate() {
                            const U = Math.max(0, T.h);
                            M.setAttribute("y", x(d - U / 2)), M.setAttribute("height", x(U))
                        }
                    }), G.to(T, {
                        w: k,
                        duration: _ * .7,
                        delay: H,
                        ease: C,
                        onUpdate() {
                            const U = Math.max(0, T.w);
                            M.setAttribute("x", x(a - U / 2)), M.setAttribute("width", x(U))
                        }
                    })
                })
            }
            return (_, v) => (q(), V("div", Xl, [(q(), V("svg", Ul, [O("g", Wl, null, 512)], 512))], 512))
        }
    },
    ta = Tn(ea, [
        ["__scopeId", "data-v-3f9fc84a"]
    ]),
    na = {
        class: "b-usp-card"
    },
    ia = {
        class: "b__inner"
    },
    sa = {
        class: "b__asset"
    },
    ra = {
        class: "b__content"
    },
    oa = {
        class: "b__title t-h-md"
    },
    la = {
        class: "b__text t-t-sm"
    },
    aa = {
        __name: "BUspCard",
        props: {
            uspKey: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const e = {
                    continuity: yl,
                    capacity: Ll,
                    collaboration: Vl,
                    experience: ta
                },
                i = s,
                t = Ue(() => e[i.uspKey] ? ? null);
            return (n, r) => {
                const l = Zr;
                return q(), V("div", na, [O("div", ia, [O("div", sa, [(q(), mt(Yr(F(t)))), ke(l, {
                    fluid: !1,
                    light: !0,
                    static: !0
                })]), O("div", ra, [O("h3", oa, $(s.title), 1), O("p", la, $(s.text), 1)])]), r[0] || (r[0] = O("div", {
                    class: "b__overlay"
                }, null, -1))])
            }
        }
    },
    ca = Tn(aa, [
        ["__scopeId", "data-v-7fc93da2"]
    ]),
    ua = "data:image/svg+xml,%3csvg%20width='92'%20height='14'%20viewBox='0%200%2092%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.08994%200C3.20499%200%200%202.89945%200%206.97446C0%2011.0492%203.20499%2013.9489%207.08994%2013.9489C9.75111%2013.9489%2012.1015%2012.5473%2013.3058%2010.3863L10.8972%209.04071C10.1979%2010.443%208.77988%2011.2958%207.08994%2011.2958C4.66185%2011.2958%202.81668%209.53311%202.81668%206.97446C2.81668%204.41582%204.66185%202.65317%207.08994%202.65317C8.77988%202.65317%2010.1979%203.50619%2010.8972%204.90871L13.3058%203.5631C12.1015%201.40265%209.75111%200%207.08994%200ZM16.7045%200.341036V13.6074H19.4242V7.92195H26.2226V13.6079H28.9418V0.341036H26.2226V5.26878H19.4242V0.341036H16.7045ZM37.6828%200.341036L31.6609%2013.6079H34.6331L35.9732%2010.5756H43.0821L44.4227%2013.6079H47.3944L41.3735%200.341036H37.6828ZM50.1141%200.341036V13.6079H52.6387V3.16497L59.9232%2013.6079H62.3513V0.341036H59.8262V9.13536L53.7078%200.341036H50.1141ZM67.5951%200.341036V13.6079L77.6962%2013.6084V11.1445H70.1203V8.11226H76.3361V5.64789H70.1203V2.80492H77.3072V0.341048L67.5951%200.341036ZM82.0665%200.341036V13.6079V13.6084H91.9731V10.9552H84.7862V0.341048L82.0665%200.341036ZM39.5279%202.52046L41.9951%208.11175H37.0608L39.5279%202.52046Z'%20fill='%232B2B2B'/%3e%3c/svg%3e",
    da = "data:image/svg+xml,%3csvg%20width='84'%20height='19'%20viewBox='0%200%2084%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2018.81H18.7525V2.63964e-08H0V18.81ZM15.1431%207.59513H11.1806V3.62047H15.1431V7.59513ZM3.60867%203.62047H7.57338V11.2149H15.1431V15.1895H3.60867V3.62047ZM30.964%202.63964e-08C29.1095%202.63964e-08%2027.2966%200.551599%2025.7548%201.58503C24.2128%202.61847%2023.0111%204.08734%2022.3014%205.80587C21.5917%207.52444%2021.4061%209.41541%2021.7678%2011.2398C22.1297%2013.0642%2023.0226%2014.74%2024.3339%2016.0553C25.6452%2017.3707%2027.3159%2018.2664%2029.1347%2018.6293C30.9536%2018.9922%2032.8388%2018.806%2034.5521%2018.0941C36.2654%2017.3823%2037.7297%2016.1768%2038.76%2014.6301C39.7903%2013.0835%2040.3402%2011.2651%2040.3402%209.405C40.3373%206.91152%2039.3485%204.52103%2037.5907%202.75788C35.833%200.99473%2033.4498%200.00291136%2030.964%202.63964e-08ZM30.964%2015.1895C29.8234%2015.1895%2028.7084%2014.8503%2027.76%2014.2146C26.8117%2013.5791%2026.0725%2012.6757%2025.636%2011.6186C25.1996%2010.5617%2025.0854%209.39862%2025.3079%208.27647C25.5304%207.1544%2026.0797%206.1237%2026.8861%205.31472C27.6927%204.50575%2028.7202%203.95482%2029.8389%203.73162C30.9575%203.50842%2032.117%203.62297%2033.1708%204.06079C34.2246%204.49861%2035.1253%205.24003%2035.7589%206.19131C36.3926%207.14252%2036.7308%208.26093%2036.7308%209.405C36.7285%2010.9385%2036.1201%2012.4084%2035.0391%2013.4927C33.9581%2014.5771%2032.4927%2015.1872%2030.964%2015.1895ZM73.8927%202.63964e-08C72.0379%20-0.000139307%2070.2256%200.551327%2068.6836%201.58467C67.1415%202.61802%2065.9397%204.08684%2065.2299%205.80536C64.5201%207.52385%2064.3343%209.41497%2064.696%2011.2394C65.0577%2013.0638%2065.9507%2014.7397%2067.262%2016.0551C68.5732%2017.3705%2070.2439%2018.2663%2072.0628%2018.6292C73.881%2018.9922%2075.7665%2018.806%2077.4801%2018.0942C79.1931%2017.3823%2080.6575%2016.1769%2081.6876%2014.6302C82.7184%2013.0835%2083.2682%2011.2652%2083.2682%209.405C83.2653%206.91167%2082.2768%204.52126%2080.5193%202.75814C78.7617%200.995009%2076.3784%200.00310936%2073.8927%202.63964e-08ZM73.8927%2015.1895C72.7522%2015.1897%2071.6373%2014.8505%2070.6889%2014.215C69.7404%2013.5795%2069.0012%2012.6761%2068.5646%2011.6192C68.1279%2010.5622%2068.0137%209.39906%2068.2361%208.27691C68.4585%207.15484%2069.0077%206.12407%2069.8142%205.31498C70.6207%204.50592%2071.6482%203.95493%2072.7668%203.73167C73.8854%203.50841%2075.0449%203.62292%2076.0984%204.06072C77.1526%204.49852%2078.0533%205.23993%2078.6872%206.19124C79.3203%207.14252%2079.6588%208.26093%2079.6588%209.405C79.6566%2010.9383%2079.0483%2012.4081%2077.9671%2013.4925C76.8865%2014.5768%2075.4214%2015.187%2073.8927%2015.1895ZM52.4281%202.63964e-08C50.5736%202.63964e-08%2048.7608%200.551599%2047.2189%201.58503C45.677%202.61847%2044.4752%204.08734%2043.7655%205.80587C43.0559%207.52444%2042.8702%209.41541%2043.232%2011.2398C43.5938%2013.0642%2044.4868%2014.74%2045.798%2016.0553C47.1093%2017.3707%2048.78%2018.2664%2050.5988%2018.6293C52.4176%2018.9922%2054.3029%2018.806%2056.0162%2018.0941C57.7295%2017.3823%2059.1938%2016.1768%2060.2242%2014.6301C61.2544%2013.0835%2061.8044%2011.2651%2061.8044%209.405C61.8014%206.91152%2060.8126%204.52103%2059.0549%202.75788C57.2971%200.99473%2054.914%200.00291136%2052.4281%202.63964e-08ZM52.4281%2015.1895C51.3654%2015.19%2050.3233%2014.8961%2049.4167%2014.34C48.5101%2013.7839%2047.7743%2012.9874%2047.2905%2012.0383C46.8068%2011.0892%2046.5938%2010.0245%2046.6753%208.96177C46.7567%207.89895%2047.1293%206.8794%2047.752%206.01561C48.3746%205.15186%2049.2231%204.47745%2050.2038%204.06685C51.1844%203.65625%2052.2591%203.52544%2053.3092%203.68884C54.3593%203.85225%2055.344%204.30352%2056.1546%204.99285C56.9651%205.68217%2057.57%206.58277%2057.9025%207.59513H52.4281V11.2149H57.9025C57.5217%2012.3701%2056.788%2013.3758%2055.8053%2014.0892C54.8227%2014.8026%2053.6411%2015.1876%2052.4281%2015.1895Z'%20fill='%232B2B2B'/%3e%3c/svg%3e",
    fa = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_136_35202)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.5111%201.375V22H0V1.375H5.5111Z'%20fill='%232B2B2B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.26562%201.375H19.9767C23.7814%201.375%2026.8656%204.45304%2026.8656%208.25C26.8656%2012.047%2023.7814%2015.125%2019.9767%2015.125H13.7767V22H8.26562V1.375ZM13.7767%209.625H19.9767C20.7377%209.625%2021.3545%209.00939%2021.3545%208.25C21.3545%207.49062%2020.7377%206.875%2019.9767%206.875H13.7767V9.625Z'%20fill='%232B2B2B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.5326%201.375V12.0312C47.5326%2014.4993%2049.5373%2016.5%2052.0103%2016.5C54.4834%2016.5%2056.4881%2014.4993%2056.4881%2012.0312V1.375H61.9993V12.0312C61.9993%2017.5369%2057.527%2022%2052.0103%2022C46.4936%2022%2042.0215%2017.5369%2042.0215%2012.0312V1.375H47.5326Z'%20fill='%232B2B2B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.933%2011C28.933%205.68425%2033.2509%201.375%2038.5774%201.375H39.9552V6.875H38.5774C36.2946%206.875%2034.4441%208.72185%2034.4441%2011V11.6875C34.4441%2017.3829%2029.8177%2022%2024.1107%2022H23.4219V16.5H24.1107C26.774%2016.5%2028.933%2014.3454%2028.933%2011.6875V11Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M92.9985%202.0625C92.9985%203.20159%2092.0735%204.125%2090.9316%204.125C89.7903%204.125%2088.8652%203.20159%2088.8652%202.0625C88.8652%200.923412%2089.7903%200%2090.9316%200C92.0735%200%2092.9985%200.923412%2092.9985%202.0625Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M67.9178%2022L70.5477%2011.01L72.5029%2017.6216C73.6684%2021.565%2079.2654%2021.565%2080.4315%2017.6216L82.3862%2011.01L85.016%2022H90.6819L86.547%204.7187C85.5636%200.609076%2079.7607%200.456916%2078.5622%204.50938L76.4672%2011.5958L74.3717%204.50939C73.1737%200.45694%2067.3703%200.609054%2066.3869%204.7187L62.252%2022H67.9178Z'%20fill='%232B2B2B'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_136_35202'%3e%3crect%20width='93'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
    pa = "data:image/svg+xml,%3csvg%20width='97'%20height='22'%20viewBox='0%200%2097%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_136_35210)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.26705%2015.4C7.53618%2015.4%206.83525%2015.1103%206.3185%2014.5945C5.8017%2014.0788%205.51136%2013.3794%205.51136%2012.65V0H0V12.65C0%2017.2062%203.70143%2020.9%208.26705%2020.9H14.3295V15.4H8.26705ZM24.8011%205.5C24.1497%205.5%2023.5048%205.62804%2022.9029%205.8768C22.3011%206.12557%2021.7543%206.49016%2021.2937%206.9498C20.8331%207.40949%2020.4678%207.95515%2020.2185%208.55569C19.9692%209.15629%2019.8409%209.79996%2019.8409%2010.45C19.8409%2011.1%2019.9692%2011.7437%2020.2185%2012.3443C20.4678%2012.9449%2020.8331%2013.4905%2021.2937%2013.9502C21.7543%2014.4098%2022.3011%2014.7744%2022.9029%2015.0232C23.5048%2015.272%2024.1497%2015.4%2024.8011%2015.4C26.1166%2015.4%2027.3783%2014.8785%2028.3086%2013.9502C29.2388%2013.0219%2029.7614%2011.7628%2029.7614%2010.45C29.7614%209.13721%2029.2388%207.87814%2028.3086%206.9498C27.3783%206.02151%2026.1166%205.5%2024.8011%205.5ZM14.3295%2010.45C14.3295%204.67885%2019.0181%200%2024.8011%200C30.5842%200%2035.2727%204.67885%2035.2727%2010.45C35.2727%2016.2211%2030.5842%2020.9%2024.8011%2020.9C19.0181%2020.9%2014.3295%2016.2211%2014.3295%2010.45ZM84.3239%205.5C83.0083%205.5%2081.7467%206.02151%2080.8164%206.9498C79.8861%207.87814%2079.3636%209.13721%2079.3636%2010.45C79.3636%2011.7628%2079.8861%2013.0219%2080.8164%2013.9502C81.7467%2014.8785%2083.0083%2015.4%2084.3239%2015.4C85.6394%2015.4%2086.901%2014.8785%2087.8313%2013.9502C88.7616%2013.0219%2089.2841%2011.7628%2089.2841%2010.45C89.2841%209.13721%2088.7616%207.87814%2087.8313%206.9498C86.901%206.02151%2085.6394%205.5%2084.3239%205.5ZM73.8523%2010.45C73.8523%204.67885%2078.5408%200%2084.3239%200C90.1069%200%2094.7955%204.67885%2094.7955%2010.45C94.7955%2016.2211%2090.1069%2020.9%2084.3239%2020.9C78.5408%2020.9%2073.8523%2016.2211%2073.8523%2010.45ZM46.8466%200C41.0635%200%2036.375%204.67885%2036.375%2010.45C36.375%2016.2211%2041.0635%2020.9%2046.8466%2020.9H62.2784C63.3636%2020.9%2064.4102%2020.735%2065.3945%2020.4292L68.3409%2022L71.5199%2016.0578C72.3273%2014.5451%2072.75%2012.8575%2072.75%2011.1435V10.45C72.75%204.67885%2068.0615%200%2062.2784%200H46.8466ZM67.2386%2010.45C67.2386%209.13721%2066.7162%207.87814%2065.7858%206.9498C64.8555%206.02151%2063.594%205.5%2062.2784%205.5H46.8466C46.1952%205.5%2045.5502%205.62804%2044.9484%205.8768C44.3466%206.12557%2043.7998%206.49016%2043.3392%206.9498C42.8786%207.40949%2042.5132%207.95515%2042.2639%208.55569C42.0147%209.15629%2041.8864%209.79996%2041.8864%2010.45C41.8864%2011.1%2042.0147%2011.7437%2042.2639%2012.3443C42.5132%2012.9449%2042.8786%2013.4905%2043.3392%2013.9502C43.7998%2014.4098%2044.3466%2014.7744%2044.9484%2015.0232C45.5502%2015.272%2046.1952%2015.4%2046.8466%2015.4H62.2784C63.5874%2015.4001%2064.8434%2014.8838%2065.7721%2013.9638C66.7013%2013.0438%2067.2287%2011.7946%2067.2386%2010.4885V10.45Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M96.9998%201.375C96.9998%201.73967%2096.8549%202.08941%2096.5964%202.34727C96.3379%202.60514%2095.9874%202.75%2095.622%202.75C95.2566%202.75%2094.9061%202.60514%2094.6476%202.34727C94.3891%202.08941%2094.2441%201.73967%2094.2441%201.375C94.2441%201.01033%2094.3891%200.660589%2094.6476%200.402728C94.9061%200.144866%2095.2566%200%2095.622%200C95.9874%200%2096.3379%200.144866%2096.5964%200.402728C96.8549%200.660589%2096.9998%201.01033%2096.9998%201.375Z'%20fill='%232B2B2B'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_136_35210'%3e%3crect%20width='97'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
    ha = "" + new URL("dummy-4.CT26mgI1.svg",
        import.meta.url).href,
    ga = "" + new URL("nespresso.Cx2YthNB.svg",
        import.meta.url).href,
    ma = "data:image/svg+xml,%3csvg%20width='85'%20height='31'%20viewBox='0%200%2085%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.53778%2029.9544V19.3207H0V16.0985H15.4269V19.3207H9.98472V29.9544H5.53778Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M16.7837%2016.0982H21.3044V29.9542H16.7837V16.0982Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M74.5459%2029.9544V19.3207H69.0081V16.0985H84.435V19.3207H78.9999V29.9544H74.5459Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M53.4777%2022.9932C53.4706%2018.1704%2057.0692%2015.7812%2061.5009%2015.7812C65.9331%2015.7812%2069.517%2018.4725%2069.5241%2022.9932C69.5317%2027.5428%2065.9331%2030.1981%2061.5009%2030.1981C57.0692%2030.1981%2053.4777%2028.1185%2053.4777%2022.9932ZM57.9683%2022.9932C57.9683%2025.6184%2058.9865%2027.7498%2061.5009%2027.7498C63.8459%2027.7498%2064.9597%2025.6184%2064.9597%2022.9932C64.9597%2020.3679%2063.6766%2018.2371%2061.5009%2018.2371C58.9494%2018.2371%2057.9683%2020.3679%2057.9683%2022.9932Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M42.6155%2030.0651C40.1896%2029.5713%2037.8736%2027.7791%2038.0511%2025.132H42.2686C42.527%2025.6995%2042.4238%2026.2824%2042.8143%2026.8281C43.0285%2027.1301%2043.2721%2027.3885%2043.5742%2027.5431C43.8172%2027.6687%2044.0461%2027.8233%2044.3116%2027.89C45.0119%2028.0664%2045.7345%2028.0888%2046.3982%2027.8676C46.8849%2027.713%2047.3203%2027.3809%2047.5415%2026.8871C47.6666%2026.621%2047.6595%2026.3042%2047.5639%2026.0169C47.5043%2025.8547%2047.4017%2025.6995%2047.3203%2025.5668C46.9958%2025.0583%2046.413%2024.9326%2045.8602%2024.7556C43.4119%2023.9887%2040.182%2024.2984%2038.8399%2021.7175C38.4417%2020.9505%2038.4193%2020.088%2038.6263%2019.225C38.7732%2018.6132%2039.1715%2018.1117%2039.5992%2017.7059C39.9979%2017.3224%2040.4475%2016.9466%2040.9784%2016.7106C43.5741%2015.5378%2046.561%2015.6635%2049.0972%2016.7767C50.6092%2017.4333%2051.8551%2018.8344%2051.9141%2020.5818H47.9102C47.7256%2019.8739%2047.3645%2019.2545%2046.738%2018.8344C45.9558%2018.3253%2045.0637%2018.2663%2044.1788%2018.4952C43.5075%2018.6722%2042.7706%2019.2468%2043.0509%2020.0214C43.2125%2020.4862%2043.7069%2020.6998%2044.1788%2020.8254C46.413%2021.4301%2048.6476%2021.5481%2050.6753%2022.7793C51.6711%2023.384%2052.2168%2024.4388%2052.202%2025.5373C52.1567%2029.1698%2048.7257%2030.347%2045.4363%2030.3475C44.452%2030.3475%2043.4802%2030.2415%2042.6155%2030.0651Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M27.3287%2030.006C24.9028%2029.5122%2022.5944%2027.72%2022.7714%2025.0729H26.9824C27.2402%2025.6405%2027.1369%2026.2304%2027.5281%2026.7685C27.7493%2027.0711%2027.9853%2027.3289%2028.295%2027.4841C28.5309%2027.6097%2028.7593%2027.7572%2029.0319%2027.8309C29.7327%2028.0073%2030.4483%2028.0226%2031.1119%2027.8085C31.6057%2027.6534%2032.0334%2027.3218%2032.2623%2026.828C32.3803%2026.562%2032.3803%2026.2452%2032.2771%2025.9579C32.2181%2025.7956%2032.1219%2025.6405%2032.0334%2025.5078C31.7166%2024.9987%2031.1338%2024.8736%2030.5804%2024.6966C28.1251%2023.9297%2024.8952%2024.2394%2023.5531%2021.6584C23.1625%2020.8915%2023.1401%2020.0284%2023.3395%2019.1659C23.487%2018.5541%2023.8852%2018.0527%2024.3123%2017.6468C24.7182%2017.2634%2025.1606%2016.8875%2025.6916%2016.6516C28.295%2015.4788%2031.2813%2015.6044%2033.818%2016.7177C35.3223%2017.3742%2036.5683%2018.7753%2036.635%2020.5228H32.6234C32.4393%2019.8148%2032.0853%2019.1954%2031.4511%2018.7824C30.6766%2018.2663%2029.7846%2018.2073%2028.892%2018.4356C28.2283%2018.6131%2027.4909%2019.1878%2027.764%2019.9623C27.9334%2020.4272%2028.4277%2020.6408%2028.892%2020.7658C31.1267%2021.3711%2033.3679%2021.4891%2035.3961%2022.7203C36.3919%2023.3326%2036.9376%2024.3792%2036.9228%2025.4783C36.8715%2029.1086%2033.4433%2030.2912%2030.1549%2030.2912C29.1684%2030.2912%2028.195%2030.1847%2027.3287%2030.006Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M29.7181%200.0519114H41.6278V11.7327H29.7181V0.0519114ZM31.3109%203.5992H34.4152V10.3021H37.0994V3.5992H40.1524V1.61525H31.3109V3.5992Z'%20fill='%232B2B2B'/%3e%3cpath%20d='M43.036%200H54.9675V11.7769H43.036V0ZM44.673%207.16066H47.7331V10.1989H50.3141V7.16066H53.3746V4.54309H50.3141V1.52676H47.7331V4.54309H44.673V7.16066Z'%20fill='%232B2B2B'/%3e%3c/svg%3e",
    va = "data:image/svg+xml,%3csvg%20width='31'%20height='28'%20viewBox='0%200%2031%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.47292%206.68825C6.60718%2010.6845%205.74144%2014.6799%204.87484%2018.6762C4.90748%2018.6977%204.94098%2018.7192%204.97361%2018.7408C5.07754%2018.6443%205.19005%2018.5556%205.28281%2018.4488C7.63954%2015.7306%209.99455%2013.0099%2012.3487%2010.2892C15.1529%207.04826%2017.9597%203.80905%2020.7562%200.561232C21.1323%200.126294%2021.6056%200.00657886%2022.1372%200.00313381C22.8389%20-0.0011725%2023.5397%20-0.000311234%2024.2414%200.00141129C25.0101%200.00313381%2025.0582%200.0444744%2025.2266%200.821333C26.0863%204.78658%2026.9452%208.7527%2027.8057%2012.7179C28.8544%2017.5522%2029.9048%2022.3856%2030.9544%2027.2199C31.084%2027.8185%2030.9535%2027.9942%2030.354%2027.9967C29.2658%2028.0019%2028.1785%2028.0002%2027.0903%2027.9967C26.4212%2027.995%2025.8845%2027.728%2025.443%2027.2147C22.6027%2023.9101%2019.753%2020.6131%2016.9059%2017.3136C16.887%2017.2921%2016.8672%2017.2714%2016.8492%2017.249C16.3321%2016.6048%2016.3124%2016.7866%2016.8595%2016.1449C17.8918%2014.934%2018.9414%2013.7385%2019.984%2012.5371C20.0673%2012.4415%2020.1567%2012.3511%2020.3035%2012.1934C22.2068%2014.3974%2024.0894%2016.5773%2025.9721%2018.7571C26.0236%2018.7347%2026.0751%2018.7123%2026.1267%2018.6899C25.2592%2014.6825%2024.3909%2010.6759%2023.4951%206.54097C23.2486%206.78127%2023.1%206.90615%2022.9746%207.05084C18.1349%2012.6439%2013.296%2018.2378%208.45804%2023.8325C7.48322%2024.9599%206.50412%2026.0839%205.53875%2027.2207C5.10073%2027.7366%204.55878%2027.9959%203.88886%2027.9976C2.81528%2027.9993%201.7417%2028.001%200.668112%2027.9976C0.060034%2027.995%20-0.0842558%2027.8202%200.0419977%2027.2362C0.986752%2022.8783%201.93494%2018.5211%202.8797%2014.1631C3.84592%209.70697%204.81043%205.2508%205.77408%200.793773C5.93469%200.0608384%205.99481%200.00399508%206.74202%200.00141129C7.44372%20-0.0011725%208.14455%200.0057176%208.84625%200.00141129C9.46893%20-0.00289502%209.95934%200.212421%2010.3776%200.709369C11.7157%202.29926%2013.0813%203.86676%2014.4564%205.42564C14.7157%205.72019%2014.6874%205.90795%2014.4452%206.18269C13.3373%207.44099%2012.2405%208.71049%2011.1532%209.98689C10.9307%2010.2478%2010.7821%2010.2677%2010.5537%209.9955C9.76008%209.05242%208.95103%208.12225%208.14455%207.18951C7.98137%207.00089%207.80358%206.82347%207.63181%206.64174C7.57942%206.65725%207.52617%206.67275%207.47292%206.68911V6.68825Z'%20fill='%232B2B2B'/%3e%3c/svg%3e";

function ya(s, e) {
    for (var i = 0; i < e.length; i++) {
        var t = e[i];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(s, t.key, t)
    }
}

function ba(s, e, i) {
    return e && ya(s.prototype, e), s
}
var We, Ui, yt, rn, on, qn, io, gn, zn, so, Zt, Rt, ro, oo = function() {
        return We || typeof window < "u" && (We = window.gsap) && We.registerPlugin && We
    },
    lo = 1,
    Hn = [],
    ae = [],
    qt = [],
    fi = Date.now,
    As = function(e, i) {
        return i
    },
    Ca = function() {
        var e = zn.core,
            i = e.bridge || {},
            t = e._scrollers,
            n = e._proxies;
        t.push.apply(t, ae), n.push.apply(n, qt), ae = t, qt = n, As = function(l, o) {
            return i[l](o)
        }
    },
    ln = function(e, i) {
        return ~qt.indexOf(e) && qt[qt.indexOf(e) + 1][i]
    },
    pi = function(e) {
        return !!~so.indexOf(e)
    },
    et = function(e, i, t, n, r) {
        return e.addEventListener(i, t, {
            passive: n !== !1,
            capture: !!r
        })
    },
    $e = function(e, i, t, n) {
        return e.removeEventListener(i, t, !!n)
    },
    Li = "scrollLeft",
    Oi = "scrollTop",
    Ss = function() {
        return Zt && Zt.isPressed || ae.cache++
    },
    ns = function(e, i) {
        var t = function n(r) {
            if (r || r === 0) {
                lo && (yt.history.scrollRestoration = "manual");
                var l = Zt && Zt.isPressed;
                r = n.v = Math.round(r) || (Zt && Zt.iOS ? 1 : 0), e(r), n.cacheID = ae.cache, l && As("ss", r)
            } else(i || ae.cache !== n.cacheID || As("ref")) && (n.cacheID = ae.cache, n.v = e());
            return n.v + n.offset
        };
        return t.offset = 0, e && t
    },
    st = {
        s: Li,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ns(function(s) {
            return arguments.length ? yt.scrollTo(s, De.sc()) : yt.pageXOffset || rn[Li] || on[Li] || qn[Li] || 0
        })
    },
    De = {
        s: Oi,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: st,
        sc: ns(function(s) {
            return arguments.length ? yt.scrollTo(st.sc(), s) : yt.pageYOffset || rn[Oi] || on[Oi] || qn[Oi] || 0
        })
    },
    ot = function(e, i) {
        return (i && i._ctx && i._ctx.selector || We.utils.toArray)(e)[0] || (typeof e == "string" && We.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    wa = function(e, i) {
        for (var t = i.length; t--;)
            if (i[t] === e || i[t].contains(e)) return !0;
        return !1
    },
    an = function(e, i) {
        var t = i.s,
            n = i.sc;
        pi(e) && (e = rn.scrollingElement || on);
        var r = ae.indexOf(e),
            l = n === De.sc ? 1 : 2;
        !~r && (r = ae.push(e) - 1), ae[r + l] || et(e, "scroll", Ss);
        var o = ae[r + l],
            a = o || (ae[r + l] = ns(ln(e, t), !0) || (pi(e) ? n : ns(function(d) {
                return arguments.length ? e[t] = d : e[t]
            })));
        return a.target = e, o || (a.smooth = We.getProperty(e, "scrollBehavior") === "smooth"), a
    },
    ks = function(e, i, t) {
        var n = e,
            r = e,
            l = fi(),
            o = l,
            a = i || 50,
            d = Math.max(500, a * 3),
            f = function(g, x) {
                var w = fi();
                x || w - l > a ? (r = n, n = g, o = l, l = w) : t ? n += g : n = r + (g - r) / (w - o) * (l - o)
            },
            c = function() {
                r = n = t ? 0 : n, o = l = 0
            },
            p = function(g) {
                var x = o,
                    w = r,
                    m = fi();
                return (g || g === 0) && g !== n && f(g), l === o || m - o > d ? 0 : (n + (t ? w : -w)) / ((t ? m : l) - x) * 1e3
            };
        return {
            update: f,
            reset: c,
            getVelocity: p
        }
    },
    ti = function(e, i) {
        return i && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    mr = function(e) {
        var i = Math.max.apply(Math, e),
            t = Math.min.apply(Math, e);
        return Math.abs(i) >= Math.abs(t) ? i : t
    },
    ao = function() {
        zn = We.core.globals().ScrollTrigger, zn && zn.core && Ca()
    },
    co = function(e) {
        return We = e || oo(), !Ui && We && typeof document < "u" && document.body && (yt = window, rn = document, on = rn.documentElement, qn = rn.body, so = [yt, rn, on, qn], We.utils.clamp, ro = We.core.context || function() {}, gn = "onpointerenter" in qn ? "pointer" : "mouse", io = Me.isTouch = yt.matchMedia && yt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in yt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Rt = Me.eventTypes = ("ontouchstart" in on ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in on ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return lo = 0
        }, 500), Ui = 1), zn || ao(), Ui
    };
st.op = De;
ae.cache = 0;
var Me = (function() {
    function s(i) {
        this.init(i)
    }
    var e = s.prototype;
    return e.init = function(t) {
        Ui || co(We) || console.warn("Please gsap.registerPlugin(Observer)"), zn || ao();
        var n = t.tolerance,
            r = t.dragMinimum,
            l = t.type,
            o = t.target,
            a = t.lineHeight,
            d = t.debounce,
            f = t.preventDefault,
            c = t.onStop,
            p = t.onStopDelay,
            u = t.ignore,
            g = t.wheelSpeed,
            x = t.event,
            w = t.onDragStart,
            m = t.onDragEnd,
            S = t.onDrag,
            R = t.onPress,
            P = t.onRelease,
            _ = t.onRight,
            v = t.onLeft,
            C = t.onUp,
            M = t.onDown,
            B = t.onChangeX,
            b = t.onChangeY,
            L = t.onChange,
            k = t.onToggleX,
            H = t.onToggleY,
            T = t.onHover,
            U = t.onHoverEnd,
            J = t.onMove,
            D = t.ignoreCheck,
            E = t.isNormalizer,
            N = t.onGestureStart,
            h = t.onGestureEnd,
            y = t.onWheel,
            I = t.onEnable,
            z = t.onDisable,
            W = t.onClick,
            Z = t.scrollSpeed,
            ee = t.capture,
            ue = t.allowClicks,
            Ie = t.lockAxis,
            _e = t.onLockAxis;
        this.target = o = ot(o) || on, this.vars = t, u && (u = We.utils.toArray(u)), n = n || 1e-9, r = r || 0, g = g || 1, Z = Z || 1, l = l || "wheel,touch,pointer", d = d !== !1, a || (a = parseFloat(yt.getComputedStyle(qn).lineHeight) || 22);
        var be, Le, Ne, de, Ce, rt, dt, A = this,
            ft = 0,
            zt = 0,
            Yt = t.passive || !f && t.passive !== !1,
            Ae = an(o, st),
            jt = an(o, De),
            Jt = Ae(),
            un = jt(),
            He = ~l.indexOf("touch") && !~l.indexOf("pointer") && Rt[0] === "pointerdown",
            Qt = pi(o),
            Te = o.ownerDocument || rn,
            kt = [0, 0, 0],
            Ct = [0, 0, 0],
            Ft = 0,
            Wn = function() {
                return Ft = fi()
            },
            Pe = function(Q, he) {
                return (A.event = Q) && u && wa(Q.target, u) || he && He && Q.pointerType !== "touch" || D && D(Q, he)
            },
            Ti = function() {
                A._vx.reset(), A._vy.reset(), Le.pause(), c && c(A)
            },
            Vt = function() {
                var Q = A.deltaX = mr(kt),
                    he = A.deltaY = mr(Ct),
                    j = Math.abs(Q) >= n,
                    te = Math.abs(he) >= n;
                L && (j || te) && L(A, Q, he, kt, Ct), j && (_ && A.deltaX > 0 && _(A), v && A.deltaX < 0 && v(A), B && B(A), k && A.deltaX < 0 != ft < 0 && k(A), ft = A.deltaX, kt[0] = kt[1] = kt[2] = 0), te && (M && A.deltaY > 0 && M(A), C && A.deltaY < 0 && C(A), b && b(A), H && A.deltaY < 0 != zt < 0 && H(A), zt = A.deltaY, Ct[0] = Ct[1] = Ct[2] = 0), (de || Ne) && (J && J(A), Ne && (w && Ne === 1 && w(A), S && S(A), Ne = 0), de = !1), rt && !(rt = !1) && _e && _e(A), Ce && (y(A), Ce = !1), be = 0
            },
            En = function(Q, he, j) {
                kt[j] += Q, Ct[j] += he, A._vx.update(Q), A._vy.update(he), d ? be || (be = requestAnimationFrame(Vt)) : Vt()
            },
            Mn = function(Q, he) {
                Ie && !dt && (A.axis = dt = Math.abs(Q) > Math.abs(he) ? "x" : "y", rt = !0), dt !== "y" && (kt[2] += Q, A._vx.update(Q, !0)), dt !== "x" && (Ct[2] += he, A._vy.update(he, !0)), d ? be || (be = requestAnimationFrame(Vt)) : Vt()
            },
            Kt = function(Q) {
                if (!Pe(Q, 1)) {
                    Q = ti(Q, f);
                    var he = Q.clientX,
                        j = Q.clientY,
                        te = he - A.x,
                        Y = j - A.y,
                        ne = A.isDragging;
                    A.x = he, A.y = j, (ne || (te || Y) && (Math.abs(A.startX - he) >= r || Math.abs(A.startY - j) >= r)) && (Ne || (Ne = ne ? 2 : 1), ne || (A.isDragging = !0), Mn(te, Y))
                }
            },
            dn = A.onPress = function(ie) {
                Pe(ie, 1) || ie && ie.button || (A.axis = dt = null, Le.pause(), A.isPressed = !0, ie = ti(ie), ft = zt = 0, A.startX = A.x = ie.clientX, A.startY = A.y = ie.clientY, A._vx.reset(), A._vy.reset(), et(E ? o : Te, Rt[1], Kt, Yt, !0), A.deltaX = A.deltaY = 0, R && R(A))
            },
            ce = A.onRelease = function(ie) {
                if (!Pe(ie, 1)) {
                    $e(E ? o : Te, Rt[1], Kt, !0);
                    var Q = !isNaN(A.y - A.startY),
                        he = A.isDragging,
                        j = he && (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
                        te = ti(ie);
                    !j && Q && (A._vx.reset(), A._vy.reset(), f && ue && We.delayedCall(.08, function() {
                        if (fi() - Ft > 300 && !ie.defaultPrevented) {
                            if (ie.target.click) ie.target.click();
                            else if (Te.createEvent) {
                                var Y = Te.createEvent("MouseEvents");
                                Y.initMouseEvent("click", !0, !0, yt, 1, te.screenX, te.screenY, te.clientX, te.clientY, !1, !1, !1, !1, 0, null), ie.target.dispatchEvent(Y)
                            }
                        }
                    })), A.isDragging = A.isGesturing = A.isPressed = !1, c && he && !E && Le.restart(!0), Ne && Vt(), m && he && m(A), P && P(A, j)
                }
            },
            fn = function(Q) {
                return Q.touches && Q.touches.length > 1 && (A.isGesturing = !0) && N(Q, A.isDragging)
            },
            Tt = function() {
                return (A.isGesturing = !1) || h(A)
            },
            Et = function(Q) {
                if (!Pe(Q)) {
                    var he = Ae(),
                        j = jt();
                    En((he - Jt) * Z, (j - un) * Z, 1), Jt = he, un = j, c && Le.restart(!0)
                }
            },
            Mt = function(Q) {
                if (!Pe(Q)) {
                    Q = ti(Q, f), y && (Ce = !0);
                    var he = (Q.deltaMode === 1 ? a : Q.deltaMode === 2 ? yt.innerHeight : 1) * g;
                    En(Q.deltaX * he, Q.deltaY * he, 0), c && !E && Le.restart(!0)
                }
            },
            pn = function(Q) {
                if (!Pe(Q)) {
                    var he = Q.clientX,
                        j = Q.clientY,
                        te = he - A.x,
                        Y = j - A.y;
                    A.x = he, A.y = j, de = !0, c && Le.restart(!0), (te || Y) && Mn(te, Y)
                }
            },
            Pn = function(Q) {
                A.event = Q, T(A)
            },
            Xt = function(Q) {
                A.event = Q, U(A)
            },
            Zn = function(Q) {
                return Pe(Q) || ti(Q, f) && W(A)
            };
        Le = A._dc = We.delayedCall(p || .25, Ti).pause(), A.deltaX = A.deltaY = 0, A._vx = ks(0, 50, !0), A._vy = ks(0, 50, !0), A.scrollX = Ae, A.scrollY = jt, A.isDragging = A.isGesturing = A.isPressed = !1, ro(this), A.enable = function(ie) {
            return A.isEnabled || (et(Qt ? Te : o, "scroll", Ss), l.indexOf("scroll") >= 0 && et(Qt ? Te : o, "scroll", Et, Yt, ee), l.indexOf("wheel") >= 0 && et(o, "wheel", Mt, Yt, ee), (l.indexOf("touch") >= 0 && io || l.indexOf("pointer") >= 0) && (et(o, Rt[0], dn, Yt, ee), et(Te, Rt[2], ce), et(Te, Rt[3], ce), ue && et(o, "click", Wn, !0, !0), W && et(o, "click", Zn), N && et(Te, "gesturestart", fn), h && et(Te, "gestureend", Tt), T && et(o, gn + "enter", Pn), U && et(o, gn + "leave", Xt), J && et(o, gn + "move", pn)), A.isEnabled = !0, A.isDragging = A.isGesturing = A.isPressed = de = Ne = !1, A._vx.reset(), A._vy.reset(), Jt = Ae(), un = jt(), ie && ie.type && dn(ie), I && I(A)), A
        }, A.disable = function() {
            A.isEnabled && (Hn.filter(function(ie) {
                return ie !== A && pi(ie.target)
            }).length || $e(Qt ? Te : o, "scroll", Ss), A.isPressed && (A._vx.reset(), A._vy.reset(), $e(E ? o : Te, Rt[1], Kt, !0)), $e(Qt ? Te : o, "scroll", Et, ee), $e(o, "wheel", Mt, ee), $e(o, Rt[0], dn, ee), $e(Te, Rt[2], ce), $e(Te, Rt[3], ce), $e(o, "click", Wn, !0), $e(o, "click", Zn), $e(Te, "gesturestart", fn), $e(Te, "gestureend", Tt), $e(o, gn + "enter", Pn), $e(o, gn + "leave", Xt), $e(o, gn + "move", pn), A.isEnabled = A.isPressed = A.isDragging = !1, z && z(A))
        }, A.kill = A.revert = function() {
            A.disable();
            var ie = Hn.indexOf(A);
            ie >= 0 && Hn.splice(ie, 1), Zt === A && (Zt = 0)
        }, Hn.push(A), E && pi(o) && (Zt = A), A.enable(x)
    }, ba(s, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), s
})();
Me.version = "3.15.0";
Me.create = function(s) {
    return new Me(s)
};
Me.register = co;
Me.getAll = function() {
    return Hn.slice()
};
Me.getById = function(s) {
    return Hn.filter(function(e) {
        return e.vars.id === s
    })[0]
};
oo() && We.registerPlugin(Me);
var X, Bn, le, me, vt, ge, js, is, wi, hi, oi, Bi, Je, as, Ts, nt, vr, yr, Dn, uo, ps, fo, tt, Es, po, ho, tn, Ms, Fs, jn, Vs, gi, Ps, hs, Di = 1,
    Qe = Date.now,
    gs = Qe(),
    _t = 0,
    li = 0,
    br = function(e, i, t) {
        var n = gt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return t["_" + i + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
    },
    Cr = function(e, i) {
        return i && (!gt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
    },
    xa = function s() {
        return li && requestAnimationFrame(s)
    },
    wr = function() {
        return as = 1
    },
    xr = function() {
        return as = 0
    },
    Nt = function(e) {
        return e
    },
    ai = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    go = function() {
        return typeof window < "u"
    },
    mo = function() {
        return X || go() && (X = window.gsap) && X.registerPlugin && X
    },
    An = function(e) {
        return !!~js.indexOf(e)
    },
    vo = function(e) {
        return (e === "Height" ? Vs : le["inner" + e]) || vt["client" + e] || ge["client" + e]
    },
    yo = function(e) {
        return ln(e, "getBoundingClientRect") || (An(e) ? function() {
            return Ji.width = le.innerWidth, Ji.height = Vs, Ji
        } : function() {
            return Wt(e)
        })
    },
    _a = function(e, i, t) {
        var n = t.d,
            r = t.d2,
            l = t.a;
        return (l = ln(e, "getBoundingClientRect")) ? function() {
            return l()[n]
        } : function() {
            return (i ? vo(r) : e["client" + r]) || 0
        }
    },
    Aa = function(e, i) {
        return !i || ~qt.indexOf(e) ? yo(e) : function() {
            return Ji
        }
    },
    Ht = function(e, i) {
        var t = i.s,
            n = i.d2,
            r = i.d,
            l = i.a;
        return Math.max(0, (t = "scroll" + n) && (l = ln(e, t)) ? l() - yo(e)()[r] : An(e) ? (vt[t] || ge[t]) - vo(n) : e[t] - e["offset" + n])
    },
    Ni = function(e, i) {
        for (var t = 0; t < Dn.length; t += 3)(!i || ~i.indexOf(Dn[t + 1])) && e(Dn[t], Dn[t + 1], Dn[t + 2])
    },
    gt = function(e) {
        return typeof e == "string"
    },
    Ke = function(e) {
        return typeof e == "function"
    },
    ci = function(e) {
        return typeof e == "number"
    },
    mn = function(e) {
        return typeof e == "object"
    },
    ni = function(e, i, t) {
        return e && e.progress(i ? 0 : 1) && t && e.pause()
    },
    Rn = function(e, i, t) {
        if (e.enabled) {
            var n = e._ctx ? e._ctx.add(function() {
                return i(e, t)
            }) : i(e, t);
            n && n.totalTime && (e.callbackAnimation = n)
        }
    },
    In = Math.abs,
    bo = "left",
    Co = "top",
    Xs = "right",
    Us = "bottom",
    bn = "width",
    Cn = "height",
    mi = "Right",
    vi = "Left",
    yi = "Top",
    bi = "Bottom",
    Re = "padding",
    wt = "margin",
    Xn = "Width",
    Ws = "Height",
    Be = "px",
    xt = function(e) {
        return le.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e)
    },
    Sa = function(e) {
        var i = xt(e).position;
        e.style.position = i === "absolute" || i === "fixed" ? i : "relative"
    },
    _r = function(e, i) {
        for (var t in i) t in e || (e[t] = i[t]);
        return e
    },
    Wt = function(e, i) {
        var t = i && xt(e)[Ts] !== "matrix(1, 0, 0, 1, 0, 0)" && X.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            n = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
        return t && t.progress(0).kill(), n
    },
    ss = function(e, i) {
        var t = i.d2;
        return e["offset" + t] || e["client" + t] || 0
    },
    wo = function(e) {
        var i = [],
            t = e.labels,
            n = e.duration(),
            r;
        for (r in t) i.push(t[r] / n);
        return i
    },
    ka = function(e) {
        return function(i) {
            return X.utils.snap(wo(e), i)
        }
    },
    Zs = function(e) {
        var i = X.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(function(n, r) {
                return n - r
            });
        return t ? function(n, r, l) {
            l === void 0 && (l = .001);
            var o;
            if (!r) return i(n);
            if (r > 0) {
                for (n -= l, o = 0; o < t.length; o++)
                    if (t[o] >= n) return t[o];
                return t[o - 1]
            } else
                for (o = t.length, n += l; o--;)
                    if (t[o] <= n) return t[o];
            return t[0]
        } : function(n, r, l) {
            l === void 0 && (l = .001);
            var o = i(n);
            return !r || Math.abs(o - n) < l || o - n < 0 == r < 0 ? o : i(r < 0 ? n - e : n + e)
        }
    },
    Ta = function(e) {
        return function(i, t) {
            return Zs(wo(e))(i, t.direction)
        }
    },
    Hi = function(e, i, t, n) {
        return t.split(",").forEach(function(r) {
            return e(i, r, n)
        })
    },
    je = function(e, i, t, n, r) {
        return e.addEventListener(i, t, {
            passive: !n,
            capture: !!r
        })
    },
    ze = function(e, i, t, n) {
        return e.removeEventListener(i, t, !!n)
    },
    qi = function(e, i, t) {
        t = t && t.wheelHandler, t && (e(i, "wheel", t), e(i, "touchmove", t))
    },
    Ar = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    zi = {
        toggleActions: "play",
        anticipatePin: 0
    },
    rs = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    Wi = function(e, i) {
        if (gt(e)) {
            var t = e.indexOf("="),
                n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (n *= i / 100), e = e.substr(0, t - 1)), e = n + (e in rs ? rs[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0)
        }
        return e
    },
    ji = function(e, i, t, n, r, l, o, a) {
        var d = r.startColor,
            f = r.endColor,
            c = r.fontSize,
            p = r.indent,
            u = r.fontWeight,
            g = me.createElement("div"),
            x = An(t) || ln(t, "pinType") === "fixed",
            w = e.indexOf("scroller") !== -1,
            m = x ? ge : t.tagName === "IFRAME" ? t.contentDocument.body : t,
            S = e.indexOf("start") !== -1,
            R = S ? d : f,
            P = "border-color:" + R + ";font-size:" + c + ";color:" + R + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return P += "position:" + ((w || a) && x ? "fixed;" : "absolute;"), (w || a || !x) && (P += (n === De ? Xs : Us) + ":" + (l + parseFloat(p)) + "px;"), o && (P += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), g._isStart = S, g.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")), g.style.cssText = P, g.innerText = i || i === 0 ? e + "-" + i : e, m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g), g._offset = g["offset" + n.op.d2], Zi(g, 0, n, S), g
    },
    Zi = function(e, i, t, n) {
        var r = {
                display: "block"
            },
            l = t[n ? "os2" : "p2"],
            o = t[n ? "p2" : "os2"];
        e._isFlipped = n, r[t.a + "Percent"] = n ? -100 : 0, r[t.a] = n ? "1px" : 0, r["border" + l + Xn] = 1, r["border" + o + Xn] = 0, r[t.p] = i + "px", X.set(e, r)
    },
    oe = [],
    Rs = {},
    xi, Sr = function() {
        return Qe() - _t > 34 && (xi || (xi = requestAnimationFrame(Gt)))
    },
    Ln = function() {
        (!tt || !tt.isPressed || tt.startX > ge.clientWidth) && (ae.cache++, tt ? xi || (xi = requestAnimationFrame(Gt)) : Gt(), _t || kn("scrollStart"), _t = Qe())
    },
    ms = function() {
        ho = le.innerWidth, po = le.innerHeight
    },
    ui = function(e) {
        ae.cache++, (e === !0 || !Je && !fo && !me.fullscreenElement && !me.webkitFullscreenElement && (!Es || ho !== le.innerWidth || Math.abs(le.innerHeight - po) > le.innerHeight * .25)) && is.restart(!0)
    },
    Sn = {},
    Ea = [],
    xo = function s() {
        return ze(re, "scrollEnd", s) || yn(!0)
    },
    kn = function(e) {
        return Sn[e] && Sn[e].map(function(i) {
            return i()
        }) || Ea
    },
    ht = [],
    _o = function(e) {
        for (var i = 0; i < ht.length; i += 5)(!e || ht[i + 4] && ht[i + 4].query === e) && (ht[i].style.cssText = ht[i + 1], ht[i].getBBox && ht[i].setAttribute("transform", ht[i + 2] || ""), ht[i + 3].uncache = 1)
    },
    Ao = function() {
        return ae.forEach(function(e) {
            return Ke(e) && ++e.cacheID && (e.rec = e())
        })
    },
    Gs = function(e, i) {
        var t;
        for (nt = 0; nt < oe.length; nt++) t = oe[nt], t && (!i || t._ctx === i) && (e ? t.kill(1) : t.revert(!0, !0));
        gi = !0, i && _o(i), i || kn("revert")
    },
    So = function(e, i) {
        ae.cache++, (i || !it) && ae.forEach(function(t) {
            return Ke(t) && t.cacheID++ && (t.rec = 0)
        }), gt(e) && (le.history.scrollRestoration = Fs = e)
    },
    it, wn = 0,
    kr, Ma = function() {
        if (kr !== wn) {
            var e = kr = wn;
            requestAnimationFrame(function() {
                return e === wn && yn(!0)
            })
        }
    },
    ko = function() {
        ge.appendChild(jn), Vs = !tt && jn.offsetHeight || le.innerHeight, ge.removeChild(jn)
    },
    Tr = function(e) {
        return wi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
            return i.style.display = e ? "none" : "block"
        })
    },
    yn = function(e, i) {
        if (vt = me.documentElement, ge = me.body, js = [le, me, vt, ge], _t && !e && !gi) {
            je(re, "scrollEnd", xo);
            return
        }
        ko(), it = re.isRefreshing = !0, gi || Ao();
        var t = kn("refreshInit");
        uo && re.sort(), i || Gs(), ae.forEach(function(n) {
            Ke(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0))
        }), oe.slice(0).forEach(function(n) {
            return n.refresh()
        }), gi = !1, oe.forEach(function(n) {
            if (n._subPinOffset && n.pin) {
                var r = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    l = n.pin[r];
                n.revert(!0, 1), n.adjustPinSpacing(n.pin[r] - l), n.refresh()
            }
        }), Ps = 1, Tr(!0), oe.forEach(function(n) {
            var r = Ht(n.scroller, n._dir),
                l = n.vars.end === "max" || n._endClamp && n.end > r,
                o = n._startClamp && n.start >= r;
            (l || o) && n.setPositions(o ? r - 1 : n.start, l ? Math.max(o ? r : n.start + 1, r) : n.end, !0)
        }), Tr(!1), Ps = 0, t.forEach(function(n) {
            return n && n.render && n.render(-1)
        }), ae.forEach(function(n) {
            Ke(n) && (n.smooth && requestAnimationFrame(function() {
                return n.target.style.scrollBehavior = "smooth"
            }), n.rec && n(n.rec))
        }), So(Fs, 1), is.pause(), wn++, it = 2, Gt(2), oe.forEach(function(n) {
            return Ke(n.vars.onRefresh) && n.vars.onRefresh(n)
        }), it = re.isRefreshing = !1, kn("refresh")
    },
    Is = 0,
    Gi = 1,
    Ci, Gt = function(e) {
        if (e === 2 || !it && !gi) {
            re.isUpdating = !0, Ci && Ci.update(0);
            var i = oe.length,
                t = Qe(),
                n = t - gs >= 50,
                r = i && oe[0].scroll();
            if (Gi = Is > r ? -1 : 1, it || (Is = r), n && (_t && !as && t - _t > 200 && (_t = 0, kn("scrollEnd")), oi = gs, gs = t), Gi < 0) {
                for (nt = i; nt-- > 0;) oe[nt] && oe[nt].update(0, n);
                Gi = 1
            } else
                for (nt = 0; nt < i; nt++) oe[nt] && oe[nt].update(0, n);
            re.isUpdating = !1
        }
        xi = 0
    },
    Ls = [bo, Co, Us, Xs, wt + bi, wt + mi, wt + yi, wt + vi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Yi = Ls.concat([bn, Cn, "boxSizing", "max" + Xn, "max" + Ws, "position", wt, Re, Re + yi, Re + mi, Re + bi, Re + vi]),
    Pa = function(e, i, t) {
        Fn(t);
        var n = e._gsap;
        if (n.spacerIsNative) Fn(n.spacerState);
        else if (e._gsap.swappedIn) {
            var r = i.parentNode;
            r && (r.insertBefore(e, i), r.removeChild(i))
        }
        e._gsap.swappedIn = !1
    },
    vs = function(e, i, t, n) {
        if (!e._gsap.swappedIn) {
            for (var r = Ls.length, l = i.style, o = e.style, a; r--;) a = Ls[r], l[a] = t[a];
            l.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (l.display = "inline-block"), o[Us] = o[Xs] = "auto", l.flexBasis = t.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[bn] = ss(e, st) + Be, l[Cn] = ss(e, De) + Be, l[Re] = o[wt] = o[Co] = o[bo] = "0", Fn(n), o[bn] = o["max" + Xn] = t[bn], o[Cn] = o["max" + Ws] = t[Cn], o[Re] = t[Re], e.parentNode !== i && (e.parentNode.insertBefore(i, e), i.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    Ra = /([A-Z])/g,
    Fn = function(e) {
        if (e) {
            var i = e.t.style,
                t = e.length,
                n = 0,
                r, l;
            for ((e.t._gsap || X.core.getCache(e.t)).uncache = 1; n < t; n += 2) l = e[n + 1], r = e[n], l ? i[r] = l : i[r] && i.removeProperty(r.replace(Ra, "-$1").toLowerCase())
        }
    },
    Fi = function(e) {
        for (var i = Yi.length, t = e.style, n = [], r = 0; r < i; r++) n.push(Yi[r], t[Yi[r]]);
        return n.t = e, n
    },
    Ia = function(e, i, t) {
        for (var n = [], r = e.length, l = t ? 8 : 0, o; l < r; l += 2) o = e[l], n.push(o, o in i ? i[o] : e[l + 1]);
        return n.t = e.t, n
    },
    Ji = {
        left: 0,
        top: 0
    },
    Er = function(e, i, t, n, r, l, o, a, d, f, c, p, u, g) {
        Ke(e) && (e = e(a)), gt(e) && e.substr(0, 3) === "max" && (e = p + (e.charAt(4) === "=" ? Wi("0" + e.substr(3), t) : 0));
        var x = u ? u.time() : 0,
            w, m, S;
        if (u && u.seek(0), isNaN(e) || (e = +e), ci(e)) u && (e = X.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, p, e)), o && Zi(o, t, n, !0);
        else {
            Ke(i) && (i = i(a));
            var R = (e || "0").split(" "),
                P, _, v, C;
            S = ot(i, a) || ge, P = Wt(S) || {}, (!P || !P.left && !P.top) && xt(S).display === "none" && (C = S.style.display, S.style.display = "block", P = Wt(S), C ? S.style.display = C : S.style.removeProperty("display")), _ = Wi(R[0], P[n.d]), v = Wi(R[1] || "0", t), e = P[n.p] - d[n.p] - f + _ + r - v, o && Zi(o, v, n, t - v < 20 || o._isStart && v > 20), t -= t - v
        }
        if (g && (a[g] = e || -.001, e < 0 && (e = 0)), l) {
            var M = e + t,
                B = l._isStart;
            w = "scroll" + n.d2, Zi(l, M, n, B && M > 20 || !B && (c ? Math.max(ge[w], vt[w]) : l.parentNode[w]) <= M + 1), c && (d = Wt(o), c && (l.style[n.op.p] = d[n.op.p] - n.op.m - l._offset + Be))
        }
        return u && S && (w = Wt(S), u.seek(p), m = Wt(S), u._caScrollDist = w[n.p] - m[n.p], e = e / u._caScrollDist * p), u && u.seek(x), u ? e : Math.round(e)
    },
    La = /(webkit|moz|length|cssText|inset)/i,
    Mr = function(e, i, t, n) {
        if (e.parentNode !== i) {
            var r = e.style,
                l, o;
            if (i === ge) {
                e._stOrig = r.cssText, o = xt(e);
                for (l in o) !+l && !La.test(l) && o[l] && typeof r[l] == "string" && l !== "0" && (r[l] = o[l]);
                r.top = t, r.left = n
            } else r.cssText = e._stOrig;
            X.core.getCache(e).uncache = 1, i.appendChild(e)
        }
    },
    To = function(e, i, t) {
        var n = i,
            r = n;
        return function(l) {
            var o = Math.round(e());
            return o !== n && o !== r && Math.abs(o - n) > 3 && Math.abs(o - r) > 3 && (l = o, t && t()), r = n, n = Math.round(l), n
        }
    },
    Vi = function(e, i, t) {
        var n = {};
        n[i.p] = "+=" + t, X.set(e, n)
    },
    Pr = function(e, i) {
        var t = an(e, i),
            n = "_scroll" + i.p2,
            r = function l(o, a, d, f, c) {
                var p = l.tween,
                    u = a.onComplete,
                    g = {};
                d = d || t();
                var x = To(t, d, function() {
                    p.kill(), l.tween = 0
                });
                return c = f && c || 0, f = f || o - d, p && p.kill(), a[n] = o, a.inherit = !1, a.modifiers = g, g[n] = function() {
                    return x(d + f * p.ratio + c * p.ratio * p.ratio)
                }, a.onUpdate = function() {
                    ae.cache++, l.tween && Gt()
                }, a.onComplete = function() {
                    l.tween = 0, u && u.call(p)
                }, p = l.tween = X.to(e, a), p
            };
        return e[n] = t, t.wheelHandler = function() {
            return r.tween && r.tween.kill() && (r.tween = 0)
        }, je(e, "wheel", t.wheelHandler), re.isTouch && je(e, "touchmove", t.wheelHandler), r
    },
    re = (function() {
        function s(i, t) {
            Bn || s.register(X) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ms(this), this.init(i, t)
        }
        var e = s.prototype;
        return e.init = function(t, n) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !li) {
                this.update = this.refresh = this.kill = Nt;
                return
            }
            t = _r(gt(t) || ci(t) || t.nodeType ? {
                trigger: t
            } : t, zi);
            var r = t,
                l = r.onUpdate,
                o = r.toggleClass,
                a = r.id,
                d = r.onToggle,
                f = r.onRefresh,
                c = r.scrub,
                p = r.trigger,
                u = r.pin,
                g = r.pinSpacing,
                x = r.invalidateOnRefresh,
                w = r.anticipatePin,
                m = r.onScrubComplete,
                S = r.onSnapComplete,
                R = r.once,
                P = r.snap,
                _ = r.pinReparent,
                v = r.pinSpacer,
                C = r.containerAnimation,
                M = r.fastScrollEnd,
                B = r.preventOverlaps,
                b = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? st : De,
                L = !c && c !== 0,
                k = ot(t.scroller || le),
                H = X.core.getCache(k),
                T = An(k),
                U = ("pinType" in t ? t.pinType : ln(k, "pinType") || T && "fixed") === "fixed",
                J = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                D = L && t.toggleActions.split(" "),
                E = "markers" in t ? t.markers : zi.markers,
                N = T ? 0 : parseFloat(xt(k)["border" + b.p2 + Xn]) || 0,
                h = this,
                y = t.onRefreshInit && function() {
                    return t.onRefreshInit(h)
                },
                I = _a(k, T, b),
                z = Aa(k, T),
                W = 0,
                Z = 0,
                ee = 0,
                ue = an(k, b),
                Ie, _e, be, Le, Ne, de, Ce, rt, dt, A, ft, zt, Yt, Ae, jt, Jt, un, He, Qt, Te, kt, Ct, Ft, Wn, Pe, Ti, Vt, En, Mn, Kt, dn, ce, fn, Tt, Et, Mt, pn, Pn, Xt;
            if (h._startClamp = h._endClamp = !1, h._dir = b, w *= 45, h.scroller = k, h.scroll = C ? C.time.bind(C) : ue, Le = ue(), h.vars = t, n = n || t.animation, "refreshPriority" in t && (uo = 1, t.refreshPriority === -9999 && (Ci = h)), H.tweenScroll = H.tweenScroll || {
                    top: Pr(k, De),
                    left: Pr(k, st)
                }, h.tweenTo = Ie = H.tweenScroll[b.p], h.scrubDuration = function(j) {
                    fn = ci(j) && j, fn ? ce ? ce.duration(j) : ce = X.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: fn,
                        paused: !0,
                        onComplete: function() {
                            return m && m(h)
                        }
                    }) : (ce && ce.progress(1).kill(), ce = 0)
                }, n && (n.vars.lazy = !1, n._initted && !h.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), h.animation = n.pause(), n.scrollTrigger = h, h.scrubDuration(c), Kt = 0, a || (a = n.vars.id)), P && ((!mn(P) || P.push) && (P = {
                    snapTo: P
                }), "scrollBehavior" in ge.style && X.set(T ? [ge, vt] : k, {
                    scrollBehavior: "auto"
                }), ae.forEach(function(j) {
                    return Ke(j) && j.target === (T ? me.scrollingElement || vt : k) && (j.smooth = !1)
                }), be = Ke(P.snapTo) ? P.snapTo : P.snapTo === "labels" ? ka(n) : P.snapTo === "labelsDirectional" ? Ta(n) : P.directional !== !1 ? function(j, te) {
                    return Zs(P.snapTo)(j, Qe() - Z < 500 ? 0 : te.direction)
                } : X.utils.snap(P.snapTo), Tt = P.duration || {
                    min: .1,
                    max: 2
                }, Tt = mn(Tt) ? hi(Tt.min, Tt.max) : hi(Tt, Tt), Et = X.delayedCall(P.delay || fn / 2 || .1, function() {
                    var j = ue(),
                        te = Qe() - Z < 500,
                        Y = Ie.tween;
                    if ((te || Math.abs(h.getVelocity()) < 10) && !Y && !as && W !== j) {
                        var ne = (j - de) / Ae,
                            qe = n && !L ? n.totalProgress() : ne,
                            fe = te ? 0 : (qe - dn) / (Qe() - oi) * 1e3 || 0,
                            Ee = X.utils.clamp(-ne, 1 - ne, In(fe / 2) * fe / .185),
                            Ze = ne + (P.inertia === !1 ? 0 : Ee),
                            Se, we, ye = P,
                            Pt = ye.onStart,
                            xe = ye.onInterrupt,
                            pt = ye.onComplete;
                        if (Se = be(Ze, h), ci(Se) || (Se = Ze), we = Math.max(0, Math.round(de + Se * Ae)), j <= Ce && j >= de && we !== j) {
                            if (Y && !Y._initted && Y.data <= In(we - j)) return;
                            P.inertia === !1 && (Ee = Se - ne), Ie(we, {
                                duration: Tt(In(Math.max(In(Ze - qe), In(Se - qe)) * .185 / fe / .05 || 0)),
                                ease: P.ease || "power3",
                                data: In(we - j),
                                onInterrupt: function() {
                                    return Et.restart(!0) && xe && Rn(h, xe)
                                },
                                onComplete: function() {
                                    h.update(), W = ue(), n && !L && (ce ? ce.resetTo("totalProgress", Se, n._tTime / n._tDur) : n.progress(Se)), Kt = dn = n && !L ? n.totalProgress() : h.progress, S && S(h), pt && Rn(h, pt)
                                }
                            }, j, Ee * Ae, we - j - Ee * Ae), Pt && Rn(h, Pt, Ie.tween)
                        }
                    } else h.isActive && W !== j && Et.restart(!0)
                }).pause()), a && (Rs[a] = h), p = h.trigger = ot(p || u !== !0 && u), Xt = p && p._gsap && p._gsap.stRevert, Xt && (Xt = Xt(h)), u = u === !0 ? p : ot(u), gt(o) && (o = {
                    targets: p,
                    className: o
                }), u && (g === !1 || g === wt || (g = !g && u.parentNode && u.parentNode.style && xt(u.parentNode).display === "flex" ? !1 : Re), h.pin = u, _e = X.core.getCache(u), _e.spacer ? jt = _e.pinState : (v && (v = ot(v), v && !v.nodeType && (v = v.current || v.nativeElement), _e.spacerIsNative = !!v, v && (_e.spacerState = Fi(v))), _e.spacer = He = v || me.createElement("div"), He.classList.add("pin-spacer"), a && He.classList.add("pin-spacer-" + a), _e.pinState = jt = Fi(u)), t.force3D !== !1 && X.set(u, {
                    force3D: !0
                }), h.spacer = He = _e.spacer, Mn = xt(u), Wn = Mn[g + b.os2], Te = X.getProperty(u), kt = X.quickSetter(u, b.a, Be), vs(u, He, Mn), un = Fi(u)), E) {
                zt = mn(E) ? _r(E, Ar) : Ar, A = ji("scroller-start", a, k, b, zt, 0), ft = ji("scroller-end", a, k, b, zt, 0, A), Qt = A["offset" + b.op.d2];
                var Zn = ot(ln(k, "content") || k);
                rt = this.markerStart = ji("start", a, Zn, b, zt, Qt, 0, C), dt = this.markerEnd = ji("end", a, Zn, b, zt, Qt, 0, C), C && (Pn = X.quickSetter([rt, dt], b.a, Be)), !U && !(qt.length && ln(k, "fixedMarkers") === !0) && (Sa(T ? ge : k), X.set([A, ft], {
                    force3D: !0
                }), Ti = X.quickSetter(A, b.a, Be), En = X.quickSetter(ft, b.a, Be))
            }
            if (C) {
                var ie = C.vars.onUpdate,
                    Q = C.vars.onUpdateParams;
                C.eventCallback("onUpdate", function() {
                    h.update(0, 0, 1), ie && ie.apply(C, Q || [])
                })
            }
            if (h.previous = function() {
                    return oe[oe.indexOf(h) - 1]
                }, h.next = function() {
                    return oe[oe.indexOf(h) + 1]
                }, h.revert = function(j, te) {
                    if (!te) return h.kill(!0);
                    var Y = j !== !1 || !h.enabled,
                        ne = Je;
                    Y !== h.isReverted && (Y && (Mt = Math.max(ue(), h.scroll.rec || 0), ee = h.progress, pn = n && n.progress()), rt && [rt, dt, A, ft].forEach(function(qe) {
                        return qe.style.display = Y ? "none" : "block"
                    }), Y && (Je = h, h.update(Y)), u && (!_ || !h.isActive) && (Y ? Pa(u, He, jt) : vs(u, He, xt(u), Pe)), Y || h.update(Y), Je = ne, h.isReverted = Y)
                }, h.refresh = function(j, te, Y, ne) {
                    if (!((Je || !h.enabled) && !te)) {
                        if (u && j && _t) {
                            je(s, "scrollEnd", xo);
                            return
                        }!it && y && y(h), Je = h, Ie.tween && !Y && (Ie.tween.kill(), Ie.tween = 0), ce && ce.pause(), x && n && (n.revert({
                            kill: !1
                        }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function($t) {
                            return $t.vars.immediateRender && $t.render(0, !0, !0)
                        }) : n.vars.immediateRender && n.render(0, !0, !0)), h.isReverted || h.revert(!0, !0), h._subPinOffset = !1;
                        var qe = I(),
                            fe = z(),
                            Ee = C ? C.duration() : Ht(k, b),
                            Ze = Ae <= .01 || !Ae,
                            Se = 0,
                            we = ne || 0,
                            ye = mn(Y) ? Y.end : t.end,
                            Pt = t.endTrigger || p,
                            xe = mn(Y) ? Y.start : t.start || (t.start === 0 || !p ? 0 : u ? "0 0" : "0 100%"),
                            pt = h.pinnedContainer = t.pinnedContainer && ot(t.pinnedContainer, h),
                            Lt = p && Math.max(0, oe.indexOf(h)) || 0,
                            Fe = Lt,
                            Ve, Ge, hn, Ei, Ye, Oe, Ot, cs, Ys, Gn, Bt, Yn, Mi;
                        for (E && mn(Y) && (Yn = X.getProperty(A, b.p), Mi = X.getProperty(ft, b.p)); Fe-- > 0;) Oe = oe[Fe], Oe.end || Oe.refresh(0, 1) || (Je = h), Ot = Oe.pin, Ot && (Ot === p || Ot === u || Ot === pt) && !Oe.isReverted && (Gn || (Gn = []), Gn.unshift(Oe), Oe.revert(!0, !0)), Oe !== oe[Fe] && (Lt--, Fe--);
                        for (Ke(xe) && (xe = xe(h)), xe = br(xe, "start", h), de = Er(xe, p, qe, b, ue(), rt, A, h, fe, N, U, Ee, C, h._startClamp && "_startClamp") || (u ? -.001 : 0), Ke(ye) && (ye = ye(h)), gt(ye) && !ye.indexOf("+=") && (~ye.indexOf(" ") ? ye = (gt(xe) ? xe.split(" ")[0] : "") + ye : (Se = Wi(ye.substr(2), qe), ye = gt(xe) ? xe : (C ? X.utils.mapRange(0, C.duration(), C.scrollTrigger.start, C.scrollTrigger.end, de) : de) + Se, Pt = p)), ye = br(ye, "end", h), Ce = Math.max(de, Er(ye || (Pt ? "100% 0" : Ee), Pt, qe, b, ue() + Se, dt, ft, h, fe, N, U, Ee, C, h._endClamp && "_endClamp")) || -.001, Se = 0, Fe = Lt; Fe--;) Oe = oe[Fe] || {}, Ot = Oe.pin, Ot && Oe.start - Oe._pinPush <= de && !C && Oe.end > 0 && (Ve = Oe.end - (h._startClamp ? Math.max(0, Oe.start) : Oe.start), (Ot === p && Oe.start - Oe._pinPush < de || Ot === pt) && isNaN(xe) && (Se += Ve * (1 - Oe.progress)), Ot === u && (we += Ve));
                        if (de += Se, Ce += Se, h._startClamp && (h._startClamp += Se), h._endClamp && !it && (h._endClamp = Ce || -.001, Ce = Math.min(Ce, Ht(k, b))), Ae = Ce - de || (de -= .01) && .001, Ze && (ee = X.utils.clamp(0, 1, X.utils.normalize(de, Ce, Mt))), h._pinPush = we, rt && Se && (Ve = {}, Ve[b.a] = "+=" + Se, pt && (Ve[b.p] = "-=" + ue()), X.set([rt, dt], Ve)), u && !(Ps && h.end >= Ht(k, b))) Ve = xt(u), Ei = b === De, hn = ue(), Ct = parseFloat(Te(b.a)) + we, !Ee && Ce > 1 && (Bt = (T ? me.scrollingElement || vt : k).style, Bt = {
                            style: Bt,
                            value: Bt["overflow" + b.a.toUpperCase()]
                        }, T && xt(ge)["overflow" + b.a.toUpperCase()] !== "scroll" && (Bt.style["overflow" + b.a.toUpperCase()] = "scroll")), vs(u, He, Ve), un = Fi(u), Ge = Wt(u, !0), cs = U && an(k, Ei ? st : De)(), g ? (Pe = [g + b.os2, Ae + we + Be], Pe.t = He, Fe = g === Re ? ss(u, b) + Ae + we : 0, Fe && (Pe.push(b.d, Fe + Be), He.style.flexBasis !== "auto" && (He.style.flexBasis = Fe + Be)), Fn(Pe), pt && oe.forEach(function($t) {
                            $t.pin === pt && $t.vars.pinSpacing !== !1 && ($t._subPinOffset = !0)
                        }), U && ue(Mt)) : (Fe = ss(u, b), Fe && He.style.flexBasis !== "auto" && (He.style.flexBasis = Fe + Be)), U && (Ye = {
                            top: Ge.top + (Ei ? hn - de : cs) + Be,
                            left: Ge.left + (Ei ? cs : hn - de) + Be,
                            boxSizing: "border-box",
                            position: "fixed"
                        }, Ye[bn] = Ye["max" + Xn] = Math.ceil(Ge.width) + Be, Ye[Cn] = Ye["max" + Ws] = Math.ceil(Ge.height) + Be, Ye[wt] = Ye[wt + yi] = Ye[wt + mi] = Ye[wt + bi] = Ye[wt + vi] = "0", Ye[Re] = Ve[Re], Ye[Re + yi] = Ve[Re + yi], Ye[Re + mi] = Ve[Re + mi], Ye[Re + bi] = Ve[Re + bi], Ye[Re + vi] = Ve[Re + vi], Jt = Ia(jt, Ye, _), it && ue(0)), n ? (Ys = n._initted, ps(1), n.render(n.duration(), !0, !0), Ft = Te(b.a) - Ct + Ae + we, Vt = Math.abs(Ae - Ft) > 1, U && Vt && Jt.splice(Jt.length - 2, 2), n.render(0, !0, !0), Ys || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), ps(0)) : Ft = Ae, Bt && (Bt.value ? Bt.style["overflow" + b.a.toUpperCase()] = Bt.value : Bt.style.removeProperty("overflow-" + b.a));
                        else if (p && ue() && !C)
                            for (Ge = p.parentNode; Ge && Ge !== ge;) Ge._pinOffset && (de -= Ge._pinOffset, Ce -= Ge._pinOffset), Ge = Ge.parentNode;
                        Gn && Gn.forEach(function($t) {
                            return $t.revert(!1, !0)
                        }), h.start = de, h.end = Ce, Le = Ne = it ? Mt : ue(), !C && !it && (Le < Mt && ue(Mt), h.scroll.rec = 0), h.revert(!1, !0), Z = Qe(), Et && (W = -1, Et.restart(!0)), Je = 0, n && L && (n._initted || pn) && n.progress() !== pn && n.progress(pn || 0, !0).render(n.time(), !0, !0), (Ze || ee !== h.progress || C || x || n && !n._initted) && (n && !L && (n._initted || ee || n.vars.immediateRender !== !1) && n.totalProgress(C && de < -.001 && !ee ? X.utils.normalize(de, Ce, 0) : ee, !0), h.progress = Ze || (Le - de) / Ae === ee ? 0 : ee), u && g && (He._pinOffset = Math.round(h.progress * Ft)), ce && ce.invalidate(), isNaN(Yn) || (Yn -= X.getProperty(A, b.p), Mi -= X.getProperty(ft, b.p), Vi(A, b, Yn), Vi(rt, b, Yn - (ne || 0)), Vi(ft, b, Mi), Vi(dt, b, Mi - (ne || 0))), Ze && !it && h.update(), f && !it && !Yt && (Yt = !0, f(h), Yt = !1)
                    }
                }, h.getVelocity = function() {
                    return (ue() - Ne) / (Qe() - oi) * 1e3 || 0
                }, h.endAnimation = function() {
                    ni(h.callbackAnimation), n && (ce ? ce.progress(1) : n.paused() ? L || ni(n, h.direction < 0, 1) : ni(n, n.reversed()))
                }, h.labelToScroll = function(j) {
                    return n && n.labels && (de || h.refresh() || de) + n.labels[j] / n.duration() * Ae || 0
                }, h.getTrailing = function(j) {
                    var te = oe.indexOf(h),
                        Y = h.direction > 0 ? oe.slice(0, te).reverse() : oe.slice(te + 1);
                    return (gt(j) ? Y.filter(function(ne) {
                        return ne.vars.preventOverlaps === j
                    }) : Y).filter(function(ne) {
                        return h.direction > 0 ? ne.end <= de : ne.start >= Ce
                    })
                }, h.update = function(j, te, Y) {
                    if (!(C && !Y && !j)) {
                        var ne = it === !0 ? Mt : h.scroll(),
                            qe = j ? 0 : (ne - de) / Ae,
                            fe = qe < 0 ? 0 : qe > 1 ? 1 : qe || 0,
                            Ee = h.progress,
                            Ze, Se, we, ye, Pt, xe, pt, Lt;
                        if (te && (Ne = Le, Le = C ? ue() : ne, P && (dn = Kt, Kt = n && !L ? n.totalProgress() : fe)), w && u && !Je && !Di && _t && (!fe && de < ne + (ne - Ne) / (Qe() - oi) * w ? fe = 1e-4 : fe === 1 && Ce > ne + (ne - Ne) / (Qe() - oi) * w && (fe = .9999)), fe !== Ee && h.enabled) {
                            if (Ze = h.isActive = !!fe && fe < 1, Se = !!Ee && Ee < 1, xe = Ze !== Se, Pt = xe || !!fe != !!Ee, h.direction = fe > Ee ? 1 : -1, h.progress = fe, Pt && !Je && (we = fe && !Ee ? 0 : fe === 1 ? 1 : Ee === 1 ? 2 : 3, L && (ye = !xe && D[we + 1] !== "none" && D[we + 1] || D[we], Lt = n && (ye === "complete" || ye === "reset" || ye in n))), B && (xe || Lt) && (Lt || c || !n) && (Ke(B) ? B(h) : h.getTrailing(B).forEach(function(hn) {
                                    return hn.endAnimation()
                                })), L || (ce && !Je && !Di ? (ce._dp._time - ce._start !== ce._time && ce.render(ce._dp._time - ce._start), ce.resetTo ? ce.resetTo("totalProgress", fe, n._tTime / n._tDur) : (ce.vars.totalProgress = fe, ce.invalidate().restart())) : n && n.totalProgress(fe, !!(Je && (Z || j)))), u) {
                                if (j && g && (He.style[g + b.os2] = Wn), !U) kt(ai(Ct + Ft * fe));
                                else if (Pt) {
                                    if (pt = !j && fe > Ee && Ce + 1 > ne && ne + 1 >= Ht(k, b), _)
                                        if (!j && (Ze || pt)) {
                                            var Fe = Wt(u, !0),
                                                Ve = ne - de;
                                            Mr(u, ge, Fe.top + (b === De ? Ve : 0) + Be, Fe.left + (b === De ? 0 : Ve) + Be)
                                        } else Mr(u, He);
                                    Fn(Ze || pt ? Jt : un), Vt && fe < 1 && Ze || kt(Ct + (fe === 1 && !pt ? Ft : 0))
                                }
                            }
                            P && !Ie.tween && !Je && !Di && Et.restart(!0), o && (xe || R && fe && (fe < 1 || !hs)) && wi(o.targets).forEach(function(hn) {
                                return hn.classList[Ze || R ? "add" : "remove"](o.className)
                            }), l && !L && !j && l(h), Pt && !Je ? (L && (Lt && (ye === "complete" ? n.pause().totalProgress(1) : ye === "reset" ? n.restart(!0).pause() : ye === "restart" ? n.restart(!0) : n[ye]()), l && l(h)), (xe || !hs) && (d && xe && Rn(h, d), J[we] && Rn(h, J[we]), R && (fe === 1 ? h.kill(!1, 1) : J[we] = 0), xe || (we = fe === 1 ? 1 : 3, J[we] && Rn(h, J[we]))), M && !Ze && Math.abs(h.getVelocity()) > (ci(M) ? M : 2500) && (ni(h.callbackAnimation), ce ? ce.progress(1) : ni(n, ye === "reverse" ? 1 : !fe, 1))) : L && l && !Je && l(h)
                        }
                        if (En) {
                            var Ge = C ? ne / C.duration() * (C._caScrollDist || 0) : ne;
                            Ti(Ge + (A._isFlipped ? 1 : 0)), En(Ge)
                        }
                        Pn && Pn(-ne / C.duration() * (C._caScrollDist || 0))
                    }
                }, h.enable = function(j, te) {
                    h.enabled || (h.enabled = !0, je(k, "resize", ui), T || je(k, "scroll", Ln), y && je(s, "refreshInit", y), j !== !1 && (h.progress = ee = 0, Le = Ne = W = ue()), te !== !1 && h.refresh())
                }, h.getTween = function(j) {
                    return j && Ie ? Ie.tween : ce
                }, h.setPositions = function(j, te, Y, ne) {
                    if (C) {
                        var qe = C.scrollTrigger,
                            fe = C.duration(),
                            Ee = qe.end - qe.start;
                        j = qe.start + Ee * j / fe, te = qe.start + Ee * te / fe
                    }
                    h.refresh(!1, !1, {
                        start: Cr(j, Y && !!h._startClamp),
                        end: Cr(te, Y && !!h._endClamp)
                    }, ne), h.update()
                }, h.adjustPinSpacing = function(j) {
                    if (Pe && j) {
                        var te = Pe.indexOf(b.d) + 1;
                        Pe[te] = parseFloat(Pe[te]) + j + Be, Pe[1] = parseFloat(Pe[1]) + j + Be, Fn(Pe)
                    }
                }, h.disable = function(j, te) {
                    if (j !== !1 && h.revert(!0, !0), h.enabled && (h.enabled = h.isActive = !1, te || ce && ce.pause(), Mt = 0, _e && (_e.uncache = 1), y && ze(s, "refreshInit", y), Et && (Et.pause(), Ie.tween && Ie.tween.kill() && (Ie.tween = 0)), !T)) {
                        for (var Y = oe.length; Y--;)
                            if (oe[Y].scroller === k && oe[Y] !== h) return;
                        ze(k, "resize", ui), T || ze(k, "scroll", Ln)
                    }
                }, h.kill = function(j, te) {
                    h.disable(j, te), ce && !te && ce.kill(), a && delete Rs[a];
                    var Y = oe.indexOf(h);
                    Y >= 0 && oe.splice(Y, 1), Y === nt && Gi > 0 && nt--, Y = 0, oe.forEach(function(ne) {
                        return ne.scroller === h.scroller && (Y = 1)
                    }), Y || it || (h.scroll.rec = 0), n && (n.scrollTrigger = null, j && n.revert({
                        kill: !1
                    }), te || n.kill()), rt && [rt, dt, A, ft].forEach(function(ne) {
                        return ne.parentNode && ne.parentNode.removeChild(ne)
                    }), Ci === h && (Ci = 0), u && (_e && (_e.uncache = 1), Y = 0, oe.forEach(function(ne) {
                        return ne.pin === u && Y++
                    }), Y || (_e.spacer = 0)), t.onKill && t.onKill(h)
                }, oe.push(h), h.enable(!1, !1), Xt && Xt(h), n && n.add && !Ae) {
                var he = h.update;
                h.update = function() {
                    h.update = he, ae.cache++, de || Ce || h.refresh()
                }, X.delayedCall(.01, h.update), Ae = .01, de = Ce = 0
            } else h.refresh();
            u && Ma()
        }, s.register = function(t) {
            return Bn || (X = t || mo(), go() && window.document && s.enable(), Bn = li), Bn
        }, s.defaults = function(t) {
            if (t)
                for (var n in t) zi[n] = t[n];
            return zi
        }, s.disable = function(t, n) {
            li = 0, oe.forEach(function(l) {
                return l[n ? "kill" : "disable"](t)
            }), ze(le, "wheel", Ln), ze(me, "scroll", Ln), clearInterval(Bi), ze(me, "touchcancel", Nt), ze(ge, "touchstart", Nt), Hi(ze, me, "pointerdown,touchstart,mousedown", wr), Hi(ze, me, "pointerup,touchend,mouseup", xr), is.kill(), Ni(ze);
            for (var r = 0; r < ae.length; r += 3) qi(ze, ae[r], ae[r + 1]), qi(ze, ae[r], ae[r + 2])
        }, s.enable = function() {
            if (le = window, me = document, vt = me.documentElement, ge = me.body, X) {
                if (wi = X.utils.toArray, hi = X.utils.clamp, Ms = X.core.context || Nt, ps = X.core.suppressOverwrites || Nt, Fs = le.history.scrollRestoration || "auto", Is = le.pageYOffset || 0, X.core.globals("ScrollTrigger", s), ge) {
                    li = 1, jn = document.createElement("div"), jn.style.height = "100vh", jn.style.position = "absolute", ko(), xa(), Me.register(X), s.isTouch = Me.isTouch, tn = Me.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Es = Me.isTouch === 1, je(le, "wheel", Ln), js = [le, me, vt, ge], X.matchMedia ? (s.matchMedia = function(f) {
                        var c = X.matchMedia(),
                            p;
                        for (p in f) c.add(p, f[p]);
                        return c
                    }, X.addEventListener("matchMediaInit", function() {
                        Ao(), Gs()
                    }), X.addEventListener("matchMediaRevert", function() {
                        return _o()
                    }), X.addEventListener("matchMedia", function() {
                        yn(0, 1), kn("matchMedia")
                    }), X.matchMedia().add("(orientation: portrait)", function() {
                        return ms(), ms
                    })) : console.warn("Requires GSAP 3.11.0 or later"), ms(), je(me, "scroll", Ln);
                    var t = ge.hasAttribute("style"),
                        n = ge.style,
                        r = n.borderTopStyle,
                        l = X.core.Animation.prototype,
                        o, a;
                    for (l.revert || Object.defineProperty(l, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }), n.borderTopStyle = "solid", o = Wt(ge), De.m = Math.round(o.top + De.sc()) || 0, st.m = Math.round(o.left + st.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (ge.setAttribute("style", ""), ge.removeAttribute("style")), Bi = setInterval(Sr, 250), X.delayedCall(.5, function() {
                            return Di = 0
                        }), je(me, "touchcancel", Nt), je(ge, "touchstart", Nt), Hi(je, me, "pointerdown,touchstart,mousedown", wr), Hi(je, me, "pointerup,touchend,mouseup", xr), Ts = X.utils.checkPrefix("transform"), Yi.push(Ts), Bn = Qe(), is = X.delayedCall(.2, yn).pause(), Dn = [me, "visibilitychange", function() {
                            var f = le.innerWidth,
                                c = le.innerHeight;
                            me.hidden ? (vr = f, yr = c) : (vr !== f || yr !== c) && ui()
                        }, me, "DOMContentLoaded", yn, le, "load", yn, le, "resize", ui], Ni(je), oe.forEach(function(f) {
                            return f.enable(0, 1)
                        }), a = 0; a < ae.length; a += 3) qi(ze, ae[a], ae[a + 1]), qi(ze, ae[a], ae[a + 2])
                } else if (me) {
                    var d = function f() {
                        s.enable(), me.removeEventListener("DOMContentLoaded", f)
                    };
                    me.addEventListener("DOMContentLoaded", d)
                }
            }
        }, s.config = function(t) {
            "limitCallbacks" in t && (hs = !!t.limitCallbacks);
            var n = t.syncInterval;
            n && clearInterval(Bi) || (Bi = n) && setInterval(Sr, n), "ignoreMobileResize" in t && (Es = s.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ni(ze) || Ni(je, t.autoRefreshEvents || "none"), fo = (t.autoRefreshEvents + "").indexOf("resize") === -1)
        }, s.scrollerProxy = function(t, n) {
            var r = ot(t),
                l = ae.indexOf(r),
                o = An(r);
            ~l && ae.splice(l, o ? 6 : 2), n && (o ? qt.unshift(le, n, ge, n, vt, n) : qt.unshift(r, n))
        }, s.clearMatchMedia = function(t) {
            oe.forEach(function(n) {
                return n._ctx && n._ctx.query === t && n._ctx.kill(!0, !0)
            })
        }, s.isInViewport = function(t, n, r) {
            var l = (gt(t) ? ot(t) : t).getBoundingClientRect(),
                o = l[r ? bn : Cn] * n || 0;
            return r ? l.right - o > 0 && l.left + o < le.innerWidth : l.bottom - o > 0 && l.top + o < le.innerHeight
        }, s.positionInViewport = function(t, n, r) {
            gt(t) && (t = ot(t));
            var l = t.getBoundingClientRect(),
                o = l[r ? bn : Cn],
                a = n == null ? o / 2 : n in rs ? rs[n] * o : ~n.indexOf("%") ? parseFloat(n) * o / 100 : parseFloat(n) || 0;
            return r ? (l.left + a) / le.innerWidth : (l.top + a) / le.innerHeight
        }, s.killAll = function(t) {
            if (oe.slice(0).forEach(function(r) {
                    return r.vars.id !== "ScrollSmoother" && r.kill()
                }), t !== !0) {
                var n = Sn.killAll || [];
                Sn = {}, n.forEach(function(r) {
                    return r()
                })
            }
        }, s
    })();
re.version = "3.15.0";
re.saveStyles = function(s) {
    return s ? wi(s).forEach(function(e) {
        if (e && e.style) {
            var i = ht.indexOf(e);
            i >= 0 && ht.splice(i, 5), ht.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), X.core.getCache(e), Ms())
        }
    }) : ht
};
re.revert = function(s, e) {
    return Gs(!s, e)
};
re.create = function(s, e) {
    return new re(s, e)
};
re.refresh = function(s) {
    return s ? ui(!0) : (Bn || re.register()) && yn(!0)
};
re.update = function(s) {
    return ++ae.cache && Gt(s === !0 ? 2 : 0)
};
re.clearScrollMemory = So;
re.maxScroll = function(s, e) {
    return Ht(s, e ? st : De)
};
re.getScrollFunc = function(s, e) {
    return an(ot(s), e ? st : De)
};
re.getById = function(s) {
    return Rs[s]
};
re.getAll = function() {
    return oe.filter(function(s) {
        return s.vars.id !== "ScrollSmoother"
    })
};
re.isScrolling = function() {
    return !!_t
};
re.snapDirectional = Zs;
re.addEventListener = function(s, e) {
    var i = Sn[s] || (Sn[s] = []);
    ~i.indexOf(e) || i.push(e)
};
re.removeEventListener = function(s, e) {
    var i = Sn[s],
        t = i && i.indexOf(e);
    t >= 0 && i.splice(t, 1)
};
re.batch = function(s, e) {
    var i = [],
        t = {},
        n = e.interval || .016,
        r = e.batchMax || 1e9,
        l = function(d, f) {
            var c = [],
                p = [],
                u = X.delayedCall(n, function() {
                    f(c, p), c = [], p = []
                }).pause();
            return function(g) {
                c.length || u.restart(!0), c.push(g.trigger), p.push(g), r <= c.length && u.progress(1)
            }
        },
        o;
    for (o in e) t[o] = o.substr(0, 2) === "on" && Ke(e[o]) && o !== "onRefreshInit" ? l(o, e[o]) : e[o];
    return Ke(r) && (r = r(), je(re, "refresh", function() {
        return r = e.batchMax()
    })), wi(s).forEach(function(a) {
        var d = {};
        for (o in t) d[o] = t[o];
        d.trigger = a, i.push(re.create(d))
    }), i
};
var Rr = function(e, i, t, n) {
        return i > n ? e(n) : i < 0 && e(0), t > n ? (n - i) / (t - i) : t < 0 ? i / (i - t) : 1
    },
    ys = function s(e, i) {
        i === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Me.isTouch ? " pinch-zoom" : "") : "none", e === vt && s(ge, i)
    },
    Xi = {
        auto: 1,
        scroll: 1
    },
    Oa = function(e) {
        var i = e.event,
            t = e.target,
            n = e.axis,
            r = (i.changedTouches ? i.changedTouches[0] : i).target,
            l = r._gsap || X.core.getCache(r),
            o = Qe(),
            a;
        if (!l._isScrollT || o - l._isScrollT > 2e3) {
            for (; r && r !== ge && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !(Xi[(a = xt(r)).overflowY] || Xi[a.overflowX]));) r = r.parentNode;
            l._isScroll = r && r !== t && !An(r) && (Xi[(a = xt(r)).overflowY] || Xi[a.overflowX]), l._isScrollT = o
        }(l._isScroll || n === "x") && (i.stopPropagation(), i._gsapAllow = !0)
    },
    Eo = function(e, i, t, n) {
        return Me.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: i,
            onWheel: n = n && Oa,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
                return t && je(me, Me.eventTypes[0], Lr, !1, !0)
            },
            onDisable: function() {
                return ze(me, Me.eventTypes[0], Lr, !0)
            }
        })
    },
    Ba = /(input|label|select|textarea)/i,
    Ir, Lr = function(e) {
        var i = Ba.test(e.target.tagName);
        (i || Ir) && (e._gsapAllow = !0, Ir = i)
    },
    Da = function(e) {
        mn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var i = e,
            t = i.normalizeScrollX,
            n = i.momentum,
            r = i.allowNestedScroll,
            l = i.onRelease,
            o, a, d = ot(e.target) || vt,
            f = X.core.globals().ScrollSmoother,
            c = f && f.get(),
            p = tn && (e.content && ot(e.content) || c && e.content !== !1 && !c.smooth() && c.content()),
            u = an(d, De),
            g = an(d, st),
            x = 1,
            w = (Me.isTouch && le.visualViewport ? le.visualViewport.scale * le.visualViewport.width : le.outerWidth) / le.innerWidth,
            m = 0,
            S = Ke(n) ? function() {
                return n(o)
            } : function() {
                return n || 2.8
            },
            R, P, _ = Eo(d, e.type, !0, r),
            v = function() {
                return P = !1
            },
            C = Nt,
            M = Nt,
            B = function() {
                a = Ht(d, De), M = hi(tn ? 1 : 0, a), t && (C = hi(0, Ht(d, st))), R = wn
            },
            b = function() {
                p._gsap.y = ai(parseFloat(p._gsap.y) + u.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", u.offset = u.cacheID = 0
            },
            L = function() {
                if (P) {
                    requestAnimationFrame(v);
                    var E = ai(o.deltaY / 2),
                        N = M(u.v - E);
                    if (p && N !== u.v + u.offset) {
                        u.offset = N - u.v;
                        var h = ai((parseFloat(p && p._gsap.y) || 0) - u.offset);
                        p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + h + ", 0, 1)", p._gsap.y = h + "px", u.cacheID = ae.cache, Gt()
                    }
                    return !0
                }
                u.offset && b(), P = !0
            },
            k, H, T, U, J = function() {
                B(), k.isActive() && k.vars.scrollY > a && (u() > a ? k.progress(1) && u(a) : k.resetTo("scrollY", a))
            };
        return p && X.set(p, {
            y: "+=0"
        }), e.ignoreCheck = function(D) {
            return tn && D.type === "touchmove" && L() || x > 1.05 && D.type !== "touchstart" || o.isGesturing || D.touches && D.touches.length > 1
        }, e.onPress = function() {
            P = !1;
            var D = x;
            x = ai((le.visualViewport && le.visualViewport.scale || 1) / w), k.pause(), D !== x && ys(d, x > 1.01 ? !0 : t ? !1 : "x"), H = g(), T = u(), B(), R = wn
        }, e.onRelease = e.onGestureStart = function(D, E) {
            if (u.offset && b(), !E) U.restart(!0);
            else {
                ae.cache++;
                var N = S(),
                    h, y;
                t && (h = g(), y = h + N * .05 * -D.velocityX / .227, N *= Rr(g, h, y, Ht(d, st)), k.vars.scrollX = C(y)), h = u(), y = h + N * .05 * -D.velocityY / .227, N *= Rr(u, h, y, Ht(d, De)), k.vars.scrollY = M(y), k.invalidate().duration(N).play(.01), (tn && k.vars.scrollY >= a || h >= a - 1) && X.to({}, {
                    onUpdate: J,
                    duration: N
                })
            }
            l && l(D)
        }, e.onWheel = function() {
            k._ts && k.pause(), Qe() - m > 1e3 && (R = 0, m = Qe())
        }, e.onChange = function(D, E, N, h, y) {
            if (wn !== R && B(), E && t && g(C(h[2] === E ? H + (D.startX - D.x) : g() + E - h[1])), N) {
                u.offset && b();
                var I = y[2] === N,
                    z = I ? T + D.startY - D.y : u() + N - y[1],
                    W = M(z);
                I && z !== W && (T += W - z), u(W)
            }(N || E) && Gt()
        }, e.onEnable = function() {
            ys(d, t ? !1 : "x"), re.addEventListener("refresh", J), je(le, "resize", J), u.smooth && (u.target.style.scrollBehavior = "auto", u.smooth = g.smooth = !1), _.enable()
        }, e.onDisable = function() {
            ys(d, !0), ze(le, "resize", J), re.removeEventListener("refresh", J), _.kill()
        }, e.lockAxis = e.lockAxis !== !1, o = new Me(e), o.iOS = tn, tn && !u() && u(1), tn && X.ticker.add(Nt), U = o._dc, k = X.to(o, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: To(u, u(), function() {
                    return k.pause()
                })
            },
            onUpdate: Gt,
            onComplete: U.vars.onComplete
        }), o
    };
re.sort = function(s) {
    if (Ke(s)) return oe.sort(s);
    var e = le.pageYOffset || 0;
    return re.getAll().forEach(function(i) {
        return i._sortY = i.trigger ? e + i.trigger.getBoundingClientRect().top : i.start + le.innerHeight
    }), oe.sort(s || function(i, t) {
        return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
    })
};
re.observe = function(s) {
    return new Me(s)
};
re.normalizeScroll = function(s) {
    if (typeof s > "u") return tt;
    if (s === !0 && tt) return tt.enable();
    if (s === !1) {
        tt && tt.kill(), tt = s;
        return
    }
    var e = s instanceof Me ? s : Da(s);
    return tt && tt.target === e.target && tt.kill(), An(e.target) && (tt = e), e
};
re.core = {
    _getVelocityProp: ks,
    _inputObserver: Eo,
    _scrollers: ae,
    _proxies: qt,
    bridge: {
        ss: function() {
            _t || kn("scrollStart"), _t = Qe()
        },
        ref: function() {
            return Je
        }
    }
};
mo() && X.registerPlugin(re);
const Na = {
        ref: "fluid",
        class: "s__fluid"
    },
    Ha = {
        ref: "container",
        class: "u-container"
    },
    qa = {
        key: 0,
        class: "s__awards t-l-lg"
    },
    za = {
        class: "u-height-fix"
    },
    ja = {
        class: "s__text t-t-lg"
    },
    Fa = {
        key: 1,
        class: "s__clients"
    },
    Va = {
        key: 0,
        class: "s__clients-label t-l-md"
    },
    Xa = {
        key: 1,
        class: "s__logos"
    },
    Ua = ["src", "alt"],
    Wa = {
        __name: "SHero",
        props: {
            awards: {
                type: Array,
                default: () => []
            },
            awardsShort: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            clients: {
                type: Object,
                default: () => ({})
            }
        },
        setup(s) {
            G.registerPlugin(re);
            const e = {
                    el: K("el"),
                    fluid: K("fluid"),
                    container: K("container"),
                    title: K("heroTitle")
                },
                i = Xe(0),
                t = Xe(!1),
                r = Object.fromEntries(Object.entries(Object.assign({
                    "../assets/images/clients/chanel.svg": ua,
                    "../assets/images/clients/dummy-1.svg": da,
                    "../assets/images/clients/dummy-2.svg": fa,
                    "../assets/images/clients/dummy-3.svg": pa,
                    "../assets/images/clients/dummy-4.svg": ha,
                    "../assets/images/clients/nespresso.svg": ga,
                    "../assets/images/clients/tissot.svg": ma,
                    "../assets/images/clients/vanguart.svg": va
                })).map(([p, u]) => [p.split("/").pop(), u])),
                l = Ue(() => (Array.isArray(o.clients ? .logos) ? o.clients.logos : []).map(u => {
                    const g = `${u.logo||""}`.split("/").pop();
                    return { ...u,
                        logo: r[g] || u.logo
                    }
                })),
                o = s;
            let a = null;
            bt(() => {
                f(), se.on("resize", d)
            }), ut(() => {
                a ? .kill(), se.off("resize", d)
            });
            async function d() {
                a ? .kill(), a = null, await ct(), f()
            }

            function f() {
                e.el.value && (a = G.timeline({
                    scrollTrigger: {
                        trigger: e.el.value,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0
                    }
                }), a.fromTo(e.container.value, {
                    y: 0
                }, {
                    y: window.safeHeight * .5,
                    duration: 1,
                    ease: "none"
                }, 0), a.fromTo(e.fluid.value, {
                    y: 0
                }, {
                    y: window.safeHeight * .5,
                    duration: 1,
                    ease: "none",
                    onUpdate() {
                        i.value = G.getProperty(e.fluid.value, "y")
                    }
                }, 0))
            }

            function c() {
                ct(() => {
                    t.value = !0
                })
            }
            return (p, u) => {
                const g = Zr;
                return q(), V("section", {
                    ref: "el",
                    class: cn(["s-hero", {
                        "is-fluid-ready": F(t)
                    }])
                }, [O("div", Na, [ke(g, {
                    "mask-el": e.title,
                    "container-y": F(i),
                    onReady: c
                }, null, 8, ["mask-el", "container-y"])], 512), O("div", Ha, [s.awards.length ? (q(), V("ul", qa, [(q(!0), V(At, null, St(s.awards, x => (q(), V("li", {
                    key: x,
                    class: "s__award"
                }, [O("span", za, $(x), 1)]))), 128))])) : ve("", !0), O("h1", {
                    ref: "heroTitle",
                    class: "s__title t-h-3xl"
                }, $(s.title), 513), O("p", ja, $(s.text), 1), s.clients ? .label || F(l).length ? (q(), V("div", Fa, [s.clients ? .label ? (q(), V("p", Va, $(s.clients ? .label), 1)) : ve("", !0), F(l).length ? (q(), V("ul", Xa, [(q(!0), V(At, null, St(F(l), x => (q(), V("li", {
                    key: x.name,
                    class: "s__logo-item"
                }, [O("img", {
                    class: "s__logo",
                    src: x.logo,
                    alt: x.name,
                    loading: "lazy"
                }, null, 8, Ua)]))), 128))])) : ve("", !0)])) : ve("", !0)], 512)], 2)
            }
        }
    },
    Za = Tn(Wa, [
        ["__scopeId", "data-v-0540a3bc"]
    ]),
    Ga = {
        class: "s__outer"
    },
    Ya = {
        ref: "header",
        class: "s__header"
    },
    Ja = {
        key: 0,
        class: "s__title t-h-2xl"
    },
    Qa = {
        key: 1,
        class: "s__text t-t-md"
    },
    Ka = {
        class: "s__usps"
    },
    $a = {
        key: 0,
        ref: "list",
        class: "s__list"
    },
    e0 = {
        class: "s__usp-wrapper"
    },
    t0 = {
        __name: "SUsps",
        props: {
            title: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            items: {
                type: Array,
                default: () => []
            }
        },
        setup(s) {
            G.registerPlugin(re);
            const e = {
                el: K("el"),
                list: K("list"),
                cards: K("cards"),
                header: K("header")
            };
            let i = null,
                t = null,
                n = null;
            bt(() => {
                o(), se.on("resize", l)
            }), ut(() => {
                r(i), r(t), r(n), se.off("resize", l)
            });

            function r(a) {
                a && (a.scrollTrigger ? .kill(), a.kill())
            }
            async function l(a) {
                if (!a) return;
                r(i), r(t), r(n), i = null, t = null, n = null;
                const d = e.cards.value ? .map(f => f.$el) ? ? [];
                d.length && G.set(d, {
                    clearProps: "all"
                }), e.header.value && G.set(e.header.value, {
                    clearProps: "all"
                }), await ct(), o(), re.refresh()
            }

            function o() {
                if (!e.el.value) return;
                const a = e.list.value,
                    d = e.cards.value.map(u => u.$el),
                    f = d.length;
                if (i = G.timeline({
                        scrollTrigger: {
                            trigger: e.el.value,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0
                        }
                    }), i.call(() => {
                        i.scrollTrigger.direction === 1 ? sr() : ir()
                    }, null, 1), i.fromTo(e.header.value, {
                        y: window.safeHeight * .25
                    }, {
                        y: 0,
                        ease: "power4.out",
                        duration: 2
                    }, 0), i.fromTo(e.header.value, {
                        scale: 1
                    }, {
                        scale: .85,
                        ease: "none",
                        duration: f
                    }, 1), i.call(() => {}, null, 1 + f), !f || !a) return;
                const c = d[0].clientHeight,
                    p = window.safeHeight * .5 + c;
                G.set(d, {
                    y: p
                }), t = G.timeline({
                    scrollTrigger: {
                        trigger: a,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 0
                    }
                }), d.forEach((u, g) => {
                    t.fromTo(u, {
                        y: p
                    }, {
                        y: 0,
                        ease: "power2.inOut",
                        duration: 1.5
                    }, g), t.fromTo(u, {
                        rotateX: 90,
                        z: 750
                    }, {
                        rotateX: 0,
                        z: 0,
                        ease: "power2.inOut",
                        duration: 1.2
                    }, g);
                    for (let x = 0; x < g; x++) {
                        const w = d[x],
                            m = g - x - 1,
                            S = g - x,
                            R = .125;
                        t.fromTo(w, {
                            scale: 1 - m * R
                        }, {
                            scale: 1 - S * R,
                            ease: "none",
                            duration: 1,
                            immediateRender: !1
                        }, g), t.fromTo(w, {
                            "--fade": m * .1
                        }, {
                            "--fade": S * .1,
                            ease: "none",
                            duration: .5,
                            immediateRender: !1
                        }, g + .75)
                    }
                }), n = G.timeline({
                    scrollTrigger: {
                        trigger: e.el.value,
                        start: "bottom 150%",
                        end: "bottom -100%",
                        scrub: 0
                    }
                }), n.to(e.header.value, {
                    y: window.safeHeight * -.5 - e.header.value.clientHeight * .5,
                    ease: "power2.in",
                    duration: 1.35
                }, 0), n.to(e.header.value, {
                    scale: 0,
                    ease: "power1.in",
                    duration: 1
                }, .25), n.to(d, {
                    y: p * -1,
                    ease: "power1.in",
                    duration: 1,
                    stagger: .075
                }, 0), n.to(e.el.value, {
                    opacity: 0,
                    ease: "power1.in",
                    duration: .75
                }, .15), n.call(() => {
                    n.scrollTrigger.direction === 1 ? ir() : sr()
                }, null, .75)
            }
            return (a, d) => {
                const f = ca;
                return q(), V("section", {
                    ref: "el",
                    class: "s-usps",
                    style: Jr(`--usps-count: ${s.items.length}`)
                }, [O("div", Ga, [O("div", Ya, [s.title ? (q(), V("h2", Ja, $(s.title), 1)) : ve("", !0), s.text ? (q(), V("p", Qa, $(s.text), 1)) : ve("", !0)], 512), O("div", Ka, [s.items.length ? (q(), V("ul", $a, [(q(!0), V(At, null, St(s.items, c => (q(), V("li", {
                    key: c.key,
                    class: "s__item"
                }, [O("span", e0, [ke(f, {
                    ref_for: !0,
                    ref: "cards",
                    "usp-key": c.key,
                    title: c.title,
                    text: c.text,
                    class: "s__usp"
                }, null, 8, ["usp-key", "title", "text"])])]))), 128))], 512)) : ve("", !0)])])], 4)
            }
        }
    },
    n0 = Tn(t0, [
        ["__scopeId", "data-v-8381ea54"]
    ]),
    i0 = "data:image/webp;base64,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",
    s0 = "" + new URL("247-2.C2UmAEU2.webp",
        import.meta.url).href,
    r0 = "data:image/webp;base64,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",
    o0 = "" + new URL("blaed-1.CJVRUMtI.webp",
        import.meta.url).href,
    l0 = "" + new URL("blaed-2.BpeAOZg9.webp",
        import.meta.url).href,
    a0 = "" + new URL("boulder-1.plnMlQpJ.webp",
        import.meta.url).href,
    c0 = "" + new URL("boulder-2.U7YFivXg.webp",
        import.meta.url).href,
    u0 = "" + new URL("boulder-3.Zm_6EGp9.webp",
        import.meta.url).href,
    d0 = "" + new URL("boulder-4.DZJBKrdJ.webp",
        import.meta.url).href,
    f0 = "data:image/webp;base64,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",
    p0 = "data:image/webp;base64,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",
    h0 = "data:image/webp;base64,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",
    g0 = "data:image/webp;base64,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",
    m0 = "" + new URL("generous-1.Do7QLcWl.webp",
        import.meta.url).href,
    v0 = "" + new URL("generous-2.BwaIDl17.webp",
        import.meta.url).href,
    y0 = "data:image/webp;base64,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",
    b0 = "data:image/webp;base64,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",
    C0 = "" + new URL("tissot-1.BR1ENBhD.webp",
        import.meta.url).href,
    w0 = "data:image/webp;base64,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",
    x0 = "" + new URL("tissot-3.DMFB6BFS.webp",
        import.meta.url).href,
    _0 = "data:image/webp;base64,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",
    A0 = "data:image/webp;base64,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",
    S0 = "data:image/webp;base64,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",
    k0 = "" + new URL("vanguart-3.Ir-_Zw-e.webp",
        import.meta.url).href,
    T0 = "" + new URL("vanguart-4.bJOdfEjR.webp",
        import.meta.url).href,
    E0 = "data:image/webp;base64,UklGRloNAABXRUJQVlA4IE4NAAAwPQCdASrIAMgAPm02lkikIyIiJPWJWIANiWdu8SAPW79gAKnSwo5mRaVpi+z4m/VvmP9l8bjKD4pahHr//VeJbtVLN+gL7YfbP+P/avWxmp+F9cCoF/oL0VP+zz/fnf+y/aT3NxerYsEf7MkDVcwF42wp7UbIIZ4LRGbhoJnY7zRdfobKPST+qtNJiujNih9Gw9JRPbXaryvl93nIQxf2014t4DoPwdcz+6GADZT1N7rmsccEx6T0kxyqQmUdvq8BqIkjRyI32U+OifsgPSPasa1DKRwtS5xeNvHU29SyzoSahs+si6h1YFvUkMPUqpKW3a6JnVM+YDStxp3N30ApzjF6j5MkaVePUkaE5jUKSjWMOX/6G0Bx0IhysdWUvc+o3yl1yMCmmbGw7rMyfF0jqOvFgvE20lYLQL0xZcbwXYwd8cGn8lUn8/Af+GMKgiNnsxzCFCffmZvvZCBezTP/fa3cgRP1orinhfx60oyvoBz7x5fRVpTME9jZ+p6nItcso7bXPoqgobnCKl9qo7add5oOgz/w7Z7xyH0F3KmfdMtalI0hF3p6rhfX1f4NX1a7XNhaL1eZrD9x5jfBAI1GSZyF46hl9E67+cRZ1/cgMILjjKVIvJEyJ4AyAPrSvAYTpzxVUdFBknYJmOyDHxtEXVAA/u+zPYL5TpP00+tWM1JJ8wUWrX6pfdTp6sZ5TA/83XhasTW7jaqw4q8dvOxqh3NjEFAn+NxMO1zntrguea8k/QjWDX+uAOIhvgUeKPVbv+UGxhO9ax7bUN6wi649kv7nSue9wn+BwenUkAjqIP/f1mmxzzrvodi7txBI1nEv/JoOx9U7vl6lXBAH8vdA0a/8vYkMbg+Fp97w2RLEplcmqBF2ujmgGIv+Mm/4w3FmhhfFrs+Jxp6w+g3+jSCbD7fLFZO2TTpZiPNZZqOwylOXr8haXpILmA6NdVFeLAfiUOOOQAXhCKdrJG4DJDqE1JYd8f62hcfXY88HXDzEPgCoXQW0iR01xQqnxOmgm57OaJI6iU40YHOg1yGTWipHWJgnMUOSYR6RQJy7HsZ2x5BjzxhuGuovwPH9CP79nK5d82ZFZqhZ1X8TI/zRVDPJeTdDE5XCZEHorsIguMfXbPLs/K9NDgQKom3/FyLbCbBuP0HzLKdfR5/9TVwNwpvXM9BN/HYGgSQDRypfK3EC/VjD/mM/8je+YNPP4NfbQXatGvfLi8HcTjEcE8dvVQjs0tWrhElW5Gp4EuSQtfzs/h/nlb8yapeNX/8NdZyugwInoBasC9cOBPIOdQ7RrqwQzO3BcjslA4fTIQUpPxFKV07KqAxUVxn5wzvqtfaVlP6gKjuz4/ipl3Hf5zVPaNP0wLr9eMugmCyY10w0QnDrFnPaQ4iLFsWUawMOJrxiHrCIDW+/JkLXJ/ZSPpINrckF9//OwHoq/f/ghWIaL6+mSEviFqRxEZ/YK6Iqydms4dQdxV41N2lKAtJ7P7kL86ERKJuSNN+W3hk2fvDf+DXp8lzFdkf2P/0N6P3YlXMK6lOWW6YqgGkz45RkBLNZD/YL5F8vY7jPM2vVdzKHqzVm1/Xzflz1WusJ/7smDrUC5EieXndImdNi7DpPE92SrRw7P1CJHorV0EJO4lbuixew2zGvAXGJZmA9Lyyh/BPOIlgDoWkQlLP/uVLR6LPWuVRZiF/yB/v2vBXGuJg0sftWM010Ki+OwkA6z1C0M0olm8Od8Yu3npowFzHQ09h53UB8wvN7GJoyb8njpgzkUS7wVsfVGu/+I+pycs12//bqI5Ysu6hQRq7dmYFZEodX1AGWf8lHC1Yzz5yudp6G1M/MD3yjXfarKAAItjtvv5aIBeZ1k0hgZFmoJR6kQGkY9Sx4B2PvWFV+Tq8dcnNjZE9yUu7xT+6A9BBsd0Q4M3Mg5gIIyrtQkI+MmjrMa4PdfAqm6kkdqbV6uzqiMwNycD5V4cXk83acBLLXinmzPvAKtoT0XrQmBgFnLedG9stBcT0v3WLAvzWr46mwbH1Y0iWW0SmzQWwu39XSuQHYWsfQ2WOGCkb4/5hko5j1th0DWKfGfCnrowTRU1MoDI9KzLdT5Mdf2y63nZpLoSkrYwka/YlxzvY8C3ViJBmJOeT5wTZEWMBcqtDq1aUaB0cCZcYrmeSWvWs3ZHzZnatieJ9fUqJjslRKIUhz9vYhKiZJR4kF48xOmF4JQ01vL9jcWYnggjixYu235aeHqRThd3AyiT0kBmzDSXQ22joyt709FxIGC/HJG49n10BdK2LfYcAaFgKCQkVumM3rICVe+gNWF+TtF5SssDl0wJbtyCjnS6uQmp7X7S7wve+yfBfsTueMgvGdWHFIFcSJQNT/g52x0EQ8wl2pbSYxrvkmDMyUO0Opbflo5uiNqB6/wEzl1CCKQpGKdZz8JTsS8CLKALvrw95jBWX6WDVdCrPzL4k3XkLcs8Ve46VdaAF0qUJARUVwnIOsbbWBlT6eW5yXbr9bZMDDKbT3EVoMcwPwyGRp6EltMwkKA110BCt5Mq+9eps/iZm34qiEg3LY2EyxIZeElEuNP1QMHMRw3f5fHWMKuDtutq1G/L3KyDO6o1w6n6YU7Efjk+pd7JaEpgByUSjTJKuE6d3rTfPij0ISHKEbLsx/IPF5Xm/bfgTdD367AG0+H0OWVsLnqfztE7W4FzI0rdtt1I3s/8a25os1MhxvFGQROAuNh3FUbKGdiqYM/vDhlDeXQpvlnojz7mAD/oGZSNxaecIGJiwJXqDJ+SsKVxN/499KN3vB98AGJsdbmF/UBPrcjaiLbP2QGsDlbOZOVi8TPFnQiLxXi+HV74JrC3LRTcPTPmuAqrwMvfisChfC/q6QLwn37xv6ALPJhH9Q9zrM4Eh3lxcPAOdLl726Cha8C+I2tYRWFlBGTr9fzbixa4wiwAKKSjO7bhT+PYe+sMiPxPAuwVWAvODN3qbUeBKc7DSWlHqJp2cG5doTVJhPB9ElImsRR7ys1gvELLzb9KcnxiRdcexv+4PM/p/qCgq+iMqQRPSX38+IT8cT0PeCIRlNGE8pPlOZs2r2hJcLIG8GBOwSIH7FUmoMubzZQHY0HH+euMAoEKak3CAJrK+ptYit17EaEci58TRPFND81BnGQwdu7Av8eGfeFvKtsWNrDkV9Zl+V7YK9iKXne1eYf0j+Z0w5yztgdKJi+SRO4LhIzSUqJMkZSMpLzv+rIdidt13Of/JuL/gQCz91yn7Rl73j5Zd4hUUWuzcq+xE56LGqJQC2hyBoDelg7PIptT25xsrmeAOPknkqh4EO3gXrqRgqo3wZXKHS6BpYw8Q32EPof6UqU8Sg7hYhpV4EEaf8LDbNn6lWqf7XGEcRSsT2uLgmJh9WgmpjNY6h/+Qr/4atRtCx8HZ1mVwZinB7U0KIt+0pc5EixA4DCNC67zE/tocJXJVIlPM1S3P33m98hmLr3P+UP+d9m1s1GE7c/P0rJWYO9EQt+LtZWaS19sJYXYoiTbHJ36dmKEib5pJ5LsU8EC/Yu+rUYozkfXx0r7hwoR64O25Hxtby+BD89/ybY0b/OSLaBdhKxxsMnPaf3bzOYr4GZs3gFpVl0QIHrye0HpjsYtmoZQJbVvV7wFZHPMA0JIOTNfPerNKlJm26TpgteBWxpZEdc57lhi8bUcOfJPbpPHYf7b5Joy4RyUFAbI+GseQmLD1euIZagstC/ZeCnUj6iOGJ5uUFWrTzQaMq+BC1ZN4Bj0pHB9kFI/1uG4wxATbFfDKhnjd7FgnB1XWf3n9/D3k1zg7OoVN1c02SChaNOub7tM+riebz8pObwMjs+7XC2foMJAVzZGgOyKjppKxcn6SwvrXsvs8+wPi7ZW2vcO1h0e13ueYshIbdCB/q7Sm2hf2nSj3B9W+TmyroqZ35gXDas/3TwwMqt5Ybkc5erZoHlvkLJYvifuZjlHG+CLYUmrlvP8i3DH3c5alho2IcGnMJ7pxD+OgGLagmcuh5nFoHVq/1Uc63AzGzOoXymqFBlce+qEgq9TQZKlBPTFFfMlmsO5DoS97m6I3/P5+qdI4upPqUUcLCpX91l+GjhwFSANgp4KSnZqZMVT6NMnBnJB0uETtjT5SyCREUHKMxF8woocPgriaiSC6or0ZnHrjSWUWCMnRkbHXxzS1HpPlgdIsisrdFxLQqYBQBmdQVBdT9PiTsIKG3RuvWYaR7tnvrNEkbWOIq+ZFSW43ewAnTPBVP6mR+gTrnyoXj1wY0/6LGf28EF02D6DokMwD5TixteSsm+zte69zincP0KIpX2Cp03N+XTwF/G9qscfnZmxinTQrX1YpFYeIiy2ss9uek6H3ObiJqOeV9BvwEGNehN1REgLcL28AUZ1jT/D7832aIe4iB2RLTY0TnmOSbQYM7FFhdtWd2uIZzsZmYYFscvuJcC2Ghpyh0pWDr7DpVqygdnWv4L+HdkP06P6AKaIgy64hGdwpME73KKaKVKwWlbFZkyw7vZy3DW5k/x+19DBw4xqo8rAFXJuasS/gdOQvfb1kI4iP7AAAA",
    M0 = {
        ref: "el",
        class: "b-execution"
    },
    P0 = {
        class: "b__title t-h-xl"
    },
    R0 = {
        ref: "canvas",
        class: "b__canvas",
        "aria-hidden": "true"
    },
    I0 = 9999,
    L0 = {
        __name: "BExecution",
        setup(s) {
            const {
                isTouch: e
            } = Qr(), i = qs("execution"), n = Object.values(Object.assign({
                "/assets/images/projects/247-1.webp": i0,
                "/assets/images/projects/247-2.webp": s0,
                "/assets/images/projects/247-3.webp": r0,
                "/assets/images/projects/blaed-1.webp": o0,
                "/assets/images/projects/blaed-2.webp": l0,
                "/assets/images/projects/boulder-1.webp": a0,
                "/assets/images/projects/boulder-2.webp": c0,
                "/assets/images/projects/boulder-3.webp": u0,
                "/assets/images/projects/boulder-4.webp": d0,
                "/assets/images/projects/boulder-5.webp": f0,
                "/assets/images/projects/duten-1.webp": p0,
                "/assets/images/projects/duten-2.webp": h0,
                "/assets/images/projects/duten-3.webp": g0,
                "/assets/images/projects/generous-1.webp": m0,
                "/assets/images/projects/generous-2.webp": v0,
                "/assets/images/projects/hypernova-1.webp": y0,
                "/assets/images/projects/sn-1.webp": b0,
                "/assets/images/projects/tissot-1.webp": C0,
                "/assets/images/projects/tissot-2.webp": w0,
                "/assets/images/projects/tissot-3.webp": x0,
                "/assets/images/projects/tissot-4.webp": _0,
                "/assets/images/projects/vanguart-1.webp": A0,
                "/assets/images/projects/vanguart-2.webp": S0,
                "/assets/images/projects/vanguart-3.webp": k0,
                "/assets/images/projects/vanguart-4.webp": T0,
                "/assets/images/projects/vanguart-5.webp": E0
            }));
            let r = [];
            const l = {
                    el: K("el"),
                    canvas: K("canvas")
                },
                o = Gr(l.el);
            let a = !1;
            const d = new Set;

            function f(D) {
                if (D && typeof D == "object" && "paused" in D) {
                    const E = String(D.source || "global");
                    D.paused ? d.add(E) : d.delete(E), a = d.size > 0
                } else a = !!D
            }
            let c = null,
                p = {
                    width: 0,
                    height: 0,
                    dpi: 1
                },
                u = 0,
                g = 0,
                x = !1;
            const w = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                },
                m = {
                    x: -1,
                    y: -1,
                    sx: -1,
                    sy: -1,
                    lx: -1,
                    ly: -1,
                    vx: 0,
                    vy: 0,
                    svx: 0,
                    svy: 0,
                    inCanvas: !1,
                    dotX: Xe(-8),
                    dotY: Xe(-8)
                },
                S = {
                    x: 0,
                    y: 0,
                    mx: 0,
                    my: 0,
                    vx: 0,
                    vy: 0
                };
            let R = [];
            const P = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                _ = new Map;
            let v = !0,
                C = null;

            function M() {
                v = !0
            }

            function B() {
                v && R.forEach(D => D.idle && !D.destroyed && D.quickExit()), v = !1, clearTimeout(C), C = setTimeout(M, 5e3)
            }

            function b() {
                const D = l.canvas.value;
                if (!D) return;
                const E = D.getBoundingClientRect();
                w.left = E.left, w.top = E.top + window.scrollY, w.width = E.width, w.height = E.height
            }

            function L() {
                const D = l.canvas.value;
                if (!D) return;
                b();
                const N = Math.min(window.devicePixelRatio || 1, 1.5);
                p = {
                    width: w.width,
                    height: w.height,
                    dpi: N
                }, D.width = w.width * N, D.height = w.height * N, c = D.getContext("2d"), x = typeof c.roundRect == "function", u = Math.hypot(w.width, w.height) * .1, g = u * .5, S.x = w.width * .5, S.y = w.height * .55
            }

            function k(D) {
                if (!n.length || R.length >= I0) return;
                let E, N, h, y;
                if (v) {
                    if (E = S.x + S.mx, N = S.y + S.my, h = S.vx * 2, y = S.vy * 2, D - P.time < (e.value ? 350 : 500)) return
                } else if (m.x === -1 || (E = m.sx, N = m.sy, h = m.svx * .5, y = m.svy * .5, Math.hypot(E - P.x, N - P.y) < g)) return;
                const I = n.map((ee, ue) => ue).filter(ee => !_.has(ee)),
                    z = I.length ? I : n.map((ee, ue) => ue),
                    W = z[Math.floor(Math.random() * z.length)],
                    Z = n[W];
                _.set(W, 10), R.push(new J(Z, E, N, h, y, u, v)), P.time = D, P.x = E, P.y = N
            }

            function H() {
                if (!c || a || !o.value) return;
                const D = performance.now();
                m.x !== -1 && (m.sx += (m.x - m.sx) * .5, m.sy += (m.y - m.sy) * .5, m.dotX.value = m.inCanvas ? m.sx : -8, m.dotY.value = m.inCanvas ? m.sy : -8);
                const E = S.mx,
                    N = S.my,
                    h = D * 3e-4 * (e.value ? 2 : 1.25),
                    y = Math.cos(h) * p.width * .5,
                    I = Math.sin(h) * p.height * .25;
                S.mx = (y + I) * .7071, S.my = (I - y) * .525, S.vx = S.mx - E, S.vy = S.my - N, c.clearRect(0, 0, p.width * p.dpi, p.height * p.dpi), c.save(), c.scale(p.dpi, p.dpi), R = R.filter(z => !z.destroyed), R.forEach(z => {
                    z.move(), z.draw(c)
                }), c.restore(), _.forEach((z, W) => {
                    z <= 1 ? _.delete(W) : _.set(W, z - 1)
                }), k(D)
            }

            function T(D) {
                if (a) return;
                const E = D.clientX - w.left,
                    N = D.clientY + window.scrollY - w.top;
                if (E < 0 || N < 0 || E > w.width || N > w.height) {
                    m.inCanvas = !1, m.vx = 0, m.vy = 0, m.svx = 0, m.svy = 0;
                    return
                }
                m.inCanvas = !0;
                const y = m.x === -1;
                y && (m.sx = E, m.sy = N), m.vx = y ? 0 : Math.max(Math.min(E - m.x, 12), -12), m.vy = y ? 0 : Math.max(Math.min(N - m.y, 12), -12), m.svx += (m.vx - m.svx) * .1, m.svy += (m.vy - m.svy) * .1, m.lx = m.x, m.ly = m.y, m.x = E, m.y = N, Math.hypot(m.vx, m.vy) > .1 && B()
            }

            function U() {
                L()
            }
            bt(() => {
                r = n.map(D => {
                    const E = new window.Image;
                    return E.src = D, E
                }), L(), Qi.add(H), se.on("resize", U), se.on("pauseCanvas", f), e.value || se.on("mousemove", T)
            }), ut(() => {
                Qi.remove(H), se.off("resize", U), se.off("pauseCanvas", f), e.value || se.off("mousemove", T), d.clear(), a = !1, clearTimeout(C), R.forEach(D => D.destroy()), R = []
            });
            class J {
                constructor(E, N, h, y, I, z, W = !1) {
                    this.x = N, this.y = h, this.vx = y, this.vy = I, this.size = z, this.idle = W, this.scale = 1, this.clipScale = 0, this.overlay = 0, this.speed = Math.hypot(y, I), this.w = 0, this.h = 0, this.isLoaded = !1, this.destroyed = !1, this.tl = null, this.load(E)
                }
                load(E) {
                    const N = n.indexOf(E);
                    this.img = N !== -1 ? r[N] : new window.Image, this.img.complete && this.img.naturalWidth ? this.init() : (this.img.addEventListener("load", () => this.init(), {
                        once: !0
                    }), N === -1 && (this.img.src = E))
                }
                init() {
                    if (this.destroyed) return;
                    const E = this.img.naturalWidth / this.img.naturalHeight;
                    this.w = this.size, this.h = this.size / E, this.isLoaded = !0, this.animate()
                }
                animate() {
                    this.tl = G.timeline({
                        onComplete: () => this.destroy()
                    });
                    const E = this.tl,
                        N = this.idle ? e.value ? 1.5 : 2.5 : .5,
                        h = this.idle ? e.value ? 1.25 : 1.5 : .5,
                        y = this.idle ? e.value ? 2.5 : 3.3 : 1.1,
                        I = this.idle ? e.value ? 1.5 : 2.25 : .75;
                    E.from(this, {
                        scale: 1.5,
                        duration: y,
                        ease: "power3.out"
                    }, 0), E.to(this, {
                        clipScale: 1,
                        duration: I,
                        ease: "expo.out"
                    }, 0), E.to(this, {
                        clipScale: 0,
                        duration: h,
                        immediateRender: !1,
                        ease: "power3.in"
                    }, N), E.to(this, {
                        scale: .5,
                        duration: h,
                        immediateRender: !1,
                        ease: "power3.in"
                    }, N + .25), E.to(this, {
                        overlay: 1,
                        duration: N + h,
                        immediateRender: !1,
                        ease: "power1.in"
                    }, 0)
                }
                quickExit() {
                    this.tl && this.tl.kill(), G.to(this, {
                        clipScale: 0,
                        scale: .5,
                        overlay: 1,
                        duration: .35,
                        ease: "power3.in",
                        onComplete: () => this.destroy()
                    })
                }
                move() {
                    this.isLoaded && (this.x += this.vx, this.y += this.vy, this.vx *= .94, this.vy *= .94)
                }
                draw(E) {
                    if (!this.isLoaded || this.destroyed || this.clipScale <= 0) return;
                    const N = this.w * this.scale,
                        h = this.h * this.scale,
                        y = this.x - N / 2,
                        I = this.y - h / 2,
                        z = this.w * this.clipScale,
                        W = this.h * this.clipScale,
                        Z = this.x - z / 2,
                        ee = this.y - W / 2,
                        ue = 8;
                    E.save(), x && (E.beginPath(), E.roundRect(Z, ee, z, W, ue), E.clip()), E.drawImage(this.img, y, I, N, h), E.restore(), this.overlay > 0 && z > 0 && W > 0 && (E.save(), E.globalAlpha = this.overlay, E.fillStyle = "#eaeaea", x ? (E.beginPath(), E.roundRect(Z, ee, z, W, ue), E.fill()) : E.fillRect(Z, ee, z, W), E.restore())
                }
                destroy() {
                    this.destroyed = !0, this.tl && (this.tl.kill(), this.tl = null), G.killTweensOf(this)
                }
            }
            return (D, E) => {
                const N = Lo;
                return q(), V("div", M0, [O("h2", P0, $(F(i) ? .title), 1), O("canvas", R0, null, 512), F(e) ? ve("", !0) : (q(), mt(N, {
                    key: 0,
                    x: m.dotX.value,
                    y: m.dotY.value
                }, null, 8, ["x", "y"]))], 512)
            }
        }
    },
    O0 = Ai(() => Si(() =>
        import ("./C52vxEqk.js").then(s => s.B), __vite__mapDeps([0, 1, 2, 3]),
        import.meta.url).then(s => s.default || s)),
    B0 = {
        class: "b-quote"
    },
    D0 = {
        class: "b__content t-h-xl"
    },
    N0 = ["innerHTML"],
    H0 = {
        class: "b__author t-t-sm"
    },
    q0 = {
        __name: "BQuote",
        setup(s) {
            const e = qs("execution"),
                i = {
                    text: K("text")
                };
            return (t, n) => {
                const r = O0;
                return q(), V("div", B0, [ke(r, {
                    dark: !0,
                    "mask-el": i.text,
                    class: "b__fluid"
                }, null, 8, ["mask-el"]), O("blockquote", D0, [O("p", {
                    ref: "text",
                    class: "b__text",
                    innerHTML: F(e) ? .quote ? .text
                }, null, 8, N0), O("footer", H0, $(F(e) ? .quote ? .author), 1)])])
            }
        }
    };

function z0() {
    let s = null,
        e = !1;

    function i(n) {
        s = n, e = !1
    }

    function t() {
        s && (document.visibilityState === "hidden" ? e = !0 : e && (lt("Project Return", {
            props: s
        }), s = null, e = !1))
    }
    return bt(() => document.addEventListener("visibilitychange", t)), ut(() => document.removeEventListener("visibilitychange", t)), {
        markOpened: i
    }
}
const j0 = {
        class: "b-delivery"
    },
    F0 = {
        class: "b__header"
    },
    V0 = {
        class: "b__header__top"
    },
    X0 = {
        class: "b__title t-h-xs"
    },
    U0 = {
        class: "b__text t-t-2xs"
    },
    W0 = {
        class: "b__projects"
    },
    Z0 = {
        class: "sb__description t-t-sm"
    },
    G0 = {
        class: "sb__footer"
    },
    Y0 = {
        class: "sb__meta"
    },
    J0 = {
        class: "sb__pill sb__localisation"
    },
    Q0 = {
        class: "u-height-fix"
    },
    K0 = {
        class: "sb__pill sb__duration"
    },
    $0 = {
        class: "u-height-fix"
    },
    ec = ["href", "onClick"],
    tc = {
        class: "u-sr-only"
    },
    nc = {
        key: 1,
        class: "sb__nda"
    },
    ic = {
        __name: "BDelivery",
        async setup(s) {
            let e, i;
            const t = qs("delivery"),
                {
                    data: n
                } = ([e, i] = Ki(() => $i("global-strings", d => es(`content_${d}`).path("/global").first())), e = await e, i(), e),
                r = Ue(() => n.value ? .strings),
                {
                    markOpened: l
                } = z0();

            function o(d) {
                const f = {
                    label: d.description || d.link,
                    href: d.link
                };
                lt("Outbound: Project", {
                    props: f
                }), l(f)
            }

            function a() {
                const d = "delivery";
                lt("Contact Form Opened", {
                    props: {
                        source: d
                    }
                }), se.emit("siteContactOpen", {
                    source: d
                })
            }
            return (d, f) => {
                const c = ki;
                return q(), V("div", j0, [O("div", F0, [O("div", V0, [O("h2", X0, $(F(t) ? .title), 1), O("p", U0, $(F(t) ? .text), 1)]), ke(c, {
                    elem: "button",
                    class: "b__cta",
                    variant: "primary",
                    color: "black",
                    size: "sm",
                    onClick: a
                }, {
                    default: sn(() => [vn($(F(t) ? .cta), 1)]),
                    _: 1
                })]), O("ul", W0, [(q(!0), V(At, null, St(F(t) ? .projects, (p, u) => (q(), V("li", {
                    key: u,
                    class: "sb-project"
                }, [O("p", Z0, $(p.description), 1), O("div", G0, [O("div", Y0, [O("span", J0, [O("span", Q0, $(p.localisation), 1)]), O("span", K0, [O("span", $0, $(p.duration), 1)])]), p.link ? (q(), V("a", {
                    key: 0,
                    href: p.link,
                    class: "sb__link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: g => o(p)
                }, [f[0] || (f[0] = O("span", {
                    class: "sb__link__icon"
                }, null, -1)), O("span", tc, $(F(r) ? .projectLink), 1)], 8, ec)) : (q(), V("span", nc, [...f[1] || (f[1] = [O("span", {
                    class: "u-height-fix"
                }, "NDA", -1)])]))])]))), 128))])])
            }
        }
    },
    sc = Ai(() => Si(() =>
        import ("./Co-GT-QY.js"), __vite__mapDeps([4, 1, 2, 0, 3, 5]),
        import.meta.url).then(s => s.default || s)),
    rc = {
        class: "s-work"
    },
    oc = {
        class: "u-container"
    },
    lc = {
        class: "s__execution"
    },
    ac = {
        class: "s__quote"
    },
    cc = {
        class: "s__showreel"
    },
    uc = {
        class: "s__delivery"
    },
    dc = {
        __name: "SWork",
        setup(s) {
            const {
                locale: e
            } = Kr(), {
                data: i
            } = Oo(`index-${e.value}`), t = Ue(() => i.value ? .execution), n = Ue(() => i.value ? .delivery), r = Ue(() => i.value ? .showreel);
            return us("execution", t), us("delivery", n), us("showreel", r), (l, o) => {
                const a = L0,
                    d = q0,
                    f = sc,
                    c = ic;
                return q(), V("section", rc, [O("div", oc, [O("div", lc, [ke(a)]), O("div", ac, [ke(d)]), O("div", cc, [ke(f)]), O("div", uc, [ke(c)])])])
            }
        }
    };
let ii, si, Or = typeof Symbol == "function" ? Symbol() : "_split",
    Os, fc = () => Os || Ns.register(window.gsap),
    Br = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter : 0,
    _i = s => s ? typeof s == "string" ? _i(document.querySelectorAll(s)) : "length" in s ? Array.from(s).reduce((e, i) => (typeof i == "string" ? e.push(..._i(i)) : e.push(i), e), []) : [s] : [],
    Dr = s => _i(s).filter(e => e && e.nodeType === 1),
    Bs = [],
    bs = function() {},
    pc = {
        add: s => s()
    },
    hc = /\s+/g,
    Nr = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
    os = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    },
    gc = (s, e) => {
        for (; ++e < s.length && s[e] === os;);
        return s[e] || os
    },
    Hr = ({
        element: s,
        html: e,
        ariaL: i,
        ariaH: t
    }) => {
        s.innerHTML = e, i ? s.setAttribute("aria-label", i) : s.removeAttribute("aria-label"), t ? s.setAttribute("aria-hidden", t) : s.removeAttribute("aria-hidden")
    },
    qr = (s, e) => {
        if (e) {
            let i = new Set(s.join("").match(e) || Bs),
                t = s.length,
                n, r, l, o;
            if (i.size)
                for (; --t > -1;) {
                    r = s[t];
                    for (l of i)
                        if (l.startsWith(r) && l.length > r.length) {
                            for (n = 0, o = r; l.startsWith(o += s[t + ++n]) && o.length < l.length;);
                            if (n && o.length === l.length) {
                                s[t] = l, s.splice(t + 1, n);
                                break
                            }
                        }
                }
        }
        return s
    },
    zr = s => window.getComputedStyle(s).display === "inline" && (s.style.display = "inline-block"),
    On = (s, e, i) => e.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, i),
    Ds = (s, e, i) => {
        let t = e[s + "sClass"] || "",
            {
                tag: n = "div",
                aria: r = "auto",
                propIndex: l = !1
            } = e,
            o = s === "line" ? "block" : "inline-block",
            a = t.indexOf("++") > -1,
            d = f => {
                let c = document.createElement(n),
                    p = i.length + 1;
                return t && (c.className = t + (a ? " " + t + p : "")), l && c.style.setProperty("--" + s, p + ""), r !== "none" && c.setAttribute("aria-hidden", "true"), n !== "span" && (c.style.position = "relative", c.style.display = o), c.textContent = f, i.push(c), c
            };
        return a && (t = t.replace("++", "")), d.collection = i, d
    },
    mc = (s, e, i, t) => {
        let n = Ds("line", i, t),
            r = window.getComputedStyle(s).textAlign || "left";
        return (l, o) => {
            let a = n("");
            for (a.style.textAlign = r, s.insertBefore(a, e[l]); l < o; l++) a.appendChild(e[l]);
            a.normalize()
        }
    },
    Mo = (s, e, i, t, n, r, l, o, a, d) => {
        var f;
        let c = Array.from(s.childNodes),
            p = 0,
            {
                wordDelimiter: u,
                reduceWhiteSpace: g = !0,
                prepareText: x
            } = e,
            w = s.getBoundingClientRect(),
            m = w,
            S = !g && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
            R = 0,
            P = i.collection,
            _, v, C, M, B, b, L, k, H, T, U, J, D, E, N, h, y, I;
        for (typeof u == "object" ? (C = u.delimiter || u, v = u.replaceWith || "") : v = u === "" ? "" : u || " ", _ = v !== " "; p < c.length; p++)
            if (M = c[p], M.nodeType === 3) {
                for (N = M.textContent || "", g ? N = N.replace(hc, " ") : S && (N = N.replace(/\n/g, v + `
`)), x && (N = x(N, s)), M.textContent = N, B = v || C ? N.split(C || v) : N.match(o) || Bs, y = B[B.length - 1], k = _ ? y.slice(-1) === " " : !y, y || B.pop(), m = w, L = _ ? B[0].charAt(0) === " " : !B[0], L && On(" ", s, M), B[0] || B.shift(), qr(B, a), r && d || (M.textContent = ""), H = 1; H <= B.length; H++)
                    if (h = B[H - 1], !g && S && h.charAt(0) === `
` && ((f = M.previousSibling) == null || f.remove(), On(document.createElement("br"), s, M), h = h.slice(1)), !g && h === "") On(v, s, M);
                    else if (h === " ") s.insertBefore(document.createTextNode(" "), M);
                else {
                    if (_ && h.charAt(0) === " " && On(" ", s, M), R && H === 1 && !L && P.indexOf(R.parentNode) > -1 ? (b = P[P.length - 1], b.appendChild(document.createTextNode(t ? "" : h))) : (b = i(t ? "" : h), On(b, s, M), R && H === 1 && !L && b.insertBefore(R, b.firstChild)), t)
                        for (U = Br ? qr([...Br.segment(h)].map(z => z.segment), a) : h.match(o) || Bs, I = 0; I < U.length; I++) b.appendChild(U[I] === " " ? document.createTextNode(" ") : t(U[I]));
                    if (r && d) {
                        if (N = M.textContent = N.substring(h.length + 1, N.length), T = b.getBoundingClientRect(), T.top > m.top && T.left <= m.left) {
                            for (J = s.cloneNode(), D = s.childNodes[0]; D && D !== b;) E = D, D = D.nextSibling, J.appendChild(E);
                            s.parentNode.insertBefore(J, s), n && zr(J)
                        }
                        m = T
                    }(H < B.length || k) && On(H >= B.length ? " " : _ && h.slice(-1) === " " ? " " + v : v, s, M)
                }
                s.removeChild(M), R = 0
            } else M.nodeType === 1 && (l && l.indexOf(M) > -1 ? (P.indexOf(M.previousSibling) > -1 && P[P.length - 1].appendChild(M), R = M) : (Mo(M, e, i, t, n, r, l, o, a, !0), R = 0), n && zr(M))
    };
const Po = class Ro {
    constructor(e, i) {
        this.isSplit = !1, fc(), this.elements = Dr(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = i, this.elements.forEach(l => {
            var o;
            i.overwrite !== !1 && ((o = l[Or]) == null || o._data.orig.filter(({
                element: a
            }) => a === l).forEach(Hr)), l[Or] = this
        }), this._split = () => this.isSplit && this.split(this.vars);
        let t = [],
            n, r = () => {
                let l = t.length,
                    o;
                for (; l--;) {
                    o = t[l];
                    let a = o.element.offsetWidth;
                    if (a !== o.width) {
                        o.width = a, this._split();
                        return
                    }
                }
            };
        this._data = {
            orig: t,
            obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
                clearTimeout(n), n = setTimeout(r, 200)
            })
        }, bs(this), this.split(i)
    }
    split(e) {
        return (this._ctx || pc).add(() => {
            this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
            let {
                type: i = "chars,words,lines",
                aria: t = "auto",
                deepSlice: n = !0,
                smartWrap: r,
                onSplit: l,
                autoSplit: o = !1,
                specialChars: a,
                mask: d
            } = this.vars, f = i.indexOf("lines") > -1, c = i.indexOf("chars") > -1, p = i.indexOf("words") > -1, u = c && !p && !f, g = a && ("push" in a ? new RegExp("(?:" + a.join("|") + ")", "gu") : a), x = g ? new RegExp(g.source + "|" + Nr.source, "gu") : Nr, w = !!e.ignore && Dr(e.ignore), {
                orig: m,
                animTime: S,
                obs: R
            } = this._data, P;
            (c || p || f) && (this.elements.forEach((_, v) => {
                m[v] = {
                    element: _,
                    html: _.innerHTML,
                    ariaL: _.getAttribute("aria-label"),
                    ariaH: _.getAttribute("aria-hidden")
                }, t === "auto" ? _.setAttribute("aria-label", (_.textContent || "").trim()) : t === "hidden" && _.setAttribute("aria-hidden", "true");
                let C = [],
                    M = [],
                    B = [],
                    b = c ? Ds("char", e, C) : null,
                    L = Ds("word", e, M),
                    k, H, T, U;
                if (Mo(_, e, L, b, u, n && (f || u), w, x, g, !1), f) {
                    let J = _i(_.childNodes),
                        D = mc(_, J, e, B),
                        E, N = [],
                        h = 0,
                        y = J.map(W => W.nodeType === 1 ? W.getBoundingClientRect() : os),
                        I = os,
                        z;
                    for (k = 0; k < J.length; k++) E = J[k], E.nodeType === 1 && (E.nodeName === "BR" ? ((!k || J[k - 1].nodeName !== "BR") && (N.push(E), D(h, k + 1)), h = k + 1, I = gc(y, k)) : (z = y[k], k && z.top > I.top && z.left < I.left + I.width - 1 && (D(h, k), h = k), I = z));
                    h < k && D(h, k), N.forEach(W => {
                        var Z;
                        return (Z = W.parentNode) == null ? void 0 : Z.removeChild(W)
                    })
                }
                if (!p) {
                    for (k = 0; k < M.length; k++)
                        if (H = M[k], c || !H.nextSibling || H.nextSibling.nodeType !== 3)
                            if (r && !f) {
                                for (T = document.createElement("span"), T.style.whiteSpace = "nowrap"; H.firstChild;) T.appendChild(H.firstChild);
                                H.replaceWith(T)
                            } else H.replaceWith(...H.childNodes);
                    else U = H.nextSibling, U && U.nodeType === 3 && (U.textContent = (H.textContent || "") + (U.textContent || ""), H.remove());
                    M.length = 0, _.normalize()
                }
                this.lines.push(...B), this.words.push(...M), this.chars.push(...C)
            }), d && this[d] && this.masks.push(...this[d].map(_ => {
                let v = _.cloneNode();
                return _.replaceWith(v), v.appendChild(_), _.className && (v.className = _.className.trim().split(" ").map(C => C + "-mask").join(" ")), v.style.overflow = "clip", v
            }))), this.isSplit = !0, si && f && o && si.addEventListener("loadingdone", this._split), (P = l && l(this)) && P.totalTime && (this._data.anim = S ? P.totalTime(S) : P), f && o && this.elements.forEach((_, v) => {
                m[v].width = _.offsetWidth, R && R.observe(_)
            })
        }), this
    }
    kill() {
        let {
            obs: e
        } = this._data;
        e && e.disconnect(), si ? .removeEventListener("loadingdone", this._split)
    }
    revert() {
        var e, i;
        if (this.isSplit) {
            let {
                orig: t,
                anim: n
            } = this._data;
            this.kill(), t.forEach(Hr), this.chars.length = this.words.length = this.lines.length = t.length = this.masks.length = 0, this.isSplit = !1, n && (this._data.animTime = n.totalTime(), n.revert()), (i = (e = this.vars).onRevert) == null || i.call(e, this)
        }
        return this
    }
    static create(e, i) {
        return new Ro(e, i)
    }
    static register(e) {
        ii = ii || e || window.gsap, ii && (_i = ii.utils.toArray, bs = ii.core.context || bs), !Os && window.innerWidth > 0 && (si = document.fonts, Os = !0)
    }
};
Po.version = "3.15.0";
let Ns = Po;
const vc = {
        ref: "el",
        class: "s-catchphrase"
    },
    yc = {
        ref: "content",
        class: "s__content"
    },
    bc = {
        __name: "SCatchphrase",
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            G.registerPlugin(re, Ns);
            const e = {
                el: K("el"),
                content: K("content"),
                title: K("title")
            };
            let i = null,
                t = null;
            bt(() => {
                r(), o(), se.on("resize", n)
            }), ut(() => {
                l(i), t ? .revert(), t = null, se.off("resize", n)
            });
            async function n(a) {
                a && (l(i), i = null, e.title.value && G.set(e.title.value, {
                    clearProps: "all"
                }), await ct(), r(), o(), re.refresh())
            }

            function r() {
                !e.el.value || !e.content.value || e.el.value.style.setProperty("--content-height", `${e.content.value.offsetHeight}px`)
            }

            function l(a) {
                a && (a.scrollTrigger ? .kill(), a.kill())
            }

            function o() {
                if (!e.el.value || !e.title.value) return;
                t ? .revert(), t = new Ns(e.title.value, {
                    type: "lines",
                    linesClass: "line"
                });
                const a = [...t.lines].reverse();
                i = G.timeline({
                    scrollTrigger: {
                        trigger: e.el.value,
                        start: "top -25%",
                        end: "bottom 50%",
                        scrub: 0,
                        invalidateOnRefresh: !0
                    }
                }), i.fromTo(e.title.value, {
                    y: "-50%"
                }, {
                    y: "0%",
                    duration: 1,
                    ease: "expo.out"
                }, 0), a.forEach((d, f) => {
                    i.fromTo(d, {
                        scale: .75,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        ease: "power4.out",
                        duration: .7
                    }, f * .05), i.fromTo(d, {
                        y: "200%"
                    }, {
                        y: "0%",
                        ease: "power4.out",
                        duration: .9
                    }, f * .025)
                }), i.call(() => {}, null, 1)
            }
            return (a, d) => (q(), V("section", vc, [O("div", yc, [s.title ? (q(), V("h2", {
                key: 0,
                ref: "title",
                class: "s__title t-h-3xl"
            }, $(s.title), 513)) : ve("", !0)], 512)], 512))
        }
    },
    Cc = ["aria-selected", "tabindex", "onClick", "onKeydown"],
    wc = {
        __name: "BPricingToggle",
        props: {
            modelValue: {
                type: String,
                default: "single"
            },
            options: {
                type: Array,
                default: () => [{
                    value: "single",
                    label: "Single project"
                }, {
                    value: "recurring",
                    label: "Recurring"
                }],
                validator: s => s.length >= 2 && s.every(e => e.value && e.label)
            }
        },
        emits: ["update:modelValue", "change"],
        setup(s, {
            emit: e
        }) {
            const i = s,
                t = e,
                n = K("root"),
                r = K("buttons"),
                l = Xe(i.modelValue);
            It(() => i.modelValue, p => l.value = p);
            const o = Xe({
                    transform: "translate3d(0, 0, 0)",
                    width: "0px",
                    opacity: 0
                }),
                a = Ue(() => Math.max(0, i.options.findIndex(p => p.value === l.value)));

            function d() {
                const p = r.value ? .[a.value],
                    u = n.value;
                if (!p || !u) return;
                const g = p.offsetLeft - u.clientLeft;
                o.value = {
                    transform: `translate3d(${g}px, 0, 0)`,
                    width: `${p.offsetWidth}px`,
                    opacity: 1
                }
            }

            function f(p) {
                p !== l.value && (l.value = p, t("update:modelValue", p), t("change", p), lt("Pricing Toggle", {
                    props: {
                        mode: p
                    }
                }))
            }

            function c(p, u) {
                const g = (p + u + i.options.length) % i.options.length;
                f(i.options[g].value), r.value ? .[g] ? .focus()
            }
            return bt(() => {
                ct(d), se.on("resize", d)
            }), ut(() => {
                se.off("resize", d)
            }), It(a, () => ct(d)), It(() => i.options, () => ct(d), {
                deep: !0
            }), (p, u) => (q(), V("div", {
                ref_key: "root",
                ref: n,
                class: "b-pricing-toggle t-t-2xs",
                role: "tablist"
            }, [O("span", {
                class: "b__pill",
                style: Jr(F(o)),
                "aria-hidden": "true"
            }, null, 4), (q(!0), V(At, null, St(s.options, (g, x) => (q(), V("button", {
                key: g.value,
                ref_for: !0,
                ref_key: "buttons",
                ref: r,
                type: "button",
                role: "tab",
                class: cn(["b__option", {
                    "is-active": g.value === F(l)
                }]),
                "aria-selected": g.value === F(l),
                tabindex: g.value === F(l) ? 0 : -1,
                onClick: w => f(g.value),
                onKeydown: [Js(xn(w => c(x, -1), ["prevent"]), ["left"]), Js(xn(w => c(x, 1), ["prevent"]), ["right"])]
            }, $(g.label), 43, Cc))), 128))], 512))
        }
    },
    xc = ["inert"],
    _c = {
        class: "b__header t-l-sm"
    },
    Ac = {
        class: "b__index"
    },
    Sc = {
        class: "b__name"
    },
    kc = {
        class: "b__fields"
    },
    Tc = {
        __name: "BFormStep",
        props: {
            index: {
                type: [String, Number],
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            active: {
                type: Boolean,
                default: !0
            }
        },
        setup(s) {
            return (e, i) => (q(), V("div", {
                class: cn(["b-form-step", {
                    "is-inactive": !s.active
                }]),
                inert: !s.active
            }, [O("div", _c, [O("div", Ac, $(s.index), 1), i[0] || (i[0] = O("div", {
                class: "b__line"
            }, null, -1)), O("div", Sc, $(s.name), 1)]), O("div", kc, [Bo(e.$slots, "default")])], 10, xc))
        }
    },
    Ec = ["for"],
    Mc = {
        key: 0,
        class: "u-sr-only"
    },
    Pc = {
        class: "b-select__wrapper"
    },
    Rc = ["id", "name", "required", "aria-required", "aria-invalid", "aria-describedby", "value"],
    Ic = {
        key: 0,
        value: "",
        disabled: "",
        selected: ""
    },
    Lc = ["value"],
    Oc = ["id"],
    Bc = {
        __name: "BSelect",
        props: {
            label: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            id: {
                type: String,
                default: ""
            },
            placeholder: {
                type: String,
                default: ""
            },
            required: {
                type: Boolean,
                default: !1
            },
            modelValue: {
                type: [String, Number],
                default: ""
            },
            options: {
                type: Array,
                default: () => []
            },
            error: {
                type: String,
                default: ""
            }
        },
        emits: ["update:modelValue"],
        setup(s) {
            const e = s,
                i = Ue(() => e.label || e.placeholder),
                t = Ue(() => {
                    const n = e.placeholder || e.label;
                    return n ? e.required ? `${n}*` : n : ""
                });
            return (n, r) => (q(), V("label", {
                class: "b-select",
                for: s.id || s.name
            }, [F(i) ? (q(), V("span", Mc, $(F(i)), 1)) : ve("", !0), O("div", Pc, [O("select", {
                id: s.id || s.name,
                class: cn(["b-select__field t-t-md", {
                    "is-error": s.error
                }]),
                name: s.name,
                required: s.required,
                "aria-required": s.required || void 0,
                "aria-invalid": s.error ? "true" : void 0,
                "aria-describedby": s.error ? `${s.id||s.name}-error` : void 0,
                value: s.modelValue,
                onChange: r[0] || (r[0] = l => n.$emit("update:modelValue", l.target.value))
            }, [F(t) ? (q(), V("option", Ic, $(F(t)), 1)) : ve("", !0), (q(!0), V(At, null, St(s.options, l => (q(), V("option", {
                key: l.value,
                value: l.value
            }, $(l.name), 9, Lc))), 128))], 42, Rc), r[1] || (r[1] = O("span", {
                class: "b-select__arrow",
                "aria-hidden": "true"
            }, [O("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none"
            }, [O("path", {
                d: "M1 1L6 6L11 1",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })])], -1))]), s.error ? (q(), V("span", {
                key: 1,
                id: `${s.id||s.name}-error`,
                class: "b__error t-t-3xs"
            }, $(s.error), 9, Oc)) : ve("", !0)], 8, Ec))
        }
    },
    Dc = 100,
    Nc = .125,
    jr = .15,
    Hc = 25,
    qc = 3e3,
    pe = {
        home: 14,
        mediumHome: 20,
        commonContent: 12,
        longContent: 14,
        simpleText: 4,
        gridServices: 8,
        serviceSingle: 8,
        gridArticles: 8,
        simpleArticle: 6,
        mapMarkers: 16,
        contactPage: 14,
        page404: 3
    },
    Cs = s => s.reduce((e, i) => e + i, 0),
    Hs = {
        landing: {
            short: 35,
            standard: 50,
            long: 65
        },
        website: {
            small: Cs([pe.mediumHome, pe.commonContent, pe.gridServices, pe.contactPage, pe.simpleText, pe.page404]),
            medium: Cs([pe.home, pe.commonContent, pe.commonContent, pe.gridServices, pe.serviceSingle, pe.gridArticles, pe.simpleArticle, pe.contactPage, pe.simpleText, pe.page404]),
            large: Cs([pe.home, pe.commonContent, pe.commonContent, pe.gridServices, pe.serviceSingle, pe.gridServices, pe.serviceSingle, pe.gridServices, pe.longContent, pe.gridServices, pe.longContent, pe.gridArticles, pe.simpleArticle, pe.mapMarkers, pe.contactPage, pe.simpleText, pe.page404])
        }
    };
Hs.portfolio = Hs.website;
const zc = {
        standard: .1,
        enhanced: .2,
        creative: .5
    },
    jc = {
        standard: .1,
        enhanced: .4,
        creative: .9
    },
    Fc = {
        asap: {
            devs: 2,
            price: 1.3,
            time: 1
        },
        flexible: {
            devs: 1,
            price: .95,
            time: 1.25
        }
    };

function Io(s) {
    if (!s) return null;
    const {
        projectType: e,
        projectSize: i,
        projectComplexity: t,
        projectTimeline: n
    } = s, r = Hs[e] ? .[i], l = (e === "landing" ? jc : zc)[t], o = Fc[n];
    if (r == null || l == null || !o) return null;
    const a = r,
        d = Math.ceil(a * (1 + Nc)),
        f = Math.ceil(d * l),
        c = d + f,
        p = c * Dc,
        u = p * o.price,
        g = o.devs,
        x = Hc * g,
        w = c / x * o.time,
        m = Math.max(1, Math.ceil(w * .85)),
        S = Math.max(m + 1, Math.ceil(w * 1.2)),
        R = Math.round(u * (1 - jr) / 100) * 100,
        P = Math.round(u * (1 + jr) / 100) * 100;
    return {
        durationWeeks: {
            min: m,
            max: S
        },
        price: {
            min: R,
            max: P,
            currency: "EUR"
        },
        breakdown: {
            scopeHours: a,
            devHours: d,
            animationHours: f,
            totalHours: c,
            basePrice: p
        }
    }
}

function Fr(s) {
    const e = Io(s);
    return !!(e && e.price.min >= qc)
}

function Vc(s) {
    if (!s) return null;
    const e = Math.floor(s.min / 1e3),
        i = Math.ceil(s.max / 1e3);
    return `€${e}k – €${i}k`
}

function Xc(s, e = "weeks") {
    return s ? `${s.min} – ${s.max} <small>${e}</small>` : null
}
const Uc = {
        key: 0,
        class: "b__title t-h-sm"
    },
    Wc = {
        key: 1,
        class: "b__text t-t-2xs"
    },
    Zc = {
        key: 0,
        class: "b__hint t-t-3xs"
    },
    Gc = {
        key: 0,
        class: "b__bottom"
    },
    Yc = {
        class: "b__results"
    },
    Jc = {
        class: "b__result u-white-box js-result"
    },
    Qc = {
        class: "b__subtitle t-t-2xs"
    },
    Kc = {
        class: "b__timeline t-pricing"
    },
    $c = {
        class: "b__unit"
    },
    e2 = {
        class: "b__result u-white-box js-result"
    },
    t2 = {
        class: "b__subtitle t-t-2xs"
    },
    n2 = {
        class: "b__estimation t-pricing"
    },
    Vr = .6,
    i2 = .85,
    s2 = 60,
    r2 = {
        __name: "BCalculator",
        async setup(s) {
            let e, i;
            const t = ["asap", "flexible"],
                n = (y, I, z) => (y || []).filter(W => t.some(Z => Fr({
                    projectType: I,
                    projectSize: z,
                    projectComplexity: W.value,
                    projectTimeline: Z
                }))),
                r = (y, I, z, W) => (y || []).filter(Z => Fr({
                    projectType: I,
                    projectSize: z,
                    projectComplexity: W,
                    projectTimeline: Z.value
                })),
                l = [{
                    id: "projectType",
                    step: 1,
                    component: "BSelect",
                    label: y => y ? .projectType,
                    required: !0,
                    props: y => ({
                        options: y ? .projectTypeOptions
                    })
                }, {
                    id: "projectSize",
                    step: 2,
                    component: "BSelect",
                    label: y => y ? .projectSize,
                    required: !0,
                    props: (y, I) => ({
                        options: y ? .projectSizeOptionsByType ? .[I.projectType] || []
                    })
                }, {
                    id: "projectComplexity",
                    step: 3,
                    component: "BSelect",
                    label: y => y ? .projectComplexity,
                    required: !0,
                    props: (y, I) => ({
                        options: I.projectType && I.projectSize ? n(y ? .projectComplexityOptions, I.projectType, I.projectSize) : y ? .projectComplexityOptions || []
                    })
                }, {
                    id: "projectTimeline",
                    step: 4,
                    component: "BSelect",
                    label: y => y ? .projectTimeline,
                    required: !0,
                    props: (y, I) => ({
                        options: I.projectType && I.projectSize && I.projectComplexity ? r(y ? .projectTimelineOptions, I.projectType, I.projectSize, I.projectComplexity) : y ? .projectTimelineOptions || []
                    })
                }],
                a = [...new Set(l.map(y => y.step))].sort((y, I) => y - I).map(y => ({
                    index: y,
                    nameKey: `step${y}name`
                })),
                d = {
                    BSelect: Bc
                },
                {
                    data: f
                } = ([e, i] = Ki(() => $i("calculator", y => es(`calculator_${y}`).first())), e = await e, i(), e),
                c = Do(Object.fromEntries(l.map(y => [y.id, ""]))),
                p = Ue(() => Object.fromEntries(a.map(y => [y.index, l.filter(I => I.step === y.index)]))),
                u = y => l.filter(I => I.step === y && I.required).every(I => !!c[I.id]),
                g = y => {
                    for (let I = 1; I < y; I++)
                        if (!u(I)) return !1;
                    return !0
                };
            It(() => c.projectType, y => {
                c.projectSize = "", c.projectComplexity = "", c.projectTimeline = "", y && lt("Calculator Step Selected", {
                    props: {
                        step: "projectType",
                        value: y
                    }
                })
            }), It(() => c.projectSize, y => {
                y && lt("Calculator Step Selected", {
                    props: {
                        step: "projectSize",
                        value: y
                    }
                })
            }), It(() => c.projectComplexity, y => {
                y && lt("Calculator Step Selected", {
                    props: {
                        step: "projectComplexity",
                        value: y
                    }
                })
            }), It(() => c.projectTimeline, y => {
                y && lt("Calculator Step Selected", {
                    props: {
                        step: "projectTimeline",
                        value: y
                    }
                })
            });
            const x = Ue(() => Io(c)),
                w = Xe(null),
                m = Xe(null),
                S = Xe(null),
                R = () => {
                    if (typeof window > "u") return;
                    const y = S.value ? .$el || S.value;
                    if (!y) return;
                    const I = y.getBoundingClientRect(),
                        z = 24;
                    if (I.top >= 0 && I.bottom + z <= window.innerHeight) return;
                    const W = window.scrollY + I.bottom - window.innerHeight + z;
                    window.lenis ? window.lenis.scrollTo(W, {
                        duration: .8
                    }) : window.scrollTo({
                        top: W,
                        behavior: "smooth"
                    })
                },
                P = Ue(() => f.value ? .weeksLabel || "weeks"),
                _ = K("timelineMinRef"),
                v = K("timelineMaxRef"),
                C = K("priceMinRef"),
                M = K("priceMaxRef");
            let B = [];

            function b(y) {
                if (y <= 1) return Math.floor(Math.random() * 10);
                const I = 10 ** (y - 1),
                    z = 10 ** y - 1;
                return Math.floor(Math.random() * (z - I + 1)) + I
            }

            function L(y, I, z, W = Vr) {
                if (!y) return null;
                const Z = String(Math.round(z)),
                    ee = Z.length,
                    ue = y.offsetWidth,
                    Ie = y.textContent;
                y.style.width = "", y.textContent = Z;
                const _e = y.offsetWidth;
                y.textContent = Ie;
                const be = ue > 0 && ue !== _e;
                y.style.width = be ? `${ue}px` : `${_e}px`;
                const Le = {
                    progress: 0,
                    width: ue
                };
                let Ne = 0;
                return G.to(Le, {
                    progress: 1,
                    width: _e,
                    duration: W,
                    ease: "expo.out",
                    onUpdate() {
                        const de = Le.progress;
                        if (be && (y.style.width = `${Le.width}px`), de >= i2) {
                            y.textContent = Z;
                            return
                        }
                        const Ce = performance.now();
                        Ce - Ne >= s2 && (Ne = Ce, y.textContent = String(b(ee)))
                    },
                    onComplete() {
                        y.textContent = Z, y.style.width = ""
                    }
                })
            }

            function k(y, I, z = Vr) {
                B.forEach(ee => ee ? .kill()), B = [];
                const W = I ? .durationWeeks ? ? {
                        min: 0,
                        max: 0
                    },
                    Z = I ? {
                        min: I.price.min / 1e3,
                        max: I.price.max / 1e3
                    } : {
                        min: 0,
                        max: 0
                    };
                B = [L(_.value, W.min, y.durationWeeks.min, z), L(v.value, W.max, y.durationWeeks.max, z), L(C.value, Z.min, y.price.min / 1e3, z), L(M.value, Z.max, y.price.max / 1e3, z)]
            }
            It(x, (y, I) => {
                if (y && !I) {
                    lt("Calculator Completed", {
                        props: {
                            projectType: c.projectType,
                            projectSize: c.projectSize,
                            projectComplexity: c.projectComplexity,
                            projectTimeline: c.projectTimeline,
                            priceRange: Vc(y.price),
                            duration: Xc(y.durationWeeks, P.value)
                        }
                    });
                    return
                }
                B.forEach(z => z ? .kill()), B = [], y && k(y, I)
            }), ut(() => {
                B.forEach(y => y ? .kill())
            });

            function H(y, I) {
                return y ? .find(z => z.value === I) ? .name || I
            }
            const T = $r("calculatorPrefill", () => ""),
                U = Ue(() => {
                    const {
                        projectType: y,
                        projectSize: I,
                        projectComplexity: z,
                        projectTimeline: W
                    } = c;
                    if (!y) return "";
                    const Z = [];
                    if (y && Z.push(H(f.value ? .projectTypeOptions, y)), I) {
                        const ee = f.value ? .projectSizeOptionsByType ? .[y] || [];
                        Z.push(H(ee, I))
                    }
                    return z && Z.push(H(f.value ? .projectComplexityOptions, z)), W && Z.push(H(f.value ? .projectTimelineOptions, W)), `My project is ...

My project information: 
- ${Z.join(`
- `)}`
                });
            It(U, y => {
                T.value = y
            });

            function J(y, I) {
                const z = w.value ? .offsetHeight ? ? 0,
                    W = m.value ? .offsetHeight ? ? 0;
                x.value && k(x.value, null, 2.5);
                const Z = G.timeline({
                    onComplete: I
                });
                Z.fromTo(w.value, {
                    height: W
                }, {
                    height: z,
                    duration: 1,
                    ease: "power4.inOut"
                }, 0), Z.fromTo(y, {
                    y: "-100%"
                }, {
                    y: 0,
                    duration: 1,
                    ease: "power4.inOut"
                }, 0)
            }

            function D() {
                G.set(w.value, {
                    clearProps: "height"
                }), se.emit("refresh"), R()
            }

            function E(y, I) {
                const z = w.value ? .offsetHeight ? ? 0,
                    W = m.value ? .offsetHeight ? ? 0,
                    Z = G.timeline({
                        onComplete: I
                    });
                Z.fromTo(w.value, {
                    height: z
                }, {
                    height: W,
                    duration: 1,
                    ease: "power4.inOut"
                }, 0), Z.to(y, {
                    y: "-100%",
                    duration: 1,
                    ease: "power4.inOut"
                }, 0)
            }

            function N() {
                G.set(w.value, {
                    clearProps: "height"
                })
            }

            function h() {
                const y = "calculator";
                lt("Contact Form Opened", {
                    props: {
                        source: y
                    }
                }), se.emit("siteContactOpen", {
                    source: y
                })
            }
            return (y, I) => {
                const z = Tc,
                    W = ki;
                return q(), V("div", {
                    ref_key: "calculatorRef",
                    ref: w,
                    class: "b-calculator"
                }, [O("div", {
                    ref_key: "topRef",
                    ref: m,
                    class: "b__top u-white-box js-top"
                }, [F(f) ? .title ? (q(), V("h3", Uc, $(F(f).title), 1)) : ve("", !0), F(f) ? .text ? (q(), V("div", Wc, $(F(f).text), 1)) : ve("", !0), O("form", {
                    class: "b__form",
                    onSubmit: I[0] || (I[0] = xn(() => {}, ["prevent"]))
                }, [(q(!0), V(At, null, St(F(a), Z => (q(), mt(z, {
                    key: Z.index,
                    index: String(Z.index),
                    name: F(f) ? .[Z.nameKey],
                    active: g(Z.index)
                }, {
                    default: sn(() => [(q(!0), V(At, null, St(F(p)[Z.index], ee => (q(), mt(Yr(d[ee.component]), nn({
                        id: ee.id,
                        key: ee.id,
                        modelValue: F(c)[ee.id],
                        "onUpdate:modelValue": ue => F(c)[ee.id] = ue,
                        name: ee.id,
                        label: ee.label(F(f)),
                        required: ee.required
                    }, {
                        ref_for: !0
                    }, ee.props ? ee.props(F(f), F(c)) : {}), null, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "label", "required"]))), 128))]),
                    _: 2
                }, 1032, ["index", "name", "active"]))), 128))], 32)], 512), ke(Qs, {
                    name: "hint"
                }, {
                    default: sn(() => [F(x) ? ve("", !0) : (q(), V("p", Zc, $(F(f) ? .hint), 1))]),
                    _: 1
                }), ke(Qs, {
                    css: !1,
                    onEnter: J,
                    onAfterEnter: D,
                    onLeave: E,
                    onAfterLeave: N
                }, {
                    default: sn(() => [F(x) ? (q(), V("div", Gc, [O("div", Yc, [O("div", Jc, [O("div", Qc, $(F(f) ? .subtitle ? .timeline), 1), O("div", Kc, [O("span", {
                        ref_key: "timelineMinRef",
                        ref: _,
                        class: "b__num"
                    }, null, 512), I[2] || (I[2] = O("span", {
                        class: "b__sep"
                    }, " – ", -1)), O("span", {
                        ref_key: "timelineMaxRef",
                        ref: v,
                        class: "b__num"
                    }, null, 512), O("small", $c, $(F(P)), 1)])]), O("div", e2, [O("div", t2, $(F(f) ? .subtitle ? .estimation), 1), O("div", n2, [I[3] || (I[3] = vn(" €", -1)), O("span", {
                        ref_key: "priceMinRef",
                        ref: C,
                        class: "b__num"
                    }, null, 512), I[4] || (I[4] = vn("k – €", -1)), O("span", {
                        ref_key: "priceMaxRef",
                        ref: M,
                        class: "b__num"
                    }, null, 512), I[5] || (I[5] = vn("k ", -1))])])]), ke(W, {
                        ref_key: "btnRef",
                        ref: S,
                        elem: "button",
                        class: "b__btn js-btn",
                        variant: "primary",
                        color: "black",
                        size: "lg",
                        onClick: I[1] || (I[1] = xn(Z => h(), ["prevent"]))
                    }, {
                        default: sn(() => [vn($(F(f) ? .button), 1)]),
                        _: 1
                    }, 512)])) : ve("", !0)]),
                    _: 1
                })], 512)
            }
        }
    },
    o2 = {
        class: "b-recurring"
    },
    l2 = {
        ref: "topRef",
        class: "b-recurring__top u-white-box js-top"
    },
    a2 = {
        key: 0,
        class: "b__title t-h-sm"
    },
    c2 = {
        key: 1,
        class: "b__text t-t-2xs"
    },
    u2 = {
        class: "b__name t-l-sm"
    },
    d2 = {
        class: "b__pricing"
    },
    f2 = {
        class: "b__price t-pricing"
    },
    p2 = {
        class: "b__month t-t-md"
    },
    h2 = {
        class: "b__text t-t-2xs"
    },
    g2 = {
        class: "b__args t-t-3xs"
    },
    m2 = {
        __name: "BRecurring",
        props: {
            title: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            services: {
                type: Array,
                default: () => []
            }
        },
        setup(s) {
            const {
                $globalStrings: e
            } = eo();

            function i() {
                const t = "recurring";
                lt("Contact Form Opened", {
                    props: {
                        source: t
                    }
                }), se.emit("siteContactOpen", {
                    source: t
                })
            }
            return (t, n) => {
                const r = ki;
                return q(), V("div", o2, [O("div", l2, [s.title ? (q(), V("h3", a2, $(s.title), 1)) : ve("", !0), s.text ? (q(), V("div", c2, $(s.text), 1)) : ve("", !0)], 512), (q(!0), V(At, null, St(s.services, (l, o) => (q(), V("div", {
                    key: l.key,
                    class: cn(["u-white-box", o === 0 ? "b-recurring__left" : "b-recurring__right", o === 0 ? "js-left" : "js-right"])
                }, [O("div", u2, $(l.name), 1), O("div", d2, [O("span", f2, "€" + $(Number(l.price).toLocaleString("en-US")), 1), O("span", p2, $(F(e) ? .month), 1)]), O("div", h2, $(l.text), 1), O("ul", g2, [(q(!0), V(At, null, St(l.args, a => (q(), V("li", {
                    key: a,
                    class: "b__arg"
                }, $(a), 1))), 128))]), ke(r, {
                    elem: "button",
                    class: "b__btn",
                    variant: "primary",
                    color: "black",
                    size: "md",
                    onClick: n[0] || (n[0] = xn(a => i(), ["prevent"]))
                }, {
                    default: sn(() => [vn($(F(e) ? .startConversation), 1)]),
                    _: 1
                })], 2))), 128))])
            }
        }
    },
    v2 = {
        class: "s-pricing__left"
    },
    y2 = {
        key: 0,
        class: "s__title t-h-2xl"
    },
    b2 = {
        key: 1,
        class: "s__text rte"
    },
    C2 = {
        class: "s-pricing__right"
    },
    w2 = {
        __name: "SPricing",
        props: {
            title: {
                type: String,
                default: ""
            },
            text: {
                type: Array,
                default: () => []
            },
            toggle: {
                type: Object,
                default: () => ({
                    single: "Single project",
                    recurring: "Recurring"
                })
            },
            recurring: {
                type: Object,
                default: () => ({})
            }
        },
        setup(s) {
            const e = s,
                i = Xe("single"),
                t = Ue(() => [{
                    value: "single",
                    label: e.toggle ? .single || "Single project"
                }, {
                    value: "recurring",
                    label: e.toggle ? .recurring || "Recurring"
                }]),
                n = K("panels"),
                r = K("singlePanel"),
                l = K("recurringPanel");

            function o(c) {
                return c === "single" ? r.value : l.value
            }
            let a = null;

            function d(c) {
                const p = o(c),
                    u = o(c === "single" ? "recurring" : "single");
                if (!p || !u || !n.value) return;
                const g = c === "recurring",
                    x = r.value ? .querySelector(".js-top"),
                    w = [...r.value ? .querySelectorAll(".js-result") ? ? []],
                    m = r.value ? .querySelector(".js-btn"),
                    S = l.value ? .querySelector(".js-top"),
                    R = l.value ? .querySelector(".js-left"),
                    P = l.value ? .querySelector(".js-right"),
                    _ = [x, ...w, m].filter(Boolean),
                    v = [S, R, P].filter(Boolean),
                    C = g ? v : _,
                    M = g ? _ : v,
                    B = n.value.offsetHeight;
                n.value.style.height = `${B}px`;
                const b = p.offsetHeight;
                a ? .kill();
                const L = [..._, ...v],
                    k = L[0] ? window.getComputedStyle(L[0]).borderRadius : "1.5rem";
                G.set(L, {
                    clearProps: "clipPath"
                });
                const H = g ? `inset(0% 0% 0% 100% round ${k})` : `inset(0% 100% 0% 0% round ${k})`;
                a = G.timeline({
                    onComplete: () => {
                        p.style.opacity = "", u.style.opacity = "", n.value.style.height = "", C.forEach(T => {
                            T.style.clipPath = ""
                        }), M.forEach(T => {
                            T.style.clipPath = ""
                        })
                    }
                }), a.to(n.value, {
                    height: b,
                    duration: 1.25,
                    ease: "power4.inOut"
                }, 0), a.fromTo(p, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .5
                }, .25), a.fromTo(u, {
                    opacity: 1
                }, {
                    opacity: 0,
                    duration: .25
                }, .5), M.forEach((T, U) => {
                    a.fromTo(T, {
                        x: 0
                    }, {
                        x: g ? -100 : 100,
                        duration: 1.5,
                        ease: Un.backExpoInOut
                    }, U * .05), a.fromTo(T, {
                        clipPath: `inset(0% 0% 0% 0% round ${k})`
                    }, {
                        clipPath: g ? `inset(0% 100% 0% 0% round ${k})` : `inset(0% 0% 0% 100% round ${k})`,
                        duration: .75,
                        ease: "expo.out"
                    }, .5125 + U * .05)
                }), C.forEach((T, U) => {
                    a.fromTo(T, {
                        x: g ? 100 : -100,
                        clipPath: H
                    }, {
                        x: 0,
                        clipPath: `inset(0% 0% 0% 0% round ${k})`,
                        duration: .75,
                        ease: "expo.out"
                    }, .6 + U * .05)
                })
            }
            It(i, d);

            function f() {
                if (a ? .isActive() || !n.value ? .style.height) return;
                const c = o(i.value);
                c && (n.value.style.height = `${c.offsetHeight}px`)
            }
            return bt(() => {
                window.addEventListener("resize", f)
            }), ut(() => {
                a ? .kill(), a = null, window.removeEventListener("resize", f)
            }), (c, p) => {
                const u = wc,
                    g = r2,
                    x = m2;
                return q(), V("section", {
                    id: "pricing",
                    ref: "section",
                    class: cn(["s-pricing u-container", `is-${F(i)}`])
                }, [O("div", v2, [s.title ? (q(), V("h2", y2, $(s.title), 1)) : ve("", !0), s.text ? .length ? (q(), V("div", b2, [(q(!0), V(At, null, St(s.text, (w, m) => (q(), V("p", {
                    key: m
                }, $(w), 1))), 128))])) : ve("", !0)]), O("div", C2, [ke(u, {
                    modelValue: F(i),
                    "onUpdate:modelValue": p[0] || (p[0] = w => No(i) ? i.value = w : null),
                    options: F(t)
                }, null, 8, ["modelValue", "options"]), O("div", {
                    ref_key: "panels",
                    ref: n,
                    class: "s-pricing__panels"
                }, [O("div", {
                    ref_key: "singlePanel",
                    ref: r,
                    class: "s-pricing__panel s-pricing__panel--single"
                }, [ke(g)], 512), O("div", {
                    ref_key: "recurringPanel",
                    ref: l,
                    class: "s-pricing__panel s-pricing__panel--recurring"
                }, [ke(x, ri(Ho(s.recurring || {})), null, 16)], 512)], 512)])], 2)
            }
        }
    },
    x2 = {
        class: "t-t-md b__title"
    },
    _2 = ["aria-expanded", "aria-controls"],
    A2 = ["id"],
    S2 = ["innerHTML"],
    k2 = {
        __name: "BFaq",
        props: {
            question: {
                type: String,
                default: ""
            },
            answer: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const e = s,
                i = {
                    wrapper: K("wrapper"),
                    text: K("text")
                },
                t = qo(),
                n = Xe(!1);
            let r = !1;

            function l() {
                r = !0;
                const d = G.timeline({
                    onComplete() {
                        r = !1, se.emit("refresh")
                    }
                });
                d.to(i.text.value, {
                    autoAlpha: 0,
                    y: 10,
                    duration: .6,
                    ease: "power1.out",
                    clearProps: "all"
                }, .2), d.fromTo(i.wrapper.value, {
                    height: i.text.value.offsetHeight
                }, {
                    height: 0,
                    duration: .8,
                    ease: Un.backExpoInOut,
                    clearProps: "all"
                }, 0)
            }

            function o() {
                r = !0;
                const d = G.timeline({
                    onComplete() {
                        r = !1, se.emit("refresh")
                    }
                });
                d.from(i.wrapper.value, {
                    height: 0,
                    duration: .5,
                    ease: "power3.out",
                    clearProps: "all"
                }, 0), d.fromTo(i.text.value, {
                    autoAlpha: 0,
                    y: 20
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: .6,
                    ease: "power3.out",
                    clearProps: "all"
                }, 0)
            }

            function a() {
                r || (n.value ? l() : (o(), lt("FAQ Expanded", {
                    props: {
                        question: e.question
                    }
                })), n.value = !n.value)
            }
            return (d, f) => (q(), V("div", {
                class: cn(["b-faq", {
                    "is-open": F(n)
                }])
            }, [O("h3", x2, [O("button", {
                type: "button",
                class: "b__toggle",
                "aria-expanded": F(n),
                "aria-controls": F(t),
                onClick: a
            }, $(s.question), 9, _2)]), O("div", {
                id: F(t),
                ref: "wrapper",
                class: "b__wrapper"
            }, [O("div", {
                ref: "text",
                class: "b__text",
                innerHTML: s.answer
            }, null, 8, S2)], 8, A2)], 2))
        }
    },
    T2 = {
        class: "s__inner"
    },
    E2 = {
        class: "s__top"
    },
    M2 = {
        class: "s__title t-h-lg"
    },
    P2 = ["innerHTML"],
    R2 = {
        class: "s__questions"
    },
    I2 = {
        __name: "SFaq",
        props: {
            title: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            questions: {
                type: Array,
                default: () => []
            }
        },
        setup(s) {
            function e(t) {
                t.target.closest('a[href="#triggerSiteContact"]') && (t.preventDefault(), i())
            }

            function i() {
                lt("Contact Form Opened", {
                    props: {
                        source: "faq"
                    }
                }), se.emit("siteContactOpen", {
                    source: "faq"
                })
            }
            return (t, n) => {
                const r = k2;
                return q(), V("section", {
                    ref: "section",
                    class: "s-faq u-container",
                    onClick: e
                }, [O("div", T2, [O("div", E2, [O("h2", M2, $(s.title), 1), O("p", {
                    class: "s__text rte",
                    innerHTML: s.text
                }, null, 8, P2)]), O("div", R2, [(q(!0), V(At, null, St(s.questions, l => (q(), mt(r, nn({
                    key: l.questionId,
                    class: "s__question"
                }, {
                    ref_for: !0
                }, l), null, 16))), 128))])])], 512)
            }
        }
    },
    L2 = Ai(() => Si(() =>
        import ("./C52vxEqk.js").then(s => s.B), __vite__mapDeps([0, 1, 2, 3]),
        import.meta.url).then(s => s.default || s)),
    O2 = {
        ref: "section",
        class: "s-final-cta"
    },
    B2 = {
        ref: "container",
        class: "u-container"
    },
    D2 = {
        class: "s__inner"
    },
    N2 = ["innerHTML"],
    H2 = {
        ref: "fluidWrapper",
        class: "s__background-wrapper"
    },
    q2 = {
        ref: "ruler",
        class: "s__ruler"
    },
    z2 = .45,
    Xr = .72,
    Ur = 10,
    j2 = 50,
    Wr = 0,
    F2 = {
        __name: "SFinalCTA",
        props: {
            title: {
                type: String,
                default: ""
            },
            button: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            G.registerPlugin(re);
            const e = {
                    section: K("section"),
                    container: K("container"),
                    fluidWrapper: K("fluidWrapper"),
                    title: K("title"),
                    bFluid: K("bFluid"),
                    ruler: K("ruler")
                },
                i = Gr(e.section),
                {
                    isTouch: t
                } = Qr(),
                n = Xe(0);

            function r() {
                const b = "finalCTA";
                lt("Contact Form Opened", {
                    props: {
                        source: b
                    }
                }), se.emit("siteContactOpen", {
                    source: b
                })
            }
            let l = 120,
                o = 160;
            const a = Array.from({
                length: 5
            }, (b, L) => `hsl(344, 100%, ${86+(4-L)*2}%)`);

            function d() {
                e.ruler.value && (l = e.ruler.value.offsetWidth, o = e.ruler.value.offsetHeight)
            }
            let f = null,
                c = [],
                p = null,
                u = 0,
                g = 0;

            function x() {
                if (p) return p;
                if (!e.title.value || !e.bFluid.value ? .$el) return [];
                const b = e.bFluid.value.$el.getBoundingClientRect(),
                    L = e.title.value,
                    k = [],
                    H = document.createRange(),
                    T = document.createTreeWalker(L, NodeFilter.SHOW_TEXT);
                let U;
                for (; U = T.nextNode();) {
                    const J = U.textContent,
                        D = /\S+/g;
                    let E;
                    for (;
                        (E = D.exec(J)) !== null;) {
                        H.setStart(U, E.index), H.setEnd(U, E.index + E[0].length);
                        const N = H.getBoundingClientRect();
                        N.width > 0 && N.height > 0 && k.push({
                            x: N.left - b.left,
                            y: N.top - b.top - Wr,
                            w: N.width,
                            h: N.height + Wr
                        })
                    }
                }
                return p = k, k
            }

            function w(b, L) {
                const k = 3 + Math.random() * 3;
                return {
                    x: -l,
                    y: Math.random() * (L * .1),
                    vx: k,
                    vy: -(1 + Math.random() * 2),
                    trail: [],
                    lastTrail: 0,
                    baseIdx: u++ % 5,
                    trailCIdx: 0,
                    collapsing: !1
                }
            }

            function m(b, L, k) {
                b.collapsing = !0, b.trail.push({
                    x: b.x,
                    y: b.y,
                    cIdx: b.baseIdx,
                    w: l,
                    h: o
                });
                const H = g;
                setTimeout(() => {
                    g === H && c.push(w(L, k))
                }, 750);
                const T = b.trail.length;
                b.trail.forEach((U, J) => {
                    G.to(U, {
                        w: 0,
                        h: 0,
                        duration: .15,
                        delay: J * .035,
                        ease: "power3.in",
                        onComplete: J === T - 1 ? () => {
                            b.trail.length = 0
                        } : void 0
                    })
                })
            }

            function S() {
                if (!f) return;
                const b = f.width,
                    L = f.height,
                    k = Date.now();
                for (let H = c.length - 1; H >= 0; H--) {
                    const T = c[H];
                    if (T.collapsing) {
                        T.trail.length === 0 && c.splice(H, 1);
                        continue
                    }
                    k - T.lastTrail >= j2 && (T.trail.push({
                        x: T.x,
                        y: T.y,
                        cIdx: T.trailCIdx,
                        w: l,
                        h: o
                    }), T.trailCIdx = (T.trailCIdx + 1) % 5, T.lastTrail = k), T.vy += z2;
                    const U = T.x,
                        J = T.y;
                    T.x += T.vx, T.y += T.vy, T.y + o >= L && (T.y = L - o, T.vy = -Math.max(Math.abs(T.vy) * Xr, Ur), T.vx *= 1.1);
                    const D = x();
                    if (D.length > 0) {
                        const E = Math.min(...D.map(h => h.x)),
                            N = Math.min(...D.map(h => h.y));
                        T.x + l <= E && T.y + o > N && (T.y = N - o - 1, T.vy = -Math.max(Math.abs(T.vy) * Xr, Ur))
                    }
                    for (const E of D) {
                        const N = Math.min(T.x + l, E.x + E.w) - Math.max(T.x, E.x),
                            h = Math.min(T.y + o, E.y + E.h) - Math.max(T.y, E.y);
                        if (N > 0 && h > 0) {
                            const y = U + l <= E.x,
                                I = U >= E.x + E.w,
                                z = J + o <= E.y,
                                W = J >= E.y + E.h;
                            y ? (T.x = E.x - l - 1, T.vx = -Math.abs(T.vx) * (.4 + Math.random() * .8)) : I ? (T.x = E.x + E.w + 1, T.vx = Math.abs(T.vx) * (.4 + Math.random() * .8)) : z ? (T.y = E.y - o - 1, T.vy = Math.min(-Math.abs(T.vy) * .9, -10)) : W ? (T.y = E.y + E.h + 1, T.vy = Math.abs(T.vy) * .9) : N < h ? (T.x = T.vx < 0 ? E.x + E.w + 1 : E.x - l - 1, T.vx = -T.vx * (.4 + Math.random() * .8)) : (T.y = T.vy < 0 ? E.y + E.h + 1 : E.y - o - 1, T.vy = -T.vy * .9);
                            break
                        }
                    }(T.x > b || T.x + l < 0 || T.y > L || T.y + o < 0) && m(T, b, L)
                }
            }

            function R() {
                if (!f) return;
                const b = f.getContext("2d");
                b.clearRect(0, 0, f.width, f.height);
                for (const L of c) {
                    const k = L.trail.length;
                    for (let H = 0; H < k; H++) {
                        const T = L.trail[H];
                        b.fillStyle = a[T.cIdx];
                        const U = Math.round(T.x + (l - T.w) / 2),
                            J = Math.round(T.y + (o - T.h) / 2),
                            D = Math.max(0, Math.round(T.w)),
                            E = Math.max(0, Math.round(T.h));
                        b.fillRect(U, J, D, E)
                    }
                    L.collapsing || (b.fillStyle = a[L.baseIdx], b.fillRect(Math.round(L.x), Math.round(L.y), l, o))
                }
                b.globalAlpha = 1
            }

            function P() {
                i.value && (S(), R())
            }

            function _(b, L) {
                g++, c.forEach(k => k.trail.forEach(H => G.killTweensOf(H))), c = [w(b, L)]
            }

            function v() {
                e.bFluid.value ? .$el && (d(), f || (f = document.createElement("canvas")), f.width = e.fluidWrapper.value.clientWidth, f.height = e.fluidWrapper.value.clientHeight, _(f.width, f.height), t.value ? (f.classList.add("s__cards-canvas"), e.fluidWrapper.value.prepend(f)) : e.bFluid.value.setOverlayCanvas(f), Qi.add(P))
            }
            let C = null;
            It(() => e.bFluid.value, b => {
                b && v()
            }), bt(() => {
                v(), B(), se.on("resize", M)
            }), ut(() => {
                C ? .kill(), se.off("resize", M), Qi.remove(P), g++, c.forEach(b => b.trail.forEach(L => G.killTweensOf(L))), t.value && f ? .parentNode ? .removeChild(f), f = null, c = []
            });
            async function M() {
                f && (p = null, d(), f.width = e.fluidWrapper.value.clientWidth, f.height = e.fluidWrapper.value.clientHeight, _(f.width, f.height), C ? .kill(), C = null, await ct(), B())
            }

            function B() {
                e.section.value && (C = G.timeline({
                    scrollTrigger: {
                        trigger: e.section.value,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 0,
                        invalidateOnRefresh: !0
                    }
                }), C.fromTo(e.container.value, {
                    y: () => window.innerHeight * -.25
                }, {
                    y: 0,
                    duration: 1,
                    ease: "none"
                }, 0), C.fromTo(e.fluidWrapper.value, {
                    y: () => window.innerHeight * -.25
                }, {
                    y: 0,
                    duration: 1,
                    ease: "none",
                    onUpdate() {
                        n.value = G.getProperty(e.fluidWrapper.value, "y")
                    }
                }, 0))
            }
            return (b, L) => {
                const k = ki,
                    H = L2;
                return q(), V("section", O2, [O("div", B2, [O("div", D2, [O("h2", {
                    ref: "title",
                    class: "s__title t-h-3xl",
                    innerHTML: s.title
                }, null, 8, N2), ke(k, {
                    elem: "button",
                    class: "s__btn",
                    variant: "primary",
                    color: "black",
                    size: "lg",
                    onClick: L[0] || (L[0] = xn(T => r(), ["prevent"]))
                }, {
                    default: sn(() => [vn($(s.button), 1)]),
                    _: 1
                })])], 512), O("div", H2, [ke(H, {
                    ref: "bFluid",
                    class: "s__background",
                    fluid: !0,
                    "mask-el": e.title,
                    "container-y": F(n)
                }, null, 8, ["mask-el", "container-y"])], 512), O("div", q2, null, 512)], 512)
            }
        }
    },
    V2 = Ai(() => Si(() =>
        import ("./CKJT1Nh5.js"), __vite__mapDeps([6, 1, 2, 0, 3, 7]),
        import.meta.url).then(s => s.default || s)),
    X2 = Ai(() => Si(() =>
        import ("./C52vxEqk.js").then(s => s.B), __vite__mapDeps([0, 1, 2, 3]),
        import.meta.url).then(s => s.default || s)),
    U2 = ["inert", "aria-label"],
    W2 = {
        ref: "modalOuter",
        class: "s__outer"
    },
    Z2 = {
        ref: "modalInner",
        class: "s__inner"
    },
    G2 = {
        class: "s__scroller"
    },
    Y2 = {
        ref: "overlay",
        class: "s__overlay"
    },
    J2 = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    Q2 = {
        __name: "SModal",
        setup(s, {
            expose: e
        }) {
            const i = Xe(!1),
                t = Xe(!1),
                n = Xe(!1),
                r = Xe(!1),
                l = Xe(null);
            let o = null;
            const a = $r("contactFormSource", () => null);

            function d() {
                return c.block.value ? [...c.block.value.querySelectorAll(J2)].filter(_ => _.offsetParent !== null || _ === document.activeElement) : []
            }

            function f(_) {
                const v = d();
                if (!v.length) return;
                const C = v[0],
                    M = v[v.length - 1],
                    B = document.activeElement;
                _.shiftKey && (B === C || !c.block.value.contains(B)) ? (_.preventDefault(), M.focus()) : !_.shiftKey && B === M && (_.preventDefault(), C.focus())
            }
            const c = {
                block: K("block"),
                modalInner: K("modalInner"),
                modalOuter: K("modalOuter"),
                overlay: K("overlay")
            };
            e(c);
            const {
                $globalStrings: p
            } = eo();

            function u() {
                return window.getComputedStyle(c.modalInner.value).borderRadius || "1.5rem"
            }

            function g() {
                const _ = c.block.value;
                if (!_) return [];
                const v = _.querySelector(".js-form-title");
                if (!v) return [];
                const C = parseFloat(window.getComputedStyle(v).paddingTop) || 0;
                return [..._.querySelectorAll(C > 0 ? ".js-form-title, .js-form-texts, .js-form-right" : ".js-form-left, .js-form-right")]
            }

            function x() {
                c.modalInner.value && (c.modalInner.value.style = ""), c.modalOuter.value && (c.modalOuter.value.style = ""), c.overlay.value && (c.overlay.value.style = "")
            }

            function w(_) {
                if (!c.block.value) return;
                o && o.isActive() && (o.kill(), o = null, x(), se.emit("modalClose")), a.value = _ ? .source || "unknown", l.value = document.activeElement, r.value = !0, i.value = !0, se.emit("pauseCanvas", {
                    paused: !0,
                    source: "site-modal"
                }), window.lenis && window.lenis.stop();
                const v = g();
                ct(async () => {
                    t.value = !0, await ct(), c.block.value ? .querySelector("input, select, textarea") ? .focus()
                });
                const C = G.timeline(),
                    M = u();
                n.value = !0, C.set(c.modalOuter.value, {
                    willChange: "clip-path"
                }, 0), v.length && C.set(v, {
                    willChange: "clip-path, transform"
                }), C.fromTo(c.overlay.value, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1.25,
                    ease: "power3.out"
                }, 0), C.fromTo(c.modalOuter.value, {
                    clipPath: `inset( 100% 20% 0% 20% round ${M})`
                }, {
                    clipPath: `inset( 0% 0% 0% 0% round ${M})`,
                    duration: 1.5,
                    ease: "expo.inOut"
                }, 0), v.length && (C.fromTo(v, {
                    clipPath: `inset( 0% 0% 100% 0% round ${M})`
                }, {
                    clipPath: `inset( 0% 0% 0% 0% round ${M})`,
                    duration: 1,
                    ease: "expo.out",
                    stagger: -.025
                }, .75), C.fromTo(v, {
                    y: 50
                }, {
                    y: 0,
                    duration: 1.5,
                    ease: "expo.out",
                    stagger: -.025
                }, .75)), C.call(() => {
                    n.value = !1, c.modalOuter.value.style.clipPath = "", c.modalOuter.value.style.willChange = "", c.overlay.value.style.opacity = "", v.forEach(B => {
                        B.style.clipPath = "", B.style.willChange = ""
                    })
                })
            }

            function m() {
                if (n.value) return;
                se.emit("pauseCanvas", {
                    paused: !1,
                    source: "site-modal"
                }), o = G.timeline();
                const _ = u();
                o.set(c.modalOuter.value, {
                    willChange: "clip-path"
                }, 0), o.fromTo(c.overlay.value, {
                    opacity: 1
                }, {
                    opacity: 0,
                    duration: 1,
                    ease: "power1.out"
                }, 0), o.fromTo(c.modalInner.value, {
                    y: 0,
                    scale: 1
                }, {
                    y: "100%",
                    scale: .75,
                    duration: 1,
                    ease: "expo.inOut"
                }, 0), o.fromTo(c.modalOuter.value, {
                    clipPath: `inset( 0% 0% 0% 0% round ${_})`
                }, {
                    clipPath: `inset( 100% 20% 0% 20% round ${_})`,
                    duration: 1,
                    ease: "expo.inOut"
                }, 0), o.call(() => {
                    o = null, t.value = !1, i.value = !1, se.emit("modalClose"), x(), window.lenis && window.lenis.start(), l.value instanceof HTMLElement ? l.value.focus() : document.activeElement instanceof HTMLElement && document.activeElement.blur(), l.value = null
                })
            }

            function S(_) {
                i.value && (_.key === "Escape" ? m() : _.key === "Tab" && f(_))
            }
            let R = null,
                P = null;
            return bt(() => {
                se.on("siteContactOpen", w), window.addEventListener("keydown", S);
                const _ = () => {
                    r.value = !0
                };
                "requestIdleCallback" in window ? R = zo(_, {
                    timeout: 5e3
                }) : P = setTimeout(_, 3e3)
            }), ut(() => {
                se.off("siteContactOpen", w), window.removeEventListener("keydown", S), R !== null && "cancelIdleCallback" in window && jo(R), P !== null && clearTimeout(P), se.emit("pauseCanvas", {
                    paused: !1,
                    source: "site-modal"
                }), i.value && window.lenis && window.lenis.start()
            }), (_, v) => {
                const C = V2,
                    M = Fo,
                    B = ki,
                    b = X2;
                return q(), V("section", {
                    ref: "block",
                    class: cn(["s-modal", {
                        "is-open": F(i),
                        "is-visible": F(t)
                    }]),
                    inert: !F(i),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": F(p) ? .contactDialog,
                    "data-lenis-prevent": ""
                }, [O("div", W2, [O("div", Z2, [O("div", G2, [ke(M, null, {
                    default: sn(() => [ke(C, {
                        class: "s__form"
                    })]),
                    _: 1
                })]), ke(B, {
                    elem: "button",
                    class: "s__close",
                    variant: "primary",
                    color: "white",
                    size: "sm",
                    icon: "cross",
                    "aria-label": F(p) ? .closeModal,
                    onClick: v[0] || (v[0] = xn(L => m(), ["prevent"]))
                }, null, 8, ["aria-label"]), F(r) ? (q(), mt(b, {
                    key: 0,
                    fluid: !1,
                    light: !0,
                    static: !0,
                    class: "s__fluid"
                })) : ve("", !0)], 512)], 512), O("div", Y2, null, 512)], 10, U2)
            }
        }
    },
    K2 = {
        class: "l-front-page"
    },
    ws = "https://incredibles.dev/#person-antoine-wodniack",
    xs = "https://incredibles.dev/#person-olivier-guilleux",
    $2 = {
        __name: "index",
        async setup(s) {
            let e, i;
            const {
                locale: t
            } = Kr(), n = Vo(), {
                data: r
            } = ([e, i] = Ki(() => $i("index", f => es(`content_${f}`).path("/").first())), e = await e, i(), e);
            [e, i] = Ki(() => $i("contact", f => es(`contact_${f}`).first())), await e, i();
            const l = Ue(() => `https://incredibles.dev${n.path}`);
            Ks({
                title: () => r.value ? .seo ? .title || "Creative web development team for agencies",
                meta: [{
                    name: "description",
                    content: () => r.value ? .seo ? .description || "Two senior developers, 15+ years of experience, working seamlessly with agencies and brands worldwide on high-stakes web projects."
                }, {
                    property: "og:title",
                    content: () => r.value ? .seo ? .title || "Creative web development team for agencies"
                }, {
                    property: "og:description",
                    content: () => r.value ? .seo ? .description || "Two senior developers, 15+ years of experience, working seamlessly with agencies and brands worldwide on high-stakes web projects."
                }, {
                    property: "og:url",
                    content: () => l.value
                }, {
                    name: "twitter:title",
                    content: () => r.value ? .seo ? .title
                }, {
                    name: "twitter:description",
                    content: () => r.value ? .seo ? .description
                }]
            }), Ks({
                link: [{
                    rel: "canonical",
                    href: l
                }]
            });
            const o = Ue(() => r.value ? .faq ? .questions || []),
                a = Ue(() => o.value.filter(f => f.showInPublic !== !1)),
                d = ["Europe", "United Kingdom", "United States", "Australia", "Worldwide"];
            return Xo(() => [$s({
                "@id": ws,
                name: "Antoine Wodniack",
                jobTitle: t.value === "fr" ? "Co-fondateur & Creative Developer Senior" : "Co-founder & Senior Creative Developer",
                description: t.value === "fr" ? "Creative Developer senior avec 15+ ans d'expérience et 140+ projets livrés, spécialisé dans les sites animés à fort impact. Fondateur de Waaark et d'incredibles.dev. Plusieurs récompenses Awwwards, FWA et CSSDA." : "Senior creative developer with 15+ years of experience and 140+ projects shipped, specializing in animation-driven, high-impact websites. Founder of Waaark and incredibles.dev. Multiple Awwwards, FWA and CSSDA wins.",
                url: "https://wodniack.dev",
                nationality: "FR",
                knowsLanguage: ["en", "fr"],
                worksFor: {
                    "@id": "https://incredibles.dev/#organization"
                },
                sameAs: ["https://wodniack.dev", "https://www.linkedin.com/in/wodniack/", "https://github.com/antoinew", "https://codepen.io/wodniack", "https://www.awwwards.com/antoinewodniack/", "https://x.com/antoinew"]
            }), $s({
                "@id": xs,
                name: "Olivier Guilleux",
                jobTitle: t.value === "fr" ? "Co-fondateur & Développeur front-end senior" : "Co-founder & Senior Front-end Developer",
                description: t.value === "fr" ? "Développeur front-end et WordPress senior basé à Bordeaux, en France, en collaboration avec des agences sur des projets créatifs et éditoriaux depuis plus de dix ans. Anciens clients : Chanel, McCann et Cultura." : "Senior front-end and WordPress developer based in Bordeaux, France, partnering with agencies on creative and editorial projects for over a decade. Past clients include Chanel, McCann and Cultura.",
                url: "https://www.olivier-guilleux.com",
                nationality: "FR",
                knowsLanguage: ["en", "fr"],
                worksFor: {
                    "@id": "https://incredibles.dev/#organization"
                },
                sameAs: ["https://www.olivier-guilleux.com", "https://fr.linkedin.com/in/olivier-guilleux", "https://github.com/oguilleux", "https://www.awwwards.com/oligawwwards/", "https://x.com/oligtwit"]
            }), Uo({
                "@type": ["WebPage", "FAQPage"],
                inLanguage: t.value,
                datePublished: r.value ? .datePublished,
                dateModified: r.value ? .dateModified,
                mainEntity: o.value.map(f => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: f.answer
                    }
                }))
            }), Wo({
                "@type": "ProfessionalService",
                "@id": "https://incredibles.dev/#organization",
                name: "incredibles",
                url: "https://incredibles.dev",
                logo: "https://incredibles.dev/favicon/web-app-manifest-512x512.png",
                image: "https://incredibles.dev/favicon/web-app-manifest-512x512.png",
                description: t.value === "fr" ? "Équipe de creative dev pour agences — deux développeurs seniors, plus de 15 ans d'expérience, au service des agences pour des projets web où chaque détail compte : refonte, campagnes marketing ou lancements de produit." : "Creative web development team for agencies - two senior developers, 15+ years of experience, working seamlessly with agencies and brands worldwide on high-stakes web projects, from rebrands and marketing campaigns to product launches.",
                email: "hi@incredibles.dev",
                telephone: "+33749565776",
                priceRange: "5 000€ – 25 000€+",
                areaServed: d,
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "FR"
                },
                sameAs: ["https://www.linkedin.com/company/incredibles-dev/"],
                knowsLanguage: ["en", "fr"],
                founder: [{
                    "@id": ws
                }, {
                    "@id": xs
                }],
                employee: [{
                    "@id": ws
                }, {
                    "@id": xs
                }],
                numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    value: 2
                }
            }), {
                "@type": "Service",
                "@id": "https://incredibles.dev/#service",
                name: t.value === "fr" ? "Développement web créatif pour agences et marques" : "Creative web development for agencies and brands",
                serviceType: t.value === "fr" ? "Développement web créatif" : "Creative web development",
                provider: {
                    "@id": "https://incredibles.dev/#organization"
                },
                areaServed: d,
                availableLanguage: ["en", "fr"],
                description: t.value === "fr" ? "Équipe de creative dev pour rebrands, campagnes marketing, lancements de produit et sites créatifs. Démarrage généralement sous 2 semaines, livraison en 4 à 10 semaines." : "Creative web development team for rebrands, marketing campaigns, product launches and creative websites. New projects typically start within 2 weeks and ship in 4 to 10 weeks.",
                offers: [{
                    "@type": "Offer",
                    name: t.value === "fr" ? "Projet ponctuel" : "Single project",
                    priceCurrency: "EUR",
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "EUR",
                        minPrice: 5e3,
                        maxPrice: 25e3
                    }
                }, {
                    "@type": "Offer",
                    name: t.value === "fr" ? "Récurrent — Standard" : "Recurring — Standard",
                    price: 4999,
                    priceCurrency: "EUR",
                    priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        price: 4999,
                        priceCurrency: "EUR",
                        unitCode: "MON",
                        referenceQuantity: {
                            "@type": "QuantitativeValue",
                            value: 1,
                            unitCode: "MON"
                        }
                    }
                }, {
                    "@type": "Offer",
                    name: t.value === "fr" ? "Récurrent — Étendu" : "Recurring — Extended",
                    price: 9999,
                    priceCurrency: "EUR",
                    priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        price: 9999,
                        priceCurrency: "EUR",
                        unitCode: "MON",
                        referenceQuantity: {
                            "@type": "QuantitativeValue",
                            value: 1,
                            unitCode: "MON"
                        }
                    }
                }]
            }]), (f, c) => {
                const p = Za,
                    u = n0,
                    g = dc,
                    x = bc,
                    w = w2,
                    m = I2,
                    S = F2,
                    R = Q2;
                return q(), V("div", K2, [F(r) ? .hero ? (q(), mt(p, ri(nn({
                    key: 0
                }, F(r).hero)), null, 16)) : ve("", !0), F(r) ? .usps ? (q(), mt(u, ri(nn({
                    key: 1
                }, F(r).usps)), null, 16)) : ve("", !0), F(r) ? .execution ? (q(), mt(g, {
                    key: 2
                })) : ve("", !0), F(r) ? .catchphrase ? (q(), mt(x, ri(nn({
                    key: 3
                }, F(r).catchphrase)), null, 16)) : ve("", !0), F(r) ? .pricing ? (q(), mt(w, nn({
                    key: 4
                }, F(r).pricing, {
                    recurring: F(r).recurring
                }), null, 16, ["recurring"])) : ve("", !0), F(r) ? .faq ? (q(), mt(m, nn({
                    key: 5
                }, F(r).faq, {
                    questions: F(a)
                }), null, 16, ["questions"])) : ve("", !0), F(r) ? .finalCTA ? (q(), mt(S, ri(nn({
                    key: 6
                }, F(r).finalCTA)), null, 16)) : ve("", !0), ke(R)])
            }
        }
    },
    nu = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $2
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Un as E, Tc as _, Bc as a, nu as i
};