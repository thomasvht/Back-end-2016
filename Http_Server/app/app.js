/**
* @Author: thomasvanhoutte
* @Date:   2016-10-28T17:28:44+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-28T17:36:01+02:00
*/
let staticServer = require("./scripts/staticServer.js");
staticServer.init(5000);

process.on("uncaughtException", function(error){
  console.log(error.message);
  // wegschrijven naar error.log file
});
