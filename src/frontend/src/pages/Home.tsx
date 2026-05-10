import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { StarRating } from "@/components/ui/StarRating";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useNavigate } from "@tanstack/react-router";
import {
  Banknote,
  Bell,
  Brain,
  BriefcaseBusiness,
  Camera,
  ChevronRight,
  ClipboardList,
  Coffee,
  CreditCard,
  Database,
  Loader,
  Mail,
  MapPin,
  MessageSquare,
  Music,
  Navigation,
  Package,
  Phone,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  Warehouse,
  Zap,
} from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionVal.set(target);
  }, [isInView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  const formatted =
    target >= 1_000_000
      ? `${(display / 1_000_000).toFixed(1)}M`
      : target >= 1_000
        ? `${(display / 1_000).toFixed(0)}K`
        : display.toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const STATS = [
  { label: "Active Workers", target: 50000, suffix: "+", icon: Users },
  { label: "Jobs Completed", target: 1000000, suffix: "+", icon: Zap },
  {
    label: "Businesses Registered",
    target: 10000,
    suffix: "+",
    icon: BriefcaseBusiness,
  },
  {
    label: "Earnings Paid",
    prefix: "₹",
    target: 500,
    suffix: "M+",
    raw: "₹500M+",
    icon: Banknote,
  },
];

const CATEGORIES = [
  {
    label: "Delivery Helper",
    emoji: "🛵",
    count: 342,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
  },
  {
    label: "Café Staff",
    emoji: "☕",
    count: 218,
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/20",
    text: "text-yellow-400",
  },
  {
    label: "Event Worker",
    emoji: "🎪",
    count: 157,
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
    text: "text-pink-400",
  },
  {
    label: "Warehouse Helper",
    emoji: "📦",
    count: 289,
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    text: "text-orange-400",
  },
  {
    label: "Store Assistant",
    emoji: "🛍️",
    count: 193,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
  },
  {
    label: "Data Entry",
    emoji: "💻",
    count: 421,
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    text: "text-primary",
  },
  {
    label: "Packing Staff",
    emoji: "📫",
    count: 176,
    color: "from-secondary/20 to-secondary/5",
    border: "border-secondary/20",
    text: "text-secondary",
  },
  {
    label: "Cleaning Helper",
    emoji: "🧹",
    count: 134,
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
    text: "text-teal-400",
  },
  {
    label: "Loading/Unloading",
    emoji: "🏋️",
    count: 98,
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/20",
    text: "text-red-400",
  },
  {
    label: "Reception Assistant",
    emoji: "🙋",
    count: 143,
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    text: "text-violet-400",
  },
  {
    label: "Photographer Asst.",
    emoji: "📸",
    count: 87,
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
  },
  {
    label: "Sales Promoter",
    emoji: "📣",
    count: 214,
    color: "from-accent/20 to-accent/5",
    border: "border-accent/20",
    text: "text-accent",
  },
];

const EMPLOYER_STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Post a Job",
    desc: "Describe your need, set pay & timing in under 2 minutes.",
  },
  {
    step: "02",
    icon: Users,
    title: "Get Applications",
    desc: "Verified workers apply instantly from your area.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Hire Instantly",
    desc: "Review profiles, chat & confirm in one tap.",
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Complete Work",
    desc: "Release payment after work is completed.",
  },
];

const WORKER_STEPS = [
  {
    step: "01",
    icon: Shield,
    title: "Create Profile",
    desc: "Add your skills, availability & hourly rate.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "Find Nearby Jobs",
    desc: "Browse urgent gigs within your radius.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Apply Instantly",
    desc: "One-tap apply with your saved profile.",
  },
  {
    step: "04",
    icon: Wallet,
    title: "Earn Money",
    desc: "Get paid directly to your wallet after each gig.",
  },
];

