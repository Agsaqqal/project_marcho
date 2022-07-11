// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./files/functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./files/modules.js";
// =============================================
// ПИШИ ТУТ !!!
$('.shop__filter-btn').on('click', function(){
$('.shop__filters').slideToggle();
});
const b = document.querySelector(".burger")
b.addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("menu-active")
})
$('.blog-page__slider').slick({
  prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px"height="14px"viewBox="0 0 7 14" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 5.25 12.25 C 5.027344 12.25 4.800781 12.164062 4.632812 11.992188 L 0.257812 7.617188 C -0.0859375 7.277344 -0.0859375 6.722656 0.257812 6.382812 L 4.632812 2.007812 C 4.972656 1.664062 5.527344 1.664062 5.867188 2.007812 C 6.210938 2.347656 6.210938 2.902344 5.867188 3.242188 L 2.113281 7 L 5.871094 10.757812 C 6.210938 11.097656 6.210938 11.652344 5.871094 11.996094 C 5.699219 12.164062 5.472656 12.25 5.25 12.25 Z M 5.25 12.25 "/></g></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 1.75 12.25 C 1.527344 12.25 1.300781 12.164062 1.132812 11.992188 C 0.789062 11.652344 0.789062 11.097656 1.132812 10.757812 L 4.890625 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.367188 2.003906 L 6.742188 6.378906 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.617188 L 2.367188 11.992188 C 2.199219 12.164062 1.972656 12.25 1.75 12.25 Z M 1.75 12.25 "/></g></svg></button>',
  infinite: false,
});
$('.product-slide__thumb').slick({
  asNavFor: '.product-slide__big',
   focusOnSelect: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   vertical: true,
   draggable: false,
});
$('.product-slide__big').slick({
  asNavFor: '.product-slide__thumb',
  draggable: false,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 1051,
      setting: {
        draggable: true,
      }
    }
  ]
});
$('.product-tabs__top-item').on('click', function(e){
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  $(this).addClass('product-tabs__top-item--active');

  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');

});
$('.shop-content__filter-btn').on('click', function () {
  $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
  $(this).addClass('shop-content__filter-btn--active');
});

$('.button-list').on('click', function () {
  $('.product__card-item').addClass('product__card--list');
});

$('.button-grid').on('click', function () {
  $('.product__card-item').removeClass('product__card--list');
});

$(function () {
  $('.select-style, .product-one__info-num').styler();
});

$('.slider__inner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});

$(function () {
  $(".star").rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: "#A0A0A0",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="18px" height="17px" viewBox="0 0 18 17" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 11.914062 4.992188 L 16.402344 5.695312 C 16.773438 5.75 17.085938 6.03125 17.207031 6.410156 C 17.324219 6.796875 17.226562 7.214844 16.960938 7.5 L 13.703125 10.894531 L 14.472656 15.761719 C 14.535156 16.160156 14.382812 16.566406 14.070312 16.800781 C 13.757812 17.035156 13.351562 17.066406 13.015625 16.878906 L 9.003906 14.601562 L 4.992188 16.878906 C 4.65625 17.066406 4.246094 17.035156 3.9375 16.800781 C 3.628906 16.566406 3.472656 16.160156 3.539062 15.761719 L 4.304688 10.894531 L 1.050781 7.5 C 0.78125 7.214844 0.683594 6.796875 0.804688 6.410156 C 0.921875 6.03125 1.230469 5.75 1.605469 5.695312 L 6.09375 4.992188 L 8.105469 0.597656 C 8.273438 0.230469 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.230469 9.902344 0.597656 Z M 11.914062 4.992188 " /></g></svg>',
  });

  $(".shop__price-input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.shop__price-min').text(data.from);
      $('.shop__price-max').text(data.to);
    },
    onChange: function (data) {
      $('.shop__price-min').text(data.from);
      $('.shop__price-max').text(data.to);
    },
  });
});

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__clock-days');
  const hoursSpan = clock.querySelector('.promo__clock-hours');
  const minutesSpan = clock.querySelector('.promo__clock-minutes');
  const secondsSpan = clock.querySelector('.promo__clock-seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);

