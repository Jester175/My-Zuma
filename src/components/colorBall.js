import * as THREE from "three";

const color = ["red", "yellow", "green", "purple", 'orange', 'blue'];

export function createColorBall() {
  const num = randomNum();
  
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(16, 32, 32),
    new THREE.MeshStandardMaterial({
      color: '#52ebff',
    })
  );
  ball.name = `ball-${color[num]}`;
  ball.scale.set(0.02, 0.02, 0.02);

  return ball;
}

function randomNum(){
  return Math.floor(Math.random() * 6);
}
