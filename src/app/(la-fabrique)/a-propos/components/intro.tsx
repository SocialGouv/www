import Image from "next/image"

export default function Intro() {
  return (
    <section>
      <div className="fr-container gap-6 flex">
        <div className="flex-1">
          <h1 className="fr-display--md">À propos de la Fabrique</h1>
          <p className="fr-text--lead">
            La Fabrique du numérique c&apos;est l&apos;incubateur de startups
            d&apos;État des Ministères Sociaux (Santé | Solidarité | Travail).
          </p>
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
          <address className="font-bold">
            Nos locaux se situent dans la tour Mirabeau à Paris :<br />
            39 Quai André Citroën
            <br />
            75015 Paris
          </address>
        </div>
        <div className="flex align-center">
          <Image
            width={500}
            height={400}
            src="https://placehold.co/500x400"
            alt="Illustration de la Fabrique numérique"
          />
        </div>
      </div>
    </section>
  )
}
