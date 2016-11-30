/*
 * 
 * Een CPU intensieve taak , niet op de queue , blokkeert de volgende taken (single thread)
 * Een CPU intensieve taak opsplitsen in de queue laat andere taken ertussen door.
 * Een CPU intensieve taak forken, splits de taak over processen.
 * 
 * 
 */


var index = 0;
var start = new Date();

//kleine taak op de eventqueue:
setInterval(function () {
    console.log(" ************** Komt pas later aan de beurt , na 5 'long processes' ******************************");
}, 500);

//CPU intensieve taak simuleren:
var task = function (cb) {
    var start = new Date();
    console.log("Simulating long process");
    for (var j = 0; j < 100000000; j++) {              
        // Simulate large loop
    }
    
    while (new Date() - start < 1000) { } ;
    cb("Oef! Finished!");
}

//aantal keer (of blijvend) uitvoeren van een CPU intensieve taak.
var num = 29;
longProcess(task, num);

function longProcess(task, num) {
    if (num <= 0) return  //stop uitvoer
    console.log("uitvoer " , num , " :")
   task(function (text) { console.log(text) }); //één keer uitvoeren
    
    //onderbreek hier tijdelijk na bvb 5 iteraties 
    if (num % 5 === 0) {
        //tweede actie: timeout plaatst process op eventloop met tussenpauzen
        setTimeout(function () {
           longProcess(task, --num), 600
        })
    
    } else { 
    //eerste actie : plaats het process op de event loop met setTimeout
   //setTimeout(function () {
        longProcess(task, --num)
    //})
  }  
}