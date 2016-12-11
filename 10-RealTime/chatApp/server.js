/**
* @Author: thomasvanhoutte
* @Date:   2016-12-09T14:01:23+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-09T15:04:32+01:00
NODE STATIC */

let static = require("node-static"),
    config = require("./config.js"),
    port = config.PORT;


let fileServer = new static.Server('./public', {
  cache: 0,
  gzip: true
});

let app = require("http").createServer(function(request, response){
  request.addListener('end', function () {
        //
        // Serve files!
        //
        fileServer.serve(request, response);
    }).resume();
});


app.listen(port);

//2. socket.io initialiseren
let io = require("socket.io").listen(app);
console.log("server and sockets listen to port " + port);

//3. socket handlers
require("./scripts/sockets.js")(io);
