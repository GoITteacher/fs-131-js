/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

//!=========================================

// const promise = new Promise((res, rej) => {
//   console.log('Зберігаю ваше замовлення');

//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       res('Смачного');
//     } else {
//       rej('Вибачайте, почалась повітряна тривога');
//     }
//   }, 300);
// });

//!=========================================

// function onFulfilled() {
//   console.log('Ням ням ням');
//   console.log('Ням ням ням');
//   console.log('Ням ням ням');
//   console.log('Ням ням ням');
//   console.log('Ням ням ням');
// }

// function onRejected() {
//   console.log('Поверніть гроші');
//   console.log('Поверніть гроші');
//   console.log('Поверніть гроші');
//   console.log('Поверніть гроші');
//   console.log('Поверніть гроші');
// }

// promise.then(onFulfilled, onRejected);

//!=========================================

// promise
//   .then(message => {
//     console.log(message);
//     console.log('Ням ням');
//   })
//   .catch(error => {
//     console.log(error);
//     console.log('Поверніть гроші');
//   });

//!=========================================

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

const promise = new Promise((res, rej) => {
  rej(10);
});

promise
  .then(data1 => {
    console.log(data1);
    return data1 * 2;
  })
  .then(data2 => {
    console.log(data2);
    return data2 * 2;
  })
  .then(data3 => {
    console.log(data3);
  })
  .catch(data3 => {
    console.log('error3', data3);
  });

//!=========================================
// promise.then().then().then().catch();

// const arr = [];

// arr.map().filter().filter().map().filter();

//!=========================================

// promise.then(data => {}).catch(err => {});