const FEATURES = [
  {
    Icon: Zap,
    title: "Real-time Hiring",
    desc: "Instant matching & notifications the moment jobs are posted.",
  },
  {
    Icon: MapPin,
    title: "Nearby Job Matching",
    desc: "GPS-powered feed showing gigs within your chosen radius.",
  },
  {
    Icon: Navigation,
    title: "GPS Location",
    desc: "Smart location-based suggestions and distance filtering.",
  },
  {
    Icon: Bell,
    title: "Instant Notifications",
    desc: "Push alerts for new job matches, applications & messages.",
  },
  {
    Icon: MessageSquare,
    title: "In-app Chat",
    desc: "Built-in messaging so you never share personal numbers.",
  },
  {
    Icon: CreditCard,
    title: "Secure Payments",
    desc: "Escrow-based payments released only on work completion.",
  },
  {
    Icon: Star,
    title: "Ratings & Reviews",
    desc: "Transparent reputation system builds long-term trust.",
  },
  {
    Icon: Shield,
    title: "Verified Users",
    desc: "Every worker & employer goes through identity verification.",
  },
  {
    Icon: Brain,
    title: "AI Recommendations",
    desc: "Smart job suggestions based on your skills and history.",
  },
  {
    Icon: Loader,
    title: "Fast Payouts",
    desc: "Instant wallet transfers within minutes of job completion.",
  },
  {
    Icon: Wallet,
    title: "Wallet System",
    desc: "Manage earnings, withdraw to UPI/bank, track all history.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "B.Tech Student, Pune",
    stars: 5,
    avatar: "P",
    color: "from-pink-500 to-secondary",
    text: "Earned ₹4,500 in a single weekend helping at a wedding event. QuickGig literally changed my college life!",
  },
  {
    name: "Rohan Mehta",
    role: "Café Owner, Mumbai",
    stars: 5,
    avatar: "R",
    color: "from-primary to-accent",
    text: "We needed 3 extra servers for a Sunday brunch rush. Got verified applicants within 20 minutes. Incredible!",
  },
  {
    name: "Sneha Kulkarni",
    role: "Freelancer, Bengaluru",
    stars: 5,
    avatar: "S",
    color: "from-emerald-500 to-accent",
    text: "The data entry gigs are perfect between my freelance projects. Flexible, fast, and always paid on time.",
  },
  {
    name: "Arjun Verma",
    role: "Event Organizer, Delhi",
    stars: 5,
    avatar: "A",
    color: "from-orange-500 to-yellow-500",
    text: "Staffed our entire 500-person event using QuickGig. Reliable workers, zero no-shows, 5-star experience!",
  },
];

