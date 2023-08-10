import json from "../../../data/startups.json"

export default function getStartups() {
  const { data: startups } = json

  return startups.filter(
    (startup) =>
      startup.type === "startup" &&
      startup.relationships.incubator.data.id === "sgmas"
  )
}
