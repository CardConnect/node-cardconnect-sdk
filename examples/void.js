var cardconnect = require('../cardconnect/cardconnect.js');

var test_void = {
      "merchid": "{obtained from cardconnect}",
      "retref": "206880253516"
};

var config = {
  "username": "{obtained from cardconnect}",
  "password": "{obtained from cardconnect}",
  "server": "{obtained from cardconnect}.cardconnect.com",
  "port": 6443,
  "debug": false,
};

var api = new cardconnect();

console.log("\nPerforming void ...");

api.Void(config, test_void)
.then(function(result){
  console.log('\nVoid response: ' + JSON.stringify(result));
})
.catch(function(result){
  console.log('An Error occured');
});