// ─── Floating Particle ────────────────────────────────────────────────────────
function Particle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ left: x, top: y, background: "rgba(108,99,255,0.6)" }}
      animate={{ y: ["-20px", "20px", "-20px"], opacity: [0.2, 0.8, 0.2] }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"workers" | "employers">(
    "workers",
  );

  const particles = [
    { id: "p1", delay: 0, x: "15%", y: "20%" },
    { id: "p2", delay: 0.5, x: "25%", y: "60%" },
    { id: "p3", delay: 1, x: "70%", y: "15%" },
    { id: "p4", delay: 1.5, x: "80%", y: "70%" },
    { id: "p5", delay: 0.8, x: "45%", y: "80%" },
    { id: "p6", delay: 2, x: "60%", y: "40%" },
    { id: "p7", delay: 0.3, x: "90%", y: "30%" },
    { id: "p8", delay: 1.2, x: "5%", y: "50%" },
  ];

  return (
    <Layout noPadding>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden px-4 pt-8 pb-16"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #1a1240 50%, #0F172A 100%)",
        }}
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "rgba(108,99,255,0.15)" }}
          />
          <div
            className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: "rgba(0,194,255,0.10)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
            style={{ background: "rgba(139,92,246,0.08)" }}
          />
          {particles.map((p) => (
            <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StatusBadge variant="trending" className="mb-4">
                <Sparkles className="w-3 h-3" /> AI-Powered Gig Matching
              </StatusBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight"
            >
              Find Workers <span className="text-gradient">Instantly.</span>
              <br />
              Earn <span className="text-gradient">Anytime.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              Connect with nearby students and part-time workers for urgent
              hourly jobs. Like Uber, but for the local gig economy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <GradientButton
                variant="primary"
                size="lg"
                onClick={() => navigate({ to: "/jobs" })}
                data-ocid="hero.find_work.primary_button"
              >
                <Zap className="w-5 h-5" /> Find Work
              </GradientButton>
              <GradientButton
                variant="outline"
                size="lg"
                onClick={() => navigate({ to: "/signup/employer" })}
                data-ocid="hero.hire_workers.secondary_button"
              >
                Hire Workers <ChevronRight className="w-5 h-5" />
              </GradientButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <StatusBadge variant="verified">✓ Verified Users</StatusBadge>
              <StatusBadge variant="verified">✓ Secure Payments</StatusBadge>
              <StatusBadge variant="verified">✓ 5-Star Reviews</StatusBadge>
              <StatusBadge variant="trending">⚡ Instant Hire</StatusBadge>
            </motion.div>
          </div>

          {/* Right: animated dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Floating stat chip */}
            <motion.div
              animate={{ y: ["-8px", "8px", "-8px"] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-8 z-20 glass-card px-3 py-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg"
              style={{
                background: "rgba(16,185,129,0.15)",
                borderColor: "rgba(16,185,129,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              3 workers hired now
            </motion.div>

            <motion.div
              animate={{ y: ["8px", "-8px", "8px"] }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -right-8 z-20 glass-card px-3 py-2 text-xs font-semibold text-accent flex items-center gap-1.5 shadow-lg"
              style={{
                background: "rgba(0,194,255,0.15)",
                borderColor: "rgba(0,194,255,0.3)",
              }}
            >
              <Banknote className="w-3 h-3" />
              ₹12,400 earned today
            </motion.div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(108,99,255,0.4), rgba(0,194,255,0.2))",
                }}
              />
              <img
                src="/assets/generated/hero-dashboard-preview.dim_600x700.png"
                alt="QuickGig dashboard preview showing job listings"
                className="relative rounded-3xl shadow-2xl max-w-sm w-full border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section
        id="stats"
        className="py-16 px-4 border-y"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard padding="md" className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white">
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-display font-bold text-gradient">
                  {stat.raw ? (
                    stat.raw
                  ) : (
                    <AnimatedCounter
                      target={stat.target}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix ?? ""}
                    />
                  )}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              How <span className="text-gradient">QuickGig</span> Works
            </h2>
            <p className="text-muted-foreground">
              Simple, fast, and transparent for everyone.
            </p>
          </motion.div>

          {/* Tab switcher */}
          <div className="flex justify-center mb-10">
            <div
              className="flex rounded-2xl p-1"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {(["workers", "employers"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  data-ocid={`how_it_works.${tab}.tab`}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-smooth capitalize ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-xl gradient-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === "workers" ? "👷 For Workers" : "🏢 For Employers"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Steps */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {(activeTab === "workers" ? WORKER_STEPS : EMPLOYER_STEPS).map(
              (s, i) => (
                <motion.div
                  key={s.step}
                  initial={{
                    opacity: 0,
                    x: activeTab === "workers" ? -16 : 16,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard
                    hover
                    padding="md"
                    className="flex items-start gap-4 h-full"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white shadow-lg">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gradient font-display">
                          {s.step}
                        </span>
                        <h4 className="font-semibold text-sm text-foreground">
                          {s.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────────── */}
      <section
        id="categories"
        className="py-20 px-4 border-y"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Browse by <span className="text-gradient">Category</span>
            </h2>
            <p className="text-muted-foreground">
              Find gigs that match your skills or hire for any role.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                data-ocid={`category.item.${i + 1}`}
              >
                <div
                  className={`relative rounded-2xl p-5 text-center space-y-3 cursor-pointer transition-smooth border bg-gradient-to-b ${cat.color} ${cat.border} hover:shadow-lg`}
                  style={{ backdropFilter: "blur(12px)" }}
                >
                  <div className="text-3xl">{cat.emoji}</div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {cat.label}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${cat.text}`}
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {cat.count} jobs
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section id="features" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Everything You <span className="text-gradient">Need</span>
            </h2>
            <p className="text-muted-foreground">
              A complete platform built for the modern gig economy.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <GlassCard hover padding="md" className="space-y-3 h-full">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-white shadow-md">
                    <f.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-20 px-4 border-y"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Loved by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-muted-foreground">
              Real stories from workers and employers across India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard
                  padding="md"
                  className="space-y-4 h-full flex flex-col"
                >
                  <StarRating value={t.stars} size="sm" />
                  <p className="text-sm text-muted-foreground flex-1 italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div
                    className="flex items-center gap-3 pt-2 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section id="cta" className="py-28 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(139,92,246,0.15) 50%, rgba(0,194,255,0.1) 100%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "rgba(108,99,255,0.15)" }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto text-center space-y-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-foreground">
                Join 50,000+ workers & businesses
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Start Earning <span className="text-gradient">Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Whether you need workers in 20 minutes or want to earn on your own
            schedule — QuickGig connects you instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GradientButton
              variant="primary"
              size="xl"
              onClick={() => navigate({ to: "/signup/worker" })}
              data-ocid="cta.worker_signup.primary_button"
            >
              <Zap className="w-6 h-6" /> Start Earning Today
            </GradientButton>
            <GradientButton
              variant="outline"
              size="xl"
              onClick={() => navigate({ to: "/signup/employer" })}
              data-ocid="cta.employer_signup.secondary_button"
            >
              Hire Workers <ChevronRight className="w-6 h-6" />
            </GradientButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> No signup fees
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-accent" /> Instant payouts
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-400" /> Verified users
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        className="border-t px-4 pt-16 pb-8"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  Q
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  QuickGig
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                India's fastest platform for instant local gig work. Connect,
                hire, earn — anytime, anywhere.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <SiX className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-foreground">Company</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {["About Us", "Careers", "Blog", "Press"].map((item) => (
                  <li key={item}>
                    <a
                      href="#hero"
                      className="hover:text-foreground transition-smooth cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Workers/Employers */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-foreground">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  { label: "Find Work", to: "/jobs" as const, anchor: null },
                  {
                    label: "Hire Workers",
                    to: "/signup/employer" as const,
                    anchor: null,
                  },
                  {
                    label: "Post a Job",
                    to: "/employer/post-job" as const,
                    anchor: null,
                  },
                  {
                    label: "Browse Categories",
                    to: null,
                    anchor: "#categories",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="hover:text-foreground transition-smooth text-left"
                      onClick={() =>
                        item.anchor
                          ? document
                              .querySelector(item.anchor)
                              ?.scrollIntoView({ behavior: "smooth" })
                          : item.to && navigate({ to: item.to })
                      }
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-foreground">Support</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms & Conditions",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#hero"
                      className="hover:text-foreground transition-smooth cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-2 space-y-2 text-sm text-muted-foreground">
                <a
                  href="mailto:hello@quickgig.in"
                  className="flex items-center gap-1.5 hover:text-foreground transition-smooth"
                >
                  <Mail className="w-3.5 h-3.5" /> hello@quickgig.in
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> +91 98765 43210
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} QuickGig. All rights reserved. Built
              with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex items-center gap-1">
              <StatusBadge variant="verified">🔒 SSL Secured</StatusBadge>
              <StatusBadge variant="trending">🇮🇳 Made in India</StatusBadge>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
