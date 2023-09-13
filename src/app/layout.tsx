import Link from "next/link"
import type { Metadata } from "next"
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead"
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider"
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes"

// import { defaultColorScheme } from "@/styles/defaultColorScheme"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { StartDsfr } from "@/components/start-dsfr"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "La Fabrique Numérique",
  description: "L'incubateur de startups d'État des ministères sociaux",
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
          <main className="pb-16">{children}</main>
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  )
}
