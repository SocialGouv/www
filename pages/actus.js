import React from "react";

import { AllActus, Hero, Layout, Section } from "../src/composants";

const Actus = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/images/all-actus.jpg)` }}
    />
    <Section className="section-white" title="Actus" subTitle="">
      <AllActus />
    </Section>
  </Layout>
);

export default Actus;
