var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
   res.render('index', { title: 'Express' });
   // res.redirect('/testPage');
});

router.post('/sendMessage', function (req, res) {
    //res.render('index', { title: 'Express' });
    if (req.body && req.body.message) {
        //opslaan in  array met push
        
        res.send({ status: "ok", message: req.body.message })
    } else {
        //verstuurt error in JSON formaat ( met correcte header)
        res.send({ status: "nok", message: "No message received" })
    }
    res.end();
});



router.get('/testPage', function (req, res) {
    res.render('testPage'), { titel: 'Test pagina' }
});

/*---------- routings voor testen -----------------------------*/

router.get('/calculatorTestsAssert', function (req, res) {
    var test = require("../tests/calculatorTestsAssert.js");
    test.runTests();
});

router.get('/jsonMessageTestsShould', function (req, res) {
    var msgtest = require("../tests/jsonMessageTestsShould.js");
});

router.get('/calculatorTests', function (req, res) {
    var test = require("../tests/mocha/calculatorTests.js");
});
module.exports = router;