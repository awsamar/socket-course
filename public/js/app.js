var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room') || 'Public';

jQuery('.room-title').text(room);


socket.on('connect', function() {
	console.log(name + ' joined room ' + room + '.');

	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {
	$messages = jQuery('.messages');

	$message = jQuery('<li class="list-group-item"></li>')
	var timestampUTC = moment.utc(message.timestamp);

	$message.append('<p><strong>' + message.name + ' ' + timestampUTC.local().format('h:mm a') + ': </strong></p> ')
	$message.append('<p>' + message.text + '</p>');
	$messages.append($message);
});

//handles submitting of new message
var $form = jQuery('#message-form');
$form.on('submit', function(event) {
	event.preventDefault(); //prevents default form handling on browser when submit is pressed
	var $msgField = $form.find('input[name=message]')
	socket.emit('message', {
		name: name,
		text: $msgField.val()
	});

	$msgField.val('');
});