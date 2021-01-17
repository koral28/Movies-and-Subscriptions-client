const express = require("express");
const router = express.Router();
const Subscriptions = require("../models/subscriptionsModel");

router.route("/").get(function (req, resp) {
  Subscriptions.find({}, function (err, subscriptions) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.json(subscriptions);
    }
  });
});

router.route("/:id").get(function (req, resp) {
  Subscriptions.findById(req.params.id, function (err, subscription) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.json(subscription);
    }
  });
});

router.route("/").post(function (req, resp) {
  const subscription = new Subscriptions({
    MemberId: req.body.MemberId,
    Movie: req.body.Movie,
  });
  subscription.save(function (err) {
    if (err) {
      console.log(err);
      return resp.send(err);
    } else {
      return resp.send("Saved!");
    }
  });
});

router.route("/:id").put(function (req, resp) {
  const subscription = {
    MemberId: req.params.id,
    Movie: req.body.Movie,
  };
  Subscriptions.update({ Name: req.params.name }, subscription, function (
    err,
    raw
  ) {
    if (err) {
      return resp.send(err);
    }
    return resp.send("Updated!");
  });
});

router.route("/:id").delete(function (req, resp) {
  Subscriptions.remove({ MemberId: req.params.id }, function (err) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.send("deleted!");
    }
  });
});

module.exports = router;
