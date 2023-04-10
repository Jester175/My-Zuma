import * as THREE from "three";
import { models } from "../loader";

let previousMousePosition = {
  x: 0,
  y: 0,
};

export function rotateFrog(event, camera, scene) {
  if (models.frog && scene) {
    const direction = new THREE.Vector3();

    camera.getWorldDirection(direction);

    const angle = Math.atan2(direction.x, direction.z);

    const rotationY = angle + scene.rotation.y;

    models.frog.rotation.y = rotationY;

    previousMousePosition = {
      x: event.offsetX,
      y: event.offsetY,
    };
  }
}