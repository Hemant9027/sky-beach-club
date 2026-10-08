import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { cn } from "../utils/cn";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* Fade-up reveal on scroll into view */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Masked line reveal for headlines — inline mode for use inside h1/h2 */
export function LineReveal({
  children,
  delay = 0,
  className = "",
  inline = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  inline?: boolean;
}) {
  const reduce = useReducedMotion();
  if (inline) {
    return (
      <span className={`block overflow-hidden ${className}`}>
        <motion.span
          className="block"
          initial={reduce ? false : { y: "110%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-6% 0px" }}
          transition={{ duration: 1.1, delay, ease: EASE }}
        >
          {children}
        </motion.span>
      </span>
    );
  }
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={reduce ? false : { y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-6% 0px" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Subtle parallax for full-bleed imagery */
export function Parallax({
  children,
  amount = 60,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [amount, -amount],
  );
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[12%] -bottom-[12%]"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Staggered children container */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};
