//StaticServer.js
let staticServer = function () {
    const http = require('http'), path = require('path'),
        fs = require("fs"), url = require("url"), getAPIData = require("./getAPIData");

    let requestCounter = require("./requestCounter.js");

    let httpListen = function (router, handlers, httpPort) {
        let server = http.createServer(function (req, res) {
            //routing ophalen ( handlers als extra argument toevoegen bij router) 
            var uri = url.parse(req.url).pathname;
            console.log("routing ophalen voor uri : " + uri);

            router.init(handlers, req, function (err, data, mimeType) {
                if (err) {
                    res.writeHead(500);
                    res.end("500: Server Error: \n" + err.message);
                } else {
                    res.writeHead(200, {
                        "Content-Type": mimeType,
                        "Cache-Control": "no-cache, no-store, must-validate",
                        "Pragma": "no-cache",
                        "Expires": 0
                    });
                    res.end(data);
                }
            });
        });
        server.listen(httpPort);
    };

    //publieke methodes (return)
    let init = function (router, handlers, httpPort) {
        console.log("server running on port :", httpPort);
        httpListen(router, handlers, httpPort);
    };

    return {
        init: init
    };
} ();

module.exports = staticServer;
