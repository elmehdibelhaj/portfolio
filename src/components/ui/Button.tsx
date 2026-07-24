import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: `
      bg-[color:var(--foreground)]
      text-white

      hover:bg-[color:var(--accent)]

      focus-visible:ring-[color:var(--accent)]
    `,

  secondary: `
      border
      border-[color:var(--border)]

      bg-white
      text-[color:var(--foreground)]

      hover:border-[color:var(--accent)]
      hover:text-[color:var(--accent)]

      focus-visible:ring-[color:var(--accent)]
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
        "inline-flex cursor-pointer items-center justify-center rounded-xl px-6 py-3",
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
