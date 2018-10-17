import React from "react";
import { Hero, Layout, Section } from "../../src/composants";

import "../../src/custom.css";

const Board1 = () => (
  <Layout>
    <Hero
      style={{ backgroundImage: `url(/static/images/board.jpg)` }}
      title="L’aventure Startups d’Etat continue !"
      tagline="Board #1"
    />
    <Section title="" subTitle="">
      <div className="container">
        L’aventure Startups d’Etat continue pour Lucie Delorme et Jasmine Meurin
        (DRJSCS HDF), Daniel BALMY (DIRECCTE IDF) et Jonathan Redt-Gensinger
        (DGT) qui ont rejoint l’incubateur des ministères sociaux en janvier
        2018.
        <br />
        <br />
        « A quoi ça sert ? »… « Quel problème on essaie de résoudre ? »…
        L’équipe de la mission Incubateur de la DSI (direction des systèmes
        d’information), appuyée par des coachs experts, leur apporte, depuis 6
        mois, un cadre et les outils nécessaires pour pouvoir créer leur produit
        numérique, en mode Startup d’Etat.
        <br /> <br />
        Le Board de l’incubateur, réuni pour la première fois ce 22 juin 2018 en
        présence de Sabine Fourcade, Secrétaire générale des ministères sociaux,
        Annaïck Laurent, Secrétaire générale adjointe, Hélène Brisset,
        Directrice des systèmes d’information et les managers des porteurs
        d’idées (DRDJSCS Hauts-de-France, DIRECCTE Ile de France et Direction
        Générale du Travail), a décidé de reconduire les missions des
        intrapreneurs pour une durée de 6 mois. <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img src="/static/images/board1.jpg" width="50%" />
        </div>
        <br />
        « Les résultats obtenus bousculent nos façons de travailler et nos
        habitudes », « C’est bluffant. On a réussi à faire en 6 mois ce qu’on ne
        parvenait pas à faire ! », « Cela donne plein d’idées avec un même
        traitement pour d’autres sujets » tels sont les propos recueillis auprès
        des participants du Board. L’objectif de mettre en production un service
        rapidement, puis de l’améliorer en continu, au plus près des attentes
        des utilisateurs a été atteint. Confrontation au terrain très tôt, droit
        à l’erreur, travail en cycles courts, auto-organisation sont les
        principes clés de l’incubateur.
        <br />
        <br />
        Pour rappel,{" "}
        <a href="/actus/saison2">
          <b>
            un deuxième appel à idées va prochainement être lancé auprès de tous
            les agents des ministères sociaux.
          </b>
        </a>
      </div>
    </Section>
  </Layout>
);

export default Board1;
