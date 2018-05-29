class Startup extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }
  render() {
    const startup = this.props.query.startup;
    const Markdown = require(`./${startup}.mdx`).default;
    return (
      <section className="section-white">
        <div className="container">
          <Markdown />
        </div>
      </section>
    );
  }
}

export default Startup;
