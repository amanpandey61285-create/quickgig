import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, d as LoadingSpinner } from "./index-Bhvb_wkP.js";
import { L as Layout } from "./Layout-DCFJ7ZK3.js";
import { E as EmptyState } from "./EmptyState-BVnbDfxP.js";
import { e as motion, g as GlassCard, G as GradientButton, Z as Zap } from "./GlassCard-DkCgMR2r.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { u as useAuth, B as Briefcase } from "./use-auth-DIarAbOw.js";
import { u as useUserStore, U as User } from "./user-store-B0tffYM3.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
import { B as Banknote } from "./banknote-BmgAylX8.js";
import { S as Star } from "./star-BecAt0Wi.js";
import { B as Bell } from "./bell-CzA26CEa.js";
import { T as TrendingUp } from "./trending-up-EipNabIE.js";
import { S as Search } from "./search-8W7gJEr3.js";
import "./AvatarUpload-D_s4GvuX.js";
import "./log-in-BCMEdyHB.js";
import "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
];
const ToggleLeft = createLucideIcon("toggle-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "15", cy: "12", r: "3", key: "1afu0r" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
];
const ToggleRight = createLucideIcon("toggle-right", __iconNode);
const MOCK_APPLICATIONS = [
  {
    id: "1",
    jobTitle: "Café Staff for Weekend",
    employer: "Brewhouse Café",
    pay: 180,
    status: "pending",
    appliedAt: "2h ago"
  },
  {
    id: "2",
    jobTitle: "Event Helper — Corporate Meet",
    employer: "EventPro Agency",
    pay: 250,
    status: "accepted",
    appliedAt: "1d ago"
  },
  {
    id: "3",
    jobTitle: "Delivery Helper (6hrs)",
    employer: "SwiftCart",
    pay: 200,
    status: "completed",
    appliedAt: "3d ago"
  },
  {
    id: "4",
    jobTitle: "Data Entry — Insurance",
    employer: "FinServe Co.",
    pay: 140,
    status: "rejected",
    appliedAt: "5d ago"
  }
];
const statusVariant = (s) => s;
function WorkerDashboard() {
  var _a;
  const { isAuthenticated, isLoading } = useAuth();
  const { workerProfile, setWorkerProfile } = useUserStore();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, isLoading, navigate]);
  const toggleAvailability = () => {
    if (!workerProfile) return;
    setWorkerProfile({
      ...workerProfile,
      availability: !workerProfile.availability
    });
  };
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { fullScreen: true });
  const stats = [
    {
      label: "Jobs Applied",
      value: MOCK_APPLICATIONS.length,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5" }),
      color: "#6C63FF"
    },
    {
      label: "Completed",
      value: (workerProfile == null ? void 0 : workerProfile.completedJobs) ?? 1,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
      color: "#10B981"
    },
    {
      label: "Earnings",
      value: `₹${((workerProfile == null ? void 0 : workerProfile.totalEarnings) ?? 200).toLocaleString()}`,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-5 h-5" }),
      color: "#00C2FF"
    },
    {
      label: "Rating",
      value: (workerProfile == null ? void 0 : workerProfile.ratings.length) ? (workerProfile.ratings.reduce((a, r) => a + r.stars, 0) / workerProfile.ratings.length).toFixed(1) : "—",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5" }),
      color: "#F59E0B"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-start justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold font-display text-foreground", children: [
              "Hey, ",
              ((_a = workerProfile == null ? void 0 : workerProfile.displayName) == null ? void 0 : _a.split(" ")[0]) ?? "Worker",
              " 👋"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Here's your activity overview" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "relative w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth",
              "data-ocid": "worker_dashboard.notifications_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full",
                    style: { background: "#6C63FF", border: "2px solid #0F172A" }
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "md", className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-xl flex items-center justify-center",
                style: {
                  background: (workerProfile == null ? void 0 : workerProfile.availability) ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.06)"
                },
                children: (workerProfile == null ? void 0 : workerProfile.availability) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "w-5 h-5 text-emerald-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "w-5 h-5 text-muted-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Availability Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: (workerProfile == null ? void 0 : workerProfile.availability) ? "You're visible to employers" : "You're hidden from employers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: toggleAvailability,
              className: "w-12 h-6 rounded-full transition-smooth relative flex-shrink-0",
              style: {
                background: (workerProfile == null ? void 0 : workerProfile.availability) ? "linear-gradient(90deg, #6C63FF, #8B5CF6)" : "rgba(255,255,255,0.15)"
              },
              "data-ocid": "worker_dashboard.availability_toggle",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-smooth",
                  style: { left: (workerProfile == null ? void 0 : workerProfile.availability) ? "26px" : "2px" }
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 + i * 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "md",
            className: "space-y-2",
            "data-ocid": `worker_dashboard.stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-lg flex items-center justify-center",
                    style: { background: `${stat.color}22` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: stat.color }, children: stat.icon })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-muted-foreground" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold font-display text-foreground", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: stat.label })
              ] })
            ]
          }
        )
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.35 },
        className: "grid grid-cols-2 gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GradientButton,
            {
              variant: "primary",
              size: "md",
              fullWidth: true,
              onClick: () => navigate({ to: "/jobs" }),
              "data-ocid": "worker_dashboard.find_jobs_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                "Find Jobs"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GradientButton,
            {
              variant: "outline",
              size: "md",
              fullWidth: true,
              onClick: () => navigate({ to: "/worker/profile" }),
              "data-ocid": "worker_dashboard.update_profile_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
                "My Profile"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.42 },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground", children: "Recent Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/jobs" }),
                className: "text-xs text-primary hover:underline",
                "data-ocid": "worker_dashboard.view_all_link",
                children: "View all"
              }
            )
          ] }),
          MOCK_APPLICATIONS.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-7 h-7" }),
              title: "No applications yet",
              description: "Find and apply to nearby jobs to get started",
              action: {
                label: "Browse Jobs",
                onClick: () => navigate({ to: "/jobs" })
              }
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: MOCK_APPLICATIONS.map((app, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.45 + i * 0.07 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GlassCard,
                {
                  hover: true,
                  padding: "sm",
                  className: "flex items-center justify-between gap-3",
                  "data-ocid": `worker_dashboard.application.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                        style: { background: "rgba(108,99,255,0.15)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: app.jobTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        app.employer,
                        " · ",
                        app.appliedAt
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-1", children: [
                        "₹",
                        app.pay,
                        "/hr"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: statusVariant(app.status), children: app.status.charAt(0).toUpperCase() + app.status.slice(1) })
                    ] })
                  ]
                }
              )
            },
            app.id
          )) })
        ]
      }
    )
  ] }) });
}
export {
  WorkerDashboard as default
};
