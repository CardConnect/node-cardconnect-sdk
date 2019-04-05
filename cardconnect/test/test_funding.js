var chai = require('chai');
var cardconnect = require("../cardconnect.js");

var api = new cardconnect();

var test_funding = {
  "merchid": "496160873888",
  "date": "0419"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

describe("Funding", function(){
  this.timeout(20000);
  it("performs an funding request", function(done){
    api.Funding(config, test_funding)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.merchid, "496160873888");
    }).then(done, done);
  });
});
