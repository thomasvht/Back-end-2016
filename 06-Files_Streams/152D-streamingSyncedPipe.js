/*
 * DEMO: streaming met gesynchroniseerde read/write en rs.pipe()
 */
const path = require("path");
const fs = require('fs');
let myFile = path.normalize(__dirname + "/../00.Data/Home.html");
require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  // of text/plain indien geen HTML gewenst
    
    let rs = fs.createReadStream(myFile);
    rs.pipe(res, { end: true });  

}).listen("1337");

console.log("server running op 1337");