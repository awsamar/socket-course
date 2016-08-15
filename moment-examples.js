var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));

var timestamp = 1471268252286;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mma'));


// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm a')); //Oct 5th 2015, 6:20 pm
