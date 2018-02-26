export function customSlider() {
  if (!$('.slider-opacity').length) return false;

  const DELAY_TRANSITION = 10000;
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

  // let slideInterval = setInterval(nextSlide, DELAY_TRANSITION);

  const pauseSlideShow = () => {
    // clearInterval(slideInterval);
  }

  const restartSlideShow = () => {
    // slideInterval = setInterval(nextSlide, DELAY_TRANSITION);
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
    // pauseSlideShow();
    goToSlide(idx);
    // restartSlideShow();
  });
}
