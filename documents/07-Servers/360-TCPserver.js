const net = require('net');

//1. aanmaken van de TCP server
let server = net.createServer(
    {
        allowHalfOpen: false
    },
    //3. connectionListener
    //callback bij elke connectie
    function (socket) {
        console.log("server heeft nieuwe connectie");
        socket.setEncoding('utf8');
        socket.write("Dit is een 'server written' boodschap voor de client.");
        socket.on("data", function (data) {
            //ontvangen browser data (headers) naar console
            if (data) {
                console.log("ontvangen data: " + data);
            }
            return socket.end();
        });
        socket.on("end", function (data) {
            console.log("Goodbye. Client connectie is beëindigd.");
        });
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