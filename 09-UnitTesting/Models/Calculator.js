/* Gebruik van constructor pattern in een module*/

var Calculator = (function () {
    function Calculator() { }
    
    Calculator.prototype.add = function (operand1, operand2) {
        return operand1 + operand2;
    };
    
    Calculator.prototype.subtract = function (operand1, operand2) {
        return operand1 - operand2;
    };
    
    Calculator.prototype.divide = function (operand1, operand2) {
        if (operand2 == 0) {
            throw new Error("delen door nul kan niet");
        }
        return operand1 / operand2;
    };
    
    return Calculator;
})();

module.exports = Calculator;