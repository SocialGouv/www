import { BlocCards, Layout } from "../../src/composants";
import { Cards } from "../index";

export default () => (
  <Layout>
    <section className="section-white">
      <div className="container">
        <h1>Code du travail numérique</h1>
        <h3>
          Faciliter l'accès au droit du travail pour les employeur·e·s et les
          employé·e·s.
        </h3>
        Et : <span data-tip="hello world">exemple de tooltip</span>
      </div>
    </section>
    <BlocCards title="Nos autres startups" cards={[Cards.emjpm, Cards.wif]} />
  </Layout>
);
