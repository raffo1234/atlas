require('../scss/app.scss');

import $ from 'jquery';
import { sliderOneFour } from './sliderOneFour';
import { sliderVideo } from './components/slider-video/sliderVideo';

const slider = () => {
  if (!$('.slider-opacity').length) return false;

  const DELAY_TRANSITION = 4000;
  const sliderContainer = $('.slider-opacity');
  const slides = sliderContainer.find('.slider li');
  const slidesNav = sliderContainer.find('.slider-nav li');
  const next = sliderContainer.find('.next');
  const prev = sliderContainer.find('.prev');
  let currentSlide = 0;

  const goToSlide = (n) => {
    slides[currentSlide].className = '';
    if ($('.slider-nav').length) slidesNav[currentSlide].className = '';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'active';
    if ($('.slider-nav').length) slidesNav[currentSlide].className = 'active';
  }

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  }

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  }

  let slideInterval = setInterval(nextSlide, DELAY_TRANSITION);

  const pauseSlideShow = () => {
    clearInterval(slideInterval);
  }

  const restartSlideShow = () => {
    slideInterval = setInterval(nextSlide, DELAY_TRANSITION);
  }

  for(var i = 0; i < next.length; i++) {
    next[i].addEventListener('click', function(event) {
      // pauseSlideShow();
      nextSlide();
      // restartSlideShow();
    });

    prev[i].addEventListener('click', function(event) {
      // pauseSlideShow();
      prevSlide();
      // restartSlideShow();
    });
  }

  slidesNav.on('click', function(event) {
    const idx = $(event.currentTarget).index();
    pauseSlideShow();
    goToSlide(idx);
    // restartSlideShow();
  });
}

const responsiveMenu = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('.responsive-menu');
  const btnOpenMenu = document.querySelector('.btn-hamburger');
  const btnCloseMenu = menu.querySelector('.btn-close');

  btnOpenMenu.addEventListener('click', function(e) {
    body.classList.add('overflow');
    menu.classList.add('active');
  });

  btnCloseMenu.addEventListener('click', function(e) {
    body.classList.remove('overflow');
    menu.classList.remove('active');
  });
}

const openModal = () => {
  const modalEle = $('.modal');
  modalEle.addClass('active')  ;
  $('body').addClass('modal-opened');
}

const closeModal = () => {
  const modalEle = $('.modal');
  modalEle.removeClass('active')  ;
  $('body').removeClass('modal-opened');
}

$('.modal-close').on('click', function() {
  closeModal();
});

const scrollingLoad = () => {
  if (!$('.scrolling-load').length) return false;

  const DELAY_TIME = 100;
  let wrapper = $('.scrolling-load');
  let items = wrapper.find('article');
  let total = items.length;
  let n = 0;
  let page = 0;
  let appearingFinished = true;

  const appear = (n, items) => {
    appearingFinished = false;
    setTimeout(() => {
      if (n >= total) {
        appearingFinished = true;
        return false;
      }
      items.eq(n).addClass('active');
      appear(n + 1, items);
    }, DELAY_TIME);
  }

  appear(n, items);

  $(window).scroll(function() {
    if (!appearingFinished) return false;

    if ($(window).scrollTop() == $(document).height() - $(window).height()) {

      $.ajax({
          type: 'post',
          url: 'embalajes.php',
          data: { currentPage: n++ }
      })
      .done(function(response) {
        const responseLength = response.length;
        let html = '';
        response.map(function(n, i) {
          html += '<article><img src="'+ n.imageSrc +'" alt="'+ n.imageAlt +'"></article>';
        });
        wrapper.append(html);
        items = wrapper.find('article');
        appear(total, items);
        total = total + responseLength;
      })
      .fail(function(data) {
        console.log(data);
      });
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  slider();
  responsiveMenu();
  scrollingLoad();
  sliderOneFour();
  sliderVideo();
});
