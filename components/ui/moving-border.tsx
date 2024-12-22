"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
HTMLButtonElement,
React.ButtonHTMLAttributes<HTMLButtonElement> & {
  borderRadius?: string;
}
>(({ className, children, borderRadius = "1.75rem", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative text-xl transition-all duration-300",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center w-full h-full text-base font-medium">
        {children}
      </span>
    </button>
  );
});

Button.displayName = "Button";

