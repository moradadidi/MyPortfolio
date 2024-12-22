"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 },
    });
  }, [controls]);

  return (
    <motion.div className={className} initial={{ opacity: 0 }} animate={controls}>
      {words.split(" ").map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

