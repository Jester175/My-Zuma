import * as THREE from "three";
import { balls } from "./spawnBalls";
import { fireball } from "./shootBall";
import { models } from "../loader";
import { variable } from "../store/store";
import { knockOutBall } from "./knockOutBall";

export function checkInteresects(scene) {
  if (fireball && variable.intersectLocker) {
    const raycaster = new THREE.Raycaster();

    const direction = fireball.velocity.clone().normalize();
    const rayOrigin = models.frog.position.clone();
    rayOrigin.y = 0;
    raycaster.set(rayOrigin, direction);

    const meshs = balls.map((item) => item.mesh);

    const intersects = raycaster.intersectObjects(meshs);
  

    if (intersects.length > 0) {
      variable.intersectLocker = false;
      const firstIntersection = intersects[0];
      knockOutBall(firstIntersection.object, balls, fireball, scene)
    }
    return null;
  }
}
