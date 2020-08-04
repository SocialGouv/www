import "../src/custom.css";
import "../src/github-highlight.css";

import App from "next/app";
import Head from "next/head";
import React from "react";

export default class MyApp extends App {
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
