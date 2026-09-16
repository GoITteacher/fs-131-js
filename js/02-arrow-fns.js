/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */
//!=========================================

// const x = 10 + 10;
// const y = 20 < 5;
// const arrowFn = (a, b) => {
//   return a + b;
// };
//!=========================================

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => {
//   return a + b + c;
// };

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!=========================================

// const testFn = x1 => {
//   console.log(`Value: ${x}`);
// };

// const sum = (x1, x2) => x1 + x2;

//!=========================================
// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// const arrowFnA = () => {
//   return { a: 5 };
// };

// console.log(arrowFnA());

//!=========================================
/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);

// calc(10, 8, (x, y) => x - y);

// calc(10, 0, function (x) {
//   return x * 2;
// });

// calc(10, 0, x => x * 2);

//!=========================================

// function foo() {
//   console.log(arguments);
// }
// const test = (...args) => {};
