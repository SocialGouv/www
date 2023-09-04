"use client"

import { useState } from "react"

import Item from "./item"
import Filters from "./filters"
import getStartups from "@/utils/get-startups"

export default function StartupsList() {
  const startups = getStartups()
  const [selectedPhase, setSelectedPhase] = useState<string>()

  function handleClick(phase: string) {
    setSelectedPhase(phase)
  }

  const filteredStartups = selectedPhase
    ? startups.filter(
        (startup) =>
          startup.attributes.phases.slice(-1).pop()?.name === selectedPhase
      )
    : startups

  return (
    <div className="startups">
      <Filters onClick={handleClick} selectedPhase={selectedPhase} />
      <div className="startups-list grid grid-cols-4 gap-6 fr-mt-6w">
        {filteredStartups.map((startup) => (
          <Item key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  )
}
