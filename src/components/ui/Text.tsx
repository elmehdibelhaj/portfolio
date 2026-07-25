import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextSize = "sm" | "md" | "lg";

interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  muted?: boolean;
  className?: string;
}

const variants = {
  sm: "text-sm leading-6",
  md: "text-sm md:text-base leading-7 md:leading-8",
  lg: "text-base md:text-lg leading-8 md:leading-9",
} satisfies Record<TextSize, string>;

export function Text({
  children,
  size = "md",
  muted = false,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        variants[size],
        muted ? "text-[color:var(--muted)]" : "text-[color:var(--foreground)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
