import json from "../../../data/startups.json"

export default function getStartup(id: string) {
  const { data: startups } = json

  return startups
    .filter(
      (startup) =>
        startup.id === id &&
        startup.type === "startup" &&
        startup.relationships.incubator.data.id === "sgmas"
    )
    .pop()
}
