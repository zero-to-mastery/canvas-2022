const canvas = document.querySelector("#canvas");

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const context = canvas.getContext("2d");

const drawRect = (x, y, width, height, colour, context) => {
	context.beginPath();
	context.rect(x, y, width, height);
	context.fillStyle = colour;
	context.fill();
};

drawRect(40, 40, width - 80, height - 80, "003049", context);
drawRect(60, 60, width - 120, 100, "#D62828", context);
drawRect(60, 180, width - 120, 90, "#F77F00", context);
drawRect(60, 290, width - 120, 70, "#e5e5e5", context);
drawRect(60, 380, width - 120, 60, "#8d99ae", context);
drawRect(60, 460, width - 120, 50, "#94d2bd", context);
drawRect(60, 545, width - 120, 40, "#F77F00", context);
drawRect(60, 645, width - 120, 20, "#D62828", context);

const myFont = new FontFace("Audiowide", "url(./Audiowide-Regular.ttf)");

myFont.load().then(function (font) {
	context.font = "3vw 'Audiowide'";
	context.fillStyle = "#e5e5e5";

	context.fillText("Bauhaus Minimalist", 80, canvas.height - 100);

	context.font = "2vw 'Audiowide'";
	context.fillText("12 - 08 -21", width - 280, canvas.height - 100);

	context.font = "2vw 'Audiowide'";
	context.fillText("Made by BrianWhelanDublin", 80, canvas.height - 60);
});
