'use strict';

var _ = require('lodash');
var Ticket = require('./ticket.model');

// Get list of tickets
exports.index = function(req, res) {
  Ticket.find(function (err, tickets) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(tickets);
  });
};

// Get a single ticket
exports.show = function(req, res) {
  Ticket.findById(req.params.id, function (err, ticket) {
    if(err) { return handleError(res, err); }
    if(!ticket) { return res.status(404).send('Not Found'); }
    return res.json(ticket);
  });
};

// Creates a new ticket in the DB.
exports.create = function(req, res) {
  Ticket.create(req.body, function(err, ticket) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(ticket);
  });
};

// Updates an existing ticket in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ticket.findById(req.params.id, function (err, ticket) {
    if (err) { return handleError(res, err); }
    if(!ticket) { return res.status(404).send('Not Found'); }
    var updated = _.merge(ticket, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(ticket);
    });
  });
};

// Deletes a ticket from the DB.
exports.destroy = function(req, res) {
  Ticket.findById(req.params.id, function (err, ticket) {
    if(err) { return handleError(res, err); }
    if(!ticket) { return res.status(404).send('Not Found'); }
    ticket.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}