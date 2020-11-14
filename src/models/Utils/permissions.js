const axios = require("axios");

exports.getPermissionsData =  () => {
    return axios.get("http://localhost:8000/api/permissions");
};