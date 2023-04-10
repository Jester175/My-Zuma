import * as THREE from "three";
import { models } from "../loader";
import { createFireBall } from "../fireball";
import { variable } from "../store/store";
import { playShootMusic } from "./sounds";
import { createRocketBall } from "../rocketBall";
import { createNuclearBall } from "../nuclearBall";
import { createColorBall } from "../colorBall";

export let fireball;

export function shootBall(event, scene) {
  //Z
  if (event.keyCode == 90) {
    variable.rocketBall = true;
  }
  //X
  if (event.keyCode == 88) {
    variable.nuclearBall = true;
  }
  //C
  if (event.keyCode == 67) {
    variable.colorBall = true;
  }

  if (event.keyCode === 32 && variable.shootLocker) {
    playShootMusic();
    variable.intersectLocker = true;
    scene.remove(fireball);
    selectBall();
    fireball.scale.set(0.02, 0.02, 0.02);
    fireball.position.copy(models.frog.position);
    scene.add(fireball);

    const direction = new THREE.Vector3();
    models.frog.getWorldDirection(direction);

    const speed = 1;

    const velocity = direction.multiplyScalar(speed);
    fireball.velocity = velocity;
    variable.shootLocker = false;
    setTimeout(() => {
      variable.shootLocker = true;
    }, 400);
  }
}

function selectBall() {
  if (variable.colorBall) {
    fireball = createColorBall();
    variable.colorBall = false;
  } else if (variable.nuclearBall) {
    variable.nuclearBall = false;
    fireball = createNuclearBall();
  } else if (variable.rocketBall) {
    variable.rocketBall = false;
    fireball = createRocketBall();
  } else {
    fireball = createFireBall();
  }
}

export function animateShootBall(scene) {
  if (fireball) {
    fireball.position.add(fireball.velocity);
    if (fireball.position.length() > 100) {
      scene.remove(fireball);
    }
  }
}
