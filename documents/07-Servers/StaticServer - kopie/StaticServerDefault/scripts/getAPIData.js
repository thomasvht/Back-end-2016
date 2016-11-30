/*
*  getAPIData
*
*/

let getAPIData = (function () {
    let http = require("http");

    let optionsAPI = {
        method: "GET",
        port: 80,
        hostname: 'api.flickr.com',
    }
    let clean = function (json) {
        json= json.substring(1, json.length - 1);
        json=json.replace(/\\\'/g, '');
        return json;
    }

    let callAPI = function (search, options, cb) {
        if (search !== "") {
            optionsAPI.path = '/services/feeds/photos_public.gne?format=json&tags=' + search + '&jsoncallback=?';
        }

        http.request(optionsAPI, function (response) {
            var json = "";
            response.on("data", function (chunck) {
                json += chunck;
            })

            response.on("end", function () {
                var jsonObj = JSON.parse(clean(json));
                cb(null, jsonObj);
            })

            response.on("error", function (err) {
                cb(err, null);
            })

        }).end();

    }

    return {
        callAPI: callAPI 

    }


})();

module.exports = getAPIData;