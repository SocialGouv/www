import Link from "next/link";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import { LayoutArticle, Section } from ".";

const articles = [
  {
    href: "/startups/code-du-travail-numerique",
    title: "Introduction",
  },
  {
    href: "/startups/code-du-travail-numerique/genese",
    title: "La genèse du code du travail numérique",
  },
  {
    href: "/startups/code-du-travail-numerique/kickoff",
    title: "Lancement de la startup",
  },
  {
    href: "/startups/code-du-travail-numerique/ux",
    title: "Mise en place d'une démarche UX",
  },
  {
    href: "/startups/code-du-travail-numerique/droit-libre",
    title: "Ecosystème du droit libre",
  },
  {
    href: "/startups/code-du-travail-numerique/release-v3.2.0",
    title: "Release v-3.2.0 Fuschia Eagle",
  },
  {
    disabled: true,
    href: "/startups/code-du-travail-numerique/complexite",
    title: "La complexité du droit",
  },
  {
    disabled: true,
    href: "/startups/code-du-travail-numerique/sdr",
    title: "Les services de renseignement",
  },
  {
    disabled: true,
    href: "/startups/code-du-travail-numerique/data",
    title: "Les sources de données",
  },
  {
    disabled: true,
    href: "/startups/code-du-travail-numerique/prototype-1",
    title: "Premiers prototypes",
  },
  {
    disabled: true,
    href: "/startups/code-du-travail-numerique/nlp-machine-learning",
    title: "Language naturel et Machine Learning",
  },
];

const Links = withRouter(({ router }) => (
  <Section
    className="section-grey"
    style={{ marginTop: 50 }}
    title="Autres articles sur le code du travail numérique"
    subTitle=""
  >
    <ul>
      {articles
        .filter((a) => !a.disabled)
        .map((article) => {
          return (
            <li key={article.href}>
              {router.pathname === article.href ? (
                <div>{article.title}</div>
              ) : (
                <Link href={article.href}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>{article.title}</a>
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  </Section>
));

//

const LayoutCDTN = ({ meta, children }) => {
  if (typeof window !== "undefined" && meta.disabled) {
    throw new Error("Not found");
  }

  return (
    <LayoutArticle meta={meta} startup="code-du-travail-numerique">
      <div>{children}</div>
      <p>
        {" "}
        👉 Pour en savoir plus, contactez-nous sur{" "}
        <a href="mailto:codedutravailnumerique@travail.gouv.fr">
          codedutravailnumerique@travail.gouv.fr
        </a>
      </p>

      <Links />
    </LayoutArticle>
  );
};

LayoutCDTN.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  meta: PropTypes.object,
};

export default LayoutCDTN;
