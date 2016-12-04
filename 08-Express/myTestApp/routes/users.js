/**
* @Author: thomasvanhoutte
* @Date:   2016-11-25T15:02:05+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-02T14:10:05+01:00
*/

var express = require('express');
var router = express.Router();
var users = require('../data/users.json');
var loadUser = require("./middleware/loadUser");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(users);
  res.render('users/index', { title: "Users overview", users: users });
});

//NEW
router.get('/new', function(req, res, next){
  res.render('users/new', { title: "Create user" });
});

router.post('/new', function(req, res){
  if (users[req.body.username]) {
    res.send('Conflict', 409);
  } else {
    users[req.body.username] = req.body;
    res.redirect('/users');
  }
});

// DETAIL
router.get('/:username', loadUser, function(req, res, next){
  var user = users[req.params.username];
  if (user){
    res.render('users/details', { title: "Details " + user.username, users: user });
  }
  else{
    next();
  }
});

//EDIT
router.get('/edit/:username', function(req, res, next){
  var user = users[req.params.username];
  if(user){
    res.render('users/edit', { title: "Update user", user: user });
    console.log(users);
  }
  else{
    next(new Error("Gebruiker niet gevonden."));
  }
});

router.post('/:username', function(req, res, next){
  var user = users[req.params.username];
  console.log(user);
  if (user) {
    console.log(user);
    user.profession = req.body.profession;
    user.name = req.body.name;
    res.redirect('/users');
  } else {
    next(new Error("Gebruiker is niet aangepast."));
  }
});

//DELETE
router.delete('/:username', function(req, res, next){
  var user = users[req.params.username];
});

module.exports = router;
