import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: `
    bg-[color:var(--accent)]
    text-[color:var(--accent-foreground)]
    hover:bg-[color:var(--accent-hover)]
    focus-visible:ring-[color:var(--focus-ring)]
  `,

  secondary: `
    border
    border-[color:var(--border)]
    bg-[color:var(--button-secondary-background)]
    text-[color:var(--button-secondary-foreground)]
    hover:border-[color:var(--accent)]
    hover:text-[color:var(--accent)]
    focus-visible:ring-[color:var(--focus-ring)]
  `,
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex cursor-pointer items-center justify-center rounded-xl px-7 py-3",
        "text-sm font-medium transition-colors duration-300 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
