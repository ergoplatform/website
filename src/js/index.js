import $ from 'jquery';

const dropDownFunc = (id) => {
  $(`#${id}`).toggle('show');
};

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown__button')) {
    $('.dropdown__menu').each(function () {
      $(this).hide('show');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  $('.dropdown .dropdown__button').each(function (e) {
    this.addEventListener('click', (e) => {
      dropDownFunc(e.target.dataset.targetId);
    });
  });

  $('.eg-navbar__trigger').click(() => {
    $('html').toggleClass('show-main-nav');
  });
});
