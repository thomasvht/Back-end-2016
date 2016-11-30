/**
* @Author: thomasvanhoutte
* @Date:   2016-10-14T15:01:57+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-14T15:45:04+02:00
*/



/*
*  opgave : loader met mod patroon + emitter
*  ES6
*/

"use strict";

//nmp install events --save
var EventEmitter = require("events").EventEmitter;

module.exports = (()=>{
  //private var

  let startTime;
  startTime = startTime? startTime:  Date.now();
  let emitter = new EventEmitter();
  let duration = ()=>{Date.now() - startTime };

  let loadAsync = (element, cb) => {
    if(element === "ERROR"){
      cb("ERROR", null);
    }
    else{
      setTimeout(function(){
        cb(null, element = " is loaded")
      }, 1000);
    }
  };

  let loadArrayAsync = (array, elements, cb) => {
    startTime =  Date.now();
    var counter;

    for(var element in elements){
      var sElement = elements[element];
      loadAsync(sElement, function(err, element){
        counter++;
        if(err){
          array[counter] = element;
          //callback
          cb(err, null);
        }
        else{
          array[counter] = element;
          //emitter
          emitter.emit("addedUser", element);
          if(counter === elements.length){
            cb(null, array, duration());
          }
        }
      });
    }

  return{
    //public
    loadArrayAsync: loadArrayAsync,
    emitter: emitter
  }
}
});
