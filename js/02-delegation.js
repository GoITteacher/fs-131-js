/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.container');

// container.children[0].addEventListener('click', () => {
//   console.log('RED');
// });
// container.children[1].addEventListener('click', () => {
//   console.log('BLACK');
// });
// container.children[2].addEventListener('click', () => {
//   console.log('GREEN');
// });

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

container.addEventListener('click', e => {
  //   if (e.target === container) {
  //     return;
  //   }

  if (!e.target.classList.contains('js-box')) {
    return;
  }

  const color = e.target.dataset.color;
  console.log(color);
});
