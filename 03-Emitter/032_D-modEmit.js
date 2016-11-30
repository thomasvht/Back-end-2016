
/*
 * 
 * Module object User wordt uitgebreid met een emitter instantie
 * 
 * 
 */

var EventEmitter = require("events").EventEmitter;

var user = (function (EventEmitter) {
    //overname van de gewenste functies (meer code dus...)
    var emitter = new EventEmitter();

    //properties
    var addUser = function (username, password) {
        emitter.emit("userAdded", username, password);
    };

    var _address = _address ? _address : "Kortrijk";

    return {
        //public beschikbaar
        EventEmitter: EventEmitter,
        emitter:emitter,
        addUser: addUser,
        address: _address
    };

})(EventEmitter);

/*-------------------------------------------------*/

//3. subscribe to the event (eerst intekenen in async omgeving)

//user (singleton) op te halen via require("fileName") indien nodig

user.emitter.on("userAdded", function (userName, pwd) {
    console.log("User " + userName + " werd toegevoegd.");
});

//4. Methode oproepen (emit event als laatste)
user.addUser("Johan", "myPWD");
//user.address = "Gent";
console.log("Adres:", user.address);

setTimeout(function () { process.exit(); }, 15000);