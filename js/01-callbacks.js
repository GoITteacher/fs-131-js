/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
//!=========================================

// function myDay(dayOfWeek, fn1) {
//   console.log('Прокинутись');
//   console.log(`Зібрати портфель на ${dayOfWeek}`);
//   console.log('Піти до школи');
//   console.log('Повернутись зі школи');
//   fn1();
//   console.log('Зробити уроки');
// }

// function goToMusicSchool() {
//   console.log('Піти до муз школи');
//   console.log('Повернутись з муз школи');
// }

// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись зі школи');
// }

// function goToSchoolGrandMa() {
//   console.log('Піти до бабулі');
//   console.log('Повернутись від бабулі');
// }

// myDay(1, goToMusicSchool);

// myDay(10, goToMusicSchool);
//!=========================================

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   console.log(`A: ${a}`);
//   console.log(`B: ${b}`);

//   const res = callback(a, b);
//   // const res = sum(10,20) - 30

//   console.log(`Res = ${res}`);
// }

// function sum(x1, x2) {
//   return x1 + x2;
// }

// function totalPriceWith10Discount(price, amount) {
//   const total = price * amount;
//   return total * 0.9;
// }

// function testFun(x1, x2) {
//   return x1 * x2 * x2 * x2 * x1 - 10 + 500;
// }

// calc(10, 20, sum);
//
// calc(100, 7, totalPriceWith10Discount);

// calc(2, 3);

// calc(10, 8);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */
//

function each(array, callback) {
  const resArray = [];
  for (const item of array) {
    const result = callback(item);
    resArray.push(result);
  }
  return resArray;
}

each([2, 85, 1, 16, 23, 28], function (x) {
  return x - 1;
});

/* 
decrement(2)
decrement(85)
decrement(1)
decrement(16)
decrement(23)
decrement(28)
*/

//!=========================================

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
