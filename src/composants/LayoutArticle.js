import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import {
  Layout,
  Article,
  Hero,
  AuthorPanel,
  SectionCards,
  StartupMembers
} from ".";

import { Facebook, Twitter, GitHub, Link, BarChart, Lock } from "react-feather";

import startups from "../data/startups.yml";

const icons = {
  facebook: Facebook,
  github: GitHub,
  twitter: Twitter,
  link: Link,
  "bar-chart": BarChart,
  lock: Lock
};
const getIconFromUrl = url => {
  if (url.match(/github/gi)) {
    return GitHub;
  }
  if (url.match(/facebook/gi)) {
    return Facebook;
  }
  if (url.match(/twitter/gi)) {
    return Twitter;
  }
  return Link;
};

const makeStyledIcon = Icon =>
  function(style) {
    const StyledIcon = props => <Icon {...props} style={style} />;
    return StyledIcon;
  };

const ArticleLink = ({ icon, title, href, subTitle, description }) => {
  const iconComponent = (icon && icons[icon]) || getIconFromUrl(href);
  const styledIcon = makeStyledIcon(iconComponent)({
    height: 22,
    width: 22,
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

ArticleLink.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string
};

const getStartupData = id => startups.find(s => s.id === id);
const getOtherStartupsData = id => startups.filter(s => s.id !== id);

// inject footer + links when props.startup given
function withStartup(Cmp) {
  const CmpWithStartup = props => {
    const startupData = getStartupData(props.startup);
    const otherStartups = getOtherStartupsData(props.startup).map(s => s.id);
    const allProps = {
      ...props,
      startupData,
      meta: {
        ...props.meta,
        links: [
          ...((props.meta && props.meta.links) || []),
          ...((startupData && startupData.links) || [])
        ]
      },
      footer: (
        <div>
          {props.startup && <StartupMembers startup={props.startup} />}
          {props.footer ||
            (otherStartups && (
              <SectionCards
                className="section-color"
                startups={otherStartups}
              />
            ))}
        </div>
      )
    };
    return <Cmp {...allProps} />;
  };

  return CmpWithStartup;
}

const LayoutArticle = ({ meta, footer, children, startupData }) => {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {(meta.hero && meta.hero.background && (
        <Hero
          backgroundImage={meta.hero.background}
          title={meta.hero.title}
          alt={meta.hero.alt}
          tagline={meta.hero.tagline}
        />
      )) ||
        null}

      <Article>
        {startupData.finished && (
          <div
            style={{
              background: "#efefef",
              padding: 10,
              borderRadius: 2,
              fontSize: "1.5em"
            }}
          >
            Cette startup a cessé son activité au {startupData.finished}
          </div>
        )}
        {children}
        {(meta && meta.links && meta.links.length && (
          <React.Fragment>
            <div
              style={{
                marginTop: 50,
                fontSize: "1.2em",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Les liens utiles du projet :
            </div>
            <div className="article__author-list">
              {meta.links.map(link => (
                <ArticleLink key={link.href} {...link} />
              ))}
            </div>
          </React.Fragment>
        )) ||
          null}
      </Article>
      {footer}
    </Layout>
  );
};

LayoutArticle.propTypes = {
  meta: PropTypes.exact({
    title: PropTypes.string,
    hero: PropTypes.exact({
      alt: PropTypes.string,
      background: PropTypes.string,
      tagline: PropTypes.string,
      title: PropTypes.string
    }),
    links: PropTypes.arrayOf(PropTypes.shape({ href: PropTypes.string }))
  }),
  startupData: PropTypes.object,
  footer: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default withStartup(LayoutArticle);
