var cardconnect = require('../cardconnect/cardconnect.js');

var test_capture = {
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

console.log("\nPerforming capture ...");

api.Capture(config, test_capture)
.then(function(result){
  console.log('\nCapture response: ' + JSON.stringify(result));
})
.catch(function(){
  console.log('An Error occured');
});
