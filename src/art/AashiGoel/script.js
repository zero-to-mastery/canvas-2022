window.onload = function() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.querySelector("img");
    ctx.drawImage(img, 105, 5);
  };