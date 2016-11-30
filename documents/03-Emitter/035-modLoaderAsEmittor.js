/*
 * documentatie volgens http://usejsdoc.org/
 * Oefening (6.3.5)
*  Het module patroon gebruikt een instantie van EventEmitter
 * Door toevoegen van on methode werkt het als een evented object
 * @author Johan V
 * @version 1.0.0
 *  * 
 */
"use strict";

var EventEmitter = require("events").EventEmitter;

module.exports =   ( () => {
    //private vars 
    let startTime;
    startTime = startTime ? startTime : new Date().getTime();
    let emitter = new EventEmitter(); 

    //private methods
    let duration = () =>  (new Date().getTime() - startTime); 

    let loadAsync =  (element, cb) => {
        if (element === "ERROR") {
            cb("ERROR", null);
        } else {
            setTimeout(function () { cb(null, element + " is loaded"); }, 1000);
        }
    };

    let on;

    let loadArrayAsync =  (arrayA, elements, cb) => {
        startTime = new Date().getTime(); //reïnitialize 
        var counter = 0;

        on = function (evt, cb) {
            emitter.on(evt, cb);
        }

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
                    // console.log(arrayA[counter]);

                    emitter.emit("addedUser", element);
                    if (counter === elements.length) {
                        cb(null, arrayA, duration());
                    }
                }
            });
        }
    };
    return {
        //public methods
        loadArrayAsync: loadArrayAsync,
        emitter: emitter,
        on: on
    };
})();