/*
 * DEMO: met push, push(null)  maak je van je eigen tekst een Readable Stream 
 */


var Readable = require('stream').Readable;

var rs = new Readable({encoding: 'utf8'});
rs.push('Een eerste lijn tekst.\n ');
rs.push('Een tweede lijn tekst. \n');
rs.push(null);

rs.on('data', function(data) { 
     // streaming data als een utf8-encoded string;  
     console.log('\n Ontvangen utf8 data: \n', data); 
     });

//rs.pipe(process.stdout); //alternatief

 //verhinderen dat de console direct sluit.
setTimeout(function() {
    process.exit();
}, 10000);