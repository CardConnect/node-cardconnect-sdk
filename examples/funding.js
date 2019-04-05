var cardconnect = require('../cardconnect/cardconnect.js');

var test_funding = {
  "merchid": "496082673999",
  "date": "0419"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

var api = new cardconnect();

console.log("\nPerforming funding get ...");

api.Funding(config, test_funding)
.then(function(result){
  console.log('\nFunding response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});
