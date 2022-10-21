'use strict';

let canvas = document.getElementById('japanFlag');
let c = canvas.getContext('2d');

c.fillStyle = '#FFFFFF'
c.fillRect(0,0,canvas.width,canvas.height)
c.beginPath();
c.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI, false);
c.fillStyle = '#BC002D'
c.fill();