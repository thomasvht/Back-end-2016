/**
* @Author: thomasvanhoutte
* @Date:   2016-12-02T14:16:59+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-02T14:26:24+01:00
*/

var express = require('express');
var router = express.Router();
var users = require('../data/users.json');
var loadUser = require("./middleware/loadUser");



router.get("/usersAPI", function(req, res, next){

});

router.get('/', function(req, res, next){
  res.json(users);
});

module.exports = router;
