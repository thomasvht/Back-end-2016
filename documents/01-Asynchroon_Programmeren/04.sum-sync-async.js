/*
*
*  synchrone sum functie tegenover een asynchrone sum functie (ES5, ES6)
*/

//01.synchrone taak (benoemd)
var sum = function (a, b) { return (a + b); }
console.log("sync", sum(2, 3));

//01. ES6 
const ES6_sum = (a,b) => a + b; // is een functie en resulteert in 
console.log(ES6_sum(3, 4)); 

/*--------------------------------------------------------------------------------*/

//02. asynchrone taak
var aSum = function (a, b, callback) {
//callback vervangt return     
    callback(null , a + b);
}

aSum(2, 3, function (error, result) {
    if (error) {console.log("error") }
    console.log("async", result);
});

//02. ES6 

const ES6_aSum = (a, b, callback) => callback(null, a + b);

ES6_aSum(3, 4,  (error, result) => {
    console.log( result);
}); 