import env from "@kosko/env";

import { create } from "@socialgouv/kosko-charts/components/nginx";
import { getHarborImagePath } from "@socialgouv/kosko-charts/utils/getHarborImagePath";


const manifests = create("www", {
  env,
  deployment: {
    image: getHarborImagePath({ name: "www" }),
  }
});

export default manifests;
