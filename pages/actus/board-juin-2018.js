import React from "react";
import { Hero, Layout, Section } from "../../src/composants";

import "../../src/custom.css";

const Board1 = () => (
  <Layout>
    <Hero
      style={{ backgroundImage: `url(/static/images/board.jpg)` }}
      title="L&apos;aventure Startups d&apos;Etat continue !"
      tagline="Board #1"
    />
    <Section title="" subTitle="">
      <div className="container">
        L&apos;aventure Startups d&apos;Etat continue pour Lucie Delorme et
        Jasmine Meurin (DRJSCS HDF), Daniel BALMY (DIRECCTE IDF) et Jonathan
        Redt-Gensinger (DGT) qui ont rejoint l&apos;incubateur des ministères
        sociaux en janvier 2018.
        <br />
        <br />« A quoi ça sert ? »… « Quel problème on essaie de résoudre ? »…
        L&apos;équipe de la mission Incubateur de la DSI (direction des systèmes
        d&apos;information), appuyée par des coachs experts, leur apporte,
        depuis 6 mois, un cadre et les outils nécessaires pour pouvoir créer
        leur produit numérique, en mode Startup d&apos;Etat.
        <br /> <br />
        Le Board de l&apos;incubateur, réuni pour la première fois ce 22 juin
        2018 en présence de Sabine Fourcade, Secrétaire générale des ministères
        sociaux, Annaïck Laurent, Secrétaire générale adjointe, Hélène Brisset,
        Directrice des systèmes d&apos;information et les managers des porteurs
        d&apos;idées (DRDJSCS Hauts-de-France, DIRECCTE Ile de France et
        Direction Générale du Travail), a décidé de reconduire les missions des
        intrapreneurs pour une durée de 6 mois. <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img src="/static/images/board1.jpg" width="50%" />
        </div>
        <br />« Les résultats obtenus bousculent nos façons de travailler et nos
        habitudes », « C&apos;est bluffant. On a réussi à faire en 6 mois ce
        qu&apos;on ne parvenait pas à faire ! », « Cela donne plein d&apos;idées
        avec un même traitement pour d&apos;autres sujets » tels sont les propos
        recueillis auprès des participants du Board. L&apos;objectif de mettre
        en production un service rapidement, puis de l&apos;améliorer en
        continu, au plus près des attentes des utilisateurs a été atteint.
        Confrontation au terrain très tôt, droit à l&apos;erreur, travail en
        cycles courts, auto-organisation sont les principes clés de
        l&apos;incubateur.
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
