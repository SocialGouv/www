import { type MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation"

const navigationItems: MainNavigationProps.Item[] = [
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
      href: "/startups",
      target: "_self",
    },
    text: "Nos startups",
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
