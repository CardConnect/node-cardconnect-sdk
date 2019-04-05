var chai = require('chai');
var cardconnect = require("../cardconnect.js");

var api = new cardconnect();

var test_auth = {
  "merchid": "496160873888",
  "account": "4111111111111111",
  "expiry": "1218",
  "amount": "1.00",
  "currency": "USD"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

describe("Auth", function(){
  it("performs an auth", function(done){
    api.Auth(config, test_auth)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.resptext, "Approval");
    }).then(done, done);
  });
});
