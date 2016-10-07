/**
* @Author: thomasvanhoutte
* @Date:   2016-10-07T15:09:14+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T15:38:23+02:00
*/

"use strict";


var Loader = (function () {
    //private vars
    var startTime = startTime? startTime: new Date().getTime();

    //private methods
    var duration = function () { return (new Date().getTime() - startTime); };

    var loadAsync = function (element , cb) {
        if (element === "ERROR") {
            cb("ERROR", null);
        } else {
            setTimeout(function () { cb(null, element + " is loaded"); }, 1000);
        }
    };
    var loadArrayAsync = function (arrayA , elements, cb) {
        startTime = new Date().getTime(); //reïnitialize
        var counter = 0;
        for (var element in elements) {
            //element is een index bij for lus
            var sElement = elements[element];
            loadAsync(sElement, function (err, element) {
                counter++;
                if (err) {
                    arrayA[counter] = element;
                    cb(err, null);
                } else {
                    arrayA[counter] = element; //undefined
                    console.log(arrayA[counter]);
                    if (counter === elements.length) {
                        cb(null, arrayA , duration());
                    }
                }
            });
        }
    };
    return {
        //public methods
        loadArrayAsync: loadArrayAsync,
    };
})();

module.exports = Loader; 
