import Head from "next/head";

import { Layout, Article, Hero, AuthorPanel } from ".";
import { default as NextLink } from "next/link";
import { Facebook, Twitter, Github, Link, BarChart, Lock } from "react-feather";

const icons = {
  facebook: Facebook,
  github: Github,
  twitter: Twitter,
  link: Link,
  "bar-chart": BarChart,
  lock: Lock
};
const getIconFromUrl = url => {
  if (url.match(/github/gi)) {
    return Github;
  }
  if (url.match(/facebook/gi)) {
    return Facebook;
  }
  if (url.match(/twitter/gi)) {
    return Twitter;
  }
  return Link;
};

const makeStyledIcon = Icon => style => props => (
  <Icon {...props} style={style} />
);

const ArticleLink = ({ icon, title, href, subTitle, description }) => {
  const iconComponent = (icon && icons[icon]) || getIconFromUrl(href);
  const styledIcon = makeStyledIcon(iconComponent)({
    height: 32,
    width: 32,
    display: "inline-block",
    float: "right"
  });

  return (
    <AuthorPanel
      name={title}
      href={href}
      role={subTitle}
      description={description}
      Icon={styledIcon}
    />
  );
};

const LayoutArticle = ({ meta, footer, children }) => (
  <Layout>
    <Head>
      <title>{meta.title}</title>
    </Head>
    {(meta.hero &&
      meta.hero.background && (
        <Hero
          style={{ backgroundImage: `url(${meta.hero.background})` }}
          title={meta.hero.title}
          alt={meta.hero.alt}
          tagline={meta.hero.tagline}
        />
      )) ||
      null}

    <Article>
      {children}
      {meta.links &&
        ((
          <div className="article__author-list" style={{ marginTop: 50 }}>
            {meta.links.map(link => <ArticleLink key={link.href} {...link} />)}
          </div>
        ) ||
          null)}
    </Article>

    {footer || null}
  </Layout>
);

export default LayoutArticle;
