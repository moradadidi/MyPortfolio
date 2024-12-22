import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Timeline } from "@/components/timeline"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

