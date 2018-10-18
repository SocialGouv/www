import { Hero, Layout, Section } from "../../src/composants";

const title = (
  <div>
    And the winner is...
    <span data-tip="responsable des développements techniques, biz et autres" />{" "}
  </div>
);

const JourJ = () => (
  <Layout>
    <Hero title="Jour J" tagline="C'est l'heure du choix !" />
    <Section
      title={title}
      subTitle="Retour sur le déroulé de la journée de sélection"
      className="section-color"
    >
      <div className="container">
        Au terme d'une journée intensive, ce ne sont pas deux mais trois projets
        qui ont été choisis !<br /> Tout a commencé autour d'un petit déjeuner
        bio. Sur la dizaine de candidats pré-sélectionnés, c'est au final huit
        candidats qui sont venus le 11 octobre chez notre partenaire le Numa, au
        coeur de Paris. <br />
        <br />
        Les idées présentées furent les suivantes : <br />- Rendre plus
        performant le processus de domiciliation des personnes sans domicile
        stable <br />- La création d'un guichet d'inscription aux formation
        qualifiantes du ministère des sports. <br />- Aider les services de
        l'état à mettre rapidement à l'abris les personnes à la rue durant
        l'hiver. <br />- Mettre en valeur les territoires déficitaires en
        professionels de santé afin de favoriser leur installation <br />-
        "Dites le nous une fois" pour les entreprises étrangères détachant des
        salariés en France <br />- Outiller les travailleurs sociaux pour
        accompagner les exclus numériques <br />- Stimuler les jeunes dans leurs
        démarches tout au long de leur parcours afin d'assurer un meilleur suivi
        par les DIRECCTE et les conseillers Mission Locale. <br />- Améliorer
        l’accès à l’offre de soins en cas d'urgence.
        <br />
        <br /> La matinée et le début d'après-midi ont été consacrés à un
        coaching des candidats puis à la présentation des pitchs. Puis, à 15h,
        les présentations officielles ont commencé devant un jury constitué
        d'experts : Jasmine Meurin, intrapreneur de la saison 1 sur le produit
        e-mjpm, Johnathan Redt-Gensinger , intrapreneur de la saison 1 sur le
        produit workInFrance, Basile Michardière (Makesense.org) et Julie
        Jouvencel (coding-days.com) deux experts du secteur numérique, Vincent
        Gaillot, directeur de projet auprès de la secrétaire générale chef du
        pôle modernisation et Hélène Brisset, notre directrice.
        <br /> Les orateurs ont eu beaucoup de talent ! C'est au final les
        projets 1, 3 et 4 qui ont remporté l'adhésion du jury. <br />
        <br />A très bientôt pour avoir des nouvelles de nos nouveaux "intras" !
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img src="/static/images/pitchday-1.jpg" width="70%" />
        </div>
        <br />
      </div>
    </Section>
  </Layout>
);

export default JourJ;
