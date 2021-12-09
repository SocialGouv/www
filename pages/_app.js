import "template.data.gouv.fr";
import "react-vertical-timeline-component/style.min.css";
import "../src/custom.css";
import "../src/github-highlight.css";

import { init } from "@socialgouv/matomo-next";
import App from "next/app";
import Head from "next/head";
import React from "react";

const MATOMO_URL =
  process.env.NEXT_PUBLIC_MATOMO_URL ||
  "https://matomo.fabrique.social.gouv.fr";

const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || 2;

export default class MyApp extends App {
  componentDidMount() {
    init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL });
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>La fabrique numérique des Ministères sociaux</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
