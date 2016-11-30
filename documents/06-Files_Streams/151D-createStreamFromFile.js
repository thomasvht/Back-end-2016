/* 
 * DEMO: streams voor het lezen van een file , met of zonder opties 
 */
 
const path = require('path');
const fs = require('fs');
let myFile = path.normalize(__dirname + "/../00.Data/MyTextFile.txt");


let content = "";
let counter = 0;

/*--- 1. file uitlezen als readable stream ---*/
let readableStream1 = fs.createReadStream(myFile);
readableStream1.on('data', function (chunck) {
    // chunck is een buffered reeks van (onleesbare) bytes;
    counter++;
    content += counter + " --- \n  " + chunck;  //concatineren met een string = converteren naar een string.
    console.log('\n Een chunck bevat ontvangen en buffered data in binaire vorm:\n', chunck);
    console.log('\n Omgezette chunck data :\n', content);
});

readableStream1.on('end', function () { console.log("done"); });


/*---  2. meegeven van opties bij aanmaken van streams -----*/
let readableStream2 = fs.createReadStream(myFile, { encoding: 'utf8', start: 22 });
//readableStream2.setEncoding('utf8'); 
readableStream2.on('data', function (data) {
    // data is een utf8-encoded string;  
    console.log('\n Ontvangen utf8 data: ', data);
});


//verhinderen dat de console direct sluit.
setTimeout(function () {
    process.exit();
}, 25000);