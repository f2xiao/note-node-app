import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import fs from 'fs'
import * as url from 'url';
import * as notes from './notes.js'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// console.log(yargs.argv)
debugger;
console.log(notes)
// customize version number
yargs(hideBin(process.argv)).version('1.0.0');
yargs(hideBin(process.argv)).showVersion("log");

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('add <title> <content>', 'Add a note with title and content',() => { }, (argv) => {
    // console.log(argv);
    const { title, content } = argv;
    const note = { title, content };
    // console.log(note);
    notes.addNote(note)
  })
  .command('remove <title>', 'Remove a note with title', {}, (argv) => { 
    // 
    notes.removeNote(argv.title);
  })
  .command('read <title>', 'Read a note with title', {}, (argv) => { 
    debugger;
    // 
    console.log(notes.readNote(argv.title));
  })
  .command('list', 'List all notes', {}, () => { 
    debugger;
    // 
    console.log(notes.loadNotes());
   })
  .argv

