import {
    _ as v
} from "./DFcaFsiw.js";
import {
    E as h,
    X as g,
    Y as f,
    Z as b,
    F as r,
    a0 as y,
    H as x,
    I as o,
    J as C,
    a1 as l,
    a2 as k,
    a3 as B,
    a4 as w,
    C as L,
    G as u,
    a5 as E,
    a6 as H,
    r as n
} from "./DNBXjO6S.js";
import "./CQmIGG9a.js";
const I = {
        class: "l-legal"
    },
    P = {
        class: "u-container"
    },
    $ = {
        class: "l__content"
    },
    A = {
        class: "l__title t-h-lg u-white-box"
    },
    M = {
        __name: "legals",
        async setup(N) {
            let t, i;
            const {
                locale: a
            } = g(), d = f(), {
                data: e
            } = ([t, i] = b(() => w("legals", c => L(`legals_${c}`).first())), t = await t, i(), t), s = n(() => `https://incredibles.dev${d.path}`), _ = n(() => a.value === "en" ? "https://incredibles.dev/" : `https://incredibles.dev/${a.value}/`), p = n(() => a.value === "fr" ? "Accueil" : "Home");
            return r({
                title: () => e.value ? .title,
                meta: [{
                    name: "description",
                    content: () => e.value ? .description
                }, {
                    property: "og:title",
                    content: () => e.value ? .title
                }, {
                    property: "og:description",
                    content: () => e.value ? .description
                }, {
                    property: "og:url",
                    content: () => s.value
                }]
            }), r({
                link: [{
                    rel: "canonical",
                    href: s
                }]
            }), y(() => [E({
                name: e.value ? .title,
                description: e.value ? .description,
                inLanguage: a.value,
                datePublished: e.value ? .datePublished,
                dateModified: e.value ? .dateModified
            }), H({
                itemListElement: [{
                    name: p.value,
                    item: _.value
                }, {
                    name: e.value ? .title,
                    item: s.value
                }]
            })]), (c, R) => {
                const m = v;
                return u(), x("div", I, [o("div", P, [o("div", $, [o("h1", A, C(l(e) ? .title), 1), l(e) ? (u(), k(m, {
                    key: 0,
                    value: l(e),
                    class: "l__body u-white-box rte t-t-sm"
                }, null, 8, ["value"])) : B("", !0)])])])
            }
        }
    },
    q = h(M, [
        ["__scopeId", "data-v-955a33ff"]
    ]);
export {
    q as
    default
};