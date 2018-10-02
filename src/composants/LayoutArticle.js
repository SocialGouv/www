import Head from 'next/head';

import {
  Layout,
  Article,
  Hero,
  AuthorPanel,
  SectionCards,
  Cards,
  StartupMembers
} from '.';
import { default as NextLink } from 'next/link';
import { Facebook, Twitter, Github, Link, BarChart, Lock } from 'react-feather';

const icons = {
  facebook: Facebook,
  github: Github,
  twitter: Twitter,
  link: Link,
  'bar-chart': BarChart,
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
    height: 22,
    width: 22,
    display: 'inline-block',
    float: 'right'
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

import startups from '../data/startups.json';

const getStartupData = id => startups.find(s => s.id === id);
const getOtherStartupsData = id => startups.filter(s => s.id !== id);

// inject footer + links when props.startup given
const withStartup = Cmp => props => {
  const startupData = getStartupData(props.startup);
  const otherStartups = getOtherStartupsData(props.startup).map(s => s.id);
  const allProps = {
    ...props,
    meta: {
      ...props.meta,
      links: [
        ...((props.meta && props.meta.links) || []),
        ...((startupData && startupData.links) || [])
      ]
    },
    footer: (
      <div>
        <StartupMembers startup={props.startup} />
        {props.footer ||
          (otherStartups && (
            <SectionCards className="section-color" startups={otherStartups} />
          ))}
      </div>
    )
  };
  return <Cmp {...allProps} />;
};

const LayoutArticle = ({ meta, footer, children }) => {
  return (
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
        {meta &&
          meta.links &&
          ((
            <React.Fragment>
              <div
                style={{
                  marginTop: 50,
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Les liens utiles du projet :
              </div>
              <div className="article__author-list">
                {meta.links &&
                  meta.links.map(link => (
                    <ArticleLink key={link.href} {...link} />
                  ))}
              </div>
            </React.Fragment>
          ) ||
            null)}
      </Article>
      {footer}
    </Layout>
  );
};

export default withStartup(LayoutArticle);
