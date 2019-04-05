var http = require("https");

module.exports = ApiRequestor;

function ApiRequestor()
{
}

ApiRequestor.prototype.SendRequest = function(config, request)
{
  return new Promise(function(resolve, reject){
    var options = {
      host: config.server,
      port: config.port,
      path: config.path,
      method: config.method,
      headers: {
        'Authorization': 'Basic ' + new Buffer(config.username + ':' + config.password).toString('base64'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    var response = '';
    var req = http.request(options, function(res) {
      if(config.debug == true)
      {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
      }

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        if(config.debug == true)
        {
          console.log('BODY: ' + chunk);
        }
        
        response += chunk;
      }).on('error', function(e) {
        console.log(e);
        reject;
      }).on('end', function(){
        resolve(response);
      });
    });

    req.write(JSON.stringify(request));
    req.end();
  });
};
