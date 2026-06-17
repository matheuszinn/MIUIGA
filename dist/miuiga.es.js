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
};
//#endregion
export { u as Button, f as Marquee, d as Panel, l as RetroProvider, p as VisitorCounter, m as Window, c as useRetro };
