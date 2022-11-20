const router = require("express").Router();
//placeholder for API routes to be included
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
//placeholder for API routes to be included
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use((req, res) => {
  res.status(404).end();
});
module.exports = router;