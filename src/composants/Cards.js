import React from "react";
import { Card } from ".";
import startups from "../data/startups.yml";

// startups par id {"e-mjpm": {...}, "work-in-france":{...} ...}
const Cards = startups.reduce(
  (startups, startup) => ({
    ...startups,
    [startup.id]: <Card {...startup} />
  }),
  {}
);

export default Cards;
