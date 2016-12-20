/*
 * Repository voor user.js
 * 
 * 
 */
var mongoose = require("mongoose");

UsersRepo = (function () {
    var User = require("./user.js");
    
    var getAllUsers = function (callback) {
        User.find({}).sort('name').exec(function (err, docs) {
            if (err) { console.log(err); }
            callback(docs);
        });
    };
    return {
        User : User ,
        getAllUsers: getAllUsers
    };
})();

module.exports = UsersRepo;