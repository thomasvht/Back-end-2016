/**
* @Author: thomasvanhoutte
* @Date:   2016-09-30T15:34:35+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-09-30T17:33:31+02:00
* menu.js .... test voor argv
*/
"use strict";

const showHelp =function(){
  var menu = "";
  menu += "Thomas' Menu:";
  menu += "\nHow to use\n";

  menu += "--help \t\t\t show mijn help\n";
  menu += "--name {NAME} \t\t say welcome to {NAME}";
  console.log(menu);
};

if(process.argv[2] === "--help"){
  showHelp();
}
if(process.argv[2] === "--name"){
  console.log("Welkom ", process.argv[3]);
}

console.log("Hello world");
setTimeout(function () { console.log("Hello world 2"); }, 0);
