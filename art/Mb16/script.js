var c = document.getElementById('canv');
var $ = c.getContext('2d');
var w = c.width = 550;
var h = c.height = 550;
var position = [w / 2, h / 2];
var spacing = 5;
var numw = w / spacing;
var numh = h / spacing;

var draw = function(p){
  $.fillStyle = "hsla(38,5%,12%,.90)";
  $.fillRect(0, 0, w, h);
  $.fillStyle = "hsla(38, 25%, 90%, 1)";
  $.strokeStyle = "hsla(38, 25%, 90%, 1)";
  for (var i = 0; i < numh; i++) 
    for (var j = 0; j < numw; j++) {
      var diagnalW = j * spacing + 
          (i % 2 ? 0 : spacing/ 2);
      var diagnalH = i * spacing;
      var arr = [position[0] - diagnalW, 
                 position[1] - diagnalH],
          wave = Math.sqrt(arr[0] * arr[0] + 
                           arr[1] * arr[1]),
          arr = [arr[0] / wave, arr[1] / wave],
          angle = 50*(Math.cos(p/360 - wave / 105) - 1);
      $.beginPath();
      $.arc(diagnalW+ arr[0] * angle, diagnalH + 
            arr[1] * angle, 2.8, 0, 2 * Math.PI, false);
      $.closePath();
      $.fill()
      for (var n = 0; n < 5; n++) {
        var tail = 50 * (Math.cos((p - 50 * n) / 
                   360 - wave / 105) - 1);
        $.beginPath();
        $.moveTo(diagnalW + arr[0] * angle, diagnalH + 
                 arr[1] * angle);
        $.lineWidth = 5 - n;
        $.lineTo(diagnalW + arr[0] * tail, diagnalH +                      arr[1] * tail);
        $.stroke()
      }
      
    }
    var t = "Momojit".split("")
    .join(String.fromCharCode(0x2004));
    $.font = "1.5em Courgette";
    $.fillStyle = 'hsla(38,5%,15%,1)';
    $.textBaseline = 'middle';
    $.fillText(t,(c.width - $.measureText(t).width)* 
               0.5, c.height * 0.485);
    var t1 = "Biswas".split("")
    .join(String.fromCharCode(0x2004));
    $.font = "2.5em Courgette";
    $.fillText(t1,(c.width-$.measureText(t1).width)*
               0.5, c.height * 0.545);
};
var anim = function(p){
  window.requestAnimationFrame(anim);
  draw(p);
};
anim();
