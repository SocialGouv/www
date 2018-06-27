import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";

import "../src/custom.css";

injectGlobal`

* {
  font-display: swap;
}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html lang="fr">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/favicons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/favicons/favicon-32x32.png"
          />
          <title>L'incubateur des affaires sociales</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/etalab/template.data.gouv.fr/8eda9f3d4230fa6162a91172b0e013a04516a11e/src/main.css"
          />
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/isagalaev/highlight.js/master/src/styles/github.css"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
