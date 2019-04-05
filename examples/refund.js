var cardconnect = require('../cardconnect/cardconnect.js');

var test_refund = {
      "merchid": "496082673999",
      "retref": "206880253516"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

var api = new cardconnect();

console.log("\nPerforming refund ...");

api.Refund(config, test_refund)
.then(function(result){
  console.log('\nRefund response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});
