// Всплытие событий-&&&&&&&&&&&&&&&&&&&&&&&&&&&& 1

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

// Свойство event.target-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 2

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// Прекращение всплытия stopPropagation()-&&&&&&&&&&&&&&&&&&&&&&& 3

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// Если необходимо полностью остановить обработку события, 
// используется метод stopImmediatePropagation()

// event.target-ПАЛИТРА ЦВЕТОВ-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 4

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i+=1) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// 02-delegation.html-&&&&&&&&&&&&&&&&&&&&&&&&&&

// const containerEl = document.querySelector(`.js-container`);
// containerEl.addEventListener(`click`, onContainerClick);

// function onContainerClick(evt) {
//   if(evt.target.nodeName !== `BUTTON`) {
//     return;
//   }

//   console.log(evt.target.textContent);
// }


// -------------------------------------------------------------------
/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

// ВЫБОР ОДНОГО ИЗ МНОЖЕСТВА____________________________________________

// const containerEl = document.querySelector('.js-container');
// let currentBtn = null;

// containerEl.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   // console.log(evt.target.textContent);

//   const activeBtnEl = document.querySelector(`.actibe_btn`);

// if(activeBtnEl) {
//   activeBtnEl.classList.remove(`actibe_btn`);

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add(`actibe_btn`);
//   currentBtn = nextActiveBtn.dataset.value;
//   console.log(currentBtn); // НЕ РАБОТАЕТ ((((((
// }
// }

/*
 * Код добавления кнопок
 */

// const addBtnEl = document.querySelector(`.js-add-btn`);

// addBtnEl.addEventListener(`click`, onAddBtnClick);
// let numberOfCounter = 7;
// function onAddBtnClick() {
//   const newBtn = document.createElement(`button`);
//   newBtn.type = "button";
//   newBtn.class = "new-button";
//   newBtn.textContent = `Кнопка ${numberOfCounter}`;

//   containerEl.appendChild(newBtn);
//   numberOfCounter += 1;
// }
// -------------------------------------------------------
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }

// ВЫБОР МНОЖЕСТВА ИЗ МНОЖЕСТВА_______________________________

// const containerEl = document.querySelector('.js-container');
// let currentBtnArr = new Set();

// containerEl.addEventListener('click', onClick);

// function onClick(evt) {

//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   console.log(evt.target.textContent);

// const btn = evt.target;
// const tag = evt.target.dataset.value;


// const activeBtn = btn.classList.contains("active_btn");

// if(activeBtn) {
//   currentBtnArr.delete(tag);
// } else {
//   currentBtnArr.add(tag);
// }

// btn.classList.toggle("active_btn");
// console.log(currentBtnArr);
// }

// -------------------------------------------------------------


// 03-colorpicker.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];


// const palleteContainer = document.querySelector(`.js-palette`);
// const cardsMarkup = createColorCardsMarkup(colors);
// palleteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//     <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `;
//     })
//     .join('');
// } 

// -----------------------------------------------------------------------

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//      <div><div><div> <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div></div></div></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `;
//     })
//     .join('');
// }

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }

// 7.1 АРТЕМ БАРДАЧЕВ -&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// ЗАДАЧА 1 - АРТЕМ БАРДАЧЕВ-КАЛЬКУЛЯТОР -------------------- 

// const formEl = document.querySelector(`.form`);
// const quantityEl = document.querySelector(`.amount`);
// const totalPriceEl = document.createElement(`span`);

// formEl.append(totalPriceEl);
// totalPriceEl.before(`Загальна вартість: `);
// totalPriceEl.after(` грн.`);

// function onFormInput(formEl) {

//   const {elements: {price,quantity}} = formEl;

//   // console.log(price.value, quantity.value);

//   const totalPrice = Number(price.value * quantity.value).toFixed(2);

//   totalPriceEl.innerHTML = totalPrice;
//   quantityEl.innerHTML = quantity.value;
// };

// formEl.addEventListener(`input`, e => {
//   onFormInput(e.currentTarget)
// });

// document.addEventListener(`DOMContentLoaded`, e => {
//   onFormInput(formEl)
// });
// ------------------------------------------------------------

// const form = document.querySelector('.form');
// const quantityRef = document.querySelector('.amount');
// const totalRef = document.createElement('span');

// const imagesContainer = document.querySelector('.images-gallery');

// form.append(totalRef)

// totalRef.before('Загальна вартість: ');
// totalRef.after(' ГРН.');

// const formHandler = (form) => {

//   const {
//     elements: {
//       price,
//       quantity
//     }
//   } = form;

//   const totalPrice = Number(price.value * quantity.value).toFixed(2);

//   totalRef.innerHTML = totalPrice;
//   quantityRef.innerHTML = quantity.value;
// }

// form.addEventListener('input', e => {
//   formHandler(e.currentTarget)
// });

// ЗАДАЧА 2 - АРТЕМ БАРДАЧЕВ - ГАЛЕРЕЯ ------------------------- 
// /** Task 2. Image gallery */

