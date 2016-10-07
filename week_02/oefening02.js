/**
* @Author: thomasvanhoutte
* @Date:   2016-10-07T14:30:07+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T14:56:47+02:00
* testje */
// deel 1
console.log("\n----  DEEL 1  ----\n");
const processData = function(x){
  let init = 2;
  //closure;
  function secretCalc(y){
    console.log(x + 2 * y + (++init));
  }
  return secretCalc; // geen arg
};

console.log(processData(2) + "\n");

processData(2)(10);
processData(2)(10);

const doeIets = processData(2);
// scope is nog 0 dus 25
doeIets(10);
// scope wordt behouden dus is nu 1 => 26
doeIets(10);
// idem nog eens + 1 => 27
doeIets(10);
// smijt maar je scope weg en begint opnieuw dus 25
processData(2)(10);

console.log("\n----  DEEL 2  ----\n");

const processData5 = (function (x, y) {
 //declaraties en initialisaties
 let init = 2
 const secretCalc= (x, y) => console.log("IIFE result2: ", x + 2 * y + (++init)) ;
 //publiek maken
 return secretCalc;
}
)();

processData5(2, 10);
processData5(2, 10);


console.log("\n----  DEEL 3  ----\n");

const Game = {}; //literal object
Game.player = "Poepoe"; //hier
const score = (function (Game) {
 let counter = 0;
 //var player = Game.player;

 let inner = function (bonus) {
 bonus = bonus === undefined? 0 : bonus
 return ({
 player: Game.player,
 points: ++counter + bonus
 })
 }
 return inner;
})(Game); //entry point voor het argument
//Bij elke score() worden de “points” verhoogd (eventueel met extra bonus).
console.log(score());
console.log(score());
let myGame = score(2);
console.log("\nDe punten van", myGame.player , "zijn :" , myGame.points, "\n");

console.log("\n----  DEEL 4  ----\n");
// fout hij zal ieder keer 5 geven
for(var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log("foute oplossing : " + i);
  }, 0);
}

//oplossing 1 (let)
console.log("\n oplossing 1: \n");
for(let i = 0; i < 5; i++){
  setTimeout(function(){
    console.log("oplossing 1 :" + i);
  }, 0);
}

//oplossing 2
console.log("\n oplossing2: \n");
for(var i = 0; i < 5; i++){
  (function (i){
    setTimeout(function(){
      console.log("oplossing 2 : " + i);
  }, 0);
})(i);
}
