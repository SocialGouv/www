import React from "react";

import startups from "../data/startups.yml";
import { Card } from ".";

// startups par id {"e-mjpm": {...}, "work-in-france":{...} ...}
const Cards = startups.reduce(
  (startups, startup) => ({
    ...startups,
    [startup.id]: <Card {...startup} />,
  }),
  {}
);

export default Cards;
