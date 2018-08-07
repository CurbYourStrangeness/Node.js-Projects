console.log('Starting notes.js');

const files = require('fs');


var fetchNotes = () =>{
  try{
    var noteString = files.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }catch(e){
   return [];
  }
};

var saveNotes = (notes) => {
   files.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
 var notes = fetchNotes();
 var note = {
   title,
   body
 };
var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) =>{
  var notes = fetchNotes();
  var filtered0 = notes.filter((note) => note.title === title);
  return filtered0[0];
};

var removeIt = (title) => {
  var names = fetchNotes();
  var filtered = names.filter((note) => note.title !== title);
  saveNotes(filtered);

  return names.length !== filtered.length;
  //filterNotes, remove one with title matching arg
  //save new notes array
};

var logIt = (note) => {
  console.log('--');
  console.log('Title: ${note.title}');
  console.log('Body: ${note.body}');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeIt,
  logIt
};
