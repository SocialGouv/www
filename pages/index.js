import React from "react";
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

import "../src/custom.css";

const Homepage = () => (
  <Layout>
    <Head>
      <title>Incubateur des ministères sociaux</title>
    </Head>
    <Hero
      title="Bienvenue à l'incubateur des ministères sociaux"
      tagline="incubateur.social.gouv.fr"
    />
    <Section className="section-white" title="" subTitle="">
      <BlocChiffres />
    </Section>
    <Section
      title="L'incubateur des ministères sociaux, qu'est-ce donc ?"
      subTitle=""
      className="section-color"
    >
      <div className="container">
<<<<<<< HEAD
        <br />C 'est à la fois un lieu, une démarche et un ensemble de personnes
        !<br />
        <br />L 'incubateur des ministères sociaux reprend la démarche et les
=======
        <br />
        C&apos;est à la fois un lieu, une démarche et un ensemble de personnes !
        <br />
        <br />
        L&apos;incubateur des ministères sociaux reprend la démarche et les
>>>>>>> 2c7aceb... style: replace right single quotation mark by single quote (#58)
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
<<<<<<< HEAD
            <a href="/actus/saison2"> "intrapreneurs"</a>{" "}
=======
            <a href="/actus/saison2"> &quot;intrapreneurs&quot;</a>{" "}
>>>>>>> 2c7aceb... style: replace right single quotation mark by single quote (#58)
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
    <Section title="Notre actualité" subTitle="">
      <div
        className="row"
        style={{
          color: "black"
        }}
      >
        <AllActus.actuSaison2 />
        <AllActus.actuCdtn1 />
        <AllActus.actuBoard1 />
      </div>
    </Section>
    <p align="center">
      {" "}
      <a href="/actus"> Voir toutes actus</a>
    </p>
    <a id="produits" name="produits">
      &nbsp;
    </a>
    <SectionCards className="section-color" title="Découvrez nos startups" />
  </Layout>
);

export default Homepage;
