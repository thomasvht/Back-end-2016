/**
* @Author: thomasvanhoutte
* @Date:   2016-12-09T14:06:08+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-09T14:23:24+01:00
*/



var config = {
  HOST: "http://localhost",
  PORT: 4500,
};

function getEnv(variable){
  if(process.env[variable] === undefined){
    console.log("You must create an environment variable for " + variable);
  }

  console.log("config ", variable, " : ", process.env[variable]);
  return process.env[variable];
}

module.exports = config;
