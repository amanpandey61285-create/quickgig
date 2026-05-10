import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { L as Layout } from "./Layout-DCFJ7ZK3.js";
import { e as motion, g as GlassCard, Z as Zap, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as SkillTag } from "./SkillTag-DmQjiAIO.js";
import { B as Briefcase } from "./use-auth-DIarAbOw.js";
import { B as Banknote } from "./banknote-BmgAylX8.js";
import { M as MapPin } from "./map-pin-Do2q-bd0.js";
import { U as Users } from "./users-Bv6WyFFr.js";
import { P as Plus } from "./plus-C3Q_Kd9R.js";
import { F as Flame, C as Clock } from "./AvatarUpload-D_s4GvuX.js";
import "./user-store-B0tffYM3.js";
import "./log-in-BCMEdyHB.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
const CATEGORIES = [
  "Café Staff",
  "Delivery Helper",
  "Event Worker",
  "Warehouse Helper",
  "Store Assistant",
  "Data Entry",
  "Packing Staff",
  "Sales Promoter",
  "Cleaning",
  "Security",
  "Driver",
  "Reception"
];
const DURATION_OPTIONS = [
  "1–2 hrs",
  "Half day",
  "Full day",
  "2–3 hrs",
  "Weekend"
];
const TIMING_OPTIONS = [
  "Immediate",
  "Scheduled",
  "Morning",
  "Evening",
  "Night shift"
];
const SUGGESTED_SKILLS = {
  "Café Staff": ["F&B", "Customer Service", "Barista", "Serving"],
  "Delivery Helper": ["Driving", "Navigation", "Two-wheeler"],
  "Event Worker": ["Event Mgmt", "Communication", "MS Excel"],
  "Warehouse Helper": ["Packing", "Physical Fitness", "Inventory"],
  "Store Assistant": ["Retail", "Billing", "Customer Service"],
  "Data Entry": ["Typing", "MS Excel", "Accuracy"],
  "Packing Staff": ["Packing", "Speed", "Labelling"],
  "Sales Promoter": ["Communication", "Sales", "English"],
  Cleaning: ["Cleaning", "Housekeeping"],
  Security: ["Vigilance", "Physical Fitness"],
  Driver: ["Driving", "Hindi", "LMV License"],
  Reception: ["English", "Communication", "MS Office"]
};
const INPUT_CLS = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-smooth";
const LABEL_CLS = "text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1";
function PostJobPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [pay, setPay] = reactExports.useState("");
  const [duration, setDuration] = reactExports.useState("");
  const [timing, setTiming] = reactExports.useState("");
  const [location, setLocation] = reactExports.useState("");
  const [urgent, setUrgent] = reactExports.useState(false);
  const [workerCount, setWorkerCount] = reactExports.useState(1);
  const [skillInput, setSkillInput] = reactExports.useState("");
  const [skills, setSkills] = reactExports.useState([]);
  const [errors, setErrors] = reactExports.useState({});
  const suggested = category ? SUGGESTED_SKILLS[category] ?? [] : [];
  const addSkill = (s) => {
    const val = (s ?? skillInput).trim();
    if (val && !skills.includes(val)) setSkills((p) => [...p, val]);
    if (!s) setSkillInput("");
  };
  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Job title is required";
    if (!category) e.category = "Category is required";
    if (!description.trim()) e.description = "Description is required";
    if (!pay || Number(pay) <= 0) e.pay = "Pay amount is required";
    if (!duration) e.duration = "Duration is required";
    if (!timing) e.timing = "Timing is required";
    if (!location.trim()) e.location = "Location is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = async () => {
    if (!validate()) {
      ue.error("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1e3));
      ue.success("Job posted successfully!");
      navigate({ to: "/employer/dashboard" });
    } catch {
      ue.error("Failed to post job. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto space-y-6", "data-ocid": "post_job.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-6 h-6 text-primary" }),
            " Post a New Job"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Find the right worker in minutes — fill in the details below." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.08 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-sm text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }),
            " Job Details"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-title", className: LABEL_CLS, children: "Job Title *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "pj-title",
                type: "text",
                value: title,
                onChange: (e) => {
                  setTitle(e.target.value);
                  setErrors((p) => ({ ...p, title: "" }));
                },
                placeholder: "e.g. Café Server for Sunday Brunch",
                className: INPUT_CLS,
                "data-ocid": "post_job.title.input"
              }
            ),
            errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-red-400 mt-1",
                "data-ocid": "post_job.title.field_error",
                children: errors.title
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-cat", className: LABEL_CLS, children: "Category *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "pj-cat",
                value: category,
                onChange: (e) => {
                  setCategory(e.target.value);
                  setErrors((p) => ({ ...p, category: "" }));
                },
                className: `${INPUT_CLS} appearance-none`,
                "data-ocid": "post_job.category.select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select category" }),
                  CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, style: { background: "#1e1b4b" }, children: c }, c))
                ]
              }
            ),
            errors.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-red-400 mt-1",
                "data-ocid": "post_job.category.field_error",
                children: errors.category
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-desc", className: LABEL_CLS, children: "Description *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "pj-desc",
                rows: 3,
                value: description,
                onChange: (e) => {
                  setDescription(e.target.value);
                  setErrors((p) => ({ ...p, description: "" }));
                },
                placeholder: "Describe the work, what to bring, any requirements…",
                className: `${INPUT_CLS} resize-none`,
                "data-ocid": "post_job.description.textarea"
              }
            ),
            errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-red-400 mt-1",
                "data-ocid": "post_job.description.field_error",
                children: errors.description
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.14 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-sm text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4 text-accent" }),
            " Pay & Schedule"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-pay", className: LABEL_CLS, children: "Pay (₹/hr) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "pj-pay",
                  type: "number",
                  value: pay,
                  onChange: (e) => {
                    setPay(e.target.value);
                    setErrors((p) => ({ ...p, pay: "" }));
                  },
                  placeholder: "200",
                  min: 0,
                  className: INPUT_CLS,
                  "data-ocid": "post_job.pay.input"
                }
              ),
              errors.pay && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-red-400 mt-1",
                  "data-ocid": "post_job.pay.field_error",
                  children: errors.pay
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-workers", className: LABEL_CLS, children: "Workers Needed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "pj-workers",
                  type: "number",
                  value: workerCount,
                  onChange: (e) => setWorkerCount(Math.max(1, Number(e.target.value))),
                  min: 1,
                  max: 100,
                  className: INPUT_CLS,
                  "data-ocid": "post_job.worker_count.input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-dur", className: LABEL_CLS, children: "Duration *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "pj-dur",
                  value: duration,
                  onChange: (e) => {
                    setDuration(e.target.value);
                    setErrors((p) => ({ ...p, duration: "" }));
                  },
                  className: `${INPUT_CLS} appearance-none`,
                  "data-ocid": "post_job.duration.select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                    DURATION_OPTIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d, style: { background: "#1e1b4b" }, children: d }, d))
                  ]
                }
              ),
              errors.duration && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-red-400 mt-1",
                  "data-ocid": "post_job.duration.field_error",
                  children: errors.duration
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pj-timing", className: LABEL_CLS, children: "Timing *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "pj-timing",
                  value: timing,
                  onChange: (e) => {
                    setTiming(e.target.value);
                    setErrors((p) => ({ ...p, timing: "" }));
                  },
                  className: `${INPUT_CLS} appearance-none`,
                  "data-ocid": "post_job.timing.select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                    TIMING_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, style: { background: "#1e1b4b" }, children: t }, t))
                  ]
                }
              ),
              errors.timing && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-red-400 mt-1",
                  "data-ocid": "post_job.timing.field_error",
                  children: errors.timing
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "pj-loc", className: LABEL_CLS, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "inline w-3 h-3 mb-0.5 mr-0.5" }),
              " Location *"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "pj-loc",
                type: "text",
                value: location,
                onChange: (e) => {
                  setLocation(e.target.value);
                  setErrors((p) => ({ ...p, location: "" }));
                },
                placeholder: "e.g. Bandra, Mumbai",
                className: INPUT_CLS,
                "data-ocid": "post_job.location.input"
              }
            ),
            errors.location && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-red-400 mt-1",
                "data-ocid": "post_job.location.field_error",
                children: errors.location
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-sm text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-secondary" }),
            " Required Skills"
          ] }),
          suggested.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-1.5 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3 h-3" }),
              " Suggested for ",
              category,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: suggested.map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => addSkill(sk),
                disabled: skills.includes(sk),
                className: `px-2.5 py-1 text-xs rounded-lg border transition-smooth ${skills.includes(sk) ? "bg-primary/20 text-primary border-primary/30 opacity-50 cursor-default" : "border-white/10 text-muted-foreground hover:border-primary/40 hover:text-primary cursor-pointer"}`,
                "data-ocid": `post_job.suggested_skill.${sk}`,
                children: [
                  "+ ",
                  sk
                ]
              },
              sk
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: skillInput,
                onChange: (e) => setSkillInput(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && addSkill(),
                placeholder: "Type a skill and press Enter",
                className: `${INPUT_CLS} flex-1`,
                "data-ocid": "post_job.skill.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              GradientButton,
              {
                variant: "outline",
                size: "sm",
                onClick: () => addSkill(),
                "data-ocid": "post_job.skill.add_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
              }
            )
          ] }),
          skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            SkillTag,
            {
              label: s,
              removable: true,
              onRemove: () => setSkills((p) => p.filter((x) => x !== s))
            },
            s
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.26 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "md",
            className: "flex items-center justify-between gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-red-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Mark as Urgent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Get 3× more applicants instantly" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setUrgent(!urgent),
                  className: `relative w-12 h-6 rounded-full transition-smooth flex-shrink-0 ${urgent ? "bg-red-500" : "bg-muted"}`,
                  role: "switch",
                  "aria-checked": urgent,
                  "data-ocid": "post_job.urgent.switch",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-smooth ${urgent ? "left-7" : "left-1"}`
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ),
    (duration || pay || workerCount > 1) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "md", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-accent flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            workerCount > 1 ? `${workerCount} workers` : "1 worker",
            pay ? ` · ₹${pay}/hr` : "",
            duration ? ` · ${duration}` : "",
            urgent ? " · 🔥 Urgent" : ""
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.32 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GradientButton,
          {
            variant: "primary",
            size: "xl",
            fullWidth: true,
            loading,
            onClick: handleSubmit,
            "data-ocid": "post_job.submit.primary_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
              " Post Job Now"
            ]
          }
        )
      }
    )
  ] }) });
}
export {
  PostJobPage as default
};
