import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface Rating {
    createdAt: Timestamp;
    comment?: string;
    stars: bigint;
    fromPrincipal: UserId;
}
export interface Application {
    id: string;
    status: ApplicationStatus;
    appliedAt: Timestamp;
    jobId: string;
    workerPrincipal: UserId;
}
export interface JobInput {
    title: string;
    duration: string;
    timing: string;
    skillsRequired: Array<string>;
    description: string;
    payAmount: bigint;
    category: string;
    urgent: boolean;
    location: string;
    workerCount: bigint;
}
export interface PaymentSession {
    status: PaymentStatus;
    employerPrincipal: UserId;
    createdAt: Timestamp;
    jobId: string;
    sessionId: string;
    amount: bigint;
}
export interface JobFilter {
    status?: JobStatus;
    category?: string;
    urgent?: boolean;
}
export interface PaymentSessionInput {
    jobId: string;
    amount: bigint;
}
export type UserId = Principal;
export interface Job {
    id: string;
    status: JobStatus;
    title: string;
    duration: string;
    timing: string;
    employerPrincipal: UserId;
    createdAt: Timestamp;
    skillsRequired: Array<string>;
    description: string;
    payAmount: bigint;
    category: string;
    urgent: boolean;
    applicationCount: bigint;
    location: string;
    workerCount: bigint;
}
export interface WorkerProfile {
    bio: string;
    completedJobs: bigint;
    principal: UserId;
    displayName: string;
    hourlyRate: bigint;
    ratings: Array<Rating>;
    availability: boolean;
    avatarUrl?: string;
    totalEarnings: bigint;
    skills: Array<string>;
}
export interface EmployerProfileInput {
    businessName: string;
    description: string;
    logoUrl?: string;
}
export interface WorkerProfileInput {
    bio: string;
    displayName: string;
    hourlyRate: bigint;
    availability: boolean;
    avatarUrl?: string;
    skills: Array<string>;
}
export interface EmployerProfile {
    principal: UserId;
    completedHires: bigint;
    businessName: string;
    ratings: Array<Rating>;
    description: string;
    logoUrl?: string;
    activeJobCount: bigint;
}
export enum ApplicationStatus {
    pending = "pending",
    completed = "completed",
    rejected = "rejected",
    accepted = "accepted"
}
export enum JobStatus {
    closed = "closed",
    open = "open",
    completed = "completed"
}
export enum PaymentStatus {
    pending = "pending",
    completed = "completed"
}
export interface backendInterface {
    applyToJob(jobId: string): Promise<Application | null>;
    createEmployerProfile(input: EmployerProfileInput): Promise<EmployerProfile>;
    createPaymentSession(input: PaymentSessionInput): Promise<PaymentSession>;
    createWorkerProfile(input: WorkerProfileInput): Promise<WorkerProfile>;
    getApplicationsForJob(jobId: string): Promise<Array<Application>>;
    getEmployerProfile(principal: UserId): Promise<EmployerProfile | null>;
    getJob(jobId: string): Promise<Job | null>;
    getJobs(filter: JobFilter, offset: bigint, limit: bigint): Promise<Array<Job>>;
    getJobsByEmployer(employerPrincipal: UserId): Promise<Array<Job>>;
    getMyApplications(): Promise<Array<Application>>;
    getPaymentSession(sessionId: string): Promise<PaymentSession | null>;
    getWorkerProfile(principal: UserId): Promise<WorkerProfile | null>;
    isAdmin(): Promise<boolean>;
    markJobComplete(jobId: string, applicationId: string): Promise<Job | null>;
    postJob(input: JobInput): Promise<Job>;
    respondToApplication(applicationId: string, accept: boolean): Promise<Application | null>;
    submitRating(targetPrincipal: UserId, isWorker: boolean, stars: bigint, comment: string | null): Promise<boolean>;
    updateEmployerProfile(input: EmployerProfileInput): Promise<EmployerProfile | null>;
    updatePaymentStatus(sessionId: string, status: PaymentStatus): Promise<PaymentSession | null>;
    updateWorkerProfile(input: WorkerProfileInput): Promise<WorkerProfile | null>;
}
