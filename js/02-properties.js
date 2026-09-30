/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
//!=========================================

//!=========================================
// const imageEl = document.querySelector('.hero__image');
// const randomId = Math.round(Math.random() * 100);
// const url = `https://picsum.photos/200?random=${randomId}&car,Toyota`;
// imageEl.setAttribute('src', url);

// const heroTitleEl = document.querySelector('.hero__title');

//!=========================================

// const images = document.querySelectorAll('ul.js-images img');

// for (const imageElem of images) {
//   const randomId = Math.round(Math.random() * 100);
//   const url = `https://picsum.photos/200?random=${randomId}&car,Toyota`;
//   imageElem.setAttribute('src', url);
// }

//!=========================================
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// const inputElem = document.querySelector('.js-input');
// console.log(inputElem.getAttribute('min'));

// inputElem.setAttribute('type', 'number');
// inputElem.setAttribute('placeholder', 'Test placeholder');

// const btnElem = document.querySelector('button');
// console.log(btnElem);

// btnElem.removeAttribute('disabled');

//!=========================================

/*
 * Data-атрибути
 */

// const actions = document.querySelectorAll('.actions button');
// const firstBtnElem = actions[0];

// firstBtnElem.dataset.hello_hello = 'HELLO WORLD';

// firstBtnElem.getAttribute('data-action');
// console.log(firstBtnElem.dataset);

// console.log(firstBtnElem.dataset.action);
