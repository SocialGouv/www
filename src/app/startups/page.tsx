import { fr } from "@codegouvfr/react-dsfr"

import List from "./list"

export default function StartupsPage() {
  return (
    <div className={fr.cx("fr-py-6w", "fr-container")}>
      <h1 className={fr.cx("fr-h1", "fr-pb-3w")}>Nos startups</h1>
      <List />
    </div>
  )
}
