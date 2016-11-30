//app.js 

//process.on('uncaughtException', function (err) {
//    //wegschrijven naar error.log
//    console.log(err);
//});

let staticServer = require("./scripts/StaticServer.js");
staticServer.init(5000);