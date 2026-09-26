import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Container that staggers its children's entrance animation on scroll.
 *
 * Each direct child should be a motion-compatible element or wrapped
 * in AnimateOnScroll with a `delay` based on its index.
 *
 * @param {number}  stagger    – delay between each child (default 0.1)
 * @param {number}  duration   – per-child animation duration (default 0.5)
 * @param {number}  amount     – viewport intersection threshold (default 0.15)
 * @param {boolean} once       – animate only the first time (default true)
 * @param {string}  className  – extra classes forwarded to the wrapper
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (stagger) => ({
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  }),
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (duration) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const StaggerContainer = ({
  children,
  stagger = 0.1,
  duration = 0.5,
  amount = 0.15,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      custom={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Wrap each child inside StaggerContainer with this for automatic stagger. */
export const StaggerItem = ({ children, duration = 0.5, className = "" }) => (
  <motion.div variants={childVariants} custom={duration} className={className}>
    {children}
  </motion.div>
);

export default StaggerContainer;
