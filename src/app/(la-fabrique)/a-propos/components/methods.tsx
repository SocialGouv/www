import Image from "next/image"
import { fr } from "@codegouvfr/react-dsfr"

import imageAgile from "../images/agile.svg"
import imageMethod1 from "../images/method-1.svg"
import imageMethod2 from "../images/method-2.svg"
import imageMethod3 from "../images/method-3.svg"
import imageMethod4 from "../images/method-4.svg"
import imageMethod5 from "../images/method-5.svg"

const methods = [
  {
    image: imageMethod1,
    title: "Une recherche d'impact",
    text: "Un pilotage par la finalité et non par les moyens. L'objectif est d'avoir des utilisateurs satisfaits et non de créer un outil.",
  },
  {
    image: imageMethod2,
    title: "Des usagers au centre du projet",
    text: "Un produit centré sur les besoins des usagers et non de l'administration.",
  },
  {
    image: imageMethod3,
    title: "De l'amélioration continue",
    text: "Un produit développé de manière itérative et incrémentale en confrontation permanente au terrain.",
  },
  {
    image: imageMethod4,
    title: "Un porteur dédié",
    text: "Le porteur du produit vient du terrain, il a un temps dédié au projet et est capable de travailler selon les méthodes des startups d'État.",
  },
  {
    image: imageMethod5,
    title: "Des équipes autonomes",
    text: "Qui prennent leurs décisions seules, pour atteindre leurs objectifs, et qui produisent des ressources ouvertes. Les équipes sont pluridisciplinaires et mélangent des compétences privé-public.",
  },
]

function Method({
  method,
  index,
}: {
  method: (typeof methods)[number]
  index: number
}) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="h-52">
        <Image
          sizes="100vw"
          src={method.image}
          style={{ width: "auto", height: "100%" }}
          alt={`illustration de la méthode ${index + 1}`}
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="text-9xl font-bold text-blue-900">{index + 1}</div>
        <div className="text-blue-900 font-bold">{method.title}</div>
      </div>
      <p className="fr-text--sm">{method.text}</p>
    </div>
  )
}

export default function Methods() {
  const blueCumulus = fr.colors.decisions.background.alt.blueCumulus.default

  return (
    <section>
      <div className="fr-container">
        <h2 className="fr-h2 fabnum-title--h2">
          Quelles sont nos méthodes de travail ?
        </h2>
        <h3 className="fr-h3 fabnum-title--h3">L&apos;approche</h3>
        <p className="fr-text--lg text-justify">
          L&apos;approche startup d&apos;Etat introduit une nouvelle manière de
          concevoir l&apos;action publique et le développement de produits
          numériques. Cela permet de garantir un cadre à la fois pour les
          équipes mais également pour nos partenaires.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-12 mb-12 mt-12">
          {methods.map((method, i) => (
            <Method key={`method-${i}`} method={method} index={i} />
          ))}
        </div>
        <p className="fr-text--lg text-center text-blue-900 font-bold">
          L&apos;approche &quot;Startup d&apos;État&quot; n&apos;est autre que
          la transposition des pratiques produit et lean startup au sein de
          l&apos;État.
        </p>
      </div>

      <div className="p-12" style={{ backgroundColor: blueCumulus }}>
        <div className="fr-container">
          <h3 className="fr-h3 fabnum-title--h3">La méthode Agile</h3>
          <div className="flex gap-12 items-center mt-12">
            <div className="w-96">
              <Image
                sizes="100vw"
                src={imageAgile}
                alt="illustration de la méthode agile"
                style={{ width: "auto", height: "100%" }}
              />
            </div>
            <div className="flex-1">
              <p className="fr-text--md text-justify">
                À la Fabrique Numérique nous favorisons l&apos;expérimentation
                de nouvelles idées et encourageons les approches agiles. Elle
                permet aux porteurs de projets de tester rapidement leurs
                solutions, de les ajuster en fonction des retours
                d&apos;utilisateurs et d&apos;itérer pour parvenir à des
                résultats optimaux.
              </p>
              <p className="fr-text--md text-justify">
                L&apos;approche Agile est largement utilisée dans le
                développement de projets numériques au sein de la Fabrique. Elle
                favorise la flexibilité, la collaboration et l&apos;itération
                continue. Nos équipes travaillent par cycles courts pour
                développer et améliorer les fonctionnalités en fonction des
                retours d&apos;utilisateurs et des besoins émergents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
