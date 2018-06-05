import {
  Article,
  Card,
  Hero,
  Layout,
  Section,
  BlocChiffres
} from "../src/composants";

import "../src/custom.css";

export const CardWIF = () => (
  <Card
    href="/startups/work-in-france"
    img="/static/images/startups/work-in-france.jpg"
    title="Work In France"
    meta="Avril 2018"
    description="La plateforme de demande d'autorisation provisoire de travail pour les étudiants étrangers."
  />
);

export const CardMJPM = () => (
  <Card
    href="/startups/e-mjpm"
    img="/static/images/startups/e-MJPM.jpg" 
    title="e-MJPM" 
    meta="Mai 2018" 
    description="Trouver rapidement le bon professionnel pour les majeurs à protéger." 
  />
);

export const CardCDTN = () => (
  <Card
    href="/startups/code-du-travail-numerique"
    img="/static/images/startups/code-du-travail-numerique.jpg"
    title="Code du travail Numérique"
    meta="Juin 2018"
    description="Faciliter l'accès au droit du travail pour les employeur·e·s et les employé·e·s."
  />
);

export const CardActuSaison2 = () => (
   <Card
    href="/actus/saison2"
    img="/static/images/startups/TODO.jpg"
    title="Incubateur - saison 2"
    meta="Juin 2018"
    description="A vos idées : devenez acteur de la transformation numérique du ministère en proposant une solution à un irritant ! <br/>La deuxième saison de l'incubateur est lancée. Cliquez pour en savoir plus"
  />
);

export const Cards = {
  wif: CardWIF,
  emjpm: CardMJPM,
  cdtn: CardCDTN
};

const Homepage = () => (
  <Layout>
    <Hero
      title="ASTech.social.gouv.fr"
      tagline="Bienvenue chez l'incubateur des ministères sociaux"
    />

    <BlocChiffres />
    
    
    <Section title="L'incubateur des ministères sociaux, qu'est-ce donc ?" subTitle="Astech" className="section-color">
      

      <p>
        C'est à la fois un lieu, une démarche et un ensemble de personnes !<br/>
        Directement inspiré de l'incubateur beta.gouv.fr, Astech est l'incubateur des ministères sociaux. Il reprend la démarche est les grands principes de beta.gouv, à savoir :<br/>
			<li>        
        <ul>Des produits fabriqués par des agents du ministères appelés intrapreneurs, </ul>
        <ul>Un plateau qui rassemble les développeurs, les coachs, les intrapreneurs</ul>
        <ul>De la co-construction, des petits pas et des produits utilisables très rapidement</ul>
         </li>
        
      </p>
    </Section>

	<Section title="Notre actualité" subTitle="">
     
      	<div className="row" style={{ color: "black" }}>
      		<CardActuSaison2 />
      	</div>
     
    </Section>

    <a id="produits" name="produits" />
    <Section
      className="section-color cards"
      title="Nos produits"
      subTitle="Découvrez les produits conçus par nos agents"
    >
      <div className="row" style={{ color: "black" }}>
        <CardWIF />
        <CardMJPM />
        <CardCDTN />
      </div>
    </Section>
  </Layout>
);

export default Homepage;
