/* 
 * Demo: pathbeheer en filesystem voor het lezen van een file 
 * 
 */

/* PATH BEHEER --------------------------------------------------------*/

var path = require('path'); 

////normaliseren= correcte slashes volgens OS
//path.normalize('/node_modules//formidable/'); 

////samenvoegen van pathnames
//path.join('/node_modules','formidable','lib/file.js');

////naam ophalen van de directory/map van de file
//path.dirname('/node_modules/formidable/example/readme.txt'); 

////naam ophalen van de file, eventueel met suffix filter
//path.basename('/node_modules/formidable/example/readme.txt');
//path.basename('/node_modules/formidable/example/readme.html' , '.html');  

const fs = require('fs');
let myFile = path.normalize(__dirname + "/../00.Data/MyTextFile.txt");

/* FILE MANIPULATIE ------------------------------------------------*/
//opvragen van file eigenschappen 
fs.stat(myFile, function (err, stats) {
    if (err) { throw new Error(err); }
    console.log(stats);
});

fs.open(myFile, 'r', function opened(err, fd) {
    //error
    if (err) { throw new Error(err); }
    //buffer  
    var readBuffer = new Buffer(1024),      
        bufferOffset = 0,      
        bufferLength = readBuffer.length,      
        filePosition = 100;
    fs.read(fd,          
          readBuffer,          
          bufferOffset,          
          bufferLength,          
          filePosition,          
          function read(err, readBytes) {
        if (err) { throw err; }
        console.log('just read ' + readBytes + ' bytes');
        if (readBytes > 0) {
            console.log("\nBinair: ", readBuffer.slice(0, readBytes));
            console.log("\nUTF: ", readBuffer.slice(0, readBytes).toString());
        }
    });
});


setTimeout(function () {
    process.exit();
}, 15000);