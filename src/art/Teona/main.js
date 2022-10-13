var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var chinese = "｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ";

var latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,./<>:;[]=+-1234567890";

latin = latin.split("");

chinese = chinese.split("");

var font_size = 14;
var columns = c.width/font_size; 
var drops = [];
for(var x = 0; x < columns; x++)
drops[x] = 1; 

function draw(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
    
    for(var i = 0; i < drops.length; i++){
        var rand = Math.random() * (chinese.length+latin.length);
        if(rand < 8)
        var text = latin[Math.floor(Math.random()*latin.length)];
        else
        var text = chinese[Math.floor(Math.random()*chinese.length)];

        ctx.fillText(text, i*font_size, drops[i]*font_size);

        if(drops[i]*font_size > c.height && Math.random() > 0.975)drops[i] = 0;

drops[i]++;
}}

setInterval(draw, 33);