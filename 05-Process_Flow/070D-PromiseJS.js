/* zelf promises aanmaken met native javascript*/
//maar Promise is not defined ...(zonder library zoals rsvp.js of een subset/polyfill ervan)
//npm install es6-promise
var Promise = require('es6-promise').Promise;


//1. aanmaken van een promise
var cbFinished;

var promise = new Promise(function (resolve, reject) {
    // Voer een taak uit.(best asynchroon)
    setTimeout(function () {
        cbFinished = true;
        console.log("Hello world is ", cbFinished.toString());
        
    }
        , 1000       
    );

    //let cbFinished = true; //slechts één status
    if (cbFinished) {
        resolve("Deze promise oproep worked!\n");/* async taak correct beëindigd */
    }
    else {
        reject(new Error("Deze promise oproep faalt!\n"));
    }
});

//2. promise consumeren
promise.then(function (result) {
    console.log(result); // "Deze promise oproep worked!\n"
}, function (err) {
    console.log(err); // "Deze promise oproep faalt!\n"
});


//verhinderen dat de console direct sluit.
setTimeout(function () {
    process.exit();
}, 10000); 