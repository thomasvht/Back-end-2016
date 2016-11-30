/* StaticServer.js - versie 0 */


const http = require('http'),
    fs = require('fs'),
    path = require('path');

let extensions = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".jpg": "image/jpeg"
};

let port = process.env.port || 1337;

let server = http.createServer(function (req, res) {
    //moet naar router.js
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
}) 

server.listen(port);
console.log("HTTP server listening to port: " + port)