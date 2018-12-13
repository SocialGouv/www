//

const paths = [
  ["/"],
  ["/404"],
  ["/actus"],
  ["/actus/board-juin-2018"],
  ["/actus/saison-2-jour-j"],
  ["/actus/saison2"],
  ["/actus/tests-navigateur-avec-cypress"],
  ["/cgu"],
  ["/evenements"],
  ["/faq"],
  ["/fonctionnement-incubateur"],
  ["/index"],
  ["/startups/code-du-travail-numerique"],
  ["/startups/code-du-travail-numerique/genese"],
  ["/startups/e-mjpm"],
  ["/startups/fiche_entreprise"],
  ["/startups/work-in-france"]
];

jest.setTimeout(10 * 1000) // allow to be 10s slow

test.each(paths)("%s should be reachable", async path => {
  await page.goto(process.env.BASE_URL + path);
});
