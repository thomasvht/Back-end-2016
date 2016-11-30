/* 
* Door het async karakter wordt de catch niet bereikt
*/

//0. NOK:throw binnen de callback
try {
    setTimeout(function () {
        throw new Error("Ik ben een 'uncaught' error en stop de applicatie!");
    }, 0);
}
catch (e) {
    console.error("Deze catch werkt alleen in synchrone omstandigheden:" + e);
}