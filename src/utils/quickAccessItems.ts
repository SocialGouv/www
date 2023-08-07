import { type HeaderProps } from "@codegouvfr/react-dsfr/Header"

const quickAccessItems: HeaderProps.QuickAccessItem[] = [
  {
    iconId: "fr-icon-file-text-line",
    linkProps: {
      href: "/documentation",
    },
    text: "Documentation",
  },
]

export { quickAccessItems }
