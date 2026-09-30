/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
//!=========================================

// const magicBtnElem = document.querySelector('.js-magic-btn');
// const spanElem = magicBtnElem.querySelector('span');

// magicBtnElem.textContent = 'Hello world';

// console.dir(magicBtnElem);

// magicBtnElem.style.border = '10px solid red';

//!=========================================

// const liElems = document.querySelectorAll('ul > li');
// for (const item of liElems) {
//   console.log(item);
// }

//!=========================================
/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

//!=========================================

// const ulElem = document.querySelector('ul');

// ulElem.previousElementSibling.firstElementChild.firstElementChild;
// ulElem.nextElementSibling;
// ulElem.parentElement;
// ulElem.firstElementChild;
// ulElem.lastElementChild;

//!=========================================
// const dom = {
//   head: {
//     meta: {},
//     title: {},
//   },
//   body: {
//     div: {
//       p: {
//         textContent: 'Hello world',
//       },
//       button: {},
//     },
//     ul: {
//       li: {},
//     },
//     footer: {
//       h4: {},
//       p: {},
//     },
//   },
// };
