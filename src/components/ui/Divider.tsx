import { cn } from "@/lib/cn";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn(
        "w-full border-0 border-t border-[color:var(--border)]",
        className,
      )}
    />
  );
}
