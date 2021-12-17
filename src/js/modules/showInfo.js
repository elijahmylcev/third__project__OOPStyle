export default class ShowInfo {
  constructor(triggersSelector) {
    this.buttons = document.querySelectorAll(triggersSelector);
  }

  init() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const sibling = btn.closest('.module__info-show').nextElementSibling;
        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px';
      });
    });
  }
}
