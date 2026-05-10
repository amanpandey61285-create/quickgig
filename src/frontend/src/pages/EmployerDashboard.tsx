import { Layout } from "@/components/layout/Layout";
import { EmptyState } from "@/components/ui/EmptyState";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { JobCard } from "@/components/ui/JobCard";
import type { JobCardData } from "@/components/ui/JobCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useUserStore } from "@/store/user-store";
import { useNavigate } from "@tanstack/react-router";
import {
  BarChart3,
  Briefcase,
  ChevronRight,
  Plus,
  Star,
  TrendingUp,
  UserCircle,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const SAMPLE_JOBS: JobCardData[] = [
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
    status: "open",
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
    status: "open",
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
    status: "completed",
  },
];

interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

const STATS: StatCard[] = [
  {
    label: "Active Jobs",
    value: "2",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Total Applicants",
    value: "24",
    icon: <Users className="w-5 h-5" />,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    label: "Hired",
    value: "18",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Avg Rating",
    value: "4.8",
    icon: <Star className="w-5 h-5" />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

const QUICK_ACTIONS = [
  {
    label: "Post New Job",
    icon: Plus,
    to: "/employer/post-job" as const,
    ocid: "employer_dashboard.post_job.primary_button",
  },
  {
    label: "View Profile",
    icon: UserCircle,
    to: "/employer/profile" as const,
    ocid: "employer_dashboard.profile.secondary_button",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    to: "/employer/dashboard" as const,
    ocid: "employer_dashboard.analytics.secondary_button",
  },
];

export default function EmployerDashboardPage() {
  const navigate = useNavigate();
  const { employerProfile } = useUserStore();

  return (
    <Layout>
      <div className="space-y-6" data-ocid="employer_dashboard.page">
        {/* Greeting header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between flex-wrap gap-3"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <StatusBadge variant="verified">Verified Business</StatusBadge>
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              Welcome back
              {employerProfile?.businessName
                ? `, ${employerProfile.businessName}`
                : ""}{" "}
              👋
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage job postings and find the right workers fast.
            </p>
          </div>
          <GradientButton
            variant="primary"
            size="md"
            onClick={() => navigate({ to: "/employer/post-job" })}
            data-ocid="employer_dashboard.post_job.primary_button"
          >
            <Plus className="w-4 h-4" /> Post a Job
          </GradientButton>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <GlassCard padding="md" className="space-y-2">
                <div
                  className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}
                >
                  {s.icon}
                </div>
                <div className={`text-2xl font-display font-bold ${s.color}`}>
                  {s.value}
                </div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Quick actions */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Quick Actions
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {QUICK_ACTIONS.map((a, i) => (
              <motion.button
                key={a.label}
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => navigate({ to: a.to })}
                className="glass-card-hover p-4 flex flex-col items-center gap-2 text-center cursor-pointer"
                data-ocid={a.ocid}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">
                  {a.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Job listings */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              Your Jobs
              <StatusBadge variant="open">
                {SAMPLE_JOBS.filter((j) => j.status === "open").length} Active
              </StatusBadge>
            </h2>
            <GradientButton
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: "/employer/post-job" })}
              data-ocid="employer_dashboard.view_all.secondary_button"
            >
              View All <ChevronRight className="w-3 h-3" />
            </GradientButton>
          </div>

          {SAMPLE_JOBS.length === 0 ? (
            <EmptyState
              icon={<Briefcase className="w-8 h-8" />}
              title="Post your first job"
              description="Reach verified workers in your area instantly."
              action={{
                label: "Post a Job",
                onClick: () => navigate({ to: "/employer/post-job" }),
              }}
              data-ocid="employer_dashboard.jobs.empty_state"
            />
          ) : (
            <div className="space-y-3">
              {SAMPLE_JOBS.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <div className="relative">
                    <JobCard
                      job={job}
                      index={i}
                      onClick={() =>
                        navigate({ to: `/employer/jobs/${job.id}/applicants` })
                      }
                    />
                    <div className="absolute bottom-3 right-3">
                      <GradientButton
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate({
                            to: `/employer/jobs/${job.id}/applicants`,
                          });
                        }}
                        data-ocid={`employer_dashboard.view_applicants.${i + 1}`}
                      >
                        <Users className="w-3 h-3" /> Applicants
                      </GradientButton>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Promo banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="gradient-primary rounded-2xl p-5 flex items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-semibold text-white text-base">
              Need workers faster?
            </h3>
            <p className="text-white/70 text-sm mt-0.5">
              Boost your job post to reach 10× more workers.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
