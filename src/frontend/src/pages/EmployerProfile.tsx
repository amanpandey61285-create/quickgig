import { Layout } from "@/components/layout/Layout";
import { AvatarUpload } from "@/components/ui/AvatarUpload";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { StarRating } from "@/components/ui/StarRating";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useUserStore } from "@/store/user-store";
import { Briefcase, CheckCircle, Edit3, TrendingUp, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function EmployerProfilePage() {
  const { employerProfile, setEmployerProfile } = useUserStore();
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [businessName, setBusinessName] = useState(
    employerProfile?.businessName ?? "",
  );
  const [description, setDescription] = useState(
    employerProfile?.description ?? "",
  );
  const [logoUrl, setLogoUrl] = useState<string | null>(
    employerProfile?.logoUrl ?? null,
  );

  const avgRating =
    employerProfile && employerProfile.ratings.length > 0
      ? employerProfile.ratings.reduce((a, r) => a + r.stars, 0) /
        employerProfile.ratings.length
      : 0;

  const handleSave = async () => {
    setSaving(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      setEmployerProfile({
        ...(employerProfile ?? {
          principal: "self",
          activeJobCount: 0,
          completedHires: 0,
          ratings: [],
        }),
        businessName,
        description,
        logoUrl: logoUrl ?? undefined,
      });
      toast.success("Profile updated!");
      setEditing(false);
    } catch {
      toast.error("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setBusinessName(employerProfile?.businessName ?? "");
    setDescription(employerProfile?.description ?? "");
    setLogoUrl(employerProfile?.logoUrl ?? null);
    setEditing(false);
  };

  return (
    <Layout>
      <div
        className="max-w-lg mx-auto space-y-6"
        data-ocid="employer_profile.page"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-2xl font-display font-bold text-foreground">
            Business Profile
          </h1>
          {!editing ? (
            <GradientButton
              variant="outline"
              size="sm"
              onClick={() => setEditing(true)}
              data-ocid="employer_profile.edit.button"
            >
              <Edit3 className="w-4 h-4" /> Edit
            </GradientButton>
          ) : (
            <button
              type="button"
              onClick={handleCancel}
              className="p-2 glass-card rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid="employer_profile.cancel.cancel_button"
              aria-label="Cancel editing"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>

        {/* Avatar + badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard padding="lg" className="space-y-5">
            <div className="flex items-center gap-4">
              <AvatarUpload
                src={logoUrl}
                size="xl"
                editable={editing}
                onUpload={(f) => setLogoUrl(URL.createObjectURL(f))}
                alt="Business logo"
              />
              <div className="flex-1 min-w-0">
                {!editing ? (
                  <>
                    <h2 className="text-xl font-display font-bold text-foreground truncate">
                      {employerProfile?.businessName || "Your Business"}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <StatusBadge variant="verified">
                        Verified Business
                      </StatusBadge>
                      {avgRating > 0 && (
                        <span className="text-xs text-muted-foreground">
                          {avgRating.toFixed(1)} avg
                        </span>
                      )}
                    </div>
                    {avgRating > 0 && (
                      <StarRating
                        value={Math.round(avgRating)}
                        size="sm"
                        className="mt-1"
                      />
                    )}
                  </>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Business Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-smooth"
                      data-ocid="employer_profile.name.input"
                    />
                    <StatusBadge variant="verified">
                      Verified Business
                    </StatusBadge>
                  </div>
                )}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
              <div className="text-center space-y-1">
                <div className="flex justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <div className="text-lg font-bold text-foreground">
                  {employerProfile?.activeJobCount ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">Active Jobs</p>
              </div>
              <div className="text-center space-y-1">
                <div className="flex justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <div className="text-lg font-bold text-foreground">
                  {employerProfile?.completedHires ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">Completed Hires</p>
              </div>
              <div className="text-center space-y-1">
                <div className="flex justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-foreground">
                  {employerProfile?.ratings.length ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">Reviews</p>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-white/10 pt-4">
              <label
                htmlFor="ep-desc"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2"
              >
                About
              </label>
              {editing ? (
                <textarea
                  id="ep-desc"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your business and the type of workers you typically hire…"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 resize-none transition-smooth"
                  data-ocid="employer_profile.description.textarea"
                />
              ) : (
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {employerProfile?.description || (
                    <span className="text-muted-foreground italic">
                      No description added yet.
                    </span>
                  )}
                </p>
              )}
            </div>

            {editing && (
              <GradientButton
                variant="primary"
                size="md"
                fullWidth
                loading={saving}
                onClick={handleSave}
                data-ocid="employer_profile.save.submit_button"
              >
                <CheckCircle className="w-4 h-4" /> Save Profile
              </GradientButton>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </Layout>
  );
}
