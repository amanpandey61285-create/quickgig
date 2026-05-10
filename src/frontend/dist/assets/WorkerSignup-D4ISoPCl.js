import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { e as motion, g as GlassCard, Z as Zap, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as SkillTag } from "./SkillTag-DmQjiAIO.js";
import { u as useAuth, B as Briefcase } from "./use-auth-DIarAbOw.js";
import { u as useUserStore, U as User } from "./user-store-B0tffYM3.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
const SKILL_OPTIONS = [
  "Delivery",
  "Café Staff",
  "Event Work",
  "Warehouse",
  "Store Assist",
  "Data Entry",
  "Packing",
  "Cleaning",
  "Loading",
  "Reception",
  "Photography",
  "Sales",
  "Security",
  "Driving",
  "Tech Support",
  "Kitchen Help",
  "Customer Service",
  "Social Media",
  "Teaching",
  "Graphic Design"
];
function WorkerSignup() {
  const { isAuthenticated, login } = useAuth();
  const { setRole, setWorkerProfile } = useUserStore();
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState(1);
  const [loading, setLoading] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    displayName: "",
    bio: "",
    hourlyRate: "",
    availability: true
  });
  const [selectedSkills, setSelectedSkills] = reactExports.useState([]);
  const toggleSkill = (skill) => {
    setSelectedSkills(
      (prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };
  const handleSubmit = async () => {
    if (!form.displayName.trim()) {
      ue.error("Display name is required");
      return;
    }
    if (selectedSkills.length === 0) {
      ue.error("Please select at least one skill");
      return;
    }
    if (!form.hourlyRate || Number(form.hourlyRate) < 1) {
      ue.error("Enter a valid hourly rate");
      return;
    }
    setLoading(true);
    try {
      setWorkerProfile({
        principal: "",
        displayName: form.displayName,
        bio: form.bio,
        skills: selectedSkills,
        hourlyRate: Number(form.hourlyRate),
        availability: form.availability,
        completedJobs: 0,
        totalEarnings: 0,
        ratings: []
      });
      setRole("worker");
      setSuccess(true);
      setTimeout(() => navigate({ to: "/worker/dashboard" }), 1500);
    } catch {
      ue.error("Failed to create profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center px-4",
        style: {
          background: "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            className: "w-full max-w-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl mx-auto flex items-center justify-center",
                  style: {
                    background: "linear-gradient(135deg, #6C63FF, #00C2FF)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Sign In First" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Authenticate to create your worker profile" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                GradientButton,
                {
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  onClick: () => login(),
                  "data-ocid": "worker_signup.auth_button",
                  children: "Connect with Internet Identity"
                }
              )
            ] })
          }
        )
      }
    );
  }
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center px-4",
        style: {
          background: "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            className: "text-center space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-20 h-20 rounded-full mx-auto flex items-center justify-center",
                  style: {
                    background: "rgba(16,185,129,0.2)",
                    border: "1px solid rgba(16,185,129,0.4)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-emerald-400" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground", children: "Profile Created!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Redirecting to your dashboard…" })
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen px-4 py-8",
      style: {
        background: "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          step > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setStep((s) => s - 1),
              className: "w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth",
              "data-ocid": "worker_signup.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold font-display text-foreground", children: "Create Worker Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Step ",
              step,
              " of 2"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-6", children: [1, 2].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1.5 flex-1 rounded-full transition-smooth",
            style: {
              background: s <= step ? "linear-gradient(90deg, #6C63FF, #00C2FF)" : "rgba(255,255,255,0.1)"
            }
          },
          s
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 24 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.3 },
            children: [
              step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Basic Information" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "worker_name",
                      className: "text-sm font-medium text-foreground",
                      children: "Full Name *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "worker_name",
                      type: "text",
                      placeholder: "e.g. Rahul Sharma",
                      value: form.displayName,
                      onChange: (e) => setForm((f) => ({ ...f, displayName: e.target.value })),
                      className: "w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth",
                      style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)"
                      },
                      "data-ocid": "worker_signup.name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "worker_bio",
                      className: "text-sm font-medium text-foreground",
                      children: "Bio"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "worker_bio",
                      placeholder: "Tell employers about yourself, experience, and what you're looking for…",
                      value: form.bio,
                      onChange: (e) => setForm((f) => ({ ...f, bio: e.target.value })),
                      rows: 4,
                      className: "w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth resize-none",
                      style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)"
                      },
                      "data-ocid": "worker_signup.bio_textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "worker_hourly_rate",
                      className: "text-sm font-medium text-foreground",
                      children: "Hourly Rate (₹) *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "worker_hourly_rate",
                      type: "number",
                      placeholder: "e.g. 150",
                      min: 1,
                      value: form.hourlyRate,
                      onChange: (e) => setForm((f) => ({ ...f, hourlyRate: e.target.value })),
                      className: "w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth",
                      style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)"
                      },
                      "data-ocid": "worker_signup.rate_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between py-2 px-4 rounded-xl",
                    style: {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Available to Work" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Show as available for new gigs" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setForm((f) => ({ ...f, availability: !f.availability })),
                          className: "w-12 h-6 rounded-full transition-smooth relative flex-shrink-0",
                          style: {
                            background: form.availability ? "linear-gradient(90deg, #6C63FF, #8B5CF6)" : "rgba(255,255,255,0.15)"
                          },
                          "data-ocid": "worker_signup.availability_toggle",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-smooth",
                              style: { left: form.availability ? "26px" : "2px" }
                            }
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  GradientButton,
                  {
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    onClick: () => {
                      if (!form.displayName.trim()) {
                        ue.error("Display name is required");
                        return;
                      }
                      if (!form.hourlyRate || Number(form.hourlyRate) < 1) {
                        ue.error("Enter a valid hourly rate");
                        return;
                      }
                      setStep(2);
                    },
                    "data-ocid": "worker_signup.next_button",
                    children: [
                      "Next: Choose Skills ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ] }),
              step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Your Skills" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  "Select all skills that apply (",
                  selectedSkills.length,
                  " selected)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SKILL_OPTIONS.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleSkill(skill),
                    className: "px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth",
                    style: {
                      background: selectedSkills.includes(skill) ? "linear-gradient(135deg, rgba(108,99,255,0.4), rgba(139,92,246,0.4))" : "rgba(255,255,255,0.06)",
                      border: selectedSkills.includes(skill) ? "1px solid rgba(108,99,255,0.6)" : "1px solid rgba(255,255,255,0.1)",
                      color: selectedSkills.includes(skill) ? "#a5a1ff" : "#94a3b8"
                    },
                    "data-ocid": "worker_signup.skill_toggle",
                    children: skill
                  },
                  skill
                )) }),
                selectedSkills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Selected:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedSkills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SkillTag,
                    {
                      label: skill,
                      removable: true,
                      onRemove: () => toggleSkill(skill)
                    },
                    skill
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  GradientButton,
                  {
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    loading,
                    onClick: handleSubmit,
                    "data-ocid": "worker_signup.submit_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
                      "Create My Profile"
                    ]
                  }
                )
              ] })
            ]
          },
          step
        )
      ] })
    }
  );
}
export {
  WorkerSignup as default
};
