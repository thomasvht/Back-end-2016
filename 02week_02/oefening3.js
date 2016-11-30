/**
* @Author: thomasvanhoutte
* @Date:   2016-10-07T16:44:32+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-07T16:57:20+02:00
*/

// 6.3.8 Objecten uitbreiden in het ctor patroon
String.prototype.encrypt = (function () {
//Hier komt een private key “secret”,
//die elk vermeld karakter omzet naar een ander
const secret = {
 'p': '\u0044' ,
 '1': 'a' ,
 '3': ':)',
 '5': '\u00A5',
 '7': '\u00C6'
 };
//De return bevat de encrypterende (replace) functie (werk dit uit)
 return function (){
   //1. RegExp haalt elk karakter op
   var oRegExp = /\w|\d|\s/gi;

   //2. asynchroon met string.replace(searchvalue, newvalue)
   return this.replace(oRegExp, function(a){
     return typeof (secret[a.toLowerCase()]) !== "undefined" ? secret[a.toLowerCase()] : a;
   });
 };
})();
console.log('Een tekst'.encrypt());
