const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let moviesSchema = new Schema({
  Name: String,
  Genres: [String],
  Image: String,
  Premiered: String,
});

module.exports = mongoose.model("Movies", moviesSchema);
