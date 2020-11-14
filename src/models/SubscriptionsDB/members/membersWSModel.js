const axios = require("axios");

exports.getMembersData =  () => {
  return axios.get("http://localhost:8080/api/members");
};

exports.saveMembersData =  (memberObj) => {
  return axios.post("http://localhost:8080/api/members", memberObj);
};

exports.updateMembersData =  (memberObj) => {
  return axios.put(
    "http://localhost:8080/api/members/" + memberObj.name,
    memberObj
  );
};

exports.deleteMembersData = function (memberName) {
  return axios.delete("http://localhost:8080/api/members/" + memberName);
};
