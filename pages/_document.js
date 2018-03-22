import Document, { Head, Main, NextScript } from "next/document";

import { Footer, Nav, SvgIcons } from "../src/composants";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/etalab/template.data.gouv.fr/master/src/main.css"
          />
        </Head>
        <body>
          <SvgIcons />
          <Nav />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
