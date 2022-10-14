var canvas= document.getElementById("canvas");
var context = canvas.getContext('2d');

var height = 20;
var offset = 10;
var string = "riccardo";

context.font = "20px Arial";
context.fillStyle = "white";

var width = Math.ceil(context.measureText(string).width);
var string = new Array(width * 2).join(string + ' ');

for (var i = 0; i < Math.ceil(canvas.height / height); i++) {
   context.fillText(string, -(i * offset), i * height);
}
