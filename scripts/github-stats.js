const debug = require("debug")("github-stats");
const info = debug.bind(null, "[INFO]: ");
const error = debug.bind(null, "[ERROR]: ");
const fetch = require("node-fetch");
const fs = require("fs");

const sum = arr => arr.reduce((sum, i) => sum + i, 0);

const query = `
  query ($login: String!) {
  organization(login: $login) {
    name
    createdAt
    membersWithRole(first: 100) {
      totalCount
    }
    repositories(first: 100, isFork: false) {
      totalCount
      edges {
        node {
          name
          object(expression: "master") {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
          issues {
            totalCount
          }

        }
      }
    }
  }
}
`;

const variables = {
  login: "SocialGouv"
};

const graphQlQuery = (query, variables) =>
  fetch(`https://${process.env.GITHUB_TOKEN}@api.github.com/graphql`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  })
    .then(response => response.json())
    .then(json => json.data)
    .catch(e => {
      console.log(e);
    });

const computeResults = results => {
  return {
    count: results.organization.repositories.totalCount,
    issues: sum(
      results.organization.repositories.edges.map(
        edge => edge.node.issues.totalCount
      )
    ),
    commits: sum(
      results.organization.repositories.edges.map(
        edge => (edge.node.object && edge.node.object.history.totalCount) || 0
      )
    ),
    contributors: results.organization.membersWithRole.totalCount
  };
};
const fetchGraphQLStats = async () =>
  graphQlQuery(query, variables).then(computeResults);

if (require.main === module) {
  (async () => {
    try {
      const stats = await fetchGraphQLStats();
      info(stats);
      const json = JSON.stringify(stats, null, 2);
      fs.writeFileSync("./public/github-stats.json", json);
    } catch (e) {
      error(e);
      console.log("e", e);
      throw e;
    }
  })();
}
