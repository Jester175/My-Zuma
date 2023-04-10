import { showGameOver } from "./gameOver";

let secs;
let timer;
export function startTime(seconds) {
  secs = seconds;
  document.querySelector(".tic").textContent = secs;
  timer = setInterval(tick, 1000);
}

function tick() {
  if (secs > 0) {
    document.querySelector(".tic").textContent = --secs;
  } else {
    clearInterval(timer);
    showGameOver();
  }
}
