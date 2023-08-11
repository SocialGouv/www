import { Card } from "@codegouvfr/react-dsfr/Card"
import { Badge } from "@codegouvfr/react-dsfr/Badge"

import getStartups from "./get-startups"

export default function List() {
  const startups = getStartups()

  return (
    <div className="startups-list grid grid-cols-4 gap-6 fr-mt-6w">
      {startups.map(({ id, attributes: { name, pitch, phases } }) => {
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
      })}
    </div>
  )
}
