import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SkillTag } from "@/components/ui/SkillTag";
import { StarRating } from "@/components/ui/StarRating";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BanknoteIcon,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  MapPin,
  Share2,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface JobDetailType {
  id: string;
  title: string;
  description: string;
  category: string;
  employerName: string;
  employerRating: number;
  employerReviews: number;
  payAmount: number;
  duration: string;
  timing: string;
  location: string;
  urgent: boolean;
  skillsRequired: string[];
  workersNeeded: number;
  applicationCount: number;
  status: "open" | "closed" | "completed";
}

const JOB_DATA: Record<string, JobDetailType> = {
  "1": {
    id: "1",
    title: "Café Staff for Weekend Rush",
    description:
      "We're looking for energetic and friendly café staff to help during our weekend rush. You'll be taking orders, preparing beverages, serving customers, and maintaining cleanliness. Prior café or food service experience preferred but not required. We provide a quick onboarding session.",
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
    status: "open",
  },
  "2": {
    id: "2",
    title: "Event Helper — Tech Conference",
    description:
      "We need event helpers for a 200-person tech conference at BKC. Responsibilities include guest registration, directing attendees, managing materials, and general support. Smart casual dress code. Meals and transport allowance included.",
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
    status: "open",
  },
  "3": {
    id: "3",
    title: "Delivery Helper (Swiggy Partner)",
    description:
      "Join our delivery team as a helper for a Swiggy-partnered restaurant. You will assist in sorting, packing, and handing off delivery orders. Peak hours 12–4pm daily.",
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
    status: "open",
  },
  "4": {
    id: "4",
    title: "Warehouse Packing — Night Shift",
    description:
      "Join our warehouse packing team for the night shift. Work involves sorting, packing, and labeling products for next-day dispatch. Physical stamina required. Dinner and transport provided.",
    category: "Warehouse",
    employerName: "QuickStore Logistics",
    employerRating: 4.0,
    employerReviews: 12,
    payAmount: 170,
    duration: "8 hrs",
    timing: "Mon–Fri, 10pm–6am",
    location: "Kurla, Mumbai",
    urgent: false,
    skillsRequired: ["Packing", "Loading"],
    workersNeeded: 6,
    applicationCount: 5,
    status: "open",
  },
  "5": {
    id: "5",
    title: "Store Assistant — Zara",
    description:
      "Assist the Zara store team during peak weekend hours. Responsibilities: helping customers, folding/organizing garments, billing support, and general store maintenance.",
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
    status: "open",
  },
  "6": {
    id: "6",
    title: "Data Entry Operator",
    description:
      "We need data entry operators to digitize customer records from printed forms. Work can be partially remote. Accuracy is paramount.",
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
    status: "open",
  },
  "7": {
    id: "7",
    title: "Security Guard — Night",
    description:
      "Seeking responsible and alert security guards for a residential complex in Powai. Night shift position. Uniform provided. Prior security experience preferred.",
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
    status: "open",
  },
  "8": {
    id: "8",
    title: "Office Cleaning — Morning",
    description:
      "Morning cleaning staff needed for a commercial office in Nariman Point. Duties include mopping, dusting, restroom cleaning, and emptying trash. Equipment provided.",
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
    status: "open",
  },
  "9": {
    id: "9",
    title: "Promotional Sales Staff",
    description:
      "Represent our brand at a mall kiosk and promote our new product line. High energy, outgoing personality required. Commission-based bonus on top of hourly rate.",
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
    status: "open",
  },
  "10": {
    id: "10",
    title: "Event Photographer Assistant",
    description:
      "Assist a professional photographer at corporate and social events. You'll manage equipment, help with lighting, and assist in organizing photoshoots. Photography knowledge is a big plus.",
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
    status: "open",
  },
};

