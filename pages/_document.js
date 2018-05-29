import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { Footer, Nav, SvgIcons } from "../src/composants";

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
    const headerLinks = [
      {
        title: "Nos produits",
        url: "/#startups"
      },
      {
        title: "Actu",
        url: "/actu"
      },
      {
        title: "Evènements",
        url: "/evenements"
      },
      {
        title: "Qui sommes-nous ?",
        url: "/qui-sommes-nous"
      }
    ];
    const footerLinks = [
      {
        title: "A propos",
        href: "/"
      },
      {
        title: "Conditions générales d'utilisation",
        href: "/"
      }
    ];
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/etalab/template.data.gouv.fr/master/src/main.css"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <SvgIcons />
          <Nav title="AsTech.social.gouv.fr" links={headerLinks} />
          <Main />
          <Footer title="AsTech.social.gouv.fr" links={footerLinks} />
          <NextScript />
        </body>
      </html>
    );
  }
}
