/* Ondervragen van een RESTful API met http GET request */


var http = require("http");
var fs = require("fs");

//instellen van de api voor feedzilla nieuws
var options = {
  //  method: "GET",
  //  host: 'services.groupkt.com',
   // path: '/country/get/all'
    //host: "jsonplaceholder.typicode.com",  // "api.feedzilla.com"
    //path: "/posts"  //"/v1/categories.json"
    host: 'api.flickr.com',
    path: '/services/feeds/photos_public.gne?format=json&tags=NMCT&jsoncallback=?'

}

//verkorte schrijfwijze: http.get (options... )
 http.request(options, function (resp) {
    console.log('STATUS CODE: ', resp.statusCode + " "+ http.STATUS_CODES[resp.statusCode]);

    resp.on("data", function (data) {
       // console.log("\n ontvangen buffer data: ", data); //binair
    process.stdout.write("\n data: " + data);
    });

    resp.on("error", function (err) {
        console.log("\n error: ", err.message);
    });

//stream response in een file:
    var file = fs.createWriteStream("./resources/response.txt");
    resp.pipe(file);
 }).end(); //request uitvoer door end()

    //verhinderen dat de console direct sluit.
 setTimeout(function () {
     process.exit();
 }, 15000);
