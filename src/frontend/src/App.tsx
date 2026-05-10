import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import React from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const LoginPage = lazy(() => import("@/pages/Login"));
const JobsPage = lazy(() => import("@/pages/Jobs"));
const JobDetailPage = lazy(() => import("@/pages/JobDetail"));
const WorkerDashPage = lazy(() => import("@/pages/WorkerDashboard"));
const WorkerProfilePage = lazy(() => import("@/pages/WorkerProfile"));
const EmployerDashPage = lazy(() => import("@/pages/EmployerDashboard"));
const EmployerProfilePage = lazy(() => import("@/pages/EmployerProfile"));
const PostJobPage = lazy(() => import("@/pages/PostJob"));
const ApplicantsPage = lazy(() => import("@/pages/Applicants"));
const WorkerSignupPage = lazy(() => import("@/pages/WorkerSignup"));
const EmployerSignupPage = lazy(() => import("@/pages/EmployerSignup"));
const AdminPage = lazy(() => import("@/pages/Admin"));

const RootComponent = () => (
  <Suspense fallback={<LoadingSpinner fullScreen />}>
    <Outlet />
    <Toaster position="top-center" richColors />
  </Suspense>
);

const rootRoute = createRootRoute({ component: RootComponent });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <LoginPage />,
});
const workerSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup/worker",
  component: () => <WorkerSignupPage />,
});
const employerSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup/employer",
  component: () => <EmployerSignupPage />,
});
const jobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs",
  component: () => <JobsPage />,
});
const jobDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs/$id",
  component: () => <JobDetailPage />,
});
const workerDashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/worker/dashboard",
  component: () => <WorkerDashPage />,
});
const workerProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/worker/profile",
  component: () => <WorkerProfilePage />,
});
const employerDashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/dashboard",
  component: () => <EmployerDashPage />,
});
const employerProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/profile",
  component: () => <EmployerProfilePage />,
});
const postJobRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/post-job",
  component: () => <PostJobPage />,
});
const applicantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employer/jobs/$id/applicants",
  component: () => <ApplicantsPage />,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => <AdminPage />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  workerSignupRoute,
  employerSignupRoute,
  jobsRoute,
  jobDetailRoute,
  workerDashRoute,
  workerProfileRoute,
  employerDashRoute,
  employerProfileRoute,
  postJobRoute,
  applicantsRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
