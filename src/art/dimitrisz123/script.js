let canvas = document.getElementById("draven");
const myContext = canvas.getContext("2d");
const img = new Image();
myContext.canvas.width = window.innerWidth;
myContext.canvas.height = window.innerHeight;
img.onload = () => {
  myContext.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
};
img.src = "./icon.png";
