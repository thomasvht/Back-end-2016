/*
 *  Een transform stream voor omzetten naar hoofdletters 
 */
const path = require("path");
const fs = require('fs');

let _fileName = path.normalize(__dirname + "/../00.Data/Home.html");
let _transformedFile = path.normalize(__dirname + "/../00.Data/MyTransformedTextFile.txt"); 


//1. transformatie object aanmaken
let Transform = require('stream').Transform;
let uppercaseAndColor = new Transform({decodeStrings: false});
 

//2. _transform methode definiëren:
uppercaseAndColor._transform = function(chunk, encoding, done) {
  done(null,
      function() {
         return(chunk.toUpperCase().fontcolor('red'));                
          }()     
        );
};

//3. testen
var source = fs.createReadStream(_fileName, {encoding: 'utf8'});
var target = fs.createWriteStream(_transformedFile);
 
//uitvoeren vh transformatie commando
source.pipe(uppercaseAndColor).pipe(target);

//weergave van transformedTestFile.txt kan via HttpServer
require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/HTML' });  // of text/plain indien geen HTML gewenst    
    var rs = fs.createReadStream(_transformedFile);
    rs.pipe(res, { end: true }); 
}).listen("1337");

setTimeout(function () { process.exit(); }, 15000);