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
      située :
      <br />
      <br />
      Tour Mirabeau <br />
      39-43 Quai André Citroën
      <br />
      75739 Paris Cedex 15
      <br />
      France
      <br /><br />
      Tél : 01 40 56 60 00
      <br /><br />
      <h3>Directeur de la publication</h3>
      Madame Anne JEANJEAN, Directrice du numérique des ministères sociaux.
      <br />
      <h3>Hébergement de la plateforme</h3>
      Cette plateforme est hébergée par :
      <br /><br />
      OVH SAS
      <br />
      2 rue Kellermann
      <br />
      59100 Roubaix
      <br />
      France
      <br /><br />
      <h3>Confidentialité</h3>
      <p>La Plateforme ne traite aucune donnée à caractère personnel et ne dépose pas de cookie ou de traceurs. Toutefois, nous utilisons la solution de mesure d’audience Matomo, configurée en mode « exempté » et ne nécessitant pas le recueil de votre consentement conformément aux recommandations de la CNIL.</p>
      <iframe
        title="Matomo"
        style={{ border: 0, height: 200, width: "100%" }}
        src="https://matomo.fabrique.social.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=&fontSize=&fontFamily="
      />
    </Section>
  </Layout>
);

export default Mentions;
