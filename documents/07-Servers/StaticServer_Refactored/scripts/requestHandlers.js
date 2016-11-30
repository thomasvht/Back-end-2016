/**
* @Author: thomasvanhoutte
* @Date:   2016-11-25T14:26:53+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-25T14:33:58+01:00
*/



﻿/* requestHandlers.js
* Aangebracht als middleware => functions worden geëxporteerd
* input:req , output:callback om de response.write aan te sturen
*/

const fs = require("fs"), path = require('path'), querystring = require('querystring');

//public
let apiData = function (req, callback) {
    const getAPIData = require("./getAPIData");
    const requestCounter = require("./requestCounter");
    var search;
    if (req.qs) {
        var qryParts = req.qs.split("="); //array
        search = (qryParts[1]);  //of tag  qs['tag']
    }
    //1. API met cb (of met emitter)
    getAPIData.callAPI(search, null, function (err, data) {
        if (err) {
            callback(err, null);
        }
        callback(null, data, null);
    });
    //2. emitter voor andere toepassingen (counter)
    getAPIData.on('apiData', function (jsonItems) {
        requestCounter.getCount(function (err, count) {
            console.log("de counter bevat nu :", count, " requests.");
        });
    });

};

let getFile = function (req, callback) {
    //2a. indien een leesbare file >> readFile
    //req bevat het localPath
    fs.readFile(req.localPath, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};

let upload = function(req, callback){

};

let show = function(req, callback){
  let qs = querystring.parse((req.url.split("?")[1]));
  let filename = qs.img;

  console.log("Request handler show voor " + filename);
  fs.readFile("./publicimages/uploads/" + filename, function(err, data){
    if(err){
      callback(err, null);
    }
    else{
      callback(null, data, ".png");
    }
  });
};

// exports request handlers-middleware functions
exports.apiData = apiData;
exports.getFile = getFile;
exports.upload = upload;
exports.show = show;
