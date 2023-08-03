"use client";
import { fr } from "@codegrouvfr/react-dsfr";
import { Header } from "@codegouvfr/react-dsfr/Header";

export default function CustomHeader() {
  return (
    <Header
      brandTop={
        <>
          LA FABRIQUE
          <br />
          DES MINISTÈRES SOCIAUX
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
      }}
      id="fr-header-header-with-quick-access-items-nav-items-and-search-engine"
      navigation={[
        {
          linkProps: {
            href: "#",
            target: "_self",
          },
          text: "accès direct",
        },
        {
          isActive: true,
          linkProps: {
            href: "#",
            target: "_self",
          },
          text: "accès direct",
        },
        {
          linkProps: {
            href: "#",
            target: "_self",
          },
          text: "accès direct",
        },
        {
          linkProps: {
            href: "#",
            target: "_self",
          },
          text: "accès direct",
        },
      ]}
      onSearchButtonClick={function noRefCheck(event) {
        console.log("onSearchButtonClick", event);
      }}
      quickAccessItems={[
        {
          iconId: "fr-icon-add-circle-line",
          linkProps: {
            href: "#",
          },
          text: "Créer un espace",
        },
        {
          iconId: "fr-icon-lock-line",
          linkProps: {
            href: "#",
          },
          text: "Se connecter",
        },
        {
          iconId: "fr-icon-account-line",
          linkProps: {
            href: "#",
          },
          text: "S’enregistrer",
        },
      ]}
      serviceTagline="Un incubateur betagouv 🥸"
      serviceTitle="La Fabrique des Ministères Sociaux"
      // operatorLogo={{
      //   alt: "[À MODIFIER - texte alternatif de l’image]",
      //   imgUrl: "static/media/placeholder.9x16.bb7c62f0.png",
      //   orientation: "horizontal",
      // }}
    />
  );
}
