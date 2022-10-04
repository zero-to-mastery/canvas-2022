let save = document.querySelector(".save");
let canvas = document.getElementById("canvas");

let cx = document.querySelector("canvas").getContext("2d");

cx.fillStyle = "#E1C16E";
cx.fillRect(25, 145, 20, 30);
cx.fillRect(155, 145, 20, 30);

cx.fillStyle = "#DAA06D";
cx.fillRect(60, 125, 80, 50);

cx.fillStyle = "#EADDCA";
cx.fillRect(27.5, 75, 15, 70);
cx.fillRect(157.5, 75, 15, 70);
cx.fillRect(45, 105, 15, 70);
cx.fillRect(140, 105, 15, 70);

cx.fillStyle = "#F0E68C";
cx.fillRect(70, 75, 60, 50);

cx.fillStyle = "#CD7F32";
cx.fillRect(25, 65, 20, 10);
cx.fillRect(155, 65, 20, 10);
cx.fillRect(40, 105, 25, 10);
cx.fillRect(135, 105, 25, 10);
cx.fillRect(67.5, 65, 65, 10);

cx.fillStyle = "#6E260E";
cx.fillRect(85, 145, 30, 30);

cx.fillStyle = "#89CFF0";
cx.beginPath();
cx.moveTo(156, 65);
cx.lineTo(165, 45);
cx.lineTo(174, 65);
cx.fill();

cx.beginPath();
cx.moveTo(26, 65);
cx.lineTo(35, 45);
cx.lineTo(44, 65);
cx.fill();

cx.beginPath();
cx.moveTo(68.5, 65);
cx.lineTo(100, 30);
cx.lineTo(131.5, 65);
cx.fill();

cx.beginPath();
cx.moveTo(41, 105);
cx.lineTo(52.5, 80);
cx.lineTo(64, 105);
cx.fill();

cx.beginPath();
cx.moveTo(136, 105);
cx.lineTo(147.5, 80);
cx.lineTo(159, 105);
cx.fill();
