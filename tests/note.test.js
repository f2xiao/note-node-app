import * as notes from '.././notes.js'

test('notes should be defined', () => {
  expect(notes).toBeDefined()
})
 
test('loadNotes should be defined',() => {
  expect(notes.loadNotes).toBeDefined();
})   

test('loadNotes should return an array',() => {
  expect(notes.loadNotes().length).toBeGreaterThanOrEqual(0);
})

test('saveNotes should be defined',() => {
  expect(notes.saveNotes).toBeDefined();
})

test('addNote should be defined',() => {
  expect(notes.addNote).toBeDefined();
})

test('addNote should return a number',() => {
  expect(notes.addNote({
    title: 't',
    content: 'c'
  })).toEqual(1);
})

test('readNote should be defined',() => {
  expect(notes.readNote).toBeDefined();
})

test('readNote should return a string',() => {
  expect(notes.readNote('t')).toEqual('c');
})

test('removeNote should be defined',() => {
  expect(notes.removeNote).toBeDefined();
})

test('removeNote should return a number',() => {
  expect(notes.removeNote('t')).toEqual(0);
})

test('readNote should return a string',() => {
  expect(notes.readNote('t')).toEqual('No such note!');
})

test('addNote should return a number',() => {
  expect(notes.addNote({
    title: 'shopping list',
    content: 'milk, eggs'
  })).toEqual(1);
})

test('readNote should return a string',() => {
  expect(notes.readNote('shopping list')).toEqual('milk, eggs');
})

