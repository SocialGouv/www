import json from "../startups.json"
import getOrganisation, { type Organisation } from "./get-organisation"

export type Startup = Extract<
  (typeof json)["data"][number],
  { attributes: any }
> & {
  attributes: { organisation: Organisation }
}

export default function getStartup(id: string): Startup {
  const data = json.data as Startup[]

  return (
    data
      .reduce((startups, startup) => {
        if (
          startup.id === id &&
          startup.type === "startup" &&
          startup.relationships.incubator.data.id === "sgmas"
        ) {
          const {
            attributes: {
              sponsors: [sponsor, ...rest],
            },
          } = startup
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
      .pop() || ({ attributes: {} } as Startup)
  )
}
