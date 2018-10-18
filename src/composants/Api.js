const Tag = ({ children }) => (
  <li className="tag">
    <a>{children}</a>
  </li>
);

const Tags = ({ tags }) => tags.map(t => <Tag key={t}>{t}</Tag>);

const Api = () => (
  <section className="section section-grey">
    <div className="container">
      <div className="panel">
        <div className="panel__header">
          <h3>Token panel for API administration</h3>
          <small className="panel__header-extra">Créé le 31 février</small>
        </div>
        <div className="form__group">
          <label>Token rights</label>
          <Tags tags={["zombies", "undeads", "creep swarms"]} />
        </div>
        <div className="form__group">
          <label htmlFor="token">Token</label>
          <div className="input__group">
            <input type="text" name="token" />
            <button className="button icon-button">
              <svg className="icon icon-copy" viewBox="0 0 32 32">
                <use xlinkHref="#icon-copy" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Api;
