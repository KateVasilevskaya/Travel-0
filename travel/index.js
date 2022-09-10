const a =
  "Максимальная оценка за задание 100 баллов\n" +
  "Вёрстка валидная +10\n\n" +
  "Вёрстка семантическая +20\n" +
  "В коде странице присутствуют следующие элементы header, main, footer +3\n" +
  "четыре элемента section +3\n" +
  "только один заголовок h1 +3\n" +
  "три заголовка h2 \n" +
  "один элемент nav (панель навигации) +3\n" +
  "два списка ul> li> a  +3\n" +
  "четыре кнопки button +2\n\n" +
  "Вёрстка соответствует макету +48\n" +
  "блок header +6\n" +
  "секция preview +9\n" +
  "секция steps +9\n" +
  "секция destinations +9\n" +
  "секция stories +9\n" +
  "блок footer +6\n\n" +
  "Требования к css + 12\n" +
  "используются флексы или гриды +2\n" +
  "при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n" +
  "фоновый цвет тянется на всю ширину страницы +2\n" +
  "иконки добавлены в формате .svg. SVG +2\n" +
  "изображения добавлены в формате .jpg +2\n" +
  "есть favicon +2\n" +
  "Интерактивность, реализуемая через css +20\n" +
  "плавная прокрутка по якорям +5\n" +
  "иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса+5\n" +
  "интерактивность  +5\n" +
  "обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n\n";

console.log(a);

const burgerbutton = document.querySelector(".burger");
const menu = document.querySelector(".header_list");

function toggleMenu() {
  const headerNav = document.querySelector(".header_list");
  const burger = document.querySelector(".burger");

  headerNav.classList.toggle("open");
  burger.classList.toggle("burger_open");
}

function closeMenu() {
  const headerNav = document.querySelector(".header_list");
  const burger = document.querySelector(".burger");

  headerNav.classList.remove("open");
  burger.classList.remove("burger_open");
}

function haldleBurgerClick(event) {
  event.stopPropagation();
  if (event.target.matches(".burger-btn")) {
    toggleMenu();
  }
}

function haldleMenuClick(event) {
  event.stopPropagation();
  const target = event.target;

  if (target.matches(".header_link")) {
    closeMenu(event);
  }
}

burgerbutton.addEventListener("click", haldleBurgerClick);
menu.addEventListener("click", haldleMenuClick);
document.addEventListener("click", closeMenu);

const b =
  "Максимальная оценка за задание 75 баллов\n" +
  "Вёрстка соответствует макету. Ширина экрана 390px +48 \n" +
  "Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n" +
  "На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n";

console.log(b);

const popupContents = document.querySelectorAll(".popup_content");
const login = document.getElementById("Login_heder");
const popup = document.querySelector(".pop_up");
const registerButton = document.querySelector(".button_register");
const accountButton = document.querySelector(".button_account");

function togglePopupContent() {
  popupContents.forEach((elem) => {
    elem.classList.toggle("popup_visible");
  });
}
registerButton.addEventListener("click", togglePopupContent);

login.addEventListener("click", (event) => {
  event.preventDefault();
  togglePopupState();
});

accountButton.addEventListener("click", (event) => {
  event.preventDefault();
  togglePopupState();
});

function togglePopupState() {
  popup.classList.toggle("hidden");
}

function popupClickHandler(event) {
  if (event.target.matches(".pop_up")) {
    togglePopupState();
    popupContents[0].classList.remove("popup_visible");
    popupContents[1].classList.add("popup_visible");
  }
}

popup.addEventListener("click", popupClickHandler);

function myFunction() {
  alert(
    document.querySelector(".input_text").value +
      " " +
      document.querySelector(".input_text1").value
  );
}

const sliderContainer = document.querySelector(".desy_items");
const slider = document.querySelector(".items_destinations");
const slads = document.querySelectorAll(".desy_item");
const input = document.querySelectorAll(".input_destinations");

slads.forEach((elem) => {
  elem.addEventListener("click", changeSlide);
});

const setPositonOne = (root) => {
  root.style.setProperty("--ofset-left", "0%");
  root.style.setProperty("--ofset-translateX", "0%");

  changeRadio("1-contro");
};

const setPositonTwo = (root) => {
  root.style.setProperty("--ofset-left", "50%");
  root.style.setProperty("--ofset-translateX", "-50%");

  changeRadio("2-contro");
};

const setPositonThree = (root) => {
  const sladerWidth = getComputedStyle(slider).width;
  const sladerContenerWidts = getComputedStyle(sliderContainer).width;

  root.style.setProperty(
    "--ofset-left",
    `${parseFloat(sladerContenerWidts) - parseFloat(sladerWidth)}px`
  );
  root.style.setProperty("--ofset-translateX", "0%");

  changeRadio("3-contro");
};

const sliderHandlerMappers = {
  1: setPositonOne,
  2: setPositonTwo,
  3: setPositonThree,
};

function changeSlide(event) {
  const { id } = event.currentTarget;
  const root = document.documentElement;
  slider.classList.add("transition");

  const handler = sliderHandlerMappers[parseFloat(id)];

  handler(root);
}

function changeRadio(radioId) {
  for (var i = 0; i < input.length; i++) {
    let radio = input[i];
    if (radio.id === radioId) {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  }
}

const left = document.querySelector(".button_left");

left.addEventListener("click", sladeToLeft);

function sladeToLeft() {
  const root = document.documentElement;
  slider.classList.add("transition");
  const currentLeft = getSladerLeftValue();
  console.log(currentLeft);
  root.style.setProperty("--ofset-left", `${currentLeft + 100}%`);
  updateArrowsStyle();
}

const right = document.querySelector(".button_right");

right.addEventListener("click", sladeToRight);

function updateArrowsStyle() {
  const currentleft = getSladerLeftValue();
  const arrows = document.querySelectorAll(".arrow_spain");

  arrows.forEach((arrow) => arrow.classList.remove("arrow_disabled"));

  const disabledArrow =
    currentleft === -200 ? right : currentleft === 0 ? left : null;

  if (disabledArrow) {
    disabledArrow.classList.add("arrow_disabled");
  }

  const currentSlide = currentleft === -200 ? 3 : currentleft === 0 ? 1 : 2;
  changeRadio(`${currentSlide}-contro`);
}

function sladeToRight() {
  const root = document.documentElement;
  slider.classList.add("transition");
  const currentLeft = getSladerLeftValue();
  root.style.setProperty("--ofset-left", `${currentLeft - 100}%`);
  updateArrowsStyle();
}

function getSladerLeftValue() {
  return parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--ofset-left")
  );
}

window.addEventListener("load", updateArrowsStyle);

const f =
  "Максимальная оценка за задание 100 баллов\n" +
  "на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели  + 20\n" +
  'Три точки внизу отображают "номер слайда" +20\n' +
  "Анимации плавного перемещения для слайдера +10\n" +
  "логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n" +
  "логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными  +25\n" +
  "Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету +25\n";
console.log(f);
