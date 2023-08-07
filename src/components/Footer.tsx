import {
  Footer as DSFRFooter,
  type FooterProps,
} from "@codegouvfr/react-dsfr/Footer"

import { navigationItems } from "@/utils/navigationItems"
import { quickAccessItems } from "@/utils/quickAccessItems"

const otherLinks: FooterProps.LinkList.Column = {
  categoryName: "Autres",
  links: [
    ...(navigationItems.filter(
      (item) => !item.menuLinks
    ) as FooterProps.LinkList.Links),
    ...(quickAccessItems as unknown as FooterProps.LinkList.Link[]),
  ].slice(0, 8) as FooterProps.LinkList.Links,
}

const navigationToFooterLinkList: FooterProps.LinkList.List = [
  ...navigationItems
    .filter((item) => !!item.menuLinks?.length)
    .map((item) => {
      const listColumn: FooterProps.LinkList.Column = {
        categoryName: item.text as string,
        links: item.menuLinks?.map((menuLink) => {
          const link = menuLink as FooterProps.LinkList.Link
          return link
        }) as FooterProps.LinkList.Links,
      }
      return listColumn
    }),
  otherLinks,
] as unknown as FooterProps.LinkList.List

export default function Footer() {
  return (
    <DSFRFooter
      accessibility="fully compliant"
      contentDescription="
    Ce message est à remplacer par les informations de votre site.

    Comme exemple de contenu, vous pouvez indiquer les informations
    suivantes : Le site officiel d'information administrative pour les entreprises.
    Retrouvez toutes les informations et démarches administratives nécessaires à la création,
    à la gestion et au développement de votre entreprise.
    "
      partnersLogos={{
        main: {
          alt: "[À MODIFIER - texte alternatif de l'image]",
          href: "#",
          imgUrl:
            "https://components.react-dsfr.codegouv.studio/static/media/placeholder.16x9.3d46f94c.png",
        },
        sub: [
          {
            alt: "[À MODIFIER - texte alternatif de l'image]",
            href: "#",
            imgUrl:
              "https://components.react-dsfr.codegouv.studio/static/media/placeholder.16x9.3d46f94c.png",
          },
          {
            alt: "[À MODIFIER - texte alternatif de l'image]",
            href: "#",
            imgUrl:
              "https://components.react-dsfr.codegouv.studio/static/media/placeholder.16x9.3d46f94c.png",
          },
        ],
      }}
      linkList={navigationToFooterLinkList}
    />
  )
}
