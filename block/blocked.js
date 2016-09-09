//link to node's file system
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('foo.txt', 'utf8');

// print a food heading and the list of food
console.log('FOOD');
console.log(food);

// open and read bar list
var bar = fs.readFileSync('bar.txt', 'utf8');

//print bar heading and list of drinks
console.log('BAR');
console.log(bar);