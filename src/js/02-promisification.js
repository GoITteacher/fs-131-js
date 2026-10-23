/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

//!=========================================
// function foo(x, y, q) {
//   const arr = [x, y, q];
//   return arr;
// }

// const arr1 = foo(1,2,3)
// const arr2 = foo(4,5,6)

//!=========================================

// function createPromise(data, delay, isFulfilled) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isFulfilled) {
//         res(data);
//       } else {
//         rej(data);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('Смачного', 1000, true);
// const p2 = createPromise('Повітряна тривога', 3000, false);

// p1.then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// p2.then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

//!=========================================

// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then().catch()

//!=========================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo() {
//   const x = 10;
//   const y = 20;
//   const result = x + y;
//   return Promise.resolve(result);
// }

// foo().then(data => {
//   console.log(data);
// });

//!=========================================

// function createPromise(data, delay, isFulfilled) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isFulfilled) {
//         res(data);
//       } else {
//         rej(data);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('p1', 4000, true);
// const p2 = createPromise('p2', 1000, false);
// const p3 = createPromise('p3', 3000, false);
// const p4 = createPromise('p4', 2000, true);

// const promises = [p1, p2, p3, p4];
//!=========================================
//ЧЕКАЄ ВСІХ , АБО ПЕРШОГО З ПОМИЛКОЮ

// Promise.all(promises).then(result => {
//   console.log(result);
// });

//!=========================================
// Чекає абсолютно всіх і повертає масив результатів
// Promise.allSettled(promises).then(result => {
//   console.log(result);
// });

//!=========================================

// Чекає самого першого не звертаючи уваги з яким результатом
// Promise.race(promises)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//!=========================================
