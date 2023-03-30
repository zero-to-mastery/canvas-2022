'use strict';
const canvas = document.querySelector('canvas');
const body = document.querySelector('body');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9PQX8Z2vjE58P5Wb0oOBZScrSnt-OnkT8Ev3ArXLfgMvZ3jRPgJ4zQTPdLCNhbmrt3o&usqp=CAU";
const flake = new Image();
flake.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7BD0nVYze_rHyh3Aks__GBhl0LnCLsBDwQ&usqp=CAU";

img.onload = () => {
    console.log('Image loaded successfully');
    ctx.drawImage(img, 0, 0, 500, 500);
};

img.onerror = (error) => {
    console.error('Error loading image:', error);
};

body.addEventListener('click', () => {

});

