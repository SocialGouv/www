import React from "react";
import App from "next/app";
import Head from "next/head";

import "../src/custom.css";
import "../src/github-highlight.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>La fabrique numérique des ministères sociaux</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
