import {
    G as pe,
    H as Me,
    an as ut,
    Q as Ge,
    S as Ie,
    D as Te,
    aa as ct,
    aI as ft,
    T as Ce,
    aj as vt,
    R as D,
    I as mt,
    a1 as dt,
    a2 as ht,
    a3 as xt,
    P as pt,
    ap as Tt
} from "./DNBXjO6S.js";
const Et = {
    __name: "BCursor",
    props: {
        x: {
            type: Number,
            default: -8
        },
        y: {
            type: Number,
            default: -8
        }
    },
    setup(C) {
        return (Y, G) => (pe(), Me("div", {
            class: "b-cursor",
            "aria-hidden": "true",
            style: ut({
                transform: `translate(${C.x}px, ${C.y}px)`
            })
        }, null, 4))
    }
};

function Rt(C) {
    const Y = Te(!1);
    let G = null;
    return Ge(() => {
        G = new IntersectionObserver(se => {
            se.forEach(x => {
                Y.value = x.isIntersecting
            })
        }), G.observe(C.value)
    }), Ie(() => {
        G.disconnect()
    }), Y
}
const gt = {
        class: "b-fluid",
        "aria-hidden": "true"
    },
    _t = {
        ref: "canvas",
        class: "b-fluid__canvas"
    },
    St = `
  precision highp float;
  attribute vec2 aPosition;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform vec2 texelSize;
  void main () {
    vUv = aPosition * 0.5 + 0.5;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,
    yt = `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;
  void main () {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`,
    Dt = `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;
  uniform float value;
  void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
  }
