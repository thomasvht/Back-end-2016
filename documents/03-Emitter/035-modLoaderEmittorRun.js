/*
 * Oproepen en runnen  van module Loader.js
 * ES6 (oef.6.3.5)
 * 
 */ 

"use strict";

//vergeet het puntje NIET bij relatieve adressering!!!
var Loader = require ("./035-modLoaderAsEmittor.js");
require("./023-extension.js");  //zorgt voor de encryptie

var users = [];
var usersIds = ["P1".encrypt(), "P2".encrypt(), "P3".encrypt(), "P4".encrypt(), "ERROR", "P6".encrypt(), "P7".encrypt(), "P8".encrypt(), "P9"];


Loader.emitter.on("addedUser",  (element) => {
    console.log("emitter result:", element);
})

Loader.loadArrayAsync(users, usersIds,  (err, arr, duration) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Doorlooptijd van de Loader module:" , duration);
    }   
});


setTimeout(() => process.exit() , 15000);