import { type MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation"
import { type HeaderProps } from "@codegouvfr/react-dsfr/Header"

const navigationItems: MainNavigationProps.Item[] = [
  {
    menuLinks: [
      {
        linkProps: {
          href: "/startups?categorie=travail",
          target: "_self",
        },
        text: "Travail",
      },
      {
        linkProps: {
          href: "/startups?categorie=solidarites",
          target: "_self",
        },
        text: "Solidarités",
      },
      {
        linkProps: {
          href: "/startups?categorie=sante",
          target: "_self",
        },
        text: "Santé",
      },
      {
        linkProps: {
          href: "/startups",
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
          href: "/about",
          target: "_self",
        },
        text: "À propos",
      },
      {
        linkProps: {
          href: "/notre-offre",
          target: "_self",
        },
        text: "Notre offre",
      },
      {
        linkProps: {
          href: "/equipe",
          target: "_self",
        },
        text: "L'équipe",
      },
    ],
    text: "La Fabrique",
  },
  {
    linkProps: {
      href: "/proposez-vous-idees",
      target: "_self",
    },
    text: "Proposez vos idées",
  },
  {
    linkProps: {
      href: "/recrutement",
      target: "_self",
    },
    text: "Recrutement",
  },
]

const quickAccessItems: HeaderProps.QuickAccessItem[] = [
  {
    iconId: "fr-icon-file-text-line",
    linkProps: {
      href: "/documentation",
    },
    text: "Documentation",
  },
]

export { navigationItems, quickAccessItems }
