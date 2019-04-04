import React from "react";

import { Section, Layout, AllActus, Hero } from "../src/composants";

const Actus = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section className="section-white" title="Actus" subTitle="">
      <AllActus />
    </Section>
  </Layout>
);

export default Actus;
