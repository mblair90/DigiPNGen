// Import modulles
const prompt = require('prompt');
prompt.start();
const fastcsv = require('fast-csv');
const fs = require('fs');
const ws = fs.createWriteStream("out.csv");

// Set new arrays
let pnArray = [];
let newArray = [];

// Get user input
prompt.get(['pn1', 'pn2'], function(err, result) {
	if (err) {return onErr(err); }
	// Turn input into integers
	var pn1 = parseInt(result.pn1);
	var pn2 = parseInt(result.pn2);
	// Create array of integers from pn to pn
	for (var i = pn1; i <= pn2; i++) {
		pnArray.push(i);
	}

	// Map over pnArray and create newArray
	pnArray.map(variations);
	
	// Write to file
	fastcsv.write([newArray]).pipe(ws);
	console.log("Successfully wrote file (out.csv)");

function variations(pn) {
	newArray.push("DK" + pn + "-2.5" + "\r");
	newArray.push("DK" + pn + "-5" + "\r");
	newArray.push("DR" + pn + "-2.5" + "\r");
	newArray.push("DR" + pn + "-5" + "\r");
}

});