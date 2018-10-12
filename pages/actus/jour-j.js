import { Hero, Layout, Section } from "../../src/composants";

import "../../src/custom.css";

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
        Au terme d'une journée intensive, il n'en est resté que deux.
        <br /> Tout a commencé autour d'un petit déjeuner bio. Sur la dizaine de
        candidats pré-sélectionnés, c'est au final huit candidats qui sont venus
        le 11 octobre chez notre partenaire le Numa, au coeur de Paris. Les
        idées présentées furent les suivantes : <br />- Rendre plus performant
        le processus de domiciliation des personnes sans domicile stable <br />-
        La création d'un guichet d'inscription aux formation qualifiantes du
        ministère des sports. <br />- Aider les services de l'état à mettre
        rapidement à l'abris les personnes à la rue durant l'hiver. <br />-
        Mettre en valeur les territoires déficitaires en professionels de santé
        afin de favoriser leur installation <br />- "Dites le nous une fois"
        pour les entreprises étrangères détachant des salariés en France <br />-
        Outiller les travailleurs sociaux pour accompagner les exclus numériques{" "}
        <br />- Stimuler les jeunes dans leurs démarches tout au long de leur
        parcours afin d'assurer un meilleur suivi par les DIRECCTE et les
        conseillers Mission Locale. <br />- Améliorer l’accès à l’offre de soins
        en cas d'urgence.
        <br /> La matinée et le début d'après-midi ont été consacrés à la
        présentation des pitchs (voir encadré).
        <br /> Puis, à 15h, les présentations officielles ont commencé devant un
        jury constitué des experts suivants :<br /> - Hélène Brisset, directrice
        du système d'information d'information des ministères sociaux <br />-
        Vincent Gaillot, <br />- Jasmine Meurin, intrapreneur de la saison 1 sur
        le produit e-mjpm <br />- John Redt- , intrapreneur de la saison 1 sur
        le produit workInFrance <br />- ?? , entrepreneur chez MakeSense <br />-
        ??, entrepreneur chez Coding <br />Et il faut reconnaitre que les
        orateurs avaient du talent ! De leur propre aveux, le choix du jury
        s'averaient complexe. Mais l'arrivée de la secrétaire générale, Madame
        Sabine Fourcade, a permis de faire les choix. C'est au final X et Y qui
        remporté la saison 2 et se voient donc devenir les intrapreneurs de leur
        startup au sein de notre incubateur. Bravo à tous les participants de la
        journée pour leur dynamisme et leur enthousiasme. Et à très bientôt pour
        avoir des nouvelles de nos nouveaux "intras" !
        <div style={{ textAlign: "center" }}>
          <img src="/static/images/aventure.jpg" width="50%" />
        </div>
        <br />
        <a
          href="http://incubateur-des-ministres-sociaux-saison-2.selecteev.io/apply"
          target="_blank"
        >
          Cette plateforme
        </a>{" "}
        permet de déposer vos idées. Chacune d'entre elles sera étudiée avec
        attention.
        <br />
        Vous pouvez compléter votre candidature en plusieurs fois et reprendre
        le formulaire à tout moment grâce au lien que vous recevrez par mail
        après avoir répondu aux deux premières questions.<br />
        <br />
        Vous avez jusqu'au <b>lundi 24 Septembre 2018</b> pour déposer votre
        idée. Si votre candidature est retenue, vous serez ensuite très vite
        recontacté(e) pour participer à la journée de sélection du{" "}
        <b>jeudi 11 octobre 2018</b>. Vous participerez alors à un bootcamp
        pendant lequel vous serez coaché(e) pour{" "}
        <span data-tip="Présenter de façon très synthétique">pitcher</span>{" "}
        devant un jury d'experts.
      </div>
    </Section>
  </Layout>
);

export default JourJ;
