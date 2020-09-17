import React from "react";

import { Layout, Section } from "../src/composants";

const Mentions = () => (
  <Layout>
    <Section title="Mentions légales" subTitle="">
      <br />
      <br />
      <br />
      <h3>Editeur de la plateforme</h3>
      La Plateforme est éditée par la{" "}
      <a href="https://fabrique.social.gouv.fr/">
        Fabrique des Ministères sociaux
      </a>{" "}
      situé :
      <br />
      <br />
      Tour Mirabeau <br />
      39-43 Quai André Citroën
      <br />
      75015 PARIS
      <br />
      Tél : 01 40 56 60 00
      <br />
      <h3>Directeur de la publication</h3>
      Hélène Brisset - Directrice du Numérique
      <h3>Hébergement de la plateforme</h3>
      Ce site est hébergé par Microsoft Azure France (région France centre) :
      <br />
      Microsoft France 37 Quai du Président Roosevelt 92130 ISSY-LES-MOULINEAUX
      <br />
      <h3>À savoir</h3>
      Le site ne récole ni ne traite aucune donnée à caractère personnel. La
      mesure d&apos;audience (nombre de visites, pages consultées) est réalisée
      par un outil libre intitulé <a href="https://matomo.org">Matomo</a>{" "}
      spécifiquement paramétré, respectant les conditions d&apos;exemption du
      consentement de l&apos;internaute définies par la{" "}
      <a href="https://www.cnil.fr/fr/solutions-pour-la-mesure-daudienc">
        recommandation « Cookies »
      </a>{" "}
      de la Commission nationale informatique et libertés (CNIL). Cela signifie,
      notamment, que ces cookies ne servent qu&apos;à la production de
      statistiques anonymes et ne permettent pas de suivre la navigation de
      l&apos;internaute sur d&apos;autres sites. Vous pouvez tout de même
      désactiver cet outil :
      <br />
      <iframe
        title="Matomo"
        style={{ border: 0, height: 200, width: "100%" }}
        src="https://matomo.fabrique.social.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=&fontSize=&fontFamily="
      />
    </Section>
  </Layout>
);

export default Mentions;
