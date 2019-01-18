import React from "react";
import { Hero, Layout, Section } from "../../src/composants";

const title = <div>C&apos;est reparti pour 6 mois</div>;

const actuBoard2 = () => (
  <Layout>
    <Hero
      title="Lucie, Jasmine, Jonathan et Daniel poursuivent leur aventure !"
      tagline=""
    />
    <Section
      title={title}
      subTitle="Paris, le 15 janvier 2018"
      className="section-color"
    >
      <div className="container">
        <br />
        <br />
        Simplification des relations avec les usagers, gains de temps, mise en
        relation de professionnels facilitée, simplicité d’utilisation, tels
        sont les atouts des services numériques innovants portés par nos
        intrapreneurs Lucie, Jasmine, Jonathan et Daniel, agents de nos
        ministères. <br />
        <br />
        Ce 15 janvier, le board de l’incubateur des ministères sociaux a donné
        son feu vert à la poursuite des startups incubées. <br />
        <br />
        <center>
          <img
            alt="Panneau pitch"
            src="/static/images/actus/board-0119.jpg"
            width="60%"
          />
          <br />
        </center>
        <br />
        <br />
        Présidé par Jean-Martin Delorme, secrétaire général adjoint des
        ministères sociaux et d’Hélène Brisset, directrice de la DSI, en
        présence des managers de plusieurs directions de nos ministères, ce
        rendez-vous bi-annuel a permis de faire le point sur les startups E-MJPM
        et WorkInFrance de l’incubateur. Des résultats concrets pour ces deux
        startups d’Etat dont les plateformes en ligne sont de plus en plus
        utilisées sur le territoire et facilitent le travail de nombreux
        professionnels. <br />
        Le souhait du board est clair : accélérer la cadence de déploiement dès
        ce début d’année ! <br />
        <br />
        Souhaitons à nos intrapreneurs de maintenir le cap avec persévérance, et
        rendez-vous dans 6 mois pour le prochain board !
      </div>
    </Section>
  </Layout>
);

export default actuBoard2;
