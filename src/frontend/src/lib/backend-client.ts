import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";

/**
 * Re-export createActor and useActor for convenient use in hooks.
 * All data operations go through the actor — never localStorage as primary source.
 */
export { createActor, useActor };

/** Unwrap an ICRC Option<T> returned as { __kind__: "Some"; value: T } | { __kind__: "None" } */
export function unwrapOption<T>(
  opt: { __kind__: "Some"; value: T } | { __kind__: "None" } | undefined | null,
): T | null {
  if (!opt) return null;
  if (opt.__kind__ === "Some") return opt.value;
  return null;
}

/** Convert nanosecond bigint timestamp to JS Date */
export function nsToDate(ns: bigint): Date {
  return new Date(Number(ns / 1_000_000n));
}

/** Format a nanosecond timestamp as a relative time string */
export function timeAgo(ns: bigint): string {
  const ms = Date.now() - Number(ns / 1_000_000n);
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

/** Format ICP amount from nat (e8s) to human-readable string */
export function formatAmount(nat: bigint | number): string {
  const n = typeof nat === "bigint" ? Number(nat) : nat;
  if (n >= 1000) return `₹${(n / 100).toFixed(0)}`;
  return `₹${n}`;
}
