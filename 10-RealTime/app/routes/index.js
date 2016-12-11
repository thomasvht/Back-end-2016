/**
* @Author: thomasvanhoutte
* @Date:   2016-12-09T16:23:16+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-09T16:58:49+01:00
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('realtime/loadImg', { title: 'Realtime images' });
  //res.redirect();
});

module.exports = router;
