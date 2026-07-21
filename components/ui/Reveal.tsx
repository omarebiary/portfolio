"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Single reveal behavior reused across every section, per the animation
 * spec: fades up 10px, 220ms ease-out, fires once (viewport.once = true)
 * so re-scrolling past a section never replays the animation.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
