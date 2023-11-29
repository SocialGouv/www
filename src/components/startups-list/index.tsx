"use client"

import { useState } from "react"

import Item from "./item"
import Filters from "./filters"
import getStartups, { type Startup } from "@/utils/get-startups"

type Titles = {
  [key: string]: number | string
}

const titles: Titles = {
  travail: "Travail, Emploi & Formation Professionnelle",
  "solidarite-sante": "Santé & Cohésion Sociale",
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

  function handleClick(phase: string) {
    if (phase === selectedPhase) {
      setSelectedPhase(undefined)
    } else {
      setSelectedPhase(phase)
    }
  }

  return (
    <div className="startups relative">
      <Filters onClick={handleClick} selectedPhase={selectedPhase} />
      <div className="list flex flex-col gap-12">
        {Object.entries(groupedStartups).map(([domain, startups]) => (
          <section key={`group-${domain}`} className="mt-6">
            <h2 className="fr-h2 mb-12 fabnum-title--h3">
              {getGroupTitle(domain)}
            </h2>
            <div className="grid grid-cols-4 gap-x-6 gap-y-8 mx-12">
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
