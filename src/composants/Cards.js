import { Card } from ".";

export const CardWIF = () => (
  <Card
    href="/startups/work-in-france"
    img="/static/images/startups/work-in-france.jpg"
    title="Work In France"
    meta="Avril 2018"
    description="La plateforme de demande d'autorisation provisoire de travail pour les étudiants étrangers."
  />
);

export const CardMJPM = () => (
  <Card
    href="/startups/e-mjpm"
    img="/static/images/startups/e-MJPM.jpg"
    title="e-MJPM"
    meta="Mai 2018"
    description="Trouver rapidement le bon professionnel pour les majeurs à protéger."
  />
);

export const CardCDTN = () => (
  <Card
    href="/startups/code-du-travail-numerique"
    img="/static/images/startups/code-du-travail-numerique.jpg"
    title="Code du travail numérique"
    meta="Juin 2018"
    description="Faciliter l'accès au droit du travail pour les employeur·e·s et les employé·e·s."
  />
);

const Cards = {
  wif: CardWIF,
  emjpm: CardMJPM,
  cdtn: CardCDTN
};

export default Cards;
