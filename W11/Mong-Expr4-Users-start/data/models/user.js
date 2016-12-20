/*
 * models/user.js:
 * MODELS op te roepen in routes via var User = require('../data/models/user')
 * 
 */
var mongoose = require("mongoose");
var UserSchema = require("../schemas/user");

var User = mongoose.model('User', UserSchema, "users");  //model-schema-collection
//default collection = model + "s"

//Hier de dataaccessors met callbacks => eventueel via een repository file ophalen
User.getUsers = function (callback) {
    User.find({}).sort('lastName').exec(function (err, docs) {
        if (err) { console.log(err); }
        callback(docs);
    });
};

module.exports = User; //niet vergeten!!!