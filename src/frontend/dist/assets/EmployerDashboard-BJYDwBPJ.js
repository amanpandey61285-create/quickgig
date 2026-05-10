import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports } from "./index-Bhvb_wkP.js";
import { L as Layout } from "./Layout-DCFJ7ZK3.js";
import { E as EmptyState } from "./EmptyState-BVnbDfxP.js";
import { e as motion, G as GradientButton, g as GlassCard, Z as Zap } from "./GlassCard-DkCgMR2r.js";
import { J as JobCard } from "./JobCard-iz9N6wMV.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { u as useUserStore } from "./user-store-B0tffYM3.js";
import { P as Plus } from "./plus-C3Q_Kd9R.js";
import { C as ChartColumn } from "./chart-column-BXpc4fIS.js";
import { C as ChevronRight } from "./chevron-right-202_MlFm.js";
import { B as Briefcase } from "./use-auth-DIarAbOw.js";
import { U as Users } from "./users-Bv6WyFFr.js";
import { T as TrendingUp } from "./trending-up-EipNabIE.js";
import { S as Star } from "./star-BecAt0Wi.js";
import "./AvatarUpload-D_s4GvuX.js";
import "./log-in-BCMEdyHB.js";
import "./SkillTag-DmQjiAIO.js";
import "./banknote-BmgAylX8.js";
import "./map-pin-Do2q-bd0.js";
import "./circle-check-big-DHjOkuCu.js";
import "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
];
const CircleUser = createLucideIcon("circle-user", __iconNode);
const SAMPLE_JOBS = [
  {
    id: "j1",
    title: "Café Server for Sunday Brunch",
    category: "Café Staff",
    payAmount: 250,
    duration: "4 hrs",
    timing: "Immediate",
    location: "Bandra, Mumbai",
    urgent: true,
    skillsRequired: ["F&B", "Customer Service"],
    applicationCount: 11,
    status: "open"
  },
  {
    id: "j2",
    title: "Warehouse Packing Assistant",
    category: "Warehouse Helper",
    payAmount: 180,
    duration: "Half day",
    timing: "Scheduled",
    location: "Andheri, Mumbai",
    urgent: false,
    skillsRequired: ["Packing", "Physical Fitness"],
    applicationCount: 5,
    status: "open"
  },
  {
    id: "j3",
    title: "Event Registration Desk",
    category: "Event Worker",
    payAmount: 200,
    duration: "6 hrs",
    timing: "Scheduled",
    location: "Powai, Mumbai",
    urgent: false,
    skillsRequired: ["English", "MS Excel"],
    applicationCount: 8,
    status: "completed"
  }
];
const STATS = [
  {
    label: "Active Jobs",
    value: "2",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5" }),
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    label: "Total Applicants",
    value: "24",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    label: "Hired",
    value: "18",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    label: "Avg Rating",
    value: "4.8",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5" }),
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  }
];
const QUICK_ACTIONS = [
  {
    label: "Post New Job",
    icon: Plus,
    to: "/employer/post-job",
    ocid: "employer_dashboard.post_job.primary_button"
  },
  {
    label: "View Profile",
    icon: CircleUser,
    to: "/employer/profile",
    ocid: "employer_dashboard.profile.secondary_button"
  },
  {
    label: "Analytics",
    icon: ChartColumn,
    to: "/employer/dashboard",
    ocid: "employer_dashboard.analytics.secondary_button"
  }
];
function EmployerDashboardPage() {
  const navigate = useNavigate();
  const { employerProfile } = useUserStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "employer_dashboard.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-start justify-between flex-wrap gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "verified", children: "Verified Business" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-bold text-foreground", children: [
              "Welcome back",
              (employerProfile == null ? void 0 : employerProfile.businessName) ? `, ${employerProfile.businessName}` : "",
              " ",
              "👋"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Manage job postings and find the right workers fast." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GradientButton,
            {
              variant: "primary",
              size: "md",
              onClick: () => navigate({ to: "/employer/post-job" }),
              "data-ocid": "employer_dashboard.post_job.primary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                " Post a Job"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "md", className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`,
              children: s.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-display font-bold ${s.color}`, children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label })
        ] })
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Quick Actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: QUICK_ACTIONS.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 0.1 + i * 0.07 },
          onClick: () => navigate({ to: a.to }),
          className: "glass-card-hover p-4 flex flex-col items-center gap-2 text-center cursor-pointer",
          "data-ocid": a.ocid,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: a.label })
          ]
        },
        a.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-foreground flex items-center gap-2", children: [
          "Your Jobs",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusBadge, { variant: "open", children: [
            SAMPLE_JOBS.filter((j) => j.status === "open").length,
            " Active"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GradientButton,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => navigate({ to: "/employer/post-job" }),
            "data-ocid": "employer_dashboard.view_all.secondary_button",
            children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
            ]
          }
        )
      ] }),
      SAMPLE_JOBS.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-8 h-8" }),
          title: "Post your first job",
          description: "Reach verified workers in your area instantly.",
          action: {
            label: "Post a Job",
            onClick: () => navigate({ to: "/employer/post-job" })
          },
          "data-ocid": "employer_dashboard.jobs.empty_state"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: SAMPLE_JOBS.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.1 + i * 0.08 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              JobCard,
              {
                job,
                index: i,
                onClick: () => navigate({ to: `/employer/jobs/${job.id}/applicants` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              GradientButton,
              {
                variant: "outline",
                size: "sm",
                onClick: (e) => {
                  e.stopPropagation();
                  navigate({
                    to: `/employer/jobs/${job.id}/applicants`
                  });
                },
                "data-ocid": `employer_dashboard.view_applicants.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                  " Applicants"
                ]
              }
            ) })
          ] })
        },
        job.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 },
        className: "gradient-primary rounded-2xl p-5 flex items-center justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-base", children: "Need workers faster?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mt-0.5", children: "Boost your job post to reach 10× more workers." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-white" }) })
        ]
      }
    )
  ] }) });
}
export {
  EmployerDashboardPage as default
};
