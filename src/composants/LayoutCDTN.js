import { Section, BlocCards, LayoutArticle, Cards } from ".";
import Link from "next/link";
import { withRouter } from "next/router";

const articles = [
  {
    title: "Introduction",
    href: "/startups/code-du-travail-numerique"
  },
  {
    title: "La genèse du code du travail numérique",
    href: "/startups/code-du-travail-numerique/genese"
  },
  {
    title: "La complexité du droit",
    href: "/startups/code-du-travail-numerique/complexite"
  },
  {
    title: "Les services de renseignement",
    href: "/startups/code-du-travail-numerique/sdr"
  },
  {
    title: "Lancement de la startup",
    href: "/startups/code-du-travail-numerique/kickoff"
  },
  {
    title: "Les sources de données",
    href: "/startups/code-du-travail-numerique/data"
  },
  {
    title: "Premiers prototypes",
    href: "/startups/code-du-travail-numerique/prototype-1"
  },
  {
    title: "Language naturel et Machine Learning",
    href: "/startups/code-du-travail-numerique/nlp-machine-learning"
  }
];

const Links = withRouter(({ router }) => (
  <Section
    className="section-grey"
    style={{ marginTop: 50 }}
    title="Autres articles sur le code du travail numérique"
    subTitle=""
  >
    <ul>
      {articles.map(article => {
        return (
          <li key={article.href}>
            {router.pathname === article.href ? (
              <div>{article.title}</div>
            ) : (
              <Link href={article.href}>
                <a>{article.title}</a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  </Section>
));

const footer = <BlocCards cards={[Cards.wif, Cards.emjpm]} />;

const LayoutCDTN = ({ meta, children }) => (
  <LayoutArticle footer={footer} meta={meta}>
    <div>{children}</div>
    <Links />
  </LayoutArticle>
);

export default LayoutCDTN;
