import json from "../../../data/startups.json"

export default function getStartups() {
  const { data } = json

  return data.reduce(
    (startups, startup) => {
      const {
        attributes: { phases },
      } = startup

      if (
        startup.type === "startup" &&
        startup.relationships.incubator.data.id === "sgmas" &&
        !phases.some((phase) => ["transfer", "alumni"].includes(phase.name))
      ) {
        startups.push(startup)
      }

      return startups
    },
    [] as typeof json.data
  )
}
