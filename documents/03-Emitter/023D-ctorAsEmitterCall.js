/*
 * 
 * Constructor object UserEmitter wordt zelf een EventEmitter
 * (Alternatief: emitter als eigenschap van UserEmitter )
 * 
 */

var EventEmitter = require("events").EventEmitter;
//1. constructor object dat erft van EventEmitter
function UserEmitter() {
    //eigenschappen
    var self = this;
    //constructor van EventEmitter wordt opgeroepen en toegevoegd aan UserEmitter
    //call(thisArg[,arg1 [, arg2 ], … ]]]) 
    EventEmitter.call(this);
    
    //methodes (pas vanaf hier kan "emit")
    this.addUser = function (username, password) {
        this.emit("userAdded", username, password);
       // setTimeout(function () { this.emit("userAdded", username, password) }, 500); //this is het window object
        setTimeout(()=> { this.emit("userAdded", username, password) }, 500 ); //this is UserEmitter
    };

    this.addUser2 = (username, password) => {
        this.emit("userAdded", username, password); //this is het UserEmitter object 
    }
}

//2. prototype erving: UserEmitter erft van EventEmitter == overname van het prototype
//OPGEPAST:
// ={ } maakt een volledig nieuw prototype aan.Daarom eerst
// methodes declareren en NADIEN aanvullen met Object.create() !
//Alternatief: eerste Object.create() en dan 
// UserEmitter.prototype.self = this;
// UserEmitter.prototype.say = function (iets) { console.log(iets); };

UserEmitter.prototype = {
    self : this,
    say: function (iets) { console.log(iets); },

    _address: "",
    get address() { return this._address ? this._address : "Kortrijk"; },
    set address(v) { this._address = v }
}

UserEmitter.prototype = Object.create(EventEmitter.prototype)

////prototype aanvullen:
//UserEmitter.prototype.getAddress = function () { return this._address?this._address:"Kortrijk";};
//UserEmitter.prototype.setAddress = function (v) { this._address = v; };

/*-------------------------------------------------*/
var user = new UserEmitter();


//3. subscribe to the event (eerst intekenen in async omgeving)
user.on("userAdded", function (userName, pwd) {    
    console.log("User " + userName + " werd toegevoegd.");
});

//4. Methode oproepen (emit event als laatste)
user.addUser("Johan", "myPWD");
user.address ="Gent";
//user.setAddress("Gent");
console.log("Adres: ", user.address);

setTimeout(function () { process.exit(); } , 15000);