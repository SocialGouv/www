import React from "react";
import { Hero, Layout, Section } from "../src/composants";
import styled from "styled-components";

//

const CentralFigure = styled.figure`
  margin: 0;
  text-align: center;

  > img {
    border-radius: 10px;
  }
`;

//

const BlocHorizontal = ({ title, children }) => (
  <div style={{ width: "25%" }}>
    <div
      style={{
        width: 100,
        height: 100,
        margin: "0 auto",
        background: "#efefef"
      }}
    >
      &nbsp;
    </div>
    <h4 style={{ textAlign: "center" }}>{title}</h4>
    <div style={{ textAlign: "justify" }}>{children}</div>
  </div>
);

const BlocVertical = ({ title, children }) => (
  <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
    <div
      style={{
        display: "inline-block",
        flex: "0 0 100px",
        width: 100,
        height: 100,
        marginRight: 40,
        background: "#efefef"
      }}
    >
      &nbsp;
    </div>
    <div style={{ flex: "1 0 calc(100% - 150px)" }}>
      <h4 style={{ marginTop: 0, marginBottom: 10, textAlign: "left" }}>
        {title}
      </h4>
      <div style={{ textAlign: "left" }}>{children}</div>
    </div>
  </div>
);

const Fonctionnement = () => (
  <Layout>
    <Section
      className="section-white"
      title="Comment candidater"
      subTitle="Proposez votre idée"
    >
      <div
        style={{
          display: "flex",
          marginTop: 40,
          justifyContent: "space-between"
        }}
      >
        <BlocHorizontal icon="ampoule" title="Appel à idées">
          Un appel à idées est adressé chaque année à l’ensemble des agents des
          ministères sociaux. Témoins d’irritants récurrents pour les usagers ou
          les agents, ils sont invités à exprimer leurs idées et solutions afin
          de transformer une politique publique : la rendre plus rapide, plus
          efficace ou moins contraignante.
          <div style={{ marginTop: 20, fontSize: 12 }}>
            *L’incubateur recueille également, dans cette même logique, les
            besoins des directions d’administration centrale.
          </div>
        </BlocHorizontal>
        <BlocHorizontal icon="check" title="Sélection des lauréats">
          L’incubateur sélectionne des candidatures et invite les candidats à
          participer à une journée de sélection. Tout au long de cette journée
          les candidats seront accompagnés afin de structurer leur idée et la
          présenter devant un jury d'experts.
        </BlocHorizontal>
        <BlocHorizontal icon="cog" title="Incubation">
          L’incubateur accueille des porteurs d'idées - **les « intrapreneurs
          »** - qui, après avoir identifié un irritant sur le terrain, sont
          accompagnés afin de développer un produit numérique dans une logique
          de “start-up d’Etat”. d’administration centrale.
        </BlocHorizontal>
      </div>
    </Section>
    <Section
      className="section-white"
      title="6 mois d'accompagnement"
      subTitle="du lancement à la mise en production"
    >
      <div
        style={{
          marginTop: 40
        }}
      >
        <BlocVertical icon="target" title="Identification du problème">
          L’intrapreneur est accompagné par l’incubateur afin de formaliser le
          problème identifié et de garantir qu’il concerne un public
          suffisamment large, qu’un outil numérique pourrait le faire
          disparaître et que les obstacles techniques sont surmontables.
        </BlocVertical>
        <BlocVertical icon="target" title="Construction">
          L’équipe dispose de six mois pour lancer une solution et la tester
          auprès de ses premiers usagers. Sans cahier des charges, elle lance un
          service fonctionnel rapidement, même s’il est imparfait.
        </BlocVertical>
        <BlocVertical icon="target" title="Accélération">
          L’administration fixe des objectifs à atteindre pour les six prochains
          mois. Le service est progressivement étendu à de nouveaux usagers. Les
          retours des utilisateurs permettent d’améliorer le service en continu.
        </BlocVertical>
        <BlocVertical icon="target" title="Consolidation et pérennisation">
          La start-up d’État devient un service public numérique national
          disponible pour tous les usagers et se développe au sein de la
          direction ou intègre l’administration porteuse.
        </BlocVertical>
      </div>
    </Section>
  </Layout>
);

/*
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
    */
export default Fonctionnement;
