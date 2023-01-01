import { motion, spring } from "framer-motion";
import React from "react";

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -100 },
};
function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.17,
        // type: "spring",
        // mass: 3,
        delay: 0.2,
        bounce: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
