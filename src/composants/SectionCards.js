import PropTypes from "prop-types";
import React from "react";

import startups from "../data/startups.yml";
import { Card } from ".";

function withStartups(Cmp) {
  const CmpWithStartups = (props) => (
    <Cmp
      {...props}
      startups={startups.filter((s) =>
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
  filter = () => true,
  startups,
}) => (
  <section className={"section " + className}>
    <div className="container">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div
        className="row"
        style={{
          color: "black",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: 5,
        }}
      >
        {startups
          .reverse()
          .filter(filter)
          .map((startup) => (
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
  cards: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  filter: PropTypes.func,
  startups: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default withStartups(SectionCards);
