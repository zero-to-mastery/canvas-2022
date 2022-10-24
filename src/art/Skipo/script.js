const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const placeholder = document.querySelector("#placeholder");
const img = new Image();
img.src = "icon.png";

img.onload = () => {
  ctx.drawImage(img,
    canvas.width / 2 - img.width / 2,
    canvas.height / 2 - img.height / 2
  );
};
