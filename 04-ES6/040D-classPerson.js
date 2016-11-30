/*
* ES6 voorziet een class -> herschrijven van de ctor/prototype
*/


//0.imports (require() voor node)
//0.member variables met module scope (let, const)

class Person {
    //geen variabelen mogelijk op hoogste niveau

    //1. Function prototype: vervangt de ES5 constructor functie
    constructor(firstName, lastName, age = 20) {
        //11.private members met const of let

        //12.instance members (publiek door “this”)
        console.log(firstName + " is instantiated.")
        //a. properties met initialisatie
        this.firstName = firstName;
        this.lastName = lastName;
        this.time = new Date();

        //b. events (met handlers in object prototype) 
        this.sender = (msg) => { return this.onSender(this, msg) };

        //c. variabelen nodig in het object prototype (get/set)
        this._age = age;
    }


    //2. Object prototype: 
    //21.getters en setters gebouwd als functies 
    get age() { return this._age; }
    set age(value) {
        //validation
        if (value >= 110 || value < 0) { console.log(value + " is not a valid age.") }
        this._age = value;
    }


    //22. methodes (wel nog altijd op het toegankelijke object prototype)
    toString() { return ("Mijn voornaam is " + this.firstName); }
    onSender(evt, myMessage) { console.log("log:", myMessage) }

    //23. static method met het  keywoord static
    static getSchool() { return "NMCT in HOWEST"; }

}

//3. static (class) properties komen buiten de class beschrijving
Person.school = "Howest"



/*---- run als test ----------------*/
let person = new Person("johan", "van"); 
console.log ("default leeftijd" , person.age)
