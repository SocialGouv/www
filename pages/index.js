import {
  Api,
  Article,
  Doc,
  Footer,
  Form,
  Hero,
  Nav,
  Newsletter,
  Notes,
  Notifications,
  Section,
  SectionColors,
  SvgIcons,
  Typography
} from "../src/composants";

import "../src/assets/css/index.css";

const App = () => (
  <div>
    <SvgIcons />
    <Nav />
    <Hero title="titre 1" subTitle="subTitle 1" />
    <Section className="section-dark" title="Titre de section 2" subTitle="subTitle 2">
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <p className="column">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="column">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </Section>
    <Section title="Titre de section 3" subTitle="subTitle 3">
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <p className="column">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="column">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </Section>
    <Section className="section-color" title="Titre de section 3" subTitle="subTitle 3">
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <p className="column">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="column">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </Section>
    <Typography />
    <SectionColors />
    <Form />
    <Doc />
    <Newsletter />
    <Article />
    <Notes />
    <Notifications />
    <Api />
    <Footer />
  </div>
);

export default App;
