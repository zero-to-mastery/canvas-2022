'use strict'

let canvas = document.getElementById('indianFlag')
let c = canvas.getContext('2d')

c.fillStyle = '#FF9933'
c.fillRect(0,0,canvas.width, canvas.height/3)

c.fillStyle = "#FFFFFF";
c.fillRect(0, canvas.height/3, canvas.width ,canvas.height/3);

c.fillStyle = "#138808";
c.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);