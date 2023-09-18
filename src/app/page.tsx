import Image from "next/image"
import { fr } from "@codegouvfr/react-dsfr"

import imageHome from "./tour-mirabeau.jpg"
import imageAgile from "./(la-fabrique)/a-propos/images/agile.svg"
import imageCoreTeam from "./(la-fabrique)/equipe/images/core-team.svg"
import launchingImage from "./(la-fabrique)/notre-offre/images/launching.svg"
import RandomStartups from "@/components/random-startups"
import CallForIdeas from "@/components/call-for-ideas"

export default function Home() {
  const blueCumulus = fr.colors.decisions.background.alt.blueCumulus.default

  return (
    <>
      <div className="fr-container">
        <Image
          sizes="100vw"
          src={imageHome}
          alt="photo de la tour Mirabeau"
          style={{ width: "auto", height: "100%" }}
        />
        <h2 className="fr-h2 fabnum-title-h2 mt-12">La Fabrique Numérique</h2>
        <section className="flex">
          <div className="flex flex-col items-center flex-1">
            <div className="flex h-60 items-center justify-center">
              <Image
                sizes="100vw"
                src={imageAgile}
                alt="illustration de la méthode agile"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
            <div className="font-bold text-2xl text-blue-900 mt-6">
              A propos
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex h-60 items-center justify-center">
              <Image
                sizes="100vw"
                src={launchingImage}
                alt="illustration de la méthode 1"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
            <div className="font-bold text-2xl text-blue-900 mt-6">
              Notre offre
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex h-60 items-center justify-center">
              <Image
                sizes="100vw"
                src={imageCoreTeam}
                alt="illustration de la méthode 1"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="font-bold text-2xl text-blue-900 mt-6">
              L&apos;équipe
            </div>
          </div>
        </section>
      </div>
      <section className="my-12 pb-12" style={{ backgroundColor: blueCumulus }}>
        <div className="fr-container pt-12">
          <RandomStartups />
        </div>
        <div className="flex justify-center">
          <button className="fr-btn">TOUTES LES STARTUPS</button>
        </div>
      </section>
      <section>
        <div className="fr-container flex font-bold text-xl text-blue-900 py-12">
          <div className="flex flex-col flex-1">
            <div className="text-5xl">27</div>
            <div>Startups</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-5xl">11</div>
            <div>Intrapreneurs</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-5xl">243</div>
            <div>Projets open-source</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-5xl">53043</div>
            <div>Commits</div>
          </div>
        </div>
      </section>
      <section>
        <CallForIdeas />
      </section>
    </>
  )
}
