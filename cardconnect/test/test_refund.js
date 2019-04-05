var chai = require('chai');
var cardconnect = require("../cardconnect.js");

var api = new cardconnect();

var test_refund = {
      "merchid": "496160873888",
      "retref": "109858246936"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

describe("Refund", function(){
  it("performs a refund", function(done){
    api.Refund(config, test_refund)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.resptext, "Txn not settled");
    }).then(done, done);
  });
});
