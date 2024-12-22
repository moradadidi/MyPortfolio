"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development...",
    date: "2024-03-15",
    slug: "future-of-web-development-2024",
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt: "Learn how to boost your React application's performance with these advanced optimization strategies...",
    date: "2024-02-28",
    slug: "optimizing-react-performance",
  },
  {
    title: "Building Scalable Backend Systems with Node.js",
    excerpt: "Discover best practices for creating robust and scalable backend architectures using Node.js...",
    date: "2024-02-10",
    slug: "scalable-backend-nodejs",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 text-sm">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

