import Image from "next/image"
// import { remark } from "remark"
import { fr } from "@codegouvfr/react-dsfr"
// import type { MDXComponents } from "mdx/types"
// import { MDXRemote } from "next-mdx-remote/rsc"

import getStartup from "./get-startup"
import getStartups from "../get-startups"

export async function generateStaticParams() {
  const startups = getStartups()

  return startups.map((startup) => ({
    id: startup.id,
  }))
}

export default async function Details({
  params: { id },
}: {
  params: { id: string }
}) {
  const startup = getStartup(id)

  const { attributes } = startup
  const {
    name,
    link,
    pitch,
    contact,
    stats_url,
    repository,
    accessibility_status,
    content_url_encoded_markdown,
  } = attributes

  // const markdown = await remark().process(
  //   decodeURIComponent(content_url_encoded_markdown)
  // )

  // const component = {
  //   h2: ({ children }: { children: React.ReactNode }) => (
  //     <h2 className="fr-h2">{children}</h2>
  //   ),
  //   h3: ({ children }: { children: React.ReactNode }) => (
  //     <h2 className="fr-h3">{children}</h2>
  //   ),
  //   p: ({ children }: { children: React.ReactNode }) => (
  //     <p className="mb-6">{children}</p>
  //   ),
  //   ul: ({ children }: { children: React.ReactNode }) => (
  //     <ul className="mb-6">{children}</ul>
  //   ),
  //   a: ({ children, ...props }: { children: React.ReactNode }) => (
  //     <a {...props} target="_blank" rel="noopener">
  //       {children}
  //     </a>
  //   ),
  // } as MDXComponents

  const theme = fr.getColors(false)
  const blueCumulus = theme.decisions.background.alt.blueCumulus.default

  return (
    <div className="startups-details">
      <div className="fr-py-6w">
        <div className="fr-container flex">
          <div className="flex-1">
            <h1 className="fr-h1">{name}</h1>
            <p className="fr-h3">{pitch}</p>
            <div>
              <a href={link} target="_blank" rel="noopener">
                {link}
              </a>
            </div>
          </div>
          <div>
            <Image
              width={400}
              height={200}
              alt="image d'illustration de la startup"
              src={`https://beta.gouv.fr/img/startups/${id}.png`}
            />
          </div>
        </div>
      </div>

      <div className="fr-py-6w" style={{ backgroundColor: blueCumulus }}>
        <div className="fr-container">
          <div>
            <b>stats</b>: {stats_url}
          </div>
          <div>
            <b>contact</b>: {contact}
          </div>
          <div>
            <b>repository</b>: {repository}
          </div>
          <div>
            <b>accessibility status</b>: {accessibility_status}
          </div>
        </div>
      </div>
      {/* <div className="fr-py-6w">
        <div className="fr-container">
          <MDXRemote source={markdown} components={component} />
        </div>
      </div> */}
    </div>
  )
}
