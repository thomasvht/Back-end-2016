/**
* @Author: thomasvanhoutte
* @Date:   2016-10-07T15:05:10+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T15:38:43+02:00
*/

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
