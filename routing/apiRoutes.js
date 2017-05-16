var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('../data/friendsConnect.js')


router.get('/', function(req,resp) {
	resp.json(data);
});

router.post('/', function(req,resp) {
	var newUser = req.body;
	data.push(newUser);
});


module.exports = router;