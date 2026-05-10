import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, e as cn } from "./index-Bhvb_wkP.js";
import { U as User } from "./user-store-B0tffYM3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode);
const sizeMap = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32"
};
const iconSizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10"
};
function AvatarUpload({
  src,
  alt = "Avatar",
  size = "md",
  editable = false,
  onUpload,
  className
}) {
  const inputRef = reactExports.useRef(null);
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file && onUpload) onUpload(file);
  };
  const handleKeyDown = (e) => {
    var _a;
    if ((e.key === "Enter" || e.key === " ") && editable)
      (_a = inputRef.current) == null ? void 0 : _a.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative rounded-full overflow-hidden flex-shrink-0",
        sizeMap[size],
        editable && "cursor-pointer group",
        className
      ),
      onClick: () => {
        var _a;
        return editable && ((_a = inputRef.current) == null ? void 0 : _a.click());
      },
      onKeyDown: handleKeyDown,
      role: editable ? "button" : void 0,
      "aria-label": editable ? "Upload avatar" : void 0,
      "data-ocid": editable ? "avatar.upload_button" : void 0,
      tabIndex: editable ? 0 : void 0,
      children: [
        src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full glass-card flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: cn(iconSizeMap[size], "text-muted-foreground") }) }),
        editable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-5 h-5 text-white" }) }),
        editable && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: handleFileChange
          }
        )
      ]
    }
  );
}
export {
  AvatarUpload as A,
  Clock as C,
  Flame as F
};
