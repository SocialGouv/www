import {
  Api,
  Article,
  Doc,
  Form,
  Hero,
  Newsletter,
  Notes,
  Notifications,
  Section,
  SectionColors,
  Typography
} from "../src/composants";

const App = () => (
  <div>
    <Hero
      title="AsTech.social.gouv.fr"
      tagline="Bienvenue à l'incubateur des ministères sociaux"
    />

    <Article />

    <Section
      className="section-color cards"
      title="Nos produits"
      subTitle="Découvrez les produits conçus par nos agents"
    >
      <div className="row" style={{ color: "black" }}>
        <div className="card">
          <div className="card__cover">
            <img src="https://etalab.github.io/template.data.gouv.fr/images/shiba.jpg" />
          </div>
          <div className="card__content">
            <h3>Work In France</h3>
            <div className="card__meta">
              <time>12 avril 2018</time>
              <span>Juna</span>
            </div>
            <p>
              The Shiba Inu (柴犬) is the smallest of the six original and
              distinct spitz breeds of dog from Japan.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__cover">
            <img src="https://etalab.github.io/template.data.gouv.fr/images/french.jpg" />
          </div>
          <div className="card__content">
            <h3>e-MJPM</h3>
            <div className="card__meta">
              <time>12 avril 2018</time>
              <span>Tama</span>
            </div>
            <p>
              The French Bulldog, also known as the Frenchie, is a small breed
              of domestic dog. Frenchies were the result in the 1800s of a cross
              between bulldog ancestors imported from England and local ratters
              in Paris (France).
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__cover">
            <img src="https://etalab.github.io/template.data.gouv.fr/images/corgi.jpg" />
          </div>
          <div className="card__content">
            <h3>Code du travail Numérique</h3>
            <div className="card__meta">
              <time>12 avril 2018</time>
              <span>Nova</span>
            </div>
            <p>
              The Welsh Corgi, sometimes known as just a Corgi (/ˈkɔːrɡi/, Welsh
              for "dwarf dog"; plural "corgis" or occasionally the
              etymologically consistent "corgwn" (/ˈkɔːrɡuːn/)), is a small type
              of herding dog that originated in Wales.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default App;
