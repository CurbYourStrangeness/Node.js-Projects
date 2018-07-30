console.log('Starting notes.js');

var addNote = (title, body) => {
 console.log('Adding note', title, body);
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
