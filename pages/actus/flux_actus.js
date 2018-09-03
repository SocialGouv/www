const news = require("../../src/data/news");

const convertNews = news => {
  return `
  <item>
    <title>${news.title}</title>
    <link>https://incubateur.social.gouv.fr/actus#${news.date}</link>
    <description><![CDATA[${news.html}]]></description>
  </item>
  `;
};

//function convertNews(news) {

//}
// le debut du fichier contenant le flux rss
const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <title>L'actu de l'incubateur des ministères sociaux</title>
      <updated>2018-08-31T15:50:00+02:00</updated>
    
      <channel>
        <title>L'actu de l'incubateur des ministères sociaux</title>
        <link>https://incubateur.social.gouv.fr/actus#{id}</link>
        <description>L'incubateur des ministères sociaux...</description>
        <language>fr</language>
        ${news.map(convertNews).join("\n")}  
      </channel>
 </rss>
  `;

console.log(rss);
