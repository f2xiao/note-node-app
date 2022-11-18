import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
//console.log(chalk.blue('Hello world!'));
//console.log(yargs(hideBin(process.argv)));
//console.log(yargs(hideBin(process.argv)).argv);
//const argv = yargs(hideBin(process.argv)).argv;
//console.log(argv)
let note=[];
yargs(hideBin(process.argv))
  .command('add <title> <content>', 'add a note with the title and content', () => {
   
  }, (argv) => {
     note.push({title: argv.title, content:argv.content});
    console.log(note)
    console.info(argv)
  })
  .demandCommand(1)
  .parse()
