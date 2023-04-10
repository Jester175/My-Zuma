import { SceneInit } from "./components/scene";
import { managerLoader, models } from "./components/loader";
import { rotateFrog } from "./components/actions/rotateFrog";
import { shootBall } from "./components/actions/shootBall";
import { generateLevel } from "./components/levels";
import { playBackgroundMusic } from "./components/actions/sounds";
import { startTime } from "./components/timer";

const test = new SceneInit("MyCanvas");

managerLoader.onLoad = () => {
  test.init();
  test.animate();
  test.scene.add(models.frog);
  test.scene.add(models.arch);
  startTime(180);
  generateLevel(test.scene, localStorage.getItem("level"));
};

document.onkeydown =
  ("keydown",
  (e) => {
    if(e.keyCode == 77) playBackgroundMusic();
    shootBall(e, test.scene);
  });

document.addEventListener("mousemove", (e) => {
  rotateFrog(e, test.camera, test.scene);
});

document.querySelector(".dude").addEventListener("click", (e) => {
  localStorage.setItem("level", "3");
  location.reload();
});
document.querySelector(".face").addEventListener("click", (e) => {
  localStorage.setItem("level", "1");
  location.reload();
});
document.querySelector(".build").addEventListener("click", (e) => {
  localStorage.setItem("level", "2");
  location.reload();
});