// const images =  [
//   {
//     "title": "Коник стрибунець",
//     "src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg" 
//   },
//   {
//     "title": "Фрукт",
//     "src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
//   },
//   {
//     "title": "Люди",
//     "src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
//   },
//   {
//     "title": "Годиник",
//     "src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg" 
//   },
//   {
//     "title": "Метро",
//     "src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
//   },
//   {
//     "title": "Хмари",
//     "src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
//   },
// ]

// const imagesGalleryEl = document.querySelector(`.images-gallery`);
// console.log(imagesGalleryEl);

// 1. створення картинок в ДОМ-дереві
// images.forEach(({title, src}) => {
//     const newImgEl = document.createElement(`img`);
//     newImgEl.src = src;
//     newImgEl.alt = title;

//     imagesGalleryEl.append(newImgEl);
// });

// 2. робота з модалками в т.ч. добавить visible

// const imageModalOverlayEl = document.querySelector(`.image-modal-overlay`);
// const ModalContantEl = document.querySelector(`.image-modal`);


// imagesGalleryEl.addEventListener(`click`, e => {
//     // console.log(e);
//     // console.log(e.target.nodeName);

//     if(e.target.nodeName === "IMG") {
//         imageModalOverlayEl.classList.add(`visible`);
//         ModalContantEl.innerHTML = e.target.getAttribute(`alt`);
//     }
// });

// 3. убрать visible с модалки

// imageModalOverlayEl.addEventListener(`click`, e => {
//     imageModalOverlayEl.classList.remove(`visible`);
//     });

    // imageModalOverlayEl.addEventListener(`click`, e => {
    //     // console.log(e.target.nodeName); //DIV
    //     if(e.target.nodeName === "DIV") {
    //         imageModalOverlayEl.classList.remove(`visible`);
    //     }
    // });


// -------------------------------------------------------------------


// const imgModal = document.querySelector('.image-modal-overlay');
// const modalContent = document.querySelector('.image-modal');

// images.forEach(({src, title}) => {

//   const imgEl = document.createElement('img');
//   imgEl.src = src;
//   imgEl.alt = title;

//   imagesContainer.append(imgEl)

// });

// imagesContainer.addEventListener('click', e => {
//   if(e.target.nodeName === 'IMG') {
//     modalContent.innerHTML = e.target.getAttribute('alt')
//     imgModal.classList.add('visible')
//   }
// });

// imgModal.addEventListener('click', e => {
//   e.currentTarget.classList.remove('visible')
// })

// document.addEventListener('DOMContentLoaded', e => {
//   formHandler(form)
// })


// 7.2 КОНСПЕКТ Throttle и Debounce - &&&&&&&&&&&&&&&&&&&&&&&&&

// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

// -------------------------------------------------------------

// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//       console.log("Scroll handler call every 300ms");
//     }, 300)
//   );
//  -------------------------------------------------------------

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 00)
// );

//  3 -------------------------------------------------------------

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0,
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );

//  4 -------------------------------------------------------------
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0
// };

// Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// LAZY LOADING ----------------------------------------

// 7.2 РЕПЕТА -lesson-14-chatty-events-and-lazyload---&&&&&&&&&
// 7.2 РЕПЕТА 01-chatty-events.html----------------------------
/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */

// const mouseMoveControlEl = document.querySelector(`.js-coords`);
// console.log(mouseMoveControlEl);

// window.addEventListener(`mousemove`, _.throttle(onMouseMove, 350));
// let moseMoveAmountEvent = 0; 

// function onMouseMove(event) {
//     moseMoveAmountEvent += 1;

//     mouseMoveControlEl.textContent = `
//     Amount mousemoves: ${moseMoveAmountEvent},
//     X: ${event.clientX},
//     Y: ${event.clientY}
//     `;
// }

// ---------------------------------------------------------------
// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', onMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//         Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
//         X: ${event.clientX},
//         Y:${event.clientY}
//     `;
// }

// ---------------------------------------------------------------

/*
 * Input и debounce
 */

// const inputEl = document.querySelector(`.js-input`);
// // console.log(inputEl);
// const outputEl = document.querySelector(`.js-output`);
// // console.log(outputEl);
// let MouseChangeInput = 0;

// inputEl.addEventListener(`input`, _.debounce(onInputChange, 300));

// function onInputChange(e) {
//     MouseChangeInput += 1;
    
//     outputEl.textContent = `
//     Кол-во вызовов onInputChange: ${MouseChangeInput};
//     Значение: ${e.target.value};
//     `;
// }

// ---------------------------------------------------------------

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 300));

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
//     Значение: ${event.target.value}
//   `;
// }

// 7.2 РЕПЕТА 02-search.html--------------------------------

