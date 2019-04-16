import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';

const dropDownFunc = (id) => {
  $(`#${id}`).parent('.dropdown').toggleClass('show');
};

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown__button')) {
    $('.dropdown').each(function () {
      $(this).removeClass('show');
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

  $('.tabs').tabs();
});
