import React from "react";
import PropTypes from "prop-types";

import { Card } from ".";

import news from "../data/news";

const AllActus = ({ count = 0 }) => (
  <div
    className="row cards"
    style={{
      color: "black",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }}
  >
    {news.slice(0, count ? count : news.length).map(actu => (
      <Card
        key={actu.title}
        {...actu}
        style={{ flex: "1 0 auto", margin: "5px auto" }}
      />
    ))}
  </div>
);

AllActus.propTypes = {
  count: PropTypes.number
};

export default AllActus;
