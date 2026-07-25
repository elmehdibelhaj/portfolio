import { cn } from "@/lib/cn";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants: Record<Variant, string> = {
  primary: `
    bg-[color:var(--accent)]
    text-[color:var(--accent-foreground)]
    hover:bg-[color:var(--accent-hover)]
    focus-visible:ring-[color:var(--focus-ring)]
    focus-visible:ring-offset-2
  `,

  secondary: `
    border
    border-[color:var(--border)]
    bg-[color:var(--button-secondary-background)]
    text-[color:var(--button-secondary-foreground)]
    hover:border-[color:var(--accent)]
    hover:text-[color:var(--accent)]
    focus-visible:ring-[color:var(--focus-ring)]
    focus-visible:ring-offset-2
  `,
};

const baseClasses = `
  inline-flex
  items-center
  justify-center
  rounded-xl
  px-7
  py-3
  text-sm
  font-medium
  transition-colors
  duration-300
  ease-in-out
  focus-visible:outline-none
  focus-visible:ring-2
`;

export function Button(props: ButtonProps) {
  const classes = cn(
    baseClasses,
    variants[props.variant ?? "primary"],
    props.className,
  );

  if (props.as === "a") {
    const { as, variant, className, children, ...anchorProps } = props;

    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const {
    as,
    variant,
    className,
    children,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
