/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T16:01:39+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T16:35:28+02:00
*/

const http = require("http"),
      fs = require("fs"),
      path = require("path");

let port = process.env.port || 1337,
    fileName = path.normalize("./resources/textfile.txt");
let obj = {};

http.createServer(function(req,res){
  //de file lezen voor je de header inlaadt
  fs.readFile(fileName, { encoding:'utf-8'}, function(error, data){
    if(error){
      throw error;
    }


    let lines = data.split("\n");
    lines.forEach(function(line){
      let parts = line.split("-");
      obj = "Hoofdstuk " + parts[0] + " = " + parts[1];
    });
    //header inladen
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write("<h1> Welkom </h1>");
    res.write("Dit is een voorbeeld pagina voor onze http-server.\n");
    res.write(JSON.stringify(obj));
    res.end();

  });
  }).listen(port);
