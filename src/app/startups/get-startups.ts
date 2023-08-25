import json from "./startups.json"

export type Startup = (typeof json.data)[number]

export default function getStartups() {
  const { data } = json
  const excludedPhases = ["transfer", "alumni"]

  return data.reduce(
    (startups, startup) => {
      const {
        attributes: { phases },
      } = startup

      if (
        startup.type === "startup" &&
        startup.relationships.incubator.data.id === "sgmas" &&
        !phases.some((phase) => excludedPhases.includes(phase.name))
      ) {
        startups.push(startup)
      }

      return startups
    },
    [] as typeof json.data
  )
}
