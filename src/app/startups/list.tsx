import { Card } from "@codegouvfr/react-dsfr/Card"

import getStartups from "./get-startups"

export default function List() {
  const startups = getStartups()

  return (
    <div className="startups-list grid grid-cols-4 gap-6">
      {startups.map(({ id, attributes: { name, pitch } }) => (
        <Card
          key={id}
          enlargeLink
          title={name}
          desc={pitch}
          linkProps={{ href: `/startups/${id}` }}
          imageAlt="image d'illustration de la startup"
          imageUrl={`https://beta.gouv.fr/img/startups/${id}.png`}
        />
      ))}
    </div>
  )
}
