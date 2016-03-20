'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  category:{type:String, default:'BUZZ'},//[BUZZ, LAF]
  dateCreated:{type:Date, default:Date.now},
  header: String,
  content: String,
  media_url:String,
  name:String,
  email:String,
  likes:[{type:String}],
  dislikes:[{type:String}]

});

module.exports = mongoose.model('Post', PostSchema);
