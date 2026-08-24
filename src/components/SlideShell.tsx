import { motion } from "framer-motion";
import type { ReactNode } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

export function SlideShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={`relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-24 pb-28 sm:px-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function AnimItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

/* RevealItem：仅在 revealIndex >= step 时渲染，带入场动画 */
export function RevealItem({
  step,
  revealIndex,
  children,
  className = "",
}: {
  step: number;
  revealIndex: number;
  children: ReactNode;
  className?: string;
}) {
  if (step > revealIndex) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
