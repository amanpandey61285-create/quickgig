import { AvatarUpload } from "@/components/ui/AvatarUpload";
import { GradientButton } from "@/components/ui/GradientButton";
import { useAuth } from "@/hooks/use-auth";
import { useUserRole } from "@/hooks/use-user-role";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";
import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  User,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const LOGO = (
  <Link
    to="/"
    className="flex items-center gap-2 font-display font-bold text-xl"
    data-ocid="nav.logo.link"
  >
    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
      <Zap className="w-4 h-4 text-white" />
    </div>
    <span className="text-gradient">QuickGig</span>
  </Link>
);

export function Navbar() {
  const { isAuthenticated, login, logout, isLoading } = useAuth();
  const { role } = useUserRole();
  const { workerProfile, employerProfile } = useUserStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const avatarSrc =
    role === "worker"
      ? workerProfile?.avatarUrl
      : role === "employer"
        ? employerProfile?.logoUrl
        : undefined;

  const navLinks = isAuthenticated
    ? role === "worker"
      ? [
          {
            label: "Find Jobs",
            href: "/jobs",
            icon: <Briefcase className="w-4 h-4" />,
          },
          {
            label: "Dashboard",
            href: "/worker/dashboard",
            icon: <LayoutDashboard className="w-4 h-4" />,
          },
          {
            label: "Profile",
            href: "/worker/profile",
            icon: <User className="w-4 h-4" />,
          },
        ]
      : role === "employer"
        ? [
            {
              label: "Post Job",
              href: "/employer/post-job",
              icon: <Briefcase className="w-4 h-4" />,
            },
            {
              label: "Dashboard",
              href: "/employer/dashboard",
              icon: <LayoutDashboard className="w-4 h-4" />,
            },
            {
              label: "Profile",
              href: "/employer/profile",
              icon: <User className="w-4 h-4" />,
            },
          ]
        : []
    : [
        {
          label: "Find Work",
          href: "/jobs",
          icon: <Briefcase className="w-4 h-4" />,
        },
      ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl"
      data-ocid="nav.header"
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {LOGO}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              activeProps={{ className: "text-primary font-medium" }}
              data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth controls */}
        <div className="hidden md:flex items-center gap-3">
          {isLoading ? null : isAuthenticated ? (
            <>
              <AvatarUpload src={avatarSrc} size="sm" />
              <GradientButton
                variant="ghost"
                size="sm"
                onClick={logout}
                data-ocid="nav.logout.button"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </GradientButton>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid="nav.login.link"
              >
                Log In
              </Link>
              <GradientButton
                variant="primary"
                size="sm"
                onClick={() => login()}
                data-ocid="nav.signup.primary_button"
              >
                <LogIn className="w-4 h-4" />
                Get Started
              </GradientButton>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-smooth"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav.mobile_menu.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
            data-ocid="nav.mobile_menu"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-smooth"
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.mobile.${link.label.toLowerCase().replace(" ", "_")}.link`}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10">
                {isAuthenticated ? (
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2.5 w-full rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-smooth"
                    data-ocid="nav.mobile.logout.button"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                ) : (
                  <GradientButton
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      login();
                      setMobileOpen(false);
                    }}
                    data-ocid="nav.mobile.login.primary_button"
                  >
                    <LogIn className="w-4 h-4" />
                    Get Started
                  </GradientButton>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
