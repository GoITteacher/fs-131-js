/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// function convertTime(hours, minutes) {
//   if (minutes === 0) {
//     console.log(`${hours} г.`);
//   } else {
//     console.log(`${hours} г. ${minutes} хв.`);
//   }
// }
// const hours = 10;
// const minutes = 25;

// convertTime();
// convertTime(10, 0);
// convertTime(10, 55);
//!=========================================

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

function showDeadline(days) {
  if (days === 0) {
    console.log('Today');
  } else if (days === 1) {
    console.log('Tomorrow');
  } else if (days === 2) {
    console.log('Overmorrow');
  } else {
    console.log('Date in the future');
  }
}

showDeadline(5);
showDeadline(3);
showDeadline(2);
showDeadline(1);
showDeadline(0);
