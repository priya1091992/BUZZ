'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TicketSchema = new Schema({
//  name: String,
//  info: String,
//  active: Boolean
//  category:{type:String, default:'BUZZ'},//[BUZZ, LAF]
//  dateCreated:{type:Number, default:Date.now()},
//  lastUpdated:{type:Number, default:Date.now()},
//  status: String, //[PUBLISHED, DRAFT]
//
//  header: String,
//  content: String,
//  lastContent:String,
//  viewed:{type:Number, default:0},
//  media:{
//    category:{type:String, default:'Image'} ,//[VIDEO, IMAGE]
//    url:String
//  },
//  createdBy:{
//    id:String,
//    name:String,
//    email:String
//  },
//  active:Boolean

  status:String, //open. resolved, inProgress
  Date:{type:Number, default:Date.now()},
  Department:String, //admin, it, hr, infra
  IssueId:{type:Number},
  title:String,
  Concern:String
});

module.exports = mongoose.model('Ticket', TicketSchema);
