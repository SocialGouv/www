import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Layout, Section } from "../src/composants";

import {
  FaWifi,
  FaAward,
  FaRocket,
  FaSearch,
  FaCogs,
  FaChartLine,
  FaCheckSquare
} from "react-icons/fa";

const BlocHorizontal = styled(({ className, Icon, title, children }) => (
  <div className={className}>
    <div className="BlocHorizontal__icon">
      <Icon size="80" />
    </div>
    <h4>{title}</h4>
    <div className="BlocHorizontal__text">{children}</div>
  </div>
))`
  width: 25%;
  margin-bottom: 40px;
  @media (max-width: 549px) {
    width: 100%;
  }
  .BlocHorizontal__icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
  }
  .BlocHorizontal__text {
    text-align: justify;
    line-height: 1.3em;
  }
  h4 {
    text-align: center;
  }
`;

const BlocVertical = ({ title, children, Icon }) => (
  <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
    <div
      style={{
        textAlign: "center",
        flex: "0 0 80px",
        marginRight: 20
      }}
    >
      <Icon size="60" />
    </div>
    <div style={{ flex: "1 0 calc(100% - 150px)" }}>
      <h4 style={{ marginTop: 0, marginBottom: 10, textAlign: "left" }}>
        {title}
      </h4>
      <div style={{ textAlign: "left" }}>{children}</div>
    </div>
  </div>
);

BlocVertical.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

const HorizontalContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-around;

  @media (max-width: 549px) {
    display: block;
  }
`;

const Fonctionnement = () => (
  <Layout>
    <Section
      className="section-white"
      title="Comment candidater"
      subTitle="Proposez votre idée"
    >
      <HorizontalContainer>
        <BlocHorizontal Icon={FaWifi} title="Appel à idées">
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
        <BlocHorizontal Icon={FaAward} title="Sélection des lauréats">
          L’incubateur sélectionne des candidatures et invite les candidats à
          participer à une journée de sélection. Tout au long de cette journée
          les candidats seront accompagnés afin de structurer leur idée et la
          présenter devant un jury d&apos;experts.
        </BlocHorizontal>
        <BlocHorizontal Icon={FaRocket} title="Incubation">
          L’incubateur accueille des porteurs d&apos;idées -{" "}
          <strong>les « intrapreneur(se)s »</strong> - qui, après avoir
          identifié un irritant sur le terrain, sont accompagnés afin de
          développer un produit numérique dans une logique de “start-up d’Etat”.
          d’administration centrale.
        </BlocHorizontal>
      </HorizontalContainer>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <a
          className="button primary large"
          href="mailto:DSI-incubateur@sg.social.gouv.fr&subject=candidature"
        >
          Candidater
        </a>
      </div>
    </Section>
    <Section
      title="6 mois d'accompagnement"
      subTitle="du lancement à la mise en production"
    >
      <div
        style={{
          marginTop: 40
        }}
      >
        <BlocVertical Icon={FaSearch} title="Identification du problème">
          L’intrapreneur est accompagné par l’incubateur afin de formaliser le
          problème identifié et de garantir qu’il concerne un public
          suffisamment large, qu’un outil numérique pourrait le faire
          disparaître et que les obstacles techniques sont surmontables.
        </BlocVertical>
        <BlocVertical Icon={FaCogs} title="Construction">
          L’équipe dispose de six mois pour lancer une solution et la tester
          auprès de ses premiers usagers. Sans cahier des charges, elle lance un
          service fonctionnel rapidement, même s’il est imparfait.
        </BlocVertical>
        <BlocVertical Icon={FaChartLine} title="Accélération">
          L’administration fixe des objectifs à atteindre pour les six prochains
          mois. Le service est progressivement étendu à de nouveaux usagers. Les
          retours des utilisateurs permettent d’améliorer le service en continu.
        </BlocVertical>
        <BlocVertical
          Icon={FaCheckSquare}
          title="Consolidation et pérennisation"
        >
          La start-up d’État devient un service public numérique national
          disponible pour tous les usagers et se développe au sein de la
          direction ou intègre l’administration porteuse.
        </BlocVertical>
      </div>
    </Section>
    {/*
    <Section
      className="section-white"
      title="Et après"
      subTitle="Déploiement progressif et pérennisation"
    >
      <div
        style={{
          marginTop: 40
        }}
      >
        Accompagnement, certifications
      </div>
    </Section>*/}
  </Layout>
);

export default Fonctionnement;
