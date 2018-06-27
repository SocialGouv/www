import Link from "next/link";

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
    title="Code du travail numérique"
    meta="Juin 2018"
    description="Faciliter l'accès au droit du travail pour les employeur·e·s et les employé·e·s."
  />
);

const CardActuSaison2 = () => (
  <Card
    href="/actus/saison2"
    img="/static/images/saison2.jpg"
    title="Incubateur - saison 2"
    meta="Juin 2018"
    description="A vos idées : devenez acteur de la transformation numérique du ministère en proposant une solution à un irritant ! <br/>La deuxième saison de l'incubateur est lancée :) Cliquez sur le titre pour en savoir plus"
  />
);

const CardActuCDTN1 = () => (
  <Card
    href="/actus/article-cdtn1"
    img="/static/images/complexite.png"
    title="CDTN - une problématique complexe"
    meta="Juin 2018"
    description="Nous nous lançons dans une série d'articles pour tout connaitre du produit 'code du travail numérique' - CDTN pour les intimes. Ce premier article présente les multiples problématiques et le challenge que représente la modélisation informatique du code du travail."
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
      title="Bienvenue à l'incubateur des ministères sociaux"
      tagline="incubateur.social.gouv.fr"
    />

    <BlocChiffres />

    <Section
      title="L'incubateur des ministères sociaux, qu'est-ce donc ?"
      subTitle=""
      className="section-color"
    >
      <div className="container">
        <br />
        C'est à la fois un lieu, une démarche et un ensemble de personnes !<br
        />
        <br />
        L'incubateur des ministères sociaux reprend la
        démarche et les grands principes de{" "}
        <a href="http://beta.gouv.fr" target="_blank">
          beta.gouv
        </a>, à savoir :<br />
        <ul>
        	 <li>
        	 Un leitmotiv : la résolution d’irritants dont vous êtes témoin
        	 </li>
          <li>
            Des produits fabriqués par des agents <a href="/actus/saison2">"intrapreneurs"</a>{" "}
          </li>
          <li>
            Un plateau qui rassemble les développeurs, les coachs, les
            intrapreneurs et bien d'autres ;)
          </li>
          <li>
            De la co-construction, des petits pas et des produits utilisables
            très rapidement
          </li>
        </ul>
        L'incubateur offre ainsi l'opportunité de tester de nouveaux modes de
        conception de services, plus simples, plus agiles et en proximité avec
        les usagers !
        <br />
        <br />
        <Link href="/fonctionnement-incubateur">
          <a>
            <div style={{ textAlign: "center" }}>
              <img
                src="../static/images/schema%20inc%201%20v1.png"
                alt="Illustration fonctionnement IMS"
                width="600"
                height="286"
                style={{ margin: " 0 auto", borderRadius: "50px" }}
              />
              <br />
              En savoir plus
            </div>
          </a>
        </Link>
        {/*
        <p>
          Témoins d’irritants récurrents pour les usagers du service public
          et/ou les agents de l’Etat ?
        </p>
        <p>
          Idée de services numériques pouvant remédier au problème identifié ?
        </p>

        <p>
          Ces questions simples mais novatrices, directement posées aux agents,
          ont permis de remonter 138 candidatures à l’appel à candidatures de
          l’incubateur à l’automne 2017.
        </p>
        <p>
          {" "}
          Deux premiers projets ont été retenus, les deux start-up d’Etat ont
          été créées en décembre 2017, rejointes deux mois plus tard, par une
          troisième.
        </p>
        <p>
          Un nouvel appel à candidature va avoir lieu en octobre 2018. Il
          donnera naissance à deux nouvelles start-up d’État pour lesquelles les
          développements débuteront en janvier 2019.
        </p>
        */}
      </div>
    </Section>

    <Section title="Notre actualité" subTitle="">
      <div className="row" style={{ color: "black" }}>
        <CardActuSaison2 />
        <CardActuCDTN1 />
        
      </div>
      
    </Section>
    <p align="center">Voir toutes actus</p>
    

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
