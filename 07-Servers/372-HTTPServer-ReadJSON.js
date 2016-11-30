//DEMO: uitlezen van de applicatie titel ( uit package.json);
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    fs.readFile("package.json", "utf-8", function (err, data) {

        if (err) {
            console.error(err);
        }
        else {
            //end() will write the specified string to the response = to the browser
            //trim() will remove any leading or trailing white spaces
            //parsing returnt het objectvolgens JSON notatie: {}
            res.end(data.trim() + "\n De naam vd toepassing is " + JSON.parse(data).name );
        }
    }
    );

}).listen(port);

console.log(" Server listening on port:", port);