/* Browser client */

let client = {};
client.api = (function () {
    //blijft local binnen de client.api namespace
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
        url += "?" + $("#myForm").serialize() + "&t=" + (new Date()).getTime(); // caching verhinderen
        //2.clear searchresults        
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }

        //3.data ophalen 
        XHR.loadData(url, function (err, json) {
            var result = (JSON.parse(json));
            console.log("DATA: ", result);
            result.items.forEach(function (item) {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(item.title));
                li.appendChild(document.createElement("br"));
                let img = document.createElement("img");
                img.setAttribute('src', item.media.m);
                li.appendChild(img);
                searchResults.appendChild(li);
            });
        });
    };
    return {
        //is een global javascript object binnen de namespace
        start: start
    };
})();