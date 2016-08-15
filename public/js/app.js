var socket = io();
// var moment = require('moment');
// var now = moment();

socket.on('connect', function() {
	console.log('Connected to socket.io server.');
});

socket.on('message', function(message) {
	var timestampUTC = moment.utc(message.timestamp);
	jQuery('.messages').append('<p><strong>' + timestampUTC.local().format('h:mm a') + ': </strong> ' +  message.text + '</p>');
});


//handles submitting of new message
var $form = jQuery('#message-form');
$form.on('submit', function(event) {
	event.preventDefault(); //prevents default form handling on browser when submit is pressed
	var $msgField = $form.find('input[name=message]')
	socket.emit('message', {
		text: $msgField.val()
	});

	$msgField.val('');
});