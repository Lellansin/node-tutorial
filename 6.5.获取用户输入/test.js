/*
	readline
	API 参见 http://nodeapi.ucdok.com/#/api/readline.html
*/

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (cmd) {
  console.log('You just typed: '+cmd);
});