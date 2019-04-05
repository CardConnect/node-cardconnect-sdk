var cardconnect = require('../cardconnect/cardconnect.js');

var test_auth = {
  "merchid": "496082673999",
  "account": "4444333322221111",
  "expiry": "1220",
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

var api = new cardconnect();

console.log("\nPerforming auth ...");

api.Auth(config, test_auth)
.then(function(result){
  console.log('\nAuth response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});
