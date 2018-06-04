const BlocCards = ({ title = "Autre articles", cards }) => (
  <section className="section-color">
    <div className="container">
      <h1>{title}</h1>
      <div className="row" style={{ maxWidth: 800, color: "black" }}>
        {cards.map((Card, i) => <Card key={i} />)}
      </div>
    </div>
  </section>
);

export default BlocCards;
