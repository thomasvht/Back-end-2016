/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T14:01:08+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T14:20:57+02:00
*/



/* oef: 11.2 Streamen alfabet*/

const fs = require("fs");
const path = require("path");
const Readable = require("stream").Readable;

let rs = new Readable();
//1. alfabet opstellen
for (var i=97, l='z'.charCodeAt(0); i <= l; i++){
  rs.push(String.fromCharCode(i));
  //Niet vergeten!!! -> stream einde
  if(i >= 'z'.charCodeAt(0)){
    rs.push(null);
  }
}

rs.on("data", function(data){
  console.log(data.toString());
});

rs.on("error", function(error){
  console.log(error);
});

//wegschrijven
let writable = fs.createWriteStream(path.normalize("./demo/alfabet.txt"));

rs.pipe(writable).on("finish", function(){
  console.log("Het document 'alfabet.txt' is aangemaakt.");
});
