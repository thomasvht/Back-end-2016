/*
* getAPIData.js
*/
let http = require("http");

let getAPIData = (function () {
    var EventEmitter = require('events').EventEmitter;
    var emitter = new EventEmitter();

    //privaat
    let optionsAPI = {
        method: "GET",
        port: 80,
        hostname: 'api.flickr.com'
    };

    let clean = function (json) {
        json = json.substring(1, json.length - 1);
        json = json.replace(/\\\'/g, '');
        return json; //beter is een callback
    };

    let callAPI = function (search, options, cb) {
        if (search !== '') {
            optionsAPI.path = '/services/feeds/photos_public.gne?format=json&tags=' + search + '&jsoncallback=?';
        }
        http.request(optionsAPI, function (response) {
            //stream 
            var json = "";

            response.on("data", function (chunck) {
                json += chunck;
            });

            response.on("end", function () {
                var jsonObject = JSON.parse(clean(json));
                cb(null, jsonObject);
                emitter.emit('apiData', jsonObject.items);
            });

            //niet vergeten bij streams 
            response.on("error", function (err) {
                console.log(err);
                cb(err, null);
            });
        }).end();
    };

    let once = function (evt, cb) {
        emitter.once(evt, cb);
    };

    //public
    return {
        callAPI: callAPI,
        on: once
    };
})();

module.exports = getAPIData; //indien vergeten - is not a function