var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);
console.log ('timestamp: ' + timestamp);
console.log ('timestamp type: ' + typeof(timestamp));

console.log ('timestampUTC: ' + timestampMoment);
console.log ('timestampUTC type: ' + typeof(timestampMoment));

console.log(timestampMoment.local().format('h:mma'));


// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm a')); //Oct 5th 2015, 6:20 pm
