const canvas = document.getElementById("curse");

const ctx = canvas.getContext("2d");

const { width, height } = canvas;
const dummy = "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";

console.log("ppp", height);

ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(width / 2, height);
ctx.lineTo(0, height * (3 / 4));
ctx.lineTo(width / 2, height / 2);
ctx.lineTo(width, height * (3 / 4));
ctx.lineTo(width / 2, height);
ctx.lineTo(width / 2, height / 6);

ctx.moveTo(width / 2, height / 2);
ctx.lineTo(0, height / 4);
ctx.lineTo(width / 6, height / 6);

ctx.moveTo(width / 2, height / 2);
ctx.lineTo(width, height / 4);
ctx.lineTo(((width * 5) / 6)-20, (height / 6)-20);

ctx.moveTo(width / 2, height / 6);
ctx.lineTo((width / 2)-10, (height / 4)-60);

ctx.moveTo(width / 2, height / 6);
ctx.lineTo((width / 2)+10, (height / 4)-60);

ctx.moveTo(width / 2, height / 6);
ctx.lineTo(width / 2, (height / 4)-60);

ctx.stroke();

// Missing lines design
ctx.font = "45px serif";
ctx.fillText(dummy, width/4, height);
ctx.fillText(dummy, width/4, height*3/4);
ctx.fillText(dummy, width/4, (height*3/4)+10);
ctx.fillText(dummy, width/4, (height*3/4)+30);
ctx.fillText(dummy, width/4, (height*3/4)+80);
ctx.fillText(dummy, width/4, height*3/6);
ctx.fillText(dummy, width/4, (height*3/6)+20);
ctx.fillText(dummy, width/4, (height*3/6)-20);
ctx.fillText(dummy, width/4, (height*3/6)+50);
ctx.fillText(dummy, width/4, (height*3/6)-50);
ctx.fillText(dummy, width/4, height/2);


const text = document.getElementById("text");
const t = text.getContext("2d");
t.font = "50px serif";
t.fillStyle = "red";
t.fillText("BERSERK", 10,50);
