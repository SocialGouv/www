import { Footer as DSFRFooter, type FooterProps } from "@codegouvfr/react-dsfr/Footer";
import { Header as DSFRHeader } from "@codegouvfr/react-dsfr/Header";
import { MainNavigation, type MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation";

const navigation: MainNavigationProps.Item[] = [
  {
    menuLinks: [
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "Travail",
      },
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "Solidarités",
      },
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "Santé",
      },
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "Tout voir",
      },
    ],
    text: "Nos startups",
  },
  {
    menuLinks: [
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "À propos",
      },
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "Notre offre",
      },
      {
        linkProps: {
          href: "#",
          target: "_self",
        },
        text: "L'équipe",
      },
    ],
    text: "La Fabrique",
  },
  {
    linkProps: {
      href: "#",
      target: "_self",
    },
    text: "Proposez vos idées",
  },
  {
    linkProps: {
      href: "#",
      target: "_self",
    },
    text: "Recrutement",
  },
];

const initLinks: FooterProps.LinkList.List = [{ categoryName: "Autres", links: [] }];
const navigationToFooterLinkList: FooterProps.LinkList.List = navigation.reduce(
  (linkList, item) => {
    const otherLinks = linkList[linkList.length - 1];
    const previousLinks = linkList.slice(0, linkList.length - 1);
    if (item.menuLinks) {
      const listColumn: FooterProps.LinkList.Column = {
        categoryName: item.text as string,
        links: item.menuLinks.map((menuLink) => {
          const link = menuLink as FooterProps.LinkList.Link;
          return link;
        }),
      };
      return [...previousLinks, listColumn, otherLinks];
    }
    otherLinks.links.push(item as FooterProps.LinkList.Link);
    return [...previousLinks, otherLinks];
  },
  initLinks
);

export function Header() {
  return (
    <DSFRHeader
      brandTop={
        <>
          LA FABRIQUE
          <br />
          DES MINISTÈRES SOCIAUX
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
      }}
      id="fr-header-header-with-quick-access-items-nav-items-and-search-engine"
      navigation={<MainNavigation items={navigation} />}
      // onSearchButtonClick={function noRefCheck(event) {
      //   console.log("onSearchButtonClick", event);
      // }}
      quickAccessItems={[
        {
          iconId: "fr-icon-file-text-line",
          linkProps: {
            href: "/documentation",
          },
          text: "Documentation",
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

export function Footer() {
  return (
    <DSFRFooter
      accessibility="fully compliant"
      contentDescription="
    Ce message est à remplacer par les informations de votre site.

    Comme exemple de contenu, vous pouvez indiquer les informations
    suivantes : Le site officiel d’information administrative pour les entreprises.
    Retrouvez toutes les informations et démarches administratives nécessaires à la création,
    à la gestion et au développement de votre entreprise.
    "
      partnersLogos={{
        main: {
          alt: "[À MODIFIER - texte alternatif de l’image]",
          href: "#",
          imgUrl:
            "https://components.react-dsfr.codegouv.studio/static/media/placeholder.16x9.3d46f94c.png",
        },
        sub: [
          {
            alt: "[À MODIFIER - texte alternatif de l’image]",
            href: "#",
            imgUrl:
              "https://components.react-dsfr.codegouv.studio/static/media/placeholder.16x9.3d46f94c.png",
          },
          {
            alt: "[À MODIFIER - texte alternatif de l’image]",
            href: "#",
            imgUrl:
              "https://components.react-dsfr.codegouv.studio/static/media/placeholder.16x9.3d46f94c.png",
          },
        ],
      }}
      linkList={navigationToFooterLinkList}
    />
  );
}
