/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

//!=========================================
// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((element, index) => {
//   console.log(`${index + 1}) ${element}`);
// });

// function test(elem) {
//   console.log('HELLO WORLD', elem);
// }

// numbers.forEach(test);

/* 
  test(5, 0, numbers)
  test(10, 1, numbers)
  test(15, 2, numbers)
  test(20, 3, numbers)
  test(25, 4, numbers)
*/

//!=========================================

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(elem => {
//   console.log(`Elem - ${elem}`);
// });

// numbers.forEach(i => console.log(i * 2));

//!=========================================

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

function logItems(items) {
  console.log(items);
  items.forEach((item, i) => {
    console.log(`${i + 1} - ${item}`);
  });
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  nameList.forEach((item, idx) => {
    console.log(`${item}: ${phoneList[idx]}`);
  });
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;

//   args.forEach(elem => {
//     total += elem;
//   });

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
