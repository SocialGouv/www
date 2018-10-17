import React from "react";
import { Card } from ".";

import startups from "../data/startups.json";

const withStartups = Cmp => props => (
  <Cmp
    {...props}
    startups={startups.filter(
      s => (props.startups ? props.startups.indexOf(s.id) > -1 : true)
    )}
  />
);

const SectionCards = ({ title = 'Nos autres startups', cards, className, startups }) => (
  <section className={'section ' + className}>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <div className="row" style={{ color: 'black', justifyContent: 'center' }}>
        {cards && cards.map((Card, i) => <Card key={i} />)}
        {startups.map(startup => <Card key={startup.href} {...startup} />)}
      </div>
    </div>
  </section>
);

export default withStartups(SectionCards);
