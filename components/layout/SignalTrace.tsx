"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * The site's signature element: a scroll-bound trace line.
 *
 * On desktop it runs down the left margin like a PCB/oscilloscope trace.
 * On narrow viewports it becomes a horizontal bar fixed to the top --
 * same metaphor (signal progress), reoriented for the layout.
 *
 * Bound directly to scrollYProgress rather than time, per the animation
 * spec: this is a status indicator, not a decorative flourish. A light
 * spring smooths sub-pixel scroll jitter without adding perceptible lag.
 */
export default function SignalTrace() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-40 h-1 w-full bg-hairline/40 md:h-full md:w-[3px]"
    >
      <motion.div
        className="h-full w-full origin-left bg-trace md:origin-top"
        style={{ scaleX: scaleY, scaleY: scaleY }}
      />
    </div>
  );
}
