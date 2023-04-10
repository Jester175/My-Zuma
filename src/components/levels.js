import * as THREE from "three";
import { models } from "./loader";
import { createPlatfrom } from "./platform";

let curve, texture;

function createLevel1() {
  curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-8, 0, 0),
      new THREE.Vector3(-6, 0, 4),
      new THREE.Vector3(-3, 0, 6),
      new THREE.Vector3(0, 0, 8),
      new THREE.Vector3(3, 0, 6),
      new THREE.Vector3(6, 0, 4),
      new THREE.Vector3(8, 0, 0),
      new THREE.Vector3(6, 0, -4),
      new THREE.Vector3(3, 0, -6),
      new THREE.Vector3(0, 0, -8),
      new THREE.Vector3(-3, 0, -6),
      new THREE.Vector3(-6, 0, -4),
      new THREE.Vector3(-8, 0, 0),
    ],
    false
  );
  texture = "level1";
  models.arch.rotation.y = Math.PI * 2;
  models.arch.position.set(-7.7, -.4, 0);
}
function createLevel2() {
  curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-10, 0, 10),
      new THREE.Vector3(0, 0, -10),
      new THREE.Vector3(12, 0, 12),
      new THREE.Vector3(-11, 0, 11),
      new THREE.Vector3(-10, 0, 10),
    ],
    false
  );
  texture = "level2";
  models.arch.position.set(-10.1, -.4, 10);
  models.arch.rotation.y = Math.PI * .83;
}
function createLevel3() {
  const points = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-20, 0, 0),
      new THREE.Vector3(-10, 0, 20),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(10, 0, 20),
      new THREE.Vector3(20, 0, 0),
    ],
    false
  );

  const curvePoints = points.getPoints(50);
  const spiralCurvePoints = [];

  for (let i = 0; i < curvePoints.length; i++) {
    const point = curvePoints[i];
    const spiralPoint = new THREE.Vector3(
      point.x * Math.cos(point.x),
      point.y,
      point.z * Math.sin(point.z)
    );
    spiralCurvePoints.push(spiralPoint);
  }

  curve = new THREE.CatmullRomCurve3(spiralCurvePoints, false);
  models.arch.position.set(-8, -0.4, 0);
  models.arch.rotation.y = Math.PI * 1.5;
  texture = "level3";
}

export function generateLevel(scene, LEVEL_NUMBER) {
  switch (+LEVEL_NUMBER) {
    case 2:
      createLevel2();
      scene.add(createPlatfrom(texture));
      break;
    case 3:
      createLevel3();
      scene.add(createPlatfrom(texture));
      break;
    default:
      createLevel1();
      scene.add(createPlatfrom(texture));
      break;
  }
}

export { curve };
