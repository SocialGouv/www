const news = require("../../src/data/news");

const convertNews = news => {
  return `
  <item>
    <title>${news.title}</title>
    <pubDate>${news.date}</pubDate>
    <link>https://fabrique.social.gouv.fr/actus#${news.date}</link>
    <description><![CDATA[${news.html}]]></description>
  </item>
  `;
};

//function convertNews(news) {

//}
// le debut du fichier contenant le flux rss
var currentTime = new Date();
const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <title>L'actu de la fabrique numérique des ministères sociaux</title>
      <updated>${currentTime}</updated>

      <channel>
        <title>L'actu de la fabrique numérique des ministères sociaux</title>
        <link>https://fabrique.social.gouv.fr/actus#{id}</link>
        <description>La fabrique numérique des ministères sociaux...</description>
        <language>fr</language>
        ${news.map(convertNews).join("\n")}
      </channel>
 </rss>
  `;

//console.log(rss);
