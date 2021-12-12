import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/slider/slider-main';

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({ buttons: '.next', page: '.page' });
  slider.render();

  const player = new VideoPlayer('.showup .play', '.overlay', '.close');
  player.init();
});
