const axios = require("axios");

exports.getUsersData =  () => {
    return axios.get("http://localhost:8000/api/users");
  };
exports.saveUsersData = function (usersObj) {
    return axios.post("http://localhost:8000/api/users", usersObj);
};
exports.updateUsersData = function (usersObj) {
    return axios.put(
      "http://localhost:8000/api/users/" + usersObj.UserId,
      usersObj
    );
  };
  exports.deleteUsersData = function (usersObj) {
    return axios.delete("http://localhost:8000/api/users/" + usersObj.Id);
  };
  