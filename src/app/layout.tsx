import type { Metadata } from "next"
import Link from "next/link"
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead"
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider"
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes"

import "@/styles/globals.css"
import { defaultColorScheme } from "@/styles/defaultColorScheme"
import { StartDsfr } from "@/components/StartDsfr"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "La Fabrique des Ministères Sociaux",
  description:
    "La fabrique numérique des ministères sociaux reprend la démarche et les grands principes de beta.gouv, à savoir : Un leitmotiv : la résolution d'irritants...",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = "fr"

  return (
    <html {...getHtmlAttributes({ defaultColorScheme: "light", lang })}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            //"Marianne-Light",
            //"Marianne-Light_Italic",
            "Marianne-Regular",
            //"Marianne-Regular_Italic",
            "Marianne-Medium",
            //"Marianne-Medium_Italic",
            "Marianne-Bold",
            //"Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
        />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header />
          <main
            id="contenu"
            className="flex min-h-screen flex-col items-center justify-between p-24"
          >
            {children}
          </main>
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  )
}
