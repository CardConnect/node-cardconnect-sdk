var chai = require('chai');
var cardconnect = require("../cardconnect.js");

var api = new cardconnect();

var test_capture = {
  "merchid": "496160873888",
  "retref": "110776233356"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

describe("Capture", function(){
  this.timeout(10000);
  it("performs a capture", function(done){
    api.Capture(config, test_capture)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.resptext, "Txn Batched");
    }).then(done, done);
  });
});
