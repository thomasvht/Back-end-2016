/*
 *   Oefening (6.3.6)
 *  constructor pattern voor Loader met emitter zender bij load of error
 * 
 */

//const Loader;
//ctor functie
const Loader = function (array, elements) {
    //private variabelen
    var author = "Johan";
    var self = this;
    
    //publieke eigenschappen voor initialisatie
    this.array = array;
    this.elements = elements;
    
    //pseudo-classe ( variabele zonder instantie/prototype)
    Loader.subject = "Gebruik van het constructor pattern";
};
//prototype object

Loader.prototype = {
    //instance properties 
     //startTime: this.startTime? this.startTime: new Date().getTime(),
    self: this,
    
    _startTime: "",
    get startTime() { return _startTime ? _startTime:new Date().getTime(); },
    set startTime(value) { _startTime = value; },
    
    //instance methods 
    duration: function () { return (new Date().getTime() - this.startTime); } ,   
    loadAsync: function (element , cb) {
        if (element === "ERROR") {
            cb(element , null);
        } else {
            setTimeout(function () { cb(null, element + " is loaded"); }, 1000);
        }
    },
    
    loadArrayAsync: function (arrayA , elements, cb) {
        this.startTime = new Date().getTime(); //reïnitialize 
        var counter = 0;
        
        for (var element in elements) {
            if (element) {
                var sElement = elements[element];
                //this = prototype
                this.loadAsync(sElement, function (err, element) {                   
                    counter++;
                    if (err) {
                        arrayA[counter] = err;
 
                        cb(err, null);
                    } else {
                        arrayA[counter] = element; 
                        console.log(element);                                                           
                    }                    
                    if (counter === elements.length) {
                        cb(null, arrayA , Loader.prototype.duration());
                    }
                });
            }
        }     
    }
};

module.exports = Loader;  // het constructor object exporteren 