import { Section, Layout, AllActus, Hero } from "../src/composants";

import news from "../src/data/news";

const News = ({ id, title, date, html }) => (
  <div className="row">
    <div
      className="panel"
      style={{ width: "80%", margin: "20px auto", paddingTop: 0 }}
    >
      <div className="panel__header">
        <h4>
          {title}
          <small className="panel__header-extra" style={{ float: "right" }}>
            {date}
          </small>
        </h4>
      </div>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

const App = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section title="Brèves" subTitle="" rowStyle={{ display: "block" }}>
      {news.map(n => (
        <News {...n} key={n.title} />
      ))}
    </Section>
    <Section className="section-color" title="A la une" subTitle="">
      <div className="row" style={{ color: "black" }}>
        <AllActus.actuSaison2 />
        <AllActus.actuCdtn1 />
        <AllActus.actuBoard1 />
      </div>
    </Section>
    <Section className="section-dark" title="Précédemment" subTitle="" />
  </Layout>
);

export default App;
