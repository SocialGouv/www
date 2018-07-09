import { Section, Layout, AllActus } from "../src/composants";

const App = () => (
  <Layout>
    <Section
      className="section-color"
      title="Toutes les actualités"
      subTitle="A la une"
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
