/* errorControl
* wegshrijven van cb errors
*/

let fs = require('fs'), errorFileName = "./resources/error.log";

let errorControl = (function () {

    let writeToErrorLog = function (err, callback) {

        let writeBuffer = new Buffer("\n" + new Date().toLocaleString() + ":" + err);

        // verder uit te werken
        ////  fs.open(errorFileName, 'a', function opened(err, fd) {
        //      fs.write(fd, writeBuffer,
        //....
        //  })
    };


    return {
        writeToErrorLog: writeToErrorLog
    };
})();

module.exports = errorControl;