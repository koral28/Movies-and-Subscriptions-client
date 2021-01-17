const express = require("express");
const router = express.Router();
var Movies = require("../models/moviesModel");

router.route("/").get(function (req, resp) {
  Movies.find({}, function (err, movies) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.json(movies);
    }
  });
});

router.route("/").post(function (req, resp) {
  const movie = new Movies({
    Name: req.body.Name,
    Genres: req.body.Genres,
    Image: req.body.Image,
    Premiered: req.body.Premiered,
  });
  movie.save(function (err) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.send("Saved!");
    }
  });
});

router.route("/:name").put(function (req, resp) {
  const movie = {
    Name: req.body.Name,
    Genres: req.body.Genres,
    Image: req.body.Image,
    Premiered: req.body.Premiered,
  };
  Movies.update({ Name: req.params.name }, movie, function (err) {
    if (err) {
      return resp.send(err);
    }
    return resp.send("Updated!");
  });
});

router.route("/:name").delete(function (req, resp) {
  Movies.remove({ Name: req.params.name }, function (err) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.send("deleted!");
    }
  });
});

module.exports = router;
