"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90" />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${Math.random() * 100}% ${
              Math.random() * 100
            }%, rgba(16, 185, 129, 0.1) 0%, transparent 80%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

