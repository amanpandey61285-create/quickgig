import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useCallback } from "react";

export function useAuth() {
  const {
    identity,
    loginStatus,
    login,
    clear,
    isAuthenticated,
    isInitializing,
  } = useInternetIdentity();

  const isLoading = isInitializing;

  const principal = identity?.getPrincipal();

  const logout = useCallback(() => {
    clear();
  }, [clear]);

  return {
    identity,
    isAuthenticated,
    isLoading,
    loginStatus,
    principal,
    login,
    logout,
  };
}
