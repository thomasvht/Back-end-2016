/**
* @Author: thomasvanhoutte
* @Date:   2016-12-09T16:33:07+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-09T16:39:06+01:00
*/

module.exports = function(io){
  io.sockets.on("connection", function(socket){
    socket.on("user_image", function(baseImg){
      console.log(baseImg + " image is received");
      socket.emit("user_image", socket.id, baseImg);
      socket.broadcast.emit("user_image", socket.id, baseImg);
    })
  });
}
