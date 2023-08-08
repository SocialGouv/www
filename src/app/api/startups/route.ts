// disabled fast refresh ? https://nextjs.org/docs/architecture/fast-refresh#tips
// @refresh reset
import { NextResponse, NextRequest } from "next/server"
import type { Incubator } from "@/types/incubator"
import type { StartupBetaGouv, StartupLocal, Startup } from "@/types/startup"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const startupsDirectory = path.join(process.cwd(), "content/_startups")

interface BetaGouvStartupsData {
  links: {
    self: string
  }
  data: StartupBetaGouv[]
  included: Incubator[]
}

export async function GET(request: NextRequest) {
  // we can't fetch the data from beta.gouv.fr directly in /app/startups/page.tsx
  // because the json is too big to be cached
  // we have to fetch the data from beta.gouv.fr through a server-side API call
  // then filter out the data we need, then the request will be cached

  const res = await fetch("https://beta.gouv.fr/api/v2.5/startups.json")

  const betaGouvData: BetaGouvStartupsData = await res.json()

  const ourStartups = betaGouvData.data
    .filter((startup) => {
      return startup.relationships.incubator.data.id === "sgmas"
    })
    .map((startup) => {
      const { relationships, attributes, ...rest } = startup
      const { content_url_encoded_markdown, ...restAttributes } = attributes
      return {
        ...rest,
        attributes: restAttributes,
      }
    })

  const localMDXFiles = fs.readdirSync(startupsDirectory)

  const localStartupsData: Record<string, StartupLocal> = {}
  function isStartupLocal(data: any): data is StartupLocal {
    return (
      typeof data.name === "string" &&
      ["travail", "solidarité", "santé"].includes(data.ministere)
    )
  }

  for (const filename of localMDXFiles) {
    const content = fs.readFileSync(
      path.join(startupsDirectory, filename),
      "utf8"
    )

    let { data } = matter(content)
    data = data as StartupLocal

    if (isStartupLocal(data)) {
      localStartupsData[data.name] = data
    }
  }

  // TODO: merge localStartupsData and ourStartups
  const mergedData: Startup[] = ourStartups.map((startup) => {
    const localData = localStartupsData[startup.attributes.name]
    return {
      ...startup,
      attributes: {
        ...startup.attributes,
        ...localData,
      },
    }
  })

  const categorie = request.nextUrl.searchParams.get("categorie")

  if (categorie) {
    return NextResponse.json(
      mergedData.filter((startup) => {
        if (categorie === "solidarite") {
          return startup.attributes.ministere === "solidarité"
        }
        if (categorie === "sante") {
          return startup.attributes.ministere === "santé"
        }
        return startup.attributes.ministere === categorie
      })
    )
  }

  return NextResponse.json(mergedData)
}
