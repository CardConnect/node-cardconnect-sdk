var cardconnect = require('../cardconnect/cardconnect.js');

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

var test_create = {
      "merchid": "496082673999",
      "account": "9418594164541111",
      "name": "Test User"
};

var api = new cardconnect();

console.log("\nPerforming profile creation ...");

api.Profile.Create(config, test_create)
.then(function(result){
  console.log('\nProfile creation response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});

var test_update = {
    "merchid": "496160873888",
    "profile": "14415027005301832533",
    "account": "9418594164541111",
    "name": "Test User Updated",
    "profileupdate": "Y"
};

console.log("\n Performing profile update ...");

api.Profile.Update(config, test_update)
.then(function(result){
  console.log('\nProfile update response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});

var test_get = {
      "merchid": "496160873888",
      "profileid": "14415027005301832533"
};

console.log("\nPerforming profile get ...");

api.Profile.Get(config, test_get)
.then(function(result){
  console.log('\nProfile get response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});

var test_delete = {
      "merchid": "496160873888",
      "profileid": "4"
};

console.log("\nPerforming profile delete ...");

api.Profile.Delete(config, test_delete)
.then(function(result){
  console.log('\nProfile delete response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});
