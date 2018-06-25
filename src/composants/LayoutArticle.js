import { Layout, Article } from ".";

const LayoutArticle = ({ footer, children }) => (
  <Layout>
    <Article>{children}</Article>
    {footer || null}
  </Layout>
);

export default LayoutArticle;
