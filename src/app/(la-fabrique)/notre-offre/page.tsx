import Image from "next/image"
import { fr } from "@codegouvfr/react-dsfr"

import arrow1Image from "./images/arrow-1.svg"
import arrow2Image from "./images/arrow-2.svg"
import arrow3Image from "./images/arrow-3.svg"
import teamWorkImage from "./images/team-work.svg"
import launchingImage from "./images/launching.svg"
import investingImage from "./images/investing.svg"
import imageEmailCampaign from "./images/email-campaign.svg"
import selectingTeamImage from "./images/selecting-team.svg"
import imageLogoGovernment from "./images/logo-gouvernement.png"

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
        <h2 className="fr-h2 my-12">Incubateur de services numériques</h2>
      </div>
      <div className="flex flex-col gap-12">
        <section className="fr-container">
          <h3 className="fr-h3 text-blue-900 fabnum-title">
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
          <h3 className="fr-h3 text-blue-900 fabnum-title">
            Comment proposer son projet pour bénéficier du programme
            d&apos;incubation ?
          </h3>
          <p className="fr-text--md font-bold">
            Les voies d&apos;entrée des SE à la Fabrique
          </p>
          <div className="flex gap-x-12">
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center h-44">
                <Image
                  width={200}
                  height={125}
                  sizes="100vw"
                  src="https://placehold.co/200x125"
                  alt="illustration de la méthode 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="text-9xl font-bold text-blue-900">1</div>
                <div className="text-blue-900 font-bold">
                  L&apos;appel à idée de la Fabrique
                </div>
              </div>
              <p className="fr-text--sm">
                Un appel à idées est adressé chaque année à l&apos;ensemble des
                agents des ministères sociaux. Témoins d&apos;irritants
                récurrents pour les usagers ou les agents, ils sont invités à
                exprimer leurs idées et solutions afin de transformer une
                politique publique : la rendre plus rapide, plus efficace ou
                moins contraignante. (ex: Domifa, Archifiltre)
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-44">
                <Image
                  sizes="100vw"
                  src={imageLogoGovernment}
                  alt="illustration de la méthode 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="text-9xl font-bold text-blue-900">2</div>
                <div className="text-blue-900 font-bold">
                  Demandes politiques
                </div>
              </div>
              <p className="fr-text--sm">
                Cabinet / DNUM / Administration (ex: Code du travail numérique,
                1000 premiers jours, Tu me play, la Maison de l&apos;autisme)
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center h-44">
                <Image
                  width={200}
                  height={125}
                  sizes="100vw"
                  src="https://placehold.co/200x125"
                  alt="illustration de la méthode 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="text-9xl font-bold text-blue-900">3</div>
                <div className="text-blue-900 font-bold">
                  Les autres appels à idées
                </div>
              </div>
              <p className="fr-text--sm">
                En partenariat avec une autre institution. Pas de calendrier,
                ouvert à l&apos;ensemble des agents et structures relevant
                d&apos;elles (ex : Oz, Mano, Mons suivi psy)
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-52x">
                <Image
                  sizes="100vw"
                  src={imageEmailCampaign}
                  alt="illustration de la méthode 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="text-9xl font-bold text-blue-900">4</div>
                <div className="text-blue-900 font-bold">
                  Les propositions spontanées
                </div>
              </div>
              <p className="fr-text--sm">En postulant ici</p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: blueCumulus }}>
          <div className="fr-container py-12">
            <h3 className="fr-h3 text-blue-900 fabnum-title">
              Comment se déroule l&apos;incubation ?
            </h3>
            <p className="fr-text--md">
              À la Fabrique, nous avons une méthode de travail bien établie pour
              vous accompagner dans le développement du produit.
            </p>
            <p>Elle se caractérise en 4 phases :</p>
            <div className="flex mt-6">
              <div className="flex-1 flex flex-col mt-28">
                <div className="flex items-center h-56">
                  <Image
                    sizes="100vw"
                    src={selectingTeamImage}
                    alt="illustration de la méthode 1"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h4 className="fr-h5 text-blue-900 mt-6 mb-3">
                  L&apos;investigation
                </h4>
                <p className="fr-text--sm">
                  Suite à l&apos;identification d&apos;un irritant spécifique
                  par un intrapreneur(e), la Fabrique mène une enquête auprès
                  des utilisateurs pour s&apos;assurer que le problème concerne
                  un public suffisamment large, qu&apos;un outil numérique
                  pourrait le faire disparaître et que les obstacles techniques
                  sont surmontables.
                </p>
              </div>
              <div className="w-20 relative">
                <div className="absolute z-10 top-[20rem] -left-8">
                  <Image
                    width={96}
                    height={48}
                    alt="fleche 1"
                    src={arrow1Image}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center h-56">
                  <Image
                    sizes="100vw"
                    src={teamWorkImage}
                    alt="illustration de la méthode 1"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h4 className="fr-h5 text-blue-900 mt-6 mb-3">
                  La construction
                </h4>
                <p className="fr-text--sm">
                  Une fois l&apos;investigation terminée et l&apos;irritant
                  constaté, une équipe est rapidement constituée afin de
                  commencer à développer un prototype produit et le faire tester
                  à des utilisateurs réels. L&apos;équipe dispose de six mois
                  pour lancer une solution et la tester auprès de ses premiers
                  usagers. Cela permet de recueillir des retours
                  d&apos;utilisateurs précieux pour affiner la solution.
                </p>
              </div>
              <div className="w-20 relative">
                <div className="absolute z-10 top-[14rem]">
                  <Image
                    width={66}
                    height={94}
                    alt="fleche 2"
                    src={arrow2Image}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col mt-28">
                <div className="flex items-center h-56">
                  <Image
                    sizes="100vw"
                    src={launchingImage}
                    alt="illustration de la méthode 1"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h4 className="fr-h5 text-blue-900 mt-6 mb-3">
                  L&apos;accélération
                </h4>
                <p className="fr-text--sm">
                  Une fois le produit viable, nous entrons dans la phase
                  d&apos;accélération qui consiste à faire connaître le produit
                  au plus grand nombre. L&apos;administration fixe des objectifs
                  à atteindre pour les six prochains mois. Les retours des
                  utilisateurs, ainsi que les données collectées lors de cette
                  phase, sont utilisés pour itérer et améliorer le produit en
                  continu.
                </p>
              </div>
              <div className="w-20 relative">
                <div className="absolute z-10 top-[18rem] -left-4 rotate-[10deg]">
                  <Image
                    width={76}
                    height={138}
                    alt="fleche 3"
                    src={arrow3Image}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="flex items-center h-56">
                  <Image
                    sizes="100vw"
                    src={investingImage}
                    style={{ width: "100%", height: "auto" }}
                    alt="illustration de la consolidation et la pérennisation"
                  />
                </div>
                <h4 className="fr-h5 text-blue-900 mt-6 mb-3">
                  La consolidation et la pérennisation
                </h4>
                <p className="fr-text--sm">
                  La start-up d&apos;État devient un service public numérique
                  national disponible pour tous les usagers et se développe au
                  sein de la direction ou intègre l&apos;administration
                  porteuse.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
