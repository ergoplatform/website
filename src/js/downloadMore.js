export class Downloader {
  constructor(id, index) {
    this.id = id;
    this.currentIndex = index;
    this.itemsLength = document.querySelectorAll(`.${id}__post`).length;
  }

  showNext(quantity, classes) {
    if (quantity === 0) {
      return;
    }

    const nextIndex = (this.currentIndex + quantity) < this.itemsLength
      ? this.currentIndex + quantity
      : this.itemsLength;

    for (let i = this.currentIndex; i < nextIndex; i += 1) {
      document.querySelectorAll(`.${this.id}__post`)[i].classList.remove(classes);
    }

    return new Downloader(this.id, nextIndex);
  }
}

export const hideAllPosts = (id, quantity) => {
  document.querySelectorAll(`.${id} > .${id}__post`)
    .forEach(
      (x, key) => (key < quantity ? x.classList.add('visible-hidden') : x.classList.add('d-none')),
    );
};

export const downloader = (id, step) => {
  hideAllPosts(id, step);
  let currentNews = new Downloader(`${id}`, 0).showNext(step, 'visible-hidden');

  if (currentNews.currentIndex !== currentNews.itemsLength) {
    document.querySelector(`.${id}-button`).classList.remove('d-none');
    document.querySelector(`.${id}-button`).addEventListener('click', (e) => {
      currentNews = currentNews.showNext(step, 'd-none');
      if (currentNews.currentIndex === currentNews.itemsLength) {
        e.target.classList.add('d-none');
      }
    });
  }
};
