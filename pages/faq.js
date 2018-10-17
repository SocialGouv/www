import React from "react";
import { Hero, Layout, Section } from "../src/composants";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
//import 'react-accessible-accordion/dist/fancy-example.css';
//import '../node_modules/react-accessible-accordion/dist/minimal-example.css';

const Faq = () => (
  <Layout>
    <Hero
      style={{ backgroundImage: `url(/static/images/faq.jpg)` }}
      title="FAQ"
      tagline="Les questions le plus fréquemment posées"
    />

    <Section className="section-white" title="" subTitle="">
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Qu&apos;est-ce qu&apos;un incubateur de services numériques ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Un incubateur est une structure légère qui permet
              d&apos;accueillir des porteurs d&apos;idées internes, les «
              intrapreneurs », et de leur fournir le cadre et les outils
              nécessaires pour pouvoir créer leur produit numérique en mode «
              startup d&apos;état » pendant 6 mois.
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Qu&apos;est-ce qu&apos;une Startup d&apos;Etat ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              {" "}
              ◦ Une Startup d&apos;Etat permet le développement rapide de
              produits et services numériques, en cycles courts de
              développement. Elle est agencée selon le modèle de
              l&apos;incubateur interministériel porté par la DINSIC. Elle est
              composée d&apos;une équipe autonome, et a pour objectif de
              produire un service numérique qui résout un irritant vécu par les
              usagers ou les agents, et dont les premiers impacts peuvent être
              mesurés dans les 6 mois.
              <br />
              <a href="https://beta.gouv.fr/2017/09/05/les-6-prochains-mois-dune-startup-detat.html">
                https://beta.gouv.fr/2017/09/05/les-6-prochains-mois-dune-startup-detat.html
              </a>
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Pourquoi un incubateur dans les ministères sociaux ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Car le numérique transforme en profondeur notre environnement et
              apporte des opportunités nouvelles. Les ministères sociaux ont un
              rôle à jouer dans le domaine du numérique, en tant que porteurs de
              valeurs et de services pour l&apos;ensemble des citoyens. Les
              attentes des usagers sont particulièrement fortes dans le domaine
              social, dans toutes ses composantes, qui ont un impact direct sur
              la vie quotidienne de chacun.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Y a-t-il d&apos;autres incubateurs ministériels ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              ◦ Au niveau interministériel, BetaGouv, l&apos;incubateur des
              services numériques de la DINSIC Incubateur de services publics
              numériques — <a href="beta.gouv.fr">beta.gouv.fr</a>
              <br />◦ Au niveau ministériel, le ministère de l&apos;écologie, le
              ministère de l&apos;Intérieur
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Qui est chargé fonctionnellement de l&apos;animation de la mission
              «incubateur de services numériques des ministères sociaux » ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              La direction des systèmes d&apos;information (DSI) est chargée de
              l&apos;animation fonctionnelle de la mission « incubateur de
              services numériques des ministères sociaux ». Elle est composée
              d&apos;un chef de la mission, d&apos;un Techlead, d&apos;un
              Product Manager. Les intrapreneurs sont également aidés de coachs
              et de développeurs (experts du secteur numérique Numa, coachs et
              développeurs de la DINSIC).
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Quels ont été les résultats du premier appel à candidatures en
              2017 ?<div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Un total de 138 idées a été déposé par les agents de
              l&apos;administration centrale, des DIRECCTE, des DR(D)JSCS) et
              des ARS pour l&apos;incubateur des ministères sociaux, dont 41
              dossiers pour les DIRECCTE (30 %), 35 dossiers pour la DGS (25%),
              22 dossiers pour les DRJSCS (16%) et 19 dossiers pour les
              directions du SG (14 %). Parmi ces 138 candidatures, 19 ont été
              pré-sélectionnées pour la sélection finale effectuée par un jury
              composé d&apos;institutionnels et d&apos;experts issus du
              numérique.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Quelles qualités doivent avoir un porteur d&apos;idées ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Il doit avoir les qualités d&apos;un « intrapreneur » souhaitant
              s&apos;engager et étant en capacité de se rendre disponible.
              C&apos;est une personne engagée, avec des compétences et une
              expertise propres, qui a la posture nécessaire pour porter une
              Startup d&apos;Etat. Il est accompagné par des coachs et des
              développeurs pour présenter un premier produit au bout de six
              mois.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Travaille-t-on différemment au sein de l&apos;incubateur ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Le fonctionnement de l&apos;incubateur est basé sur le principe
              innovant du développement agile itératif. L&apos;objectif est de
              mettre en production un service rapidement, puis de
              l&apos;améliorer en continue, avec les utilisateurs. Confrontation
              au terrain très tôt, droit à l&apos;erreur, travail par
              itérations, auto-organisation,… sont des principes liés aux
              méthodes dites « agiles ». Celles-ci découpent, séquencent les
              réalisations en briques plus rapides à déployer et plus proches
              des attentes réelles des utilisateurs.
              <br />◦{" "}
              <a href="https://beta.gouv.fr/2016/11/28/equipes-autonomes.html">
                https://beta.gouv.fr/2016/11/28/equipes-autonomes.html
              </a>
              ◦{" "}
              <a href="https://beta.gouv.fr/2017/10/02/10-bonnes-raisons-pour-ne-pas-faire-de-tests-utilisateur.html">
                https://beta.gouv.fr/2017/10/02/10-bonnes-raisons-pour-ne-pas-faire-de-tests-utilisateur.html
              </a>
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Où se situe l&apos;incubateur des ministères sociaux ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              L&apos;incubateur se situe dans les locaux de la DSI, au 8è étage
              de la tour Mirabeau à Paris.
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              Y aura-t-il d&apos;autres appels à candidatures auprès des agents
              ?<div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Oui, tous les ans mais rien n&apos;est figé… L&apos;appel à idées
              pour la saison 2 est en cours !
            </p>
          </AccordionItemBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="u-position-relative">
              J&apos;ai encore des questions… Qui contacter ?
              <div className="accordion__arrow" role="presentation" />
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              L&apos;équipe de DSI Incubateur :{" "}
              <a href="#">DSI-incubateur@sg.social.gouv.fr</a>
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </Section>
  </Layout>
);

export default Faq;
