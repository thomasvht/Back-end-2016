/*
 * DEMO:
 * Zowel een readable stream als writable stream zijn event emitters.
 * 
 */


var stream = require("stream");
var sr = new stream.Stream(); 
var sw = new stream.Stream();


//eventListeners 
sr.on('end' , function (data) { console.log(data); });
sw.on("drain", function (data) { console.log(data); });

//readable stream
var testData = "Dit is data van een readable stream. ";
//sr.readable = true; //implementeert API
sr.emit("data", testData);
sr.emit("end", testData += "Einde van readable data.");

//writable stream 
//sw.writable = true;
sw.data = 1 ;

//sw.write = function (data) { sw.data += data }; //alternatief
sw.write = function (data) { return (++sw.data); };
sw.emit("drain", sw.write());


setTimeout(function () { process.exit(); } , 15000);