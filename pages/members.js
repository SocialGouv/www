import React from "react";
import { Hero, Layout, Card } from "../src/composants";

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
        title="Les acteurs de l'incubateur"
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
          {items.map(member => (
            <Card
              key={member.id + member.name}
              ref={member.id}
              href="#"
              img={member.picture}
              title={member.name}
              meta={member.structure}
              style={{ flex: "1 0 auto", margin: "5px auto" }}
              description={member.role}
            >
              {member.startups.map(startup => (
                <div key={startup + member.id} className="label label">
                  {startup}
                </div>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Members;
