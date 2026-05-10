import { Layout } from "@/components/layout/Layout";
import { AvatarUpload } from "@/components/ui/AvatarUpload";
import { EmptyState } from "@/components/ui/EmptyState";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SkillTag } from "@/components/ui/SkillTag";
import { StarRating } from "@/components/ui/StarRating";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useParams } from "@tanstack/react-router";
import { Banknote, CheckCircle, Star, Users, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

type ApplicationStatus = "pending" | "accepted" | "rejected" | "completed";

interface Applicant {
  id: string;
  name: string;
  bio: string;
  skills: string[];
  hourlyRate: number;
  completedJobs: number;
  rating: number;
  status: ApplicationStatus;
}

const MOCK_APPLICANTS: Applicant[] = [
  {
    id: "a1",
    name: "Priya Sharma",
    bio: "Experienced barista and café server with 2 years in hospitality.",
    skills: ["F&B", "Customer Service", "Barista"],
    hourlyRate: 200,
    completedJobs: 18,
    rating: 4.9,
    status: "pending",
  },
  {
    id: "a2",
    name: "Amit Kumar",
    bio: "Quick learner, reliable, available immediately for any shift.",
    skills: ["F&B", "Hindi", "Serving"],
    hourlyRate: 180,
    completedJobs: 7,
    rating: 4.6,
    status: "pending",
  },
  {
    id: "a3",
    name: "Divya Nair",
    bio: "Fluent English speaker, warm personality, customer-first attitude.",
    skills: ["Customer Service", "English", "Billing"],
    hourlyRate: 220,
    completedJobs: 24,
    rating: 4.9,
    status: "pending",
  },
];

interface RatingModalProps {
  applicantName: string;
  onClose: () => void;
  onSubmit: (stars: number, comment: string) => void;
}

function RatingModal({ applicantName, onClose, onSubmit }: RatingModalProps) {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (stars === 0) {
      toast.error("Please select a star rating");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    onSubmit(stars, comment);
    setSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      data-ocid="applicants.rating.dialog"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative glass-card w-full max-w-sm p-6 space-y-5"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">
            Rate {applicantName}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg glass-card text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="applicants.rating.close_button"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">
            How was the work quality?
          </p>
          <StarRating
            value={stars}
            size="lg"
            interactive
            onChange={setStars}
            className="gap-1"
          />
          {stars > 0 && (
            <p className="text-xs text-accent">
              {["Terrible", "Bad", "Okay", "Good", "Excellent!"][stars - 1]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="rating-comment"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
          >
            Comment (optional)
          </label>
          <textarea
            id="rating-comment"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this worker…"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 resize-none transition-smooth"
            data-ocid="applicants.rating.textarea"
          />
        </div>

        <div className="flex gap-3">
          <GradientButton
            variant="ghost"
            size="md"
            fullWidth
            onClick={onClose}
            data-ocid="applicants.rating.cancel_button"
          >
            Cancel
          </GradientButton>
          <GradientButton
            variant="primary"
            size="md"
            fullWidth
            loading={submitting}
            onClick={handleSubmit}
            data-ocid="applicants.rating.submit.confirm_button"
          >
            <Star className="w-4 h-4" /> Submit Rating
          </GradientButton>
        </div>
      </motion.div>
    </div>
  );
}

export default function ApplicantsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = useParams({ strict: false }) as any;
  const jobId = params?.id ?? "unknown";
  const [applicants, setApplicants] = useState<Applicant[]>(MOCK_APPLICANTS);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [ratingTarget, setRatingTarget] = useState<Applicant | null>(null);

  const updateStatus = async (id: string, status: ApplicationStatus) => {
    setLoadingId(id);
    await new Promise((r) => setTimeout(r, 600));
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a)),
    );
    setLoadingId(null);
    toast.success(
      status === "accepted"
        ? "Applicant accepted!"
        : status === "rejected"
          ? "Applicant rejected"
          : status === "completed"
            ? "Job marked complete!"
            : "",
    );
    if (status === "completed") {
      const target = applicants.find((a) => a.id === id);
      if (target) setRatingTarget(target);
    }
  };

  const handleRatingSubmit = (stars: number, comment: string) => {
    toast.success(`Rating submitted: ${stars} stars!`);
    if (ratingTarget) {
      setApplicants((prev) =>
        prev.map((a) =>
          a.id === ratingTarget.id
            ? { ...a, status: "completed" as ApplicationStatus }
            : a,
        ),
      );
    }
    setRatingTarget(null);
    console.log("Rating:", { stars, comment, jobId });
  };

  const pending = applicants.filter((a) => a.status === "pending");
  const accepted = applicants.filter((a) => a.status === "accepted");
  const completed = applicants.filter((a) => a.status === "completed");

  return (
    <Layout>
      <div className="space-y-6" data-ocid="applicants.page">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">
                Applicants
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Job #{jobId} · Review and hire from your pool
              </p>
            </div>
            <div className="flex gap-2">
              <StatusBadge variant="pending">
                {pending.length} Pending
              </StatusBadge>
              <StatusBadge variant="accepted">
                {accepted.length} Hired
              </StatusBadge>
            </div>
          </div>
        </motion.div>

        {/* Pending applicants */}
        {applicants.length === 0 ? (
          <EmptyState
            icon={<Users className="w-8 h-8" />}
            title="No applicants yet"
            description="Share your job listing to attract workers."
          />
        ) : (
          <div className="space-y-8">
            {/* Pending */}
            {pending.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Pending Review ({pending.length})
                </h2>
                <div className="space-y-3">
                  <AnimatePresence>
                    {pending.map((a, i) => (
                      <motion.div
                        key={a.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <GlassCard
                          hover
                          padding="md"
                          className="space-y-3"
                          data-ocid={`applicants.item.${i + 1}`}
                        >
                          <div className="flex items-start gap-3">
                            <AvatarUpload size="md" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-sm text-foreground">
                                  {a.name}
                                </span>
                                <StatusBadge variant="verified">
                                  Verified
                                </StatusBadge>
                              </div>
                              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                <StarRating
                                  value={Math.round(a.rating)}
                                  size="sm"
                                />
                                <span className="text-xs text-muted-foreground">
                                  {a.rating}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ·
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {a.completedJobs} jobs
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ·
                                </span>
                                <span className="text-xs text-accent flex items-center gap-0.5">
                                  <Banknote className="w-3 h-3" /> ₹
                                  {a.hourlyRate}/hr
                                </span>
                              </div>
                              {a.bio && (
                                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {a.bio}
                                </p>
                              )}
                            </div>
                          </div>
                          {a.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {a.skills.map((sk) => (
                                <SkillTag key={sk} label={sk} />
                              ))}
                            </div>
                          )}
                          <div className="flex gap-2 pt-1">
                            <GradientButton
                              variant="primary"
                              size="sm"
                              fullWidth
                              loading={loadingId === a.id}
                              onClick={() => updateStatus(a.id, "accepted")}
                              data-ocid={`applicants.accept.${i + 1}`}
                            >
                              <CheckCircle className="w-3.5 h-3.5" /> Accept
                            </GradientButton>
                            <GradientButton
                              variant="ghost"
                              size="sm"
                              fullWidth
                              loading={loadingId === a.id}
                              onClick={() => updateStatus(a.id, "rejected")}
                              data-ocid={`applicants.reject.${i + 1}`}
                            >
                              <X className="w-3.5 h-3.5" /> Reject
                            </GradientButton>
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Accepted */}
            {accepted.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Hired Workers ({accepted.length})
                </h2>
                <div className="space-y-3">
                  {accepted.map((a, i) => (
                    <motion.div
                      key={a.id}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <GlassCard
                        padding="md"
                        className="flex items-center gap-3"
                        data-ocid={`applicants.hired.item.${i + 1}`}
                      >
                        <AvatarUpload size="md" />
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-sm text-foreground">
                            {a.name}
                          </span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <StatusBadge variant="accepted">Hired</StatusBadge>
                          </div>
                        </div>
                        <GradientButton
                          variant="accent"
                          size="sm"
                          loading={loadingId === a.id}
                          onClick={() => updateStatus(a.id, "completed")}
                          data-ocid={`applicants.mark_complete.${i + 1}`}
                        >
                          Mark Complete
                        </GradientButton>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Completed */}
            {completed.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Completed ({completed.length})
                </h2>
                <div className="space-y-3">
                  {completed.map((a, i) => (
                    <GlassCard
                      key={a.id}
                      padding="md"
                      className="flex items-center gap-3 opacity-70"
                      data-ocid={`applicants.completed.item.${i + 1}`}
                    >
                      <AvatarUpload size="md" />
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-sm text-foreground">
                          {a.name}
                        </span>
                        <div className="mt-0.5">
                          <StatusBadge variant="completed">
                            Completed
                          </StatusBadge>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rating modal */}
      <AnimatePresence>
        {ratingTarget && (
          <RatingModal
            applicantName={ratingTarget.name}
            onClose={() => setRatingTarget(null)}
            onSubmit={handleRatingSubmit}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
