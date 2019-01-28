import React from "react";
import { Hero, Layout, Section } from "../src/composants";

import { Card } from "../src/composants";

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

import members from "../src/data/members.json";

const Members = () => {
  const items = shuffleArray(members);

  return (
    <Layout>
      <Hero
        title="Les acteurs de l'incubateurs"
        tagline="Ils contribuent à l'incubateur des ministères Sociaux"
      />
      <div className="container">
        <div
          className="row cards cards--small"
          style={{
            color: "black",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {items.map(member => {
            return (
              <Card
                ref={member.id}
                href="#"
                img={member.picture}
                title={member.name}
                meta={member.structure}
                style={{ flex: "1 0 auto", margin: 5 }}
                description={member.role}
              >
                {member.startups.map(startup => (
                  <div className="label label">{startup}</div>
                ))}
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Members;
