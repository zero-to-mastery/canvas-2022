const canvas=document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "2.7rem Arial";
ctx.fillText("Hello There!!!", 135, 370);
ctx.fillStyle="black";
ctx.fill();

//head
ctx.beginPath();
ctx.arc(245, 90, 40, 0, 2 * Math.PI,true);
ctx.fillStyle="white";
ctx.fill();


//eyes
ctx.beginPath();
ctx.arc(225, 90, 5, 0, 2 * Math.PI,true);
ctx.fillStyle="red";
ctx.fill();
ctx.beginPath();
ctx.arc(265, 90, 5, 0, 2 * Math.PI,true);
ctx.fillStyle="red";
ctx.fill();

//mouth
//ctx.beginPath();
ctx.fillRect(225,110,40,5);

//body
ctx.beginPath();
ctx.rect(195,130,100,100);
ctx.fillStyle="grey";
ctx.fill();

ctx.beginPath();
ctx.rect(195,130,100,100);
ctx.fillStyle="red";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "grey";
ctx.rect(195,130,100,100);  
ctx.stroke();


//legs
ctx.beginPath();
ctx.rect(205,230,20,50);
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.rect(265,230,20,50);
ctx.fillStyle="white";
ctx.fill();

//foot
ctx.beginPath();
ctx.arc(215, 295, 15, 0, 2 * Math.PI,true);
ctx.fillStyle="grey";
ctx.fill();
ctx.beginPath();
ctx.arc(276, 295, 15, 0, 2 * Math.PI,true);
ctx.fillStyle="grey";
ctx.fill();

//hands
ctx.beginPath();
ctx.rect(140,155,50,20);
ctx.fillStyle="white";
ctx.fill();
ctx.beginPath();
ctx.rect(300,155,20,50);
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.arc(126, 165, 15, 0, 2 * Math.PI,true);
ctx.fillStyle="grey";
ctx.fill();

//weapon
ctx.beginPath();
ctx.rect(126,95,7,210);
ctx.fillStyle="#004D00";
ctx.fill();

ctx.beginPath();
ctx.arc(130, 85, 15, 0, 2 * Math.PI,true);
ctx.fillStyle="#00DADA";
ctx.fill();

