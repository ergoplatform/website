import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';
import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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

  $('.timeline-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.timeline-slider',
    centerMode: false,
    focusOnSelect: true,
    mobileFirst: false,
    arrows: false,
    variableWidth: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.timeline-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    fade: true,
    asNavFor: '.timeline-nav',
    cssEase: 'ease',
    mobileFirst: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        },
      },
    ],
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
});
