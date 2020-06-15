const { authJwt } = require("../middleware");

const controller = require("../controllers/ucd.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/update_ucd", [authJwt.verifyToken], controller.update);
  app.get("/get_details", [authJwt.verifyToken], controller.details);
  app.delete("/ucd/delete_account", [authJwt.verifyToken], controller.remove);
};
