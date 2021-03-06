const axios = require("axios");

verifyToken = async (req, res, next) => {
  //   console.log(req.headers);
  await axios
    .post("http://localhost:8080/verify", {
      body: req.body,
      headers: req.headers,
    })
    .then((response) => {
      if (response.status == 200) {
        // console.log(response);
        // req.uid = { uid: response.data.uid };
        req.body.uid = response.data.uid;
        // console.log(req.body);
        // console.log(req.uid);
        next();
      } else {
        // console.log("XXX");
        // console.log(response);
        res.status(response.status).send(response.data);
      }
    })
    .catch((error) => {
      //   console.log("XX");
      //   console.log(error.response);
      res.status(error.response.status).send(error.response.data.message);
    });
  //   next();
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
