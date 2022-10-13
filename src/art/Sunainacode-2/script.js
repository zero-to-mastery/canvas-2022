function roundedRectangle(x, y, w, h) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var mx = x + w / 2;
    var my = y + h / 2;
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = "7";
    context.moveTo(x, my);
    context.quadraticCurveTo(x, y, mx, y);
    context.quadraticCurveTo(x + w, y, x + w, my);
    context.quadraticCurveTo(x + w, y + h, mx, y + h);
    context.quadraticCurveTo(x, y + h, x, my);
    context.stroke();
}
roundedRectangle(54, 14, 200, 125);
roundedRectangle(115, 55, 80, 50);
roundedRectangle(205, 40, 15, 7); 