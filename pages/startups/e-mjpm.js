import { BlocCards, Layout } from "../../src/composants";
import { Cards } from "../index";

export default () => (
  <Layout>
    <section className="section-white">
      <div className="container">
        <h1>E-mjpm</h1>
        <h3>
          Trouver rapidement le bon professionnel pour les majeurs à protéger
        </h3>
        Et : <span data-tip="hello world">exemple de tooltip</span>
      </div>
    </section>
    <BlocCards title="Nos autres startups" cards={[Cards.wif, Cards.cdtn]} />
  </Layout>
);
