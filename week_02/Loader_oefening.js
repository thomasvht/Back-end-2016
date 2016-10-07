/**
* @Author: thomasvanhoutte
* @Date:   2016-10-07T15:05:10+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T15:16:36+02:00
*/

var Loader = require("./Loader.js");

var users = [];
var userIDs = ["P1", "P2", "P3", "ERROR", "P5", "P6", "P7", "P8", "P9"];

Loader.loadArrayAsync(users , usersIds, function (err, arr, duration) {
  if(err){
    console.log(err);
  }
  else {
    console.log("Doorlooptijd van de Loader module:", duration, " ms");
  }
});
