import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import FROG from "../assets/models/frog.glb";
import ARCH from "../assets/models/arch.glb";

const models = {};

const managerLoader = new THREE.LoadingManager();
const gltfLoader = new GLTFLoader(managerLoader);

gltfLoader.load(FROG, (glb) => {
  const frog = glb.scene;
  frog.scale.set(2,2,2);
  frog.position.y = .4;
  models.frog = frog;
});

gltfLoader.load(ARCH, (glb) => {
  const arch = glb.scene;
  arch.scale.set(0.2, 0.3, 2);
  models.arch = arch;
});

export { managerLoader, models };
