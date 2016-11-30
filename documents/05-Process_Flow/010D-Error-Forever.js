/*
* installeer forever : npm install forever -g
* run forever vanuit de CLI :
*   > forever start 010D-Error-Forever   ( start de daemon)
*   > forever 010D-ErrorForever (run)
* opties instellen voor het maximaal aantal restart  + loggen
*/


try {
    setTimeout(function () {
        throw new Error("Ik ben een 'uncaught' error en stop de applicatie!");
    }, 4000);
}
catch (e) {
    console.error("Deze catch werkt alleen in synchrone omstandigheden:" + e);
}

/* server started */
console.log('hello world runs bij elke heropstart');