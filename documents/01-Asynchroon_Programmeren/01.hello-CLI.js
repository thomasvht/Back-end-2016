/*
*
*   Enkele voorbeelden voor CLI (Command Line  interface)
*   of file execution met  node "filename"
*
*/


//1. topprocess in Node = process
process.stdout.write("Hello World met process.stdout.");
console.log("\nHello World met console.log"); //wrapper rond process.stdout
console.log("process.argv uitlezen:" + process.argv[0] + " voert uit: " + process.argv[1])
console.warn("Hier een console warning.");

//2. hoisting = (enkel) declaratie komt vooraf
console.log("\n\n-------\n");
a = 2;
var a;  //declaraties naar de top
console.log("\hoisting declaratie:", a);

console.log(b, " door hoisting declaratie"); //undefined
var b = 2;

//3. types van iteratoren 
//Pas op: controlestructuren (if, for) maken geen scope = functie scope.
//Wil je toch block scope (=OOP): gebruik lete en const uit ES6
const howest = "HOWEST";
console.log("\n\n-------\n");
var i;//globaal -> verhinder globale variabelen in een applicatie!
//3.1 negatieve lus is iets performanter
console.log("\nEen FOR lus maakt geen scope:");
for (var i = process.argv.reverse().length - 1; i >= 0; i--) {
    console.log("\t",process.argv[i].toString());
}

//3.2 iets tragere for:
for (let i in process.argv.reverse()) {
    if (process.argv.reverse().hasOwnProperty(i))
        console.log("\t",process.argv[i].toString());
}

//3.2 geen return - wordt een callback functie  function(value, index )
process.argv.reverse().forEach(function (value, i) {
    console.log("\tAsync for met value EN index:", value.toString(), i);
});

//3.3 ES6 
for (let value of process.argv.reverse()) {
    console.log("\tES6 let voor block scope", value);
}

console.log("\n\n-------\n");
console.trace("Een console.trace heeft meer info dan console.log");