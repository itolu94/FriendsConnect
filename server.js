var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 4133;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));



var index = require('./routing/htmlRoutes.js');
var api = require('./routing/apiRoutes.js');
var data = require('./data/friendsConnect.js');

app.use(express.static(path.join(__dirname , 'public')));

app.use('/', index);
app.use('/api', api);
npm





app.listen(PORT, function() {
	console.log('Server is is being served on localhost:%s', PORT);
})