import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

import { Section, Layout, AllActus, Hero } from "../src/composants";
import news from "../src/data/news";

const ReactTypeformEmbed = dynamic(() => import("react-typeform-embed-2"), {
  ssr: false
});

// https://github.com/facebook/react/issues/377
const News = ({ title, date, html }) => (
  <div className="row">
    <div
      className="panel"
      style={{ width: "80%", margin: "20px auto", paddingTop: 0 }}
    >
      <div className="panel__header" id={date}>
        <h4>
          {title}
          <small className="panel__header-extra" style={{ float: "right" }}>
            {date}
          </small>
        </h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string
};

const Actus = () => (
  <Layout>
    <Hero
      title="Soumettez-nous vos meilleures idées"
      tagline="Participer à l'amélioration du service public"
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section
      className="section-white"
      title="Vous êtes témoin d’irritants récurrents pour les usagers ou les agents de votre service ? "
      subTitle="Vous avez une idée de solution numérique qui permettrait d’y remédier ?"
    />

    <Section
      className="section-color cards"
      title="Déposer votre idée"
      subTitle=""
    >
      <ReactTypeformEmbed
        url={"https://incubateurministeressociaux.typeform.com/to/BNlCIL"}
        buttonText="Déposer mon idée"
        style={{
          height: 500,
          margin: "0 auto",
          textAlign: "center"
        }}
        autoOpen="false"
        hideHeaders="true"
        hideFooter="true"
      />
    </Section>
  </Layout>
);

export default Actus;
