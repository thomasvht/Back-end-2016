/**
* @Author: thomasvanhoutte
* @Date:   2016-10-07T15:09:14+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T15:16:46+02:00
*/

"use strict";

var Loader = (function(){
  //private vars
  var startTime = startTime? startTime: new Date.getTime();

  //private methods
  var duration = function () { return (new Date.getTime() - startTime);};
  var loadAsync = function(element, callback){};
  var loadArrayAsync = function (array, elements, callback){};
  return{
    //public methods
    loadArrayAsync: loadArrayAsync,
  };
})();

module.exports = Loader;
