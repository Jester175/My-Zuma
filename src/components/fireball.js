import * as THREE from "three";

const color = ["red", "yellow", "green", "purple", "orange", "blue"];
let lastNum = 0;

export function createFireBall() {
  let num = randomNum();
  while (num === lastNum) {
    num = randomNum();
  }

  lastNum = num;
  const fireball = new THREE.Mesh(
    new THREE.SphereGeometry(16, 32, 32),
    new THREE.MeshStandardMaterial({
      color: color[num],
    })
  );

  fireball.name = color[num];
  fireball.scale.set(0.02, 0.02, 0.02);

  return fireball;
}

function randomNum() {
  return Math.floor(Math.random() * 6);
}
