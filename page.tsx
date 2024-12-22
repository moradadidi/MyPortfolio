import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl p-4">
        <Header />
        <main className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <Hero />
            <div className="mt-12">
              <Projects />
            </div>
          </div>
          <div className="space-y-12">
            <Experience />
            <Education />
          </div>
        </main>
      </div>
    </div>
  )
}

