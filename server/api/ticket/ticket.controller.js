var _=require('lodash');
var ticket=require('./ticket.model');

exports.create=function(req,res){
  ticket.create(req.body,function(err,ticket){
      if(err){ return handleError(res,err);}
    return res.status(201).json(ticket);

  })
}

exports.find=function(req,res){
  var limit=req.query.limit;
  var offset=req.query.offset;
  var email=req.query.user;
  if(email){
  ticket.find({email:email},{},{sort:{issue_date:-1},limit:limit,skip:offset},function(err,ticket){
    if(err){return handleError(res,err);  }
    return res.status(200).json(ticket);
  })
   }
  else{
     ticket.find({},{},{sort:{issue_date:-1},limit:limit,skip:offset},function(err,ticket){
     if(err){return handleError(res,err);  }
     return res.status(200).json(ticket);
   })
   }
}

exports.update1 = function(req, res) {
var status=req.body.option.toString()
  ticket.findOneAndUpdate({_id:req.params.id},{ $set: { assignedto:req.body.assign,status:req.body.option}} ,function (err, post1) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(post1);
    });
}

function handleError(res,err){
  return res.status(500).send(err);
}
