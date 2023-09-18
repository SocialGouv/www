import Image from "next/image"
import { fr } from "@codegouvfr/react-dsfr"

import "./styles/index.css"
import imageLightBulb from "./images/lightbulb.svg"
import Link from "next/link"

export default function CallForIdeas() {
  const blueCumulus = fr.colors.decisions.background.alt.blueCumulus.default

  return (
    <div className="call-for-ideas" style={{ backgroundColor: blueCumulus }}>
      <div className="fr-container">
        <h3 className="fr-h3">VOUS AVEZ UNE IDÉE ?</h3>
        <p className="fr-text--lg">
          Vous êtes témoin d&apos;un problème récurrent que rencontrent les
          usagers ou les agents de notre administration ?<br />
          Ce problème induit une réelle difficulté pour les citoyens en termes
          d&apos;accès aux droits, d&apos;égalité des chances... ?
        </p>
        <p className="fr-text--xl">
          Participez à l&apos;amélioration du service public des Ministères
          Sociaux en nous proposant vos idées de startups
        </p>
        <button className="fr-btn px-24">JE POSTULE !</button>
        <Image
          width={130}
          height={130}
          alt="image ampoule"
          src={imageLightBulb}
        />
      </div>
    </div>
  )
}
