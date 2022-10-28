var cvs = document.getElementById("canvas");
var cx = cvs.getContext("2d");

//input size
var w = 500;
var h = (w / 10) * 6;
var r = (w / 10) * 2;

//rectangle
cx.fillStyle = "green";
cx.fillRect((cvs.width - w) / 2, (cvs.height - h) / 2, w, h);

//circle
cx.beginPath();
cx.fillStyle = "red";
cx.arc(cvs.width / 2, cvs.height / 2, r, 0, Math.PI * 2, false);
cx.fill();
