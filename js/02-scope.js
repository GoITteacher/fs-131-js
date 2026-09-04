/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   const a = 20;
//   console.log(a); // 20
//   console.log(globalValue); // 10

//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20
//     console.log(globalValue); // 10

//     if (i === 2) {
//       const r = 50;
//       console.log(r); // 20
//       console.log(a); // 20
//       console.log(globalValue); // 10
//     }
//   }
// }

// debugger;
// foo();

// // ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

//!=========================================

// const t = 10;
// const y = 25;

// function foo() {
//   const r = 25;
//   console.log(r);
// }

// function foo2() {
//   const r = 35;
//   console.log(r);
// }

//!=========================================

// const x = 555;

// function foo() {

// //   if (true) {
// //     const x = 10;
// //   }

//   console.log(x);
// }

// foo();
