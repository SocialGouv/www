import json from "./startups.json"
import { Startup } from "./[id]/get-startup"
import getOrganisation from "./[id]/get-organisation"

export default function getStartups(): Startup[] {
  const data = json.data as Startup[]
  const excludedPhases = ["transfer", "alumni"]

  return data.reduce((startups, startup) => {
    const {
      attributes: {
        phases,
        sponsors: [sponsor, ...rest],
      },
    } = startup

    if (
      startup.type === "startup" &&
      startup.relationships.incubator.data.id === "sgmas" &&
      !phases.some((phase) => excludedPhases.includes(phase.name))
    ) {
      const organisation = getOrganisation(
        sponsor.replace("/organisations/", "")
      )
      if (organisation) {
        startup.attributes.organisation = organisation
      }
      startups.push(startup)
    }

    return startups
  }, [] as Startup[])
}
