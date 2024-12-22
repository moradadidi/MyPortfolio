"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-slate-800 dark:bg-slate-800/[0.8]"
            initial={false}
            animate={{
              scale: hoveredIndex === idx ? 1.05 : 1,
              opacity: hoveredIndex === idx ? 1 : 0.3,
            }}
          ></motion.div>
          <div className="relative z-10 p-5 h-full w-full flex flex-col justify-center items-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

