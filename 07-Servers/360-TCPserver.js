/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T13:58:19+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T15:35:51+02:00
*/
﻿const net = require('net');
let sockets = [];

//1. aanmaken van de TCP server
let server = net.createServer(
    {
        allowHalfOpen: false
    },
    //3. connectionListener
    //callback bij elke connectie
    function (socket) {
        console.log("server heeft nieuwe connectie");
        sockets.push(socket);
        socket.setEncoding('utf8');
        socket.write("\nWelkom" + socket.remoteAddress + " .\n");
        socket.on("data", function (data) {
            //ontvangen browser data (headers) naar console
            if (data) {
                console.log("\nontvangen data : " + data);
                if(data.trim() === "quit"){
                  socket.destroy();
                }
            }
            //return socket.end();
            //socket.end();

            sockets.forEach(function (currentSocket){
                currentSocket.write(data);
            });
        });

        socket.on("close", function(){
          console.log("Deze socket wordt afgesloten.");
          var index = sockets.indexOf(socket);
          sockets.splice(index, 1);
        });

        socket.on("end", function (data) {
            console.log("Goodbye. Client connectie is beëindigd.");
        });
        //socket.end();
    });

//2. 'listening' listener -  TCP server luistert naar random poort (0)
server.listen(1337, function () {
    console.log("luisteren naar poort" + server.address().port);
    setTimeout(function () { server.close(function () { console.log(" server is closed");}); }, 200000);
});

//4. error handling
server.on("error", function (error) {
    if (error.code === "EADDRINUSE") {
        console.log("Deze poort is reeds in gebruik");
    } else {
        console.log("Fout: \n" + error.message);
    }
});

//online blijven
//setTimeout(function () {
//    process.exit();
//}, 30000);
