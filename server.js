var Model = require('./models/models.js');
var express = require('express');
var mongoose = required('mongoose');
var bodyParser = required('body-parser');
var morgan = required('morgan');

var app = express();


var db = "mongodb://localhost/personalsite";

mongoose.connect(db, function(err, response){
	if(err){
		console.log('Failed to connect to ' + db);
	}
	else {
		console.log('Connected to ' + db);
	}
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));