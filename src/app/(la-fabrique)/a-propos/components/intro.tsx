import Image from "next/image"

import imageMapPin from "../images/map-pin.svg"
import imageLogoFabrique from "../images/logo-fabrique.svg"

export default function Intro() {
  return (
    <section className="fr-container">
      <h1 className="fr-h1">À propos de la Fabrique</h1>
      <p className="fr-text--lead text-blue-950">
        La Fabrique du numérique c&apos;est l&apos;incubateur de startups
        d&apos;État des Ministères Sociaux (Santé | Solidarité | Travail).
      </p>
      <div className="mt-16 gap-x-28 flex">
        <div className="flex-1">
          <p className="fr-text--md text-justify">
            L&apos;incubateur vise à encourager l&apos;innovation numérique et
            la transformation digitale au sein des ministères et des services
            sociaux en créant un environnement propice à la collaboration, à
            l&apos;expérimentation et au développement de solutions innovantes.
          </p>
          <p className="fr-text--md text-justify">
            Nous accompagnons des startups d&apos;État qui répondent à un
            problème de politique publique par la création de produits
            numériques, le tout dans une approche incrémentale. La Fabrique du
            numérique propose un cadre technique sur lequel les startups doivent
            s&apos;appuyer: nous pilotons les budgets des startups d&apos;État
            en toute transparence, nous appréhendons les aspects de conformité
            (RGDP, RGAA, RGS) et mettons une core team à disposition des
            produits.
          </p>
        </div>
        <div className="relative">
          <Image
            height={220}
            src={imageLogoFabrique}
            style={{ objectFit: "contain" }}
            alt={`Logo de la Fabrique Numérique des ministères sociaux`}
          />
        </div>
      </div>
      <address className="font-bold">
        Nos locaux se situent dans la tour Mirabeau à Paris :<br />
        <div className="flex mt-2">
          <Image
            width={48}
            height={48}
            src={imageMapPin}
            alt="illustration de l'addresse"
          />
          <div className="ml-2">
            39 Quai André Citroën
            <br />
            75015 Paris
          </div>
        </div>
      </address>
    </section>
  )
}
