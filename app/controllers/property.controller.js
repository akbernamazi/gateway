const axios = require("axios");

exports.get_details = async (req, res) => {
  //   console.log(req.body);
  await axios
    .get("http://localhost:8082/api/ucd/get_details", { data: req.body })
    .then((response) => {
      //   console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      //   console.log(error.response.status);
      //   console.log(error.response.data);
      res.status(error.response.status).send(error.response.data.message);
    });
};

// exports
exports.update = async (req, res) => {
  console.log(req.body);
  await axios
    .post("http://localhost:8081/api/ucd/update", req.body)
    .then((response) => {
      //   console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      //   console.log(error.response.status);
      //   console.log(error.response.data);
      res.status(error.response.status).send(error.response.data.message);
    });
};

exports.remove = async (req, res) => {
  //   console.log(req.body);
  await axios
    .delete("http://localhost:8081/api/ucd/delete_account", {
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
