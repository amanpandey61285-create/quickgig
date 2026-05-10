import { Layout } from "@/components/layout/Layout";
import { AvatarUpload } from "@/components/ui/AvatarUpload";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useUserStore } from "@/store/user-store";
import { useNavigate } from "@tanstack/react-router";
import {
  BriefcaseBusiness,
  Building2,
  CheckCircle,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const PERKS = [
  {
    icon: <Zap className="w-4 h-4 text-primary" />,
    text: "Post jobs in 60 seconds",
  },
  {
    icon: <Shield className="w-4 h-4 text-accent" />,
    text: "Verified workers only",
  },
  {
    icon: <Star className="w-4 h-4 text-yellow-400" />,
    text: "Rated & reviewed talent",
  },
];

export default function EmployerSignupPage() {
  const navigate = useNavigate();
  const { setRole, setEmployerProfile } = useUserStore();
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    businessName?: string;
    description?: string;
  }>({});

  const handleLogoUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setLogoUrl(url);
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!businessName.trim()) e.businessName = "Business name is required";
    if (!description.trim()) e.description = "Description is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      // Simulate backend call — wired to actor.createEmployerProfile in real integration
      await new Promise((r) => setTimeout(r, 900));
      setRole("employer");
      setEmployerProfile({
        principal: "self",
        businessName: businessName.trim(),
        description: description.trim(),
        logoUrl: logoUrl ?? undefined,
        activeJobCount: 0,
        completedHires: 0,
        ratings: [],
      });
      toast.success("Employer profile created!");
      navigate({ to: "/employer/dashboard" });
    } catch {
      toast.error("Failed to create profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md space-y-6"
        data-ocid="employer_signup.page"
      >
        {/* Header */}
        <div className="text-center space-y-3">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="inline-flex items-center gap-2 font-display font-bold text-2xl"
            data-ocid="employer_signup.home.link"
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-gradient">QuickGig</span>
          </button>
          <div>
            <StatusBadge variant="open">
              <BriefcaseBusiness className="w-3 h-3" /> Employer Sign Up
            </StatusBadge>
            <h1 className="text-2xl font-display font-bold text-foreground mt-2">
              Hire Workers Instantly
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Post jobs and get verified applicants in minutes
            </p>
          </div>
        </div>

        {/* Perks */}
        <div className="flex flex-col gap-2">
          {PERKS.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 glass-card px-4 py-2.5 text-sm text-foreground"
            >
              {p.icon}
              {p.text}
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <GlassCard padding="lg" className="space-y-5">
          {/* Logo upload */}
          <div className="flex flex-col items-center gap-2">
            <AvatarUpload
              src={logoUrl}
              size="xl"
              editable
              onUpload={handleLogoUpload}
              alt="Business logo"
            />
            <p className="text-xs text-muted-foreground">
              Upload business logo (optional)
            </p>
          </div>

          {/* Business name */}
          <div>
            <label
              htmlFor="es-name"
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
            >
              Business / Shop Name *
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                id="es-name"
                type="text"
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                  if (errors.businessName)
                    setErrors((p) => ({ ...p, businessName: undefined }));
                }}
                placeholder="e.g. Rohan's Café"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-smooth"
                data-ocid="employer_signup.name.input"
              />
            </div>
            {errors.businessName && (
              <p
                className="text-xs text-red-400 mt-1"
                data-ocid="employer_signup.name.field_error"
              >
                {errors.businessName}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="es-desc"
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
            >
              Business Description *
            </label>
            <textarea
              id="es-desc"
              rows={3}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description)
                  setErrors((p) => ({ ...p, description: undefined }));
              }}
              placeholder="Describe your business and the type of workers you typically hire…"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 resize-none transition-smooth"
              data-ocid="employer_signup.description.textarea"
            />
            {errors.description && (
              <p
                className="text-xs text-red-400 mt-1"
                data-ocid="employer_signup.description.field_error"
              >
                {errors.description}
              </p>
            )}
          </div>

          <GradientButton
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            onClick={handleSubmit}
            data-ocid="employer_signup.submit.primary_button"
          >
            <CheckCircle className="w-5 h-5" /> Create Employer Profile
          </GradientButton>

          <p className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our Terms &amp; Privacy Policy.
          </p>

          <div className="border-t border-white/10 pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Looking for work?{" "}
              <button
                type="button"
                onClick={() => navigate({ to: "/signup/worker" })}
                className="text-primary hover:underline"
                data-ocid="employer_signup.worker_link"
              >
                Find Gigs
              </button>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
