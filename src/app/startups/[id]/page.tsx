import Image from "next/image"

import { fr } from "@codegouvfr/react-dsfr"

import getStartup from "./get-startup"
import getStartups from "../get-startups"
import RemoteContent from "./remote-content"
import LocalContent from "./local-content"

export async function generateStaticParams() {
  const startups = getStartups()

  return startups.map((startup) => ({
    id: startup.id,
  }))
}

export default async function StartupPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const startup = getStartup(id)
  const theme = fr.getColors(false)
  const blueCumulus = theme.decisions.background.alt.blueCumulus.default

  const {
    attributes: {
      name,
      link,
      pitch,
      phases,
      contact,
      stats_url,
      repository,
      accessibility_status,
      content_url_encoded_markdown,
    },
  } = startup

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
          <div className="relative flex-1">
            <Image
              fill
              sizes="500px"
              style={{ objectFit: "contain" }}
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
          <div>
            {phases.map((phase, i) => (
              <div key={i}>
                <div>{phase.name}</div>
                <div>{phase.start}</div>
                <div>{phase.end}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LocalContent id={id} />
      <RemoteContent
        content_url_encoded_markdown={content_url_encoded_markdown}
      />
    </div>
  )
}
