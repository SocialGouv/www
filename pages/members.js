import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import { Card, Hero, Layout } from "../src/composants";
import members from "../src/data/members.yml";

const shuffled = (arr) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

class Members extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Les acteurs de la fabrique numérique</title>
        </Head>
        <Hero
          title="Les acteurs de la fabrique numérique"
          tagline="Ils contribuent à la fabrique numérique des ministères Sociaux"
        />
        <div className="container">
          <div
            className="row cards cards--small"
            style={{
              color: "black",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: "2em 0",
            }}
          >
            {this.props.members.map((member) => (
              <Card
                key={member.name}
                img={member.picture}
                title={member.name}
                meta={member.structure}
                style={{
                  flex: "1 0 auto",
                  margin: "5px auto",
                  ...memberStyle(member),
                }}
                description={member.role}
              >
                {member.startups?.map((startup) => (
                  <Link
                    href={`/startups/${startup}`}
                    key={startup + member.name}
                  >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="label">{startup}</a>
                  </Link>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

function memberStyle(member) {
  if (!Array.isArray(member?.missions)) {
    // In case the yaml is broken we silently fail
    return {};
  }
  const [latestMission] = member.missions.slice(-1);
  if (!latestMission.end || new Date(latestMission.end) > new Date()) {
    // The member is still in mission :)
    return {};
  }

  // The member is no longer here :(
  return {
    filter: "grayscale(100%)",
    opacity: "20%",
  };
}

export async function getStaticProps() {
  return {
    props: { members: shuffled(members) },
  };
}

Members.propTypes = {
  members: PropTypes.array,
};

Members.defaultProps = {
  members: [],
};

export default Members;
