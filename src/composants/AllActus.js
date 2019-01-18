import React from "react";
import { Card } from ".";

// Ajouter les actus ici

const CardBoard2 = () => (
  <Card
    href="/actus/board-janvier-2019"
    img="/static/images/actus/board-0119.jpg"
    title="Incubateur - 2ème board"
    meta="Janvier 2019"
    style={{ flex: "1 0 auto", margin: "5px auto" }}
    description="Le deuxième board de l'incubateur s'est tenu le 15 janvier : découvrez comment il s'est passé"
  />
);

const CardActuSaison2 = () => (
  <Card
    href="/actus/saison2"
    img="/static/images/saison2.jpg"
    title="Incubateur - saison 2"
    meta="Juin 2018"
    style={{ flex: "1 0 auto", margin: "5px auto" }}
    description="A vos idées : devenez acteur de la transformation numérique du ministère en proposant une solution à un irritant ! <br/>La deuxième saison de l'incubateur est lancée :) <br/>Cliquez sur le titre pour en savoir plus"
  />
);

const CardActuEmpjpmParis = () => (
  <Card
    href="/actus/actuEmjpmParis"
    img="/static/images/actus/TGI-Paris.jpg"
    title="E-mjpm est à Paris"
    meta="Décembre 2018"
    style={{ flex: "1 0 auto", margin: "5px auto" }}
    description="Le déploiement d'e-MJPM sur Paris est acté."
  />
);

const CardBA2019 = () => (
  <Card
    href="/actus/2019"
    img="/static/images/actus/bonne-annee-2019.jpg"
    title="Bonne année 2019"
    meta="Janvier 2019"
    style={{ flex: "1 0 auto", margin: "5px auto" }}
    description="C'est parti pour une nouvelle année !"
  />
);

const JourJ = () => (
  <Card
    href="/actus/saison-2-jour-j"
    img="/static/images/pitchday-1.jpg"
    title="Saison 2 : le jour J"
    meta="Octobre 2018"
    style={{ flex: "1 0 auto", margin: "5px auto" }}
    description="Découvrez les idées et les lauréats de la saison 2 de l'incubateur"
  />
);

const _AllActus = () => (
  <div
    className="row cards"
    style={{
      color: "black",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }}
  >
    <CardBoard2 />
    <CardBA2019 />
    <CardActuEmpjpmParis />
    <JourJ />
  </div>
);

//Penser à ajouter le nom de l'actu pour l'export ci-après
const AllActus = {
  actuSaison2: CardActuSaison2,
  actuEmjpmParis: CardActuEmpjpmParis,
  jourj: JourJ,
  ba2019: CardBA2019,
  board2: CardBoard2,
  all: _AllActus
};

export default AllActus;
