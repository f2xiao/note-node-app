import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
console.log(chalk.blue('Hello world!'));
console.log(yargs(hideBin(process.argv)));
console.log(yargs(hideBin(process.argv)).argv);

