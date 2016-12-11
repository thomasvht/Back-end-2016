/**
* @Author: thomasvanhoutte
* @Date:   2016-12-09T15:02:01+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-09T15:41:16+01:00
*/

module.exports = function(io){
  io.sockets.on("connection", function(socket){
    console.log("socket connected");

    socket.emit("login");

    socket.on("clientMessage", function(message){
      socket.emit("serverMessage ", message); // naar zichzelf emitten
      socket.broadcast.emit("serverMessage ", message); // naar andere sockets emitten
    });

    socket.on("login", function(username){
      socket.username = username; // socket.id
      socket.emit("serverMsg", JSON.stringify({content: "You're logged in as: " + username}));
      socket.broadcast.emit("serverMsg", JSON.stringify({content: "The new user " + username + " is online."}));
    })

    socket.on("clientMsg", function(data){
      // var obj = { content: data}
      socket.emit("serverMsg", JSON.stringify({content: data}));
      socket.broadcast.emit("serverMsg", JSON.stringify({content: data}));
    })
  })
}
