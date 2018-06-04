import { Section, Layout } from "../src/composants";

const App = () => (
  <Layout>
    <Section title="Lancement de Work In France" subTitle="bim">
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Section>
    <Section
      className="section-color"
      title="Lancement de e-MJPM"
      subTitle="bam"
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
