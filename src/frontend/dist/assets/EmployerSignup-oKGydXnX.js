import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { A as AvatarUpload } from "./AvatarUpload-D_s4GvuX.js";
import { e as motion, Z as Zap, g as GlassCard, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { u as useUserStore } from "./user-store-B0tffYM3.js";
import { B as BriefcaseBusiness } from "./briefcase-business-DebaTxkH.js";
import { B as Building2 } from "./building-2-BcbUKDxB.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
import { S as Shield } from "./shield-DfkFHAlX.js";
import { S as Star } from "./star-BecAt0Wi.js";
import "./sparkles-Cnywz3L8.js";
const PERKS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }),
    text: "Post jobs in 60 seconds"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-accent" }),
    text: "Verified workers only"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-yellow-400" }),
    text: "Rated & reviewed talent"
  }
];
function EmployerSignupPage() {
  const navigate = useNavigate();
  const { setRole, setEmployerProfile } = useUserStore();
  const [businessName, setBusinessName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [logoUrl, setLogoUrl] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const handleLogoUpload = (file) => {
    const url = URL.createObjectURL(file);
    setLogoUrl(url);
  };
  const validate = () => {
    const e = {};
    if (!businessName.trim()) e.businessName = "Business name is required";
    if (!description.trim()) e.description = "Description is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setRole("employer");
      setEmployerProfile({
        principal: "self",
        businessName: businessName.trim(),
        description: description.trim(),
        logoUrl: logoUrl ?? void 0,
        activeJobCount: 0,
        completedHires: 0,
        ratings: []
      });
      ue.success("Employer profile created!");
      navigate({ to: "/employer/dashboard" });
    } catch {
      ue.error("Failed to create profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "relative w-full max-w-md space-y-6",
        "data-ocid": "employer_signup.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/" }),
                className: "inline-flex items-center gap-2 font-display font-bold text-2xl",
                "data-ocid": "employer_signup.home.link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "QuickGig" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusBadge, { variant: "open", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BriefcaseBusiness, { className: "w-3 h-3" }),
                " Employer Sign Up"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground mt-2", children: "Hire Workers Instantly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Post jobs and get verified applicants in minutes" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: PERKS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 + i * 0.1 },
              className: "flex items-center gap-3 glass-card px-4 py-2.5 text-sm text-foreground",
              children: [
                p.icon,
                p.text
              ]
            },
            p.text
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarUpload,
                {
                  src: logoUrl,
                  size: "xl",
                  editable: true,
                  onUpload: handleLogoUpload,
                  alt: "Business logo"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Upload business logo (optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "es-name",
                  className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                  children: "Business / Shop Name *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "es-name",
                    type: "text",
                    value: businessName,
                    onChange: (e) => {
                      setBusinessName(e.target.value);
                      if (errors.businessName)
                        setErrors((p) => ({ ...p, businessName: void 0 }));
                    },
                    placeholder: "e.g. Rohan's Café",
                    className: "w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-smooth",
                    "data-ocid": "employer_signup.name.input"
                  }
                )
              ] }),
              errors.businessName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-red-400 mt-1",
                  "data-ocid": "employer_signup.name.field_error",
                  children: errors.businessName
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "es-desc",
                  className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                  children: "Business Description *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "es-desc",
                  rows: 3,
                  value: description,
                  onChange: (e) => {
                    setDescription(e.target.value);
                    if (errors.description)
                      setErrors((p) => ({ ...p, description: void 0 }));
                  },
                  placeholder: "Describe your business and the type of workers you typically hire…",
                  className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 resize-none transition-smooth",
                  "data-ocid": "employer_signup.description.textarea"
                }
              ),
              errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-red-400 mt-1",
                  "data-ocid": "employer_signup.description.field_error",
                  children: errors.description
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              GradientButton,
              {
                variant: "primary",
                size: "lg",
                fullWidth: true,
                loading,
                onClick: handleSubmit,
                "data-ocid": "employer_signup.submit.primary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
                  " Create Employer Profile"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground", children: "By continuing, you agree to our Terms & Privacy Policy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 pt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Looking for work?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: "/signup/worker" }),
                  className: "text-primary hover:underline",
                  "data-ocid": "employer_signup.worker_link",
                  children: "Find Gigs"
                }
              )
            ] }) })
          ] })
        ]
      }
    )
  ] });
}
export {
  EmployerSignupPage as default
};
