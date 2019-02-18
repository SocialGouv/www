const GitHub = require("github-base");

const github = new GitHub({
  token: process.env.GITHUB_TOKEN
});

const sum = arr => arr.reduce((sum, i) => sum + i, 0);

const getRepoActivity = repo =>
  github
    .get(`/repos/${repo}/stats/contributors`)
    .then(res => res.body)
    .catch(console.error);

const getRepos = org =>
  github
    .get(`/orgs/${org}/repos`)
    .then(res => res.body)
    .catch(console.error);

const getRepoStats = repo =>
  getRepoActivity(repo).then(
    activity =>
      activity &&
      activity.map && {
        commits: sum(activity.map(a => a.total)) || 0,
        contributors: activity.map(a => a.author.login)
      }
  );

const isRepoVisible = repo =>
  !repo.fork && !repo.private && repo.name !== "next-routes";

const flatten = arr =>
  arr.filter(Boolean).reduce((memo, c) => [...memo, ...c], []);
const uniquify = arr => [...new Set(arr)];

const isValidContributor = name =>
  name && !["renovate[bot]", "renovate-bot"].includes(name);

const parseRepos = async repos => {
  const validRepos = (repos && repos.filter(isRepoVisible)) || [];
  const reposStats = await Promise.all(
    validRepos.map(repo => getRepoStats(`${repo.owner.login}/${repo.name}`))
  );

  const contributors = uniquify(
    flatten(reposStats.map(repo => repo.contributors))
  ).filter(isValidContributor).length;

  return {
    count: validRepos.length,
    issues: sum(validRepos.map(repo => repo.open_issues)),
    size: sum(validRepos.map(repo => repo.size)),
    commits: sum(reposStats.map(repo => repo.commits)),
    contributors
  };
};

const getOrgData = org => getRepos(org).then(parseRepos);

if (require.main === module) {
  getOrgData("SocialGouv")
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(console.log);
}
