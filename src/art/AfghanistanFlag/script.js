const flagCanvas = document.getElementById("flag");
const flagCtx  = flagCanvas.getContext("2d");

const BlackColor = "#000000";
const GreenColor = "#008053";
const RedColor = "#D5462A";

//* green rectangle
flagCtx.fillStyle = GreenColor;
flagCtx.fillRect(0, 0, 180*3, 300);


//* center red rectangel
flagCtx.fillStyle = RedColor;
flagCtx.fillRect(0, 0, 180*2, 300);


//* black rectangel
flagCtx.fillStyle = BlackColor;
flagCtx.fillRect(0, 0, 180, 300);

