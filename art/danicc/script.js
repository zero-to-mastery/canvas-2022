'use strict'

let canvas = document.getElementById('argFlagCanvas')
let context = canvas.getContext('2d')

const lightBlueColor = "#75ADE0"

context.fillStyle = lightBlueColor
context.fillRect(0,0,canvas.width, canvas.height/3)

context.fillStyle = "#FFFFFF";
context.fillRect(0, canvas.height/3, canvas.width ,canvas.height/3);

context.fillStyle = lightBlueColor;
context.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);

canvas.style.border = "1px solid black"