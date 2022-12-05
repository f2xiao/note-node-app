import fs from 'fs'
const getNotes = function () {
  return 'Your notes...'
}

const loadNotes = function() {
  return 'Load notes...'
}

const addNote = function (note) {
  // load all notes from notes.json file
  // if error, create a new file with empty array
  let notes = [];
  fs.readFile('notes.json', (error, data) => {
      if (error) {
        return
      } 
      notes = JSON.parse(data.toString())
    })
  // if no error, push the new note obj into the notes array
  notes.push(note)
}
export {
  getNotes,
  loadNotes,
  addNote
};