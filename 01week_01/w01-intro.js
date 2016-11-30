/**
* @Author: thomasvanhoutte
* @Date:   2016-09-30T15:04:01+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-09-30T15:32:50+02:00
*/



console.log("Hello world");

console.log(process.argv[0] + "voer uit " + process.argv[1] + process.argv[2]);

//iteratoren
//var i;//globaal
//een for-lus maakt geen scope aan = functie scope
// let = block scope = OOP

for (var i = process.argv.reverse().length - 1; i >= 0; i--) {
  j = 3;
  console.log(process.argv[i].toString());
}
j=5;

//hoisting

console.log("test \n");

const howest = "HOWEST";

for(let i in process.argv.reverse()){
  //if(process.argv.reverse().hasOwnProperty(i)){
    //console.log(process.argv[i].toString());
  //}
}
// geen return - wordt een callback functie  function(value, index)
process.arg.reverse().forEach(function (x, i){
  console.log("async", x.toString());
});

//ES6
for (let value of process.argv.reverse()){
  console.log("ES6", value);
}
