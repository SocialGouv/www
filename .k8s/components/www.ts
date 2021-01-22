import env from "@kosko/env";

import { create } from "@socialgouv/kosko-charts/components/nginx";
import { getHarborImagePath } from "@socialgouv/kosko-charts/utils/getHarborImagePath";

const IMAGE_TAG = process.env.CI_COMMIT_TAG
  ? process.env.CI_COMMIT_TAG.replace(/^v/, "")
  : process.env.CI_COMMIT_SHA;

const manifests = create("www", {
  env,
  // config: { containerPort: 80 },
  deployment: {
    image: getHarborImagePath({ name: "www" }),
    container: {
      resources: {
        requests: {
          cpu: "100m",
          memory: "128Mi"
        },
        limits: {
          cpu: "500m",
          memory: "1280Mi"
        }
      }
    }
  }
});

export default manifests;
