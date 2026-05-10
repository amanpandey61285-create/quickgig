import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { L as Layout } from "./Layout-DCFJ7ZK3.js";
import { E as EmptyState } from "./EmptyState-BVnbDfxP.js";
import { J as JobCard } from "./JobCard-iz9N6wMV.js";
import { e as motion } from "./GlassCard-DkCgMR2r.js";
import { S as Search } from "./search-8W7gJEr3.js";
import { F as Flame } from "./AvatarUpload-D_s4GvuX.js";
import "./use-auth-DIarAbOw.js";
import "./user-store-B0tffYM3.js";
import "./log-in-BCMEdyHB.js";
import "./SkillTag-DmQjiAIO.js";
import "./StatusBadge-Z14A2Inf.js";
import "./circle-check-big-DHjOkuCu.js";
import "./sparkles-Cnywz3L8.js";
import "./banknote-BmgAylX8.js";
import "./map-pin-Do2q-bd0.js";
import "./users-Bv6WyFFr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const ALL_CATEGORIES = [
  "All",
  "Delivery",
  "Café Staff",
  "Event Worker",
  "Warehouse",
  "Store Assist",
  "Data Entry",
  "Cleaning",
  "Security",
  "Driver"
];
const MOCK_JOBS = [
  {
    id: "1",
    title: "Café Staff for Weekend Rush",
    category: "Café Staff",
    payAmount: 180,
    duration: "6 hrs",
    timing: "Sat 8am–2pm",
    location: "Bandra, Mumbai",
    urgent: true,
    skillsRequired: ["Café Staff", "Customer Service"],
    applicationCount: 8,
    status: "open"
  },
  {
    id: "2",
    title: "Event Helper — Tech Conference",
    category: "Event Worker",
    payAmount: 250,
    duration: "8 hrs",
    timing: "Mon 9am–5pm",
    location: "BKC, Mumbai",
    urgent: true,
    skillsRequired: ["Event Work", "Reception"],
    applicationCount: 14,
    status: "open"
  },
  {
    id: "3",
    title: "Delivery Helper (Swiggy Partner)",
    category: "Delivery",
    payAmount: 200,
    duration: "4 hrs",
    timing: "Daily 12–4pm",
    location: "Andheri, Mumbai",
    urgent: false,
    skillsRequired: ["Delivery", "Driving"],
    applicationCount: 22,
    status: "open"
  },
  {
    id: "4",
    title: "Warehouse Packing — Night Shift",
    category: "Warehouse",
    payAmount: 170,
    duration: "8 hrs",
    timing: "Mon–Fri 10pm",
    location: "Kurla, Mumbai",
    urgent: false,
    skillsRequired: ["Packing", "Loading"],
    applicationCount: 5,
    status: "open"
  },
  {
    id: "5",
    title: "Store Assistant — Zara",
    category: "Store Assist",
    payAmount: 160,
    duration: "5 hrs",
    timing: "Weekends",
    location: "Palladium Mall",
    urgent: false,
    skillsRequired: ["Store Assist", "Sales"],
    applicationCount: 17,
    status: "open"
  },
  {
    id: "6",
    title: "Data Entry Operator",
    category: "Data Entry",
    payAmount: 140,
    duration: "4 hrs",
    timing: "Daily 10am–2pm",
    location: "Remote / Dadar",
    urgent: false,
    skillsRequired: ["Data Entry", "Tech Support"],
    applicationCount: 31,
    status: "open"
  },
  {
    id: "7",
    title: "Security Guard — Night",
    category: "Security",
    payAmount: 220,
    duration: "10 hrs",
    timing: "10pm–8am",
    location: "Powai, Mumbai",
    urgent: true,
    skillsRequired: ["Security"],
    applicationCount: 3,
    status: "open"
  },
  {
    id: "8",
    title: "Office Cleaning — Morning",
    category: "Cleaning",
    payAmount: 120,
    duration: "3 hrs",
    timing: "Daily 6–9am",
    location: "Nariman Point",
    urgent: false,
    skillsRequired: ["Cleaning"],
    applicationCount: 7,
    status: "open"
  },
  {
    id: "9",
    title: "Promotional Sales Staff",
    category: "Store Assist",
    payAmount: 190,
    duration: "6 hrs",
    timing: "Sat–Sun 11am",
    location: "Malad, Mumbai",
    urgent: false,
    skillsRequired: ["Sales", "Customer Service"],
    applicationCount: 11,
    status: "open"
  },
  {
    id: "10",
    title: "Event Photographer Assistant",
    category: "Event Worker",
    payAmount: 300,
    duration: "5 hrs",
    timing: "Fri evenings",
    location: "Juhu, Mumbai",
    urgent: true,
    skillsRequired: ["Photography", "Event Work"],
    applicationCount: 6,
    status: "open"
  }
];
function Jobs() {
  const navigate = useNavigate();
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [urgentOnly, setUrgentOnly] = reactExports.useState(false);
  const [sortPay, setSortPay] = reactExports.useState("none");
  const filtered = reactExports.useMemo(() => {
    let jobs = MOCK_JOBS;
    if (search.trim()) {
      const q = search.toLowerCase();
      jobs = jobs.filter(
        (j) => j.title.toLowerCase().includes(q) || j.category.toLowerCase().includes(q) || j.location.toLowerCase().includes(q) || j.skillsRequired.some((s) => s.toLowerCase().includes(q))
      );
    }
    if (activeCategory !== "All") {
      jobs = jobs.filter((j) => j.category === activeCategory);
    }
    if (urgentOnly) {
      jobs = jobs.filter((j) => j.urgent);
    }
    if (sortPay === "high")
      jobs = [...jobs].sort((a, b) => b.payAmount - a.payAmount);
    if (sortPay === "low")
      jobs = [...jobs].sort((a, b) => a.payAmount - b.payAmount);
    return jobs;
  }, [search, activeCategory, urgentOnly, sortPay]);
  const handleApply = (jobId) => {
    ue.success("Applied! The employer will review your application.");
    navigate({ to: `/jobs/${jobId}` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-foreground", children: "Find Jobs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            filtered.length,
            " jobs near you"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 px-4 py-3 rounded-xl",
            style: {
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search jobs, skills, location…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none",
                  "data-ocid": "jobs.search_input"
                }
              ),
              search && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSearch(""),
                  className: "text-muted-foreground hover:text-foreground transition-smooth text-lg leading-none",
                  children: "×"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.12 },
        className: "flex items-center gap-2 overflow-x-auto pb-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setUrgentOnly(!urgentOnly),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 transition-smooth",
              style: {
                background: urgentOnly ? "rgba(239,68,68,0.25)" : "rgba(255,255,255,0.06)",
                border: urgentOnly ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.1)",
                color: urgentOnly ? "#f87171" : "#94a3b8"
              },
              "data-ocid": "jobs.urgent_toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3" }),
                " Urgent"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSortPay(
                (s) => s === "high" ? "low" : s === "low" ? "none" : "high"
              ),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 transition-smooth",
              style: {
                background: sortPay !== "none" ? "rgba(108,99,255,0.2)" : "rgba(255,255,255,0.06)",
                border: sortPay !== "none" ? "1px solid rgba(108,99,255,0.4)" : "1px solid rgba(255,255,255,0.1)",
                color: sortPay !== "none" ? "#a5a1ff" : "#94a3b8"
              },
              "data-ocid": "jobs.pay_sort_toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-3 h-3" }),
                "Pay",
                " ",
                sortPay === "high" ? "↑ High" : sortPay === "low" ? "↓ Low" : ""
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.16 },
        className: "flex items-center gap-2 overflow-x-auto pb-1",
        children: ALL_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: "flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth",
            style: {
              background: activeCategory === cat ? "linear-gradient(135deg, #6C63FF, #8B5CF6)" : "rgba(255,255,255,0.06)",
              border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: activeCategory === cat ? "white" : "#94a3b8"
            },
            "data-ocid": "jobs.category.tab",
            children: cat
          },
          cat
        ))
      }
    ),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-7 h-7" }),
        title: "No jobs found",
        description: "Try adjusting your search or filters",
        action: {
          label: "Clear filters",
          onClick: () => {
            setSearch("");
            setActiveCategory("All");
            setUrgentOnly(false);
            setSortPay("none");
          }
        }
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: filtered.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 + i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          JobCard,
          {
            job,
            index: i,
            onClick: () => navigate({ to: `/jobs/${job.id}` }),
            onApply: () => handleApply(job.id)
          }
        )
      },
      job.id
    )) })
  ] }) });
}
export {
  Jobs as default
};
