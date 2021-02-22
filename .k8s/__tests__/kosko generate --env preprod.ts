//

import { getEnvManifests } from "@socialgouv/kosko-charts/testing";
import { project } from "@socialgouv/kosko-charts/testing/fake/gitlab-ci.env";

jest.setTimeout(1000 * 60);
test("kosko generate --preprod", async () => {
  process.env.RANCHER_PROJECT_ID = "c-kk8xm:p-s5gkl";
  process.env.HARBOR_PROJECT = "fabrique";
  expect(
    await getEnvManifests("preprod", "", project("www").preprod)
  ).toMatchSnapshot();
});
