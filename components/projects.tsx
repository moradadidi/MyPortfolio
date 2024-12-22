"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "Travel Management System",
    description: "A comprehensive travel management dashboard with booking system, route planning, and analytics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LyRobbIyoFqzqIxGTJCk5MyEKNDgwy.png",
    github: "https://github.com/moradadidi",
    live: "https://travel-management.example.com",
    tags: ["Python", "MySQL", "Data Analytics"],
  },
  {
    title: "Social Media Platform",
    description: "A streamlined platform focusing on connecting users through posts and following.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interface-hCvaeP7lsD6s8tCFq1RLbUu7dwdrPJ.png",
    github: "https://github.com/moradadidi/shamories",
    live: "https://social-media-platform.example.com",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with product categories, user authentication, and shopping cart functionality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-19%20022928-c1GbgBvJKiuVh3evZXXLQqQpXAeXZN.png",
    github: "https://github.com/moradadidi/react_shop",
    live: "https://ecommerce-platform.example.com",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "E-commerce Website",
    description: "A comprehensive e-commerce solution with secure payment integration and admin dashboard.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-19%20023320-lwqcbF9usXs2S8KkYIxq54VtTjrLow.png",
    github: "https://github.com/moradadidi/monasabat",
    live: "https://ecommerce-website.example.com",
    tags: ["PHP", "MySQL"],
  },
  {
    title: "Employee Attendance Tracker",
    description: "An efficient system for monitoring and managing employee attendance and time.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iV4HdqkRVH7VaxzCd7FJYmKMiIciZj.png",
    github: "https://github.com/moradadidi",
    live: "https://attendance-tracker.example.com",
    tags: ["Python", "MySQL"],
  },
  {
    title: "Application Web OFPPT",
    description: "Hackathon project: Web application for product sales and task management.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ofppt-copains-JbUSHOyfKKVS5cELEwhlMjQWD9x0nr.png",
    github: "https://github.com/moradadidi",
    live: "https://ofppt-web-app.example.com",
    tags: ["PHP", "MySQL"],
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400">Here are some of my recent works</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tag
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              } transition-colors`}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-emerald-500/10 p-2 rounded-full backdrop-blur-sm hover:bg-emerald-500/20 transition-colors"
                    >
                      <IconBrandGithub className="w-6 h-6 text-emerald-500" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-emerald-500/10 p-2 rounded-full backdrop-blur-sm hover:bg-emerald-500/20 transition-colors"
                    >
                      <IconExternalLink className="w-6 h-6 text-emerald-500" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

