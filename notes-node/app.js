console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


//console.log(_.isString(true));
//console.log(_.isString('Jaqueline'));
var filteredArray = _.uniq(['Lacrimos', 1,'Lacrimos', 1, 5, 8, 7, 7, 9])
console.log(filteredArray);

//console.log(notes.add(9.-2));

//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', 'Hello ${user.username}!');
