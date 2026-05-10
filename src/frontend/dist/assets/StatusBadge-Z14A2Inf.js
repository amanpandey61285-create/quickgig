import { c as createLucideIcon, j as jsxRuntimeExports, e as cn } from "./index-Bhvb_wkP.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
import { C as Clock, F as Flame } from "./AvatarUpload-D_s4GvuX.js";
import { S as Sparkles } from "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
const variantConfig = {
  verified: {
    classes: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" })
  },
  urgent: {
    classes: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3" })
  },
  trending: {
    classes: "bg-accent/20 text-accent border-accent/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" })
  },
  open: {
    classes: "bg-primary/20 text-primary border-primary/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" })
  },
  closed: {
    classes: "bg-muted/40 text-muted-foreground border-border"
  },
  completed: {
    classes: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-3 h-3" })
  },
  pending: {
    classes: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" })
  },
  accepted: {
    classes: "bg-primary/20 text-primary border-primary/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" })
  },
  rejected: {
    classes: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" })
  },
  default: {
    classes: "bg-muted/40 text-muted-foreground border-border"
  }
};
function StatusBadge({
  variant = "default",
  children,
  className
}) {
  const { classes, icon } = variantConfig[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border",
        classes,
        className
      ),
      children: [
        icon,
        children
      ]
    }
  );
}
export {
  StatusBadge as S
};
