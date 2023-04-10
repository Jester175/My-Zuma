import * as THREE from "three";

import Stats from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { rotateFrog } from "./actions/rotateFrog";
import { animateShootBall } from "./actions/shootBall";
import { animateSpawnBalls } from "./actions/spawnBalls";
import { checkInteresects } from "./actions/intersectsSphere";

export class SceneInit {
  constructor(canvasId) {
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    this.scene = new THREE.Scene();
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      this.nearPlane,
      this.farPlane
    );
    this.camera.position.set(1, 5, 11);

    const canvas = document.getElementById(this.canvasId);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    this.renderer.shadowMap.enabled = true;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    this.controls.mouseButtons.RIGHT = null;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.1;
    this.controls.enableDamping = true;
    this.controls.minDistance = 20;
    this.controls.maxDistance = 40;
    
    //FPS
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    // ambient light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);

    // directional light
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    this.directionalLight.position.set(1, 0.25, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);

    window.addEventListener("resize", () => this.onWindowResize(), false);
  }

  animate = (time) => {
    window.requestAnimationFrame(this.animate.bind(this));
    this.stats.update();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    rotateFrog(this.camera, this.scene);
    animateShootBall(this.scene);

    animateSpawnBalls(this.scene);

    checkInteresects(this.scene);
  };

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
