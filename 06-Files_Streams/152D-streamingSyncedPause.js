/*
 * DEMO: streaming met gesynchroniseerde read/write en rs.pause
 */
const path = require("path");
const fs = require('fs');
let myFile = path.normalize(__dirname + "/../00.Data/Home.html");

require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  // of text/plain indien geen HTML gewenst
    
    let rs = fs.createReadStream(myFile);
    rs.on('data', function (data) {
        if (!res.write(data)) {
            rs.pause();  //pauseren indien buffer vol    
        }
    });
    res.on('drain', function () {
        rs.resume();   //verder lezen bij lege buffer
    });
    rs.on('end', function () {
        res.end('\n Hier eindigt deze test pagina.');
    });

    rs.on('error', function (err) {
        //server blijft runnen bij een error
        res.end('\n' + err);
    });
   
 //rs.pipe(res, { end:true });  // zelfde als volledige code hierboven

}).listen("1337");

setInterval(function () { console.log("server running op 1337"); } , 2000) ;