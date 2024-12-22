"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    quote: "Morad is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
    author: "Sarah Johnson",
    position: "Project Manager at TechCorp",
  },
  {
    quote: "Working with Morad was a pleasure. He's not only technically proficient but also a great communicator and team player.",
    author: "Alex Chen",
    position: "CTO at StartupX",
  },
  {
    quote: "Morad's ability to quickly grasp complex concepts and translate them into elegant code is remarkable. He's an asset to any development team.",
    author: "Emily Rodriguez",
    position: "Lead Developer at InnovateTech",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800"
            >
              <IconQuote className="text-primary mb-4" size={32} />
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-primary font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

