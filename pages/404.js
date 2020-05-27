import React from "react";
import { Layout, Article } from "../src/composants";

export default function Custom404() {
  return (
    <Layout>
      <Article>
        <h1>Erreur d&apos;aiguillage !</h1>
        <h3>Impossible de trouver la page demandée.</h3>
      </Article>
    </Layout>
  );
}
