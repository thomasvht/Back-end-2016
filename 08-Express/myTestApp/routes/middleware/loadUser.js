/**
* @Author: thomasvanhoutte
* @Date:   2016-12-02T14:04:34+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-02T14:07:26+01:00
*/
var users = require("../../data/users.json");

function loadUser(req, res, next) {
 var user = req.user = users[req.params.name.toLowerCase()];
 if (!user) {
 res.send('Niet gevonden of onbestaande gebruiker', 404);
 next();
 } else {
 next();
 }
}

module.exports = loadUser;
