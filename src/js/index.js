import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';
import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { downloader, hideAllPosts } from './downloadMore';


const dropDownFunc = (id) => {
  $(`#${id}`).parent('.dropdown').toggleClass('show');
};

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0
    ? document.getSelection().getRangeAt(0)
    : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
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
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.timeline-slider',
    centerMode: false,
    focusOnSelect: true,
    mobileFirst: false,
    arrows: false,
    variableWidth: true,
    dots: false,
    infinite: false,
  });

  $('.timeline-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    fade: true,
    infinite: false,
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


  const allPanels = $('.eg-accordion > .eg-accordion__item').hide();
  const allTitles = $('.eg-accordion .eg-accordion__title');
  $('.eg-accordion .eg-accordion__title span').each(function () {
    this.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  let activeAccordion = null;

  $('.eg-accordion .eg-accordion__title').click(function accordionClicl(e) {
    if (activeAccordion === e.target) {
      return false;
    }

    allTitles.removeClass('active');
    allPanels.slideUp().removeClass('active');

    activeAccordion = e.target;

    $(this).addClass('active').parent('div').next()
      .slideDown()
      .addClass('active');
    return false;
  });

  if (document.getElementsByClassName('download').length > 0) {
    downloader('download', 6);
  }

  if (document.getElementsByClassName('related').length > 0) {
    downloader('related', 3);
  }

  if (document.getElementsByClassName('copy-link').length > 0) {
    $('.copy-link').click((e) => {
      e.preventDefault();
      copyToClipboard(e.currentTarget.href);
    });
  }
});
