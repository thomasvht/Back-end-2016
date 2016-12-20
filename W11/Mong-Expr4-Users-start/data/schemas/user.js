/*
 * schemas/user.js
 * 
 */

var mongoose = require('mongoose');
var emailRegExp = /.+\@.+\..+/;

var checkLength = function (val) {
    if (val && val.length < 10) {
        return true;
    } else {
        return false;
    }
};

var UserSchema = new mongoose.Schema({
    firstName: { type: String, index: true },
    lastName: { type: String, unique: true },
    profession: String,     
    email: {
        type: String,
        required: true,
        //match: emailRegExp,
        validate: {
            validator: checkLength,
            message: "Niet meer dan 10 karakters"
        }
    },
    gender: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        enum: ['M', 'F']
    },
    createdOn: { type: Date, 'default': Date.now },
    lastLogin: Date
});

module.exports = UserSchema;