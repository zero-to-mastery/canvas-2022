//initial
  var w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  ctx = c.getContext('2d'),
  
  //parameters
  total = w,
  accelleration = .05,
  
  //afterinitial calculations
  size = w/total,
  occupation = w/total,
  repaintColor = 'rgba(0, 0, 0, .04)'
  colors = [],
  dots = [],
  dotsVel = [];

//setting the colors' hue
//and y level for all dots
var portion = 360/total;
for(var i = 0; i < total; ++i){
colors[i] = portion * i;

dots[i] = h;
dotsVel[i] = 10;
}

function anim(){
window.requestAnimationFrame(anim);

ctx.fillStyle = repaintColor;
ctx.fillRect(0, 0, w, h);

for(var i = 0; i < total; ++i){
  var currentY = dots[i] - 1;
  dots[i] += dotsVel[i] += accelleration;
  
  ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
  ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);
  
  if(dots[i] > h && Math.random() < .01){
    dots[i] = dotsVel[i] = 0;
  }
}
}

anim();
