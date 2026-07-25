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
        `
          inline-flex
          items-center
          rounded-full
          border
          border-[color:var(--border)]
          bg-[color:var(--badge-background)]
          px-3
          py-1
          text-sm
          font-medium
          text-[color:var(--badge-foreground)]
        `,
        className,
      )}
    >
      {children}
    </span>
  );
}
