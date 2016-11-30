/* Read video mp4 */


const http = require('http'),
    fs = require('fs'),
    path = require('path');

let port = 4000,
    fileName = path.normalize("./resources/big_buck_bunny.mp4");

let server = http.createServer();

server.on("request", function (req, res) {
    res.writeHead(200, {
   'Content-Type': 'text/html, video/mp4' })

    var readStream = fs.createReadStream(fileName, {
        encoding: null,
        mode: 0666 ,
        bufferSize: 256 * 1024
    });
    //readStream.on("data", function () { })
    readStream.pipe(res);

    //pipe doet automatisch een end!!
})


server.listen(port);
console.log("listen to port", port);