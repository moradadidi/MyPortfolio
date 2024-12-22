"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const About = () => {
  const paragraphs = [
    `Hi, I'm Mourad Adidi, a dedicated Full-Stack Developer with a strong foundation in PHP, Laravel, React.js, and JavaScript. I graduated in 2022 with a Baccalaureate in Life and Earth Sciences, followed by a year of Chemistry at Hassan II University. My journey took an exciting turn as I transitioned to digital development, where I discovered my passion for problem-solving and innovation.`,
    
    `With a keen eye for design and functionality, I strive to create applications that are not only visually appealing but also intuitive and efficient. I am continuously expanding my skill set to stay at the forefront of technology, embracing new challenges and learning opportunities every day. I thrive in collaborative environments where creativity meets technical excellence, and I am committed to delivering solutions that drive value and impact.`
  ];

  return (
    <section id="about" className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 backdrop-blur-sm border-emerald-500/20">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

