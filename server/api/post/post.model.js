'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  category:{type:String, default:'BUZZ'},//[BUZZ, LAF]
  dateCreated:{type:Date, default:Date.now},
  //lastUpdated:{type:Number, default:Date.now()},
  //status: String, //[PUBLISHED, DRAFT]

  header: String,
  content: String,
  media_url:String,

  name:String,
  email:String,
  likes:{type:Number, default:1},
  dislikes:{type:Number, default:1}
});

module.exports = mongoose.model('Post', PostSchema);
