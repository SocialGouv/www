import React from "react";
import PropTypes from "prop-types";

import { Section, Layout, AllActus, Hero } from "../src/composants";
import news from "../src/data/news";

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
    >
     <div class="typeform-widget" data-url="https://incubateurministeressociaux.typeform.com/to/BNlCIL" data-transparency="50" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=BNlCIL&utm_source=typeform.com-12986254-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>
    </Section>
    !!!Ou ici !!!
    <Section
      className="section-color cards"
      title="Articles de fond"
      subTitle=""
    />
  </Layout>
);

export default Actus;
