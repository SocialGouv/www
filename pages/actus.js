import { Section, Layout } from "../src/composants";

const App = () => (
  <Layout>
    <Section title="Actualité du code du travail numérique" subTitle="">
      <p className="column">Découvrez les étapes de développement du projet.</p>
    </Section>
    <Section
      className="section-color"
      title="Tests automatisés de navigateur"
      subTitle="Augmenter la confiance grâce aux tests automatisés avec cypress.io"
    >
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Section>
    <Section
      className="section-dark"
      title="Lancement du code du travail numérique"
      subTitle="boum"
    >
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Section>
  </Layout>
);

export default App;
