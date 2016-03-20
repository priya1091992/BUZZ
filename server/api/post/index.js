'use strict';

var express = require('express');
var controller = require('./post.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/addPost', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.put('/:id',controller.updateCount);

module.exports = router;