`,
    bt = `
  precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform sampler2D uTextMask;
  uniform sampler2D uOverlay;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_fluidAmount;
  uniform float u_hasTextMask;
  uniform float u_hasOverlay;
  uniform float u_light;
  uniform float u_dark;
  uniform float u_pixelRatio;

  float hash(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p.yx + 19.19);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p, float time) {
    float value = 0.0;
    float amplitude = 0.5;
    float phase = time * 0.015;
    for (int i = 0; i < 2; i++) {
      value += amplitude * noise(p);
      float fi = phase + float(i) * 0.5;
      p = p * 1.5 + vec2(12.7 + cos(fi) * 0.5, 4.3 + sin(fi) * 0.5);
      amplitude *= 0.5;
    }
    return value;
  }

  float shapeNoise(vec2 p, float time) {
    vec2 offset = vec2(fbm(p + vec2(7.1, -3.9), time) - 0.5) * 3.0;
    return fbm(p + offset, time);
  }

  float bayer4(vec2 pixelPos) {
    vec2 p  = mod(pixelPos, 4.0);
    vec2 p2 = mod(p, 2.0);
    vec2 p4 = floor(p * 0.5);
    float inner = 2.0 * (p2.x + p2.y - 2.0 * p2.x * p2.y) + p2.y;
    float outer = 2.0 * (p4.x + p4.y - 2.0 * p4.x * p4.y) + p4.y;
    return (4.0 * inner + outer) / 16.0;
  }

  void main () {
    // --- Dithering ---
    float blockSize = 2.5 * u_pixelRatio;
    vec2 blockCoord = floor(gl_FragCoord.xy / blockSize);
    vec2 blockCenter = (blockCoord + 0.5) * blockSize;
    vec2 blockUv = blockCenter / u_resolution.xy;
    vec2 centeredUv = blockUv - 0.5;
    centeredUv.x *= u_resolution.x / max(u_resolution.y, 1.0);

    float t = u_time * 0.03;
    vec2 flow = vec2(t, -t * 0.65);
    vec2 noiseUv = vec2(centeredUv.x * 1.5, centeredUv.y * 1.5 * 0.45) + flow;
    float base = shapeNoise(noiseUv, u_time);
    base = (base - 0.5) * 6.0 + 0.5;
    base *= 1.5;
    base = clamp(base, 0.0, 1.0);

    // --- Fluid influence ---
    vec3 dye = texture2D(uTexture, vUv).rgb;
    float fluidLum = max(dye.r, max(dye.g, dye.b));
    // Dye is stored at ~0.15 intensity scale; normalise to 0..1
    float fluidStrength = clamp(fluidLum / 0.15, 0.0, 1.0) * u_fluidAmount;

    // --- Chromatic aberration setup ---
    float caAmount = fluidStrength * mix(17.0, 10.0, u_dark) / u_resolution.x;
    vec2 caDir = normalize(vec2(1.0, 0.4));
    vec2 caDirPerp = vec2(caDir.y, caDir.x);

    // --- Mask sampling (full RGB to carry card colours) ---
    // Text mask (static, DPR-resolution) and overlay (dynamic, CSS-pixel resolution)
    // are kept as separate GPU textures and combined per-sample with max().
    // White pixels are text (sat ≈ 0); coloured pixels are cards (sat > 0).
    vec2 uvC = vec2(vUv.x, 1.0 - vUv.y);
    vec2 uvR = vec2(vUv.x + caDir.x * caAmount, 1.0 - (vUv.y + caDir.y * caAmount));
    vec2 uvG = vec2(vUv.x + caDirPerp.x * caAmount * 0.5, 1.0 - (vUv.y + caDirPerp.y * caAmount * 0.5));
    vec3 maskC = max(texture2D(uTextMask, uvC).rgb * u_hasTextMask, texture2D(uOverlay, uvC).rgb * u_hasOverlay);
    vec3 maskR = max(texture2D(uTextMask, uvR).rgb * u_hasTextMask, texture2D(uOverlay, uvR).rgb * u_hasOverlay);
    vec3 maskG = max(texture2D(uTextMask, uvG).rgb * u_hasTextMask, texture2D(uOverlay, uvG).rgb * u_hasOverlay);

    // Blend alpha = max channel (presence indicator)
    float textMask  = max(maskC.r, max(maskC.g, maskC.b));
    float textMaskR = max(maskR.r, max(maskR.g, maskR.b));
    float textMaskG = max(maskG.r, max(maskG.g, maskG.b));

    // Dithering (background, fluid modulates it outside text/cards)
    float modifiedBase = clamp(base - fluidStrength * (1.0 - textMask), 0.0, 1.0);

    // Dithering step
    float threshold = (bayer4(blockCoord) - 0.5) * 2.0;
    float dithered = step(0.5, clamp(modifiedBase + threshold, 0.0, 1.0));

    // Palette
    vec3 darkColor  = mix(vec3(0.818, 0.818, 0.818), vec3(0.89, 0.89, 0.89), u_light);
    vec3 lightColor = mix(vec3(0.918, 0.918, 0.918), vec3(0.96, 0.96, 0.96), u_light);
    vec3 textColor  = vec3(0.169, 0.169, 0.169); // #2b2b2b
    vec3 pinkColor  = vec3(0.988, 0.278, 0.471); // #fc4778

    // Dark mode overrides
    darkColor  = mix(darkColor,  vec3(0.168 * 0.75, 0.168 * 0.75, 0.168 * 0.75), u_dark); // #2B2B2B
    lightColor = mix(lightColor, vec3(0.251 * 0.75, 0.251 * 0.75, 0.251 * 0.75), u_dark); // #404040
    textColor  = mix(textColor,  vec3(0.918, 0.918, 0.918), u_dark); // #fafafa

    // Power curve: compresses the pale mid-tone transition zone so the pink
    // only appears visibly at the dense core, not as a washed-out halo
    float splatFade = fluidStrength * fluidStrength;
    vec3 tintedLight = mix(lightColor, pinkColor, splatFade * 0.9);
    vec3 bgColor = mix(darkColor, tintedLight, dithered);

    // Recover original hue: normalise pre-multiplied RGB by max channel.
    // Normalised saturation (CHROMA) distinguishes coloured cards (sat > 0.05)
    // from white/grey text (sat ≈ 0).
    #define CHROMA(v) (max((v).r,max((v).g,(v).b))>0.0?(max((v).r,max((v).g,(v).b))-min((v).r,min((v).g,(v).b)))/max((v).r,max((v).g,(v).b)):0.0)
    vec3 normG = textMaskG > 0.01 ? maskG / textMaskG : vec3(1.0);

    // Card/text flag (1 = card, 0 = text)
    float isCard = step(0.05, CHROMA(normG));

    // Text effect: text pixels tinted pink under fluid
    vec3 textEffect = mix(textColor, mix(pinkColor, textColor, u_dark), fluidStrength * 0.9);

    // Card effect: where the splat hits, cards reveal the dither pattern in pink hue
    vec3 pinkDark    = vec3(1.0, 0.92, 0.94); // #FFEBF0
    vec3 ditherColor = mix(pinkDark, pinkColor, dithered);
    vec3 cardEffect  = mix(normG, ditherColor, fluidStrength * 0.9);

    // Composite: card or text over background
    vec3 surfaceFinal = mix(textEffect, cardEffect, isCard);

    float r = mix(bgColor.r, surfaceFinal.r, textMaskR);
    float g = mix(bgColor.g, surfaceFinal.g, textMaskG);
    float b = mix(bgColor.b, surfaceFinal.b, textMaskG);

    vec3 color = vec3(r, g, b);
    gl_FragColor = vec4(color, 1.0);
  }
