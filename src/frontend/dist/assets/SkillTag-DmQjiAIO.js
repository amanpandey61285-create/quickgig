import { j as jsxRuntimeExports, e as cn } from "./index-Bhvb_wkP.js";
function SkillTag({
  label,
  removable = false,
  onRemove,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg",
        "bg-primary/15 text-primary border border-primary/25",
        className
      ),
      children: [
        label,
        removable && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": `Remove ${label}`,
            onClick: (e) => {
              e.stopPropagation();
              onRemove == null ? void 0 : onRemove();
            },
            className: "ml-0.5 hover:text-red-400 transition-smooth leading-none",
            children: "×"
          }
        )
      ]
    }
  );
}
export {
  SkillTag as S
};
