import { j as jsxRuntimeExports, e as cn } from "./index-Bhvb_wkP.js";
import { G as GradientButton } from "./GlassCard-DkCgMR2r.js";
function EmptyState({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-4 py-16 px-6 text-center",
        className
      ),
      "data-ocid": "empty_state",
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-muted-foreground", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: description })
        ] }),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx(
          GradientButton,
          {
            variant: "primary",
            size: "md",
            onClick: action.onClick,
            "data-ocid": "empty_state_cta.primary_button",
            children: action.label
          }
        )
      ]
    }
  );
}
export {
  EmptyState as E
};
