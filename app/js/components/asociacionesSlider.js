import owlCarousel from 'owl.carousel';

export function asociacionesSlider() {
  const owl = $('.owl-carousel-asociaciones');
  owl.owlCarousel({
    items: 1,
    loop: true,
    lazyLoad: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    smartSpeed: 650,
  });

  $('.asociations .triangle-slider-left.prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('.asociations .triangle-slider-right.next').click(function() {
    owl.trigger('next.owl.carousel');
  });
}
