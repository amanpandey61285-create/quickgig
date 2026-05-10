import { b as useParams, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-Bhvb_wkP.js";
import { L as Layout, A as AnimatePresence, X } from "./Layout-DCFJ7ZK3.js";
import { A as AvatarUpload } from "./AvatarUpload-D_s4GvuX.js";
import { E as EmptyState } from "./EmptyState-BVnbDfxP.js";
import { e as motion, g as GlassCard, G as GradientButton } from "./GlassCard-DkCgMR2r.js";
import { S as SkillTag } from "./SkillTag-DmQjiAIO.js";
import { S as StarRating } from "./StarRating-5EJfoaJ0.js";
import { S as StatusBadge } from "./StatusBadge-Z14A2Inf.js";
import { U as Users } from "./users-Bv6WyFFr.js";
import { B as Banknote } from "./banknote-BmgAylX8.js";
import { C as CircleCheckBig } from "./circle-check-big-DHjOkuCu.js";
import { S as Star } from "./star-BecAt0Wi.js";
import "./use-auth-DIarAbOw.js";
import "./user-store-B0tffYM3.js";
import "./log-in-BCMEdyHB.js";
import "./sparkles-Cnywz3L8.js";
const MOCK_APPLICANTS = [
  {
    id: "a1",
    name: "Priya Sharma",
    bio: "Experienced barista and café server with 2 years in hospitality.",
    skills: ["F&B", "Customer Service", "Barista"],
    hourlyRate: 200,
    completedJobs: 18,
    rating: 4.9,
    status: "pending"
  },
  {
    id: "a2",
    name: "Amit Kumar",
    bio: "Quick learner, reliable, available immediately for any shift.",
    skills: ["F&B", "Hindi", "Serving"],
    hourlyRate: 180,
    completedJobs: 7,
    rating: 4.6,
    status: "pending"
  },
  {
    id: "a3",
    name: "Divya Nair",
    bio: "Fluent English speaker, warm personality, customer-first attitude.",
    skills: ["Customer Service", "English", "Billing"],
    hourlyRate: 220,
    completedJobs: 24,
    rating: 4.9,
    status: "pending"
  }
];
function RatingModal({ applicantName, onClose, onSubmit }) {
  const [stars, setStars] = reactExports.useState(0);
  const [comment, setComment] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = async () => {
    if (stars === 0) {
      ue.error("Please select a star rating");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    onSubmit(stars, comment);
    setSubmitting(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4",
      "data-ocid": "applicants.rating.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            className: "relative glass-card w-full max-w-sm p-6 space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground", children: [
                  "Rate ",
                  applicantName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    className: "p-1.5 rounded-lg glass-card text-muted-foreground hover:text-foreground transition-smooth",
                    "data-ocid": "applicants.rating.close_button",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How was the work quality?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StarRating,
                  {
                    value: stars,
                    size: "lg",
                    interactive: true,
                    onChange: setStars,
                    className: "gap-1"
                  }
                ),
                stars > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-accent", children: ["Terrible", "Bad", "Okay", "Good", "Excellent!"][stars - 1] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "rating-comment",
                    className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1",
                    children: "Comment (optional)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "rating-comment",
                    rows: 3,
                    value: comment,
                    onChange: (e) => setComment(e.target.value),
                    placeholder: "Share your experience with this worker…",
                    className: "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 resize-none transition-smooth",
                    "data-ocid": "applicants.rating.textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GradientButton,
                  {
                    variant: "ghost",
                    size: "md",
                    fullWidth: true,
                    onClick: onClose,
                    "data-ocid": "applicants.rating.cancel_button",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  GradientButton,
                  {
                    variant: "primary",
                    size: "md",
                    fullWidth: true,
                    loading: submitting,
                    onClick: handleSubmit,
                    "data-ocid": "applicants.rating.submit.confirm_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
                      " Submit Rating"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function ApplicantsPage() {
  const params = useParams({ strict: false });
  const jobId = (params == null ? void 0 : params.id) ?? "unknown";
  const [applicants, setApplicants] = reactExports.useState(MOCK_APPLICANTS);
  const [loadingId, setLoadingId] = reactExports.useState(null);
  const [ratingTarget, setRatingTarget] = reactExports.useState(null);
  const updateStatus = async (id, status) => {
    setLoadingId(id);
    await new Promise((r) => setTimeout(r, 600));
    setApplicants(
      (prev) => prev.map((a) => a.id === id ? { ...a, status } : a)
    );
    setLoadingId(null);
    ue.success(
      status === "accepted" ? "Applicant accepted!" : status === "rejected" ? "Applicant rejected" : status === "completed" ? "Job marked complete!" : ""
    );
    if (status === "completed") {
      const target = applicants.find((a) => a.id === id);
      if (target) setRatingTarget(target);
    }
  };
  const handleRatingSubmit = (stars, comment) => {
    ue.success(`Rating submitted: ${stars} stars!`);
    if (ratingTarget) {
      setApplicants(
        (prev) => prev.map(
          (a) => a.id === ratingTarget.id ? { ...a, status: "completed" } : a
        )
      );
    }
    setRatingTarget(null);
    console.log("Rating:", { stars, comment, jobId });
  };
  const pending = applicants.filter((a) => a.status === "pending");
  const accepted = applicants.filter((a) => a.status === "accepted");
  const completed = applicants.filter((a) => a.status === "completed");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "applicants.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Applicants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
                "Job #",
                jobId,
                " · Review and hire from your pool"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusBadge, { variant: "pending", children: [
                pending.length,
                " Pending"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusBadge, { variant: "accepted", children: [
                accepted.length,
                " Hired"
              ] })
            ] })
          ] })
        }
      ),
      applicants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8" }),
          title: "No applicants yet",
          description: "Share your job listing to attract workers."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        pending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: [
            "Pending Review (",
            pending.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: pending.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 20 },
              transition: { delay: i * 0.07 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GlassCard,
                {
                  hover: true,
                  padding: "md",
                  className: "space-y-3",
                  "data-ocid": `applicants.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarUpload, { size: "md" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: a.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "verified", children: "Verified" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            StarRating,
                            {
                              value: Math.round(a.rating),
                              size: "sm"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: a.rating }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "·" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                            a.completedJobs,
                            " jobs"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "·" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-accent flex items-center gap-0.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-3 h-3" }),
                            " ₹",
                            a.hourlyRate,
                            "/hr"
                          ] })
                        ] }),
                        a.bio && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: a.bio })
                      ] })
                    ] }),
                    a.skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: a.skills.map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTag, { label: sk }, sk)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        GradientButton,
                        {
                          variant: "primary",
                          size: "sm",
                          fullWidth: true,
                          loading: loadingId === a.id,
                          onClick: () => updateStatus(a.id, "accepted"),
                          "data-ocid": `applicants.accept.${i + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5" }),
                            " Accept"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        GradientButton,
                        {
                          variant: "ghost",
                          size: "sm",
                          fullWidth: true,
                          loading: loadingId === a.id,
                          onClick: () => updateStatus(a.id, "rejected"),
                          "data-ocid": `applicants.reject.${i + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
                            " Reject"
                          ]
                        }
                      )
                    ] })
                  ]
                }
              )
            },
            a.id
          )) }) })
        ] }),
        accepted.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: [
            "Hired Workers (",
            accepted.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: accepted.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GlassCard,
                {
                  padding: "md",
                  className: "flex items-center gap-3",
                  "data-ocid": `applicants.hired.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarUpload, { size: "md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: a.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "accepted", children: "Hired" }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GradientButton,
                      {
                        variant: "accent",
                        size: "sm",
                        loading: loadingId === a.id,
                        onClick: () => updateStatus(a.id, "completed"),
                        "data-ocid": `applicants.mark_complete.${i + 1}`,
                        children: "Mark Complete"
                      }
                    )
                  ]
                }
              )
            },
            a.id
          )) })
        ] }),
        completed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: [
            "Completed (",
            completed.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: completed.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            GlassCard,
            {
              padding: "md",
              className: "flex items-center gap-3 opacity-70",
              "data-ocid": `applicants.completed.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarUpload, { size: "md" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: a.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { variant: "completed", children: "Completed" }) })
                ] })
              ]
            },
            a.id
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: ratingTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RatingModal,
      {
        applicantName: ratingTarget.name,
        onClose: () => setRatingTarget(null),
        onSubmit: handleRatingSubmit
      }
    ) })
  ] });
}
export {
  ApplicantsPage as default
};
