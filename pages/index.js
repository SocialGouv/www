import Head from "next/head";
import Link from "next/link";
import React from "react";

import stats from "../public/github-stats.json";
import {
  AllActus,
  BlocChiffres,
  Hero,
  Layout,
  Section,
  SectionCards,
} from "../src/composants";
import startups from "../src/data/startups.yml";

const chiffres = [
  {
    title: "Startups",
    value: startups.length,
  },
  {
    title: "Intrapreneurs",
    value: 11,
  },
  {
    title: "Projets open-source",
    value: stats.count,
  },
  {
    title: "Commits",
    value: stats.commits,
  },
];

const Homepage = () => (
  <Layout>
    <Head>
      <title>La fabrique numérique des ministères sociaux</title>
    </Head>
    <Hero
      title="Bienvenue à la fabrique numérique des ministères sociaux"
      tagline="fabrique.social.gouv.fr"
    />
    <Section
      className="section-white"
      title=""
      subTitle=""
      style={{ padding: "1em 0" }}
    >
      <BlocChiffres chiffres={chiffres} />
    </Section>
    <div id="produits" />
    <SectionCards className="section-color" title="Nos startups" />

    <Section
      title="La fabrique numérique des ministères sociaux, qu'est-ce donc ?"
      subTitle=""
      className="section-white"
    >
      <div className="container">
        <br />
        C&apos;est à la fois un lieu, une démarche et un ensemble de personnes !
        <br />
        <br />
        La fabrique numérique des ministères sociaux reprend la démarche et les
        grands principes de{" "}
        <a href="http://beta.gouv.fr" target="_blank" rel="noopener noreferrer">
          beta.gouv
        </a>
        , à savoir :<br />
        <ul>
          <li>
            Un leitmotiv : la résolution d&apos;irritants dont vous êtes témoin
          </li>
          <li>
            Des produits fabriqués par des agents{" "}
            <a href="/actus/saison2"> &quot;intrapreneurs&quot;</a>{" "}
          </li>
          <li>
            Un plateau qui rassemble les développeurs, les coachs, les
            intrapreneurs et bien d&apos;autres ;)
          </li>
          <li>
            De la co - construction, des petits pas et des produits utilisables
            très rapidement
          </li>
        </ul>
        La fabrique numérique offre ainsi l&apos;opportunité de tester de
        nouveaux modes de conception de services, plus simples, plus agiles et
        en proximité avec les usagers !<br />
        <br />
        <br />
        <br />
        <Link href="/fonctionnement-incubateur">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <center>
              <img
                src="../images/schema%20inc%201%20v1.png"
                alt="Illustration fonctionnement IMS"
                width="600"
                height="286"
                style={{
                  borderRadius: "50px",
                  margin: " 0 auto",
                }}
              />
              <br />
              <div align="center" style={{ margin: "20px 0" }}>
                <button className="button warning large">En savoir plus</button>
              </div>
            </center>
          </a>
        </Link>{" "}
      </div>
    </Section>

    <Section title="Dernières actualités" className="section-color" subTitle="">
      <br />
      <AllActus count={3} promote={true} />
      <div align="center" style={{ marginBottom: 50 }}>
        <a className="button large" href="/actus">
          Voir toutes les actus
        </a>
      </div>
    </Section>
  </Layout>
);

export default Homepage;
