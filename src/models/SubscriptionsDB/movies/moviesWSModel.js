const axios = require("axios");

exports.getMoviesData = function () {
  return axios.get("http://localhost:8080/api/movies");
};

exports.saveMovieData = function (moviesObj) {
  return axios.post("http://localhost:8080/api/movies", moviesObj);
};

exports.updateMoviesData = function (movieObj) {
  return axios.put(
    "http://localhost:8080/api/movies/" + movieObj.Name,
    movieObj
  );
};

exports.deleteMoviesData = function (movieName) {
  return axios.delete("http://localhost:8080/api/movies/" + movieName);
};
