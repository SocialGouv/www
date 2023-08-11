import json from "../startups.json"

type Startup = Extract<(typeof json)["data"][number], { attributes: any }>

export default function getStartup(id: string): Startup {
  const { data: startups } = json

  return (
    startups
      .filter(
        (startup) =>
          startup.id === id &&
          startup.type === "startup" &&
          startup.relationships.incubator.data.id === "sgmas"
      )
      .pop() || ({ attributes: {} } as Startup)
  )
}
