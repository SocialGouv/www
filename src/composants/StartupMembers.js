import React from "react";

import members from "../data/members.yml";
import { Member } from ".";

const getStartupMembers = (startup) =>
  members.filter((member) => member.startups?.indexOf(startup) > -1);

const shuffled = (arr) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

const StartupMembers = ({ startup }) => {
  const startupMembers = shuffled(getStartupMembers(startup));
  return (
    (startupMembers && (
      <div className="container">
        <div
          style={{
            fontSize: "1.2em",
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: 40,
            textAlign: "center",
          }}
        >
          Personnes qui ont contribué au projet :
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingBottom: 30,
          }}
        >
          {startupMembers.map((member) => (
            <Member
              key={member.name}
              style={{ flex: "1 0 auto" }}
              {...member}
            />
          ))}
        </div>
      </div>
    )) ||
    null
  );
};
export default StartupMembers;
