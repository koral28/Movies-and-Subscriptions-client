const mongoose = require("mongoose");
const membersModel = require("./membersModel");

let Schema = mongoose.Schema;

let subscriptionsSchema = new Schema({
  MemberId: { type: mongoose.Schema.Types.ObjectId, ref: membersModel },
  Movie: {
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: membersModel },
    date: Date,
  },
});

module.exports = mongoose.model("Subscriptions", subscriptionsSchema);
