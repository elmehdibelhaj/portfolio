import type { CSSProperties } from "react";
import type { SimpleIcon } from "simple-icons";

interface TechIconProps {
  icon: SimpleIcon;
  href: string;
}

export function TechIcon({ icon, href }: TechIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.title}
      title={icon.title}
      className="tech-icon"
      style={
        {
          "--brand-color": `#${icon.hex}`,
        } as CSSProperties
      }
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
    </a>
  );
}
