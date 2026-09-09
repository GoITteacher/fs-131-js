/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */
//!=========================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// for (const i in feedback) {
//   console.log(feedback[i]);
// }

// 5 10 3
//!=========================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const i in feedback) {
//   totalFeedback += feedback[i];
// }

// console.log('totalFeedback: ', totalFeedback);

//!=========================================

// const a = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   test: 'Hello',
// };

// const b = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
// };

// for (const i in b) {
//   console.log(i);
// }

//!=========================================
// const keys = feedback;
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);

//!=========================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const arr2 = Object.values(feedback); // [5,10,3]
// for (const item of arr2) {
//   console.log(item);
// }

// const arr1 = Object.keys(feedback); // ['good', 'neutral', 'bad']
// for (const item of arr1) {
//   console.log(item);
// }

// const arr1 = Object.entries(feedback);
// for (const item of arr1) {
//   console.log(item);
// }
