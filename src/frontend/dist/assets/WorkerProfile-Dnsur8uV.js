import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { L as Layout, X, a as LogOut } from "./Layout-DCFJ7ZK3.js";
import { E as EmptyState } from "./EmptyState-BVnbDfxP.js";
import { e as motion, g as GlassCard, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as SkillTag } from "./SkillTag-DmQjiAIO.js";
import { S as StarRating } from "./StarRating-5EJfoaJ0.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { u as useAuth, B as Briefcase } from "./use-auth-DIarAbOw.js";
import { u as useUserStore, U as User } from "./user-store-B0tffYM3.js";
import { S as Shield } from "./shield-DfkFHAlX.js";
import { B as Banknote } from "./banknote-BmgAylX8.js";
import { S as Star } from "./star-BecAt0Wi.js";
import { M as MapPin } from "./map-pin-Do2q-bd0.js";
import "./AvatarUpload-D_s4GvuX.js";
import "./log-in-BCMEdyHB.js";
import "./circle-check-big-DHjOkuCu.js";
import "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode);
const MOCK_RATINGS = [
  {
    fromPrincipal: "anon-1",
    stars: 5,
    comment: "Punctual, fast worker. Will hire again!",
    createdAt: Date.now() - 864e5
  },
  {
    fromPrincipal: "anon-2",
    stars: 4,
    comment: "Good attitude, could improve speed.",
    createdAt: Date.now() - 1728e5
  },
  {
    fromPrincipal: "anon-3",
    stars: 5,
    comment: "Excellent café staff. Very professional.",
    createdAt: Date.now() - 2592e5
  }
];
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
function WorkerProfile() {
  var _a, _b;
  const { isAuthenticated, isLoading, logout } = useAuth();
  const { workerProfile, setWorkerProfile, setRole } = useUserStore();
  const navigate = useNavigate();
  const [editing, setEditing] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [editForm, setEditForm] = reactExports.useState({
    displayName: (workerProfile == null ? void 0 : workerProfile.displayName) ?? "",
    bio: (workerProfile == null ? void 0 : workerProfile.bio) ?? "",
    hourlyRate: String((workerProfile == null ? void 0 : workerProfile.hourlyRate) ?? ""),
    skills: (workerProfile == null ? void 0 : workerProfile.skills) ?? []
  });
  reactExports.useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate({ to: "/login" });
  }, [isAuthenticated, isLoading, navigate]);
  reactExports.useEffect(() => {
    if (workerProfile) {
      setEditForm({
        displayName: workerProfile.displayName,
        bio: workerProfile.bio,
        hourlyRate: String(workerProfile.hourlyRate),
        skills: workerProfile.skills
      });
    }
  }, [workerProfile]);
  const toggleSkill = (skill) => {
    setEditForm((f) => ({
      ...f,
      skills: f.skills.includes(skill) ? f.skills.filter((s) => s !== skill) : [...f.skills, skill]
    }));
  };
  const handleSave = async () => {
    if (!editForm.displayName.trim()) {
      ue.error("Name is required");
      return;
    }
    setSaving(true);
    try {
      if (workerProfile) {
        setWorkerProfile({
          ...workerProfile,
          displayName: editForm.displayName,
          bio: editForm.bio,
          hourlyRate: Number(editForm.hourlyRate) || workerProfile.hourlyRate,
          skills: editForm.skills
        });
      }
      ue.success("Profile updated!");
      setEditing(false);
    } catch {
      ue.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };
  const handleLogout = () => {
    logout();
    setRole(null);
    navigate({ to: "/" });
  };
  const ratings = (workerProfile == null ? void 0 : workerProfile.ratings.length) ? workerProfile.ratings : MOCK_RATINGS;
  const avgRating = ratings.length ? ratings.reduce((a, r) => a + r.stars, 0) / ratings.length : 0;
  const completedJobs = (workerProfile == null ? void 0 : workerProfile.completedJobs) ?? 1;
  const isVerified = completedJobs >= 5;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "lg",
            className: "space-y-5",
            "data-ocid": "worker_profile.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, #6C63FF, #00C2FF)"
                      },
                      children: ((_b = (_a = workerProfile == null ? void 0 : workerProfile.displayName) == null ? void 0 : _a[0]) == null ? void 0 : _b.toUpperCase()) ?? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-7 h-7" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold font-display text-foreground", children: (workerProfile == null ? void 0 : workerProfile.displayName) ?? "Your Name" }),
                      isVerified && /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusBadge, { variant: "verified", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
                        " Verified"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: avgRating, size: "sm" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "(",
                        ratings.length,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        StatusBadge,
                        {
                          variant: (workerProfile == null ? void 0 : workerProfile.availability) ? "open" : "closed",
                          children: (workerProfile == null ? void 0 : workerProfile.availability) ? "Available" : "Busy"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditing(!editing),
                    className: "flex-shrink-0 w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth",
                    "data-ocid": "worker_profile.edit_button",
                    children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
                {
                  label: "Completed",
                  value: completedJobs,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4" }),
                  color: "#6C63FF"
                },
                {
                  label: "Earnings",
                  value: `₹${((workerProfile == null ? void 0 : workerProfile.totalEarnings) ?? 200).toLocaleString()}`,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4" }),
                  color: "#00C2FF"
                },
                {
                  label: "Rating",
                  value: avgRating.toFixed(1),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
                  color: "#F59E0B"
                }
              ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-3 rounded-xl",
                  style: {
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)"
                  },
                  "data-ocid": `worker_profile.stat.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex justify-center mb-1",
                        style: { color: s.color },
                        children: s.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: s.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label })
                  ]
                },
                s.label
              )) }),
              editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "profile_bio",
                    className: "text-xs text-muted-foreground",
                    children: "Bio"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "profile_bio",
                    value: editForm.bio,
                    onChange: (e) => setEditForm((f) => ({ ...f, bio: e.target.value })),
                    rows: 3,
                    className: "w-full px-3 py-2 rounded-xl text-sm text-foreground outline-none resize-none transition-smooth",
                    style: {
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)"
                    },
                    "data-ocid": "worker_profile.bio_textarea"
                  }
                )
              ] }) : (workerProfile == null ? void 0 : workerProfile.bio) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: workerProfile.bio })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4 text-primary" }),
                  editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "number",
                      value: editForm.hourlyRate,
                      onChange: (e) => setEditForm((f) => ({ ...f, hourlyRate: e.target.value })),
                      className: "w-20 px-2 py-1 rounded-lg text-sm text-foreground outline-none",
                      style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)"
                      },
                      "data-ocid": "worker_profile.rate_input"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
                    "₹",
                    (workerProfile == null ? void 0 : workerProfile.hourlyRate) ?? 150,
                    "/hr"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Mumbai, IN" })
                ] })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "md",
            className: "space-y-3",
            "data-ocid": "worker_profile.skills_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground", children: "Skills" })
              ] }),
              editing ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SKILL_OPTIONS.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => toggleSkill(skill),
                  className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
                  style: {
                    background: editForm.skills.includes(skill) ? "rgba(108,99,255,0.35)" : "rgba(255,255,255,0.06)",
                    border: editForm.skills.includes(skill) ? "1px solid rgba(108,99,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                    color: editForm.skills.includes(skill) ? "#a5a1ff" : "#94a3b8"
                  },
                  children: skill
                },
                skill
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
                ((workerProfile == null ? void 0 : workerProfile.skills) ?? []).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { label: s }, s)),
                ((workerProfile == null ? void 0 : workerProfile.skills) ?? []).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No skills added yet" })
              ] })
            ]
          }
        )
      }
    ),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "flex gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GradientButton,
            {
              variant: "primary",
              size: "md",
              fullWidth: true,
              loading: saving,
              onClick: handleSave,
              "data-ocid": "worker_profile.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
                "Save Changes"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GradientButton,
            {
              variant: "ghost",
              size: "md",
              onClick: () => setEditing(false),
              "data-ocid": "worker_profile.cancel_button",
              children: "Cancel"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "md",
            className: "space-y-4",
            "data-ocid": "worker_profile.ratings_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground", children: "Reviews" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-foreground", children: avgRating.toFixed(1) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: Math.round(avgRating), size: "sm" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    "(",
                    ratings.length,
                    ")"
                  ] })
                ] })
              ] }),
              ratings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                EmptyState,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6" }),
                  title: "No reviews yet",
                  description: "Complete your first job to receive ratings"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ratings.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "py-3 border-t",
                  style: { borderColor: "rgba(255,255,255,0.07)" },
                  "data-ocid": `worker_profile.review.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: r.stars, size: "sm" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(r.createdAt).toLocaleDateString() })
                    ] }),
                    r.comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: r.comment })
                  ]
                },
                `${r.stars}-${r.createdAt}-${i}`
              )) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "md",
            className: "space-y-3",
            "data-ocid": "worker_profile.earnings_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4 text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground", children: "Earnings Summary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                { label: "This Month", value: "₹1,200" },
                {
                  label: "Total Earned",
                  value: `₹${((workerProfile == null ? void 0 : workerProfile.totalEarnings) ?? 200).toLocaleString()}`
                },
                { label: "Jobs Done", value: completedJobs },
                {
                  label: "Avg per Job",
                  value: completedJobs ? `₹${Math.round(((workerProfile == null ? void 0 : workerProfile.totalEarnings) ?? 200) / completedJobs)}` : "—"
                }
              ].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-3 rounded-xl",
                  style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)"
                  },
                  "data-ocid": `worker_profile.earning.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: String(e.value) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: e.label })
                  ]
                },
                e.label
              )) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      GradientButton,
      {
        variant: "ghost",
        size: "md",
        fullWidth: true,
        onClick: handleLogout,
        "data-ocid": "worker_profile.logout_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
          "Sign Out"
        ]
      }
    )
  ] }) });
}
export {
  WorkerProfile as default
};
