

/* router.js
*  ontvangt de URL en roept bijhorende handler op
*/
"use strict";
const path = require('path'), fs = require("fs"), url = require("url");
const getAPIData = require("./getAPIData"), requestCounter = require("./requestCounter");


let router = (function () {
    let extensions = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".mp4": "video/mp4",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".ico": "image/x-icon"
    };
    let init = function (handlers, req, callback) {
        //1. filename, pathname  ophalen om ...
        if (req.url === "/" || req.url === "") { req.url = "index.html"; }
        let filename = path.basename(req.url),
            ext = path.extname(filename),
            localPath = path.normalize(process.cwd() + "/public/" + req.url),
            pathname = url.parse(req.url).pathname, //  /apiData,
            qs = url.parse(req.url).query;

        //2. filenameuit te lezen >> beslis wat ermee te doen 
        req.localPath = localPath;  //req aanvullen met het localPath (middleware)

        fs.stat(localPath, function (err, stats) {
            //if err
            if (stats && stats.isFile()) {
                console.log("rendering page", localPath);

                ////// refactored naar de handlers
                ////fs.readFile(localPath, function (err, content) {
                ////    if (err) {
                ////        res.writeHead(500);
                ////        res.write('500 server error:\n' + err.message);
                ////        res.end();
                ////    } else {
                ////        res.writeHead(200, { 'Content-Type': extensions[ext] });
                ////        res.end(content);
                ////    }
                ////});

                handlers['/getFile'](req, function (err, data) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, data, extensions[ext]);
                    }
                });

            } else if (typeof (handlers[pathname]) === "function") {
                //extra controle om te controleren of een handler bestaat

                ///// refactored naar de handlers
                //////switch (pathname) {
                //////    case "/apiData":
                //////        var search;
                //////        if (qs) {
                //////            search = qs.split("&")[0].split("=")[1];

                //////        }
                //////        getAPIData.callAPI(search, null, function (err, data) {
                //////            res.statusCode = 200;
                //////            res.end(JSON.stringify(data));
                //////        });

                //////        getAPIData.on("apiData", function () {
                //////            requestCounter.getCount(function (err, count) {
                //////                console.log("De counter bevat nu het getal", count);
                //////            });
                //////        });


                //////        break;
                //////    default:
                //error control : file onbestaand
                ////// }
                req.qs = qs;
                handlers[pathname](req, function (err, data, mimeT) {
                    if (err) {
                        callback(err, null);
                    }
                    if (typeof (data) === "object") {
                           callback(null, JSON.stringify(data), null);                      
                    } else {
                        callback(null, data, extensions[path.extname(data)] || extensions[".html"]);
                    }

                });
            } else {
                //geen handler
                console.log("No request handler found for " + pathname);
                callback("404 not found", null, ".html");
            }
        });

    };
    return {
        init: init
    };
})();
module.exports = router;