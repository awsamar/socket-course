var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server.');
});

socket.on('message', function(message) {
	console.log('New message:');
	console.log(message.text);

	jQuery('.messages').append('<p>' + message.text + '</p>');
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