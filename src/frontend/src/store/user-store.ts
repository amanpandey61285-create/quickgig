import type { UserRole } from "@/hooks/use-user-role";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WorkerProfile {
  principal: string;
  displayName: string;
  bio: string;
  skills: string[];
  hourlyRate: number;
  availability: boolean;
  avatarUrl?: string;
  completedJobs: number;
  totalEarnings: number;
  ratings: Rating[];
}

export interface EmployerProfile {
  principal: string;
  businessName: string;
  description: string;
  logoUrl?: string;
  activeJobCount: number;
  completedHires: number;
  ratings: Rating[];
}

export interface Rating {
  fromPrincipal: string;
  stars: number;
  comment?: string;
  createdAt: number;
}

interface UserState {
  role: UserRole;
  workerProfile: WorkerProfile | null;
  employerProfile: EmployerProfile | null;
  setRole: (role: UserRole) => void;
  setWorkerProfile: (profile: WorkerProfile | null) => void;
  setEmployerProfile: (profile: EmployerProfile | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: null,
      workerProfile: null,
      employerProfile: null,
      setRole: (role) => set({ role }),
      setWorkerProfile: (workerProfile) => set({ workerProfile }),
      setEmployerProfile: (employerProfile) => set({ employerProfile }),
      clearUser: () =>
        set({ role: null, workerProfile: null, employerProfile: null }),
    }),
    {
      name: "quickgig-user-store",
    },
  ),
);
