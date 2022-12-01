import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

console.log(yargs.argv)
debugger;

// customize version number
yargs(hideBin(process.argv)).version('1.0.0');
yargs(hideBin(process.argv)).showVersion("log");


yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('add <title> <content>', 'Add a note with title and content', {
  title: {
      describe: "Note title",
      demandOption: true,
      type:'string'
  },
  content: {
    describe: "Note content",
    demandOption: true,
    type:'string'
},
  
  }, (argv) => {
  debugger;
  console.log(argv);
  console.log('Adding a new note!')
})
.argv