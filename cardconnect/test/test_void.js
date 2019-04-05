var chai = require('chai');
var cardconnect = require("../cardconnect.js");

var api = new cardconnect();

var test_void = {
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

describe("Void", function(){
  it("performs a void", function(done){
    api.Void(config, test_void)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.merchid, "496160873888");
    }).then(done, done);
  });
});
