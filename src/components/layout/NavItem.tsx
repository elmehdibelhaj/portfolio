import type { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

export function NavItem({ href, children }: NavItemProps) {
  return (
    <a
      href={href}
      className="
        text-sm
        font-medium
        text-[color:var(--foreground)]
        transition-colors
        hover:text-[color:var(--muted)]
      "
    >
      {children}
    </a>
  );
}
