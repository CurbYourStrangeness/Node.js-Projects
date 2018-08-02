console.log('Starting notes.js');

const files = require('fs');


var fetchNotes = () =>{

};

var saveNotes = (notes) => {

};

var addNote = (title, body) => {
 var notes = [];
 var note = {
   title,
   body
 };

try{
  var noteString = files.readFileSync('notes-data.json');
  notes = JSON.parse(noteString);
}catch(e){

}

var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
  files.writeFileSync('notes-data.json', JSON.stringify(notes));
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
