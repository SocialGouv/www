import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import Head from "next/head";

import {
  SectionCards,
  Hero,
  Layout,
  Section,
  AllActus,
  BlocChiffres
} from "../src/composants";

import startups from "../src/data/startups.json";

import AsyncFetch from "../src/composants/AsyncFetch";

const chiffres = [
  {
    title: "Startups incubées",
    value: startups.length
  },
  {
    title: "Intrapreneurs",
    value: 8
  },
  {
    title: "m² d&apos;espace dédié",
    value: 150
  },
  {
    title: "Startups en création",
    value: 2
  }
];

const normalizeGithubStats = stats => [
  {
    title: "Projets open-source",
    value: stats.count
  },
  {
    title: "Tickets",
    value: stats.issues
  },
  {
    title: "Commits",
    value: stats.commits
  },
  {
    title: "Contributeurs",
    value: stats.contributors
  }
];

const Homepage = () => (
  <Layout>
    <Head>
      <title>Incubateur des ministères sociaux</title>
    </Head>
    <Hero
      title="Bienvenue à l'incubateur des ministères sociaux"
      tagline="incubateur.social.gouv.fr"
    />
    <Section
      className="section-white"
      title=""
      subTitle=""
      style={{ padding: "1em 0" }}
    >
      <BlocChiffres chiffres={chiffres} />
    </Section>
    <Section title="Notre actualité" subTitle="">
      <br />
      <br />
      <AsyncFetch
        fetch={() =>
          fetch(document.location.origin + "/static/github-stats.json").then(
            res => res.json()
          )
        }
        render={({ status, result }) => {
          return (
            status === "success" &&
            result && <BlocChiffres chiffres={normalizeGithubStats(result)} />
          );
        }}
      />
      <br />
      <br />
      <AllActus count={6} />
    </Section>
    <p align="center">
      <a className="button large" href="/actus">
        {" "}
        Voir toutes actus
      </a>
    </p>
    <Section
      title="L'incubateur des ministères sociaux, qu'est-ce donc ?"
      subTitle=""
      className="section-color"
    >
      <div className="container">
        <br />
        C&apos;est à la fois un lieu, une démarche et un ensemble de personnes !
        <br />
        <br />
        L&apos;incubateur des ministères sociaux reprend la démarche et les
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
        L&apos;incubateur offre ainsi l&apos;opportunité de tester de nouveaux
        modes de conception de services, plus simples, plus agiles et en
        proximité avec les usagers !<br />
        <br />
        <br />
        <br />
        <Link href="/fonctionnement-incubateur">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <center>
              <img
                src="../static/images/schema%20inc%201%20v1.png"
                alt="Illustration fonctionnement IMS"
                width="600"
                height="286"
                style={{
                  margin: " 0 auto",
                  borderRadius: "50px"
                }}
              />
              <br />
              En savoir plus
            </center>
          </a>
        </Link>{" "}
      </div>
    </Section>

    <div id="produits" />
    <SectionCards className="section-color" title="Découvrez nos startups" />
  </Layout>
);

Homepage.propTypes = {
  githubStats: PropTypes.array.isRequired
};

export default Homepage;
