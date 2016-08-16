var PORT = process.env.PORT || 3000;
var express = require('express');
var moment = require('moment');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {

	console.log('User connected via socket.io');

	socket.on('message', function(message) {
		console.log('Message received: ' + message.text);
		message.timestamp = moment().valueOf();

		io.emit('message', message);
	});

	socket.emit('message', {
		name: 'System',
		timestamp: moment().valueOf(), //now in primitive value
		text: 'Welcome to the chat application'
	});
});


app.use(express.static(__dirname + '/public'));

http.listen(PORT, function() {
	console.log('Server started.');
});
