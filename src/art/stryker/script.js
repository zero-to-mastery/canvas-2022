function draw() {
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    var w = canvas.width = window.innerWidth;
    var h = canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');

    let colors = ['#2de2e6','#035ee8','#f6019d','#d40078','#9700cc'];
    let min = 10;

    for(let i = 0; i < w; i++) {
      // circle
      ctx.beginPath();
      ctx.arc(Math.floor(Math.random() * w), 
      Math.floor(
        Math.random() * h), 
        Math.floor(Math.random() * (40 - min)) + min,
        0, 
        Math.PI * 2, 
        true
      );
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors[i % 5];
      ctx.stroke();
    }
  }
}