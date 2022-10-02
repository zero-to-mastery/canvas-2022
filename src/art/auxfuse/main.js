const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.height = 128;

resize();
window.onresize = resize;

function resize() {
	canvas.width = window.innerWidth * window.devicePixelRatio;
	canvas.height = window.innerHeight * window.devicePixelRatio;
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
}

function crt_static(ctx) {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    const iData = ctx.createImageData(w, h);
    const buff32 = new Uint32Array(iData.data.buffer);
    const buff_len = buff32.length;

    for(i = 0; i < buff_len; i++) {
        if(Math.random() < 0.5) {
            buff32[i] = 0xffffffff;
        }
    }

    ctx.putImageData(iData, 0, 0);
}

(function loop() {
    crt_static(ctx);
    requestAnimationFrame(loop);
})();
