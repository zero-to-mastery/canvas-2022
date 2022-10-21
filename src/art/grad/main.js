var c = document.getElementById("canvas");
var c1 = document.getElementById("canvas1");
var c2 = document.getElementById("canvas2");
var c3 = document.getElementById("canvas3");
var c4 = document.getElementById("canvas4");
var c5 = document.getElementById("canvas5");
var c6 = document.getElementById("canvas6");
var c7 = document.getElementById("canvas7");
var c8 = document.getElementById("canvas8");
var c9 = document.getElementById("canvas9");
var c10 = document.getElementById("canvas10");
var c11 = document.getElementById("canvas11");
var c12 = document.getElementById("canvas12");
var c13 = document.getElementById("canvas13");
var c14 = document.getElementById("canvas14");
var c15 = document.getElementById("canvas15");


var cc = c.getContext("2d");
var cc1 = c1.getContext("2d");
var cc2 = c2.getContext("2d");
var cc3 = c3.getContext("2d");
var cc4 = c4.getContext("2d");
var cc5 = c5.getContext("2d");
var cc6 = c6.getContext("2d");
var cc7 = c7.getContext("2d");
var cc8 = c8.getContext("2d");
var cc9 = c9.getContext("2d");
var cc10 = c10.getContext("2d");
var cc11 = c11.getContext("2d");
var cc12 = c12.getContext("2d");
var cc13 = c13.getContext("2d");
var cc14 = c14.getContext("2d");
var cc15 = c15.getContext("2d");


// Create gradient
var grd = cc.createRadialGradient(250, 0, 160, 0, 113, 100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "pink");

// Fill with gradient
cc.fillStyle = grd;
cc.fillRect(0, 0,350,150);
 
//2
var grd1 = cc1.createRadialGradient(250, 0, 160, 0, 113, 100);
grd1.addColorStop(0, "red");
grd1.addColorStop(1, "white");

cc1.fillStyle = grd1;
cc1.fillRect(0, 0, 350, 150);

//3
var grd2 = cc2.createRadialGradient(250, 80, 190, 0, 100, 100);
grd2.addColorStop(0, "yellow");
grd2.addColorStop(1, "brown");

cc2.fillStyle = grd2;
cc2.fillRect(0, 0, 350, 150);

//4
var grd3 = cc3.createRadialGradient(250, 0, 160, 0, 130, 200);
grd3.addColorStop(0, "blue");
grd3.addColorStop(1, "green");

cc3.fillStyle = grd3;
cc3.fillRect(0, 0, 350, 150);

//5
var grd4 = cc4.createRadialGradient(250, 0, 160, 0, 113, 100);
grd4.addColorStop(0, "green");
grd4.addColorStop(1, "yellow");

cc4.fillStyle = grd4;
cc4.fillRect(0, 0, 350, 150);

//6
var grd5 = cc5.createRadialGradient(250, 0, 160, 0, 113, 100);
grd5.addColorStop(0, "#628E90");
grd5.addColorStop(1, "#3C2317");

cc5.fillStyle = grd5;
cc5.fillRect(0, 0, 350, 150);

//7
var grd6 = cc6.createRadialGradient(250, 0, 160, 0, 113, 100);
grd6.addColorStop(0, "#D58BDD");
grd6.addColorStop(1, "#FFD372");

cc6.fillStyle = grd6;
cc6.fillRect(0, 0, 350, 150);

//8
var grd7 = cc7.createRadialGradient(250, 0, 160, 0, 113, 100);
grd7.addColorStop(0, "#372948");
grd7.addColorStop(1, "#FFECEF");

cc7.fillStyle = grd7;
cc7.fillRect(0, 0, 350, 150);

//9
var grd8 = cc8.createRadialGradient(250, 0, 160, 0, 113, 100);
grd8.addColorStop(0, "#9CFF2E");
grd8.addColorStop(1, "#2192FF");

cc8.fillStyle = grd8;
cc8.fillRect(0, 0, 350, 150);

//10
var grd9 = cc9.createRadialGradient(250, 0, 160, 0, 113, 100);
grd9.addColorStop(0, "#674747");
grd9.addColorStop(1, "#829460");

cc9.fillStyle = grd9;
cc9.fillRect(0, 0, 350, 150);

//11
var grd10 = cc10.createRadialGradient(250, 0, 160, 0, 113, 100);
grd10.addColorStop(0, "#562B08");
grd10.addColorStop(1, "#D8D8D8");

cc10.fillStyle = grd10;
cc10.fillRect(0, 0, 350, 150);

//12
var grd11 = cc11.createRadialGradient(250, 0, 160, 0, 113, 100);
grd11.addColorStop(0, "#C689C6");
grd11.addColorStop(1, "#FFE6F7");

cc11.fillStyle = grd11;
cc11.fillRect(0, 0, 350, 150);

//13
var grd12 = cc12.createRadialGradient(250, 0, 160, 0, 113, 100);
grd12.addColorStop(0, "#C3F8FF");
grd12.addColorStop(1, "#FFF6BF");

cc12.fillStyle = grd12;
cc12.fillRect(0, 0, 350, 150);

//14
var grd13 = cc13.createRadialGradient(250, 0, 160, 0, 113, 100);
grd13.addColorStop(0, "#ECC5FB");
grd13.addColorStop(1, "#FAF4B7");

cc13.fillStyle = grd13;
cc13.fillRect(0, 0, 350, 150);

//15
var grd14 = cc14.createRadialGradient(250, 0, 160, 0, 113, 100);
grd14.addColorStop(0, "#FF7F3F");
grd14.addColorStop(1, "#89CFFD");

cc14.fillStyle = grd14;
cc14.fillRect(0, 0, 350, 150);

//16
var grd15 = cc15.createRadialGradient(250, 0, 160, 0, 113, 100);
grd15.addColorStop(1, "#395B64");
grd15.addColorStop(0, "#A5C9CA");

cc15.fillStyle = grd15;
cc15.fillRect(0, 0, 350, 150);


