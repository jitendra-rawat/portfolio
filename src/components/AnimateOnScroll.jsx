import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Reusable scroll-triggered animation wrapper.
 *
 * @param {"fadeUp"|"fadeDown"|"fadeLeft"|"fadeRight"|"fadeIn"|"scaleUp"|"slideUp"} variant
 * @param {number}  delay      – stagger delay in seconds (default 0)
 * @param {number}  duration   – animation duration in seconds (default 0.6)
 * @param {number}  amount     – viewport intersection threshold 0-1 (default 0.2)
 * @param {boolean} once       – animate only the first time (default true)
 * @param {string}  className  – extra classes forwarded to the wrapper
 * @param {string}  as         – rendered HTML element tag (default "div")
 */

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
};

const AnimateOnScroll = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  once = true,
  className = "",
  as = "div",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant] || variants.fadeUp}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default AnimateOnScroll;
