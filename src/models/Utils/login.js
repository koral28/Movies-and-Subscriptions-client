const axios = require("axios");

exports.login =  (userName,password) => {
    return axios.post("http://localhost:8000/api/login/login", {userName, password});
};