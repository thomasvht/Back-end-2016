/* Browser client */

let client = {};
client.api = (function () {
    var start = document.addEventListener("DOMContentLoaded", function (event) {
        console.log("DOM fully loaded and parsed");
        addListeners();

    });
    var addListeners = () => {
        let btn = document.querySelector('input[type="submit"]');
        let searchResults = document.querySelector('#searchResults');
        btn.addEventListener("click", function (e) { handleAPICall(e); });
    }
    var handleAPICall = function (e) {
        //1.stop submit en page refresh(!)
        e.preventDefault();
        var url = location.protocol + "//" + location.host + "/apiData";
        // url += "?" + $("#myForm").serialize() + "&t=" + (new Date()).getTime(); // caching verhinderen
        url += "?search=" + document.querySelector("#myForm").elements['search'].value + "&t=" + (new Date()).getTime();

        //2.clear searchresults        
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }

        //3.data ophalen:  
        XHR.loadData(url, function (err, json) {
            //TO DO : verder uit te werken ----------------------------------
        });
    };
    return {
        start: start
    };
})();