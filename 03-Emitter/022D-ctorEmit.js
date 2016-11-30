/**
* @Author: thomasvanhoutte
* @Date:   2016-10-14T13:53:16+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-14T14:02:10+02:00
*/



﻿/*
 *
 * Constructor object gebruikt een instantie van EventEmitter
 * De emitter instantie wordt public beschikbaar voor de consumer
 *
 */

"use strict";

var EventEmitter = require("events").EventEmitter;


//1. constructor object (User.__proto__) gebruikt emitter
function User() {
    //eigenschappen
    let self = this;
    this.emitter = new EventEmitter();//emitter instantie

    this.addUser = function (username, password) {
        //publish (=emit) het event.
        this.emitter.emit("userAdded", username, password);
    };
}

//2. prototype uitbreiden:
User.prototype = {
    self: this,
    say: function (iets) {
        this.emitter.emit("userAdded" , iets);
    },

    _adress: "",
    get Address() { return this._address ? this._address : "Kortrijk"; },
    set Address(v) { this._address = v; }
};


/*-- run ----------------------------------------------*/
let user = new User(); //user bevat __proto__ en prototype


//3. subscribe to the event (eerst intekenen in async omgeving)
user.emitter.on("userAdded", function (userName, pwd) {
    console.log("User " + userName + " werd toegevoegd.");
});

//4. Methode oproepen (emit als laatste)
user.addUser("Johan", "myPWD");
user.Address= "Gent";
console.log("Adres: ", user.Address);
user.say("adres ");

setTimeout(function () { process.exit(); }, 15000);
