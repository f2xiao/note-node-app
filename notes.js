import fs from 'fs'
const readNote = function (title) {
  // load all notes
  const notes = loadNotes();
  // find the note with the same title
  let note = notes.find(note => note.title == title);
  if (note == undefined) {
    return 'No such note!'
  }
  return note.content;
}

const loadNotes = function () {
  try {
    // load all notes from notes.json file
  // if error, create a new file with empty array
  // if no error, push the new note obj into the notes array
    const databuffer = fs.readFileSync('notes.json');
    // console.log(databuffer.toString());
    const notes = JSON.parse(databuffer.toString());
    return notes;
  } catch (error) {
    return []
  }
}

const saveNotes = function (notes) {
  // overwrite the file contents with the new notes array
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const addNote = function (note) {
  // load the notes 
  const notes = loadNotes();
  // push the new note to the array
  notes.push(note);
  // overwrite the file with the new array
  saveNotes(notes);
  // return the new length
  return notes.length;
}

const removeNote = function (title) {
  // load all notes from notes.json file
  let notes = loadNotes();
  // remove the note with the same title
  notes = notes.filter(note => note.title != title);
  // overwrite the file with the new array
  saveNotes(notes);
  return notes.length;
}

export {
  loadNotes,
  saveNotes,
  addNote,
  removeNote,
  readNote,
};