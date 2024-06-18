/* в этот файл добавляет скрипты*/
import {
  navBurgerInit
} from './nav';
import {
  updateSlider
} from './slaider';
import {
  rangeSliderInit
} from './rage';

navBurgerInit();
updateSlider();

const init = () => {
  rangeSliderInit();
};

window.addEventListener('DOMContentLoaded', init);

const docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  (el) => {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
