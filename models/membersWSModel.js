const axios = require("axios");

exports.getMembersData = function () {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
