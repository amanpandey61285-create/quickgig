import { Layout } from "@/components/layout/Layout";
import { EmptyState } from "@/components/ui/EmptyState";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SkillTag } from "@/components/ui/SkillTag";
import { StarRating } from "@/components/ui/StarRating";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useAuth } from "@/hooks/use-auth";
import { useUserStore } from "@/store/user-store";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  BanknoteIcon,
  Briefcase,
  Check,
  Edit2,
  LogOut,
  MapPin,
  MessageCircle,
  Shield,
  Star,
  User,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const MOCK_RATINGS = [
  {
    fromPrincipal: "anon-1",
    stars: 5,
    comment: "Punctual, fast worker. Will hire again!",
    createdAt: Date.now() - 86400000,
  },
  {
    fromPrincipal: "anon-2",
    stars: 4,
    comment: "Good attitude, could improve speed.",
    createdAt: Date.now() - 172800000,
  },
  {
    fromPrincipal: "anon-3",
    stars: 5,
    comment: "Excellent café staff. Very professional.",
    createdAt: Date.now() - 259200000,
  },
];

const SKILL_OPTIONS = [
  "Delivery",
  "Café Staff",
  "Event Work",
  "Warehouse",
  "Store Assist",
  "Data Entry",
  "Packing",
  "Cleaning",
  "Loading",
  "Reception",
  "Photography",
  "Sales",
  "Security",
  "Driving",
  "Tech Support",
  "Kitchen Help",
  "Customer Service",
  "Social Media",
  "Teaching",
  "Graphic Design",
];

