import Head from "next/head";

import { Layout, Article, Hero } from ".";

const LayoutArticle = ({ meta, footer, children }) => (
  <Layout>
    <Head>
      <title>{meta.title}</title>
    </Head>
    {(meta.hero &&
      meta.hero.background && (
        <Hero
          style={{ backgroundImage: `url(${meta.hero.background})` }}
          title=""
          alt={meta.hero.alt}
          tagline=""
        />
      )) ||
      null}
    <Article>{children}</Article>
    {footer || null}
  </Layout>
);

export default LayoutArticle;
