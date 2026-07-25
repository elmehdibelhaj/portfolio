import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface NavItemProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export function NavItem({
  href,
  children,
  onClick,
  active = false,
}: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        `
          relative
          inline-block
          cursor-pointer
          transition-colors
          duration-200
          ease-out

          after:absolute
          after:left-0
          after:bottom-[-2px]
          after:h-px
          after:bg-[color:var(--accent)]
          after:content-['']
          after:transition-all
          after:duration-200
          after:ease-out
        `,
        active
          ? `
              text-[color:var(--accent)]
              after:w-full
            `
          : `
              hover:text-[color:var(--accent)]
              after:w-0
              hover:after:w-full
            `,
      )}
    >
      {children}
    </a>
  );
}
