import Image from "next/image"

import imagePartners from "../images/partners.jpg"
import imageLogoFabrique from "../images/logo-fabrique.svg"
import imageEmailCampaign from "../images/email-campaign.svg"
import imageLogoGovernment from "../images/logo-gouvernement.png"

const applications = [
  {
    image: imageLogoFabrique,
    title: "L'appel à idée de la Fabrique",
    text: "Un appel à idées est adressé chaque année à l'ensemble des agents des ministères sociaux. Témoins d'irritants récurrents pour les usagers ou les agents, ils sont invités à exprimer leurs idées et solutions afin de transformer une politique publique : la rendre plus rapide, plus efficace ou moins contraignante. (ex: Domifa, Archifiltre)",
  },
  {
    image: imageLogoGovernment,
    title: "Demandes politiques",
    text: "Cabinet / DNUM / Administration (ex: Code du travail numérique, 1000 premiers jours, Tu me play, la Maison de l'autisme)",
  },
  {
    image: imagePartners,
    title: "Les autres appels à idées",
    text: "En partenariat avec une autre institution. Pas de calendrier, ouvert à l'ensemble des agents et structures relevant d'elles (ex: Oz, Mano, Mons suivi psy)",
  },
  {
    image: imageEmailCampaign,
    title: "Les propositions spontanées",
    text: "En postulant ici",
  },
]

export default function Applications() {
  return (
    <section className="fr-container">
      <h3 className="fr-h3 text-blue-900 fabnum-title--h3">
        Comment proposer son projet pour bénéficier du programme
        d&apos;incubation ?
      </h3>
      <p className="fr-text--lg fr-text--bold text-blue-950">
        Les voies d&apos;entrée des SE à la Fabrique
      </p>
      <div className="grid grid-cols-2 gap-x-40 gap-y-20 mx-12 mt-12">
        {applications.map(({ image, title, text }, i) => (
          <div key={`applications-${i + 1}`} className="flex flex-col">
            <div className="flex flex-col justify-center h-52 relative">
              <Image
                fill
                src={image}
                style={{ objectFit: "contain" }}
                alt={`illustration de la méthode ${i + 1}`}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-8xl font-bold text-blue-900">{i + 1}</div>
              <h4 className="fr-h5 text-blue-900 mt-6 mb-3">{title}</h4>
            </div>
            <p className="fr-text--sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
