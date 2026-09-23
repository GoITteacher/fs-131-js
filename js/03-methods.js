/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//!=========================================

// const borys = {
//   balance: 500,
//   showBalance() {
//     console.log(this.balance); // borys.balance
//   },
// };

// const vasya = {
//   balance: 250,
// };

// borys.showBalance.apply(vasya); // this = vasya

// borys.showBalance(); // this = borys
// borys.showBalance(); // this = borys

// borys.showBalance.call(vasya); // this = vasya

//!=========================================

// function test(r, g, b, a) {
//   console.log(this);
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// const borys = {
//   name: 'borys',
// };

// const vasya = {
//   name: 'vasya',
// };

// const red = 10;
// const green = 10;
// const blue = 10;
// const alpha = 0.1;
// test.call(vasya, red, green, blue, alpha);

// const rgb = [10, 20, 50, 0.5];
// test.apply(vasya, rgb);

//!=========================================

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

//!=========================================
function changeName(newName) {
  this.name = newName;
}

const borys = {
  name: 'borys',
};

const vasya = {
  name: 'vasya',
};

// const changeBorysName = changeName.bind(borys);
// changeBorysName();
// changeBorysName.call(vasya);

//!=========================================

// 1) win / und
// 3) object
// 5) call | apply
// 7) bind

//!=========================================
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

//!=========================================
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);
//
// changeSweaterColor('red');
// console.log(sweater);

//!=========================================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//!=========================================

// const user1 = {
//   name: 'Vasya',
//   recipe() {
//     console.log('БОРЩ');
//     console.log(`Автор рецепту: ${this.name}`);
//   },
// };

// const user2 = {
//   name: 'Borys',
// };

// const publicRecipe = user1.recipe.bind(user2);

// publicRecipe();

//!=========================================

// function foo() {
//   const x = 10;
//   const y = 20;
//   const q = 30;

//   const copy = y => {
//     // x = 10;
//     console.log(x, y, q);
//   };

//   return copy;
// }

// const copy = foo();

// copy(25);

// const user = {
//   name: 'Borys',
//   copy2: copy,
// };

// user.copy2();

//!=========================================

// function foo() {
//   //this = undefined
//   const arr1 = () => {
//     //this = undefined
//     const arr2 = () => {
//       //this = undefined
//       const arr3 = () => {
//         //this = undefined
//         const arr4 = () => {
//           //this = undefined
//           const arr5 = () => {
//             //this = undefined
//             const arrowFN = () => {
//               //this = undefined
//               console.log(this);
//             };
//           };
//         };
//       };
//     };
//   };
// }

// foo();

//!=========================================

/* 
Для того щоб визначити this

1) Визначаємо тип функції
  - якщо це звичайна - то дивимось момент виклику
  - якщо це стрілчата - то беремо this від бат. функції в момент створення

*/

const test = () => {
  console.log(this);
};

test();
