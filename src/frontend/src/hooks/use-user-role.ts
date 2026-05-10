import { useUserStore } from "@/store/user-store";
import { useEffect } from "react";
import { useAuth } from "./use-auth";

export type UserRole = "worker" | "employer" | "admin" | null;

export function useUserRole() {
  const { isAuthenticated } = useAuth();
  const { role, setRole } = useUserStore();

  useEffect(() => {
    if (!isAuthenticated) {
      setRole(null);
    }
  }, [isAuthenticated, setRole]);

  return {
    role,
    isLoading: false,
    setRole,
  };
}
