/**
* @classDescription	    Using XMLHTTP object to return webservice data (async)
* @param                {String} url ,{function } callback
* @author 		        Web@howest
* @version		        1.0.0 
*/
const XHR = (function ( ) {

    // PRIVATE GEDEELTE
    let createRequest = function (cb) {
        try {
            cb(null, new XMLHttpRequest());
        } catch (exc) {
            try {
                cb(null, new ActiveXObject("Msxml2.XMLHTTP"));
            } catch (exc2) {
                try {
                    cb(null, new ActiveXObject("Microsoft.XMLHTTP"));
                } catch (exc3) {
                    cb(exc3, null);
                }
            }
        }
    };

    return {
        // PUBLIEKE GEDEELTE
        loadData: function (url, cb) {
            createRequest(function (err, xHR) {
                if (err) { throw err; }
                xHR.onreadystatechange = function () {
                    if (xHR.readyState == 4 && xHR.status == 200) {
                        cb(null, xHR.responseText);
                    }
                };
                xHR.open('GET', url, true);
                xHR.send();
            });           
        }
    };

})();