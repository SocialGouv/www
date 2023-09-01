import json from "./startups.json"
import type { Startup } from "./[id]/get-startup"
import getOrganisation from "./[id]/get-organisation"

export default function getStartups(phase?: string): Startup[] {
  const data = json.data as Startup[]
  const excludedPhases = ["transfer", "alumni"]

  return data.reduce((startups, startup) => {
    const {
      attributes: {
        phases,
        sponsors: [sponsor, ...rest],
      },
    } = startup

    const currentPhase = phases[phases.length - 1]
    // console.log("CURRENT PHASE", phase, startup.id, currentPhase)

    if (
      startup.type === "startup" &&
      startup.relationships.incubator.data.id === "sgmas" &&
      !phases.some((phase) => excludedPhases.includes(phase.name)) &&
      (!phase || currentPhase?.name === phase)
    ) {
      const organisation = getOrganisation(
        sponsor.replace("/organisations/", "")
      )

      if (organisation) {
        startup.attributes.organisation = organisation
      }
      // console.log("PUSH", phase, startup.id, phases, currentPhase)

      startups.push(startup)
    }

    return startups
  }, [] as Startup[])
}
