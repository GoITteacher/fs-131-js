/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

//!=========================================

// for (let i = 0; i < 100; i += 1) {
//   console.log('Hello world', i);
// }

// for (let i = 50; i > 0; i -= 1) {
//   console.log(i);
// }

//!=========================================

// const str = 'Hello world';

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

//!=========================================

// let i = 0;

// console.log(i++);

/* 
console.log(i);
i+=1
*/

// console.log(++i);

/* 
i+=1
console.log(i);
*/

//!=========================================

// function foo() {
//   console.log('Набери води');
//   console.log('Підійди до грядочки');
//   console.log('Полий грядочку');
// }

//!=========================================

//!=========================================

// let a = 10;

// console.log(a);
// console.log(b);

//!=========================================

// console.log('Before while loop');

// let counter = 0;

// console.log('After while loop');

//!=========================================

// const target = 2500;
// let salary = 1500;

// while (salary < target) {
//   console.log('\n\nА можна мені трохи більшу ЗП');
//   salary += Math.round(Math.random() * 1000);
//   console.log(`Тепер ваша ЗП - ${salary}`);
// }
//!=========================================

// const target = 2500;
// let salary = 1500;

// for (let i = 0; i < 5; i++) {
//   console.log('\n\nА можна мені трохи більшу ЗП');
//   salary += Math.round(Math.random() * 1000);
//   console.log(`Тепер ваша ЗП - ${salary}`);
// }

//!=========================================
// const target = 2500;
// let salary = 3500;

// do {
//   console.log('\n\nА можна мені трохи більшу ЗП');
//   salary += Math.round(Math.random() * 1000);
//   console.log(`Тепер ваша ЗП - ${salary}`);
// } while (salary < target);

// function foo() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 5 === 0) {
//       return;
//     }
//     console.log(i);
//   }
// }
