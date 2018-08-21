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
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created');
    notes.logIt(note);
  }else{
    console.log('Error. Duplicate(s) exist');
  }
}else if (commd === 'list'){
  console.log(notes.getAll());
}else if (commd === 'read'){
  var note = notes.getNote(argv.title);

  if (note){
    console.log('Found note');
    notes.logIt(note);
  }else{
    console.log('Note not found');
  }
}else if (commd === 'remove'){
   var noteRem = notes.removeIt(argv.title);
   var message = noteRem ? 'Note Removed' : 'Note not found';
   console.log(message);
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
