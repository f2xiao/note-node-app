import {getNotes, loadNotes} from '.././notes.js'

test('hello node note', () => {
  expect(getNotes).toBeDefined()
})
 
test('this should fail',() => {
  throw new Error('failure')
})   