export default function JobDetail() {
  const params = useParams({ from: "/jobs/$id" });
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);
  const [applying, setApplying] = useState(false);

  const job = JOB_DATA[params.id];

  if (!job) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Briefcase className="w-12 h-12 text-muted-foreground" />
          <h2 className="text-xl font-bold text-foreground">Job Not Found</h2>
          <GradientButton
            variant="primary"
            onClick={() => navigate({ to: "/jobs" })}
            data-ocid="job_detail.back_button"
          >
            Browse Jobs
          </GradientButton>
        </div>
      </Layout>
    );
  }

  const handleApply = async () => {
    setApplying(true);
    await new Promise((r) => setTimeout(r, 900));
    setApplied(true);
    setApplying(false);
    toast.success("Application submitted! The employer will contact you soon.");
  };

  return (
    <Layout>
      <div className="space-y-5 pb-8 max-w-2xl mx-auto">
        {/* Back */}
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate({ to: "/jobs" })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
          data-ocid="job_detail.back_link"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </motion.button>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <GlassCard
            padding="lg"
            className="space-y-5"
            data-ocid="job_detail.card"
          >
            {/* Title */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {job.urgent && (
                    <StatusBadge variant="urgent">Urgent</StatusBadge>
                  )}
                  <StatusBadge variant="open">Open</StatusBadge>
                </div>
                <h1 className="text-xl font-bold font-display text-foreground">
                  {job.title}
                </h1>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {job.category}
                </p>
              </div>
              <button
                type="button"
                className="flex-shrink-0 w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => {
                  void navigator.clipboard.writeText(window.location.href);
                  toast.success("Link copied!");
                }}
                data-ocid="job_detail.share_button"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: <BanknoteIcon className="w-4 h-4 text-primary" />,
                  label: "Pay",
                  value: `₹${job.payAmount}/hr`,
                },
                {
                  icon: <Clock className="w-4 h-4 text-accent" />,
                  label: "Duration",
                  value: job.duration,
                },
                {
                  icon: <Calendar className="w-4 h-4 text-secondary" />,
                  label: "Timing",
                  value: job.timing,
                },
                {
                  icon: <MapPin className="w-4 h-4 text-emerald-400" />,
                  label: "Location",
                  value: job.location,
                },
                {
                  icon: <Users className="w-4 h-4 text-yellow-400" />,
                  label: "Workers",
                  value: `${job.workersNeeded} needed`,
                },
                {
                  icon: <Briefcase className="w-4 h-4 text-muted-foreground" />,
                  label: "Applied",
                  value: `${job.applicationCount}`,
                },
              ].map((m, i) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  data-ocid={`job_detail.meta.${i + 1}`}
                >
                  {m.icon}
                  <div>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {m.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h2 className="text-sm font-semibold text-foreground">
                About this Job
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Skills */}
            {job.skillsRequired.length > 0 && (
              <div className="space-y-1.5">
                <h2 className="text-sm font-semibold text-foreground">
                  Skills Required
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {job.skillsRequired.map((s) => (
                    <SkillTag key={s} label={s} />
                  ))}
                </div>
              </div>
            )}

            {/* Apply CTA */}
            {applied ? (
              <div
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
                data-ocid="job_detail.applied_badge"
              >
                <StatusBadge variant="accepted">Applied</StatusBadge>
                <span className="text-emerald-400">Application Submitted</span>
              </div>
            ) : (
              <GradientButton
                variant="primary"
                size="lg"
                fullWidth
                loading={applying}
                onClick={handleApply}
                data-ocid="job_detail.apply_button"
              >
                Apply Now — ₹{job.payAmount}/hr
              </GradientButton>
            )}
          </GlassCard>
        </motion.div>

        {/* Employer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <GlassCard padding="md" data-ocid="job_detail.employer_card">
            <h2 className="text-sm font-semibold text-foreground mb-3">
              About the Employer
            </h2>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #6C63FF)",
                }}
              >
                {job.employerName[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground">
                    {job.employerName}
                  </h3>
                  <StatusBadge variant="verified">Verified</StatusBadge>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <StarRating
                    value={Math.round(job.employerRating)}
                    size="sm"
                  />
                  <span className="text-xs text-muted-foreground">
                    {job.employerRating} ({job.employerReviews} reviews)
                  </span>
                </div>
              </div>
              <Building2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </div>
          </GlassCard>
        </motion.div>

        {/* Browse more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <GradientButton
            variant="outline"
            size="md"
            fullWidth
            onClick={() => navigate({ to: "/jobs" })}
            data-ocid="job_detail.browse_more_button"
          >
            Browse More Jobs
          </GradientButton>
        </motion.div>
      </div>
    </Layout>
  );
}
