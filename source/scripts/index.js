/* в этот файл добавляет скрипты*/
const navList = document.querySelector('.header__nav-list');
const navBurger = document.querySelector('.user-menu__burger');


const onNavBurgerClick = () => {
  if (navList.classList.contains('header__nav-list--active')) {
    navList.classList.remove('header__nav-list--active');
    navBurger.classList.remove('user-menu__burger--active');
  } else {
    navList.classList.add('header__nav-list--active');
    navBurger.classList.add('user-menu__burger--active');
  }
};

const navBurgerInit = () => {
  if (navBurger) {
    navBurger.addEventListener('click', onNavBurgerClick);
  }
};

navBurgerInit();
