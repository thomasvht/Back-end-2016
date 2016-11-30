//app.js 

let errorControl = require("./scripts/errorControl");

process.on('uncaughtException', function (err) {
    //wegschrijven naar error.log
    errorControl.writeToErrorLog(err, function (info) {
        console.log('errorlog ontving fouten', info);
    });

    console.log(err);
});

//let staticServer = require("./scripts/StaticServer.js");
//staticServer.init(5000);

//1. Nodige middleware en scripts in app.js.
const requestHandlers = require("./scripts/requestHandlers.js");
const router = require("./scripts/router.js");
const staticServer = require("./scripts/staticServer.js");
//2. Alle handlers definiëren (leesbaar) in een literal object
let handlers = {};
handlers["/apiData"] = requestHandlers.apiData;
handlers["/getFile"] = requestHandlers.getFile;

//3. Initialisering van static server
staticServer.init(router, handlers, 8080);
