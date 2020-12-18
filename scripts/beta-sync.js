const fetch = require("node-fetch");
const yaml = require("js-yaml");
const fs = require("fs");

const BETA_STARTUPS_URL =
  process.env.BETA_STARTUPS_URL ||
  "https://beta.gouv.fr/api/v2.1/startups.json";

const readFile = (path) => fs.readFileSync(path, "utf8");
const writeFile = (path, content) => fs.writeFileSync(path, content, "utf8");

const socialStartups = yaml.safeLoad(readFile("./src/data/startups.yml"));

const getBetaStartups = () =>
  fetch(BETA_STARTUPS_URL)
    .then((r) => r.json())
    .then((r) => r.data);

// handle special path cases
function getSocialGouvPath(betaId) {
  const startup = getSocialGouvStartup(betaId);
  if (startup.page) {
    return `./pages/startups/${startup.page}`;
  }
  return `./pages/startups/${startup.id}.mdx`;
}

// find social startup by betaId or id
const getSocialGouvStartup = (betaId) =>
  socialStartups.find((s) => (s.betaId || s.id) === betaId);

const isSocialGouv = (startup) => !!getSocialGouvStartup(startup.id);

// replace content in local startup mdx file
function replaceStartupContent(betaId, content) {
  const socialgouvPath = getSocialGouvPath(betaId);
  const originalContent = readFile(socialgouvPath);
  const replaceRegex = new RegExp(
    "(<!-- start content -->)[\\s\\S]*(<!-- end content -->)",
    "gm"
  );
  const newContent = originalContent.replace(
    replaceRegex,
    `$1\n\n${content.trim()}\n\n$2`
  );
  if (newContent !== originalContent) {
    console.log(`Update startup ${betaId}`);
    writeFile(socialgouvPath, newContent);
  }
}

// update local startups contents
async function sync() {
  const betaStartups = await getBetaStartups();
  const startups = betaStartups.filter(isSocialGouv);
  startups.forEach((startup) => {
    const markdown = decodeURIComponent(
      startup.attributes.content_url_encoded_markdown
    );
    replaceStartupContent(startup.id, markdown);
  });

  // check if some missing on beta.gouv
  socialStartups
    .filter((s) => !betaStartups.find((a) => a.id === (s.betaId || s.id)))
    .forEach((s) => {
      console.error(`Startup ${s.id} not found on beta.gouv`);
    });
}

if (require.main === module) {
  sync().catch(console.error);
}