export default function WorkerProfile() {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const { workerProfile, setWorkerProfile, setRole } = useUserStore();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    displayName: workerProfile?.displayName ?? "",
    bio: workerProfile?.bio ?? "",
    hourlyRate: String(workerProfile?.hourlyRate ?? ""),
    skills: workerProfile?.skills ?? ([] as string[]),
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate({ to: "/login" });
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    if (workerProfile) {
      setEditForm({
        displayName: workerProfile.displayName,
        bio: workerProfile.bio,
        hourlyRate: String(workerProfile.hourlyRate),
        skills: workerProfile.skills,
      });
    }
  }, [workerProfile]);

  const toggleSkill = (skill: string) => {
    setEditForm((f) => ({
      ...f,
      skills: f.skills.includes(skill)
        ? f.skills.filter((s) => s !== skill)
        : [...f.skills, skill],
    }));
  };

  const handleSave = async () => {
    if (!editForm.displayName.trim()) {
      toast.error("Name is required");
      return;
    }
    setSaving(true);
    try {
      if (workerProfile) {
        setWorkerProfile({
          ...workerProfile,
          displayName: editForm.displayName,
          bio: editForm.bio,
          hourlyRate: Number(editForm.hourlyRate) || workerProfile.hourlyRate,
          skills: editForm.skills,
        });
      }
      toast.success("Profile updated!");
      setEditing(false);
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    setRole(null);
    navigate({ to: "/" });
  };

  const ratings = workerProfile?.ratings.length
    ? workerProfile.ratings
    : MOCK_RATINGS;
  const avgRating = ratings.length
    ? ratings.reduce((a, r) => a + r.stars, 0) / ratings.length
    : 0;
  const completedJobs = workerProfile?.completedJobs ?? 1;
  const isVerified = completedJobs >= 5;

  return (
    <Layout>
      <div className="space-y-5 pb-8">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard
            padding="lg"
            className="space-y-5"
            data-ocid="worker_profile.card"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6C63FF, #00C2FF)",
                  }}
                >
                  {workerProfile?.displayName?.[0]?.toUpperCase() ?? (
                    <User className="w-7 h-7" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-lg font-bold font-display text-foreground">
                      {workerProfile?.displayName ?? "Your Name"}
                    </h1>
                    {isVerified && (
                      <StatusBadge variant="verified">
                        <Shield className="w-3 h-3" /> Verified
                      </StatusBadge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <StarRating value={avgRating} size="sm" />
                    <span className="text-xs text-muted-foreground">
                      ({ratings.length})
                    </span>
                    <StatusBadge
                      variant={workerProfile?.availability ? "open" : "closed"}
                    >
                      {workerProfile?.availability ? "Available" : "Busy"}
                    </StatusBadge>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEditing(!editing)}
                className="flex-shrink-0 w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
                data-ocid="worker_profile.edit_button"
              >
                {editing ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Edit2 className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Completed",
                  value: completedJobs,
                  icon: <Briefcase className="w-4 h-4" />,
                  color: "#6C63FF",
                },
                {
                  label: "Earnings",
                  value: `₹${(workerProfile?.totalEarnings ?? 200).toLocaleString()}`,
                  icon: <BanknoteIcon className="w-4 h-4" />,
                  color: "#00C2FF",
                },
                {
                  label: "Rating",
                  value: avgRating.toFixed(1),
                  icon: <Star className="w-4 h-4" />,
                  color: "#F59E0B",
                },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="text-center py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  data-ocid={`worker_profile.stat.${i + 1}`}
                >
                  <div
                    className="flex justify-center mb-1"
                    style={{ color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <p className="text-sm font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Bio */}
            {editing ? (
              <div className="space-y-1">
                <label
                  htmlFor="profile_bio"
                  className="text-xs text-muted-foreground"
                >
                  Bio
                </label>
                <textarea
                  id="profile_bio"
                  value={editForm.bio}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, bio: e.target.value }))
                  }
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl text-sm text-foreground outline-none resize-none transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  data-ocid="worker_profile.bio_textarea"
                />
              </div>
            ) : (
              workerProfile?.bio && (
                <div className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    {workerProfile.bio}
                  </p>
                </div>
              )
            )}

            {/* Rate + Location */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <BanknoteIcon className="w-4 h-4 text-primary" />
                {editing ? (
                  <input
                    type="number"
                    value={editForm.hourlyRate}
                    onChange={(e) =>
                      setEditForm((f) => ({ ...f, hourlyRate: e.target.value }))
                    }
                    className="w-20 px-2 py-1 rounded-lg text-sm text-foreground outline-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    data-ocid="worker_profile.rate_input"
                  />
                ) : (
                  <span className="text-sm font-medium text-foreground">
                    ₹{workerProfile?.hourlyRate ?? 150}/hr
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Mumbai, IN
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard
            padding="md"
            className="space-y-3"
            data-ocid="worker_profile.skills_section"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Skills</h2>
            </div>

            {editing ? (
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth"
                    style={{
                      background: editForm.skills.includes(skill)
                        ? "rgba(108,99,255,0.35)"
                        : "rgba(255,255,255,0.06)",
                      border: editForm.skills.includes(skill)
                        ? "1px solid rgba(108,99,255,0.5)"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: editForm.skills.includes(skill)
                        ? "#a5a1ff"
                        : "#94a3b8",
                    }}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {(workerProfile?.skills ?? []).map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
                {(workerProfile?.skills ?? []).length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No skills added yet
                  </p>
                )}
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Save button if editing */}
        {editing && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <GradientButton
              variant="primary"
              size="md"
              fullWidth
              loading={saving}
              onClick={handleSave}
              data-ocid="worker_profile.save_button"
            >
              <Check className="w-4 h-4" />
              Save Changes
            </GradientButton>
            <GradientButton
              variant="ghost"
              size="md"
              onClick={() => setEditing(false)}
              data-ocid="worker_profile.cancel_button"
            >
              Cancel
            </GradientButton>
          </motion.div>
        )}

        {/* Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard
            padding="md"
            className="space-y-4"
            data-ocid="worker_profile.ratings_section"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <h2 className="font-semibold text-foreground">Reviews</h2>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-foreground">
                  {avgRating.toFixed(1)}
                </span>
                <StarRating value={Math.round(avgRating)} size="sm" />
                <span className="text-xs text-muted-foreground">
                  ({ratings.length})
                </span>
              </div>
            </div>

            {ratings.length === 0 ? (
              <EmptyState
                icon={<Star className="w-6 h-6" />}
                title="No reviews yet"
                description="Complete your first job to receive ratings"
              />
            ) : (
              <div className="space-y-3">
                {ratings.map((r, i) => (
                  <div
                    key={`${r.stars}-${r.createdAt}-${i}`}
                    className="py-3 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    data-ocid={`worker_profile.review.item.${i + 1}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <StarRating value={r.stars} size="sm" />
                      <span className="text-xs text-muted-foreground">
                        {new Date(r.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    {r.comment && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {r.comment}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Earnings history */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <GlassCard
            padding="md"
            className="space-y-3"
            data-ocid="worker_profile.earnings_section"
          >
            <div className="flex items-center gap-2">
              <BanknoteIcon className="w-4 h-4 text-accent" />
              <h2 className="font-semibold text-foreground">
                Earnings Summary
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "This Month", value: "₹1,200" },
                {
                  label: "Total Earned",
                  value: `₹${(workerProfile?.totalEarnings ?? 200).toLocaleString()}`,
                },
                { label: "Jobs Done", value: completedJobs },
                {
                  label: "Avg per Job",
                  value: completedJobs
                    ? `₹${Math.round((workerProfile?.totalEarnings ?? 200) / completedJobs)}`
                    : "—",
                },
              ].map((e, i) => (
                <div
                  key={e.label}
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  data-ocid={`worker_profile.earning.${i + 1}`}
                >
                  <p className="text-sm font-bold text-foreground">
                    {String(e.value)}
                  </p>
                  <p className="text-xs text-muted-foreground">{e.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Logout */}
        <GradientButton
          variant="ghost"
          size="md"
          fullWidth
          onClick={handleLogout}
          data-ocid="worker_profile.logout_button"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </GradientButton>
      </div>
    </Layout>
  );
}