`,
    At = `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTarget;
  uniform float aspectRatio;
  uniform vec3 color;
  uniform vec2 point;
  uniform float radius;
  void main () {
    vec2 p = vUv - point.xy;
    p.x *= aspectRatio;
    float gaussian = exp(-dot(p, p) / radius);
    vec3 splat = gaussian * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
  }
`,
    Ut = `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 texelSize;
  uniform vec2 dyeTexelSize;
  uniform float dt;
  uniform float dissipation;
  vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;
    vec2 iuv = floor(st);
    vec2 fuv = fract(st);
    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
  }
  void main () {
  #ifdef MANUAL_FILTERING
    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
    vec4 result = bilerp(uSource, coord, dyeTexelSize);
  #else
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    vec4 result = texture2D(uSource, coord);
  #endif
    float decay = 1.0 + dissipation * dt;
    gl_FragColor = result / decay;
  }
`,
    Ft = `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;
  void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;
    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }
    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`,
    wt = `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;
  void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
  }
`,
    Pt = `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D uVelocity;
  uniform sampler2D uCurl;
  uniform float curl;
  uniform float dt;
  void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;
    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity += force * dt;
    velocity = min(max(velocity, -1000.0), 1000.0);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,
    Bt = `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`,
    Lt = `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;
  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,
    ke = 2,
    Ct = {
        __name: "BFluid",
        props: {
            fluid: {
                type: Boolean,
                default: !0
            },
            light: {
                type: Boolean,
                default: !1
            },
            dark: {
                type: Boolean,
                default: !1
            },
            maskEl: {
                type: Object,
                default: null
            },
            paused: {
                type: Boolean,
                default: !1
            },
            containerY: {
                type: Number,
                default: 0
            },
            static: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["ready"],
        setup(C, {
            expose: Y,
            emit: G
        }) {
            const se = G,
                {
                    isTouch: x
                } = Tt(),
                m = C;
            let k = null,
                V = [],
                H = !1;
            const Q = new Set;

            function Ee(t) {
                if (t && typeof t == "object" && "paused" in t) {
                    const i = String(t.source || "global");
                    t.paused ? Q.add(i) : Q.delete(i), H = Q.size > 0
                } else H = !!t;
                H || (O = !0), I = Date.now()
            }

            function Re(t) {
                k && cancelAnimationFrame(k), k = requestAnimationFrame(() => {
                    k = null, !(!e || !t ? .isConnected) && (q() && N(), x.value || ae(t))
                })
            }

            function ge() {
                V.forEach(t => t()), V = [], k && (cancelAnimationFrame(k), k = null)
            }

            function _e(t, i) {
                let r = !1;
                const o = new ResizeObserver(() => {
                    if (!r) {
                        r = !0;
                        return
                    }
                    i()
                });
                return o.observe(t), () => o.disconnect()
            }
            ct(() => m.maskEl ? .value ? ? m.maskEl, t => {
                if (ge(), !(t instanceof HTMLElement) || !e) return;
                q() && N(), x.value || ae(t), Re(t);
                const i = () => Re(t),
                    r = new MutationObserver(i);
                r.observe(t, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), V.push(() => r.disconnect()), V.push(_e(t, i)), f.canvas.value && V.push(_e(f.canvas.value, i))
            }), ft(ge);

            function Se() {
                oe();
                const t = m.maskEl ? .value ? ? m.maskEl;
                t instanceof HTMLElement && e && !x.value && ae(t)
            }
            const E = {
                    SIM_RESOLUTION: 128,
                    DYE_RESOLUTION: 256,
                    DENSITY_DISSIPATION: 2.5,
                    VELOCITY_DISSIPATION: .5,
                    PRESSURE: 0,
                    PRESSURE_ITERATIONS: 12,
                    CURL: 0,
                    SPLAT_RADIUS: .15,
                    SPLAT_FORCE: 1e3
                },
                f = {
                    canvas: pt("canvas")
                },
                Xe = Rt(f.canvas);
            let e = null,
                g = null,
                I = 0,
                ue = 0,
                p = null,
                h = null,
                s = null,
                W = null,
                $ = null,
                _ = null,
                ce = null,
                J = null,
                b = null,
                T = null,
                Z = null,
                ee = null,
                M = null,
                j = null,
                K = null,
                d = null,
                A = null,
                te = {
                    w: 0,
                    h: 0
                },
                fe = null,
                S = null,
                U = null,
                re = {
                    w: 0,
                    h: 0
                },
                ve = !1;
            const c = {
                    rawX: -8,
                    rawY: -8,
                    x: -8,
                    y: -8,
                    cachedY: -8,
                    sx: -8,
                    sy: -8,
                    inCanvas: !1,
                    dotX: Te(-8),
                    dotY: Te(-8)
                },
                me = [{
                    texcoordX: 0,
                    texcoordY: 0,
                    prevTexcoordX: 0,
                    prevTexcoordY: 0,
                    deltaX: 0,
                    deltaY: 0,
                    speed: 0,
                    smoothSpeed: 0,
                    moved: !1,
                    color: {
                        r: 0,
                        g: 0,
                        b: 0
                    }
                }];

            function Ne(t) {
                const i = {
                    alpha: !0,
                    depth: !1,
                    stencil: !1,
                    antialias: !1,
                    preserveDrawingBuffer: !1
                };
                let r = t.getContext("webgl2", i);
                const o = !!r;
                if (o || (r = t.getContext("webgl", i) || t.getContext("experimental-webgl", i)), !r) return {
                    gl: null,
                    ext: null
                };
                let a, l;
                o ? (r.getExtension("EXT_color_buffer_float"), l = r.getExtension("OES_texture_float_linear")) : (a = r.getExtension("OES_texture_half_float"), l = r.getExtension("OES_texture_half_float_linear")), r.clearColor(0, 0, 0, 0);
                const n = o ? r.HALF_FLOAT : a.HALF_FLOAT_OES;
                let u, v, w;
                return o ? (u = P(r, r.RGBA16F, r.RGBA, n), v = P(r, r.RG16F, r.RG, n), w = P(r, r.R16F, r.RED, n)) : (u = P(r, r.RGBA, r.RGBA, n), v = P(r, r.RGBA, r.RGBA, n), w = P(r, r.RGBA, r.RGBA, n)), {
                    gl: r,
                    ext: {
                        formatRGBA: u,
                        formatRG: v,
                        formatR: w,
                        halfFloatTexType: n,
                        supportLinearFiltering: l
                    }
                }
            }

            function P(t, i, r, o) {
                if (!Oe(t, i, r, o)) switch (i) {
                    case t.R16F:
                        return P(t, t.RG16F, t.RG, o);
                    case t.RG16F:
                        return P(t, t.RGBA16F, t.RGBA, o);
                    default:
                        return null
                }
                return {
                    internalFormat: i,
                    format: r
                }
            }

            function Oe(t, i, r, o) {
                const a = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, a), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, i, 4, 4, 0, r, o, null);
                const l = t.createFramebuffer();
                return t.bindFramebuffer(t.FRAMEBUFFER, l), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, a, 0), t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE
            }

            function ze(t) {
                if (t.length === 0) return 0;
                let i = 0;
                for (let r = 0; r < t.length; r++) i = (i << 5) - i + t.charCodeAt(r), i |= 0;
                return i
            }

            function R(t, i, r) {
                let o = i;
                if (r) {
                    let l = "";
                    r.forEach(n => {
                        l += `#define ${n}
