const news = require("../src/data/news");

const convertNews = news => {
  return `
  <item>
    <title>${news.title}</title>
    <pubDate>${news.date}</pubDate>
    <link>https://incubateur.social.gouv.fr/actus#${news.date}</link>
    <description><![CDATA[${news.html}]]></description>
  </item>
  `;
};

const currentTime = new Date();

// le debut du fichier contenant le flux rss

const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <title>L'actu de l'incubateur des ministères sociaux</title>
      <updated>${currentTime}</updated>
      <channel>
        <title>L'actu de l'incubateur des ministères sociaux</title>
        <link>https://incubateur.social.gouv.fr/actus</link>
        <description>L'incubateur des ministères sociaux...</description>
        <language>fr</language>
        ${news.map(convertNews).join("\n")}
      </channel>
 </rss>
  `;

console.log(rss);
