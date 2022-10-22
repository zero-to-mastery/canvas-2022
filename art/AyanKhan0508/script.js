const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const placeholder = document.querySelector("#placeholder");
const img = new Image();
img.src = "space.png";

img.onload = () => {
  ctx.drawImage(img, -150, -150);
};
