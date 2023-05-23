const THREE = window.THREE;

const WALL_SIZE = 40;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function makeWall(lineCount, color, pointsFn) {
  const material = new THREE.LineBasicMaterial({ color });
  const wall = new THREE.Mesh();
  for(let i = 0; i < lineCount; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints(pointsFn(i));
    wall.add(new THREE.Line(geometry, material));
  }
  return wall;
}

const floor = makeWall(WALL_SIZE*2, 0x8A2BE2, i => [
    new THREE.Vector3(i, 0, 0),
    new THREE.Vector3(i, 0, WALL_SIZE*2),
])
scene.add(floor);

const leftWall = makeWall(WALL_SIZE, 0x7FFF00, i => [
    new THREE.Vector3(0, i, 0),
    new THREE.Vector3(0, i, WALL_SIZE*2),
])
scene.add(leftWall);

const backWall = makeWall(WALL_SIZE, 0xFF7F50, i => [
    new THREE.Vector3(0, i, 0),
    new THREE.Vector3(WALL_SIZE*2, i, 0),
])
scene.add(backWall);

camera.position.x = WALL_SIZE/3;
camera.position.y = WALL_SIZE/3;
camera.position.z = WALL_SIZE/3;

const PI = 3.14159;

function addToVector(dest, vec) {
  dest.x += vec.x;
  dest.y += vec.y;
  dest.z += vec.z;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getCameraAnimation() {
  
  const newRotation = {
    x: randomNumber(0, -0.5 * PI),
    y: randomNumber(0, 0.5 * PI),
    x: randomNumber(-0.15 * PI, -0.15 * PI),
    
    z: Math.random() * 0.3 * PI - 0.15,
  };
  const newPosition = {
    x: randomNumber(WALL_SIZE/4, WALL_SIZE/3),
    y: randomNumber(WALL_SIZE/6, WALL_SIZE/3),
    z: randomNumber(WALL_SIZE/4, WALL_SIZE/3),
  };
  const newPY = Math.random() * (WALL_SIZE/4 - 2) + 2;

  const animationFrames = 240;
  return {
    animationFrames,
    rotationIncrement: {
      x: (newRotation.x - camera.rotation.x) / animationFrames,
      y: (newRotation.y - camera.rotation.y) / animationFrames,
      z: (newRotation.z - camera.rotation.z) / animationFrames,
    },
    positionIncrement: {
      x: (newPosition.x - camera.position.x) / animationFrames,
      y: (newPosition.y - camera.position.y) / animationFrames,
      z: (newPosition.z - camera.position.z) / animationFrames,
    },
  };
}

let animationFrames = 0;
let rotationIncrement = {x: 0, y: 0, z: 0};
let positionIncrement = {x: 0, y: 0, z: 0};
const animate = function () {
  requestAnimationFrame(animate);

  if (animationFrames === 0) {
      ({animationFrames, rotationIncrement, positionIncrement} = getCameraAnimation());
  }

  addToVector(camera.rotation, rotationIncrement);
  addToVector(camera.position, positionIncrement);
  animationFrames--;

  renderer.render(scene, camera);
};

animate();
