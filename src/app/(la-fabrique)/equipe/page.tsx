import Image from "next/image"
import { fr } from "@codegouvfr/react-dsfr"

import imageThumb from "./images/thumb.svg"
import imagePeople1 from "./images/people-1.svg"
import imagePeople2 from "./images/people-2.svg"
import imagePeople3 from "./images/people-3.svg"
import imagePeople4 from "./images/people-4.svg"
import imagePeople5 from "./images/people-5.svg"
import imagePeople6 from "./images/people-6.svg"
import imagePeople7 from "./images/people-7.svg"
import imageCoreTeam from "./images/core-team.svg"

export default function Team() {
  const blueCumulus = fr.colors.decisions.background.alt.blueCumulus.default

  return (
    <>
      <h1 className={fr.cx("fr-h1", "fr-container")}>L&apos;équipe</h1>

      <section className="fr-container">
        <h2 className="fr-h2 fabnum-title">La core team</h2>
        <div className="flex items-center gap-x-12 mb-12">
          <div className="flex-1">
            <p className="fr-text--md">
              La Core Team et les équipes transverses sont là pour aider les
              startups et apporter :
            </p>
            <ul className="list-disc pl-12">
              <li>Appui technique, appui produit</li>
              <li>Appui conformité : juridique, sécurité, accessibilité</li>
              <li>
                Appui contractuel : commande publique, conventions de
                financement, staffing
              </li>
              <li>
                Appui logistique : un plateau qui rassemble les développeurs,
                les coachs, les intrapreneurs et bien d&apos;autres
              </li>
              <li>Appui dans la relation avec vos financeurs</li>
            </ul>
            <p className="fr-text--md mt-6 text-justify">
              La Fabrique se porte garante des produits développés et en est
              responsable. La Fabrique intervient dans un écosystème complexe et
              majoritairement vertical peu habitués aux méthodes Startup
              d&apos;État (SE). Le rôle de la Core Team est de garantir
              l&apos;autonomie de la Fabrique face à cet environnement afin que
              les équipes des startups restent centrées sur l&apos;impact de
              leurs produits. Cela passe par donner de la visibilité à nos
              sponsors sur nos succès mais aussi sur les difficultés
              rencontrées. La contrepartie de l&apos;autonomie est donc la
              transparence et le feed-back actif.
            </p>
          </div>
          <div className="w-[400px]">
            <Image
              width={400}
              height={300}
              src={imageCoreTeam}
              alt="illustration de la core team"
            />
          </div>
        </div>
      </section>

      <section className="fr-container">
        <h2 className="fr-h2 fabnum-title">Les freelances</h2>
        <p>
          En fonction des défis auxquels nous devons faire face, les équipes
          évoluent tout au long de la vie du produit.
        </p>
        <div className="grid grid-cols-3 my-12 gap-y-12 gap-x-6">
          <div className="flex flex-col items-center gap-3">
            <Image
              width={120}
              height={120}
              src={imagePeople1}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">
              Gestionnaire de produit
            </div>
            <p className="text-center">
              Aide à prioriser en fonction de besoins des utilisateurs et
              utilisatrices
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              width={120}
              height={120}
              src={imagePeople2}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">Coach</div>
            <p className="text-center">
              Partage son expertise du numérique et de l&apos;entreprenariat
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              width={120}
              height={120}
              src={imagePeople3}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">
              Développeuse ou développeur
            </div>
            <p className="text-center">
              Créé le service dans un language de programmation
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              width={120}
              height={120}
              src={imagePeople4}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">
              Designer produit
            </div>
            <p className="text-center">
              Conçoit, améliore l&apos;expérience et teste les parcours avec les
              utilisatetrices et utilisateurs
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              width={120}
              height={120}
              src={imagePeople5}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">
              Intrapreneur(e)
            </div>
            <p className="text-center">
              Agent public et expert(e) métier, responsable d&apos;un produit
              après une formation beta.gouv
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              width={120}
              height={120}
              src={imagePeople6}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">
              Chargé(e) de déploiement
            </div>
            <p className="text-center">
              Aide à augmenter ne le nombre d&apos;utilisateurs et veille à leur
              satisfaction
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 col-start-2">
            <Image
              width={250}
              height={200}
              src={imagePeople7}
              alt="illustration de la core team"
            />
            <div className="font-bold text-blue-900 text-xl">
              Divers experts
            </div>
            <p className="text-center">
              En fonction des besoins spécifiques au produit
            </p>
          </div>
        </div>
      </section>
      <section
        className="fr-container mt-24 pt-24 pb-16 pr-24 flex gap-x-12 items-center relative overflow-hidden"
        style={{ backgroundColor: blueCumulus }}
      >
        <Image
          width={250}
          height={200}
          src={imageThumb}
          className="rotate-[12degx] relative -left-12"
          alt="illustration de la core team"
        />
        <p className="fr-text--md text-justify">
          À la Fabrique du numérique il n&apos;y a pas de hiérarchie, les
          équipes sont pluridisciplinaires, chacun est responsable et autonome
          sur sa partie, chacun est responsable d&apos;être transparent sur ses
          actions, et chacun est légitime de challenger un autre membre de
          l&apos;équipe dans un cadre bienveillant.
        </p>
      </section>
    </>
  )
}
