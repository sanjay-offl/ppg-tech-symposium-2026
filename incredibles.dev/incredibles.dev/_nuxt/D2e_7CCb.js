import {
    _ as m
} from "./DFcaFsiw.js";
import {
    E as h,
    X as f,
    Y as y,
    Z as g,
    F as r,
    a0 as b,
    H as x,
    I as o,
    J as C,
    a1 as n,
    a2 as k,
    a3 as B,
    a4 as w,
    C as L,
    G as u,
    a5 as E,
    a6 as H,
    r as i
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
        __name: "privacy",
        async setup(N) {
            let t, l;
            const {
                locale: a
            } = f(), d = y(), {
                data: e
            } = ([t, l] = g(() => w("privacy", c => L(`privacy_${c}`).first())), t = await t, l(), t), s = i(() => `https://incredibles.dev${d.path}`), _ = i(() => a.value === "en" ? "https://incredibles.dev/" : `https://incredibles.dev/${a.value}/`), p = i(() => a.value === "fr" ? "Accueil" : "Home");
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
            }), b(() => [E({
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
                const v = m;
                return u(), x("div", I, [o("div", P, [o("div", $, [o("h1", A, C(n(e) ? .title), 1), n(e) ? (u(), k(v, {
                    key: 0,
                    value: n(e),
                    class: "l__body u-white-box rte t-t-sm"
                }, null, 8, ["value"])) : B("", !0)])])])
            }
        }
    },
    q = h(M, [
        ["__scopeId", "data-v-497ffd13"]
    ]);
export {
    q as
    default
};