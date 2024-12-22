"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  particleShape?: "circle" | "square" | "triangle" | "star";
  overflow?: "visible" | "hidden";
  children?: React.ReactNode;
};

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className,
  particleColor = "#FFF",
  particleShape = "circle",
  overflow = "hidden",
  children,
}: SparklesProps) => {
  const [particlesContainer, setParticlesContainer] = useState<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setParticlesContainer(containerRef.current);
    }
  }, []);

  useEffect(() => {
    const initParticles = async () => {
      if (particlesContainer) {
        try {
          const tsParticles = (await import("tsparticles-engine")).tsParticles;
          const { loadSlim } = await import("tsparticles-slim");

          await loadSlim(tsParticles);

          await tsParticles.load(id, {
            fullScreen: { enable: false },
            background: {
              color: {
                value: background,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: particleColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: particleDensity,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: particleShape,
              },
              size: {
                value: { min: minSize, max: maxSize },
              },
            },
            detectRetina: true,
          });

          console.log("Particles initialized successfully");
        } catch (error) {
          console.error("Failed to initialize particles:", error);
        }
      }
    };

    initParticles();
  }, [id, background, particleColor, particleDensity, particleShape, minSize, maxSize, particlesContainer]);

  return (
    <div ref={containerRef} className={cn("w-full h-full relative", className)}>
      <div id={id} className="absolute inset-0" style={{ overflow }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

