import { motion } from "motion/react";
import type { ReactNode } from "react";

import { scaleIn } from "@/lib/motion";

interface ScaleProps {
  children: ReactNode;
  className?: string;
}

export function Scale({ children, className }: ScaleProps) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}
