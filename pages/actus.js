import { Section, Layout, AllActus, Hero } from "../src/composants";

const App = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section
      className="section-color"
      title="A la une"
      subTitle=""
    >
	    <div className="row" style={{ color: "black" }}>
		    <AllActus.actuSaison2 />
	        <AllActus.actuCdtn1 />
	        <AllActus.actuBoard1 />
	    </div>
    </Section>
    <Section
      className="section-dark"
      title="Précédemment"
      subTitle=""
    >
      
    </Section>
  </Layout>
);

export default App;
