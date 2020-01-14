import React from "react";
import PropTypes from "prop-types";
import { Card } from ".";

import startups from "../data/startups.yml";

function withStartups(Cmp) {
  const CmpWithStartups = props => (
    <Cmp
      {...props}
      startups={startups.filter(s =>
        props.startups ? props.startups.includes(s.id) : true
      )}
    />
  );
  return CmpWithStartups;
}

const cardStyle = { flex: "1 0 30%", margin: 5 };

const SectionCards = ({
  title = "Nos autres startups",
  className,
  startups
}) => (
  <section className={"section " + className}>
    <div className="container">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div
        className="row"
        style={{
          color: "black",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 5
        }}
      >
        {startups.map(startup => (
          <Card
            style={cardStyle}
            className={startup.finished && "startup--finished"}
            key={startup.href}
            {...startup}
          />
        ))}
      </div>
    </div>
  </section>
);

SectionCards.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  startups: PropTypes.arrayOf(PropTypes.object)
};

export default withStartups(SectionCards);
