/*global describe, it, before, beforeEach, after, afterEach */
/*
 * running tests met mocha (=> describe mogelijk)
 *  
 */

var assert = require("assert");
var Calculator = require('../../Models/Calculator');


describe("Calculator", function () {
    var calculator;
    
    beforeEach(function () {
        calculator = new Calculator();
    });
    
    describe("Add", function () {
        it("should return the sum of both operands", function () {
            assert.strictEqual(calculator.add(1, 2), 3);
        });
    });
    
    describe("Subtract", function () {
        it("should return the difference of both operands",
            function () {
            assert.strictEqual(calculator.subtract(3, 1), 2);
        });
    });
});