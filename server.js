var express = require('express');
var app = express();
var parser = require('body-parser');
var controllers = ('./Controller/controller');

app.use(parser.json());

var mongoose = require('mongoose');

var router = require('./routes.js');

//Connect to the database
mongoose.connect('mongodb://localhost:27017');

var port = process.env.port || 3000;

app.use('/api', router);

app.use(express.static(__dirname + '/client'));

mongoose.connection.on('connected', function () {  
	app.listen(port, function () {
	  console.log('App listening on port 3000!');
	}); 
}); 