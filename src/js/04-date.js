/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

//!=========================================

// const date1 = new Date('2022/01/01 10:00:05');
// const date2 = new Date('01/01/2004 10:25:04');
// const date3 = new Date('01.01.2026 10:00');
// const date4 = new Date('01-01-2026 11:25');
// const date5 = new Date('2021-01-01 13:56');
// const date6 = new Date('2025');

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
// console.log(date6);

//!=========================================

// const date = new Date('2021-01-17 13:56');

// console.log(date);
// console.log(date.getDay());

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// date.setFullYear(2020);
// date.setMonth(7);
// date.setDate();
// date.setHours()
// date.setMinutes()
// date.setSeconds()

// console.log(date.toISOString());

// console.log(date);

//!=========================================

// const date1 = new Date('2021-01-17 13:56:00');
// const date2 = new Date('2021-01-17 13:56:05');
// console.log(date2 - date1);

// const date = new Date(5000);

// console.log(date);

//!=========================================

const date1 = new Date();

setInterval(() => {
  const date2 = new Date();
  const diff = date2 - date1;

  console.log(date1.getTime(), date2.getTime(), diff);
}, 1000);
