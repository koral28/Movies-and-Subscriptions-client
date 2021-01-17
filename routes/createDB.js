var express = require("express");
var router = express.Router();
var membersWs = require("../models/membersWSModel");
const Members = require("../models/membersModel");
var moviesWs = require("../models/moviesWSModel");
var Movies = require("../models/moviesModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let flag = 1;
  var membersFromWS = await membersWs.getMembersData().catch((err) => {
    console.log("caught it");
  });

  var moviesFromWS = await moviesWs.getMoviesData().catch((err) => {
    console.log("caught it");
  });

  membersFromWS = membersFromWS.data;
  moviesFromWS = moviesFromWS.data;

  moviesFromWS.forEach((element) => {
    // We create a new document and then save it in database
    const movie = new Movies({
      Name: element.name,
      Genres: element.genres,
      Image: element.image.medium,
      Premiered: element.premiered,
    });

    //  console.log(member);

    movie.save(function (err) {
      if (err) {
        console.log(err);
        flag = 0;
      } else {
        console.log("Movie Saved!");
      }
    });
  });

  membersFromWS.forEach((element) => {
    // We create a new document and then save it in database
    const member = new Members({
      Name: element.name,
      Email: element.email,
      City: element.address.city,
    });

    //  console.log(member);

    member.save(function (err) {
      if (err) {
        console.log(err);
        flag = 0;
      } else {
        console.log("Member Saved!");
      }
    });
  });

  if (flag == 1) {
    res.send("DB CREATED!");
  }
});

module.exports = router;
