'use strict';


/**
 * hubCreate
 * 
 *
 * hub Hub 
 * returns Hub
 **/
exports.hubCreate = function(hub) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "query" : "query",
  "callback" : "callback",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * hubDelete
 * 
 *
 * hubId String 
 * no response value expected for this operation
 **/
exports.hubDelete = function(hubId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * hubFind
 * 
 *
 * returns List
 **/
exports.hubFind = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "query" : "query",
  "callback" : "callback",
  "id" : "id"
}, {
  "query" : "query",
  "callback" : "callback",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * hubGet
 * 
 *
 * hubId String 
 * returns Hub
 **/
exports.hubGet = function(hubId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "query" : "query",
  "callback" : "callback",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

