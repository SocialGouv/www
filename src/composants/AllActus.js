import React from "react";
import { Card } from ".";

// Ajouter les actus ici

const CardActuSaison2 = () => (
  <Card
    href="/actus/saison2"
    img="/static/images/saison2.jpg"
    title="Incubateur - saison 2"
    meta="Juin 2018"
    description="A vos idées : devenez acteur de la transformation numérique du ministère en proposant une solution à un irritant ! <br/>La deuxième saison de l'incubateur est lancée :) <br/>Cliquez sur le titre pour en savoir plus"
  />
);

const CardActuCDTN1 = () => (
  <Card
    href="/startups/code-du-travail-numerique"
    img="/static/images/complexite.png"
    title="CDTN - une problématique complexe"
    meta="Juin 2018"
    description="Nous nous lançons dans une série d'articles pour tout connaitre du produit 'code du travail numérique' - CDTN pour les intimes. Ce premier article présente les multiples problématiques et le challenge que représente la modélisation informatique du code du travail."
  />
);

const CardActuBoard1 = () => (
  <Card
    href="/actus/board-juin-2018"
    img="/static/images/board.jpg"
    title="Show must go on"
    meta="Juin 2018"
    description="Le premier board de l'incubateur a eu lieu. Il s'agit d'une sorte de conseil d'administration aucours duquel les intrapreneurs présentent l'avancement et les perspectives de leur produit. Les membres du board décident alors de la suite à donner aux différentes startups. <br/>Cliquez sur l'image pour connaître le résultat."
  />
);

const JourJ = () => (
  <Card
    href="/actus/saison-2-jour-j"
    img="/static/images/pitchday-1.jpg"
    title="Saison 2 : le jour J"
    meta="Octobre 2018"
    description="Découvrez les idées et les lauréats de la saison 2 de l'incubateur"
  />
);

//Penser à ajouter le nom de l'actu pour l'export ci-après
const AllActus = {
  actuSaison2: CardActuSaison2,
  actuCdtn1: CardActuCDTN1,
  jourj: JourJ,
  actuBoard1: CardActuBoard1
};

export default AllActus;
