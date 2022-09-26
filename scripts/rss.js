const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

const convertNews = (news) => {
  return `
  <item>
    <title>${news.title}</title>
    <pubDate>${news.date}</pubDate>
    <link>https://fabrique.social.gouv.fr${
      news.href || `/actus/${news.date}`
    }</link>
    <description><![CDATA[${news.html}]]></description>
  </item>
  `;
};

const currentTime = new Date();

// le debut du fichier contenant le flux rss

const news = yaml.load(
  fs.readFileSync(path.join(__dirname, "../src/data/news.yml"), "utf8")
);

const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <title>L'actu de la fabrique numérique des ministères sociaux</title>
      <updated>${currentTime}</updated>
      <channel>
        <title>L'actu de la fabrique numérique des ministères sociaux</title>
        <link>https://fabrique.social.gouv.fr/actus</link>
        <description>La fabrique numérique des ministères sociaux...</description>
        <language>fr</language>
        ${news.map(convertNews).join("\n")}
      </channel>
 </rss>
  `;

console.log(rss);
