import chalk from "chalk" ;

const error = chalk.bold.green;
const warning = chalk.hex ('#DEADED');
const name = chalk.redBright;

console.log(error('HELP!'));
console.log(warning('TEST case!'));
console.log(name('Pedro'));
