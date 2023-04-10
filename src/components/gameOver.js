export function showGameOver() {
    const display = document.querySelector('.gameover');
    const score = document.querySelector('.count');
    const gameOverScore = document.querySelector('.gameover__score-count');
    const restart = document.querySelector('.gameover__btn');
    restart.addEventListener('click', () => {
        location.reload();
    })

    gameOverScore.textContent = score.textContent;

    display.classList.add('gameover--active');
}
