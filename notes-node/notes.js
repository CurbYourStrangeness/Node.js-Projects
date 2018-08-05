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
  console.log('Reading');
};

var removeIt = (title) => {
  console.log('Removing Note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeIt
};
