// Drawing the flag of Afghanistan using canvas element and javascript

function drawFlag() {
  const flagCanvas = document.getElementById("flag");
  const flagCtx = flagCanvas.getContext("2d");

  // Set the canvas size based on the screen size
  flagCanvas.width = window.innerWidth * 0.8; // 80% of the window width
  flagCanvas.height = flagCanvas.width * 0.6; // 60% of the canvas width

  flagCtx.fillStyle = "#008053";
  flagCtx.fillRect(0, 0, flagCanvas.width / 3, flagCanvas.height);

  flagCtx.fillStyle = "#D5462A";
  flagCtx.fillRect(flagCanvas.width / 3, 0, flagCanvas.width / 3 * 2, flagCanvas.height);

  flagCtx.fillStyle = "#000000";
  flagCtx.fillRect(flagCanvas.width / 3 * 2, 0, flagCanvas.width / 3, flagCanvas.height);
}

// Redraw the flag when the screen is resized
window.addEventListener("resize", drawFlag);

// Draw the flag initially when the page loads
drawFlag();