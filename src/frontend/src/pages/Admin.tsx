import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useUserRole } from "@/hooks/use-user-role";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  BarChart3,
  Briefcase,
  CheckCircle,
  DollarSign,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { toast } from "sonner";

const STATS = [
  {
    label: "Total Users",
    value: "27,640",
    change: "+12% this week",
    icon: <Users className="w-5 h-5" />,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Active Jobs",
    value: "1,842",
    change: "+8% this week",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    label: "Jobs Completed",
    value: "58,294",
    change: "+22% this month",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Total Payouts",
    value: "₹2.3M",
    change: "+18% this month",
    icon: <DollarSign className="w-5 h-5" />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

const MOCK_USERS = [
  {
    id: "u1",
    name: "Priya Sharma",
    role: "Worker",
    status: "Active",
    joined: "2 days ago",
    jobs: 18,
  },
  {
    id: "u2",
    name: "Rohan's Café",
    role: "Employer",
    status: "Active",
    joined: "1 week ago",
    jobs: 6,
  },
  {
    id: "u3",
    name: "Amit Kumar",
    role: "Worker",
    status: "Active",
    joined: "3 days ago",
    jobs: 7,
  },
  {
    id: "u4",
    name: "The Party Hub",
    role: "Employer",
    status: "Pending",
    joined: "5 hours ago",
    jobs: 0,
  },
  {
    id: "u5",
    name: "Divya Nair",
    role: "Worker",
    status: "Active",
    joined: "1 month ago",
    jobs: 24,
  },
];

export default function AdminPage() {
  const navigate = useNavigate();
  const { role } = useUserRole();

  // Redirect non-admin users
  useEffect(() => {
    if (role !== null && role !== "admin") {
      navigate({ to: "/" });
    }
  }, [role, navigate]);

  return (
    <Layout>
      <div className="space-y-6" data-ocid="admin.page">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between flex-wrap gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">
                Admin Panel
              </h1>
              <p className="text-muted-foreground text-sm">
                QuickGig platform management
              </p>
            </div>
          </div>
          <StatusBadge variant="verified">Admin Access</StatusBadge>
        </motion.div>

        {/* Role check warning */}
        {role !== "admin" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-4 flex items-center gap-3 border-yellow-500/30"
            style={{ borderColor: "rgba(234,179,8,0.3)" }}
          >
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <p className="text-sm text-yellow-400">
              You are viewing in preview mode. Admin access requires
              verification.
            </p>
          </motion.div>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard
                padding="md"
                className="space-y-2"
                data-ocid={`admin.stat.${i + 1}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}
                >
                  {s.icon}
                </div>
                <div className={`text-xl font-display font-bold ${s.color}`}>
                  {s.value}
                </div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-xs text-emerald-400">{s.change}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Actions bar */}
        <div className="flex gap-3 flex-wrap">
          <GradientButton
            variant="primary"
            size="sm"
            data-ocid="admin.manage_users.button"
            onClick={() =>
              toast.info("Coming soon", {
                description: "User management panel is under development.",
              })
            }
          >
            <Users className="w-4 h-4" /> Manage Users
          </GradientButton>
          <GradientButton
            variant="outline"
            size="sm"
            data-ocid="admin.view_analytics.button"
            onClick={() =>
              toast.info("Coming soon", {
                description: "Analytics dashboard is under development.",
              })
            }
          >
            <BarChart3 className="w-4 h-4" /> Analytics
          </GradientButton>
          <GradientButton
            variant="ghost"
            size="sm"
            data-ocid="admin.settings.button"
            onClick={() =>
              toast.info("Coming soon", {
                description: "Settings panel is under development.",
              })
            }
          >
            <Settings className="w-4 h-4" /> Settings
          </GradientButton>
        </div>

        {/* Users table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard padding="none">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h2 className="font-semibold text-foreground">Recent Users</h2>
              <StatusBadge variant="default">
                {MOCK_USERS.length} total
              </StatusBadge>
            </div>

            {/* Mobile: card list */}
            <div className="sm:hidden divide-y divide-white/10">
              {MOCK_USERS.map((u, i) => (
                <div
                  key={u.id}
                  className="px-5 py-4 space-y-2"
                  data-ocid={`admin.user.item.${i + 1}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-sm text-foreground">
                      {u.name}
                    </span>
                    <StatusBadge
                      variant={u.status === "Active" ? "accepted" : "pending"}
                    >
                      {u.status}
                    </StatusBadge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md">
                      {u.role}
                    </span>
                    <span>{u.jobs} jobs</span>
                    <span>Joined {u.joined}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {[
                      "User",
                      "Role",
                      "Status",
                      "Jobs",
                      "Joined",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide px-5 py-3"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_USERS.map((u, i) => (
                    <tr
                      key={u.id}
                      className="hover:bg-white/5 transition-smooth"
                      data-ocid={`admin.user.row.${i + 1}`}
                    >
                      <td className="px-5 py-3 font-medium text-foreground">
                        {u.name}
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">
                          {u.role}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <StatusBadge
                          variant={
                            u.status === "Active" ? "accepted" : "pending"
                          }
                        >
                          {u.status}
                        </StatusBadge>
                      </td>
                      <td className="px-5 py-3 text-right text-muted-foreground font-mono">
                        {u.jobs}
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {u.joined}
                      </td>
                      <td className="px-5 py-3">
                        <GradientButton
                          variant="ghost"
                          size="sm"
                          data-ocid={`admin.user.edit.${i + 1}`}
                        >
                          Edit
                        </GradientButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Layout>
  );
}
