import { Layout } from "@/components/layout/Layout";
import { EmptyState } from "@/components/ui/EmptyState";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useAuth } from "@/hooks/use-auth";
import { useUserStore } from "@/store/user-store";
import { useNavigate } from "@tanstack/react-router";
import {
  BanknoteIcon,
  Bell,
  Briefcase,
  CheckCircle,
  Search,
  Star,
  ToggleLeft,
  ToggleRight,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const MOCK_APPLICATIONS = [
  {
    id: "1",
    jobTitle: "Café Staff for Weekend",
    employer: "Brewhouse Café",
    pay: 180,
    status: "pending" as const,
    appliedAt: "2h ago",
  },
  {
    id: "2",
    jobTitle: "Event Helper — Corporate Meet",
    employer: "EventPro Agency",
    pay: 250,
    status: "accepted" as const,
    appliedAt: "1d ago",
  },
  {
    id: "3",
    jobTitle: "Delivery Helper (6hrs)",
    employer: "SwiftCart",
    pay: 200,
    status: "completed" as const,
    appliedAt: "3d ago",
  },
  {
    id: "4",
    jobTitle: "Data Entry — Insurance",
    employer: "FinServe Co.",
    pay: 140,
    status: "rejected" as const,
    appliedAt: "5d ago",
  },
];

type AppStatus = "pending" | "accepted" | "completed" | "rejected";

const statusVariant = (s: AppStatus) => s;

export default function WorkerDashboard() {
  const { isAuthenticated, isLoading } = useAuth();
  const { workerProfile, setWorkerProfile } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, isLoading, navigate]);

  const toggleAvailability = () => {
    if (!workerProfile) return;
    setWorkerProfile({
      ...workerProfile,
      availability: !workerProfile.availability,
    });
  };

  if (isLoading) return <LoadingSpinner fullScreen />;

  const stats = [
    {
      label: "Jobs Applied",
      value: MOCK_APPLICATIONS.length,
      icon: <Briefcase className="w-5 h-5" />,
      color: "#6C63FF",
    },
    {
      label: "Completed",
      value: workerProfile?.completedJobs ?? 1,
      icon: <CheckCircle className="w-5 h-5" />,
      color: "#10B981",
    },
    {
      label: "Earnings",
      value: `₹${(workerProfile?.totalEarnings ?? 200).toLocaleString()}`,
      icon: <BanknoteIcon className="w-5 h-5" />,
      color: "#00C2FF",
    },
    {
      label: "Rating",
      value: workerProfile?.ratings.length
        ? (
            workerProfile.ratings.reduce((a, r) => a + r.stars, 0) /
            workerProfile.ratings.length
          ).toFixed(1)
        : "—",
      icon: <Star className="w-5 h-5" />,
      color: "#F59E0B",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between gap-4"
        >
          <div>
            <h1 className="text-2xl font-bold font-display text-foreground">
              Hey, {workerProfile?.displayName?.split(" ")[0] ?? "Worker"} 👋
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Here's your activity overview
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="relative w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid="worker_dashboard.notifications_button"
            >
              <Bell className="w-4 h-4" />
              <span
                className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                style={{ background: "#6C63FF", border: "2px solid #0F172A" }}
              />
            </button>
          </div>
        </motion.div>

        {/* Availability toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <GlassCard padding="md" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: workerProfile?.availability
                    ? "rgba(16,185,129,0.2)"
                    : "rgba(255,255,255,0.06)",
                }}
              >
                {workerProfile?.availability ? (
                  <ToggleRight className="w-5 h-5 text-emerald-400" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Availability Status
                </p>
                <p className="text-xs text-muted-foreground">
                  {workerProfile?.availability
                    ? "You're visible to employers"
                    : "You're hidden from employers"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={toggleAvailability}
              className="w-12 h-6 rounded-full transition-smooth relative flex-shrink-0"
              style={{
                background: workerProfile?.availability
                  ? "linear-gradient(90deg, #6C63FF, #8B5CF6)"
                  : "rgba(255,255,255,0.15)",
              }}
              data-ocid="worker_dashboard.availability_toggle"
            >
              <span
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-smooth"
                style={{ left: workerProfile?.availability ? "26px" : "2px" }}
              />
            </button>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <GlassCard
                padding="md"
                className="space-y-2"
                data-ocid={`worker_dashboard.stat.${i + 1}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${stat.color}22` }}
                  >
                    <span style={{ color: stat.color }}>{stat.icon}</span>
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xl font-bold font-display text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-2 gap-3"
        >
          <GradientButton
            variant="primary"
            size="md"
            fullWidth
            onClick={() => navigate({ to: "/jobs" })}
            data-ocid="worker_dashboard.find_jobs_button"
          >
            <Search className="w-4 h-4" />
            Find Jobs
          </GradientButton>
          <GradientButton
            variant="outline"
            size="md"
            fullWidth
            onClick={() => navigate({ to: "/worker/profile" })}
            data-ocid="worker_dashboard.update_profile_button"
          >
            <User className="w-4 h-4" />
            My Profile
          </GradientButton>
        </motion.div>

        {/* Recent Applications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">
              Recent Applications
            </h2>
            <button
              type="button"
              onClick={() => navigate({ to: "/jobs" })}
              className="text-xs text-primary hover:underline"
              data-ocid="worker_dashboard.view_all_link"
            >
              View all
            </button>
          </div>

          {MOCK_APPLICATIONS.length === 0 ? (
            <EmptyState
              icon={<Briefcase className="w-7 h-7" />}
              title="No applications yet"
              description="Find and apply to nearby jobs to get started"
              action={{
                label: "Browse Jobs",
                onClick: () => navigate({ to: "/jobs" }),
              }}
            />
          ) : (
            <div className="space-y-2">
              {MOCK_APPLICATIONS.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.07 }}
                >
                  <GlassCard
                    hover
                    padding="sm"
                    className="flex items-center justify-between gap-3"
                    data-ocid={`worker_dashboard.application.item.${i + 1}`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(108,99,255,0.15)" }}
                    >
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {app.jobTitle}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {app.employer} · {app.appliedAt}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs font-semibold text-foreground mb-1">
                        ₹{app.pay}/hr
                      </p>
                      <StatusBadge variant={statusVariant(app.status)}>
                        {app.status.charAt(0).toUpperCase() +
                          app.status.slice(1)}
                      </StatusBadge>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
