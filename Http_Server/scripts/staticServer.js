/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T16:50:20+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T17:19:57+02:00
*/

const http = require("http"),
      fs = require("fs"),
      path = require("path");

let extensions = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".gif": "image/gif",
  ".jpg": "image/jpeg"
};

let port = process.env.port || 1337;

let server = http.createServer(function(req, res){
  // moet naar router.js
  if(req.url === "/" || req.url === "" ){
    req.url = "index.html";
  }
  let fileName = path.basename(req.url),
  ext = path.extname(fileName),
  localPath = path.normalize(process.cwd() + "/public/" + req.url);

  if(extensions[ext]){
    fs.stat(localPath, function(error, stats){
      if(stats.isFile()){
        //
        console.log("rendering page : ", localPath);
        fs.readFile(localPath, function(error, content){
          if(error){
            res.writeHead(500);
            res.write("500 internal server error:\n" + error.message + "\n");
            req.end();
          }
          else{
            res.writeHead(200, {
              "Content-Type": extensions[ext]
            });
            res.end(content);
          }
        });
      }
      else{
        // error control: file onbestaand

      }
    });
  }
});

server.listen(port);
console.log("Server port : " + port);
