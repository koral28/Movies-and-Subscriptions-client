const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let membersSchema = new Schema({
  Name: String,
  Email: String,
  City: String,
});

module.exports = mongoose.model("Members", membersSchema);
