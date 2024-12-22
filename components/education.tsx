import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: "Développement Digital",
      school: "CFPMS",
      period: "Juin. 2023 - En cours",
      location: "Casablanca, Maroc",
    },
    {
      degree: "Chimie",
      school: "Université Hassan II",
      period: "Oct. 2022 - Sept. 2023",
      location: "Casablanca, Maroc",
    },
    {
      degree: "Sciences de la Vie et de la Terre (SVT)",
      school: "College Molay Ismaail",
      period: "Oct. 2021 - Sept. 2022",
      location: "SIDI HAJJAJ OUD HASSAR, Maroc",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold flex items-center">
        My Education
        <GraduationCap className="ml-2 h-5 w-5 text-purple-500" />
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="bg-gray-800">
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-purple-400">{edu.school}</p>
              <p className="text-sm text-gray-400">{edu.period}</p>
              <p className="text-sm text-gray-400">{edu.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

