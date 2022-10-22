function draw() {
	const canvas = document.getElementById("canvas");

	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		ctx.beginPath();

		ctx.lineWidth = 4;
		ctx.rect(12, 12, 475, 325);

		ctx.font = "25px Comic Sans MS";
		ctx.fillText("Okay", 220, 55);

		// hao - character
		ctx.moveTo(140, 79);
		ctx.quadraticCurveTo(110, 131, 92, 181);
		ctx.lineTo(167, 236);

		ctx.moveTo(155, 150);
		ctx.quadraticCurveTo(139, 213, 87, 238);

		ctx.moveTo(71, 160);
		ctx.quadraticCurveTo(115, 154, 180, 158);

		ctx.moveTo(176, 89);
		ctx.lineTo(225, 86);
		ctx.quadraticCurveTo(212, 105, 196, 117);
		ctx.quadraticCurveTo(239, 182, 211, 235);
		ctx.lineTo(195, 215);

		ctx.moveTo(190, 168);
		ctx.quadraticCurveTo(215, 149, 238, 155);

		// de - character
		ctx.moveTo(305, 95);
		ctx.quadraticCurveTo(287, 108, 273, 123);
		ctx.quadraticCurveTo(275, 173, 278, 200);

		ctx.moveTo(274, 124);
		ctx.quadraticCurveTo(294, 120, 317, 121);
		ctx.quadraticCurveTo(320, 161, 320, 196);

		ctx.moveTo(277, 162);
		ctx.quadraticCurveTo(298, 162, 320, 158);

		ctx.moveTo(279, 200);
		ctx.quadraticCurveTo(302, 196, 321, 196);

		ctx.moveTo(370, 76);
		ctx.quadraticCurveTo(351, 105, 324, 125);

		ctx.moveTo(331, 119);
		ctx.quadraticCurveTo(374, 110, 410, 114);
		ctx.quadraticCurveTo(419, 205, 390, 229);
		ctx.quadraticCurveTo(382, 220, 379, 210);

		ctx.moveTo(361, 152);
		ctx.quadraticCurveTo(378, 159, 387, 170);

		ctx.font = "30px Comic Sans MS";
		ctx.fillText("hao", 140, 275);
		ctx.fillText("de", 320, 275);

		ctx.moveTo(159, 251);
		ctx.lineTo(166, 257);
		ctx.lineTo(172, 250);

		ctx.stroke();
	} else {
		alert("Too bad! This browser doesn't support Canvas 🥱");
	}
}

document.addEventListener("load", draw());
