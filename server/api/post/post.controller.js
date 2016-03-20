'use strict';

var _ = require('lodash');
var Post = require('./post.model');
// Get list of posts
exports.index = function(req, res) {
  var offset=req.query.off;
  var limit=req.query.limit;
  Post.find({},{},{sort:{'dateCreated':-1}, limit:limit, skip:offset},function (err, posts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(posts);
  });
};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.status(404).send('Not Found'); }
    return res.json(post);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  Post.create(req.body, function(err, post) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Post.findById(req.params.id, function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.status(404).send('Not Found'); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.status(404).send('Not Found'); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};


exports.updateCount=function(req,res){
  Post.findById(req.params.id, function (err, post) {
    console.log(post.likes.indexOf(req.body.currentUser));
    if (err) {
      return handleError(res, err);
    }
    else if(!post) {
      return res.status(404).send('Not Found-------');
    }
    else{
      if(req.body.choice=='like') {
        if(post.likes.indexOf(req.body.currentUser)>=0){
               console.log('like');
            }
        else if(post.dislikes.indexOf(req.body.currentUser)>=0) {
          post.likes.push(req.body.currentUser);
          var index=post.dislikes.indexOf(req.body.currentUser);
          post.dislikes.splice(index,1);
        }
        else{
          post.likes.push(req.body.currentUser);
        }
      }
      else{
        if(post.dislikes.indexOf(req.body.currentUser)>=0){
          console.log('dislike');
        }
        else if(post.likes.indexOf(req.body.currentUser)>=0) {
          post.dislikes.push(req.body.currentUser);
          var index=post.likes.indexOf(req.body.currentUser);
          post.likes.splice(index,1);
        }
        else{
          post.dislikes.push(req.body.currentUser);
        }
      }
    }
    post.save(function (err, post) {
      if (err) { return handleError(res, err); }
      return res.send(post);
    });
  });
}

function handleError(res, err) {
  return res.status(500).send(err);
}
