//link to node's file system
var fs = require('fs');

// open and read food list
var food = fs.readFile('foo.txt', 'utf8', function(err, dfood) {
	//error handle
	if (err) throw err; 
	// print a food heading and the list of food
	else {
		console.log(dfood);
		console.log('\n--FOOD--\n')
	}
});

//console.log('FOOD');
//console.log(food);

// open and read bar list
var bar = fs.readFile('bar.txt', 'utf8', function(err, dbar) {
	//error handle
	if (err) throw err;
	//print bar heading and list of drinks\
	else {
		console.log(dbar);
		console.log('\n--BAR--\n')
	}
});

//console.log('BAR');
//console.log(bar);