import { playBubblePopMusic } from "./sounds";

export function knockOutBall(currentBall, balls, fireball, scene) {
  const score = document.querySelector(".count");

  if (fireball.name === "nuclear") {
    balls.forEach((ball) => {
      score.textContent = +score.textContent + 10;
      scene.remove(ball.mesh);
    });
    scene.remove(fireball);
  }

  if (fireball.name === "rocket") {
    let currentIndex = currentBall.index;
    let count = currentIndex + 4
    balls.forEach((ball) => {    
      if(ball.mesh.index === currentIndex && currentIndex < count){
        scene.remove(ball.mesh);
        score.textContent = +score.textContent + 10;
        currentIndex++;
      }
    });
    scene.remove(fireball);
  }

  if (fireball.name.includes('ball-')) {
    balls.forEach(ball => {
      if(ball.mesh.name === fireball.name.slice(5)){
        scene.remove(ball.mesh);
        score.textContent = +score.textContent + 10;
      }
    })
    scene.remove(fireball);
  }

  if (currentBall.name === fireball.name) {
    playBubblePopMusic();
    score.textContent = +score.textContent + 10;
    scene.remove(currentBall);
    scene.remove(fireball);
  }
}
