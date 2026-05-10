import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { u as useUserRole, L as Layout } from "./Layout-DCFJ7ZK3.js";
import { e as motion, g as GlassCard, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { S as Shield } from "./shield-DfkFHAlX.js";
import { U as Users } from "./users-Bv6WyFFr.js";
import { C as ChartColumn } from "./chart-column-BXpc4fIS.js";
import { B as Briefcase } from "./use-auth-DIarAbOw.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
import "./AvatarUpload-D_s4GvuX.js";
import "./user-store-B0tffYM3.js";
import "./log-in-BCMEdyHB.js";
import "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$1);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const STATS = [
  {
    label: "Total Users",
    value: "27,640",
    change: "+12% this week",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    label: "Active Jobs",
    value: "1,842",
    change: "+8% this week",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5" }),
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    label: "Jobs Completed",
    value: "58,294",
    change: "+22% this month",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    label: "Total Payouts",
    value: "₹2.3M",
    change: "+18% this month",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5" }),
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  }
];
const MOCK_USERS = [
  {
    id: "u1",
    name: "Priya Sharma",
    role: "Worker",
    status: "Active",
    joined: "2 days ago",
    jobs: 18
  },
  {
    id: "u2",
    name: "Rohan's Café",
    role: "Employer",
    status: "Active",
    joined: "1 week ago",
    jobs: 6
  },
  {
    id: "u3",
    name: "Amit Kumar",
    role: "Worker",
    status: "Active",
    joined: "3 days ago",
    jobs: 7
  },
  {
    id: "u4",
    name: "The Party Hub",
    role: "Employer",
    status: "Pending",
    joined: "5 hours ago",
    jobs: 0
  },
  {
    id: "u5",
    name: "Divya Nair",
    role: "Worker",
    status: "Active",
    joined: "1 month ago",
    jobs: 24
  }
];
function AdminPage() {
  const navigate = useNavigate();
  const { role } = useUserRole();
  reactExports.useEffect(() => {
    if (role !== null && role !== "admin") {
      navigate({ to: "/" });
    }
  }, [role, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "admin.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-center justify-between flex-wrap gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Admin Panel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "QuickGig platform management" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "verified", children: "Admin Access" })
        ]
      }
    ),
    role !== "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "glass-card p-4 flex items-center gap-3 border-yellow-500/30",
        style: { borderColor: "rgba(234,179,8,0.3)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-yellow-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-400", children: "You are viewing in preview mode. Admin access requires verification." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.08 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "md",
            className: "space-y-2",
            "data-ocid": `admin.stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`,
                  children: s.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-display font-bold ${s.color}`, children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-emerald-400", children: s.change })
            ]
          }
        )
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        GradientButton,
        {
          variant: "primary",
          size: "sm",
          "data-ocid": "admin.manage_users.button",
          onClick: () => ue.info("Coming soon", {
            description: "User management panel is under development."
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            " Manage Users"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        GradientButton,
        {
          variant: "outline",
          size: "sm",
          "data-ocid": "admin.view_analytics.button",
          onClick: () => ue.info("Coming soon", {
            description: "Analytics dashboard is under development."
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4" }),
            " Analytics"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        GradientButton,
        {
          variant: "ghost",
          size: "sm",
          "data-ocid": "admin.settings.button",
          onClick: () => ue.info("Coming soon", {
            description: "Settings panel is under development."
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
            " Settings"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground", children: "Recent Users" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusBadge, { variant: "default", children: [
              MOCK_USERS.length,
              " total"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden divide-y divide-white/10", children: MOCK_USERS.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-5 py-4 space-y-2",
              "data-ocid": `admin.user.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm text-foreground", children: u.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusBadge,
                    {
                      variant: u.status === "Active" ? "accepted" : "pending",
                      children: u.status
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary/10 text-primary px-2 py-0.5 rounded-md", children: u.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    u.jobs,
                    " jobs"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Joined ",
                    u.joined
                  ] })
                ] })
              ]
            },
            u.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-white/10", children: [
              "User",
              "Role",
              "Status",
              "Jobs",
              "Joined",
              "Actions"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide px-5 py-3",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-white/5", children: MOCK_USERS.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-white/5 transition-smooth",
                "data-ocid": `admin.user.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-medium text-foreground", children: u.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md", children: u.role }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusBadge,
                    {
                      variant: u.status === "Active" ? "accepted" : "pending",
                      children: u.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right text-muted-foreground font-mono", children: u.jobs }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: u.joined }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    GradientButton,
                    {
                      variant: "ghost",
                      size: "sm",
                      "data-ocid": `admin.user.edit.${i + 1}`,
                      children: "Edit"
                    }
                  ) })
                ]
              },
              u.id
            )) })
          ] }) })
        ] })
      }
    )
  ] }) });
}
export {
  AdminPage as default
};
