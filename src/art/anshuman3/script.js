const charcter = document.getElementById('character');
const charcontainer = charcter.getContext('2d');
const charwid = charcter.width = 623;
const charhit = charcter.height = 572;
const charimg = new Image();
charimg.src = "sprite.png";
const spritewid = 623 / 12;
const sprithit = 572 / 8;
let spriteX = 0;
let spriteY = 0;
let speedvar = 0;
function move() {
    charcontainer.clearRect(0, 0, charwid, charhit)
    charcontainer.drawImage(charimg, spriteX * spritewid, spriteY * sprithit, spritewid, sprithit, 0, 0, charwid, charhit);
    if (speedvar % 20 == 0) {
        spriteX++;
    }
    if (spriteX == 3) {
        spriteX = 0;
    }
    speedvar++;
    requestAnimationFrame(move)
}
move()
