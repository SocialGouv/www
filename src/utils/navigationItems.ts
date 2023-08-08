import { type MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation"

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
          href: "/startups?categorie=solidarite",
          target: "_self",
        },
        text: "Solidarité",
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
          href: "/a-propos",
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

export { navigationItems }
