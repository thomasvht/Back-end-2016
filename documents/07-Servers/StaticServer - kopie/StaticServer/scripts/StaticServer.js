//StaticServer.js
let staticServer = function () {
    const http = require('http'), path = require('path'),
        fs = require("fs"), url = require("url");

    let httpListen = function (httpPort) {
        let server = http.createServer(function (req, res) {
            //filename ophalen en fs.readFile() oproepen
            if (req.url === "/" || req.url === "") { req.url = "index.html"; }
            let filename = path.basename(req.url),
                ext = path.extname(filename),
                localPath = path.normalize(process.cwd() + "/public/" + req.url);

            if (extensions[ext]) {
                fs.stat(localPath, function (err, stats) {
                    //if err
                    if (stats.isFile()) {
                        console.log("rendering page", localPath);
                        fs.readFile(localPath, function (err, content) {
                            if (err) {
                                res.writeHead(500);
                                res.write('500 server error:\n' + err.message)
                                res.end();
                            } else {
                                res.writeHead(200, { 'Content-Type': extensions[ext] });
                                res.end(content);
                            }
                        })
                    } else {
                        //error control : file onbestaand
                    }
                })
            }
        });
        server.listen(httpPort);
    },
        extensions = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "application/javascript",
            ".png": "image/png",
            ".gif": "image/gif",
            ".jpg": "image/jpeg"
        },

        //publieke methodes (return)
        init = function (httpPort) {
            console.log("server running on port :", httpPort);
            httpListen(httpPort);
        };

    return {
        init: init
    };
} ();

module.exports = staticServer;
