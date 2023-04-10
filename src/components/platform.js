import * as THREE from "three";
import level1 from "../assets/texture/level1.jpg";
import level2 from "../assets/texture/level2.jpg";
import level3 from "../assets/texture/level3.png";

let levelTexture;
const loaderTexture = new THREE.TextureLoader();

export function createPlatfrom(texture) {
  selectTexture(texture);
  const platform = new THREE.Mesh(
    new THREE.BoxGeometry(50, 50),
    new THREE.MeshStandardMaterial({
      map: levelTexture,
      side: THREE.DoubleSide,
    })
  );

  platform.rotation.x = Math.PI / 2;
  platform.position.y = -0.9;
  return platform;
}

function selectTexture(texture) {
  switch (texture) {
    case "level1":
      levelTexture = loaderTexture.load(level1);
      break;
    case "level2":
      levelTexture = loaderTexture.load(level2);
      break;
    case "level3":
      levelTexture = loaderTexture.load(level3);
      break;
    default:
      levelTexture = loaderTexture.load(level1);
      break;
  }
}
