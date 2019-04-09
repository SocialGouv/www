const GitHub = require("github-base");
const debug = require("debug")("github-stats");
const trace = debug.bind(null, "[TRACE]: ");
const info = debug.bind(null, "[INFO]: ");
const error = debug.bind(null, "[ERROR]: ");

const github = new GitHub({
  token: process.env.GITHUB_TOKEN
});

const sum = arr => arr.reduce((sum, i) => sum + i, 0);

const getRepoActivity = async repo => {
  trace("getRepoActivity", repo);
  const constributors = await github.get(`/repos/${repo}/stats/contributors`);
  return constributors.body;
};

const getRepos = async org => {
  trace("getRepos", org);
  const repos = await github.get(`/orgs/${org}/repos`);
  trace("getRepos", org, { repos });
  return repos.body;
};

const getRepoStats = async repo => {
  trace("getRepoStats", repo);
  const activity = await getRepoActivity(repo);
  trace("getRepoStats ", repo, { activity });
  return (
    activity &&
    activity.map && {
      commits: sum(activity.map(a => a.total)) || 0,
      contributors: activity.map(a => a.author.login)
    }
  );
};

const isRepoVisible = repo =>
  !repo.fork && !repo.private && repo.name !== "next-routes";

const flatten = arr =>
  arr.filter(Boolean).reduce((memo, c) => [...memo, ...c], []);
const uniquify = arr => [...new Set(arr)];

const isValidContributor = name =>
  name && !["renovate[bot]", "renovate-bot"].includes(name);

const parseRepos = async repos => {
  trace("parseRepos", repos);
  const validRepos = (repos && repos.filter(isRepoVisible)) || [];
  trace("parseRepos", repos, { validRepos });
  const reposStats = await Promise.all(
    validRepos.map(repo => getRepoStats(`${repo.owner.login}/${repo.name}`))
  );
  trace("parseRepos", repos, { reposStats });

  const contributors = uniquify(
    flatten(reposStats.filter(Boolean).map(repo => repo.contributors))
  ).filter(isValidContributor).length;
  trace("parseRepos", repos, { contributors });

  return {
    count: validRepos.length,
    issues: sum(validRepos.map(repo => repo.open_issues)),
    size: sum(validRepos.map(repo => repo.size)),
    commits: sum(reposStats.filter(Boolean).map(repo => repo.commits)),
    contributors
  };
};

const getOrgData = async org => parseRepos(await getRepos(org));

const fetchGithubStats = async () => await getOrgData("SocialGouv");

if (require.main === module) {
  (async () => {
    try {
      const stats = await fetchGithubStats();
      info(stats);
      console.log(JSON.stringify(stats, null, 2));
    } catch (e) {
      error(e);
      console.log("e", e);
      throw e;
    }
  })();
}
