import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeadingElement = "h1" | "h2" | "h3";

interface HeadingProps {
  as?: HeadingElement;
  children: ReactNode;
  className?: string;
}

const variants = {
  h1: "text-5xl font-bold tracking-tight text-[color:var(--foreground)] md:text-7xl",
  h2: "text-4xl font-bold tracking-tight text-[color:var(--foreground)]",
  h3: "text-2xl font-semibold tracking-tight text-[color:var(--foreground)]",
} satisfies Record<HeadingElement, string>;

export function Heading({ as = "h1", children, className }: HeadingProps) {
  const Component = as;

  return (
    <Component className={cn(variants[as], className)}>{children}</Component>
  );
}
