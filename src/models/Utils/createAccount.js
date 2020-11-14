const axios = require("axios");

exports.createAccount =  (userName,password) => {
    return axios.post("http://localhost:8080/api/login/createNewUserAccount", {userName, password});
};