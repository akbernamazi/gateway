const axios = require("axios");

exports.signup = async (req, res) => {
  await axios
    .post("http://localhost:8080/api/auth/signup", {
      body: req.body,
    })
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
    .post("http://localhost:8080/api/auth/signin", {
      body: req.body,
    })
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
  //   console.log(req.body);
  await axios
    .delete("http://localhost:8080/api/auth/delete_account", {
      data: req.body,
    })
    .then((response) => {
      console.log("response");
      console.log(response.status);
      console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.log(error.message);
      //   console.log(error.response.status);
      res.status(error.response.status).send(error.response.data.message);
    });
};

exports.update = async (req, res) => {
  console.log(req.body);
  await axios
    .put("http://localhost:8080/api/auth/update_password", {
      body: req.body,
    })
    .then((response) => {
      console.log(response.data),
        res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(error.response.status).send(error.response.data.message);
    });
};
