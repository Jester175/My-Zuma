import * as THREE from "three";

export function createRocketBall() {
  
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(16, 32, 32),
    new THREE.MeshStandardMaterial({
      color: 'grey',
    })
  );
  ball.name = `rocket`;
  ball.scale.set(0.02, 0.02, 0.02);

  return ball;
}
