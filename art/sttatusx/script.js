const canvas = document.querySelector(".scene");
const context = canvas.getContext("2d");

context.beginPath();
context.arc(70, 75, 50, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.arc(150, 75, 50, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.arc(230, 75, 50, 0, 2 * Math.PI);
context.stroke();