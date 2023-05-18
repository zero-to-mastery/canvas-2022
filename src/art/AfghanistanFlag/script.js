// Drawing the flag of Afghanistan using canvas element and javascript
function drawFlag() {
  const flagCanvas = document.getElementById("flag");
  const flagCtx = flagCanvas.getContext("2d");

  //* green rectangle

  flagCtx.fillStyle = "#008053";
  flagCtx.fillRect(0, 0, 180 * 3, 300);

  // center red rectangel

  flagCtx.fillStyle = "#D5462A";
  flagCtx.fillRect(180, 0, 180 * 2, 300);

  // black rectangel

  flagCtx.fillStyle = "#000000";
  flagCtx.fillRect(360, 0, 180, 300);
}
