/*
 * Synchroon werken  = blokkerend bij I/O. 
 * Asynchroon werken = event loop onderhoudt queue van events 
 * 
 * @version v1.0.0
 * @author me 
 * 
 */
"use strict";

//SYNCHRONUOUS LOADING -------------------------------

var users = [];
var usersIds = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];
var delay = 1000;

const loadSync = (element) => {
    sleep(delay);
    return "element " + element + " loaded";
};

//monitoren van synchrone doorlooptijd
const loadArraySynchroon = (array, elements) => {
    let start = new Date().getTime();
    //for lus  -> index
    for (let element in elements) {
        array[element] = loadSync(elements[element]);
        console.log(array[element]);  // informatie wanneer ingeladen 
    }
    return (new Date().getTime() - start) + "\n";
};
console.log("synchronous load time ", loadArraySynchroon(users , usersIds));

// ASYNCHRONUOUS loading --------------------------------
var users = [];//reïnitialize
var start;  //reïnitialize

const loadAsync = (element , cb) => {
    if (element === "ERROR") {
        cb("ERROR", null); //onmiddellijke weergave (synchroon)
    } else {
        setTimeout( () => cb(null, element + " is loaded"), 1000);
    }   
};

const loadArrayAsync =  (arrayA , elements, cb) => {
    
     
};

//asynchrone uitvoer 


//HELPERS---------------------------- 
//hier niet gedeclareerd via blockscope , noch var (sequentieel)
//wel: function scope
function sleep(time) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < time) {
        //just wait
    }
};


setTimeout(function () { process.exit(); }, 25000);