/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T13:58:19+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T15:23:30+02:00
*/



﻿const net = require("net");

let client = net.connect(1337, "localhost", function () {
    console.log("client maakt verbinding met poort 1337");
    client.write("hier een boodschap van de TCP client");
});

client.pipe(process.stdout, { end: false });

process.stdin.on("data", function(data){
  if(data.toString() == "quit"){
    client.end();
  }
  else{
    client.write(data);
  }
});

client.on("close", function () {
  console.log("client afgesloten");
});

client.on("error", function(error){
  console.log(error.message);
});
