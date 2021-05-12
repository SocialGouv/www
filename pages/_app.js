import "template.data.gouv.fr";
import "react-vertical-timeline-component/style.min.css";
import "../src/custom.css";
import "../src/github-highlight.css";

import App from "next/app";
import Head from "next/head";
import React from "react";

import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "https://matomo.fabrique.social.gouv.fr";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || 2;

export default class MyApp extends App {
  componentDidMount() {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>La fabrique numérique des Ministères sociaux</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
