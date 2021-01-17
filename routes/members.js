const express = require("express");
const router = express.Router();
const Members = require("../models/membersModel");

router.route("/").get(function (req, resp) {
  Members.find({}, function (err, members) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.json(members);
    }
  });
});

router.route("/").post(function (req, resp) {
  const member = new Members({
    Name: req.body.name,
    Email: req.body.email,
    City: req.body.city,
  });
  member.save(function (err) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.send("Saved!");
    }
  });
});

router.route("/:name").put(function (req, resp) {
  const member = {
    Name: req.body.name,
    Email: req.body.email,
    City: req.body.city,
  };
  Members.update({ Name: req.params.name }, member, function (err) {
    if (err) {
      return resp.send(err);
    }
    return resp.send("Updated!");
  });
});

router.route("/:name").delete(function (req, resp) {
  Members.remove({ Name: req.params.name }, function (err) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.send("deleted!");
    }
  });
});

module.exports = router;
