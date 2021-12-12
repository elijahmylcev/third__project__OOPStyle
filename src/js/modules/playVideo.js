export default class VideoPlayer {
  constructor(triggers, overlay, close) {
    this.buttons = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = document.querySelector(close);
  }

  bindTriggers() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
        } else {
          const path = btn.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }

  bindCloseBtn() {
    // this.close.addEventListener('click', () => {
    //   this.overlay.style.display = 'none';
    //   this.player.pauseVideo();
    // });

    this.overlay.addEventListener('click', (e) => {
      if (e.target == document.querySelector('.video')) {
        return;
      }

      this.overlay.style.display = 'none';
      this.player.pauseVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
    });

    this.overlay.style.display = 'flex';
  }

  init() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindCloseBtn();
  }
}