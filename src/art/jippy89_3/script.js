function start () {
  const canvas = document.getElementById('canvas');
  
  draw(canvas)
}

function draw(canvas) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
  }
}
