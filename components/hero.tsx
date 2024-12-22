"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  IconMail, 
  IconPhone, 
  IconUser, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconFileDownload, 
  IconCode, 
  IconServer,
  IconBrandMongodb
} from "@tabler/icons-react";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";

export const Hero = () => {
  const profileImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixlr-image-generator-742fc640-e980-4071-ba66-2af819c32171%20(1).png-CIY2capyvz3GhS2C9qabHJm66Mw6rf.webp";

  const technologies = [
    { icon: <IconCode className="w-6 h-6" />, name: "Frontend" },
    { icon: <IconServer className="w-6 h-6" />, name: "Backend" },
    { icon: <IconBrandMongodb className="w-6 h-6" />, name: "MERN Stack" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Morad_Adidi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden py-20 lg:py-0">
      <BackgroundBeams />
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
                Morad Adidi
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-500 font-semibold">
                Full Stack Developer
              </p>
              <TextGenerateEffect 
                words="Crafting Digital Experiences" 
                className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"
              />
              <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                Technicien Spécialisé en Développement Digital Full Stack Créatif, doté d'un esprit d'analyse, 
                curieux et passionné par l'informatique.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300">
                <IconMail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">moradadidi6@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <IconPhone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">0634728767</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <IconUser className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">16/06/2004</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
              >
                <IconFileDownload className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <a 
                href="https://github.com/moradadidi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <IconBrandGithub className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/morad-adidi-b35a682a5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <IconBrandLinkedin className="w-6 h-6 text-white" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/20 via-emerald-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow animation-delay-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/20">
              <Image
                src={profileImage}
                alt="Morad Adidi"
                fill
                className="object-cover scale-110"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 400px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold text-center">
                  FullStack Developer
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-emerald-500 rounded-full blur-lg animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-emerald-500 rounded-full blur-lg animate-pulse-slow animation-delay-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

