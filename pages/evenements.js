import React from "react";
import { Layout, EventBriteEvents } from "../src/composants";

const Evenement = () => (
  <Layout>
    <section className="section section-white">
      <div className="container">
        <h1>Événements</h1>
        <p>Nos prochains événements</p>
        <EventBriteEvents
          token="WJUD47PQRCXPDRECYNR6"
          organizerId="17397223023"
        />
      </div>
    </section>
  </Layout>
);

export default Evenement;
