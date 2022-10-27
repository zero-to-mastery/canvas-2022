let canvas = document.getElementById("germanFlag");
let canva = canvas.getContext("2d");

canva.fillStyle = "#000000";
canva.fillRect(0, 0, canvas.width, canvas.height / 3);

canva.fillStyle = "#FF0000";
canva.fillRect(0, canvas.height / 3, canvas.width, canvas.height / 3);

canva.fillStyle = "#FFFF00";
canva.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
