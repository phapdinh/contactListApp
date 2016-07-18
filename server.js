var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongojs = require('mongojs');
var db = mongojs('contactList',['contactList']);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactList',function(req, res) {
	console.log("I received a get request");
	
	db.contactList.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
})

app.post('/contactList', function(req, res) {
	console.log(req.body);
	db.contactList.insert(req.body,function(err,docs) {
		res.json(docs);
	});
})

app.listen(4000);
console.log('Server running on port 4000');