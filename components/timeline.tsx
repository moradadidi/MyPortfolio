"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";

const timelineData = [
  {
    type: "experience",
    title: "Développement d'une Application Web",
    organization: "OFPPT",
    period: "Janv. 2023 - En cours",
    description: "Création d'une application web pour la vente de produits et la gestion de tâches.",
    icon: <IconBriefcase className="w-6 h-6" />,
  },
  {
    type: "education",
    title: "Développement Digital",
    organization: "CFPMS",
    period: "Juin. 2023 - En cours",
    location: "Casablanca, Maroc",
    icon: <IconSchool className="w-6 h-6" />,
  },
  {
    type: "experience",
    title: "Participation au Hackathon 2024",
    organization: "OFPPT - ISGI",
    period: "Avr. 2024 - Avr. 2024",
    description: "Créé une plateforme de networking lors du hackathon. Récompense : 3ème prix",
    icon: <IconBriefcase className="w-6 h-6" />,
  },
  {
    type: "education",
    title: "Chimie",
    organization: "Université Hassan II",
    period: "Oct. 2022 - Sept. 2023",
    location: "Casablanca, Maroc",
    icon: <IconSchool className="w-6 h-6" />,
  },
  {
    type: "experience",
    title: "Développeur Full-Stack",
    organization: "Projet Personnel",
    period: "Mai. 2024 - Juin. 2024",
    description: "Développement complet d'une application web utilisant HTML, CSS, JavaScript, Bootstrap, TailwindCSS, PHP et MySQL.",
    icon: <IconBriefcase className="w-6 h-6" />,
  },
  {
    type: "education",
    title: "Sciences de la Vie et de la Terre (SVT)",
    organization: "College Molay Ismaail",
    period: "Oct. 2021 - Sept. 2022",
    location: "SIDI HAJJAJ OUD HASSAR, Maroc",
    icon: <IconSchool className="w-6 h-6" />,
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-emerald-500/20" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Mobile timeline dot */}
                <div className="absolute left-4 md:hidden w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10 -translate-x-1/2">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <h3 className="text-xl font-bold text-emerald-500">{item.title}</h3>
                    </div>
                    <p className="text-lg text-emerald-400 mb-2">{item.organization}</p>
                    <p className="text-gray-400 mb-2">{item.period}</p>
                    {item.description && (
                      <p className="text-gray-300">{item.description}</p>
                    )}
                    {item.location && (
                      <p className="text-gray-400">{item.location}</p>
                    )}
                  </div>
                </div>

                {/* Desktop timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

