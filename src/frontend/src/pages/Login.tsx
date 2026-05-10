import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "@tanstack/react-router";
import { Briefcase, Loader2, LogIn, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Login() {
  const { login, isAuthenticated, isLoading, loginStatus } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/" });
    }
  }, [isAuthenticated, navigate]);

  const isSigningIn = loginStatus === "logging-in";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)",
      }}
    >
      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: "#6C63FF" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none blur-3xl opacity-15"
        style={{ background: "#00C2FF" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #6C63FF, #00C2FF)" }}
          >
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-2xl font-bold font-display text-foreground">
            QuickGig
          </span>
        </div>

        <GlassCard padding="lg" className="space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold font-display text-foreground">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to continue to QuickGig
            </p>
          </div>

          {/* Trust badge */}
          <div
            className="flex items-center justify-center gap-2 py-2 rounded-lg text-xs"
            style={{
              background: "rgba(108, 99, 255, 0.12)",
              border: "1px solid rgba(108, 99, 255, 0.25)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-medium">
              Secure via Internet Identity
            </span>
          </div>

          <GradientButton
            variant="primary"
            size="lg"
            fullWidth
            loading={isSigningIn || isLoading}
            onClick={() => login()}
            data-ocid="login.submit_button"
          >
            {isSigningIn ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in…
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                Sign in with Internet Identity
              </>
            )}
          </GradientButton>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div
                className="w-full border-t"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              />
            </div>
            <div className="relative flex justify-center text-xs">
              <span
                className="px-3 text-muted-foreground"
                style={{ background: "rgba(20,15,40,0.5)" }}
              >
                New to QuickGig?
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/signup/worker" })}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-smooth hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(108,99,255,0.15)",
                border: "1px solid rgba(108,99,255,0.3)",
                color: "#a5a1ff",
              }}
              data-ocid="login.worker_signup_link"
            >
              <Zap className="w-4 h-4" />
              Find Work
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/signup/employer" })}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-smooth hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(0,194,255,0.12)",
                border: "1px solid rgba(0,194,255,0.25)",
                color: "#00C2FF",
              }}
              data-ocid="login.employer_signup_link"
            >
              <Briefcase className="w-4 h-4" />
              Hire Workers
            </button>
          </div>
        </GlassCard>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing in you agree to our{" "}
          <span className="text-primary cursor-pointer hover:underline">
            Terms
          </span>
          {" & "}
          <span className="text-primary cursor-pointer hover:underline">
            Privacy Policy
          </span>
        </p>
      </motion.div>
    </div>
  );
}
