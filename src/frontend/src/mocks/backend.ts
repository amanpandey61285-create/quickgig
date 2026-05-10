import type { backendInterface, Application, ApplicationStatus, EmployerProfile, Job, PaymentSession, PaymentStatus, WorkerProfile } from "../backend";
import { JobStatus } from "../backend";

const sampleJob: Job = {
  id: "job-001",
  status: JobStatus.open,
  title: "Café Staff Needed",
  duration: "4 hours",
  timing: "9am - 1pm",
  employerPrincipal: { toString: () => "emp-001" } as any,
  createdAt: BigInt(Date.now()),
  skillsRequired: ["Customer Service", "Coffee Making"],
  description: "We need a friendly café assistant for our busy Saturday morning shift.",
  payAmount: BigInt(600),
  category: "Café Staff",
  urgent: true,
  applicationCount: BigInt(3),
  location: "Koramangala, Bangalore",
  workerCount: BigInt(2),
};

const sampleJob2: Job = {
  id: "job-002",
  status: JobStatus.open,
  title: "Event Helper",
  duration: "6 hours",
  timing: "4pm - 10pm",
  employerPrincipal: { toString: () => "emp-002" } as any,
  createdAt: BigInt(Date.now() - 3600000),
  skillsRequired: ["Communication", "Physical Fitness"],
  description: "Help set up and manage a corporate event in the evening.",
  payAmount: BigInt(900),
  category: "Event Worker",
  urgent: false,
  applicationCount: BigInt(5),
  location: "Whitefield, Bangalore",
  workerCount: BigInt(4),
};

const sampleWorker: WorkerProfile = {
  bio: "Enthusiastic student looking for part-time work. Experienced in customer service and event management.",
  completedJobs: BigInt(12),
  principal: { toString: () => "worker-001" } as any,
  displayName: "Riya Sharma",
  hourlyRate: BigInt(150),
  ratings: [],
  availability: true,
  avatarUrl: undefined,
  totalEarnings: BigInt(18000),
  skills: ["Customer Service", "Data Entry", "Event Support"],
};

const sampleEmployer: EmployerProfile = {
  principal: { toString: () => "emp-001" } as any,
  completedHires: BigInt(8),
  businessName: "Brew & Bean Café",
  ratings: [],
  description: "A popular café in Koramangala looking for part-time help on weekends.",
  logoUrl: undefined,
  activeJobCount: BigInt(2),
};

const sampleApplication: Application = {
  id: "app-001",
  status: "pending" as ApplicationStatus,
  appliedAt: BigInt(Date.now() - 7200000),
  jobId: "job-001",
  workerPrincipal: { toString: () => "worker-001" } as any,
};

const samplePaymentSession: PaymentSession = {
  status: "pending" as PaymentStatus,
  employerPrincipal: { toString: () => "emp-001" } as any,
  createdAt: BigInt(Date.now()),
  jobId: "job-001",
  sessionId: "session-001",
  amount: BigInt(2400),
};

export const mockBackend: backendInterface = {
  applyToJob: async (_jobId: string) => sampleApplication,
  createEmployerProfile: async (_input) => sampleEmployer,
  createPaymentSession: async (_input) => samplePaymentSession,
  createWorkerProfile: async (_input) => sampleWorker,
  getApplicationsForJob: async (_jobId: string) => [sampleApplication],
  getEmployerProfile: async (_principal) => sampleEmployer,
  getJob: async (_jobId: string) => sampleJob,
  getJobs: async (_filter, _offset, _limit) => [sampleJob, sampleJob2],
  getJobsByEmployer: async (_principal) => [sampleJob, sampleJob2],
  getMyApplications: async () => [sampleApplication],
  getPaymentSession: async (_sessionId: string) => samplePaymentSession,
  getWorkerProfile: async (_principal) => sampleWorker,
  isAdmin: async () => false,
  markJobComplete: async (_jobId: string, _applicationId: string) => ({ ...sampleJob, status: JobStatus.completed }),
  postJob: async (_input) => sampleJob,
  respondToApplication: async (_applicationId: string, _accept: boolean) => ({ ...sampleApplication, status: "accepted" as ApplicationStatus }),
  submitRating: async (_target, _isWorker, _stars, _comment) => true,
  updateEmployerProfile: async (_input) => sampleEmployer,
  updatePaymentStatus: async (_sessionId: string, _status) => samplePaymentSession,
  updateWorkerProfile: async (_input) => sampleWorker,
};
