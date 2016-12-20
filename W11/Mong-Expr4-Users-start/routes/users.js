var express = require('express');
var router = express.Router();

var User = require('../data/models/user');
var loadUser = require('./middleware/load_user'); //ophalen van één user

router.get('/', function (req, res) {
    //zonder repository:
    //User.find({}).sort('username').exec(function (err, docs) {
    //    res.render('users/index', { title: 'Users overzicht', userlist: docs });
    //})
    
    //met repository in het model:
    User.getUsers(function (users) {
        res.render('users/index', { title: 'Users overzicht', userlist: users });
    });
    
    //met afzonderlijk repository:
    //UsersRepo = require("../data/models/usersRepo");
    //UsersRepo.getAllUsers(function (users) {
    //    res.render('users/index', { title: 'Users overzicht', userlist: users });
    //});

});

/*--- CREATE----*/
router.get('/new', function (req, res) {
    res.end("view users/create nog uit te werken");
});

router.post('/', function (req, res, next) {
// Hier: de req.body ophalen en toevoegen aan usersDB
});


/*--- DETAILS ----*/
router.get('/:name', loadUser, function (req, res, next) {
    res.render('users/details', { title: 'User profile', user: req.user });
});

/*--- UPDATE ---*/
router.get('/edit/:name', loadUser, function (req, res, next) {
    res.end("view users/edit nog uit te werken");
});


/*--- universele oplossing voor PUT en DELETE=> POST gebruiken en _method ---*/
router.route('/:name').post(loadUser , function (req, res, next) {
    switch (req.body._method) {
        case "DELETE":
            req.user.remove(function (err) {
                if (err) { return next(err); }
            });
            break;
        case "PUT":
            req.user.update(req.body, function (err) { // uitwerken 
            });
            break;
        default:
            next();
    } 
    res.redirect('/users'); 
});

//alternatieve oplossing voor PUT en DELETE met "method-override" middleware
router.route('/:name').delete(loadUser, function (req, res, next) {
    req.user.remove(function (err) {
        if (err) { return next(err); }
        res.redirect('/users');
    });
});


module.exports = router;