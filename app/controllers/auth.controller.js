const axios = require("axios");

exports.signup = async (req, res) => {
  await axios
    .post("http://localhost:8080/api/auth/signup", req.body)
    .then((response) => {
      console.log(response.data),
        res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.log(error.response.data.message),
        res.status(error.response.status).send(error.response.data.message);
    });
};

exports.signin = async (req, res) => {
  await axios
    .post("http://localhost:8080/api/auth/signin", req.body)
    .then((response) => {
      //   console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      //   console.log(error.response.data.message),
      res.status(error.response.status).send(error.response.data.message);
    });
};

exports.remove = async (req, res) => {
  console.log(req.uid);
  req.body.uid = req.uid.uid;
  await axios
    .delete("http://localhost:8080/api/auth/delete_account", {
      data: req.body,
    })
    .then((response) => {
      //   console.log("response");
      //   console.log(response.status);
      //   console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      //   console.log(error.message);
      //   console.log(error.response.status);
      res.status(error.response.status).send(error.response.data.message);
    });
};

exports.update = async (req, res) => {
  console.log(req.uid);
  await axios
    .put("http://localhost:8080/api/auth/update_password", req.body, {
      data: req.uid,
    })
    .then((response) => {
      console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(error.response.status).send(error.response.data.message);
    });
};
