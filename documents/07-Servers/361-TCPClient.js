const net = require("net");

let client = net.connect(8080, "localhost", function () {
    console.log("client maakt verbinding met poort 1337");
    client.write("hier een boodschap van de TCP client");
});


