import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}
