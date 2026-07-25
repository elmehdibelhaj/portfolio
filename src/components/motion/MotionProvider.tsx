import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </MotionConfig>
  );
}
