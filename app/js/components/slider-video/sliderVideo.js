require('./slider-video.scss');

import owlCarousel from 'owl.carousel';

export function sliderVideo() {
  const owl = $('.owl-carousel-video');
  owl.owlCarousel({
    items: 1,
    lazyLoad: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    smartSpeed: 650,
  });

  owl.on('translate.owl.carousel', (e) => {
    $('.owl-item').each(function(i, node) {
      if ($(node).find('video').length) {
        $(node).find('video').get(0).pause();
      }
    });
  });

  owl.on('translated.owl.carousel', (e) => {
    if ($('.owl-item.active video').length) {
      $('.owl-item.active video').get(0).play();
    }
  });

  $('.owl-item .item').each(function(i, node) {
    const attr = $(node).data('videosrc');
    if (typeof attr !== typeof undefined && attr !== false) {
      const videosrc = $(this).attr('data-videosrc');
      $(this).prepend('<video muted><source src="'+videosrc+'" type="video/mp4"></video>');
    }
  });

  $('.owl-item.active video').attr('autoplay',true).attr('loop',true);
}
