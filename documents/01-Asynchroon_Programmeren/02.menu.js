/*
* menu.js  ..... test voor argv
*/

"use strict";


const showHelp = function () {
    var menu = "\n";
    menu += "\nJohans Menu:";
    menu += "\nHow to use";

    menu += "\n--help \t\t show mijn help";
    menu += "\n--name {NAME} \t\t say welcome to {NAME}";
    console.log(menu);
};

if (process.argv[2] === "--help") {
    showHelp();
}

if (process.argv[2] === "--name") {
    console.log("Welkom", process.argv[3] );
}



setTimeout(function () { console.log("Hello World 2");     },0)
console.log("Hello World");