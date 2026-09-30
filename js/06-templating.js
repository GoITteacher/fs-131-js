/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

// const titleEl = document.querySelector('.title');
//
// titleEl.innerHTML = 'Hello <span>WORLD</span>';

//!=========================================
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

function colorTemplate(item) {
  return `<div class="color-picker__option" style="background-color: ${item.color}"></div>`;
}

function colorsTemplate(items) {
  return items.map(colorTemplate).join('\n\n\n\n');
}

const markup = colorsTemplate(options);

console.log(markup);

//!=========================================
/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const ul = document.querySelector('ul');
ul.innerHTML = markup;
