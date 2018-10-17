import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";
import GitHubForkRibbon from "react-github-fork-ribbon";

import "../src/custom.css";

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
          <title>IMS: L'incubateur des ministères sociaux</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/isagalaev/highlight.js/master/src/styles/github.css"
          />
          <script src="//cdn.polyfill.io/v2/polyfill.js?features=es2015" />
          {this.props.styleTags}
        </Head>
        <body>
          <GitHubForkRibbon
            href="//github.com/SocialGouv/socialgouv.github.io"
            target="_blank"
            position="right"
            color="green"
          >
            version bêta
          </GitHubForkRibbon>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
