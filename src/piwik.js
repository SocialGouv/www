import ReactPiwik from "react-piwik";

const piwik = new ReactPiwik({
  url: "matomo.tools.factory.social.gouv.fr",
  siteId: 2,
  trackErrors: true
});

export default piwik;
export { ReactPiwik };
