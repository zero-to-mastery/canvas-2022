// javascript
const starEl = document.getElementById("sky")
function createStars(count) {
    
    let html = "";
    
    for(let i = 0; i < count; i++) {
        
        html += `<canvas class="star" style="left: ${generateRandom()}%; top: ${generateRandom()}%;"></canvas>`;
    }
    
    document.body.insertAdjacentHTML('afterbegin', html);
}

function generateRandom() {
    const num = Math.floor(Math.random() * 100);
    console.log(num);
    return num;
}

createStars(1000);