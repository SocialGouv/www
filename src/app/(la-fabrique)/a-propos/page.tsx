import { fr } from "@codegouvfr/react-dsfr"
import Image from "next/image"

export default function AboutPage() {
  const theme = fr.getColors(false)
  const blueCumulus = theme.decisions.background.alt.blueCumulus.default

  return (
    <section>
      <div className="hero fr-container fr-py-6w gap-6 flex">
        <div className="flex-1">
          <h1 className="fr-h1">À propos de la Fabrique</h1>
          <p className="fr-text--lg">
            La Fabrique du numérique c&apos;est l&apos;incubateur de startups
            d&apos;État des Ministères Sociaux (Santé | Solidarité | Travail).
            L&apos;incubateur vise à encourager l&apos;innovation numérique et
            la transformation digitale au sein des ministères et des services
            sociaux en créant un environnement propice à la collaboration, à
            l&apos;expérimentation et au développement de solutions innovantes.
          </p>
          <p className="fr-text--lg">
            Nous accompagnons des startups d&apos;État qui répondent à un
            problème de politique publique par la création de produits
            numériques, le tout dans une approche incrémentale. La Fabrique du
            numérique propose un cadre technique sur lequel les startups doivent
            s&apos;appuyer: nous pilotons les budgets des startups d&apos;État
            en toute transparence, nous appréhendons les aspects de conformité
            (RGDP, RGAA, RGS) et mettons une core team à disposition des
            produits.
          </p>
          <p>
            Nos locaux se situent dans la tour Mirabeau à Paris : 📍 39 quai
            andré Citroën, Paris 15e
          </p>
        </div>
        <div className="flex-1">
          <Image
            alt="Illustration de la Fabrique numérique"
            src="https://placehold.co/600x400"
            height={400}
            width={600}
          />
        </div>
      </div>

      <div className="about fr-container">
        <h2 className={fr.cx("fr-h2")}>Quelle est notre histoire</h2>
        <div>2013</div>
        <p className="fr-text">
          En 2013, pour répondre au besoin d&apos;innovation et de refonte de la
          plateforme de données publiques data.gouv.fr, une première équipe de
          travail est constituée. En décembre 2013, la nouvelle version de
          data.gouv.fr est lancée : c&apos;est le premier service numérique
          public conçu selon une approche que l&apos;on surnommera ensuite
          &quot;Startup d&apos;État&quot;. Dans la foulée de data.gouv.fr,
          d&apos;autres équipes sont constituées pour moderniser l&apos;État et
          s&apos;attaquer à des problèmes concrets rencontrés par les citoyens
          et les entreprises.
        </p>
        <div>2015</div>
        <p>
          L&apos;incubateur des services numériques, mission de la Direction
          interministérielle du numérique DINUM (anciennement DINSIC: direction
          interministérielle du numérique des systèmes d&apos;information et de
          communication), est officiellement né en 2015. Il a pour objectif de
          regrouper les Startups d&apos;État et d&apos;animer sa communauté. Son
          site beta.gouv.fr est alors lancé.
        </p>
        <div>2017</div>
        <p>
          Depuis 2015, l&apos;incubateur de services numériques accompagne
          plusieurs administrations dans la construction de leurs Startups
          d&apos;État et, en parallèle, de premiers ministères se dotent de leur
          incubateur en prenant modèle sur celui de la DINSIC : c&apos;est ainsi
          qu&apos;en 2017 la Fabrique du Numérique des ministères sociaux est
          créée au sein de la DNUM.
        </p>
        <div>Aujourd&apos;hui</div>
        <p>
          La Fabrique du numérique est mobilisable pour l&apos;ensemble des
          politiques des ministères sociaux avec trois ministères de tutelle
          (Santé | Solidarité | Travail) : Cela a généré 27 Startups
          d&apos;État, 11 intrapreneurs, 240 projets open-source, 52784 commits.
        </p>
      </div>

      <div className="about fr-container">
        <h2 className={fr.cx("fr-h2")}>Quelles sont nos méthodes de travail</h2>
        <h3 className={fr.cx("fr-h3")}>L&apos;approche</h3>
        <p className="fr-text--lg">
          L&apos;approche startup d&apos;Etat introduit une nouvelle manière de
          concevoir l&apos;action publique et le développement de produits
          numériques. Cela permet de garantir un cadre à la fois pour les
          équipes mais également pour nos partenaires.
        </p>
        <div>
          <div>
            <div></div>
            <div>1 - Une recherche d&apos;impact</div>
            <div>
              Un pilotage par la finalité et non par les moyens. L&apos;objectif
              est d&apos;avoir des utilisateurs satisfaits et non de créer un
              outil.
            </div>
          </div>
          <div>
            <div></div>
            <div>2 - Des usagers au centre du projet</div>
            <div>
              Un produit centré sur les besoins des usagers et non de
              l&apos;administration.
            </div>
          </div>
          <div>
            <div></div>
            <div>3 - De l&apos;amélioration continue</div>
            <div>
              Un produit développé de manière itérative et incrémentale en
              confrontation permanente au terrain.
            </div>
          </div>
          <div>
            <div></div>
            <div>
              4 - Un porteur dédié souhaitant travailler selon les méthodes
              startup d&apos;État
            </div>
            <div>
              Le porteur du produit vient du terrain, il a un temps dédié au
              projet et est capable de travailler selon les méthodes des
              startups d&apos;État.
            </div>
          </div>
          <div>
            <div></div>
            <div>5 - Des équipes autonomes</div>
            <div>
              Qui prennent leurs décisions seules, pour atteindre leurs
              objectifs, et qui produisent des ressources ouvertes. Les équipes
              sont pluridisciplinaires et mélangent des compétences
              privé-public.
            </div>
          </div>
        </div>
        <p className="fr-text--lg">
          L&apos;approche &quot;Startup d&apos;État&quot; n&apos;est autre que
          la transposition des pratiques produit et lean startup au sein de
          l&apos;État.
        </p>
      </div>
      <div style={{ backgroundColor: blueCumulus }}>
        <div className="fr-container">
          <h3 className={fr.cx("fr-h3")}>La méthode Agile</h3>
          <p>
            À la Fabrique Numérique nous favorisons l&apos;expérimentation de
            nouvelles idées et encourageons les approches agiles. Elle permet
            aux porteurs de projets de tester rapidement leurs solutions, de les
            ajuster en fonction des retours d&apos;utilisateurs et d&apos;itérer
            pour parvenir à des résultats optimaux.
          </p>
          <p>
            L&apos;approche Agile est largement utilisée dans le développement
            de projets numériques au sein de la Fabrique. Elle favorise la
            flexibilité, la collaboration et l&apos;itération continue. Nos
            équipes travaillent par cycles courts pour développer et améliorer
            les fonctionnalités en fonction des retours d&apos;utilisateurs et
            des besoins émergents.
          </p>
        </div>
      </div>
      <div>
        <div className="fr-container">
          <h2 className={fr.cx("fr-h2")}>
            Quels sont nos indicateurs de performance (KPI) ?
          </h2>
          <div className="kpis">
            <div className="kpi">
              <div>27</div>
              <div>Nombre de projets incubés</div>
            </div>
            <div className="kpi">
              <div>95%</div>
              <div>Taux de réussite des projets</div>
            </div>
            <div className="kpi">
              <div>6 mois</div>
              <div>Délai moyen de mise en service d&apos;un outil</div>
            </div>
            <div className="kpi">
              <div>80%</div>
              <div>Niveau de satisfaction des utilisateurs</div>
            </div>
            <div className="kpi">
              <div>2x</div>
              <div>Impact sur des servies concernés</div>
            </div>
            <div className="kpi">
              <div>2m</div>
              <div>Économies réalisées</div>
            </div>
            <div className="kpi">
              <div>24</div>
              <div>Nombre de collaborations interministèrielles</div>
            </div>
            <div className="kpi">
              <div>XX</div>
              <div>Xxxxxxxxxxxxxx</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
