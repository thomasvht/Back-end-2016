/*global describe, it, before, beforeEach, after, afterEach */

/*--- unit testing op basis van de node assert module --- */
var assert = require("assert");
var Calculator = require('../Models/Calculator');
var app = require('../app');

exports.runTests = function () {
    var calculator = new Calculator();
    var failed = 0;
    //een test die niet slaagt, genereert een error en verhoogt de failed counter.
    try { assert.strictEqual(calculator.add(1, 1), 2); } catch (err) { writeError(err); }
    try { assert.strictEqual(calculator.subtract(3, 1), 2); } catch (err) { writeError(err); }

    try { assert.strictEqual(calculator.add(0.2, 0.1), 0.3, "Javascript is niet gemaakt om te rekenen"); } catch (err) { writeError(err); }
    try { assert.equal({ a: 1 }, { a: 1 }, "deepEqual !== equal "); } catch (err) { writeError(err); }

    try {
        assert.throws(function () { calculator.divide(10, 0); }, Error); // foutieve deling zorgt voor een exceptie.
    } catch (err) { writeError(err); }

    try {
        assert.throws(function () { calculator.divide(10, 1); }, "Dit werpt geen exceptie"); // resultaat kan RegExp zijn 
    } catch (err) { writeError(err); }

    console.log("all tests are executed", failed + " failed");

    function writeError(err) {
        console.log("failed tests:" + (++failed) + ": ", err);
    }
};
