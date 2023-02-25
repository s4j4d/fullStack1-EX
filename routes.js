const {StatusCodes} =require('http-status-codes'),
url = require('url-parse')
// uitls = require('./utils.js');

const routing ={
    "GET": {},
    "POST": {},
    "PUT": {},
    "PATCH": {},
    "DELETE": {}
};


exports.get = (url, action) => {
    routing.GET[url] = action;
  };
  
  exports.post = (url, action) => {
    routing.POST[url] = action;
  };
  
  exports.put = (url, action) => {
    routing.PUT[url] = action;
  };
  
  exports.patch = (url, action) => {
    routing.PATCH[url] = action;
  };
  
  exports.delete = (url, action) => {
    routing.DELETE[url] = action;
  };
  