// const allStudents = [
//     "Jayne Kuyper",
//     "Tiesha Laine",
//     "Lupe Olague",
//     "Clarita Bellman",
//     "Laura Munden",
//     "Bertram Calvi",
//     "Georgianna Sparr",
//     "Carolann Seller",
//     "Felicia Midgette",
//     "Kasandra Bezio",
//     "Elias Vanwyk",
//     "Yu Mccool",
//     "Kati Golub",
//     "Pat Dalley",
//     "Loreta Francis",
//     "Beatris Larusso",
//     "Corrin Vancleve",
//     "Sofia Ressler",
//     "Erlene Burke",
//     "Breann Sande",
//     "Samatha Sao",
//     "Henry Say",
//     "Monnie Bernhard",
//     "Dia Culbert",
//     "Sunny Disandro",
//     "Mack Sen",
//     "Jeremiah Astle",
//     "Misha Ono",
//     "Silas Aubry",
//     "Kenya Longmore",
//     "Mirta Brandenberger",
//     "Eneida Overholt",
//     "Marcelo Popejoy",
//     "Serafina Irvin",
//     "Leroy Tacey",
//     "Brice Hedrick",
//     "Elana Hoops",
//     "Keena London",
//     "Enriqueta Hein",
//     "Valeria Turnbull",
//     "Earlean Canchola",
//     "Corinna Tousignant",
//     "Sherry Rivera",
//     "Chasity Janda",
//     "Tamela Barlow",
//     "Leandro Lonergan",
//     "Karlene Breunig",
//     "Winter Endicott",
//     "Salena Nail",
//     "Tanner Clapper",
//   ];
  

// const inputEl = document.querySelector(`.search-box`);
// // console.log(inputEl);
// const studentListEl = document.querySelector(`.student-list`);
// // console.log(studentListEl);

// function makeStudentList(students) {
//     return students.map(student => `<li>${student}</li>`).join("");
// };

// const markup = makeStudentList(allStudents);
// // console.log(markup);
// // studentListEl.innerHTML = markup;
// finishFilterList(allStudents);

// inputEl.addEventListener(`input`, onInputFilter);

// function onInputFilter(e) {
//     console.log(e.target.value);
//     const filter = e.target.value.toLowerCase();

//     const filterItems = allStudents.filter(student => 
//         student.toLowerCase().includes(filter)); 
//     console.log(filterItems);

//     const markup = makeStudentList(filterItems);
//     // studentListEl.innerHTML = markup;
// }   finishFilterList(filterItems);

// function finishFilterList(markup) {
//     studentListEl.innerHTML = markup;
// }
// -----------------------------------------------------------

//   const searchBox = document.querySelector(".search-box");
//   const studentList = document.querySelector(".student-list");
  
//   populateStudentList(allStudents);
  
//   searchBox.addEventListener("input", _.throttle(onSearch, 300));
//   // searchBox.addEventListener('input', _.debounce(onSearch, 150));
  
//   function onSearch() {
//     console.log("onSearch");
//     const filter = searchBox.value.toLowerCase();
//     const visibleStudents = allStudents.filter((student) =>
//       student.toLowerCase().includes(filter)
//     );
//     populateStudentList(visibleStudents);
//   }
  
//   function populateStudentList(students) {
//     const markup = students.map((student) => `<li>${student}</li>`).join("");
//     studentList.innerHTML = markup;
//   }

// 7.2 РЕПЕТА -03-lazy-images.html------------------------------


//  7.2 АРТЕМ БАРДАЧЕВ -&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const scrollAmountEl = document.querySelector(`.scroll-amount`);
// let scrollAmountCounter = 0;


// function onWindowScrollAmount (e) {
//     scrollAmountCounter += 1;
//     scrollAmountEl.textContent = scrollAmountCounter;
// };

// window.addEventListener(`scroll`, _.throttle(onWindowScrollAmount, 1000));

// допрацювання задачі 7.1-------------------------------------------

// const formEl = document.querySelector(`.form`);
// const quantityEl = document.querySelector(`.amount`);
// const totalPriceEl = document.createElement(`span`);

// formEl.append(totalPriceEl);
// totalPriceEl.before(`Загальна вартість: `);
// totalPriceEl.after(` грн.`);

// function onFormInput(formEl) {

//   const {elements: {price,quantity}} = formEl;

//   // console.log(price.value, quantity.value);

//   const totalPrice = Number(price.value * quantity.value).toFixed(2);

//   totalPriceEl.innerHTML = totalPrice;
//   quantityEl.innerHTML = quantity.value;
// };

// formEl.addEventListener(`input`, e => {
//   onFormInput(e.currentTarget)
// });

// document.addEventListener(`DOMContentLoaded`, e => {
//   onFormInput(formEl)
// });

// const inputEl = document.querySelector(`#price`);
// const outputEl = document.querySelector(`.server-amount`);
// let inputCounter = 0;

// inputEl.addEventListener('input', _.debounce(onInputChange, 500));

// function onInputChange(event) {
//   inputCounter += 1;

//   outputEl.textContent = `${event.target.value}`;
}