const { authJwt } = require("../middleware");

const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/signup", controller.signup);

  app.post("/signin", controller.signin);

  app.delete("/delete_account", [authJwt.verifyToken], controller.remove);
  app.put("/update_password", [authJwt.verifyToken], controller.update);
};
