import { Section, BlocCards, LayoutArticle, Cards, StartupMembers } from ".";
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
    href: "/startups/code-du-travail-numerique/complexite",
    disabled: true
  },
  {
    title: "Les services de renseignement",
    href: "/startups/code-du-travail-numerique/sdr",
    disabled: true
  },
  {
    title: "Lancement de la startup",
    href: "/startups/code-du-travail-numerique/kickoff",
    disabled: true
  },
  {
    title: "Les sources de données",
    href: "/startups/code-du-travail-numerique/data",
    disabled: true
  },
  {
    title: "Premiers prototypes",
    href: "/startups/code-du-travail-numerique/prototype-1",
    disabled: true
  },
  {
    title: "Language naturel et Machine Learning",
    href: "/startups/code-du-travail-numerique/nlp-machine-learning",
    disabled: true
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
      {articles.filter(a => !a.disabled).map(article => {
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

const LayoutCDTN = ({ meta, children }) => {
  if (typeof window !== "undefined" && meta.disabled) {
    throw new Error("Not found");
  }

  return (
    <LayoutArticle footer={footer} meta={meta}>
      <div>{children}</div>
      <p>
        {" "}
        👉 Pour en savoir plus, contactez-nous sur{" "}
        <a href="mailto:contact@code-du-travail.beta.gouv.fr">
          contact@code-du-travail.beta.gouv.fr
        </a>
      </p>
      <StartupMembers startup="code-du-travail-numerique" />

      <Links />
    </LayoutArticle>
  );
};
export default LayoutCDTN;
