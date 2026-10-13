import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function MaskedLines({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.13,
  inView = false,
}) {
  const parent = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child = {
    hidden: { y: "115%", opacity: 0, filter: "blur(8px)" },
    visible: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: EASE },
    },
  };
  const trigger = inView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.3 } }
    : { animate: "visible" };
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            variants={child}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function FadeUp({ children, className = "", delay = 0, y = 36, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
