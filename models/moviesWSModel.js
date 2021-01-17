const axios = require("axios");

exports.getMoviesData = function () {
  return axios.get("https://api.tvmaze.com/shows");
};
