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

  app.get("/get_property", [authJwt.verifyToken], controller.get_details);
  app.get(
    "/get_property/:id",
    [authJwt.verifyToken],
    controller.get_details_id
  );
  app.post("/add_property", [authJwt.verifyToken], controller.create);
  app.put(
    "/update_property",
    [authJwt.verifyToken],
    controller.update_property
  );
  app.delete(
    "/delete_property/:id",
    [authJwt.verifyToken],
    controller.delete_property
  );
  app.post("/property_image", [authJwt.verifyToken], controller.property_image);
  app.post("/document_image", [authJwt.verifyToken], controller.document_image);
};
