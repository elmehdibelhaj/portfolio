import { motion } from "motion/react";
import type { ReactNode } from "react";

import { fadeIn } from "@/lib/motion";

interface FadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Fade({ children, delay = 0, className }: FadeProps) {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
