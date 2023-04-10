export const playBackgroundMusic = () => {
  const audio = document.querySelector('.zuma');
  audio.play();
  audio.volume = 0.1;
  audio.loop = true;
};
export const playShootMusic = () => {
  const audio = document.querySelector('.shoot');
  audio.play();
};
export const playBubblePopMusic = () => {
  const audio = document.querySelector('.bubble');
  audio.play();
};
