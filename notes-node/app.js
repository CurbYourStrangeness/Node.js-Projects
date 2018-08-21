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
    console.log('--');
    console.log('Title: ${note.title}');
    console.log('Body: ${note.body}');


  }else{
    console.log('Error. Duplicate(s) exist');
  }
}else if (commd === 'list'){
  notes.getAll();
}else if (commd === 'read'){
  notes.getNote(argv.title);
}else if (commd === 'remove'){
   notes.removeIt(argv.title);
}else{
  console.log('Command not recognized');
};
