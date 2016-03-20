'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ticketSchema = new Schema({
  status: {type: String, default: 'OPEN'}, //open. resolved, inProgress
  issue_date: {type: Date, default: Date.now},
  department: String, //admin, it, hr, infra
  issue_id: {type: Number, default:1},
  title: String,
  concern: String,
  user: String,
  image_url: String,
  email: String,
  assignedto: {type: String, default: 'NONE'}

});

var model = mongoose.model('ticket', ticketSchema);
ticketSchema.pre('save', function (next) {
  var id = this;
  model.findOne({}, {}, {sort: {issue_date: -1}}, function (error, ticket) {
    if (error)
      console.log("Error:",error);
    if(ticket!=null){
    id.issue_id=ticket.issue_id+1;
    }
    next();
  });
});

module.exports = model;


