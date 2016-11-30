/**
* @Author: thomasvanhoutte
* @Date:   2016-11-25T15:02:05+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-11-25T16:58:49+01:00
*/

var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Welkom bij express");
  //res.sendFile(path.join(__dirname, "../public/index.html"));
  //res.render('index', { title: 'Express' });
  res.redirect('/users');
});

module.exports = router;
