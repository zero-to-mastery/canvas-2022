var canvas = document.querySelector("#root-canvas");
var context = canvas.getContext("2d");

// HTML5 Logo Outer Container
context.beginPath();
context.moveTo(100, 100);
context.lineTo(120, 300);
context.lineTo(200, 320);
context.lineTo(280, 300);
context.lineTo(300, 100);
context.closePath();

context.fillStyle = "#e34c26";
context.fill();

// HTML5 Logo Inner Container
context.beginPath();
context.moveTo(200, 120);
context.lineTo(200, 310);
context.lineTo(265, 290);
context.lineTo(280, 120);
context.closePath();

context.fillStyle = "#f06529";
context.fill();

// Top right Text
context.beginPath();
context.moveTo(200, 140);
context.lineTo(200, 160);
context.lineTo(255, 160);
context.lineTo(260, 140);
context.closePath();

context.fillStyle = "#fff";
context.fill();

// Top left Text
context.beginPath();
context.moveTo(140, 140);
context.lineTo(150, 210);
context.lineTo(200, 210);
context.lineTo(200, 190);
context.lineTo(165, 190);
context.lineTo(160, 160);
context.lineTo(200, 160);
context.lineTo(200, 140);
context.closePath();

context.fillStyle = "#ddd";
context.fill();

// Bottom right Text
context.beginPath();
context.moveTo(200, 190);
context.lineTo(200, 210);
context.lineTo(230, 210);
context.lineTo(225, 250);
context.lineTo(200, 260);
context.lineTo(200, 280);
context.lineTo(240, 270);
context.lineTo(250, 190);
context.closePath();

context.fillStyle = "#fff";
context.fill();

// Bottom left Text
context.beginPath();
context.moveTo(150, 225);
context.lineTo(160, 270);
context.lineTo(200, 280);
context.lineTo(200, 260);
context.lineTo(180, 255);
context.lineTo(175, 225);
context.closePath();

context.fillStyle = "#ddd";
context.fill();

// HTML Texxt
context.font = "bold 60px Poppins";
context.fillStyle = "black";
context.fillText("HTML", 120, 90);