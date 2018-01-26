'use strict';

var MongoClient = require('mongodb').MongoClient;
const mongourl = process.env.MONGO_STRING;
const uuidv1 = require('uuid/v1');
var assert = require('assert');

var mongoUtils = require('../utils/mongoUtils')

/**
 * troubleTicketCreate
 * 
 *
 * troubleTicket TroubleTicket 
 * returns TroubleTicket
 **/
exports.troubleTicketCreate = function(req) {
  return new Promise(function(resolve, reject) {
    var troubleTicket = req.swagger.params['troubleTicket'].value;

    if (!troubleTicket.id) {
      troubleTicket.id = uuidv1();
    }

    let baseUrl = req.url;

    if (req.url.indexOf("?")>1) {
      baseUrl = req.url.slice( 0, req.url.indexOf("?") );
    }
    
    troubleTicket.href = baseUrl + "/" + troubleTicket.id;
    
    // Use connect method to connect to the server
    
    MongoClient.connect(mongourl, function(err, client) {
      const db = client.db("tmf");

      assert.equal(null, err);

      // Get the documents collection
      var collection = db.collection('troubleTicket');
      // Insert some documents
      collection.insert( troubleTicket, function(err, result) {
        assert.equal(err, null)
      });
      client.close();
      delete troubleTicket["_id"];
      
      resolve({payload: troubleTicket,code:201});
    });
  });
}


/**
 * troubleTicketFind
 * 
 *
 * fields String  (optional)
 * returns List
 **/
exports.troubleTicketFind = function(req) {
  return new Promise(function(resolve, reject) {
    // Use connect method to connect to the server
    
    MongoClient.connect(mongourl, function(err, client) {
      const db = client.db("tmf");

      assert.equal(null, err);

      // Get the documents collection
      var collection = db.collection('troubleTicket');

      // Find some documents
      collection.find({}, 
        mongoUtils.fieldFilter(req.swagger.params.fields.value)).toArray(function(err, docs) {
        assert.equal(err, null);
  
        docs.forEach( function(item) { delete item["_id"]; } );
        resolve({payload: docs, code:200});
      });
      client.close();
    
    });
  });
}


/**
 * troubleTicketGet
 * 
 *
 * troubleTicketId String 
 * fields String  (optional)
 * returns TroubleTicket
 **/
exports.troubleTicketGet = function(req) {
  return new Promise(function(resolve, reject) {
  var troubleTicketId = req.swagger.params.troubleTicketId.value;
    // Use connect method to connect to the server
    
    MongoClient.connect(mongourl, function(err, client) {
      const db = client.db("tmf");

      assert.equal(null, err);

      // Get the documents collection
      var collection = db.collection('troubleTicket');
  
      const query = { id: troubleTicketId }

      // Find the document
      collection.findOne( query, 
        mongoUtils.fieldFilter(req.swagger.params.fields.value), function(err, doc) {
          assert.equal(err, null);

          delete doc["_id"];     
          resolve({payload: doc, code:300});
        });
        client.close();
      });
    });
 }


/**
 * troubleTicketPatch
 * 
 *
 * troubleTicketId String 
 * troubleTicket TroubleTicket 
 * returns TroubleTicket
 **/
exports.troubleTicketPatch = function(troubleTicketId,troubleTicket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * troubleTicketUpdate
 * 
 *
 * troubleTicketId String 
 * troubleTicket TroubleTicket 
 * returns TroubleTicket
 **/
exports.troubleTicketUpdate = function(troubleTicketId,troubleTicket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

