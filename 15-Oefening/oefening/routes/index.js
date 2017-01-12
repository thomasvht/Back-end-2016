/**
* @Author: thomasvanhoutte
* @Date:   2017-01-12T10:16:03+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-12T19:10:26+01:00
*/



var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/oefening');
var Schema = mongoose.Schema;
var studentDataSchema = new Schema({
  student: {type: String, required: true},
  straat: {type: String, required: true},
  gemeente: {type: String, required: true},
  provincie: {type: String, required: true},
  email: {type: String, required: true},
  geslacht: {type: String, required: true}
}, {collection: 'students'});

var StudentData = mongoose.model('StudentData', studentDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/studentenlijst', function(req, res){
  StudentData.find()
      .then(function(studentenlijst){
        res.render("student/studentenlijst", { studentenlijst: studentenlijst});
      });
});

router.get('/nieuwestudent', function(req, res){
  res.render('student/nieuwestudent', {title: 'Voeg student toe'});
});

router.post('/nieuwestudent', function(req, res){
  var student = {
    student: req.body.student,
    straat: req.body.straat,
    gemeente: req.body.gemeente,
    provincie: req.body.provincie,
    geslacht: req.body.geslacht,
    email: req.body.email};

    var data = new StudentData(student);
    data.save();

    res.redirect('studentenlijst');
});

router.get('/editstudent/:id', function(req, res){
  var string = req.path;
  var parts = string.split("/");
  var id = parts[2];

  StudentData.findById(id, function(err, studentinfo){
    if(err){
      console.error("error, no entry found");
    }
    else{
      res.render('student/editstudent', { studentinfo: studentinfo });
    }
  });
});

router.post('/editstudent', function(req, res){
  var student = {
    student: req.body.student,
    straat: req.body.straat,
    gemeente: req.body.gemeente,
    provincie: req.body.provincie,
    geslacht: req.body.geslacht,
    email: req.body.email};

  var options = { new: true};

  var id = { _id: req.body._id };
  StudentData.findOneAndUpdate(id, student, options, function(err, student){
    if(err){
      console.log("Error, could not update", err);
    }
    else{
      let {io} = require('../global');
      io.emit("update");
      res.redirect('studentenlijst');
    }
  });
  });

router.get('/detailstudent/:id', function(req, res){
  var string = req.path;
  var parts = string.split("/");
  var id = parts[2];

  StudentData.findById(id, function(err, studentinfo){
    if(err){
      console.error("error, no entry found");
    }
    else{
      res.render('student/detailstudent', { studentinfo: studentinfo });
    }
  })
});

router.post("/deletestudent", function(req, res, next){
  var id = { _id: req.body._id };
  StudentData.findByIdAndRemove(id).exec();

  //werkt nog niet
  res.redirect("studentenlijst");
});

module.exports = router;
