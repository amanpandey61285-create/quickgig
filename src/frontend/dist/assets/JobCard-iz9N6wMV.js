import { j as jsxRuntimeExports, e as cn } from "./index-Bhvb_wkP.js";
import { g as GlassCard, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as SkillTag } from "./SkillTag-DmQjiAIO.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { B as Banknote } from "./banknote-BmgAylX8.js";
import { C as Clock } from "./AvatarUpload-D_s4GvuX.js";
import { M as MapPin } from "./map-pin-Do2q-bd0.js";
import { U as Users } from "./users-Bv6WyFFr.js";
function JobCard({
  job,
  onClick,
  onApply,
  index = 0,
  className
}) {
  const ocid = `job.item.${index + 1}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GlassCard,
    {
      hover: true,
      padding: "md",
      className: cn("cursor-pointer space-y-3", className),
      onClick,
      "data-ocid": ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground truncate", children: job.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: job.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 flex-shrink-0", children: [
            job.urgent && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "urgent", children: "Urgent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: job.status, children: job.status.charAt(0).toUpperCase() + job.status.slice(1) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-3.5 h-3.5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
              "₹",
              job.payAmount
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/hr" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-accent flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: job.duration })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-secondary flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: job.location })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-muted-foreground flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              job.applicationCount,
              " applied"
            ] })
          ] })
        ] }),
        job.skillsRequired.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          job.skillsRequired.slice(0, 3).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { label: skill }, skill)),
          job.skillsRequired.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { label: `+${job.skillsRequired.length - 3}` })
        ] }),
        onApply && job.status === "open" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          GradientButton,
          {
            variant: "primary",
            size: "sm",
            fullWidth: true,
            onClick: (e) => {
              e.stopPropagation();
              onApply();
            },
            "data-ocid": `job.apply_button.${index + 1}`,
            children: "Apply Now"
          }
        )
      ]
    }
  );
}
export {
  JobCard as J
};
