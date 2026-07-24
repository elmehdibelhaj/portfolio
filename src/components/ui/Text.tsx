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
  md: "text-base leading-7",
  lg: "text-lg leading-8",
} satisfies Record<TextSize, string>;

export function Text({ children, size = "md", muted = false, className }: TextProps) {
  return (
    <p className={cn(variants[size], muted ? "text-zinc-600" : "text-zinc-900", className)}>
      {children}
    </p>
  );
}
