import {
    a7 as F,
    a8 as B,
    a9 as K,
    aa as z,
    ab as G,
    r as b,
    ac as E,
    ad as N,
    p as P,
    ae as S,
    af as j,
    ag as k,
    k as A,
    v as J,
    u as Q,
    G as X,
    a2 as Y,
    a1 as $,
    ah as Z,
    ai as ee,
    i as te
} from "./DNBXjO6S.js";
import {
    c as I,
    a as x,
    b as ne,
    f as re,
    h as oe
} from "./CQmIGG9a.js";

function se(e, n) {
    return n.reduce((t, o) => {
        const r = ae(e, o);
        return r !== void 0 && (t[o] = r), t
    }, {})
}

function ae(e, n) {
    return n.split(".").reduce((t, o) => t && t[o], e)
}
const w = "default",
    M = /^@|^v-on:/,
    H = /^:|^v-bind:/,
    ce = /^v-model/,
    ue = ["select", "textarea", "input"],
    ie = new Set(["math", "svg"]),
    L = new Set,
    pe = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map(e => [e, `prose-${e}`])),
    le = ["script", "base"],
    fe = F({
        name: "MDCRenderer",
        props: {
            body: {
                type: Object,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            class: {
                type: [String, Object],
                    default: void 0
            },
            tag: {
                type: [String, Boolean],
                default: void 0
            },
            prose: {
                type: Boolean,
                default: void 0
            },
            components: {
                type: Object,
                default: () => ({})
            },
            unwrap: {
                type: [Boolean, String],
                default: !1
            }
        },
        async setup(e) {
            const t = G() ? .appContext ? .app ? .$nuxt,
                o = t ? .$route || t ? ._route,
                {
                    mdc: r
                } = t ? .$config ? .public || {},
                a = r ? .components ? .customElements || r ? .components ? .custom;
            a && a.forEach(c => L.add(c));
            const p = b(() => ({ ...r ? .components ? .prose && e.prose !== !1 ? pe : {},
                    ...r ? .components ? .map || {},
                    ...E(e.data ? .mdc ? .components || {}),
                    ...e.components
                })),
                f = b(() => {
                    const c = (e.body ? .children || []).map(l => l.tag || l.type).filter(l => !D(l));
                    return Array.from(new Set(c)).sort().join(".")
                }),
                i = K({ ...e.data
                });
            z(() => e.data, c => {
                Object.assign(i, c)
            }), await Te(e.body, {
                tags: p.value
            });

            function u(c, l) {
                const v = c.split(".").length - 1;
                return c.split(".").reduce((g, h, C) => C == v && g ? (g[h] = l, g[h]) : typeof g == "object" ? g[h] : void 0, i)
            }
            return {
                tags: p,
                contentKey: f,
                route: o,
                runtimeData: i,
                updateRuntimeData: u
            }
        },
        render(e) {
            const {
                tags: n,
                tag: t,
                body: o,
                data: r,
                contentKey: a,
                route: p,
                unwrap: f,
                runtimeData: i,
                updateRuntimeData: u
            } = e;
            if (!o) return null;
            const c = { ...r,
                    tags: n,
                    $route: p,
                    runtimeData: i,
                    updateRuntimeData: u
                },
                l = t !== !1 ? R(t || c.component ? .name || c.component || "div") : void 0;
            return l ? B(l, { ...c.component ? .props,
                class : e.class,
                ...this.$attrs,
                key: a
            }, {
                default: v
            }) : v ? .();

            function v() {
                const g = q(o, B, {
                    documentMeta: c,
                    parentScope: c,
                    resolveComponent: R
                });
                return g ? .default ? f ? I(g.default(), typeof f == "string" ? f.split(" ") : ["*"]) : g.default() : null
            }
        }
    });

function de(e, n, t, o) {
    const {
        documentMeta: r,
        parentScope: a,
        resolveComponent: p
    } = t;
    if (e.type === "text") return n(j, e.value);
    if (e.type === "comment") return n(k, null, e.value);
    const f = e.tag,
        i = V(e, r.tags);
    if (e.tag === "binding") return me(e, n, r, a);
    const u = U(i) ? v => v : p;
    if (le.includes(P(i).toLowerCase())) return n("pre", {
        class: "mdc-renderer-dangerous-tag"
    }, "<" + i + ">" + ne(e) + "</" + i + ">");
    const c = u(i);
    typeof c == "object" && (c.tag = f);
    const l = ge(e, r);
    return o && (l.key = o), n(c, l, q(e, n, {
        documentMeta: r,
        parentScope: { ...a,
            ...l
        },
        resolveComponent: u
    }))
}

function q(e, n, t) {
    const {
        documentMeta: o,
        parentScope: r,
        resolveComponent: a
    } = t, f = (e.children || []).reduce((u, c) => {
        if (!_e(c)) return u[w].children.push(c), u;
        const l = Ce(c);
        return u[l] = u[l] || {
            props: {},
            children: []
        }, c.type === "element" && (u[l].props = c.props, u[l].children.push(...c.children || [])), u
    }, {
        [w]: {
            props: {},
            children: []
        }
    });
    return Object.entries(f).reduce((u, [c, {
        props: l,
        children: v
    }]) => (v.length && (u[c] = (g = {}) => {
        const h = se(g, Object.keys(l || {}));
        let C = v.map((s, d) => de(s, n, {
            documentMeta: o,
            parentScope: { ...r,
                ...h
            },
            resolveComponent: a
        }, String(s.props ? .key || d)));
        return l ? .unwrap && (C = I(C, l.unwrap)), Pe(C)
    }), u), {})
}

function me(e, n, t, o = {}) {
    const r = { ...t.runtimeData,
            ...o,
            $document: t,
            $doc: t
        },
        a = /\.|\[(\d+)\]/,
        f = (e.props ? .value.trim().split(a).filter(Boolean)).reduce((u, c) => {
            if (u && c in u) return typeof u[c] == "function" ? u[c]() : u[c]
        }, r),
        i = e.props ? .defaultValue;
    return n(j, f ? ? i ? ? "")
}

function ge(e, n) {
    const {
        tag: t = "",
        props: o = {}
    } = e;
    return Object.keys(o).reduce(function(r, a) {
        if (a === "__ignoreMap") return r;
        const p = o[a];
        if (ce.test(a)) return ve(a, p, r, n, {
            native: ue.includes(t)
        });
        if (a === "v-bind") return ye(a, p, r, n);
        if (M.test(a)) return he(a, p, r, n);
        if (H.test(a)) return be(a, p, r, n);
        const {
            attribute: f
        } = re(oe, a);
        return Array.isArray(p) && p.every(i => typeof i == "string") ? (r[f] = p.join(" "), r) : (r[f] = p, r)
    }, {})
}

function ve(e, n, t, o, {
    native: r
}) {
    const a = e.match(/^v-model:([^=]+)/) ? .[1] || "modelValue",
        p = r ? "value" : a,
        f = r ? "onInput" : `onUpdate:${a}`;
    return t[p] = O(n, o.runtimeData), t[f] = i => {
        o.updateRuntimeData(n, r ? i.target ? .value : i)
    }, t
}

function ye(e, n, t, o) {
    const r = O(n, o);
    return t = Object.assign(t, r), t
}

function he(e, n, t, o) {
    return e = e.replace(M, ""), t.on = t.on || {}, t.on[e] = () => O(n, o), t
}

function be(e, n, t, o) {
    return e = e.replace(H, ""), t[e] = O(n, o), t
}
const R = e => {
    if (typeof e == "string") {
        if (D(e)) return e;
        const n = N(P(e), !1);
        return !e || n ? .name === "AsyncComponentWrapper" || typeof n == "string" ? n : "setup" in n ? S(() => new Promise(t => t(n))) : n
    }
    return e
};

function O(e, n) {
    const t = e.split(".").reduce((o, r) => typeof o == "object" ? o[r] : void 0, n);
    return typeof t > "u" ? J(e) : t
}

function Ce(e) {
    let n = "";
    for (const t of Object.keys(e.props || {}))
        if (!(!t.startsWith("#") && !t.startsWith("v-slot:"))) {
            n = t.split(/[:#]/, 2)[1];
            break
        }
    return n || w
}

function _e(e) {
    return e.tag === "template"
}

function U(e) {
    return ie.has(e)
}

function Pe(e) {
    const n = [];
    for (const t of e) {
        const o = n[n.length - 1];
        t.type === j && o ? .type === j ? o.children = o.children + t.children : n.push(t)
    }
    return n
}
async function Te(e, n) {
    if (!e) return;
    const t = Array.from(new Set(o(e, n)));
    await Promise.all(t.map(async r => {
        if (r ? .render || r ? .ssrRender || r ? .__ssrInlineRender) return;
        const a = R(r);
        a ? .__asyncLoader && !a.__asyncResolved && await a.__asyncLoader()
    }));

    function o(r, a) {
        const p = r.tag;
        if (r.type === "text" || p === "binding" || r.type === "comment") return [];
        const f = V(r, a.tags);
        if (U(f)) return [];
        const i = [];
        r.type !== "root" && !D(f) && i.push(f);
        for (const u of r.children || []) i.push(...o(u, a));
        return i
    }
}

function V(e, n) {
    const t = e.tag;
    return !t || typeof e.props ? .__ignoreMap < "u" ? t : n[t] || n[P(t)] || n[A(e.tag)] || t
}

function D(e) {
    return (typeof e == "string" ? L.has(e) : !1) || x.has(e)
}
const je = Object.assign(fe, {
        __name: "MDCRenderer"
    }),
    Oe = {},
    Se = ["ProseA", "ProseBlockquote", "ProseCode", "ProseEm", "ProseH1", "ProseH2", "ProseH3", "ProseH4", "ProseH5", "ProseH6", "ProseHr", "ProseImg", "ProseLi", "ProseOl", "ProseP", "ProsePre", "ProseScript", "ProseStrong", "ProseTable", "ProseTbody", "ProseTd", "ProseTh", "ProseThead", "ProseTr", "ProseUl"],
    xe = [],
    we = {
        __name: "ContentRenderer",
        props: {
            value: {
                type: Object,
                required: !0
            },
            excerpt: {
                type: Boolean,
                default: !1
            },
            tag: {
                type: String,
                default: "div"
            },
            components: {
                type: Object,
                default: () => ({})
            },
            data: {
                type: Object,
                default: () => ({})
            },
            prose: {
                type: Boolean,
                default: void 0
            },
            class: {
                type: [String, Object],
                    default: void 0
            },
            unwrap: {
                type: [Boolean, String],
                default: !1
            }
        },
        setup(e) {
            const n = ["render", "ssrRender", "__ssrInlineRender"],
                t = e,
                o = !0,
                r = b(() => {
                    let s = t.value.body || t.value;
                    return t.excerpt && t.value.excerpt && (s = t.value.excerpt), s.type === "minimal" || s.type === "minimark" ? te({
                        value: s.value
                    }) : s
                }),
                a = b(() => !r.value ? .children ? .length),
                p = b(() => {
                    const {
                        body: s,
                        excerpt: d,
                        ...m
                    } = t.value;
                    return { ...m,
                        ...t.data
                    }
                }),
                f = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map(s => [s, `prose-${s}`])),
                {
                    mdc: i
                } = Q().public || {},
                u = b(() => t.data.mdc),
                c = b(() => ({ ...i ? .components ? .prose && t.prose !== !1 ? f : {},
                    ...i ? .components ? .map || {},
                    ...E(u.value ? .components || {}),
                    ...t.components
                })),
                l = b(() => r.value ? g(r.value, {
                    tags: c.value
                }) : {});

            function v(s) {
                let d = s;
                if (typeof s == "string") {
                    if (x.has(s)) return s;
                    if (Se.includes(P(s))) d = N(s, !1);
                    else if (xe.includes(P(s))) {
                        const y = Oe[P(s)];
                        d = y ? S(y) : void 0
                    }
                    if (typeof d == "string") return d
                }
                if (!d) return d;
                const m = d;
                return "__asyncLoader" in m ? m : "setup" in m ? S(() => Promise.resolve(m)) : m
            }

            function g(s, d) {
                if (!s) return;
                const m = Array.from(new Set(h(s, d))),
                    y = {};
                for (const [_, T] of m)
                    if (!y[_]) {
                        if (typeof T == "object" && n.some(W => Object.hasOwnProperty.call(T, W))) {
                            y[_] = T;
                            continue
                        }
                        y[_] = v(T)
                    }
                return y
            }

            function h(s, d) {
                const m = s.tag;
                if (s.type === "text" || m === "binding" || s.type === "comment") return [];
                const y = C(s, d.tags),
                    _ = [];
                s.type !== "root" && !x.has(y) && _.push([m, y]);
                for (const T of s.children || []) _.push(...h(T, d));
                return _
            }

            function C(s, d) {
                const m = s.tag;
                return !m || typeof s.props ? .__ignoreMap < "u" ? m : d[m] || d[P(m)] || d[A(s.tag)] || m
            }
            return (s, d) => a.value ? ee(s.$slots, "empty", {
                key: 1,
                body: r.value,
                data: p.value,
                dataContentId: $(o) ? e.value.id : void 0
            }) : (X(), Y(je, {
                key: 0,
                body: r.value,
                data: p.value,
                class: Z(t.class),
                tag: t.tag,
                prose: t.prose,
                unwrap: t.unwrap,
                components: l.value,
                "data-content-id": $(o) ? e.value.id : void 0
            }, null, 8, ["body", "data", "class", "tag", "prose", "unwrap", "components", "data-content-id"]))
        }
    },
    Be = Object.assign(we, {
        __name: "ContentRenderer"
    });
export {
    Be as _
};