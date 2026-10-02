/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
//!=========================================
// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('input', () => {
//   const password = userName.value;
//   if (password.length < 6) {
//     userName.classList.add('invalid-password');
//   } else {
//     userName.classList.remove('invalid-password');
//   }
// });

//!=========================================

const userName = document.querySelector('.js-user-name');

userName.addEventListener('blur', () => {
  const password = userName.value;
  if (password.length < 6) {
    userName.classList.add('invalid-password');
  } else {
    userName.classList.remove('invalid-password');
  }
});

userName.addEventListener('focus', () => {
  userName.classList.remove('invalid-password');
});

//!=========================================
/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
