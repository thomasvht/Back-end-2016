/*
 * Processes serieel of parallel afwerken vanuit een array met taken of data
 * Serieel = met shift() ophalen en recursief uitvoeren = duurt langer
 * 
 */

"use strict";

//simulatie van willekeurige async task---------------------------------
const asyncTask = (input, callback) => {
    //na een variërende timeout wordt het resultaat aan de callback bezorgd
    let timeout = Math.round(Math.abs(Math.random() * 1000));
    console.log('doe iets met \'' + input + '\' en kom terug (timeout) na ' + timeout + ' msec.');
    setTimeout(function () { callback(input * 10); }, timeout);
};

//finale taak: toon delay van alle taken:
const final = (result, delay) => { console.log('Finaal: ', result, " na " + delay + " msec."); };

//Test data:
let inputs = [1, 2, 3, 4, 5];

//parallel (async) -----------------------------------
const parallelResult =  () => {
    let target = [];
    let start = new Date().getTime();
    inputs.forEach(function (item) {        
        asyncTask(item, function (result) {
            target.push(result);
            if (target.length == inputs.length) {
                //returnt verwijderde waarde            
                final("parallel resultaat: " + target, new Date().getTime() - start);
                //callback verlaten en serieel opnieuw uitvoeren
                return series(inputs.shift());
            }
        });
    });
};


//serieel (async) -----------------------------------------
const series = (item, startTime, arrTarget) => {
    //zolang shift kan 
    let target2 = arrTarget ? arrTarget : [];
    let start2 = startTime ? startTime : new Date().getTime();
    if (item) {
        asyncTask(item, function (result) {
            //resultaat bijhouden
            target2.push(result);
            // eerste item verwijderen  
            return series(inputs.shift(), start2, target2);
        });
    } else {
        return final("serieel resultaat: " + target2, new Date().getTime() - start2);
    }
};

/*----  run ----*/
parallelResult();
//series(inputs.shift());

setTimeout(function () { process.exit();}, 45000);