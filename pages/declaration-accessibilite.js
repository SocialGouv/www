import React from "react";

import { Layout, Section } from "../src/composants";

const Mentions = () => (
  <Layout>
    <Section title="Déclaration d'accessibilité" subTitle="">
      <br />
      <br /> <br />
      <p>
        <span>Ministères sociaux</span> s’engage à rendre son service
        accessible, conformément à l’article 47 de la loi n° 2005-102 du 11
        février 2005.
      </p>
      <p>
        Cette déclaration d’accessibilité s’applique à{" "}
        <span>Fabrique numérique des ministères sociaux</span>.
      </p>
      <h2>État de conformité</h2>
      <p>
        <span>Fabrique numérique des ministères sociaux</span> est
        <b>
          <span data-printfilter="lowercase">non conforme</span> avec le{" "}
          <span data-negate="">RGAA 4.1</span>
        </b>
        .
        <span>
          <span>{"Le site n'a encore pas été audité."}</span>
        </span>
      </p>
      <h2>Contenus non accessibles</h2>
      <h2>{"Établissement de cette déclaration d'accessibilité"}</h2>
      <p>
        Cette déclaration a été établie le{" "}
        <b>
          <span>9 décembre 2021</span>
        </b>
        .
      </p>
      <h2>Amélioration et contact</h2>
      <p>
        Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
        pouvez contacter le responsable de{" "}
        <span>Fabrique numérique des ministères sociaux</span> pour être orienté
        vers une alternative accessible ou obtenir le contenu sous une autre
        forme.
      </p>
      <ul className="basic-information feedback h-card">
        <li>
          E-mail :{" "}
          <a href="mailto:contact@fabrique.social.gouv.fr">
            contact@fabrique.social.gouv.fr
          </a>
        </li>
      </ul>
      <h2>Voie de recours</h2>
      <p>
        Cette procédure est à utiliser dans le cas suivant : vous avez signalé
        au responsable du site internet un défaut d’accessibilité qui vous
        empêche d’accéder à un contenu ou à un des services du portail et vous
        n’avez pas obtenu de réponse satisfaisante.
      </p>
      <p>Vous pouvez :</p>
      <ul>
        <li>
          Écrire un message au{" "}
          <a href="https://formulaire.defenseurdesdroits.fr/">
            Défenseur des droits
          </a>
        </li>
        <li>
          Contacter{" "}
          <a href="https://www.defenseurdesdroits.fr/saisir/delegues">
            le délégué du Défenseur des droits dans votre région
          </a>
        </li>
        <li>
          Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :
          <br />
          Défenseur des droits
          <br />
          Libre réponse 71120 75342 Paris CEDEX 07
        </li>
      </ul>
      <hr />
      <p>
        {"Cette déclaration d'accessibilité a été créé le "}
        <span>9 décembre 2021</span> grâce au{" "}
        <a href="https://betagouv.github.io/a11y-generateur-declaration/#create">
          {"Générateur de Déclaration d'Accessibilité de BetaGouv"}
        </a>
        .
      </p>
    </Section>
  </Layout>
);

export default Mentions;
