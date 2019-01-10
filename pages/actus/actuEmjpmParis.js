import React from "react";
import { Hero, Layout, Section } from "../../src/composants";

const title = <div>E-mjpm s'implante à Paris</div>;

const actuEmjpmParis = () => (
  <Layout>
    <Hero
      title="e-MJPM invité au Tribunal d'Instance de Paris"
      tagline="Une nouvelle étape franchie avec succès"
      backgroundImage="/static/images/actus/TGI-Paris.jpg"
    />
    <Section
      title={title}
      subTitle="Paris, le 6 décembre 2018"
      className="section-color"
    >
      <div className="container">
        <br />
        L'outil e-MJPM a officiellement été présenté et recommandé lors de la
        réunion organisée par les magistrats du TI de Paris pour les mandataires
        judiciaires à la protection des majeurs agréés sur le département.
        <br /> A cette occasion étaient présents Mme Anne Caron Déglise, Avocate
        Générale à la Cour de Cassation, Mme Sophie Degouys Première Vice
        Présidente chargée de l'administration du Tribunal d'Instance de Paris,
        Mme Kretowicz, 1ere Vice-Présidente Adjointe au pôle Protection des
        majeurs, ainsi que les juges des tutelles et les mandataires rattachés
        au Tribunal. <br />
        <br /> Trouver rapidement le bon professionnel pour les majeurs à
        protéger, telle est la mission de la startup e-MJPM qui met tout en
        œuvre pour être toujours au plus proche des attentes de ses usagers.
        C'est donc avec fierté que l'équipe a pu venir échanger au sujet de son
        outil grâce au temps de parole consacré à cet effet dans le déroulement
        de la matinée organisée par le Tribunal. e-MJPM a pu constater le
        soutien des magistrats qui ont annoncé a l'ensemble des mandataires la
        suppression du tableau Excel utilisé auparavant au profit de l'outil.
        <br />
        <br />
        Ces témoignages démontrent un véritable intérêt de la part des acteurs
        de la protection juridique des majeurs pour un outil répondant à une
        problématique partagée. Cela conforte, bien évidemment, l'équipe dans
        son projet de se lancer à la conquête de nouveaux territoires.
        <br />
        <br /> Pour plus d'informations au sujet de la startup e-MJPM développée
        par l’Incubateur des Ministères Sociaux, nous vous invitions à regarder
        une vidéo explicative (https://www.dailymotion.com/video/x6z9qkc) ou
        nous contacter directement par email (contact@emjpm.beta.gouv.fr).
      </div>
    </Section>
  </Layout>
);

export default actuEmjpmParis;
