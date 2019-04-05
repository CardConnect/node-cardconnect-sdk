var api_requestor = require('./api_requestor.js');

module.exports = CardConnect;

function CardConnect()
{
}

CardConnect.prototype.Auth = function(config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/auth"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Capture = function (config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/capture"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Funding = function (config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "get";
    config.path = "/cardconnect/rest/funding?merchid=" + request.merchid + "&date=" + request.date;
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Refund = function (config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/refund"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Void = function(config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/void"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.SigCap = function(config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/sigcap"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Profile = function(config, request, resolve, reject)
{
};

CardConnect.prototype.Profile.Create =  function(config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/profile"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Profile.Update = function (config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "put";
    config.path = "/cardconnect/rest/profile"
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
}

CardConnect.prototype.Profile.Get = function(config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "get";
    config.path = "/cardconnect/rest/profile/" + request.profileid + "//" + request.merchid;
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};

CardConnect.prototype.Profile.Delete = function(config, request, resolve, reject)
{
  return new Promise(function(resolve, reject){
    config.method = "delete";
    config.path = "/cardconnect/rest/profile/" + request.profileid + "/" + request.account + "/" + request.merchid;
    console.log(config.path);
    var api = new api_requestor();
    api.SendRequest(config, request)
      .then(function(result){
        resolve(result);
      })
      .catch(function(result){
        reject(result);
      });
    });
};
