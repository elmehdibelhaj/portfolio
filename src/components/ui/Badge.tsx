import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
