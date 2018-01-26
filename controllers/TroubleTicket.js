'use strict';

var utils = require('../utils/writer.js');
var TroubleTicket = require('../service/TroubleTicketService');

module.exports.troubleTicketCreate = function troubleTicketCreate (req, res, next) {
  TroubleTicket.troubleTicketCreate(req)
    .then(function (response) {
      utils.writeJson(res, response.payload, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketFind = function troubleTicketFind (req, res, next) {
  TroubleTicket.troubleTicketFind(req)
    .then(function (response) {
      utils.writeJson(res, response.payload, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketGet = function troubleTicketGet (req, res, next) {
  TroubleTicket.troubleTicketGet(req)
    .then(function (response) {
      utils.writeJson(res, response.payload, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketPatch = function troubleTicketPatch (req, res, next) {
  var troubleTicketId = req.swagger.params['troubleTicketId'].value;
  var troubleTicket = req.swagger.params['troubleTicket'].value;
  TroubleTicket.troubleTicketPatch(troubleTicketId,troubleTicket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.troubleTicketUpdate = function troubleTicketUpdate (req, res, next) {
  var troubleTicketId = req.swagger.params['troubleTicketId'].value;
  var troubleTicket = req.swagger.params['troubleTicket'].value;
  TroubleTicket.troubleTicketUpdate(troubleTicketId,troubleTicket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
