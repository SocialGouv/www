import clsx from "clsx"
import { fr } from "@codegouvfr/react-dsfr"
import Card from "@codegouvfr/react-dsfr/Card"
import type { Startup } from "@/types/startup"

async function getData() {
  // we can't fetch the startups.json data from beta.gouv.fr directly in here
  // because the json is too big to be cached
  // we have to fetch the data from beta.gouv.fr through a server-side API call in api/startups/route.ts
  // then filter out the data we need there, then this request here will be cached

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/startups`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export const revalidate = 3600

export default async function Recrutement() {
  const data: Startup[] = await getData()

  return (
    <section>
      <h1 className={fr.cx("fr-h1")}>Nos Startups</h1>
      <div className={clsx(fr.cx("fr-container"), fr.cx("fr-py-6w"))}>
        <div className={fr.cx("fr-container--fluid")}>
          <div
            className={clsx(
              fr.cx("fr-grid-row"),
              fr.cx("fr-grid-row--gutters")
            )}
          >
            {data?.map((startup) => {
              return (
                <div
                  key={startup.id}
                  className={clsx(fr.cx("fr-col-12"), fr.cx("fr-col-md-3"))}
                >
                  <Card
                    title={startup.attributes.name}
                    desc={startup.attributes.pitch}
                    detail={startup.attributes.ministere?.toLocaleUpperCase()}
                    enlargeLink
                    imageAlt={`Logo de ${startup.attributes.name}`}
                    imageUrl={`https://beta.gouv.fr/img/startups/${startup.id}.png`}
                    linkProps={{
                      href: `/startups/${startup.id}`,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
