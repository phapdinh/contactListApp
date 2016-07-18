var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactList',function(req, res) {
	console.log("I received a get request");
	person1 = {
		name: 'Tim',
		email: 'tim@email.com',
		number: '(111) 111-1111'
	}
	person2 = {
		name: 'Emily',
		email: 'emily@email2.com',
		number: '(222) 222-2222'
	}
	person3 = {
		name: 'john',
		email: 'john@email3.com',
		number: '(333) 333-3333'
	}
	var contactList = [person1, person2, person3];
	res.json(contactList);
})

app.listen(4000);
console.log('Server running on port 4000');