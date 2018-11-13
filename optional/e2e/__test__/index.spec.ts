//

import "jest-screenshot";

//

jest.setTimeout(30 * 1000);

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
  ["/startups/code-du-travail-numerique/kickoff"],
  ["/startups/code-du-travail-numerique/ux"],
  ["/startups/e-mjpm"],
  ["/startups/fiche_entreprise"],
  ["/startups/work-in-france"]
];

const breakpoints: [string, number][] = [
  ["phone", 576],
  ["tablet", 768],
  ["desktop", 992],
  ["large screen", 1200]
];

const arrayProduct = (arrayB: any[][]) => (acc: any[], valueA: any[]) => [
  ...acc,
  ...arrayB.map(valueB => [...valueA, ...valueB])
];

const cases = paths.reduce(arrayProduct(breakpoints), []);

test.each(cases)("%s (on %s)", async (path, _size, breakpoint) => {
  await page.setViewport({
    width: breakpoint,
    height: breakpoint / (16 / 9)
  });
  await page.goto("https://incubateur.social.gouv.fr" + path);
  expect(await page.screenshot({ fullPage: true })).toMatchImageSnapshot();
});
