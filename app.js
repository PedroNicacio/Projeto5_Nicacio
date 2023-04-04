const readlineSync = require('readline-sync');
const chalk = require('chalk');

const cssProperties = [];

let property = readlineSync.question(chalk.yellow('Digite uma propriedade CSS (ou SAIR para encerrar): '));

while (property.toUpperCase() !== 'SAIR') {
  cssProperties.push(property);
  property = readlineSync.question(chalk.yellow('Digite uma propriedade CSS (ou SAIR para encerrar): '));
}

console.log(chalk.green.bold('Propriedades CSS ordenadas em ordem alfabética:'));
cssProperties.sort().forEach(property => console.log(chalk.blue(property)));
