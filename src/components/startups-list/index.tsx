"use client"

import { useState } from "react"

import Item from "./item"
import Filters from "./filters"
import getStartups from "@/utils/get-startups"

export default function StartupsList() {
  const startups = getStartups()
  const [phase, setPhase] = useState<string>()

  function handleClick(phase: string) {
    setPhase(phase)
  }

  return (
    <div className="startups">
      <Filters onClick={(phase) => handleClick(phase)} selectedPhase={phase} />
      <div className="startups-list grid grid-cols-4 gap-6 fr-mt-6w">
        {startups.map((startup) => (
          <Item key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  )
}
