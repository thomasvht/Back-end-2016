/**
* @Author: thomasvanhoutte
* @Date:   2016-10-14T13:53:18+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-21T14:28:50+02:00
*/

const events = "";
﻿/*
* Door het async karakter wordt de catch niet bereikt
*/

//0. NOK:throw binnen de callback
// try {
//     setTimeout(function () {
//         throw new Error("Ik ben een 'uncaught' error en stop de applicatie!");
//     }, 0);
// }
// catch (e) {
//     console.error("Deze catch werkt alleen in synchrone omstandigheden:" + e);
// }

//gebruik errors met callbacks!!!!

let myFunction = function(x, next){
  if(x == "fout"){
    next(new Error("\nIk ben een fout vanuit de callback functie"));
  }
  else{
    next(null, x);
  }
};

try{
  myFunction("fout", function(err, result){
    if(err){
      throw new Error(err.message);
    }
    else{
      console.log(result);
    }
  });
}
catch(e){
  console.log(e.message);
}

//3. error control met emitter

setTimeout(function(){
  emitter.emit("error", new Error("De emitter rapporteert een fout na 1 sec."));
}, 1000);

emmiter.on("error", function(err){
  //splits fouten op indien mogelijk
  if(err.NotFound){
    console.log("niet bestaand");
  }
  console.log(err);
});
