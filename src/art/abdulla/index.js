window.onload = function(){
	var flag = document.getElementById('flag');
	drawFlag( flag, 320, 0, 40 );
	flag.style.marginLeft = -(flag.width/2)+'px';
	flag.style.marginTop  = -(flag.height/2)+'px';
	var timer = waveFlag( flag, 20, 10, 150, 200, -0.1 );
};




function drawFlag( canvas, width, padX, padY ){
	if (!padX) padX = 0;
	if (!padY) padY = 0;
	
	var a = width / 1.9;
	var b = width;
	var c = 7*a/13;
	var d = 0.76*a;
	var e = 0.054*a;
	var g = 0.063*a;
	var k = 0.0616*a;
	var l = a / 13;
	canvas.width  = b+2*padX;
	canvas.height = a+2*padY;
	var ctx = canvas.getContext('2d');

	// Stripes
	ctx.fillStyle = "#0099b5";
	  ctx.fillRect(5,25,300,50);
	  ctx.fillStyle = "#AD0F0D";
	  ctx.fillRect(5,72,300,3);
          ctx.fillStyle = "#fff";
	  ctx.fillRect(5,75,300,50);
	  ctx.fillStyle = "#AD0F0D";
	  ctx.fillRect(5,122,300,3);
          ctx.fillStyle = "#1EB53A";
	  ctx.fillRect(5,125,300,50);
           
	  


}
function waveFlag( canvas, wavelength, amplitude, period, shading, squeeze ){
	if (!squeeze)    squeeze    = 0;
	if (!shading)    shading    = 100;
	if (!period)     period     = 200;
	if (!amplitude)  amplitude  = 10;
	if (!wavelength) wavelength = canvas.width/10;

	var fps = 30;
	var ctx = canvas.getContext('2d');
	var   w = canvas.width, h = canvas.height;
	var  od = ctx.getImageData(0,0,w,h).data;
	// var ct = 0, st=new Date;
	return setInterval(function(){
		var id = ctx.getImageData(0,0,w,h);
		var  d = id.data;
		var now = (new Date)/period;
		for (var y=0;y<h;++y){
			var lastO=0,shade=0;
			var sq = (y-h/2)*squeeze;
			for (var x=0;x<w;++x){
				var px  = (y*w + x)*4;
				var pct = x/w;
				var o   = Math.sin(x/wavelength-now)*amplitude*pct;
				var y2  = y + (o+sq*pct)<<0;
				var opx = (y2*w + x)*4;
				shade = (o-lastO)*shading;
				d[px  ] = od[opx  ]+shade;
				d[px+1] = od[opx+1]+shade;
				d[px+2] = od[opx+2]+shade;
				d[px+3] = od[opx+3];
				lastO = o;
			}
		}
		ctx.putImageData(id,0,0);		
		// if ((++ct)%100 == 0) console.log( 1000 * ct / (new Date - st));
	},1000/fps);
}
