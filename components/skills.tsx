"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { 
  IconBrandReact, 
  IconBrandTailwind, 
  IconBrandBootstrap, 
  IconPalette, 
  IconBrandPhp, 
  IconBrandLaravel, 
  IconServer, 
  IconBrandNodejs, 
  IconDatabase, 
  IconBrandGit, 
  IconBrandGithub, 
  IconApi, 
  IconBriefcase, 
  IconBrandDocker,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconChartDots3,
  IconBrandFigma,
  IconBrandNextjs,
  IconBrandGitlab
} from "@tabler/icons-react";

const skillCategories = [
  {
    title: "Front End",
    skills: [
      { name: "HTML", icon: <IconBrandHtml5 className="h-8 w-8 text-orange-500" /> },
      { name: "CSS", icon: <IconBrandCss3 className="h-8 w-8 text-blue-500" /> },
      { name: "JavaScript", icon: <IconBrandJavascript className="h-8 w-8 text-yellow-400" /> },
      { name: "TypeScript", icon: <IconBrandTypescript className="h-8 w-8 text-blue-600" /> },
      { name: "React JS", icon: <IconBrandReact className="h-8 w-8 text-blue-500" /> },
      { name: "Next.js", icon: <IconBrandNextjs className="h-8 w-8 text-white" /> },
      { name: "Tailwind CSS", icon: <IconBrandTailwind className="h-8 w-8 text-teal-500" /> },
      { name: "Bootstrap", icon: <IconBrandBootstrap className="h-8 w-8 text-purple-500" /> },
      { name: "Material UI", icon: <IconPalette className="h-8 w-8 text-blue-400" /> },
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "PHP", icon: <IconBrandPhp className="h-8 w-8 text-indigo-500" /> },
      { name: "Laravel", icon: <IconBrandLaravel className="h-8 w-8 text-red-500" /> },
      { name: "Express", icon: <IconServer className="h-8 w-8 text-gray-500" /> },
      { name: "Node.js", icon: <IconBrandNodejs className="h-8 w-8 text-green-500" /> },
      { name: "Apache", icon: <IconServer className="h-8 w-8 text-red-600" /> },
    ],
  },
  {
    title: "Bases de Données",
    skills: [
      { name: "SQL", icon: <IconDatabase className="h-8 w-8 text-blue-600" /> },
      { name: "MySQL", icon: <IconDatabase className="h-8 w-8 text-orange-500" /> },
      { name: "PostgreSQL", icon: <IconDatabase className="h-8 w-8 text-blue-400" /> },
      { name: "MongoDB", icon: <IconDatabase className="h-8 w-8 text-green-600" /> },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Git", icon: <IconBrandGit className="h-8 w-8 text-orange-600" /> },
      { name: "GitHub", icon: <IconBrandGithub className="h-8 w-8 text-gray-400" /> },
      { name: "GitLab", icon: <IconBrandGitlab className="h-8 w-8 text-orange-500" /> },
      { name: "Postman", icon: <IconApi className="h-8 w-8 text-orange-500" /> },
      { name: "Jira", icon: <IconBriefcase className="h-8 w-8 text-blue-500" /> },
      { name: "Docker", icon: <IconBrandDocker className="h-8 w-8 text-blue-600" /> },
      { name: "UML", icon: <IconChartDots3 className="h-8 w-8 text-purple-500" /> },
      { name: "Figma", icon: <IconBrandFigma className="h-8 w-8 text-purple-400" /> },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <TextGenerateEffect words="My Skills" className="text-4xl font-bold mb-4 text-primary" />
          <p className="text-muted-foreground">Here are the technologies and tools I specialize in</p>
        </motion.div>
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-12">
              <motion.h3
                className="text-2xl font-bold mb-8 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1 + categoryIndex * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 bg-card rounded-lg hover:bg-card/80 transition-colors border border-border hover:border-primary"
                  >
                    <div className="mb-4">{skill.icon}</div>
                    <h4 className="text-lg font-semibold mb-2 text-primary">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      Proficient in {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

