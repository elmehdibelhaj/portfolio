import type { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        relative
        inline-block
        cursor-pointer
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
      "
    >
      {children}
    </a>
  );
}
