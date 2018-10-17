import React from "react";
import { Hero, Layout, Section } from "../src/composants";
import styled from "styled-components";

import "../src/custom.css";

//

const CentralFigure = styled.figure`
  margin: 0;
  text-align: center;

  > img {
    border-radius: 10px;
  }
`;

//

const Fonctionnement = () => (
  <Layout>
    <Hero
      style={{ backgroundImage: `url(/static/images/etapes.jpg)` }}
      title="L'incubateur des ministères sociaux"
      tagline="Comment ça marche ?"
    />
    <Section
      className="section-white"
      title="De A à Z"
      subTitle="Toutes les étapes"
    >
      <CentralFigure>
        <img
          src="../static/images/schema%20inc%201%20v1.png"
          alt="Illustration fonctionnement Astech"
          width="600"
          height="286"
        />
      </CentralFigure>
    </Section>
    <Section
      title="Appels à idées"
      subTitle="Oyé Oyé ! Braves gens !"
      className="section-color"
    >
      <CentralFigure>
        <img
          src="../static/images/schema%20inc%202%20v1.png"
          alt="Illustration fonctionnement Astech"
          width="70%"
          height=""
        />
      </CentralFigure>
    </Section>
    <Section
      className="section-white"
      title="Sélection des lauréats"
      subTitle="Il n'en restera qu'un... ou plutôt deux en fait"
    >
      <CentralFigure>
        <img
          src="../static/images/schema%20inc%203%20v1.png"
          alt="Illustration fonctionnement Astech"
          width="70%"
          height=""
        />
      </CentralFigure>
    </Section>
    <Section
      title="Concrétisation de la startup"
      subTitle="On s'occupe de tout !"
      className="section-color"
    >
      <CentralFigure>
        <img
          src="../static/images/schema%20inc%204%20v1.png"
          alt="Illustration fonctionnement Astech"
          width="80%"
          height=""
        />
      </CentralFigure>
    </Section>
    <Section
      className="section-white"
      title="Phases d'incubation"
      subTitle="Ca fait pas mal"
    >
      <CentralFigure>
        <img
          src="../static/images/schema%20inc%205%20v1.png"
          alt="Illustration fonctionnement Astech"
          width="80%"
          height=""
        />
      </CentralFigure>
    </Section>
  </Layout>
);

export default Fonctionnement;
