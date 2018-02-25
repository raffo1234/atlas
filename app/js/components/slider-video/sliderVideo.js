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
    const videomp4 = $(node).data('videomp4');
    const videowebm = $(node).data('videowebm');
    if (typeof videomp4 !== typeof undefined && videomp4 !== false && typeof videowebm !== typeof undefined && videowebm !== false) {
      $(node).prepend('<video muted><source src="'+videomp4+'" type="video/mp4"><source src="'+videowebm+'" type="video/webm" /></video>');
    }
  });

  $('.owl-item.active video').attr('autoplay',true).attr('loop',true);
}
