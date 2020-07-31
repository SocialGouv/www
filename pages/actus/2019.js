import React from "react";

import { Hero, Layout, Section } from "../../src/composants";

const BA2019 = () => (
  <Layout>
    <Hero
      title="La fabrique numérique des ministères sociaux vous souhaite une très bonne année 2019
      !"
      tagline="Plein de beaux produits"
    />
    <Section title=" " subTitle=" " className="section-color">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <img
            alt="l'aventure commence"
            src="/images/actus/bonne-annee-2019.jpg"
          />
        </div>
        <br />
      </div>
    </Section>
  </Layout>
);

export default BA2019;
