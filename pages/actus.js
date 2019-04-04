import React from "react";
import PropTypes from "prop-types";

import { Section, Layout, AllActus, Hero } from "../src/composants";
import news from "../src/data/news.js";

// https://github.com/facebook/react/issues/377
const News = ({ title, href, date, html }) => (
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
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      {href && (
        <React.Fragment>
          {html && <br />}
          {html && <br />}
          <a href={href}>Lire la suite : {title}</a>
        </React.Fragment>
      )}
    </div>
  </div>
);

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string,
  url: PropTypes.string
};

const Actus = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section className="section-white" title="Actus" subTitle="">
      {news.map(n => (
        <News {...n} key={n.title} />
      ))}
    </Section>
  </Layout>
);

export default Actus;
