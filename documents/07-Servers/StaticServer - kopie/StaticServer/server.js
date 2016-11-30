/* lezen van csv en omzetten naar json */


const http = require('http'),
    fs = require('fs'),
    path = require('path');

let port = process.env.port || 1337,
    fileName = path.normalize("./resources/MyTextFile.txt");

http.createServer(function (req, res) {
    //1. de file lezen 
    fs.readFile(fileName, {encoding:"utf-8"}, function (err, data) {
        if (err) { throw err; }

        let obj = {}; //literal object

        let lines = data.split('\n');
        lines.forEach(function (line) {
            let parts = line.split('-');
            obj["Hoofdstuk " + parts[0]] = parts[1];
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(obj));
        res.end();
    }) 
}).listen(port);