import { motion } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
