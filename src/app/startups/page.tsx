import { fr } from "@codegouvfr/react-dsfr"
import StartupsList from "@/components/startups-list"

export default function StartupsPage() {
  return (
    <section className={fr.cx("fr-container", "fr-pb-6w")}>
      <h1 className={fr.cx("fr-h1")}>Nos startups</h1>
      <StartupsList />
    </section>
  )
}
