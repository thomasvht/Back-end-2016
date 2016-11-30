/*
 * DEMO: streaming mete pipe() voor het maken van een backup
 */
const path = require("path");
const fs = require('fs');

let myFile = path.normalize(__dirname + "/../00.Data/MyTextFile.txt");
let myCopy = path.normalize(__dirname + "/../00.Data/MyTextFile.bak"); //vb .bak file maken

var sourceStream = fs.createReadStream(myFile);
var targetStream = fs.createWriteStream(myCopy);
//target wordt aangemaakt indien onbestaand
//target wordt overschreven indien bestaand
sourceStream.pipe(targetStream);