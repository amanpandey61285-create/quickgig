import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as LoaderCircle } from "./index-Bhvb_wkP.js";
import { e as motion, Z as Zap, g as GlassCard, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { u as useAuth, B as Briefcase } from "./use-auth-DIarAbOw.js";
import { S as Sparkles } from "./sparkles-Cnywz3L8.js";
import { L as LogIn } from "./log-in-BCMEdyHB.js";
function Login() {
  const { login, isAuthenticated, isLoading, loginStatus } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/" });
    }
  }, [isAuthenticated, navigate]);
  const isSigningIn = loginStatus === "logging-in";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex flex-col items-center justify-center px-4 py-12",
      style: {
        background: "linear-gradient(135deg, #0F172A 0%, #1a1040 50%, #0F172A 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-20",
            style: { background: "#6C63FF" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none blur-3xl opacity-15",
            style: { background: "#00C2FF" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "w-full max-w-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                    style: { background: "linear-gradient(135deg, #6C63FF, #00C2FF)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-white", fill: "white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold font-display text-foreground", children: "QuickGig" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { padding: "lg", className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-foreground", children: "Welcome Back" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in to continue to QuickGig" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-center gap-2 py-2 rounded-lg text-xs",
                    style: {
                      background: "rgba(108, 99, 255, 0.12)",
                      border: "1px solid rgba(108, 99, 255, 0.25)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "Secure via Internet Identity" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GradientButton,
                  {
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    loading: isSigningIn || isLoading,
                    onClick: () => login(),
                    "data-ocid": "login.submit_button",
                    children: isSigningIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                      "Signing in…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-5 h-5" }),
                      "Sign in with Internet Identity"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full border-t",
                      style: { borderColor: "rgba(255,255,255,0.1)" }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-3 text-muted-foreground",
                      style: { background: "rgba(20,15,40,0.5)" },
                      children: "New to QuickGig?"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/signup/worker" }),
                      className: "flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-smooth hover:opacity-90 active:scale-95",
                      style: {
                        background: "rgba(108,99,255,0.15)",
                        border: "1px solid rgba(108,99,255,0.3)",
                        color: "#a5a1ff"
                      },
                      "data-ocid": "login.worker_signup_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                        "Find Work"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/signup/employer" }),
                      className: "flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-smooth hover:opacity-90 active:scale-95",
                      style: {
                        background: "rgba(0,194,255,0.12)",
                        border: "1px solid rgba(0,194,255,0.25)",
                        color: "#00C2FF"
                      },
                      "data-ocid": "login.employer_signup_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4" }),
                        "Hire Workers"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-6", children: [
                "By signing in you agree to our",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary cursor-pointer hover:underline", children: "Terms" }),
                " & ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary cursor-pointer hover:underline", children: "Privacy Policy" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  Login as default
};
