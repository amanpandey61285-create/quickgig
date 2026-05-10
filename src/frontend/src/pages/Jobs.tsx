import { Layout } from "@/components/layout/Layout";
import { EmptyState } from "@/components/ui/EmptyState";
import { JobCard, type JobCardData } from "@/components/ui/JobCard";
import { useNavigate } from "@tanstack/react-router";
import { Flame, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

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
  "Driver",
];

const MOCK_JOBS: JobCardData[] = [
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
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
    status: "open",
  },
];

export default function Jobs() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [urgentOnly, setUrgentOnly] = useState(false);
  const [sortPay, setSortPay] = useState<"none" | "high" | "low">("none");

  const filtered = useMemo(() => {
    let jobs = MOCK_JOBS;
    if (search.trim()) {
      const q = search.toLowerCase();
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.category.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.skillsRequired.some((s) => s.toLowerCase().includes(q)),
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

  const handleApply = (jobId: string) => {
    toast.success("Applied! The employer will review your application.");
    navigate({ to: `/jobs/${jobId}` });
  };

  return (
    <Layout>
      <div className="space-y-4 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1"
        >
          <h1 className="text-2xl font-bold font-display text-foreground">
            Find Jobs
          </h1>
          <p className="text-sm text-muted-foreground">
            {filtered.length} jobs near you
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.07 }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Search jobs, skills, location…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              data-ocid="jobs.search_input"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-muted-foreground hover:text-foreground transition-smooth text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>

        {/* Filters row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="flex items-center gap-2 overflow-x-auto pb-1"
        >
          {/* Urgent toggle */}
          <button
            type="button"
            onClick={() => setUrgentOnly(!urgentOnly)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 transition-smooth"
            style={{
              background: urgentOnly
                ? "rgba(239,68,68,0.25)"
                : "rgba(255,255,255,0.06)",
              border: urgentOnly
                ? "1px solid rgba(239,68,68,0.5)"
                : "1px solid rgba(255,255,255,0.1)",
              color: urgentOnly ? "#f87171" : "#94a3b8",
            }}
            data-ocid="jobs.urgent_toggle"
          >
            <Flame className="w-3 h-3" /> Urgent
          </button>

          {/* Pay sort */}
          <button
            type="button"
            onClick={() =>
              setSortPay((s) =>
                s === "high" ? "low" : s === "low" ? "none" : "high",
              )
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 transition-smooth"
            style={{
              background:
                sortPay !== "none"
                  ? "rgba(108,99,255,0.2)"
                  : "rgba(255,255,255,0.06)",
              border:
                sortPay !== "none"
                  ? "1px solid rgba(108,99,255,0.4)"
                  : "1px solid rgba(255,255,255,0.1)",
              color: sortPay !== "none" ? "#a5a1ff" : "#94a3b8",
            }}
            data-ocid="jobs.pay_sort_toggle"
          >
            <SlidersHorizontal className="w-3 h-3" />
            Pay{" "}
            {sortPay === "high" ? "↑ High" : sortPay === "low" ? "↓ Low" : ""}
          </button>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="flex items-center gap-2 overflow-x-auto pb-1"
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #6C63FF, #8B5CF6)"
                    : "rgba(255,255,255,0.06)",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                color: activeCategory === cat ? "white" : "#94a3b8",
              }}
              data-ocid="jobs.category.tab"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Job grid */}
        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search className="w-7 h-7" />}
            title="No jobs found"
            description="Try adjusting your search or filters"
            action={{
              label: "Clear filters",
              onClick: () => {
                setSearch("");
                setActiveCategory("All");
                setUrgentOnly(false);
                setSortPay("none");
              },
            }}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <JobCard
                  job={job}
                  index={i}
                  onClick={() => navigate({ to: `/jobs/${job.id}` })}
                  onApply={() => handleApply(job.id)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
