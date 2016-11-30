
/* DEMO: Promisifying XHR (HTML5Rpcks) */
var Promise = require('es6-promise').Promise;

const configApp = require("../../configApp.js"); //__dirname is local
const fs = require("fs"); //File System module 
let fileName = configApp.PROJECT_DIR + '/00.Data/MyTextFile.txt';

/* 1. Maak een promise voor fs door gebruik van "resolve" en "reject"*/
function read(url) {
    // Return(!) een promise.
    return new Promise(function (resolve, reject) {
        // Do the usual stuff
        fs.readFile(fileName, null, cbReadFile);
        
        function cbReadFile(error, data) {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(data.toString());
            }
        }
        
    });
}

/* 2. Consumeer  de promisified fs */
read(fileName).then(function (response) {
    console.log("SUCCES met promises !\n", response);
}, function (error) {
    console.error("De promise FAILED!\n", error);
});

//verhinderen dat de console direct sluit.
setTimeout(function () {
    process.exit();
}, 10000);