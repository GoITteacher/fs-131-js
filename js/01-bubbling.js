/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

innerChild.addEventListener('click', e => {
  console.log('SILPO', e.currentTarget);
});

child.addEventListener('click', e => {
  console.log('VARUS', e.currentTarget);
});

parent.addEventListener('click', e => {
  console.log('ATB', e.currentTarget);
});
