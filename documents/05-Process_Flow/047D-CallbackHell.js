
/*
* Een filereader voorbeeld met drie geneste callback functies
* illustreert de driehoekige pyramide stijl(pyramid of Doom):
*/

const configApp = require("../configApp.js"); //__dirname is local
const fs = require("fs"); //File System module 
let fileName = configApp.PROJECT_DIR + '/00.Data/MyTextFile.txt';

fs.exists(fileName, function (exists) {
    //callback 1: bestaat de file
    if (exists) {
        fs.stat(fileName, function (error, stats) {
            //callback 2: haal statistische data vd file op (is het een file?)
            if (error) { throw error; }
            if (stats.isFile()) {
                fs.readFile(fileName, null, function (error, data) {
                    //callback 3: lees binair indien stats een file aanduidt
                    if (error) { throw error; }
                    console.log(data);
                    console.log("\n", data.toString());
                });
            }
        });
    } else {
        throw new Error("file bestaat niet");
    }
});
