/*
 * jsonMessageTest 
 *          met het opzetten van een eigen request
 *          met assert, should 
 */

var assert = require("assert");
var http = require('http');
var should = require('should');
var app = require("../app");

//1. request opties instellen
var opts = {
    host: '127.0.0.1',
    port: process.env.PORT || 3000,
    path: '/sendMessage',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
};

//2. Set up the request op basis vd post opties en voer deze uit.
var req = http.request(opts, function (res) {
    res.setEncoding('utf8');
    
    var result = "";
    res.on('data', function (d) {
        console.log(d);
        result += d;
    });
    
    res.on('end', function (err) {
        try {
            assert.strictEqual(JSON.stringify(JSON.parse(result)),
                '{"status":"ok","message":"Message test"}',
                "fout bij messageTests data type");

        }
        catch (err) {
            console.log("Assertion error ", err);
        }
            
        if (err) {
            throw err;
        }
        //na import van should.js:
        ////console.log(res.statusCode)
        this.statusCode.should.match(200);
        JSON.parse(result).should.have.property("status");
    });
});

//3. zelf request uitvoeren in de test
req.write("message=Message test"); //post data van een bericht
req.end();