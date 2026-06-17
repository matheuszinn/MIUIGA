import { createContext as e, useContext as t, useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/lib/components/RetroProvider.tsx
var s = e(void 0), c = () => {
	let e = t(s);
	if (!e) throw Error("useRetro must be used within a RetroProvider");
	return e;
}, l = ({ children: e, initialModern: t = !1 }) => {
	let [r, o] = i(t);
	return n(() => {
		let e = localStorage.getItem("miuiga_modern_mode");
		e !== null && o(e === "true");
	}, []), /* @__PURE__ */ a(s.Provider, {
		value: {
			isModern: r,
			toggleModern: () => {
				let e = !r;
				o(e), localStorage.setItem("miuiga_modern_mode", String(e));
			}
		},
		children: /* @__PURE__ */ a("div", {
			className: r ? "mode-modern" : "",
			children: e
		})
	});
}, u = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ a("button", {
	className: `retro-button ${t}`,
	...n,
	children: e
}), d = ({ children: e, variant: t = "outset", className: n = "", ...r }) => /* @__PURE__ */ a("div", {
	className: `${t === "outset" ? "retro-outset" : "retro-inset"} ${n}`,
	...r,
	children: e
}), f = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ a("div", {
	className: `marquee-container ${t}`,
	...n,
	children: /* @__PURE__ */ a("div", {
		className: "marquee-content",
		children: e
	})
}), p = ({ initialCount: e = 42 }) => {
	let [t, r] = i("000000");
	return n(() => {
		let t = localStorage.getItem("miuiga_visits") || String(e), n = parseInt(t) + 1;
		localStorage.setItem("miuiga_visits", String(n)), r(n.toString().padStart(6, "0"));
	}, [e]), /* @__PURE__ */ a("div", {
		className: "visitor-counter",
		children: t
	});
}, m = ({ title: e, children: t, initialOpen: s = !0, onClose: c, initialX: l = "50%", initialY: u = "50%" }) => {
	let [d, f] = i(s), [p, m] = i({
		x: 0,
		y: 0
	}), [h, g] = i(!1), [_, v] = i({
		x: 0,
		y: 0
	}), y = r(null);
	return n(() => {
		let e = (e) => {
			h && m({
				x: e.clientX - _.x,
				y: e.clientY - _.y
			});
		}, t = () => {
			g(!1);
		};
		return h && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", t)), () => {
			document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t);
		};
	}, [h, _]), d ? /* @__PURE__ */ o("div", {
		ref: y,
		className: "retro-window",
		style: h || p.x !== 0 ? {
			left: p.x,
			top: p.y,
			transform: "none"
		} : {
			left: l,
			top: u
		},
		children: [/* @__PURE__ */ o("div", {
			className: "window-title-bar",
			onMouseDown: (e) => {
				if (e.target.closest(".window-close-btn")) return;
				g(!0);
				let t = y.current?.getBoundingClientRect();
				t && v({
					x: e.clientX - t.left,
					y: e.clientY - t.top
				});
			},
			children: [/* @__PURE__ */ a("div", {
				className: "window-title",
				children: e
			}), /* @__PURE__ */ a("button", {
				className: "window-close-btn",
				onClick: () => {
					f(!1), c && c();
				},
				children: "X"
			})]
		}), /* @__PURE__ */ a("div", {
			className: "window-content",
			children: t
		})]
	}) : null;
}, h = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImJsYWNrIi8+PC9zdmc+", g = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImJsYWNrIi8+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iYmxhY2siLz48L3N2Zz4=", _ = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=", v = (e) => {
	switch (e) {
		case 25: return h;
		case 75: return _;
		default: return g;
	}
}, y = ({ children: e, density: t = 50, offset: n = 4, className: r = "", style: i = {} }) => {
	let s = v(t);
	return /* @__PURE__ */ o("div", {
		className: `dither-shadow-wrapper ${r}`,
		style: {
			position: "relative",
			display: "inline-block",
			...i
		},
		children: [/* @__PURE__ */ a("div", {
			className: "dither-shadow-effect",
			style: {
				position: "absolute",
				top: n,
				left: n,
				width: "100%",
				height: "100%",
				backgroundImage: `url(${s})`,
				backgroundSize: "2px 2px",
				zIndex: 0,
				imageRendering: "pixelated"
			}
		}), /* @__PURE__ */ a("div", {
			style: {
				position: "relative",
				zIndex: 1
			},
			children: e
		})]
	});
}, b = e(void 0), x = () => {
	let e = t(b);
	if (!e) throw Error("useFrameset must be used within a Frameset");
	return e;
}, S = ({ children: e, breakpoint: t = 768 }) => {
	let [r, o] = i(window.innerWidth < t), [s, c] = i([]);
	n(() => {
		let e = () => {
			o(window.innerWidth < t);
		};
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [t]);
	let l = (e) => {
		c((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}, [u, d] = i([]);
	return /* @__PURE__ */ a(b.Provider, {
		value: {
			isMobile: r,
			minimizedFrames: r ? u : [],
			toggleFrame: r ? (e) => {
				d((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
			} : l
		},
		children: /* @__PURE__ */ a("div", {
			className: `miuiga-frameset ${r ? "frameset-mobile" : "frameset-desktop"}`,
			style: {
				display: "flex",
				height: "100vh",
				width: "100vw",
				overflow: "hidden",
				position: "relative",
				flexDirection: r ? "column" : "row"
			},
			children: e
		})
	});
}, C = ({ id: e, title: t, children: n, width: r = "200px", className: i = "", icon: o }) => {
	let { isMobile: s, minimizedFrames: c, toggleFrame: l } = x(), u = c.includes(e);
	return s ? u ? null : /* @__PURE__ */ a(m, {
		title: t,
		onClose: () => l(e),
		children: n
	}) : /* @__PURE__ */ a("div", {
		id: e,
		className: `frame-left retro-outset ${i}`,
		style: {
			width: r,
			height: "100%",
			overflowY: "auto",
			flexShrink: 0
		},
		children: n
	});
}, w = ({ children: e, className: t = "" }) => /* @__PURE__ */ a("div", {
	className: `frame-main ${t}`,
	style: {
		flexGrow: 1,
		height: "100%",
		overflowY: "auto",
		padding: "20px"
	},
	children: e
}), T = ({ frames: e }) => {
	let { isMobile: t, toggleFrame: n } = x();
	return t ? /* @__PURE__ */ o("div", {
		className: "retro-taskbar retro-outset",
		style: {
			position: "absolute",
			bottom: 0,
			left: 0,
			width: "100%",
			height: "40px",
			display: "flex",
			alignItems: "center",
			gap: "5px",
			padding: "2px 5px",
			zIndex: 1e3,
			boxSizing: "border-box"
		},
		children: [
			/* @__PURE__ */ a(u, {
				style: {
					height: "30px",
					fontWeight: "bold"
				},
				children: "START"
			}),
			/* @__PURE__ */ a("div", { style: {
				width: "2px",
				height: "100%",
				backgroundColor: "gray",
				margin: "0 5px"
			} }),
			e.map((e) => /* @__PURE__ */ o(u, {
				onClick: () => n(e.id),
				style: {
					height: "30px",
					fontSize: "11px"
				},
				children: [e.icon && /* @__PURE__ */ a("span", {
					style: { marginRight: "5px" },
					children: e.icon
				}), e.title]
			}, e.id))
		]
	}) : null;
}, E = (e) => Math.round(e / 51) * 51, D = (e) => {
	let t = e.replace("#", "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), t.length !== 6) return e;
	let n = parseInt(t.substring(0, 2), 16), r = parseInt(t.substring(2, 4), 16), i = parseInt(t.substring(4, 6), 16);
	return `#${E(n).toString(16).padStart(2, "0")}${E(r).toString(16).padStart(2, "0")}${E(i).toString(16).padStart(2, "0")}`;
};
//#endregion
export { u as Button, h as DITHER_25, g as DITHER_50, _ as DITHER_75, y as DitherShadow, C as Frame, S as Frameset, w as MainFrame, f as Marquee, d as Panel, l as RetroProvider, T as Taskbar, p as VisitorCounter, m as Window, v as getDitherPattern, E as snapComponentToWebSafe, D as snapToWebSafe, x as useFrameset, c as useRetro };
