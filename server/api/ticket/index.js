var express=require('express');
var controller=require('./ticket.controller');

var router=express.Router();

router.get('/',function(req,res,next){
  next();
},controller.find);
router.post('/',controller.create);
router.put('/:id',controller.update1);
module.exports=router;
