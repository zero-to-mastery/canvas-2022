const charcter = document.getElementById('cter');
const charcontainer = charcter.getContext('2d');
const charwid = charcter.width = 623;
const charhit = charcter.height = 572;
const charimg = new Image();
charimg.src = "images/sprite.png";
const spritewid = 623 / 12;
const sprithit = 572 / 8;
let spriteX = 3;
let spriteY = 4;
let speedvar = 0;
function move() {
    charcontainer.clearRect(0, 0, charwid, charhit)
    charcontainer.drawImage(charimg, spriteX * spritewid, spriteY * sprithit, spritewid, sprithit, 0, 0, charwid, charhit);
    if (speedvar % 20 == 0) {
        spriteX++;
    }
    if (spriteX == 6) {
        spriteX = 3;
    }
    speedvar++;
    requestAnimationFrame(move)

}
move()