/**
* @Author: thomasvanhoutte
* @Date:   2016-09-30T17:33:28+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T14:17:45+02:00
*/

var users = [];
var userIDs = ["P1", "P2", "P3", "ERROR", "P5", "P6", "P7", "P8", "P9"];
var delay = 1000;

const loadAsync = function (element, delay, callback){
  setTimeout(function(){
    if(element === "ERROR"){
      callback(element, null);
    }
  else{
    callback(null, "element: " + element + " is loaded.");
  }
}, delay);
  };

const loadArrayAsync = function (array, delay, callback){
  var start = new Date().getTime();
  for(let i in array){
    loadAsync(userIDs[i], delay, function (error, result){
      if(error === "ERROR"){
        console.log(error);
      }
      else{
        console.log(result);
        userIDs[i] = result;
      }
      if(i == array.length-1){
        callback(null, new Date().getTime() - start);
      }
    });
  }
};

loadArrayAsync(userIDs, delay, function(error, result){
  console.log("\nArray was loaded in  " + result + " ms");
});

// const loadArrayAsync2 = (arrTarget, elements, cb) =>{
//   start = new Date().getTime(); // geen let !
//   elements.forEach(function (element, index){
//     // voor async denk je gewoon sync en zet er een function bij
//     loadAsync(element, function(error, element){
//       if(error){
//         arrTarget[index] = element;
//         cb(error, null);
//       }
//       else{
//         arrTarget[index] = element;
//         console.log(element);
//         cb(null, element);
//       }
//       //returnt de volledige array
//     });
//   });
// loadArrayAsync2(users, userIDs, function(error, array){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log("\nVoor ", array, " is de doorlooptijd", new Date.getTime() - start, " ms");
//   }
// });
// };

//monitoren van synchrone doorlooptijd
const loadArraySynchroon = (array, elements) => {
 var start = new Date().getTime();
 for (let element in elements) {
 array[element] = loadSync(element, delay);
 console.log(array[element]); //informatie wanneer ingeladen
 }
 return (new Date().getTime() - start) + "\n";
};

//HELPERS--------------------------
function sleep(time){
  var start = new Date().getTime();
  while (new Date().getTime() - start < time){
    //just wait
  }
}

setTimeout(function () { process.exit(); }, 25000);


// ASYNCHROON_______----------------
const loadAsynchroon = function (element, cb){
  if(element === "ERROR")  {
    cb(element, null);
  }
  else{
    setTimeout(function(){ cb(null, element + " is loaded");},1000);
  }
};

const loadArrayAsynchroon = function(array, elements, cb){

};
