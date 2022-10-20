let canvas = document.getElementById('nigerianFlag')
let canva = canvas.getContext('2d')

canva.fillStyle = '#138808'
canva.fillRect(0,0,canvas.width, canvas.height/3)

canva.fillStyle = "#FFFFFF";
canva.fillRect(0, canvas.height/3, canvas.width ,canvas.height/3);

canva.fillStyle = "#138808";
canva.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);