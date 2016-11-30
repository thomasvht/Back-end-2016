/*
 * Oproepen en runnen  van module Loader.js
 * 
 * 
 */ 

//vergeet het puntje NIET bij relatieve adressering!!!
var Loader = require("./modLoader.js");

var users = [];
var usersIds = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];


Loader.loadArrayAsync(users, usersIds, function (err, arr, duration) {
    if (err) {
        console.log(err);
    } else {
        console.log("Doorlooptijd van de Loader module:" , duration);
    }   
});


setTimeout(function () { process.exit(); } , 15000);