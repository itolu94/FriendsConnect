var express = require('express');
var router = express.Router();
var path = require('path')



router.get('/', function(req,resp) {
	resp.sendFile(path.join(__dirname, '../public', 'home.html'));
});


router.post('/presidentsurvey', function(req,resp) {
	resp.sendFile(path.join(__dirname, '../public', 'survey.html'));
});


module.exports =  router;