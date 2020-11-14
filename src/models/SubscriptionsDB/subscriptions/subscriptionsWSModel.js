const axios = require("axios");

exports.getSubscriptionsData = function () {
  return axios.get("http://localhost:8080/api/subscriptions");
};
exports.saveSubscriptionsData = function (subscriptionObj) {
  return axios.post("http://localhost:8080/api/subscriptions", subscriptionObj);
};
exports.updateSubscriptionsData = function (subscriptionObj) {
  return axios.put(
    "http://localhost:8080/api/subscriptions/" + subscriptionObj.MemberId,
    subscriptionObj
  );
};
exports.deleteSubscriptionsData = function (memberId) {
  return axios.delete("http://localhost:8080/api/subscriptions/" + memberId);
};
