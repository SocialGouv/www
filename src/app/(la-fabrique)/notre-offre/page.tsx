import { fr } from "@codegouvfr/react-dsfr"

import Phases from "./components/phases"
import Applications from "./components/applications"

export default function NotreOffre() {
  const blueCumulus = fr.colors.decisions.background.alt.blueCumulus.default

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
        <h2 className="fr-h2 my-12 fabnum-title--h2">
          Incubateur de services numériques
        </h2>
      </div>
      <div className="flex flex-col gap-12">
        <section className="fr-container">
          <h3 className="fr-h3 text-blue-900 fabnum-title--h3">
            Qui peut proposer un projet de services numériques ?
          </h3>
          <p className="fr-text--md">
            La Fabrique numérique est ouverte à la participation de diverses
            parties prenantes qui souhaitent proposer des projets visant à
            améliorer les services publics ou à créer une innovation.
          </p>
          <p className="fr-text--md">
            Les intrapreneurs et intrapreneuses viennent de :
          </p>
          <ul className="list-disc pl-12">
            <li>la direction du travail (DGT)</li>
            <li>des directions régionales des entreprises</li>
            <li>
              de la concurrence, de la consommation, du travail et de
              l&apos;emploi (DIRECCTE)
            </li>
            <li>de la direction générale de la santé (DGS)</li>
            <li>de la direction générale de la cohésion sociale (DGCS)</li>
          </ul>
        </section>

        <section className="fr-container">
          <h3 className="fr-h3 text-blue-900 fabnum-title--h3">
            Comment proposer son projet pour bénéficier du programme
            d&apos;incubation ?
          </h3>
          <Applications />
        </section>

        <section style={{ backgroundColor: blueCumulus }}>
          <div className="fr-container py-12">
            <h3 className="fr-h3 text-blue-900 fabnum-title--h3">
              Comment se déroule l&apos;incubation ?
            </h3>
            <p className="fr-text--md">
              À la Fabrique, nous avons une méthode de travail bien établie pour
              vous accompagner dans le développement du produit.
            </p>
            <p className="fr-text--md">Elle se caractérise en 4 phases :</p>
            <Phases />
          </div>
        </section>
      </div>
    </>
  )
}
