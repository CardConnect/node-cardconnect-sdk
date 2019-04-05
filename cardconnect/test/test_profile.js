var chai = require('chai');
var cardconnect = require("../cardconnect.js");

var api = new cardconnect();

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

var test_create = {
      "merchid": "496160873888",
      "account": "9418594164541111",
      "name": "Test User"
};

describe("Profile", function(){
  it("creates a profile", function(done){
    api.Profile.Create(config, test_create)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.resptext, "Profile Saved");
    }).then(done, done);
  });
});

var test_update = {
    "merchid": "496160873888",
    "profile": "14415027005301832533",
    "account": "9418594164541111",
    "name": "Test User Updated",
    "profileupdate": "Y"
};

describe("Profile", function(){
  it("updates a profile", function(done){
    api.Profile.Update(config, test_create)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response.resptext, "Profile Saved");
    }).then(done, done);
  });
});

var test_get = {
      "merchid": "496160873888",
      "profileid": "14415027005301832533"
};

describe("Profile", function(){
  it("gets a profile", function(done){
    api.Profile.Get(config, test_get)
    .then(function(result){
      var response = JSON.parse(result);
      chai.assert.equal(response[0].profileid, "14415027005301832533");
    }).then(done, done);
  });
});
