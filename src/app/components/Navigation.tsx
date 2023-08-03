import { MainNavigation, type MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation";

export const items: MainNavigationProps.Item[] = [
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

export default function Navigation() {
  return <MainNavigation items={items} />
}
