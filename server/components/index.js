/**
 * Created by priya on 3/3/16.
 */
'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var arr;
var formidable = require('formidable'),
  http = require('http'),
  util = require('util');
var router = express.Router();

router.post("/uploads", function(req, res){
  var form = new formidable.IncomingForm();
    form.uploadDir = global.appPath+ "/../client/uploads/";
   form.parse(req, function(err, fields, files) {
    var a={files:files};
     var obj= a.files;

if(JSON.stringify(obj) === '{}'){
return res.json({});
}
     else{
  arr=a.files.file.path.split("/");
  var n=arr.length;
  return res.json({id:arr[n-1]});
}

   });
});

module.exports = router;
