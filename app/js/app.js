require('../scss/app.scss');

import { customSlider } from './components/customSlider';
import { sliderOneFour } from './components/sliderOneFour';
import { sliderVideo } from './components/slider-video/sliderVideo';
import { formValidation } from './components/formValidation';
import { scrollingLoad } from './components/scrollingLoad';
import { responsiveMenu } from './components/responsiveMenu';

document.addEventListener('DOMContentLoaded', () => {
  customSlider();
  responsiveMenu();
  scrollingLoad();
  sliderOneFour();
  sliderVideo();
  formValidation();
  scrollingLoad();
  responsiveMenu();
});
