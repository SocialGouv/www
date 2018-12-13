import React from "react";
import { Hero, Layout, Section } from "../../src/composants";

const title = <div>And the winner is...</div>;

const JourJ = () => (
  <Layout>
    <Hero title="Jour J" tagline="C'est l'heure du choix !" />
    <Section
      title={title}
      subTitle="Retour sur le déroulé de la journée de sélection"
      className="section-color"
    >
      <div className="container">
        Au terme d&apos;une journée intensive, ce ne sont pas deux mais trois
        projets qui ont été choisis !<br /> Tout a commencé autour d&apos;un
        petit déjeuner bio. Sur la dizaine de candidats pré-sélectionnés,
        c&apos;est au final huit candidats qui sont venus le 11 octobre chez
        notre partenaire le Numa, au coeur de Paris. <br />
        <br />
        Les idées présentées furent les suivantes : <br />
        1- Rendre plus performant le processus de domiciliation des personnes
        sans domicile stable <br />
        2- La création d&apos;un guichet d&apos;inscription aux formation
        qualifiantes du ministère des sports. <br />
        3- Aider les services de l&apos;état à mettre rapidement à l&apos;abris
        les personnes à la rue durant l&apos;hiver. <br />
        4- Mettre en valeur les territoires déficitaires en professionels de
        santé afin de favoriser leur installation <br />
        5- &quot;Dites le nous une fois&quot; pour les entreprises étrangères
        détachant des salariés en France <br />
        6- Outiller les travailleurs sociaux pour accompagner les exclus
        numériques <br />
        7- Stimuler les jeunes dans leurs démarches tout au long de leur
        parcours afin d&apos;assurer un meilleur suivi par les DIRECCTE et les
        conseillers Mission Locale. <br />
        8- Améliorer l&apos;accès à l&apos;offre de soins en cas d&apos;urgence.
        <br />
        <br /> La matinée et le début d&apos;après-midi ont été consacrés à un
        coaching des candidats puis à la présentation des pitchs.
        <center>
          <img alt="Panneau pitch" src="/static/images/pitch.jpg" width="40%" />
          <br />
        </center>
        <br /> Puis, à 15h, les présentations officielles ont commencé devant un
        jury d&apos;experts présidé par la secrétaire générale, Mme Sabine
        Fourcade accompagnée de Jasmine Meurin, intrapreneur de la saison 1 sur
        le produit e-mjpm, Johnathan Redt-Gensinger , intrapreneur de la saison
        1 sur le produit workInFrance, Basile Michardière (Makesense.org) et
        Julie Jouvencel (coding-days.com) deux experts du secteur numérique,
        Vincent Gaillot, directeur de projet auprès de la secrétaire générale
        chef du pôle modernisation et Hélène Brisset, directrice des systèmes
        d&apos;information.
        <br /> Les orateurs ont eu beaucoup de talent ! Le choix fut compliqué
        mais c&apos;est au final les projets 1, 3 et 4 qui ont remporté
        l&apos;adhésion du jury. <br />
        <br />A très bientôt pour avoir des nouvelles de nos nouveaux
        &quot;intras&quot; !<br />
        <br />
        <br />
        <center>
          <img
            alt="Le pitch day"
            src="/static/images/pitchday-1.jpg"
            width="70%"
          />
          <br />
          <i>Les participants de cette belle journée</i>
        </center>
        <br />
      </div>
    </Section>
  </Layout>
);

export default JourJ;
