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
        `
          relative
          inline-block
          cursor-pointer
          text-[color:var(--muted)]
          transition-colors
          duration-200
          ease-out

          hover:text-[color:var(--accent)]

          after:absolute
          after:left-0
          after:bottom-[-2px]
          after:h-px
          after:w-0
          after:bg-[color:var(--accent)]
          after:content-['']
          after:transition-all
          after:duration-200
          after:ease-out

          hover:after:w-full
        `,
        className,
      )}
    >
      {children}
    </a>
  );
}
