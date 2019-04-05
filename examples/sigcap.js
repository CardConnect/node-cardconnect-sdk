var cardconnect = require('../cardconnect/cardconnect.js');

var test_sigcap = {
    "merchid": "496082673999",
    "retref": "206880253516",
    "signature":"H4sIAAAAAAACA+2cS24VMRBFO4yQGLIJlsCIAXP2xBJYEWN2ZV6ClIT+lG+Vy+3+nCM9EQjqtvvWLZc/r7//+P31aXrm2+Pz5fH59fjrn8efT9PHl3//+fj950/Ty+fD9EYp5fkDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9+HfGwkBOQiJ1Ufx+tZO5ECO1zag2vtuHt8gw8PmVnKgyCwyTzGCIMfR5Li2Im/vQz9JiRVu5/T/+98PLsehDGI/t3Y5Vq+Qcrv2Z/hejoGKzAIj8NxcciwvYtxOv2P7M5yFZfrFXX1RckusVUrXAnLMfpsuh5402tOO8sRWr9Aux+qjM/KV/qvcABZDVJzpu66w2rXlFVLc4YrtqhxGhknMV3bdpQSMV1DjaVTH4tggqzxMw6Gr0ZJbZK42byt07cZ7C+lqEKbLYadrJSnNVjb2kcNokpFhvO1Uxs10Oex6ppqUYoHnGj62TGEYdksmJa/qubels2KBZJRzRqDOFBliELvyWYrlym89JuaJBrGd0lUOryKzONF7Knankxx2Xl3m3uXPWUsxdv1cFcuVr4xUIHann0HsSvI4BlHGmq10Wi0mV6NLzy2Ja0pegxhdSJdDVMSbrwJXy1JEuWZ1qrX1f5Zd2C1fbd1dn7OIyyOjDGIvl1XzVa5BbPXtkF42tbrupCTqrBEk3SD9lsdXS4WwQex0qozvruo0cZHZKNHFiE3PV3pRZARVdW51TIOs1t7GD/p0sjFfieskhkHsfCVWMuKKUz+DGL3bJ1+JRZFtEJe57DS+/4C+dIeyfZBrkGUYVBdytyaq4lqQPj3MzVcBg2wNFr0N4po1LCd9nQySfpjBa5Cyvb/mbfNAg7TLYfeukxxF246068ZERapLUrZBirx3qawUiRVa1rqQnS13lqNa/1fXnQw50g2StaKobA0rq9xKp1JyV2B5QWy5UUFtTQHa5SjyzmxxnvDZ3yCxQGrJV94cGJj5KvGgl2o3MUgx9+bal4Zio/9uchTntzBazsvp8SnuWImbWZ22vTqds9U3ucIlt30Q1CgM7AO9+nPuscnS79hzwCCJoodPO+vPuWskd5KjqyLVg+uunWjXAZV+nN0gSr4KHKIb+3WJgXKUhv2XRIOkn/a/s0GqcgSGAwySnq+809LjyNHj7oEBPbHxrhEkd73xMgZJl6M0HGxAjsS72Gddhg+sx8+EuQaxt7eQ44wGueTbG3b4trV4Ous4K3t3MIidr8IGua0cJWl7yFj68Cp+1Xw1yiDLK2OQnd/XsfUkwwYpl2OUHMpXqjHIPt2334GAQYbnq5hBrirHEIOsNgODDOmU8s1WDDJcjtgbnzBIpwAgXw30ow1ynFQOFNlHLAxynIEMOU5qEPIV+QpFkIN8BRjk4IogxxnlQBEMghzIcQpFyFcYBEWQg3wFschHDvIVBiFfXSytAXIgB6AIIAdyAIogByDHxeRAEQwCyIEcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQxTT9BWzBTye+OAEA"
};

var config = {
  "username": "testing",
  "password": "testing123",
  "server": "fts.cardconnect.com",
  "port": 6443,
  "debug": false,
};

var api = new cardconnect();

console.log("\nPerforming sigcap ...");

api.SigCap(config, test_sigcap)
.then(function(result){
  console.log('\n Sigcap response: ' + JSON.stringify(result));
})
.catch(function(result){
  console.log('An Error occured: ' + JSON.stringify(result));
});
