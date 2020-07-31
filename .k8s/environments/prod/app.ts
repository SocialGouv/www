import { AppConfig } from "@socialgouv/kosko-charts/components/app";
import { ok } from "assert";

ok(process.env.CI_PROJECT_NAME);
ok(process.env.KUBE_INGRESS_BASE_DOMAIN);

export default {
  hosts: [
    `${process.env.CI_PROJECT_NAME}.${process.env.KUBE_INGRESS_BASE_DOMAIN}`,
    `${process.env.KUBE_INGRESS_BASE_DOMAIN}`
  ]
} as Partial<AppConfig>;
