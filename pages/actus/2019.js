import React from "react";
import { Hero, Layout, Section } from "../../src/composants";

const title = (
  <div>
    L'incubateur des ministères sociaux vous souhaite une très bonne année 2019
    !
  </div>
);

const BA2019 = () => (
  <Layout>
    <Hero
      title="L'incubateur des ministères sociaux vous souhaite une très bonne année 2019
      !"
      tagline="Plein de beaux produits"
    />
    <Section title=" " subTitle=" " className="section-color">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <img
            alt="l'aventure commence"
            src="/static/images/actus/bonne-annee-2019.jpg"
          />
        </div>
        <br />
      </div>
    </Section>
  </Layout>
);

export default BA2019;
