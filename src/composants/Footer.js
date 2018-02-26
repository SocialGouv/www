export default () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__logo">
        <img src="/static/images/etalab.svg" alt="Logo Etalab" />
        <ul className="footer__social">
          <li>
            <a href="https://twitter.com/etalab" title="Twitter">
              <svg className="icon icon-twitter">
                <use xlinkHref="#icon-twitter" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/etalab" title="Github">
              <svg className="icon icon-github">
                <use xlinkHref="#icon-github" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/etalab" title="Facebook">
              <svg className="icon icon-fb">
                <use xlinkHref="#icon-fb" />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:info@data.gouv.fr" title="Nous écrire un mail">
              <svg className="icon icon-mail">
                <use xlinkHref="#icon-mail" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer__links">
        <li>
          <h2>template.data.gouv.fr</h2>
        </li>
        <li>
          <a href="https://www.data.gouv.fr/reference">Données de référence</a>
        </li>
        <li>
          <a href="https://www.data.gouv.fr/terms">Conditions générales d'utilisation</a>
        </li>
        <li>
          <a href="https://www.data.gouv.fr/api">API</a>
        </li>
      </ul>
      <ul className="footer__links" />
    </div>
  </footer>
);
