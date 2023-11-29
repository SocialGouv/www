import { Card } from "@codegouvfr/react-dsfr/Card"
import { Badge } from "@codegouvfr/react-dsfr/Badge"

import type { Startup } from "@/utils/get-startups"

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const image = new Image()

    image.onload = () => {
      resolve(image)
    }

    image.onerror = () => {
      // En cas d'échec, on utilise l'image par défaut
      const defaultImage = new Image()
      defaultImage.src = "https://beta.gouv.fr/img/betagouv-rectangle.png"
      resolve(defaultImage)
    }

    image.src = url
  })
}

export default function StartupsListItem({ startup }: { startup: Startup }) {
  const {
    id,
    attributes: { name, pitch, phases, organisation },
  } = startup
  const phase = phases.slice(-1).pop()?.name
  const severity = phase === "success" ? "success" : "info"

  return (
    <Card
      key={id}
      enlargeLink
      desc={pitch}
      linkProps={{ href: `/startups/${id}` }}
      title={`${name} (${organisation?.acronym})`}
      imageAlt="image d'illustration de la startup"
      imageUrl={`https://beta.gouv.fr/img/startups/${id}.png`}
      start={
        <ul className="fr-badges-group">
          {phase && (
            <li>
              <Badge key={1} noIcon severity={severity} small>
                {phase === "success" ? "succès" : phase}
              </Badge>
            </li>
          )}
        </ul>
      }
    />
  )
}
