import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function SocialLink({ children, className, ...props }: SocialLinkProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "transition-colors hover:text-[color:var(--foreground)] text-[color:var(--muted-foreground)]",
        className,
      )}
    >
      {children}
    </a>
  );
}
