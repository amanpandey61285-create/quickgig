import { r as reactExports, j as jsxRuntimeExports, e as cn } from "./index-Bhvb_wkP.js";
import { S as Star } from "./star-BecAt0Wi.js";
const sizeMap = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-6 h-6"
};
function StarRating({
  value = 0,
  max = 5,
  interactive = false,
  onChange,
  size = "md",
  className
}) {
  const [hovered, setHovered] = reactExports.useState(null);
  const display = hovered ?? value;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("inline-flex items-center gap-0.5", className),
      role: interactive ? "radiogroup" : void 0,
      "aria-label": interactive ? "Star rating" : `${value} out of ${max} stars`,
      children: Array.from({ length: max }, (_, i) => {
        const starNum = i + 1;
        const filled = i < display;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: !interactive,
            "aria-label": `${starNum} star`,
            onClick: () => interactive && (onChange == null ? void 0 : onChange(starNum)),
            onMouseEnter: () => interactive && setHovered(starNum),
            onMouseLeave: () => interactive && setHovered(null),
            className: cn(
              "transition-smooth",
              interactive ? "cursor-pointer" : "cursor-default pointer-events-none"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: cn(
                  sizeMap[size],
                  filled ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                )
              }
            )
          },
          starNum
        );
      })
    }
  );
}
export {
  StarRating as S
};
