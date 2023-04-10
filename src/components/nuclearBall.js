import * as THREE from "three";

export function createNuclearBall() {
  
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(16, 32, 32),
    new THREE.MeshStandardMaterial({
      color: '#000',
    })
  );
  ball.name = `nuclear`;
  ball.scale.set(0.02, 0.02, 0.02);

  return ball;
}