`
                    }), o = l + i
                }
                const a = e.createShader(t);
                return e.shaderSource(a, o), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS) || console.error(e.getShaderInfoLog(a)), a
            }

            function ye(t, i) {
                const r = e.createProgram();
                return e.attachShader(r, t), e.attachShader(r, i), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS) || console.error(e.getProgramInfoLog(r)), r
            }

            function De(t) {
                const i = [],
                    r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
                for (let o = 0; o < r; o++) {
                    const a = e.getActiveUniform(t, o).name;
                    i[a] = e.getUniformLocation(t, a)
                }
                return i
            }
            class Ye {
                constructor(i, r) {
                    this.vertexShader = i, this.fragmentShaderSource = r, this.programs = [], this.activeProgram = null, this.uniforms = []
                }
                setKeywords(i) {
                    let r = 0;
                    for (let a = 0; a < i.length; a++) r += ze(i[a]);
                    let o = this.programs[r];
                    if (o == null) {
                        const a = R(e.FRAGMENT_SHADER, this.fragmentShaderSource, i);
                        o = ye(this.vertexShader, a), this.programs[r] = o
                    }
                    o !== this.activeProgram && (this.uniforms = De(o), this.activeProgram = o)
                }
                bind() {
                    e.useProgram(this.activeProgram)
                }
            }
            class F {
                constructor(i, r) {
                    this.uniforms = {}, this.program = ye(i, r), this.uniforms = De(this.program)
                }
                bind() {
                    e.useProgram(this.program)
                }
            }

            function X(t, i, r, o, a, l) {
                e.activeTexture(e.TEXTURE0);
                const n = e.createTexture();
                e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, l), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, l), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, r, t, i, 0, o, a, null);
                const u = e.createFramebuffer();
                return e.bindFramebuffer(e.FRAMEBUFFER, u), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), e.viewport(0, 0, t, i), e.clear(e.COLOR_BUFFER_BIT), {
                    texture: n,
                    fbo: u,
                    width: t,
                    height: i,
                    texelSizeX: 1 / t,
                    texelSizeY: 1 / i,
                    attach(v) {
                        return e.activeTexture(e.TEXTURE0 + v), e.bindTexture(e.TEXTURE_2D, n), v
                    }
                }
            }

            function de(t, i, r, o, a, l) {
                let n = X(t, i, r, o, a, l),
                    u = X(t, i, r, o, a, l);
                return {
                    width: t,
                    height: i,
                    texelSizeX: n.texelSizeX,
                    texelSizeY: n.texelSizeY,
                    get read() {
                        return n
                    },
                    set read(v) {
                        n = v
                    },
                    get write() {
                        return u
                    },
                    set write(v) {
                        u = v
                    },
                    swap() {
                        const v = n;
                        n = u, u = v
                    }
                }
            }

            function Ve(t, i, r, o, a, l, n) {
                const u = X(i, r, o, a, l, n);
                return ce.bind(), e.uniform1i(ce.uniforms.uTexture, t.attach(0)), p(u), u
            }

            function be(t, i, r, o, a, l, n) {
                return t.width === i && t.height === r || (t.read = Ve(t.read, i, r, o, a, l, n), t.write = X(i, r, o, a, l, n), t.width = i, t.height = r, t.texelSizeX = 1 / i, t.texelSizeY = 1 / r), t
            }

            function N() {
                const t = Ae(E.SIM_RESOLUTION),
                    i = Ae(E.DYE_RESOLUTION),
                    r = g.halfFloatTexType,
                    o = g.formatRGBA,
                    a = g.formatRG,
                    l = g.formatR,
                    n = g.supportLinearFiltering ? e.LINEAR : e.NEAREST;
                e.disable(e.BLEND), h == null ? h = de(i.width, i.height, o.internalFormat, o.format, r, n) : h = be(h, i.width, i.height, o.internalFormat, o.format, r, n), s == null ? s = de(t.width, t.height, a.internalFormat, a.format, r, n) : s = be(s, t.width, t.height, a.internalFormat, a.format, r, n), W = X(t.width, t.height, l.internalFormat, l.format, r, e.NEAREST), $ = X(t.width, t.height, l.internalFormat, l.format, r, e.NEAREST), _ = de(t.width, t.height, l.internalFormat, l.format, r, e.NEAREST)
            }

            function Ae(t) {
                let i = e.drawingBufferWidth / e.drawingBufferHeight;
                i < 1 && (i = 1 / i);
                const r = Math.round(t),
                    o = Math.round(t * i);
                return e.drawingBufferWidth > e.drawingBufferHeight ? {
                    width: o,
                    height: r
                } : {
                    width: r,
                    height: o
                }
            }

            function ie(t) {
                const i = Math.min(window.devicePixelRatio || 1, ke);
                return Math.floor(t * i)
            }

            function q() {
                const t = f.canvas.value;
                if (!t) return !1;
                const i = ie(t.clientWidth),
                    r = ie(t.clientHeight);
                return t.width !== i || t.height !== r ? (t.width = i, t.height = r, !0) : !1
            }

            function He() {
                const t = Date.now(),
                    i = Math.min((t - I) / 1e3, .016666);
                return I = t, i
            }
            const We = {
                r: .15,
                g: .03,
                b: .07
            };

            function $e(t) {
                const i = f.canvas.value.width / f.canvas.value.height;
                return i > 1 ? t * i : t
            }

            function je(t) {
                const i = f.canvas.value.width / f.canvas.value.height;
                return i < 1 ? t * i : t
            }

            function Ke(t) {
                const i = f.canvas.value.width / f.canvas.value.height;
                return i > 1 ? t / i : t
            }

            function qe(t) {
                const i = [],
                    r = document.createRange(),
                    o = document.createTreeWalker(t, NodeFilter.SHOW_TEXT);
                let a = [],
                    l = null,
                    n = 0,
                    u;
                for (; u = o.nextNode();) {
                    const w = u.textContent.split(/(\s+)/);
                    let z = 0;
                    for (const B of w) {
                        if (!B.trim()) {
                            z += B.length;
                            continue
                        }
                        r.setStart(u, z), r.setEnd(u, z + 1);
                        const {
                            top: ne
                        } = r.getBoundingClientRect();
                        l === null || Math.abs(ne - l) > 2 ? (a.length && (i.push({
                            text: a.join(" "),
                            lineIndex: n
                        }), n++), l = ne, a = [B]) : a.push(B), z += B.length
                    }
                }
                return a.length && i.push({
                    text: a.join(" "),
                    lineIndex: n
                }), i
            }

            function ae(t) {
                if (!e || !t) return;
                const i = f.canvas.value;
                if (!i) return;
                const r = i.getBoundingClientRect(),
                    o = t.getBoundingClientRect(),
                    a = i.width / r.width,
                    l = i.width,
                    n = i.height,
                    u = window.getComputedStyle(t),
                    v = parseFloat(u.fontSize) * a,
                    w = u.fontWeight,
                    z = u.fontFamily,
                    B = parseFloat(u.letterSpacing),
                    ne = Number.isNaN(B) ? "normal" : `${B*a}px`,
                    Be = parseFloat(u.lineHeight),
                    it = (Number.isNaN(Be) ? v * 1.2 : Be) * a,
                    Le = u.textAlign === "left" || u.textAlign === "start" ? "left" : "center",
                    at = Le === "left" ? (o.left - r.left) * a : (o.left - r.left + o.width / 2) * a,
                    ot = qe(t),
                    le = document.createElement("canvas");
                le.width = l, le.height = n;
                const L = le.getContext("2d");
                L.fillStyle = "black", L.fillRect(0, 0, l, n), L.fillStyle = "white", L.font = `${w} ${v}px ${z}`, L.letterSpacing = ne, L.textAlign = Le, L.textBaseline = "top";
                for (const {
                        text: nt,
                        lineIndex: lt
                    } of ot) {
                    const st = (o.top - r.top) * a + lt * it;
                    L.fillText(nt, at, st)
                }
                const xe = document.createElement("canvas");
                xe.width = l, xe.height = n, fe = {
                    dpr: a,
                    textCanvas: le,
                    compositeCanvas: xe,
                    canvasWidth: l,
                    canvasHeight: n
                }, Qe(0)
            }

            function Qe(t = 0) {
                if (!e || !fe) return;
                const {
                    dpr: i,
                    textCanvas: r,
                    compositeCanvas: o,
                    canvasWidth: a,
                    canvasHeight: l
                } = fe, n = o.getContext("2d");
                n.fillStyle = "black", n.fillRect(0, 0, a, l), n.globalCompositeOperation = "lighten", n.drawImage(r, 0, t * i), n.globalCompositeOperation = "source-over";
                const u = o.width,
                    v = o.height,
                    w = u !== te.w || v !== te.h;
                A ? e.bindTexture(e.TEXTURE_2D, A) : (A = e.createTexture(), e.bindTexture(e.TEXTURE_2D, A), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), w ? (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, o), te = {
                    w: u,
                    h: v
                }) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, o), e.bindTexture(e.TEXTURE_2D, null)
            }

            function Je() {
                if (!e || !S || S.width === 0 || S.height === 0) return;
                const t = S.width,
                    i = S.height,
                    r = t !== re.w || i !== re.h;
                U ? e.bindTexture(e.TEXTURE_2D, U) : (U = e.createTexture(), e.bindTexture(e.TEXTURE_2D, U), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), r ? (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, S), re = {
                    w: t,
                    h: i
                }) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, S), e.bindTexture(e.TEXTURE_2D, null)
            }

            function Ze(t, i, r, o, a, l = E.SPLAT_RADIUS / 100 * 1920 / (f.canvas.value ? .width ? ? 1920)) {
                b.bind(), e.uniform1i(b.uniforms.uTarget, s.read.attach(0)), e.uniform1f(b.uniforms.aspectRatio, f.canvas.value.width / f.canvas.value.height), e.uniform2f(b.uniforms.point, t, i), e.uniform3f(b.uniforms.color, r, o, 0), e.uniform1f(b.uniforms.radius, $e(l)), p(s.write), s.swap(), e.uniform1i(b.uniforms.uTarget, h.read.attach(0)), e.uniform3f(b.uniforms.color, a.r, a.g, a.b), p(h.write), h.swap()
            }

            function et(t) {
                const i = f.canvas.value ? .width ? ? 1920,
                    r = t.speed * i / 1920,
                    o = Math.min(r / .02, 1),
                    a = {
                        r: t.color.r * o,
                        g: t.color.g * o,
                        b: t.color.b * o
                    },
                    l = 0,
                    n = E.SPLAT_RADIUS / 100 * 1920 / (f.canvas.value ? .width ? ? 1920),
                    u = l + (n - l) * o;
                Ze(t.texcoordX, t.texcoordY, t.deltaX * E.SPLAT_FORCE, t.deltaY * E.SPLAT_FORCE, a, u)
            }

            function tt(t) {
                e.disable(e.BLEND), ee.bind(), e.uniform2f(ee.uniforms.texelSize, s.texelSizeX, s.texelSizeY), e.uniform1i(ee.uniforms.uVelocity, s.read.attach(0)), p($), M.bind(), e.uniform2f(M.uniforms.texelSize, s.texelSizeX, s.texelSizeY), e.uniform1i(M.uniforms.uVelocity, s.read.attach(0)), e.uniform1i(M.uniforms.uCurl, $.attach(1)), e.uniform1f(M.uniforms.curl, E.CURL), e.uniform1f(M.uniforms.dt, t), p(s.write), s.swap(), Z.bind(), e.uniform2f(Z.uniforms.texelSize, s.texelSizeX, s.texelSizeY), e.uniform1i(Z.uniforms.uVelocity, s.read.attach(0)), p(W), J.bind(), e.uniform1i(J.uniforms.uTexture, _.read.attach(0)), e.uniform1f(J.uniforms.value, E.PRESSURE), p(_.write), _.swap(), j.bind(), e.uniform2f(j.uniforms.texelSize, s.texelSizeX, s.texelSizeY), e.uniform1i(j.uniforms.uDivergence, W.attach(0));
                for (let r = 0; r < E.PRESSURE_ITERATIONS; r++) e.uniform1i(j.uniforms.uPressure, _.read.attach(1)), p(_.write), _.swap();
                K.bind(), e.uniform2f(K.uniforms.texelSize, s.texelSizeX, s.texelSizeY), e.uniform1i(K.uniforms.uPressure, _.read.attach(0)), e.uniform1i(K.uniforms.uVelocity, s.read.attach(1)), p(s.write), s.swap(), T.bind(), e.uniform2f(T.uniforms.texelSize, s.texelSizeX, s.texelSizeY), g.supportLinearFiltering || e.uniform2f(T.uniforms.dyeTexelSize, s.texelSizeX, s.texelSizeY);
                const i = s.read.attach(0);
                e.uniform1i(T.uniforms.uVelocity, i), e.uniform1i(T.uniforms.uSource, i), e.uniform1f(T.uniforms.dt, t), e.uniform1f(T.uniforms.dissipation, E.VELOCITY_DISSIPATION), p(s.write), s.swap(), g.supportLinearFiltering || e.uniform2f(T.uniforms.dyeTexelSize, h.texelSizeX, h.texelSizeY), e.uniform1i(T.uniforms.uVelocity, s.read.attach(0)), e.uniform1i(T.uniforms.uSource, h.read.attach(1)), e.uniform1f(T.uniforms.dissipation, E.DENSITY_DISSIPATION), p(h.write), h.swap()
            }

            function Ue() {
                e.bindFramebuffer(e.FRAMEBUFFER, null), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.disable(e.BLEND), d.bind(), e.uniform1i(d.uniforms.uTexture, h.read.attach(0)), e.uniform1f(d.uniforms.u_time, ue), e.uniform2f(d.uniforms.u_resolution, e.drawingBufferWidth, e.drawingBufferHeight), e.uniform1f(d.uniforms.u_fluidAmount, m.fluid ? 1 : 0), e.uniform1f(d.uniforms.u_light, m.light ? 1 : 0), e.uniform1f(d.uniforms.u_dark, m.dark ? 1 : 0), e.uniform1f(d.uniforms.u_pixelRatio, Math.min(window.devicePixelRatio || 1, ke)), A ? (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, A), e.uniform1i(d.uniforms.uTextMask, 1), e.uniform1f(d.uniforms.u_hasTextMask, 1)) : e.uniform1f(d.uniforms.u_hasTextMask, 0), U ? (e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, U), e.uniform1i(d.uniforms.uOverlay, 2), e.uniform1f(d.uniforms.u_hasOverlay, 1)) : e.uniform1f(d.uniforms.u_hasOverlay, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), ve || (ve = !0, se("ready"))
            }
            const y = {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            let O = !0;

            function oe() {
                const t = f.canvas.value;
                if (!t) return;
                const i = t.getBoundingClientRect();
                y.left = i.left, y.top = i.top + window.scrollY - m.containerY, y.width = t.clientWidth, y.height = t.clientHeight
            }

            function Fe() {
                O = !0
            }

            function we() {
                if (m.paused || !Xe.value) {
                    I = Date.now();
                    return
                }
                if (x.value || m.static) {
                    if (!O) return;
                    O = !1, q() && N(), oe(), Ue();
                    return
                }
                if (H) {
                    I = Date.now();
                    return
                }
                const t = He();
                ue += t, O && (O = !1, q() && N());
                const i = f.canvas.value;
                if (c.sx += (c.x - c.sx) * .12, c.sy += (c.cachedY + window.scrollY - m.containerY - c.sy) * .12, c.rawX !== -8 && (c.inCanvas = c.sx >= 0 && c.sx <= y.width && c.sy >= 0 && c.sy <= y.height), i && e) {
                    const r = ie(c.sx),
                        o = ie(c.sy),
                        a = me[0];
                    a.prevTexcoordX = a.texcoordX, a.prevTexcoordY = a.texcoordY, a.texcoordX = r / i.width, a.texcoordY = 1 - o / i.height, a.deltaX = je(a.texcoordX - a.prevTexcoordX), a.deltaY = Ke(a.texcoordY - a.prevTexcoordY);
                    const l = Math.hypot(a.deltaX, a.deltaY);
                    a.smoothSpeed += (l - a.smoothSpeed) * .15, a.speed = a.smoothSpeed, a.moved = Math.abs(a.deltaX) > 0 || Math.abs(a.deltaY) > 0
                }
                m.fluid && !x.value && (c.dotX.value = c.inCanvas ? c.sx : -100, c.dotY.value = c.inCanvas ? c.sy : -100), x.value || me.forEach(r => {
                    r.moved && (r.moved = !1, et(r))
                }), tt(t), S && Je(), Ue()
            }

            function Pe(t) {
                c.rawX = t.clientX, c.rawY = t.clientY;
                const i = t.clientX - y.left,
                    r = t.clientY - y.top - m.containerY;
                c.inCanvas = i >= 0 && i <= y.width && r >= 0 && r <= y.height, c.x = i, c.y = r, c.cachedY = r + m.containerY
            }
            Ge(() => {
                const t = f.canvas.value,
                    i = Ne(t);
                if (e = i.gl, g = i.ext, !e) return;
                const r = R(e.VERTEX_SHADER, St);
                e.bindBuffer(e.ARRAY_BUFFER, e.createBuffer()), e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, e.createBuffer()), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), e.STATIC_DRAW), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(0), p = (o, a = !1) => {
                    o == null ? (e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), e.bindFramebuffer(e.FRAMEBUFFER, null)) : (e.viewport(0, 0, o.width, o.height), e.bindFramebuffer(e.FRAMEBUFFER, o.fbo)), a && (e.clearColor(0, 0, 0, 1), e.clear(e.COLOR_BUFFER_BIT)), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
                }, ce = new F(r, R(e.FRAGMENT_SHADER, yt)), J = new F(r, R(e.FRAGMENT_SHADER, Dt)), b = new F(r, R(e.FRAGMENT_SHADER, At)), T = new F(r, R(e.FRAGMENT_SHADER, Ut, g.supportLinearFiltering ? null : ["MANUAL_FILTERING"])), Z = new F(r, R(e.FRAGMENT_SHADER, Ft)), ee = new F(r, R(e.FRAGMENT_SHADER, wt)), M = new F(r, R(e.FRAGMENT_SHADER, Pt)), j = new F(r, R(e.FRAGMENT_SHADER, Bt)), K = new F(r, R(e.FRAGMENT_SHADER, Lt)), d = new Ye(r, bt), d.setKeywords([]), N(), me[0].color = { ...We
                }, I = Date.now(), ue = Math.random() * 120, Ce.add(we), vt(() => {
                    q() && N(), oe();
                    const o = m.maskEl ? .value ? ? m.maskEl;
                    o instanceof HTMLElement && !x.value && ae(o)
                }), x.value || D.on("mousemove", Pe), D.on("resize", Se), D.on("rawResize", Fe), D.on("pauseCanvas", Ee), D.on("refresh", he)
            }), Ie(() => {
                if (x.value || D.off("mousemove", Pe), D.off("resize", Se), D.off("rawResize", Fe), D.off("pauseCanvas", Ee), D.off("refresh", he), Q.clear(), H = !1, Ce.remove(we), e) {
                    A && e.deleteTexture(A), U && e.deleteTexture(U);
                    const t = r => {
                            r ? .texture && e.deleteTexture(r.texture), r ? .fbo && e.deleteFramebuffer(r.fbo)
                        },
                        i = r => {
                            r ? .read && t(r.read), r ? .write && t(r.write)
                        };
                    i(h), i(s), t(W), t($), i(_)
                }
                A = null, te = {
                    w: 0,
                    h: 0
                }, U = null, re = {
                    w: 0,
                    h: 0
                }, e = null, g = null, h = null, s = null, W = null, $ = null, _ = null, S = null, ve = !1
            });

            function rt(t) {
                S = t
            }

            function he() {
                oe()
            }
            return Y({
                setOverlayCanvas: rt,
                refreshPosition: he
            }), (t, i) => {
                const r = Et;
                return pe(), Me("div", gt, [mt("canvas", _t, null, 512), C.fluid && !dt(x) ? (pe(), ht(r, {
                    key: 0,
                    x: c.dotX.value,
                    y: c.dotY.value
                }, null, 8, ["x", "y"])) : xt("", !0)])
            }
        }
    },
    Mt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ct
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Mt as B, Ct as _, Et as a, Rt as u
};