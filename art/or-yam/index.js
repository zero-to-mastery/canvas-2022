const LETTER_OFFSET = 15;
const ADD_LETTER_INTERVAL = 50;

const shadowColor = 'rgba(0, 0, 0, 0.1)';
const textColor = '#0050ff';
const font = '32px monospace';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const lettersCount = Math.ceil(window.innerWidth / LETTER_OFFSET);

const letters = Array.from(Array(lettersCount)).map((_, index) => ({
  x: index * LETTER_OFFSET,
  y: Math.ceil(Math.random() * 60) * -LETTER_OFFSET
}));

const addLetter = () => {
  ctx.fillStyle = shadowColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  letters.forEach(letter => {
    const text = String.fromCharCode(Math.random() * 100);
    if (letter.y > canvas.height) {
      letter.y = -LETTER_OFFSET;
    }
    letter.y += LETTER_OFFSET;
    ctx.font = font;
    ctx.fillStyle = textColor;
    ctx.fillText(text, letter.x, letter.y);
  });
};

setInterval(addLetter, ADD_LETTER_INTERVAL);
