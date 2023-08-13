export default class Collapse {
  constructor() {
    this.widget = document.querySelector('.widget');
    this.button = this.widget.querySelector('.btn');
    this.textConteiner = this.widget.querySelector('.text__conteiner');
  }

  init() {
    this.button.addEventListener('click', () => this.openCollapse());
  }

  openCollapse() {
    if (this.textConteiner.classList.contains('show')) {
      this.textConteiner.classList.remove('show');
    } else {
      this.textConteiner.classList.add('show');
    }
  }
}
