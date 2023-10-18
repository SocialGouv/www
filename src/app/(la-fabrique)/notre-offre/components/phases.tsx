import Image from "next/image"

import arrow1Image from "../images/arrow-1.svg"
import arrow2Image from "../images/arrow-2.svg"
import arrow3Image from "../images/arrow-3.svg"
import teamWorkImage from "../images/team-work.svg"
import launchingImage from "../images/launching.svg"
import investingImage from "../images/investing.svg"
import selectingTeamImage from "../images/selecting-team.svg"

const arrows = [
  {
    width: 96,
    height: 48,
    image: arrow1Image,
    position: "top-48 left-48",
  },
  {
    width: 66,
    height: 94,
    image: arrow2Image,
    position: "top-48 left-[31rem]",
  },
  {
    width: 76,
    height: 138,
    image: arrow3Image,
    position: "top-48 left-[50rem] -left-4 rotate-[10deg]",
  },
]

const phases = [
  {
    title: "L'investigation",
    image: selectingTeamImage,
    text: "Suite à l'identification d'un irritant spécifique par un intrapreneur(e), la Fabrique mène une enquête auprès des utilisateurs pour s'assurer que le problème concerne un public suffisamment large, qu'un outil numérique pourrait le faire disparaître et que les obstacles techniques sont surmontables.",
  },
  {
    image: teamWorkImage,
    title: "La construction",
    text: "Une fois l'investigation terminée et l'irritant constaté, une équipe est rapidement constituée afin de commencer à développer un prototype produit et le faire tester à des utilisateurs réels. L'équipe dispose de six mois pour lancer une solution et la tester auprès de ses premiers usagers. Cela permet de recueillir des retours d'utilisateurs précieux pour affiner la solution.",
  },
  {
    image: launchingImage,
    title: "L'accélération",
    text: "Une fois le produit viable, nous entrons dans la phase d'accélération qui consiste à faire connaître le produit au plus grand nombre. L'administration fixe des objectifs à atteindre pour les six prochains mois. Les retours des utilisateurs, ainsi que les données collectées lors de cette phase, sont utilisés pour itérer et améliorer le produit en continu.",
  },
  {
    image: investingImage,
    title: "La consolidation et la pérennisation",
    text: "La start-up d'État devient un service public numérique national disponible pour tous les usagers et se développe au sein de la direction ou intègre l'administration porteuse.",
  },
]

export default function Phases() {
  return (
    // <div className="flex mt-6">
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 relative">
      {phases.map(({ image, title, text }, i) => (
        <>
          <div key={`applications-${i + 1}`} className="flex flex-col">
            <div className="flex flex-col justify-center h-52">
              <Image
                src={image}
                sizes="100vw"
                alt={`illustration de la méthode ${i + 1}`}
                className="sm:w-auto sm:h-full lg:w-full lg:h-auto"
              />
            </div>
            <h4 className="fr-h5 text-blue-900 mt-6 mb-3">{title}</h4>
            <p className="fr-text--sm">{text}</p>
          </div>
          {arrows[i] !== undefined && (
            // <div className="w-20 relative bg-pink-100">
            <div className={`absolute z-10 ${arrows[i].position}`}>
              <Image
                src={arrows[i].image}
                alt={`fleche ${i + 1}`}
                width={arrows[i].width}
                height={arrows[i].height}
              />
            </div>
            // </div>
          )}
        </>
      ))}
    </div>
  )
}
