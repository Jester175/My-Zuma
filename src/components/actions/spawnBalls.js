import * as THREE from "three";
import { createBall } from "../balls";
import { curve } from "../levels";

export const balls = [];
let index = 0;

export function addBall(scene) {
  const ball = createBall();
  ball.position.copy(curve.points[0]);
  ball.index = index;
  scene.add(ball);

  const ballObject = {
    mesh: ball,
    position: 0,
    speed: 0.04, // in units per second
  };
  index++;
  balls.push(ballObject);
}

let timer = 0;
const interval = 1; // in seconds
const clock = new THREE.Clock();

export function animateSpawnBalls(scene) {
  const deltaTime = clock.getDelta();
  timer += deltaTime;
  if (timer >= interval) {
    addBall(scene);
    timer = 0;
  }

  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    ball.position += ball.speed * deltaTime;
    if (ball.position >= 1) {
      scene.remove(ball.mesh);
      balls.splice(i, 1);
      recalculateBallPositions(curve, balls);
      i--;
      continue;
    }
    ball.mesh.position.copy(curve.getPointAt(ball.position));
  }
}

function recalculateBallPositions(curve, balls) {
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    ball.mesh.position.copy(curve.getPointAt(ball.position));
  }
}
