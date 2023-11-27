import Phases from "./components/phases"
import Applications from "./components/applications"
import Parties from "./components/parties"

export default function NotreOffre() {
  return (
    <>
      <div className="fr-container">
        <h1 className="fr-h1">Notre offre</h1>
        <p className="fr-text--md">
          Les projets incubés au sein de la Fabrique Numérique des ministères
          sociaux peuvent couvrir un large éventail de domaines liés aux
          services sociaux et à l&apos;administration publique. Ce qui inclut
          des solutions numériques pour améliorer l&apos;accessibilité des
          informations, la simplification des démarches administratives,
          l&apos;automatisation de processus, etc.
        </p>
        <h2 className="fr-h2 my-12">Incubateur de services numériques</h2>
      </div>

      <div className="flex flex-col gap-12">
        <Parties />
        <Applications />
        <Phases />
      </div>
    </>
  )
}
