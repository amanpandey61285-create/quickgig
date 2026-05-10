import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SkillTag } from "@/components/ui/SkillTag";
import { useNavigate } from "@tanstack/react-router";
import {
  Banknote,
  Briefcase,
  Clock,
  Flame,
  Info,
  MapPin,
  Plus,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const CATEGORIES = [
  "Café Staff",
  "Delivery Helper",
  "Event Worker",
  "Warehouse Helper",
  "Store Assistant",
  "Data Entry",
  "Packing Staff",
  "Sales Promoter",
  "Cleaning",
  "Security",
  "Driver",
  "Reception",
];

const DURATION_OPTIONS = [
  "1–2 hrs",
  "Half day",
  "Full day",
  "2–3 hrs",
  "Weekend",
];
const TIMING_OPTIONS = [
  "Immediate",
  "Scheduled",
  "Morning",
  "Evening",
  "Night shift",
];

const SUGGESTED_SKILLS: Record<string, string[]> = {
  "Café Staff": ["F&B", "Customer Service", "Barista", "Serving"],
  "Delivery Helper": ["Driving", "Navigation", "Two-wheeler"],
  "Event Worker": ["Event Mgmt", "Communication", "MS Excel"],
  "Warehouse Helper": ["Packing", "Physical Fitness", "Inventory"],
  "Store Assistant": ["Retail", "Billing", "Customer Service"],
  "Data Entry": ["Typing", "MS Excel", "Accuracy"],
  "Packing Staff": ["Packing", "Speed", "Labelling"],
  "Sales Promoter": ["Communication", "Sales", "English"],
  Cleaning: ["Cleaning", "Housekeeping"],
  Security: ["Vigilance", "Physical Fitness"],
  Driver: ["Driving", "Hindi", "LMV License"],
  Reception: ["English", "Communication", "MS Office"],
};

const INPUT_CLS =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-smooth";
const LABEL_CLS =
  "text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1";

export default function PostJobPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [pay, setPay] = useState("");
  const [duration, setDuration] = useState("");
  const [timing, setTiming] = useState("");
  const [location, setLocation] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [workerCount, setWorkerCount] = useState(1);
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const suggested = category ? (SUGGESTED_SKILLS[category] ?? []) : [];

  const addSkill = (s?: string) => {
    const val = (s ?? skillInput).trim();
    if (val && !skills.includes(val)) setSkills((p) => [...p, val]);
    if (!s) setSkillInput("");
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "Job title is required";
    if (!category) e.category = "Category is required";
    if (!description.trim()) e.description = "Description is required";
    if (!pay || Number(pay) <= 0) e.pay = "Pay amount is required";
    if (!duration) e.duration = "Duration is required";
    if (!timing) e.timing = "Timing is required";
    if (!location.trim()) e.location = "Location is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      toast.error("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      // Wired to actor.postJob in real integration
      await new Promise((r) => setTimeout(r, 1000));
      toast.success("Job posted successfully!");
      navigate({ to: "/employer/dashboard" });
    } catch {
      toast.error("Failed to post job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto space-y-6" data-ocid="post_job.page">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" /> Post a New Job
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Find the right worker in minutes — fill in the details below.
          </p>
        </motion.div>

        {/* Section 1: Basic info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <GlassCard padding="lg" className="space-y-4">
            <h2 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" /> Job Details
            </h2>

            <div>
              <label htmlFor="pj-title" className={LABEL_CLS}>
                Job Title *
              </label>
              <input
                id="pj-title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setErrors((p) => ({ ...p, title: "" }));
                }}
                placeholder="e.g. Café Server for Sunday Brunch"
                className={INPUT_CLS}
                data-ocid="post_job.title.input"
              />
              {errors.title && (
                <p
                  className="text-xs text-red-400 mt-1"
                  data-ocid="post_job.title.field_error"
                >
                  {errors.title}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="pj-cat" className={LABEL_CLS}>
                Category *
              </label>
              <select
                id="pj-cat"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setErrors((p) => ({ ...p, category: "" }));
                }}
                className={`${INPUT_CLS} appearance-none`}
                data-ocid="post_job.category.select"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} style={{ background: "#1e1b4b" }}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p
                  className="text-xs text-red-400 mt-1"
                  data-ocid="post_job.category.field_error"
                >
                  {errors.category}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="pj-desc" className={LABEL_CLS}>
                Description *
              </label>
              <textarea
                id="pj-desc"
                rows={3}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setErrors((p) => ({ ...p, description: "" }));
                }}
                placeholder="Describe the work, what to bring, any requirements…"
                className={`${INPUT_CLS} resize-none`}
                data-ocid="post_job.description.textarea"
              />
              {errors.description && (
                <p
                  className="text-xs text-red-400 mt-1"
                  data-ocid="post_job.description.field_error"
                >
                  {errors.description}
                </p>
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* Section 2: Pay & schedule */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
        >
          <GlassCard padding="lg" className="space-y-4">
            <h2 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-accent" /> Pay & Schedule
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="pj-pay" className={LABEL_CLS}>
                  Pay (₹/hr) *
                </label>
                <input
                  id="pj-pay"
                  type="number"
                  value={pay}
                  onChange={(e) => {
                    setPay(e.target.value);
                    setErrors((p) => ({ ...p, pay: "" }));
                  }}
                  placeholder="200"
                  min={0}
                  className={INPUT_CLS}
                  data-ocid="post_job.pay.input"
                />
                {errors.pay && (
                  <p
                    className="text-xs text-red-400 mt-1"
                    data-ocid="post_job.pay.field_error"
                  >
                    {errors.pay}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="pj-workers" className={LABEL_CLS}>
                  Workers Needed
                </label>
                <input
                  id="pj-workers"
                  type="number"
                  value={workerCount}
                  onChange={(e) =>
                    setWorkerCount(Math.max(1, Number(e.target.value)))
                  }
                  min={1}
                  max={100}
                  className={INPUT_CLS}
                  data-ocid="post_job.worker_count.input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="pj-dur" className={LABEL_CLS}>
                  Duration *
                </label>
                <select
                  id="pj-dur"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setErrors((p) => ({ ...p, duration: "" }));
                  }}
                  className={`${INPUT_CLS} appearance-none`}
                  data-ocid="post_job.duration.select"
                >
                  <option value="">Select</option>
                  {DURATION_OPTIONS.map((d) => (
                    <option key={d} value={d} style={{ background: "#1e1b4b" }}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.duration && (
                  <p
                    className="text-xs text-red-400 mt-1"
                    data-ocid="post_job.duration.field_error"
                  >
                    {errors.duration}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="pj-timing" className={LABEL_CLS}>
                  Timing *
                </label>
                <select
                  id="pj-timing"
                  value={timing}
                  onChange={(e) => {
                    setTiming(e.target.value);
                    setErrors((p) => ({ ...p, timing: "" }));
                  }}
                  className={`${INPUT_CLS} appearance-none`}
                  data-ocid="post_job.timing.select"
                >
                  <option value="">Select</option>
                  {TIMING_OPTIONS.map((t) => (
                    <option key={t} value={t} style={{ background: "#1e1b4b" }}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.timing && (
                  <p
                    className="text-xs text-red-400 mt-1"
                    data-ocid="post_job.timing.field_error"
                  >
                    {errors.timing}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="pj-loc" className={LABEL_CLS}>
                <MapPin className="inline w-3 h-3 mb-0.5 mr-0.5" /> Location *
              </label>
              <input
                id="pj-loc"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setErrors((p) => ({ ...p, location: "" }));
                }}
                placeholder="e.g. Bandra, Mumbai"
                className={INPUT_CLS}
                data-ocid="post_job.location.input"
              />
              {errors.location && (
                <p
                  className="text-xs text-red-400 mt-1"
                  data-ocid="post_job.location.field_error"
                >
                  {errors.location}
                </p>
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* Section 3: Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard padding="lg" className="space-y-3">
            <h2 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <Users className="w-4 h-4 text-secondary" /> Required Skills
            </h2>

            {suggested.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1">
                  <Info className="w-3 h-3" /> Suggested for {category}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggested.map((sk) => (
                    <button
                      key={sk}
                      type="button"
                      onClick={() => addSkill(sk)}
                      disabled={skills.includes(sk)}
                      className={`px-2.5 py-1 text-xs rounded-lg border transition-smooth ${
                        skills.includes(sk)
                          ? "bg-primary/20 text-primary border-primary/30 opacity-50 cursor-default"
                          : "border-white/10 text-muted-foreground hover:border-primary/40 hover:text-primary cursor-pointer"
                      }`}
                      data-ocid={`post_job.suggested_skill.${sk}`}
                    >
                      + {sk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
                placeholder="Type a skill and press Enter"
                className={`${INPUT_CLS} flex-1`}
                data-ocid="post_job.skill.input"
              />
              <GradientButton
                variant="outline"
                size="sm"
                onClick={() => addSkill()}
                data-ocid="post_job.skill.add_button"
              >
                <Plus className="w-4 h-4" />
              </GradientButton>
            </div>

            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <SkillTag
                    key={s}
                    label={s}
                    removable
                    onRemove={() => setSkills((p) => p.filter((x) => x !== s))}
                  />
                ))}
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Section 4: Urgent toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
        >
          <GlassCard
            padding="md"
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Mark as Urgent
                </p>
                <p className="text-xs text-muted-foreground">
                  Get 3× more applicants instantly
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setUrgent(!urgent)}
              className={`relative w-12 h-6 rounded-full transition-smooth flex-shrink-0 ${
                urgent ? "bg-red-500" : "bg-muted"
              }`}
              role="switch"
              aria-checked={urgent}
              data-ocid="post_job.urgent.switch"
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-smooth ${
                  urgent ? "left-7" : "left-1"
                }`}
              />
            </button>
          </GlassCard>
        </motion.div>

        {/* Timing summary */}
        {(duration || pay || workerCount > 1) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard padding="md" className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-accent flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                {workerCount > 1 ? `${workerCount} workers` : "1 worker"}
                {pay ? ` · ₹${pay}/hr` : ""}
                {duration ? ` · ${duration}` : ""}
                {urgent ? " · 🔥 Urgent" : ""}
              </p>
            </GlassCard>
          </motion.div>
        )}

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <GradientButton
            variant="primary"
            size="xl"
            fullWidth
            loading={loading}
            onClick={handleSubmit}
            data-ocid="post_job.submit.primary_button"
          >
            <Zap className="w-5 h-5" /> Post Job Now
          </GradientButton>
        </motion.div>
      </div>
    </Layout>
  );
}
