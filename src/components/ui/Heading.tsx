import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3;

interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const variants = {
  1: "text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl",
  2: "text-4xl font-bold tracking-tight text-zinc-900",
  3: "text-2xl font-semibold tracking-tight text-zinc-900",
} satisfies Record<HeadingLevel, string>;

export function Heading({ level = 1, children, className }: HeadingProps) {
  if (level === 1) {
    return <h1 className={cn(variants[1], className)}>{children}</h1>;
  }

  if (level === 2) {
    return <h2 className={cn(variants[2], className)}>{children}</h2>;
  }

  return <h3 className={cn(variants[3], className)}>{children}</h3>;
}
