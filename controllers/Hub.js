'use strict';

var utils = require('../utils/writer.js');
var Hub = require('../service/HubService');

module.exports.hubCreate = function hubCreate (req, res, next) {
  var hub = req.swagger.params['hub'].value;
  Hub.hubCreate(hub)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hubDelete = function hubDelete (req, res, next) {
  var hubId = req.swagger.params['hubId'].value;
  Hub.hubDelete(hubId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hubFind = function hubFind (req, res, next) {
  Hub.hubFind()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hubGet = function hubGet (req, res, next) {
  var hubId = req.swagger.params['hubId'].value;
  Hub.hubGet(hubId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
