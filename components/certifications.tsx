"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconAward, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const certifications = [
  {
    title: "React JS Tutorial",
    issuer: "Great Learning",
    date: "août 2024",
    skills: ["TypeScript", "React.js"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.mygreatlearning.com_certificate_BYNAQDVA-lObJ56819ZA5Fh8MJn5zPcpCj63EI7.png",
    link: "https://olympus.mygreatlearning.com/courses/52045/certificate?pb_id=581",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "juin 2024",
    skills: ["JavaScript"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yM6WqtKdXAWC6VHui0m3spDYdgmi5w.png",
    link: "https://www.credly.com/badges/22f0ca48-9cfc-4ca0-b1ad-1f9116021bef/linked_in_profile",
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "juin 2024",
    skills: ["JavaScript"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wecAWolycQluY7rhq6ahksxkCBt5Gr.png",
    link: "https://www.credly.com/badges/b60e59b3-51f0-4bf1-a223-de4bd1e102cd/linked_in_profile",
  },
  {
    title: "Introduction to CyberSecurity",
    issuer: "Cisco",
    date: "juin 2024",
    skills: ["Cybersecurity"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHzza4rxJdqZ50cPwT84aB1Q3pWhiQ.png",
    link: "https://www.credly.com/badges/7bc80935-6a1c-4952-bdab-2023035a80ed/public_url",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "juin 2024",
    skills: ["Hardware", "IT"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YTyqzEF5ms5Dc2k8zlHkwV94gJ8eO7.png",
    link: "https://www.credly.com/badges/fd815e7a-8ca7-459a-a8d9-2cadd3926043/public_url",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "juin 2024",
    skills: ["Data Science", "Analytics"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oTm7EVOHhVIY4IoqkzzsoY5vUSzXUM.png",
    link: "https://www.credly.com/badges/10aac22a-3a96-4bcf-9e34-3c5bcbed6d06/public_url",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    date: "juin 2024",
    skills: ["Python"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IeKMXtIg0vSO3zfwHDsvvFMdTdMYju.png",
    link: "https://www.credly.com/badges/c8b9347d-abf0-4005-a4e0-e9d2e75a607a/linked_in_profile",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco",
    date: "févr. 2024",
    skills: ["Python"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IeKMXtIg0vSO3zfwHDsvvFMdTdMYju.png",
    link: "https://www.credly.com/badges/c7c443e6-77fc-4c16-92a3-a35fd71da4e1/linked_in_profile",
  },
  {
    title: "Relational Database",
    issuer: "freeCodeCamp",
    date: "juin 2024",
    skills: ["PostgreSQL", "MySQL", "Git"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.freecodecamp.org_certification_morad_adidi_relational-database-v8-agxEHMOIKd2sDPRPelHpIWeSPD6O5v.png",
    link: "https://www.freecodecamp.org/certification/morad_adidi/relational-database-v8",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-primary animate-gradient flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <IconAward className="mr-2 text-primary" /> Certifications
        </motion.h2>
        <InfiniteMovingCards
          items={certifications.map((cert) => ({
            title: cert.title,
            description: (
              <>
                <p className="text-primary mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            ),
            image: cert.image,
          }))}
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 hover:border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                  {cert.title}
                  <IconExternalLink className="ml-2 w-4 h-4" />
                </h3>
                <p className="text-green-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

