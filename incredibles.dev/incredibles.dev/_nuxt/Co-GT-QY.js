const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./C52vxEqk.js", "./DNBXjO6S.js", "./entry.2V6dYgIy.css", "./BFluid.bxahTSu7.css"]))) => i.map(i => d[i]);
import {
    aO as H,
    ao as $,
    ay as G,
    P as f,
    aa as A,
    aj as i,
    Q as J,
    S as Q,
    G as _,
    H as F,
    I as h,
    K as E,
    L as S,
    M as q,
    J as B,
    a1 as o,
    av as g,
    ar as W,
    a3 as X,
    a2 as Y,
    aP as Z,
    ah as ee,
    aF as ne,
    D as y,
    aq as te,
    R as w,
    U as V,
    ae as le,
    _ as oe,
    ap as ae
} from "./DNBXjO6S.js";
import {
    E as se
} from "./D5jJLml9.js";
import {
    u as re
} from "./C52vxEqk.js";
const ue = H("/videos/showreel-loop-poster.webp"),
    ie = le(() => oe(() =>
        import ("./C52vxEqk.js").then(c => c.B), __vite__mapDeps([0, 1, 2, 3]),
        import.meta.url).then(c => c.default || c)),
    ce = {
        class: "b-showreel"
    },
    de = {
        ref: "thumbnail",
        class: "b__thumbnail"
    },
    me = ["inert", "aria-label"],
    ve = {
        ref: "modalInner",
        class: "b__modal-inner"
    },
    fe = {
        ref: "overlay",
        class: "b__overlay"
    },
    M = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    R = null,
    he = {
        __name: "BShowreel",
        setup(c) {
            const a = $("showreel"),
                {
                    $globalStrings: k
                } = G(),
                {
                    isTouch: D
                } = ae(),
                s = y(!1),
                T = y(!1),
                p = y(null),
                t = {
                    videoEl: f("videoEl"),
                    modalInner: f("modalInner"),
                    overlay: f("overlay"),
                    thumbEl: f("thumbEl"),
                    thumbnail: f("thumbnail")
                },
                L = re(t.thumbnail);

            function N() {
                const e = t.thumbEl.value,
                    n = a.value ? .loopSrc;
                if (!(!e || !n)) {
                    if (!L.value) {
                        e.pause();
                        return
                    }
                    e.getAttribute("src") !== n && (e.setAttribute("src", n), e.load()), e.play().catch(() => {})
                }
            }
            A([L, () => a.value ? .loopSrc], async () => {
                await i(), N()
            });
            const d = y(!1);

            function z() {
                return t.modalInner.value ? [...t.modalInner.value.querySelectorAll(M)].filter(e => e.offsetParent !== null || e === document.activeElement) : []
            }

            function K(e) {
                const n = z();
                if (!n.length) return;
                const l = n[0],
                    m = n[n.length - 1],
                    v = document.activeElement;
                e.shiftKey && (v === l || !t.modalInner.value.contains(v)) ? (e.preventDefault(), m.focus()) : !e.shiftKey && v === m && (e.preventDefault(), l.focus())
            }
            let r = null,
                b = null;

            function C() {
                const e = t.videoEl.value,
                    n = a.value;
                if (!e || !n ? .src) return;
                const l = n.hevcSrc && e.canPlayType('video/mp4; codecs="hvc1"') ? n.hevcSrc : n.src;
                e.getAttribute("src") !== l && (e.setAttribute("src", l), e.load())
            }

            function I() {
                const e = t.videoEl.value;
                if (e) {
                    e.pause();
                    try {
                        e.currentTime = 0
                    } catch (n) {
                        console.warn("Could not reset video time", n)
                    }
                }
            }

            function U(e) {
                if (e) {
                    if (e.requestFullscreen) return e.requestFullscreen();
                    if (e.webkitRequestFullscreen) return e.webkitRequestFullscreen();
                    if (e.msRequestFullscreen) return e.msRequestFullscreen();
                    if (e.webkitEnterFullscreen) return e.webkitEnterFullscreen()
                }
            }

            function x(e) {
                if (!e) return () => {};
                const n = () => {
                        !(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) && d.value && u()
                    },
                    l = () => {
                        d.value && u()
                    };
                return document.addEventListener("fullscreenchange", n), document.addEventListener("webkitfullscreenchange", n), document.addEventListener("MSFullscreenChange", n), e.addEventListener("webkitendfullscreen", l), () => {
                    document.removeEventListener("fullscreenchange", n), document.removeEventListener("webkitfullscreenchange", n), document.removeEventListener("MSFullscreenChange", n), e.removeEventListener("webkitendfullscreen", l)
                }
            }

            function j() {
                if (clearTimeout(R), te("Showreel Opened"), p.value = document.activeElement, s.value = !0, C(), D.value && t.videoEl.value) {
                    d.value = !0, w.emit("pauseCanvas", {
                        paused: !0,
                        source: "showreel"
                    }), U(t.videoEl.value), t.videoEl.value.play().catch(() => {});
                    return
                }
                i(async () => {
                    T.value = !0, await i(), t.modalInner.value ? .querySelector(M) ? .focus()
                }), i(() => {
                    const n = t.videoEl.value;
                    n && (n.currentTime = 0, n.play().catch(() => {}))
                });
                const e = V.timeline();
                b = e, e.fromTo(t.overlay.value, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1.25,
                    ease: "power3.out"
                }, 0), e.fromTo(t.modalInner.value, {
                    y: "70%"
                }, {
                    y: "0%",
                    duration: 1.75,
                    ease: se.expoInOutBack
                }, .15), e.fromTo(t.modalInner.value, {
                    clipPath: "inset( 40% 30% 40% 30% round 1.5rem)"
                }, {
                    clipPath: "inset( 30% 30% 30% 30% round 1.5rem)",
                    duration: 1,
                    ease: "expo.out"
                }, .15), e.fromTo(t.modalInner.value, {
                    clipPath: "inset( 30% 30% 30% 30% round 1.5rem)"
                }, {
                    clipPath: "inset( 0% 0% 0% 0% round 0rem)",
                    duration: 3,
                    ease: "expo.inOut"
                }, .65), e.fromTo(t.videoEl.value, {
                    scale: .75
                }, {
                    scale: 1,
                    duration: 3,
                    ease: "power2.inOut"
                }, .65), e.call(() => {
                    w.emit("pauseCanvas", {
                        paused: !0,
                        source: "showreel"
                    })
                })
            }

            function u() {
                if (d.value) {
                    I(), d.value = !1, s.value = !1, w.emit("pauseCanvas", {
                        paused: !1,
                        source: "showreel"
                    }), P();
                    return
                }
                if (b && b.isActive()) return;
                w.emit("pauseCanvas", {
                    paused: !1,
                    source: "showreel"
                });
                const e = V.timeline();
                b = e, e.to(t.overlay.value, {
                    opacity: 0,
                    duration: 0,
                    ease: "power1.out"
                }, 0), e.to(t.modalInner.value, {
                    y: "60%",
                    clipPath: "inset( 40% 40% 40% 40% round 1.5rem)",
                    duration: 1,
                    ease: "expo.inOut"
                }, 0), e.to(t.videoEl.value, {
                    scale: .5,
                    duration: 1,
                    ease: "power2.inOut"
                }, 0), e.call(() => {
                    I(), T.value = !1, s.value = !1, P()
                })
            }

            function P() {
                p.value instanceof HTMLElement && p.value.focus(), p.value = null
            }

            function O(e) {
                s.value && (e.key === "Escape" ? u() : e.key === "Tab" && K(e))
            }
            return J(() => {
                document.addEventListener("keydown", O), i(() => {
                    r && r(), r = x(t.videoEl.value)
                })
            }), A(() => a.value ? .src, async () => {
                await i(), r && r(), r = x(t.videoEl.value), s.value && (C(), t.videoEl.value ? .play().catch(() => {}))
            }), Q(() => {
                document.removeEventListener("keydown", O), clearTimeout(R), r && r()
            }), (e, n) => {
                const l = W,
                    m = ie,
                    v = ne;
                return _(), F("div", ce, [h("div", de, [E(l, {
                    elem: "button",
                    class: "b__link",
                    variant: "secondary",
                    color: "white",
                    size: "sm",
                    onClick: g(j, ["prevent"])
                }, {
                    default: S(() => [q(B(o(a) ? .link), 1)]),
                    _: 1
                }), o(a) ? .loopSrc ? (_(), F("video", {
                    ref: "thumbEl",
                    key: o(a).loopSrc,
                    class: "b__thumb",
                    preload: "none",
                    poster: ue,
                    controlsList: "nodownload noremoteplayback",
                    disablePictureInPicture: "",
                    muted: "",
                    loop: "",
                    playsinline: "",
                    crossorigin: "anonymous",
                    onContextmenu: n[0] || (n[0] = g(() => {}, ["prevent"]))
                }, null, 32)) : X("", !0)], 512), E(v, null, {
                    default: S(() => [(_(), Y(Z, {
                        to: "body"
                    }, [h("div", {
                        class: ee(["b__modal", {
                            "is-open": o(s),
                            "is-visible": o(T)
                        }]),
                        inert: !o(s),
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": o(k) ? .showreelDialog,
                        onClick: u
                    }, [h("div", ve, [E(l, {
                        elem: "button",
                        class: "b__close",
                        variant: "primary",
                        color: "white",
                        size: "sm",
                        icon: "cross",
                        "aria-label": o(k) ? .closeShowreel,
                        onClick: g(u, ["stop"])
                    }, {
                        default: S(() => [q(B(o(k) ? .closeShowreel), 1)]),
                        _: 1
                    }, 8, ["aria-label"]), (_(), F("video", {
                        ref: "videoEl",
                        key: o(a) ? .src,
                        class: "b__modal__video",
                        playsinline: "",
                        preload: "none",
                        crossorigin: "anonymous",
                        controlsList: "nodownload noremoteplayback",
                        disablePictureInPicture: "",
                        onEnded: u
                    }, null, 32)), E(m, {
                        fluid: !1,
                        dark: !0,
                        paused: !o(s),
                        class: "b__fluid"
                    }, null, 8, ["paused"])], 512), h("div", fe, null, 512)], 10, me)]))]),
                    _: 1
                })])
            }
        }
    };
export {
    he as
    default
};