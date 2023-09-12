"use client"

import { useState } from "react"

import Item from "./item"
import Filters from "./filters"
import getStartups, { type Startup } from "@/utils/get-startups"

type Titles = {
  [key: string]: number | string
}

const titles: Titles = {
  travail: "Travail",
  "solidarite-sante": "Santé & Solidarité",
}

type groupedStartups = Record<keyof Titles, Startup[]>

function getGroupTitle(domain: string) {
  return titles[domain] ? titles[domain] : domain
}

export default function StartupsList() {
  const startups = getStartups()
  const [selectedPhase, setSelectedPhase] = useState<string>()

  const filteredStartups = selectedPhase
    ? startups.filter(
        ({ attributes: { phases } }) =>
          phases.slice(-1).pop()?.name === selectedPhase
      )
    : startups

  const groupedStartups = filteredStartups.reduce((groups, startup) => {
    const {
      attributes: {
        organisation: { domaine_ministeriel },
      },
    } = startup

    if (!groups[domaine_ministeriel]) {
      groups[domaine_ministeriel] = []
    }
    groups[domaine_ministeriel].push(startup)

    return groups
  }, {} as groupedStartups)

  return (
    <div className="startups">
      <Filters onClick={setSelectedPhase} selectedPhase={selectedPhase} />
      <div className="list">
        {Object.entries(groupedStartups).map(([domain, startups]) => (
          <section key={`group-${domain}`} className="fr-mt-6w">
            <h2 className="fr-h2">{getGroupTitle(domain)}</h2>
            <div className="grid grid-cols-4 gap-6">
              {startups.map((startup) => (
                <Item key={startup.id} startup={startup} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
