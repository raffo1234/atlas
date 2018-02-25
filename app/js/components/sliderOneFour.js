import slick from 'slick-carousel';

export function sliderOneFour() {
  $('.slick-carousel-1-item').slick({
    fade: true,
    arrows: false,
    asNavFor: '.slick-carousel-4-items'
  });

  $('.slick-carousel-4-items').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.slick-carousel-1-item',
    focusOnSelect: true,
    infinite: false,
  });
}
