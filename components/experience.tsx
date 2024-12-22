import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Développement d'une Application Web",
      company: "OFPPT",
      period: "Janv. 2023 - En cours",
      description: "Création d'une application web pour la vente de produits et la gestion de tâches.",
    },
    {
      title: "Participation au Hackathon 2024",
      company: "OFPPT - ISGI",
      period: "Avr. 2024 - Avr. 2024",
      description: "Créé une plateforme de networking lors du hackathon. Récompense : 3ème prix",
    },
    {
      title: "Développeur Full-Stack",
      company: "Projet Personnel",
      period: "Mai. 2024 - Juin. 2024",
      description: "Développement complet d'une application web utilisant HTML, CSS, JavaScript, Bootstrap, TailwindCSS, PHP et MySQL.",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold flex items-center">
        My Experience
        <ArrowUpRight className="ml-2 h-5 w-5 text-purple-500" />
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-gray-800">
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-purple-400">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

