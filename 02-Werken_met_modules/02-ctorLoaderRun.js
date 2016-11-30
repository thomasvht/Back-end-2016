/*
*  Loader uitgewerkt met constructor pattern
*  De console boodschappen in het object prototype worden vervangen door Emittors
*  reden: in de oproepende module kan een willekeurige console boodschap aangemaakt worden
*/

const Loader = require('./02-ctorLoader.js');


let users = [];
let usersIds = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];

let loader = new Loader();

//run ( gn declaratie)
//loader.loadArrayAsync(users, usersIds, function (err, arr, duration) {
//    if (err) {
//        console.log(err);
//    } else { 
//        console.log("ctor doorlooptijd bedraagt :", duration);   
//    }
//})


loader.loadArrayAsync (users, usersIds, (err, arr, duration) => {
    if (err) {
        console.log(err);
    } else {
        console.log("ctor doorlooptijd bedraagt :", duration);
    }
});



setTimeout(function () { process.exit() }, 15000 );