import { NextResponse } from "next/server"
import type { Incubator } from "@/types/incubator"
import type { Startup } from "@/types/startup"

interface BetaGouvStartupsData {
  links: {
    self: string
  }
  data: Startup[]
  included: Incubator[]
}

export async function GET() {
  const res = await fetch("https://beta.gouv.fr/api/v2.5/startups.json", {
    cache: "no-store",
  })

  const betaGouvData: BetaGouvStartupsData = await res.json()

  const ourStartups = betaGouvData.data
    .filter((startup) => {
      return startup.relationships.incubator.data.id === "sgmas"
    })
    .map((startup) => {
      // remove the incubator relationship
      // delete startup.relationships
      // delete startup.attributes?.content_url_encoded_markdown
      const { relationships, attributes, ...rest } = startup
      const { content_url_encoded_markdown, ...restAttributes } = attributes
      return {
        ...rest,
        attributes: restAttributes,
      }
    })

  return NextResponse.json({ data: ourStartups })
}
