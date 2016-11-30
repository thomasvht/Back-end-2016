/**
* @Author: thomasvanhoutte
* @Date:   2016-10-14T15:22:29+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-14T15:36:37+02:00
*/



/*
*  Run module Loader
*/

var Loader = require('./ModPatroon_Emitter.js');

let users = [];
let usersIds = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];

Loader.emitter.on("addedUser", function(element){
  console.log("emitter result : ", element);
});

Loader.loadArrayAsync (users, usersIds, (err, arr, duration) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Doorlooptijd van de Loader module :", duration);
    }
});

setTimeout();
