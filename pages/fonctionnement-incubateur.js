import React from "react";
import { Layout, Section } from "../src/composants";
import styled from "styled-components";
import PropTypes from "prop-types";

const BlocHorizontal = styled(({ className, title, children }) => (
  <div className={className}>
    <div className="BlocHorizontal__icon">&nbsp;</div>
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
    background: #efefef;
  }
  .BlocHorizontal__text {
    text-align: justify;
    line-height: 1.3em;
  }
  h4 {
    text-align: center;
  }
`;

const BlocVertical = ({ title, children }) => (
  <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
    <div
      style={{
        display: "inline-block",
        flex: "0 0 80px",
        width: 80,
        height: 80,
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
          présenter devant un jury d&apos;experts.
        </BlocHorizontal>
        <BlocHorizontal icon="cog" title="Incubation">
          L’incubateur accueille des porteurs d&apos;idées -{" "}
          <strong>les « intrapreneur(se)s »</strong> - qui, après avoir
          identifié un irritant sur le terrain, sont accompagnés afin de
          développer un produit numérique dans une logique de “start-up d’Etat”.
          d’administration centrale.
        </BlocHorizontal>
      </HorizontalContainer>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <a className="button primary large" href="/actus">
          Candidater
        </a>
      </div>
    </Section>
    <Section
      className="section-color"
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
    </Section>
  </Layout>
);

export default Fonctionnement;
