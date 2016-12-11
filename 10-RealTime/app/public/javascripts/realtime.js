/**
* @Author: thomasvanhoutte
* @Date:   2016-12-09T16:46:13+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-12-09T17:15:07+01:00
*/



window.onload = function(){
  console.log("realtime.js is loaded");
  //0. DOM variables
  var selectImg = document.getElementById("selectImg");
  var images = document.getElementById("images");

  //1. sockets init
  var socket = io.connect(location.protocol + "//" + location.host);

  //2. eventhandlers (inobtrusive)
  selectImg.addEventListener("change", function(evt){
    for(var i = 0; i < evt.currentTarget.files.length; i++){
      var file = evt.currentTarget.files[i];
      var reader = new FileReader();

      reader.onload = function(evt){
        socket.emit("user_image", evt.currentTarget.result);
      }
      reader.readAsDataURL(file);
    }
  });

  //3. socket handlers
  socket.on("user_image", function(id, baseImg){
    var img = document.createElement("img");
    img.src = baseImg;
    img.width = 200;

    var div = document.createElement("div");
    div.style.position = "relative";
    div.style.margin = 20 + "px";
    div.appendChild(img);

    images.appendChild(div);
  })

}
