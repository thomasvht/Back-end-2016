/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T16:36:17+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T16:42:58+02:00
*/
const http = require("http"),
      fs = require("fs"),
      path = require("path");

let port = 4000,
    fileName = path.normalize("./resources/Kiekenfuif 2015.mp4");

let server = http.createServer();

server.on("request", function(req, res){
  res.writeHead(200, {
    "Content-Type": "text/html, video/mp4"
  });
  var readStream = fs.createReadStream(fileName, { bufferSize: 256 * 1024});

  readStream.pipe(res);
  //pipe doet autmatisch een end!
});

server.listen(port);
console.log("listen to port: " + port);
