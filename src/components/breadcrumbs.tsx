"use client"
import { usePathname } from "next/navigation"
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb"

import type { ReactNode } from "react"
import type { RegisteredLinkProps } from "@codegouvfr/react-dsfr/link"

import getStartup from "@/app/startups/[id]/get-startup"

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const crumbs = pathname.split("/")

  // TODO: rewrite
  let currentPageLabel = ""
  let segments: {
    label: ReactNode
    linkProps: RegisteredLinkProps
  }[] = []

  crumbs.shift()

  if (crumbs.length === 1) {
    currentPageLabel = capitalizeFirstLetter(crumbs[0])
  } else {
    currentPageLabel = getStartup(crumbs[1]).attributes.name
    segments = [
      {
        label: capitalizeFirstLetter(crumbs[0]),
        linkProps: {
          href: `/${crumbs[0]}`,
        },
      },
    ]
  }

  return (
    <div className="fr-container">
      <Breadcrumb
        segments={segments}
        homeLinkProps={{ href: "/" }}
        currentPageLabel={currentPageLabel}
      />
    </div>
  )
}
