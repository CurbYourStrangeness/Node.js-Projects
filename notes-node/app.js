console.log('Starting app.js');

const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var commd = argv._[0];
console.log('Command: ', commd);
console.log('Yargs: ', argv);



if (commd === 'add'){
  notes.addNote(argv.title, argv.body);
}else if (commd === 'list'){
  notes.getAll();
}else if (commd === 'read'){
  notes.getNote(argv.title);
}else if (commd === 'remove'){
   notes.removeIt(argv.title);
}else{
  console.log('Command not recognized');
};




//console.log(_.isString(true));
//console.log(_.isString('Jaqueline'));
//var filteredArray = _.uniq(['Lady'])
//console.log(filteredArray);

//console.log(notes.add(9.-2));

//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', 'Hello ${user.username}!');
