import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SkillTag } from "@/components/ui/SkillTag";
import { useAuth } from "@/hooks/use-auth";
import { useUserStore } from "@/store/user-store";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronLeft,
  User,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

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

export default function WorkerSignup() {
  const { isAuthenticated, login } = useAuth();
  const { setRole, setWorkerProfile } = useUserStore();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    displayName: "",
    bio: "",
    hourlyRate: "",
    availability: true,
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleSubmit = async () => {
    if (!form.displayName.trim()) {
      toast.error("Display name is required");
      return;
    }
    if (selectedSkills.length === 0) {
      toast.error("Please select at least one skill");
      return;
    }
    if (!form.hourlyRate || Number(form.hourlyRate) < 1) {
      toast.error("Enter a valid hourly rate");
      return;
    }

    setLoading(true);
    try {
      setWorkerProfile({
        principal: "",
        displayName: form.displayName,
        bio: form.bio,
        skills: selectedSkills,
        hourlyRate: Number(form.hourlyRate),
        availability: form.availability,
        completedJobs: 0,
        totalEarnings: 0,
        ratings: [],
      });
      setRole("worker");
      setSuccess(true);
      setTimeout(() => navigate({ to: "/worker/dashboard" }), 1500);
    } catch {
      toast.error("Failed to create profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm"
        >
          <GlassCard padding="lg" className="space-y-5 text-center">
            <div
              className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #00C2FF)",
              }}
            >
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-foreground">
                Sign In First
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Authenticate to create your worker profile
              </p>
            </div>
            <GradientButton
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => login()}
              data-ocid="worker_signup.auth_button"
            >
              Connect with Internet Identity
            </GradientButton>
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  if (success) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div
            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
            style={{
              background: "rgba(16,185,129,0.2)",
              border: "1px solid rgba(16,185,129,0.4)",
            }}
          >
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold font-display text-foreground">
            Profile Created!
          </h2>
          <p className="text-muted-foreground">
            Redirecting to your dashboard…
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-4 py-8"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)",
      }}
    >
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid="worker_signup.back_button"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h1 className="text-xl font-bold font-display text-foreground">
              Create Worker Profile
            </h1>
            <p className="text-xs text-muted-foreground">Step {step} of 2</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-6">
          {[1, 2].map((s) => (
            <div
              key={s}
              className="h-1.5 flex-1 rounded-full transition-smooth"
              style={{
                background:
                  s <= step
                    ? "linear-gradient(90deg, #6C63FF, #00C2FF)"
                    : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <GlassCard padding="lg" className="space-y-5">
              <div className="flex items-center gap-2 text-primary">
                <User className="w-5 h-5" />
                <span className="font-semibold">Basic Information</span>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="worker_name"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name *
                </label>
                <input
                  id="worker_name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.displayName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, displayName: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  data-ocid="worker_signup.name_input"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="worker_bio"
                  className="text-sm font-medium text-foreground"
                >
                  Bio
                </label>
                <textarea
                  id="worker_bio"
                  placeholder="Tell employers about yourself, experience, and what you're looking for…"
                  value={form.bio}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, bio: e.target.value }))
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth resize-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  data-ocid="worker_signup.bio_textarea"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="worker_hourly_rate"
                  className="text-sm font-medium text-foreground"
                >
                  Hourly Rate (₹) *
                </label>
                <input
                  id="worker_hourly_rate"
                  type="number"
                  placeholder="e.g. 150"
                  min={1}
                  value={form.hourlyRate}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, hourlyRate: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  data-ocid="worker_signup.rate_input"
                />
              </div>

              <div
                className="flex items-center justify-between py-2 px-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Available to Work
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Show as available for new gigs
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setForm((f) => ({ ...f, availability: !f.availability }))
                  }
                  className="w-12 h-6 rounded-full transition-smooth relative flex-shrink-0"
                  style={{
                    background: form.availability
                      ? "linear-gradient(90deg, #6C63FF, #8B5CF6)"
                      : "rgba(255,255,255,0.15)",
                  }}
                  data-ocid="worker_signup.availability_toggle"
                >
                  <span
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-smooth"
                    style={{ left: form.availability ? "26px" : "2px" }}
                  />
                </button>
              </div>

              <GradientButton
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => {
                  if (!form.displayName.trim()) {
                    toast.error("Display name is required");
                    return;
                  }
                  if (!form.hourlyRate || Number(form.hourlyRate) < 1) {
                    toast.error("Enter a valid hourly rate");
                    return;
                  }
                  setStep(2);
                }}
                data-ocid="worker_signup.next_button"
              >
                Next: Choose Skills <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </GlassCard>
          )}

          {step === 2 && (
            <GlassCard padding="lg" className="space-y-5">
              <div className="flex items-center gap-2 text-primary">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">Your Skills</span>
              </div>

              <p className="text-sm text-muted-foreground">
                Select all skills that apply ({selectedSkills.length} selected)
              </p>

              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth"
                    style={{
                      background: selectedSkills.includes(skill)
                        ? "linear-gradient(135deg, rgba(108,99,255,0.4), rgba(139,92,246,0.4))"
                        : "rgba(255,255,255,0.06)",
                      border: selectedSkills.includes(skill)
                        ? "1px solid rgba(108,99,255,0.6)"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: selectedSkills.includes(skill)
                        ? "#a5a1ff"
                        : "#94a3b8",
                    }}
                    data-ocid="worker_signup.skill_toggle"
                  >
                    {skill}
                  </button>
                ))}
              </div>

              {selectedSkills.length > 0 && (
                <div className="space-y-1.5">
                  <p className="text-xs text-muted-foreground">Selected:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkills.map((skill) => (
                      <SkillTag
                        key={skill}
                        label={skill}
                        removable
                        onRemove={() => toggleSkill(skill)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <GradientButton
                variant="primary"
                size="lg"
                fullWidth
                loading={loading}
                onClick={handleSubmit}
                data-ocid="worker_signup.submit_button"
              >
                <CheckCircle className="w-5 h-5" />
                Create My Profile
              </GradientButton>
            </GlassCard>
          )}
        </motion.div>
      </div>
    </div>
  );
}
