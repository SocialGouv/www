"use client"

import Link from "next/link"
import { startReactDsfr } from "@codegouvfr/react-dsfr/next-appdir"

import { defaultColorScheme } from "@/utils/default-color-scheme"

declare module "@codegouvfr/react-dsfr/next-appdir" {
  interface RegisterLink {
    Link: typeof Link
  }
}

startReactDsfr({ defaultColorScheme, Link })

export function StartDsfr() {
  //Yes, leave null here.
  return null
}
