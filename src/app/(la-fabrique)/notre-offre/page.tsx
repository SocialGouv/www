import { fr } from "@codegouvfr/react-dsfr"

export default function NotreOffre() {
  return (
    <div className="fr-container">
      <h1 className="fr-h1">Notre offre</h1>
      <p className="fr-text--md">
        Les projets incubés au sein de la Fabrique Numérique des ministères
        sociaux peuvent couvrir un large éventail de domaines liés aux services
        sociaux et à l&apos;administration publique. Ce qui inclut des solutions
        numériques pour améliorer l&apos;accessibilité des informations, la
        simplification des démarches administratives, l&apos;automatisation de
        processus, etc.
      </p>
      <h2 className="fr-h2">Incubateur de services numériques</h2>
      <div className="flex flex-col gap-12">
        <section>
          <h3 className="fr-h3 text-blue-900">
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

        <section>
          <h3 className="fr-h3 text-blue-900">
            Comment proposer son projet pour bénéficier du programme
            d&apos;incubation ?
          </h3>
          <p className="fr-text--md">
            Les voies d&apos;entrée des SE à la Fabrique :
          </p>
          <ul className="list-decimal pl-12">
            <li>
              L&apos;appel à idée de la Fabrique → Un appel à idées est adressé
              chaque année à l&apos;ensemble des agents des ministères sociaux.
              Témoins d&apos;irritants récurrents pour les usagers ou les
              agents, ils sont invités à exprimer leurs idées et solutions afin
              de transformer une politique publique : la rendre plus rapide,
              plus efficace ou moins contraignante. (ex: Domifa, Archifiltre)
            </li>
            <li>
              Demandes politiques → Cabinet / DNUM / Administration (ex: Code du
              travail numérique, 1000 premiers jours, Tu me play, la Maison de
              l&apos;autisme)
            </li>
            <li>
              Appel à idée en partenariat avec une autre institution → Pas de
              calendrier, ouvert à l&apos;ensemble des agents et structures
              relevant d&apos;elles (ex : Oz, Mano, Mons suivi psy)
            </li>
            <li>Proposition spontanée en postulant ici.</li>
          </ul>
        </section>

        <section>
          <h3 className="fr-h3 text-blue-900">
            Comment se déroule l&apos;incubation ?
          </h3>
          <p className="fr-text--md">
            À la Fabrique, nous avons une méthode de travail bien établie pour
            vous accompagner dans le développement du produit. Elle se
            caractérise en 4 phases :
          </p>
          <ul className="list-disc pl-12">
            <li>
              <strong className="font-bold">L&apos;investigation :</strong>{" "}
              suite à l&apos;identification d&apos;un irritant spécifique par un
              intrapreneur(e), la Fabrique mène une enquête auprès des
              utilisateurs pour s&apos;assurer que le problème concerne un
              public suffisamment large, qu&apos;un outil numérique pourrait le
              faire disparaître et que les obstacles techniques sont
              surmontables.
            </li>
            <li>
              <strong className="font-bold">La construction :</strong> une fois
              l&apos;investigation terminée et l&apos;irritant constaté, une
              équipe est rapidement constituée afin de commencer à développer un
              prototype produit et le faire tester à des utilisateurs réels.
              L&apos;équipe dispose de six mois pour lancer une solution et la
              tester auprès de ses premiers usagers. Cela permet de recueillir
              des retours d&apos;utilisateurs précieux pour affiner la solution.
            </li>
            <li>
              <strong className="font-bold">L&apos;accélération :</strong> une
              fois le produit viable, nous entrons dans la phase
              d&apos;accélération qui consiste à faire connaître le produit au
              plus grand nombre. L&apos;administration fixe des objectifs à
              atteindre pour les six prochains mois. Les retours des
              utilisateurs, ainsi que les données collectées lors de cette
              phase, sont utilisés pour itérer et améliorer le produit en
              continu.
            </li>
            <li>
              <strong className="font-bold">
                La consolidation et la pérennisation :
              </strong>{" "}
              la start-up d&apos;État devient un service public numérique
              national disponible pour tous les usagers et se développe au sein
              de la direction ou intègre l&apos;administration porteuse.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
