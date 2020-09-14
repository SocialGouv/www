import ReactPiwik from "react-piwik";

const piwik = new ReactPiwik({
  siteId: 2,
  trackErrors: true,
  url: "matomo.fabrique.social.gouv.fr",
});

export default piwik;
export { ReactPiwik };
