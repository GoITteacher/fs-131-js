/*
 * Блокова область видимості змінних
 */

// const c = 15;

// if (true) {
//   const a = 5;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//!=========================================

// const a = 100;

// function foo() {
//   const a = 500;
//   const b = 700;
//   console.log(a, b);
// }

// function foo2() {
//   console.log(a);
// }

// function foo3() {
//   const a = 150;

//   if (true) {
//     const a = 800;
//     console.log(a);
//   }
// }

// function sayHello() {
//   const username = 'Vasya';
//   console.log('Hello Vasya');
// }

// function checkUsername() {
//   const username = 'Roman';
// }

//!=========================================

// const balance = 1000;

// function child1() {
//   const balance = 100;
// }

// function child2() {
//   const balance = 250;
// }
// function child3() {
//   console.log(balance);
// }

//!=========================================
// debugger;

// function foo() {
//   const a = 100;
//   const b = 1000;
//   const c = 900;

//   if (true) {
//     const a = 200;

//     if (true) {
//       const a = 300;
//       const c = 500;

//       if (true) {
//         const a = 400;

//         if (true) {
//           const a = 500;

//           if (true) {
//             const a = 600;
//             console.log(a, b, c);
//           }
//         }
//       }
//     }
//   }
// }

// foo();
