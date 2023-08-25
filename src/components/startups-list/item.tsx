import { Card } from "@codegouvfr/react-dsfr/Card"
import { Badge } from "@codegouvfr/react-dsfr/Badge"

import type { Startup } from "../../app/startups/get-startups"

export default function StartupsListItem({ startup }: { startup: Startup }) {
  const {
    id,
    attributes: { name, pitch, phases },
  } = startup
  const phase = phases.pop()?.name
  const severity = phase === "success" ? "success" : "info"

  return (
    <Card
      key={id}
      enlargeLink
      title={name}
      desc={pitch}
      linkProps={{ href: `/startups/${id}` }}
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
