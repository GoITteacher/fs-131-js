/**
 * Псевдомасив arguments и Array.from
 */

//!=========================================

// function sum() {
//   const args = Array.from(arguments);
//   console.log(args);
// }

// sum(10, 20);

// sum(10, 20, 55, 85, 91);

// sum();

//!=========================================

// function findZero() {
//   const arr = Array.from(arguments);
//   return arr.includes(0);
// }

// console.log(findZero(1, 3, 45, 1, 2, 456, 1));
// console.log(findZero(5, 1, 2, 4, 51, 0, 1, 3, 5));

//!=========================================

// console.log(Math.max(22, 5, 1, 2, 4, 56, 1, 2, 3, 4));

//!=========================================

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 *
 *
 * Напиши функцію для складання чисел в масиві
 *
 */

// function add() {
//   const args = Array.from(arguments);
//   let res = 0;

//   for (const item of args) {
//     res += item;
//   }

//   return res;
// }

// console.log(add(1, 2, 4, 5, 6));
// console.log(add(6));
// console.log(add(6, 1, 23, 4, 1, 1, 2, 2, 2, 3));

//!=========================================
/**
 * Напиши функцію calcAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calcAverage(x1) {
  const arr = Array.from(arguments);
  let res = 0;

  for (const item of arr) {
    res += item;
  }

  const avg = res / arr.length;

  return avg;
}

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2
