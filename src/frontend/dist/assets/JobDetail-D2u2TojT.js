import { c as createLucideIcon, b as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { L as Layout } from "./Layout-DCFJ7ZK3.js";
import { G as GradientButton, e as motion, g as GlassCard } from "./GlassCard-DkCgMR2r.js";
import { S as SkillTag } from "./SkillTag-DmQjiAIO.js";
import { S as StarRating } from "./StarRating-5EJfoaJ0.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { B as Briefcase } from "./use-auth-DIarAbOw.js";
import { B as Banknote } from "./banknote-BmgAylX8.js";
import { C as Clock } from "./AvatarUpload-D_s4GvuX.js";
import { M as MapPin } from "./map-pin-Do2q-bd0.js";
import { U as Users } from "./users-Bv6WyFFr.js";
import { B as Building2 } from "./building-2-BcbUKDxB.js";
import "./user-store-B0tffYM3.js";
import "./log-in-BCMEdyHB.js";
import "./star-BecAt0Wi.js";
import "./circle-check-big-DHjOkuCu.js";
import "./sparkles-Cnywz3L8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
const JOB_DATA = {
  "1": {
    id: "1",
    title: "Café Staff for Weekend Rush",
    description: "We're looking for energetic and friendly café staff to help during our weekend rush. You'll be taking orders, preparing beverages, serving customers, and maintaining cleanliness. Prior café or food service experience preferred but not required. We provide a quick onboarding session.",
    category: "Café Staff",
    employerName: "Brewhouse Café",
    employerRating: 4.7,
    employerReviews: 23,
    payAmount: 180,
    duration: "6 hrs",
    timing: "Sat & Sun, 8am–2pm",
    location: "Bandra West, Mumbai",
    urgent: true,
    skillsRequired: ["Café Staff", "Customer Service"],
    workersNeeded: 3,
    applicationCount: 8,
    status: "open"
  },
  "2": {
    id: "2",
    title: "Event Helper — Tech Conference",
    description: "We need event helpers for a 200-person tech conference at BKC. Responsibilities include guest registration, directing attendees, managing materials, and general support. Smart casual dress code. Meals and transport allowance included.",
    category: "Event Worker",
    employerName: "EventPro Agency",
    employerRating: 4.5,
    employerReviews: 41,
    payAmount: 250,
    duration: "8 hrs",
    timing: "Monday, 9am–5pm",
    location: "BKC, Mumbai",
    urgent: true,
    skillsRequired: ["Event Work", "Reception"],
    workersNeeded: 5,
    applicationCount: 14,
    status: "open"
  },
  "3": {
    id: "3",
    title: "Delivery Helper (Swiggy Partner)",
    description: "Join our delivery team as a helper for a Swiggy-partnered restaurant. You will assist in sorting, packing, and handing off delivery orders. Peak hours 12–4pm daily.",
    category: "Delivery",
    employerName: "SwiftCart",
    employerRating: 4.2,
    employerReviews: 18,
    payAmount: 200,
    duration: "4 hrs",
    timing: "Daily, 12pm–4pm",
    location: "Andheri East, Mumbai",
    urgent: false,
    skillsRequired: ["Delivery", "Driving"],
    workersNeeded: 2,
    applicationCount: 22,
    status: "open"
  },
  "4": {
    id: "4",
    title: "Warehouse Packing — Night Shift",
    description: "Join our warehouse packing team for the night shift. Work involves sorting, packing, and labeling products for next-day dispatch. Physical stamina required. Dinner and transport provided.",
    category: "Warehouse",
    employerName: "QuickStore Logistics",
    employerRating: 4,
    employerReviews: 12,
    payAmount: 170,
    duration: "8 hrs",
    timing: "Mon–Fri, 10pm–6am",
    location: "Kurla, Mumbai",
    urgent: false,
    skillsRequired: ["Packing", "Loading"],
    workersNeeded: 6,
    applicationCount: 5,
    status: "open"
  },
  "5": {
    id: "5",
    title: "Store Assistant — Zara",
    description: "Assist the Zara store team during peak weekend hours. Responsibilities: helping customers, folding/organizing garments, billing support, and general store maintenance.",
    category: "Store Assist",
    employerName: "Zara Palladium",
    employerRating: 4.8,
    employerReviews: 56,
    payAmount: 160,
    duration: "5 hrs",
    timing: "Weekends, 12pm–5pm",
    location: "Palladium Mall, Mumbai",
    urgent: false,
    skillsRequired: ["Store Assist", "Sales"],
    workersNeeded: 2,
    applicationCount: 17,
    status: "open"
  },
  "6": {
    id: "6",
    title: "Data Entry Operator",
    description: "We need data entry operators to digitize customer records from printed forms. Work can be partially remote. Accuracy is paramount.",
    category: "Data Entry",
    employerName: "FinServe Co.",
    employerRating: 3.9,
    employerReviews: 8,
    payAmount: 140,
    duration: "4 hrs",
    timing: "Daily, 10am–2pm",
    location: "Remote / Dadar, Mumbai",
    urgent: false,
    skillsRequired: ["Data Entry", "Tech Support"],
    workersNeeded: 4,
    applicationCount: 31,
    status: "open"
  },
  "7": {
    id: "7",
    title: "Security Guard — Night",
    description: "Seeking responsible and alert security guards for a residential complex in Powai. Night shift position. Uniform provided. Prior security experience preferred.",
    category: "Security",
    employerName: "SafeHomes Society",
    employerRating: 4.3,
    employerReviews: 14,
    payAmount: 220,
    duration: "10 hrs",
    timing: "Daily, 10pm–8am",
    location: "Powai, Mumbai",
    urgent: true,
    skillsRequired: ["Security"],
    workersNeeded: 2,
    applicationCount: 3,
    status: "open"
  },
  "8": {
    id: "8",
    title: "Office Cleaning — Morning",
    description: "Morning cleaning staff needed for a commercial office in Nariman Point. Duties include mopping, dusting, restroom cleaning, and emptying trash. Equipment provided.",
    category: "Cleaning",
    employerName: "CleanCo Services",
    employerRating: 4.1,
    employerReviews: 9,
    payAmount: 120,
    duration: "3 hrs",
    timing: "Daily, 6am–9am",
    location: "Nariman Point, Mumbai",
    urgent: false,
    skillsRequired: ["Cleaning"],
    workersNeeded: 2,
    applicationCount: 7,
    status: "open"
  },
  "9": {
    id: "9",
    title: "Promotional Sales Staff",
    description: "Represent our brand at a mall kiosk and promote our new product line. High energy, outgoing personality required. Commission-based bonus on top of hourly rate.",
    category: "Store Assist",
    employerName: "TrendMart",
    employerRating: 4.4,
    employerReviews: 27,
    payAmount: 190,
    duration: "6 hrs",
    timing: "Sat–Sun, 11am–5pm",
    location: "Malad West, Mumbai",
    urgent: false,
    skillsRequired: ["Sales", "Customer Service"],
    workersNeeded: 3,
    applicationCount: 11,
    status: "open"
  },
  "10": {
    id: "10",
    title: "Event Photographer Assistant",
    description: "Assist a professional photographer at corporate and social events. You'll manage equipment, help with lighting, and assist in organizing photoshoots. Photography knowledge is a big plus.",
    category: "Event Worker",
    employerName: "LensWorks Studio",
    employerRating: 4.9,
    employerReviews: 19,
    payAmount: 300,
    duration: "5 hrs",
    timing: "Friday evenings, 6pm–11pm",
    location: "Juhu, Mumbai",
    urgent: true,
    skillsRequired: ["Photography", "Event Work"],
    workersNeeded: 1,
    applicationCount: 6,
    status: "open"
  }
};
function JobDetail() {
  const params = useParams({ from: "/jobs/$id" });
  const navigate = useNavigate();
  const [applied, setApplied] = reactExports.useState(false);
  const [applying, setApplying] = reactExports.useState(false);
  const job = JOB_DATA[params.id];
  if (!job) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-12 h-12 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: "Job Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GradientButton,
        {
          variant: "primary",
          onClick: () => navigate({ to: "/jobs" }),
          "data-ocid": "job_detail.back_button",
          children: "Browse Jobs"
        }
      )
    ] }) });
  }
  const handleApply = async () => {
    setApplying(true);
    await new Promise((r) => setTimeout(r, 900));
    setApplied(true);
    setApplying(false);
    ue.success("Application submitted! The employer will contact you soon.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-8 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        initial: { opacity: 0, x: -12 },
        animate: { opacity: 1, x: 0 },
        onClick: () => navigate({ to: "/jobs" }),
        className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth",
        "data-ocid": "job_detail.back_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Back to Jobs"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          GlassCard,
          {
            padding: "lg",
            className: "space-y-5",
            "data-ocid": "job_detail.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                    job.urgent && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "urgent", children: "Urgent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "open", children: "Open" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold font-display text-foreground", children: job.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: job.category })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "flex-shrink-0 w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth",
                    onClick: () => {
                      void navigator.clipboard.writeText(window.location.href);
                      ue.success("Link copied!");
                    },
                    "data-ocid": "job_detail.share_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4 text-primary" }),
                  label: "Pay",
                  value: `₹${job.payAmount}/hr`
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-accent" }),
                  label: "Duration",
                  value: job.duration
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-secondary" }),
                  label: "Timing",
                  value: job.timing
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-emerald-400" }),
                  label: "Location",
                  value: job.location
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-yellow-400" }),
                  label: "Workers",
                  value: `${job.workersNeeded} needed`
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 text-muted-foreground" }),
                  label: "Applied",
                  value: `${job.applicationCount}`
                }
              ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2.5 p-2.5 rounded-xl",
                  style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)"
                  },
                  "data-ocid": `job_detail.meta.${i + 1}`,
                  children: [
                    m.icon,
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: m.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: m.value })
                    ] })
                  ]
                },
                m.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "About this Job" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: job.description })
              ] }),
              job.skillsRequired.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Skills Required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: job.skillsRequired.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { label: s }, s)) })
              ] }),
              applied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold",
                  style: {
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)"
                  },
                  "data-ocid": "job_detail.applied_badge",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "accepted", children: "Applied" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "Application Submitted" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GradientButton,
                {
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  loading: applying,
                  onClick: handleApply,
                  "data-ocid": "job_detail.apply_button",
                  children: [
                    "Apply Now — ₹",
                    job.payAmount,
                    "/hr"
                  ]
                }
              )
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
        transition: { delay: 0.15 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "md", "data-ocid": "job_detail.employer_card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-3", children: "About the Employer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, #8B5CF6, #6C63FF)"
                },
                children: job.employerName[0]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: job.employerName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "verified", children: "Verified" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StarRating,
                  {
                    value: Math.round(job.employerRating),
                    size: "sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  job.employerRating,
                  " (",
                  job.employerReviews,
                  " reviews)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-muted-foreground flex-shrink-0" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.25 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          GradientButton,
          {
            variant: "outline",
            size: "md",
            fullWidth: true,
            onClick: () => navigate({ to: "/jobs" }),
            "data-ocid": "job_detail.browse_more_button",
            children: "Browse More Jobs"
          }
        )
      }
    )
  ] }) });
}
export {
  JobDetail as default
};
