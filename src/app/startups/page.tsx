import { fr } from "@codegouvfr/react-dsfr"
import List from "./list"

export default function Startups() {
  return (
    <section className={fr.cx("fr-container", "fr-py-6w")}>
      <h1 className={fr.cx("fr-h1")}>Nos startups</h1>
      <List />
    </section>
  )
}
