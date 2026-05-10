import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { L as Layout, X } from "./Layout-DCFJ7ZK3.js";
import { A as AvatarUpload } from "./AvatarUpload-D_s4GvuX.js";
import { e as motion, G as GradientButton, g as GlassCard } from "./GlassCard-DkCgMR2r.js";
import { S as StarRating } from "./StarRating-5EJfoaJ0.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { u as useUserStore } from "./user-store-B0tffYM3.js";
import { B as Briefcase } from "./use-auth-DIarAbOw.js";
import { T as TrendingUp } from "./trending-up-EipNabIE.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
import "./log-in-BCMEdyHB.js";
import "./star-BecAt0Wi.js";
import "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode);
function EmployerProfilePage() {
  const { employerProfile, setEmployerProfile } = useUserStore();
  const [editing, setEditing] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [businessName, setBusinessName] = reactExports.useState(
    (employerProfile == null ? void 0 : employerProfile.businessName) ?? ""
  );
  const [description, setDescription] = reactExports.useState(
    (employerProfile == null ? void 0 : employerProfile.description) ?? ""
  );
  const [logoUrl, setLogoUrl] = reactExports.useState(
    (employerProfile == null ? void 0 : employerProfile.logoUrl) ?? null
  );
  const avgRating = employerProfile && employerProfile.ratings.length > 0 ? employerProfile.ratings.reduce((a, r) => a + r.stars, 0) / employerProfile.ratings.length : 0;
  const handleSave = async () => {
    setSaving(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      setEmployerProfile({
        ...employerProfile ?? {
          principal: "self",
          activeJobCount: 0,
          completedHires: 0,
          ratings: []
        },
        businessName,
        description,
        logoUrl: logoUrl ?? void 0
      });
      ue.success("Profile updated!");
      setEditing(false);
    } catch {
      ue.error("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => {
    setBusinessName((employerProfile == null ? void 0 : employerProfile.businessName) ?? "");
    setDescription((employerProfile == null ? void 0 : employerProfile.description) ?? "");
    setLogoUrl((employerProfile == null ? void 0 : employerProfile.logoUrl) ?? null);
    setEditing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-lg mx-auto space-y-6",
      "data-ocid": "employer_profile.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Business Profile" }),
              !editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GradientButton,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setEditing(true),
                  "data-ocid": "employer_profile.edit.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" }),
                    " Edit"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleCancel,
                  className: "p-2 glass-card rounded-lg text-muted-foreground hover:text-foreground transition-smooth",
                  "data-ocid": "employer_profile.cancel.cancel_button",
                  "aria-label": "Cancel editing",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AvatarUpload,
                  {
                    src: logoUrl,
                    size: "xl",
                    editable: editing,
                    onUpload: (f) => setLogoUrl(URL.createObjectURL(f)),
                    alt: "Business logo"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: !editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground truncate", children: (employerProfile == null ? void 0 : employerProfile.businessName) || "Your Business" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "verified", children: "Verified Business" }),
                    avgRating > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      avgRating.toFixed(1),
                      " avg"
                    ] })
                  ] }),
                  avgRating > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StarRating,
                    {
                      value: Math.round(avgRating),
                      size: "sm",
                      className: "mt-1"
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: businessName,
                      onChange: (e) => setBusinessName(e.target.value),
                      placeholder: "Business Name",
                      className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-smooth",
                      "data-ocid": "employer_profile.name.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "verified", children: "Verified Business" })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 border-t border-white/10 pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-foreground", children: (employerProfile == null ? void 0 : employerProfile.activeJobCount) ?? 0 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Active Jobs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-foreground", children: (employerProfile == null ? void 0 : employerProfile.completedHires) ?? 0 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Completed Hires" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-foreground", children: (employerProfile == null ? void 0 : employerProfile.ratings.length) ?? 0 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Reviews" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "ep-desc",
                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2",
                    children: "About"
                  }
                ),
                editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "ep-desc",
                    rows: 4,
                    value: description,
                    onChange: (e) => setDescription(e.target.value),
                    placeholder: "Describe your business and the type of workers you typically hire…",
                    className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 resize-none transition-smooth",
                    "data-ocid": "employer_profile.description.textarea"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: (employerProfile == null ? void 0 : employerProfile.description) || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic", children: "No description added yet." }) })
              ] }),
              editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GradientButton,
                {
                  variant: "primary",
                  size: "md",
                  fullWidth: true,
                  loading: saving,
                  onClick: handleSave,
                  "data-ocid": "employer_profile.save.submit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
                    " Save Profile"
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  ) });
}
export {
  EmployerProfilePage as default
};
