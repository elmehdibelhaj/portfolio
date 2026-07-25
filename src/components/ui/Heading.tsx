import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeadingElement = "h1" | "h2" | "h3";

interface HeadingProps {
  as?: HeadingElement;
  id?: string;
  children: ReactNode;
  className?: string;
}

const variants = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[color:var(--foreground)]",
  h2: "text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--foreground)]",
  h3: "text-xl sm:text-2xl font-semibold tracking-tight text-[color:var(--foreground)]",
} satisfies Record<HeadingElement, string>;

export function Heading({ as = "h1", id, children, className }: HeadingProps) {
  const Component = as;

  return (
    <Component id={id} className={cn(variants[as], className)}>
      {children}
    </Component>
  );
}
