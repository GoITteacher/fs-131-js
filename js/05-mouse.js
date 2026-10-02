/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', () => {
//   boxRef.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', () => {
//   console.log('mouseleave');
//   boxRef.classList.remove('box--active');
// });

//!=========================================
const child = boxRef.children[0];
child.style.position = 'absolute';

child.addEventListener('mousemove', e => {
  console.log(e);
  const x = e.pageX - 50;
  const y = e.pageY - 50;

  child.style.left = x + 'px';
  child.style.top = y + 'px';
});
